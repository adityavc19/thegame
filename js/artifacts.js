// ========================================
// AURORA LABS - ARTIFACT SYSTEM
// ========================================

const ArtifactUI = {
    // Update artifact bar
    updateArtifactBar() {
        const count = gameState.unlockedArtifacts.length;
        document.getElementById('artifact-count').textContent = count;

        // Render artifact cards
        this.renderArtifactCards();
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

    // Open artifact viewer modal with forensic museum UI
    openArtifactViewer(artifactId) {
        const artifact = gameState.getArtifact(artifactId);
        if (!artifact) return; // Skip if artifact doesn't exist

        // Track artifact view
        if (window.Analytics) {
            Analytics.trackArtifactView(artifactId, artifact.name);
        }

        const modal = document.getElementById('artifact-modal');
        const viewer = document.getElementById('artifact-viewer');

        // Build simplified viewer
        viewer.innerHTML = `
            <div class="artifact-simple-viewer">
                <button class="artifact-simple-close" id="artifact-simple-close">✕</button>
                <div class="artifact-simple-image">${artifact.model3D}</div>
                <h1 class="artifact-simple-name">${artifact.name}</h1>
                <p class="artifact-simple-tagline">${artifact.forensicTitle || artifact.description}</p>
                <div class="artifact-simple-story">${artifact.story}</div>
            </div>
        `;

        modal.classList.remove('hidden');

        // Close button on card
        document.getElementById('artifact-simple-close').addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Close on backdrop click
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer) modal.classList.add('hidden');
        });
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
            model.style.animation = 'none'; // Stop auto-rotation
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

        // Close on outside click
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

    // Toggle artifact collection modal
    toggleArtifactCollection() {
        const modal = document.getElementById('artifact-modal-collection');
        modal.classList.toggle('hidden');
    },

    // Show new artifact notification
    showNewArtifact(artifactId) {
        const artifact = gameState.getArtifact(artifactId);

        // Track artifact unlock
        if (window.Analytics && artifact) {
            Analytics.trackArtifactUnlock(artifactId, artifact.name);
        }

        // Create compact notification
        const notification = document.createElement('div');
        notification.className = 'artifact-notification';
        notification.innerHTML = `
            <div class="artifact-notification-content">
                <div class="artifact-notification-icon"><i class="ph ph-device-mobile"></i></div>
                <div class="artifact-notification-text">
                    <span class="artifact-notification-title">Unlocked:</span>
                    <span class="artifact-notification-name">${artifact.name}</span>
                </div>
                <button class="artifact-notification-view">View</button>
            </div>
        `;

        document.body.appendChild(notification);

        // View button opens artifact viewer
        const viewBtn = notification.querySelector('.artifact-notification-view');
        viewBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
            this.openArtifactViewer(artifactId);
        });

        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Remove after 6 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 6000);

        // Update artifact count
        this.updateArtifactBar();

        // Animate the artifact button
        const button = document.getElementById('artifact-toggle-btn');
        button.style.animation = 'artifactUnlock 0.8s ease-out';
        setTimeout(() => {
            button.style.animation = '';
        }, 800);
    },

    // Initialize artifact system
    init() {
        // Set up artifact button toggle
        document.getElementById('artifact-toggle-btn').addEventListener('click', () => {
            this.toggleArtifactCollection();
        });

        // Set up collection modal close
        document.getElementById('artifact-collection-close').addEventListener('click', () => {
            document.getElementById('artifact-modal-collection').classList.add('hidden');
        });

        // Close collection modal on outside click
        document.getElementById('artifact-modal-collection').addEventListener('click', (e) => {
            if (e.target.id === 'artifact-modal-collection') {
                document.getElementById('artifact-modal-collection').classList.add('hidden');
            }
        });

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
