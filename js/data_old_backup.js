// ========================================
// AURORA LABS - SCENARIO DATA
// Microsoft-Nokia Mobile Strategy (2007-2015)
// ========================================

const scenarioData = {
    id: "msft-nokia-mobile",
    title: "Microsoft-Nokia Mobile Strategy",
    period: "2007-2015",

    initialMetrics: {
        date: "JAN 2007",
        ceo: "S. Ballmer",
        cash: 32.0,
        stock: 29.80,
        marketShare: 42,
        morale: "neutral"
    },

    // Artifacts (Unlockable collectibles)
    artifacts: {
        "iphone-2g": {
            id: "iphone-2g",
            name: "Apple iPhone (2007)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "Viewing market analysis during first decision",

            // Forensic Museum Data
            caseNumber: "001",
            forensicTitle: "Project Purple - The Catalyst of Mobile Revolution",
            status: "MARKET DISRUPTOR",
            casualties: "Industry Reset",

            description: "The device that changed everything. Announced January 9, 2007 by Steve Jobs.",
            model3D: '<img src="assets/images/iphone-2007.jpg" alt="Apple iPhone 2007" />',

            // Timeline Data
            timelineProgress: 95,
            timelineMarkers: [
                { label: "Launch", value: "Jun 2007" },
                { label: "First Year", value: "6.1M units" },
                { label: "Market Impact", value: "Industry Pivot" }
            ],

            // Interactive Hotspots
            hotspots: [
                {
                    x: 45,
                    y: 30,
                    title: "Capacitive Touchscreen",
                    description: "Revolutionary multi-touch interface eliminated the need for a stylus. Pinch-to-zoom and smooth scrolling set new standard for mobile interaction."
                },
                {
                    x: 45,
                    y: 65,
                    title: "Mobile Safari",
                    description: "First truly functional mobile web browser. Rendered full desktop websites, making mobile internet actually usable for the first time."
                },
                {
                    x: 30,
                    y: 45,
                    title: "Visual Voicemail",
                    description: "Non-linear voicemail access changed how people interacted with phone messages. Small innovation with massive UX impact."
                }
            ],

            // Success/Failure Analysis Tags
            failureTags: null, // Success story

            stats: {
                "Launch Date": "June 29, 2007",
                "Units Sold": "6.1 million (first year)",
                "Starting Price": "$499 (4GB) / $599 (8GB)",
                "Market Share": "2% → 8% (Year 1)",
                "Screen": "3.5\" multi-touch capacitive",
                "Innovation": "First capacitive touchscreen smartphone"
            },

            story: "Steve Jobs called it 'a revolutionary product that changes everything.' He wasn't exaggerating. The iPhone's multi-touch interface, mobile Safari, and visual voicemail set a new standard that forced the entire industry to pivot. Competitors who dismissed it as 'expensive and niche' would watch their market share evaporate within 24 months."
        },
        "windows-mobile-6": {
            id: "windows-mobile-6",
            name: "Windows Mobile 6.0",
            category: "Platform",
            rarity: "Common",
            unlockedBy: "Choosing to stay the course",

            // Forensic Museum Data
            caseNumber: "002",
            forensicTitle: "Windows Mobile 6.0 - The Legacy Platform Trap",
            status: "DISCONTINUED",
            casualties: "42% → 3% Market Share (2007-2012)",

            description: "Microsoft's enterprise-focused mobile platform. Dominant but aging.",
            model3D: "📲",

            // Timeline Data
            timelineProgress: 15,
            timelineMarkers: [
                { label: "Peak", value: "42% share" },
                { label: "Decline", value: "2007-2010" },
                { label: "End", value: "2012" }
            ],

            // Interactive Hotspots
            hotspots: [
                {
                    x: 50,
                    y: 40,
                    title: "Stylus-Based Interface",
                    description: "Built for resistive touchscreens requiring a stylus. When iPhone proved capacitive touch was the future, this entire interaction model became obsolete overnight."
                },
                {
                    x: 35,
                    y: 55,
                    title: "Legacy Architecture",
                    description: "Windows CE kernel from 1996. Incremental updates couldn't match ground-up modern OS designs from Apple and Google."
                },
                {
                    x: 65,
                    y: 55,
                    title: "Licensing Model",
                    description: "$15-25 per device fee worked when Microsoft had monopoly. Collapsed when Android offered free alternative."
                }
            ],

            // Failure Analysis Tags
            failureTags: ["Legacy Architecture", "Wrong Input Model", "Licensing Vulnerability", "Too Slow to Pivot"],

            stats: {
                "Release Date": "February 12, 2007",
                "Market Share": "42% (early 2007)",
                "OEM Partners": "HTC, Samsung, Motorola, HP",
                "Licensing Fee": "$15-25 per device",
                "Revenue": "$1.2B annually",
                "Key Strength": "Enterprise Exchange integration"
            },

            story: "Windows Mobile dominated the enterprise smartphone market with its stylus-based interface and deep Microsoft Office integration. But it was built for a pre-touch world, and that foundation would prove nearly impossible to modernize quickly enough. By the time Windows Phone 7 launched in 2010, the market had moved on."
        },
        "htc-touch": {
            id: "htc-touch",
            name: "HTC Touch",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Choosing to build consumer platform",

            // Forensic Museum Data
            caseNumber: "003",
            forensicTitle: "HTC Touch - The Bandaid Solution",
            status: "MARKET FAILURE",
            casualties: "2.5M units (vs 6.1M iPhone)",

            description: "HTC's attempt to add touch capabilities to Windows Mobile.",
            model3D: "📱",

            // Timeline Data
            timelineProgress: 25,
            timelineMarkers: [
                { label: "Launch", value: "Jun 2007" },
                { label: "Sales", value: "2.5M units" },
                { label: "Obsolete", value: "2009" }
            ],

            // Interactive Hotspots
            hotspots: [
                {
                    x: 50,
                    y: 35,
                    title: "Resistive Touchscreen",
                    description: "Required pressure to work. Finger-friendly in theory, but couldn't match capacitive multi-touch. The hardware choice doomed the product."
                },
                {
                    x: 50,
                    y: 60,
                    title: "TouchFLO Layer",
                    description: "Clever software layer over Windows Mobile. But lipstick on a pig—underlying OS still designed for stylus."
                }
            ],

            // Failure Analysis Tags
            failureTags: ["Wrong Touch Technology", "Lipstick on a Pig", "Too Little Too Late"],

            stats: {
                "Launch Date": "June 5, 2007",
                "Units Sold": "2.5 million",
                "Price": "$499",
                "OS": "Windows Mobile 6 + TouchFLO",
                "Screen": "2.8\" resistive touch",
                "Innovation": "Finger-friendly overlay on Windows Mobile"
            },

            story: "HTC tried to bridge the gap with TouchFLO, a finger-friendly interface layer over Windows Mobile. It was clever engineering, but a resistive touchscreen and underlying stylus-based OS couldn't match the iPhone's capacitive touch experience. You can't build a modern car by putting a new body on a horse cart."
        },
        "android-beta": {
            id: "android-beta",
            name: "Android Beta SDK",
            category: "Platform",
            rarity: "Epic",
            unlockedBy: "Reading Google competitive intelligence",

            // Forensic Museum Data
            caseNumber: "004",
            forensicTitle: "Android - The Business Model Killer",
            status: "MARKET DOMINATOR",
            casualties: "Microsoft's $1.2B Mobile Revenue",

            description: "Google's open-source mobile OS. Free to manufacturers. Existential threat.",
            model3D: "🤖",

            // Timeline Data
            timelineProgress: 90,
            timelineMarkers: [
                { label: "Announced", value: "Nov 2007" },
                { label: "Launch", value: "0.5% share" },
                { label: "Dominance", value: "68% by 2012" }
            ],

            // Interactive Hotspots
            hotspots: [
                {
                    x: 50,
                    y: 30,
                    title: "Free & Open Source",
                    description: "$0 licensing cost destroyed Microsoft's $15-25 per device revenue model. OEMs had no reason to pay for Windows Mobile."
                },
                {
                    x: 35,
                    y: 55,
                    title: "Google Services Integration",
                    description: "Google didn't need OS revenue. They wanted mobile search, maps, and ad dominance. Android was a Trojan horse for Google's real business."
                },
                {
                    x: 65,
                    y: 55,
                    title: "Open Handset Alliance",
                    description: "34 partners including HTC, Samsung, Motorola. Created ecosystem momentum before first device shipped."
                }
            ],

            // Success/Failure Analysis Tags
            failureTags: null, // Success story

            stats: {
                "Announcement": "November 5, 2007",
                "Open Handset Alliance": "34 partners",
                "Licensing Cost": "$0 (open source)",
                "First Device": "T-Mobile G1 (Sept 2008)",
                "Market Share 2008": "0.5%",
                "Market Share 2012": "68.1%"
            },

            story: "Google's Android announcement changed the game. By offering a free, modern mobile OS, Google eliminated Microsoft's licensing revenue model overnight. More importantly, it gave OEMs a competitive alternative that cost them nothing. Google didn't need to make money on the OS—they wanted mobile search and advertising dominance. Android was the vehicle."
        },
        "blackberry-curve": {
            id: "blackberry-curve",
            name: "BlackBerry Curve 8300",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Considering acquisition strategy",

            // Forensic Museum Data
            caseNumber: "005",
            forensicTitle: "BlackBerry Curve - The Last Keyboard Standing",
            status: "TEMPORARY SUCCESS",
            casualties: "20% → 0.1% Share (2008-2016)",

            description: "RIM's consumer-focused smartphone. Peak BlackBerry.",
            model3D: "📱",

            // Timeline Data
            timelineProgress: 40,
            timelineMarkers: [
                { label: "Peak", value: "20% share" },
                { label: "Best Seller", value: "2007-2008" },
                { label: "Collapse", value: "2010-2016" }
            ],

            // Interactive Hotspots
            hotspots: [
                {
                    x: 50,
                    y: 35,
                    title: "Physical QWERTY",
                    description: "Best mobile keyboard ever made. But keyboards required small screens. When screen size became competitive advantage, keyboards became liability."
                },
                {
                    x: 50,
                    y: 60,
                    title: "BBM Messaging",
                    description: "BlackBerry Messenger was unbeatable—until WhatsApp, iMessage, and Telegram made messaging platform-agnostic."
                }
            ],

            // Failure Analysis Tags
            failureTags: ["Keyboard Dependency", "Small Screen Trap", "Slow to Touch", "Walled Garden"],

            stats: {
                "Launch Date": "August 27, 2007",
                "Units Sold": "8 million+ (first year)",
                "Price": "$199 with contract",
                "Market Share": "RIM 11% → 20% (2008)",
                "Key Feature": "Physical QWERTY + trackball",
                "Status": "Best-selling smartphone of 2007-2008"
            },

            story: "While Microsoft debated consumer pivots, RIM's BlackBerry Curve became the best-selling smartphone of 2007-2008. It proved physical keyboards still had appeal, but RIM would face the same existential crisis as Microsoft when touch became dominant. They just had 18 more months before the cliff."
        },
        "nokia-n95": {
            id: "nokia-n95",
            name: "Nokia N95",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Exploring Nokia partnership",

            // Forensic Museum Data
            caseNumber: "006",
            forensicTitle: "Nokia N95 - Hardware Excellence, Software Failure",
            status: "MARKET LEADER DETHRONED",
            casualties: "40% → 3% Share (2007-2013)",

            description: "Nokia's flagship. Camera, GPS, WiFi. Everything but modern OS.",
            model3D: "📱",

            // Timeline Data
            timelineProgress: 20,
            timelineMarkers: [
                { label: "Peak", value: "40% global" },
                { label: "iPhone Launch", value: "2007" },
                { label: "Collapse", value: "2010-2013" }
            ],

            // Interactive Hotspots
            hotspots: [
                {
                    x: 50,
                    y: 25,
                    title: "Feature Superiority",
                    description: "5MP camera, GPS, WiFi, 3G—technically superior to iPhone on paper. But specs don't matter if software experience is poor."
                },
                {
                    x: 50,
                    y: 60,
                    title: "Symbian OS Complexity",
                    description: "Symbian was powerful but required 50+ clicks to change ringtone. Developer-hostile, fragmented across device lines. Internal politics prevented modernization."
                }
            ],

            // Failure Analysis Tags
            failureTags: ["Software Neglect", "Internal Politics", "Feature Checklist Fallacy", "Developer Hostile"],

            stats: {
                "Launch Date": "March 2007",
                "Units Sold": "7 million+",
                "Price": "$699 unlocked",
                "Market Share": "Nokia 40% (global)",
                "Features": "5MP camera, GPS, WiFi, 3G",
                "OS": "Symbian S60 v3.1"
            },

            story: "The Nokia N95 was a feature-packed powerhouse—5MP camera, GPS, WiFi, 3G. It had everything except a modern operating system. Nokia's Symbian OS was powerful but complex, and the company's internal politics prevented rapid modernization. They learned too late that user experience beats feature checklists."
        }
    },

    // Information Sources (Cards)
    informationSources: {
        "market-report-1": {
            id: "market-report-1",
            type: "Market Report",
            title: "Gartner Mobile Market Analysis",
            date: "June 2007",
            source: "Gartner Research",
            quality: "high",
            visual: "📊",
            summary: "iPhone launch fundamentally disrupts existing mobile paradigms. Traditional smartphone manufacturers face existential challenges.",
            content: `
                <h3>EXECUTIVE SUMMARY</h3>
                <p>Apple's iPhone announcement represents a category-defining moment in mobile computing. The combination of capacitive touchscreen, mobile internet, and unified user experience sets a new standard that will force industry realignment.</p>

                <h3>KEY FINDINGS</h3>
                <ul>
                    <li>iPhone's user experience is 3-5 years ahead of current competition</li>
                    <li>Traditional keyboard-based smartphones will face rapid commoditization</li>
                    <li>Software platforms will become more important than hardware specs</li>
                    <li>Consumer segment will drive enterprise adoption (consumerization of IT)</li>
                </ul>

                <h3>MARKET IMPACT</h3>
                <p>We project iPhone will capture 5-8% market share within 18 months, primarily from high-end smartphone segment. Windows Mobile's current 42% share is vulnerable to erosion as carriers seek differentiated offerings.</p>

                <p><strong>Recommendation:</strong> Immediate platform modernization required to remain competitive in post-iPhone market.</p>
            `,
            conflicts: ["Nokia expects keyboards to remain dominant through 2010"]
        },

        "board-memo-1": {
            id: "board-memo-1",
            type: "Internal Memo",
            title: "Board Strategy Session Notes",
            date: "January 2007",
            source: "Microsoft Board",
            quality: "high",
            visual: "📋",
            summary: "Board expresses concern about consumer perception and demands immediate response to iPhone. Enterprise vs consumer tension evident.",
            content: `
                <h3>Microsoft Corporation - Board Meeting Minutes</h3>
                <p class="metadata">Date: January 15, 2007 | Classification: Internal</p>

                <h3>AGENDA ITEM: Apple iPhone Response</h3>

                <p><strong>Present:</strong> S. Ballmer (CEO), B. Gates (Chairman), Windows Mobile leadership</p>

                <p><strong>Discussion Summary:</strong></p>
                <p>Board members raised significant concerns regarding Apple's iPhone announcement and Microsoft's mobile strategy positioning. Key tensions emerged:</p>

                <ul>
                    <li><strong>Consumer Perception:</strong> iPhone generates massive consumer excitement while Windows Mobile seen as "enterprise only"</li>
                    <li><strong>Innovation Gap:</strong> Touch interface and app ecosystem represent clear technical advantages</li>
                    <li><strong>Strategic Dilemma:</strong> Pivot to consumer risks alienating enterprise customers; staying course risks market irrelevance</li>
                </ul>

                <p><strong>Ballmer Position:</strong> "There's no chance that the iPhone is going to get any significant market share. No chance. It's a $500 subsidized item." Recommends staying focused on enterprise strength.</p>

                <p><strong>Gates Concern:</strong> Software platform ecosystems will define next decade. Questions whether Windows Mobile architecture can compete long-term.</p>

                <p><strong>Action Required:</strong> Develop comprehensive response strategy within 30 days. Board split on consumer vs enterprise focus.</p>
            `,
            conflicts: []
        },

        "press-coverage-1": {
            id: "press-coverage-1",
            type: "Press Coverage",
            title: "TechCrunch: iPhone Changes Everything",
            date: "January 2007",
            source: "TechCrunch",
            quality: "medium",
            visual: "📰",
            summary: "Tech press declares iPhone a revolutionary product. Microsoft and Nokia mentioned as 'dinosaurs' facing extinction.",
            content: `
                <h3>Apple's iPhone: The Device That Will Change Mobile Forever</h3>
                <p class="metadata">By Michael Arrington | January 9, 2007</p>

                <p>Steve Jobs just changed everything. The iPhone isn't just a phone—it's a handheld computer that happens to make calls.</p>

                <p>Walking out of the Macworld keynote, the future is clear: Microsoft, Nokia, and RIM are in serious trouble. Their keyboard-based devices suddenly look ancient. Their clunky interfaces feel like using Windows 95.</p>

                <h3>What Makes iPhone Different</h3>
                <ul>
                    <li>Multi-touch interface that actually works</li>
                    <li>Real web browsing (full Safari, not mobile crippled version)</li>
                    <li>Visual voicemail, intelligent SMS, unified experience</li>
                    <li>iTunes ecosystem advantage</li>
                </ul>

                <p>The question isn't whether iPhone will succeed—it's how fast the current leaders will collapse. Windows Mobile looks particularly vulnerable with its stylus-based interface and enterprise-only focus.</p>

                <p><strong>Prediction:</strong> Within 3 years, iPhone and its imitators will own 60%+ of the smartphone market. Microsoft and Nokia will either radically reinvent themselves or fade into irrelevance.</p>
            `,
            conflicts: ["Gartner predicts slower 5-8% adoption"]
        },

        "technical-spec-1": {
            id: "technical-spec-1",
            type: "Technical Spec",
            title: "Windows Mobile 6.0 Capabilities",
            date: "Q4 2006",
            source: "Microsoft Engineering",
            quality: "high",
            visual: "⚙️",
            summary: "Current Windows Mobile architecture built for stylus input. Touch optimization would require 18+ month rebuild.",
            content: `
                <h3>Windows Mobile 6.0 - Technical Architecture Review</h3>
                <p class="metadata">Engineering Assessment | December 2006</p>

                <h3>CURRENT CAPABILITIES</h3>
                <ul>
                    <li>Stylus-optimized interface (3-5mm touch targets)</li>
                    <li>Desktop Windows CE core (robust but heavy)</li>
                    <li>Enterprise integration (Exchange, VPN, security)</li>
                    <li>Hardware keyboard dependency for input</li>
                    <li>Carrier customization framework</li>
                </ul>

                <h3>TOUCH INTERFACE ASSESSMENT</h3>
                <p><strong>Current Limitations:</strong></p>
                <ul>
                    <li>UI framework designed for precise stylus input, not finger touch</li>
                    <li>Minimum touch target: 3mm (industry moving to 7-9mm for fingers)</li>
                    <li>Scrolling, zooming, multi-touch: not supported in current architecture</li>
                    <li>App ecosystem built around stylus paradigm</li>
                </ul>

                <h3>MODERNIZATION OPTIONS</h3>

                <p><strong>Option A: Incremental Updates</strong></p>
                <p>Timeline: 6-9 months | Risk: Low | Impact: Minimal<br>
                Add basic touch support to existing framework. Maintains compatibility but doesn't address fundamental UX gap.</p>

                <p><strong>Option B: Platform Rebuild (Project Photon)</strong></p>
                <p>Timeline: 18-24 months | Risk: High | Cost: $500M+<br>
                Ground-up rebuild with modern touch-first architecture. Breaks compatibility with existing apps and devices.</p>

                <p><strong>Engineering Recommendation:</strong> Option B required for long-term competitiveness, but represents massive investment with execution risk.</p>
            `,
            conflicts: []
        },

        "financial-data-1": {
            id: "financial-data-1",
            type: "Financial Data",
            title: "Windows Mobile P&L Statement",
            date: "FY 2006",
            source: "Microsoft Finance",
            quality: "high",
            visual: "💰",
            summary: "Windows Mobile generates $1.2B revenue with strong margins. Enterprise licensing highly profitable.",
            content: `
                <h3>Windows Mobile Financial Performance</h3>
                <p class="metadata">Fiscal Year 2006 | Internal</p>

                <h3>REVENUE BREAKDOWN</h3>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr style="border-bottom: 1px solid #4A4A4A;">
                        <td style="padding: 8px;"><strong>Category</strong></td>
                        <td style="padding: 8px; text-align: right;"><strong>Amount</strong></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">OEM Licensing</td>
                        <td style="padding: 8px; text-align: right;">$780M</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Enterprise CALs</td>
                        <td style="padding: 8px; text-align: right;">$320M</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Developer Tools</td>
                        <td style="padding: 8px; text-align: right;">$100M</td>
                    </tr>
                    <tr style="border-top: 1px solid #4A4A4A;">
                        <td style="padding: 8px;"><strong>Total Revenue</strong></td>
                        <td style="padding: 8px; text-align: right;"><strong>$1.2B</strong></td>
                    </tr>
                </table>

                <p><strong>Operating Margin:</strong> 68% (exceptionally high due to licensing model)</p>
                <p><strong>R&D Investment:</strong> $180M annually</p>

                <h3>STRATEGIC CONSIDERATIONS</h3>
                <p>Windows Mobile's profitability stems from:</p>
                <ul>
                    <li>OEM licensing fees ($15-25 per device)</li>
                    <li>Enterprise server integration (Exchange, etc.)</li>
                    <li>Low marketing spend (OEM-driven go-to-market)</li>
                </ul>

                <p><strong>Consumer Pivot Risk Analysis:</strong></p>
                <p>Shifting to consumer focus would require:</p>
                <ul>
                    <li>$500M+ platform rebuild investment</li>
                    <li>$200M+ annual marketing spend (vs current $30M)</li>
                    <li>Margin compression as consumer devices have lower ASPs</li>
                    <li>Risk of alienating profitable enterprise channel</li>
                </ul>

                <p><strong>Financial Recommendation:</strong> Consumer pivot represents short-term margin compression for uncertain long-term positioning.</p>
            `,
            conflicts: []
        },

        "competitor-intel-1": {
            id: "competitor-intel-1",
            type: "Competitive Intelligence",
            title: "Google Android Acquisition Memo",
            date: "August 2005",
            source: "Strategic Intelligence",
            quality: "medium",
            visual: "🔍",
            summary: "Google quietly acquired Android Inc. for $50M. Purpose unclear but concerning given Google's web dominance.",
            content: `
                <h3>Competitive Intelligence Report: Google Mobile Activities</h3>
                <p class="metadata">August 2005 | Classification: Confidential</p>

                <h3>KEY TRANSACTION</h3>
                <p>Google acquired Android Inc. (startup founded by Andy Rubin, ex-Apple engineer) for approximately $50M in July 2005. Deal received minimal press coverage.</p>

                <h3>ANDROID INC. BACKGROUND</h3>
                <ul>
                    <li>Founded 2003 by Andy Rubin, Rich Miner, Nick Sears, Chris White</li>
                    <li>Focus: Linux-based mobile OS platform</li>
                    <li>Reported to have demo OS running on prototype devices</li>
                    <li>Philosophy: Open-source, carrier-neutral platform</li>
                </ul>

                <h3>STRATEGIC IMPLICATIONS</h3>
                <p><strong>Why This Matters:</strong></p>
                <ul>
                    <li>Google entering mobile OS space (previously focused on mobile search partnerships)</li>
                    <li>Open-source approach could undercut Windows Mobile licensing model</li>
                    <li>Google's web services (Search, Gmail, Maps) give integration advantages</li>
                    <li>Timing suggests response to mobile becoming internet access point</li>
                </ul>

                <p><strong>Uncertainty Factors:</strong></p>
                <ul>
                    <li>No public product announcements yet</li>
                    <li>Google has no hardware/OS distribution experience</li>
                    <li>Carriers may resist Google control over mobile experience</li>
                    <li>Timeline to market unknown (2-3 years minimum?)</li>
                </ul>

                <p><strong>Assessment:</strong> Long-term strategic threat but unlikely to impact market before 2008-2009. Monitor closely but not immediate concern compared to iPhone.</p>
            `,
            conflicts: []
        }
    },

    // Decision Points
    decisionPoints: [
        {
            id: "d1-iphone-response",
            type: "decision",
            date: "JAN 2007",
            timeMarker: "JAN 2007",
            title: "The Crisis",
            storyImage: '<img src="assets/images/iphone-2007.jpg" alt="Apple iPhone 2007" />',
            storyText: `Apple has announced the iPhone at Macworld 2007. Steve Jobs has reinvented the mobile phone with a touchscreen interface, visual voicemail, and a claim that it's "five years ahead of any other phone."

            The tech press is declaring it revolutionary. Your board is demanding an immediate response. Windows Mobile currently holds 42% market share with strong enterprise positioning, but the iPhone's consumer appeal is undeniable.

            Your engineering team says matching iPhone's touch experience would require 18+ months and $500M. Your sales team warns that a consumer pivot could alienate enterprise customers. Your CFO notes that Windows Mobile is highly profitable as-is.`,

            objective: "Respond to iPhone Launch",

            availableInfo: ["market-report-1", "board-memo-1", "press-coverage-1", "technical-spec-1", "financial-data-1"],

            options: [
                {
                    id: "stay-course",
                    title: "Stay the Course",
                    description: "Focus on enterprise strength and keyboard-based devices. Let Apple have the consumer segment.",
                    risk: "Market share erosion as consumer devices influence enterprise adoption (consumerization of IT)",
                    upside: "Maintain profitable core, avoid expensive platform rebuild, preserve enterprise relationships",
                    cost: null,
                    consequences: {
                        immediate: {
                            cash: 0,
                            stock: -1.2,
                            marketShare: 0,
                            morale: "neutral",
                            unlockedArtifacts: ["windows-mobile-6", "iphone-2g"],
                            narrative: `Microsoft doubles down on enterprise. Ballmer publicly dismisses iPhone as expensive and niche. Engineering continues Windows Mobile 6.5 incremental updates.

                            Board is divided—enterprise-focused directors support the decision, but consumer-oriented board members express concern about ceding entire market segment to Apple.

                            Meanwhile, carriers begin conversations with Apple about exclusive iPhone deals, seeing it as way to differentiate from commodity smartphone market.`
                        },
                        delayed: {
                            date: "Q4 2007",
                            cash: -0.2,
                            stock: -2.5,
                            marketShare: -5,
                            morale: "concerned",
                            narrative: "iPhone captures 8% market share in first year. More concerning: enterprise IT departments report employees demanding iPhone support. The 'consumerization of IT' trend is real."
                        }
                    }
                },
                {
                    id: "build-consumer",
                    title: "Build Consumer Platform",
                    cost: "$500M",
                    description: "Launch Project Photon: ground-up rebuild of Windows Mobile for touch-first consumer experience.",
                    risk: "18-month development timeline while market moves; execution risk on unproven architecture; enterprise customer confusion",
                    upside: "Modern platform competitive with iPhone; maintain relevance in consumer segment; future-proof architecture",
                    consequences: {
                        immediate: {
                            cash: -0.5,
                            stock: -0.8,
                            marketShare: 0,
                            morale: "optimistic",
                            unlockedArtifacts: ["htc-touch", "iphone-2g"],
                            narrative: `Microsoft commits $500M to Project Photon—a ground-up rebuild of Windows Mobile for touch-first experience. Engineering teams are energized by the consumer challenge and modern architecture.

                            However, sales teams worry about the 18-month gap before new platform ships. Enterprise customers receive mixed messages about Windows Mobile roadmap.

                            Press coverage is cautiously optimistic: "Microsoft Finally Gets Serious About Consumer Mobile." Stock dips slightly on R&D investment announcement.`
                        },
                        delayed: {
                            date: "Q4 2007",
                            cash: -0.8,
                            stock: -1.5,
                            marketShare: -3,
                            morale: "mixed",
                            narrative: "Project Photon behind schedule—touch interface harder than expected. Meanwhile, iPhone grows to 8% share. Worse: Google announces Android with OEM partners including HTC and Samsung."
                        }
                    }
                },
                {
                    id: "acquire-capabilities",
                    title: "Acquire Mobile Expertise",
                    cost: "$2B",
                    description: "Acquire Palm or RIM to instantly gain modern mobile capabilities and talent.",
                    risk: "Integration challenges; cultural clashes; unclear which acquisition target is the right bet; high cost for declining assets",
                    upside: "Immediate capabilities and talent; proven platforms; established developer ecosystems",
                    consequences: {
                        immediate: {
                            cash: -2.0,
                            stock: -3.5,
                            marketShare: 0,
                            morale: "uncertain",
                            unlockedArtifacts: ["blackberry-curve", "iphone-2g"],
                            narrative: `Microsoft approaches Palm and RIM about potential acquisitions. Both companies are dismissive—they see themselves as iPhone competitors, not acquisition targets. Palm wants $3B+, RIM isn't interested at any price.

                            News of acquisition talks leaks to press. Stock drops on concerns about expensive M&A. Analysts question whether buying "yesterday's technology" addresses the iPhone threat.

                            Board debates continue. Ballmer argues external acquisition shows lack of faith in Microsoft's engineering talent.`
                        },
                        delayed: {
                            date: "Q4 2007",
                            cash: -2.0,
                            stock: -4.0,
                            marketShare: -4,
                            morale: "frustrated",
                            narrative: "Acquisition talks collapse. Microsoft missed the window to build internal response and wasted 9 months on failed M&A. iPhone now at 8% share and Android announced. Strategic time lost."
                        }
                    }
                },
                {
                    id: "partnership-nokia",
                    title: "Partner with Nokia",
                    cost: null,
                    description: "Form strategic alliance with Nokia (40% global market share) to create joint platform combining Windows and Symbian.",
                    risk: "Conflicting corporate cultures; Nokia's Symbian investment; unclear governance; may dilute both platforms instead of strengthening either",
                    upside: "Nokia's hardware expertise and carrier relationships; combined scale against Apple; share development costs",
                    consequences: {
                        immediate: {
                            cash: 0,
                            stock: +1.5,
                            marketShare: 0,
                            morale: "hopeful",
                            unlockedArtifacts: ["nokia-n95", "iphone-2g"],
                            narrative: `Microsoft and Nokia announce strategic partnership exploration. Markets react positively to combined scale—together they represent 82% of smartphone market.

                            Joint working groups form to evaluate platform convergence. However, early meetings reveal deep tensions: Nokia engineers defend Symbian's technical merits, Microsoft wants Windows Mobile adoption.

                            Governance questions emerge: Who controls platform direction? How are revenues split? Neither company wants to be junior partner.`
                        },
                        delayed: {
                            date: "Q4 2007",
                            cash: 0,
                            stock: -1.0,
                            marketShare: -6,
                            morale: "frustrated",
                            narrative: "Partnership talks stall over control issues. Meanwhile, both companies' market share erodes to iPhone. Carriers frustrated by platform uncertainty. Alliance produces nothing concrete while competitors move fast."
                        }
                    }
                }
            ]
        },

        {
            id: "d2-android-response",
            type: "decision",
            date: "NOV 2007",
            timeMarker: "NOV 2007",
            title: "The Android Threat",
            storyImage: "🤖",
            storyText: `Google has unveiled Android—an open-source mobile OS with the Open Handset Alliance (OHA) backing from HTC, Samsung, Motorola, and T-Mobile. Unlike iPhone's closed ecosystem or Windows Mobile's licensing fees, Android is free for manufacturers.

            Your strategy team warns this is more dangerous than iPhone. Google isn't trying to make money on the OS—they want mobile search and advertising dominance. Free OS means OEMs can undercut Windows Mobile on price.

            First Android devices expected in late 2008. You have roughly 12 months before market impact.`,

            objective: "Counter the Android Threat",

            availableInfo: ["competitor-intel-1", "market-report-1", "financial-data-1"],

            options: [
                {
                    id: "price-compete",
                    title: "Slash Licensing Fees",
                    description: "Cut Windows Mobile OEM fees from $15-25 to $5-8 per device to remain competitive with free Android.",
                    risk: "Revenue collapse while still carrying R&D costs; may not be enough if Android truly free; signals desperation",
                    upside: "Maintain OEM relationships; buy time for platform development; preserve market share",
                    consequences: {
                        immediate: {
                            cash: -0.3,
                            stock: -2.0,
                            marketShare: -2,
                            morale: "concerned",
                            unlockedArtifacts: ["android-beta"],
                            narrative: "Microsoft slashes Windows Mobile licensing fees 70%. OEMs appreciate the gesture but question long-term sustainability. CFO warns this cuts mobile revenue by $600M annually."
                        }
                    }
                },
                {
                    id: "accelerate-photon",
                    title: "Accelerate Platform Rebuild",
                    cost: "$300M",
                    description: "Add resources to Project Photon to ship in 12 months instead of 18. Launch before Android gains momentum.",
                    risk: "Quality issues from rushed development; feature cuts; team burnout; may still miss window",
                    upside: "First-mover advantage over Android; modern platform at launch; competitive pressure on Google",
                    consequences: {
                        immediate: {
                            cash: -0.3,
                            stock: -1.0,
                            marketShare: -1,
                            morale: "stressed",
                            unlockedArtifacts: ["android-beta"],
                            narrative: "Engineering teams go into overdrive. Photon timeline compressed to 12 months. Team morale mixed—excited about urgency but worried about quality. Technical debt accumulating."
                        }
                    }
                },
                {
                    id: "open-source-response",
                    title: "Make Windows Mobile Open Source",
                    description: "Release Windows Mobile core as open-source to compete directly with Android's free model.",
                    risk: "Destroys licensing revenue model; unclear how Microsoft profits; may weaken Windows brand; internal cultural resistance",
                    upside: "Removes cost barrier; could attract developer community; differentiates from Apple's closed model",
                    consequences: {
                        immediate: {
                            cash: -1.0,
                            stock: -5.0,
                            marketShare: +2,
                            morale: "shocked",
                            unlockedArtifacts: ["android-beta"],
                            narrative: "Leadership proposes open-sourcing Windows Mobile. Ballmer rejects the idea: 'That's not the Microsoft business model.' Internal resistance is fierce. The suggestion alone creates organizational chaos."
                        }
                    }
                },
                {
                    id: "ignore-android",
                    title: "Focus on Execution",
                    description: "Android is vaporware until proven otherwise. Execute on current strategy and let market decide.",
                    risk: "Android succeeds and Microsoft is caught flat-footed with no response; OEMs defect to free alternative",
                    upside: "Avoid distraction; maintain strategic focus; preserve resources; Android may fail anyway",
                    consequences: {
                        immediate: {
                            cash: 0,
                            stock: 0,
                            marketShare: 0,
                            morale: "neutral",
                            unlockedArtifacts: ["android-beta"],
                            narrative: "Microsoft dismisses Android as 'too little, too late.' Strategy team focuses on Project Photon execution. Markets are unconvinced by Microsoft's confidence."
                        }
                    }
                }
            ]
        }
    ]
};
