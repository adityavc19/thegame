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
        "microsoft-zune": {
            id: "microsoft-zune",
            name: "Microsoft Zune 30 (2006)",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Learning from past consumer failures",
            caseNumber: "000",
            forensicTitle: "The Brown Lesson - Microsoft's Consumer Strategy",
            status: "MARKET FAILURE",
            casualties: "Consumer Credibility",
            description: "Microsoft's attempt to compete with iPod. The 'brown Zune' became a symbol of misunderstanding consumer markets.",
            model3D: '<iframe src="artifacts/zune.html" style="width: 100%; height: 100%; border: none;" allow="accelerometer; gyroscope"></iframe>',
            timelineProgress: 15,
            timelineMarkers: [
                { label: "Launch", value: "Nov 2006" },
                { label: "Peak Share", value: "9% (2008)" },
                { label: "Discontinued", value: "2011" }
            ],
            hotspots: [],
            failureTags: ["Poor Marketing", "Late to Market", "Ecosystem Fail"],
            stats: {
                "Launch Date": "November 14, 2006",
                "Launch Price": "$249",
                "Peak Market Share": "~9% (2008)",
                "Total Sales": "~2 million units",
                "Discontinued": "2011"
            },
            story: "The Zune had good hardware and innovative features like WiFi sharing ('squirting'). But it launched 5 years after iPod dominated. Microsoft learned: entering consumer markets late against entrenched leaders is brutal. This lesson shaped their iPhone response strategy in 2007."
        },

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

        "htc-advantage-x7500": {
            id: "htc-advantage-x7500",
            name: "HTC Advantage X7500 (2007)",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Chose enterprise-only focus strategy",
            caseNumber: "007E",
            forensicTitle: "THE LAST ENTERPRISE FORTRESS",
            status: "STRATEGIC MISCALCULATION",
            casualties: "Consumer Market Abandoned",
            description: "5-inch VGA display, detachable keyboard, Windows Mobile 6. Peak enterprise device that launched one month after iPhone announcement. Represented Microsoft's bet that business users wanted screens and keyboards, not touch interfaces.",
            model3D: "📱",
            timelineProgress: 28,
            timelineMarkers: [
                { label: "Launch", value: "Jun 2007" },
                { label: "Strategy", value: "Enterprise Only" },
                { label: "Obsolete", value: "Q4 2009" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "5-inch VGA Display", description: "Largest screen available in 2007. Still required stylus—no touch optimization." },
                { x: 50, y: 65, title: "Detachable QWERTY", description: "Physical keyboard for 'serious email.' Executives loved it—until iPhone 3GS arrived with enterprise support." },
                { x: 50, y: 50, title: "Office Mobile Suite", description: "Full Office integration, Exchange ActiveSync. The enterprise features Apple would copy by 2009." }
            ],
            failureTags: ["Pre-Touch Era", "Enterprise Bet", "BYOD Victim", "Market Convergence Failure"],
            stats: {
                "Launch Date": "June 2007",
                "Screen": "5-inch VGA (640×480)",
                "Target Market": "Enterprise only",
                "Price": "$799 unlocked",
                "Fate": "Discontinued 2009"
            },
            story: "The X7500 was Microsoft's flagship response to iPhone: double down on enterprise with bigger screen, detachable keyboard, full Office integration. It launched one month after iPhone announcement. Within 30 months, even CIOs wanted iPhones. The enterprise fortress strategy assumed consumer and business markets would stay separate. They converged instead. This device became artifact of that miscalculation."
        },

        "palm-treo-750": {
            id: "palm-treo-750",
            name: "Palm Treo 750 (2006)",
            category: "Device",
            rarity: "Common",
            unlockedBy: "Considered Palm acquisition",
            caseNumber: "003A",
            forensicTitle: "THE ACQUISITION TARGET",
            status: "STRATEGIC FAILURE",
            casualties: "$4.3B Lost in M&A",
            description: "Palm's Windows Mobile flagship before acquisition talks. Represented Palm's attempt to stay relevant by abandoning Palm OS for Microsoft's platform. Ironic symbol of failed acquisition strategy.",
            model3D: "📱",
            timelineProgress: 25,
            timelineMarkers: [
                { label: "Launch", value: "Oct 2006" },
                { label: "Acquisition Talk", value: "Q1 2007" },
                { label: "Market Share", value: "5% (declining)" }
            ],
            hotspots: [
                { x: 50, y: 35, title: "QWERTY Keyboard", description: "Palm's signature keyboard design on Windows Mobile OS—a compromise that satisfied nobody." },
                { x: 50, y: 60, title: "Windows Mobile 5.0", description: "Palm abandoned its own OS to license Microsoft's. The platform it would have brought to Microsoft was already running Microsoft's platform." }
            ],
            failureTags: ["M&A Disaster", "Integration Failure", "Talent Exodus", "Market Share Loss"],
            stats: {
                "Launch Date": "October 2006",
                "OS": "Windows Mobile 5.0",
                "Market Share": "5% (down from 20% in 2003)",
                "Acquisition Cost": "$1.8B",
                "Total Loss": "$4.3B (acquisition + integration)"
            },
            story: "Microsoft acquired Palm for $1.8B in 2007, hoping to buy mobile credibility and the promising webOS under development. Instead: 18 months of integration paralysis, 60% engineering talent exodus, platform roadmap confusion, and webOS death in committee. Palm's 5% share collapsed to 2% during integration. The acquisition destroyed $4.3B in value and cost Microsoft 33 critical months while iPhone and Android seized the market. Lesson: You can't acquire your way out of strategic confusion."
        },

        "palm-pre-webos": {
            id: "palm-pre-webos",
            name: "Palm Pre with webOS (2009)",
            category: "Device",
            rarity: "Epic",
            unlockedBy: "Acquired Palm for webOS platform",
            caseNumber: "009W",
            forensicTitle: "THE BRILLIANT PLATFORM MICROSOFT KILLED",
            status: "ACQUISITION FAILURE",
            casualties: "$2.2B + webOS Innovation",
            description: "Revolutionary card-based multitasking, gesture navigation, and Synergy contacts. webOS pioneered UI concepts that iOS and Android would adopt years later. Microsoft's 2009 acquisition turned innovation into integration nightmare.",
            model3D: "📱",
            timelineProgress: 65,
            timelineMarkers: [
                { label: "webOS Launch", value: "Jun 2009" },
                { label: "Microsoft Acquisition", value: "Sep 2009" },
                { label: "Integration Death", value: "Q4 2010" }
            ],
            hotspots: [
                { x: 50, y: 25, title: "Card Multitasking", description: "Revolutionary UI—swipe between app 'cards'. iOS and Android copied this years later." },
                { x: 50, y: 50, title: "Gesture Area", description: "Swipe up to close, no home button needed. Ahead of its time." },
                { x: 50, y: 75, title: "Physical Keyboard", description: "Slide-out QWERTY. Last gasp of keyboard era before all-touch dominated." }
            ],
            failureTags: ["M&A Disaster", "Talent Exodus", "Integration Paralysis", "Platform Killed"],
            stats: {
                "Launch Date": "June 6, 2009",
                "OS": "webOS 1.0",
                "Press Reception": "Revolutionary UI (Engadget)",
                "Microsoft Acquisition": "$1.5B (Sept 2009)",
                "Total Loss": "$2.2B",
                "Talent Attrition": "60% engineers left"
            },
            story: "webOS was genuinely innovative—card multitasking, gesture navigation, unified Synergy contacts that merged all your accounts seamlessly. Tech press loved it. But Palm was dying. Microsoft acquired Palm for $1.5B in September 2009 to get webOS instead of building Windows Phone 7. Fatal mistake: 60% of engineers left during integration, 12 months wasted debating platform strategy, app developers abandoned the platform. By Q4 2010 launch, webOS had 600 apps vs Android's 100K. Microsoft destroyed $2.2B and a legitimately innovative platform through integration dysfunction. HP later bought the wreckage for $1.2B and killed it again. Some platforms are too good to survive corporate acquisition."
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

        "htc-hd2": {
            id: "htc-hd2",
            name: "HTC HD2 (2009)",
            category: "Device",
            rarity: "Rare",
            unlockedBy: "Chose incremental Windows Mobile updates",
            caseNumber: "003B",
            forensicTitle: "GREAT HARDWARE, DOOMED SOFTWARE",
            status: "STRATEGIC FAILURE",
            casualties: "Potential Wasted",
            description: "4.3-inch capacitive touchscreen, 1GHz Snapdragon processor, gorgeous hardware. But running Windows Mobile 6.5—a 14-year-old OS with touch bolted on. Perfect symbol of incremental strategy failure: Modern hardware hobbled by legacy software.",
            model3D: "📱",
            timelineProgress: 45,
            timelineMarkers: [
                { label: "Launch", value: "Oct 2009" },
                { label: "Hardware", value: "Flagship-tier" },
                { label: "Software", value: "Legacy WM 6.5" },
                { label: "Reception", value: "Mixed reviews" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "4.3\" Capacitive Screen", description: "Largest, most responsive display in 2009. Hardware ready for modern touch." },
                { x: 50, y: 60, title: "1GHz Snapdragon", description: "Powerful processor that could run Android or iOS easily. Wasted on Windows Mobile." },
                { x: 50, y: 75, title: "Windows Mobile 6.5", description: "14-year-old kernel (1996) with touch UI skin. 140ms touch latency vs iOS 55ms. Users noticed." }
            ],
            failureTags: ["Incremental Strategy", "Legacy Software", "Wasted Hardware", "Platform Mismatch"],
            stats: {
                "Launch Date": "October 2009",
                "OS": "Windows Mobile 6.5",
                "Display": "4.3 inches capacitive",
                "Processor": "1GHz Snapdragon",
                "Reviews": "Great hardware, laggy software",
                "Legacy": "Enthusiasts later installed Android/WP7"
            },
            story: "The HD2 had 2010 hardware running 1996 software. Reviews said: 'Best Windows Mobile device ever made—which tells you more about Windows Mobile than the HD2.' Touch felt sluggish despite powerful processor because Windows CE kernel wasn't designed for GPU-accelerated UI. Scrolling lagged, multi-touch was broken, apps crashed. Enthusiast community later installed Android and Windows Phone 7 on it—both ran BETTER than native Windows Mobile. The HD2 proved: You can't fix architectural problems with incremental updates. It became a cult device for hackers, but commercial failure. Symbol of Microsoft's 'lipstick on a pig' strategy."
        },

        "microsoft-kin": {
            id: "microsoft-kin",
            name: "Microsoft KIN One & Two (2010)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "Platform strategy confusion",
            caseNumber: "010K",
            forensicTitle: "48 DAYS TO FAILURE - THE BILLION DOLLAR MISTAKE",
            status: "CATASTROPHIC FAILURE",
            casualties: "$1B Loss + Strategic Confusion",
            description: "Microsoft's social media-focused phones built on Danger acquisition. Launched May 2010, discontinued June 2010 after 48 days. Fewer than 10,000 units sold. Cost: $500M acquisition + $300M development = $800M loss. Symbol of Microsoft's mobile strategy chaos 2008-2010.",
            model3D: "📱",
            timelineProgress: 5,
            timelineMarkers: [
                { label: "Danger Acquired", value: "Feb 2008 ($500M)" },
                { label: "KIN Launch", value: "May 2010" },
                { label: "Discontinued", value: "June 2010 (48 days)" },
                { label: "Units Sold", value: "<10,000" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "Social Features", description: "Loop (social feed), Spot (sharing widget). Built for MySpace era, launched in Facebook era." },
                { x: 50, y: 60, title: "No Apps", description: "Proprietary OS. No app store, no third-party apps. Closed ecosystem in Android/iOS age." },
                { x: 50, y: 75, title: "$60/month Plan", description: "Verizon required smartphone data plan for feature phone. Teens (target market) couldn't afford it." }
            ],
            failureTags: ["48-Day Failure", "Acquisition Disaster", "Wrong Market Timing", "Strategic Confusion"],
            stats: {
                "Launch Date": "May 6, 2010",
                "Discontinuation": "June 30, 2010 (48 days)",
                "Units Sold": "<10,000 estimated",
                "Development Cost": "$800M (Danger + development)",
                "Target Market": "Teens/young adults",
                "Fatal Flaw": "$60/month data plan for feature phone"
            },
            story: "KIN represents Microsoft's mobile identity crisis. While Windows Phone 7 was in development, Microsoft launched KIN on separate track—social media phones for teens. But: No apps, proprietary OS, $60/month Verizon data plan teens couldn't afford. Launched 3 weeks before iPhone 4. Discontinued after 48 days, <10K units sold. The Danger acquisition (2008, $500M) + KIN development ($300M) = $800M writeoff. KIN became punchline: 'How to waste $1B in 48 days.' Symbolizes 2008-2010 era when Microsoft had THREE mobile strategies simultaneously (Windows Mobile 6.5, KIN, Windows Phone 7 in development). Strategic confusion killed all three. Some failures are quick."
        },

        "blackberry-bold-9900": {
            id: "blackberry-bold-9900",
            name: "BlackBerry Bold 9900 (2011)",
            category: "Device",
            rarity: "Epic",
            unlockedBy: "Chose enterprise-only strategy",
            caseNumber: "011B",
            forensicTitle: "THE LAST GREAT BLACKBERRY - ENTERPRISE FORTRESS FALLS",
            status: "STRATEGIC FAILURE",
            casualties: "Enterprise Control Lost to BYOD",
            description: "BlackBerry's flagship 2011 device. Beautiful hardware, perfect keyboard, enterprise security, BBM messaging. Best BlackBerry ever made. Launched same month Microsoft chose enterprise-only strategy. Within 2 years, BYOD revolution killed both companies' enterprise dominance. Consumer preference drove enterprise adoption—not IT policy.",
            model3D: "📱",
            timelineProgress: 85,
            timelineMarkers: [
                { label: "Launch", value: "August 2011" },
                { label: "Target", value: "100% Enterprise" },
                { label: "BlackBerry Share", value: "11% (falling)" },
                { label: "BYOD Impact", value: "Catastrophic" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "Perfect Keyboard", description: "Best smartphone keyboard ever made. Executives loved typing emails. But touchscreen apps mattered more." },
                { x: 50, y: 60, title: "Enterprise Security", description: "BES (BlackBerry Enterprise Server), encryption, IT control. Everything CIOs wanted. Executives didn't care." },
                { x: 50, y: 75, title: "7K Apps vs 500K", description: "BlackBerry App World: 7,000 apps. iOS App Store: 500,000 apps. Missing: Uber, Instagram, WhatsApp, Spotify." }
            ],
            failureTags: ["Enterprise-Only Failure", "BYOD Killed It", "Consumer Apps Mattered", "IT ≠ Users"],
            stats: {
                "Launch Date": "August 2011",
                "Target Market": "Enterprise professionals",
                "Keyboard": "Best in class",
                "Apps": "7,000 (vs iOS 500K)",
                "Market Share": "11% and falling",
                "Outcome": "BYOD revolution killed enterprise-only model"
            },
            story: "Bold 9900 was BlackBerry's Hail Mary: Perfect hardware for enterprise. Launched August 2011 same month Microsoft considered enterprise-only Windows Phone pivot. RIM's strategy: 'Consumers want toys (iPhone). Enterprises need tools (BlackBerry). We own enterprise, they can have consumer.' But 2011-2013 BYOD revolution destroyed that logic. Executives demanded: 'Support my iPhone or I'll find a CIO who will.' IT departments capitulated. Enterprise apps (Salesforce, Box, Concur) all built iOS versions with enterprise features. iPhone got Exchange, MDM, encryption—closing BlackBerry's security gap. Bold 9900 reviews: 'Best BlackBerry ever, but who cares?' Missing apps executives needed: Uber (business travel), WhatsApp (client communication), Instagram (brand marketing). Consumer preference drove enterprise adoption. IT policy couldn't stop it. BlackBerry: 20% (2009) → 11% (2011) → 0.2% (2016). The Bold 9900 proved: Enterprise-only strategy fails when executives prefer consumer platforms. Microsoft almost copied this fatal strategy."
        },

        "nokia-lumia-900": {
            id: "nokia-lumia-900",
            name: "Nokia Lumia 900 (2012)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "Nokia exclusive partnership",
            caseNumber: "012L",
            forensicTitle: "THE $100 BETA TEST - QUALITY CONTROL COLLAPSE",
            status: "CATASTROPHIC FAILURE",
            casualties: "Brand Trust Destroyed",
            description: "Nokia's flagship Windows Phone, launched April 2012 on AT&T with massive $150M marketing campaign. Within 2 weeks: Critical software bug prevented data connectivity. Nokia gave all buyers $100 credit, essentially admitting flagship phone was 'beta test.' Reviews destroyed. Symbol of quality control failure during desperate Microsoft-Nokia partnership.",
            model3D: "📱",
            timelineProgress: 15,
            timelineMarkers: [
                { label: "Launch", value: "April 8, 2012" },
                { label: "Bug Discovery", value: "April 11, 2012 (3 days)" },
                { label: "$100 Credit", value: "All buyers compensated" },
                { label: "Reviews", value: "Destroyed" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "4.3\" AMOLED Display", description: "Beautiful cyan polycarbonate body. Nokia's best hardware design. But software broken." },
                { x: 50, y: 60, title: "Memory Bug", description: "Software error prevented 4G LTE data connectivity. Phone couldn't access internet. Flagship DOA." },
                { x: 50, y: 75, title: "$150M Marketing Wasted", description: "AT&T spent $150M marketing 'smartphone beta test.' Campaign backfired spectacularly." }
            ],
            failureTags: ["Beta Test Scandal", "Quality Control Failure", "Marketing Disaster", "Partnership Desperation"],
            stats: {
                "Launch Date": "April 8, 2012",
                "Bug Discovery": "April 11, 2012 (3 days later)",
                "Compensation": "$100 credit to all buyers",
                "AT&T Marketing": "$150M campaign",
                "Review Score": "1.5/5 after bug (was 4/5 before)",
                "Sales Impact": "Return rate 35%, brand trust destroyed"
            },
            story: "Lumia 900 was Nokia's last hope: Flagship Windows Phone with $150M AT&T marketing blitz. 'The smartphone beta test is over'—tagline attacking iPhone. Launched April 8, 2012. April 11: Users report phone can't connect to 4G LTE. Critical memory management bug. Phone literally couldn't access internet. Nokia's response: '$100 credit for all Lumia 900 buyers.' Essentially admitted flagship phone was broken beta test. AT&T furious—$150M marketing for DOA device. Tech press: 'Nokia called iPhone beta test while shipping actual beta test.' Verge: 'Smartphone beta test is over? Not for Nokia.' Reviews crashed 4.5/5 → 1.5/5 overnight. Return rate 35% (vs normal 3-5%). The $100 credit meant Nokia PAID customers $100 to keep broken phone. Sales never recovered. Symbolizes Microsoft-Nokia partnership desperation: Rushed quality control, shipping broken flagship to hit deadlines. Nokia burned through $1B quarterly 2012-2013. Microsoft eventually bought Nokia devices division September 2013 for $7.2B—inheriting quality control culture that shipped Lumia 900. The 'beta test' jab backfired devastatingly. Sometimes marketing writes checks product can't cash."
        },

        "microsoft-surface-rt": {
            id: "microsoft-surface-rt",
            name: "Microsoft Surface RT (2012)",
            category: "Device",
            rarity: "Epic",
            unlockedBy: "Enterprise niche focus strategy",
            caseNumber: "013S",
            forensicTitle: "WINDOWS RT - THE WRONG WINDOWS",
            status: "STRATEGIC CONFUSION",
            casualties: "Brand Confusion + $900M Writedown",
            description: "Microsoft's ARM-based Windows tablet running Windows RT (not real Windows). Couldn't run x86 desktop apps—only Windows Store apps. Launched October 2012 during enterprise niche pivot. Symbolizes Microsoft's mobile platform confusion: Windows Phone, Windows RT, Windows 8. Three incompatible 'Windows' platforms competing for same users.",
            model3D: "💻",
            timelineProgress: 25,
            timelineMarkers: [
                { label: "Launch", value: "October 26, 2012" },
                { label: "Price", value: "$499 tablet + $129 keyboard" },
                { label: "Apps", value: "5,000 Windows Store apps" },
                { label: "Writedown", value: "$900M (July 2013)" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "Windows RT ≠ Windows", description: "Looked like Windows, but couldn't run Windows apps. Only Windows Store apps. Massive consumer confusion." },
                { x: 50, y: 60, title: "5K Apps vs 750K iPad", description: "Windows Store had 5,000 apps. iPad had 750,000. Missing: Netflix, Spotify, major apps." },
                { x: 50, y: 75, title: "Office RT Included", description: "Bundled Office Home & Student RT. But: No Outlook, no macros, limited features. 'Enterprise Office' that wasn't enterprise." }
            ],
            failureTags: ["Platform Confusion", "$900M Writedown", "Windows That Wasn't Windows", "Three Incompatible Platforms"],
            stats: {
                "Launch Date": "October 26, 2012",
                "Price": "$499 (+ $129 keyboard required)",
                "OS": "Windows RT (ARM, incompatible with x86 Windows)",
                "Apps": "5,000 Windows Store apps",
                "Sales": "1.5M units (vs 14M iPads Q4 2012)",
                "Writedown": "$900M inventory (July 2013)",
                "Discontinued": "January 2015"
            },
            story: "Surface RT represented Microsoft's platform confusion crisis. Launched October 2012, same quarter as Windows Phone 8 and Windows 8. Three 'Windows' platforms, all incompatible: Windows Phone (ARM, phone apps), Windows RT (ARM, Windows Store apps), Windows 8 (x86, desktop apps). Developers: 'Which Windows do we build for?' Consumers: 'This Windows tablet can't run Windows programs?' Enterprise buyers: 'Where's full Office with Outlook?' Surface RT included 'Office Home & Student RT'—crippled version without Outlook, macros, or enterprise features. Reviews brutal: 'iPad competitor that can't compete.' Priced at $499 vs iPad $499, but iPad had 750,000 apps, Surface RT had 5,000. Return rate 30%+. July 2013: Microsoft took $900M writedown on unsold Surface RT inventory—entire first production run. Price slashed $150 overnight. Surface RT symbolizes 2012-2013 enterprise niche strategy failure: Three incompatible Windows platforms confused everyone (developers, consumers, enterprise), satisfied no one. Microsoft eventually admitted mistake, discontinued Windows RT January 2015, unified to Windows 10 across devices. Sometimes 'Windows everywhere' means 'Windows nowhere.'"
        },

        "blackberry-z10": {
            id: "blackberry-z10",
            name: "BlackBerry Z10 (2013)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "BlackBerry acquisition attempt",
            caseNumber: "014Z",
            forensicTitle: "TOO LITTLE, TOO LATE - BB10's FINAL GASP",
            status: "CATASTROPHIC FAILURE",
            casualties: "BlackBerry's Last Hope Died",
            description: "BlackBerry's flagship BB10 device, launched January 30, 2013—their iPhone competitor arriving 6 years late. Touch-only device (no keyboard), modern UI, gesture-based navigation. Reviews: 'Excellent hardware. But app gap catastrophic.' 70K apps vs iOS 775K. Projected 1M/month sales, actual: 2.7M total Q1 2013. By Q4 2013, discontinued. BlackBerry never recovered.",
            model3D: "📱",
            timelineProgress: 5,
            timelineMarkers: [
                { label: "Launch", value: "January 30, 2013" },
                { label: "Projected Sales", value: "1M/month" },
                { label: "Actual Sales", value: "2.7M total Q1 (30% miss)" },
                { label: "Discontinued", value: "Q4 2013 (9 months)" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "BB10 OS", description: "Gesture-based UI, smooth animations, Hub messaging. Modern OS 6 years too late." },
                { x: 50, y: 60, title: "70K Apps vs 775K iOS", description: "App gap catastrophic. Missing: Instagram, Snapchat, Uber, WhatsApp, major games." },
                { x: 50, y: 75, title: "Developer Boycott", description: "Developers refused to build BB10 apps. 'BlackBerry dying. Why invest?'" }
            ],
            failureTags: ["Too Late", "App Gap", "Developer Boycott", "Last Gasp Failure"],
            stats: {
                "Launch Date": "January 30, 2013",
                "OS": "BlackBerry 10",
                "Apps": "70,000 (vs iOS 775,000, Android 800,000)",
                "Sales Target": "1M units/month",
                "Actual Sales": "2.7M units Q1 2013 total",
                "Discontinuation": "Q4 2013 (9 months later)",
                "Market Impact": "Failed to save BlackBerry"
            },
            story: "Z10 was BlackBerry's Hail Mary: Modern touch phone to compete with iPhone. Launched January 30, 2013 with massive $170M marketing campaign. BB10 OS had innovative gesture UI, Hub messaging, good hardware. Reviews: 'If this launched 2010, BlackBerry might've survived. In 2013? Too late.' The fatal problems: (1) App gap—70K apps vs 775K iOS. Missing: Instagram, Snapchat, Uber, Spotify, major banking, games. (2) Developer boycott—developers refused to build BB10 versions. 'BlackBerry at 7% share and falling. Why invest in dying platform?' (3) Sales catastrophe—projected 1M/month, actual 2.7M Q1 total = 70% sales miss. (4) Consumer rejection—'Why buy Z10 ($199) when iPhone 5 ($199) has all the apps?' By Q4 2013, discontinued. BlackBerry took $1B writedown on unsold Z10 inventory. Z10 symbolizes 'too little, too late' perfectly: Great product in 2010 terms, irrelevant in 2013 reality. BlackBerry never recovered—by 2016, 0.2% market share. Sometimes being late isn't fashionable, it's fatal. The Z10 was BlackBerry's tombstone—expensive, well-designed, and completely futile."
        },

        "microsoft-surface-duo": {
            id: "microsoft-surface-duo",
            name: "Microsoft Surface Duo (2020)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "One more try strategy",
            caseNumber: "015D",
            forensicTitle: "THE ANDROID SURRENDER - WINDOWS PHONE'S GHOST",
            status: "IDENTITY CRISIS",
            casualties: "Platform Ideology Abandoned",
            description: "Microsoft's dual-screen phone running... Android. Not Windows Phone. Launched September 2020 as Microsoft's return to mobile—except it betrayed everything Windows Phone stood for. Runs Google's OS with Microsoft services on top. Symbol of defeat: The company that spent $15B on mobile platform now sells Android phones.",
            model3D: "📱",
            timelineProgress: 5,
            timelineMarkers: [
                { label: "Launch", value: "September 10, 2020" },
                { label: "OS", value: "Android (not Windows)" },
                { label: "Price", value: "$1,399" },
                { label: "Reception", value: "Mixed reviews" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "Dual Screens", description: "Innovative dual-screen hinge design. But software buggy, apps not optimized." },
                { x: 50, y: 60, title: "Android OS", description: "Runs Android 10. Microsoft services pre-installed. But: Windows Phone ideology dead." },
                { x: 50, y: 75, title: "$1,399 Price", description: "Premium pricing. But: Outdated Snapdragon 855, no 5G, mediocre cameras. Not competitive." }
            ],
            failureTags: ["Platform Surrender", "Android Adoption", "Overpriced", "Identity Loss"],
            stats: {
                "Launch Date": "September 10, 2020",
                "OS": "Android 10 (not Windows Phone)",
                "Price": "$1,399",
                "Processor": "Snapdragon 855 (2018 chip in 2020)",
                "5G": "No",
                "Reviews": "6/10 average—interesting hardware, buggy software",
                "Sales": "Failed commercially, discontinued 2022"
            },
            story: "Surface Duo represents Microsoft's final mobile surrender: After spending $15B building Windows Phone platform (2007-2017), Microsoft returned to mobile in 2020... running Android. The irony is crushing. Ballmer's 2010 vision: 'Own the platform.' Reality: Tenant on Google's platform. Surface Duo had innovative dual-screen design—two 5.6-inch screens connected by hinge for multitasking. Reviews: 'Interesting hardware. But $1,399 for mid-range specs (2018 Snapdragon 855), no 5G, buggy Android optimization, apps not designed for dual screens.' Sales catastrophe—discontinued 2022. Surface Duo 2 (2021) also failed. The deeper meaning: Microsoft spent $15B trying to avoid exactly this—being Android OEM competing with Samsung. They fought for decade to own mobile platform. Lost. Then became what they feared: Hardware maker on someone else's OS, exactly like the 'license Android' strategy Microsoft rejected in 2010. Surface Duo is Windows Phone's ghost—proof that Microsoft was right to try building own platform, but wrong to think they could win. Sometimes the thing you fought hardest to avoid becomes inevitable anyway."
        },

        "hp-touchpad": {
            id: "hp-touchpad",
            name: "HP TouchPad (2011)",
            category: "Device",
            rarity: "Legendary",
            unlockedBy: "Open source transition strategy",
            caseNumber: "016T",
            forensicTitle: "49 DAYS TO DEATH - THE FASTEST FAILURE",
            status: "CATASTROPHIC FAILURE",
            casualties: "webOS Killed",
            description: "HP's webOS tablet. Launched July 1, 2011. Discontinued August 18, 2011. 49 days. HP bought Palm for $1.2B (2010), launched TouchPad (2011), killed it 49 days later, open sourced webOS (2012), abandoned it (2013). Perfect precedent for open source failure: Community couldn't save dying platform.",
            model3D: "💻",
            timelineProgress: 2,
            timelineMarkers: [
                { label: "HP Buys Palm", value: "$1.2B (July 2010)" },
                { label: "TouchPad Launch", value: "July 1, 2011" },
                { label: "Discontinued", value: "August 18, 2011 (49 days)" },
                { label: "Open Sourced", value: "December 2012" },
                { label: "Community Died", value: "2014-2015" }
            ],
            hotspots: [
                { x: 50, y: 30, title: "webOS Interface", description: "Beautiful card-based UI. Gesture navigation. Ahead of its time. But: No apps." },
                { x: 50, y: 60, title: "6,000 Apps vs 425,000 iPad", description: "App gap catastrophic. Missing: Everything except basic apps." },
                { x: 50, y: 75, title: "$99 Fire Sale", description: "Launched $499. Cut to $99 after 49 days. Still couldn't sell inventory." }
            ],
            failureTags: ["49-Day Failure", "Open Source Died", "Fastest Platform Death", "Community Couldn't Save It"],
            stats: {
                "HP Acquires Palm": "July 2010 ($1.2B)",
                "Launch Date": "July 1, 2011",
                "Discontinuation": "August 18, 2011 (49 days later)",
                "Original Price": "$499",
                "Fire Sale Price": "$99 (August 20, 2011)",
                "Apps": "6,000 (vs iPad 425,000)",
                "Open Sourced": "December 9, 2012",
                "Community Fate": "Died 2014-2015, couldn't sustain"
            },
            story: "HP TouchPad is the cautionary tale for open sourcing dying platforms. Timeline: HP buys Palm for $1.2B (July 2010) for webOS. Launches TouchPad July 1, 2011 at $499. Reviews: 'webOS is beautiful. But no apps, slow hardware, iPad exists.' Sales catastrophic—selling 25K units/month vs iPad's 10M/month. August 18, 2011: HP discontinues TouchPad after 49 days. Announces: 'Exploring strategic alternatives for webOS'—corporate speak for 'we're done.' August 20: Fire sale—TouchPad $99 (was $499). Inventory sells out (people buying $99 tablets, not $499 webOS tablets). December 2012: HP open sources webOS. Community excited: 'We'll save it!' Reality: Community ports webOS to other devices, maintains updates 2013-2014. But: No OEM support, no app development, no commercial viability. By 2015, webOS community dead. Platform lives only in LG smart TVs (different fork). Lesson: Open sourcing dying platform doesn't save it. TouchPad/webOS had BETTER UI than Windows Phone, launched EARLIER (2011 vs WP7 2010), had major corporate backing (HP). Still failed. Then open source community couldn't sustain it. Why? Platforms need: (1) Apps, (2) OEMs, (3) Developer ecosystem, (4) Commercial viability. Open source alone provides none of these. HP TouchPad is proof: Open sourcing platform death is slow, pointless death. Community enthusiasm can't replace corporate resources."
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
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "iPhone announced. Revolutionary touch interface. Windows Mobile holds 42% share.",
            content: `<h3>iPhone Impact Assessment - Jan 2007</h3>
                <p>Steve Jobs unveiled iPhone: Multi-touch interface, $499-599 pricing.</p>
                <p><strong>Current Market:</strong> Windows Mobile 42%, BlackBerry 20%, Symbian 18%</p>
                <p><strong>Immediate Risk:</strong> LOW ($500+ limits mass market)</p>
                <p><strong>Past Lesson:</strong> Remember how <span class="artifact-link" data-artifact-id="microsoft-zune">Microsoft Zune</span> fared against the iPod—launching late against an entrenched leader is brutal.</p>
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
            visual: '<i class="ph ph-robot"></i>',
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

        "pricing-economics-2009": {
            id: "pricing-economics-2009",
            type: "Financial Data",
            title: "Licensing Revenue Impact Analysis",
            date: "September 2009",
            source: "CFO Office",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "Current: $1.2B/year at $15-25/device. At $5/device: $400M/year. Revenue collapse 67%.",
            content: `<h3>Windows Mobile Licensing Revenue Scenarios</h3>
                <p><strong>Current State (Q3 2009):</strong></p>
                <ul>
                    <li>Average license fee: $20/device</li>
                    <li>Units shipped: 60M devices/year (declining)</li>
                    <li>Annual revenue: $1.2B</li>
                    <li>Operating margin: 95% (pure software licensing)</li>
                    <li>Profit contribution: $1.14B/year</li>
                </ul>
                <p><strong>Scenario A: Drop to $5/device</strong></p>
                <ul>
                    <li>Best case (OEMs stay): 60M devices × $5 = $300M revenue (-75%)</li>
                    <li>Realistic case (some growth): 70M devices × $5 = $350M revenue (-71%)</li>
                    <li>Optimistic case (Android defectors return): 80M × $5 = $400M (-67%)</li>
                    <li><strong>Expected revenue loss: $800M-900M/year</strong></li>
                </ul>
                <p><strong>Scenario B: Go to $0 (like Android)</strong></p>
                <ul>
                    <li>Revenue loss: $1.2B/year (100%)</li>
                    <li>Must find new monetization: app store (30% cut), services, enterprise licensing</li>
                    <li>New business model timeline: 18-24 months to profitability</li>
                </ul>
                <p><strong>The Hybrid Pricing Trap:</strong> At $5, you lose 70% of revenue BUT still can't match Android's $0. OEMs still prefer free. You get "worst of both worlds"—revenue collapse without competitive advantage.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Question: Is $300-400M/year worth losing OEM commitment to Android anyway?</p>`,
            conflicts: []
        },

        "google-android-economics-2009": {
            id: "google-android-economics-2009",
            type: "Competitor Intel",
            title: "Why Google Can Afford Free Android",
            date: "September 2009",
            source: "Competitive Intelligence",
            quality: "high",
            visual: '<i class="ph ph-robot"></i>',
            summary: "Google makes $0 from Android licensing but earns $6-12/device from search, maps, ads. Different business model.",
            content: `<h3>Google's Android Business Model - Q3 2009</h3>
                <p><strong>Google's Revenue Sources:</strong></p>
                <ul>
                    <li>Android OS licensing: $0 (completely free to OEMs)</li>
                    <li>Search revenue per device: $6-12/year (default search, homepage)</li>
                    <li>Google Play revenue: 30% of app/content sales (launching soon)</li>
                    <li>Maps/Location data: Advertising targeting value</li>
                    <li>Gmail/Calendar adoption: Ecosystem lock-in</li>
                    <li><strong>Total value per device: $15-20/year (recurring, not one-time)</strong></li>
                </ul>
                <p><strong>Why This Works for Google:</strong></p>
                <ul>
                    <li>Core business: Search advertising ($24B annual revenue)</li>
                    <li>Android = distribution channel for Google services</li>
                    <li>More Android phones = more search queries = more ad revenue</li>
                    <li>OS is loss leader for services monetization</li>
                </ul>
                <p><strong>Why Microsoft Can't Copy This:</strong></p>
                <ul>
                    <li>Bing search: $1B annual revenue (vs Google's $24B)</li>
                    <li>No mobile advertising platform at scale</li>
                    <li>Windows revenue model = software licensing, not services</li>
                    <li>Shareholders expect $1.2B licensing revenue to continue</li>
                </ul>
                <p><strong>The Structural Problem:</strong> Google gives Android away because they make money elsewhere. Microsoft has no "elsewhere"—mobile OS licensing IS the business. At $5/device, you're still charging for what Google gives free, but earning 75% less.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">You can't compete with free when competitor has different business model.</p>`,
            conflicts: []
        },

        "oem-economics-2009": {
            id: "oem-economics-2009",
            type: "Market Report",
            title: "OEM Device Economics & Platform Choice",
            date: "September 2009",
            source: "Market Intelligence",
            quality: "high",
            visual: '<i class="ph ph-buildings"></i>',
            summary: "OEMs care about: OS cost, carrier subsidies, app ecosystem, differentiation. Price is ONE factor, not only factor.",
            content: `<h3>What OEMs Actually Care About - Q3 2009</h3>
                <p><strong>Device Economics (per $200 smartphone):</strong></p>
                <ul>
                    <li>Hardware components: $120 (screen, processor, memory, camera)</li>
                    <li>OS licensing: $20 (Windows Mobile) vs $0 (Android)</li>
                    <li>Manufacturing: $25</li>
                    <li>Marketing co-op: $15</li>
                    <li>Carrier subsidy: -$150 (carriers pay this to lower consumer price)</li>
                    <li><strong>OEM profit margin: $20-25/device (10-12%)</strong></li>
                </ul>
                <p><strong>Platform Selection Criteria (Ranked by OEM Priority):</strong></p>
                <ul>
                    <li><strong>1. Carrier demand:</strong> Which OS do Verizon, AT&T, T-Mobile want to promote?</li>
                    <li><strong>2. App ecosystem:</strong> Will consumers buy a phone with 50K apps vs 200K apps?</li>
                    <li><strong>3. Differentiation:</strong> Can we customize the UI to stand out? (Android yes, WM limited)</li>
                    <li><strong>4. Developer support:</strong> Are developers building for this platform?</li>
                    <li><strong>5. OS cost:</strong> $20 licensing matters, but not determinative</li>
                    <li><strong>6. Platform quality:</strong> Is the OS actually good? (Android improving fast, WM6 aging)</li>
                </ul>
                <p><strong>Recent OEM Statements (Off-Record):</strong></p>
                <ul>
                    <li>HTC exec: "We'd pay $20 for Windows Mobile if it had 200K apps and carrier support. Problem isn't price."</li>
                    <li>Samsung product manager: "Android at $5 is still better than Android at $0—we're choosing Android for ecosystem, not cost savings."</li>
                    <li>Motorola VP: "Verizon wants 'Droid' campaign. That's our priority. Microsoft's pricing is irrelevant."</li>
                </ul>
                <p><strong>The Reality:</strong> Dropping to $5 saves OEMs $15/device. On $200 phone, that's 7.5% margin improvement. Nice, but not enough to overcome ecosystem gap, carrier preference, and app availability.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Price is not your core problem. Platform competitiveness is.</p>`,
            conflicts: []
        },

        "price-competition-precedents-2009": {
            id: "price-competition-precedents-2009",
            type: "Board Memo",
            title: "Historical: Competing on Price vs Free",
            date: "September 2009",
            source: "Strategy Team",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "IBM OS/2, Netscape, RealPlayer all tried price cuts vs free Windows/IE. All failed. Can't win price war vs $0.",
            content: `<h3>Case Studies: Price Competition Against Free</h3>
                <p><strong>Case 1: IBM OS/2 vs Windows (1990s)</strong></p>
                <ul>
                    <li>OS/2 technically superior to Windows 3.1/95</li>
                    <li>IBM dropped price from $200 → $50 to compete</li>
                    <li>Windows bundled free with PCs (OEM licensing)</li>
                    <li>Result: OS/2 market share peaked at 5%, discontinued 2006</li>
                    <li>Lesson: Can't charge $50 when competitor charges $0 (OEM bundling)</li>
                </ul>
                <p><strong>Case 2: Netscape Navigator vs Internet Explorer (1995-1998)</strong></p>
                <ul>
                    <li>Netscape: $49 retail → $0 (to compete with free IE)</li>
                    <li>Microsoft: IE bundled free with Windows</li>
                    <li>Netscape went free but too late: 90% → 10% share in 3 years</li>
                    <li>Result: Sold to AOL for $4.2B, discontinued as standalone browser</li>
                    <li>Lesson: Going free doesn't help if distribution advantage already lost</li>
                </ul>
                <p><strong>Case 3: RealPlayer vs Windows Media Player (1999-2004)</strong></p>
                <ul>
                    <li>RealPlayer charged $29.99 for Plus version</li>
                    <li>Windows Media Player: Free, bundled with Windows</li>
                    <li>Real Networks tried "freemium" model, dropped prices</li>
                    <li>Result: WMP became default, RealPlayer marginalized</li>
                    <li>Lesson: Platform bundling beats standalone pricing</li>
                </ul>
                <p><strong>Pattern Recognition:</strong></p>
                <ul>
                    <li>Compromising at middle price ($5) satisfies nobody</li>
                    <li>Free product with distribution advantage always wins</li>
                    <li>Late price matching doesn't recover lost ecosystem momentum</li>
                    <li>Revenue model shift requires 18-24 months—market moves faster</li>
                </ul>
                <p><strong>Windows Mobile Parallel:</strong> You're IBM OS/2, trying $5 pricing vs Android's free + Google distribution + carrier support. History says this fails.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Half-measures in pricing wars lose both revenue AND market share.</p>`,
            conflicts: []
        },

        "palm-webos-status-2009": {
            id: "palm-webos-status-2009",
            type: "Technical Spec",
            title: "Palm webOS - Technical Assessment",
            date: "September 2009",
            source: "Engineering Due Diligence",
            quality: "high",
            visual: "⚙️",
            summary: "webOS launched June 2009. Revolutionary UI (cards, gestures). But: buggy, limited apps, single device (Pre).",
            content: `<h3>webOS Platform Analysis - Q3 2009</h3>
                <p><strong>Technical Strengths:</strong></p>
                <ul>
                    <li>Card-based multitasking: Revolutionary UI paradigm (influenced iOS/Android later)</li>
                    <li>Gesture navigation: Swipe up to close, swipe between cards (no home button needed)</li>
                    <li>Synergy contacts: Unified inbox merging Gmail, Exchange, Facebook seamlessly</li>
                    <li>Web-based apps: HTML5/JavaScript framework (easier developer onboarding than Objective-C)</li>
                    <li>Just Type: Universal search that became industry standard</li>
                </ul>
                <p><strong>Technical Weaknesses:</strong></p>
                <ul>
                    <li>Immature codebase: 3 months old, many bugs still being fixed</li>
                    <li>Performance issues: Laggy scrolling, slow app launches on underpowered hardware</li>
                    <li>App ecosystem: ~1,000 apps vs iPhone's 85,000, Android's 20,000</li>
                    <li>Single device: Only Palm Pre on Sprint (no AT&T, Verizon, T-Mobile yet)</li>
                    <li>Hardware limitations: Proprietary Palm hardware, no OEM ecosystem</li>
                </ul>
                <p><strong>Press Reception:</strong></p>
                <ul>
                    <li>Engadget: "Best smartphone UI we've ever used" (June 2009)</li>
                    <li>WSJ: "webOS could be the future, but Palm may not survive to see it"</li>
                    <li>TechCrunch: "Great software, mediocre hardware, dying company"</li>
                </ul>
                <p><strong>Strategic Assessment:</strong> webOS has brilliant UX ideas that could leapfrog Windows Mobile. But it's 3 months old, bug-ridden, app-starved, and tied to failing Palm hardware. Would you get innovative platform or integration nightmare?</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Acquire promising tech from desperate company? Or build Windows Phone 7 from scratch?</p>`,
            conflicts: []
        },

        "palm-financial-distress-2009": {
            id: "palm-financial-distress-2009",
            type: "Financial Data",
            title: "Palm Inc. Financial Position",
            date: "September 2009",
            source: "Investment Banking Analysis",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "Palm burning $50M/quarter. 9 months cash left. Stock down 70% from Pre launch. Desperate seller at $1.2-2B.",
            content: `<h3>Palm Financial Situation - Q3 2009</h3>
                <p><strong>Current Financials (Q2 2009 Results):</strong></p>
                <ul>
                    <li>Market cap: $1.1B (down from $3.8B at Pre launch in June)</li>
                    <li>Quarterly revenue: $68M (down from $360M in 2007)</li>
                    <li>Quarterly loss: -$105M (burning cash faster than earning)</li>
                    <li>Cash reserves: $450M (down from $590M in Q1)</li>
                    <li>Burn rate: $50M/quarter</li>
                    <li><strong>Runway: ~9 months before insolvency</strong></li>
                </ul>
                <p><strong>Palm Pre Sales Reality:</strong></p>
                <ul>
                    <li>Launch month (June): 350K units (strong start)</li>
                    <li>July: 200K units (declining momentum)</li>
                    <li>August: 150K units (worrying drop-off)</li>
                    <li>Sprint exclusive limiting distribution (only 48M subscribers vs AT&T's 80M)</li>
                    <li>$199 price point competitive but not differentiated</li>
                </ul>
                <p><strong>Acquisition Valuation Analysis:</strong></p>
                <ul>
                    <li>Asset value: webOS platform (~$400M development cost invested)</li>
                    <li>Engineering team: 600 employees, 150 core webOS engineers</li>
                    <li>Patents: 1,500+ mobile patents (worth $300-500M)</li>
                    <li>Brand value: Minimal (Palm brand declining since 2003)</li>
                    <li><strong>Fair acquisition price: $1.2-1.8B</strong></li>
                    <li>Palm would likely accept $1.5B (30% premium = shareholders escape)</li>
                </ul>
                <p><strong>Historical Context:</strong> Palm's market cap was $53B in March 2000. Now $1.1B. Company knows it's dying. webOS was last-ditch effort—great product, but can't survive 9 more months to reach profitability.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Acquisition timing: Palm is desperate. Could buy platform for $1.5B vs spending $500M building WP7.</p>`,
            conflicts: []
        },

        "webos-vs-wp7-comparison-2009": {
            id: "webos-vs-wp7-comparison-2009",
            type: "Technical Spec",
            title: "webOS vs Windows Phone 7 Development",
            date: "September 2009",
            source: "Engineering Strategy",
            quality: "high",
            visual: "⚙️",
            summary: "webOS: Ready now, needs polish. WP7: 12 months away, ground-up rebuild. Speed vs control trade-off.",
            content: `<h3>Platform Development Comparison - September 2009</h3>
                <p><strong>Option A: Acquire webOS (Palm Platform)</strong></p>
                <ul>
                    <li>Timeline: Available immediately (3 months old)</li>
                    <li>Cost: $1.5B acquisition + $200M integration = $1.7B</li>
                    <li>Architecture: Linux-based, web-focused (HTML5/JavaScript apps)</li>
                    <li>Strengths: Modern UI already built, innovative UX patterns, developer-friendly</li>
                    <li>Weaknesses: Immature codebase, performance issues, small app ecosystem (1K apps)</li>
                    <li>Integration risk: HIGH - different architecture from Windows, team culture clash</li>
                    <li>Time to market: 6 months post-acquisition (first Microsoft-branded device Q2 2010)</li>
                </ul>
                <p><strong>Option B: Build Windows Phone 7 (In-House Development)</strong></p>
                <ul>
                    <li>Timeline: 12-15 months from greenlight (launch Q4 2010)</li>
                    <li>Cost: $500M (development, tooling, marketing)</li>
                    <li>Architecture: Windows CE kernel, .NET/Silverlight development</li>
                    <li>Strengths: Full Microsoft control, Xbox/Office integration, familiar dev tools</li>
                    <li>Weaknesses: Starting from zero, no proven UX, app ecosystem rebuild required</li>
                    <li>Integration risk: LOW - internal Microsoft team, aligned with Windows strategy</li>
                    <li>Time to market: 15 months minimum (launch Q4 2010 at earliest)</li>
                </ul>
                <p><strong>The Speed vs Control Trade-off:</strong></p>
                <ul>
                    <li>webOS: Ships 9 months faster but Linux architecture doesn't fit Microsoft ecosystem</li>
                    <li>WP7: Takes longer but integrates with Xbox Live, Office, Visual Studio seamlessly</li>
                    <li>webOS: Relies on Palm's 150 engineers (retention risk during acquisition)</li>
                    <li>WP7: 800+ Microsoft engineers fully committed and incentivized</li>
                </ul>
                <p><strong>Key Question:</strong> By Q2 2010 (webOS launch), Android will be 15%+ share, iPhone 20%+. Does 9-month speed advantage justify $1.2B more cost and architectural mismatch? Or is WP7's Microsoft DNA worth the wait?</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Buy speed with webOS? Or build properly with WP7?</p>`,
            conflicts: []
        },

        "hp-palm-precedent-2009": {
            id: "hp-palm-precedent-2009",
            type: "Board Memo",
            title: "Mobile Acquisition Risk Assessment",
            date: "September 2009",
            source: "M&A Strategy Team",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "Microsoft's track record: WebTV failed, Danger failed. Acquiring struggling mobile companies rarely works.",
            content: `<h3>Microsoft Mobile Acquisition History</h3>
                <p><strong>Case Study 1: WebTV Networks (1997)</strong></p>
                <ul>
                    <li>Acquisition: $425M for web-on-TV technology</li>
                    <li>Outcome: Product never gained traction, shut down 2013</li>
                    <li>Loss: ~$400M (near-total write-off)</li>
                    <li>Lesson: Acquiring innovative platform doesn't guarantee market acceptance</li>
                </ul>
                <p><strong>Case Study 2: Danger Inc. (2008) - RECENT</strong></p>
                <ul>
                    <li>Acquisition: $500M for Sidekick platform and team (February 2008)</li>
                    <li>Promise: Build "Project Pink" phones (KIN) using Danger expertise</li>
                    <li>Outcome: KIN phones launched May 2010, discontinued after 48 days</li>
                    <li>Loss: $500M acquisition + $300M development = $800M total loss</li>
                    <li>Lesson: Acquired mobile platforms fail when forced into Microsoft ecosystem</li>
                </ul>
                <p><strong>Industry Parallel: HP Will Buy Palm (Spoiler Alert)</strong></p>
                <ul>
                    <li>HP acquired Palm for $1.2B in July 2010 (this hasn't happened yet but analysts predict it)</li>
                    <li>HP's plan: Scale webOS across tablets, phones, PCs</li>
                    <li>Actual outcome: HP discontinued webOS devices after 1 year, wrote off entire acquisition</li>
                    <li>Why it failed: Integration paralysis, talent exodus, ecosystem gap too wide</li>
                </ul>
                <p><strong>Pattern Recognition Across Mobile Acquisitions:</strong></p>
                <ul>
                    <li>Innovative platform ≠ viable business when acquired</li>
                    <li>Engineering talent leaves during integration (Danger: 60% attrition)</li>
                    <li>Platform roadmap debates stall for 12-18 months (merge vs maintain separate?)</li>
                    <li>App developers don't follow acquired platforms (ecosystem doesn't transfer)</li>
                    <li>Carrier relationships reset (Palm's Sprint deal doesn't help Microsoft's carrier strategy)</li>
                </ul>
                <p><strong>Success Counter-Example: Google's Android (2005)</strong></p>
                <ul>
                    <li>Google bought Android Inc. for $50M when it had 0 users, 0 revenue</li>
                    <li>Why it worked: Acquired team BEFORE launch, integrated early, no legacy users to migrate</li>
                    <li>Palm in 2009: Established platform with users, expectations, existing architecture</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">Microsoft's mobile acquisition track record: 0 for 2. Is Palm the charm, or repeat mistake?</p>`,
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

        "wm-technical-debt-2010": {
            id: "wm-technical-debt-2010",
            type: "Technical Spec",
            title: "Windows Mobile Architecture: Technical Debt Assessment",
            date: "January 2010",
            source: "Engineering Architecture Team",
            quality: "high",
            visual: "⚙️",
            summary: "Windows Mobile built on Windows CE (1996). 14-year-old kernel not designed for touch, apps, or modern UI.",
            content: `<h3>Windows Mobile Platform Architecture - January 2010</h3>
                <p><strong>Core Architecture Problems:</strong></p>
                <ul>
                    <li>Kernel: Windows CE 5.0 (originally designed 1996 for PDAs)</li>
                    <li>Input model: Stylus-first (pixel-precise pointing, not finger-optimized)</li>
                    <li>Memory model: 32MB-64MB optimization (modern phones have 256MB+)</li>
                    <li>Graphics: GDI-based rendering (no GPU acceleration, can't do 60fps animations)</li>
                    <li>Multitasking: Desktop-style background processes (kills battery life)</li>
                </ul>
                <p><strong>Why Touch Feels Wrong on Windows Mobile:</strong></p>
                <ul>
                    <li>Hit targets designed for stylus (2-3mm precision) not fingers (8-10mm)</li>
                    <li>Scrolling: Click-drag model, not swipe-with-momentum</li>
                    <li>No multi-touch: Kernel doesn't support simultaneous touch points (pinch-zoom impossible)</li>
                    <li>UI thread blocking: Apps freeze entire screen during operations</li>
                </ul>
                <p><strong>Incremental Update Reality:</strong></p>
                <ul>
                    <li>Can add: Touch-friendly skin, larger buttons, kinetic scrolling library</li>
                    <li>Cannot add: GPU acceleration, multi-touch gestures, modern app sandboxing</li>
                    <li>Result: "Touch-washed" interface that feels sluggish vs iOS/Android native touch</li>
                    <li>Timeline: 6 months for cosmetic updates, but foundation remains 1996 architecture</li>
                </ul>
                <p><strong>Engineering Team Assessment:</strong> "We can make Windows Mobile 6.5 look more modern with UI polish. But it will never FEEL modern. The kernel wasn't designed for touch. Every interaction will have 50-100ms lag vs iOS. Users will notice."</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Lipstick on a pig: Looks better in screenshots, feels worse in hand.</p>`,
            conflicts: []
        },

        "incremental-vs-rebuild-cost-2010": {
            id: "incremental-vs-rebuild-cost-2010",
            type: "Financial Data",
            title: "Platform Development: Cost & Timeline Comparison",
            date: "January 2010",
            source: "Program Management Office",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "Incremental: $50M, 6 months. Ground-up: $500M, 12 months. But long-term viability differs drastically.",
            content: `<h3>Platform Strategy Cost Analysis - January 2010</h3>
                <p><strong>Option A: Incremental Updates (Windows Mobile 6.5 → 6.9)</strong></p>
                <ul>
                    <li>Development cost: $50M</li>
                    <li>Timeline: 6 months to launch (Q3 2010)</li>
                    <li>Scope: Touch-friendly UI skin, larger buttons, kinetic scrolling, better browser</li>
                    <li>Backward compatibility: 100% (all existing apps work)</li>
                    <li>Developer migration: Not required (keep existing tools)</li>
                    <li>Market gap: Only 6 months without new platform</li>
                    <li><strong>Platform lifespan: 18-24 months before obsolete</strong></li>
                </ul>
                <p><strong>Option B: Ground-Up Rebuild (Windows Phone 7)</strong></p>
                <ul>
                    <li>Development cost: $500M (engineering + developer tools + marketing)</li>
                    <li>Timeline: 12 months to launch (Q4 2010)</li>
                    <li>Scope: New kernel, Metro UI, touch-native, app sandboxing, marketplace</li>
                    <li>Backward compatibility: 0% (clean break, all apps need rewrite)</li>
                    <li>Developer migration: Required (new SDK, Silverlight/XNA tools)</li>
                    <li>Market gap: 12 months without competitive platform</li>
                    <li><strong>Platform lifespan: 5-7 years competitive architecture</strong></li>
                </ul>
                <p><strong>5-Year Total Cost of Ownership:</strong></p>
                <ul>
                    <li>Incremental path: $50M (2010) + $100M (2011 refresh) + $150M (2012 catch-up attempt) = $300M, then forced rebuild anyway</li>
                    <li>Ground-up path: $500M (2010), then incremental updates $50M/year = $700M total</li>
                    <li><strong>Net: Incremental appears cheaper short-term, costs MORE long-term due to eventual forced rebuild</strong></li>
                </ul>
                <p><strong>Market Share Projections (Gartner, Jan 2010):</strong></p>
                <ul>
                    <li>Incremental path: 29% (2010) → 22% (2011) → 14% (2012) → 8% (2013) = "managed decline"</li>
                    <li>Ground-up path: 29% (2010) → 24% (2011) → 21% (2012) → 18% (2013) = "sustainable third"</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">Pay $50M to delay death 18 months? Or pay $500M to compete for 5+ years?</p>`,
            conflicts: []
        },

        "symbian-blackberry-incremental-2010": {
            id: "symbian-blackberry-incremental-2010",
            type: "Competitor Intel",
            title: "Case Studies: Incremental Updates vs Ground-Up Rebuilds",
            date: "January 2010",
            source: "Competitive Intelligence",
            quality: "high",
            visual: '<i class="ph ph-device-mobile"></i>',
            summary: "Symbian, BlackBerry chose incremental updates. Both dying. iOS, Android did ground-up builds. Both winning.",
            content: `<h3>Mobile Platform Strategy Outcomes - Q4 2009</h3>
                <p><strong>Case Study 1: Symbian (Nokia) - Incremental Strategy</strong></p>
                <ul>
                    <li>2007 decision: Keep improving Symbian S60 vs rebuild for touch</li>
                    <li>Rationale: "Symbian has 50% market share. Too risky to abandon installed base."</li>
                    <li>Approach: Added touch support to Symbian^3, better browser, UI polish</li>
                    <li>Result (2010): Market share 37% → 28% (falling fast)</li>
                    <li>Problem: Touch felt bolted-on. Apps still used old S60 paradigms. Laggy, inconsistent.</li>
                    <li>Outcome: Nokia eventually abandoned Symbian (2011), switched to Windows Phone</li>
                    <li><strong>Lesson: Incremental updates delayed inevitable but couldn't save platform</strong></li>
                </ul>
                <p><strong>Case Study 2: BlackBerry (RIM) - Incremental Strategy</strong></p>
                <ul>
                    <li>2008 decision: Add touch to BlackBerry OS vs ground-up rebuild</li>
                    <li>Storm (2008): First touch BlackBerry - SurePress clicking screen</li>
                    <li>Approach: Keyboard-first OS with touch bolted on top</li>
                    <li>Result: Reviews terrible. "Worst touch experience in smartphones." Storm returned at 40% rate.</li>
                    <li>Market reality: 20% share (2009) → 15% (2010) → 11% (2011) = death spiral</li>
                    <li><strong>Lesson: Touch is not a feature you add. It's an architecture.</strong></li>
                </ul>
                <p><strong>Case Study 3: Apple (iOS) - Ground-Up Build</strong></p>
                <ul>
                    <li>2005-2007: Built iPhone OS from scratch (Unix kernel, touch-native, GPU-accelerated)</li>
                    <li>Cost: Estimated $150M development + 2.5 years</li>
                    <li>Risk: No prior mobile OS experience, no backwards compatibility</li>
                    <li>Result: 2% (2007) → 8% (2008) → 16% (2009) → 18% (2010) = sustained growth</li>
                    <li><strong>Lesson: Clean-sheet design wins in platform shifts</strong></li>
                </ul>
                <p><strong>Case Study 4: Google (Android) - Ground-Up Build</strong></p>
                <ul>
                    <li>2005-2008: Built Android from scratch (Linux kernel, Java apps, touch-first)</li>
                    <li>Cost: Estimated $300M + 3 years</li>
                    <li>Result: 0.5% (2008) → 2.5% (2009) → 24% (2010) = fastest growth ever</li>
                    <li><strong>Lesson: Platform architecture matters more than time-to-market</strong></li>
                </ul>
                <p><strong>Pattern Recognition:</strong> Companies that chose incremental updates (Symbian, BlackBerry, Palm OS) all failed. Companies that did ground-up rebuilds (iOS, Android) won. The incremental path looks safer but guarantees slow death.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">History clear: Half-measures don't work in platform transitions.</p>`,
            conflicts: []
        },

        "engineering-morale-2010": {
            id: "engineering-morale-2010",
            type: "Board Memo",
            title: "Windows Mobile Engineering Team Assessment",
            date: "January 2010",
            source: "VP Engineering",
            quality: "high",
            visual: '<i class="ph ph-buildings"></i>',
            summary: "Engineering team split: 80% want ground-up rebuild. 20% defend incremental. Morale at risk if stuck on legacy.",
            content: `<h3>Engineering Organization Health Assessment - January 2010</h3>
                <p><strong>Team Sentiment Survey (Anonymous, Dec 2009):</strong></p>
                <ul>
                    <li>80% of engineers: "We need ground-up rebuild to compete"</li>
                    <li>15% of engineers: "Incremental updates can work with effort"</li>
                    <li>5% of engineers: "No opinion / leaving regardless"</li>
                    <li>Key quote: "I didn't join Microsoft to put lipstick on Windows CE forever"</li>
                </ul>
                <p><strong>Talent Retention Risk:</strong></p>
                <ul>
                    <li>Senior engineers (5+ years): 60% say they'll leave if forced to do incremental updates</li>
                    <li>"We know how to build modern platforms. Don't make us polish a 1996 kernel."</li>
                    <li>Attrition to Google Android team: 12 engineers in Q4 2009 (up from 3 in Q3)</li>
                    <li>Recruiting challenges: "Top candidates don't want to work on legacy mobile OS"</li>
                </ul>
                <p><strong>Organizational Split:</strong></p>
                <ul>
                    <li>Windows Mobile 6.5 team (200 engineers): Defensive of existing codebase, prefer incremental</li>
                    <li>Newer hires (100 engineers): Eager for ground-up rebuild, frustrated by legacy constraints</li>
                    <li>Tension: "Old guard protecting jobs vs new guard wanting to innovate"</li>
                </ul>
                <p><strong>Leadership Perspective (Terry Myerson, VP Mobile):</strong></p>
                <ul>
                    <li>"If we choose incremental path, we'll lose our best engineers to Apple and Google."</li>
                    <li>"The team knows Windows CE can't compete. Asking them to polish it is demoralizing."</li>
                    <li>"Ground-up rebuild energizes the organization. Incremental updates drain morale."</li>
                </ul>
                <p><strong>HR Warning:</strong> Exit interviews show: Engineers leave Microsoft Mobile not for money, but because they want to work on modern platforms. Incremental strategy guarantees talent exodus to competitors building iOS/Android apps.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Choose incremental updates = lose your best engineers. They want to build the future, not maintain the past.</p>`,
            conflicts: []
        },

        "android-adoption-analysis-2010": {
            id: "android-adoption-analysis-2010",
            type: "Board Memo",
            title: "Strategic Analysis: Adopting Android vs Building WP7",
            date: "January 2010",
            source: "Strategy Team",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "Android is free, growing 16X annually, has 20K apps. Why spend $500M competing when we could embrace it?",
            content: `<h3>The Android Adoption Case - January 2010</h3>
                <p><strong>Android's Current Position:</strong></p>
                <ul>
                    <li>Market share: 0.5% (Q1 2009) → 24% (Q4 2009) = 48X growth in 12 months</li>
                    <li>OEM adoption: HTC, Samsung, Motorola, LG all committed</li>
                    <li>App ecosystem: 20,000 apps (vs 85,000 iOS, 18,000 Windows Mobile)</li>
                    <li>Carrier support: Verizon's "Droid Does" campaign ($100M spend)</li>
                    <li>Cost to OEMs: $0 licensing (vs Microsoft's $15-25)</li>
                </ul>
                <p><strong>Case FOR Adopting Android:</strong></p>
                <ul>
                    <li>Immediate modern OS—no 12-month development gap</li>
                    <li>$500M saved on Windows Phone 7 development</li>
                    <li>Join winning ecosystem instead of competing against it</li>
                    <li>Microsoft can focus on services: Office Mobile, Xbox Live, Bing integration</li>
                    <li>Samsung model: Build hardware, differentiate with software layer (TouchWiz)</li>
                    <li>Google doesn't own hardware—room for Microsoft to compete as premium Android OEM</li>
                </ul>
                <p><strong>Case AGAINST Adopting Android:</strong></p>
                <ul>
                    <li>Platform control lost—Google controls Android roadmap, not Microsoft</li>
                    <li>Compete with 30+ OEMs (Samsung, HTC, Motorola) in commodity hardware race</li>
                    <li>Microsoft identity crisis: "We're a platform company. Android admission = strategic surrender"</li>
                    <li>Google services dominate: Gmail, Maps, Search pre-installed. How does Bing compete?</li>
                    <li>Revenue model unclear: Hardware margins 10-15% vs OS licensing 95% margins</li>
                </ul>
                <p><strong>The Samsung Parallel:</strong> Samsung embraced Android, became largest smartphone maker by 2011. But profits went to Apple (hardware) and Google (services). Samsung made commodity margins despite leading share.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Question: Is Microsoft a platform company or services company? Android adoption forces you to choose.</p>`,
            conflicts: []
        },

        "google-android-control-2010": {
            id: "google-android-control-2010",
            type: "Competitor Intel",
            title: "Google's Control Over Android Ecosystem",
            date: "January 2010",
            source: "Legal & Strategy Analysis",
            quality: "high",
            visual: '<i class="ph ph-robot"></i>',
            summary: "Android is 'open source' but Google controls: Play Store, APIs, certification, search defaults. Not as open as claimed.",
            content: `<h3>Android's Power Structure - January 2010</h3>
                <p><strong>The "Open Source" Myth:</strong></p>
                <ul>
                    <li>Android OS: Open source (Apache License) - anyone can fork and modify</li>
                    <li>Google Mobile Services (GMS): CLOSED and proprietary</li>
                    <li>OEMs must choose: Pure Android (no Play Store, Maps, Gmail) or GMS bundle (Google's terms)</li>
                </ul>
                <p><strong>What Google Controls (GMS Requirements):</strong></p>
                <ul>
                    <li>Google Play Store: Must pre-install. No alternative app stores allowed prominently.</li>
                    <li>Search default: Google Search must be default (phone-wide, Chrome browser)</li>
                    <li>App placement: Gmail, Maps, YouTube must be on home screen</li>
                    <li>Revenue share: Google keeps 30% of Play Store sales</li>
                    <li>Certification: Must pass "Android compatibility" tests—Google defines standards</li>
                    <li>Updates: Google pushes Android updates OEMs must support</li>
                </ul>
                <p><strong>Microsoft-Specific Risks:</strong></p>
                <ul>
                    <li>Bing as default search: Forbidden by GMS terms. Google Search mandatory.</li>
                    <li>Office Mobile monetization: Competes with Google Docs (also pre-installed)</li>
                    <li>OneDrive vs Google Drive: Google Drive gets system integration advantages</li>
                    <li>Xbox Live integration: Competes with Google Play Games (preferred by Google)</li>
                    <li>Microsoft launcher: Can build, but Gmail/Maps/YouTube mandated on home screen</li>
                </ul>
                <p><strong>Amazon's Android Fork (Fire OS) Case Study:</strong></p>
                <ul>
                    <li>Amazon forked Android 2.3 for Kindle Fire (2011)</li>
                    <li>No Google services—Amazon App Store, Amazon Search, Amazon ecosystem</li>
                    <li>Result: App developers ignore it. Users complain "no real Android apps"</li>
                    <li>Fire OS relegated to budget tablets—no phone presence</li>
                </ul>
                <p><strong>Strategic Reality:</strong> Microsoft can adopt Android but cannot control it. Every Microsoft service must fight against pre-installed Google equivalents. You become tenant in Google's OS, not platform owner.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Android isn't free. The price is ceding platform control to Google.</p>`,
            conflicts: []
        },

        "microsoft-services-strategy-2010": {
            id: "microsoft-services-strategy-2010",
            type: "Financial Data",
            title: "Platform vs Services: Revenue Model Comparison",
            date: "January 2010",
            source: "CFO Strategic Analysis",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "Windows Phone licensing: 95% margins. Android OEM hardware: 12% margins. Services (Office Mobile): 60% margins, but ecosystem-dependent.",
            content: `<h3>Business Model Economics - Q4 2009</h3>
                <p><strong>Current Windows Mobile Model:</strong></p>
                <ul>
                    <li>Revenue: $1.2B/year from licensing</li>
                    <li>Cost of goods: $60M (development, support)</li>
                    <li>Operating margin: 95%</li>
                    <li>Profit: $1.14B/year</li>
                    <li>Market share: 29% (declining)</li>
                </ul>
                <p><strong>Scenario A: Build Windows Phone 7 (Platform Strategy)</strong></p>
                <ul>
                    <li>Development cost: $500M (year 1), then $100M/year maintenance</li>
                    <li>Revenue model: OS licensing ($15-25/device) OR services (Office, Xbox, ads)</li>
                    <li>Projected 5-year revenue: $2-3B (OS licensing) + $500M (services) = $2.5-3.5B</li>
                    <li>Operating margin: 85-90% (high-margin software)</li>
                    <li>Strategic benefit: Platform control, differentiation, ecosystem ownership</li>
                </ul>
                <p><strong>Scenario B: Adopt Android (Hardware OEM Strategy)</strong></p>
                <ul>
                    <li>Development cost: $200M (Android customization, Microsoft services layer)</li>
                    <li>Revenue model: Hardware sales (phones/tablets)</li>
                    <li>Smartphone margins: 10-15% (commodity hardware competition)</li>
                    <li>Projected 5-year revenue: $3-5B (hardware sales, optimistic)</li>
                    <li>Operating margin: 12% (competing with Samsung, HTC, Motorola)</li>
                    <li>Services revenue: $300M (Office Mobile, Xbox, Bing on Android)</li>
                    <li>Strategic risk: No platform control, commodity trap, Google dependency</li>
                </ul>
                <p><strong>The Services Play Reality:</strong></p>
                <ul>
                    <li>Office Mobile on Android: Competes with Google Docs (pre-installed, free)</li>
                    <li>Bing on Android: Must fight Google Search (default, deeply integrated)</li>
                    <li>OneDrive on Android: Competes with Google Drive (system-level integration)</li>
                    <li>Market reality: 85% of Android users stick with Google services</li>
                </ul>
                <p><strong>Apple's Counter-Example:</strong> Apple's 2009 iPhone business: $15B revenue, 40% margins. They own platform AND hardware. Microsoft on Android = hardware without platform control.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Platform ownership = 90% margins. Android OEM = 12% margins. Choose wisely.</p>`,
            conflicts: []
        },

        "ballmer-platform-ideology-2010": {
            id: "ballmer-platform-ideology-2010",
            type: "Board Memo",
            title: "Microsoft's Platform DNA vs Services Pivot",
            date: "January 2010",
            source: "CEO Office - Steve Ballmer",
            quality: "high",
            visual: '<i class="ph ph-buildings"></i>',
            summary: "Ballmer: 'Microsoft is a platform company. We own Windows, Office, Azure. Android adoption means strategic surrender.'",
            content: `<h3>CEO Perspective: Platform vs Services Strategy</h3>
                <p><strong>Steve Ballmer's Philosophy (Internal Memo, Jan 2010):</strong></p>
                <ul>
                    <li>"Microsoft's competitive advantage: We build platforms others build on."</li>
                    <li>"Windows dominates PCs because we OWN the platform. OEMs build on us."</li>
                    <li>"Office dominates productivity because we OWN the platform. Apps integrate with us."</li>
                    <li>"Azure will dominate cloud because we OWN the platform. Enterprises trust us."</li>
                    <li>"Mobile must follow same model: Own platform, OEMs/developers build on us."</li>
                </ul>
                <p><strong>The Android Question Ballmer Faces:</strong></p>
                <ul>
                    <li>Advisor argument: "Android is winning. We should embrace it, compete on services."</li>
                    <li>Ballmer response: "Services on someone else's platform = tenant, not owner."</li>
                    <li>Historical precedent: "IBM outsourced OS to us (DOS/Windows). We became worth $300B. IBM became irrelevant in PCs."</li>
                    <li>Ballmer fear: "If we adopt Android, Google becomes 'us in the 1990s' and we become 'IBM'."</li>
                </ul>
                <p><strong>Board Debate (December 2009 Board Meeting):</strong></p>
                <ul>
                    <li>CFO: "Android saves $500M. Margins better in services than dying mobile OS."</li>
                    <li>Ballmer: "We don't optimize for next quarter. We optimize for next decade. Platforms compound value."</li>
                    <li>Board member: "What if Windows Phone fails? Isn't Android the safe fallback?"</li>
                    <li>Ballmer: "If we bet on Android now, Windows Phone becomes self-fulfilling failure. Team needs commitment."</li>
                </ul>
                <p><strong>Cultural Identity Crisis:</strong></p>
                <ul>
                    <li>Microsoft = platform company for 35 years (DOS, Windows, Office, .NET, Azure)</li>
                    <li>Android adoption = admission: "We can't compete with Google in platforms"</li>
                    <li>Engineering morale: Half the team joined Microsoft to build platforms, not hardware</li>
                    <li>Wall Street perception: "Microsoft admits defeat in mobile, becomes device maker"</li>
                </ul>
                <p><strong>The Satya Nadella Counter-View (Not Yet CEO):</strong></p>
                <ul>
                    <li>Nadella (Server & Tools President, 2010): "Future is cloud + AI + services across ALL devices."</li>
                    <li>"Office should run on iOS, Android, Windows—best experience wins, not platform lock-in."</li>
                    <li>"Mobile-first, cloud-first means Microsoft services everywhere, not Windows Phone everywhere."</li>
                    <li>This view won't prevail until Nadella becomes CEO (2014).</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">Ballmer in 2010: Platform ideology wins. Android adoption = strategic surrender. Not happening on his watch.</p>`,
            conflicts: []
        },

        "app-economics-2011": {
            id: "app-economics-2011",
            type: "Financial Data",
            title: "App Developer Economics",
            date: "July 2011",
            source: "Developer Survey",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
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

        "enterprise-consumer-split-2011": {
            id: "enterprise-consumer-split-2011",
            type: "Market Report",
            title: "Enterprise vs Consumer: Different App Needs",
            date: "July 2011",
            source: "Market Intelligence",
            quality: "high",
            visual: '<i class="ph ph-buildings"></i>',
            summary: "Enterprise needs: 50 core apps (Office, email, CRM, VPN). Consumer needs: 500+ apps (social, games, lifestyle). Different strategies possible.",
            content: `<h3>Market Segmentation Analysis - Q2 2011</h3>
                <p><strong>Enterprise App Requirements (Fortune 500 buyers):</strong></p>
                <ul>
                    <li>Productivity: Office Mobile, SharePoint, Lync, OneNote (Microsoft owns)</li>
                    <li>Email/Calendar: Exchange ActiveSync (Microsoft owns)</li>
                    <li>Business apps: Salesforce, SAP, Oracle, Workday, Concur, Box (~50 total)</li>
                    <li>Security: VPN, encryption, remote wipe (Microsoft owns)</li>
                    <li>App count needed: ~50-100 enterprise apps</li>
                    <li>Current Windows Phone coverage: 90% of top 50 enterprise apps</li>
                </ul>
                <p><strong>Consumer App Requirements (Individual buyers):</strong></p>
                <ul>
                    <li>Social: Facebook, Instagram, Snapchat, Twitter, WhatsApp</li>
                    <li>Entertainment: YouTube, Netflix, Spotify, gaming (top 200 games)</li>
                    <li>Lifestyle: Uber, Airbnb, banking apps, fitness trackers</li>
                    <li>App count needed: 500+ top apps for feature parity</li>
                    <li>Current Windows Phone coverage: 40% of top 500 consumer apps</li>
                </ul>
                <p><strong>Strategic Choice Reality:</strong> You can win enterprise with 100 apps. You need 500+ to compete in consumer. Different investment levels, different outcomes.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Question: Fight 500-app consumer war or dominate 100-app enterprise niche?</p>`,
            conflicts: []
        },

        "nokia-decline-2011": {
            id: "nokia-decline-2011",
            type: "Competitor Intel",
            title: "Nokia's Burning Platform - July 2011",
            date: "July 2011",
            source: "Competitive Intelligence",
            quality: "high",
            visual: '<i class="ph ph-device-mobile"></i>',
            summary: "Nokia collapsing. 29% → 16% in 6 months. Symbian dying. Desperate for partnership. But are they savable?",
            content: `<h3>Nokia Strategic Assessment - Q2 2011</h3>
                <p><strong>Nokia's Decline (2010-2011):</strong></p>
                <ul>
                    <li>Market share: 38% (Q1 2010) → 29% (Q1 2011) → 16% (Q2 2011)</li>
                    <li>Losing 5-8 points per quarter to Android and iPhone</li>
                    <li>Symbian OS obsolete—reviews call it "2005 phone in 2011"</li>
                    <li>Stock price: €40 (2007) → €5 (2011) = 87% collapse</li>
                </ul>
                <p><strong>Stephen Elop's "Burning Platform" Memo (Feb 2011):</strong></p>
                <ul>
                    <li>Former Microsoft exec hired as Nokia CEO</li>
                    <li>Memo leaked: "We are standing on a burning platform. Our platform is obsolete."</li>
                    <li>Announced: Nokia abandoning Symbian, going "all-in" on Windows Phone</li>
                    <li>Partnership terms: Microsoft pays Nokia $1B+ annually for exclusivity</li>
                </ul>
                <p><strong>The Partnership Opportunity:</strong></p>
                <ul>
                    <li>Nokia's strengths: Hardware design, global distribution, brand (still #2 worldwide)</li>
                    <li>Nokia's weakness: Software platform dying, losing 5% share quarterly</li>
                    <li>Combined share (July 2011): Windows Phone 7% + Nokia 16% = 23% potential</li>
                    <li>Cost: $750M-$1B per year in subsidies to Nokia</li>
                </ul>
                <p><strong>Risk Assessment:</strong> Nokia is falling off a cliff. Can Microsoft partnership save them? Or will you tie your fate to sinking ship?</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Rescue Nokia's 16% share? Or let them die and compete with Samsung/HTC alone?</p>`,
            conflicts: []
        },

        "blackberry-enterprise-lesson-2011": {
            id: "blackberry-enterprise-lesson-2011",
            type: "Board Memo",
            title: "BlackBerry's Enterprise-Only Strategy Outcome",
            date: "July 2011",
            source: "Strategy Team",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "BlackBerry doubled down on enterprise 2009-2011. Result: Consumer market chose iPhone, then enterprises followed. Enterprise-only = slow death.",
            content: `<h3>Case Study: BlackBerry's Enterprise Focus (2009-2011)</h3>
                <p><strong>BlackBerry's 2009 Strategy Decision:</strong></p>
                <ul>
                    <li>Faced iPhone threat, chose to defend enterprise strength</li>
                    <li>Marketing: "BlackBerry for business, iPhone for consumers"</li>
                    <li>Investment: Enterprise features (BES, security) over consumer apps</li>
                    <li>Reasoning: "CIOs control purchasing. Consumers don't matter."</li>
                </ul>
                <p><strong>2009-2011 Results:</strong></p>
                <ul>
                    <li>Consumer market: Completely lost to iPhone/Android</li>
                    <li>Enterprise market: BYOD (Bring Your Own Device) policies emerged</li>
                    <li>Executives demanded iPhones: "Support my iPhone or I'll leave"</li>
                    <li>IT departments capitulated: "Easier to support iPhone than fight executives"</li>
                    <li>BlackBerry share: 20% (2009) → 11% (2011) = 45% decline despite enterprise focus</li>
                </ul>
                <p><strong>The BYOD Revolution:</strong></p>
                <ul>
                    <li>Consumerization of IT: Personal devices infiltrate enterprise</li>
                    <li>Executive preference > IT policy: "My iPhone or I quit"</li>
                    <li>iPhone's enterprise features caught up: Exchange support (2009), MDM (2010), security (2011)</li>
                    <li>Result: Consumer platform preference drove enterprise adoption, not vice versa</li>
                </ul>
                <p><strong>Microsoft Parallel Risk:</strong> Windows Phone could win IT departments but lose if executives/employees demand iPhones. Enterprise-only means accepting BYOD defeat—same fate as BlackBerry.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Lesson: Consumer preference drives enterprise in mobile age. Enterprise-only strategy failed BlackBerry, would fail Microsoft too.</p>`,
            conflicts: []
        },

        "platform-viability-2013": {
            id: "platform-viability-2013",
            type: "Market Report",
            title: "Can #3 Platform Survive?",
            date: "January 2013",
            source: "Strategy Consultants",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
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

        "enterprise-niche-economics-2013": {
            id: "enterprise-niche-economics-2013",
            type: "Financial Data",
            title: "Enterprise Niche Strategy Economics",
            date: "January 2013",
            source: "CFO Financial Modeling",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "12% enterprise-only share = $300M profit/year. Lower costs, higher margins. But ceiling is 12%—no growth beyond.",
            content: `<h3>Enterprise-Only Financial Model - Q1 2013</h3>
                <p><strong>Current Windows Phone (18% mixed consumer/enterprise):</strong></p>
                <ul>
                    <li>Market share: 18% (10% consumer, 8% enterprise)</li>
                    <li>Revenue: $500M/year (device licensing + services)</li>
                    <li>Costs: $650M/year (platform dev + marketing + consumer app fund)</li>
                    <li>Net: -$150M/year (break-even path by 2014)</li>
                </ul>
                <p><strong>Scenario: Pure Enterprise Focus (12% enterprise-only):</strong></p>
                <ul>
                    <li>Target: 12% enterprise share (give up 10% consumer entirely)</li>
                    <li>Revenue: $450M/year (higher enterprise device prices + Office/Azure attach)</li>
                    <li>Costs: $150M/year (no consumer marketing, no app fund, minimal platform updates)</li>
                    <li>Net: +$300M/year PROFIT (immediate profitability)</li>
                    <li>Margin: 67% (vs current -30%)</li>
                </ul>
                <p><strong>Why Enterprise is More Profitable:</strong></p>
                <ul>
                    <li>No app race: Enterprise needs 50 apps, consumer needs 500+. Stop funding consumer app ports.</li>
                    <li>No carrier marketing: Enterprise sells through IT procurement, not retail stores.</li>
                    <li>Higher ASP: Enterprise devices $600 vs consumer $300 (corporate buyers less price-sensitive)</li>
                    <li>Service attach: 85% enterprise buyers add Office 365, Azure, Exchange (consumer: 12%)</li>
                </ul>
                <p><strong>The Trade-Off:</strong></p>
                <ul>
                    <li>Growth ceiling: Enterprise smartphone market is 15% total (vs 100% for consumer+enterprise)</li>
                    <li>Max share: 12% (80% of 15% enterprise market)</li>
                    <li>Consumer developers leave: Instagram, Snapchat, games all abandon platform</li>
                    <li>But: Don't need them. Enterprise doesn't care about Snapchat.</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">Accept 12% ceiling, gain $300M/year profit. Or chase 25%, risk everything?</p>`,
            conflicts: []
        },

        "blackberry-collapse-2013": {
            id: "blackberry-collapse-2013",
            type: "Competitor Intel",
            title: "BlackBerry's Death Spiral - January 2013",
            date: "January 2013",
            source: "M&A Analysis Team",
            quality: "high",
            visual: '<i class="ph ph-device-mobile"></i>',
            summary: "BlackBerry at 7% share (down from 20% in 2009). Lost $1.6B in 2012. BB10 launch failed. Company dying. Acquisition price: $5B.",
            content: `<h3>BlackBerry Strategic Assessment - Q4 2012</h3>
                <p><strong>BlackBerry's Collapse (2009-2013):</strong></p>
                <ul>
                    <li>Market share: 20% (2009) → 11% (2011) → 7% (2013) = 13-point death spiral</li>
                    <li>Revenue: $20B (2011) → $11B (2013) = 45% decline</li>
                    <li>Net income: +$3.4B profit (2011) → -$1.6B loss (2012) = $5B swing</li>
                    <li>Stock price: $70 (2011) → $13 (2013) = 81% collapse</li>
                </ul>
                <p><strong>BB10 Launch (January 2013) - Already Failing:</strong></p>
                <ul>
                    <li>BlackBerry's Hail Mary: New BB10 OS, launched January 30, 2013</li>
                    <li>Z10 flagship: Touch-only device (copying iPhone 5 years too late)</li>
                    <li>Reviews: "Too little, too late. Apps gap catastrophic (70K vs iOS 775K)"</li>
                    <li>Sales: Projected 1M units/month, actual: 2.7M total Q1 2013 = massive miss</li>
                    <li>Developer support: Dead on arrival. Instagram, Snapchat, major apps refused to build BB10 versions</li>
                </ul>
                <p><strong>Why BlackBerry is Dying:</strong></p>
                <ul>
                    <li>BYOD killed enterprise fortress: Executives demanded iPhones, IT capitulated</li>
                    <li>App gap: 70K BlackBerry apps vs 775K iOS, 800K Android</li>
                    <li>Hardware commoditized: Can't compete with Samsung scale or Apple integration</li>
                    <li>Brand toxic: "BlackBerry = your dad's phone" among consumers</li>
                </ul>
                <p><strong>Acquisition Opportunity (Hypothetical):</strong></p>
                <ul>
                    <li>Market cap: $7B (January 2013), acquisition premium = $5-6B total</li>
                    <li>What you'd get: 7% dying market share, 70K apps, enterprise patents, BBM messaging (90M users)</li>
                    <li>Combined share: 18% (Windows Phone) + 7% (BlackBerry) = 25% on paper</li>
                    <li>Reality: Both platforms bleeding users. 25% becomes 15% within 12 months as users defect during integration</li>
                </ul>
                <p><strong>Integration Nightmare Risks:</strong></p>
                <ul>
                    <li>Two dying platforms: Combining losers doesn't create winner</li>
                    <li>OS conflict: BB10 vs Windows Phone—which survives? Developer confusion.</li>
                    <li>Employee exodus: BlackBerry engineers demoralized, Microsoft engineers resentful</li>
                    <li>Customer confusion: "Is BlackBerry dead? Is Windows Phone dead? Should I just buy iPhone?"</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">Acquiring BlackBerry: Rescue sinking ship or tie two anchors together?</p>`,
            conflicts: []
        },

        "third-platform-precedents-2013": {
            id: "third-platform-precedents-2013",
            type: "Board Memo",
            title: "Historical Precedents: Third Platform Survival",
            date: "January 2013",
            source: "Strategy Consultants",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "Mac survived 30+ years at 7-10% by accepting niche. BeOS tried to survive at 0.1%, failed. Threshold matters.",
            content: `<h3>Third Platform Case Studies - Computing History</h3>
                <p><strong>Success Case: Apple Mac (1984-present)</strong></p>
                <ul>
                    <li>PC market (1990s-2000s): Windows 90%, Mac 7%, Linux 3%</li>
                    <li>Mac strategy: Accept #2 position, focus on quality over market share</li>
                    <li>Survived 30+ years at 7-10% desktop share</li>
                    <li>Why it worked: Above 5% critical threshold, premium pricing, loyal users, developers stayed</li>
                    <li>Profitability: Mac division profitable every year 1998-2013</li>
                </ul>
                <p><strong>Failure Case: BeOS (1995-2001)</strong></p>
                <ul>
                    <li>Modern OS ahead of its time—multimedia, multithreading, 64-bit</li>
                    <li>Market share: 0.1% (never reached critical threshold)</li>
                    <li>Died 2001: Acquired by Palm, technology abandoned</li>
                    <li>Why it failed: Below 1% threshold, no apps, no OEM support, developer exodus</li>
                </ul>
                <p><strong>Partial Success: Linux Desktop (1991-present)</strong></p>
                <ul>
                    <li>Market share: 2-3% desktop (but 60%+ servers)</li>
                    <li>Survives via open source community and server dominance</li>
                    <li>Desktop Linux never became mainstream but never died</li>
                    <li>Why it persists: Free, developer-focused, server revenue subsidizes desktop</li>
                </ul>
                <p><strong>The Critical Thresholds (Platform Survival Analysis):</strong></p>
                <ul>
                    <li>Above 15%: Strong third platform, full app support, sustainable</li>
                    <li>12-15%: Viable third platform, most apps present, requires focus</li>
                    <li>8-12%: Struggling third platform, app gaps growing, death spiral risk</li>
                    <li>Below 8%: Death spiral zone, developers leaving, users switching</li>
                </ul>
                <p><strong>Windows Phone Position (January 2013): 18% share</strong></p>
                <ul>
                    <li>Above 15% threshold = strong third platform territory</li>
                    <li>Risk: Declining from 21% → 18% (trend concerning)</li>
                    <li>Mac survived 30 years at 7%. Windows Phone at 18% has cushion.</li>
                    <li>Key decision: Accept #3 and optimize for profitability, or fight for #2 and risk falling below threshold?</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">History shows: Third platforms survive if they accept being third. They die if they fight for first.</p>`,
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
        },

        "platform-consolidation-2017": {
            id: "platform-consolidation-2017",
            type: "Market Report",
            title: "Mobile Platform Market Consolidation - 2017",
            date: "January 2017",
            source: "Industry Analysis",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "Market consolidated to duopoly: Android 85%, iOS 15%. Third platforms (Windows Phone 15%, Others 0.5%) exist but growth impossible.",
            content: `<h3>Mobile Platform Landscape - Q4 2016</h3>
                <p><strong>Market Share Reality:</strong></p>
                <ul>
                    <li>Android: 85% (up from 53% in 2013)—dominant, ubiquitous</li>
                    <li>iOS: 15% (down from 20% in 2013)—premium, loyal</li>
                    <li>Windows Phone: 15% (down from 18% in 2013)—niche, stable</li>
                    <li>Others (BlackBerry, webOS, etc.): 0.5%—dead or dying</li>
                </ul>
                <p><strong>Why Market Consolidated (2013-2017):</strong></p>
                <ul>
                    <li>Network effects: Apps follow users, users follow apps—virtuous cycle for #1 and #2</li>
                    <li>Developer economics: iOS generates 2X revenue per user vs Android, Android has 5X users—both sustainable for developers</li>
                    <li>Hardware commoditization: Android manufacturers compete on price, Apple on premium—Windows Phone OEMs struggled in middle</li>
                    <li>Ecosystem lock-in: Users invested in App Store/Play Store purchases, cloud services—switching costs high</li>
                </ul>
                <p><strong>Can Windows Phone Grow from 15% in 2017?</strong></p>
                <ul>
                    <li>Historical precedent: No third platform ever grew after falling behind by 2014</li>
                    <li>Developer commitment: 92% of top apps prioritize iOS → Android → eventually Windows Phone (6-12 months late)</li>
                    <li>Consumer perception: "Everyone has iPhone or Android. Windows Phone = weird choice."</li>
                    <li>OEM commitment: Declining—Samsung, HTC, LG all exited Windows Phone 2015-2016, only Microsoft hardware remains</li>
                </ul>
                <p><strong>Growth Investment Reality Check:</strong></p>
                <ul>
                    <li>Microsoft spent $15B (2007-2017 in actual history) to reach 0.2% share = failure</li>
                    <li>Even in alternate history where Windows Phone reached 15%, growing beyond requires: (1) Android users switching (unlikely—free OS, ecosystem lock-in), (2) iOS users switching (very unlikely—premium users, Apple ecosystem), (3) New smartphone buyers (emerging markets choosing Android—price advantage)</li>
                    <li>Cost to grow 15% → 25%: Estimated $5-10B over 5 years with <10% success probability</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">By 2017, mobile platform war is over. Android and iOS won. Third platforms can survive but not grow.</p>`,
            conflicts: []
        },

        "opportunity-cost-2017": {
            id: "opportunity-cost-2017",
            type: "Financial Data",
            title: "Windows Phone vs Azure/AI: Opportunity Cost Analysis",
            date: "January 2017",
            source: "CFO Strategy Team",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "$300M in Windows Phone maintenance vs $300M in Azure/AI investment. ROI: Windows Phone 80%, Azure 500%+.",
            content: `<h3>Capital Allocation Decision - Q1 2017</h3>
                <p><strong>Windows Phone Economics (Profitable Niche):</strong></p>
                <ul>
                    <li>Revenue: $600M/year</li>
                    <li>Investment required: $300M/year (maintenance mode)</li>
                    <li>Profit: $240M/year</li>
                    <li>ROI: 80% annually</li>
                    <li>Growth potential: Flat to -5%/year (declining to 12% share)</li>
                    <li>Strategic value: Mobile platform presence, 180M users, enterprise loyalty</li>
                </ul>
                <p><strong>Azure Cloud Economics (Growth Engine):</strong></p>
                <ul>
                    <li>Revenue: $20B/year (2017), growing 100% YoY</li>
                    <li>Every $1 invested in Azure returns: $5-7 in revenue (500-700% ROI)</li>
                    <li>Market: Cloud computing TAM $500B+ (vs smartphone OS licensing $3B)</li>
                    <li>Growth trajectory: $20B (2017) → $60B (2024) if properly resourced</li>
                    <li>Strategic value: Platform for AI, enterprise digital transformation, future of computing</li>
                </ul>
                <p><strong>The $300M Reallocation Scenario:</strong></p>
                <ul>
                    <li>Windows Phone maintenance: $300M → $240M profit = 80% return</li>
                    <li>Azure investment: $300M → $1.5-2B additional cloud revenue = 500-700% return</li>
                    <li>Net opportunity cost: $1.2-1.7B/year by staying in Windows Phone</li>
                </ul>
                <p><strong>But Context Matters:</strong></p>
                <ul>
                    <li>Windows Phone is profitable and doesn't distract—small team, maintenance mode</li>
                    <li>Exiting mobile abandons 180M users, kills enterprise mobile strategy</li>
                    <li>Microsoft has $100B+ cash reserves—not either/or, can do both</li>
                    <li>Question: Is profitable small business worth maintaining even if ROI lower than alternatives?</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">The real question isn't profit—it's management attention. Does maintaining Windows Phone distract from building Azure empire?</p>`,
            conflicts: []
        },

        "open-source-precedents-2017": {
            id: "open-source-precedents-2017",
            type: "Board Memo",
            title: "Open Source Mobile OS Precedents: Lessons from History",
            date: "January 2017",
            source: "Strategy Analysis Team",
            quality: "high",
            visual: '<i class="ph ph-globe"></i>',
            summary: "Android succeeded as open source with Google backing. Firefox OS failed without corporate support. webOS died even with HP/LG. Open sourcing Windows Phone = likely death.",
            content: `<h3>Open Source Mobile Platform Case Studies</h3>
                <p><strong>Success Case: Android (2007-present)</strong></p>
                <ul>
                    <li>Open sourced by Google (Apache License)</li>
                    <li>Google provides: GMS, Play Store, development tools, marketing</li>
                    <li>Community provides: AOSP forks, custom ROMs, innovation</li>
                    <li>Success factors: (1) Corporate backing (Google), (2) Revenue model (ads/services), (3) OEM adoption, (4) Developer ecosystem</li>
                    <li>Key: Google never truly abandoned Android—maintained control through GMS</li>
                </ul>
                <p><strong>Failure Case: Firefox OS (2013-2016)</strong></p>
                <ul>
                    <li>Mozilla's HTML5-based open source mobile OS</li>
                    <li>Launched 2013, discontinued 2016</li>
                    <li>Why it failed: (1) Too late (Android/iOS already dominant), (2) Weak corporate backing (Mozilla non-profit with limited resources), (3) No OEM commitment, (4) Developer disinterest</li>
                    <li>Lesson: Open source alone doesn't save late-stage platform</li>
                </ul>
                <p><strong>Failure Case: webOS (Palm → HP → LG → Abandoned)</strong></p>
                <ul>
                    <li>Palm created webOS 2009, HP acquired 2010, open sourced 2012</li>
                    <li>LG acquired for smart TVs 2013, discontinued mobile OS</li>
                    <li>Why it failed post-open-source: (1) Developer ecosystem already collapsed, (2) No hardware manufacturer support, (3) Community too small to sustain platform</li>
                    <li>Lesson: Open sourcing dying platform doesn't revive it</li>
                </ul>
                <p><strong>If Microsoft Open Sources Windows Phone in 2017:</strong></p>
                <ul>
                    <li>Pros: (1) Community enthusiasts could maintain, (2) Minimal Microsoft cost ($50M/year vs $300M), (3) Goodwill gesture to 180M users, (4) Potential innovation from community</li>
                    <li>Cons: (1) OEMs will exit (no corporate support), (2) Developers will abandon (no commercial viability), (3) App ecosystem will collapse within 12-18 months, (4) Fragmentation (multiple community forks), (5) Security vulnerabilities (no professional maintenance)</li>
                </ul>
                <p><strong>Realistic Outcome: Slow Death</strong></p>
                <ul>
                    <li>Year 1: Enthusiast community excited, maintains updates</li>
                    <li>Year 2: Major apps stop updating (Instagram, banking, Uber)</li>
                    <li>Year 3: Security issues emerge, OEMs completely exit</li>
                    <li>Year 4-5: Platform becomes hobbyist project like webOS, <1M active users</li>
                    <li>Users forced to migrate to Android/iOS anyway—just slower, more painful</li>
                </ul>
                <p style="color: var(--accent-primary); font-weight: 600;">Open sourcing is band-aid on terminal condition. Better to maintain profitably or exit cleanly than half-abandon.</p>`,
            conflicts: []
        },

        "enterprise-market-dominance-2007": {
            id: "enterprise-market-dominance-2007",
            type: "Market Report",
            title: "Enterprise Mobile Market Position",
            date: "January 2007",
            source: "Market Intelligence",
            quality: "high",
            visual: '<i class="ph ph-buildings"></i>',
            summary: "Windows Mobile dominates enterprise at 42%. BlackBerry at 20%. Consumer is fragmented and low-margin.",
            content: `<h3>Q4 2006 Smartphone Market Segmentation</h3>
                <p>The smartphone market has two distinct buyer profiles with different economics:</p>
                <p><strong>Enterprise Segment (62% of market):</strong></p>
                <ul>
                    <li>Windows Mobile: 42% share ($1.2B annual revenue)</li>
                    <li>BlackBerry: 20% share (growing 45% YoY)</li>
                    <li>Average selling price: $450 with $35 OS license</li>
                    <li>Decision makers: IT departments, 18-month replacement cycles</li>
                </ul>
                <p><strong>Consumer Segment (38% of market):</strong></p>
                <ul>
                    <li>Symbian/Nokia: 24% (feature phone transition)</li>
                    <li>Others: 14% (fragmented, low-margin carriers)</li>
                    <li>Average selling price: $250 with $15 OS license</li>
                    <li>Decision makers: Individual buyers, carrier-subsidized</li>
                </ul>
                <p><strong>Microsoft's Revenue Profile:</strong> 94% of licensing revenue comes from enterprise devices. Consumer Windows Mobile devices generate low margins due to price sensitivity.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Question: Defend high-margin enterprise dominance or chase low-margin consumer market?</p>`,
            conflicts: []
        },

        "blackberry-real-threat-2007": {
            id: "blackberry-real-threat-2007",
            type: "Competitor Intel",
            title: "BlackBerry: The Actual Competition",
            date: "January 2007",
            source: "Competitive Intelligence",
            quality: "high",
            visual: '<i class="ph ph-device-mobile"></i>',
            summary: "RIM growing 45% annually in enterprise. iPhone targets consumers. Who's your real competitor?",
            content: `<h3>Competitive Landscape Assessment</h3>
                <p>Two competitors, two different battlefields:</p>
                <p><strong>BlackBerry Enterprise Threat:</strong></p>
                <ul>
                    <li>20% market share, up from 12% in 2005</li>
                    <li>8 million subscribers, adding 1M per quarter</li>
                    <li>BES (BlackBerry Enterprise Server): IT departments love centralized management</li>
                    <li>Physical QWERTY keyboard: "Email on the go" positioning</li>
                    <li>Government contracts: NSA-approved security, State Dept mandate</li>
                    <li>Fortune 500 penetration: 73% of companies have BES deployment</li>
                </ul>
                <p><strong>iPhone Consumer Positioning:</strong></p>
                <ul>
                    <li>$500-600 price point (vs $200 typical smartphone)</li>
                    <li>No Exchange support announced (can't sync corporate email)</li>
                    <li>No physical keyboard (not for "serious" email users)</li>
                    <li>AT&T exclusive (limited distribution vs your carrier-neutral approach)</li>
                    <li>Target market: Early adopters, gadget enthusiasts, luxury buyers</li>
                </ul>
                <p><strong>Strategic Reality:</strong> BlackBerry is eating your enterprise lunch quarterly. iPhone is targeting a consumer segment you've never dominated.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Fight BlackBerry in enterprise where you're strong, or chase Apple in consumer where you're weak?</p>`,
            conflicts: []
        },

        "capital-allocation-2007": {
            id: "capital-allocation-2007",
            type: "Financial Data",
            title: "Investment Scenarios: Enterprise vs Consumer",
            date: "January 2007",
            source: "CFO Office",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "Enterprise defense: $500M over 5 years. Consumer attack: $2-3B. Protect $1.2B revenue or chase unproven market?",
            content: `<h3>Strategic Investment Analysis</h3>
                <p><strong>Scenario A: Enterprise Defense</strong></p>
                <ul>
                    <li>Windows Mobile 6.5 improvements: $200M (Exchange, ActiveSync, Office Mobile)</li>
                    <li>IT admin tools: $100M (group policy, deployment, security)</li>
                    <li>OEM partnerships (HP, Dell, Motorola): $100M (co-marketing, reference designs)</li>
                    <li>Enterprise sales/marketing: $100M (CIO conferences, case studies)</li>
                    <li><strong>Total 5-year investment: $500M</strong></li>
                    <li><strong>Protects: $1.2B annual revenue, 42% market share</strong></li>
                </ul>
                <p><strong>Scenario B: Consumer Attack</strong></p>
                <ul>
                    <li>Touch UI platform rebuild: $800M (gesture framework, redesign, testing)</li>
                    <li>Consumer marketing: $700M (TV campaigns, retail presence, carrier co-op)</li>
                    <li>App ecosystem development: $400M (developer tools, marketplace, subsidies)</li>
                    <li>Retail/carrier partnerships: $300M (store presence, training, incentives)</li>
                    <li><strong>Total 5-year investment: $2.2B minimum</strong></li>
                    <li><strong>Chases: Unproven consumer market against Apple's design superiority</strong></li>
                </ul>
                <p><strong>Risk Assessment:</strong> Consumer attack requires 4.4x capital vs enterprise defense while competing against Apple (infinite capital, retail distribution, brand cachet) in market segment where Microsoft has no brand strength.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Board question: $500M to defend vs $2.2B to attack. Which makes fiscal sense?</p>`,
            conflicts: []
        },

        "acquisition-targets-2007": {
            id: "acquisition-targets-2007",
            type: "Financial Data",
            title: "Mobile Acquisition Target Analysis",
            date: "January 2007",
            source: "M&A Strategy Team",
            quality: "high",
            visual: '<i class="ph ph-currency-dollar"></i>',
            summary: "Palm and RIM available. Palm: $1-2B, struggling. RIM: $6-8B, strong but expensive.",
            content: `<h3>Strategic Acquisition Opportunities - Q1 2007</h3>
                <p><strong>Target 1: Palm Inc.</strong></p>
                <ul>
                    <li>Market cap: ~$1.2B (down from $50B in 2000)</li>
                    <li>OS: Palm OS (aging) + new webOS in development</li>
                    <li>Market share: 5% and declining</li>
                    <li>Strengths: Brand recognition, loyal user base, retail presence</li>
                    <li>Weaknesses: Outdated platform, losing carrier support, financial distress</li>
                    <li>Estimated acquisition cost: $1.5-2B (30% premium)</li>
                </ul>
                <p><strong>Target 2: Research In Motion (BlackBerry)</strong></p>
                <ul>
                    <li>Market cap: ~$6B (growing rapidly)</li>
                    <li>OS: BlackBerry OS with BES (enterprise server)</li>
                    <li>Market share: 20% and growing 45% YoY</li>
                    <li>Strengths: Enterprise dominance, NSA certification, strong momentum</li>
                    <li>Weaknesses: Co-CEOs resistant to acquisition, premium valuation, Canadian regulations</li>
                    <li>Estimated acquisition cost: $8-10B (40% premium minimum)</li>
                </ul>
                <p><strong>Strategic Trade-off:</strong> Palm is cheap but weak (may not help). RIM is strong but expensive and unlikely to sell.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Buy distressed asset and rebuild? Or pay premium for market leader?</p>`,
            conflicts: []
        },

        "msft-acquisition-history-2007": {
            id: "msft-acquisition-history-2007",
            type: "Board Memo",
            title: "Microsoft's M&A Track Record",
            date: "January 2007",
            source: "Corporate Development",
            quality: "high",
            visual: '<i class="ph ph-buildings"></i>',
            summary: "Microsoft's acquisition history: mixed results. Integration challenges common. Cultural clashes frequent.",
            content: `<h3>Historical M&A Performance Analysis</h3>
                <p><strong>Recent Major Acquisitions:</strong></p>
                <ul>
                    <li>Hotmail (1997): $400M - SUCCESS (integrated into MSN/Outlook)</li>
                    <li>WebTV (1997): $425M - FAILURE (never gained traction, shut down 2013)</li>
                    <li>Great Plains Software (2001): $1.1B - MIXED (niche success in accounting)</li>
                    <li>Navision (2002): $1.3B - MIXED (became Dynamics but slow growth)</li>
                    <li>Rare Ltd (2002): $377M - UNDERPERFORMED (gaming studio, limited output)</li>
                </ul>
                <p><strong>Integration Pattern:</strong> Microsoft struggles with consumer-focused acquisitions (WebTV) but succeeds with enterprise B2B plays (Great Plains).</p>
                <p><strong>Cultural Challenges:</strong></p>
                <ul>
                    <li>Acquired companies lose innovation velocity post-acquisition</li>
                    <li>Microsoft bureaucracy slows decision-making</li>
                    <li>Talent retention difficult - key employees often leave within 18 months</li>
                    <li>"Microsoft way" conflicts with startup cultures</li>
                </ul>
                <p><strong>Mobile-Specific Risk:</strong> Both Palm and RIM are fast-moving consumer/enterprise plays. Integration timeline of 12-18 months means market could shift dramatically while you're reorganizing.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Question: Can Microsoft successfully integrate a mobile platform company fast enough to matter?</p>`,
            conflicts: []
        },

        "integration-timeline-2007": {
            id: "integration-timeline-2007",
            type: "Technical Spec",
            title: "Mobile Platform Integration Timeline",
            date: "January 2007",
            source: "Engineering & Operations",
            quality: "high",
            visual: "⚙️",
            summary: "Typical tech acquisition integration: 12-24 months. iPhone ships in 6 months. Speed matters.",
            content: `<h3>Acquisition Integration Timeline Estimate</h3>
                <p><strong>Phase 1: Deal Closing (3-6 months)</strong></p>
                <ul>
                    <li>Due diligence, regulatory approval, shareholder votes</li>
                    <li>During this time: No major product decisions possible</li>
                    <li>Risk: Market moves while you're negotiating</li>
                </ul>
                <p><strong>Phase 2: Integration Planning (3-6 months)</strong></p>
                <ul>
                    <li>Organizational restructure, role assignments, redundancy elimination</li>
                    <li>Platform roadmap decisions (keep separate vs merge with Windows Mobile)</li>
                    <li>During this time: Key talent starts leaving, product updates stall</li>
                </ul>
                <p><strong>Phase 3: Execution (6-12 months)</strong></p>
                <ul>
                    <li>Actual platform integration or relaunch under Microsoft</li>
                    <li>Carrier renegotiations, developer relations, marketing pivot</li>
                    <li>First Microsoft-branded device: 18-24 months post-acquisition</li>
                </ul>
                <p><strong>Critical Context:</strong> iPhone launches June 2007 (6 months). Android launching late 2008 (18 months). Your integration timeline means first competitive product arrives AFTER both competitors ship.</p>
                <p><strong>Historical Precedent:</strong> When Google bought Android Inc. (2005), they shipped first phone in 3 years. When HP bought Palm (2010), they killed webOS within 2 years.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Can you integrate fast enough? Or will you be reorganizing while competitors ship?</p>`,
            conflicts: []
        },

        "rim-resistance-2007": {
            id: "rim-resistance-2007",
            type: "Competitor Intel",
            title: "RIM Acquisition Feasibility",
            date: "January 2007",
            source: "Investment Banking Analysis",
            quality: "high",
            visual: '<i class="ph ph-device-mobile"></i>',
            summary: "RIM co-CEOs unlikely to sell. Company momentum strong. Would require hostile takeover at massive premium.",
            content: `<h3>BlackBerry/RIM Acquisition Analysis</h3>
                <p><strong>Leadership Structure:</strong></p>
                <ul>
                    <li>Co-CEOs: Jim Balsillie and Mike Lazaridis (founders)</li>
                    <li>Both personally wealthy, emotionally invested in independence</li>
                    <li>Recent quotes: "BlackBerry is just getting started" (Balsillie, Dec 2006)</li>
                    <li>No indication of interest in selling</li>
                </ul>
                <p><strong>Market Position (Q4 2006):</strong></p>
                <ul>
                    <li>20% smartphone market share, up from 12% in 2005</li>
                    <li>8M subscribers, growing 1M per quarter</li>
                    <li>Stock at all-time high ($65/share, up 150% in 2 years)</li>
                    <li>Fortune 500 penetration: 73% have BlackBerry Enterprise Server</li>
                    <li>Government contracts: State Dept, DoD, NSA all standardized on BlackBerry</li>
                </ul>
                <p><strong>Acquisition Challenges:</strong></p>
                <ul>
                    <li>Minimum premium: 40-50% ($8-10B total)</li>
                    <li>Likely hostile takeover required (unfriendly to management)</li>
                    <li>Canadian foreign investment review (government approval needed)</li>
                    <li>Post-acquisition: Co-CEOs would likely leave, taking institutional knowledge</li>
                    <li>Cultural clash: Waterloo, Canada engineering culture vs Redmond corporate</li>
                </ul>
                <p><strong>Palm Alternative:</strong> Much cheaper ($1.5-2B) but struggling. webOS platform promising but unproven. Easier deal but weaker asset.</p>
                <p style="color: var(--accent-primary); font-weight: 600;">Pay $8-10B for hostile RIM takeover? Or $1.5B for distressed Palm?</p>`,
            conflicts: []
        },

        "zune-precedent-2007": {
            id: "zune-precedent-2007",
            type: "Board Memo",
            title: "Zune Failure: Consumer Market Lessons",
            date: "January 2007",
            source: "Strategy Team",
            quality: "high",
            visual: '<i class="ph ph-chart-line"></i>',
            summary: "Zune launched Nov 2006 to fight iPod. Result: 9% peak share, $500M+ loss. Don't repeat mistake in mobile.",
            content: `<h3>Strategic Precedent Analysis: Microsoft Zune</h3>
                <p><strong>The Zune Experiment (November 2006 - Present):</strong></p>
                <ul>
                    <li>Launch strategy: Attack iPod directly in consumer music player market</li>
                    <li>Investment: $500M+ (hardware, marketing, Zune Marketplace)</li>
                    <li>14-month results: 9% peak market share vs iPod's 70%</li>
                    <li>Press coverage: "Brown Zune" became punchline, brand damage</li>
                    <li>Strategic failure: Late entry, inferior ecosystem, trying to "out-Apple Apple"</li>
                </ul>
                <p><strong>Why Zune Failed:</strong></p>
                <ul>
                    <li>Apple owned distribution (retail stores, iTunes integration)</li>
                    <li>Apple owned ecosystem (iPod + iTunes + music labels)</li>
                    <li>Microsoft had no consumer brand strength in entertainment</li>
                    <li>Design DNA mismatch: Enterprise company vs consumer luxury brand</li>
                </ul>
                <p><strong>Where Microsoft Actually Wins:</strong> Enterprise software, developer platforms, productivity tools, IT infrastructure—markets where Apple has zero presence and no intention to compete.</p>
                <p><strong>iPhone Parallel:</strong> Do we repeat Zune mistake by chasing Apple in consumer touch phones (their DNA) or defend enterprise mobile (our DNA)?</p>
                <p style="color: var(--accent-primary); font-weight: 600;">History lesson: Don't fight Apple on consumer turf. Focus where they won't follow.</p>`,
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
            availableInfo: ["market-report-2007", "enterprise-market-dominance-2007", "blackberry-real-threat-2007", "capital-allocation-2007", "zune-precedent-2007", "acquisition-targets-2007", "msft-acquisition-history-2007", "integration-timeline-2007", "rim-resistance-2007"],

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
                    description: "Ignore iPhone consumer threat. Focus 100% on defeating BlackBerry in enterprise market.",
                    risk: "Consumer market lost forever. If enterprise preferences shift, no fallback position.",
                    upside: "Defend existing $1.2B revenue. Lower capital requirement. Focus on proven strengths.",
                    cost: "$100M",
                    consequences: {
                        immediate: {
                            cash: -0.1,
                            stock: +2.1,
                            marketShare: 0,
                            morale: "focused",
                            unlockedArtifacts: ["iphone-2g", "htc-advantage-x7500"],
                            narrative: `Microsoft announces enterprise-only mobile strategy at Mobile World Congress. "iPhone is a consumer device for early adopters. We will dominate where businesses make actual purchasing decisions—the enterprise." Board approves focused $100M investment in Exchange integration and IT management tools.

Wall Street responds enthusiastically: "Finally, strategic discipline. Microsoft protects its $1.2B revenue stream instead of chasing unproven consumer market." Stock jumps 7% on earnings call. Analysts praise "focus over hype" and "defending high-margin dominance."

Enterprise sales team energized by clarity. "CIOs don't care about touch screens—they care about Exchange ActiveSync, Office Mobile, and remote wipe. We just got clear marching orders." OEMs commit to business-focused roadmap: physical keyboards, Office integration, enterprise security.

Consumer tech press mocks decision as "Microsoft admits defeat to iPhone before battle begins." But internal mood is confident: Let Apple fight for $500 early adopters. We'll keep the Fortune 500 contracts that actually generate profit.`
                        },
                        delayed: {
                            date: "Q4 2009",
                            cash: -0.15,
                            stock: -6.8,
                            marketShare: -24,
                            morale: "alarmed",
                            narrative: `33 months later: The "enterprise fortress" strategy has collapsed. The fundamental assumption was wrong: consumer and enterprise markets don't stay separate.

iPhone 3GS (June 2009) added Exchange ActiveSync, mobile device management, enterprise security. Apple didn't ignore enterprise—they made consumer devices so desirable that enterprises had to support them. CIOs began allowing iPhones via BYOD (Bring Your Own Device) policies: "Our executives want iPhones. We'll adapt our infrastructure."

Carrier dynamics shifted catastrophically. AT&T, Verizon, T-Mobile made iPhone their flagship, dedicating floor space, training staff, advertising spend. Windows Mobile devices pushed to back of store or discontinued entirely. Without carrier advocacy, enterprise sales dried up—even IT buyers purchase through carrier channels.

Market share: 42% → 18% (24-point collapse). BlackBerry held 23%, iPhone surged to 17%, Android emerged at 9%. You lost enterprise AND consumer simultaneously. The "focus" strategy became irrelevance as market boundaries dissolved.

Emergency board meeting convened. Ballmer faces difficult questions: "We defended enterprise while enterprise chose iPhone. Our entire thesis was wrong. What now?"`
                        }
                    }
                },
                {
                    id: "acquisition-strategy",
                    title: "Acquisition Strategy",
                    description: "Try to acquire Palm or RIM (BlackBerry) for immediate mobile capabilities.",
                    risk: "Expensive ($5-8B). Integration nightmares. Cultural clash. May not solve problem.",
                    upside: "Instant capabilities. Established user base. Patents. Speed to market.",
                    cost: "$5-8B",
                    consequences: {
                        immediate: {
                            cash: -1.8,
                            stock: -3.5,
                            marketShare: 0,
                            morale: "cautious",
                            unlockedArtifacts: ["iphone-2g", "palm-treo-750"],
                            narrative: `Microsoft announces acquisition of Palm Inc. for $1.8B. Ballmer: "We're buying proven mobile capabilities and webOS platform under development. Speed to market matters."

Wall Street skeptical: "Microsoft overpaying for declining asset. Palm's 5% share is eroding. Integration will take 18 months minimum." Stock drops 12% on acquisition news. Analysts cite WebTV, Rare Ltd failures.

Palm employees anxious about Microsoft integration. Engineering team worried: "Will they kill webOS and force Windows Mobile? Will Redmond bureaucracy slow us down?" Within 3 months, 30% of Palm's senior engineers resign, including key webOS architects.

The deal closes after 6 months of regulatory review. iPhone ships during negotiations. By acquisition closing day, market has shifted—and you're just starting integration planning.`
                        },
                        delayed: {
                            date: "Q4 2009",
                            cash: -2.5,
                            stock: -8.2,
                            marketShare: -28,
                            morale: "frustrated",
                            narrative: `33 months post-acquisition: The Palm integration is a disaster. Every fear materialized.

Integration paralysis: 18 months spent debating platform strategy. "Do we bet on webOS or Windows Mobile?" Engineering teams divided. Meanwhile, no major product ships for 2 years. Palm's market share: 5% → 2% during integration freeze.

Talent exodus: 60% of original Palm engineers left. webOS development stalled without key architects. The promising platform died in committee meetings and roadmap debates. Microsoft tried to merge webOS concepts into Windows Mobile—pleased nobody.

Market reality (Q4 2009): Total mobile share 14% (42% pre-acquisition minus 28 points). iPhone: 17%, Android: 9%, BlackBerry: 23%. You spent $4.3B total (acquisition + integration costs) to LOSE market share. Palm brand discontinued. webOS shelved.

Board crisis: "We bought a declining platform and accelerated its death through integration dysfunction. $4.3B lesson in what NOT to do."

Emergency question: How do we respond to Android's free OS now that we've wasted 33 months on failed M&A?`
                        }
                    }
                }
            ]
        },

        {
            id: "d2-android-threat",
            type: "decision",
            date: "SEP 2009",
            timeMarker: "SEP 2009",
            title: "The Android Threat",
            storyImage: '<i class="ph ph-robot" style="font-size: 4rem;"></i>',
            storyText: `Two years passed. Your market share declined from 42% to 32% while observing. But the real threat emerged: Android.

Google's FREE mobile OS exploded from 2.5% to 8% in 12 months. HTC, Samsung, Motorola, LG all building Android devices. Your $15-25 licensing fee suddenly looks like a tax on innovation.

Strategy team warns: if Android reaches 20-30% share, your $1.2B licensing revenue collapses. OEMs will mass-defect to free alternative. You have 12-18 months before tipping point.

Match Android's free model and sacrifice revenue now? Or maintain licensing and lose OEMs?`,

            objective: "Counter Android Threat",
            availableInfo: ["android-threat-2009", "pricing-economics-2009", "google-android-economics-2009", "oem-economics-2009", "price-competition-precedents-2009", "palm-webos-status-2009", "palm-financial-distress-2009", "webos-vs-wp7-comparison-2009", "hp-palm-precedent-2009"],

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
                    title: "Hybrid Pricing Strategy",
                    description: "Slash licensing to $5/device. Compromise between free and $15.",
                    risk: "Worst of both worlds. Still lose OEMs to free Android. Revenue drops anyway.",
                    upside: "Keeps some revenue. Less shareholder panic than going free. Shows flexibility.",
                    cost: null,
                    consequences: {
                        immediate: {
                            cash: 0,
                            stock: -2.8,
                            marketShare: 0,
                            morale: "cautious",
                            unlockedArtifacts: ["htc-hero-android"],
                            narrative: `Microsoft announces "Windows Mobile Momentum" program: Licensing drops from $15-25 to $5 per device. Ballmer: "We're showing flexibility while maintaining sustainable business model."

Wall Street punishes the announcement. Stock drops 9%. Analysts: "This is admission of defeat. $5 still isn't $0. Microsoft loses $800M revenue without gaining competitive advantage." Goldman Sachs downgrades to Sell.

OEM reaction lukewarm. HTC executive: "Better than $25, but Android is still free. Plus, their app ecosystem and carrier support are stronger." Samsung, Motorola commit to "evaluate" Windows Mobile—corporate speak for "we're still going Android-first."

Internally, Windows Mobile team frustrated: "We compromised on revenue but OEMs aren't committing. We gave up profitability without winning loyalty." CFO warns: This is worst-case scenario playing out.`
                        },
                        delayed: {
                            date: "Q2 2010",
                            cash: -0.8,
                            stock: -5.2,
                            marketShare: -16,
                            morale: "frustrated",
                            narrative: `9 months later: The hybrid pricing strategy failed completely. You got worst of both worlds.

Revenue collapse: $1.2B → $350M (71% drop). Shipped only 70M devices vs projected 100M. OEMs didn't return—they accelerated Android adoption. HTC launched 12 Android models vs 3 Windows Mobile models in 2010.

Market share: 32% → 16% (16-point collapse). Android: 8% → 26%. iPhone: 16% → 18%. BlackBerry: 20% → 15%. You're in free-fall while Android surges. The pricing cut made zero difference to OEM strategy.

Carrier dynamics: Verizon's "Droid Does" campaign spent $100M attacking iPhone—didn't mention Windows Mobile once. AT&T, T-Mobile, Sprint all prioritize Android shelf space. You're invisible in retail.

Board crisis: "We destroyed $850M in revenue without keeping a single OEM. The hybrid approach satisfied nobody—too expensive for OEMs, too cheap for shareholders, insufficient to compete with ecosystem gap."

Emergency strategic question: Do we go fully free now (having already lost most revenue) or admit mobile OS licensing is dead?`
                        }
                    }
                },
                {
                    id: "acquire-palm",
                    title: "Acquire Palm for webOS",
                    description: "Buy Palm for their webOS platform and mobile expertise.",
                    risk: "Palm declining. webOS unproven. $1.5B for dying company. Integration hell.",
                    upside: "Instant modern platform. Skip 12-month WP7 rebuild. Ship 9 months faster.",
                    cost: "$1.5B",
                    consequences: {
                        immediate: {
                            cash: -1.5,
                            stock: -4.2,
                            marketShare: 0,
                            morale: "cautious",
                            unlockedArtifacts: ["palm-pre-webos"],
                            narrative: `Microsoft announces acquisition of Palm Inc. for $1.5B. Ballmer: "webOS is the most innovative mobile platform. We're buying speed to market—ship in Q2 2010 instead of building Windows Phone 7 from scratch."

Wall Street skeptical: "Microsoft paying premium for dying company. Palm has 3% share and burning $50M/quarter. webOS launched 3 months ago—too early to validate." Stock drops 14%. Analysts cite Danger/KIN disaster (Microsoft just acquired Danger for $500M in 2008).

Palm employees anxious: "Will Microsoft kill webOS and force us onto Windows CE? Will Redmond bureaucracy destroy our agile culture?" Within announcement week, 25% of webOS engineering team (40 engineers) resign, including 3 of 5 original architects.

The webOS team in Sunnyvale, California braces for integration with Redmond. Internal polls show 70% employee concern about "becoming Microsoft."

Deal expected to close in 6 months after regulatory review.`
                        },
                        delayed: {
                            date: "Q4 2010",
                            cash: -2.2,
                            stock: -7.5,
                            marketShare: -18,
                            morale: "frustrated",
                            narrative: `15 months post-acquisition: The webOS gambit failed catastrophically. Every integration risk materialized.

Talent exodus: 60% of original Palm engineers left during integration. The remaining webOS team demoralized by Microsoft's decision-making bureaucracy. "We went from shipping updates weekly to waiting 8 weeks for approval chains."

Platform paralysis: 12 months debating strategy—"Do we keep webOS architecture or migrate to Windows CE kernel?" Engineering teams divided. No major platform update shipped for a year. Meanwhile, iOS 4 and Android 2.2 (Froyo) advanced rapidly.

Product reality: First "Microsoft webOS" device launched Q3 2010—18 months after acquisition announcement. By then: iPhone 4 dominated at 18% share, Android surged to 28%, and Windows Mobile collapsed from 32% → 14%. Your webOS device entered market nobody cared about.

App ecosystem disaster: Developers abandoned webOS during uncertainty. 1,000 apps at acquisition → 600 apps at launch (developers left). iPhone: 300K apps. Android: 100K apps. You bought a platform and killed its momentum.

Financial damage: $1.5B acquisition + $700M integration costs = $2.2B total. Market share lost: 18 points. The "speed advantage" of acquiring webOS evaporated in integration dysfunction. Would have been faster building WP7 in-house.

Board crisis meeting: "We repeated the Danger mistake. Bought innovative platform, destroyed it through integration, lost billions. webOS team demoralized, OEMs confused about roadmap, carriers gave shelf space to Android."

Emergency question: Do we cut losses on webOS and build WP7 anyway (starting from zero again)? Or try to salvage this acquisition?`
                        }
                    }
                }
            ]
        },

        {
            id: "d3-platform-rebuild",
            type: "decision",
            date: "JAN 2010",
            timeMarker: "JAN 2010",
            title: "The Platform Rebuild",
            storyImage: '<i class="ph ph-device-mobile" style="font-size: 4rem;"></i>',
            storyText: `Android at 24%, iOS at 16%, you at 29%. Free OS model saved OEM relationships, but Windows Mobile 6.5 is a band-aid on aging architecture.

You need modern touch-first OS. The question: How fast? How much?

Engineering estimates 12 months for ground-up rebuild: Windows Phone 7 with Metro UI, Live Tiles, modern touch. $500M investment. Break backward compatibility—clean slate for next decade.

Or incremental updates to avoid risk? Or partner with Nokia to share costs? The platform decision will define the next 5 years.`,

            objective: "Build Modern Platform",
            availableInfo: ["wp7-vision-2010", "wm-technical-debt-2010", "incremental-vs-rebuild-cost-2010", "symbian-blackberry-incremental-2010", "engineering-morale-2010", "android-adoption-analysis-2010", "google-android-control-2010", "microsoft-services-strategy-2010", "ballmer-platform-ideology-2010"],

            options: [
                {
                    id: "incremental-updates",
                    title: "Incremental Windows Mobile Updates",
                    description: "Continue improving Windows Mobile 6.5 with touch polish. Safer, cheaper, but insufficient.",
                    risk: "Platform remains fundamentally dated. Can't compete with iOS/Android architecture. Slow death.",
                    upside: "Low cost ($50M). Ships in 6 months (Q3 2010). No development gap. Backward compatible.",
                    cost: "$50M",
                    consequences: {
                        immediate: {
                            cash: -0.05,
                            stock: +1.5,
                            marketShare: 0,
                            morale: "resigned",
                            unlockedArtifacts: ["htc-hd2"],
                            narrative: `Microsoft announces "Windows Mobile 6.9" with touch improvements. Ballmer: "We're committed to our platform. Evolution, not revolution." $50M investment in UI polish, larger buttons, kinetic scrolling.

Wall Street relieved by lower cost. Stock rises 5%. CFO: "Disciplined capital allocation. No risky $500M bet on unproven rebuild." Analysts praise "pragmatic approach" and "protecting backward compatibility."

But engineering team demoralized. Internal memo leaks: "We're polishing a 1996 kernel while iOS and Android were built for touch from day one. This won't compete." Within 3 weeks, 15 senior engineers resign to join Android team at Google.

Tech press skeptical: "Microsoft choosing easy path over right path. Windows Mobile 6.9 is still Windows CE underneath. Touch will feel laggy compared to iOS." Developers worry: "Are we building on dead platform?"

Product ships Q3 2010—6 months, on time, on budget. But it's lipstick on a pig.`
                        },
                        delayed: {
                            date: "Q4 2011",
                            cash: -0.15,
                            stock: -8.5,
                            marketShare: -21,
                            morale: "defeated",
                            narrative: `18 months later: The incremental strategy failed completely. Windows Mobile 6.9 died in market.

Product reception: Reviews brutal. "Still feels like 2006 phone with 2010 skin." Verge: "Scrolling laggy, multi-touch broken, apps crash." Touch latency measured: iOS 55ms, Android 85ms, WM6.9 140ms. Users notice. Return rates 35%.

App exodus: Developers abandoned platform. Why build for 14-year-old kernel when iOS and Android have modern SDKs? Windows Mobile Marketplace: 18K apps (2010) → 12K apps (2011). Top apps (Instagram, Uber, Spotify) never ported.

OEM defection accelerated: HTC, Samsung, Motorola all went "Android-only" by mid-2011. "We tried selling Windows Mobile 6.9. Customers didn't want it. Touch felt cheap compared to $200 Android phones." Zero flagship devices by Q4 2011.

Market share collapse: 29% (Q1 2010) → 14% (Q2 2011) → 8% (Q4 2011) = 21-point death spiral. Meanwhile: Android 24% → 52%, iOS 16% → 19%. You chose managed decline and got rapid collapse instead.

Engineering talent exodus: 45% attrition in 18 months. Best engineers left for Google, Apple, startups. Those who stayed are maintaining dead platform. Morale destroyed.

Board emergency meeting: "We saved $450M by not building WP7. We lost $3B in market cap and our mobile future. The 'safe' choice killed us."

Ballmer faces question: Do we NOW build Windows Phone 7 from scratch (2 years too late)? Or exit mobile entirely?`
                        }
                    }
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
                    title: "Adopt Android Strategy",
                    description: "Abandon Windows Phone. Become Android OEM like Samsung. Exit platform business.",
                    risk: "No platform control. Compete with 30+ OEMs. Lose identity. Strategic surrender. Ballmer will resign.",
                    upside: "Immediate modern OS. Save $500M. Focus on services (Office, Azure, Xbox).",
                    cost: "$0",
                    consequences: {
                        immediate: {
                            cash: 0,
                            stock: -12.5,
                            marketShare: 0,
                            morale: "shocked",
                            unlockedArtifacts: ["microsoft-kin"],
                            narrative: `January 2010: In stunning reversal, Microsoft announces abandonment of Windows Phone development. "We will embrace Android as our mobile platform. Microsoft's focus shifts to delivering best Office, Xbox, and Bing experiences on Android."

Wall Street PANIC. Stock crashes 42%. Analysts: "Microsoft admits defeat in platforms. This is IBM moment—ceding OS to Google like IBM ceded to Microsoft in 1980s. Company's core DNA betrayed."

Steve Ballmer faces board revolt. "I cannot lead a Microsoft that abandons platform strategy." Within 3 weeks, Ballmer announces resignation (actual history: didn't resign until 2013). Board emergency succession planning begins.

Engineering team in chaos. 40% of Windows Phone team (500 engineers) resign immediately. "We joined to build platforms, not become Samsung clone." Talent exodus to Apple, Google accelerates. Morale destroyed across company—if mobile platform abandoned, is Windows next?

Tech press: "Microsoft waves white flag. After Windows, Office, Azure platform successes, admits it can't compete with Google in mobile. Unprecedented strategic surrender for company built on platform dominance."

The Android pivot begins. But at what cost?`
                        },
                        delayed: {
                            date: "Q4 2012",
                            cash: -1.2,
                            stock: -18.5,
                            marketShare: -25,
                            morale: "defeated",
                            narrative: `33 months later: The Android strategy failed catastrophically. Microsoft learned: You can't compete in platforms by abandoning platforms.

Microsoft Surface Phone (Android) launched Q2 2011. Premium device ($599), Microsoft services (Office, Bing, OneDrive, Xbox) pre-installed. Reviews: "Nice hardware, but why not buy Samsung for $400? Office Mobile works on Samsung too."

Sales disaster: 2M units in Year 1 vs Samsung's 50M. Market share: 1.5% (vs 29% before Android pivot). Google's GMS requirements meant: Google Search default, Gmail on home screen, Google Maps primary. Bing, Outlook, OneDrive buried in app drawer.

Services revenue reality: $200M from Office Mobile on ALL Android (not just Microsoft phones). Bing on Android: 3% usage—users stick with Google. Xbox Live on Android: minimal adoption—Google Play Games preferred. The "services strategy" generated 10% of projected revenue.

Commodity hardware trap: Competing with 30+ Android OEMs (Samsung, HTC, Motorola, LG, Huawei, Xiaomi). Microsoft's 10% margin vs Samsung's scale advantages. Lost $800M on hardware business in 2 years.

Platform identity crisis: Developers asked: "Why build for Microsoft when Google controls roadmap?" Enterprises asked: "Why choose Microsoft Android over Samsung?" Consumers asked: "What's the point?"

Stock collapse: $29 (pre-announcement) → $17 (down 42% immediate) → $13 (down 55% total by 2012). Market cap: $300B → $175B. Board fired entire leadership team.

New CEO (hypothetical): Reverses Android strategy, attempts Windows Phone rebuild. But 33 months lost. Android 24% → 68%, iOS 16% → 19%, Microsoft 29% → 4%. Game over.

The lesson: Platform companies die when they abandon platforms. Microsoft learned this $125B market cap lesson the hard way.`
                        }
                    }
                }
            ]
        },

        {
            id: "d4-app-ecosystem",
            type: "decision",
            date: "JUL 2011",
            timeMarker: "JUL 2011",
            title: "The App Ecosystem Question",
            storyImage: '<i class="ph ph-device-mobile" style="font-size: 4rem;"></i>',
            storyText: `Windows Phone 7 launched 9 months ago. Product is good. Reviews positive. But growth plateauing.

Current state: 21% market share, 18,000 apps, strong OEM commitment. But app gap is real: iOS 425K apps, Android 250K, you 18K.

App economics show developers make 4.4X less on Windows Phone than iOS. They prioritize iOS first, Android second, Windows Phone "if at all." Apps arrive 6-12 months late—users see "coming soon" too often.

Pay developers directly ($500M fund)? Let organic growth work? Or accept being #3 in apps?`,

            objective: "Close App Gap",
            availableInfo: ["app-economics-2011", "enterprise-consumer-split-2011", "nokia-decline-2011", "blackberry-enterprise-lesson-2011"],

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
                    title: "Enterprise-Only Strategy",
                    description: "Give up consumer app race. Focus only on enterprise apps, productivity, Office integration.",
                    risk: "Abandon consumer market. Become niche enterprise platform. Limited growth. BYOD kills you anyway.",
                    upside: "Play to Microsoft's strengths. 100 apps beats 500K apps in enterprise. Lower cost.",
                    cost: "$100M",
                    consequences: {
                        immediate: {
                            cash: -0.1,
                            stock: -6.5,
                            marketShare: 0,
                            morale: "conflicted",
                            unlockedArtifacts: ["blackberry-bold-9900"],
                            narrative: `July 2011: Microsoft announces strategic pivot. "Windows Phone is enterprise productivity platform. We're not chasing consumer app count—we're enabling business."

Marketing shifts: "Office in your pocket. Exchange perfection. Enterprise security." Demo: Excel spreadsheets with stylus precision, PowerPoint presentations, OneNote sync, Outlook email threading.

Wall Street HATES it. Stock drops 22%. Analysts: "Microsoft admits defeat in consumer. Copying BlackBerry's dying strategy. BYOD will destroy this." Tech press: "Windows Phone gives up on apps, retreats to enterprise fortress."

Consumer OEMs (HTC, Samsung) immediately defect. "We sell to consumers. Enterprise-only means we're out." Nokia stays—desperate for any partner. But losing HTC/Samsung hardware diversity hurts retail presence.

Internal morale split: Enterprise division excited ("Finally focusing on our strengths!"), consumer team demoralized ("We built touch-first OS for... enterprise email?").

The pivot is set. But BlackBerry tried this exact strategy 2009-2011. How did that work out for them?`
                        },
                        delayed: {
                            date: "Q2 2013",
                            cash: -0.25,
                            stock: -14.5,
                            marketShare: -15,
                            morale: "defeated",
                            narrative: `22 months later: Enterprise-only strategy failed catastrophically. Became "BlackBerry 2.0"—watched BYOD revolution kill enterprise control.

Enterprise adoption reality: IT departments loved Windows Phone (Exchange, security, Office). But executives demanded iPhones. "Support my iPhone or I'll find a CIO who will."

BYOD (Bring Your Own Device) tsunami: 2011-2013 era when personal devices infiltrated enterprise. 78% of Fortune 500 allowed BYOD by 2013. Executive preference > IT policy. Consumer platform choice drove enterprise, not vice versa.

The missing apps killed enterprise adoption: Executives wanted Uber for business travel, wanted WhatsApp for client communication, wanted Instagram for brand marketing. "Windows Phone enterprise-only" meant executives used iPhones personally, then demanded IT support them for work too.

Market share collapse: 21% (Q3 2011) → 12% (Q2 2012) → 6% (Q2 2013) = 15-point death spiral. Lost consumer completely (0.8% consumer share), then BYOD killed enterprise too (8% enterprise share, down from 21%).

Nokia partnership collapsed: Nokia went all-in Windows Phone, but enterprise-only positioning killed consumer Lumia sales. Nokia lost $3B in 2012-2013, eventually sold to Microsoft (2013) for $7B—Microsoft bought them out of desperation.

BlackBerry parallel proven: BlackBerry's enterprise-only strategy (2009-2011) failed identically. 20% → 6% share. Microsoft copied failing strategy, got same result. Consumer preference drives enterprise in mobile age—no escaping it.

Board crisis meeting Q2 2013: "We sacrificed consumer market to save enterprise. We lost both. The 'focus' strategy focused us into irrelevance."`
                        }
                    }
                },
                {
                    id: "nokia-partnership-now",
                    title: "Nokia Exclusive Partnership",
                    description: "Exclusive deal with Nokia. They drop Symbian, go all-in on Windows Phone exclusively.",
                    risk: "Expensive ($750M/year). Lose other OEMs (HTC, Samsung). Tied to Nokia's fate. Sinking ship?",
                    upside: "Nokia's 16% share joins yours. Combined 37%. Massive hardware scale. Global distribution.",
                    cost: "$750M/year",
                    consequences: {
                        immediate: {
                            cash: -0.75,
                            stock: +4.5,
                            marketShare: +8,
                            morale: "hopeful",
                            unlockedArtifacts: ["nokia-lumia-900"],
                            narrative: `July 2011: Microsoft and Nokia announce exclusive partnership. Nokia abandons Symbian, goes "all-in" on Windows Phone. Microsoft pays Nokia $750M annually + platform licensing waived.

Wall Street euphoric: "Combined 37% share! Scale to compete with Android!" Stock rises 15%. Analysts: "Nokia's hardware + Microsoft's software = credible third platform." Press: "David vs Goliath—Microsoft/Nokia alliance challenges Apple and Google."

Stephen Elop (Nokia CEO, former Microsoft exec): "This is our burning platform solution. Windows Phone is Nokia's future." Terms: Microsoft gets exclusivity (Nokia can't use Android), Nokia gets $750M/year subsidies.

But immediate problem: HTC and Samsung ABANDON Windows Phone within weeks. "Microsoft chose Nokia exclusively. We're out." By August 2011, only Nokia making Windows Phones. Hardware diversity collapses overnight.

Nokia begins Lumia development. Lumia 800 ships November 2011. Beautiful design, Metro UI perfectly implemented. Reviews positive. But Nokia still bleeding share—16% → 12% in Q4 2011 despite Lumia launch.

You rescued Nokia. But did Nokia rescue you? Or did you tie yourself to sinking ship?`
                        },
                        delayed: {
                            date: "Q2 2013",
                            cash: -3.5,
                            stock: -18.5,
                            marketShare: -12,
                            morale: "desperate",
                            narrative: `23 months later: The Nokia exclusive partnership failed catastrophically. Rescuing sinking ship dragged Microsoft down with it.

Nokia's death spiral accelerated: 16% (Q3 2011) → 12% (Q4 2011) → 7% (Q2 2012) → 3% (Q2 2013). Partnership ACCELERATED decline due to Osborne Effect: "Why buy Symbian phone when Nokia switching to Windows Phone next year?" Nokia's Symbian customers all defected to Android/iPhone during transition.

Microsoft inherited Nokia's problems: Combined share peaked 29% (Q4 2011), then collapsed to 9% (Q2 2013) = 20-point loss. Lost HTC/Samsung (went Android-exclusive). Only Nokia hardware meant: No choice, limited retail presence, no flagship diversity.

The $750M/year subsidy became $1.5B/year by 2013—Nokia burning cash faster than projected. Total Microsoft spending: $750M (2011) + $1.2B (2012) + $1.5B (H1 2013) = $3.5B subsidies. Nokia still dying.

Lumia quality issues: Lumia 900 (April 2012) launched as flagship. Within 2 weeks: "Software bug prevents connectivity." Nokia gave all buyers $100 credit, called phone "beta test." Reviews destroyed: "Flagship phone broken at launch. Amateur hour."

September 2013: Microsoft buys Nokia's devices division for $7.2B to prevent total collapse. Now owns dying phone manufacturer, exclusive to dying platform. Board: "We spent $11B total ($3.5B subsidies + $7.2B acquisition) to get 9% market share and inheriting Nokia's losses."

The "rescue mission" became "mutual destruction." Nokia's decline was terminal—partnership accelerated rather than reversed it. Microsoft learned: You can't save drowning swimmer who pulls you under.`
                        }
                    }
                }
            ]
        },

        {
            id: "d5-sustainability",
            type: "decision",
            date: "JAN 2013",
            timeMarker: "JAN 2013",
            title: "The Sustainability Question",
            storyImage: '<i class="ph ph-chart-line" style="font-size: 4rem;"></i>',
            storyText: `You've held 18-20% share for 18 months. App ecosystem at 62K apps (decent). Product good. But you're #3 platform and still losing money.

Android 53%, iOS 20%, you 18%. Total investment so far: $1.6B. Revenue: $500M. Net: -$1.1B.

But trend is positive: Share stable, apps growing, path to profitability visible (break-even 2014). CFO says defending 18% leads to profit 2015. Or push for #2 position (25%+) with $3B more investment.

Historical precedent: Mac survived at 7% for decades. Can Windows Phone survive at 18%? Is being #3 sustainable, or do network effects doom all third platforms?`,

            objective: "Define Long-Term Strategy",
            availableInfo: ["platform-viability-2013", "enterprise-niche-economics-2013", "blackberry-collapse-2013", "third-platform-precedents-2013"],

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
                    risk: "$3B spent. Could end in -$13.7B total loss.",
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
                    title: "Enterprise Niche Strategy",
                    description: "Give up consumer completely. Pure enterprise focus. Target 12% enterprise share only.",
                    risk: "Lose consumer developers. Smaller ecosystem. Growth ceiling at 12%. Repeat BlackBerry mistake?",
                    upside: "Immediate profitability ($300M/year). Play to strengths. Lower cost ($200M/year vs $400M).",
                    cost: "$200M/year",
                    consequences: {
                        immediate: {
                            cash: -0.2,
                            stock: +2.5,
                            marketShare: -6,
                            morale: "focused",
                            unlockedArtifacts: ["microsoft-surface-rt"],
                            narrative: `January 2013: Microsoft announces enterprise-only pivot. "Windows Phone serves business, not consumers. We're the productivity platform."

Strategy: Give up 10% consumer share voluntarily. Focus 100% on enterprise: Office 365 integration, Continuum (phone-as-PC), enterprise security, Exchange perfection. Stop funding consumer apps (Instagram, Snapchat, games).

Wall Street LOVES it: Immediate path to profitability. Stock rises 8%. Analysts: "Finally playing to strengths. $300M/year profit better than chasing consumers at -$150M/year loss."

Consumer developers immediately leave: Instagram, Snapchat, Spotify all stop Windows Phone development. "Microsoft gave up consumer. So are we." App count crashes: 62K → 35K within 6 months (all consumer apps abandoned).

Enterprise buyers cautiously optimistic: "If Microsoft serious about enterprise, we'll consider." But memory of BlackBerry failure fresh. "Will BYOD kill this too?"

Market share: 18% → 12% immediately (consumer users defect to Android/iOS). But 12% is pure enterprise now—stable base.`
                        },
                        delayed: {
                            date: "Q4 2015",
                            cash: +0.5,
                            stock: -8.5,
                            marketShare: -9,
                            morale: "resigned",
                            narrative: `34 months later: Enterprise niche strategy failed. BlackBerry's fate repeated—BYOD killed enterprise-only positioning.

The BYOD problem Microsoft couldn't solve: Even enterprise buyers wanted consumer apps. Executives needed Uber (business travel), Lyft (client meetings), WhatsApp (international calls), Instagram (brand management). "It's an enterprise phone that can't do business."

Enterprise adoption reality check: CIOs loved Windows Phone specs. But employees revolted: "Give me iPhone allowance or I'll use personal iPhone for work." IT departments: "Easier to support BYOD iPhones than force unpopular platform."

Market share collapse: 12% (Q1 2013) → 7% (Q2 2014) → 3% (Q4 2015) = 9-point death spiral. Lost consumer entirely, then BYOD eroded enterprise anyway. Exact same trajectory as BlackBerry (11% → 7% → 3% during 2011-2014).

Financial reality: Profitable 2013-2014 ($300M/year as promised), but scale economics broke at <5% share. 2015: -$200M loss as costs couldn't shrink below $250M platform maintenance while revenue fell to $150M.

App ecosystem collapsed: 35K apps (2013) → 18K apps (2015). Enterprise apps stayed (Salesforce, SAP) but consumer apps gone meant employees refused devices. Missing Uber alone killed thousands of enterprise sales.

October 2015: Satya Nadella announces Windows 10 Mobile (last attempt). But at 3% share, already over. Board demands exit strategy. Enterprise-only positioning proven impossible in BYOD era—learned BlackBerry's lesson the expensive way.`
                        }
                    }
                },
                {
                    id: "merge-blackberry",
                    title: "Acquire BlackBerry",
                    description: "Buy BlackBerry. Combine 18% + 7% = 25% share. Merge platforms into unified enterprise solution.",
                    risk: "$5B acquisition. Two dying platforms. Integration nightmare. Osborne Effect kills both during merger.",
                    upside: "25% share overnight. Combined enterprise strength. Patents. BBM messaging (90M users).",
                    cost: "$5B",
                    consequences: {
                        immediate: {
                            cash: -5.0,
                            stock: -12.5,
                            marketShare: +4,
                            morale: "confused",
                            unlockedArtifacts: ["blackberry-z10"],
                            narrative: `February 2013: Microsoft announces $5B acquisition of BlackBerry. "Combining mobile enterprise leaders. Windows Phone + BlackBerry = 25% unified platform."

Wall Street HATES it: Stock crashes 42%. Analysts: "Tying two sinking ships together. Which platform survives? OS war inside Microsoft?" Tech press: "Desperation move. Neither platform viable alone, somehow viable together?"

Immediate Osborne Effect: BlackBerry users panic. "Is BB10 dead? Should I switch to iPhone now before forced migration?" Windows Phone users panic. "Are we getting BlackBerry keyboards? Is Metro UI dead?" Combined 25% share starts bleeding immediately—both user bases flee to iPhone/Android during uncertainty.

Developer chaos: "Do we build for Windows Phone, BB10, or wait for 'unified platform'?" Instagram, Snapchat, Spotify all refuse to support either platform during transition. App development freezes across both ecosystems.

Integration planning nightmare: Engineering teams from Waterloo (BlackBerry) vs Redmond (Microsoft). Two cultures, two dying platforms, zero alignment. "Who's OS wins? Whose team gets laid off?"

Market share: 18% + 7% = 22% Day 1 (not 25%—3% defected immediately on announcement). And falling fast.`
                        },
                        delayed: {
                            date: "Q4 2014",
                            cash: -3.2,
                            stock: -22.5,
                            marketShare: -16,
                            morale: "defeated",
                            narrative: `22 months later: BlackBerry acquisition catastrophically failed. Combined 22% became 6%—worst mobile M&A in history.

The integration disaster: Spent 18 months debating "Windows Phone or BB10?" Meanwhile both platforms died. Chose Windows Phone (November 2013), abandoned BB10. Result: BlackBerry users ALL defected to iPhone ("We knew it"). Windows Phone users left too ("Microsoft can't even keep one platform alive").

Platform death spiral: 22% (Feb 2013) → 16% (Q4 2013) → 11% (Q2 2014) → 6% (Q4 2014) = 16-point collapse. Osborne Effect during 18-month integration killed both platforms. Users: "Why buy dying platform when iPhone/Android proven winners?"

Developer exodus: Combined app count: 62K (WP) + 70K (BB) = 132K on paper. Reality: Apps dropped to 38K as developers abandoned both platforms. Instagram, Uber, Snapchat, WhatsApp all refused to build for "confused merger platform."

Financial destruction: $5B acquisition + $1.2B integration costs + $1.8B writedown (2014) + $1.2B annual platform costs = $9.2B total loss (2013-2014). Revenue: $600M (2013) + $350M (2014) = $950M. NET: -$8.3B catastrophic loss.

Employee destruction: 22,000 BlackBerry employees (pre-acquisition) → 8,000 remaining (post-integration) = 14,000 layoffs. Waterloo office gutted. Engineering talent fled to Apple, Google. Microsoft inherited demoralized, decimated team.

The lesson learned painfully: You can't save two drowning people by tying them together. Combined platforms didn't create strength—created mutual destruction. Board: "We paid $5B to accelerate our own death from 18% to 6%."

October 2014: Satya Nadella (new CEO) announces "hard reset" on mobile strategy. Windows 10 Mobile last attempt. But at 6% share, already over.`
                        }
                    }
                }
            ]
        },

        {
            id: "d6-long-term",
            type: "decision",
            date: "JAN 2017",
            timeMarker: "JAN 2017",
            title: "The Long-Term Strategy",
            storyImage: '<i class="ph ph-cloud" style="font-size: 4rem;"></i>',
            storyText: `It's 2017. You've done it. Windows Phone is profitable: $600M revenue, $240M profit, 15% share.

But context matters: You're now Satya Nadella (became CEO 2014). Microsoft's market cap went $300B → $500B. What drove growth? Azure $20B (100% YoY growth), Office 365 $15B, LinkedIn $5B, Gaming $10B.

Windows Phone? It's 0.2% of Microsoft's revenue.

"Mobile first, cloud first" doesn't mean Windows Phone first—it means Microsoft services on EVERY device (iOS, Android, WP). Cloud is the real battle.

Maintain Windows Phone as profitable small business? Or exit and focus 100% on Azure/AI? Is 0.2% of revenue worth management attention?`,

            objective: "Windows Phone's Future",
            availableInfo: ["satya-cloud-2017", "platform-consolidation-2017", "opportunity-cost-2017", "open-source-precedents-2017"],

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
                    title: "One More Try",
                    description: "Double down. $2B growth investment to push for 25%+ share. Beat iOS. Win #2 position.",
                    risk: "Market consolidated. Android/iOS duopoly locked in. Very high chance of failure. Repeat actual history.",
                    upside: "If somehow successful, reclaim #2 spot at 25%+. But odds <5% by 2017.",
                    cost: "$2B",
                    consequences: {
                        immediate: {
                            cash: -2.0,
                            stock: -8.5,
                            marketShare: 0,
                            morale: "all-in",
                            unlockedArtifacts: ["microsoft-surface-duo"],
                            narrative: `January 2017: Against all advice, Microsoft announces $2B "Windows Phone Renaissance" initiative. Satya Nadella overruled by board: "We're so close to viability. One more push."

Strategy: (1) Acquire remaining OEMs to control hardware, (2) $1B developer fund for top 1000 apps, (3) $500M marketing campaign, (4) Subsidize carrier deals, (5) Cut prices 40% to undercut iPhone.

Wall Street HATES it: Stock crashes 28%. Analysts: "Throwing good money after bad. Mobile war is over. This is sunk cost fallacy." Tech press: "Microsoft trying to revive Windows Phone in 2017 is like Blockbuster opening new stores in 2015."

Internal rebellion: Azure team furious. "That $2B should go to cloud. Mobile is 0.2% of business!" Senior engineers: "We're profitable at 15%. Why risk it?" But board insists: "We didn't come this far to accept third place."

Market reality check: Android 85%, iOS 15%. To grow, Windows Phone must take share from entrenched duopoly with billion+ users locked in ecosystems. Probability of success: <5%.

The bet is made. The outcome predetermined.`
                        },
                        delayed: {
                            date: "Q4 2019",
                            cash: -3.8,
                            stock: -18.5,
                            marketShare: -12,
                            morale: "defeated",
                            narrative: `34 months later: The $2B bet failed catastrophically. Windows Phone dead. Exact repeat of actual history.

Market share collapse: 15% (Q1 2017) → 9% (Q2 2018) → 4% (Q4 2018) → 3% (Q4 2019). The growth push ACCELERATED decline. Why? Users saw desperation marketing, sensed dying platform, switched to "safe choices" (iPhone/Android).

The $2B spending breakdown:
- Developer fund ($1B): Paid developers for ports that users didn't want. Quality terrible.
- Marketing ($500M): "Windows Phone is back!" campaign while share was falling. Backfired.
- Hardware subsidies ($300M): Carriers took money, gave shelf space to Android anyway.
- Price cuts ($200M): Devalued brand. "Windows Phone discounted = Windows Phone desperate."

Developer exodus: Despite $1B fund, developers abandoned platform. Instagram, Snapchat, Uber all stopped updates 2018. "Microsoft can't pay us enough to build for 3% market share."

OEM collapse: Even Microsoft-funded OEMs (HTC, Nokia remnants) exited 2018-2019. "Can't make Windows Phone profitable even with subsidies."

October 2019: Microsoft announces Windows Phone discontinuation. Satya Nadella: "We tried one more time. Market spoke definitively. We're exiting mobile hardware."

FINAL ACCOUNTING (2007-2019): Alternate history merged with actual history
- Total investment: $4B ($2B 2007-2016 + $2B 2017-2019)
- Revenue: $3.2B total
- NET LOSS: -$0.8B ❌

Compare to sustainable niche path: +$400M profit
Difference: $1.2B destroyed by "one more try"

Lesson brutally learned: When you've achieved profitable niche, DON'T chase impossible growth. Market consolidation is real. Third platforms can survive but not win. The $2B "one more try" transformed +$400M success into -$800M failure.`
                        }
                    }
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
                    title: "Open Source Transition",
                    description: "Open source Windows Phone. Let community maintain. Microsoft provides minimal support ($50M/year).",
                    risk: "Community may not sustain. OEMs exit. Developers abandon. Fragmentation. Becomes webOS 2.0.",
                    upside: "Minimal cost. Community innovation. Hobbyist continuation. Goodwill gesture to 180M users.",
                    cost: "$50M/year",
                    consequences: {
                        immediate: {
                            cash: -0.05,
                            stock: +3.5,
                            marketShare: -2,
                            morale: "abandoned",
                            unlockedArtifacts: ["hp-touchpad"],
                            narrative: `July 2017: Microsoft announces Windows Phone open source transition. "We're releasing Windows Phone as open source project. Community will guide platform's future."

Wall Street loves it: Stock rises 12%. "Microsoft exits distraction, minimal cost." Analysts: "Smart move—keeps platform alive without investment burden."

Community initial excitement: Reddit, forums buzz with enthusiasm. "We'll maintain Windows Phone! Community forks incoming!" Open source advocates celebrate. Developers: "Finally, freedom to innovate!"

But immediate problems emerge:
- OEMs exit within weeks: "No corporate backing = no commitment." Microsoft Hardware stops producing devices.
- Developers skeptical: "Open source means Microsoft abandoned it. Why build apps for abandoned platform?"
- 180M users panic: "Is my phone dying? Should I switch now?" 13% immediate defection to Android/iOS.

Microsoft provides: Source code, build tools, minimal documentation, $50M/year support fund. But no: Marketing, carrier deals, OEM partnerships, platform roadmap.

Market share: 15% → 13% immediately (panic switching). Community fork "Windows Phone Community Edition" launches. But cracks already showing.`
                        },
                        delayed: {
                            date: "Q4 2021",
                            cash: -0.2,
                            stock: +8.5,
                            marketShare: -14,
                            morale: "moved-on",
                            narrative: `54 months later: Open source Windows Phone dead. Community couldn't sustain platform. Followed exact webOS trajectory.

The slow death timeline:
- 2017-2018: Community enthusiastic. Small team maintains OS updates, security patches. Apps still functioning.
- 2018-2019: Major apps stop updating. Instagram (stopped Oct 2018), banking apps (stopped Q1 2019), Uber (stopped Q2 2019). "Can't support dying platform."
- 2019-2020: Security vulnerabilities emerge. Community lacks resources for proper security audits. Enterprise abandons platform (security risk).
- 2020-2021: OEMs completely gone. No new devices. Existing devices aging out. Users forced to migrate.

Market share trajectory: 13% (Q3 2017) → 8% (2018) → 4% (2019) → 1% (2020) → 0.5% (2021) = death spiral.

Community fragmentation: Five major forks emerged (WPCE, PhoenixOS, ModernPhone, MetroNext, LumiaCommunity). Developer confusion: "Which fork do I build for?" Answer: None—too small audiences.

Microsoft's $50M/year covered: Hosting, minimal staff, legal. But couldn't cover: Platform development, security, OEM relationships, developer evangelism, marketing. Open source model requires either (1) massive community (Linux scale) or (2) corporate backing (Android/Google). Windows Phone had neither.

Comparison to webOS: Exact same trajectory. Palm open sourced webOS 2012, LG abandoned 2014, fully dead 2015. Windows Phone open source 2017, community struggled 2018-2020, dead 2021.

Final user migration: 180M users (2017) → 2M hobbyists (2021). 178M forced to buy iPhone/Android. Painful, slow death vs clean exit.

TOTAL COST (2007-2021):
- Investment: $2.2B ($2B + $200M open source support)
- Revenue: $3.8B
- NET: +$1.6B ✓ (barely profitable)

But comparison: Sustainable niche path (+$400M by 2017, then +$2.1B through 2024) = +$2.5B. Open source path: +$1.6B. Lost potential: $900M.

Lesson: Open sourcing dying platform is slow, painful death. Better to maintain profitably or exit cleanly than half-abandon users to community that can't sustain platform.`
                        }
                    }
                }
            ]
        }
    ]
};