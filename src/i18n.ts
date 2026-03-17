import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        features: "Features",
        team: "Our People",
        contact: "Contact"
      },
      hero: {
        badge: "Agricultural Innovation",
        title: "Smart Chicken Farming Solution",
        highlight: "Made Accessible and Easy to Use",
        subtitle: "Bringing IoT, AI, and automation technology to small and medium-sized farms in Cambodia",
        feature1: "24/7 Monitoring",
        feature2: "AI-Powered",
        feature3: "Edge-Ready Intelligence",
        exploreBtn: "Explore Features",
        contactBtn: "Get in Touch",
        scrollDown: ""
      },
      about: {
        badge: "About Us",
        title: "Who We Are",
        heading: "Revolutionizing Agriculture in Cambodia",
        paragraph1: "Tokkatot is a local initiative born from a shared vision of a group of youths to transform Cambodia's agricultural technology landscape. Our mission is to make smart automatic technology accessible to small and medium-sized chicken farms across the country.",
        paragraph2: "By leveraging IoT, AI, and automation, we provide affordable alternatives to expensive industrial-grade components. Our vision is to reduce dependency on imported agri-tech solutions and empower local farmers with cutting-edge technology.",
        stat1Title: "Local Innovation",
        stat1Desc: "Cambodian-made solution",
        stat2Title: "Affordable",
        stat2Desc: "Competitive pricing",
        stat3Title: "Customizable",
        stat3Desc: "Tailored to your farm's needs"
      },
      features: {
        badge: "Features",
        title: "Our Technology",
        subtitle: "Four integrated systems to optimize your chicken farm",
        feature1Title: "Climate Control",
        feature1Desc: "Real-time temperature and humidity monitoring with automatic regulation to maintain optimal conditions for healthy chicken growth.",
        feature1Item1: "24/7 environmental monitoring",
        feature1Item2: "Automatic climate adjustment",
        feature1Item3: "Alert notifications",
        feature2Title: "Auto Feeding & Watering",
        feature2Desc: "Automated feeding and watering systems that ensure your chickens receive proper nutrition and hydration on schedule.",
        feature2Item1: "Changable feeding schedules",
        feature2Item2: "Precise portion control",
        feature2Item3: "Water level monitoring",
        feature3Title: "Manure Conveyor System",
        feature3Desc: "Efficient waste management with automated manure conveyor belts, keeping the farm clean and reducing manual labor.",
        feature3Item1: "Automated waste removal",
        feature3Item2: "Improved farm hygiene",
        feature3Item3: "Reduced labor costs",
        feature4Title: "AI Disease Detection",
        feature4Desc: "Advanced AI-powered fecal image monitoring on the conveyor belt to detect potential disease outbreaks before they spread.",
        feature4Item1: "Real-time image analysis",
        feature4Item2: "Early disease detection",
        feature4Item3: "Instant farmer alerts",
        hubTitle: "Centralized Control Hub",
        hubDesc: "All features are controlled through our locally-hosted central hub, accessible from your smartphone via our intuitive web dashboard. Monitor and control your entire farm operation from anywhere.",
        hubTag1: "Edge Intelligence",
        hubTag2: "Mobile Access",
        hubTag3: "Real-time Data",
        hubTag4: "Easy Control",
        testimonialsBadge: "Trusted by Farmers",
        testimonialsTitle: "Real Farm Testing & Validation",
        testimonialsSubtitle: "We don't just build technology; we validate it where it matters most—on actual Cambodian chicken farms.",
        farmer1Quote: "Since implementing Tokkatot, my manual work has decreased by half. I can monitor my farm from my phone while I'm at the market. It gives me peace of mind.",
        farmer1Name: "Channary S.",
        farmer1Location: "Poultry Farmer, Kampong Speu",
        stat1Number: "10+",
        stat1Label: "Active Pilot Farms",
        stat2Number: "95%",
        stat2Label: "Accuracy in AI Detection",
        stat3Number: "Locally",
        stat3Label: "Designed & Supported"
      },
      team: {
        title: "Our People",
        subtitle: "The visionary founders and experts driving the future of Cambodian agriculture",
        member1Name: "Yung Sreyneang",
        member1Role: "Co-Founder & CEO",
        member1Bio: "Leading executive decisions and the overall vision. Responsible for media, PR, and transforming Cambodia's agricultural technology sector.",
        member1Email: "sreyneangyung.tokkatot@gmail.com",
        member2Name: "Virak Rangsey",
        member2Role: "Co-Founder & Business Lead",
        member2Bio: "Specializes in financial budget planning and business development, ensuring sustainable growth and strategic partnerships.",
        member2Email: "rangseyvirak.tokkatot@gmail.com",
        member3Name: "Sophea Darika",
        member3Role: "Chief Operating Officer",
        member3Bio: "Responsible for team operations, administrative tasks, and contributing to R&D and frontend development.",
        member3Email: "darikasophea.tokkatot@gmail.com",
        member4Name: "Sun Heng",
        member4Role: "Co-Founder & AI Engineer",
        member4Bio: "Leading R&D for AI systems and features. Specializes in intelligent solutions and high-performance frontend development.",
        member4Email: "hengsun.tokkatot@gmail.com",
        member5Name: "Kaem Sreyneath",
        member5Role: "Co-Founder & Embedded Systems Engineer",
        member5Bio: "Developing the core automation hardware and embedded systems that power Tokkatot's smart solutions.",
        member5Email: "sreyneathkaem.tokkatot@gmail.com"
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Interested in bringing Tokkatot to your farm? We'd love to hear from you!",
        infoTitle: "Contact Information",
        infoDesc: "Reach out to our team to discuss and learn more about Tokkatot and how we can help transform your chicken farm.",
        email: "Email Support",
        emailValue: "info@tokkatot.com",
        phone: "Consultation",
        nameLabel: "Name",
        emailLabel: "Email",
        phoneLabel: "Phone",
        messageLabel: "How can we help you?",
        sendBtn: "Send Message",
        sendingBtn: "Sending...",
        successMsg: "Message sent! We'll get back to you soon.",
        errorMsg: "Error sending message. Please try support@tokkatot.com"
      },
      awards: {
        title: "Our Achievements",
        award1: {
          title: "First Runner-Up - E-Gen Competition",
          desc: "Achieved First Runner-Up in the E-Gen Competition Program organized by the Ministry of Youth, Sport, and Education.",
          date: "April 2025"
        },
        award2: {
          title: "First Place - UnipreneurCamp",
          desc: "Won First Place at UnipreneurCamp Cluster 1 – Season 3, organized by Khmer Enterprise.",
          date: "July 2025"
        },
        award3: {
          title: "Emerging Innovator Award",
          desc: "Selected among 8 teams out of hundreds across Cambodia to receive the Emerging Innovator Award from Khmer Enterprise.",
          date: "October 2025"
        },
        award4: {
          title: "Best Pitching Award",
          desc: "Represented CamTech University and Cambodia at UNIC Demo Day 2025 and received the Best Pitching Award.",
          date: "December 2, 2025"
        },
        award5: {
          title: "ActSmart Incubation Program",
          desc: "Selected as one of the Top 9 teams for the three-month incubation program organized by the AUPP Technology Center.",
          date: "Nov 2025 - Present"
        }
      },
      footer: {
        tagline: "Empowering Cambodian farmers with smart automation technology.",
        quickLinks: "Platform",
        company: "Company",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        support: "Support",
        helpCenter: "Help Center",
        followUs: "Connect",
        copyright: "© 2026 Tokkatot. All rights reserved."
      }
    }
  },
  km: {
    translation: {
      nav: {
        home: "ទំព័រដើម",
        about: "អំពីពួកយើង",
        features: "មុខងារ",
        team: "ក្រុមការងារ",
        contact: "ទំនាក់ទំនង"
      },
      hero: {
        badge: "ការច្នៃប្រឌិតកសិកម្មឆ្លាតវៃ",
        title: "ការចិញ្ចឹមមាន់ឆ្លាតវៃ",
        highlight: "ផ្ដល់ភាពងាយស្រួលក្នុងការប្រើប្រាស់",
        subtitle: "នាំមកកាន់កសិដ្ឋានចិញ្ចឹមមាន់ខ្នាតតូច និងមធ្យមនៅកម្ពុជា​​ ជាមួយបច្ចេកវិទ្យា IoT, AI និងស្វ័យប្រវត្តិកម្ម",
        feature1: "ដំណើរការត្រួតពិនិត្យ ២៤/៧",
        feature2: "ដំណើរការដោយបច្ចេកវិទ្យា AI",
        feature3: "បច្ចេកវិទ្យាបញ្ជាផ្ទាល់ (Edge Intelligence)",
        exploreBtn: "ស្វែងយល់មុខងាររបស់យើងបន្ថែម",
        contactBtn: "ទាក់ទងមកពួកយើង",
        scrollDown: ""
      },
      about: {
        badge: "អំពីពួកយើង",
        title: "មកស្គាល់ពីពួកយើង",
        heading: "ទំនើបកម្មវិស័យកសិកម្មនៅកម្ពុជា",
        paragraph1: "តុក្កតត គឺជាគំនិតផ្តួចផ្តើមដោយយុវជនកម្ពុជាមួយក្រុម ដែលកើតចេញពីទស្សនវិស័យរួមគ្នា ដើម្បីផ្លាស់ប្តូរវិស័យបច្ចេកវិទ្យាកសិកម្មរបស់កម្ពុជា។ បេសកកម្មរបស់យើងគឺនាំមកនូវ​ ស្វ័យប្រវត្តិកម្មឆ្លាតវៃសម្រាប់កសិដ្ឋានចិញ្ចឹមមាន់ខ្នាតតូច និងមធ្យមទូទាំងប្រទេស។",
        paragraph2: "តាមរយៈការប្រើប្រាស់បច្ចេកវិទ្យា IoT, AI និងស្វ័យប្រវត្តិកម្ម យើងផ្តល់ជម្រើសតម្លៃសមរម្យជំនួសគ្រឿងបង្គំឧស្សាហកម្មថ្លៃៗ។ ចក្ខុវិស័យរបស់យើងគឺកាត់បន្ថយការនាំចូល​ និងការពឹងពាក់លើដំណោះស្រាយបច្ចេកវិទ្យាកសិកម្ម និងលើកកម្ពស់ដល់ផលិតកម្មកសិករក្នុងស្រុក។",
        stat1Title: "គំនិតផ្តួចផ្តើមក្នុងស្រុក",
        stat1Desc: "ដំណោះស្រាយរបស់កម្ពុជា",
        stat2Title: "តម្លៃសមរម្យ",
        stat2Desc: "តម្លៃប្រកួតប្រជែងក្នុងទីផ្សារ",
        stat3Title: "បត់បែនតាមតម្រូវការ",
        stat3Desc: "ស្រប់តាមកសិដ្ឋានរបស់លោកអ្នក"
      },
      features: {
        badge: "អំពីមុខងារ",
        title: "បច្ចេកវិទ្យារបស់យើង",
        subtitle: "យើងមានមុខងារចំនួនបួន ដើម្បីបង្កើនប្រសិទ្ធភាពកសិដ្ឋានចិញ្ចឹមមាន់របស់អ្នក",
        feature1Title: "ត្រួតពិនិត្យ គ្រប់គ្រងសីតុណ្ហភាព និងសំណើម",
        feature1Desc: "តាមដានសីតុណ្ហភាព និងសំណើមក្នុងពេលជាក់ស្តែង ជាមួយនឹងការតម្រូវស្វ័យប្រវត្តិ ដើម្បីរក្សាលក្ខខណ្ឌល្អប្រសើរសម្រាប់ការលូតលាស់ដើម្បីឱ្យមាន់មានសុខភាពល្អ។",
        feature1Item1: "តាមដានបរិយាកាសក្នុងទ្រុង ២៤/៧",
        feature1Item2: "ការកែតម្រូវអាកាសធាតុដោយស្វ័យប្រវត្តិ",
        feature1Item3: "ការជូនដំណឹងពីព័តមានទ្រុងមាន់",
        feature2Title: "ប្រព័ន្ធដាក់ទឹក​ និងចំណីស្វ័យប្រវត្តិ",
        feature2Desc: "ប្រព័ន្ធដាក់ទឹក និងចំណីស្វ័យប្រវត្តិ ដែលធានាថាមាន់របស់អ្នកទទួលបានអាហារូបត្ថម្ភ និងទឹកគ្រប់គ្រាន់តាមកាលវិភាគកំណត់។",
        feature2Item1: "កាលវិភាគអាចកំណត់បាន",
        feature2Item2: "ត្រួតពិនិត្យបរិមាណចំណីបានយ៉ាងជាក់លាក់​",
        feature2Item3: "តាមដានកម្រិតទឹកក្នុងអាងស្តុក",
        feature3Title: "ប្រព័ន្ធបង្វែរលាមក",
        feature3Desc: "ការគ្រប់គ្រងកាកសំណល់កសិដ្ឋានប្រកបដោយប្រសិទ្ធភាព ជាមួយនឹងប្រព័ន្ធបង្វែរលាមកស្វ័យប្រវត្ត រក្សាកសិដ្ឋានឱ្យស្អាត និងកាត់បន្ថយកម្លាំងពលកម្ម។",
        feature3Item1: "ការយកចេញនូវកាកសំណល់ដោយស្វ័យប្រវត្តិ",
        feature3Item2: "បង្កើនអនាម័យកសិដ្ឋាន",
        feature3Item3: "កាត់បន្ថយថ្លៃដើមកម្លាំងពលកម្ម",
        feature4Title: "ប្រព័ន្ធរោគវិនិច្ឆ័យជំងឺមាន់តាមរយៈ AI",
        feature4Desc: "ការតាមដានរូបភាពលាមកដែលមិនប្រក្រតីដោយ AI ដើម្បីបង្ការការរីករាលដាលជំងឺ មុនពេលវាចម្លងទៅមាន់ផ្សេងទៀត។",
        feature4Item1: "ការវិភាគរូបភាពនៃលាមកគ្រប់ពេលវេលា",
        feature4Item2: "រោគវិនិច្ឆ័យជំងឺទាន់ពេលវេលា",
        feature4Item3: "ការជូនដំណឹងភ្លាមៗដល់កសិករ",
        hubTitle: "ប្រព័ន្ធបញ្ជារួម",
        hubDesc: "មុខងារទាំងអស់ត្រូវបានគ្រប់គ្រងតាមរយៈប្រព័ន្ធបញ្ជារួមដែលអាចចូលប្រើប្រាស់បានពីទូរស័ព្ទរបស់លោកអ្នក​ ដោយមិនត្រូវការអ៊ីនធឺណិត។ យើងមានផ្ទាំងគ្រប់គ្រងដែលងាយស្រួលប្រើប្រាស់​ ហើយអាចតាមដាន និងគ្រប់គ្រងប្រតិបត្តិការកសិដ្ឋានទាំងមូលរបស់អ្នកពីគ្រប់ទីកន្លែង។",
        hubTag1: "ដាក់ដំណើរការដោយមិនត្រូវការអ៊ីនធឺណិត",
        hubTag2: "អាចចូលប្រើបានតាមទូរស័ព្ទដៃ",
        hubTag3: "ទិន្នន័យពេលវេលាជាក់ស្តែង",
        hubTag4: "ងាយស្រួលក្នុងការគ្រប់គ្រង",
        testimonialsBadge: "ទំនុកចិត្តពីកសិករ",
        testimonialsTitle: "ការសាកល្បង និងបញ្ជាក់ផ្ទាល់ពីកសិដ្ឋាន",
        testimonialsSubtitle: "យើងមិនត្រឹមតែបង្កើតបច្ចេកវិទ្យាប៉ុណ្ណោះទេ ប៉ុន្តែយើងបានចុះអនុវត្តផ្ទាល់នៅតាមកសិដ្ឋានចិញ្ចឹមមាន់ក្នុងស្រុក។",
        farmer1Quote: "ចាប់តាំងពីប្រើ តុក្កតត មក ការងាររបស់ខ្ញុំបានកាត់បន្ថយពាក់កណ្តាល។ ខ្ញុំអាចតាមដានកសិដ្ឋានពីទូរស័ព្ទបាន ទោះបីជានៅផ្សារក៏ដោយ។ វាធ្វើឱ្យខ្ញុំអស់បារម្ភ។",
        farmer1Name: "ចាន់ណារី ស.",
        farmer1Location: "កសិករចិញ្ចឹមមាន់, ខេត្តកំពង់ស្ពឺ",
        stat1Number: "១០+",
        stat1Label: "កសិដ្ឋានសាកល្បង",
        stat2Number: "៩៥%",
        stat2Label: "ភាពត្រឹមត្រូវនៃ AI",
        stat3Number: "ក្នុងស្រុក",
        stat3Label: "រៀបចំ និងគាំទ្រដោយផ្ទាល់"
      },
      team: {
        title: "ក្រុមការងាររបស់ពួកយើង",
        subtitle: "យុវជនខ្មែរដែលមានចក្ខុវិស័យ និងជំនាញ ដើម្បីអនាគតកសិកម្មកម្ពុជា",
        member1Name: "យង់ ស្រីនាង",
        member1Role: "សហស្ថាបនិក និងនាយិកាប្រតិបត្តិ",
        member1Bio: "ដឹកនាំការសម្រេចចិត្តប្រតិបត្តិ និងទស្សនវិស័យរួម។ ទទួលខុសត្រូវលើប្រព័ន្ធផ្សព្វផ្សាយ ទំនាក់ទំនងសាធារណៈ និងការផ្លាស់ប្តូរវិស័យបច្ចេកវិទ្យាកសិកម្មកម្ពុជា។",
        member1Email: "sreyneangyung.tokkatot@gmail.com",
        member2Name: "វីរៈ រង្សី",
        member2Role: "សហស្ថាបនិក និងប្រធានផ្នែកអាជីវកម្ម",
        member2Bio: "ឯកទេសផ្នែកផែនការថវិកាហិរញ្ញវត្ថុ និងការអភិវឌ្ឍអាជីវកម្ម ធានានូវការរីកចម្រើនប្រកបដោយនិរន្តរភាព និងភាពជាដៃគូយុទ្ធសាស្ត្រ។",
        member2Email: "rangseyvirak.tokkatot@gmail.com",
        member3Name: "សុភា ដារិកា",
        member3Role: "ប្រធានផ្នែកប្រតិបត្តិការ",
        member3Bio: "ទទួលខុសត្រូវលើប្រតិបត្តិការក្រុម កិច្ចការរដ្ឋបាល និងរួមចំណែកក្នុងការស្រាវជ្រាវ និងអភិវឌ្ឍន៍ផ្ទៃផ្នែកខាងមុខនៃប្រព័ន្ធ។",
        member3Email: "darikasophea.tokkatot@gmail.com",
        member4Name: "ស៊ុន ហេង",
        member4Role: "សហស្ថាបនិក និងវិស្វករបញ្ញាសិប្បនិម្មិត",
        member4Bio: "ដឹកនាំការស្រាវជ្រាវ និងអភិវឌ្ឍន៍សម្រាប់ប្រព័ន្ធ និងមុខងារ AI។ ឯកទេសលើដំណោះស្រាយឆ្លាតវៃ និងការអភិវឌ្ឍន៍ផ្ទៃផ្នែកខាងមុខដែលមានប្រសិទ្ធភាពខ្ពស់។",
        member4Email: "hengsun.tokkatot@gmail.com",
        member5Name: "កែម ស្រីនាថ",
        member5Role: "សហស្ថាបនិក និងវិស្វករប្រព័ន្ធបង្កប់",
        member5Bio: "អភិវឌ្ឍផ្នែករឹងស្វ័យប្រវត្តិកម្ម និងប្រព័ន្ធបង្កប់ដែលជាស្នូលនៃដំណោះស្រាយឆ្លាតវៃរបស់តុក្កតត។",
        member5Email: "sreyneathkaem.tokkatot@gmail.com"
      },
      contact: {
        title: "ទាក់ទងមកកាន់ពួកយើង",
        subtitle: "ចាប់អារម្មណ៍ក្នុងការនាំយក តុក្កតត មកកាន់កសិដ្ឋានរបស់លោកអ្នក? ពួកយើងរងចាំ និងត្រៀមខ្លួនក្នុងការឆ្លើយតបលោកអ្នកជានិច្ច!",
        infoTitle: "ព័ត៌មានទំនាក់ទំនងរបស់ពួកយើង",
        infoDesc: "ទាក់ទងមកក្រុមរបស់យើង ដើម្បីស្វែងយល់បន្ថែមអំពី តុក្កតត និងពិភាក្សាអំពីរបៀបដែលយើងអាចជួយផ្លាស់ប្តូរកសិដ្ឋានចិញ្ចឹមមាន់របស់អ្នក។",
        email: "អ៊ីមែលគាំទ្រ",
        emailValue: "info@tokkatot.com",
        phone: "ពិគ្រោះយោបល់",
        nameLabel: "ឈ្មោះ",
        emailLabel: "អ៊ីមែល",
        phoneLabel: "លេខទូរស័ព្ទ",
        messageLabel: "តើពួកយើងអាចជួយអ្វីដល់អ្នកបានខ្លះ?",
        sendBtn: "ផ្ញើសារ",
        sendingBtn: "កំពុងផ្ញើ...",
        successMsg: "សារត្រូវបានផ្ញើ! យើងនឹងទាក់ទងទៅអ្នកវិញឆាប់ៗ។",
        errorMsg: "មានកំហុសក្នុងការផ្ញើសារ។ សូមផ្ញើមកកាន់ support@tokkatot.com"
      },
      awards: {
        title: "សមិទ្ធផលរបស់យើង",
        award1: {
          title: "ជ័យលាភីលេខ ២ - កម្មវិធីប្រកួតប្រជែង E-Gen",
          desc: "ទទួលបានជ័យលាភីលេខ ២ ក្នុងកម្មវិធីប្រកួតប្រជែង E-Gen ដែលរៀបចំដោយក្រសួងអប់រំ យុវជន និងកីឡា។",
          date: "មេសា ២០២៥"
        },
        award2: {
          title: "ជ័យលាភីលេខ ១ - UnipreneurCamp",
          desc: "ទទួលបានជ័យលាភីលេខ ១ ក្នុងកម្មវិធី UnipreneurCamp Cluster 1 – Season 3 ដែលរៀបចំដោយសហគ្រិនខ្មែរ។",
          date: "កក្កដា ២០២៥"
        },
        award3: {
          title: "ពានរង្វាន់ Emerging Innovator Award",
          desc: "ត្រូវបានជ្រើសរើសក្នុងចំណោម ៨ ក្រុម ចេញពីក្រុមរាប់រយទូទាំងប្រទេស ដើម្បីទទួលបានពានរង្វាន់ Emerging Innovator Award ពីសហគ្រិនខ្មែរ។",
          date: "តុលា ២០២៥"
        },
        award4: {
          title: "ពានរង្វាន់ Best Pitching Award",
          desc: "តំណាងឱ្យសាកលវិទ្យាល័យ ខេមតិច និងប្រទេសកម្ពុជា ក្នុងកម្មវិធី UNIC Demo Day 2025 និងទទួលបានពានរង្វាន់ Best Pitching Award។",
          date: "ថ្ងៃទី ២ ខែធ្នូ ឆ្នាំ ២០២៥"
        },
        award5: {
          title: "កម្មវិធីបណ្តុះបណ្តាល ActSmart",
          desc: "ត្រូវបានជ្រើសរើសជាក្រុម Top 9 ក្នុងចំណោមក្រុមជាច្រើន សម្រាប់កម្មវិធីបណ្តុះបណ្តាលរយៈពេល ៣ ខែ រៀបចំដោយមជ្ឈមណ្ឌលបច្ចេកវិទ្យា AUPP។",
          date: "វិច្ឆិកា ២០២៥ - បច្ចុប្បន្ន"
        }
      },
      footer: {
        tagline: "លើកកម្ពស់កសិករកម្ពុជា ជាមួយនឹងបច្ចេកវិទ្យាស្វ័យប្រវត្តិកម្មឆ្លាតវៃ។",
        quickLinks: "ប្រព័ន្ធ",
        company: "ក្រុមហ៊ុន",
        legal: "ច្បាប់",
        privacy: "គោលការណ៍ឯកជនភាព",
        terms: "លក្ខខណ្ឌប្រើប្រាស់",
        support: "ការគាំទ្រ",
        helpCenter: "មជ្ឈមណ្ឌលជំនួយ",
        followUs: "បណ្តាញសង្គម",
        copyright: "© ២០២៦ តុក្កតត។ រក្សាសិទ្ធិគ្រប់យ៉ាង។"
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        about: "关于我们",
        features: "功能",
        team: "我们的团队",
        contact: "联系我们"
      },
      hero: {
        badge: "智慧农业创新",
        title: "智能养鸡",
        highlight: "触手可及",
        subtitle: "为柬埔寨的中小型养鸡场带来物联网、人工智能和自动化技术",
        feature1: "全天候监控",
        feature2: "AI驱动",
        feature3: "本地托管",
        exploreBtn: "探索功能",
        contactBtn: "联系我们",
        scrollDown: "向下滚动"
      },
      about: {
        badge: "关于我们",
        title: "关于我们",
        heading: "革新柬埔寨农业",
        paragraph1: "Tokkatot 是一个由学生主导的项目，源于改变柬埔寨农业技术领域的共同愿景。我们让智能自动化技术惠及全国的中小型养鸡场。",
        paragraph2: "通过利用物联网、人工智能和自动化技术，我们提供价格实惠的替代方案，替代昂贵的工业级组件。我们的使命是减少对进口农业技术解决方案的依赖，并用尖端技术赋能当地农民。",
        stat1Title: "本地创新",
        stat1Desc: "柬埔寨制造的解决方案",
        stat2Title: "价格实惠",
        stat2Desc: "具有竞争力的价格",
        stat3Title: "可定制",
        stat3Desc: "根据您的农场需求定制"
      },
      features: {
        badge: "我们的技术",
        title: "我们的技术",
        subtitle: "四个集成系统协同工作，优化您的养鸡场",
        feature1Title: "气候控制",
        feature1Desc: "实时温度和湿度监控，自动调节以保持健康鸡生长的最佳条件。",
        feature1Item1: "全天候环境监测",
        feature1Item2: "自动气候调节",
        feature1Item3: "警报通知",
        feature2Title: "自动喂食和供水",
        feature2Desc: "自动喂食和供水系统，确保您的鸡按时获得适当的营养和水分。",
        feature2Item1: "可编程喂食时间表",
        feature2Item2: "精确份量控制",
        feature2Item3: "水位监测",
        feature3Title: "粪便输送系统",
        feature3Desc: "采用自动化粪便输送带的高效废物管理，保持农场清洁并减少人工劳动。",
        feature3Item1: "自动废物清除",
        feature3Item2: "改善农场卫生",
        feature3Item3: "降低人工成本",
        feature4Title: "AI疾病检测",
        feature4Desc: "在输送带上进行先进的AI驱动粪便图像监控，在疾病传播之前检测潜在的疾病爆发。",
        feature4Item1: "实时图像分析",
        feature4Item2: "早期疾病检测",
        feature4Item3: "即时农民警报",
        hubTitle: "中央枢纽系统",
        hubDesc: "所有功能都通过我们本地托管的中央枢纽进行控制，可通过智能手机上的直观Web仪表板访问。随时随地监控和控制整个农场运营。",
        hubTag1: "本地托管",
        hubTag2: "移动访问",
        hubTag3: "实时数据",
        hubTag4: "易于控制"
      },
      team: {
        title: "我们的团队",
        subtitle: "推动柬埔寨农业未来的远见卓识的创始人和专家",
        member1Name: "Yung Sreyneang",
        member1Role: "联合创始人兼首席执行官",
        member1Bio: "负责媒体和公关，领导执行决策和整体愿景，致力于改变柬埔寨的农业技术领域。",
        member1Email: "sreyneangyung.tokkatot@gmail.com",
        member2Name: "Virak Rangsey",
        member2Role: "联合创始人兼业务主管",
        member2Bio: "负责财务预算规划和业务发展，确保可持续增长和战略合作伙伴关系。",
        member2Email: "rangseyvirak.tokkatot@gmail.com",
        member3Name: "Sophea Darika",
        member3Role: "运营总监",
        member3Bio: "负责团队运营和行政任务。参与研发和前端开发以支持项目。",
        member3Email: "darikasophea.tokkatot@gmail.com",
        member4Name: "Sun Heng",
        member4Role: "联合创始人兼AI工程师",
        member4Bio: "负责硬件、系统和功能的研发。专注于AI解决方案并参与前端开发。",
        member4Email: "hengsun.tokkatot@gmail.com",
        member5Name: "Kaem Sreyneath",
        member5Role: "联合创始人兼嵌入式系统工程师",
        member5Bio: "专注于嵌入式系统工程，开发支持Tokkatot智能解决方案的核心自动化硬件。",
        member5Email: "sreyneathkaem.tokkatot@gmail.com"
      },
      contact: {
        title: "联系我们",
        subtitle: "有兴趣将Tokkatot引入您的农场？我们很乐意听取您的意见！",
        infoTitle: "联系信息",
        infoDesc: "联系我们的团队，了解更多关于Tokkatot以及我们如何帮助改造您的养鸡场。",
        email: "邮件支持",
        emailValue: "info@tokkatot.com",
        phone: "咨询",
        nameLabel: "姓名",
        emailLabel: "电子邮件",
        phoneLabel: "电话",
        messageLabel: "我们能为您提供什么帮助？",
        sendBtn: "发送消息",
        sendingBtn: "发送中...",
        successMsg: "消息已发送！我们会尽快与您联系。",
        errorMsg: "发送消息出错。请尝试 support@tokkatot.com"
      },
      awards: {
        title: "我们的成就",
        award1: {
          title: "E-Gen 竞赛二等奖",
          desc: "在青年、体育和教育总署组织的 E-Gen 竞赛计划中荣获二等奖。",
          date: "2025年4月"
        },
        award2: {
          title: "UnipreneurCamp 一等奖",
          desc: "在由 Khmer Enterprise 组织的 UnipreneurCamp Cluster 1 – Season 3 中荣获一等奖。",
          date: "2025年7月"
        },
        award3: {
          title: "新兴创新者奖",
          desc: "从柬埔寨数百支队伍中脱颖而出，入选前8强，并获得由 Khmer Enterprise 颁发的“新兴创新者奖”。",
          date: "2025年10月"
        },
        award4: {
          title: "最佳路演奖",
          desc: "代表 CamTech 大学和柬埔寨参加 UNIC Demo Day 2025，并荣获“最佳路演奖”。",
          date: "2025年12月2日"
        },
        award5: {
          title: "ActSmart 入驻计划",
          desc: "入选由 AUPP 技术中心组织的为期三个月的入驻计划的九强队伍。",
          date: "2025年11月 - 至今"
        }
      },
      footer: {
        tagline: "用智能自动化技术赋能柬埔寨农民。",
        quickLinks: "平台",
        company: "公司",
        legal: "法律",
        privacy: "隐私政策",
        terms: "服务条款",
        support: "支持",
        helpCenter: "帮助中心",
        followUs: "关注",
        copyright: "© 2026 Tokkatot。保留所有权利。"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
