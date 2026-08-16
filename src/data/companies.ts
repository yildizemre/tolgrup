export type Lang = 'tr' | 'en' | 'de';

export type LocalizedText = {
  tr: string;
  en: string;
  de: string;
};

export type Company = {
  id: string;
  name: LocalizedText;
  shortName: string;
  title: LocalizedText;
  description: LocalizedText;
  color: string;
  /** height in % of the columns area, for the column bar on desktop */
  height: number;
  logo: string;
  website: string;
  /** optional partner login URL (e.g. MySki) */
  partnerLogin?: string;
};

export type HoldingInfo = {
  holdingName: LocalizedText;
  description: LocalizedText;
  logo: string;
  contactTitle: LocalizedText;
  contactUrl: string;
};

export const holdingInfo: HoldingInfo = {
  holdingName: {
    tr: 'TOL GRUP',
    en: 'TOL GROUP',
    de: 'TOL GROUP',
  },
  description: {
    tr: 'Geleceğin Teknolojisini Bugünden İnşa Ediyoruz. Bilişim sektöründe 30 yılı aşkın köklü tecrübemiz ve yenilikçi vizyonumuzla, kurumların dijital dönüşüm yolculuklarına rehberlik etmekten gurur duyuyoruz. TOL Grup olarak; kurumsal ağ altyapılarından zayıf akım sistemlerine, özelleştirilmiş yazılım projelerinden veri güvenliğine, AR-GE çalışmalarından bulut çözümleri ve sistem entegrasyonuna kadar geniş bir yelpazede uçtan uca hizmet sunuyoruz. Dünyanın önde gelen teknoloji üreticileriyle kurduğumuz stratejik iş ortaklıkları sayesinde, standart çözümlerin ötesine geçerek her işletmenin dinamiklerine özel butik mimariler tasarlıyoruz. Amacımız, sunduğumuz sürdürülebilir ve güvenilir altyapılarla iş ortaklarımızın operasyonel verimliliklerini en üst seviyeye çıkarmak ve küresel rekabette öne geçmelerini sağlamaktır. Yüksek hizmet kalitesini ve sürdürülebilir müşteri memnuniyetini merkeze alan hizmet anlayışımızla, iş dünyasını geleceğin teknolojileriyle buluşturmaya ve güvenilir bir çözüm ortağı olarak değer yaratmaya devam ediyoruz. Dijital geleceğinizi birlikte şekillendirmek üzere sizleri çözümlerimizi keşfetmeye davet ediyoruz.',
    en: 'Building the Technology of the Future Today. With over 30 years of deep-rooted experience in the IT sector and our innovative vision, we take pride in guiding institutions on their digital transformation journeys. As TOL Group, we provide end-to-end services across a broad spectrum — from corporate network infrastructures to low-current systems, from customized software projects to data security, from R&D to cloud solutions and system integration. Thanks to our strategic partnerships with the world\u2019s leading technology manufacturers, we go beyond standard solutions and design boutique architectures tailored to the dynamics of each business. Our goal is to maximize the operational efficiency of our business partners with the sustainable and reliable infrastructures we provide, enabling them to stand out in global competition. With our service approach centered on high service quality and sustainable customer satisfaction, we continue to bring the business world together with the technologies of the future and create value as a reliable solution partner. We invite you to explore our solutions to shape your digital future together.',
    de: 'Wir bauen die Technologie der Zukunft schon heute. Mit über 30 Jahren tief verwurzelter Erfahrung im IT-Sektor und unserer innovativen Vision begleiten wir Institutionen auf ihrem Weg der digitalen Transformation mit Stolz. Als TOL Group bieten wir End-to-End-Services über ein breites Spektrum — von Unternehmensnetzwerk-Infrastrukturen über Schwachstromsysteme, maßgeschneiderte Softwareprojekte und Datensicherheit bis hin zu F&E, Cloud-Lösungen und Systemintegration. Dank unserer strategischen Partnerschaften mit den weltweit führenden Technologieherstellern gehen wir über Standardlösungen hinaus und entwerfen Boutique-Architekturen, die auf die Dynamik jedes Unternehmens zugeschnitten sind. Unser Ziel ist es, die betriebliche Effizienz unserer Geschäftspartner mit nachhaltigen und zuverlässigen Infrastrukturen zu maximieren und sie im globalen Wettbewerb hervorzuheben. Mit unserem auf hohe Servicequalität und nachhaltige Kundenzufriedenheit ausgerichteten Ansatz bringen wir die Geschäftswelt mit den Technologien der Zukunft zusammen und schaffen als verlässlicher Lösungspartner Mehrwert. Wir laden Sie ein, unsere Lösungen zu entdecken und Ihre digitale Zukunft gemeinsam zu gestalten.',
  },
  logo: '/logo.svg',
  contactTitle: {
    tr: 'İletişim',
    en: 'Contact',
    de: 'Kontakt',
  },
  contactUrl: '/contact',
};

export const companies: Company[] = [
  {
    id: 'carbonited',
    name: { tr: 'CARBONITED', en: 'CARBONITED', de: 'CARBONITED' },
    shortName: 'CARB',
    title: { tr: 'CARBO\nNITED', en: 'CARBO\nNITED', de: 'CARBO\nNITED' },
    description: {
      tr: 'Sürdürülebilir bir gelecek ve net sıfır karbon hedefleri için dijital finansın gücünü harekete geçiriyoruz. Gelişmiş blokzincir altyapımız ve şeffaf doğrulama mekanizmalarımızla, karbon kredisi ticaretini karmaşık süreçlerden arındırarak küresel ölçekte erişilebilir ve güvenilir bir pazar yerine dönüştürüyoruz. Karbon ayak izini nötrlemek isteyen kurumları, yüksek kaliteli ve doğrulanmış iklim projeleriyle doğrudan buluşturuyor; kredilerin üretiminden emekli edilmesine (retire) kadar tüm süreci uçtan uca izlenebilir kılıyoruz. Çevresel sorumluluğu dijital varlıkların likiditesi ve hızıyla birleştirerek, iklim finansmanını yeniden şekillendiriyoruz. Geleceği dönüştürün, izinizi nötrleyin, gezegene değer katın.',
      en: 'We mobilize the power of digital finance for a sustainable future and net-zero carbon goals. With our advanced blockchain infrastructure and transparent verification mechanisms, we strip carbon credit trading of complexity and transform it into an accessible and reliable global marketplace. We directly connect organizations seeking to neutralize their carbon footprint with high-quality verified climate projects, making the entire process — from credit generation to retirement — end-to-end traceable. By combining environmental responsibility with the liquidity and speed of digital assets, we reshape climate finance. Transform the future, neutralize your footprint, add value to the planet.',
      de: 'Wir mobilisieren die Kraft der digitalen Finanzwelt für eine nachhaltige Zukunft und Netto-Null-Klimaziele. Mit unserer fortschrittlichen Blockchain-Infrastruktur und transparenten Verifikationsmechanismen befreien wir den Handel mit CO2-Krediten von Komplexität und verwandeln ihn in einen zugänglichen und verlässlichen globalen Marktplatz. Wir verbinden Organisationen, die ihren CO2-Fußabdruck neutralisieren möchten, direkt mit hochwertigen verifizierten Klimaprojekten und machen den gesamten Prozess — von der Kreditgenerierung bis zum Retirement — durchgängig nachverfolgbar. Durch die Verbindung von ökologischer Verantwortung mit der Liquidität und Geschwindigkeit digitaler Vermögenswerte gestalten wir die Klimafinanzierung neu. Gestalten Sie die Zukunft, neutralisieren Sie Ihren Fußabdruck, schaffen Sie Mehrwert für den Planeten.',
    },
    color: '#A56B5B',
    height: 100,
    logo: '/logo.svg',
    website: 'https://carbonited.com/',
  },
  {
    id: 'myski',
    name: { tr: 'MYSKI', en: 'MYSKI', de: 'MYSKI' },
    shortName: 'MYSKI',
    title: { tr: 'MY\nSKI', en: 'MY\nSKI', de: 'MY\nSKI' },
    description: {
      tr: 'Karla kaplı zirvelere ve pistlerin özgürlüğüne adım atmaya hazır mısın? Sadece bir uygulama değil; dağdaki en güvenilir yol arkadaşın, performans antrenörün ve seni sınırlarını zorlamaya davet eden küresel bir topluluk. Pistlerin canlı durumundan anlık kar raporlarına, maksimum hızından eğim analizlerine kadar ihtiyacın olan tüm veri artık cebinde. İlk inişinden günün son dönüşüne kadar attığın her izi kaydet, dünyadaki binlerce kayakçıyla rekabet et ve dağın ritmini tut. Tutkunu kaydet, sınırları aş, zirvenin hakimi ol.',
      en: 'Are you ready to step into snow-capped peaks and the freedom of the slopes? Not just an app; your most reliable companion on the mountain, your performance coach, and a global community inviting you to push your limits. From live slope conditions to instant snow reports, from your maximum speed to slope analysis, all the data you need is now in your pocket. From your first run to the last turn of the day, record every track you leave, compete with thousands of skiers worldwide, and keep the rhythm of the mountain. Record your passion, push the limits, own the summit.',
      de: 'Bereit, in schneebedeckte Gipfel und die Freiheit der Pisten zu treten? Nicht nur eine App; Ihr zuverlässigster Begleiter auf dem Berg, Ihr Leistungscoach und eine globale Gemeinschaft, die Sie einlädt, Ihre Grenzen zu überschreiten. Von Live-Pistenbedingungen bis zu sofortigen Schneeberichten, von Ihrer Höchstgeschwindigkeit bis zur Pistenanalyse — alle Daten, die Sie benötigen, sind jetzt in Ihrer Tasche. Vom ersten Abstieg bis zur letzten Kurve des Tages: Zeichnen Sie jede Spur auf, treten Sie mit Tausenden von Skifahrern weltweit in den Wettbewerb und halten Sie den Rhythmus des Berges. Zeichnen Sie Ihre Leidenschaft auf, überschreiten Sie die Grenzen, werden Sie zum Herrscher des Gipfels.',
    },
    color: '#B8995C',
    height: 100,
    logo: '/logo.svg',
    website: 'https://demo.myski.com.tr/landingpage.html',
    partnerLogin: 'https://demo.myski.com.tr/partner-login.html',
  },
  {
    id: 'mysignage',
    name: { tr: 'MYSIGNAGE', en: 'MYSIGNAGE', de: 'MYSIGNAGE' },
    shortName: 'SIGN',
    title: { tr: 'MY\nSIGNAGE', en: 'MY\nSIGNAGE', de: 'MY\nSIGNAGE' },
    description: {
      tr: 'Ekranların ötesinde, her mekâna zekâ ve işlevsellik katan uçtan uca dijital yayıncılık deneyimleri tasarlıyoruz. Açık hava reklam alanlarından konaklama tesislerine, ticari merkezlerden mobil ulaşım ağlarına ve geniş bayi zincirlerine kadar hayatın aktığı her noktada varız. Sadece yazılım geliştirmekle kalmıyor; her projenin mimarisine uygun, butik donanımlar (hardware) tasarlıyor, üretiyor ve sahada entegre ediyoruz. Yapay zekâ destekli medya yönetim altyapımız sayesinde; taksi içindeki bir ekrandan devasa şehir mecralarına kadar binlerce noktayı tek bir merkezden kesintisiz, akıllı ve anlık olarak yönetiyoruz. Fikir aşamasından özel donanım üretimine, içerik akışından saha kurulumuna kadar dijital yayıncılığın tüm süreçlerini tek çatıda buluşturarak markaların görsel gücünü geleceğe taşıyoruz. Güçlü donanım, akıllı içerik, kesintisiz erişim: Dijital yayıncılığın geleceğini şekillendirin.',
      en: 'Beyond screens, we design end-to-end digital broadcasting experiences that bring intelligence and functionality to every space. From outdoor advertising to hospitality venues, from commercial centers to mobile transit networks and large dealer chains, we are present at every point where life flows. We do not just develop software; we design, produce, and integrate bespoke hardware tailored to each project\u2019s architecture. With our AI-powered media management infrastructure, we manage thousands of points — from a screen inside a taxi to massive city media — from a single center, seamlessly, intelligently, and in real time. From concept to custom hardware production, from content streaming to on-site installation, we bring all processes of digital broadcasting under one roof. Powerful hardware, smart content, uninterrupted access: shape the future of digital broadcasting.',
      de: 'Über Bildschirme hinaus gestalten wir End-to-End digitale Rundfunk-Erlebnisse, die jedem Raum Intelligenz und Funktionalität verleihen. Von Außenwerbung über Beherbergungsbetriebe, von Einkaufszentren bis zu mobilen Verkehrsnetzen und großen Händlerketten — wir sind überall präsent, wo das Leben stattfindet. Wir entwickeln nicht nur Software; wir entwerfen, produzieren und integrieren maßgeschneiderte Hardware, die auf die Architektur jedes Projekts zugeschnitten ist. Mit unserer KI-gestützten Medienmanagement-Infrastruktur verwalten wir Tausende von Standorten — von einem Bildschirm in einem Taxi bis hin zu riesigen Stadtmedien — aus einem einzigen Zentrum, nahtlos, intelligent und in Echtzeit. Von der Konzeption über die individuelle Hardware-Produktion bis zum Content-Streaming und der Vor-Ort-Installation bringen wir alle Prozesse des digitalen Rundfunks unter einem Dach zusammen. Leistungsstarke Hardware, intelligente Inhalte, unterbrechungsfreier Zugang: Gestalten Sie die Zukunft des digitalen Rundfunks.',
    },
    color: '#6B8FA8',
    height: 100,
    logo: '/logo.svg',
    website: 'https://mysignage-corporate-tv29.bolt.host/',
  },
  {
    id: 'selfgrocery',
    name: { tr: 'SELFGROCERY', en: 'SELFGROCERY', de: 'SELFGROCERY' },
    shortName: 'SELF',
    title: { tr: 'SELF\nGROCERY', en: 'SELF\nGROCERY', de: 'SELF\nGROCERY' },
    description: {
      tr: 'Kasa kuyruklarının, beklemelerin ve zaman kaybının sona erdiği yeni nesil alışveriş çağına hoş geldiniz. Gelişmiş yapay zekâ ve bilgisayarlı gör (computer vision) teknolojimizle, perakende deneyimini tamamen görünmez ve zahmetsiz hale getiriyoruz. Mağazaya adım attığınız andan itibaren akıllı kameralarımız seçtiğiniz ürünleri anında tespit eder, dijital sepetinize ekler ve siz sadece yürüyüp çıkarsınız. Ödeme, arka planda güvenli dijital cüzdanınızdan saniyeler içinde tamamlanır; faturanız ve alışveriş ekstreniz anında cebinize ulaşır. Personelsiz, kasasız ve kesintisiz. Mağazacılığın geleceğini bugünden inşa ediyor, fiziksel alışverişi dijital dünyanın hızıyla buluşturuyoruz. Adım atın, seçin ve çıkın; gerisini teknolojimize bırakın.',
      en: 'Welcome to the next-generation shopping era where checkout queues, waiting, and wasted time come to an end. With our advanced AI and computer vision technology, we make the retail experience entirely invisible and effortless. From the moment you step into the store, our smart cameras instantly detect the products you pick, add them to your digital cart, and you simply walk out. Payment is completed in seconds from your secure digital wallet in the background; your receipt and shopping statement arrive instantly on your phone. Staffless, checkoutless, and uninterrupted. We build the future of retail today, merging physical shopping with the speed of the digital world. Step in, pick, and walk out; leave the rest to our technology.',
      de: 'Willkommen im Einkaufszeitalter der nächsten Generation, in dem Kassenschlangen, Wartezeiten und Zeitverlust ein Ende haben. Mit unserer fortschrittlichen KI- und Computer-Vision-Technologie machen wir das Einkaufserlebnis völlig unsichtbar und mühelos. Sobald Sie den Laden betreten, erkennen unsere intelligenten Kameras die von Ihnen ausgewählten Produkte sofort, fügen sie Ihrem digitalen Warenkorb hinzu, und Sie gehen einfach hinaus. Die Zahlung wird im Hintergrund in Sekunden aus Ihrer sicheren digitalen Brieftasche abgeschlossen; Ihre Quittung und Ihre Einkaufsabrechnung erreichen sofort Ihr Telefon. Personallos, kassenlos und unterbrechungsfrei. Wir bauen die Zukunft des Einzelhandels heute und verbinden physisches Einkaufen mit der Geschwindigkeit der digitalen Welt. Treten Sie ein, wählen Sie aus und gehen Sie; den Rest übernehmen wir mit unserer Technologie.',
    },
    color: '#5C7A6E',
    height: 100,
    logo: '/logo.svg',
    website: 'https://selfgrocery-autonomo-bgxz.bolt.host/',
  },
  {
    id: 'greenvia',
    name: { tr: 'GREEN VIA', en: 'GREEN VIA', de: 'GREEN VIA' },
    shortName: 'GREEN',
    title: { tr: 'GREEN\nVIA', en: 'GREEN\nVIA', de: 'GREEN\nVIA' },
    description: {
      tr: 'Sürdürülebilir bir gelecek ve döngüsel ekonomi için atık yönetiminin tüm süreçlerini dijitalleştiriyor, sahadaki her adımı veriye dönüştürüyoruz. Atık toplama ve geri dönüşüm sektöründe faaliyet gösteren firmalar için geliştirdiğimiz bulut tabanlı otomasyon platformumuzla; saha operasyonlarından rota optimizasyonuna, araç takibinden yasal mevzuat raporlamalarına kadar tüm süreçleri uçtan uca dijitalleştiriyoruz. Karmaşık ve takibi zor operasyonel süreçleri tek bir merkezden şeffaf, izlenebilir ve verimli hale getirerek işletmelerin maliyetlerini düşürürken çevresel etkilerini en üst düzeyde kontrol etmelerini sağlıyoruz. Donanım ve altyapı maliyetine katlanmadan, bulutun hızı ve esnekliğiyle atık yönetiminizi geleceğin teknolojisine taşıyın. Akıllı süreçler, şeffaf operasyon, sürdürülebilir gelecek: Atık yönetiminin dijital dönüşüm noktası.',
      en: 'We digitalize all waste management processes for a sustainable future and circular economy, turning every step in the field into data. With our cloud-based automation platform developed for companies operating in the waste collection and recycling sector, we digitalize all processes end-to-end — from field operations to route optimization, from vehicle tracking to regulatory reporting. By making complex and hard-to-track operational processes transparent, traceable and efficient from a single center, we help businesses reduce costs while maximizing control over their environmental impact. Without bearing hardware and infrastructure costs, move your waste management to the technology of the future with the speed and flexibility of the cloud. Smart processes, transparent operations, sustainable future: the digital transformation point of waste management.',
      de: 'Wir digitalisieren alle Abfallwirtschaftsprozesse für eine nachhaltige Zukunft und Kreislaufwirtschaft und verwandeln jeden Schritt vor Ort in Daten. Mit unserer cloudbasierten Automatisierungsplattform, die für Unternehmen im Bereich Abfallsammlung und Recycling entwickelt wurde, digitalisieren wir alle Prozesse End-to-End — von Feldoperationen über Routenoptimierung bis hin zur Fahrzeugverfolgung und regulatorischen Berichterstattung. Indem wir komplexe und schwer nachverfolgbare operative Prozesse aus einem einzigen Zentrum transparent, nachverfolgbar und effizient machen, helfen wir Unternehmen, Kosten zu senken und gleichzeitig die Kontrolle über ihre Umweltauswirkungen zu maximieren. Ohne Hardware- und Infrastrukturkosten zu tragen, bringen Sie Ihr Abfallmanagement mit der Geschwindigkeit und Flexibilität der Cloud in die Technologie der Zukunft. Intelligente Prozesse, transparente Operationen, nachhaltige Zukunft: der digitale Transformationspunkt der Abfallwirtschaft.',
    },
    color: '#4A7A5C',
    height: 100,
    logo: '/logo.svg',
    website: 'https://green-via.com/',
  },
  {
    id: 'misgate',
    name: { tr: 'MISGATE', en: 'MISGATE', de: 'MISGATE' },
    shortName: 'MISG',
    title: { tr: 'MIS\nGATE', en: 'MIS\nGATE', de: 'MIS\nGATE' },
    description: {
      tr: 'Dijital Dönüşümün Güvencesi, Finansal Teknolojilerin Geleceğiyiz. Teknolojinin hızıyla şekillenen yeni ekonomi çağında, güçlü bir yazılım altyapısına sahip olmak artık bir tercih değil, sürdürülebilir başarının temel şartıdır. Güvenli, ölçeklenebilir ve akıllı yazılım mimarileri; kurumların pazardaki konumunu belirleyen ve onları rekabetin önüne geçiren en kritik güçtür. Biz, finansal teknolojilerin yüksek güvenlik gerektiren dünyasını uzmanlığımızla yönetiyor, şirketinizin benzersiz ihtiyaçlarına tam uyum sağlayan terzi usulü özel yazılım çözümleri geliştiriyoruz. Karmaşık finansal operasyonları pürüzsüz süreçlere dönüştüren vizyonumuzla, kurumunuzun dijitaldeki en güçlü stratejik ortağı oluyoruz. Amacımız; en ileri teknolojileri, yüksek veri güvenliği ve kusursuz kullanıcı deneyimiyle birleştirerek işinizi geleceğe taşımaktır. Yalnızca bugünün ihtiyaçlarını karşılayan değil, yarının büyüme hedeflerini esneklikle destekleyen sistemler inşa ediyoruz. Güvenli, yenilikçi ve sınırları aşan bir dijital geleceği birlikte inşa edelim.',
      en: 'The Assurance of Digital Transformation, the Future of Financial Technologies. In the new economic era shaped by the speed of technology, having a robust software infrastructure is no longer a choice but a fundamental requirement for sustainable success. Secure, scalable, and intelligent software architectures are the most critical force determining an institution\u2019s position in the market and propelling it ahead of the competition. We manage the high-security world of financial technologies with our expertise, developing tailor-made custom software solutions that perfectly fit your company\u2019s unique needs. With our vision of transforming complex financial operations into seamless processes, we become your institution\u2019s most powerful strategic partner in the digital realm. Our purpose is to elevate your business to the future by combining the most advanced technologies with high data security and a flawless user experience. We build systems that not only meet today\u2019s needs but also flexibly support tomorrow\u2019s growth goals. Let\u2019s build a secure, innovative, and boundary-breaking digital future together.',
      de: 'Die Garantie der digitalen Transformation, die Zukunft der Finanztechnologien. In der neuen wirtschaftlichen Ära, die durch das Tempo der Technologie geprägt ist, ist eine robuste Software-Infrastruktur keine Wahl mehr, sondern eine Grundvoraussetzung für nachhaltigen Erfolg. Sichere, skalierbare und intelligente Software-Architekturen sind die kritischste Kraft, die die Position eines Unternehmens auf dem Markt bestimmt und es vor den Wettbewerb katapultiert. Wir verwalten die hochsichere Welt der Finanztechnologien mit unserer Expertise und entwickeln maßgeschneiderte Softwarelösungen, die perfekt auf die einzigartigen Bedürfnisse Ihres Unternehmens zugeschnitten sind. Mit unserer Vision, komplexe Finanzoperationen in nahtlose Prozesse zu verwandeln, werden wir der stärkste strategische Partner Ihres Unternehmens im digitalen Bereich. Unser Ziel ist es, Ihr Unternehmen in die Zukunft zu heben, indem wir fortschrittlichste Technologien mit hoher Datensicherheit und makelloser Benutzererfahrung verbinden. Wir bauen Systeme, die nicht nur die heutigen Bedürfnisse erfüllen, sondern auch die Wachstumsziele von morgen flexibel unterstützen. Gestalten wir gemeinsam eine sichere, innovative und grenzenüberschreitende digitale Zukunft.',
    },
    color: '#7B6B8A',
    height: 100,
    logo: '/logo.svg',
    website: 'https://misgate.com/',
  },
  {
    id: 'visiongate',
    name: { tr: 'VISIONGATE', en: 'VISIONGATE', de: 'VISIONGATE' },
    shortName: 'VISG',
    title: { tr: 'VISION\nGATE', en: 'VISION\nGATE', de: 'VISION\nGATE' },
    description: {
      tr: 'Görüntü tabanlı geçiş kontrol çözümü. Yapay zeka destekli kamera sistemleriyle plaka tanıma, kişi tespiti ve otomatik geçiş onayı sağlıyor. Güvenlik ve verimliliği bir arada sunuyoruz.',
      en: 'Vision-based access control solution. With AI-powered camera systems, we provide license plate recognition, person detection and automatic passage approval. We deliver security and efficiency together.',
      de: 'Bildbasierte Zugangskontrolllösung. Mit KI-gestützten Kamerasystemen bieten wir Kennzeichen-Erkennung, Personenerkennung und automatische Passiergenehmigung. Wir liefern Sicherheit und Effizienz in einem.',
    },
    color: '#5C8A72',
    height: 100,
    logo: '/logo.svg',
    website: 'https://visiongate.com/',
  },
  {
    id: 'gatement',
    name: { tr: 'GATEMENT', en: 'GATEMENT', de: 'GATEMENT' },
    shortName: 'GATE',
    title: { tr: 'GATE\nMENT', en: 'GATE\nMENT', de: 'GATE\nMENT' },
    description: {
      tr: 'Sınırları ortadan kaldıran, güvenli ve kesintisiz dijital ödeme altyapımızla küresel ticaretin akışını hızlandırıyoruz. Gelişmiş finansal teknolojimiz ve ölçeklenebilir altyapımızla, işletmelerin karmaşık ödeme süreçlerini esnek, hızlı ve tamamen güvenli bir deneyime dönüştürüyoruz. Çoklu para birimi yönetiminden akıllı ödeme yönlendirme sistemlerine, dijital cüzdan entegrasyonlarından uluslararası transfer ağlarına kadar tüm finansal trafiği tek bir güçlü geçit üzerinden yönetilmesini sağlıyoruz. Global pazarlarda büyümek ve kullanıcılarınıza pürüzsüz bir finansal deneyim sunmak için ihtiyaç duyduğunuz tüm altyapıyı tek noktada birleştiriyoruz. Güvenli altyapı, kesintisiz ödeme akışı, sınırsız büyüme: Küresel ticaretin yeni nesil ödeme geçidi.',
      en: 'We accelerate the flow of global commerce with our borderless, secure and uninterrupted digital payment infrastructure. With our advanced financial technology and scalable infrastructure, we transform complex payment processes of businesses into a flexible, fast and fully secure experience. From multi-currency management to smart payment routing systems, from digital wallet integrations to international transfer networks, we enable all financial traffic to be managed through a single powerful gateway. We bring together in one place all the infrastructure you need to grow in global markets and offer your users a seamless financial experience. Secure infrastructure, uninterrupted payment flow, limitless growth: the next-generation payment gateway for global commerce.',
      de: 'Wir beschleunigen den globalen Handel mit unserer grenzenlosen, sicheren und unterbrechungsfreien digitalen Zahlungsinfrastruktur. Mit unserer fortschrittlichen Finanztechnologie und skalierbaren Infrastruktur verwandeln wir komplexe Zahlungsprozesse von Unternehmen in ein flexibles, schnelles und vollständig sicheres Erlebnis. Von der Multi-Währungs-Verwaltung über intelligente Zahlungs-Routing-Systeme bis hin zu digitalen Brieftaschen-Integrationen und internationalen Transfernetzwerken ermöglichen wir die Verwaltung des gesamten Finanzverkehrs über ein einziges leistungsstarkes Gateway. Wir vereinen an einem Ort die gesamte Infrastruktur, die Sie benötigen, um auf globalen Märkten zu wachsen und Ihren Nutzern ein nahtloses Finanzerlebnis zu bieten. Sichere Infrastruktur, unterbrechungsfreier Zahlungsfluss, grenzenloses Wachstum: das Zahlungs-Gateway der nächsten Generation für den globalen Handel.',
    },
    color: '#9C5B5B',
    height: 100,
    logo: '/logo.svg',
    website: 'https://www.gatement.com/',
  },
  {
    id: 'ticketcut',
    name: { tr: 'TICKETCUT', en: 'TICKETCUT', de: 'TICKETCUT' },
    shortName: 'TICK',
    title: { tr: 'TICKET\nCUT', en: 'TICKET\nCUT', de: 'TICKET\nCUT' },
    description: {
      tr: 'TICKETCUT, konserlerden tiyatrolara, festivallerden spor etkinliklerine kadar uzanan geniş bir yelpazede bilet satışını kolay, güvenli ve keyifli hale getirmek için tasarlanmış yenilikçi bir etkinlik ve biletleme platformudur. Amacımız, kullanıcıların en sevdikleri etkinliklere birkaç tıklamayla ulaşabilmesini sağlarken; organizatörlere de bilet satış, yönetim ve tanıtım süreçlerinde güçlü, şeffaf ve verimli bir altyapı sunmaktır. TICKETCUT olarak, etkinlik dünyasını dijitalleştiriyor ve hem katılımcılar hem de etkinlik sahipleri için kusursuz bir deneyim yaratıyoruz. Platformumuz, kullanıcıların hızlı, güvenli ve kolay bir şekilde bilet almasını sağlarken; organizatörlerin de etkinliklerini tek panel üzerinden yönetmesine, satışları anlık olarak takip etmesine ve hedef kitlesine daha etkili biçimde ulaşmasına olanak tanır.',
      en: 'TICKETCUT is an innovative event and ticketing platform designed to make ticket sales easy, secure, and enjoyable across a wide range of events — from concerts to theater, festivals to sports. Our goal is to enable users to reach their favorite events with just a few clicks, while providing organizers with a powerful, transparent, and efficient infrastructure for ticket sales, management, and promotion. As TICKETCUT, we digitalize the event world and create a flawless experience for both attendees and event organizers. Our platform enables users to purchase tickets quickly, securely, and easily, while allowing organizers to manage their events through a single panel, track sales in real time, and reach their target audience more effectively.',
      de: 'TICKETCUT ist eine innovative Event- und Ticketing-Plattform, die dafür entwickelt wurde, den Ticketverkauf über ein breites Spektrum von Veranstaltungen — von Konzerten über Theater, Festivals bis hin zu Sportevents — einfach, sicher und angenehm zu gestalten. Unser Ziel ist es, Nutzern den Zugang zu ihren Lieblingsveranstaltungen mit nur wenigen Klicks zu ermöglichen und gleichzeitig Veranstaltern eine leistungsstarke, transparente und effiziente Infrastruktur für Ticketverkauf, Verwaltung und Werbung zu bieten. Als TICKETCUT digitalisieren wir die Event-Welt und schaffen ein makelloses Erlebnis für sowohl Teilnehmer als auch Veranstalter. Unsere Plattform ermöglicht es Nutzern, Tickets schnell, sicher und einfach zu erwerben, während Veranstalter ihre Events über ein einziges Panel verwalten, Verkäufe in Echtzeit verfolgen und ihr Zielpublikum effektiver erreichen können.',
    },
    color: '#3D5A6C',
    height: 100,
    logo: '/logo.svg',
    website: 'https://www.ticketcut.com/',
  },
];

export const uiText = {
  companiesLabel: { tr: 'Şirketler', en: 'Companies', de: 'Unternehmen' },
  visit: { tr: 'Ziyaret Et', en: 'Visit', de: 'Besuchen' },
  close: { tr: 'Kapat', en: 'Close', de: 'Schließen' },
  languageName: { tr: 'Türkçe', en: 'English', de: 'Deutsch' },
  partnerLogin: { tr: 'Partner Girişi', en: 'Partner Login', de: 'Partner-Login' },
} as const;
