// ========================================
// AURORA LABS - ARTIFACT SYSTEM
// ========================================

const ArtifactUI = {
    // Track which artifacts have been seen (opened collection after unlock)
    _seenArtifacts: new Set(),

    // Queue for unlock animations when button is hidden
    _pendingUnlockAnim: false,

    // Current artifact index for viewer navigation
    _currentArtifactIndex: 0,

    // Update artifact bar — show profile notify dot if unseen artifacts
    updateArtifactBar() {
        const dot = document.getElementById('profile-notify-dot');
        const unseenCount = gameState.unlockedArtifacts.filter(id => !this._seenArtifacts.has(id)).length;
        if (dot) {
            if (unseenCount > 0) {
                dot.classList.remove('hidden');
            }
        }
    },

    // Mark all current artifacts as seen
    _markAllSeen() {
        gameState.unlockedArtifacts.forEach(id => this._seenArtifacts.add(id));
        // Only hide dot if no other reason to show it (profile notify handles its own logic)
    },

    // Render artifact cards in collection
    renderArtifactCards() {
        const artifactGrid = document.getElementById('artifact-collection-grid');
        if (!artifactGrid) return;

        artifactGrid.innerHTML = gameState.unlockedArtifacts.map(artifactId => {
            const artifact = gameState.getArtifact(artifactId);
            if (!artifact) return ''; // Skip if artifact doesn't exist
            return this.renderArtifactCard(artifact);
        }).join('');

        // Add click handlers
        artifactGrid.querySelectorAll('.artifact-card').forEach(card => {
            card.addEventListener('click', () => {
                const artifactId = card.dataset.artifactId;
                if (typeof AudioEngine !== 'undefined') AudioEngine.playSfx('cardOpen');
                this.openArtifactViewer(artifactId);
            });
        });
    },

    // Render single artifact card
    renderArtifactCard(artifact) {
        const year = artifact.timelineMarkers && artifact.timelineMarkers[0]
            ? artifact.timelineMarkers[0].value.match(/\d{4}/)?.[0] || ''
            : '';
        const subtitle = artifact.forensicTitle || '';

        return `
            <div class="artifact-card" data-artifact-id="${artifact.id}">
                <div class="artifact-card-thumb">${artifact.model3D}</div>
                <div class="artifact-card-info">
                    <div class="artifact-card-name">${artifact.name}</div>
                    <div class="artifact-card-subtitle">${subtitle}${subtitle && year ? ' · ' : ''}${year}</div>
                    <div class="artifact-card-rarity ${artifact.rarity.toLowerCase()}">${artifact.rarity}</div>
                </div>
            </div>
        `;
    },

    // Open artifact viewer modal with navigation
    openArtifactViewer(artifactId) {
        const artifact = gameState.getArtifact(artifactId);
        if (!artifact) return;

        // Track artifact view
        if (window.Analytics) {
            Analytics.trackArtifactView(artifactId, artifact.name);
        }

        // Find current index in unlocked artifacts
        this._currentArtifactIndex = gameState.unlockedArtifacts.indexOf(artifactId);
        const total = gameState.unlockedArtifacts.length;

        const modal = document.getElementById('artifact-modal');
        const viewer = document.getElementById('artifact-viewer');

        this._renderArtifactViewerContent(artifact, viewer, modal);
        modal.classList.remove('hidden');
    },

    // Render artifact viewer content (reused for navigation)
    _renderArtifactViewerContent(artifact, viewer, modal) {
        const idx = this._currentArtifactIndex;
        const total = gameState.unlockedArtifacts.length;

        viewer.innerHTML = `
            <div class="artifact-simple-viewer">
                <button class="artifact-simple-close" id="artifact-simple-close">✕</button>
                ${total > 1 ? `<div class="artifact-viewer-counter">${idx + 1} / ${total}</div>` : ''}
                <div class="artifact-simple-image">${artifact.model3D}</div>
                <h1 class="artifact-simple-name">${artifact.name}</h1>
                <p class="artifact-simple-tagline">${artifact.forensicTitle || artifact.description}</p>
                <div class="artifact-simple-story">${artifact.story}</div>
            </div>
        `;

        // Navigation arrows
        if (total > 1) {
            if (idx > 0) {
                const prev = document.createElement('button');
                prev.className = 'artifact-nav artifact-nav--prev';
                prev.innerHTML = '<i class="ph ph-caret-left"></i>';
                prev.addEventListener('click', (e) => { e.stopPropagation(); this._navigateArtifact(-1); });
                viewer.appendChild(prev);
            }
            if (idx < total - 1) {
                const next = document.createElement('button');
                next.className = 'artifact-nav artifact-nav--next';
                next.innerHTML = '<i class="ph ph-caret-right"></i>';
                next.addEventListener('click', (e) => { e.stopPropagation(); this._navigateArtifact(1); });
                viewer.appendChild(next);
            }

            // Swipe support
            let touchStartX = 0;
            viewer.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
            viewer.addEventListener('touchend', (e) => {
                const dx = e.changedTouches[0].clientX - touchStartX;
                if (Math.abs(dx) > 60) {
                    if (dx < 0 && idx < total - 1) this._navigateArtifact(1);
                    else if (dx > 0 && idx > 0) this._navigateArtifact(-1);
                }
            }, { passive: true });
        }

        // Close button
        document.getElementById('artifact-simple-close').addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Close on backdrop click
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer) modal.classList.add('hidden');
        });
    },

    // Navigate between artifacts in viewer
    _navigateArtifact(dir) {
        const newIdx = this._currentArtifactIndex + dir;
        if (newIdx < 0 || newIdx >= gameState.unlockedArtifacts.length) return;

        this._currentArtifactIndex = newIdx;
        const artifactId = gameState.unlockedArtifacts[newIdx];
        const artifact = gameState.getArtifact(artifactId);
        if (!artifact) return;

        if (typeof AudioEngine !== 'undefined') AudioEngine.playSfx('cardOpen');

        const modal = document.getElementById('artifact-modal');
        const viewer = document.getElementById('artifact-viewer');
        this._renderArtifactViewerContent(artifact, viewer, modal);
    },

    // Set up drag-to-rotate 3D model
    setupModelRotation() {
        const model = document.getElementById('artifact-3d-model');
        if (!model) return;

        let isDragging = false;
        let startX = 0;
        let currentRotation = 0;

        const handleStart = (e) => {
            isDragging = true;
            startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            currentRotation = parseInt(model.dataset.rotation) || 0;
            model.style.animation = 'none';
        };

        const handleMove = (e) => {
            if (!isDragging) return;
            const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const deltaX = currentX - startX;
            const rotationDelta = deltaX * 0.5;
            const newRotation = currentRotation + rotationDelta;
            model.style.transform = `rotateY(${newRotation}deg)`;
            model.dataset.rotation = newRotation;
        };

        const handleEnd = () => {
            isDragging = false;
        };

        model.addEventListener('mousedown', handleStart);
        model.addEventListener('touchstart', handleStart);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchend', handleEnd);
    },

    // Set up hotspot interactions
    setupHotspots(artifact) {
        if (!artifact.hotspots) return;

        const hotspots = document.querySelectorAll('.artifact-hotspot');
        const detailPanel = document.getElementById('artifact-hotspot-detail');
        const detailContent = document.getElementById('artifact-hotspot-content');
        const closeBtn = document.getElementById('artifact-hotspot-close');

        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', (e) => {
                e.stopPropagation();
                const hotspotId = parseInt(hotspot.dataset.hotspotId);
                const hotspotData = artifact.hotspots[hotspotId];

                detailContent.innerHTML = `
                    <h4>${hotspotData.title}</h4>
                    <p>${hotspotData.description}</p>
                `;

                detailPanel.classList.add('show');
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                detailPanel.classList.remove('show');
            });
        }

        detailPanel.addEventListener('click', (e) => {
            if (e.target === detailPanel) {
                detailPanel.classList.remove('show');
            }
        });
    },

    // Close artifact viewer
    closeArtifactViewer() {
        document.getElementById('artifact-modal').classList.add('hidden');
    },

    // Toggle artifact collection — opens profile modal on Collection tab
    toggleArtifactCollection() {
        const modal = document.getElementById('profile-modal');
        const wasHidden = modal.classList.contains('hidden');
        if (wasHidden) {
            if (typeof UI !== 'undefined') UI.openProfileModal('collection');
        } else {
            // Already open — just switch tab
            if (typeof UI !== 'undefined') UI._switchProfileTab('collection');
        }
    },

    // Show minimal toast when artifact unlocked
    showNewArtifact(artifactId) {
        const artifact = gameState.getArtifact(artifactId);

        // Track artifact unlock
        if (window.Analytics && artifact) {
            Analytics.trackArtifactUnlock(artifactId, artifact.name);
        }

        // Remove any existing toast
        const existing = document.querySelector('.artifact-toast');
        if (existing) existing.remove();

        // Create minimal toast
        const toast = document.createElement('div');
        toast.className = 'artifact-toast';
        toast.innerHTML = `
            <i class="ph ph-device-mobile"></i>
            <span>${artifact.name}</span>
            <i class="ph ph-arrow-right artifact-toast-arrow"></i>
        `;

        document.body.appendChild(toast);

        // Tap opens collection tab
        toast.addEventListener('click', () => {
            toast.classList.remove('artifact-toast--show');
            setTimeout(() => toast.remove(), 300);
            this.toggleArtifactCollection();
        });

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.add('artifact-toast--show');
        });

        // Auto-dismiss after 4 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.remove('artifact-toast--show');
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);

        // Update artifact bar
        this.updateArtifactBar();
    },

    // Initialize artifact system
    init() {
        // Set up artifact viewer modal close
        document.getElementById('artifact-modal-close').addEventListener('click', () => {
            this.closeArtifactViewer();
        });

        // Close viewer modal on outside click
        document.getElementById('artifact-modal').addEventListener('click', (e) => {
            if (e.target.id === 'artifact-modal') {
                this.closeArtifactViewer();
            }
        });

        // Initial render
        this.updateArtifactBar();
    }
};
