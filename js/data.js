// ========================================
// AURORA LABS - SCENARIO DATA
// Microsoft Mobile Strategy: The Sustainable Third
// 2007-2024 - Success Path
// ========================================

const scenarioData = {
    id: "msft-mobile-sustainable",
    title: "The Partnership Call",
    period: "2007-2024",

    initialMetrics: {
        date: "JAN 2007",
        ceo: "S. Ballmer",
        cash: 32.0,
        stock: 29.80,
        marketShare: 42,
        morale: "neutral"
    },

    // Artifacts - Success Path Phones
    artifacts: {
        "iphone-2g": {
            id: "iphone-2g",
            name: "Apple iPhone (2007)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "Observing the iPhone launch",
            caseNumber: "001",
            forensicTitle: "Project Purple - The Catalyst",
            status: "MARKET DISRUPTOR",
            casualties: "Industry Reset",
            description: "The device that changed everything. Announced January 9, 2007.",
            model3D: '<img src="assets/images/iphone-2007.jpg" alt="Apple iPhone 2007" />',
            timelineProgress: 95,
            timelineMarkers: [
                { label: "Launch", value: "Jun 2007" },
                { label: "First Year", value: "6.1M units" }
            ],
            hotspots: [
                { x: 45, y: 30, title: "Multi-touch", description: "Revolutionary capacitive touchscreen eliminated stylus." }
            ],
            failureTags: null,
            stats: {
                "Launch Date": "June 29, 2007",
                "Units Sold": "6.1 million (Year 1)",
                "Market Share": "2% → 8%"
            },
            story: "Steve Jobs called it revolutionary. The iPhone's multi-touch interface set a new standard that forced the entire industry to pivot."
        },

        "htc-tytn-ii": {
            id: "htc-tytn-ii",
            name: "HTC TyTN II (2007)",
            category: "Device",
            rarity: "Common",
            unlockedBy: "The Windows Mobile era",
            caseNumber: "002",
            forensicTitle: "The Last Keyboard King",
            status: "LEGACY PLATFORM",
            casualties: "Touch Revolution Victim",
            description: "Windows Mobile 6.0 flagship with physical QWERTY keyboard.",
            model3D: "📱",
            timelineProgress: 30,
            timelineMarkers: [
                { label: "Peak", value: "42% WM Share" },
                { label: "Decline", value: "2008-2010" }
            ],
            hotspots: [
                { x: 50, y: 40, title: "QWERTY Keyboard", description: "Great for email but required small screen." }
            ],
            failureTags: ["Stylus Dependent", "Pre-Touch Era"],
            stats: {
                "Launch": "October 2007",
                "OS": "Windows Mobile 6.0"
            },
            story: "The TyTN II represented peak stylus-based smartphones. Within months of iPhone's launch, it looked ancient."
        },

        "htc-hero-android": {
            id: "htc-hero-android",
            name: "HTC Hero - Android (2009)",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Watching Android rise",
            caseNumber: "003",
            forensicTitle: "The Free Alternative",
            status: "ECOSYSTEM BUILDER",
            casualties: "WM Licensing Revenue",
            description: "First major Android phone with HTC Sense UI. Free OS model.",
            model3D: "🤖",
            timelineProgress: 75,
            timelineMarkers: [
                { label: "Android", value: "2.5% → 24%" },
                { label: "Cost", value: "$0 licensing" }
            ],
            hotspots: [
                { x: 50, y: 35, title: "HTC Sense", description: "Made Android consumer-friendly." },
                { x: 50, y: 65, title: "Free", description: "Destroyed Microsoft's $15/device model." }
            ],
            failureTags: null,
            stats: {
                "Launch": "June 2009",
                "Licensing": "$0 (open source)"
            },
            story: "The Hero proved Android was viable and that OEMs would embrace a free, modern OS."
        },

        "htc-hd7": {
            id: "htc-hd7",
            name: "HTC HD7 - Windows Phone 7",
            category: "Device",
            rarity: "Epic",
            unlockedBy: "Building Windows Phone 7",
            caseNumber: "004",
            forensicTitle: "The Reboot - One Year Early",
            status: "FRESH START",
            casualties: "Backward Compatibility",
            description: "First Windows Phone 7. Metro UI, launched Q4 2010 at 21% share.",
            model3D: "📱",
            timelineProgress: 70,
            timelineMarkers: [
                { label: "Launch", value: "Oct 2010" },
                { label: "Share", value: "21%" },
                { label: "Apps", value: "18,000" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "Metro UI", description: "Live tiles, distinctive design." },
                { x: 50, y: 60, title: "Touch-First", description: "Built for fingers, not stylus." }
            ],
            failureTags: null,
            stats: {
                "Launch": "October 2010",
                "Market Share": "21%",
                "Apps": "18,000"
            },
            story: "The HD7 launched Windows Phone 7 into a different world—21% share instead of 7%. That year made all the difference."
        },

        "nokia-lumia-800": {
            id: "nokia-lumia-800",
            name: "Nokia Lumia 800 (2011)",
            category: "Device",
            rarity: "Epic",
            unlockedBy: "Nokia partnership",
            caseNumber: "005",
            forensicTitle: "The Beautiful Bet - Different Terms",
            status: "PARTNERSHIP SUCCESS",
            casualties: "None",
            description: "Nokia's first Windows Phone. Joined viable 21% platform, not desperate 7%.",
            model3D: "📱",
            timelineProgress: 80,
            timelineMarkers: [
                { label: "Launch", value: "Nov 2011" },
                { label: "WP Share", value: "21% (viable)" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "Polycarbonate", description: "Gorgeous unibody design." },
                { x: 50, y: 60, title: "Carl Zeiss", description: "Nokia camera excellence." }
            ],
            failureTags: null,
            stats: {
                "Launch": "November 2011",
                "Partnership": "$150M/year (light)",
                "WP Share": "21% (viable)"
            },
            story: "Nokia joined Windows Phone because it made sense—21% meant viable ecosystem. Terms were light: $150M/year, not $1B. No desperation."
        },

        "nokia-lumia-1020": {
            id: "nokia-lumia-1020",
            name: "Nokia Lumia 1020 (2013)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "Nokia's camera innovation",
            caseNumber: "006",
            forensicTitle: "The 41MP Beast",
            status: "PHOTOGRAPHY KING",
            casualties: "None",
            description: "41MP PureView camera. Best smartphone camera 2013-2015.",
            model3D: "📱",
            timelineProgress: 95,
            timelineMarkers: [
                { label: "Camera", value: "41MP PureView" },
                { label: "Status", value: "Legendary" }
            ],
            hotspots: [
                { x: 50, y: 35, title: "41MP Sensor", description: "Massive sensor with oversampling." },
                { x: 50, y: 65, title: "Xenon Flash", description: "Professional photography." }
            ],
            failureTags: null,
            stats: {
                "Launch": "July 2013",
                "Camera": "41MP PureView + Xenon"
            },
            story: "The 1020 was Nokia's masterpiece. Photographers bought Windows Phones just for this device."
        },

        "microsoft-lumia-950": {
            id: "microsoft-lumia-950",
            name: "Microsoft Lumia 950 (2015)",
            category: "Device",
            rarity: "Epic",
            unlockedBy: "Continuum innovation",
            caseNumber: "007",
            forensicTitle: "The PC-in-Pocket",
            status: "INNOVATION",
            casualties: "None",
            description: "Continuum: phone becomes PC when docked. Years ahead.",
            model3D: "📱",
            timelineProgress: 75,
            timelineMarkers: [
                { label: "Continuum", value: "Phone → PC" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "Continuum", description: "Dock and get full Windows desktop." }
            ],
            failureTags: null,
            stats: {
                "Launch": "October 2015",
                "Feature": "Continuum docking"
            },
            story: "The 950 showed what Windows Phone could do that others couldn't. Continuum was years ahead of competition."
        }
    },

    // Information Cards
    infoCards: {
        "market-report-2007": {
            id: "market-report-2007",
            type: "Market Report",
            title: "iPhone Launch Analysis",
            date: "January 2007",
            source: "Market Intelligence",
            quality: "high",
            visual: "📊",
            summary: "iPhone announced. Revolutionary touch interface. Windows Mobile holds 42% share.",
            content: `<h3>iPhone Impact Assessment - Jan 2007</h3>
                <p>Steve Jobs unveiled iPhone: Multi-touch interface, $499-599 pricing.</p>
                <p><strong>Current Market:</strong> Windows Mobile 42%, BlackBerry 20%, Symbian 18%</p>
                <p><strong>Immediate Risk:</strong> LOW ($500+ limits mass market)</p>
                <p><strong>Long-term Risk:</strong> MEDIUM-HIGH (if touch becomes standard)</p>`,
            conflicts: []
        },

        "android-threat-2009": {
            id: "android-threat-2009",
            type: "Competitor Intel",
            title: "Android Growth Trajectory",
            date: "September 2009",
            source: "Competitive Intelligence",
            quality: "high",
            visual: "🤖",
            summary: "Android exploding 2.5% to 8% in 12 months. Free OS undermining licensing.",
            content: `<h3>Android: The Real Threat - Q3 2009</h3>
                <p><strong>Growth:</strong> 0.5% → 8% in 12 months (16X)</p>
                <p><strong>Why It Works:</strong></p>
                <ul><li>$0 licensing vs $15-25 for Windows Mobile</li>
                <li>OEM customization freedom</li>
                <li>Google doesn't need OS revenue</li>
                <li>Modern touch-first architecture</li></ul>
                <p><strong>Threat:</strong> If Android hits 20-30%, your $1.2B licensing collapses.</p>`,
            conflicts: []
        },

        "wp7-vision-2010": {
            id: "wp7-vision-2010",
            type: "Technical Spec",
            title: "Windows Phone 7 Vision",
            date: "January 2010",
            source: "Engineering",
            quality: "high",
            visual: "⚙️",
            summary: "Ground-up rebuild. Metro UI, Live Tiles, 12 months, $500M.",
            content: `<h3>Windows Phone 7 - Platform Overview</h3>
                <p><strong>Philosophy:</strong> "Glance and Go" - Information at a glance</p>
                <p><strong>Metro UI:</strong> Live tiles, typography-focused, smooth 60fps</p>
                <p><strong>Timeline:</strong> 12 months from greenlight to launch</p>
                <p><strong>Investment:</strong> $500M (development + marketing)</p>
                <p><strong>Trade-off:</strong> No backward compatibility. Clean break for modern architecture.</p>`,
            conflicts: []
        },

        "app-economics-2011": {
            id: "app-economics-2011",
            type: "Financial Data",
            title: "App Developer Economics",
            date: "July 2011",
            source: "Developer Survey",
            quality: "high",
            visual: "💰",
            summary: "WP developers make 23% of iOS revenue. App gap causing chicken-egg problem.",
            content: `<h3>Developer Revenue - Q2 2011</h3>
                <p><strong>Monthly Revenue per App:</strong></p>
                <ul><li>iOS: $6,200</li>
                <li>Android: $3,100</li>
                <li>Windows Phone: $1,400 (23% of iOS)</li></ul>
                <p><strong>Developer Priority:</strong> iOS 82%, Android 15%, WP 2%</p>
                <p><strong>The Cycle:</strong> 21% share → Lower revenue → Late apps → Frustrated users → Share drops → Even lower revenue</p>
                <p>At 21% share, WP has critical mass. Apps will come—question is speed and cost.</p>`,
            conflicts: []
        },

        "platform-viability-2013": {
            id: "platform-viability-2013",
            type: "Market Report",
            title: "Can #3 Platform Survive?",
            date: "January 2013",
            source: "Strategy Consultants",
            quality: "high",
            visual: "📊",
            summary: "Analysis of 18% share sustainability. Mac survived at 7%, Linux at 2%.",
            content: `<h3>Third Platform Viability - Jan 2013</h3>
                <p><strong>Market:</strong> Android 53%, iOS 20%, Windows Phone 18%</p>
                <p><strong>Historical Precedents:</strong></p>
                <ul><li>Mac: 7-10% desktop share, 30+ years sustainable</li>
                <li>Linux: 2-3%, niche but viable</li></ul>
                <p><strong>Critical Threshold:</strong> 12-15% minimum for sustainable ecosystem</p>
                <p><strong>Current Status:</strong> 18% is ABOVE threshold by comfortable margin</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Being #3 is not failure if you stop fighting for #1.</p>`,
            conflicts: []
        },

        "satya-cloud-2017": {
            id: "satya-cloud-2017",
            type: "Board Memo",
            title: "Satya: Mobile First, Cloud First",
            date: "January 2017",
            source: "CEO Office",
            quality: "high",
            visual: "☁️",
            summary: "Windows Phone is 0.2% of revenue. Azure and cloud are real growth.",
            content: `<h3>Strategic Priorities - Satya Nadella</h3>
                <p><strong>Microsoft Growth (2014-2017):</strong> $300B → $500B market cap</p>
                <p><strong>What Drove It:</strong> Azure $20B, Office 365 $15B, LinkedIn $5B, Gaming $10B</p>
                <p><strong>Windows Phone:</strong> $600M revenue, $240M profit (0.2% of Microsoft)</p>
                <p><strong>Mobile First means:</strong> Services on EVERY device (iOS, Android, WP)</p>
                <p><strong>Cloud First means:</strong> Azure, Azure, Azure</p>
                <p><strong>Decision:</strong> Maintain WP as profitable niche ($300M/year). Don't distract from cloud.</p>
                <p>"Windows Phone didn't win. But we didn't lose $13B trying. That's its own success." - Satya</p>`,
            conflicts: []
        }
    },

    // Decision Points - Success Path
    decisionPoints: [
        {
            id: "d1-iphone-response",
            type: "decision",
            date: "JAN 2007",
            timeMarker: "JAN 2007",
            title: "The iPhone Arrives",
            storyImage: '<img src="https://www.deccanchronicle.com/h-upload/2024/08/31/1836166-la-1109798.webp" alt="iPhone Launch" style="max-width: 100%; height: auto; border-radius: 8px;" />',
            storyText: `Apple announced the iPhone at Macworld 2007. Steve Jobs called it "revolutionary." The tech press agrees. Your Windows Mobile holds 42% market share with strong enterprise positioning.

Your board is split. Some see existential threat. Others see expensive niche product. The iPhone's $500+ price and consumer focus seem like different market segments.

You could rush a response, but that might lead to expensive mistakes. Or wait, watch, and learn before committing $500M+ to platform rebuild. Is this a crisis requiring immediate action, or an opportunity to let Apple validate the market first?`,

            objective: "Respond to iPhone Launch",
            availableInfo: ["market-report-2007"],

            options: [
                {
                    id: "rush-consumer-response",
                    title: "Rush Consumer Response",
                    description: "Immediately pivot to touch-first consumer platform. Fast response to iPhone threat.",
                    risk: "Expensive mistakes. Rushed product. Poor quality. Could waste $500M+.",
                    upside: "Quick market response. Show urgency. May capture early touch-phone market.",
                    cost: "$500M",
                    consequences: {
                        immediate: {
                            cash: -0.5,
                            stock: -0.8,
                            marketShare: 0,
                            morale: "urgent",
                            unlockedArtifacts: ["iphone-2g"],
                            narrative: `Emergency board meeting. You commit $500M to immediate consumer platform response. "We cannot let Apple define the future of mobile."

Engineering protests timeline is unrealistic. "Touch-first OS needs 18-24 months minimum. Rushing means compromises." Management overrules: "Ship SOMETHING by Q4 2007 or we lose the market."

Teams pulled from Windows Mobile 7 roadmap. Panic hiring of UI designers. Ballmer declares: "Microsoft will not be left behind in consumer mobile revolution."

Wall Street applauds urgency. Stock drops slightly on $500M commitment but analysts praise "aggressive response to iPhone threat."`
                        },
                        delayed: {
                            date: "Q4 2008",
                            cash: -0.3,
                            stock: -2.5,
                            marketShare: -5,
                            morale: "frustrated",
                            narrative: `The rushed platform misses Q4 2007 deadline. Then Q1 2008. Finally ships Q4 2008 as "Windows Mobile 7 Touch Edition"—18 months late, inferior to iPhone.

Reviews brutal: "Feels rushed. Touch interface inconsistent. Still requires stylus for many functions. Battery life poor." Engadget: "Microsoft's iPhone response looks two years old on arrival."

Market share dropped 42% → 37% during development. Product can't recover lost ground. Meanwhile, Android announced (free OS) and growing fast.

The $500M bought you a mediocre product, damaged reputation, and 18 months of chaos. Engineering team demoralized: "We told them it was impossible."`
                        }
                    }
                },
                {
                    id: "wait-and-watch",
                    title: "Wait & Watch (18 Months) ⭐",
                    description: "Observe iPhone's actual performance before committing to platform rebuild. Let Apple validate touch interface.",
                    risk: "Market share erosion while you wait. Press criticizes inaction. Board impatient.",
                    upside: "Avoid rushing into mistakes. Learn from iPhone. Real data before $500M commitment.",
                    cost: null,
                    consequences: {
                        immediate: {
                            cash: 0,
                            stock: -1.50,
                            marketShare: 0,
                            morale: "cautious",
                            unlockedArtifacts: ["iphone-2g", "htc-tytn-ii"],
                            narrative: `Microsoft announces "measured response." Stock drops as investors worry about urgency.

Board splits. Enterprise directors support patience. Consumer directors fear being left behind. Ballmer dismisses iPhone as "$500 subsidized item" with "no chance" of significant share.

Engineering relieved—no panic rebuild. Sales nervous about carriers. Press criticizes Microsoft as "asleep at the wheel."

The real question isn't about iPhone. It's what comes next.`
                        },
                        delayed: {
                            date: "Q4 2007",
                            cash: 0,
                            stock: -2.0,
                            marketShare: -5,
                            morale: "concerned",
                            narrative: `iPhone captures 8% share in first year. Your share drops from 42% to 37%.

But November 2007 brings the real threat: Google announces Android—FREE mobile OS backed by 34 manufacturers. HTC, Samsung, Motorola all commit.

Your team realizes: iPhone was the crisis everyone saw. Android is the crisis nobody expected. Free OS will undermine your $15/device licensing.

The wait-and-watch strategy paid off. You identified the real competitor.`
                        }
                    }
                },
                {
                    id: "enterprise-double-down",
                    title: "Enterprise Double Down",
                    description: "Ignore iPhone consumer threat. Focus 100% on enterprise market with BlackBerry.",
                    risk: "Consumer market lost forever. Carriers shift to iPhone. Long-term irrelevance.",
                    upside: "Protect existing 42% enterprise share. Lower investment. Focus on strengths.",
                    cost: "$100M",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                },
                {
                    id: "acquisition-strategy",
                    title: "Acquisition Strategy",
                    description: "Try to acquire Palm or RIM (BlackBerry) for immediate mobile capabilities.",
                    risk: "Expensive ($5-8B). Integration nightmares. Cultural clash. May not solve problem.",
                    upside: "Instant capabilities. Established user base. Patents. Speed to market.",
                    cost: "$5-8B",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                }
            ]
        },

        {
            id: "d2-android-threat",
            type: "decision",
            date: "SEP 2009",
            timeMarker: "SEP 2009",
            title: "The Android Threat",
            storyImage: "🤖",
            storyText: `Two years passed. Your market share declined from 42% to 32% while observing. But the real threat emerged: Android.

Google's FREE mobile OS exploded from 2.5% to 8% in 12 months. HTC, Samsung, Motorola, LG all building Android devices. Your $15-25 licensing fee suddenly looks like a tax on innovation.

Strategy team warns: if Android reaches 20-30% share, your $1.2B licensing revenue collapses. OEMs will mass-defect to free alternative. You have 12-18 months before tipping point.

Match Android's free model and sacrifice revenue now? Or maintain licensing and lose OEMs?`,

            objective: "Counter Android Threat",
            availableInfo: ["android-threat-2009"],

            options: [
                {
                    id: "keep-licensing",
                    title: "Keep Licensing Model",
                    description: "Maintain $15/device licensing fee. Protect $1.2B revenue stream.",
                    risk: "OEMs defect to Android. Lose market share rapidly. Death spiral.",
                    upside: "Maintain revenue short-term. No shareholder panic. Traditional business model.",
                    cost: null,
                    consequences: {
                        immediate: {
                            cash: 0,
                            stock: +0.5,
                            marketShare: 0,
                            morale: "defensive",
                            unlockedArtifacts: ["htc-hero-android"],
                            narrative: `Microsoft announces continuation of licensing model. "$15 licensing reflects Windows Mobile value." CFO celebrates protecting $1.2B revenue stream.

Wall Street initially positive—revenue maintained. Stock rises 2% on "disciplined approach." Analysts: "Microsoft choosing profitability over market share race."

But OEMs react poorly. HTC executive (off-record): "Android is free. We can't compete paying Microsoft $15/device." Samsung, Motorola, LG prioritize Android development.

Within weeks, OEM commitment to Windows Mobile weakens. Development resources shift to Android. Your platform future depends on reversing this trend—but how?`
                        },
                        delayed: {
                            date: "Q4 2009",
                            cash: -0.1,
                            stock: -3.5,
                            marketShare: -12,
                            morale: "alarmed",
                            narrative: `Catastrophic market share collapse. You drop from 32% to 20% in 9 months—fastest decline in smartphone history.

HTC, Samsung, LG all announce "Android-first" strategies. Windows Mobile becomes second priority. Carriers shift shelf space to Android. Verizon's "Droid" campaign directly attacks iPhone—Windows Mobile not even mentioned.

Revenue reality hits: $1.2B licensing revenue drops to $700M as unit volumes collapse. You protected the business model but lost the business.

Board emergency meeting. "We chose short-term revenue over long-term survival." The licensing model must end—but damage to OEM relationships may be permanent.`
                        }
                    }
                },
                {
                    id: "make-os-free",
                    title: "Make Windows Mobile Free ⭐",
                    description: "Eliminate $15-25 licensing fee. Match Android's free model to keep OEMs committed.",
                    risk: "Immediate $1.2B revenue hit. Shareholders unhappy. Uncertain new business model.",
                    upside: "OEMs stay committed. Compete with Android. Prevent mass defection. Buy time for WP7.",
                    cost: null,
                    consequences: {
                        immediate: {
                            cash: -0.5,
                            stock: -2.80,
                            marketShare: 0,
                            morale: "concerned",
                            unlockedArtifacts: ["htc-hero-android"],
                            narrative: `Microsoft stuns industry: Windows Mobile now FREE for OEMs. $15-25 fee eliminated.

CFO warns of $1.2B revenue hit. Stock drops 9%. Shareholders demand clarity—Microsoft pivots to services, app store revenue, enterprise licensing.

OEMs react positively. HTC, Samsung, LG commit to continuing Windows devices. "Free OS means we can compete with Android on equal footing."

Press calls it "radical shift" and "admission Android won business model war." Analysts split on strategy versus desperation.`
                        },
                        delayed: {
                            date: "Q4 2009",
                            cash: -0.2,
                            stock: -1.5,
                            marketShare: -3,
                            morale: "cautiously optimistic",
                            narrative: `Share drops from 32% to 29% but stabilizes. Android grows to 24%, but your OEM partnerships hold.

Windows Mobile 6.5 launches October—incremental touch improvements, but free licensing keeps OEMs committed despite platform limitations.

HTC, Samsung, LG confirm multi-year Windows commitment. "We'll make both Android and Windows phones."

Critically, you haven't lost the OEM channel. Free OS bought time. Now you need modern platform (WP7) to capitalize on preserved relationships.`
                        }
                    }
                },
                {
                    id: "price-war",
                    title: "Price War",
                    description: "Slash licensing to $5/device. Compromise between free and $15.",
                    risk: "Worst of both worlds. Still lose OEMs to free Android. Revenue drops anyway.",
                    upside: "Keeps some revenue. Less shareholder panic than going free.",
                    cost: null,
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                },
                {
                    id: "acquire-palm",
                    title: "Acquisition of Palm",
                    description: "Buy Palm for their WebOS platform and mobile expertise.",
                    risk: "Palm declining. WebOS unproven. $2B for dying company. Integration hell.",
                    upside: "Instant modern platform. Skip 12-month rebuild. Experienced mobile team.",
                    cost: "$2B",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                }
            ]
        },

        {
            id: "d3-platform-rebuild",
            type: "decision",
            date: "JAN 2010",
            timeMarker: "JAN 2010",
            title: "The Platform Rebuild",
            storyImage: "📱",
            storyText: `Android at 24%, iOS at 16%, you at 29%. Free OS model saved OEM relationships, but Windows Mobile 6.5 is a band-aid on aging architecture.

You need modern touch-first OS. The question: How fast? How much?

Engineering estimates 12 months for ground-up rebuild: Windows Phone 7 with Metro UI, Live Tiles, modern touch. $500M investment. Break backward compatibility—clean slate for next decade.

Or incremental updates to avoid risk? Or partner with Nokia to share costs? The platform decision will define the next 5 years.`,

            objective: "Build Modern Platform",
            availableInfo: ["wp7-vision-2010"],

            options: [
                {
                    id: "incremental-updates",
                    title: "Incremental Updates",
                    description: "Continue improving Windows Mobile 6.5. Safer, cheaper, but insufficient.",
                    risk: "Platform remains dated. Can't compete with iOS/Android. Slow death.",
                    upside: "Low cost ($50M). No development gap. Backward compatible.",
                    cost: "$50M",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                },
                {
                    id: "build-wp7-12mo",
                    title: "Build Windows Phone 7 (12 Months) ⭐",
                    description: "Ground-up rebuild. Metro UI, touch-first, modern architecture. Launch Q4 2010.",
                    risk: "12 months with no new platform—will lose share during development. $500M investment.",
                    upside: "Modern platform competitive with iOS/Android. Right architecture for decade. Bold statement.",
                    cost: "$500M",
                    consequences: {
                        immediate: {
                            cash: -0.5,
                            stock: -0.8,
                            marketShare: 0,
                            morale: "optimistic",
                            unlockedArtifacts: [],
                            narrative: `Microsoft commits $500M to Windows Phone 7. Ground-up rebuild with Metro UI design language.

Engineering teams energized. Modern touch-first architecture, Live Tiles showing information at a glance, smooth 60fps animations. "Authentically digital" design—no fake textures.

Trade-off: No backward compatibility. Windows Mobile apps won't run. Clean break necessary for modern platform.

OEMs commit to wait 12 months. HTC, Samsung, LG agree to launch devices Q4 2010. Free OS model keeps them invested despite development gap.`
                        },
                        delayed: {
                            date: "Q4 2010",
                            cash: -0.3,
                            stock: +1.2,
                            marketShare: -8,
                            morale: "excited",
                            narrative: `Windows Phone 7 launches October 2010. Reviews are positive. "Metro UI is beautiful and different." "Smoothest mobile OS." "Finally, Microsoft gets it."

Launch devices: HTC HD7, Samsung Focus, LG Quantum. Carriers (AT&T, T-Mobile, Verizon) support launch. 18,000 apps at launch—developers took notice during development.

Market share: Dropped from 29% to 21% during 12-month development. BUT: Launching at 21% share is completely different than actual history's 7% in late 2011.

At 21% share, Windows Phone has critical mass. Developers will support platform. Apps will come. Ecosystem viable.`
                        }
                    }
                },
                {
                    id: "partner-nokia-now",
                    title: "Partner with Nokia Now",
                    description: "Joint platform development with Nokia. Share costs and expertise.",
                    risk: "Nokia's Symbian failing. Cultural clash. Divided control. Delayed timeline.",
                    upside: "Share $500M cost. Nokia's hardware expertise. Combined market share.",
                    cost: "$250M + partnership",
                    consequences: {
                        immediate: {
                            cash: -0.25,
                            stock: +1.5,
                            marketShare: 0,
                            morale: "hopeful",
                            unlockedArtifacts: [],
                            narrative: `Microsoft and Nokia announce strategic partnership. Nokia abandons Symbian, goes "all-in" on Windows Phone. Wall Street euphoric—combined share could reach 35-40%.

Stephen Elop (former Microsoft exec) becomes Nokia CEO February 2011. His "Burning Platform" memo leaked: "We are standing on a burning platform... we must change our behavior."

Partnership terms emerging: Microsoft pays Nokia $1B+ annually for exclusivity. Nokia gets Windows Phone for free plus development support. Joint engineering—Metro UI meets Nokia hardware excellence.

Press celebrates: "The alliance that could challenge iOS and Android." Stock jumps 5% on potential scale. Board believes Nokia's 29% + your 20% = game changer.`
                        },
                        delayed: {
                            date: "Q4 2011",
                            cash: -1.2,
                            stock: -2.8,
                            marketShare: -13,
                            morale: "stressed",
                            narrative: `Windows Phone 7 delayed to Q4 2011—20 months instead of 12. Nokia joint development created coordination hell. Two engineering cultures, conflicting priorities, integration nightmares.

Market share catastrophe: You dropped from 20% to 7% during extended delay. Nokia fell from 29% to 15% during transition from Symbian. Combined: 22%, not the promised 40-50%.

First Nokia Windows Phones (Lumia 800/710) launch November 2011 to muted reception. "Beautiful but late." App gap massive: iOS 500K apps, Android 400K, Windows Phone 18K.

Partnership cost: $1.2B/year to Nokia ($250M development + $1B+ partnership payments). Nokia now Microsoft's only major OEM—HTC, Samsung reduced commitment. "Too much control by Nokia."`
                        }
                    }
                },
                {
                    id: "license-android",
                    title: "License Android",
                    description: "Admit defeat. Become Android OEM like Samsung. Exit platform business.",
                    risk: "No platform control. Compete with 30+ OEMs. Lose identity. Strategic surrender.",
                    upside: "Immediate modern OS. Low cost. Focus on services (Office, Azure).",
                    cost: "$0",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                }
            ]
        },

        {
            id: "d4-app-ecosystem",
            type: "decision",
            date: "JUL 2011",
            timeMarker: "JUL 2011",
            title: "The App Ecosystem Question",
            storyImage: "📱",
            storyText: `Windows Phone 7 launched 9 months ago. Product is good. Reviews positive. But growth plateauing.

Current state: 21% market share, 18,000 apps, strong OEM commitment. But app gap is real: iOS 425K apps, Android 250K, you 18K.

App economics show developers make 4.4X less on Windows Phone than iOS. They prioritize iOS first, Android second, Windows Phone "if at all." Apps arrive 6-12 months late—users see "coming soon" too often.

Pay developers directly ($500M fund)? Let organic growth work? Or accept being #3 in apps?`,

            objective: "Close App Gap",
            availableInfo: ["app-economics-2011"],

            options: [
                {
                    id: "aggressive-dev-fund",
                    title: "Aggressive Developer Fund",
                    description: "Pay top 500 developers directly to build Windows Phone apps. $500M fund.",
                    risk: "$500M spent. Creates dependency. Apps may be low quality ports just for money.",
                    upside: "Close app gap fast. All major apps within 12 months. Show urgency.",
                    cost: "$500M",
                    consequences: {
                        immediate: {
                            cash: -0.5,
                            stock: -1.2,
                            marketShare: 0,
                            morale: "desperate",
                            unlockedArtifacts: [],
                            narrative: `Microsoft announces $500M developer fund. Paying top 500 app developers $50K-$5M each to build Windows Phone versions. "Whatever it takes to close the app gap."

Developer community split. Some welcome money ("Finally Microsoft gets serious"). Others cynical: "Paying for ports nobody wants. Apps built for money, not users."

Wall Street concerned: "$500M is admission that organic ecosystem growth failed. Are you buying users or building platform?"

Internally, engineering worried: "We're creating dependency. What happens when money stops?" But board demands action: "7% share with 18K apps. Android has 400K. We must close gap NOW."`
                        },
                        delayed: {
                            date: "Q4 2012",
                            cash: -0.3,
                            stock: -2.5,
                            marketShare: -2,
                            morale: "disillusioned",
                            narrative: `18 months later: Apps grew from 18K to 95K. But quality problematic—many are lazy iOS ports with broken UI, missing features, no updates.

Market share: 7% → 5%. Apps didn't save you. Users complain: "Instagram took 18 months and still missing features." Developers took money but prioritized iOS/Android updates.

The $500M bought quantity, not quality. Worse: Created resentment. "Microsoft has to PAY developers to build for their platform." Press narrative shifted from "Windows Phone viable" to "Windows Phone desperate."

Total spending so far: $2.5B+ (rushed development $500M, Nokia partnership $1.2B/year x 2 years, developer fund $500M). Share at 5%. Board alarmed.`
                        }
                    }
                },
                {
                    id: "organic-growth",
                    title: "Organic Growth + Marketing ⭐",
                    description: "Let 21% share attract developers naturally. Invest in marketing successful apps.",
                    risk: "Apps come slowly. Gap may persist. Could enter death spiral if share drops below 18%.",
                    upside: "Sustainable if share stays 20%+. Lower cost. Apps will come eventually.",
                    cost: "$200M",
                    consequences: {
                        immediate: {
                            cash: -0.2,
                            stock: 0,
                            marketShare: 0,
                            morale: "hopeful",
                            unlockedArtifacts: [],
                            narrative: `Microsoft chooses organic app growth strategy. $200M for marketing, developer tools, Marketplace improvements.

"Windows Phone Apps That Don't Exist on iPhone" campaign highlights exclusives. "App of the Week" promotions. Better developer analytics and faster approvals (3 days vs 7).

No direct payments to developers. Instead, help successful WP apps find their audience. Indie developers appreciate spotlight.

OEMs continue support. At 21% share, ecosystem is viable—apps will come, just not day-one. Patience required.`
                        },
                        delayed: {
                            date: "Q4 2012",
                            cash: -0.15,
                            stock: -0.5,
                            marketShare: -3,
                            morale: "satisfied",
                            narrative: `18 months later: Apps grew from 18K to 62,000 organically. Quality improving—major apps mostly present now.

Market share: 21% → 18%. Slight decline but stable. Android hit 53%, iOS 20%, you 18%.

Apps secured: Instagram (10 months after iOS), Spotify, major banking apps, top 50 games, Uber. Still missing: Snapchat ignoring WP, Google blocking their apps.

November 2011: Nokia announces Lumia 800 with Windows Phone! But different than actual history—Nokia joining platform with 21% share (viable), not 7% (desperate). Partnership terms: $150M/year support, NOT $1B exclusive deal.

App gap closing naturally. 18% share is above critical 15% threshold for ecosystem sustainability.`
                        }
                    }
                },
                {
                    id: "enterprise-differentiation",
                    title: "Enterprise Differentiation",
                    description: "Give up consumer app race. Focus on enterprise apps, productivity, Office integration.",
                    risk: "Abandon consumer market. Become niche enterprise platform. Limited growth.",
                    upside: "Play to strengths. Lower app count acceptable. Enterprise doesn't need Snapchat.",
                    cost: "$100M",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                },
                {
                    id: "nokia-partnership-now",
                    title: "Nokia Partnership Now",
                    description: "Exclusive deal with Nokia. They drop Symbian, go all-in on Windows Phone.",
                    risk: "Expensive ($750M/year). Lose other OEMs. Tied to Nokia's fate. Risky bet.",
                    upside: "Nokia's 29% share joins yours. Combined 50%. Massive scale. Hardware expertise.",
                    cost: "$750M/year",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                }
            ]
        },

        {
            id: "d5-sustainability",
            type: "decision",
            date: "JAN 2013",
            timeMarker: "JAN 2013",
            title: "The Sustainability Question",
            storyImage: "📊",
            storyText: `You've held 18-20% share for 18 months. App ecosystem at 62K apps (decent). Product good. But you're #3 platform and still losing money.

Android 53%, iOS 20%, you 18%. Total investment so far: $1.6B. Revenue: $500M. Net: -$1.1B.

But trend is positive: Share stable, apps growing, path to profitability visible (break-even 2014). CFO says defending 18% leads to profit 2015. Or push for #2 position (25%+) with $3B more investment.

Historical precedent: Mac survived at 7% for decades. Can Windows Phone survive at 18%? Is being #3 sustainable, or do network effects doom all third platforms?`,

            objective: "Define Long-Term Strategy",
            availableInfo: ["platform-viability-2013"],

            options: [
                {
                    id: "defend-18",
                    title: "Defend 18% - Path to Profitability ⭐",
                    description: "Focus on profitability over growth. Maintain market position, go break-even 2014.",
                    risk: "Might slowly decline to 15% and stabilize. Never overtake iOS. Accept being #3.",
                    upside: "Viable ecosystem, sustainable business, profitable 2015+. No risky $3B bet.",
                    cost: "$400M/year",
                    consequences: {
                        immediate: {
                            cash: -0.4,
                            stock: +0.8,
                            marketShare: 0,
                            morale: "relieved",
                            unlockedArtifacts: ["nokia-lumia-1020"],
                            narrative: `Microsoft announces strategic shift: "Quality over quantity." Focus on profitability, not chasing #2.

Strategy: Enterprise features, productivity (Office integration), Xbox gaming, camera excellence (Nokia partnership). Differentiate on strengths, not fight iOS/Android everywhere.

Engineering teams relieved—no more brutal growth push. Sales team: "Carriers like having third option. Enterprise buying. Don't rock boat."

Wall Street positive: Clear path to profitability more valuable than risky $3B growth bet. Stock rises 3% on clarity.

Message: "Windows Phone serves 18% of smartphone users with best mobile experience. Proud to be #3 and profitable."`
                        },
                        delayed: {
                            date: "Q4 2016",
                            cash: +0.6,
                            stock: +2.5,
                            marketShare: -3,
                            morale: "satisfied",
                            narrative: `Three years later (2013-2016): Market share gradually declined 18% → 15% but stabilized. Apps grew to 400,000. Product matured.

Financial turnaround achieved:
• 2013: -$150M loss
• 2014: +$50M profit ✓ (BREAK-EVEN)
• 2015: +$170M profit
• 2016: +$240M profit

Cumulative (2009-2016): Invested $2.0B, Revenue $2.4B, NET: +$400M PROFIT ✓

Phones: Nokia Lumia 1020 (41MP camera masterpiece, Jul 2013), Microsoft Lumia 950 (Continuum innovation, Oct 2015), consistent HTC/Samsung models.

The sustainable third platform is real. 15% share, profitable, serving 180M users. Small success beats expensive failure.`
                        }
                    }
                },
                {
                    id: "push-for-2",
                    title: "Push for #2",
                    description: "Try to overtake iOS (20% share). Massive $3B investment for growth.",
                    risk: "$3B spent. May fail like actual history. Could end in -$13.7B total loss.",
                    upside: "If successful, 25%+ share. Strong #2. Long-term dominance. Beat iOS.",
                    cost: "$3B",
                    consequences: {
                        immediate: {
                            cash: -1.0,
                            stock: -3.5,
                            marketShare: 0,
                            morale: "all-in",
                            unlockedArtifacts: [],
                            narrative: `Microsoft doubles down. $3B investment to "win mobile." Ballmer's final push before retirement: "We will be #2 platform or we will have spent everything trying."

Strategy: Acquire Nokia's device business ($7.2B), increase developer payments ($1B more), massive marketing ($800M/year), carrier incentives ($400M). "Whatever it takes."

Wall Street divided. Bulls: "Finally showing conviction." Bears: "Throwing good money after bad. Already spent $5B at 5% share. Now $3B more?"

Board approves narrowly. One director resigns: "This is sunk cost fallacy. We're defending past investments, not making rational new ones." CFO warns: "If this fails, total loss exceeds $15B."`
                        },
                        delayed: {
                            date: "Q4 2016",
                            cash: -5.2,
                            stock: -8.5,
                            marketShare: -2,
                            morale: "defeated",
                            narrative: `Four years later: The $3B bet failed catastrophically.

Nokia acquisition (2014): $7.2B paid. Writedown (2015): $7.6B. Destroyed value. Nokia employees laid off. Integration disaster. HTC/Samsung completely abandoned Windows Phone after Nokia acquisition.

Market share: 5% → 3% (2013-2016). Apps peaked at 340K then declined as developers left. Snapchat never came. Google actively blocked apps.

Final accounting (2007-2016):
• Total spent: $15.2B+ (development $2B, Nokia partnership $6B, acquisition $7.2B+)
• Revenue: ~$1.5B
• NET LOSS: -$13.7B ❌

July 2017: Satya Nadella announces Windows Phone discontinuation. "We will no longer develop new features or hardware." The $15B bet on mobile is over.`
                        }
                    }
                },
                {
                    id: "niche-focus",
                    title: "Niche Focus",
                    description: "Enterprise only. Give up consumer completely. Target 12% enterprise share.",
                    risk: "Lose consumer developers. Smaller ecosystem. Limited growth ceiling.",
                    upside: "Play to strengths. Lower cost ($200M/year). Highly profitable niche.",
                    cost: "$200M/year",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                },
                {
                    id: "merge-blackberry",
                    title: "Merge with BlackBerry",
                    description: "Acquire BlackBerry. Combine 18% + 7% = 25% share. Joint platform.",
                    risk: "$5B acquisition. Integration nightmare. BlackBerry's decline accelerating.",
                    upside: "25% share overnight. Combined enterprise strength. Patents.",
                    cost: "$5B",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                }
            ]
        },

        {
            id: "d6-long-term",
            type: "decision",
            date: "JAN 2017",
            timeMarker: "JAN 2017",
            title: "The Long-Term Strategy",
            storyImage: "☁️",
            storyText: `It's 2017. You've done it. Windows Phone is profitable: $600M revenue, $240M profit, 15% share.

But context matters: You're now Satya Nadella (became CEO 2014). Microsoft's market cap went $300B → $500B. What drove growth? Azure $20B (100% YoY growth), Office 365 $15B, LinkedIn $5B, Gaming $10B.

Windows Phone? It's 0.2% of Microsoft's revenue.

"Mobile first, cloud first" doesn't mean Windows Phone first—it means Microsoft services on EVERY device (iOS, Android, WP). Cloud is the real battle.

Maintain Windows Phone as profitable small business? Or exit and focus 100% on Azure/AI? Is 0.2% of revenue worth management attention?`,

            objective: "Windows Phone's Future",
            availableInfo: ["satya-cloud-2017"],

            options: [
                {
                    id: "maintain-niche",
                    title: "Maintain Sustainable Niche ⭐",
                    description: "Keep Windows Phone as profitable small business. $300M/year maintenance mode.",
                    risk: "Might slowly decline to 12%. Opportunity cost—what else could $300M do?",
                    upside: "Profitable niche serves 180M users. Not exciting but sustainable. Doesn't distract from cloud.",
                    cost: "$300M/year",
                    consequences: {
                        immediate: {
                            cash: -0.3,
                            stock: +1.0,
                            marketShare: 0,
                            morale: "focused",
                            unlockedArtifacts: ["microsoft-lumia-950"],
                            narrative: `Satya Nadella's decision: Maintain Windows Phone as profitable niche. $300M/year investment (maintenance mode).

Strategic balance:
• 95% of company focus: Azure, AI, Office 365, LinkedIn
• 5% of company focus: Windows Phone (small profitable business)

Continue enterprise focus, support OEMs, serve loyal users. BUT: Don't let it distract from cloud growth opportunities.

Wall Street approves: "Satya clearly prioritizes cloud growth while maintaining profitable mobile presence." Stock rises on clarity.

Internal message: "Windows Phone didn't win platform war. But we didn't lose $13B trying. That's its own success."`
                        },
                        delayed: {
                            date: "2024",
                            cash: +0.5,
                            stock: +15.0,
                            marketShare: -3,
                            morale: "proud",
                            narrative: `Seven years later (2017-2024): Windows Phone continues as profitable 12% platform.

Market share: 15% → 12% (slow decline, stabilized)
Apps: 450,000 by 2024 (enough—98% top 200 coverage)
Annual: $500-700M revenue, $150-250M profit
Cumulative profit (2014-2024): +$2.1B

TOTAL JOURNEY (2009-2024):
• Investment: $2.0 billion
• Revenue: $2.4 billion  
• NET PROFIT: +$400 MILLION ✓

Users: 180M active worldwide. Enterprise, enthusiasts, Microsoft ecosystem users, emerging markets.

Meanwhile, Microsoft became $3.2 TRILLION company (most valuable) on Azure/Cloud success. Windows Phone is 0.2% of business but serves real users profitably.

"Being #3 is okay if you're profitable and not losing focus." - Satya Nadella

THE SUSTAINABLE THIRD PATH: +$400M profit vs actual history's -$13.7B loss. Saved $14.1 BILLION.`
                        }
                    }
                },
                {
                    id: "double-down",
                    title: "Double Down",
                    description: "Try to grow Windows Phone again. $2B investment push for 20%+ share.",
                    risk: "Likely fails. Market consolidated. Would end like actual history. Lose $2B more.",
                    upside: "If successful, reclaim #2 spot. But odds very low by 2017.",
                    cost: "$2B",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                },
                {
                    id: "wind-down",
                    title: "Wind Down",
                    description: "Exit mobile completely. Shut down Windows Phone. Focus 100% on cloud/AI.",
                    risk: "Abandon 180M users. Lose mobile platform. No hardware presence.",
                    upside: "Free up $300M/year for Azure. Full focus on cloud. Clear exit.",
                    cost: "$0",
                    consequences: {
                        immediate: {
                            cash: +0.2,
                            stock: +2.5,
                            marketShare: 0,
                            morale: "resigned",
                            unlockedArtifacts: [],
                            narrative: `July 2017: Satya Nadella announces Windows Phone discontinuation. "We will continue to support existing users but will no longer develop new features or hardware."

Wall Street celebrates. Stock jumps 8%. "Finally, Microsoft exits money-losing mobile distraction to focus on cloud growth." Analysts: "Cutting losses. Smart capital allocation."

Internally, Windows Phone team devastated. 10 years of work ended. Thousands laid off. But Azure team celebrates—resources shift to cloud. "Mobile first meant mobile SERVICES (Office, OneDrive on iOS/Android), not Windows Phone."

Users abandoned. 3% market share means app support already dying. Within 18 months, major apps (banking, Uber, Instagram) stop updates. Platform becomes zombie—technically alive but effectively dead.

The $15.2B mobile adventure ends. Lesson learned: Know when to exit.`
                        },
                        delayed: {
                            date: "2024",
                            cash: +2.0,
                            stock: +25.0,
                            marketShare: -3,
                            morale: "focused",
                            narrative: `Seven years later (2017-2024): Windows Phone is history. The "what if" platform.

Final tally (2007-2017):
• Investment: $15.2B
• Revenue: $1.5B
• NET LOSS: -$13.7B ❌

But Microsoft thrived without mobile:
• Market cap: $500B (2017) → $3.2T (2024)
• Azure: $60B annual revenue, #2 cloud provider
• Office 365: 400M subscribers, $50B revenue
• Gaming: Xbox + Activision, $20B revenue
• AI: ChatGPT partnership, Copilot everywhere

Windows Phone's $300M/year budget went to Azure/AI instead. That investment returned 50X more value.

Lesson learned: Sometimes the right decision is EXIT. Microsoft's mobile failure taught it to focus on cloud success. The $13.7B loss was expensive tuition.`
                        }
                    }
                },
                {
                    id: "open-source",
                    title: "Open Source",
                    description: "Open source Windows Phone. Let community maintain. Microsoft provides minimal support.",
                    risk: "Community may not sustain it. Fragmentation. Loss of control.",
                    upside: "Minimal cost ($50M/year). Community innovation. Hobbyist continuation.",
                    cost: "$50M/year",
                    disabled: true,
                    disabledReason: "Path not implemented in this playthrough"
                }
            ]
        }
    ]
};
