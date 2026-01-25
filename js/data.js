// ========================================
// AURORA LABS - SCENARIO DATA (NEW STRUCTURE)
// Microsoft Mobile Strategy - Branching Decision Tree
// TEST DATA WITH CLEAR LABELS
// ========================================

const scenarioData = {
    // 1. SCENARIO METADATA
    id: "msft-mobile-wars",
    title: "The Mobile Wars",
    period: "2007-2017",

    // 2. INITIAL GAME STATE
    initialMetrics: {
        date: "JAN 2007",
        ceo: "S. Ballmer",
        cash: 34.0,
        marketCap: 250,  // Starting market cap in billions (JAN 2007) - kept internally, not displayed
        marketShare: 42,  // Starting at 42% Windows Mobile market share
        morale: "high",
        // Mobile Division P&L (displayed to user instead of marketCap)
        mobileRevenue: 0.8,  // $800M/year - Windows Mobile licensing (~$15-20/device × 14M devices)
        mobileCosts: 0.4     // $400M/year - Development and operations costs
    },

    // 3. INITIAL PATH STATE
    initialPathState: {
        d1Choice: null,
        d2Choice: null,
        d2Branch: null,
        d3Archetype: null,
        d3Variant: null,
        d4State: null,
        d5State: null,
        kinNarrativeActive: false,
        earlyEnding: null
    },

    // 4. ARTIFACTS DATABASE
    artifacts: {
        // ═══════════════════════════════════════════════════════════
        // D1 ARTIFACTS
        // ═══════════════════════════════════════════════════════════
        "artifact-wm6": {
            id: "artifact-wm6",
            name: "HTC TyTN II (Windows Mobile 6)",
            category: "Device",
            rarity: "Uncommon",
            unlockedBy: "Chose 'Reinforce Enterprise' in D1",
            caseNumber: "WM-001",
            forensicTitle: "The Enterprise Champion",
            status: "DISCONTINUED",
            casualties: "Windows Mobile platform",
            description: "The pinnacle of Windows Mobile enterprise devices. Slide-out QWERTY keyboard, Exchange push email, stylus-driven interface. Everything the iPhone wasn't—and everything the market was about to stop wanting.",
            model3D: '<i class="ph ph-device-mobile" style="font-size: 8rem;"></i>',
            timelineProgress: 25,
            timelineMarkers: [
                { label: "Launch", value: "OCT 2007" },
                { label: "Peak Sales", value: "Q1 2008" },
                { label: "Discontinued", value: "2010" }
            ],
            hotspots: [],
            failureTags: ["No App Ecosystem", "Stylus Dependent", "Resistive Touch", "Windows Mobile Legacy"],
            stats: {
                "Display": "2.8\" 240x320 resistive",
                "Keyboard": "Slide-out QWERTY",
                "Processor": "Qualcomm MSM7200 400MHz",
                "OS": "Windows Mobile 6 Professional",
                "Price": "$549 (with contract)",
                "Units Sold": "~2M worldwide"
            },
            story: "The TyTN II represented everything Microsoft believed smartphones should be: productivity-focused, keyboard-equipped, IT-manageable. CIOs loved it. Enterprise customers deployed thousands. Then their employees started bringing iPhones to work anyway."
        },

        // ═══════════════════════════════════════════════════════════
        // D2-B ARTIFACTS - CONSUMER PATH
        // ═══════════════════════════════════════════════════════════
        "artifact-kin": {
            id: "artifact-kin",
            name: "Microsoft Kin One",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "Chose 'Build Own Hardware' or 'Ship Pink Now' in D2-B Consumer Path",
            caseNumber: "KIN-001",
            forensicTitle: "The 48-Day Phone",
            status: "DISCONTINUED",
            casualties: "~$1,000,000,000",
            description: "Microsoft's first consumer phone. A social-first device that bet everything on being the 'anti-smartphone'—and lost everything in 48 days. May 6 - June 30, 2010.",
            model3D: '<img src="assets/images/1005-MSKinOne-hmed-1244p.webp" alt="Microsoft Kin One" style="max-width: 100%; max-height: 100%; object-fit: contain;">',
            timelineProgress: 100,
            timelineMarkers: [
                { label: "Announced", value: "APR 2010" },
                { label: "Launch", value: "MAY 6, 2010" },
                { label: "Killed", value: "JUN 30, 2010" }
            ],
            hotspots: [
                {
                    x: 50,
                    y: 15,
                    title: "Evidence #1: Identity Crisis",
                    description: "Kin bet everything on social—a 'Spot' feature to share photos instantly, deep social network integration, cloud backup of every moment. But it wasn't a smartphone. No apps. No games. Just... social. In 2010, that meant Facebook. And Facebook worked fine on every other phone."
                },
                {
                    x: 20,
                    y: 40,
                    title: "Evidence #2: The App Gap",
                    description: "Zero third-party apps. Not 'limited apps.' Zero. Microsoft positioned this as a feature—'everything you need, nothing you don't.' But users saw a phone that couldn't run Angry Birds while the iPhone had 200,000 apps. The Kin couldn't even run Windows Phone 7 apps that were coming later that year."
                },
                {
                    x: 80,
                    y: 40,
                    title: "Evidence #3: Hardware Nostalgia",
                    description: "A slide-out QWERTY keyboard in 2010—two years after the iPhone proved touch was the future. Microsoft designers genuinely believed teens wanted to type with their thumbs on tiny physical keys. They were building for a user that no longer existed."
                },
                {
                    x: 35,
                    y: 70,
                    title: "Evidence #4: The $30 Problem",
                    description: "Kin required a $30/month smartphone data plan—the same as an iPhone. For that price, you got a phone that couldn't do smartphone things. When Verizon briefly tested a $15 'feature phone' plan, sales tripled. Then they stopped the test. The math never worked."
                },
                {
                    x: 65,
                    y: 85,
                    title: "Evidence #5: Dead on Arrival",
                    description: "48 days from launch to death. Approximately 500 units sold in the first week. Microsoft had already pivoted to Windows Phone 7—Kin was an orphan before it shipped. The team knew. Verizon knew. Everyone knew except the customers who bought one."
                }
            ],
            failureTags: ["No App Ecosystem", "Identity Crisis", "Wrong Price Point", "Obsolete Hardware", "Platform Orphan"],
            stats: {
                "Lifespan": "48 days",
                "Launch Date": "May 6, 2010",
                "Death Date": "June 30, 2010",
                "Est. Loss": "~$1 Billion",
                "Units Sold": "~8,000 (estimated)",
                "Data Plan": "$30/month (smartphone tier)",
                "Apps Available": "0 (zero)"
            },
            story: "The Kin was Microsoft's billion-dollar bet that social could beat apps. It couldn't. Born from Project Pink—a skunkworks effort to build a 'phone for the social generation'—Kin arrived two years too late with a philosophy three years too early. It had no apps because Microsoft believed the future was the cloud. It had a keyboard because someone thought teens still wanted one. It cost smartphone money for feature phone capabilities. The math never worked. The vision never connected. 48 days after launch, Microsoft killed it. The lesson was expensive but clear: in mobile, you can be different or you can be cheap. Being neither is fatal."
        },

// ========================================
// BATCH 1: THE IPHONE TRILOGY
// ========================================

"artifact-iphone-2g": {
    id: "artifact-iphone-2g",
    name: "iPhone (1st Gen)",
    category: "Device",
    rarity: "Legendary",
    unlockedBy: "Found in D1 Info Cards & Backstory",
    caseNumber: "AAPL-001",
    forensicTitle: "The God Particle",
    status: "DISCONTINUED",
    casualties: "Physical Keyboards & Styluses",
    description: "The device that reset the industry clock to Year Zero. It lacked 3G, GPS, and an App Store, but its multi-touch glass interface rendered every competitor obsolete overnight.",
    model3D: '<i class="ph ph-device-mobile" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Keynote", value: "JAN 9, 2007" },
        { label: "Launch", value: "JUN 29, 2007" },
        { label: "End", value: "JUL 15, 2008" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: The Walled Garden",
            description: "At launch, there was no App Store. Steve Jobs insisted developers build 'Web 2.0' apps in Safari. It took a year of jailbreaking pressure to force Apple to open the gates."
        },
        {
            x: 80,
            y: 85,
            title: "Evidence #2: The 'Jesus Phone' Hype",
            description: "Critics mocked the $499 price and lack of physical keys. Steve Ballmer famously laughed, 'It doesn't appeal to business customers because it doesn't have a keyboard.' He was wrong."
        }
    ],
    failureTags: ["No 3G", "No App Store", "Price Cut Controversy"],
    stats: {
        "Launch Price": "$499 (4GB) / $599 (8GB)",
        "Units Sold": "6.1 Million",
        "Screen": "3.5-inch (320x480)",
        "Network": "2G EDGE (Slow)"
    },
    story: "Before this device, a 'smartphone' was a plastic brick with a hundred tiny buttons. The iPhone 2G proved that software, not hardware, defined the experience. Despite its flaws (slow internet, no video recording, no copy-paste), it sold 1 million units in 74 days. It didn't just kill competitors; it killed the concept of the 'mobile phone' and replaced it with the 'pocket computer.'"
},

"artifact-iphone-3g": {
    id: "artifact-iphone-3g",
    name: "iPhone 3G",
    category: "Device",
    rarity: "Rare",
    unlockedBy: "Recovered from D2-A Info Cards",
    caseNumber: "AAPL-002",
    forensicTitle: "The Trojan Horse",
    status: "DISCONTINUED",
    casualties: "BlackBerry's Enterprise Monopoly",
    description: "The first iPhone for the masses. It added 3G speeds, GPS, and most importantly, the App Store—creating a billion-dollar economy out of thin air.",
    model3D: '<i class="ph ph-device-mobile" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "JUL 11, 2008" },
        { label: "1 Million Sold", value: "JUL 14, 2008" },
        { label: "End", value: "JUN 7, 2010" }
    ],
    hotspots: [
        {
            x: 50,
            y: 20,
            title: "Evidence #1: The App Store",
            description: "Launched with just 500 apps, this feature changed software distribution forever. In its first weekend, users downloaded 10 million apps."
        },
        {
            x: 30,
            y: 80,
            title: "Evidence #2: Plastic Fatigue",
            description: "To drop the price to $199, Apple switched from aluminum to plastic. This led to widespread reports of hairline cracks near the dock connector, especially on white models."
        }
    ],
    failureTags: ["Plastic Cracks", "Battery Drain", "Slow Updates"],
    stats: {
        "Launch Price": "$199 (with contract)",
        "First Weekend": "1 Million Units",
        "App Store": "Opened w/ 500 Apps",
        "Material": "Polycarbonate Plastic"
    },
    story: "If the original iPhone was the prototype, the 3G was the product. By subsidizing the price down to $199 and adding Exchange support, Apple broke the enterprise barrier that protected BlackBerry and Windows Mobile. The introduction of the App Store meant the phone you bought grew better every day. It was the moment the smartphone became a platform."
},

"artifact-iphone-4": {
    id: "artifact-iphone-4",
    name: "iPhone 4",
    category: "Device",
    rarity: "Rare",
    unlockedBy: "Decrypted from D3 Info Cards",
    caseNumber: "AAPL-004",
    forensicTitle: "The Glass Sandwich",
    status: "DISCONTINUED",
    casualties: "Pixelated Displays",
    description: "An industrial design masterpiece composed of glass and steel. It introduced the 'Retina' display and the front-facing camera, normalizing video calls.",
    model3D: '<i class="ph ph-device-mobile" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Leak", value: "APR 2010" },
        { label: "Launch", value: "JUN 24, 2010" },
        { label: "End", value: "SEP 10, 2013" }
    ],
    hotspots: [
        {
            x: 10,
            y: 90,
            title: "Evidence #1: Antennagate",
            description: "The stainless steel band served as the antenna. Holding the phone in the 'death grip' bridged the antennas and dropped calls. Steve Jobs famously replied: 'Just avoid holding it in that way.'"
        },
        {
            x: 50,
            y: 40,
            title: "Evidence #2: The Lost Prototype",
            description: "Months before launch, an engineer left a prototype in a bar. It was sold to Gizmodo for $5,000, leading to a police raid and the biggest leak in Apple history."
        }
    ],
    failureTags: ["Antennagate", "Shattered Glass", "Death Grip"],
    stats: {
        "Resolution": "960x640 (326 ppi)",
        "Thickness": "9.3mm (Thinnest at time)",
        "Camera": "5MP + 720p Video",
        "First Weekend": "1.7 Million Units"
    },
    story: "The iPhone 4 set the template for modern premium smartphone construction: glass front, glass back, metal frame. It was beautiful, fragile, and controversial. The 'Retina' display made pixels invisible to the human eye, forcing every other manufacturer to upgrade their screens. Despite the 'Antennagate' scandal, it remained Apple's longest-supported iPhone for years."
},

// ========================================
// BATCH 2: THE WINDOWS MOBILE RESISTANCE
// ========================================

"artifact-htc-tytn2": {
    id: "artifact-htc-tytn2",
    name: "HTC TyTN II (Kaiser)",
    category: "Device",
    rarity: "Uncommon",
    unlockedBy: "Unlocked via D1 Enterprise Path (or existing artifact-wm6)",
    caseNumber: "HTC-007",
    forensicTitle: "The Polished Brick",
    status: "DISCONTINUED",
    casualties: "Pocket Space",
    description: "The ultimate power-user device before the iPhone changed the rules. With a tilting screen, full keyboard, GPS, and 3G, it could do everything—except fit comfortably in your pocket.",
    model3D: '<i class="ph ph-gear" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "SEP 2007" },
        { label: "Peak", value: "Q1 2008" },
        { label: "Obsolescence", value: "LATE 2008" }
    ],
    hotspots: [
        {
            x: 50,
            y: 40,
            title: "Evidence #1: The Tilt Mechanism",
            description: "The screen didn't just slide; it tilted up 40 degrees. It felt like a miniature laptop. Business users loved it; consumers found it bafflingly thick (19mm)."
        },
        {
            x: 20,
            y: 70,
            title: "Evidence #2: Drivergate",
            description: "Despite having a dedicated ATI graphics chip, HTC never released the proper drivers. The interface remained sluggish and video playback was jerky, sparking a massive class-action lawsuit threat from the xda-developers community."
        }
    ],
    failureTags: ["Missing Drivers", "Bulk Factor", "Resistive Screen"],
    stats: {
        "OS": "Windows Mobile 6",
        "Weight": "190g (Heavy)",
        "Input": "Resistive Touch + Stylus + QWERTY",
        "Price": "~$800 (Unlocked)"
    },
    story: "The TyTN II was the apex of the 'Kitchen Sink' philosophy: pack every possible feature into one device. For a brief moment in late 2007, it was the most powerful phone on Earth. But it represented the end of an era. It was a tool for IT managers, not a lifestyle object for humans. When the iPhone 3G arrived with its fluid interface, the TyTN II instantly looked like a relic from the 90s."
},

"artifact-htc-touch-diamond": {
    id: "artifact-htc-touch-diamond",
    name: "HTC Touch Diamond",
    category: "Device",
    rarity: "Rare",
    unlockedBy: "Recovered from D1 Consumer Offensive Path",
    caseNumber: "HTC-008",
    forensicTitle: "The Beautiful Lag",
    status: "DISCONTINUED",
    casualties: "Battery Life",
    description: "HTC's first serious attempt to beat Apple on design. It was stunning, geometric, and featured the 'TouchFLO 3D' interface to hide the ugly Windows Mobile OS beneath.",
    model3D: '<i class="ph ph-diamond" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "MAY 2008" },
        { label: "US Release", value: "SEP 2008" },
        { label: "End", value: "2009" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: TouchFLO 3D",
            description: "A gorgeous, animated 3D interface that let you flip through album art and weather. It looked better than the iPhone, but the processor couldn't keep up, resulting in beautiful but constant lag."
        },
        {
            x: 30,
            y: 80,
            title: "Evidence #2: The 900mAh Mistake",
            description: "To make the phone smaller than the iPhone, HTC used a tiny 900mAh battery. The powerful screen and background processes drained it in less than 4 hours of heavy use. It was a landline phone that you carried in your pocket."
        }
    ],
    failureTags: ["Overheating", "Laggy UI", "Poor Battery"],
    stats: {
        "Screen": "2.8\" VGA (High Res)",
        "Battery": "900 mAh (Critical Failure)",
        "UI": "TouchFLO 3D",
        "Back Plate": "Faceted Geometric Plastic"
    },
    story: "The Diamond proved HTC could design hardware as well as Apple. The faceted back was iconic. But it also proved that Windows Mobile was a corpse. HTC spent millions building a beautiful 'mask' (TouchFLO) to cover the OS, but the mask was too heavy for the hardware to wear. It remains one of the best-looking failures in mobile history."
},

"artifact-htc-hd2": {
    id: "artifact-htc-hd2",
    name: "HTC HD2 (Leo)",
    category: "Device",
    rarity: "Legendary",
    unlockedBy: "Found in D2-B Paths",
    caseNumber: "HTC-009",
    forensicTitle: "The Undying King",
    status: "KILLED (By OS)",
    casualties: "Windows Mobile Ecosystem",
    description: "The greatest Windows Mobile device ever made. Featuring a massive 4.3-inch screen and a 1GHz processor, it was a hardware beast shackled to a dying operating system.",
    model3D: '<i class="ph ph-crown" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "NOV 2009" },
        { label: "WinMo Death", value: "FEB 2010" },
        { label: "Modder Era", value: "2010-2020" }
    ],
    hotspots: [
        {
            x: 50,
            y: 20,
            title: "Evidence #1: The Screen",
            description: "At 4.3 inches, critics called it 'comically large' and 'a skateboard.' Today, it would be considered 'mini.' It was the first Windows phone with a capacitive (multi-touch) screen."
        },
        {
            x: 50,
            y: 60,
            title: "Evidence #2: The Lazarus Effect",
            description: "Because the hardware was so powerful and open, the community refused to let it die. Hackers ported Android, Windows Phone 7, Windows RT, Ubuntu, and even Android 7.0 Nougat to this device. It survived 6 years past its expiration date."
        }
    ],
    failureTags: ["OS Abandoned", "Pink Camera Spot", "Overheating Buttons"],
    stats: {
        "CPU": "1GHz Snapdragon (First of its kind)",
        "Screen": "4.3\" WVGA",
        "OS at Launch": "Windows Mobile 6.5",
        "OS via Hackers": "Android 2.2 -> 7.0"
    },
    story: "The HD2 is a tragedy and a triumph. It was the perfect hardware released three months before Microsoft killed the OS it ran on (to launch Windows Phone 7). Buyers were stranded with no apps and no future. But the hardware was so far ahead of its time that the community adopted it, hacking it to run every operating system imaginable. It stands as a monument to what HTC was capable of at its peak."
},


// ========================================
// BATCH 3: THE FALL OF NOKIA
// ========================================

"artifact-nokia-n95": {
    id: "artifact-nokia-n95",
    name: "Nokia N95",
    category: "Device",
    rarity: "Epic",
    unlockedBy: "Acquired via D1 Acquire Nokia path",
    caseNumber: "NOK-095",
    forensicTitle: "The Last Emperor",
    status: "OBSOLETE",
    casualties: "Nokia's complacency",
    description: "The peak of the 'old world.' A dual-sliding multimedia computer that could do absolutely everything—except offer a fluid user experience.",
    model3D: '<i class="ph ph-device-mobile-camera" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "MAR 2007" },
        { label: "Peak Share", value: "Q4 2007" },
        { label: "Decline", value: "2008" }
    ],
    hotspots: [
        {
            x: 50,
            y: 40,
            title: "Evidence #1: The Dual Slider",
            description: "Slide it up for a keypad; slide it down for dedicated media buttons. It was a mechanical marvel that felt satisfyingly clicky, but added thickness (21mm) that made it feel like a brick compared to the iPhone."
        },
        {
            x: 80,
            y: 20,
            title: "Evidence #2: 5MP Carl Zeiss",
            description: "In 2007, this camera destroyed everything else. It took print-quality photos and DVD-quality video. It was so good that Nokia executives believed people would never trade 'quality' for a 'fancy touchscreen.' They were wrong."
        }
    ],
    failureTags: ["Symbian Bloat", "Resistive Thinking", "Battery Drain"],
    stats: {
        "Camera": "5MP Carl Zeiss Tessar",
        "GPS": "Integrated (First of its kind)",
        "Network": "3.5G (HSDPA)",
        "Price": "€550 (Approx $730)"
    },
    story: "The N95 was the best phone in the world on paper. It had GPS, Wi-Fi, 3G, and a killer camera when the iPhone had none of those. But it ran Symbian S60—a clunky, menu-heavy OS designed for buttons, not humans. It represents the fatal error of the incumbent: believing that features matter more than feelings."
},

"artifact-nokia-n9": {
    id: "artifact-nokia-n9",
    name: "Nokia N9",
    category: "Device",
    rarity: "Legendary",
    unlockedBy: "Found in D3 MeeGo Paths",
    caseNumber: "NOK-009",
    forensicTitle: "The Perfect Orphan",
    status: "KILLED",
    casualties: "MeeGo OS",
    description: "The phone that proved Nokia could still innovate, released after the CEO had already announced its death. A button-less 'Swipe' masterpiece that influenced the iPhone X years later.",
    model3D: '<i class="ph ph-corners-out" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "SEP 2011" },
        { label: "Elop Memo", value: "FEB 2011" },
        { label: "End", value: "DEC 2011" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: Swipe UI",
            description: "Zero home buttons. You just swiped from the edge to go home. It was fluid, intuitive, and years ahead of iOS and Android gestures. Reviewers called it 'the most natural way to use a phone.'"
        },
        {
            x: 50,
            y: 80,
            title: "Evidence #2: Polycarbonate Unibody",
            description: "Instead of painted plastic, the color was infused directly into the material. If you scratched it, it was still cyan underneath. It felt warm and premium, a design language that defined the Lumia era."
        }
    ],
    failureTags: ["Dead on Arrival", "Burning Platform", "No Ecosystem"],
    stats: {
        "OS": "MeeGo 1.2 Harmattan",
        "Screen": "3.9\" AMOLED",
        "Processor": "1GHz Cortex A8",
        "Units": "Limited Release"
    },
    story: "The N9 is a tragedy. Before it even hit shelves, CEO Stephen Elop issued his famous 'Burning Platform' memo, partnering with Microsoft and effectively announcing that MeeGo was dead. People bought the N9 knowing it had no future, simply because it was that beautiful. It remains the 'ghost in the machine'—its body was reused for the Lumia 800, but its soul (MeeGo) was lost forever."
},

"artifact-nokia-lumia-800": {
    id: "artifact-nokia-lumia-800",
    name: "Nokia Lumia 800",
    category: "Device",
    rarity: "Uncommon",
    unlockedBy: "Recovered from D3 Nokia Partnership",
    caseNumber: "NOK-800",
    forensicTitle: "The Trojan Horse",
    status: "DISCONTINUED",
    casualties: "Nokia's Independence",
    description: "The first fruit of the Microsoft partnership. Essentially a Nokia N9 re-engineered to run Windows Phone, marking the point of no return for the Finnish giant.",
    model3D: '<i class="ph ph-windows-logo" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "NOV 2011" },
        { label: "Battery Fix", value: "JAN 2012" },
        { label: "Orphaned", value: "SEP 2012" }
    ],
    hotspots: [
        {
            x: 50,
            y: 30,
            title: "Evidence #1: The PenTile Screen",
            description: "While it looked like the N9, it used a cheaper PenTile matrix screen, making text look fuzzy. It was the first sign that hardware compromises were being made to fit Microsoft's chassis requirements."
        },
        {
            x: 20,
            y: 60,
            title: "Evidence #2: The Battery Bug",
            description: "A software glitch prevented the phone from using its full battery capacity at launch. While fixed later, it damaged early reviews, reinforcing the narrative that Windows Phone wasn't ready."
        }
    ],
    failureTags: ["Beta Test", "No Multitasking", "App Gap"],
    stats: {
        "OS": "Windows Phone 7.5",
        "Storage": "16GB (No SD Card)",
        "Battery": "1450 mAh",
        "Code Name": "Sea Ray"
    },
    story: "The Lumia 800 was 'The Real Windows Phone.' It had the best navigation (Nokia Drive) and the best design. But it launched into a vacuum. Windows Phone 7 was missing basic features, and less than a year later, Microsoft announced Windows Phone 8—which wouldn't run on the Lumia 800. Buyers were left with an expensive, beautiful paperweight."
},


// ========================================
// BATCH 4: THE LUMIA DEATH MARCH
// ========================================

"artifact-nokia-lumia-900": {
    id: "artifact-nokia-lumia-900",
    name: "Nokia Lumia 900",
    category: "Device",
    rarity: "Uncommon",
    unlockedBy: "Recovered from D3/D4 Paths",
    caseNumber: "NOK-900",
    forensicTitle: "The False Prophet",
    status: "OBSOLETE",
    casualties: "Early Adopter Trust",
    description: "Launched with a massive 'Smartphone Beta Test is Over' campaign in Times Square. It was the hero device for AT&T, until Microsoft announced Windows Phone 8 three months later, rendering this flagship instantly obsolete.",
    model3D: '<i class="ph ph-device-mobile" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "CES Debut", value: "JAN 2012" },
        { label: "Launch", value: "APR 2012" },
        { label: "Orphaned", value: "JUN 2012" }
    ],
    hotspots: [
        {
            x: 50,
            y: 40,
            title: "Evidence #1: The Kernel Trap",
            description: "The 900 ran on the Windows CE kernel (WP7). The new OS (WP8) ran on the NT kernel. Microsoft knew they couldn't upgrade the 900 before they even launched it. They sold a dead end to their most loyal fans."
        },
        {
            x: 50,
            y: 70,
            title: "Evidence #2: The $100 Credit",
            description: "A data connectivity bug at launch forced Nokia to give every buyer a $100 credit. Since the phone cost $99 on contract, they essentially gave it away for free. It still didn't sell."
        }
    ],
    failureTags: ["OS Orphan", "Marketing Hubris", "Single Core"],
    stats: {
        "Screen": "4.3\" AMOLED ClearBlack",
        "Processor": "1.4 GHz Single Core",
        "Campaign Cost": "$100 Million+",
        "Lifespan": "3 Months (Flagship status)"
    },
    story: "The Lumia 900 was supposed to be Nokia's re-entry into the US market. The 'Beta Test is Over' campaign insulted iPhone and Android users, promising a 'real' phone. But when Microsoft announced that existing devices couldn't upgrade to Windows Phone 8, the 900 became the ultimate beta test itself. It proved that in the Osborne Effect, you don't just kill your current sales; you kill your future trust."
},

"artifact-nokia-lumia-520": {
    id: "artifact-nokia-lumia-520",
    name: "Nokia Lumia 520",
    category: "Device",
    rarity: "Common",
    unlockedBy: "Found in D4 Accept Niche Path",
    caseNumber: "NOK-520",
    forensicTitle: "The Cannibal",
    status: "SUCCESS (Phyrric)",
    casualties: "High-End Profit Margins",
    description: "The best-selling Windows Phone of all time. A budget masterpiece that captured 27% of the entire ecosystem, proving that people didn't want Windows Phone; they wanted a cheap Nokia.",
    model3D: '<i class="ph ph-tag" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "APR 2013" },
        { label: "Peak Share", value: "LATE 2013" },
        { label: "End", value: "2015" }
    ],
    hotspots: [
        {
            x: 20,
            y: 80,
            title: "Evidence #1: The Price Floor",
            description: "At $50-99 off-contract, it was an impulse buy. It ran smoother than any cheap Android phone. But it anchored the value of Windows Phone at $50. No one wanted to pay $600 for a Lumia 920 when the 520 did 90% of the same tasks."
        },
        {
            x: 60,
            y: 40,
            title: "Evidence #2: The 512MB RAM Limit",
            description: "To cut costs, it had only 512MB of RAM. This meant many high-end games and apps wouldn't run on the most popular phone in the ecosystem. Developers stopped building high-end apps because the 'average' user couldn't run them."
        }
    ],
    failureTags: ["Low Margin", "Ecosystem Anchor", "Cannibalization"],
    stats: {
        "Units Sold": "~12 Million+",
        "Market Share": "27% of all WP devices",
        "RAM": "512 MB",
        "Price": "$99 (Launch)"
    },
    story: "The Lumia 520 is a lesson in 'winning the battle, losing the war.' It gave Windows Phone massive volume numbers, keeping the OS alive in statistics. But it destroyed the business model. It trained users that Windows Phones were 'cheap burner phones,' making it impossible for Nokia (and later Microsoft) to ever sell a flagship device again."
},

"artifact-nokia-lumia-1020": {
    id: "artifact-nokia-lumia-1020",
    name: "Nokia Lumia 1020",
    category: "Device",
    rarity: "Epic",
    unlockedBy: "Acquired via D4 Acquire Nokia Path",
    caseNumber: "NOK-1020",
    forensicTitle: "The Cyclops",
    status: "DISCONTINUED",
    casualties: "Point-and-Shoot Cameras",
    description: "A 41-megapixel monster. It featured a sensor larger than most dedicated cameras, Xenon flash, and lossless zoom. It remains a cult classic for photographers, even a decade later.",
    model3D: '<i class="ph ph-camera" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "JUL 2013" },
        { label: "Lumia Black", value: "JAN 2014" },
        { label: "End", value: "SEP 2014" }
    ],
    hotspots: [
        {
            x: 50,
            y: 30,
            title: "Evidence #1: The Hump",
            description: "The massive camera module protruded significantly. You couldn't lay it flat on a table. It was a camera that made phone calls, not a phone with a camera."
        },
        {
            x: 80,
            y: 60,
            title: "Evidence #2: Shot-to-Shot Lag",
            description: "Processing a 41MP image took 3-4 seconds. You could take the most beautiful photo in the world, but you couldn't take a second one until the moment had passed. The dual-core processor simply couldn't handle the data."
        }
    ],
    failureTags: ["Slow Shutter", "Niche Product", "Hardware Bloat"],
    stats: {
        "Sensor": "41MP 1/1.5\" BSI",
        "Lens": "Zeiss 6-element",
        "Zoom": "3x Lossless Digital",
        "Flash": "Xenon + LED"
    },
    story: "The 1020 was the final flex of Nokia's engineering muscle before the acquisition. It was 'PureView' in its truest form. While flawed by the slow processor of its time, it proved that mobile photography could rival DSLRs. It was a masterpiece that no one bought, because in 2013, people wanted Instagram speed, not National Geographic resolution."
},

"artifact-nokia-lumia-950": {
    id: "artifact-nokia-lumia-950",
    name: "Nokia Lumia 950",
    category: "Device",
    rarity: "Rare",
    unlockedBy: "Found in D5 Fight to End Path",
    caseNumber: "MS-950",
    forensicTitle: "The Ghost Ship",
    status: "KILLED",
    casualties: "The 'Third Ecosystem'",
    description: "The first and last flagship built for Windows 10 Mobile. It promised 'Continuum'—turning your phone into a PC—but launched with bug-riddled software and a generic plastic design.",
    model3D: '<i class="ph ph-monitor-mobile" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "NOV 2015" },
        { label: "Retrenchment", value: "MAY 2016" },
        { label: "End of Support", value: "DEC 2019" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: Continuum",
            description: "You could plug it into a dock and use Word and Excel on a monitor. It was magic tech. But it couldn't run legacy Windows apps (exe), so it was a PC that couldn't do PC things."
        },
        {
            x: 20,
            y: 20,
            title: "Evidence #2: The Identity Crisis",
            description: "It carried the Microsoft logo, not Nokia. It felt like a reference design for developers, not a consumer product. By the time it launched, even Microsoft executives had switched to iPhones."
        }
    ],
    failureTags: ["Beta Software", "Boring Design", "App Desert"],
    stats: {
        "Feature": "Windows Hello (Iris Scanner)",
        "Screen": "5.2\" Quad HD",
        "Cooling": "Liquid Cooling Pipe",
        "Sales": "< 1 Million (Est.)"
    },
    story: "The Lumia 950 was a funeral dirge. Released after Microsoft had already written off the Nokia acquisition, it existed only to fulfill contractual obligations and test Windows 10 Mobile concepts. It had brilliant ideas (Iris scanning, PC-docking) that others would perfect years later, but as a product, it was born dead."
},

// ========================================
// BATCH 5: ANDROID ORIGINS & BLACKBERRY
// ========================================

"artifact-blackberry-bold-9000": {
    id: "artifact-blackberry-bold-9000",
    name: "BlackBerry Bold 9000",
    category: "Device",
    rarity: "Uncommon",
    unlockedBy: "Acquired via D2-A Acquire BlackBerry Path",
    caseNumber: "RIM-9000",
    forensicTitle: "The Peak",
    status: "DISCONTINUED",
    casualties: "Personal Time",
    description: "The ultimate executive status symbol. With a faux-leather back and the best keyboard ever made, it was the device that addicted the world to 'Push Email' before apps took over.",
    model3D: '<i class="ph ph-keyboard" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "MAY 2008" },
        { label: "RIM Peak Value", value: "$83B (2008)" },
        { label: "End", value: "2010" }
    ],
    hotspots: [
        {
            x: 50,
            y: 60,
            title: "Evidence #1: The Keyboard",
            description: "Fret-shaped keys sculpted to catch the thumb perfectly. Executives could type 60 words per minute without looking. It remains the gold standard for tactile input."
        },
        {
            x: 50,
            y: 30,
            title: "Evidence #2: The Trackball",
            description: "The 'Pearl' trackball was precise but prone to gathering lint and oil. Users famously had to perform 'surgery' on it with alcohol wipes to keep it scrolling."
        }
    ],
    failureTags: ["Web Browser (Useless)", "App Desert", "Lint Magnet"],
    stats: {
        "Screen": "2.6\" (480x320)",
        "Processor": "624 MHz Marvell",
        "Battery": "1500 mAh (All Day)",
        "Price": "$299 (On Contract)"
    },
    story: "In 2008, if you had a Bold, you were important. It was the last time BlackBerry dictated the terms of the market. It was a perfect email machine in an era that was rapidly shifting to web and video. The Bold 9000 is a monument to doing one thing perfectly, just as the world decided it wanted a device that did everything okay."
},

"artifact-blackberry-storm": {
    id: "artifact-blackberry-storm",
    name: "BlackBerry Storm",
    category: "Device",
    rarity: "Rare",
    unlockedBy: "Recovered from D2 Info Cards",
    caseNumber: "RIM-9530",
    forensicTitle: "The Click of Death",
    status: "FAILED",
    casualties: "$500 Million (Replacement Costs)",
    description: "RIM's panicked response to the iPhone. A touchscreen that physically clicked down like a giant mouse button. It was a mechanical nightmare that nearly destroyed Verizon's trust in BlackBerry.",
    model3D: '<i class="ph ph-warning" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "NOV 2008" },
        { label: "Recall", value: "2009" },
        { label: "End", value: "OCT 2009" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: SurePress",
            description: "The entire screen was mounted on a suspension system. You had to physically press the glass down to 'click' a key. It was slow, tiring, and the mechanism frequently jammed or clicked unevenly."
        },
        {
            x: 20,
            y: 80,
            title: "Evidence #2: 100% Return Rate",
            description: "Co-CEO Jim Balsillie later admitted the device had a 'near 100% return rate.' Verizon was forced to replace almost every single unit sold, costing RIM over $500 million in losses."
        }
    ],
    failureTags: ["Hardware Failure", "Laggy OS", "No Wi-Fi"],
    stats: {
        "Screen": "3.25\" Clickable LCD",
        "Weight": "155g (Heavy)",
        "Wi-Fi": "None (Carrier demand)",
        "Losses": "$500,000,000+"
    },
    story: "The Storm is what happens when an engineering culture is forced to fake it. Terrified of the iPhone, Verizon demanded a touchscreen killer. RIM, who had never built a touch interface, delivered a prototype as a product. The software was so buggy at launch that the phone couldn't even make calls reliably. It is widely considered the worst flagship phone ever made."
},

"artifact-google-sooner": {
    id: "artifact-google-sooner",
    name: "Google Sooner",
    category: "Device",
    rarity: "Legendary",
    unlockedBy: "Found in D1 Info Cards (Android Rumors)",
    caseNumber: "GOOG-000",
    forensicTitle: "The Blackberry Clone",
    status: "KILLED (Internal)",
    casualties: "Original Android UI",
    description: "The phone Android *was* going to be. A non-touch, QWERTY-bar device designed to kill BlackBerry. Then Steve Jobs walked on stage, and Google scrapped the entire project instantly.",
    model3D: '<i class="ph ph-robot" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Design", value: "2006" },
        { label: "iPhone Event", value: "JAN 2007" },
        { label: "Scrapped", value: "JAN 2007" }
    ],
    hotspots: [
        {
            x: 50,
            y: 40,
            title: "Evidence #1: No Touchscreen",
            description: "The interface was navigated entirely by D-pad. Android was originally built as a button-based OS. The 'Touch' layer was hastily bolted on after the iPhone launch."
        },
        {
            x: 50,
            y: 70,
            title: "Evidence #2: The Panic Pivot",
            description: "Andy Rubin (Android creator) was in a cab watching the iPhone reveal. He reportedly told his team, 'Holy crap, I guess we're not shipping that.' They delayed launch by a year to rebuild the UI."
        }
    ],
    failureTags: ["Obsolete Before Launch", "Ugly Design", "Wrong Paradigm"],
    stats: {
        "Codename": "HTC Exca 300",
        "Screen": "320x240 (Non-Touch)",
        "RAM": "64 MB",
        "OS": "Android M3 (Pre-1.0)"
    },
    story: "Sooner is the fossil record of a timeline that didn't happen. It proves that Google's original target was BlackBerry, not Apple. Had the iPhone not launched in 2007, Android would have launched as a button-mashing BlackBerry clone, and the smartphone world would look very different today."
},

"artifact-htc-dream-g1": {
    id: "artifact-htc-dream-g1",
    name: "HTC Dream (G1)",
    category: "Device",
    rarity: "Epic",
    unlockedBy: "Acquired via D2-B Match Free Path",
    caseNumber: "AND-001",
    forensicTitle: "The Chin",
    status: "DISCONTINUED",
    casualties: "Windows Mobile",
    description: "The first Android phone. It was clunky, ugly, and lacked a headphone jack or virtual keyboard, but it brought the notification shade and deep Google integration to the world.",
    model3D: '<i class="ph ph-robot" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "OCT 2008" },
        { label: "Cupcake Update", value: "APR 2009" },
        { label: "End", value: "JUL 2010" }
    ],
    hotspots: [
        {
            x: 80,
            y: 80,
            title: "Evidence #1: The Chin",
            description: "The bottom curved out to house the trackball. It made typing on the physical keyboard awkward for right hands, but gave the phone a distinct, if ugly, silhouette."
        },
        {
            x: 50,
            y: 50,
            title: "Evidence #2: No Virtual Keyboard",
            description: "At launch (Android 1.0), you *had* to slide the screen open to type. There was no software keyboard. It wasn't until the 'Cupcake' (1.5) update that you could type on the glass."
        }
    ],
    failureTags: ["No Headphone Jack", "Proprietary Port", "Limited Apps"],
    stats: {
        "Apps at Launch": "50 (Android Market)",
        "CPU": "528 MHz Qualcomm",
        "Screen": "3.2\" HVGA",
        "Sales": "1 Million (6 months)"
    },
    story: "The G1 wasn't pretty, but it was open. While Apple was building a walled garden, the G1 let you customize everything. It introduced the 'Notification Shade'—a feature so good that every other OS (including iOS) eventually stole it. It was the rough draft of the future."
},

"artifact-motorola-droid": {
    id: "artifact-motorola-droid",
    name: "Motorola DROID",
    category: "Device",
    rarity: "Rare",
    unlockedBy: "Found in D2-B Info Cards",
    caseNumber: "MOTO-001",
    forensicTitle: "The iPhone Killer",
    status: "DISCONTINUED",
    casualties: "iPhone's AT&T Monopoly",
    description: "The phone that made Android cool. Backed by Verizon's massive 'iDon't' campaign, it was a heavy, industrial slab of metal that sold more units in its first 74 days than the original iPhone.",
    model3D: '<i class="ph ph-robot" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "OCT 2009" },
        { label: "2.0 Update", value: "DEC 2009" },
        { label: "End", value: "2011" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: Google Maps Navigation",
            description: "The killer app. It offered free, turn-by-turn GPS navigation. Overnight, the stock prices of Garmin and TomTom crashed. iPhone users were still paying $50 for GPS apps."
        },
        {
            x: 20,
            y: 70,
            title: "Evidence #2: The 'Membrane' Keys",
            description: "While it had a physical keyboard, the keys were flat and flush with the surface. Most users hated typing on it, preferring the on-screen keyboard, proving physical keys were dying."
        }
    ],
    failureTags: ["Flat Keyboard", "Heavy Build", "Gold Accents"],
    stats: {
        "Screen": "3.7\" (854x480 High-Res)",
        "Sales": "1.05 Million (74 days)",
        "OS": "Android 2.0 (Eclair)",
        "Marketing": "$100M 'Droid Does'"
    },
    story: "The Droid was the first phone to legitimately challenge the iPhone's dominance. It wasn't cute; it was a tool. The 'Droid' sound effect became the anthem of the anti-Apple resistance. It saved Motorola (temporarily) and established Android as the dominant OS in the US market."
},

// ========================================
// BATCH 6: THE OUTLIERS & EPILOGUE
// ========================================

"artifact-palm-pre": {
    id: "artifact-palm-pre",
    name: "Palm Pre",
    category: "Device",
    rarity: "Legendary",
    unlockedBy: "Recovered from D2 Info Cards",
    caseNumber: "PLM-001",
    forensicTitle: "The River Stone",
    status: "KILLED",
    casualties: "Palm Inc.",
    description: "The only phone that made the iPhone look outdated in 2009. It introduced wireless charging, 'Over-the-Air' updates, and a card-based multitasking UI that everyone (including Apple) eventually copied.",
    model3D: '<i class="ph ph-cards" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "CES Debut", value: "JAN 2009" },
        { label: "Launch", value: "JUN 2009" },
        { label: "HP Buyout", value: "APR 2010" }
    ],
    hotspots: [
        {
            x: 50,
            y: 40,
            title: "Evidence #1: WebOS Cards",
            description: "Apps ran as 'live cards' you could swipe away to close. It was elegant, intuitive, and years ahead of iOS. Apple didn't adopt this interface until the iPhone X in 2017."
        },
        {
            x: 50,
            y: 80,
            title: "Evidence #2: The Cheese Cutter",
            description: "The slide-out keyboard had keys so sharp they were nicknamed 'the cheese cutter.' The build quality was creaky and cheap, a stark contrast to the beautiful software."
        }
    ],
    failureTags: ["Hardware Fragility", "Sprint Exclusivity", "Marketing Fail"],
    stats: {
        "OS": "WebOS",
        "Charging": "Inductive (First of its kind)",
        "Processor": "600 MHz OMAP",
        "Sales": "Disappointing"
    },
    story: "The Palm Pre is the tragic hero of mobile history. It had the right software (WebOS) and the right ideas (Cloud synergy), but it was killed by poor hardware and a limited launch on Sprint. HP bought Palm to save it, then killed the entire division a year later. The team dispersed to Apple and Google, essentially building the future of iOS and Android from the ashes of WebOS."
},

"artifact-samsung-focus": {
    id: "artifact-samsung-focus",
    name: "Samsung Focus",
    category: "Device",
    rarity: "Uncommon",
    unlockedBy: "Found in D2-B Premium Position Path",
    caseNumber: "SAM-917",
    forensicTitle: "The Super AMOLED",
    status: "DISCONTINUED",
    casualties: "LCD Screens",
    description: "The crown jewel of the Windows Phone 7 launch. While others were heavy bricks, this was impossibly thin and featured a screen so vibrant it looked fake.",
    model3D: '<i class="ph ph-device-mobile" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "NOV 2010" },
        { label: "SD Scandal", value: "DEC 2010" },
        { label: "End", value: "2012" }
    ],
    hotspots: [
        {
            x: 50,
            y: 30,
            title: "Evidence #1: The Black Levels",
            description: "Windows Phone's UI was mostly black. On an AMOLED screen, black pixels are off. This made the UI blend perfectly into the hardware bezel, creating a 'digital ink' effect that was stunning."
        },
        {
            x: 80,
            y: 60,
            title: "Evidence #2: The SD Card Roulette",
            description: "It had an SD slot, but Windows Phone required a specific, rare type of high-speed card. If you inserted a normal card, the phone would brick itself or slow to a crawl."
        }
    ],
    failureTags: ["Plasticky Build", "SD Card Issues", "OS Limitations"],
    stats: {
        "Screen": "4.0\" Super AMOLED",
        "Weight": "115g (Featherlight)",
        "Thickness": "9.9mm",
        "Price": "$199"
    },
    story: "The Focus proved that Samsung was the hardware king in waiting. It was the preferred device for tech journalists because the screen made the Metro UI sing. However, it was held back by the OS's immaturity—no copy/paste, no multitasking. It was a Ferrari engine inside a car with no steering wheel."
},

"artifact-danger-sidekick": {
    id: "artifact-danger-sidekick",
    name: "Danger Sidekick",
    category: "Device",
    rarity: "Epic",
    unlockedBy: "Acquired via D3 Acquire Innovation Path",
    caseNumber: "DGR-001",
    forensicTitle: "The Hiptop",
    status: "ACQUIRED (By Microsoft)",
    casualties: "Teen Attention Spans",
    description: "The coolest phone of the early 2000s. With a screen that swiveled 180 degrees to reveal a keyboard, it was the first device to prioritize data over voice. Paris Hilton had one. You wanted one.",
    model3D: '<i class="ph ph-arrows-clockwise" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Launch", value: "OCT 2002" },
        { label: "Data Disaster", value: "OCT 2009" },
        { label: "Server Shutdown", value: "MAY 2011" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: The Cloud",
            description: "Danger was the first to back up everything to the cloud. If you lost your phone, you just logged into a new one. In 2002, this was witchcraft."
        },
        {
            x: 50,
            y: 20,
            title: "Evidence #2: The Server Crash",
            description: "In 2009, after Microsoft acquired Danger, a server failure wiped the data of virtually every Sidekick user. Contacts, photos, notes—gone. It was the death blow for the brand."
        }
    ],
    failureTags: ["Proprietary OS", "Data Loss Event", "Niche Demographic"],
    stats: {
        "Key Feature": "Swivel Screen",
        "Founder": "Andy Rubin (Android Creator)",
        "Network": "GPRS (Always Online)",
        "Price": "$199"
    },
    story: "The Sidekick is the grandfather of the modern smartphone app ecosystem. Created by the team that would later build Android (Andy Rubin), and acquired by the team that would later build the disastrous Kin (Microsoft), it sits at the center of mobile history. It taught teens to text instead of talk."
},

"artifact-nokia-7710": {
    id: "artifact-nokia-7710",
    name: "Nokia 7710",
    category: "Device",
    rarity: "Rare",
    unlockedBy: "Found in D1 Info Cards (Competitor Intel)",
    caseNumber: "NOK-7710",
    forensicTitle: "The Taco",
    status: "DISCONTINUED",
    casualties: "Nokia's Touch Ambitions",
    description: "Nokia's first and only attempt at a widescreen touch device before the iPhone. Shaped like a taco, used with a stylus, and running a unique OS that never appeared again.",
    model3D: '<i class="ph ph-pen-nib" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Announced", value: "NOV 2004" },
        { label: "Launch", value: "2005" },
        { label: "End", value: "2006" }
    ],
    hotspots: [
        {
            x: 50,
            y: 60,
            title: "Evidence #1: Symbian Series 90",
            description: "This phone ran a unique version of Symbian (S90) designed for touch. It was incompatible with almost all other Nokia apps. It was an island within an island."
        },
        {
            x: 20,
            y: 40,
            title: "Evidence #2: Side-Talking",
            description: "To make a call, you had to hold this massive, taco-shaped brick to your face. It looked ridiculous, earning it the nickname 'The Sidetalker'."
        }
    ],
    failureTags: ["Weird Shape", "Slow UI", "Incompatible Apps"],
    stats: {
        "Screen": "640x320 (Widescreen)",
        "Input": "Stylus",
        "Weight": "189g",
        "Successor": "None"
    },
    story: "The 7710 proves Nokia saw the touch revolution coming—they just didn't know how to execute it. They built a media tablet and tried to force it to be a phone. Its failure spooked Nokia executives so badly that they retreated to safe, button-based phones for the next three years, leaving the door wide open for Apple."
},

"artifact-microsoft-surface-duo": {
    id: "artifact-microsoft-surface-duo",
    name: "Surface Duo",
    category: "Device",
    rarity: "Uncommon",
    unlockedBy: "Epilogue / Endings",
    caseNumber: "MS-DUO",
    forensicTitle: "The Moleskine",
    status: "KILLED",
    casualties: "Microsoft's Android Ambitions",
    description: "Microsoft's return to the phone market after the Windows Phone death. Not a foldable screen, but two screens connected by a perfect hinge. A beautiful concept ruined by buggy software.",
    model3D: '<i class="ph ph-book-open" style="font-size: 8rem;"></i>',
    timelineProgress: 100,
    timelineMarkers: [
        { label: "Tease", value: "OCT 2019" },
        { label: "Launch", value: "SEP 2020" },
        { label: "Discontinued", value: "SEP 2023" }
    ],
    hotspots: [
        {
            x: 50,
            y: 50,
            title: "Evidence #1: The Hinge",
            description: "360-degree rotation. It felt smooth, solid, and premium. It was an engineering marvel that allowed the device to close like a book with a satisfying 'clap'."
        },
        {
            x: 50,
            y: 20,
            title: "Evidence #2: The Software Gap",
            description: "Android wasn't built for two screens. Apps would crash when dragged across the seam. The keyboard would cover the text you were typing. It was a hardware dream running a software nightmare."
        }
    ],
    failureTags: ["Buggy Software", "High Price", "Old Processor"],
    stats: {
        "Screens": "Two 5.6\" AMOLEDs",
        "Thickness": "4.8mm (Unfolded)",
        "Price": "$1,399",
        "Camera": "11MP (Poor Quality)"
    },
    story: "The Surface Duo was Panos Panay's vision of a 'pocket PC.' It rejected the trend of fragile folding screens in favor of dual glass panes. It was elegant, distinct, and distinctly Microsoft. But launching with a year-old processor, no 5G, and a poor camera for $1,400 doomed it. It serves as the final epitaph: Microsoft makes great hardware, but they still can't make a mobile phone."
},



        // ═══════════════════════════════════════════════════════════
        // TEST ARTIFACTS (for later decisions until content created)
        // ═══════════════════════════════════════════════════════════
        "artifact-test-1": {
            id: "artifact-test-1",
            name: "Test Artifact Alpha",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Testing flow",
            caseNumber: "001",
            forensicTitle: "Test Case",
            status: "TEST",
            casualties: "None",
            description: "Test artifact for flow testing.",
            model3D: '<i class="ph ph-device-mobile" style="font-size: 8rem;"></i>',
            timelineProgress: 50,
            timelineMarkers: [
                { label: "Start", value: "2007" },
                { label: "End", value: "2010" }
            ],
            hotspots: [],
            failureTags: ["Test Tag 1", "Test Tag 2"],
            stats: {
                "Test Stat": "Value 1",
                "Another Stat": "Value 2"
            },
            story: "Test artifact story content."
        }
    },

    // 5. INFORMATION CARDS
    infoCards: {
        // ═══════════════════════════════════════════════════════════
        // D1 INFO CARDS - THE iPHONE MOMENT
        // ═══════════════════════════════════════════════════════════
        "d1-info-market": {
            id: "d1-info-market",
            type: "Market Report",
            title: "iPhone Launch Analysis",
            visual: '<i class="ph ph-chart-line" style="font-size: 2rem;"></i>',
            summary: "Revolutionary interface, unproven market demand at $499 price point",
            content: `
                <p>Apple's <a href="#" class="artifact-link" data-artifact-id="artifact-iphone-2g">iPhone</a> combines three devices: iPod, phone, internet communicator. Multi-touch interface is genuinely novel—but comes with trade-offs: <strong>no physical keyboard, no enterprise email, no 3G, no apps.</strong></p>

                <div class="info-section">
                    <i class="ph ph-cpu info-section-icon"></i>
                    <span class="info-section-title">Key Specs</span>
                </div>
                <p>2MP camera, 4/8GB storage, 2G EDGE network only. Priced at $499/$599 with 2-year AT&T contract.</p>

                <div class="info-section">
                    <i class="ph ph-chart-pie info-section-icon"></i>
                    <span class="info-section-title">Market Context</span>
                </div>
                <p>Global smartphone market is 80M units/year, growing 35% annually. Current ASP is $250. iPhone is <strong>2x market average price.</strong></p>

                <div class="info-section">
                    <i class="ph ph-trend-up info-section-icon"></i>
                    <span class="info-section-title">Analyst Forecast</span>
                </div>
                <p>Gartner projects iPhone will capture <strong>1% market share by end of 2008.</strong> "Apple is unlikely to make significant inroads into the corporate market." Nokia and RIM remain the firms to watch.</p>

                <p><span class="note-label">Note:</span> <em>Apple has never shipped a phone. Manufacturing at scale is unproven.</em></p>
            `,
            source: "Gartner + Morgan Stanley Research",
            date: "JAN 2007",
            quality: "high"
        },
        "d1-info-internal": {
            id: "d1-info-internal",
            type: "Internal Memo",
            title: "Windows Mobile Strategic Position",
            visual: '<i class="ph ph-buildings" style="font-size: 2rem;"></i>',
            summary: "Enterprise dominance secure, consumer market is margin-dilutive distraction",
            content: `
                <p class="memo-header"><strong>FROM:</strong> Pieter Knook, SVP Mobile Communications</p>
                <p class="memo-header"><strong>RE:</strong> Apple iPhone Announcement</p>

                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">Current Position</span>
                </div>
                <p>Windows Mobile commands <strong>42% of smartphone market share</strong> with 14M devices shipped in 2006. Our enterprise relationships are unassailable: 89% of Fortune 500 companies standardized on Windows Mobile.</p>

                <div class="info-section">
                    <i class="ph ph-warning-circle info-section-icon"></i>
                    <span class="info-section-title">iPhone Weaknesses for Enterprise</span>
                </div>
                <ul>
                    <li>No Exchange support (push email impossible)</li>
                    <li>No keyboard (legal/compliance typing requirements)</li>
                    <li>Consumer-only carrier (AT&T, no Verizon/Sprint)</li>
                    <li>No IT management/MDM capabilities</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-target info-section-icon"></i>
                    <span class="info-section-title">Recommendation</span>
                </div>
                <p>Stay the course. The consumer smartphone market is <strong>margin-dilutive</strong>—ASPs are falling, carrier subsidies eat profitability. Our enterprise licensing model generates $18/device. Let Apple fight carriers for scraps.</p>

                <p><em>Apple has historically failed outside its core: Newton, Pippin, Motorola ROKR.</em></p>
            `,
            source: "Microsoft Internal",
            date: "JAN 2007",
            quality: "medium"
        },
        "d1-info-competitor": {
            id: "d1-info-competitor",
            type: "Competitor Intel",
            title: "Nokia & RIM Response",
            visual: '<i class="ph ph-binoculars" style="font-size: 2rem;"></i>',
            summary: "Market leaders dismissive, but Nokia quietly accelerating touch R&D",
            content: `
                <div class="info-section">
                    <i class="ph ph-globe info-section-icon"></i>
                    <span class="info-section-title">Nokia (40% global share)</span>
                </div>
                <p>CEO Kallasvuo publicly dismissive: "Apple will only appeal to a niche market." However, sources indicate Nokia has <strong>accelerated internal <a href="#" class="artifact-link" data-artifact-id="artifact-nokia-7710">touch-screen projects</a></strong> and is evaluating Linux-based software alternatives.</p>

                <div class="info-section">
                    <i class="ph ph-envelope info-section-icon"></i>
                    <span class="info-section-title">RIM/BlackBerry</span>
                </div>
                <p>Co-CEO Mike Lazaridis reportedly said internally: "Someone finally made a phone for people who can't type." RIM is doubling down on keyboard superiority and enterprise security. <strong>No <a href="#" class="artifact-link" data-artifact-id="artifact-blackberry-storm">touch-screen plans</a>.</strong></p>

                <div class="info-section">
                    <i class="ph ph-magnifying-glass info-section-icon"></i>
                    <span class="info-section-title">Google</span>
                </div>
                <p>Android rumors persist but no public announcement. HTC and Samsung are reportedly in conversations about a <a href="#" class="artifact-link" data-artifact-id="artifact-google-sooner">"Google phone"</a>. Timeline unclear—12-24 months out if real.</p>

                <div class="info-section">
                    <i class="ph ph-pulse info-section-icon"></i>
                    <span class="info-section-title">Key Signal</span>
                </div>
                <p>Our OEM partners (HTC, Samsung) are not panicking. They see iPhone as a single-carrier, single-device curiosity. "We ship 50 models a year across every carrier," said HTC's Peter Chou. "Apple's shipping one."</p>
            `,
            source: "Business Development + Industry Sources",
            date: "JAN 2007",
            quality: "medium"
        },

        // ═══════════════════════════════════════════════════════════
        // TEST INFO CARDS (for D2+ until content is created)
        // ═══════════════════════════════════════════════════════════
        "info-test-1": {
            id: "info-test-1",
            type: "Market Report",
            title: "Test Info Card 1",
            visual: '<i class="ph ph-chart-line" style="font-size: 2rem;"></i>',
            summary: "Test info card summary 1.",
            content: "<p>Test info card content 1.</p>",
            source: "Test Source",
            date: "JAN 2007",
            quality: "high"
        },
        "info-test-2": {
            id: "info-test-2",
            type: "Internal Memo",
            title: "Test Info Card 2",
            visual: '<i class="ph ph-file-text" style="font-size: 2rem;"></i>',
            summary: "Test info card summary 2.",
            content: "<p>Test info card content 2.</p>",
            source: "Internal",
            date: "JAN 2007",
            quality: "medium"
        },
        "info-test-3": {
            id: "info-test-3",
            type: "Competitor Intel",
            title: "Test Info Card 3",
            visual: '<i class="ph ph-binoculars" style="font-size: 2rem;"></i>',
            summary: "Test info card summary 3.",
            content: "<p>Test info card content 3.</p>",
            source: "External",
            date: "JAN 2007",
            quality: "low"
        },

        // ═══════════════════════════════════════════════════════════
        // D2-A INFO CARDS - ENTERPRISE PATH (SEP 2009)
        // ═══════════════════════════════════════════════════════════
        "d2a-info-byod": {
            id: "d2a-info-byod",
            type: "Market Report",
            title: "Enterprise BYOD Report",
            visual: '<i class="ph ph-device-mobile" style="font-size: 2rem;"></i>',
            summary: "Personal device requests surging, IT departments struggling to maintain control",
            content: `
                <p>Bring Your Own Device (BYOD) requests have increased <strong>400% since <a href="#" class="artifact-link" data-artifact-id="artifact-iphone-3g">iPhone 3G</a> launch.</strong> Employees are purchasing personal iPhones and demanding Exchange access.</p>

                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">Current State</span>
                </div>
                <p>78% of Fortune 500 still standardize on Windows Mobile. But <strong>45% of CIOs</strong> report "significant pressure" to support iPhone. IT help desks overwhelmed with workaround requests.</p>

                <div class="info-section">
                    <i class="ph ph-trend-up info-section-icon"></i>
                    <span class="info-section-title">Projection</span>
                </div>
                <p>Gartner forecasts 67% of enterprises will formally support personal devices by 2012. "The consumerization of IT is irreversible." Traditional device mandates becoming unenforceable.</p>

                <div class="info-section">
                    <i class="ph ph-warning info-section-icon"></i>
                    <span class="info-section-title">Security Concerns</span>
                </div>
                <p>iPhone lacks enterprise MDM, remote wipe is limited, no on-device encryption. <strong>Yet employees sync corporate email anyway.</strong> Shadow IT is the bigger security risk.</p>

                <p><span class="note-label">Note:</span> <em>Employees who can't use iPhones at work are buying them for personal use—and building app habits there.</em></p>
            `,
            source: "Gartner + Forrester Enterprise Survey",
            date: "AUG 2009",
            quality: "high"
        },
        "d2a-info-wm7": {
            id: "d2a-info-wm7",
            type: "Internal Memo",
            title: "Windows Mobile 7 Status",
            visual: '<i class="ph ph-code" style="font-size: 2rem;"></i>',
            summary: "Project 'Photon' delayed again, team morale declining as market window narrows",
            content: `
                <p class="memo-header"><strong>FROM:</strong> Andy Lees, SVP Mobile Communications</p>
                <p class="memo-header"><strong>RE:</strong> WM7 Timeline Update (CONFIDENTIAL)</p>

                <div class="info-section">
                    <i class="ph ph-calendar-x info-section-icon"></i>
                    <span class="info-section-title">Schedule Status</span>
                </div>
                <p>Project Photon (WM7) is <strong>18+ months from ship.</strong> Touch UI framework rebuild required. Cannot ship incremental update—architecture fundamentally incompatible with modern touch paradigm.</p>

                <div class="info-section">
                    <i class="ph ph-git-fork info-section-icon"></i>
                    <span class="info-section-title">Internal Debate</span>
                </div>
                <p>Engineering divided on path forward:</p>
                <ul>
                    <li>Ship WM 6.6 as bridge (6 months)</li>
                    <li>Wait for ground-up rewrite (18 months)</li>
                    <li>Acquire external platform (<a href="#" class="artifact-link" data-artifact-id="artifact-palm-pre">webOS</a> rumored available)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-users info-section-icon"></i>
                    <span class="info-section-title">Team Concerns</span>
                </div>
                <p>Key architects leaving for Google and Apple. <strong>3 senior engineers departed last quarter.</strong> "We're building yesterday's phone for tomorrow's market."</p>

                <p><span class="note-label">Risk:</span> <em>WM 6.5 reviews called it "lipstick on a pig." Another incremental release may damage brand irreparably.</em></p>
            `,
            source: "Microsoft Internal",
            date: "SEP 2009",
            quality: "medium"
        },
        "d2a-info-google": {
            id: "d2a-info-google",
            type: "Competitor Intel",
            title: "Google Enterprise Push",
            visual: '<i class="ph ph-google-logo" style="font-size: 2rem;"></i>',
            summary: "Android gaining enterprise features, Google Apps threatening core Microsoft revenue",
            content: `
                <div class="info-section">
                    <i class="ph ph-android-logo info-section-icon"></i>
                    <span class="info-section-title">Android Enterprise Roadmap</span>
                </div>
                <p>Android 2.0 (October 2009) adds <strong>Exchange ActiveSync support.</strong> Device encryption coming in 2.2. Google positioning Android as "enterprise-ready by 2010."</p>

                <div class="info-section">
                    <i class="ph ph-cloud info-section-icon"></i>
                    <span class="info-section-title">Google Apps Threat</span>
                </div>
                <p>Google Apps for Business now has <strong>2 million paying businesses.</strong> Gmail, Docs, Calendar bundle at $50/user/year vs. Office + Exchange at $300+. Mobile sync native to Android.</p>

                <div class="info-section">
                    <i class="ph ph-handshake info-section-icon"></i>
                    <span class="info-section-title">OEM Momentum</span>
                </div>
                <p>18 OEMs now committed to Android. HTC, Samsung, Motorola all launching flagship Android devices. <strong>HTC told us: "Windows Mobile licensing fees don't match the value anymore."</strong></p>

                <div class="info-section">
                    <i class="ph ph-lightbulb info-section-icon"></i>
                    <span class="info-section-title">Strategic Read</span>
                </div>
                <p>Google's play isn't mobile—it's Microsoft's entire enterprise stack. Android is the wedge. If they win mobile, Google Apps follows.</p>

                <p><span class="note-label">Note:</span> <em>Android is free. We charge $15-25/device. Math problem is obvious.</em></p>
            `,
            source: "Business Intelligence + OEM Relations",
            date: "SEP 2009",
            quality: "medium"
        },

        // ═══════════════════════════════════════════════════════════
        // D2-B INFO CARDS - CONSUMER PATH (SEP 2009)
        // ═══════════════════════════════════════════════════════════
        "d2b-info-pink": {
            id: "d2b-info-pink",
            type: "Internal Memo",
            title: "Project Pink Status Report",
            visual: '<i class="ph ph-cell-signal-full" style="font-size: 2rem;"></i>',
            summary: "Consumer phone project $200M over budget, 8 months behind schedule, team morale collapsing",
            content: `
                <p class="memo-header"><strong>FROM:</strong> Robbie Bach, Entertainment & Devices</p>
                <p class="memo-header"><strong>RE:</strong> Project Pink Status (CONFIDENTIAL)</p>

                <div class="info-section">
                    <i class="ph ph-warning-circle info-section-icon"></i>
                    <span class="info-section-title">Current Status</span>
                </div>
                <p>Project Pink (consumer phone initiative) is <strong>$200M over budget and 8 months behind schedule.</strong> Original ship date of Q1 2009 has slipped to Q2 2010 minimum.</p>

                <div class="info-section">
                    <i class="ph ph-users info-section-icon"></i>
                    <span class="info-section-title">Team Issues</span>
                </div>
                <p>The Danger acquisition team and Windows Mobile team refuse to collaborate. <strong>Two parallel codebases.</strong> Danger engineers want to ship their platform; WinMo team insists on Windows core. Neither is complete.</p>

                <div class="info-section">
                    <i class="ph ph-device-mobile info-section-icon"></i>
                    <span class="info-section-title">Hardware Status</span>
                </div>
                <p>Sharp manufacturing two prototypes: "Turtle" (slider) and "Pure" (candy bar). Both behind Apple/Android hardware by 18+ months. No capacitive touch—still using resistive screens.</p>

                <p><span class="note-label">Risk:</span> <em>If we ship Pink in current state, reviews will be devastating. If we delay further, market opportunity closes.</em></p>
            `,
            source: "Microsoft Internal",
            date: "SEP 2009",
            quality: "medium"
        },
        "d2b-info-android": {
            id: "d2b-info-android",
            type: "Market Report",
            title: "Android Market Explosion",
            visual: '<i class="ph ph-android-logo" style="font-size: 2rem;"></i>',
            summary: "Free OS gaining rapid OEM adoption, app ecosystem growing faster than iPhone",
            content: `
                <p>Android has gone from 0 to <strong>25% market share in 18 months.</strong> The free licensing model is reshaping the industry.</p>

                <div class="info-section">
                    <i class="ph ph-currency-dollar info-section-icon"></i>
                    <span class="info-section-title">The Price of Free</span>
                </div>
                <p>Android license cost: <strong>$0.</strong> Windows Mobile: $15-25/device. HTC, Samsung, LG all launching Android flagships. Our OEM partners are becoming Google's OEM partners.</p>

                <div class="info-section">
                    <i class="ph ph-storefront info-section-icon"></i>
                    <span class="info-section-title">App Market Growth</span>
                </div>
                <p>Android Market: 70,000+ apps, growing 10,000/month. Developer interest accelerating. <strong>Java-based development attracts enterprise developers</strong>—ironic given Google's consumer focus.</p>

                <div class="info-section">
                    <i class="ph ph-chart-line info-section-icon"></i>
                    <span class="info-section-title">Trajectory</span>
                </div>
                <p>IDC projects Android will pass iPhone in 2010, pass Windows Mobile + BlackBerry combined by 2011. "The smartphone market is becoming a two-horse race, and Microsoft isn't one of the horses."</p>

                <p><span class="note-label">Note:</span> <em>Every month we delay, Android gains ~5M new users. The network effects are compounding.</em></p>
            `,
            source: "IDC + Gartner Mobile Forecast",
            date: "AUG 2009",
            quality: "high"
        },
        "d2b-info-oem": {
            id: "d2b-info-oem",
            type: "Competitor Intel",
            title: "OEM Partner Defections",
            visual: '<i class="ph ph-handshake" style="font-size: 2rem;"></i>',
            summary: "HTC, Samsung, LG all hedging bets, Motorola going Android-exclusive",
            content: `
                <div class="info-section">
                    <i class="ph ph-x-circle info-section-icon"></i>
                    <span class="info-section-title">Motorola</span>
                </div>
                <p>Gone. <a href="#" class="artifact-link" data-artifact-id="artifact-motorola-droid">Droid</a> launching November on Verizon with <strong>$100M marketing campaign.</strong> "iDon't" ads directly attacking iPhone. Motorola told us: "Windows Mobile is legacy. We're all-in on Android."</p>

                <div class="info-section">
                    <i class="ph ph-warning info-section-icon"></i>
                    <span class="info-section-title">HTC</span>
                </div>
                <p>Our longest partner is hedging. HTC Hero (Android) outselling HTC Touch Pro (WinMo) 3:1. Peter Chou: "We need both platforms, but developers are choosing Android." <strong>They're asking for lower licensing fees.</strong></p>

                <div class="info-section">
                    <i class="ph ph-arrows-out-line-horizontal info-section-icon"></i>
                    <span class="info-section-title">Samsung</span>
                </div>
                <p>Playing all sides: Android, Windows Mobile, and their own Bada OS. Galaxy S (Android) is their flagship for 2010. Windows Mobile devices relegated to "enterprise SKUs."</p>

                <div class="info-section">
                    <i class="ph ph-lightbulb info-section-icon"></i>
                    <span class="info-section-title">Strategic Read</span>
                </div>
                <p>OEMs see the writing: differentiation on Android is hard (everyone has the same OS), but free is compelling. They're asking us to match Google's price or accept minority status.</p>

                <p><span class="note-label">Note:</span> <em>If we lose HTC, we lose our last major OEM advocate.</em></p>
            `,
            source: "OEM Relations + Industry Sources",
            date: "SEP 2009",
            quality: "medium"
        },

        // ═══════════════════════════════════════════════════════════
        // D2-C INFO CARDS - ACQUISITION PATH (SEP 2009)
        // ═══════════════════════════════════════════════════════════
        "d2c-info-nokia": {
            id: "d2c-info-nokia",
            type: "Internal Memo",
            title: "Nokia Integration Assessment",
            visual: '<i class="ph ph-buildings" style="font-size: 2rem;"></i>',
            summary: "32 months post-acquisition, integration severely behind schedule, two platforms competing internally",
            content: `
                <p class="memo-header"><strong>FROM:</strong> Integration Task Force</p>
                <p class="memo-header"><strong>RE:</strong> Nokia-Microsoft Integration Status (CONFIDENTIAL)</p>

                <div class="info-section">
                    <i class="ph ph-warning-circle info-section-icon"></i>
                    <span class="info-section-title">Integration Status</span>
                </div>
                <p>32 months post-close. Integration is <strong>18 months behind schedule.</strong> Original plan called for unified platform by Q3 2008. We're now targeting Q4 2010 at earliest.</p>

                <div class="info-section">
                    <i class="ph ph-git-fork info-section-icon"></i>
                    <span class="info-section-title">Platform Conflict</span>
                </div>
                <p>Two competing OS teams: Symbian (40,000 engineers in Finland) and Windows Mobile (8,000 in Redmond). Neither willing to deprecate their codebase. <strong>$400M/year in duplicate R&D.</strong></p>

                <div class="info-section">
                    <i class="ph ph-users info-section-icon"></i>
                    <span class="info-section-title">Cultural Issues</span>
                </div>
                <p>Finnish engineers resist Redmond management. "They don't understand mobile" is common refrain. Key architects departing: <strong>23 senior engineers lost to Apple/Google in past quarter.</strong></p>

                <p><span class="note-label">Risk:</span> <em>Without platform decision in next 90 days, we may lose the ability to execute either strategy effectively.</em></p>
            `,
            source: "Microsoft Integration Office",
            date: "SEP 2009",
            quality: "medium"
        },
        "d2c-info-symbian": {
            id: "d2c-info-symbian",
            type: "Market Report",
            title: "Symbian Market Position",
            visual: '<i class="ph ph-chart-pie" style="font-size: 2rem;"></i>',
            summary: "Still the #1 mobile OS globally but losing ground rapidly to iOS and Android",
            content: `
                <p>Symbian remains the <strong>world's leading smartphone OS</strong> with 47% global market share. But the trend lines are alarming.</p>

                <div class="info-section">
                    <i class="ph ph-chart-line-down info-section-icon"></i>
                    <span class="info-section-title">Market Trajectory</span>
                </div>
                <p>Symbian share: 63% (2007) → 52% (2008) → 47% (2009). <strong>Losing 7-10 points annually.</strong> iPhone and Android gaining at equal rates.</p>

                <div class="info-section">
                    <i class="ph ph-globe info-section-icon"></i>
                    <span class="info-section-title">Geographic Reality</span>
                </div>
                <p>Symbian strength is emerging markets: India, Africa, Southeast Asia. Premium markets (US, UK, Germany) shifting rapidly to iPhone/Android. Nokia US share: <strong>down from 12% to 4%.</strong></p>

                <div class="info-section">
                    <i class="ph ph-code info-section-icon"></i>
                    <span class="info-section-title">Developer Sentiment</span>
                </div>
                <p>Developer interest collapsing. Ovi Store has 15,000 apps vs. App Store's 200,000. "Symbian is a maintenance platform"—Stack Overflow developer survey.</p>

                <p><span class="note-label">Note:</span> <em>Symbian's volume masks declining relevance. High-value customers and developers are leaving.</em></p>
            `,
            source: "Gartner + IDC Mobile Analysis",
            date: "AUG 2009",
            quality: "high"
        },
        "d2c-info-android-threat": {
            id: "d2c-info-android-threat",
            type: "Competitor Intel",
            title: "Android Threatens Both Platforms",
            visual: '<i class="ph ph-android-logo" style="font-size: 2rem;"></i>',
            summary: "Free OS capturing Nokia's emerging market base and Microsoft's OEM partners simultaneously",
            content: `
                <div class="info-section">
                    <i class="ph ph-currency-dollar info-section-icon"></i>
                    <span class="info-section-title">The Free Factor</span>
                </div>
                <p>Android is free. Symbian licensing: ~$5/device. Windows Mobile: $15-25/device. For low-margin emerging market phones, <strong>free is existential.</strong></p>

                <div class="info-section">
                    <i class="ph ph-globe info-section-icon"></i>
                    <span class="info-section-title">Emerging Market Attack</span>
                </div>
                <p>Chinese OEMs (Huawei, ZTE) flooding emerging markets with $50 Android phones. Nokia's volume stronghold under direct assault. <strong>Android emerging market share: 2% → 15% in 12 months.</strong></p>

                <div class="info-section">
                    <i class="ph ph-storefront info-section-icon"></i>
                    <span class="info-section-title">Ecosystem Gap</span>
                </div>
                <p>Combined Ovi Store + Windows Marketplace: 25,000 apps. Android Market: 70,000. App Store: 200,000. Developer momentum is not on our side.</p>

                <div class="info-section">
                    <i class="ph ph-lightbulb info-section-icon"></i>
                    <span class="info-section-title">Strategic Implication</span>
                </div>
                <p>Maintaining two platforms means losing to Android twice—once in premium markets, once in emerging markets. The math favors consolidation.</p>

                <p><span class="note-label">Note:</span> <em>Google is outspending us on developer relations 3:1. Every month we delay unification, the app gap widens.</em></p>
            `,
            source: "Business Intelligence + Market Research",
            date: "SEP 2009",
            quality: "medium"
        },

        // ═══════════════════════════════════════════════════════════
        // D2-D INFO CARDS - WAIT PATH (SEP 2009)
        // ═══════════════════════════════════════════════════════════
        "d2d-info-market": {
            id: "d2d-info-market",
            type: "Market Report",
            title: "Mobile Market Transformation",
            visual: '<i class="ph ph-chart-line" style="font-size: 2rem;"></i>',
            summary: "32 months of waiting has cost Microsoft half its market share",
            content: `
                <p>Since January 2007, the smartphone market has been <strong>completely restructured.</strong> Your wait-and-see strategy has produced clarity—but at a cost.</p>

                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">Market Share Reality</span>
                </div>
                <p>Windows Mobile: <strong>42% (2007) → 20% (2009).</strong> Lost more than half your share while "waiting for clarity."</p>

                <div class="info-section">
                    <i class="ph ph-trend-up info-section-icon"></i>
                    <span class="info-section-title">Competitor Growth</span>
                </div>
                <ul>
                    <li>iPhone: 0% → 14% (carrier expansion coming)</li>
                    <li>Android: 0% → 25% (18 OEMs, 50+ devices)</li>
                    <li>BlackBerry: 10% → 20% (enterprise + consumer)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-lightbulb info-section-icon"></i>
                    <span class="info-section-title">What We Learned</span>
                </div>
                <p>Touch is the future. Apps are the platform. Consumers drive enterprise. Free is a viable business model. Everything we believed was wrong.</p>

                <p><span class="note-label">Note:</span> <em>The "wait" is over. The question is whether it's too late to act.</em></p>
            `,
            source: "Gartner + IDC + Internal Analysis",
            date: "SEP 2009",
            quality: "high"
        },
        "d2d-info-internal": {
            id: "d2d-info-internal",
            type: "Internal Memo",
            title: "Mobile Division Crisis Assessment",
            visual: '<i class="ph ph-warning" style="font-size: 2rem;"></i>',
            summary: "Team morale collapsed, key talent fleeing, unclear strategy paralyzing execution",
            content: `
                <p class="memo-header"><strong>FROM:</strong> HR Business Partner, Mobile Communications</p>
                <p class="memo-header"><strong>RE:</strong> Division Health Assessment (CONFIDENTIAL)</p>

                <div class="info-section">
                    <i class="ph ph-user-minus info-section-icon"></i>
                    <span class="info-section-title">Talent Flight</span>
                </div>
                <p><strong>47 senior engineers departed in past 18 months.</strong> Destinations: Apple (18), Google (22), startups (7). Average tenure of departures: 8.2 years. We're losing institutional knowledge.</p>

                <div class="info-section">
                    <i class="ph ph-smiley-sad info-section-icon"></i>
                    <span class="info-section-title">Morale Indicators</span>
                </div>
                <p>Employee satisfaction: 34% (vs. 72% company average). "Strategy clarity" rating: 18%. Most common feedback: <strong>"We don't know what we're building or why."</strong></p>

                <div class="info-section">
                    <i class="ph ph-hourglass info-section-icon"></i>
                    <span class="info-section-title">Execution Paralysis</span>
                </div>
                <p>Three major initiatives started and cancelled in 32 months. Teams describe "strategy whiplash." Project leads afraid to commit resources without clear direction.</p>

                <p><span class="note-label">Risk:</span> <em>Without decisive direction in next 60 days, expect another wave of departures. Top candidates refusing offers citing "strategic confusion."</em></p>
            `,
            source: "Microsoft HR",
            date: "SEP 2009",
            quality: "medium"
        },
        "d2d-info-options": {
            id: "d2d-info-options",
            type: "Competitor Intel",
            title: "Remaining Strategic Options",
            visual: '<i class="ph ph-path" style="font-size: 2rem;"></i>',
            summary: "Limited options remain after 32 months of market change",
            content: `
                <div class="info-section">
                    <i class="ph ph-shopping-cart info-section-icon"></i>
                    <span class="info-section-title">Acquisition Targets</span>
                </div>
                <p><strong>Palm:</strong> webOS is innovative but struggling. Market cap ~$1B. Could provide fresh platform. Risk: another integration challenge.</p>
                <p><strong>Nokia:</strong> Still #1 in volume, but now willing to talk. Position has weakened significantly since 2007. Price: $20-30B estimated.</p>

                <div class="info-section">
                    <i class="ph ph-code info-section-icon"></i>
                    <span class="info-section-title">Build Options</span>
                </div>
                <p>Ground-up rebuild (18-24 months) or accelerate WM7 (12 months). Either way, shipping 2010 at earliest. App ecosystem gap will be 300,000+ by then.</p>

                <div class="info-section">
                    <i class="ph ph-flag info-section-icon"></i>
                    <span class="info-section-title">Nuclear Option</span>
                </div>
                <p>Fork Android. Take the open-source code, add Microsoft services, compete with Google using Google's platform. Legally viable. Strategically humiliating.</p>

                <div class="info-section">
                    <i class="ph ph-door-open info-section-icon"></i>
                    <span class="info-section-title">Exit Option</span>
                </div>
                <p>Acknowledge defeat, exit mobile hardware/OS, focus on apps and services for iOS/Android. Preserve resources for next platform war (tablets? wearables?).</p>

                <p><span class="note-label">Note:</span> <em>All options are worse than they would have been 32 months ago. But inaction is no longer an option.</em></p>
            `,
            source: "Strategic Planning Group",
            date: "SEP 2009",
            quality: "medium"
        },

        // ═══════════════════════════════════════════════════════════
        // D3 INFO CARDS - THE PLATFORM BATTLE (JAN 2011)
        // ═══════════════════════════════════════════════════════════
        "d3-info-market-state": {
            id: "d3-info-market-state",
            type: "Market Report",
            title: "Mobile Market State 2011",
            visual: '<i class="ph ph-chart-pie" style="font-size: 2rem;"></i>',
            summary: "iOS and Android now control 60% of smartphones, Windows Mobile in free fall",
            content: `
                <p>The smartphone market has <strong>fundamentally reorganized.</strong> The old order is gone.</p>

                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">Current Market Share (Q4 2010)</span>
                </div>
                <ul>
                    <li><strong>Android: 33%</strong> (up from 4% in 2009)</li>
                    <li><strong>iOS: 16%</strong> (stable, premium segment)</li>
                    <li><strong>Symbian: 31%</strong> (collapsing)</li>
                    <li><strong>BlackBerry: 14%</strong> (peaked, declining)</li>
                    <li><strong>Windows Mobile: 4%</strong> (down from 12%)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-storefront info-section-icon"></i>
                    <span class="info-section-title">App Ecosystem Gap</span>
                </div>
                <p>App Store: <strong>350,000 apps.</strong> Android Market: 200,000. Windows Marketplace: 8,000. The gap is widening every month.</p>

                <div class="info-section">
                    <i class="ph ph-trend-up info-section-icon"></i>
                    <span class="info-section-title">Key Insight</span>
                </div>
                <p>Developers follow users. Users follow apps. The flywheel is spinning for iOS and Android. <strong>Breaking in now requires something genuinely different.</strong></p>

                <p><span class="note-label">Note:</span> <em>Third place is irrelevant in platforms. You're either in the ecosystem or you're not.</em></p>
            `,
            source: "Gartner + IDC + App Annie",
            date: "JAN 2011",
            quality: "high"
        },
        "d3-info-wp7-launch": {
            id: "d3-info-wp7-launch",
            type: "Internal Memo",
            title: "Windows Phone 7 Launch Assessment",
            visual: '<i class="ph ph-device-mobile" style="font-size: 2rem;"></i>',
            summary: "WP7 launched October 2010 to mixed results—praised for design, criticized for missing features",
            content: `
                <p class="memo-header"><strong>FROM:</strong> Andy Lees, Mobile Communications</p>
                <p class="memo-header"><strong>RE:</strong> WP7 90-Day Post-Launch Review</p>

                <div class="info-section">
                    <i class="ph ph-star info-section-icon"></i>
                    <span class="info-section-title">What Worked</span>
                </div>
                <ul>
                    <li>Metro UI praised as "refreshingly different"</li>
                    <li>Live Tiles concept resonating with users</li>
                    <li>Integration with Xbox and Zune services</li>
                    <li><strong>NPS of 8.2</strong>—highest of any Microsoft consumer product</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-warning info-section-icon"></i>
                    <span class="info-section-title">What Didn't</span>
                </div>
                <ul>
                    <li>No copy/paste (shipping in March update)</li>
                    <li>No multitasking (limited)</li>
                    <li><strong>App count: 8,000 vs iPhone's 350,000</strong></li>
                    <li>Carrier support lukewarm (Verizon pushing Android)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-chart-line info-section-icon"></i>
                    <span class="info-section-title">Sales Reality</span>
                </div>
                <p>First 90 days: <strong>2M devices sold.</strong> <a href="#" class="artifact-link" data-artifact-id="artifact-iphone-4">iPhone 4</a> sold 1.7M in first 3 days. We have a product people like. We need a product people buy.</p>

                <p><span class="note-label">Risk:</span> <em>Positive reviews aren't translating to sales. The app gap is the primary purchase barrier.</em></p>
            `,
            source: "Microsoft Mobile Division",
            date: "JAN 2011",
            quality: "medium"
        },
        "d3-info-nokia-talks": {
            id: "d3-info-nokia-talks",
            type: "Competitor Intel",
            title: "Nokia Partnership Opportunity",
            visual: '<i class="ph ph-handshake" style="font-size: 2rem;"></i>',
            summary: "Nokia desperate for platform, Elop signaling openness to Microsoft partnership",
            content: `
                <div class="info-section">
                    <i class="ph ph-fire info-section-icon"></i>
                    <span class="info-section-title">Nokia's Burning Platform</span>
                </div>
                <p>New CEO Stephen Elop's "burning platform" memo leaked. Nokia acknowledging Symbian is dead. <strong>Evaluating three options: Windows Phone, Android, or MeeGo.</strong></p>

                <div class="info-section">
                    <i class="ph ph-chat-dots info-section-icon"></i>
                    <span class="info-section-title">Back Channel Intel</span>
                </div>
                <p>Elop (former Microsoft exec) strongly favoring Windows Phone. Nokia board split. Finnish engineers prefer MeeGo. <strong>Decision expected within 30 days.</strong></p>

                <div class="info-section">
                    <i class="ph ph-currency-dollar info-section-icon"></i>
                    <span class="info-section-title">Deal Parameters</span>
                </div>
                <ul>
                    <li>Nokia wants $1B+ annual platform support payments</li>
                    <li>Exclusive Windows Phone partnership for 5 years</li>
                    <li>Microsoft mapping and advertising integration</li>
                    <li>Potential full acquisition in 3-5 years</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-scales info-section-icon"></i>
                    <span class="info-section-title">Strategic Value</span>
                </div>
                <p>Nokia still ships 100M smartphones annually. Partnership would instantly make Windows Phone #2 or #3 globally. <strong>This is the hardware partner we've been looking for.</strong></p>

                <p><span class="note-label">Note:</span> <em>If Nokia chooses Android, Windows Phone is effectively finished.</em></p>
            `,
            source: "Business Development + Industry Sources",
            date: "JAN 2011",
            quality: "medium"
        },
        "d3-info-enterprise-byod": {
            id: "d3-info-enterprise-byod",
            type: "Market Report",
            title: "Enterprise BYOD Transformation",
            visual: '<i class="ph ph-buildings" style="font-size: 2rem;"></i>',
            summary: "BYOD now mainstream, enterprises surrendering device control to employees",
            content: `
                <p>The enterprise mobile market has <strong>fundamentally changed.</strong> IT departments no longer control device choices.</p>

                <div class="info-section">
                    <i class="ph ph-chart-line-up info-section-icon"></i>
                    <span class="info-section-title">BYOD Adoption</span>
                </div>
                <ul>
                    <li>2009: 15% of enterprises allow personal devices</li>
                    <li>2010: 42% formally support BYOD</li>
                    <li><strong>2011: 67% expected to have BYOD policies</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-device-mobile info-section-icon"></i>
                    <span class="info-section-title">Device Preferences</span>
                </div>
                <p>When employees choose their own devices:</p>
                <ul>
                    <li>iPhone: 52% preference</li>
                    <li>Android: 31% preference</li>
                    <li>BlackBerry: 14% preference</li>
                    <li><strong>Windows Phone: 3% preference</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-shield-check info-section-icon"></i>
                    <span class="info-section-title">MDM Market</span>
                </div>
                <p>Mobile Device Management spending: <strong>$1.2B in 2010, projected $5.8B by 2015.</strong> iOS and Android MDM solutions maturing rapidly. Our security advantage is eroding.</p>

                <p><span class="note-label">Note:</span> <em>Enterprise is no longer a fortress—it's a market segment that uses consumer devices.</em></p>
            `,
            source: "Forrester + Gartner Enterprise Survey",
            date: "JAN 2011",
            quality: "high"
        },
        "d3-info-developer-sentiment": {
            id: "d3-info-developer-sentiment",
            type: "Market Report",
            title: "Developer Platform Priorities",
            visual: '<i class="ph ph-code" style="font-size: 2rem;"></i>',
            summary: "Developers overwhelmingly prioritizing iOS and Android, Windows Phone a distant afterthought",
            content: `
                <p>Developer mindshare determines platform success. <strong>The numbers are concerning.</strong></p>

                <div class="info-section">
                    <i class="ph ph-ranking info-section-icon"></i>
                    <span class="info-section-title">Platform Priority (Developer Survey)</span>
                </div>
                <ul>
                    <li>iOS first: 62% of developers</li>
                    <li>Android first: 28% of developers</li>
                    <li>Windows Phone first: 4% of developers</li>
                    <li>BlackBerry first: 3% of developers</li>
                    <li>Other: 3%</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-currency-dollar info-section-icon"></i>
                    <span class="info-section-title">Revenue Reality</span>
                </div>
                <p>Average iOS app revenue: <strong>$4,200/month.</strong> Android: $1,200/month. Windows Phone: $280/month. Developers go where the money is.</p>

                <div class="info-section">
                    <i class="ph ph-clock info-section-icon"></i>
                    <span class="info-section-title">Development Investment</span>
                </div>
                <p>"We'll port to Windows Phone when they have 15% market share." —Common developer response. <strong>Chicken-and-egg problem: no apps means no users means no apps.</strong></p>

                <div class="info-section">
                    <i class="ph ph-lightbulb info-section-icon"></i>
                    <span class="info-section-title">Breaking the Cycle</span>
                </div>
                <p>Options: Pay developers directly (expensive), exclusive features (Xbox?), or acquire app companies. Something has to break the cycle.</p>

                <p><span class="note-label">Note:</span> <em>Every month without action, the gap widens further.</em></p>
            `,
            source: "VisionMobile Developer Survey + App Annie",
            date: "JAN 2011",
            quality: "high"
        },
        "d3-info-ipad-impact": {
            id: "d3-info-ipad-impact",
            type: "Competitor Intel",
            title: "iPad and Tablet Revolution",
            visual: '<i class="ph ph-device-tablet" style="font-size: 2rem;"></i>',
            summary: "iPad selling 15M units, reshaping computing and pulling enterprise away from Windows",
            content: `
                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">iPad Sales</span>
                </div>
                <p>First year: <strong>15 million iPads sold.</strong> Larger than entire Mac installed base growth. Creating new computing category.</p>

                <div class="info-section">
                    <i class="ph ph-buildings info-section-icon"></i>
                    <span class="info-section-title">Enterprise Impact</span>
                </div>
                <ul>
                    <li>65% of Fortune 500 testing iPad pilots</li>
                    <li>Airlines deploying iPads to replace paper manuals</li>
                    <li>Hospitals using iPads for patient records</li>
                    <li><strong>"Post-PC" narrative gaining traction</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-warning-circle info-section-icon"></i>
                    <span class="info-section-title">Windows Threat</span>
                </div>
                <p>iPad is expanding iOS ecosystem into Windows territory. Each iPad sold is a potential Windows PC not sold. <strong>Mobile and PC strategies can no longer be separate.</strong></p>

                <div class="info-section">
                    <i class="ph ph-question info-section-icon"></i>
                    <span class="info-section-title">Our Response</span>
                </div>
                <p>Windows 8 tablet plans exist but 2-3 years out. Do we accelerate? Build Windows Phone tablets? Partner with OEMs for Android tablets?</p>

                <p><span class="note-label">Note:</span> <em>Apple has opened a second front. We're fighting a two-front war now.</em></p>
            `,
            source: "Apple Earnings + Industry Analysis",
            date: "JAN 2011",
            quality: "medium"
        },

        // ═══════════════════════════════════════════════════════════
        // D4 INFO CARDS - JAN 2013 (App Ecosystem Crisis)
        // ═══════════════════════════════════════════════════════════

        "d4-info-app-gap": {
            id: "d4-info-app-gap",
            type: "Developer Analysis",
            title: "The App Gap Reality",
            visual: '<i class="ph ph-app-store-logo" style="font-size: 2rem;"></i>',
            summary: "Windows Phone has 150K apps vs iOS 800K and Android 700K - but the numbers understate the problem",
            content: `
                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">Raw Numbers (Q4 2012)</span>
                </div>
                <ul>
                    <li>iOS App Store: <strong>800,000 apps</strong></li>
                    <li>Google Play: <strong>700,000 apps</strong></li>
                    <li>Windows Phone Store: <strong>150,000 apps</strong></li>
                    <li>Windows Phone ≈ 15% of iOS catalog</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-warning-circle info-section-icon"></i>
                    <span class="info-section-title">The Real Problem</span>
                </div>
                <p>Numbers don't tell the story. <strong>Quality and timeliness matter more than quantity.</strong></p>
                <ul>
                    <li>Instagram: 18 months late to WP (and abandoned)</li>
                    <li>Snapchat: Refuses to build WP version</li>
                    <li>Banking apps: 60% of major banks missing</li>
                    <li>Games: Most top 50 games never arrive</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-users info-section-icon"></i>
                    <span class="info-section-title">Developer Feedback</span>
                </div>
                <p>"We'll build for Windows Phone when it has 10% market share." But you can't get 10% without the apps that drive adoption. <strong>Classic chicken-and-egg.</strong></p>

                <p><span class="note-label">Assessment:</span> <em>The app gap may be insurmountable without billions in developer subsidies—and even then, timing lag kills user experience.</em></p>
            `,
            source: "App Store Data + Developer Surveys",
            date: "JAN 2013",
            quality: "high"
        },

        "d4-info-nokia-financial": {
            id: "d4-info-nokia-financial",
            type: "Financial Analysis",
            title: "Nokia Financial Situation",
            visual: '<i class="ph ph-currency-dollar" style="font-size: 2rem;"></i>',
            summary: "Nokia burning $400M/quarter, stock down 80% from 2008, acquisition discussions inevitable",
            content: `
                <div class="info-section">
                    <i class="ph ph-trend-down info-section-icon"></i>
                    <span class="info-section-title">Nokia Financial State</span>
                </div>
                <ul>
                    <li>Stock price: <strong>$2.78</strong> (down from $40 in 2007)</li>
                    <li>Market cap: <strong>$10.5B</strong> (was $150B)</li>
                    <li>Quarterly cash burn: <strong>$400M</strong></li>
                    <li>Cash reserves: <strong>$4.1B</strong> (10 quarters of runway)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-handshake info-section-icon"></i>
                    <span class="info-section-title">Partnership Assessment</span>
                </div>
                <p>Platform support payments totaling <strong>$1B annually</strong> from Microsoft keeping Nokia afloat. Without these payments, Nokia would likely need to:</p>
                <ul>
                    <li>Seek bankruptcy protection</li>
                    <li>Sell mobile division to highest bidder</li>
                    <li>Pivot to Android (breaking partnership)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-question info-section-icon"></i>
                    <span class="info-section-title">Strategic Question</span>
                </div>
                <p>Is it better to continue subsidizing Nokia, or acquire them outright? At $10B market cap, full acquisition is financially possible—but absorbing 30,000 employees and Finnish operations adds complexity.</p>

                <p><span class="note-label">Note:</span> <em>Nokia's board increasingly desperate. They may accept terms they would have rejected 2 years ago.</em></p>
            `,
            source: "Nokia SEC Filings + Analyst Reports",
            date: "JAN 2013",
            quality: "high"
        },

        "d4-info-surface-lessons": {
            id: "d4-info-surface-lessons",
            type: "Internal Strategy",
            title: "Surface Tablet Lessons",
            visual: '<i class="ph ph-device-tablet" style="font-size: 2rem;"></i>',
            summary: "Surface RT struggled despite quality—ecosystem matters more than hardware",
            content: `
                <div class="info-section">
                    <i class="ph ph-info info-section-icon"></i>
                    <span class="info-section-title">Surface RT Results</span>
                </div>
                <ul>
                    <li>Launched October 2012 with <strong>$400M marketing</strong></li>
                    <li>Q4 sales: <strong>~1 million units</strong> (vs iPad's 23M)</li>
                    <li>Critical reception: <strong>Mixed</strong> ("great hardware, limited apps")</li>
                    <li>Inventory write-down coming: <strong>$900M expected</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-lightbulb info-section-icon"></i>
                    <span class="info-section-title">Key Lessons</span>
                </div>
                <p>Surface RT failed despite excellent industrial design. The lesson is clear:</p>
                <ul>
                    <li>Hardware quality cannot compensate for app ecosystem</li>
                    <li>Consumers choose platforms, not devices</li>
                    <li>Incompatibility with x86 apps was fatal</li>
                    <li><strong>Same dynamics apply to phone market</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-path info-section-icon"></i>
                    <span class="info-section-title">Implications for Mobile</span>
                </div>
                <p>If Surface (with Microsoft's marketing budget and retail stores) couldn't break iPad dominance, can Lumia phones break iPhone/Android dominance? Same fundamentals apply.</p>

                <p><span class="note-label">Internal View:</span> <em>Panos Panay's team built something beautiful. The market didn't care. Hardware can't win the ecosystem war alone.</em></p>
            `,
            source: "Internal Surface Post-Mortem",
            date: "JAN 2013",
            quality: "high"
        },

        "d4-info-ballmer-pressure": {
            id: "d4-info-ballmer-pressure",
            type: "Leadership Intel",
            title: "Board Pressure on Leadership",
            visual: '<i class="ph ph-users-three" style="font-size: 2rem;"></i>',
            summary: "Board patience wearing thin, activist investors circling, CEO succession discussions beginning",
            content: `
                <div class="info-section">
                    <i class="ph ph-warning info-section-icon"></i>
                    <span class="info-section-title">Board Sentiment</span>
                </div>
                <ul>
                    <li>Mobile losses total: <strong>$8B+ since 2007</strong></li>
                    <li>Stock price stagnant for <strong>13 years</strong></li>
                    <li>Activist investor ValueAct Capital: <strong>$2B position</strong></li>
                    <li>Board calling for "strategic review" of mobile</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-user-circle info-section-icon"></i>
                    <span class="info-section-title">Leadership Questions</span>
                </div>
                <p>ValueAct's Mason Morfit increasingly vocal: "Microsoft needs a CEO who understands the mobile and cloud transition." Board members privately discussing succession scenarios.</p>

                <div class="info-section">
                    <i class="ph ph-clock info-section-icon"></i>
                    <span class="info-section-title">Timeline Pressure</span>
                </div>
                <p>The board wants to see clear progress within <strong>12-18 months</strong>. Options being discussed:</p>
                <ul>
                    <li>Double down with Nokia acquisition</li>
                    <li>Exit mobile and focus on cloud/enterprise</li>
                    <li>Find new mobile leadership</li>
                </ul>

                <p><span class="note-label">Reality:</span> <em>This may be the last major mobile investment decision before strategic review forces a change.</em></p>
            `,
            source: "Board Meeting Notes + Investor Communications",
            date: "JAN 2013",
            quality: "medium"
        },

        "d4-info-market-reality": {
            id: "d4-info-market-reality",
            type: "Market Analysis",
            title: "Smartphone Market 2013",
            visual: '<i class="ph ph-chart-pie" style="font-size: 2rem;"></i>',
            summary: "Smartphone market now 1B units/year, but iOS/Android control 92% and growing",
            content: `
                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">2012 Market Share</span>
                </div>
                <ul>
                    <li>Android: <strong>70%</strong> (up from 50% in 2011)</li>
                    <li>iOS: <strong>22%</strong> (stable)</li>
                    <li>Windows Phone: <strong>3%</strong> (up from 2%)</li>
                    <li>BlackBerry: <strong>4%</strong> (down from 10%)</li>
                    <li>Others: <strong>1%</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-globe info-section-icon"></i>
                    <span class="info-section-title">Regional Variations</span>
                </div>
                <p>Windows Phone doing better in select markets:</p>
                <ul>
                    <li>Italy: <strong>15%</strong> (Nokia brand strength)</li>
                    <li>Mexico: <strong>12%</strong> (low-cost Lumia 520)</li>
                    <li>UK: <strong>8%</strong> (carrier partnerships)</li>
                    <li>USA: <strong>4%</strong> (struggling)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-trend-up info-section-icon"></i>
                    <span class="info-section-title">Industry Trajectory</span>
                </div>
                <p>Total smartphone market: <strong>1B units/year</strong> and growing. Even at 3% share, Windows Phone is 30M units—but growth is coming from markets with lowest margins. Premium segment locked by iPhone; volume segment owned by cheap Android.</p>

                <p><span class="note-label">Bottom Line:</span> <em>Market growing, but our position is not. We're running to stay in place.</em></p>
            `,
            source: "IDC/Gartner Q4 2012 Reports",
            date: "JAN 2013",
            quality: "high"
        },

        // ═══════════════════════════════════════════════════════════
        // D5 INFO CARDS - JAN 2015 (Final Decision)
        // ═══════════════════════════════════════════════════════════

        "d5-info-nadella-era": {
            id: "d5-info-nadella-era",
            type: "Leadership Intel",
            title: "The Nadella Transition",
            visual: '<i class="ph ph-user-switch" style="font-size: 2rem;"></i>',
            summary: "Satya Nadella is CEO, bringing 'mobile-first, cloud-first' vision with uncertain mobile implications",
            content: `
                <div class="info-section">
                    <i class="ph ph-user-circle info-section-icon"></i>
                    <span class="info-section-title">Leadership Change (Feb 2014)</span>
                </div>
                <ul>
                    <li>Satya Nadella appointed CEO February 2014</li>
                    <li>Background: Cloud and Enterprise (Azure)</li>
                    <li>Mantra: <strong>"Mobile-first, cloud-first world"</strong></li>
                    <li>Board mandate: Restore growth, modernize company</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-cloud info-section-icon"></i>
                    <span class="info-section-title">Strategic Priorities</span>
                </div>
                <p>Nadella's early signals prioritize:</p>
                <ul>
                    <li>Azure growth (up 128% YoY)</li>
                    <li>Office 365 transformation</li>
                    <li>Cross-platform services (Office for iPad launched)</li>
                    <li>Mobile: <strong>"Important but not the center"</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-question info-section-icon"></i>
                    <span class="info-section-title">Mobile Uncertainty</span>
                </div>
                <p>Nadella inherited the Nokia acquisition. Early statements supportive but measured. Internal debate ongoing about whether to double down or de-emphasize mobile hardware.</p>

                <p><span class="note-label">Reading the Tea Leaves:</span> <em>Nadella's "mobile-first" means mobile experiences, not necessarily mobile hardware. The emphasis may shift to services on other platforms.</em></p>
            `,
            source: "CEO Transition Analysis + Earnings Calls",
            date: "JAN 2015",
            quality: "high"
        },

        "d5-info-nokia-integration": {
            id: "d5-info-nokia-integration",
            type: "Internal Assessment",
            title: "Nokia Integration Status",
            visual: '<i class="ph ph-buildings" style="font-size: 2rem;"></i>',
            summary: "Nokia acquisition 18 months in—integration challenging, layoffs ongoing, culture clash persists",
            content: `
                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">Integration Metrics</span>
                </div>
                <ul>
                    <li>Employees absorbed: <strong>25,000</strong> (of original 32,000)</li>
                    <li>Layoffs announced: <strong>18,000</strong> (largest in MS history)</li>
                    <li>Finnish operations: <strong>Scaling down</strong></li>
                    <li>Integration cost: <strong>$1.8B</strong> (and counting)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-warning info-section-icon"></i>
                    <span class="info-section-title">Culture Challenges</span>
                </div>
                <p>Integration proving difficult:</p>
                <ul>
                    <li>Hardware vs software mindset clash</li>
                    <li>Finnish work culture vs Redmond</li>
                    <li>Key talent departing to competitors</li>
                    <li>"Nokia feel" being lost in integration</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-device-mobile info-section-icon"></i>
                    <span class="info-section-title">Product Reality</span>
                </div>
                <p>Lumia quality remains high but market response muted. Lumia 930 praised for camera; Lumia 520 sells well in emerging markets. But app gap persists and developer momentum flat.</p>

                <p><span class="note-label">Internal View:</span> <em>We bought Nokia to accelerate. Instead we're managing an integration. Time and attention diverted from competition.</em></p>
            `,
            source: "Nokia Integration Task Force",
            date: "JAN 2015",
            quality: "high"
        },

        "d5-info-market-final": {
            id: "d5-info-market-final",
            type: "Market Analysis",
            title: "Mobile Market 2015",
            visual: '<i class="ph ph-chart-pie" style="font-size: 2rem;"></i>',
            summary: "iOS/Android now 97% combined—effectively a duopoly with no realistic path to disruption",
            content: `
                <div class="info-section">
                    <i class="ph ph-chart-bar info-section-icon"></i>
                    <span class="info-section-title">2014 Market Share</span>
                </div>
                <ul>
                    <li>Android: <strong>81%</strong> (driven by cheap devices)</li>
                    <li>iOS: <strong>16%</strong> (iPhone 6 successful)</li>
                    <li>Windows Phone: <strong>2.7%</strong> (down from 3.2%)</li>
                    <li>BlackBerry: <strong>0.3%</strong> (effectively dead)</li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-users info-section-icon"></i>
                    <span class="info-section-title">Developer Ecosystem</span>
                </div>
                <p>Developer calculus now binary:</p>
                <ul>
                    <li>iOS: Must-have (premium users, app revenue)</li>
                    <li>Android: Must-have (scale, global reach)</li>
                    <li>Windows Phone: <strong>"Maybe someday"</strong></li>
                    <li>New app Windows Phone support: <strong>Declining</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-trend-down info-section-icon"></i>
                    <span class="info-section-title">Structural Reality</span>
                </div>
                <p>Platform markets tend toward winner-take-all. History suggests third platforms don't survive long-term: OS/2, webOS, BlackBerry, Symbian. Windows Phone showing same pattern.</p>

                <p><span class="note-label">Analysis:</span> <em>The window for third platform may have closed. Question now is whether to fight on or find alternative strategies.</em></p>
            `,
            source: "IDC/Gartner 2014 Annual Report",
            date: "JAN 2015",
            quality: "high"
        },

        "d5-info-write-down": {
            id: "d5-info-write-down",
            type: "Financial Analysis",
            title: "Impending Write-Down",
            visual: '<i class="ph ph-currency-dollar" style="font-size: 2rem;"></i>',
            summary: "Nokia acquisition goodwill impairment expected—$7.6B write-down likely within 12 months",
            content: `
                <div class="info-section">
                    <i class="ph ph-warning-circle info-section-icon"></i>
                    <span class="info-section-title">Acquisition Value Review</span>
                </div>
                <ul>
                    <li>Nokia acquisition price: <strong>$7.2B</strong></li>
                    <li>Integration costs to date: <strong>$1.8B</strong></li>
                    <li>Current fair value estimate: <strong>$1-2B</strong></li>
                    <li>Expected impairment: <strong>$7.6B</strong></li>
                </ul>

                <div class="info-section">
                    <i class="ph ph-file-text info-section-icon"></i>
                    <span class="info-section-title">Accounting Reality</span>
                </div>
                <p>GAAP requires goodwill impairment testing. Mobile division's carrying value significantly exceeds recoverable amount. Write-down likely in Q2 or Q3 2015.</p>

                <div class="info-section">
                    <i class="ph ph-chart-line info-section-icon"></i>
                    <span class="info-section-title">Market Implications</span>
                </div>
                <p>Write-down is accounting, not cash—but signals:</p>
                <ul>
                    <li>Public admission acquisition failed expectations</li>
                    <li>Pressure to show path forward</li>
                    <li>May enable "clean start" strategically</li>
                </ul>

                <p><span class="note-label">CFO View:</span> <em>The write-down is coming. Question is what strategy accompanies it. Write-down + exit = one message. Write-down + renewed commitment = another.</em></p>
            `,
            source: "Finance Internal Analysis",
            date: "JAN 2015",
            quality: "high"
        }
    },

    // 6. DECISION ENGINE (NEW STRUCTURE)
    // Market share timeline (realistic):
    // JAN 2007: 42% (start)
    // JUL 2007: 38% (iPhone launched)
    // SEP 2009: 25% (Android rising)
    // JAN 2011: 15% (Android/iOS dominating)
    // JAN 2013: 8% (struggling)
    // JAN 2015: 3-5% (niche)
    // JAN 2017: 1-3% (end)

    decisions: {

        // ═══════════════════════════════════════════════════════════
        // D1 - THE iPHONE MOMENT (JAN 2007)
        // Starting: 42% market share
        // ═══════════════════════════════════════════════════════════
        "d1": {
            id: "d1-iphone-moment",
            type: "decision",
            date: "JAN 2007",
            timeMarker: "JAN 2007",
            title: "The iPhone Moment",
            storyImage: '<img src="assets/images/iphone-2007.jpg" alt="Steve Jobs unveiling the iPhone at Macworld 2007" style="max-width: 100%; border-radius: 8px;" />',
            storyText: `Your phone buzzes at 5:58 AM Pacific. It's Kevin Turner, your COO. "Steve, you watching Macworld?"

You switch on CNBC. Jobs is on stage in his black turtleneck, holding something. "This is a day I've been looking forward to for two and a half years," he's saying.

Three products. An iPod. A phone. An internet communicator. The crowd doesn't get it yet. Then they do.

By 7 AM, your inbox has 43 messages. The consensus from your mobile team: "No physical keyboard. Enterprise won't touch it. It's an iPod that makes calls."

But you've seen this movie before. Everyone laughed at the iPod too. And you've just watched 4,000 people give Steve Jobs a standing ovation for a phone that doesn't exist yet.

Windows Mobile owns 42% of the smartphone market. You've got partnerships with every carrier, every major OEM. Your enterprise relationships are unassailable.

The question isn't whether the iPhone is a threat. The question is what kind of threat—and what you're going to do about it.`,
            objective: "How should Microsoft respond to Apple's entry into mobile?",
            availableInfo: ["d1-info-market", "d1-info-internal", "d1-info-competitor"],

            options: [
                {
                    id: "d1-enterprise-fortress",
                    title: "Reinforce Enterprise",
                    description: "Double down on what's working. Accelerate Windows Mobile enterprise features, deepen IT partnerships, let Apple have the consumer toy market.",
                    risk: "Consumer market evolves into the real market",
                    upside: "Protect $28B enterprise ecosystem",
                    cost: "$200M acceleration",

                    setsPathState: {
                        d1Choice: "enterprise",
                        d2Branch: "d2-a"
                    },

                    consequences: {
                        immediate: {
                            date: "APR 2007",
                            cash: -0.2,
                            marketCap: 2,
                            marketShare: 0,
                            morale: "high",
                            mobileRevenue: 0.1,  // Enterprise renewals boost licensing revenue
                            mobileCosts: 0,      // Efficient, focused spending
                            unlockedArtifacts: ["artifact-wm6", "artifact-htc-tytn2"],
                            narrative: `The board loves it. "Finally, discipline," says Bill. Your mobile team gets the message: enterprise first, consumer never. The iPhone launches in June—lines around the block, breathless coverage. Your sales team calls it "the Jesus Phone" mockingly.

Windows Mobile 6.1 ships with push email that actually works. Enterprise customers sign three-year renewals. CIOs send thank-you notes. Your market share holds steady at 42%. The strategy is working exactly as planned.

Goldman Sachs upgrades Microsoft to "Buy." Their note reads: "Ballmer showing strategic discipline while competitors chase consumer fads." Your stock ticks up 3%. The board is pleased.`
                        },
                        delayed: {
                            date: "SEP 2007",
                            cash: -0.1,
                            marketCap: -3,
                            marketShare: -2,
                            morale: "neutral",
                            mobileRevenue: -0.05,  // Some consumer licensing lost
                            mobileCosts: 0.05,     // Increased dev costs to catch up
                            narrative: `AT&T reports 1.4 million iPhones sold in Q3. The number that catches your eye: 40% of buyers switched from Windows Mobile devices. "They're not enterprise customers," your team insists. But you're not so sure anymore.

Your enterprise accounts are holding—for now. But you notice something else: developers are building apps for iPhone. Thousands of them. Games, utilities, productivity tools. Nobody's building apps for Windows Mobile anymore. The developer events are half-empty.

Gartner publishes their smartphone forecast. They predict iPhone will capture 20% of the market by 2010. Your team calls the report "wildly optimistic." But you notice Apple's stock is up 85% since January. Yours is flat.`
                        }
                    }
                },
                {
                    id: "d1-consumer-pivot",
                    title: "Launch Consumer Offensive",
                    description: "Build a direct iPhone competitor. New hardware partnerships, consumer marketing push, app developer program.",
                    risk: "Two-front war depletes resources and focus",
                    upside: "Stake claim before market consolidates",
                    cost: "$800M over 18 months",

                    setsPathState: {
                        d1Choice: "consumer",
                        d2Branch: "d2-b",
                        kinNarrativeActive: true
                    },

                    consequences: {
                        immediate: {
                            date: "APR 2007",
                            cash: -0.3,
                            marketCap: -4,
                            marketShare: 0,
                            morale: "neutral",
                            mobileRevenue: 0,        // No immediate revenue impact
                            mobileCosts: 0.3,        // Project Pink R&D costs
                            unlockedArtifacts: ["artifact-htc-touch-diamond"],
                            narrative: `The board is skeptical. "We're chasing Apple now?" CFO Chris Liddell extracts a promise: show traction in 12 months or the project gets reviewed. You greenlight "Project Pink"—a consumer phone initiative led by J Allard, the Xbox visionary.

Your enterprise team is furious about the split focus. "We're winning in enterprise," they argue. "Why dilute?" But you've seen Jobs' demo. That's not an enterprise device—it's the future of personal computing. HTC wants $150M more for a "hero device" to compete.

The press catches wind of Project Pink. "Microsoft finally takes iPhone seriously," writes Engadget. Your stock dips 2% on concerns about spending. The clock starts.`
                        },
                        delayed: {
                            date: "SEP 2009",
                            cash: -0.5,
                            marketCap: -2,
                            marketShare: -20,
                            morale: "low",
                            mobileRevenue: -0.2,     // Lost licensing as partners hedge
                            mobileCosts: 0.4,        // Escalating dev and marketing costs
                            narrative: `Project Pink is behind schedule. The industrial design team and the software team can't agree on anything. J Allard wants revolutionary; your mobile veterans want evolutionary. Meanwhile, the iPhone SDK launches to 100,000 developer downloads in four days.

Your hardware partners are hedging. HTC is quietly meeting with Google about something called "Android." Samsung's mobile chief cancels your quarterly dinner. Your consumer marketing tested poorly—focus groups say "Microsoft phone" sounds like "work phone." Nobody wants that.

Enterprise customers are asking why you're distracted. "We signed up for focus," says the Citibank CIO. You're spending on two fronts and winning on neither. The board wants a progress report.`
                        }
                    }
                },
                {
                    id: "d1-acquire-nokia",
                    title: "Acquire Nokia",
                    description: "Buy the market leader. Nokia sells 350M phones annually. Control hardware and software, become the anti-Apple.",
                    risk: "Massive integration challenge, culture clash, OEM partners flee",
                    upside: "Instant scale, manufacturing expertise, global distribution",
                    cost: "$40-60B acquisition",

                    setsPathState: {
                        d1Choice: "acquire-nokia",
                        d2Branch: "d2-c"
                    },

                    consequences: {
                        immediate: {
                            date: "APR 2007",
                            cash: 0,
                            marketCap: -15,
                            marketShare: 0,
                            morale: "neutral",
                            mobileRevenue: 0,        // No deal, no impact
                            mobileCosts: 0.1,        // M&A advisory fees
                            unlockedArtifacts: ["artifact-nokia-n95"],
                            narrative: `You fly to Helsinki in secret. Nokia CEO Olli-Pekka Kallasvuo listens politely, then laughs. "We sell more phones in a week than Apple will sell all year. Why would we need you?" He slides a chart across the table: Nokia has 40% global market share. Apple has 0%.

The Finnish press gets wind of the meeting within 48 hours. "Microsoft desperate, Nokia rebuffs," reads the headline. Your stock drops 6% on "strategic confusion." Nokia's board isn't even convening to discuss—they see no reason to.

Wall Street is confused. "Is Ballmer panicking?" asks a CNBC anchor. Your M&A team is embarrassed. HTC's CEO calls to ask if you're "shopping around." The conversation doesn't go well.`
                        },
                        delayed: {
                            date: "SEP 2007",
                            cash: -0.1,
                            marketCap: -8,
                            marketShare: -1,
                            morale: "low",
                            mobileRevenue: -0.1,     // Partners spooked, some defect
                            mobileCosts: 0.05,       // Scrambling to retain partners
                            narrative: `Nokia publicly rejects any acquisition, calling the idea "unnecessary." Their CFO tells Reuters: "We have the scale, the manufacturing, the distribution. What would Microsoft add?" The quote circulates on every business channel for a week.

Analysts publish notes about Microsoft's "desperation." Morgan Stanley downgrades your stock. Worse: HTC and Samsung, spooked by the Nokia talks, accelerate conversations with Google. They're worried you'll try to buy them next—or compete with them directly.

The M&A bankers send an invoice for $4M anyway. You've shown your hand and gotten nothing. Google announces the Open Handset Alliance three weeks later. HTC is a founding member.`
                        }
                    }
                },
                {
                    id: "d1-wait-and-watch",
                    title: "Wait and Watch",
                    description: "Hold position. The iPhone is unproven and expensive. Let the market reveal whether this is real before committing resources.",
                    risk: "If this is real, you're already behind",
                    upside: "Preserve optionality, avoid costly mistakes",
                    cost: "Status Quo",

                    setsPathState: {
                        d1Choice: "wait",
                        d2Branch: "d2-d"
                    },

                    consequences: {
                        immediate: {
                            date: "APR 2007",
                            cash: 0,
                            marketCap: 1,
                            marketShare: 0,
                            morale: "neutral",
                            mobileRevenue: 0,        // Status quo
                            mobileCosts: 0,          // No additional spending
                            unlockedArtifacts: [],
                            narrative: `Wall Street approves of your discipline. "Ballmer wisely avoiding panic," writes Goldman Sachs. The analyst note praises your "focus on core competencies." Your stock ticks up slightly while Apple's volatility concerns some investors.

The iPhone launches June 29. Lines around the block, breathless media coverage. But early reviews mention problems: battery life is poor, AT&T's network is struggling, there's no App Store yet. Your mobile team sends you a memo: "Told you so. It's a toy."

Your Windows Mobile 6.x development continues on schedule. Enterprise customers seem satisfied. The board commends your patience. "Let Apple spend the marketing dollars," says one director. "We'll see if this lasts."`
                        },
                        delayed: {
                            date: "SEP 2007",
                            cash: 0,
                            marketCap: -5,
                            marketShare: -3,
                            morale: "neutral",
                            mobileRevenue: -0.15,    // Lost licensing as partners flee to Android
                            mobileCosts: 0.1,        // Emergency response spending
                            narrative: `Apple sells 1.4 million iPhones in Q3—then Steve Jobs announces the App Store is coming. Developers can now build and sell software directly to iPhone users. The implications hit you: Apple just created a platform, not just a phone.

Then Google drops the real bomb. They announce Android with the Open Handset Alliance: HTC, Samsung, LG, Motorola—all your hardware partners. Android will be free and open source. The OEMs don't have to pay you licensing fees anymore.

The market just forked and you're standing at the intersection holding a map from 2005. Your "wait and see" approach gave you perfect clarity—on exactly how far behind you've fallen. The board meeting is uncomfortable.`
                        }
                    }
                }
            ]
        },

        // ═══════════════════════════════════════════════════════════
        // D2 - SECOND DECISION (SEP 2009)
        // Market share entering: ~25-35% depending on path
        // ═══════════════════════════════════════════════════════════
        "d2": {
            variants: {

                // D2-A: After Enterprise Focus
                "d2-a": {
                    id: "d2-a-enterprise-path",
                    type: "decision",
                    date: "SEP 2009",
                    timeMarker: "SEP 2009",
                    title: "The BYOD Breach",
                    storyImage: '<i class="ph ph-buildings" style="font-size: 4rem;"></i>',
                    storyText: `The call comes at 7:34 AM. It's the CIO of Citibank—one of your largest enterprise accounts.

"I've got a problem," he says. "My sales team showed up to the board meeting with iPhones. All of them. They're syncing to Exchange through some workaround IT doesn't control. The board loved the presentations. Now they want iPhones too."

Your enterprise fortress held for 32 months. Windows Mobile still runs 78% of Fortune 500 mobile devices. Your Exchange integration is unmatched. Your security certifications are the gold standard.

But the walls have cracks. BYOD requests are up 400%. Employees are buying personal iPhones and figuring out how to make them work. IT departments are playing whack-a-mole with unauthorized devices.

Meanwhile, Android launched—and it's free. Eighteen OEMs have signed on. Windows Mobile 6.5 shipped last month. Engadget called it "lipstick on a pig."

The CIO's voice hardens. "I need to give the board an answer. Are you the future, or are you legacy?"`,
                    objective: "How do you defend the enterprise while the consumer market pulls away?",
                    availableInfo: ["d2a-info-byod", "d2a-info-wm7", "d2a-info-google"],

                    options: [
                        {
                            id: "d2a-option-1",
                            title: "Double Down on Enterprise",
                            description: "Give the CIO what he wants—the most secure, most manageable platform in the market. Accelerate MDM features, remote wipe, encryption. Make IT departments love you so much they'll fight the board.",
                            risk: "Employees buy iPhones anyway and find workarounds",
                            upside: "Lock in enterprise contracts through 2012",
                            cost: "$150M security acceleration",

                            setsPathState: {
                                d2Choice: "deepen-enterprise",
                                d3Archetype: "enterprise-holdout",
                                d3Variant: "d3-e"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -0.15,
                                    marketCap: 1.0,
                                    marketShare: -5,
                                    morale: "high",
                                    mobileRevenue: 0.15,     // Enterprise renewals boost licensing
                                    mobileCosts: 0.1,        // Security development investment
                                    narrative: `You call the Citibank CIO back. "Give me six months. We'll ship the most secure mobile platform ever built." He sounds relieved—he didn't want to support iPhones anyway. His IT team didn't either. You shake hands on a five-year renewal worth $40M.

Your security team delivers ahead of schedule: AES-256 encryption, granular policy controls, remote wipe that actually works. Three more Fortune 100 CIOs sign similar deals. Gartner names Windows Mobile the "most enterprise-ready platform" in their Magic Quadrant.

The trade press calls it "doubling down on a shrinking market." TechCrunch runs a headline: "Microsoft to Enterprise: Please Don't Leave Us." But the checks clear. Revenue is up 12% in the enterprise segment. The board is satisfied.`
                                },
                                delayed: {
                                    date: "MAR 2010",
                                    cash: 0,
                                    marketCap: -1.0,
                                    marketShare: -7,
                                    morale: "neutral",
                                    mobileRevenue: -0.1,     // Enterprise accounts starting to leave
                                    mobileCosts: 0.05,       // Trying to match Apple's features
                                    narrative: `The iPhone gets Exchange ActiveSync. Apple adds remote wipe. Your security differentiation is eroding with every iOS update. "They're copying our features," your team complains. But copying is working—enterprise iPhone adoption is up 340% year-over-year.

Then the iPad launches. Every executive in America watches that keynote. The Citibank CEO sees it on his flight home from Davos. He walks into the CIO's office the next morning: "I want one. Make it work."

The CIO calls you that afternoon. "My CEO saw the iPad keynote. He wants one. And he's the CEO." Your security moat is filling with consumer demand. The same CIOs who signed five-year deals are asking their lawyers about exit clauses.`
                                }
                            }
                        },
                        {
                            id: "d2a-option-2",
                            title: "Build the 'Business iPhone'",
                            description: "Accept that employees want consumer experiences. Build a new device that's beautiful enough to want and secure enough to deploy. Best of both worlds—if you can ship it fast enough.",
                            risk: "18 months to ship while competitors extend lead",
                            upside: "Redefine the market on your terms",
                            cost: "$400M new development",

                            setsPathState: {
                                d2Choice: "enterprise-consumer-hybrid",
                                d3Archetype: "platform-builder",
                                d3Variant: "d3-p-standard"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -0.4,
                                    marketCap: -0.5,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: 0,        // R&D phase, no revenue impact yet
                                    mobileCosts: 0.25,       // Major new platform development
                                    narrative: `You green-light "Project Metro"—a ground-up reimagining of Windows Mobile. The pitch: iPhone's beauty, BlackBerry's security, Microsoft's ecosystem. You bring in designers from the Zune team. For the first time, mobile feels like a priority.

The team is energized for the first time in years. Engineers who were updating their LinkedIn profiles are suddenly staying late. The first mockups are genuinely exciting—live tiles, bold typography, information-dense but beautiful.

But Android 2.0 just shipped with Exchange support. Apple's adding enterprise features every update. Your product manager shows you the timeline: 18 months minimum. "We're designing for a market that will look completely different when we ship," she warns. You approve it anyway. Some fights you can't afford not to take.`
                                },
                                delayed: {
                                    date: "JUN 2010",
                                    cash: -0.2,
                                    marketCap: -1.0,
                                    marketShare: -6,
                                    morale: "low",
                                    mobileRevenue: -0.15,    // Lost licensing as focus shifts
                                    mobileCosts: 0.2,        // Continued platform development
                                    narrative: `The project hits its first milestone: a working prototype that looks genuinely different. Live tiles, clean typography, fluid animations. At an internal demo, the reviewers are impressed. "This doesn't look like Microsoft," says one. "That's the point," replies your design lead.

But outside the demo room, the market keeps moving. iPhone 4 just launched—Retina display, video calling, gyroscope. The reviews are rapturous. Android has 100,000 apps and is shipping on 60 different phone models. Your beautiful prototype has twelve apps, all built internally.

"We're going to need developers," someone says in the debrief. "A lot of them." Your developer relations lead looks worried. "They're all building for iOS and Android. Why would they wait for us?"`
                                }
                            }
                        },
                        {
                            id: "d2a-option-3",
                            title: "Acquire BlackBerry",
                            description: "RIM is struggling and doesn't know it yet. Buy them while they're still confident, combine your enterprise bases, and create an insurmountable corporate mobile monopoly.",
                            risk: "Two legacy platforms don't make one modern one",
                            upside: "Control 70% of enterprise mobile overnight",
                            cost: "$18B acquisition",

                            setsPathState: {
                                d2Choice: "acquire-blackberry",
                                d3Archetype: "acquirer-integrator",
                                d3Variant: "d3-i-bb"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -18.0,
                                    marketCap: -5.0,
                                    marketShare: 8,
                                    morale: "neutral",
                                    mobileRevenue: 0.4,      // RIM's enterprise licensing added
                                    mobileCosts: 0.3,        // RIM operating costs absorbed
                                    unlockedArtifacts: ["artifact-blackberry-bold-9000"],
                                    narrative: `You fly to Waterloo in secret. Mike Lazaridis meets you in a conference room overlooking the snow-covered campus. Your pitch is simple: "Together we'd control enterprise mobile. Apple can have the consumers—we'll own every Fortune 500 device."

The brothers are skeptical but flattered. "We built this company," Mike says. "But we're not stupid. The market is shifting." After three weeks of negotiation, the board approves $18B. RIM shareholders get a 40% premium. The deal leaks on a Friday afternoon.

The press goes wild. Combined, you control 70% of corporate mobile deployments. Enterprise customers are relieved. The Citibank CIO calls within an hour: "Finally, some clarity." But the integration hasn't even started yet.`
                                },
                                delayed: {
                                    date: "MAR 2010",
                                    cash: -1.5,
                                    marketCap: -2.0,
                                    marketShare: -10,
                                    morale: "low",
                                    mobileRevenue: -0.2,     // Integration chaos losing customers
                                    mobileCosts: 0.25,       // Duplicate R&D, integration costs
                                    narrative: `Integration is brutal. Two engineering cultures, two operating systems, two completely different visions of what mobile should be. The BlackBerry team wants to keep BES; your team wants Exchange dominance. Every technical decision becomes a political battle.

Mike Lazaridis gives a legendary internal speech at a Waterloo all-hands: "We didn't sell to become a Windows shop." The video leaks. Key engineers are leaving—not for Apple or Google, but for startups. "I didn't spend ten years building BBM to watch it get merged into Messenger," one departing VP tells the press.

Meanwhile, Android shipments just passed iPhone. Samsung's Galaxy S is everywhere. The combined Microsoft-RIM company is slower than either was alone. Your competitors are sprinting while you're arguing about org charts.`
                                }
                            }
                        },
                        {
                            id: "d2a-option-4",
                            title: "Abandon Enterprise, Go Consumer",
                            description: "The enterprise strategy was wrong. Admit it. Kill Windows Mobile, start fresh with a consumer-first platform. You're three years behind—but Microsoft doesn't lose platform wars.",
                            risk: "Abandoning your base for a market you've never won",
                            upside: "Finally fighting where the battle actually is",
                            cost: "$500M pivot + reputation damage",

                            setsPathState: {
                                d2Choice: "concede-pivot",
                                d3Archetype: "platform-builder",
                                d3Variant: "d3-p-standard"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -0.5,
                                    marketCap: -3.0,
                                    marketShare: -5,
                                    morale: "low",
                                    mobileRevenue: -0.3,     // Enterprise customers fleeing
                                    mobileCosts: 0.2,        // Consumer pivot R&D costs
                                    narrative: `You announce the pivot at an all-hands in Building 37. "Windows Mobile served us well, but the market has moved. We're starting fresh." The room is silent. Some engineers are nodding; others look betrayed.

The enterprise team is devastated. They built something customers loved—really loved. The Citibank CIO calls within the hour. "So you're abandoning us?" He sounds betrayed. "We're evolving," you say. It sounds hollow even to you.

But you've seen Microsoft lose platform wars before: Netscape, then Google Search. Losing mobile would be worse than both combined. "We're three years behind iPhone and two years behind Android," someone calculates. "The math doesn't work." Maybe not. But you have to try.`
                                },
                                delayed: {
                                    date: "JAN 2010",
                                    cash: -0.3,
                                    marketCap: -1.0,
                                    marketShare: -7,
                                    morale: "low",
                                    mobileRevenue: -0.2,     // More enterprise defections
                                    mobileCosts: 0.15,       // Consumer platform development
                                    narrative: `The pivot is public now. Enterprise customers are furious. Your legal team is fielding calls about contract obligations. Two Fortune 100 accounts threaten lawsuits. The press coverage is brutal: "Microsoft Abandons Enterprise, Chases Apple's Shadow."

Meanwhile, the consumer team ships their first prototype. It's... not bad. Different. Bold, even. The design is genuinely fresh—nothing else looks like this. Internal testers are cautiously optimistic.

But the App Store has 200,000 apps. Android Market has 80,000. You have 400, and most of them are ports of desktop utilities. The gap feels insurmountable. "We need something nobody else has," your product lead says. "Something that makes developers want to wait for us."`
                                }
                            }
                        }
                    ]
                },

                // D2-B: After Consumer Pivot
                "d2-b": {
                    id: "d2-b-consumer-path",
                    type: "decision",
                    date: "SEP 2009",
                    timeMarker: "SEP 2009",
                    title: "The Free Problem",
                    storyImage: '<i class="ph ph-users" style="font-size: 4rem;"></i>',
                    storyText: `The conference room goes silent when Robbie Bach finishes his presentation. Project Pink—your consumer phone initiative—is $200M over budget, eight months behind schedule, and the demos still crash.

"We can ship in Q2," Robbie says. "Maybe Q3 for the full lineup."

You look at the market share charts on the wall. Windows Mobile was at 35% when you started this project. It's 22% now. Android—which didn't exist when you approved Pink—just hit 25% and climbing. Their secret weapon: the price.

"Android is free," says your head of OEM relations. "We charge $15-25 per device. Motorola just killed their entire Windows Mobile roadmap. Samsung's flagship next year is Android. HTC is 'evaluating options.' That's three of our top four partners."

The math is brutal. Android's free licensing means OEMs keep $15-25 more per phone. On 100 million devices, that's $2 billion flowing to Google's partners instead of to you.

Your phone buzzes. It's Peter Chou from HTC: "We need to talk about pricing. Soon."`,
                    objective: "Android is free and taking your OEM partners. How do you respond?",
                    availableInfo: ["d2b-info-pink", "d2b-info-android", "d2b-info-oem"],

                    options: [
                        {
                            id: "d2b-option-1",
                            title: "Match Free—Go Zero",
                            description: "Kill your licensing revenue to keep OEMs. Make Windows Mobile free, compete on integration with Office and Exchange. If the market is going to free, lead the charge.",
                            risk: "$2B/year licensing revenue evaporates",
                            upside: "Stop OEM defection, remove Google's price advantage",
                            cost: "$2B annual revenue loss",

                            setsPathState: {
                                d2Choice: "match-free",
                                d3Archetype: "platform-builder",
                                d3Variant: "d3-p-standard"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -2.0,
                                    marketCap: -4.0,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: -0.6,     // Licensing revenue eliminated
                                    mobileCosts: 0,          // No change in costs
                                    unlockedArtifacts: ["artifact-htc-dream-g1", "artifact-htc-hd2"],
                                    narrative: `You announce it at a press conference: "Windows Mobile is now free for all OEM partners." The room gasps. Reporters exchange confused looks. "Did Microsoft just kill $2 billion in revenue?" asks a WSJ journalist. Yes. Yes you did.

Peter Chou calls within the hour: "You're serious?" He's staying—for now. Samsung agrees to keep Windows Mobile in their lineup. Motorola doesn't return your calls, but they were already gone.

The CFO is furious. Your stock drops 4% on "strategic confusion." But you've removed Google's price advantage overnight. Every OEM exec is doing the same math: free Windows or free Android—now it's about the product, not the price. The question is what you'll do with the time you've bought.`
                                },
                                delayed: {
                                    date: "MAR 2010",
                                    cash: -1.0,
                                    marketCap: 1.0,
                                    marketShare: -4,
                                    morale: "neutral",
                                    mobileRevenue: -0.1,     // Still losing device share
                                    mobileCosts: 0.1,        // Platform improvements
                                    narrative: `Free stopped the bleeding, but it didn't solve the product problem. HTC is shipping Windows Mobile devices again—but they're also shipping Android devices. The Android ones sell 4x better. Carriers are merchandising Android phones at the front of the store.

"The problem isn't price," admits your product lead in a painful quarterly review. "It's that our software isn't as good. Consumers pick up both phones and choose Android. Every time." The reviews agree: Windows Mobile feels dated, clunky, designed for a stylus in a finger-first world.

The good news: you have budget again. The bad news: you need to build something people actually want to buy. And you need to build it fast—every month, Android extends its lead.`
                                }
                            }
                        },
                        {
                            id: "d2b-option-2",
                            title: "Go Vertical—Build Your Own Phone",
                            description: "OEMs are unreliable. Do what Apple does: control hardware and software. Acquire a hardware partner or build your own devices. Own the whole stack.",
                            risk: "Alienate remaining OEMs, no hardware experience",
                            upside: "Full control over user experience, Apple-style margins",
                            cost: "$1.5B hardware development",

                            setsPathState: {
                                d2Choice: "vertical-integration",
                                d3Archetype: "platform-builder",
                                d3Variant: "d3-p-vertical"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -1.5,
                                    marketCap: -2.0,
                                    marketShare: -8,
                                    morale: "high",
                                    mobileRevenue: -0.4,     // Lost all OEM licensing
                                    mobileCosts: 0.5,        // Hardware R&D massive investment
                                    unlockedArtifacts: ["artifact-kin"],
                                    narrative: `You call Peter Chou. "We're going to build our own phones." There's a long pause. "Then we're Android-only. Goodbye, Steve." The line goes dead. Within weeks, HTC, Samsung, and LG all announce Android flagships. Your OEM partnerships evaporate overnight.

Your market share craters. But your team is energized for the first time in years. "Finally, we can build what we want," says J Allard, your head of hardware. No more compromising for partners who don't believe in you.

Project Pink becomes Project KIN—your first Microsoft-branded phone. The early prototypes are different. Bold. Social-first, cloud-connected, nothing like anything else in the market. It might be brilliant. Or it might be the most expensive mistake in mobile history.`
                                },
                                delayed: {
                                    date: "JUN 2010",
                                    cash: -1.5,
                                    marketCap: 0,
                                    marketShare: -5,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // Some device sales starting
                                    mobileCosts: 0.3,        // Manufacturing ramp-up
                                    narrative: `The first KIN prototypes are ready. The hardware team is proud—the design is unique. Social-first, cloud-connected, with a "Spot" feature that lets you share anything instantly. Nothing else in the market looks or feels like this.

But while you were building, the market kept moving. Apple just announced iPhone 4—Retina display, video calling, gyroscope. Android has 100,000 apps and is shipping on dozens of devices. Your prototype has a few dozen apps, mostly built internally.

"We need to launch soon," says Allard, "or the window closes forever." Verizon is getting impatient—they've committed shelf space and marketing dollars. The team believes in what they've built. The question is whether the market will agree.`
                                }
                            }
                        },
                        {
                            id: "d2b-option-3",
                            title: "Premium Position—Hold the Line",
                            description: "Android being free means Android is commoditized. Keep your premium pricing, focus on differentiation—better integration, better enterprise features, better developer tools.",
                            risk: "OEMs abandon you for the free alternative",
                            upside: "Maintain revenue, position as premium platform",
                            cost: "OEM relationships, market share",

                            setsPathState: {
                                d2Choice: "premium-positioning",
                                d3Archetype: "platform-builder",
                                d3Variant: "d3-p-standard"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: 0.5,
                                    marketCap: -1.0,
                                    marketShare: -6,
                                    morale: "neutral",
                                    mobileRevenue: 0.05,     // Premium pricing maintained
                                    mobileCosts: 0,          // No major new spending
                                    unlockedArtifacts: ["artifact-samsung-focus"],
                                    narrative: `"We're not in a race to zero," you tell the board. "Android being free means Android is a commodity. We're going to be premium." The CFO looks relieved—someone finally speaking his language.

The OEM partners react predictably. Motorola's gone—fully Android. Samsung is hedging, splitting their bets. LG is "exploring options," which means they're interviewing with Google. But HTC stays. They want differentiation in a sea of identical Android phones.

Your VP of sales is terrified. "We're watching our market walk away," she says after the board meeting. "And we're charging admission." She's right. But premium players don't win by racing to the bottom. You have to believe the product can justify the price.`
                                },
                                delayed: {
                                    date: "JAN 2010",
                                    cash: 0.3,
                                    marketCap: -0.5,
                                    marketShare: -8,
                                    morale: "neutral",
                                    mobileRevenue: -0.15,    // OEM defections reducing volume
                                    mobileCosts: 0.05,       // Modest platform updates
                                    narrative: `The premium strategy has revenue but not momentum. HTC's Windows Mobile phones sell respectably to enterprise customers—steady, predictable, boring. Their Android phones are the ones getting reviewed, advertised, featured on magazine covers.

Samsung's gone. LG's gone. Motorola launched the Droid and it's everywhere—"Droid Does" is the catchphrase of the year. Your market share is now 14% and falling. The premium pricing that seemed defensible six months ago now looks like denial.

But you have cash—more than Google's mobile division, more than any Android partner individually. "We have the resources to rebuild," you tell the team. "The question is what we build." And whether 14% is a floor or just a stop on the way down.`
                                }
                            }
                        },
                        {
                            id: "d2b-option-4",
                            title: "Ship Pink Now—Beat the Clock",
                            description: "Project Pink isn't perfect, but waiting means losing. Ship what you have, iterate fast, learn from the market. Something is better than nothing.",
                            risk: "Shipping an unfinished product could destroy the brand",
                            upside: "Get in market before the window closes completely",
                            cost: "$100M accelerated launch",

                            setsPathState: {
                                d2Choice: "ship-pink-early",
                                d3Archetype: "platform-builder",
                                d3Variant: "d3-p-standard"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -0.1,
                                    marketCap: -1.5,
                                    marketShare: -3,
                                    morale: "low",
                                    mobileRevenue: 0,        // Launch costs offset any early sales
                                    mobileCosts: 0.15,       // Accelerated launch investment
                                    unlockedArtifacts: ["artifact-kin"],
                                    narrative: `"Ship it," you order. The team protests—there are known bugs, the app store is sparse, the hardware feels dated compared to iPhone 3GS. But Robbie Bach agrees: "Every month we wait, we lose another OEM." Perfect is the enemy of shipped.

Project Pink becomes the KIN—Microsoft's first consumer phone. Verizon agrees to a April 2010 launch with a major marketing push. The team pulls all-nighters to hit the date. They're exhausted but proud.

The reviews are brutal. "A phone for people who don't want smartphones" (Engadget). "Confusingly positioned" (Gizmodo). "DOA" (TechCrunch). But you're in the market. You're learning. The question is whether you can learn fast enough—and whether Verizon's patience will last.`
                                },
                                delayed: {
                                    date: "MAR 2010",
                                    cash: -0.3,
                                    marketCap: -2.0,
                                    marketShare: -5,
                                    morale: "low",
                                    mobileRevenue: -0.1,     // Negligible sales, licensing collapsing
                                    mobileCosts: 0.2,        // Inventory write-offs, support costs
                                    narrative: `KIN sales are catastrophic: 500 units in the first week. Not 500,000. Five hundred. Verizon's mobile chief calls you personally: "We spent $50M marketing this thing. What the hell happened?"

The memes are brutal. "KIN: Killed In Nine weeks" trends on Twitter. Tech blogs compete to write the most savage obituary. Internally, the post-mortem is even worse: wrong audience, wrong features, wrong timing, wrong everything.

But you've learned something valuable amid the wreckage: consumers don't want a "social phone"—they want a smartphone that does social. The failure cost you $400M and a year of momentum. But at least you know what not to build next.`
                                }
                            }
                        }
                    ]
                },

                // D2-C: After Major Acquisition
                "d2-c": {
                    id: "d2-c-acquisition-path",
                    type: "decision",
                    date: "SEP 2009",
                    timeMarker: "SEP 2009",
                    title: "The Platform War Within",
                    storyImage: '<i class="ph ph-handshake" style="font-size: 4rem;"></i>',
                    storyText: `The quarterly review in Helsinki starts badly. Nokia's engineering leads sit on one side of the table. Your Windows Mobile team sits on the other. Nobody's making eye contact.

"We have 40,000 engineers working on Symbian," says Anssi Vanjoki, Nokia's EVP. "You want us to throw that away for an OS that's losing to Android?"

Your mobile VP fires back: "Windows Mobile is the future. Symbian is feature-phone code pretending to be a smartphone platform."

The room erupts. Thirty-two months since the acquisition, and you're still having this fight. Integration is 18 months behind schedule. You're running two parallel operating systems, two app stores, two engineering cultures. And while you debate, Android went from zero to 25% market share.

The worst part: both sides have a point. Symbian still powers 47% of the world's smartphones. Windows Mobile has deeper enterprise integration. Neither is competitive with iPhone or Android.

Your CFO slides you a note under the table: "Every month of dual-platform costs us $40M in duplicate R&D. We need a decision."`,
                    objective: "You own two mobile platforms. You can only afford to bet on one. Which one?",
                    availableInfo: ["d2c-info-nokia", "d2c-info-symbian", "d2c-info-android-threat"],

                    options: [
                        {
                            id: "d2c-option-1",
                            title: "Kill Symbian—Windows Only",
                            description: "End the debate. Shut down Symbian development, force Nokia's manufacturing onto Windows Mobile. One platform, one vision, unified execution.",
                            risk: "40,000 Symbian engineers lose their jobs or quit in protest",
                            upside: "Clear direction, unified resources, faster iteration",
                            cost: "$500M transition + massive layoffs",

                            setsPathState: {
                                d2Choice: "force-windows",
                                d3Archetype: "acquirer-integrator",
                                d3Variant: "d3-i-force-windows"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -0.5,
                                    marketCap: -2.0,
                                    marketShare: -8,
                                    morale: "low",
                                    mobileRevenue: -0.2,     // Platform transition disrupting sales
                                    mobileCosts: 0.3,        // Severance, transition costs
                                    narrative: `You announce it at an all-hands in Espoo. "Symbian development ends January 1st. All Nokia devices will run Windows." The room is silent. The Finnish engineers sit in stunned disbelief. Some are visibly crying.

By the end of the week, 3,000 have submitted resignation letters. Anssi Vanjoki gives an interview to Finnish media: "This is cultural imperialism. They bought us to destroy us." The clip plays on every news channel in Finland. Protesters gather outside the Espoo campus.

The Finnish press calls you the "Destroyer of Nokia." But the debate is over. For the first time in 32 months, you have one team, one platform, one goal. It's brutal. It's ugly. But it's clarity.`
                                },
                                delayed: {
                                    date: "MAR 2010",
                                    cash: -0.5,
                                    marketCap: -1.5,
                                    marketShare: -12,
                                    morale: "low",
                                    mobileRevenue: -0.25,    // Sales collapsing during transition
                                    mobileCosts: 0.15,       // Porting and development costs
                                    narrative: `The exodus is worse than expected. 8,000 Nokia engineers have left—many to Google, Apple, and a wave of Finnish startups. The brain drain is visible: conference rooms that used to overflow now sit half-empty.

The remaining team is trying to port Windows Mobile to Nokia hardware. The fit is awkward. The first prototypes feel like Windows phones in Nokia cases—none of the elegance that made Nokia devices beloved. "We've lost what made Nokia special," admits one remaining engineer.

But you've also lost what made Nokia slow—the endless debates, the platform politics, the cultural resistance to change. The question is whether you can rebuild faster than the market moves away. Android just passed 30% share.`
                                }
                            }
                        },
                        {
                            id: "d2c-option-2",
                            title: "Run Both—Dual Platform",
                            description: "Don't force a choice. Run Symbian for emerging markets (where it's still dominant) and Windows for premium markets (where enterprise matters). Cover all bases.",
                            risk: "Resources split, teams competing, integration never happens",
                            upside: "Keep both armies fighting, hedge all bets",
                            cost: "$400M/year duplicate R&D",

                            setsPathState: {
                                d2Choice: "dual-platform",
                                d3Archetype: "acquirer-integrator",
                                d3Variant: "d3-i-dual"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: 0,
                                    marketCap: -1.0,
                                    marketShare: -8,
                                    morale: "neutral",
                                    mobileRevenue: 0,        // Status quo revenue
                                    mobileCosts: 0.2,        // Duplicate R&D spending
                                    narrative: `You announce the "best of both worlds" strategy: Symbian for emerging markets, Windows for premium. The teams exhale—nobody's getting fired today. The Finnish media cautiously approves. Crisis averted.

But within weeks, the politics are suffocating. Every resource allocation meeting becomes a platform war. "Why does Windows get more engineers?" "Why does Symbian get the better hardware?" Marketing can't explain the strategy to carriers. Developers don't know which platform to target.

"We're not a platform company anymore," says a frustrated engineer after a particularly brutal planning meeting. "We're two platform companies that happen to share a cafeteria. And neither one is good enough to win."`
                                },
                                delayed: {
                                    date: "JUN 2010",
                                    cash: -0.5,
                                    marketCap: -1.0,
                                    marketShare: -10,
                                    morale: "low",
                                    mobileRevenue: -0.15,    // Both platforms losing share
                                    mobileCosts: 0.2,        // Continued duplicate R&D
                                    narrative: `The dual strategy is failing slowly. Symbian phones sell okay in India and Africa, but the margins are razor-thin—$8 per device, barely covering logistics. Windows phones struggle everywhere, outsold 5-to-1 by Android devices at the same price points.

Neither team has enough resources to match iPhone or Android. The combined R&D spend is higher than either competitor, but split across two platforms, it's not enough for either. App developers have abandoned both—why build for two declining platforms when Android is one huge market?

The board is restless. "You've had 32 months," the chairman says in a tense quarterly review. "We need a real strategy. Not a compromise. A decision."`
                                }
                            }
                        },
                        {
                            id: "d2c-option-3",
                            title: "Let Nokia Lead—MeeGo Future",
                            description: "Nokia knows mobile better than Microsoft ever will. Let them build a next-generation Linux-based platform (MeeGo). Windows becomes the services layer, not the OS.",
                            risk: "Ceding platform control to an acquired company",
                            upside: "Leverage Nokia's hardware and mobile expertise",
                            cost: "Windows Mobile write-off + pride",

                            setsPathState: {
                                d2Choice: "nokia-leads",
                                d3Archetype: "acquirer-integrator",
                                d3Variant: "d3-i-nokia-leads"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: 0,
                                    marketCap: -0.5,
                                    marketShare: -3,
                                    morale: "high",
                                    mobileRevenue: 0,        // Transition period
                                    mobileCosts: 0.15,       // MeeGo development ramp-up
                                    narrative: `You fly to Finland and make the announcement yourself: "Nokia will lead our mobile platform future. MeeGo will be our answer to iPhone." The auditorium in Espoo erupts in applause. Anssi Vanjoki shakes your hand with tears in his eyes. "You won't regret this," he says.

Back in Redmond, your Windows Mobile team is devastated. The all-hands is brutal. "You're telling us we lost to the company we acquired?" asks a fifteen-year Microsoft veteran. The room is hostile. Key engineers start updating their LinkedIn profiles that afternoon.

But the logic is clear: Nokia has 40,000 mobile engineers. You have 8,000. They've been building phones for twenty years. Let the experts lead.`
                                },
                                delayed: {
                                    date: "JAN 2010",
                                    cash: -0.3,
                                    marketCap: 0,
                                    marketShare: -5,
                                    morale: "neutral",
                                    mobileRevenue: -0.1,     // Slow transition, some sales lost
                                    mobileCosts: 0.2,        // Accelerated MeeGo investment
                                    narrative: `MeeGo development accelerates. The first demos are impressive—fluid animations, genuine multitasking, elegant design. The N900 prototype shows what Nokia can do when they're not fighting internal platform wars. Reviewers who see early units are genuinely excited.

But the market isn't waiting. Apple's about to announce the iPhone 4. Android has 100,000 apps and is shipping on sixty different devices. Your beautiful MeeGo prototype has a few hundred apps, most of them ports from Maemo.

"We're building a great 2008 phone in 2010," admits one engineer during a late-night debugging session. The platform is promising. The timeline isn't. And every month you spend perfecting MeeGo is another month the competition extends their lead.`
                                }
                            }
                        },
                        {
                            id: "d2c-option-4",
                            title: "Fork Android—Join the Enemy",
                            description: "The nuclear option. Take Android's open-source code, add Microsoft services, and ship Nokia Android phones. If you can't beat them, become them—but on your terms.",
                            risk: "Internal revolt, admitting Windows Mobile failed",
                            upside: "Instant app ecosystem, competitive devices in months",
                            cost: "Windows Mobile team, corporate pride",

                            setsPathState: {
                                d2Choice: "nokia-android",
                                d3Archetype: "android-realist",
                                d3Variant: "d3-a-nokia-android"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: 0,
                                    marketCap: -6.0,
                                    marketShare: -2,
                                    morale: "low",
                                    mobileRevenue: -0.3,     // Licensing revenue abandoned
                                    mobileCosts: 0.1,        // Android port development
                                    narrative: `The announcement leaks before you can make it official. "MICROSOFT SURRENDERS TO GOOGLE" reads the TechCrunch headline. The story spreads everywhere within hours. Your Windows Mobile team holds an emergency meeting—half of them are drafting resignation letters.

The stock drops 8% in a single day. Analysts downgrade you across the board. "Strategic capitulation," Morgan Stanley calls it. The press coverage is merciless. You're the punchline on CNBC.

But in Finland, something unexpected happens. Nokia's engineers are energized for the first time in years. "Finally, we can build phones people want to buy," says one product manager. The first Nokia Android prototypes are running within weeks. They're good. Really good.`
                                },
                                delayed: {
                                    date: "JUN 2010",
                                    cash: 0,
                                    marketCap: 2.0,
                                    marketShare: 5,
                                    morale: "neutral",
                                    mobileRevenue: 0.3,      // Nokia Android device sales strong
                                    mobileCosts: 0.15,       // Hardware manufacturing scale-up
                                    narrative: `The first Nokia Android phones ship to surprising reviews. "The best Android phone ever made" (The Verge). "Nokia's hardware with Android's ecosystem—why didn't they do this sooner?" (Ars Technica). The camera is praised; the build quality is called "unmatched." Sales exceed projections.

Your Windows Mobile team has mostly departed—some to Apple, some to Google, many to startups. The Redmond mobile division is a shadow of itself. But that loss is Nokia's gain. The Finnish engineers are shipping their best work in years.

The combination of Nokia hardware and Android software is exactly what the market wanted. But now you're competing with Samsung, HTC, LG—all shipping Android too. The question is whether you can differentiate from every other Android OEM.`
                                }
                            }
                        }
                    ]
                },

                // D2-D: After Strategic Patience
                "d2-d": {
                    id: "d2-d-wait-path",
                    type: "decision",
                    date: "SEP 2009",
                    timeMarker: "SEP 2009",
                    title: "The Reckoning",
                    storyImage: '<i class="ph ph-hourglass" style="font-size: 4rem;"></i>',
                    storyText: `The board meeting feels like a trial. Thirty-two months of "strategic patience" are on the docket, and the numbers tell the story.

"Windows Mobile market share: down from 42% to 20%," the CFO reads. "iPhone: zero to 14%. Android: zero to 25%. We now have clarity. The clarity is that we lost."

Nobody argues. The data is irrefutable. While you waited, Apple sold 30 million iPhones. Google signed 18 OEMs and shipped 50 Android devices. Your Windows Mobile 6.5 update was dismissed as "rearranging deck chairs on the Titanic" (Gizmodo).

"The good news," your strategy chief offers, "is that we know what the market looks like now. Touch is real. Apps are the platform. We can stop debating and start building."

"With what?" asks a board member. "Our best engineers left for Apple and Google. Our OEM partners are building Android phones. We're 32 months behind and just now deciding to race?"

The silence stretches. Someone has to answer the question you've been avoiding since January 2007: What does Microsoft do in mobile now that everyone else has already won?`,
                    objective: "You waited. Now you're behind. What's the play?",
                    availableInfo: ["d2d-info-market", "d2d-info-internal", "d2d-info-options"],

                    options: [
                        {
                            id: "d2d-option-1",
                            title: "Acquire Nokia Now",
                            description: "Nokia laughed at you in 2007. They're not laughing anymore. Their smartphone share is collapsing. Buy them while they're desperate—cheaper than 2007, and now they need you.",
                            risk: "Buying a declining asset with integration challenges",
                            upside: "Instant hardware capability and global distribution",
                            cost: "$15B acquisition",

                            setsPathState: {
                                d2Choice: "acquire-nokia-now",
                                d3Archetype: "acquirer-integrator",
                                d3Variant: "d3-i-nokia"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -15.0,
                                    marketCap: -4.0,
                                    marketShare: 10,
                                    morale: "neutral",
                                    mobileRevenue: 0.5,      // Nokia's device revenue absorbed
                                    mobileCosts: 0.6,        // Nokia's operations absorbed
                                    narrative: `You fly to Helsinki. This time, the reception is different. Olli-Pekka Kallasvuo looks exhausted, older than his years. "Two years ago we were the market leader," he says. "Now we're watching Android eat our lunch. What do you propose?"

The negotiation takes three weeks. The deal closes at $15B—a third of what it would have cost in 2007. Nokia shareholders approve it almost unanimously. They're scared.

The press is brutal: "Microsoft Buys Yesterday's Winner" (WSJ). "Two Dinosaurs Join Forces" (TechCrunch). But Nokia still sells more phones than anyone on earth. The question is whether you can make them smartphones before the market moves on entirely.`
                                },
                                delayed: {
                                    date: "MAR 2010",
                                    cash: -1.0,
                                    marketCap: -1.5,
                                    marketShare: -8,
                                    morale: "low",
                                    mobileRevenue: -0.2,     // Integration disrupting sales
                                    mobileCosts: 0.2,        // Integration and restructuring
                                    narrative: `Integration is hard, but there's an unexpected advantage to buying a weakened company: they're willing to change. Nokia engineers who resisted Microsoft influence in 2007 are now asking "what do we need to do?" The arrogance is gone.

But the market isn't waiting for your integration challenges. iPhone 4 launches to unprecedented hype. Android is shipping on eighty different devices. Samsung's Galaxy S is selling faster than they can make it.

Your first Nokia Windows Phone is still 12 months away. You're not building for today's market—you're building for 2011's. You just have to hope 2011's market still has room for a third platform.`
                                }
                            }
                        },
                        {
                            id: "d2d-option-2",
                            title: "Build Windows Phone 7",
                            description: "Start fresh. Throw away Windows Mobile and build something genuinely new—modern, touch-first, beautiful. You're late, but Microsoft has rebuilt platforms before.",
                            risk: "18+ months to ship, app ecosystem starts at zero",
                            upside: "Clean slate, no legacy baggage, full control",
                            cost: "$1B+ development",

                            setsPathState: {
                                d2Choice: "commit-own-platform",
                                d3Archetype: "platform-builder",
                                d3Variant: "d3-p-already-building"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -1.0,
                                    marketCap: -2.0,
                                    marketShare: -7,
                                    morale: "high",
                                    mobileRevenue: -0.2,     // WM licensing collapse
                                    mobileCosts: 0.4,        // Major new platform investment
                                    narrative: `You stand on stage at MIX and announce Windows Phone 7. The slides show something nobody expected: beautiful typography, fluid animations, a design language that's genuinely different from iOS and Android. "We're not copying anyone," you say. "We're rethinking mobile from scratch."

The developer audience applauds—real applause, not polite applause. The tech press is cautiously optimistic. "Microsoft finally gets it," writes Engadget. Your team is energized for the first time in years. They're building something they believe in.

But ship date is October 2010 at earliest. Apple has 200,000 apps. You'll ship with maybe 1,000. The math is daunting. You're asking developers and consumers to take a chance on a platform that doesn't exist yet, from a company that's failed in mobile repeatedly.`
                                },
                                delayed: {
                                    date: "JUN 2010",
                                    cash: -0.5,
                                    marketCap: 0.5,
                                    marketShare: -5,
                                    morale: "high",
                                    mobileRevenue: -0.1,     // Legacy revenue gone, new not started
                                    mobileCosts: 0.3,        // Continued WP7 development
                                    narrative: `The first WP7 devices boot up in the lab. They're fast. They're different. The Metro UI really is something new—live tiles updating with real information, hubs organizing content by activity rather than app. Testers who try it don't want to go back to their iPhones.

But the launch is four months away and you have 1,200 apps committed. iPhone has 250,000. Android has 100,000. The app gap is enormous and growing every day. Instagram launched last week; they're not building for Windows Phone.

"We need a killer feature they don't have," your PM says during a tense product review. "Something that makes people wait for us." You're not sure what that would be. Xbox integration? Office? Camera? Nothing seems big enough to close the gap.`
                                }
                            }
                        },
                        {
                            id: "d2d-option-3",
                            title: "Fork Android",
                            description: "The nuclear option. Take Android's open-source code, add Microsoft services, compete with Google using Google's platform. Humiliating? Yes. But it might actually work.",
                            risk: "No Play Store access, internal revolt, strategic humiliation",
                            upside: "Instant app compatibility, competitive devices in months",
                            cost: "$200M + corporate pride",

                            setsPathState: {
                                d2Choice: "fork-android",
                                d3Archetype: "android-realist",
                                d3Variant: "d3-a-fork-no-hardware"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: -0.2,
                                    marketCap: -5.0,
                                    marketShare: -4,
                                    morale: "low",
                                    mobileRevenue: -0.3,     // Abandoned all licensing
                                    mobileCosts: 0.1,        // Android fork development
                                    narrative: `The leak hits before you can announce it properly. "MICROSOFT SURRENDERS: PLANS ANDROID PHONES" reads the TechCrunch headline. It's trending on Twitter within an hour. Your Windows Mobile team holds an emergency all-hands—several senior engineers resign on the spot.

The stock drops 6%. Bill calls: "Steve, what are you doing?" You explain the logic, but he sounds unconvinced. The board emergency session is brutal.

But in the engineering labs, a small team is already working. Android with Bing search. Android with Office integration. Android with Outlook. "It's Android," one engineer says, "but it's ours." The technical work is straightforward. The political survival is the hard part.`
                                },
                                delayed: {
                                    date: "MAR 2010",
                                    cash: -0.1,
                                    marketCap: 1.0,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: 0.1,      // Early MS Android device sales
                                    mobileCosts: 0.15,       // OEM support and development
                                    narrative: `The first Microsoft Android prototypes run surprisingly well. Apps from the Play Store mostly work, though Google is already sending threatening letters to your legal team. The Office integration is seamless—this is the first phone where Excel actually works properly.

Reviews of internal demos are positive. "This is what Android should have been," says one tester. The combination of Google's app ecosystem and Microsoft's productivity tools is compelling.

But Google is already moving to lock down Android. New versions will require Play Services, which Microsoft can't access. You're building on a foundation that might disappear. "We're in a race," your lead architect warns. "Can we get enough users before Google locks us out?"`
                                }
                            }
                        },
                        {
                            id: "d2d-option-4",
                            title: "Exit Mobile—Go Services",
                            description: "Admit defeat. Stop trying to build a phone platform. Focus on what you're good at: Office, Exchange, enterprise software. Build the best apps for iPhone and Android and let someone else own the platform.",
                            risk: "Surrendering platform ambitions forever",
                            upside: "Stop the bleeding, focus on winnable battles",
                            cost: "Pride and platform control",

                            setsPathState: {
                                d2Choice: "concede-services",
                                earlyEnding: "early-exit-services"
                            },

                            consequences: {
                                immediate: {
                                    date: "NOV 2009",
                                    cash: 0,
                                    marketCap: -3.0,
                                    marketShare: -12,
                                    morale: "low",
                                    mobileRevenue: -0.4,     // All licensing abandoned
                                    mobileCosts: -0.2,       // Mobile division shrinking
                                    narrative: `You announce it at an all-hands: "Microsoft will focus on being the best apps and services company for mobile—regardless of platform." The mobile team sits in stunned silence. A few people applaud the honesty. Most are already planning their exits.

The press is savage: "White Flag at Microsoft" (Wired), "Ballmer Admits Mobile Defeat" (The Verge), "The End of an Era" (WSJ). Stock drops 4% before lunch.

But there's also something else in the room: relief. You're not pretending anymore. The billion-dollar mobile bets are off the table. The question is what you'll build instead—and whether Microsoft can thrive in a world where someone else owns the mobile platform.`
                                },
                                delayed: {
                                    date: "JAN 2011",
                                    cash: 1.0,
                                    marketCap: 5.0,
                                    marketShare: -11,
                                    morale: "neutral",
                                    mobileRevenue: 0.3,      // Mobile apps/services revenue growing
                                    mobileCosts: 0.1,        // Lean services team
                                    narrative: `Office for iPhone launches to 10 million downloads in the first week. It's the #1 productivity app instantly. Outlook for Android becomes the most-used email app within two months. Azure mobile services are powering half the apps in the App Store.

You didn't win mobile, but you're everywhere mobile is. Every iPhone user opening Word or Excel is using Microsoft software. Every enterprise deploying mobile devices is running through your cloud.

The stock recovers. The board is cautiously optimistic. "We lost the platform war," you tell them. "But we might win the services peace." It's not the victory you wanted. But it might be better than the defeat you were heading toward.`,
                                    triggersEnding: "early-exit-services"
                                }
                            }
                        }
                    ]
                }
            }
        },

        // ═══════════════════════════════════════════════════════════
        // D3 - THIRD DECISION (JAN 2011)
        // Market share entering: ~10-20% depending on path
        // ═══════════════════════════════════════════════════════════
        "d3": {
            variants: {

                // D3-P-STANDARD: Platform Builder with path-specific framings
                "d3-p-standard": {
                    id: "d3-p-standard",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Platform Crossroads",
                    storyImage: '<i class="ph ph-code" style="font-size: 4rem;"></i>',
                    objective: "Windows Phone 7 launched to praise and weak sales. What's next?",
                    availableInfo: ["d3-info-wp7-launch", "d3-info-nokia-talks", "d3-info-developer-sentiment"],

                    framingByPath: {
                        "enterprise-consumer-hybrid": {
                            storyText: `Windows Phone 7 launched three months ago. The reviews were surprisingly positive—"refreshingly different," "the most beautiful phone interface ever designed," "Microsoft finally gets it."

But the sales? Two million devices in 90 days. iPhone 4 sold 1.7 million in three days.

Your hybrid strategy—building for enterprise and consumer simultaneously—delivered a platform that impressed critics but confused buyers. Enterprise customers want the security features you promised. Consumer buyers don't understand what makes it different from Android.

"We built something people like," says your product lead. "We need to build something people buy."

The Nokia talks are getting serious. Stephen Elop's "burning platform" memo leaked last week. He's signaling hard for Windows Phone—probably because he used to work here. If Nokia commits, you instantly become a top-three platform. If they choose Android, you're finished.

But Nokia wants more than a partnership. They want a lifeline.`
                        },
                        "concede-pivot": {
                            storyText: `You made the hardest call of your career: abandoning enterprise to chase consumer. Your enterprise customers called it betrayal. Your board called it courage. The market called it "too late."

Windows Phone 7 launched three months ago—three years after iPhone, two years after Android. The reviews acknowledged the pivot: "Microsoft finally stopped pretending enterprise phones were good enough for consumers."

But being late means playing catch-up in an ecosystem game. App Store has 350,000 apps. Android Market has 200,000. Windows Phone has 8,000. Developers won't build for a platform without users. Users won't buy a platform without apps.

The Nokia talks could change everything. Stephen Elop wants Windows Phone—he's practically campaigning for it internally. If Nokia commits their 100 million annual smartphone sales, you might have a shot at critical mass.

But the clock is ticking. Every month, the app gap widens.`
                        },
                        "match-free": {
                            storyText: `You matched Android's price: free. It stopped the bleeding—HTC and Samsung didn't abandon you entirely. But free solved the wrong problem.

Windows Phone 7 launched three months ago with competitive hardware from partners who stuck around. The reviews praised the design: "Metro UI is genuinely innovative." The sales were modest but not disastrous.

The real problem isn't price. It's apps. Android has 200,000 apps and counting. Windows Phone has 8,000. Users try your phones in stores, like them, then ask "does it have Instagram?" It doesn't. They walk away.

Nokia's Stephen Elop is in talks. If Nokia—still the world's largest phone manufacturer—commits to Windows Phone exclusively, the app developers might follow. It's your best shot at breaking the chicken-and-egg cycle.

But Nokia wants serious commitment: development support, marketing dollars, and a hardware acquisition option down the road.`
                        },
                        "premium-positioning": {
                            storyText: `You held the line on premium pricing while Android went free. It cost you Samsung. It cost you LG. But HTC stayed, and so did the licensing revenue.

Windows Phone 7 launched three months ago. Premium partners, premium devices, premium positioning. The reviews were positive. The sales were... premium. Meaning small but profitable.

The problem: premium doesn't build ecosystems. You have 8,000 apps. Android has 200,000 and growing. Developers build for market share, and yours is 4% and falling.

Nokia could change the equation. They're desperate—Symbian is dying and MeeGo isn't ready. Stephen Elop is pushing hard for Windows Phone. If Nokia commits, you'd have hardware excellence plus your software differentiation. A genuine alternative to Android's race to the bottom.

But Nokia wants a real partnership. Multi-billion dollar support. Exclusive commitment. Potentially an acquisition path. They're asking you to bet big.`
                        }
                    },

                    storyText: `Windows Phone 7 launched three months ago. The reviews were strong—Metro UI praised as genuinely innovative, the best design Microsoft has ever produced. But sales have been modest: two million devices while iPhone sells that in a weekend.

The app gap is brutal. 8,000 apps versus 350,000 on iOS. Developers won't commit to a 4% market share platform. Users won't buy a phone without their favorite apps.

But there's an opportunity. Nokia is desperate. Stephen Elop's "burning platform" memo acknowledges that Symbian is dying. He's signaling strongly for Windows Phone—and Nokia still ships 100 million smartphones a year.

If Nokia commits, you might achieve the critical mass that attracts developers. If they choose Android instead, Windows Phone becomes irrelevant.

What's your move?`,

                    options: [
                        {
                            id: "d3p-option-1",
                            title: "All-In on Nokia Partnership",
                            description: "Sign Nokia to an exclusive Windows Phone deal. Pay billions in platform support. Combine Microsoft software with Nokia hardware to create a genuine third ecosystem.",
                            risk: "Betting everything on a struggling company",
                            upside: "Instant critical mass, competitive hardware",
                            cost: "$1B+ annual support payments",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -1.0,
                                    marketCap: -0.5,
                                    marketShare: 3,
                                    morale: "high",
                                    mobileRevenue: 0.2,      // Nokia licensing + device revenue
                                    mobileCosts: 0.35,       // Platform support payments to Nokia
                                    unlockedArtifacts: ["artifact-nokia-lumia-800"],
                                    narrative: `The deal closes on February 11th. Nokia will make Windows Phones—only Windows Phones—for the foreseeable future. Stephen Elop stands beside you at the press conference in London, declaring it "two companies coming together to build a new global ecosystem."

You're committing $1 billion annually in platform support payments. In return, Nokia brings 100 million units of manufacturing capacity, global distribution, and the best camera technology in mobile. For the first time, you have a hardware partner who's betting everything on you.

The Finnish press calls it "surrender to Microsoft." Your stock rises 4%. Nokia's falls 14%. The market isn't sure who won this negotiation. But you finally have a partner who's all-in. Now you have to deliver.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.5,
                                    marketCap: 0,
                                    marketShare: 2,
                                    morale: "high",
                                    mobileRevenue: 0.15,     // Lumia sales growing
                                    mobileCosts: 0.2,        // Developer incentives, marketing
                                    narrative: `The first Nokia Lumia phones ship. The hardware is beautiful—vibrant colors, premium build, cameras that outshoot iPhone. Finally, Windows Phone on devices worthy of the software. Reviews praise everything except the app selection.

But sales remain modest. The Lumia 800 sells respectably in Europe but struggles in the US market. The app gap hasn't closed—Instagram still says no. Snapchat won't return calls. Angry Birds is there, but the hot new apps aren't.

"Nokia brought us hardware credibility," your product lead says in a strategy review. "Now we need to buy developer credibility." Literally. Your team starts writing $100,000 checks to port major apps. Some say yes. Most say "call us when you have more users."`
                                }
                            }
                        },
                        {
                            id: "d3p-option-2",
                            title: "Acquire Platform Innovation",
                            description: "HP just bought Palm for webOS. Similar innovators are available—maybe webOS itself if HP stumbles. Acquire the UI innovation you need rather than building it.",
                            risk: "Integration always harder than expected",
                            upside: "Proven innovation, existing team",
                            cost: "$1-2B acquisition",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -1.5,
                                    marketCap: -1.0,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: 0,        // No immediate revenue impact
                                    mobileCosts: 0.3,        // Acquisition integration costs
                                    unlockedArtifacts: ["artifact-danger-sidekick"],
                                    narrative: `HP's webOS experiment is already faltering—the TouchPad lasted 49 days before being killed. You make an offer: $1.5 billion for the webOS team and intellectual property. HP accepts within a week. They want this off their books.

The tech press is confused: "Microsoft buying a platform they compete with?" But you're not buying the product. The webOS team built genuinely innovative multi-tasking, notifications, and gestures—things Windows Phone lacks. You want their brains, not their brand.

The plan: integrate webOS innovations into Windows Phone 8. "We're buying a brain trust," you tell the board. "Not a product." The webOS engineers are cautiously optimistic. They've been through hell. They just want to build something people will actually use.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.5,
                                    marketCap: -0.5,
                                    marketShare: -4,
                                    morale: "low",
                                    mobileRevenue: -0.1,     // Integration delays hurting sales
                                    mobileCosts: 0.2,        // Retention bonuses, integration
                                    narrative: `Integration is brutal. The webOS team and Windows Phone team have different philosophies—webOS was built for experimentation, Windows Phone for consistency. Every design meeting becomes a debate about fundamental principles.

The best webOS engineers start leaving for Google. They didn't sign up to spend eighteen months merging codebases. By fall, half the acquisition team is gone. The ones who remain are frustrated, caught between two cultures that don't mesh.

"We bought innovation and turned it into bureaucracy," admits one PM during a tense retrospective. The platform is getting better—webOS-style cards and gestures are coming in WP8—but the team is demoralized and you've lost nine months to integration hell while Android keeps shipping.`
                                }
                            }
                        },
                        {
                            id: "d3p-option-3",
                            title: "Fork Android—Join the Ecosystem",
                            description: "The nuclear option. Take Android's open-source code, replace Google services with Microsoft services, and ship devices with app compatibility but Bing/Outlook/OneDrive defaults.",
                            risk: "Internal revolt, strategic humiliation, Google retaliation",
                            upside: "Instant app ecosystem, competitive overnight",
                            cost: "$500M + corporate pride",

                            setsPathState: {
                                d4State: "differentiated"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.5,
                                    marketCap: -3.0,
                                    marketShare: -1,
                                    morale: "low",
                                    mobileRevenue: -0.2,     // Abandoned WP licensing
                                    mobileCosts: 0.15,       // Android fork development
                                    narrative: `You announce it at a hastily called press conference: "Microsoft is embracing Android—on our terms." The plan: take AOSP, strip out Google services, integrate Microsoft services, and ship phones that run Android apps but default to Bing, Outlook, and OneDrive.

The Windows Phone team is devastated. Two senior executives resign within 48 hours. The stock drops 5%. Headlines read "Microsoft Surrenders to Google" and "The End of Windows Phone."

But the engineering team—the pragmatists who've watched app developers ignore you for four years—start building immediately. Within weeks, they have a working prototype. It runs every Android app. It defaults to Microsoft services. It's Android, but it's yours.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.3,
                                    marketCap: 1.0,
                                    marketShare: 1,
                                    morale: "neutral",
                                    mobileRevenue: 0.25,     // MS Android device sales
                                    mobileCosts: 0.1,        // Platform maintenance
                                    narrative: `The first "Microsoft Android" phones ship to surprising reception. "Everything you love about Android without Google tracking you," reads one review. "Privacy-focused Android with real productivity," writes another. The enterprise angle is working.

The app story is instant—200,000 apps on day one. No more begging developers. No more app gap. For the first time, your phones have the same apps as everyone else, plus better Office and Outlook integration.

But Google is fighting back. They're tightening Play Store requirements, pressuring OEMs to avoid you, threatening to cut off partners who ship your devices. "We're building on hostile ground," warns your strategy lead. "Google will try to cut off our oxygen." The question is whether you can grow fast enough that they can't stop you.`
                                }
                            }
                        }
                    ]
                },

                // D3-P-VERTICAL: Vertical Integration
                "d3-p-vertical": {
                    id: "d3-p-vertical",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Hardware Gambit",
                    storyImage: '<i class="ph ph-stack" style="font-size: 4rem;"></i>',
                    storyText: `Your gamble is paying off—sort of. When you announced Microsoft would build its own phones, the OEMs fled to Android. Samsung called it "betrayal." HTC said you'd "never succeed in hardware."

But the KIN disaster taught you something. The first Microsoft phones—rushed, confused, trying to be too many things—sold a few hundred units before being killed. The failure was clarifying: you needed to be more like Apple, not less.

Now, eighteen months later, the second generation of Microsoft phones is ready. Your hardware team—bolstered by acquisitions and poached Apple engineers—has built something genuinely premium. The software-hardware integration is seamless in a way OEM partnerships never achieved.

The question is scale. Apple sells 20 million iPhones per quarter. Samsung is approaching that with Galaxy phones. You have the capacity to build maybe 2 million per quarter—enough for a premium niche, not enough for a platform.

Nokia just announced they're abandoning Symbian. They might be looking for a partner—or they might go all-in on Android. If you could combine your software with Nokia's manufacturing scale...

But that would mean abandoning the vertical integration vision. Picking partners again.`,
                    objective: "Your hardware bet is showing promise. Do you stay vertical or seek scale through partners?",
                    availableInfo: ["d3-info-market-state", "d3-info-nokia-talks", "d3-info-ipad-impact"],

                    options: [
                        {
                            id: "d3v-option-1",
                            title: "Stay Vertical—Premium Niche",
                            description: "Accept limited scale. Build the best Microsoft phone possible and sell it to customers who value quality over ecosystem. Be the Porsche, not the Toyota.",
                            risk: "Niche market, app developers ignore you",
                            upside: "Highest margins, complete brand control",
                            cost: "$800M continued hardware investment",

                            setsPathState: {
                                d4State: "differentiated"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.8,
                                    marketCap: 1.0,
                                    marketShare: -3,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // Premium device sales, small volume
                                    mobileCosts: 0.25,       // Hardware R&D and manufacturing
                                    narrative: `You launch the Microsoft Surface Phone at a special event in New York. Premium aluminum construction. 4.5-inch AMOLED display. The best camera in any phone. Priced at $699—iPhone territory. The tech press is invited to touch and hold it. The room falls quiet.

Reviews are exceptional: "The phone Microsoft should have built from the start." "Finally, a Windows Phone worth buying." "This changes everything—if enough people buy it." The hardware is unimpeachable.

Sales are modest but margins are strong. You're selling 500,000 per quarter to customers who really want them. "We're building a cult," says your product lead. "Small, passionate, committed. Cults can change the world."`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.4,
                                    marketCap: 0.5,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0.12,     // Growing cult following
                                    mobileCosts: 0.15,       // Continued hardware investment
                                    narrative: `Surface Phone has a following—small, passionate, vocal. They create fan sites, advocacy groups, petition developers to build Windows Phone apps. They defend the platform in every comment section. They're true believers.

But the numbers don't lie: 2 million units sold total. iPhone sells that in a week. Android sells that in two days. The cult is devoted, but it's not growing fast enough to matter.

"We've built the best phone for people who don't need apps," jokes one engineer. "All twelve of them." The app gap remains brutal. Your customers love the hardware but hate asking "does it have Instagram?" The answer is still no. And without scale, it will stay no.`
                                }
                            }
                        },
                        {
                            id: "d3v-option-2",
                            title: "Hybrid Model—Premium In-House + Nokia Scale",
                            description: "Keep building Surface phones for premium segment. Partner with Nokia for mainstream volume. Two tracks: Microsoft for showcase, Nokia for scale.",
                            risk: "Complexity, channel conflict, mixed brand",
                            upside: "Best of both worlds—quality and scale",
                            cost: "$2B (hardware + Nokia partnership)",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -2.0,
                                    marketCap: -1.5,
                                    marketShare: 2,
                                    morale: "neutral",
                                    mobileRevenue: 0.2,      // Surface + Nokia licensing
                                    mobileCosts: 0.5,        // Dual track investment
                                    narrative: `The announcement is complicated: Microsoft will keep building Surface phones while Nokia becomes the "volume partner" for Windows Phone. Surface handles premium ($699+). Nokia handles mainstream ($199-$499). Two tracks, one ecosystem.

The strategy makes sense on paper: showcase innovation with Surface, build ecosystem with Nokia volume. The dual approach covers all price points.

But retailers are confused. Carriers don't know which to promote. "You're competing with your own partner," observes one analyst. "That's not a strategy, it's a contradiction." Nokia's Elop looks uncomfortable at the press conference. Later he confides: "We signed up to be the partner. Not the second-tier partner."`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -1.0,
                                    marketCap: -0.5,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: 0.1,      // Cannibalization reducing totals
                                    mobileCosts: 0.35,       // Dual team overhead
                                    narrative: `The hybrid strategy is showing cracks. Surface phones get the best reviews but modest sales—too expensive for mass market. Nokia Lumias sell more units but reviewers keep comparing them unfavorably to Surface. "Why would I buy the Nokia when the Microsoft version is better?" asks The Verge.

Internally, the teams are at odds. Surface wants premium features that Nokia can't afford. Nokia wants cost reductions that hurt Surface's premium positioning. Marketing can't decide which brand to push. Every campaign seems to undermine the other.

"We built two good things that make each other worse," admits your strategy lead during a painful quarterly review. "Classic Microsoft."`
                                }
                            }
                        },
                        {
                            id: "d3v-option-3",
                            title: "Abandon Hardware—All-In on Nokia",
                            description: "Sell the hardware division (or shut it). Go all-in on Nokia as your exclusive hardware partner. One message, one partner, unified strategy.",
                            risk: "Giving up hardware control, dependent on Nokia",
                            upside: "Clarity, scale, and focused investment",
                            cost: "$1B Nokia support + hardware write-off",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -1.0,
                                    marketCap: 0,
                                    marketShare: 3,
                                    morale: "neutral",
                                    mobileRevenue: 0.15,     // Nokia partnership ramping
                                    mobileCosts: 0.2,        // Nokia support + write-offs
                                    narrative: `You wind down the hardware division—transferring some engineers to Nokia, letting others go. The Surface Phone becomes "the phone Microsoft built once"—a proof of concept, not a product line. It's a painful decision. Your team built something beautiful.

Nokia becomes your exclusive partner. The announcement is clean: "Nokia brings hardware excellence. Microsoft brings platform innovation. Together, we'll challenge the duopoly." One partner, one message, one goal.

Wall Street is cautiously optimistic. Nokia's stock actually rises for the first time in months. "Finally," Elop says after the announcement, "a partner who believes in us completely." You've traded control for scale. Time to see if it works.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.5,
                                    marketCap: 0.5,
                                    marketShare: 3,
                                    morale: "high",
                                    mobileRevenue: 0.25,     // Strong Lumia sales
                                    mobileCosts: 0.15,       // Focused Nokia investment
                                    narrative: `Nokia delivers. The Lumia 800 and 900 are genuinely excellent—the best Windows Phones ever made. Nokia's camera technology produces images that rival (and sometimes beat) iPhone. The build quality is unmistakably premium. The colors pop on store shelves.

The message is clear and simple: "If you want Windows Phone, get a Nokia." No confusion. No competing brands. One partner, one story, one phone to recommend.

It's working. Market share stabilizes. Developers are taking notice—not because of the numbers yet, but because of the trajectory. "Maybe there's a third ecosystem after all," writes a prominent app developer. "Maybe Nokia makes this real."`
                                }
                            }
                        }
                    ]
                },

                // D3-P-ALREADY-BUILDING: Platform in Progress
                "d3-p-already-building": {
                    id: "d3-p-already-building",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Mango Question",
                    storyImage: '<i class="ph ph-hammer" style="font-size: 4rem;"></i>',
                    storyText: `Windows Phone 7 launched three months ago. You started building it from scratch after years of waiting—and the results are promising. Reviews praised the Metro UI as "genuinely innovative." Users who bought it mostly love it.

But "mostly" isn't enough, and "promising" isn't winning.

The phone is missing features users expect: no copy-paste, no multitasking, no custom ringtones. The app marketplace has 8,000 apps versus iPhone's 350,000. Sales hit 2 million units—respectable, but iPhone 4 sold that in a weekend.

Your team has been working around the clock on the next major update: "Mango" (Windows Phone 7.5). It fixes everything—500+ new features, multitasking, IE9, better app APIs. Developers who've seen previews say it's what Windows Phone should have been from day one.

The question is timing. Mango is ready for a summer release, but Nokia is asking for a delay. They want to launch their first Windows Phone—the Lumia 800—with Mango built-in. A fall launch would let Nokia's hardware and your software debut together.

Six more months. Six more months of losing ground while you polish something that's already better than what you shipped.`,
                    objective: "Mango is ready. Do you ship now or wait for Nokia?",
                    availableInfo: ["d3-info-wp7-launch", "d3-info-nokia-talks", "d3-info-developer-sentiment"],

                    options: [
                        {
                            id: "d3ab-option-1",
                            title: "Ship Mango Now",
                            description: "Get the update out immediately. Existing users deserve the features. Developer momentum matters more than coordinating with Nokia. They can update their phones on day one.",
                            risk: "Nokia feels undermined, launch message fragmented",
                            upside: "Faster momentum, happier existing users",
                            cost: "Nokia relationship tension",

                            setsPathState: {
                                d4State: "crisis-mode"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: 0,
                                    marketCap: 2.0,
                                    marketShare: 2,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // Increased device sales from hype
                                    mobileCosts: 0.05,       // Final development push
                                    narrative: `You announce Mango for May release. Existing users are thrilled—the update transforms their phones. Copy-paste! Real multitasking! Better app APIs! The tech press praises your speed: "Microsoft actually listening to customers."

The app situation improves immediately. Developers who were waiting for multitasking start building. The momentum feels real for the first time.

But Nokia is furious. Elop calls directly: "We agreed to coordinate. You've undermined our launch." The Lumia 800 was supposed to debut Mango; now it's launching with an "update already available." The product is better. The partnership is strained.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.3,
                                    marketCap: -2.0,
                                    marketShare: -4,
                                    morale: "low",
                                    mobileRevenue: -0.1,     // Nokia launch underperformed
                                    mobileCosts: 0.15,       // Marketing fixes, damage control
                                    narrative: `The fragmented launch hurt more than expected. Reviews of Lumia devices kept referencing the Mango update as an afterthought: "Great phone, but the software launched months ago." There's no news hook. No excitement. It feels like old news.

Nokia sales missed targets by 40%. The Lumia 800 that was supposed to be the "fresh start" instead launched into a confusing software landscape. Elop is publicly defending the partnership while privately threatening to explore Android as a backup plan.

"We shipped a better product and worse experience," admits your marketing lead during a brutal post-mortem. "We optimized for technology and forgot about story." The platform is technically superior. The momentum is stalled.`
                                }
                            }
                        },
                        {
                            id: "d3ab-option-2",
                            title: "Wait for Nokia—Coordinated Launch",
                            description: "Delay Mango six months. Launch simultaneously with Nokia's Lumia lineup. One unified story: the best Windows Phone software on the best Windows Phone hardware.",
                            risk: "Six months of losing market share to iOS/Android",
                            upside: "Coherent launch story, Nokia goodwill",
                            cost: "$300M additional development + market share loss",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.5,
                                    marketCap: -1.0,
                                    marketShare: -5,
                                    morale: "neutral",
                                    mobileRevenue: -0.1,     // Sales stagnating during wait
                                    mobileCosts: 0.15,       // Extended development costs
                                    narrative: `You tell your team: "Hold for Nokia." The groans are audible—they've been working around the clock on Mango and now they have to wait six more months. The best engineers threaten to quit out of frustration.

But the coordinated launch plan is compelling: October 2011, Nokia and Microsoft together, the first true "third ecosystem" debut. One story. One moment. Maximum impact.

The interim months are painful. iPhone 4S rumors swirl. Android passes 50% market share. Your current phones feel increasingly dated compared to every new Android flagship. "We're fighting with one hand tied behind our back," complains your VP of sales. "By choice," you add. "For six months." It feels like an eternity.`
                                },
                                delayed: {
                                    date: "DEC 2011",
                                    cash: -0.3,
                                    marketCap: 1.5,
                                    marketShare: 1,
                                    morale: "high",
                                    mobileRevenue: 0.2,      // Strong coordinated launch
                                    mobileCosts: 0.1,        // Efficient joint marketing
                                    narrative: `The coordinated launch works. October arrives: Nokia Lumia 800 with Mango built-in, simultaneously in 12 countries. Stephen Elop and you stand together on stage in London. The press coverage is unified: "Microsoft and Nokia: The Third Ecosystem Emerges."

Reviews praise both the hardware and software. The Lumia's camera gets called the best in mobile. Mango's features get a fresh spotlight. Holiday sales beat expectations—Nokia sells 3 million Lumias in Q4.

"Finally," writes one analyst, "a coherent Windows Phone story." Developers notice the momentum. App submissions triple in sixty days. It's still a distant third place, but it's third place with trajectory. The six-month wait was worth it.`
                                }
                            }
                        },
                        {
                            id: "d3ab-option-3",
                            title: "Staged Release—Enthusiasts Then Nokia",
                            description: "Ship Mango to enthusiasts and developers in June. But hold the marketing push for Nokia's October launch. Best of both worlds—or worst?",
                            risk: "Complicated message, potential leaks",
                            upside: "Developer momentum plus Nokia coordination",
                            cost: "$200M dual marketing",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.2,
                                    marketCap: 0,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0.05,     // Modest enthusiast uptake
                                    mobileCosts: 0.1,        // Dual launch prep
                                    narrative: `You thread the needle: Mango releases in June as a "developer preview and enthusiast update." No TV ads, no carrier push—just an update for people who want it. Then in October, the "official" launch with Nokia. Your team is skeptical. "We're launching the same thing twice?" But developers love it. They get early access to new APIs. The enthusiast community buzzes with Mango reviews. And Nokia gets their coordinated October debut. It's complicated, but it might work.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.3,
                                    marketCap: 0.5,
                                    marketShare: 0,
                                    morale: "high",
                                    mobileRevenue: 0.15,     // Nokia launch sales
                                    mobileCosts: 0.12,       // Dual marketing campaigns
                                    narrative: `The staged approach works better than expected. Developers built Mango apps over the summer, so the October Nokia launch has a genuine app story. Reviews mention "months of refinement" positively. Nokia sales start strong. The only downside: marketing complexity. Nobody quite knows when Windows Phone "launched" and your timeline is confusing to explain. But the product is strong, the apps are growing, and Nokia is happy. "Inelegant but effective," summarizes your marketing lead. "Classic Microsoft."`
                                }
                            }
                        }
                    ]
                },

                // D3-E: Enterprise Holdout
                "d3-e": {
                    id: "d3-e",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Shrinking Fortress",
                    storyImage: '<i class="ph ph-shield" style="font-size: 4rem;"></i>',
                    storyText: `The quarterly review opens with a chart you've been dreading. Your enterprise market share has held—78% of Fortune 500 companies still mandate Windows Mobile for corporate devices. But the fine print tells a different story.

"Active devices are down 34%," your VP of Enterprise reports. "Companies are keeping the mandate but employees are ignoring it. They're using personal iPhones for work email through webmail. IT can't stop them."

The Citibank CIO—the one who called you two years ago about iPhones in his boardroom—sends a follow-up. "We're switching to BYOD. I can't fight this anymore. But I still need device management, security, compliance. Can you help me manage the devices I don't control?"

It's a strange pivot: from selling phones to managing other people's phones. But the MDM market is real—$1.2 billion this year, projected to hit $6 billion by 2015. And you have something the MDM startups don't: Exchange integration, Active Directory, the whole enterprise stack.

The question is whether managing the decline is the same as surrendering to it.`,
                    objective: "Your enterprise fortress is being emptied from within. Defend the walls or change the game?",
                    availableInfo: ["d3-info-enterprise-byod", "d3-info-market-state", "d3-info-developer-sentiment"],

                    options: [
                        {
                            id: "d3e-option-1",
                            title: "Become the Security Fortress",
                            description: "Accept a smaller market but own it completely. Target government, defense, healthcare—industries where security mandates are law, not policy. Become the only choice for high-security mobile.",
                            risk: "Shrinking addressable market, niche positioning",
                            upside: "Unassailable position in regulated industries",
                            cost: "$300M security certification push",

                            setsPathState: {
                                d4State: "differentiated"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.3,
                                    marketCap: 0.5,
                                    marketShare: -5,
                                    morale: "neutral",
                                    mobileRevenue: 0.1,      // Government contracts starting
                                    mobileCosts: 0.2,        // Security certification push
                                    narrative: `You announce the pivot at RSA Conference: "Windows Phone will be the most secure mobile platform ever built." FIPS 140-2 certification. NSA-grade encryption. Hardware security modules. The Pentagon is interested. The CIA sends a delegation.

Government contracts start flowing—not huge, but stable. Your market share craters in consumer and general enterprise, but in the corridors of power, you're the only game in town. The trade press calls it "retreat to the bunker." You call it "strategic focus."

Defense industry analysts upgrade Microsoft's positioning. "They've found a niche no one else can touch," writes Jane's Defense Weekly. "When security is mandatory, not optional, Windows Phone becomes the only choice." It's a smaller market, but it's yours.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: 0,
                                    marketCap: 0,
                                    marketShare: -4,
                                    morale: "neutral",
                                    mobileRevenue: 0.15,     // Steady government revenue
                                    mobileCosts: 0.1,        // Focused security team
                                    narrative: `The security strategy is working—for security. DoD signs a five-year contract. Intelligence agencies standardize on your platform. But the consumer market is gone, and the general enterprise market is following.

Your team builds brilliant security features that 99% of the world will never see. Hardware-backed encryption, secure boot chains, zero-trust architecture. "We're the Humvee of phones," jokes one engineer. "Nobody wants one for their commute, but when you need one, there's no substitute."

Wall Street is lukewarm. "Microsoft found a profitable niche in government security," writes Morgan Stanley. "Whether that's a foundation to rebuild from or a managed decline depends on what comes next." Your consumer ambitions are over. But your classified briefings have never been more secure.`
                                }
                            }
                        },
                        {
                            id: "d3e-option-2",
                            title: "Pivot to MDM—Manage All Devices",
                            description: "If you can't beat BYOD, manage it. Build the best Mobile Device Management platform for iOS and Android. Keep enterprise customers even if they're using competitors' phones.",
                            risk: "Admitting your phones lost, dependent on competitors' platforms",
                            upside: "Revenue from every device, not just yours",
                            cost: "$200M MDM development",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.2,
                                    marketCap: -0.5,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0.05,     // MDM subscriptions starting
                                    mobileCosts: 0.15,       // MDM development investment
                                    narrative: `You announce Intune—Microsoft's Mobile Device Management platform. "We'll manage any device your employees bring to work. iPhone, Android, Windows Phone—it doesn't matter. If it connects to Exchange, we'll secure it."

The enterprise team is energized. This is playing to your strengths: identity, directory services, compliance. CIOs respond immediately. "Finally," says the Citibank CIO, "someone who understands what I actually need."

Your phone market share keeps falling, but your enterprise relevance is rising. Gartner adds Intune to their MDM Magic Quadrant within months. "Microsoft pivoted faster than expected," notes one analyst. "They stopped fighting the BYOD tide and started surfing it."`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: 0,
                                    marketCap: 0.5,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0.2,      // MDM/Intune growing fast
                                    mobileCosts: 0.1,        // Platform scaling efficiently
                                    narrative: `Intune is gaining traction. 10,000 enterprise customers in the first six months. IT departments love it—one console to manage everything. The irony isn't lost on anyone: you're making money helping companies use your competitors' phones.

But it's working. Azure and Office 365 integration makes you indispensable even on iOS. Conditional access policies, app management, compliance reporting—all the things enterprises actually need, regardless of what device their employees carry.

"If we can't own the device," your strategy lead says, "we'll own the experience on the device." Fortune 500 IT directors nod approvingly. Your phone business is dying. Your enterprise mobile business is being born.`
                                }
                            }
                        },
                        {
                            id: "d3e-option-3",
                            title: "Acquire Nokia—Go Big or Go Home",
                            description: "Nokia is desperate. Their platform is dying. Stephen Elop is signaling Windows Phone openness. Buy the manufacturing expertise you need and take one last shot at the consumer market.",
                            risk: "Massive bet on a declining asset, integration challenges",
                            upside: "Instant hardware capability, global distribution, critical mass",
                            cost: "$7-10B+ (partnership or acquisition)",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -3.0,
                                    marketCap: -2.0,
                                    marketShare: 2,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // Partnership ramping up
                                    mobileCosts: 0.4,        // Nokia support payments
                                    narrative: `You fly to Helsinki and close the deal. Not an acquisition—not yet—but a partnership that's effectively exclusive. Nokia will build Windows Phones, only Windows Phones, for the next five years. You're paying $1B annually for platform support.

Stephen Elop announces it at Nokia's headquarters: "We're choosing Windows Phone because it's the only platform that gives us differentiation." The Finnish press is furious. Nokia engineers are stunned. "We built Symbian. Now we're abandoning it for an American OS?"

But you finally have a hardware partner who's all-in. The question is whether all-in on a 4% platform is enough. Wall Street is cautiously optimistic. "Microsoft finally has a hardware strategy," writes one analyst. "Whether Nokia can execute it is another question."`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -1.0,
                                    marketCap: 1.0,
                                    marketShare: 3,
                                    morale: "high",
                                    mobileRevenue: 0.2,      // Lumia sales starting
                                    mobileCosts: 0.25,       // Marketing and dev support
                                    narrative: `The first Nokia Windows Phone ships: the Lumia 800. Reviews are strong—"the best Windows Phone ever made," "gorgeous hardware finally matching the software." The polycarbonate design is distinctive; the camera is excellent; the Metro UI finally has hardware worthy of it.

But sales are modest. Nokia's brand helps in Europe, hurts in the US. The app gap is still brutal—no Instagram, no Snapchat, limited banking apps. "We're building beautiful devices for an ecosystem that doesn't exist yet," admits one Nokia PM.

For the first time, you have competitive hardware. Now you need to fill it with apps. Developer outreach intensifies. The chicken-and-egg problem remains: developers want users, users want apps. Breaking the cycle will define whether this partnership succeeds or fails.`
                                }
                            }
                        }
                    ]
                },

                // D3-I-BB: BlackBerry Integration
                "d3-i-bb": {
                    id: "d3-i-bb",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Waterloo Problem",
                    storyImage: '<i class="ph ph-puzzle-piece" style="font-size: 4rem;"></i>',
                    storyText: `The integration meeting in Waterloo starts badly. Again.

"You want us to port BBM to Windows Phone?" Mike Lazaridis sounds incredulous. "BBM is our only differentiator left. You'd have us give it away to a platform with no users?"

It's been eighteen months since the acquisition closed. You paid $18 billion for BlackBerry—for BBM, for the enterprise relationships, for the combined market share. What you got was two warring tribes.

The Waterloo engineers worship their keyboard. They see Windows Phone's touch interface as a betrayal of everything BlackBerry stood for. The Redmond team thinks BlackBerry's software is a decade behind.

Both are right. Neither will work together.

Meanwhile, the combined entity has bled market share. iPhone and Android didn't slow down while you fought internally. Your "combined 70% enterprise share" is now 30% and falling. The synergies you promised the board haven't materialized. The costs have.

Something has to give. You can force unity—pick a platform, pick a leader, accept the casualties. Or you can cut your losses—spin off BlackBerry, take the write-down, and start clean.

Neither option is good. But continuing like this is worse.`,
                    objective: "The BlackBerry acquisition is failing. Force integration or cut losses?",
                    availableInfo: ["d3-info-enterprise-byod", "d3-info-market-state", "d3-info-developer-sentiment"],

                    options: [
                        {
                            id: "d3ibb-option-1",
                            title: "Force the Merger—One Platform",
                            description: "End the debate. Pick Windows Phone. Migrate BBM. Integrate BES with Exchange. Layoffs will be massive, but you'll finally have one company instead of two.",
                            risk: "Key talent leaves, BBM users defect, brand damage",
                            upside: "Finally unified, clear direction, focused investment",
                            cost: "$500M restructuring + massive layoffs",

                            setsPathState: {
                                d4State: "crisis-mode"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.5,
                                    marketCap: -2.0,
                                    marketShare: -6,
                                    morale: "low",
                                    mobileRevenue: -0.2,     // Transition chaos losing customers
                                    mobileCosts: 0.3,        // Restructuring costs
                                    narrative: `You fly to Waterloo and deliver the news yourself: "Windows Phone is the platform. BBM will be ported. BES will integrate with Exchange. Anyone who can't commit to this vision should find another opportunity." The room is stunned.

Within a week, resignation letters pile up—2,000 in the first month. Mike Lazaridis gives an interview calling the decision "cultural vandalism." The Canadian press runs stories about "Microsoft destroying a Canadian icon."

But the debate is over. For the first time, you have one roadmap. "It's bloody, but it's clarity," you tell your board. The integration team gets to work. Whether the clarity was worth the casualties will take months to determine.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.5,
                                    marketCap: -1.0,
                                    marketShare: -5,
                                    morale: "low",
                                    mobileRevenue: -0.1,     // Continued customer losses
                                    mobileCosts: 0.2,        // Integration overhead
                                    narrative: `The forced integration is proceeding—slowly, painfully. BBM on Windows Phone works but feels like a port, not a native experience. The BES engineers who stayed are building Exchange integration, but progress is slower than projected.

The brain drain is worse than expected: 40% of the Waterloo team is gone. Many went to Apple and Google; some started competing messaging apps. "We bought a company and got a building," observes one exec grimly.

The merged product is better than either separate product, but worse than what the best of both teams could have built together. The synergies are real but smaller than promised. Analysts downgrade expectations. "The BlackBerry acquisition value destruction continues," writes RBC Capital.`
                                }
                            }
                        },
                        {
                            id: "d3ibb-option-2",
                            title: "Spin Off BlackBerry—Cut Losses",
                            description: "Admit defeat. The acquisition isn't working. Spin BlackBerry back out as an independent company, take the write-down, and refocus Microsoft on Windows Phone alone.",
                            risk: "Massive write-off, public admission of failure",
                            upside: "Freedom to move fast, end the internal war",
                            cost: "$8-10B write-off",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: 2.0,
                                    marketCap: -1.0,
                                    marketShare: -12,
                                    morale: "neutral",
                                    mobileRevenue: -0.3,     // Lost RIM revenue in spinoff
                                    mobileCosts: -0.25,      // Also shed RIM costs
                                    narrative: `You announce the spin-off at a somber press conference: "The acquisition didn't achieve the integration we hoped for. BlackBerry will return to independence, and Microsoft will focus on Windows Phone." The write-off is $10 billion—the largest in Microsoft history.

Wall Street actually rallies on the news. "Finally, strategic clarity," writes one analyst. "The acquisition was a mistake. Admitting it is wisdom." Microsoft stock rises 3% on the announcement.

The Waterloo team is relieved—they get their independence back. The Redmond team is energized—they get to focus on Windows Phone. You're smaller but focused. Now you can actually build something without the integration drama consuming every meeting.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: 0,
                                    marketCap: 1.5,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // WP focused growth
                                    mobileCosts: 0.15,       // Lean focused team
                                    narrative: `Freedom feels good. Without the Waterloo integration distracting everyone, the Windows Phone team is shipping faster. The Nokia partnership—put on hold during the BlackBerry chaos—accelerates.

Your first post-spinoff quarter shows real progress: Nokia Lumias launching, developer momentum building, a coherent story for the first time in years. Engineering velocity has doubled since the spin-off.

"We wasted two years and ten billion dollars learning that acquisitions don't solve strategy problems," reflects your VP of strategy. "Expensive lesson. But we finally learned it." The board seems relieved. The company feels lighter. Now the real work begins.`
                                }
                            }
                        }
                    ]
                },

                // D3-I-FORCE-WINDOWS
                "d3-i-force-windows": {
                    id: "d3-i-force-windows",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Osborne Effect",
                    storyImage: '<i class="ph ph-flag" style="font-size: 4rem;"></i>',
                    storyText: `The numbers from Helsinki are catastrophic. Since you announced the Symbian shutdown, Nokia smartphone sales have collapsed—down 40% in six months. Customers stopped buying Symbian phones the moment you said they were dead. Carriers cancelled orders. Retailers cleared shelf space.

They call it the Osborne Effect, after the computer company that announced a successor and accidentally killed itself. You just did it to Nokia.

"We have nothing to sell," reports your Nokia integration lead. "Symbian is dying on schedule—faster than schedule, actually. But Windows Phone isn't ready for Nokia devices. There's a twelve-month gap where we have no competitive product."

The talent exodus is accelerating. 8,000 Nokia engineers have left. Most went to Apple and Google. The ones who stayed are demoralized—they're porting Windows Phone to Nokia hardware, not building anything new.

You can accelerate the transition—ship Windows Phones faster, with fewer features. Or you can build a bridge—keep releasing Symbian devices nobody wants while Windows Phone catches up.

Neither option is good. The Osborne Effect has trapped you in a death spiral.`,
                    objective: "You killed Symbian before Windows Phone was ready. Now what?",
                    availableInfo: ["d3-info-market-state", "d3-info-nokia-talks", "d3-info-developer-sentiment"],

                    options: [
                        {
                            id: "d3ifw-option-1",
                            title: "Accelerate Windows—Ship Now",
                            description: "Ship Windows Phones on Nokia hardware immediately, even if they're not perfect. Something is better than nothing. Accept quality compromises to close the product gap.",
                            risk: "Quality issues damage both Nokia and Windows Phone brands",
                            upside: "End the death spiral, get product to market",
                            cost: "$400M emergency development",

                            setsPathState: {
                                d4State: "crisis-mode-nokia-owned"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.4,
                                    marketCap: -1.5,
                                    marketShare: -8,
                                    morale: "low",
                                    mobileRevenue: 0.05,     // Some rushed sales
                                    mobileCosts: 0.25,       // Emergency development costs
                                    narrative: `You force the launch. The first Nokia Windows Phone—a hastily ported Lumia 710—ships six months early. Reviews are mixed: "Nokia build quality with half-baked software" (Engadget). "Better than no phone at all" (The Verge).

Sales are modest but existent. The death spiral slows. Carriers have something to put on shelves. The narrative shifts from "Nokia has nothing" to "Nokia has something early."

But the damage to brand perception is real—this is supposed to be the flagship launch of the Microsoft-Nokia partnership, and it feels rushed. "We had to stop the bleeding," you tell the board. "Bleeding is stopping. Now we need to heal."`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.3,
                                    marketCap: -0.5,
                                    marketShare: -5,
                                    morale: "low",
                                    mobileRevenue: 0.1,      // Better products, some recovery
                                    mobileCosts: 0.15,       // Continued development
                                    narrative: `The second wave of Nokia Windows Phones is better—Lumia 800 and 900 ship with proper optimization. Reviews improve. "Nokia finally delivered what they promised" (Ars Technica). The camera quality stands out; the design is distinctive.

But the early damage lingers. Customers remember the rushed 710. Carriers remember the stockouts and returns. Tech bloggers keep referencing "the botched launch" every time they review a new Lumia.

"We survived the Osborne Effect," reflects your integration lead, "but the scar tissue is permanent." Market share stabilizes in single digits—better than dead, worse than hoped. The foundation is laid, but the reputation will take years to rebuild.`
                                }
                            }
                        },
                        {
                            id: "d3ifw-option-2",
                            title: "Build the Bridge—Symbian Lives",
                            description: "Keep selling Symbian devices with aggressive discounting. Position them as 'value' phones while Windows Phone goes premium. Buy time for a proper Windows Phone launch.",
                            risk: "Confusing message, Symbian brand drags down Nokia",
                            upside: "Revenue continuity, time for proper Windows Phone",
                            cost: "$300M Symbian maintenance + discounting",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.2,
                                    marketCap: 0,
                                    marketShare: -4,
                                    morale: "neutral",
                                    mobileRevenue: 0.1,      // Symbian bridge revenue
                                    mobileCosts: 0.15,       // Dual platform support
                                    narrative: `You announce the "Symbian Bridge"—continued support for Symbian devices as "affordable smartphones" while Windows Phone targets premium. The messaging is complicated: "Buy Symbian if you want value. Buy Lumia if you want the future."

Customers are confused. "So you're selling phones you say are dead?" asks one retailer. The marketing team struggles to explain the transition without undermining either product line.

But the revenue helps. Symbian devices at $99 move volume. The twelve-month gap shrinks. Nokia employees stop fleeing—there's actually something to sell. The bridge is ugly, but it's holding weight.`
                                },
                                delayed: {
                                    date: "DEC 2011",
                                    cash: -0.3,
                                    marketCap: 0.5,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: 0.15,     // Transition stabilizing
                                    mobileCosts: 0.1,        // Symbian winding down
                                    narrative: `The bridge strategy worked—barely. Symbian devices kept revenue flowing while the Lumia lineup matured. Emerging market sales stayed strong enough to fund the transition.

By Q4, Nokia Windows Phones are ready: Lumia 800 and 900 launch to strong reviews. The transition from "bridge" to "destination" is awkward but manageable. Symbian quietly phases out of marketing materials.

"We survived the Osborne Effect," reports your integration lead. "Not elegantly. Not gracefully. But we survived." Market share is still down, but the trajectory is finally improving. The worst is over—probably.`
                                }
                            }
                        }
                    ]
                },

                // D3-I-DUAL
                "d3-i-dual": {
                    id: "d3-i-dual",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Decision That Never Came",
                    storyImage: '<i class="ph ph-git-fork" style="font-size: 4rem;"></i>',
                    storyText: `Four years of dual platforms. Four years of "we'll decide later." The bill has come due.

Symbian still powers 100 million Nokia devices annually—mostly in emerging markets where $50 phones dominate. Windows Phone runs the premium Lumia lineup—beautiful devices that sell in the millions, not tens of millions.

Your quarterly reviews have become a ritual: Symbian team argues their volume justifies continued investment. Windows team argues their trajectory justifies killing Symbian. Neither side wins. Both sides lose a little more budget each quarter.

Meanwhile, the market has moved decisively. Android owns 50% globally. iOS owns premium. Your combined Nokia/Microsoft platform sits at 15% and shrinking—Symbian declining faster than Windows Phone grows.

"Every engineering hour we spend on Symbian is an hour not spent on Windows Phone," argues your platform lead. "Every Symbian sale is a customer who might have bought a Lumia."

"Every Symbian sale is revenue," counters Nokia's Finland office. "Revenue pays salaries. Revenue keeps the lights on."

The board wants a decision. The market wants a decision. Your team wants a decision. You've been avoiding it for four years.

Time's up.`,
                    objective: "Four years of dual platforms. Finally pick one, or keep the chaos?",
                    availableInfo: ["d3-info-market-state", "d3-info-developer-sentiment", "d3-info-enterprise-byod"],

                    options: [
                        {
                            id: "d3id-option-1",
                            title: "Finally Kill Symbian—All Windows",
                            description: "End the debate. Announce Symbian end-of-life. Redirect all engineering to Windows Phone. Accept the short-term revenue hit for long-term platform clarity.",
                            risk: "Revenue gap in emerging markets, Finnish political fallout",
                            upside: "Unified platform, focused investment, clear story",
                            cost: "$500M revenue loss + restructuring",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: 0,
                                    marketCap: 0.5,
                                    marketShare: -6,
                                    morale: "neutral",
                                    mobileRevenue: -0.15,    // Symbian wind-down costs
                                    mobileCosts: 0.1,        // Restructuring
                                    narrative: `You announce it at Mobile World Congress: "Nokia will focus exclusively on Windows Phone. Symbian development ends Q4 2011." The Helsinki team knew it was coming but that doesn't make it easier.

The Finnish government summons your Nokia executives for "consultation." Labor unions threaten strikes. The press calls it "the final surrender of Finnish mobile." Politicians demand answers about job losses.

But in Redmond and among the Windows Phone faithful, there's relief. "Finally," says your platform lead. "We can stop fighting ourselves and start fighting Android." The internal civil war is over. Now comes the external one.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.2,
                                    marketCap: 0.5,
                                    marketShare: -4,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // Unified platform gaining traction
                                    mobileCosts: 0.05,       // Efficient focused spending
                                    narrative: `The unified focus is working. Windows Phone development accelerates—features that took six months now ship in three. The Lumia lineup expands to cover more price points. Engineers who had been spread across two platforms are now concentrated on one.

Developers notice the commitment. "Nokia betting everything on Windows Phone makes us more confident," says one major app developer who'd been hedging. App submissions tick upward for the first time in months.

Market share is still shrinking—you're fighting Android's momentum—but the rate of decline is slowing. For the first time in four years, you have one platform, one roadmap, one team pulling in the same direction. It feels like progress, even if the numbers don't show it yet.`
                                }
                            }
                        },
                        {
                            id: "d3id-option-2",
                            title: "Keep Both—Managed Decline",
                            description: "Symbian for emerging markets, Windows Phone for premium. Gradual transition as Windows Phone matures. Avoid the political explosion of killing Symbian outright.",
                            risk: "Continued split focus, neither platform gets full resources",
                            upside: "Revenue continuity, avoided political crisis",
                            cost: "$400M/year dual R&D",

                            setsPathState: {
                                d4State: "crisis-mode-nokia-owned"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.3,
                                    marketCap: -1.0,
                                    marketShare: -3,
                                    morale: "low",
                                    mobileRevenue: -0.1,     // Both platforms struggling
                                    mobileCosts: 0.2,        // Duplicate R&D continuing
                                    narrative: `You announce "platform rationalization"—corporate speak for "we're not deciding." Symbian gets "maintenance mode" budget. Windows Phone gets "growth investment." Both teams feel underfunded. Neither feels prioritized.

The press coverage is brutal: "Microsoft-Nokia can't decide what business they're in" (Bloomberg). "The platform strategy that isn't" (Ars Technica). Investors openly question the leadership's conviction.

Internally, the best engineers start interviewing elsewhere. "If leadership won't choose, we will," says one departing architect. "And we're choosing companies that know what they're building." Morale hits new lows across both organizations.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.5,
                                    marketCap: -1.0,
                                    marketShare: -6,
                                    morale: "low",
                                    mobileRevenue: -0.2,     // Accelerating decline
                                    mobileCosts: 0.15,       // Can't cut fast enough
                                    narrative: `The managed decline becomes unmanaged chaos. Symbian sales collapse faster than projected—even emerging market customers want Android now. Windows Phone can't fill the gap fast enough. The revenue charts look like a staircase going down.

Talent exodus accelerates: 2,000 engineers leave in Q2 alone. LinkedIn profiles update en masse with Google, Apple, and Amazon as new employers. Institutional knowledge walks out the door daily.

The board demands answers. "We tried to optimize for revenue and strategy simultaneously," you explain. "Turns out you can't." The chairman's response: "Then pick one." You've delayed the decision another year. It only got worse.`
                                }
                            }
                        }
                    ]
                },

                // D3-I-NOKIA-LEADS
                "d3-i-nokia-leads": {
                    id: "d3-i-nokia-leads",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The MeeGo Moment",
                    storyImage: '<i class="ph ph-users-three" style="font-size: 4rem;"></i>',
                    storyText: `The Nokia N9 prototype sits on the conference table. It's beautiful—curved glass, no buttons, swipe navigation that feels almost magical. The Finnish engineers are beaming.

"This is MeeGo," says Nokia's product lead. "Linux-based. True multitasking. Developer-friendly. And it's ready."

You let Nokia lead the platform strategy, and they delivered something genuinely innovative. MeeGo isn't a Windows Phone clone or an Android fork—it's a third way, built by people who've been doing mobile longer than anyone.

The reviews from early testers are exceptional: "The phone Nokia should have built three years ago." "MeeGo makes iOS feel dated." "Why didn't they do this sooner?"

But there's a catch. MeeGo is Nokia's baby, not Microsoft's. The app ecosystem is tiny—a few thousand apps, mostly Finnish developers and hobbyists. The N9 is a showcase device, not a platform.

Your team in Redmond is skeptical. "MeeGo is great technology. But technology doesn't win. Ecosystems win. And MeeGo has no ecosystem."

Nokia's team pushes back: "The ecosystem will come. The product is that good. Just give us time."

Time. The one thing the smartphone market doesn't give.`,
                    objective: "Nokia built something innovative with MeeGo. Bet on it or redirect to Windows?",
                    availableInfo: ["d3-info-market-state", "d3-info-developer-sentiment", "d3-info-ipad-impact"],

                    options: [
                        {
                            id: "d3inl-option-1",
                            title: "Full Commitment to MeeGo",
                            description: "Nokia built something special. Trust them. Pour resources into MeeGo—app developer subsidies, marketing, carrier deals. Bet that great products attract great ecosystems.",
                            risk: "Betting against the iOS/Android ecosystem juggernaut",
                            upside: "Genuinely differentiated platform, energized Nokia team",
                            cost: "$500M MeeGo investment",

                            setsPathState: {
                                d4State: "differentiated"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.5,
                                    marketCap: 0.5,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // N9 early sales
                                    mobileCosts: 0.25,       // MeeGo investment
                                    unlockedArtifacts: ["artifact-nokia-n9"],
                                    narrative: `You stand before the Nokia board in Helsinki: "Microsoft is all-in on MeeGo." The Finnish engineers applaud. Finally, an American company that trusts Finnish innovation.

You announce a $500M developer fund, exclusive carrier partnerships for the N9, and a MeeGo tablet roadmap. The tech press is surprised: "Microsoft betting on Linux-based platform" makes headlines worldwide.

The N9 launches to rave reviews. "The most innovative phone in years" (Wired). "Gesture navigation that makes iPhone feel dated" (The Verge). Sales start strong in Europe—not iPhone numbers, but real momentum. The underdog has believers.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.3,
                                    marketCap: 0.5,
                                    marketShare: -1,
                                    morale: "high",
                                    mobileRevenue: 0.15,     // Cult following revenue
                                    mobileCosts: 0.15,       // Continued MeeGo investment
                                    narrative: `MeeGo is developing a cult following. The N9 has passionate fans who evangelize the platform relentlessly. Online forums buzz with MeeGo development tips and customization guides.

Developers are starting to notice—the framework is elegant, the tools are good, and the enthusiast base is engaged. Qt development attracts talent. The platform feels genuinely different, not a knockoff.

But the numbers tell a different story: 3 million N9s sold against iPhone's 20 million per quarter. "We're building something great for a small audience," admits Nokia's product lead. "The question is whether small can become big, or whether we're just the premium niche that never scaled."`
                                }
                            }
                        },
                        {
                            id: "d3inl-option-2",
                            title: "Redirect to Windows Phone",
                            description: "MeeGo is impressive but the ecosystem battle is already lost. Redirect Nokia to Windows Phone—the platform with Microsoft services integration and a real app strategy. Kill MeeGo before it consumes more resources.",
                            risk: "Betraying Nokia team, killing genuine innovation",
                            upside: "Platform unification, ecosystem focus",
                            cost: "Trust with Nokia team, MeeGo write-off",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: 0,
                                    marketCap: -0.5,
                                    marketShare: -4,
                                    morale: "low",
                                    mobileRevenue: -0.1,     // MeeGo momentum lost
                                    mobileCosts: 0.1,        // Pivot costs
                                    narrative: `You fly to Helsinki with news no one wants to hear: "MeeGo development stops. Windows Phone is the future." The room goes silent. Then erupts. "You promised us platform leadership," says Nokia's VP of engineering. "You lied."

Three key architects resign within the week. The Finnish press calls it "Microsoft's betrayal of Nokia innovation." Social media fills with #SaveMeeGo hashtags and angry open letters.

The N9 launches as planned—a single device, no future roadmap—and sells surprisingly well on pure enthusiasm. "The best phone we ever made," says a departing Nokia engineer, "and the last." It becomes a collector's item before it's even discontinued.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.2,
                                    marketCap: 0,
                                    marketShare: -3,
                                    morale: "neutral",
                                    mobileRevenue: 0.1,      // Lumia sales beginning
                                    mobileCosts: 0.15,       // WP development costs
                                    narrative: `The pivot to Windows Phone is proceeding, but the scars remain. The MeeGo team largely departed—many to Jolla, a Finnish startup building their own MeeGo successor. Nokia engineers still resent the redirect.

But the Windows Phone devices are coming: Lumia 800 and 900, Nokia hardware with Microsoft software. Reviews are positive—the build quality is excellent, the cameras are sharp. The unified message is clearer: one platform, one direction.

"We killed something beautiful to build something practical," reflects your integration lead. "That's the nature of platforms. Practical wins." Whether it was the right call will take years to determine. The decision is made. Now you live with it.`
                                }
                            }
                        }
                    ]
                },

                // D3-I-NOKIA (Late acquisition)
                "d3-i-nokia": {
                    id: "d3-i-nokia",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Bargain Price",
                    storyImage: '<i class="ph ph-shopping-cart" style="font-size: 4rem;"></i>',
                    storyText: `You bought Nokia for $15 billion—a third of what it would have cost in 2007. Everyone called it a bargain. Now you understand why it was cheap.

The company you acquired is not the company you researched. The Nokia that dominated mobile for a decade has been hollowed out. The best engineers left during the three years you waited. The carrier relationships frayed. The brand cachet faded.

"We bought the name," reports your integration lead, "not the capability. The hardware team is still excellent. Everything else is a reconstruction project."

The good news: Nokia is grateful to have a lifeline. Unlike the early acquisition scenario—where Nokia was arrogant and resistant—this Nokia is humble and cooperative. They want the partnership to work because the alternative is extinction.

The bad news: you're integrating a company that's already been through a near-death experience. Morale is fragile. Talent is depleted. The institutional knowledge walked out the door.

You can move fast—rip off the bandage, integrate aggressively, and accept that some things will break. Or you can move carefully—preserve what remains, build trust, and hope time isn't the enemy.`,
                    objective: "You bought a weakened Nokia. Integrate fast and risk breaking it, or go slow and risk missing the market?",
                    availableInfo: ["d3-info-nokia-talks", "d3-info-market-state", "d3-info-wp7-launch"],

                    options: [
                        {
                            id: "d3in-option-1",
                            title: "Aggressive Integration—Speed Over Care",
                            description: "Move fast. Merge the organizations, unify the platforms, accept the breakage. Every month of 'gradual integration' is a month Android extends its lead.",
                            risk: "Destroying what capability remains, alienating Nokia loyalists",
                            upside: "Fast unification, immediate platform focus",
                            cost: "$800M restructuring",

                            setsPathState: {
                                d4State: "crisis-mode"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.8,
                                    marketCap: -1.0,
                                    marketShare: -4,
                                    morale: "low",
                                    mobileRevenue: -0.15,    // Integration disrupting sales
                                    mobileCosts: 0.35,       // Heavy restructuring costs
                                    narrative: `You announce "Project Unify"—a 90-day integration blitz. Dual reporting structures end immediately. Platform decision made: Windows Phone only, Symbian end-of-life Q2. Redundancies announced: 5,000 positions eliminated.

The Finnish government protests. Nokia employees stage a walkout in Espoo. The European press runs stories about "American corporate raiders" and "the death of Finnish innovation."

But the clarity is immediate. For the first time, there's one roadmap, one leadership structure, one goal. "We broke the company to save the platform," you tell the board. "Now let's see if we can rebuild it."`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.5,
                                    marketCap: -0.5,
                                    marketShare: -5,
                                    morale: "low",
                                    mobileRevenue: 0.05,     // Early WP Nokia sales
                                    mobileCosts: 0.2,        // Continued integration
                                    narrative: `The aggressive integration worked—for integration. The companies are unified. The platform is clear. The first Nokia Windows Phones ship on time. Operationally, it's a success.

But the human cost is evident. The Nokia that emerges feels like a subsidiary, not a partnership. The Finnish spirit that made Nokia innovative is largely gone. Water cooler conversations happen in English now, not Finnish.

"We have a hardware division now," observes one exec. "We used to have a phone company." The products are competitive. The culture is damaged. Whether the trade-off was worth it depends on what the products do in market.`
                                }
                            }
                        },
                        {
                            id: "d3in-option-2",
                            title: "Gradual Merge—Preserve the Asset",
                            description: "Move carefully. Respect Nokia's identity. Maintain Finnish operations. Trust that the best acquisition outcomes come from patience and cultural sensitivity.",
                            risk: "Taking too long while market shifts further",
                            upside: "Preserved Nokia capability and goodwill",
                            cost: "$300M integration + 12 months",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.3,
                                    marketCap: 0,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: 0,        // Transition period
                                    mobileCosts: 0.15,       // Integration investment
                                    narrative: `You announce a "partnership integration"—separate organizations collaborating rather than merging. Nokia keeps its headquarters, its brand, its product autonomy. Windows Phone becomes the shared platform, but Nokia retains hardware decision-making.

The Finnish government applauds. Nokia employees exhale. "Microsoft respects our heritage," says Nokia's acting CEO. The press coverage is surprisingly positive—"a merger that doesn't feel like a takeover."

The pace is slower—first Windows Phones won't ship until Q4—but the relationship is healthier. You're building trust, not imposing authority. The long game requires patience.`
                                },
                                delayed: {
                                    date: "DEC 2011",
                                    cash: -0.2,
                                    marketCap: 0.5,
                                    marketShare: -1,
                                    morale: "neutral",
                                    mobileRevenue: 0.15,     // Healthy Lumia launch
                                    mobileCosts: 0.1,        // Efficient collaboration
                                    narrative: `The gradual approach is paying off. Nokia engineers who stayed through the acquisition are engaged and productive. The culture feels collaborative, not colonial. Ideas flow both directions.

The Lumia devices ship with genuine Nokia design DNA—camera excellence, build quality, the small touches that made Nokia phones feel premium. PureView technology. Carl Zeiss optics. Details that matter to people who care about phones.

"We integrated the companies without destroying the company," reports your integration lead. Market share is still declining, but the trajectory is improving. More importantly, you have a partner that wants to be here. That matters more than any org chart.`
                                }
                            }
                        }
                    ]
                },

                // D3-A-NOKIA-ANDROID
                "d3-a-nokia-android": {
                    id: "d3-a-nokia-android",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Android Paradox",
                    storyImage: '<i class="ph ph-android-logo" style="font-size: 4rem;"></i>',
                    storyText: `The Nokia Android phone is selling. That's the problem.

The N900A launched three months ago—Nokia's first Android device, built with Microsoft services deeply integrated. Reviews called it "the best Android phone ever made." Nokia's legendary hardware—camera excellence, build quality, signal strength—combined with Android's ecosystem. It's working. Too well.

Your Windows Phone team is in open revolt. "You're funding our competitor," says the WP7 lead, barely concealing his fury. "Every N900A that sells is a customer who will never try Windows Phone. You're paying Nokia to kill us."

He's not entirely wrong. Nokia Android phones are cannibalizing Windows Phone sales in Europe. Why would a consumer choose the Microsoft platform when Microsoft itself is selling something better on Android?

But the numbers don't lie. Nokia Android devices have 8% market share and growing. Windows Phone has 3% and shrinking. The strategy that's winning is the one your own company hates.

Stephen Elop calls from Helsinki with the question you've been avoiding: "Do we commit fully to Android, or do we keep Windows Phone alive?"

The Windows Phone team built something beautiful. The Nokia partnership is making something profitable. You can't have both.`,
                    objective: "Nokia Android is succeeding, threatening Windows Phone. Choose your future.",
                    availableInfo: ["d3-info-market-state", "d3-info-developer-sentiment", "d3-info-nokia-talks"],

                    options: [
                        {
                            id: "d3ana-option-1",
                            title: "Commit Fully to Nokia Android",
                            description: "End the internal war. Nokia Android is winning—double down on it. Wind down Windows Phone development and redirect those resources to making Nokia Android the best it can be.",
                            risk: "Windows Phone team exodus, years of platform investment abandoned",
                            upside: "United strategy, clear market position, immediate market share",
                            cost: "$300M transition + political capital",

                            setsPathState: {
                                d4State: "differentiated"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.3,
                                    marketCap: 2.5,
                                    marketShare: 5,
                                    morale: "low",
                                    mobileRevenue: 0.3,      // Strong Nokia Android sales
                                    mobileCosts: 0.1,        // Lean, focused costs
                                    narrative: `You announce the decision at an all-hands meeting that feels like a funeral. "Windows Phone represented extraordinary work by extraordinary people. But Nokia Android is what customers want, and we must follow the market."

The Windows Phone team sits in stunned silence. Within a week, 30% have resigned—many going to Apple or Google. Joe Belfiore, the face of Windows Phone, leaves without a public statement. LinkedIn updates multiply.

But Wall Street loves it. "Finally, strategic clarity," writes one analyst. Microsoft stock jumps 8% on the news. Nokia shares surge 15%. The market is telling you: the war is over. You picked the right side.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: 0.5,
                                    marketCap: 2.0,
                                    marketShare: 6,
                                    morale: "neutral",
                                    mobileRevenue: 0.4,      // Growing Android revenue
                                    mobileCosts: 0.15,       // Scaling operations
                                    narrative: `The Nokia Android lineup expands: N900A, N950A, the stunning N9A flagship. Each device earns rapturous reviews. "Nokia is back," declares Wired. "The cameras, the build quality, the software polish—this is what happens when Nokia has access to real apps."

Market share hits 14%—still third place, but competitive. The Microsoft services integration deepens: Outlook, OneDrive, Office all work better on Nokia Android than on Samsung or Pixel. You're not beating Google's platform, but you're differentiated on it.

The Windows Phone refugees are building something new at Apple and Google—that hurts—but the ones who stayed are building something profitable here. "We didn't win the platform war," you tell the board. "But we found a way to thrive in someone else's ecosystem."`
                                }
                            }
                        },
                        {
                            id: "d3ana-option-2",
                            title: "Keep Windows Phone Alive",
                            description: "Nokia Android can fund Windows Phone development. Run both: Android for market share today, Windows Phone for platform independence tomorrow. Hedge your bets.",
                            risk: "Split resources, internal confusion, no clear identity",
                            upside: "Optionality preserved, Windows Phone has time to mature",
                            cost: "$600M dual-track development",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.6,
                                    marketCap: -0.5,
                                    marketShare: 2,
                                    morale: "neutral",
                                    mobileRevenue: 0.15,     // Combined Android + WP sales
                                    mobileCosts: 0.3,        // Dual-track R&D
                                    narrative: `You announce the dual-track strategy at a press event designed to thread every needle: "Nokia Android for consumers who want the best of Google. Nokia Lumia for customers who want the best of Microsoft. Choice is good."

The press is skeptical. "Microsoft is funding its own competition," writes The Verge. "This can't last." Analysts question the resource allocation and brand coherence.

Internally, both teams grumble about split resources. But there's grudging relief—nobody lost completely. The Windows Phone team gets to keep building. The Nokia Android team gets to keep shipping. Whether you're being strategic or just avoiding a hard decision depends on who you ask.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -0.4,
                                    marketCap: 0,
                                    marketShare: 1,
                                    morale: "neutral",
                                    mobileRevenue: 0.25,     // Combined platform revenue
                                    mobileCosts: 0.25,       // Continued dual investment
                                    narrative: `The dual-track approach is working—sort of. Nokia Android devices have 12% market share; Nokia Lumias have 4%. Together, you're competitive. Apart, neither platform has critical mass.

"We're the confused company," admits one PM. "Customers don't know what we stand for." Carrier reps struggle to explain the difference. Store displays need twice the real estate.

App developers are particularly frustrated—do they build for Nokia Android or Nokia Lumia? Most choose Android and skip Lumia entirely. But revenues are solid. The hardware is excellent. You're surviving while you figure out your identity.`
                                }
                            }
                        }
                    ]
                },

                // D3-A-FORK-NO-HARDWARE
                "d3-a-fork-no-hardware": {
                    id: "d3-a-fork-no-hardware",
                    type: "decision",
                    date: "JAN 2011",
                    timeMarker: "JAN 2011",
                    title: "The Amazon Problem",
                    storyImage: '<i class="ph ph-git-branch" style="font-size: 4rem;"></i>',
                    storyText: `The comparison is inevitable. "You're building the Kindle Fire of phones," says your strategy lead, and it's not a compliment.

Your forked Android—internally called "Cascade"—has been running on partner hardware for six months. Samsung, HTC, and LG all have Cascade devices in market. The reviews are... complicated. "Everything you love about Android, without anything you love about Google." "Microsoft services that work, Google services that don't." "A ecosystem for people who trust Microsoft more than Google."

That last part is the problem. Turns out, not many people trust Microsoft more than Google. At least not on mobile.

Your partner OEMs are frustrated. "We can't sell these without the Play Store," says Samsung's mobile head. "Customers ask for Gmail, YouTube, Google Maps. When we say no, they walk." HTC is already threatening to drop Cascade and go back to Google Android.

Amazon made this work with the Kindle Fire—but they had the e-commerce ecosystem, the Prime membership, the content empire. You have... Bing.

The path forward is unclear. You can double down on building your own app store—spend billions to close the gap with Google Play. Or you can accept that Cascade is really a services delivery vehicle—forget the app gap and focus on making Microsoft services essential.

Either way, you're fighting a platform war without owning the platform. Google can crush you with a license change whenever they want.`,
                    objective: "Your Android fork faces the app gap problem. Build an ecosystem or accept services focus?",
                    availableInfo: ["d3-info-market-state", "d3-info-developer-sentiment", "d3-info-ipad-impact"],

                    options: [
                        {
                            id: "d3afnh-option-1",
                            title: "Build the Microsoft App Store",
                            description: "Go to war with Google Play directly. Spend whatever it takes to recruit developers, port apps, and build a viable alternative ecosystem. Make Cascade a real platform, not a Google dependency.",
                            risk: "Massive investment, uncertain developer adoption",
                            upside: "Platform independence, real ecosystem value",
                            cost: "$2B app ecosystem investment",

                            setsPathState: {
                                d4State: "differentiated"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -2.0,
                                    marketCap: -0.5,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0,        // Investment phase
                                    mobileCosts: 0.5,        // Massive ecosystem investment
                                    narrative: `You announce Project Ascent: $2 billion to build the Microsoft App Store into a Google Play competitor. Developer incentives—$100M to port the top 500 Android apps. Revenue sharing better than Google's. Deep integration with Office, Xbox, Azure.

"If developers come, customers will follow," you tell the board. Skeptics point to Windows Phone's app gap. "We tried this before and failed." But this time is different—Cascade runs Android apps with minor modifications. The porting cost is lower.

Developer recruitment teams fan out to every major tech hub. The question is whether "slightly easier" is enough. The money is real; whether the apps will be is another matter.`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: -1.5,
                                    marketCap: 0.5,
                                    marketShare: 2,
                                    morale: "high",
                                    mobileRevenue: 0.15,     // Early app store + device licensing
                                    mobileCosts: 0.35,       // Continued developer investment
                                    narrative: `Project Ascent is showing results. The Microsoft App Store has 200,000 apps—still behind Play Store's 500,000, but the gap is narrowing. More importantly, the top 200 apps are all there. Instagram, WhatsApp, Uber—they all ported for the incentive money and stayed for the user base.

OEM partners are less frustrated. "We can actually sell these now," reports Samsung. Carrier reps stop apologizing for missing apps. Customer satisfaction scores improve.

Cascade market share hits 6%—small but growing. "We're not going to out-Google Google," reflects your app ecosystem head. "But we might not have to. We just need to be good enough that customers don't notice the difference."`
                                }
                            }
                        },
                        {
                            id: "d3afnh-option-2",
                            title: "Accept Services Focus",
                            description: "Stop fighting the app gap war. Cascade isn't about apps—it's about Microsoft services on Android. Focus engineering on Outlook, OneDrive, Office, and Bing. Let the platform be commodity; own the services layer.",
                            risk: "Platform remains vulnerable to Google, no ecosystem moat",
                            upside: "Lower investment, services value transfers across platforms",
                            cost: "$400M services integration",

                            setsPathState: {
                                d4State: "still-fighting"
                            },

                            consequences: {
                                immediate: {
                                    date: "MAR 2011",
                                    cash: -0.4,
                                    marketCap: 1.0,
                                    marketShare: -1,
                                    morale: "neutral",
                                    mobileRevenue: 0.1,      // Enterprise licensing
                                    mobileCosts: 0.2,        // Services development
                                    narrative: `You pivot the narrative: "Cascade isn't about apps—it's about the best Microsoft experience on mobile." Engineering focuses on deep integration: Outlook that's better than Gmail, OneDrive that syncs perfectly with Windows, Office that actually works on a phone.

The app gap remains, but you stop apologizing for it. "Use Google's apps through the web if you need them. Use Microsoft's apps natively." It's a compromise, but an honest one.

OEM partners are relieved—lower expectations mean lower disappointment. "Microsoft finally stopped pretending they can compete with Google's ecosystem," notes one analyst. "Now they're competing where they can actually win."`
                                },
                                delayed: {
                                    date: "SEP 2011",
                                    cash: 0,
                                    marketCap: 1.5,
                                    marketShare: 0,
                                    morale: "neutral",
                                    mobileRevenue: 0.2,      // Enterprise growth
                                    mobileCosts: 0.1,        // Efficient services team
                                    narrative: `The services strategy is gaining traction—among enterprise customers. Corporations love Cascade: "It's Android we can actually manage," says one Fortune 500 CIO. "Microsoft services that integrate with our infrastructure, without Google's data collection."

Consumer market share is flat, but enterprise deployments are growing 40% quarterly. IT departments standardize on Cascade for company-issued devices. Intune integration makes it the obvious BYOD choice for Microsoft shops.

You're accidentally building the enterprise mobile platform you abandoned years ago. "Cascade started as a consumer play and became a business tool," observes your strategy lead. "That might be the better market anyway. Less volume, higher margins, stickier customers."`
                                }
                            }
                        }
                    ]
                }
            }
        },

        // ═══════════════════════════════════════════════════════════
        // D4 - FOURTH DECISION (JAN 2013)
        // Market share entering: ~5-15% depending on path
        // ═══════════════════════════════════════════════════════════
        "d4": {
            variants: {

                "d4-still-fighting": {
                    id: "d4-still-fighting",
                    type: "decision",
                    date: "JAN 2013",
                    timeMarker: "JAN 2013",
                    title: "The Acquisition Question",
                    storyImage: '<i class="ph ph-handshake" style="font-size: 4rem;"></i>',
                    storyText: `The calendar says January 2013. Six years since Steve Jobs pulled that phone from his pocket. Six years of fighting.

You're still fighting. Windows Phone has 3% market share—up from 2% a year ago. Nokia Lumias are the best Windows Phones ever made. The platform is mature, stable, genuinely differentiated. Reviews are good.

And none of it matters.

The app gap is killing you. Instagram finally arrived last month—two years late and missing features. Snapchat refuses to build a Windows Phone app. "When you hit 10% share," they told your business development team. But you can't hit 10% without the apps.

Your board meeting this morning was brutal. ValueAct's Mason Morfit asked the question directly: "How much longer do we subsidize this?" Nokia is burning $400 million a quarter. Your platform support payments are keeping them alive. At this rate, you've spent $3 billion on Nokia—and you don't even own them.

The strategic options are clarifying. You can double down—acquire Nokia outright, own the whole stack, bet everything on the Microsoft phone vision. Or you can accept what you've become: a profitable niche player, third place forever.

The board wants an answer. The market wants an answer. Your own team wants an answer.

What kind of company is Microsoft going to be in mobile?`,
                    objective: "Windows Phone is stable but stuck at 3%. Acquire Nokia or accept your niche?",
                    availableInfo: ["d4-info-app-gap", "d4-info-nokia-financial", "d4-info-market-reality"],

                    options: [
                        {
                            id: "d4sf-option-1",
                            title: "Acquire Nokia—All In",
                            description: "Buy Nokia's devices division outright. Own the hardware, own the software, own the destiny. If we're going to lose, let's lose trying to win. No more partnerships—time to build the Microsoft phone.",
                            risk: "$7B+ acquisition, absorbing 30K employees, Finnish politics",
                            upside: "Full vertical integration, no more platform fragmentation",
                            cost: "$7.2B acquisition + integration",

                            setsPathState: {
                                d5State: "platform-contender"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: -7.2,
                                    marketCap: -5.0,
                                    marketShare: 0,
                                    morale: "neutral",
                                    mobileRevenue: 0.3,      // Nokia device revenue absorbed
                                    mobileCosts: 0.6,        // Nokia operations absorbed
                                    unlockedArtifacts: ["artifact-nokia-lumia-1020", "artifact-nokia-lumia-900"],
                                    narrative: `You announce the Nokia acquisition on a rainy Monday in September. $7.2 billion for the devices and services division. Stephen Elop returns to Microsoft to run the integration.

Wall Street is skeptical—Microsoft stock drops 5% on the news. "Doubling down on a losing bet," writes one analyst. "This is the Ballmer era's last gasp," predicts another. The market has made its verdict clear.

But internally, there's relief. No more ambiguity. No more partnership politics. For the first time, you own your mobile destiny. "Now we find out if the problem was Nokia or the platform," says your mobile lead. "No more excuses either way."`
                                },
                                delayed: {
                                    date: "JAN 2014",
                                    cash: -1.5,
                                    marketCap: -2.0,
                                    marketShare: -1,
                                    morale: "low",
                                    mobileRevenue: 0.2,      // Some Lumia sales
                                    mobileCosts: 0.5,        // Integration overhead
                                    narrative: `The integration is harder than anyone expected. 30,000 Nokia employees, most in Finland, many resentful of Microsoft's ownership. Two cultures colliding—Nokia's hardware-first mentality versus Microsoft's software-first approach.

The first Microsoft-branded Lumia ships in Q4—solid reviews, weak sales. The camera is excellent; the ecosystem isn't. "We bought a company and got a morale problem," observes one exec. Retention packages multiply as key talent eyes the exits.

But the product pipeline is improving. The Lumia 1020 camera is genuinely best-in-class. If quality alone could win, you'd be winning. It can't, and you're not—but you're not retreating either.`
                                }
                            }
                        },
                        {
                            id: "d4sf-option-2",
                            title: "Accept the Niche—Profitable Third",
                            description: "Stop chasing market share. We're not going to beat iOS or Android. Focus instead on being the best third option: the business phone, the privacy phone, the 'not Google' phone. Profitable niche beats unprofitable moonshot.",
                            risk: "Developers ignore us, app gap widens, slow decline",
                            upside: "Sustainable business, profitable margins, clear identity",
                            cost: "The dream of platform victory",

                            setsPathState: {
                                d5State: "niche-survivor"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: 0.5,
                                    marketCap: 1.0,
                                    marketShare: -1,
                                    morale: "neutral",
                                    mobileRevenue: 0.1,      // Focused enterprise sales
                                    mobileCosts: 0.05,       // Lean operations
                                    unlockedArtifacts: ["artifact-nokia-lumia-520"],
                                    narrative: `You announce the "Focus Strategy" at a low-key press event. "Windows Phone will target customers who value security, privacy, and Microsoft ecosystem integration. We're not trying to be everything to everyone."

Wall Street approves—Microsoft stock rises 3% on the disciplined message. "Finally, a mobile strategy that makes financial sense," writes Barron's. Nokia partnership continues but with reduced platform support payments.

Your mobile team is smaller, focused, less stressed. "We finally know who we're building for," says your mobile PM. "Enterprise users who need Outlook. Privacy-conscious consumers who don't trust Google. Parents who want a simpler phone for their kids." It's not glamorous. But it might be sustainable.`
                                },
                                delayed: {
                                    date: "JAN 2014",
                                    cash: 0.8,
                                    marketCap: 1.5,
                                    marketShare: -2,
                                    morale: "neutral",
                                    mobileRevenue: 0.15,     // Premium enterprise revenue
                                    mobileCosts: 0.05,       // Minimal overhead
                                    narrative: `The niche strategy is working—financially. Windows Phone is profitable for the first time, with 40% margins on enterprise device sales. Market share drifted down to 2%, but revenue per device is up 60%.

"We're the BMW of phones," your marketing lead says. "Small market, high margins, loyal customers." Enterprise customers appreciate the Microsoft integration. Parents appreciate the simplicity. Privacy advocates appreciate the alternative to Google.

Nokia released their first Android phone—the X series—signaling they're hedging their bets. The partnership is cooling. But your core customers are more engaged than ever. "You stopped trying to copy iPhone," writes a tech blogger, "and started being something different. Respect."`
                                }
                            }
                        }
                    ]
                },

                "d4-crisis-mode": {
                    id: "d4-crisis-mode",
                    type: "decision",
                    date: "JAN 2013",
                    timeMarker: "JAN 2013",
                    title: "The Burning Platform",
                    storyImage: '<i class="ph ph-fire" style="font-size: 4rem;"></i>',
                    storyText: `The email from your CFO arrives at 6 AM. Subject line: "Mobile P&L - Urgent."

You already know it's bad. You didn't expect it to be this bad.

Total mobile losses since 2007: $9.4 billion. This quarter alone: $1.2 billion. Nokia burning cash faster than your support payments can cover. Market share at 2% and falling—down from 42% six years ago. The Surface RT write-down is coming: $900 million.

Your phone buzzes. It's Bill Gates. "Steve, we need to talk about mobile."

Bill's been on the board for years, but he rarely calls. When he does, it means the board has been talking without you.

"I've had conversations with Mason," Bill says. ValueAct's activist investor, the one who's been pushing for strategic changes. "And with John." John Thompson, the board's lead independent director. "There's growing concern about the mobile strategy. About whether we're throwing good money after bad."

The conversation is polite but the message is clear: the board is losing patience. Either show a path to profitability, or show a path to the exit.

You've given this company everything. Built it from a $46 billion market cap to $300 billion. And now you're being told that your mobile strategy—the one that was supposed to secure Microsoft's future—might end your tenure.

The numbers are undeniable. The board's patience is exhausted. What do you do?`,
                    objective: "Mobile is hemorrhaging money and the board wants answers. Fight or retreat?",
                    availableInfo: ["d4-info-app-gap", "d4-info-nokia-financial", "d4-info-ballmer-pressure"],

                    options: [
                        {
                            id: "d4cm-option-1",
                            title: "One Last Stand—Nokia Acquisition",
                            description: "If we're going down, we're going down swinging. Acquire Nokia, own the stack, make one final bet on the Microsoft phone vision. The board will either back us or fire us, but at least we'll know we tried everything.",
                            risk: "Career-ending if it fails, board may block acquisition",
                            upside: "Last chance at mobile relevance, clear resolution either way",
                            cost: "$7B+ acquisition into already bleeding division",

                            setsPathState: {
                                d5State: "last-stand"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: -7.2,
                                    marketCap: -8.0,
                                    marketShare: -1,
                                    morale: "low",
                                    mobileRevenue: 0.2,      // Nokia device revenue
                                    mobileCosts: 0.6,        // Massive acquisition overhead
                                    narrative: `You present the Nokia acquisition to the board. "This is it. Either we commit fully or we exit. I recommend we commit." The room is silent. John Thompson asks: "And if it doesn't work?" You don't have a good answer.

The board approves—narrowly—with conditions. You have 18 months to show improvement or the mobile division gets a strategic review. Translation: you have 18 months to prove this wasn't a $7 billion mistake.

Wall Street hammers the stock. "Microsoft doubles down on disaster," reads the headline. Your mobile team is exhausted but relieved. "At least we're not giving up," says your mobile lead. Cold comfort. But comfort nonetheless.`
                                },
                                delayed: {
                                    date: "JAN 2014",
                                    cash: -2.0,
                                    marketCap: -3.0,
                                    marketShare: -1,
                                    morale: "low",
                                    mobileRevenue: 0.1,      // Weak Lumia sales
                                    mobileCosts: 0.5,        // Integration bleeding cash
                                    narrative: `The Nokia integration is a slog. 30,000 employees, most demoralized, many leaving. The Finnish government is furious about layoffs. Factory closures become political flashpoints across Europe.

The first Microsoft Lumias ship in Q4—good phones into a market that doesn't care. Market share is 2% and falling. App developers continue to deprioritize the platform. The chicken-and-egg problem hasn't been solved.

The board's 18-month clock is ticking. Rumors swirl about CEO succession. Your legacy is being written in real-time, and the early reviews aren't kind. "Ballmer bet the company on mobile and lost," writes The Verge. You haven't lost yet. But you haven't won either.`
                                }
                            }
                        },
                        {
                            id: "d4cm-option-2",
                            title: "Strategic Exit—Cut Our Losses",
                            description: "The numbers don't lie. We've lost the mobile platform war. Exit now, while we still have leverage to negotiate with Nokia and while the losses are containable. Refocus Microsoft on cloud, enterprise, and productivity.",
                            risk: "Public admission of defeat, mobile team exodus",
                            upside: "Stop $1B/quarter bleeding, refocus on winning businesses",
                            cost: "$5B write-off + reputation",

                            setsPathState: {
                                earlyEnding: "strategic-exit"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: -5.0,
                                    marketCap: -3.0,
                                    marketShare: -10,
                                    morale: "low",
                                    mobileRevenue: -0.5,     // Revenue collapsing
                                    mobileCosts: -0.3,       // Winding down operations
                                    narrative: `You announce the strategic review at an earnings call. "Microsoft will wind down its smartphone hardware efforts and refocus on areas where we can win—cloud, productivity, enterprise services."

The market reacts with relief. Microsoft stock rises 4% on "strategic clarity." Wall Street had been waiting for this announcement for years. "Finally, capital discipline," writes one analyst.

Your mobile team is devastated. "We built something beautiful," says your mobile PM, "and you killed it for the stock price." Nokia is left scrambling—they pivot to Android within months. The tech press writes obituaries for Windows Phone. "Microsoft's $10 billion mobile experiment ends," reads the headline. It's over.`
                                },
                                delayed: {
                                    date: "JUN 2013",
                                    cash: 2.0,
                                    marketCap: 5.0,
                                    marketShare: -5,
                                    morale: "neutral",
                                    mobileRevenue: -0.3,     // Minimal residual licensing
                                    mobileCosts: -0.25,      // Most costs eliminated
                                    narrative: `The exit is complete. Windows Phone licensing continues for existing partners, but no new investment. Nokia launches Android phones to surprisingly positive reviews. The hardware was never the problem.

Your mobile team has largely scattered—many to Google, some to Apple. LinkedIn profiles update with new employers. The institutional knowledge disperses across Silicon Valley.

But Microsoft's focus is clearer than it's been in years. Satya Nadella's cloud division is growing 50% annually. Office 365 subscriptions are accelerating. Azure is becoming a real business. "We lost mobile," reflects your strategy lead, "but maybe we had to lose mobile to win cloud." Small consolation. But maybe true.`,
                                    triggersEnding: "strategic-exit"
                                }
                            }
                        }
                    ]
                },

                // D4-CRISIS-MODE-NOKIA-OWNED: For paths where Nokia was acquired in D1
                // (Different from d4-crisis-mode because Nokia is already owned, not a partnership)
                "d4-crisis-mode-nokia-owned": {
                    id: "d4-crisis-mode-nokia-owned",
                    type: "decision",
                    date: "JAN 2013",
                    timeMarker: "JAN 2013",
                    title: "The Integration That Wasn't",
                    storyImage: '<i class="ph ph-fire" style="font-size: 4rem;"></i>',
                    storyText: `The email from your CFO arrives at 6 AM. Subject line: "Mobile P&L - Urgent."

You already know it's bad. You didn't expect it to be this bad.

Six years since you acquired Nokia. $45 billion all-in. And the numbers are catastrophic: total mobile losses since 2007 of $12.4 billion. This quarter alone: $1.4 billion. Market share at 2% and falling—down from 42% when you bought the company.

The acquisition was supposed to give you scale. Manufacturing expertise. Distribution. What you got instead was culture clash, platform confusion, and the slowest product development in the industry.

Your phone buzzes. It's Bill Gates. "Steve, we need to talk about the Nokia investment."

Bill's been on the board for years, but he rarely calls. When he does, it means the board has been talking without you.

"The Nokia acquisition hasn't worked," Bill says directly. "Everyone knows it. The question is what we do about it now."

The conversation is polite but the message is clear: the board wants a decision. Either commit fully to fixing the integration—more restructuring, more layoffs, more money—or admit the acquisition failed and wind it down.

You bet your legacy on this deal. Now you have to decide whether to double down or walk away.`,
                    objective: "The Nokia acquisition is failing. Commit to fixing it or wind it down?",
                    availableInfo: ["d4-info-app-gap", "d4-info-nokia-financial", "d4-info-ballmer-pressure"],

                    options: [
                        {
                            id: "d4cmno-option-1",
                            title: "One Last Restructuring—Fix the Integration",
                            description: "The acquisition failed because we didn't integrate hard enough. Launch a complete restructuring: new leadership, consolidated operations, unified culture. If we own Nokia, let's actually own it.",
                            risk: "More money into a failing investment, board losing patience",
                            upside: "Finally realize the integration synergies we promised",
                            cost: "$2B restructuring + political capital",

                            setsPathState: {
                                d5State: "last-stand"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: -2.0,
                                    marketCap: -4.0,
                                    marketShare: -1,
                                    morale: "low",
                                    mobileRevenue: -0.1,     // Sales disrupted by restructuring
                                    mobileCosts: 0.4,        // Restructuring costs
                                    narrative: `You announce "Project Unity"—a complete restructuring of the Nokia integration. New reporting lines. Consolidated engineering. A single mobile leadership team, based in Redmond. The Finnish operations will be "optimized"—corporate speak for massive layoffs.

The board approves reluctantly. "This is your last chance, Steve," John Thompson says after the vote. "If this doesn't work, we're having a different conversation." The 18-month clock starts ticking.

The Finnish government is furious. Labor unions threaten strikes. Tech blogs write about "Microsoft's colonial management of Nokia." But for the first time since the acquisition, you have one team, one strategy, one chain of command.`
                                },
                                delayed: {
                                    date: "JAN 2014",
                                    cash: -1.5,
                                    marketCap: -3.0,
                                    marketShare: -1,
                                    morale: "low",
                                    mobileRevenue: 0.1,      // Lumia 1020 some sales
                                    mobileCosts: 0.3,        // Slimmer operations
                                    narrative: `The restructuring is brutal but working—operationally. Engineering velocity is up 40%. The first truly unified Microsoft-Nokia phone, the Lumia 1020, ships to excellent reviews. The camera is genuinely best-in-class.

But the market doesn't care about operational efficiency. Market share is still 2%. The app gap is still fatal. Developers still won't build for a platform with 2% share, and you can't grow share without apps.

"We fixed the internal problems," reflects your mobile lead. "We just couldn't fix the external ones." The board's clock is still ticking. Rumors about CEO succession grow louder each week.`,
                                    triggersEnding: "fought-to-end"
                                }
                            }
                        },
                        {
                            id: "d4cmno-option-2",
                            title: "Strategic Write-Down—Admit Defeat",
                            description: "The acquisition was a mistake. Admit it, take the write-down, and move on. Sell or wind down the Nokia operations. Refocus Microsoft on cloud, enterprise, and productivity where we can actually win.",
                            risk: "Largest write-down in Microsoft history, career-ending admission",
                            upside: "Stop the bleeding, strategic clarity, focus on winning businesses",
                            cost: "$7.6B write-down + reputation",

                            setsPathState: {
                                earlyEnding: "strategic-exit"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: -7.6,
                                    marketCap: -5.0,
                                    marketShare: -10,
                                    morale: "low",
                                    mobileRevenue: -0.6,     // Entire revenue disappearing
                                    mobileCosts: -0.4,       // Operations winding down
                                    narrative: `You announce the write-down at a somber earnings call. "$7.6 billion. The Nokia acquisition did not achieve the integration we hoped for. We will wind down smartphone hardware and refocus on areas where Microsoft can win."

The market reacts with relief. Microsoft stock rises 6% on "strategic clarity." Wall Street had been waiting for this announcement for years. "Finally, Ballmer admits the obvious," writes one analyst.

Your mobile team is devastated. The Nokia employees who survived the acquisition, the restructurings, the platform debates—now they're being told it was all for nothing. "We failed them," you tell your leadership team. "They deserved better leadership than we gave them."`
                                },
                                delayed: {
                                    date: "JUN 2013",
                                    cash: 2.0,
                                    marketCap: 8.0,
                                    marketShare: -5,
                                    morale: "neutral",
                                    mobileRevenue: -0.2,     // Residual wind-down revenue
                                    mobileCosts: -0.2,       // Most costs gone
                                    narrative: `The exit is complete. Nokia's phone business is wound down. Finnish operations sold to a private equity consortium. Your mobile team scattered—many to Google, some to Apple, some to the emerging Chinese OEMs.

But Microsoft's focus is clearer than it's been in years. Satya Nadella's cloud division is growing 50% annually. Office 365 subscriptions are accelerating. Azure is becoming a real business.

"The Nokia acquisition was my biggest mistake," you tell a journalist years later. "We bought a company to win a war that was already lost. I should have seen it sooner." Small consolation. But maybe instructive for others.`,
                                    triggersEnding: "strategic-exit"
                                }
                            }
                        }
                    ]
                },

                "d4-differentiated": {
                    id: "d4-differentiated",
                    type: "decision",
                    date: "JAN 2013",
                    timeMarker: "JAN 2013",
                    title: "The Road Not Taken",
                    storyImage: '<i class="ph ph-path" style="font-size: 4rem;"></i>',
                    storyText: `The analyst's question catches you off guard. "Microsoft's mobile strategy seems... different from everyone else's. Is that intentional?"

You weren't sure how to answer at first. But now you are.

"Yes," you tell the earnings call. "It's entirely intentional."

Because it's true. Your path diverged somewhere in the last six years, and what emerged isn't what anyone expected—including you.

You're not trying to be iOS. You're not trying to be Android. You've become something else: the productivity phone. The enterprise phone. The phone for people who use Office 12 hours a day and need it to work perfectly on mobile.

Market share: 8%. Not much. But those 8% are the most valuable mobile customers in the world—enterprise professionals who spend $200/year on Office 365, $1,000/year on Azure services, $2,000/year on Surface devices. Your revenue per user is triple Apple's.

More surprising: the tech press has started to respect you. "Windows Phone isn't trying to win the consumer market anymore," wrote Wired last month. "It's building something genuinely different—a productivity platform that happens to fit in your pocket."

Nokia is stable. Not growing, but not dying either. The Lumia 1020 camera is objectively the best in the industry. Enterprise deployments are accelerating.

You've found a niche. The question is: do you try to expand it, or do you harvest it?`,
                    objective: "You've carved out a differentiated position. Scale it up or lock in profits?",
                    availableInfo: ["d4-info-surface-lessons", "d4-info-market-reality", "d4-info-app-gap"],

                    options: [
                        {
                            id: "d4d-option-1",
                            title: "Scale the Differentiation",
                            description: "8% market share proves the concept. Now invest to expand it. More marketing, more developer incentives, more carrier partnerships. Turn the productivity niche into a productivity movement.",
                            risk: "Expansion might dilute what makes you special",
                            upside: "Transform niche success into platform relevance",
                            cost: "$2B expansion investment",

                            setsPathState: {
                                d5State: "platform-contender"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: -2.0,
                                    marketCap: 2.0,
                                    marketShare: 2,
                                    morale: "high",
                                    mobileRevenue: 0.15,     // Growing enterprise sales
                                    mobileCosts: 0.25,       // Expansion investment
                                    narrative: `You announce the "Productivity Everywhere" initiative: $2 billion to expand Windows Phone's enterprise footprint. Free Office licenses for Windows Phone users. Deep Skype integration. "The phone that makes you better at work."

Nokia gets additional platform support to accelerate Lumia development. Enterprise IT managers are intrigued—Microsoft is finally talking their language. Pilot programs multiply across Fortune 500 companies.

Consumer press is skeptical: "Is productivity enough to compete with Instagram?" Maybe not. But maybe you don't need Instagram users. Maybe you need accountants, lawyers, consultants—the people who would pay $50/month for a phone that actually works with their workflow.`
                                },
                                delayed: {
                                    date: "JAN 2014",
                                    cash: -1.0,
                                    marketCap: 3.0,
                                    marketShare: 2,
                                    morale: "high",
                                    mobileRevenue: 0.25,     // Enterprise deployments paying off
                                    mobileCosts: 0.15,       // More efficient scaling
                                    narrative: `The expansion is working—within the target market. Enterprise Windows Phone deployments up 40%. BYOD programs featuring Windows Phone as the "managed option." Lumia 1520 positioned as the business phablet.

Market share hits 10% in enterprise, even as consumer share stagnates. CIOs appreciate the Intune integration, the security features, the predictable update cycle. "It just works with our infrastructure," says one Fortune 100 CTO.

"We're not fighting Apple and Google for teenagers," reflects your mobile lead. "We're fighting them for C-suite executives. That's a fight we can win." Revenue per device is now 2.5x the industry average. Small market, but increasingly profitable.`
                                }
                            }
                        },
                        {
                            id: "d4d-option-2",
                            title: "Harvest the Position",
                            description: "We've found our niche. Don't get greedy. Reduce investment, maximize margins, and extract value from our loyal customer base. The mobile war is over—let's profit from our corner of it.",
                            risk: "Slow decline as market evolves",
                            upside: "Guaranteed profitability, reduced risk",
                            cost: "Long-term growth potential",

                            setsPathState: {
                                d5State: "niche-survivor"
                            },

                            consequences: {
                                immediate: {
                                    date: "APR 2013",
                                    cash: 1.5,
                                    marketCap: 1.0,
                                    marketShare: -1,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // Steady enterprise revenue
                                    mobileCosts: 0.03,       // Minimal investment
                                    narrative: `You announce "operational efficiency" for the mobile division—code for reduced investment. Platform support payments to Nokia decrease 30%. Marketing budget cut by half.

New features focus on enterprise needs only: better Exchange integration, improved MDM, enhanced security. Consumer-facing features get deprioritized. No more chasing social apps.

Wall Street loves it. "Microsoft finally being rational about mobile," writes one analyst. Your mobile team is smaller but more focused. "We know exactly who we're building for now," says your mobile PM. "IT managers who want a phone they can control. That's it."`
                                },
                                delayed: {
                                    date: "JAN 2014",
                                    cash: 2.0,
                                    marketCap: 2.0,
                                    marketShare: -2,
                                    morale: "high",
                                    mobileRevenue: 0.12,     // Premium pricing steady
                                    mobileCosts: 0.02,       // Harvesting mode
                                    narrative: `The harvest strategy is producing returns. Windows Phone is profitable—the first time ever. Market share down to 6%, but revenue up 20% on higher margins and enterprise pricing.

Nokia is frustrated by reduced support, but the partnership holds. They've started exploring Android as a hedge, but the Lumia lineup continues. The relationship is transactional now, not aspirational.

"We're the BlackBerry of 2014," observes your strategy lead. "Profitable niche, loyal customers, slowly shrinking market. It's not sexy. But it's sustainable." The board is satisfied. You've turned a money pit into a modest profit center. Whether that's victory or surrender depends on how you frame it.`
                                }
                            }
                        }
                    ]
                }
            }
        },

        // ═══════════════════════════════════════════════════════════
        // D5 - FINAL DECISION (JAN 2015)
        // Market share entering: ~2-10% depending on path
        // ═══════════════════════════════════════════════════════════
        "d5": {
            variants: {

                "d5-last-stand": {
                    id: "d5-last-stand",
                    type: "decision",
                    date: "JAN 2015",
                    timeMarker: "JAN 2015",
                    title: "The $7.6 Billion Question",
                    storyImage: '<i class="ph ph-flag-banner" style="font-size: 4rem;"></i>',
                    storyText: `The write-down announcement is ready. $7.6 billion—the largest in Microsoft history. The Nokia acquisition, reduced to an accounting entry.

Satya called you into his office this morning. He's been CEO for 11 months. You've known what this meeting would be about.

"The write-down goes public next week," he says. "Before it does, I need to know what comes next. Do we continue fighting in mobile, or do we pivot to a services strategy?"

You've been fighting this war for eight years. Since Steve Jobs pulled that phone from his pocket at Macworld. Since you laughed and said "no physical keyboard." Since everything changed and nothing you did could change it back.

Market share is 2.5%. The app gap is permanent—developers have stopped even considering Windows Phone. Nokia's best engineers have left. The Finnish operations are being wound down. The $7.6 billion write-down is just accounting acknowledgment of what everyone already knew: the acquisition failed.

But failure isn't the same as surrender.

Windows 10 Mobile is in development—a unified platform across phone, tablet, and PC. The Lumia 950 prototype is genuinely impressive. Universal apps could finally solve the developer problem. There's a path forward, if you're willing to keep walking it.

Or you could accept what the numbers are telling you. Microsoft's future is in cloud and productivity services—Azure, Office 365, LinkedIn. Mobile can be a services delivery vehicle without being a platform bet.

Satya is waiting for your answer. The board is waiting. Eight years of mobile strategy comes down to this moment.

Do you fight to the end, or do you choose a different ending?`,
                    objective: "The $7.6B write-down is coming. Keep fighting or exit gracefully?",
                    availableInfo: ["d5-info-nadella-era", "d5-info-nokia-integration", "d5-info-write-down"],

                    options: [
                        {
                            id: "d5ls-option-1",
                            title: "Fight to the End—Windows 10 Mobile",
                            description: "The write-down doesn't change the vision. Windows 10 Mobile, Universal apps, Continuum—there's still a differentiated story to tell. We didn't come this far to give up at the last mile.",
                            risk: "Throwing good money after bad, another $2-3B investment with diminishing returns",
                            upside: "Slim chance of breakthrough, honor the team's work, maybe lightning strikes",
                            cost: "$2B+ continued investment",

                            consequences: {
                                immediate: {
                                    date: "APR 2015",
                                    cash: -2.0,
                                    marketCap: -3.0,
                                    marketShare: -1,
                                    morale: "low",
                                    mobileRevenue: 0.05,     // Minimal Lumia 950 sales
                                    mobileCosts: 0.4,        // Windows 10 Mobile investment
                                    unlockedArtifacts: ["artifact-nokia-lumia-950"],
                                    narrative: `You tell Satya: "We fight." He nods slowly. "I expected you'd say that. You have 18 months to show progress. If Windows 10 Mobile doesn't work, we're done."

The write-down announcement includes a renewed commitment to mobile: "Microsoft remains committed to Windows Phone and will continue investing in mobile experiences." Wall Street is skeptical. Analysts call it "denial." The stock drops another 2%.

But your mobile team is energized—probably for the last time. "We get one more shot," says your mobile lead. "Let's make it count." The Lumia 950 launches in Q4. Reviews are positive. Sales are... modest. The fight continues.`
                                },
                                delayed: {
                                    date: "JAN 2017",
                                    cash: -3.0,
                                    marketCap: -2.0,
                                    marketShare: -2,
                                    morale: "low",
                                    mobileRevenue: -0.3,     // Platform revenue evaporating
                                    mobileCosts: 0.2,        // Winding down costs
                                    narrative: `The fight is over. Windows 10 Mobile never achieved critical mass. Market share dropped below 1%. App support evaporated—even Microsoft released better versions of Office for iOS and Android than for its own platform.

In October 2016, Satya announces: "Microsoft will no longer develop new mobile hardware." The mobile team is disbanded. Key engineers join Google's Pixel team. LinkedIn profiles update en masse. The institutional knowledge disperses.

It's the end you always feared, but fought anyway. "We lost," you tell your team at the final all-hands. "But we lost fighting. That matters to me. I hope it matters to you too." The applause is sincere. The tears are real. The mobile dream is dead.`,
                                    triggersEnding: "fought-to-end"
                                }
                            }
                        },
                        {
                            id: "d5ls-option-2",
                            title: "Graceful Exit—Embrace Services",
                            description: "The write-down is the opportunity for a clean break. Announce the end of Windows Phone hardware. Pivot fully to services on iOS and Android. Microsoft's future is cloud and productivity—mobile can be a delivery vehicle, not a platform.",
                            risk: "Public admission of defeat, abandoning team members who believed in the vision",
                            upside: "Stop the bleeding, focus resources on winning battles, strategic clarity",
                            cost: "The mobile dream + morale",

                            consequences: {
                                immediate: {
                                    date: "APR 2015",
                                    cash: 1.0,
                                    marketCap: 2.0,
                                    marketShare: -5,
                                    morale: "neutral",
                                    mobileRevenue: -0.2,     // Winding down platform revenue
                                    mobileCosts: -0.15,      // Reducing operations
                                    narrative: `You tell Satya: "It's time to let go." He seems relieved. "I think that's the right call. Let's do it with dignity."

The write-down announcement is paired with a strategic pivot: "Microsoft will focus on delivering best-in-class productivity experiences across all platforms, including iOS and Android. Windows Phone development will transition to maintenance mode."

Wall Street loves it. Stock jumps 5% on "strategic clarity." The tech press is surprisingly respectful: "Microsoft admits defeat with grace," writes The Verge. Your mobile team is devastated. But the talented ones are quickly absorbed into the Office, Azure, and Surface teams. The platform war is over. The services war is just beginning.`
                                },
                                delayed: {
                                    date: "JAN 2017",
                                    cash: 2.0,
                                    marketCap: 5.0,
                                    marketShare: -5,
                                    morale: "neutral",
                                    mobileRevenue: 0.2,      // Services revenue growing
                                    mobileCosts: 0.1,        // Lean services team
                                    unlockedArtifacts: ["artifact-microsoft-surface-duo"],
                                    narrative: `The pivot worked. Microsoft Office is now the most-downloaded productivity suite on both iOS and Android. Outlook is the default mail app for millions of iPhone users. OneDrive, Teams, LinkedIn—Microsoft services are thriving on competitors' platforms.

"We lost the platform war," reflects Satya at the 2017 earnings call, "but we won the services war. Microsoft experiences reach 2 billion mobile users now—far more than Windows Phone ever could have."

It's not the victory you imagined in 2007. But it's a victory. Microsoft is more valuable than ever. The mobile dream died. Microsoft didn't.`,
                                    triggersEnding: "graceful-exit"
                                }
                            }
                        }
                    ]
                },

                "d5-niche-survivor": {
                    id: "d5-niche-survivor",
                    type: "decision",
                    date: "JAN 2015",
                    timeMarker: "JAN 2015",
                    title: "The Profitable Third",
                    storyImage: '<i class="ph ph-target" style="font-size: 4rem;"></i>',
                    storyText: `The quarterly review meeting has a different energy this time. For the first time in eight years, the mobile P&L shows black ink.

"Profitable," your CFO confirms, pulling up the slide. "Small margin, but positive contribution after overhead allocation. First time ever."

You built this. Not the platform victory you imagined in 2007—but something. A sustainable business serving 40 million users who genuinely prefer Windows Phone. Enterprise customers who value manageability. Privacy-conscious users who don't trust Google. Photography enthusiasts who love the Lumia cameras. A small, loyal community that chose you.

Market share is 4%. It's never going to be 40% again. But 4% of a 1.5 billion unit market is 60 million potential customers. At premium prices with high margins, that's a real business.

The question is what you do with it.

Satya has been CEO for 11 months. His focus is cloud and productivity—Azure, Office 365, enterprise services. Mobile is a sideshow in his vision. He hasn't pressured you to exit, but he hasn't championed you either.

You could defend your position—keep investing just enough to maintain the niche, milk the profits, serve your loyal users. It's sustainable. It's not exciting. But it's yours.

Or you could take the money and run. The mobile division, profitable and stable, has actual value now. A buyer might pay $3-5 billion for it. Amazon, Facebook, even Huawei have shown interest. You could exit at the peak of your value, declare victory, and move on.

What do you want your mobile legacy to be?`,
                    objective: "Your niche is profitable. Defend it or sell it?",
                    availableInfo: ["d5-info-nadella-era", "d5-info-market-final"],

                    options: [
                        {
                            id: "d5ns-option-1",
                            title: "Defend the Niche—Stay the Course",
                            description: "We built something real. Keep it. Serve our users. Maintain modest investment and harvest steady profits. We may never win the platform war, but we don't have to lose ourselves either.",
                            risk: "Niche may erode over time as market consolidates further",
                            upside: "Sustained profitability, loyal user base, platform presence",
                            cost: "$500M annual maintenance investment",

                            consequences: {
                                immediate: {
                                    date: "APR 2015",
                                    cash: -0.5,
                                    marketCap: 1.0,
                                    marketShare: -1,
                                    morale: "high",
                                    mobileRevenue: 0.08,     // Loyal user base revenue
                                    mobileCosts: 0.04,       // Maintenance mode
                                    narrative: `You announce "Windows Phone Enduring"—a commitment to maintain and support the platform for at least five more years. "We serve 40 million users who chose us," you tell the press. "We won't abandon them."

The niche community celebrates. Reddit's Windows Phone forum lights up with gratitude. Twitter fills with #WindowsPhoneForever hashtags. Tech analysts call it "principled but quixotic."

Your team is satisfied—they get to keep building something they believe in. The margin expansion continues: fewer SKUs, focused features, efficient operations. It's not glamorous. But it's profitable.`
                                },
                                delayed: {
                                    date: "JAN 2017",
                                    cash: 0.8,
                                    marketCap: 2.0,
                                    marketShare: -1,
                                    morale: "high",
                                    mobileRevenue: 0.1,      // Premium user revenue
                                    mobileCosts: 0.03,       // Efficient operations
                                    narrative: `The niche strategy endures. Market share settled at 3%—small but stable. 35 million active users, down from 40 million but more engaged than ever. Revenue per user is up 40%.

The app gap persists, but core apps (Office, Outlook, Skype, camera) are best-in-class. Users who stay are passionate advocates. The community forums are active and supportive.

"We're the Leica of phones," says your mobile lead. "Small market, premium experience, loyal customers." The business generates $200M annual profit—not transformative for Microsoft, but not nothing either. You kept your promise. You kept your platform. You kept your users.`,
                                    triggersEnding: "sustainable-niche"
                                }
                            }
                        },
                        {
                            id: "d5ns-option-2",
                            title: "Sell the Division—Exit at Peak Value",
                            description: "We've proven the niche has value. Now extract that value before it erodes. Sell to a buyer who wants mobile presence—Amazon, Facebook, a Chinese OEM. Take the win and redeploy capital to cloud.",
                            risk: "Abandoning users who trusted us, talent exodus",
                            upside: "$3-5B sale price, clean exit, resources for cloud investment",
                            cost: "User trust + platform presence",

                            consequences: {
                                immediate: {
                                    date: "APR 2015",
                                    cash: 4.0,
                                    marketCap: 2.0,
                                    marketShare: -3,
                                    morale: "neutral",
                                    mobileRevenue: -0.3,     // Division being sold
                                    mobileCosts: -0.25,      // Operations transferring
                                    narrative: `You approach three potential buyers: Amazon (wants mobile presence), Facebook (wants hardware platform), and Huawei (wants Western brand). The negotiations are intense.

Facebook drops out—too complicated with regulatory concerns. Huawei offers $3.5B. Amazon counters with $4.2B plus ongoing licensing. You take the Amazon deal.

The announcement shocks the industry: "Amazon Acquires Microsoft Mobile Division." Your users are confused, worried. Your team is devastated. But the check clears. Amazon gets 40 million users and Nokia's hardware expertise. You get $4.2 billion and freedom.`
                                },
                                delayed: {
                                    date: "JAN 2017",
                                    cash: 1.5,
                                    marketCap: 3.0,
                                    marketShare: -20,
                                    morale: "neutral",
                                    mobileRevenue: 0.05,     // Residual services revenue
                                    mobileCosts: 0.02,       // Minimal ongoing
                                    narrative: `Amazon rebranded the phones "Fire Phone 2.0." Results were mixed—Amazon's ecosystem is different from Microsoft's. Many users defected to Android. Some stayed for the hardware quality.

The Nokia hardware team merged with Amazon's Lab126. Your mobile team scattered—some to Amazon, some to Google, many to startups. The community you built dispersed to new platforms.

Microsoft's focus shifted entirely to cloud and productivity services. Azure grew 50% annually. Office 365 became Microsoft's fastest-growing business. You traded platform dreams for cloud dominance. History will judge whether that was wisdom or surrender.`,
                                    triggersEnding: "sold-division"
                                }
                            }
                        }
                    ]
                },

                "d5-platform-contender": {
                    id: "d5-platform-contender",
                    type: "decision",
                    date: "JAN 2015",
                    timeMarker: "JAN 2015",
                    title: "The Third Ecosystem",
                    storyImage: '<i class="ph ph-trophy" style="font-size: 4rem;"></i>',
                    storyText: `You never expected to be here. Third place. Viable. Growing.

The industry analysts called it "impossible" five years ago. "No third mobile ecosystem has ever survived," they said. "Platform markets are winner-take-all."

They were wrong. Or at least, they were wrong about you.

Windows Phone has 12% market share. Not iOS's 18%. Not Android's 68%. But 12%—enough to matter. Enough that developers build for you. Enough that carriers promote you. Enough that 150 million people chose your platform.

The Nokia acquisition finally makes sense. Lumia hardware is excellent. The Surface Phone prototype is even better. Windows 10 Mobile is creating genuine platform unification—the same apps running on phone, tablet, and PC. Universal apps are solving the developer problem you spent a decade fighting.

You're not winning. But you're not losing anymore either.

Satya pulled you into his office this morning. "I didn't believe in mobile when I took this job," he admits. "You proved me wrong. The question now is: what do we do with it?"

He's offering you resources. The board is supportive—finally. Microsoft's market cap just passed $500 billion, and mobile is no longer a liability.

You can sustain your position—invest carefully, grow slowly, build the third ecosystem into something permanent. Or you can push for more—challenge iOS directly, try to break the duopoly, go for second place.

You've climbed the mountain. Do you plant your flag here, or keep climbing?`,
                    objective: "You've achieved viability. Sustain it or push for more?",
                    availableInfo: ["d5-info-nadella-era", "d5-info-market-final"],

                    options: [
                        {
                            id: "d5pc-option-1",
                            title: "Sustain and Solidify—Build the Third",
                            description: "12% is victory. Don't get greedy. Invest carefully in platform quality, developer relations, and user experience. Build the third ecosystem into something permanent—the Firefox of mobile.",
                            risk: "iOS/Android continue to consolidate, third place becomes second-to-last",
                            upside: "Sustainable platform business, 150M+ users, profitable",
                            cost: "$1.5B annual investment",

                            consequences: {
                                immediate: {
                                    date: "APR 2015",
                                    cash: -1.5,
                                    marketCap: 3.0,
                                    marketShare: 1,
                                    morale: "high",
                                    mobileRevenue: 0.35,     // Strong platform revenue
                                    mobileCosts: 0.25,       // Sustainable investment
                                    narrative: `You announce "Platform for the Long Term"—a five-year commitment to Windows Mobile. $1.5 billion annual investment. Developer subsidies extended. Enterprise program expanded.

The message is clear: Microsoft is here to stay. Wall Street approves—the investment is modest relative to Microsoft's scale. Investors appreciate the discipline compared to previous mobile spending.

Developers take notice. Several major apps that skipped Windows Phone announce ports. The ecosystem flywheel, long stuck, begins to spin. "We finally have critical mass," says your developer relations lead. "Developers see the 150 million users and decide we're worth supporting."`
                                },
                                delayed: {
                                    date: "JAN 2017",
                                    cash: 0.5,
                                    marketCap: 5.0,
                                    marketShare: 2,
                                    morale: "high",
                                    mobileRevenue: 0.5,      // Thriving platform revenue
                                    mobileCosts: 0.3,        // Healthy R&D investment
                                    narrative: `The third ecosystem is real. Windows Mobile hit 14% global share—higher in enterprise, lower in consumer. 180 million active users. App gap largely closed for top 500 apps.

Lumia devices sell steadily. The Surface Phone launched to strong reviews. Carrier relationships stabilized. Enterprise deployments grew 40% year over year.

"Microsoft did what everyone said was impossible," wrote The Verge. "They built a viable third mobile ecosystem." It's not Android. It's not iOS. It's something different—a productivity-focused, enterprise-friendly, privacy-respecting alternative. You didn't win the mobile war. But you survived it.`,
                                    triggersEnding: "sustainable-third"
                                }
                            }
                        },
                        {
                            id: "d5pc-option-2",
                            title: "Push for Second—Challenge iOS",
                            description: "12% is a platform. 25% would be a movement. Go aggressive: massive marketing, subsidized devices, developer bounties. Break the duopoly. Make Windows the default for everyone who isn't an Apple loyalist.",
                            risk: "Overextension, burning cash, iOS counterattack",
                            upside: "If it works, Windows becomes the global default for non-premium",
                            cost: "$5B aggressive push",

                            consequences: {
                                immediate: {
                                    date: "APR 2015",
                                    cash: -5.0,
                                    marketCap: -2.0,
                                    marketShare: 4,
                                    morale: "high",
                                    mobileRevenue: 0.4,      // Device sales surge
                                    mobileCosts: 0.8,        // Massive investment
                                    narrative: `You announce "Project Momentum"—$5 billion to make Windows Mobile the number two platform. Subsidized devices to carriers. $500 bounties to developers who port top apps. Marketing blitz positioning Windows as "the smart choice."

Wall Street is nervous: "Microsoft going for broke in mobile." The CFO gets uncomfortable questions about capital allocation. But market share jumps to 16% on device subsidies alone.

You're buying growth—the question is whether it converts to loyalty. "We can outspend Google," you tell the board. "We just need to do it long enough that users stick." Bold. Expensive. Possibly brilliant. Possibly catastrophic.`
                                },
                                delayed: {
                                    date: "JAN 2017",
                                    cash: -3.0,
                                    marketCap: 2.0,
                                    marketShare: 2,
                                    morale: "neutral",
                                    mobileRevenue: 0.45,     // 14% share revenue
                                    mobileCosts: 0.35,       // Normalization after push
                                    narrative: `The push peaked at 18% share in Q2 2016—then gravity reasserted itself. Subsidies created users, not loyalty. When the deals ended, many switched back to Android. The app ecosystem couldn't keep them.

Final share: 14%—better than before the push, but not what you hoped. The $5 billion bought market position but not market love. Many of those "acquired" users never downloaded more than the pre-installed apps.

"We tried to buy our way to second place," reflects your strategy lead. "Turns out you can't buy ecosystem loyalty. You have to earn it." Still, 14% is viable. 180 million users is real. You swung for the fences and hit a double.`,
                                    triggersEnding: "pushed-for-second"
                                }
                            }
                        }
                    ]
                }
            }
        }
    },

    // 7. ENDINGS
    endings: {
        "sustainable-third": {
            title: "The Sustainable Third",
            summary: "Against all odds, you built a lasting third mobile ecosystem. A viable, profitable alternative to iOS and Android that defied the skeptics.",
            achievement: "Platform Pioneer",
            reflection: `You did what everyone said was impossible. When Steve Jobs unveiled the iPhone in 2007, nobody believed a third ecosystem could survive. "Platform markets are winner-take-all," they said. "Microsoft is too late."

They were wrong. Through persistence, smart investments, and a willingness to find your niche, you built something real. Not the dominant platform—iOS and Android still own 84% combined—but a meaningful alternative for 180 million users who value what Windows offers: productivity integration, enterprise security, camera excellence.

The history books will remember Microsoft as the third platform that survived. In a market that killed BlackBerry, Palm, Symbian, webOS, and Fire Phone, Windows Mobile endured. That's not nothing. That might be everything.`,
            actualReality: "In reality, Windows Phone peaked at 3.6% share in 2013 and was discontinued in 2017. Microsoft lost $10B+ on mobile."
        },
        "sustainable-niche": {
            title: "Niche Master",
            summary: "You found your place. A loyal user base and sustainable profitability. Not victory—but not defeat either.",
            achievement: "Niche Commander",
            reflection: `You stopped chasing the mass market and found your people instead. Enterprise users who need real Exchange integration. Photography enthusiasts who love the Lumia cameras. Privacy advocates who don't trust Google. A small, loyal community that chose you—and stayed.

The numbers were never impressive: 3-4% share, 35 million users, $200M annual profit. But in a market where most challengers died completely, survival is its own achievement. You built something real for people who needed it.

The dream of platform dominance died. But the dream of serving users well—that one survived.`,
            actualReality: "In reality, Microsoft never achieved sustainable niche profitability. Windows Phone peaked at 3.6% and was discontinued completely."
        },
        "graceful-exit": {
            title: "Graceful Exit",
            summary: "You knew when to fold. Mobile closed with dignity. Resources redeployed to cloud and productivity—where Microsoft went on to dominate.",
            achievement: "Strategic Wisdom",
            reflection: `The hardest decision in business isn't when to fight—it's when to stop. You looked at eight years of mobile struggle, $10 billion in losses, and a market that had clearly decided its winners. And you chose wisdom over pride.

Microsoft's exit from mobile hardware was announced with clarity and purpose. No desperate acquisitions, no delusional pivots. Just an honest acknowledgment: "We lost the platform war. We will win the services war instead."

And you did. Microsoft Office is now the most popular productivity suite on iOS and Android. Azure became the fastest-growing enterprise cloud. Microsoft's market cap passed $2 trillion. Sometimes the best way to win is to stop playing a game you can't win—and find a better game.`,
            actualReality: "This mirrors the actual Nadella strategy, though Microsoft took longer to fully exit and absorbed the $7.6B Nokia write-down first."
        },
        "fought-to-end": {
            title: "Fought to the End",
            summary: "You never surrendered. Windows Phone was discontinued in 2017, but you went down fighting. Some battles are worth losing.",
            achievement: "Never Surrender",
            reflection: `You knew the odds. You knew the numbers. You knew what the analysts said and what the board wanted. And you kept fighting anyway.

Windows Phone died in October 2017—the same fate as BlackBerry, Palm, Symbian, and every other challenger that tried to break the iOS/Android duopoly. Market share at the end: 0.1%. Ten years of effort, $15 billion invested, 30,000 careers disrupted.

But here's what the accountants don't measure: you tried. You built beautiful phones. You created a genuinely different user experience. You gave 50 million people a platform they loved, even if they were the only ones. History is written by the winners, but that doesn't make the losers wrong for trying.

You fought to the end. That counts for something.`,
            actualReality: "This closely matches actual history. Windows Phone was discontinued in 2017 after $10B+ in losses."
        },
        "sold-division": {
            title: "Strategic Sale",
            summary: "You sold the mobile division at its peak value. Resources redeployed, pride preserved.",
            achievement: "Business Acumen",
            reflection: `The phone rang from Amazon on a Tuesday. They wanted your mobile division—the 40 million users, the Nokia hardware expertise, the patents and partnerships. They offered $4.2 billion.

You took it.

Wall Street called it surrender. Your team called it betrayal. Your users called it abandonment. But you called it business. The mobile division was worth $4.2 billion that day. In two years, it would be worth nothing. You did the math.

Amazon renamed it "Fire Phone 2.0." It failed, eventually. But by then, Microsoft had moved on—to Azure, to Office 365, to LinkedIn, to a $2 trillion market cap. The mobile dream died. Microsoft didn't.

Sometimes the smartest exit is the one you make before you have to.`,
            actualReality: "In reality, Microsoft did not sell the mobile division—they wrote it down and shut it down. No buyer emerged."
        },
        "pushed-for-second": {
            title: "The Push",
            summary: "You swung for the fences with massive investment. Bold, expensive, memorable. You pushed hard for market dominance.",
            achievement: "Ambitious Leader",
            reflection: `When you had 12% share, everyone said you should be satisfied. "Third place is a miracle," they said. "Don't get greedy." You got greedy anyway.

$5 billion in device subsidies, developer bounties, and marketing blitzes. Market share jumped to 18%—briefly, gloriously, Windows was a legitimate competitor. For three quarters, you could say "Windows is the number two platform in Europe." For three quarters, the dream seemed possible.

Then gravity reasserted itself. When the subsidies ended, the users who came for cheap phones left for cheap phones elsewhere. Final share: 14%. A $5 billion investment bought you 2 percentage points.

Was it worth it? Financially, no. Strategically, maybe—14% is more viable than 12%. Emotionally, absolutely. You proved that Windows could compete. You proved that Microsoft could swing for the fences. You proved that ambition isn't always foolish, even when it fails.

You pushed for second. You got third. You tried.`,
            actualReality: "In reality, Windows Phone never exceeded 3.6% global share. The push scenario represents an alternate history."
        },
        "strategic-exit": {
            title: "Strategic Exit",
            summary: "In crisis, you made the hard call. Mobile closed. Resources redeployed to winning businesses.",
            achievement: "Pragmatic Leader",
            reflection: `The board meeting that ended Microsoft's mobile dream lasted 90 minutes. The financials were brutal: $1.2 billion quarterly losses, 2% market share, talent exodus accelerating. The Nokia acquisition had failed. The platform was dying. The only question was whether to keep the life support running.

You pulled the plug.

"Mobile will transition to maintenance mode effective immediately. All major investments cease. Resources redeploy to cloud and productivity." The press release was 200 words. The coverage was brutal. "Microsoft Surrenders in Mobile" was the kindest headline.

But surrender isn't failure when continued fighting is suicide. Microsoft's market cap doubled in the three years after the mobile exit. Azure became a $50 billion business. Office 365 became the enterprise standard. You lost mobile and won everything else.

History will ask whether you gave up too early or too late. The honest answer: exactly on time.`,
            actualReality: "This mirrors actual history, though Microsoft's exit was more gradual (2014-2017) rather than a single decision point."
        },
        "early-exit-services": {
            title: "Services Pivot",
            summary: "You gave up the platform but won the services war. Microsoft Office and Outlook now run on 2 billion mobile devices—most of them competitors'.",
            achievement: "Pivot Master",
            reflection: `The day Microsoft Office launched on iPad, Steve Ballmer reportedly threw a chair. The day you launched Outlook for Android, he threw another one. The day you admitted "our services will be on every platform, including our competitors'" he didn't throw anything—he just looked tired.

You gave up the platform dream. And in its place, you built something bigger.

Microsoft Office is now the most-used productivity suite on iOS and Android—on devices you don't control, running operating systems you didn't build. 2 billion users. More than Windows Phone ever dreamed of reaching. More than Windows itself.

The platform war is over. iOS and Android won. But the services war? That one's just beginning. And on that battlefield, Microsoft is winning.

Sometimes losing the battle is how you win the war.`,
            actualReality: "This largely reflects Nadella's actual strategy. Microsoft Office mobile apps have 100M+ downloads each on iOS/Android."
        }
    }
};

// Legacy compatibility
scenarioData.decisionPoints = [scenarioData.decisions.d1];
