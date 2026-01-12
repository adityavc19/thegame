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
        return `
            <div class="artifact-card" data-artifact-id="${artifact.id}">
                <div class="artifact-card-icon">${artifact.model3D}</div>
                <div class="artifact-card-name">${artifact.name}</div>
                <div class="artifact-card-rarity ${artifact.rarity.toLowerCase()}">${artifact.rarity}</div>
            </div>
        `;
    },

    // Open artifact viewer modal with forensic museum UI
    openArtifactViewer(artifactId) {
        const artifact = gameState.getArtifact(artifactId);
        if (!artifact) return; // Skip if artifact doesn't exist
        const modal = document.getElementById('artifact-modal');
        const viewer = document.getElementById('artifact-viewer');

        // Build forensic viewer layout
        viewer.innerHTML = `
            <!-- Forensic Header -->
            <div class="artifact-forensic-header">
                <div>
                    <div class="artifact-case-number">CASE STUDY #${artifact.caseNumber || '001'}</div>
                    <h1 class="artifact-forensic-title">${artifact.forensicTitle || artifact.name}</h1>
                </div>
                <div class="artifact-forensic-meta">
                    <div class="artifact-status">${artifact.status || 'DISCONTINUED'}</div>
                    <div class="artifact-casualties">${artifact.casualties || 'Market Failure'}</div>
                </div>
            </div>

            <!-- 3D Model Container with Hotspots -->
            <div class="artifact-3d-container">
                <div class="artifact-3d-model" id="artifact-3d-model" data-rotation="0">${artifact.model3D}</div>
                ${artifact.hotspots ? artifact.hotspots.map((hotspot, index) => `
                    <div class="artifact-hotspot"
                         data-hotspot-id="${index}"
                         style="top: ${hotspot.y}%; left: ${hotspot.x}%;"
                         title="${hotspot.title}">
                    </div>
                `).join('') : ''}
            </div>

            <!-- Timeline Bar -->
            <div class="artifact-timeline">
                <span class="artifact-timeline-label">Timeline</span>
                <div class="artifact-timeline-bar">
                    <div class="artifact-timeline-progress" style="width: ${artifact.timelineProgress || 10}%"></div>
                </div>
                <div class="artifact-timeline-markers">
                    ${artifact.timelineMarkers ? artifact.timelineMarkers.map(marker => `
                        <div class="artifact-timeline-marker">
                            <span class="artifact-timeline-marker-label">${marker.label}</span>
                            <span class="artifact-timeline-marker-value">${marker.value}</span>
                        </div>
                    `).join('') : ''}
                </div>
            </div>

            <!-- Info Panel (Right Side) -->
            <div class="artifact-info-panel">
                <!-- Overview Section -->
                <div class="artifact-info-section">
                    <h3>Overview</h3>
                    <p>${artifact.description}</p>
                    ${artifact.failureTags ? `
                        <div class="artifact-failure-tags">
                            ${artifact.failureTags.map(tag => `<span class="artifact-failure-tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>

                <!-- Specifications Section -->
                <div class="artifact-info-section">
                    <h3>Technical Specifications</h3>
                    <div class="artifact-specs-grid">
                        ${Object.entries(artifact.stats).map(([label, value]) => `
                            <div class="artifact-spec-item">
                                <div class="artifact-spec-label">${label}</div>
                                <div class="artifact-spec-value">${value}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Historical Context Section -->
                <div class="artifact-info-section">
                    <h3>Historical Context</h3>
                    <p><em>"${artifact.story}"</em></p>
                </div>

                <!-- Unlock Info -->
                <div class="artifact-info-section">
                    <h3>Discovery</h3>
                    <p style="font-size: 0.75rem; color: var(--text-tertiary);">
                        ${artifact.unlockedBy}
                    </p>
                </div>
            </div>

            <!-- Hotspot Detail Panel (Hidden by default) -->
            <div class="artifact-hotspot-detail" id="artifact-hotspot-detail">
                <button class="artifact-hotspot-close" id="artifact-hotspot-close">✕</button>
                <div id="artifact-hotspot-content"></div>
            </div>
        `;

        modal.classList.remove('hidden');

        // Set up 3D model drag rotation
        this.setupModelRotation();

        // Set up hotspot interactions
        this.setupHotspots(artifact);
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

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'artifact-notification';
        notification.innerHTML = `
            <div class="artifact-notification-content">
                <div class="artifact-notification-icon">${artifact.model3D}</div>
                <div class="artifact-notification-text">
                    <div class="artifact-notification-title">Artifact Unlocked!</div>
                    <div class="artifact-notification-name">${artifact.name}</div>
                    <div class="artifact-card-rarity ${artifact.rarity.toLowerCase()}">${artifact.rarity}</div>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);

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
