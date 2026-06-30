/* Oson Studio — umumiy header, footer va yordamchi funksiyalar */
(function () {
  // ===========================================================
  // === XIZMATLAR — 6 ta sektor bo'yicha tashkillangan ===
  // Badge'lar: 'new' (yangi), 'hot' (mashhur), 'ai' (sun'iy intellekt)
  // ===========================================================
  const TOOL_SECTIONS = [
    {
      id: "mashhuri",
      emoji: "🔥",
      iconSvg: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
      iconGradient: ["#f97316", "#ef4444"],
      title: "Eng mashhuri",
      tools: [
        { slug: "pdf-merge.html", title: "PDF birlashtirish", desc: "Bir necha hujjatni drag-drop bilan bitta PDF'ga aylantiring — fayllar serverga yuborilmaydi.",
          badge: "hot",
          icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6M9 15h6"/>' },
        { slug: "background-removal.html", title: "Fon olib tashlash", desc: "Photoshop kerakmas — AI bir bosishda toza, shaffof fon: stiker, do'kon, profil rasm.",
          badge: "ai",
          icon: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>' },
        { slug: "screen-recorder.html", title: "Ekran yozish", desc: "Ekran + ovozni HD'da yozing — onlayn dars, demo, bug report uchun, faqat brauzerda.",
          badge: "hot",
          icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="3"/>' },
        { slug: "hisob-faktura.html", title: "Hisob-faktura", desc: "STIR, MFO, mahsulot ro'yxati va NDS — to'liq schyot-faktura PDF'i 30 soniyada.",
          badge: "hot",
          icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>' },
        { slug: "password.html", title: "Parol generatori", desc: "Bir click — 16-belgili sindirib bo'lmas parol. Instagram, bank ilovasi, ish hisobi uchun.",
          badge: "hot",
          icon: '<path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' },
        { slug: "qr-code.html", title: "QR kod generatori", desc: "Wi-Fi paroli, menyu, vizit karta — istalgan ma'lumotdan telefonda o'qiluvchi QR kod.",
          badge: "hot",
          icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 21v.01M21 14v3M14 21h3"/>' },
        { slug: "kredit-hisoblagich.html", title: "Kredit kalkulyator", desc: "Kredit olishdan oldin haqiqiy oylik to'lovni biling — bank aytmagan jami foiz va grafik.",
          badge: "hot",
          icon: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20M6 14h.01M10 14h.01M14 14h6"/>' },
        { slug: "lotin-kiril.html", title: "Lotin ↔ Kirill", desc: "Matn bir click'da o'zgaradi — universitet hujjati, rasmiy xat, ota-onaga yuborish uchun.",
          badge: "hot",
          icon: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>' },
        { slug: "tempmail.html", title: "Vaqtinchalik pochta", desc: "Asl email'ingizni sirda saqlang — 1 martalik pochta, spam va bezovta xatlardan qutuling.",
          badge: "hot",
          icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>' }
      ]
    },
    {
      id: "pdf",
      emoji: "📄",
      iconSvg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6M9 17h4"/>',
      iconGradient: ["#ef4444", "#dc2626"],
      title: "Hujjatlar",
      hub: { href: "hujjatlar.html", total: 11 },
      tools: [
        { slug: "pdf-split.html", title: "PDF ajratish", desc: "Kontrakt yoki sertifikatdan kerakli sahifalarni ajratib oling — qolganini tashlab.",
          icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h6M9 12h6"/>' },
        { slug: "jpg-to-pdf.html", title: "JPG → PDF", desc: "Telefondagi rasm hujjatlardan tartibli PDF — pasport, sertifikat, chek uchun.",
          icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L7 19"/>' },
        { slug: "pdf-compress.html", title: "PDF siqish", desc: "10 MB PDF ko'pmi? Sifatni saqlab 2-3 baravar siqing — email, Telegram uchun.",
          icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 11v6M9 14l3 3 3-3"/>' },
        { slug: "ocr.html", title: "OCR — matn tanish", desc: "Skaner hujjatdagi matnni klaviatura urmasdan oling — AI 95% aniqlikda tanidi.",
          badge: "ai",
          icon: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>' }
      ]
    },
    {
      id: "rasm-media",
      emoji: "🖼️",
      iconSvg: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.86-3.86a2 2 0 0 0-2.83 0L6 21"/>',
      iconGradient: ["#ec4899", "#a855f7"],
      title: "Rasm va media",
      tools: [
        { slug: "background-removal.html", title: "Fon olib tashlash", desc: "AI 1 sekundda fonni olib tashlaydi — shaffof PNG: stiker, e-commerce, profil uchun.",
          badge: "ai",
          icon: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>' },
        { slug: "id-photo.html", title: "Hujjat foto (3×4)", desc: "Studiyaga bormang — pasport, viza, haydovchilik 3×4 foto'ni telefondan tayyorlang.",
          icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2.5"/><path d="M5 18a4 4 0 0 1 8 0"/><path d="M16 9h3M16 13h3"/>' },
        { slug: "rasm-konvertor.html", title: "Rasm konvertor", desc: "PNG → JPG, WEBP, HEIC — istalgan format, sifat saqlanadi, drag-drop bilan.",
          icon: '<path d="m16 3 4 4-4 4"/><path d="M20 7H8"/><path d="m8 21-4-4 4-4"/><path d="M4 17h12"/>' },
        { slug: "color-picker.html", title: "Color Picker", desc: "Brend rangi yoki UI palitra — 2D picker, HEX/RGB/HSL, WCAG kontrast tekshiruvi.",
          badge: "new",
          icon: '<circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="13" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="10" cy="20" r="2.5"/><path d="M12 2a10 10 0 0 0-9.54 13"/>' },
        { slug: "screen-recorder.html", title: "Ekran yozish", desc: "Brauzer ekrani + ovoz — onlayn dars, demo, oilaga ko'rsatish, MP4 yuklab oling.",
          icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="3"/>' },
        { slug: "video-to-audio.html", title: "Videodan MP3", desc: "Videodagi ovozni MP3 sifatida ajratib oling — podkast, qo'shiq, dars uchun.",
          icon: '<path d="m10 8 6 4-6 4V8z"/><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h4M2 15h4M18 9h4M18 15h4"/>' },
        { slug: "thumbnail.html", title: "Thumbnail yuklab olish", desc: "YouTube link kiriting — 4K muqova rasmni yuklab oling, reference yoki repost uchun.",
          icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>' },
        { slug: "thumbnail-tester.html", title: "Thumbnail sinovi", desc: "Muqova YouTube'da qanday ko'rinadi? Uy, qidiruv, mobile, Shorts — 4 layout'da test.",
          icon: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>' },
        { slug: "youtube-nik.html", title: "YouTube nik tekshirish", desc: "Kanal uchun @nik bo'shmi yoki bandmi — soniyada bilib oling, bo'sh variantlar taklifi bilan.",
          badge: "new",
          icon: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>' },
        { slug: "audio-effects.html", title: "Ovoz effektlari", desc: "Ovozni robot, bola, hayvon yoki monsterga o'zgartiring — TikTok, prank uchun 10+ effekt.",
          icon: '<path d="M2 10v4M6 6v12M10 3v18M14 8v8M18 5v14M22 10v4"/>' }
      ]
    },
    {
      id: "biznes",
      emoji: "💼",
      iconSvg: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M2 13h20"/>',
      iconGradient: ["#5b5bd6", "#7c3aed"],
      title: "Biznes vositalari",
      hub: { href: "buxgalteriya.html", total: 41 },
      tools: [
        { slug: "akt-generator.html", title: "Akt (bajarilgan ish)", desc: "Ish topshirdingiz? Dalolatnoma — STIR, summa, imzo o'rni bilan PDF tayyor.",
          icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13l2 2 4-4"/>' },
        { slug: "shartnoma-shablon.html", title: "Shartnoma shabloni", desc: "Xizmat, oldi-sotdi, ijara, mehnat — 5 tur shartnoma, to'ldiring va PDF qiling.",
          icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 16c1-1.2 2.2-1.2 3.2 0s2.2 1.2 3.2 0"/>' },
        { slug: "yatt-soliq.html", title: "YaTT soliq", desc: "Yakka tartibda tadbirkormisiz? Daromaddan kelib chiqib soliq, ENS va jami summa.",
          icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/>' },
        { slug: "marja-kalkulyator.html", title: "Marja kalkulyator", desc: "Tannarx + foyda nechi % bo'lsin? Sotuv narxi, marja va naqd daromad — biznes uchun.",
          icon: '<path d="M3 3v18h18"/><path d="M7 17l4-4 4 4 6-6"/>' }
      ]
    },
    {
      id: "matn-mahsuldorlik",
      emoji: "📝",
      iconSvg: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
      iconGradient: ["#0ea5e9", "#3b82f6"],
      title: "Matn va mahsuldorlik",
      tools: [
        { slug: "word-counter.html", title: "Word Counter", desc: "Insho, post, SMS, meta-tag — so'z, belgi, jumla, paragraf va o'qish vaqti real vaqtda.",
          badge: "new",
          icon: '<path d="M4 19h16M4 15h16M4 11h10M4 7h6M14 7l2 4 2-4M18 7h2M16 11h4"/>' },
        { slug: "lorem-ipsum.html", title: "Lorem Ipsum", desc: "Dizayn yoki sayt uchun namuna matn — paragraf, ro'yxat, sarlavha bir click va tayyor.",
          badge: "new",
          icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>' },
        { slug: "tempmail.html", title: "Vaqtinchalik pochta", desc: "Bir martalik email — ro'yxatdan o'tish, kim ekanligingiz sir qoladi, spam yo'q.",
          icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>' },
        { slug: "budget.html", title: "Pul boshqaruvi", desc: "Pul qayoqqa ketdi? Kunlik xarajatni yozing — oylik diagramma va kategoriyalar bo'yicha.",
          icon: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>' },
        { slug: "todo.html", title: "To-do ro'yxati", desc: "Bugungi 10 ta ish — yodda turmaydi. Yozing, tartibga soling, ertangacha saqlanadi.",
          icon: '<path d="m3 7 2 2 4-4"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8M13 12h8M13 18h8"/>' },
        { slug: "pomodoro.html", title: "Pomodoro taymer", desc: "25/5 metod bilan ishni 4x mahsuldor qiling — fokus, qisqa tanaffus, statistika.",
          icon: '<circle cx="12" cy="13" r="8"/><path d="M12 13V9"/><path d="M9 2h6"/><path d="m18 6 1.5-1.5"/>' }
      ]
    }
  ];

  // Hozirgi xizmatlarni ro'yxat sifatida ham saqlaymiz (boshqa joylarda kerak)
  const TOOLS = [];
  const seen = new Set();
  TOOL_SECTIONS.forEach(sec => {
    sec.tools.forEach(t => {
      if (!seen.has(t.slug)) {
        seen.add(t.slug);
        TOOLS.push({ ...t, short: t.title });
      }
    });
  });

  const COLORS = {
    "password.html": "#6366f1", "thumbnail.html": "#ef4444", "thumbnail-tester.html": "#f59e0b",
    "background-removal.html": "#ec4899",
    "video-to-audio.html": "#06b6d4", "audio-effects.html": "#8b5cf6", "tempmail.html": "#14b8a6",
    "budget.html": "#22c55e", "todo.html": "#f97316", "pomodoro.html": "#e11d48", "youtube-nik.html": "#ef4444",
    "screen-recorder.html": "#0ea5e9", "id-photo.html": "#7c3aed",
    "qr-code.html": "#0d9488", "rasm-konvertor.html": "#a855f7",
    "color-picker.html": "#10b981",
    "word-counter.html": "#3b82f6", "lorem-ipsum.html": "#d946ef",
    // PDF/Hujjat
    "pdf-merge.html": "#ef4444", "pdf-split.html": "#f59e0b",
    "jpg-to-pdf.html": "#f97316", "pdf-to-jpg.html": "#fb923c",
    "pdf-compress.html": "#06b6d4", "pdf-rotate.html": "#0ea5e9",
    "pdf-watermark.html": "#8b5cf6", "ocr.html": "#a855f7",
    "lotin-kiril.html": "#3b82f6",
    // Hisoblagichlar
    "kredit-hisoblagich.html": "#22c55e", "yosh-hisoblagich.html": "#06b6d4",
    "kaloriya-hisoblagich.html": "#ef4444", "imc-hisoblagich.html": "#a855f7",
    "homiladorlik-hisoblagich.html": "#ec4899", "olcham-konvertor.html": "#f59e0b",
    "vaqt-mintaqalari.html": "#0ea5e9", "maosh-hisoblagich.html": "#22c55e",
    // Biznes
    "hisob-faktura.html": "#5b5bd6", "akt-generator.html": "#7c3aed",
    "yatt-soliq.html": "#ef4444", "marja-kalkulyator.html": "#10b981",
    "shartnoma-shablon.html": "#0891b2"
  };
  // Ranglarni har bir TOOLS va TOOL_SECTIONS elementiga qo'shamiz
  TOOLS.forEach(t => { t.color = COLORS[t.slug] || "#6366f1"; });
  TOOL_SECTIONS.forEach(sec => sec.tools.forEach(t => { t.color = COLORS[t.slug] || "#6366f1"; }));

  window.OSON_TOOLS = TOOLS;
  window.OSON_TOOL_SECTIONS = TOOL_SECTIONS;

  // === HUB KIRISH KARTALARI (alohida bo'limlar — bosh sahifada "Yana ko'proq") ===
  window.OSON_HUB_CARDS = [
    { href: "kurslar.html", title: "Kurslar", title_ru: "Курсы", title_en: "Courses", desc: "Sun'iy intellekt va Prompt Engineering bo'yicha bepul interaktiv kurslar — sertifikat bilan, noldan.", desc_ru: "Бесплатные интерактивные курсы по искусственному интеллекту и Prompt Engineering — с сертификатом, с нуля.", desc_en: "Free interactive courses on AI and Prompt Engineering — with certificate, from scratch.", badge: "Yangi", color: "#6366f1",
      icon: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>' },
    { href: "iq.html", title: "IQ Test", desc: "20 savol, 30 daqiqa — IQ darajangiz, kognitiv yosh va yuklab olinadigan sertifikat.", badge: "Yangi", color: "#8b5cf6",
      icon: '<path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.1 2.4 5.3.6.6 1 1.4 1.1 2.2l.2 1.3h6.6l.2-1.3c.1-.8.5-1.6 1.1-2.2C17.8 13.1 19 11.4 19 9a7 7 0 0 0-7-7z"/><path d="M9 21h6M10 18v-2.5M14 18v-2.5"/>' },
    { href: "tezyoz.html", title: "Tezyoz", desc: "Klaviatura darslari, tezlik testi va 6 ta typing o'yini — qarab turmay yozishni o'rganing.", color: "#0ea5e9",
      icon: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>' },
    { href: "qazo.html", title: "Qazo hisoblagich", desc: "Namoz, ro'za va ayollar uchun qazolarni aniq hisoblang — PDF jadval bilan.", color: "#10b981",
      icon: '<path d="M2 22h20"/><path d="M7 22V12"/><path d="M17 22V12"/><path d="M7 12c-1.5-4 1.5-8 5-8s6.5 4 5 8"/><path d="M10 22v-5a2 2 0 0 1 4 0v5"/>' },
    { href: "doska.html", title: "Doska", desc: "Onlayn oq doska — chizish, eskiz va diagramma. Dars va jamoaviy fikrlash uchun.", badge: "Beta", color: "#f59e0b",
      icon: '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>' }
  ];

  // ===========================================================
  // === XIZMATLAR — RU/EN tarjimalari (alohida /ru/ /en/ sahifalar uchun) ===
  // Renderer OSON_LANG bo'yicha title_ru/desc_ru yoki title_en/desc_en ni tanlaydi.
  // ===========================================================
  const TR_TOOLS = {
    "pdf-merge.html": { ru: { t: "Объединить PDF", d: "Объедините несколько документов в один PDF перетаскиванием — файлы не отправляются на сервер." }, en: { t: "Merge PDF", d: "Combine several documents into one PDF by drag-and-drop — files never leave your browser." } },
    "background-removal.html": { ru: { t: "Удаление фона", d: "Photoshop не нужен — ИИ в один клик даёт чистый прозрачный фон: стикеры, магазин, аватар." }, en: { t: "Background Removal", d: "No Photoshop needed — AI gives a clean, transparent background in one click: stickers, shops, avatars." } },
    "screen-recorder.html": { ru: { t: "Запись экрана", d: "Записывайте экран и звук в HD — для онлайн-уроков, демо и баг-репортов, прямо в браузере." }, en: { t: "Screen Recorder", d: "Record screen and audio in HD — for online lessons, demos and bug reports, right in the browser." } },
    "hisob-faktura.html": { ru: { t: "Счёт-фактура", d: "ИНН, МФО, список товаров и НДС — готовый PDF счёта-фактуры за 30 секунд." }, en: { t: "Invoice", d: "Tax ID, bank code, item list and VAT — a complete invoice PDF in 30 seconds." } },
    "password.html": { ru: { t: "Генератор паролей", d: "Один клик — надёжный пароль из 16 символов. Для Instagram, банковских приложений и рабочих аккаунтов." }, en: { t: "Password Generator", d: "One click — an unbreakable 16-character password. For Instagram, banking apps and work accounts." } },
    "qr-code.html": { ru: { t: "Генератор QR-кодов", d: "Пароль Wi-Fi, меню, визитка — QR-код из любых данных, читается телефоном." }, en: { t: "QR Code Generator", d: "Wi-Fi password, menu, business card — a phone-readable QR code from any data." } },
    "kredit-hisoblagich.html": { ru: { t: "Кредитный калькулятор", d: "Узнайте реальный ежемесячный платёж до оформления кредита — полная переплата и график, о которых банк молчит." }, en: { t: "Loan Calculator", d: "Know your real monthly payment before taking a loan — the total interest and schedule the bank won't show." } },
    "lotin-kiril.html": { ru: { t: "Латиница ↔ Кириллица", d: "Текст меняется в один клик — для университетских документов, официальных писем и сообщений родителям." }, en: { t: "Latin ↔ Cyrillic", d: "Convert text in one click — for university papers, official letters or messages to parents." } },
    "tempmail.html": { ru: { t: "Временная почта", d: "Скройте свой настоящий email — одноразовая почта, избавьтесь от спама и назойливых писем." }, en: { t: "Temporary Email", d: "Keep your real email private — a one-time inbox that saves you from spam and clutter." } },
    "pdf-split.html": { ru: { t: "Разделить PDF", d: "Извлеките нужные страницы из договора или сертификата — остальное отбросьте." }, en: { t: "Split PDF", d: "Pull the pages you need out of a contract or certificate — drop the rest." } },
    "jpg-to-pdf.html": { ru: { t: "JPG → PDF", d: "Аккуратный PDF из фото-документов с телефона — для паспорта, сертификата, чека." }, en: { t: "JPG → PDF", d: "A tidy PDF from photo documents on your phone — for passports, certificates, receipts." } },
    "pdf-compress.html": { ru: { t: "Сжать PDF", d: "10 МБ для PDF многовато? Сожмите в 2–3 раза без потери качества — для email и Telegram." }, en: { t: "Compress PDF", d: "Is a 10 MB PDF too big? Shrink it 2–3x without losing quality — for email and Telegram." } },
    "ocr.html": { ru: { t: "OCR — распознавание текста", d: "Извлеките текст из скана без печати на клавиатуре — ИИ распознаёт с точностью 95%." }, en: { t: "OCR — Text Recognition", d: "Get text from a scanned document without typing — AI recognizes it with 95% accuracy." } },
    "id-photo.html": { ru: { t: "Фото на документы (3×4)", d: "Не ходите в студию — сделайте фото 3×4 на паспорт, визу или права прямо с телефона." }, en: { t: "ID Photo (3×4)", d: "Skip the studio — make a 3×4 photo for passport, visa or licence from your phone." } },
    "rasm-konvertor.html": { ru: { t: "Конвертер изображений", d: "PNG → JPG, WEBP, HEIC — любой формат, качество сохраняется, перетаскиванием." }, en: { t: "Image Converter", d: "PNG → JPG, WEBP, HEIC — any format, quality preserved, by drag-and-drop." } },
    "color-picker.html": { ru: { t: "Палитра цветов", d: "Цвет бренда или UI-палитра — 2D-пикер, HEX/RGB/HSL, проверка контраста WCAG." }, en: { t: "Color Picker", d: "Brand color or UI palette — 2D picker, HEX/RGB/HSL, WCAG contrast check." } },
    "video-to-audio.html": { ru: { t: "Видео в MP3", d: "Извлеките звук из видео в MP3 — для подкаста, песни или урока." }, en: { t: "Video to MP3", d: "Extract audio from video as MP3 — for a podcast, song or lesson." } },
    "thumbnail.html": { ru: { t: "Скачать обложку", d: "Вставьте ссылку YouTube — скачайте обложку в 4K для референса или репоста." }, en: { t: "Thumbnail Downloader", d: "Paste a YouTube link — download the 4K thumbnail for reference or reposting." } },
    "thumbnail-tester.html": { ru: { t: "Тест обложки", d: "Как обложка смотрится на YouTube? Тест в 4 раскладках: главная, поиск, мобильный, Shorts." }, en: { t: "Thumbnail Tester", d: "How does your thumbnail look on YouTube? Test it in 4 layouts: home, search, mobile, Shorts." } },
    "youtube-nik.html": { ru: { t: "Проверка ника YouTube", d: "Свободен ли @ник для канала — узнайте за секунду, с предложением свободных вариантов." }, en: { t: "YouTube Handle Checker", d: "Is the @handle free for your channel? Find out in a second, with free-name suggestions." } },
    "audio-effects.html": { ru: { t: "Голосовые эффекты", d: "Превратите голос в робота, ребёнка, животное или монстра — 10+ эффектов для TikTok и пранков." }, en: { t: "Voice Effects", d: "Turn your voice into a robot, child, animal or monster — 10+ effects for TikTok and pranks." } },
    "akt-generator.html": { ru: { t: "Акт выполненных работ", d: "Сдали работу? Акт с ИНН, суммой и местом для подписи — готовый PDF." }, en: { t: "Work Acceptance Act", d: "Finished a job? An acceptance act with tax ID, amount and signature line — ready as PDF." } },
    "shartnoma-shablon.html": { ru: { t: "Шаблон договора", d: "Услуги, купля-продажа, аренда, труд — 5 типов договоров: заполните и сохраните в PDF." }, en: { t: "Contract Template", d: "Services, sale, rent, employment — 5 contract types: fill in and export to PDF." } },
    "yatt-soliq.html": { ru: { t: "Налог ИП (YaTT)", d: "Вы индивидуальный предприниматель? Налог, соцналог и итоговая сумма с вашего дохода." }, en: { t: "Sole Proprietor Tax", d: "Are you a sole proprietor? Tax, social contribution and total based on your income." } },
    "marja-kalkulyator.html": { ru: { t: "Калькулятор маржи", d: "Себестоимость плюс какой процент прибыли? Цена продажи, маржа и чистый доход — для бизнеса." }, en: { t: "Margin Calculator", d: "Cost plus what profit %? Selling price, margin and net income — for your business." } },
    "word-counter.html": { ru: { t: "Счётчик слов", d: "Эссе, пост, SMS, мета-тег — слова, символы, предложения, абзацы и время чтения в реальном времени." }, en: { t: "Word Counter", d: "Essay, post, SMS, meta tag — words, characters, sentences, paragraphs and reading time, live." } },
    "lorem-ipsum.html": { ru: { t: "Lorem Ipsum", d: "Текст-рыба для дизайна или сайта — абзацы, списки, заголовки в один клик." }, en: { t: "Lorem Ipsum", d: "Placeholder text for design or websites — paragraphs, lists, headings in one click." } },
    "budget.html": { ru: { t: "Управление деньгами", d: "Куда уходят деньги? Записывайте дневные траты — месячная диаграмма и разбивка по категориям." }, en: { t: "Money Manager", d: "Where did the money go? Log daily expenses — monthly chart and category breakdown." } },
    "todo.html": { ru: { t: "Список дел (To-do)", d: "10 дел на сегодня — в голове не удержать. Запишите, упорядочьте, сохранится до завтра." }, en: { t: "To-do List", d: "Ten tasks for today — too many to remember. Write them, order them, kept until tomorrow." } },
    "pomodoro.html": { ru: { t: "Таймер Pomodoro", d: "Метод 25/5 — работайте в 4 раза продуктивнее: фокус, короткие перерывы, статистика." }, en: { t: "Pomodoro Timer", d: "Work 4x more productively with the 25/5 method — focus, short breaks, statistics." } }
  };
  const TR_SECTIONS = {
    "Eng mashhuri": { ru: "Популярное", en: "Most Popular" },
    "Hujjatlar": { ru: "Документы", en: "Documents" },
    "Rasm va media": { ru: "Изображения и медиа", en: "Image & Media" },
    "Biznes vositalari": { ru: "Бизнес-инструменты", en: "Business Tools" },
    "Matn va mahsuldorlik": { ru: "Текст и продуктивность", en: "Text & Productivity" }
  };
  const TR_HUB = {
    "iq.html": { ru: { t: "IQ тест", d: "20 вопросов, 30 минут — ваш уровень IQ, когнитивный возраст и сертификат для скачивания." }, en: { t: "IQ Test", d: "20 questions, 30 minutes — your IQ level, cognitive age and a downloadable certificate." } },
    "tezyoz.html": { ru: { t: "Скоропечатание", d: "Уроки клавиатуры, тест скорости и 6 печатных игр — научитесь печатать вслепую." }, en: { t: "Fast Typing", d: "Keyboard lessons, a speed test and 6 typing games — learn to type without looking." } },
    "qazo.html": { ru: { t: "Калькулятор каза", d: "Точно рассчитайте каза намаза, поста и для женщин — с таблицей в PDF." }, en: { t: "Qaza Calculator", d: "Accurately count missed prayers, fasts and women's qaza — with a PDF table." } },
    "doska.html": { ru: { t: "Доска", d: "Онлайн-доска — рисование, эскизы и диаграммы. Для уроков и совместного мозгового штурма." }, en: { t: "Whiteboard", d: "Online whiteboard — drawing, sketches and diagrams. For lessons and team brainstorming." } }
  };
  // RU/EN UI yorliqlari (renderer ishlatadi)
  window.OSON_UI_TR = {
    uz: { viewAll: "Barchasini ko'rish ", all: "Barchasi ", tools: " ta vosita", more: "Yana ko'proq", "new": "Yangi", hot: "Mashhur", ai: "AI" },
    ru: { viewAll: "Смотреть все ", all: "Все ", tools: " сервисов", more: "Ещё больше", "new": "Новое", hot: "Хит", ai: "AI" },
    en: { viewAll: "View all ", all: "All ", tools: " tools", more: "More", "new": "New", hot: "Popular", ai: "AI" }
  };
  // Tarjimalarni har bir obyektga biriktirish
  TOOL_SECTIONS.forEach(sec => {
    const st = TR_SECTIONS[sec.title];
    if (st) { sec.title_ru = st.ru; sec.title_en = st.en; }
    sec.tools.forEach(t => {
      const e = TR_TOOLS[t.slug];
      if (e) {
        if (e.ru) { t.title_ru = e.ru.t; t.desc_ru = e.ru.d; }
        if (e.en) { t.title_en = e.en.t; t.desc_en = e.en.d; }
      }
    });
  });
  window.OSON_HUB_CARDS.forEach(h => {
    const e = TR_HUB[h.href];
    if (e) {
      if (e.ru) { h.title_ru = e.ru.t; h.desc_ru = e.ru.d; }
      if (e.en) { h.title_en = e.en.t; h.desc_en = e.en.d; }
    }
  });

  let page = (location.pathname.split("/").pop() || "index.html");
  // Hosting'da clean URL (.html siz) bo'lsa ham CONTENT lookup ishlashi uchun
  if (page && !page.endsWith(".html") && !page.includes(".")) page = page + ".html";
  if (!page) page = "index.html";

  // ===== PASSWORD PROTECTION FOR COURSES =====
  const isCoursePage = page === "kurslar.html" || page.endsWith("-kurs.html") || page.startsWith("kurs-") || page.endsWith("-resurslar.html");
  if (isCoursePage && localStorage.getItem("kurs_password") !== "OzimSila") {
    const showPasswordOverlay = () => {
      const style = document.createElement("style");
      style.textContent = `
        .pw-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 20px;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .pw-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 24px;
          padding: 40px 32px;
          max-width: 400px;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: pwFadeIn 0.3s ease-out;
        }
        .pw-icon {
          width: 64px;
          height: 64px;
          background: var(--accent-soft, #ede9fe);
          color: var(--accent, #6d28d9);
          border-radius: 20px;
          display: grid;
          place-items: center;
          margin: 0 auto 20px;
        }
        .pw-icon svg {
          width: 28px;
          height: 28px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .pw-card h2 {
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 8px;
          color: var(--text, #0f172a);
          letter-spacing: -0.02em;
        }
        .pw-card p {
          font-size: 14px;
          color: var(--muted, #64748b);
          margin: 0 0 24px;
          line-height: 1.5;
        }
        .pw-input-wrapper {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        .pw-input-wrapper input {
          flex: 1;
          height: 48px;
          border: 1px solid var(--border, #e2e8f0);
          background: var(--bg, #f8fafc);
          color: var(--text, #0f172a);
          padding: 0 16px;
          border-radius: 12px;
          font-size: 15px;
          transition: border-color 0.15s;
        }
        .pw-input-wrapper input:focus {
          outline: none;
          border-color: var(--accent, #6d28d9);
        }
        .pw-input-wrapper button {
          height: 48px;
          background: var(--accent, #6d28d9);
          color: #fff;
          border: none;
          padding: 0 24px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .pw-input-wrapper button:hover {
          background: var(--accent-2, #4f46e5);
        }
        .pw-error {
          font-size: 13.5px;
          color: #ef4444;
          min-height: 20px;
          margin-top: 8px;
          font-weight: 600;
        }
        .pw-shake {
          animation: pwShake 0.4s ease-in-out;
        }
        @keyframes pwFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pwShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `;
      document.head.appendChild(style);

      const overlay = document.createElement("div");
      overlay.className = "pw-overlay";
      overlay.innerHTML = `
        <div class="pw-card" id="pwCard">
          <div class="pw-icon">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h2>Kurslarga kirish</h2>
          <p>Ushbu bo'limga kirish uchun parolni kiriting.</p>
          <div class="pw-input-wrapper">
            <input type="password" id="pwInput" placeholder="Parolni kiriting..." autofocus>
            <button id="pwBtn">Kirish</button>
          </div>
          <div id="pwError" class="pw-error"></div>
        </div>
      `;
      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";

      const input = overlay.querySelector("#pwInput");
      const btn = overlay.querySelector("#pwBtn");
      const error = overlay.querySelector("#pwError");
      const card = overlay.querySelector("#pwCard");

      const checkPassword = () => {
        if (input.value === "OzimSila") {
          localStorage.setItem("kurs_password", "OzimSila");
          overlay.remove();
          document.body.style.overflow = "";
        } else {
          error.textContent = "Noto'g'ri parol, qayta urinib ko'ring.";
          card.classList.remove("pw-shake");
          void card.offsetWidth;
          card.classList.add("pw-shake");
          input.value = "";
          if (input && typeof input.focus === "function") input.focus();
        }
      };

      btn.addEventListener("click", checkPassword);
      input.addEventListener("keydown", e => {
        if (e.key === "Enter") checkPassword();
      });
      setTimeout(() => { if (input && typeof input.focus === "function") input.focus(); }, 100);
    };

    if (document.body) {
      showPasswordOverlay();
    } else {
      document.addEventListener("DOMContentLoaded", showPasswordOverlay);
    }
  }

  // ===========================================================
  // === I18N joylashuvi — sahifa-boshqaruvli til (alohida /ru/ /en/ HTML) ===
  // Til localStorage emas, SAHIFA bilan aniqlanadi (SEO uchun: har til = alohida URL).
  // ===========================================================
  const _langFromPath = /\/ru\//.test(location.pathname) ? "ru"
    : /\/en\//.test(location.pathname) ? "en" : null;
  if (!window.OSON_LANG) window.OSON_LANG = _langFromPath || "uz";
  const IN_LANG_DIR = _langFromPath !== null;
  const ROOT = IN_LANG_DIR ? "/" : "";            // boshqa (tarjimasiz) sahifalarga absolyut ildiz havola
  const CUR_LANG = (["uz", "uz-cyr", "ru", "en"].includes(window.OSON_LANG)) ? window.OSON_LANG : "uz";
  const LANG_HOME = CUR_LANG === "ru" ? "/ru/" : CUR_LANG === "en" ? "/en/" : (ROOT + "index.html");
  // ru/en'da mavjud sahifalar — switcher 404 bermasligi uchun
  const TRANSLATED_PAGES = new Set([
    "index.html", "hujjatlar.html",
    "lotin-kiril.html", "pdf-merge.html", "pdf-split.html", "jpg-to-pdf.html",
    "pdf-to-jpg.html", "pdf-rotate.html", "pdf-compress.html", "ocr.html",
    "pdf-watermark.html", "word-counter.html", "lorem-ipsum.html",
    "qazo.html", "qazo-namoz.html", "qazo-roza.html", "qazo-women.html",
    "doska.html",
    // Biznes vositalari (Buxgalteriya) — hub + hujjat generatorlari (1-bosqich)
    "buxgalteriya.html",
    "hisob-faktura.html", "akt-generator.html", "shartnoma-shablon.html",
    "pul-orderi.html", "ttn.html", "ishonchnoma.html", "buyruq-shablon.html",
    // Biznes vositalari — kalkulyatorlar (2-bosqich)
    "korxona-maoshi.html", "otpusk-puli.html", "bolnichniy.html", "avans.html", "ishdan-boshatish.html",
    "yatt-soliq.html", "yuridik-foyda.html", "aylanmadan-soliq.html", "patent-soliq.html", "aksiz-soliq.html", "inps-kalkulyator.html", "soliq-taqvimi.html",
    "marja-kalkulyator.html", "break-even.html", "roi-kalkulyator.html", "cash-flow.html", "daromad-xarajat.html",
    "bank-komissiya.html", "inkassatsiya.html", "akkreditiv.html", "lizing.html",
    "chegirma.html", "mark-up.html", "foiz-kalkulyator.html", "yillik-oylik.html",
    "yosh-hisoblagich.html", "imc-hisoblagich.html", "kaloriya-hisoblagich.html", "kredit-hisoblagich.html", "maosh-hisoblagich.html", "soliq-hisoblagich.html", "olcham-konvertor.html", "homiladorlik-hisoblagich.html", "vaqt-mintaqalari.html",
    // Xizmatlar (bosh sahifa) — noyob media/utility/mahsuldorlik vositalari
    "background-removal.html", "screen-recorder.html", "video-to-audio.html", "audio-effects.html",
    "id-photo.html", "rasm-konvertor.html", "thumbnail.html", "thumbnail-tester.html",
    "youtube-nik.html", "color-picker.html", "password.html", "qr-code.html", "tempmail.html",
    "budget.html", "todo.html", "pomodoro.html", "kod-editor.html",
    // IQ Test bo'limi (4 sahifa — engine/banklar /ru//en/ papkada)
    "iq.html", "iq-test.html", "iq-result.html", "iq-sertifikat.html",
    // Footer sahifalari (huquqiy/ma'lumot)
    "about.html", "contact.html", "privacy.html", "terms.html", "cookies.html",
    // Tezyoz bo'limi (hub + test; o'yinlar bosqichma-bosqich qo'shiladi)
    "tezyoz.html", "tezyoz-test.html",
    "tezyoz-typerix.html", "tezyoz-keytower.html", "tezyoz-zuma.html", "tezyoz-vanish.html", "tezyoz-bog.html",
    "tezyoz-labirint.html", "tezyoz-attack.html",
    "tezyoz-mergan.html", "tezyoz-samolyot.html", "tezyoz-darslar.html", "tezyoz-klavish.html",
    // Kurslar bo'limi (hub + kompyuter landing; kurslar bosqichma-bosqich qo'shiladi)
    "kurslar.html",
    "prompt-kurs.html", "prompt-resurslar.html",
    "agent-kurs.html",
    "airasm-kurs.html", "airasm-resurslar.html",
    "aivideo-kurs.html", "aivideo-resurslar.html"
  ]);
  // Renderer'lar (hub kartalari) qaysi sahifa tarjima qilinganini bilishi uchun
  window.OSON_TRANSLATED = [...TRANSLATED_PAGES];
  function langUrl(target) {
    const p = (page === "index.html") ? "" : page;
    const ok = TRANSLATED_PAGES.has(page);
    if (target === "uz") return "/" + p;
    return "/" + target + "/" + (ok ? p : "");
  }
  // Berilgan sahifa uchun JORIY tildagi URL (nav/footer/qidiruv havolalari joriy tilni saqlasin)
  function navUrl(slug) {
    const isHome = (slug === "index.html" || slug === "");
    if (CUR_LANG === "uz") return isHome ? "index.html" : (ROOT + slug);
    if (TRANSLATED_PAGES.has(slug)) return "/" + CUR_LANG + "/" + (isHome ? "" : slug);
    return "/" + slug;   // bu sahifa hali tarjima qilinmagan — ildiz (uz)
  }

  const year = new Date().getFullYear();
  const svg = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  const aboutIcon = '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>';
  const heartIcon = '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>';
  const DONATE = "https://tirikchilik.uz/eldoroga";
  const logoMark = '<svg viewBox="0 0 64 64" fill="none"><rect x="17" y="17" width="12" height="12" rx="3.5" fill="#fff"/><rect x="35" y="17" width="12" height="12" rx="3.5" fill="#fff" opacity=".6"/><rect x="17" y="35" width="12" height="12" rx="3.5" fill="#fff" opacity=".6"/><circle cx="41" cy="41" r="6.5" fill="#fff"/></svg>';

  // ===========================================================
  // === I18N — 4 tilli sistema (Uz, УЗ, РУС, ENG) ===
  // ===========================================================
  const LANG_KEY = "oson_lang";
  const LANGS = ["uz", "uz-cyr", "ru", "en"];
  const LANG_LABELS = { uz: "Uz", "uz-cyr": "УЗ", ru: "РУС", en: "ENG" };
  const LANG_NAMES = { uz: "O'zbek (lotin)", "uz-cyr": "Ўзбек (кирилл)", ru: "Русский", en: "English" };
  const LANG_HTML = { uz: "uz", "uz-cyr": "uz-Cyrl", ru: "ru", en: "en" };

  // --- Lotin → Kirill transliteratori (Uzbek) ---
  // Tartib MUHIM: ko'p harfli birikmalar — birinchi.
  // h, q, g', o' va apostrofni alohida ko'rib chiqamiz.
  const CYR_RULES = [
    // 1) Apostrofli birikmalar (4 turdagi apostrof — ' ʼ ʻ U+2019)
    [/o['ʼʻ’]/g, "ў"], [/O['ʼʻ’]/g, "Ў"],
    [/g['ʼʻ’]/g, "ғ"], [/G['ʼʻ’]/g, "Ғ"],
    // 2) Digraflar
    [/sh/g, "ш"], [/Sh/g, "Ш"], [/SH/g, "Ш"],
    [/ch/g, "ч"], [/Ch/g, "Ч"], [/CH/g, "Ч"],
    [/yo/g, "ё"], [/Yo/g, "Ё"], [/YO/g, "Ё"],
    [/yu/g, "ю"], [/Yu/g, "Ю"], [/YU/g, "Ю"],
    [/ya/g, "я"], [/Ya/g, "Я"], [/YA/g, "Я"],
    [/ts/g, "ц"], [/Ts/g, "Ц"], [/TS/g, "Ц"],
    // 3) Bitta harflar
    [/a/g, "а"], [/A/g, "А"],
    [/b/g, "б"], [/B/g, "Б"],
    [/d/g, "д"], [/D/g, "Д"],
    [/e/g, "е"], [/E/g, "Е"],
    [/f/g, "ф"], [/F/g, "Ф"],
    [/g/g, "г"], [/G/g, "Г"],
    [/h/g, "ҳ"], [/H/g, "Ҳ"],
    [/i/g, "и"], [/I/g, "И"],
    [/j/g, "ж"], [/J/g, "Ж"],
    [/k/g, "к"], [/K/g, "К"],
    [/l/g, "л"], [/L/g, "Л"],
    [/m/g, "м"], [/M/g, "М"],
    [/n/g, "н"], [/N/g, "Н"],
    [/o/g, "о"], [/O/g, "О"],
    [/p/g, "п"], [/P/g, "П"],
    [/q/g, "қ"], [/Q/g, "Қ"],
    [/r/g, "р"], [/R/g, "Р"],
    [/s/g, "с"], [/S/g, "С"],
    [/t/g, "т"], [/T/g, "Т"],
    [/u/g, "у"], [/U/g, "У"],
    [/v/g, "в"], [/V/g, "В"],
    [/x/g, "х"], [/X/g, "Х"],
    [/y/g, "й"], [/Y/g, "Й"],
    [/z/g, "з"], [/Z/g, "З"],
    // 4) Yolg'iz apostrof — hamza (ъ)
    [/['ʼʻ’]/g, "ъ"],
  ];

  // Transliteratsiyada saqlanadigan so'zlar (brend, technical termlar)
  const PROTECTED_WORDS = ["Oson Studio", "osonstudio.uz"];
  function lat2cyr(text) {
    if (!text) return text;
    // Himoyalangan so'zlarni vaqtinchalik placeholder bilan almashtirish
    const placeholders = [];
    let out = text;
    PROTECTED_WORDS.forEach((w, i) => {
      if (out.includes(w)) {
        const ph = "" + i + "";
        placeholders.push({ ph, w });
        out = out.split(w).join(ph);
      }
    });
    // Transliteratsiya
    for (const [re, rep] of CYR_RULES) out = out.replace(re, rep);
    // Placeholderlarni qaytarish
    placeholders.forEach(({ ph, w }) => { out = out.split(ph).join(w); });
    return out;
  }

  // --- РУС/ENG lug'at (asosiy UI satrlari, fallback — original) ---
  const DICT = {
    // Sidebar / Topbar
    "Kurslar": { ru: "Курсы", en: "Courses" },
    "Dasturlash": { ru: "Программирование", en: "Programming" },
    "Kod Editor": { ru: "Редактор кода", en: "Code Editor" },
    "Xizmatlar": { ru: "Сервисы", en: "Services" },
    "Hujjatlar": { ru: "Документы", en: "Documents" },
    "Tezyoz": { ru: "Скоропечать", en: "Fast Typing" },
    "Doska": { ru: "Доска", en: "Whiteboard" },
    "Doska — onlayn oq taxta": { ru: "Доска — онлайн whiteboard", en: "Doska — online whiteboard" },
    "Qazo hisoblagich": { ru: "Калькулятор каза", en: "Qaza Calculator" },
    "Hisoblagichlar": { ru: "Калькуляторы", en: "Calculators" },
    "Buxgalteriya": { ru: "Бухгалтерия", en: "Accounting" },
    "Qidirish": { ru: "Поиск", en: "Search" },
    "Qidirish (Ctrl+K)": { ru: "Поиск (Ctrl+K)", en: "Search (Ctrl+K)" },
    "Bosh sahifa": { ru: "Главная", en: "Home" },
    "Sayt haqida": { ru: "О сайте", en: "About" },
    "Maxfiylik": { ru: "Конфиденциальность", en: "Privacy" },
    "Aloqa": { ru: "Контакты", en: "Contact" },
    "Loyihani qo'llab-quvvatlash": { ru: "Поддержать проект", en: "Support the project" },
    "Asosiy kontentga o'tish": { ru: "Перейти к основному", en: "Skip to main content" },
    "Rejimni almashtirish": { ru: "Сменить тему", en: "Toggle theme" },
    "Yorug' rejim": { ru: "Светлая тема", en: "Light mode" },
    "Qorong'i rejim": { ru: "Темная тема", en: "Dark mode" },
    "Menyu": { ru: "Меню", en: "Menu" },
    "Tilni tanlash": { ru: "Выбрать язык", en: "Choose language" },
    // Navbar (qo'shimcha)
    "IQ Test": { ru: "IQ тест", en: "IQ Test" },
    "Biznes vositalari": { ru: "Бизнес-инструменты", en: "Business Tools" },
    // Footer havolalari
    "Maxfiylik siyosati": { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    "Foydalanish shartlari": { ru: "Условия использования", en: "Terms of Use" },
    "Cookie siyosati": { ru: "Политика cookie", en: "Cookie Policy" },
    // Hero typing animatsiya so'zlari (bosh sahifa)
    "PDF birlashtirish": { ru: "Объединить PDF", en: "Merge PDF" },
    "Hisob-faktura": { ru: "Счёт-фактура", en: "Invoice" },
    "Parol generatori": { ru: "Генератор паролей", en: "Password Generator" },
    "IQ test": { ru: "IQ тест", en: "IQ test" },
    "Kredit hisobi": { ru: "Расчёт кредита", en: "Loan calculation" },
    "Fon olib tashlash": { ru: "Удаление фона", en: "Background Removal" },
    "QR kod": { ru: "QR-код", en: "QR code" },
    "Ekran yozish": { ru: "Запись экрана", en: "Screen Recorder" },
    "Tezyoz mashqlari": { ru: "Тренажёр печати", en: "Typing practice" },
    "Qazo hisoblagich": { ru: "Калькулятор каза", en: "Qaza Calculator" },
    "Raqamli savodxonlik": { ru: "Цифровая грамотность", en: "Digital literacy" },
    "AI Agent": { ru: "AI-агент", en: "AI Agent" },
    "AI bilan rasm yaratish": { ru: "Создание изображений с ИИ", en: "Creating images with AI" },
    "AI bilan video yaratish": { ru: "Создание видео с ИИ", en: "Creating videos with AI" },
    // Search modal
    "Xizmat qidirish...": { ru: "Поиск сервиса...", en: "Search services..." },
    "Yopish": { ru: "Закрыть", en: "Close" },
    "Hech nima topilmadi": { ru: "Ничего не найдено", en: "Nothing found" },
    "Hech narsa topilmadi. Boshqa so'z bilan urinib ko'ring.": {
      ru: "Ничего не найдено. Попробуйте другое слово.",
      en: "Nothing found. Try another word."
    },
    // Umumiy tugmalar
    "Saqlash": { ru: "Сохранить", en: "Save" },
    "Tozalash": { ru: "Очистить", en: "Clear" },
    "Bekor qilish": { ru: "Отмена", en: "Cancel" },
    "Yuklab olish": { ru: "Скачать", en: "Download" },
    "PDF yuklab olish": { ru: "Скачать PDF", en: "Download PDF" },
    "Yuklash": { ru: "Загрузить", en: "Upload" },
    "Hisoblash": { ru: "Рассчитать", en: "Calculate" },
    "Yaratish": { ru: "Создать", en: "Generate" },
    "Nusxa olish": { ru: "Копировать", en: "Copy" },
    "Nusxalandi": { ru: "Скопировано", en: "Copied" },
    // Umumiy labellar
    "Sana": { ru: "Дата", en: "Date" },
    "Vaqt": { ru: "Время", en: "Time" },
    "Nomi": { ru: "Название", en: "Name" },
    "Summa": { ru: "Сумма", en: "Amount" },
    "Narxi": { ru: "Цена", en: "Price" },
    "Miqdori": { ru: "Количество", en: "Quantity" },
    "Soni": { ru: "Количество", en: "Quantity" },
    "Birlik": { ru: "Ед.", en: "Unit" },
    "Jami": { ru: "Итого", en: "Total" },
    "JAMI": { ru: "ИТОГО", en: "TOTAL" },
    "Natija": { ru: "Результат", en: "Result" },
    // Search foot
    "tanlash": { ru: "выбрать", en: "select" },
    "o'tish": { ru: "перейти", en: "go" },
    "yopish": { ru: "закрыть", en: "close" },

    // === HUB sahifalarning kategoriya nomlari ===
    "Bank va to'lov": { ru: "Банки и платежи", en: "Banking & Payments" },
    "Maxsus kalkulyatorlar": { ru: "Спец. калькуляторы", en: "Special Calculators" },
    "Moliyaviy hisoblash": { ru: "Финансовый учёт", en: "Financial Accounting" },
    "Soliq": { ru: "Налоги", en: "Taxes" },
    "Maosh va xodim": { ru: "Зарплата и кадры", en: "Salary & HR" },
    "Hujjat generatorlari": { ru: "Генераторы документов", en: "Document Generators" },

    // === Hisoblagichlar HUB ===
    "Yosh kalkulyatori": { ru: "Калькулятор возраста", en: "Age Calculator" },
    "IMC (BMI) hisoblagich": { ru: "Калькулятор ИМТ (BMI)", en: "BMI Calculator" },
    "Kaloriya hisoblagich": { ru: "Калькулятор калорий", en: "Calorie Calculator" },
    "Kredit kalkulyator": { ru: "Кредитный калькулятор", en: "Loan Calculator" },
    "Maosh kalkulyatori": { ru: "Калькулятор зарплаты", en: "Salary Calculator" },
    "Soliq hisoblagich": { ru: "Налоговый калькулятор", en: "Tax Calculator" },
    "O'lcham konvertor": { ru: "Конвертер величин", en: "Unit Converter" },
    "Homiladorlik hisoblagich": { ru: "Калькулятор беременности", en: "Pregnancy Calculator" },
    "Vaqt mintaqalari": { ru: "Часовые пояса", en: "Time Zones" },

    // === Buxgalteriya HUB asosiy tools ===
    "Hisob-faktura": { ru: "Счёт-фактура", en: "Invoice" },
    "Akt (bajarilgan ish)": { ru: "Акт выполненных работ", en: "Work Completion Act" },
    "Shartnoma shabloni": { ru: "Шаблон договора", en: "Contract Template" },
    "Pul orderi (KO-1/KO-2)": { ru: "Кассовый ордер (КО-1/КО-2)", en: "Cash Order (KO-1/KO-2)" },
    "TTN (Transport)": { ru: "ТТН (Транспортная)", en: "Waybill" },
    "Ishonchnoma": { ru: "Доверенность", en: "Power of Attorney" },
    "Buyruq shabloni": { ru: "Шаблон приказа", en: "Order Template" },
    "YaTT soliq": { ru: "Налог ИП (ЯТТ)", en: "Individual Entrepreneur Tax" },
    "Yuridik foyda": { ru: "Прибыль юр. лиц", en: "Legal Entity Profit" },
    "Aylanmadan soliq": { ru: "Налог с оборота", en: "Turnover Tax" },
    "Patent soliq": { ru: "Патентный налог", en: "Patent Tax" },
    "Aksiz soliq": { ru: "Акцизный налог", en: "Excise Tax" },
    "INPS kalkulyator": { ru: "Калькулятор ИНПС", en: "INPS Calculator" },
    "Soliq taqvimi": { ru: "Налоговый календарь", en: "Tax Calendar" },
    "Korxona maoshi": { ru: "Зарплата организации", en: "Company Payroll" },
    "Tabel": { ru: "Табель", en: "Timesheet" },
    "Otpusk puli": { ru: "Отпускные", en: "Vacation Pay" },
    "Bolnichniy": { ru: "Больничный лист", en: "Sick Leave" },
    "Avans": { ru: "Аванс", en: "Advance" },
    "Ishdan bo'shatish": { ru: "Увольнение", en: "Dismissal" },
    "Marja kalkulyatori": { ru: "Калькулятор маржи", en: "Margin Calculator" },
    "Break-even": { ru: "Точка безубыточности", en: "Break-even" },
    "ROI kalkulyatori": { ru: "Калькулятор ROI", en: "ROI Calculator" },
    "Cash Flow": { ru: "Денежный поток", en: "Cash Flow" },
    "Daromad-xarajat": { ru: "Доходы-расходы", en: "Income-Expense" },
    "Bank komissiyasi": { ru: "Банковская комиссия", en: "Bank Commission" },
    "Inkassatsiya": { ru: "Инкассация", en: "Cash Collection" },
    "Akkreditiv": { ru: "Аккредитив", en: "Letter of Credit" },
    "Lizing kalkulyatori": { ru: "Калькулятор лизинга", en: "Leasing Calculator" },
    "Chegirma (Skidka)": { ru: "Скидка", en: "Discount" },
    "Mark-up (Ustama)": { ru: "Наценка (Mark-up)", en: "Mark-up" },
    "Foiz kalkulyator": { ru: "Процентный калькулятор", en: "Percent Calculator" },
    "Yillik → oylik": { ru: "Годовой → месячный", en: "Annual → Monthly" },

    // === Hujjatlar / Tezyoz / Qazo ===
    "Qazo namoz hisoblagich": { ru: "Калькулятор каза-намаз", en: "Qaza Prayer Calculator" },
    "Qazo ro'za hisoblagich": { ru: "Калькулятор каза-руза", en: "Qaza Fasting Calculator" },
    "Qazo (ayollar uchun)": { ru: "Каза для женщин", en: "Qaza for Women" },
    "Lotin ↔ Kirill": { ru: "Латиница ↔ Кириллица", en: "Latin ↔ Cyrillic" },
    "PDF birlashtirish": { ru: "Объединить PDF", en: "Merge PDF" },
    "PDF ajratish": { ru: "Разделить PDF", en: "Split PDF" },
    "JPG → PDF": { ru: "JPG → PDF", en: "JPG → PDF" },
    "PDF → JPG": { ru: "PDF → JPG", en: "PDF → JPG" },
    "PDF aylantirish": { ru: "Повернуть PDF", en: "Rotate PDF" },
    "PDF siqish": { ru: "Сжать PDF", en: "Compress PDF" },
    "PDF suv belgi": { ru: "Водяной знак PDF", en: "PDF Watermark" },
    "OCR — matn aniqlash": { ru: "OCR — распознавание текста", en: "OCR — Text Recognition" },

    // === FOOTER (yangi 2 link + qayta nomlangan) ===
    "Maxfiylik siyosati": { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    "Foydalanish shartlari": { ru: "Условия использования", en: "Terms of Service" },
    "Cookie siyosati": { ru: "Политика cookie", en: "Cookie Policy" },

    // === BREADCRUMB ===
    "Buxgalteriya": { ru: "Бухгалтерия", en: "Accounting" },

    // === XIZMATLAR (asosiy)===
    "Thumbnail yuklab olish": { ru: "Скачать thumbnail", en: "Download Thumbnail" },
    "Thumbnail sinovi": { ru: "Тест thumbnail", en: "Thumbnail Tester" },
    "Ekran yozib olish": { ru: "Запись экрана", en: "Screen Recorder" },
    "Ekran yozish": { ru: "Запись экрана", en: "Screen Recording" },
    "Videodan MP3": { ru: "Видео в MP3", en: "Video to MP3" },
    "Video→Audio": { ru: "Видео→Аудио", en: "Video→Audio" },
    "Ovoz effektlari": { ru: "Звуковые эффекты", en: "Audio Effects" },
    "Fon olib tashlash": { ru: "Удаление фона", en: "Background Removal" },
    "Hujjat foto": { ru: "Фото на документ", en: "ID Photo" },
    "Rasm formatini o'zgartirish": { ru: "Изменить формат изображения", en: "Image Format Converter" },
    "Rasm konvertor": { ru: "Конвертер изображений", en: "Image Converter" },
    "Parol generatori": { ru: "Генератор паролей", en: "Password Generator" },
    "Parol": { ru: "Пароль", en: "Password" },
    "Vaqtinchalik pochta": { ru: "Временная почта", en: "Temp Mail" },
    "QR kod generatori": { ru: "Генератор QR-кода", en: "QR Code Generator" },
    "QR kod": { ru: "QR-код", en: "QR Code" },
    "Pul boshqaruvi": { ru: "Управление финансами", en: "Money Management" },
    "To-do ro'yxati": { ru: "Список задач", en: "To-do List" },
    "To-do": { ru: "Задачи", en: "To-do" },
    "Pomodoro taymer": { ru: "Таймер Pomodoro", en: "Pomodoro Timer" },
    "Pomodoro": { ru: "Помидор", en: "Pomodoro" },
    "Color Picker": { ru: "Color Picker", en: "Color Picker" },
    "Word Counter": { ru: "Подсчёт слов", en: "Word Counter" },
    "Lorem Ipsum": { ru: "Lorem Ipsum", en: "Lorem Ipsum" },

    // === SEARCH HIT KATEGORIYALAR ===
    "Sayt": { ru: "Сайт", en: "Site" },
    "Hub": { ru: "Раздел", en: "Hub" },
    "Qazo": { ru: "Каза", en: "Qaza" },

    // === HUB SARLAVHALARI (h1) ===
    "Buxgalteriya — barcha xizmatlar": { ru: "Бухгалтерия — все сервисы", en: "Accounting — All Services" },
    "Hisoblagichlar — barcha vositalar": { ru: "Калькуляторы — все инструменты", en: "Calculators — All Tools" },
    "Hujjatlar bilan ishlash": { ru: "Работа с документами", en: "Document Tools" },
    "Qazo hisoblagich": { ru: "Калькулятор каза", en: "Qaza Calculator" },
    "Tezyoz — klaviatura mashqlari va tezlik testi": {
      ru: "Скоропечать — упражнения и тест скорости",
      en: "Fast Typing — exercises and speed test"
    },

    // === TEZYOZ ===
    "Tezlik testi": { ru: "Тест скорости", en: "Speed Test" },
    "Klaviatura darslari": { ru: "Уроки клавиатуры", en: "Keyboard Lessons" },
    "KeyTower — Tower quring!": { ru: "KeyTower — стройте башню!", en: "KeyTower — Build a tower!" },
    "Typerix — Tetris uslubidagi so'z o'yini": {
      ru: "Typerix — игра в стиле Tetris со словами",
      en: "Typerix — Tetris-style word game"
    },
    "Typing Attack — so'z otish o'yini": {
      ru: "Typing Attack — стрельба словами",
      en: "Typing Attack — word shooter game"
    },
    "Zuma — harflar bilan typing o'yini": {
      ru: "Zuma — игра с буквами",
      en: "Zuma — letter typing game"
    },
    "Labirint — typing adventure o'yini": {
      ru: "Лабиринт — приключенческая игра",
      en: "Labyrinth — typing adventure game"
    },
    "Vanish — Disappearing Words o'yini": {
      ru: "Vanish — игра исчезающих слов",
      en: "Vanish — disappearing words game"
    },

    // === UMUMIY (kalkulyator/tool sahifalarida ko'p uchraydi) ===
    "Hisoblash sanasi": { ru: "Дата расчёта", en: "Calculation date" },
    "Stavkalar": { ru: "Ставки", en: "Rates" },
    "Soliq stavkalari": { ru: "Налоговые ставки", en: "Tax rates" },
    "Soliq stavkalari (sozlash mumkin)": { ru: "Налоговые ставки (настраиваемые)", en: "Tax rates (adjustable)" },
    "Xodimlar ro'yxati": { ru: "Список сотрудников", en: "Employee list" },
    "Xodim qo'shish": { ru: "Добавить сотрудника", en: "Add employee" },
    "Yana xodim qo'shish": { ru: "Добавить ещё", en: "Add more" },
    "Xodim": { ru: "Сотрудник", en: "Employee" },
    "F.I.SH.": { ru: "Ф.И.О.", en: "Full name" },
    "Ism Familiya": { ru: "Имя Фамилия", en: "First Last name" },
    "Lavozim": { ru: "Должность", en: "Position" },
    "Yalpi": { ru: "Брутто", en: "Gross" },
    "Yalpi (so'm)": { ru: "Брутто (сум)", en: "Gross (UZS)" },
    "Yalpi (kompaniya)": { ru: "Брутто (компания)", en: "Gross (company)" },
    "Bonus": { ru: "Бонус", en: "Bonus" },
    "Bonus (so'm)": { ru: "Бонус (сум)", en: "Bonus (UZS)" },
    "Sof maosh": { ru: "Чистая зарплата", en: "Net salary" },
    "NDFL": { ru: "НДФЛ", en: "PIT" },
    "INPS": { ru: "ИНПС", en: "INPS" },
    "NDFL solig'i": { ru: "НДФЛ", en: "Income Tax" },
    "INPS pensiya": { ru: "ИНПС пенсия", en: "INPS Pension" },
    "Daromaddan chegiriladi": { ru: "Удерживается с дохода", en: "Withheld from income" },
    "Pensiya jamg'armasiga": { ru: "В пенсионный фонд", en: "To pension fund" },
    "Xodimlarga qo'lga": { ru: "На руки сотрудникам", en: "Employees take-home" },
    "so'm": { ru: "сум", en: "UZS" },
    "so'm chegiriladi": { ru: "сум удерживается", en: "UZS withheld" },
    "so'm jami": { ru: "сум всего", en: "UZS total" },

    // === SOLIQ ===
    "Daromad solig'i": { ru: "Подоходный налог", en: "Income tax" },
    "Pensiya jamg'armasi": { ru: "Пенсионный фонд", en: "Pension fund" },
    "NDS": { ru: "НДС", en: "VAT" },
    "NDS'siz summa": { ru: "Сумма без НДС", en: "Amount without VAT" },
    "JAMI TO'LASH": { ru: "ИТОГО К ОПЛАТЕ", en: "TOTAL TO PAY" },
    "JAMI": { ru: "ИТОГО", en: "TOTAL" },

    // === HUJJAT (Hisob-faktura, Akt va h.k.) ===
    "Sotuvchi": { ru: "Продавец", en: "Seller" },
    "Sotib oluvchi": { ru: "Покупатель", en: "Buyer" },
    "Tomonlar": { ru: "Стороны", en: "Parties" },
    "Hujjat ma'lumotlari": { ru: "Данные документа", en: "Document info" },
    "Schyot-faktura raqami": { ru: "Номер счёта-фактуры", en: "Invoice number" },
    "Sanasi": { ru: "Дата", en: "Date" },
    "Shartnoma": { ru: "Договор", en: "Contract" },
    "Tovar / xizmat nomi": { ru: "Наименование товара / услуги", en: "Product / Service name" },
    "Tovar yoki xizmat": { ru: "Товар или услуга", en: "Product or service" },
    "Manzil": { ru: "Адрес", en: "Address" },
    "STIR": { ru: "ИНН", en: "Tax ID" },
    "MFO": { ru: "МФО", en: "MFI" },
    "Bank": { ru: "Банк", en: "Bank" },
    "h/r": { ru: "р/с", en: "Acc." },
    "Hisob raqami": { ru: "Расчётный счёт", en: "Account number" },

    // === KUNLIK (Sana inputlari) ===
    "Kun": { ru: "День", en: "Day" },
    "Oy": { ru: "Месяц", en: "Month" },
    "Yil": { ru: "Год", en: "Year" },
    "Yoshi": { ru: "Возраст", en: "Age" },
    "Tug'ilgan sanasi": { ru: "Дата рождения", en: "Birth date" },

    // === KALORIYA / IMC ===
    "Bo'yi": { ru: "Рост", en: "Height" },
    "Vazni": { ru: "Вес", en: "Weight" },
    "Jinsi": { ru: "Пол", en: "Gender" },
    "Erkak": { ru: "Мужской", en: "Male" },
    "Ayol": { ru: "Женский", en: "Female" },
    "Faollik": { ru: "Активность", en: "Activity" },

    // === KREDIT ===
    "Kredit summa": { ru: "Сумма кредита", en: "Loan amount" },
    "Muddat (oy)": { ru: "Срок (мес.)", en: "Term (months)" },
    "Yillik foiz": { ru: "Годовая ставка", en: "Annual rate" },
    "Oylik to'lov": { ru: "Ежемесячный платёж", en: "Monthly payment" },
    "Umumiy to'lov": { ru: "Всего к оплате", en: "Total payment" },
    "Foiz miqdori": { ru: "Сумма процентов", en: "Interest amount" },

    // === ACTIONS (umumiy) ===
    "Tahrirlash": { ru: "Редактировать", en: "Edit" },
    "O'chirish": { ru: "Удалить", en: "Delete" },
    "Qo'shish": { ru: "Добавить", en: "Add" },
    "Tanlash": { ru: "Выбрать", en: "Choose" },
    "Tasdiqlash": { ru: "Подтвердить", en: "Confirm" },
    "Davom etish": { ru: "Продолжить", en: "Continue" },
    "Davom ettirish": { ru: "Продолжить", en: "Resume" },
    "Pauza": { ru: "Пауза", en: "Pause" },
    "Boshlash": { ru: "Начать", en: "Start" },
    "To'xtatish": { ru: "Остановить", en: "Stop" },
    "Yana urinish": { ru: "Попробовать снова", en: "Try again" },
    "Qaytadan": { ru: "Заново", en: "Restart" },
    "Yangi yozuv": { ru: "Новая запись", en: "New record" },
    "Tayyor": { ru: "Готово", en: "Done" },
    "Yopilmoqda": { ru: "Закрытие", en: "Closing" },
    "Yuklanmoqda": { ru: "Загрузка", en: "Loading" },
    "Tayyorlanmoqda...": { ru: "Подготовка...", en: "Preparing..." },

    // === LATIN-ONLY WARNING ===
    "Hujjat lotin alifbosida tayyorlanadi": {
      ru: "Документ готовится на латинице",
      en: "Document is prepared in Latin alphabet"
    },
    "Maydonlarni lotin harflarida to'ldiring — kirill matn PDF'da buziladi.": {
      ru: "Заполняйте поля латиницей — кириллический текст в PDF будет искажён.",
      en: "Fill fields in Latin alphabet — Cyrillic text will be corrupted in PDF."
    },
    "Xodim ismi va lavozimini lotin harflarida yozing — kirillcha matn PDF'da buziladi.": {
      ru: "Указывайте имя и должность сотрудника латиницей — кириллический текст в PDF будет искажён.",
      en: "Enter employee name and position in Latin — Cyrillic text will be corrupted in PDF."
    },
    "PDF eksport — faqat lotin alifbosi": {
      ru: "Экспорт PDF — только латиница",
      en: "PDF export — Latin only"
    },
    "Vazifalar saytda istalgan tilda saqlanadi, lekin PDF'da faqat lotin matni to'g'ri ko'rinadi.": {
      ru: "Задачи сохраняются на сайте на любом языке, но в PDF корректно отображается только латинский текст.",
      en: "Tasks are saved in any language, but only Latin text displays correctly in PDF."
    },
    "Yozuvlar saytda istalgan tilda saqlanadi, lekin PDF'da faqat lotin matni to'g'ri ko'rinadi.": {
      ru: "Записи сохраняются на сайте на любом языке, но в PDF корректно отображается только латинский текст.",
      en: "Records are saved in any language, but only Latin text displays correctly in PDF."
    },

    // === EKRAN YOZISH (Screen Recorder) ===
    "Video sozlamalari": { ru: "Настройки видео", en: "Video settings" },
    "Audio va kamera": { ru: "Аудио и камера", en: "Audio & Camera" },
    "Sifat": { ru: "Качество", en: "Quality" },
    "Kadrlar tezligi": { ru: "Частота кадров", en: "Frame rate" },
    "Fayl formati": { ru: "Формат файла", en: "File format" },
    "Mikrofon": { ru: "Микрофон", en: "Microphone" },
    "O'z ovozingiz": { ru: "Ваш голос", en: "Your voice" },
    "Tizim ovozi": { ru: "Системный звук", en: "System audio" },
    "Brauzer/dastur": { ru: "Браузер/приложение", en: "Browser/app" },
    "Old kamera": { ru: "Передняя камера", en: "Front camera" },
    "Yuzingiz aylanada": { ru: "Лицо в круге", en: "Face in circle" },
    "Qanday ishlaydi": { ru: "Как это работает", en: "How it works" },
    "Ekranni tanlash va ko'rish": { ru: "Выбрать экран и просмотреть", en: "Choose screen and preview" },
    "Yozishni boshlash": { ru: "Начать запись", en: "Start recording" },
    "To'xtatish va saqlash": { ru: "Остановить и сохранить", en: "Stop and save" },
    "Videoni yuklab olish": { ru: "Скачать видео", en: "Download video" },
    "Tayyor yozuv": { ru: "Готовая запись", en: "Recording ready" },
    "Kamera o'lchami": { ru: "Размер камеры", en: "Camera size" },

    // === FAQ ===
    "Tez-tez beriladigan savollar": { ru: "Часто задаваемые вопросы", en: "Frequently Asked Questions" },
    "Sayt haqida ko'proq": { ru: "Больше о сайте", en: "More about the site" },

    // === SEARCH HIT KEYWORD'lar uchun (ko'p talab) ===
    "Hisoblagichlar va kalkulyatorlar": { ru: "Калькуляторы", en: "Calculators" },

    // ===========================================================
    // === ABOUT SAHIFASI — to'liq tarjima ===
    // ===========================================================
    "Oson Studio haqida": { ru: "О Oson Studio", en: "About Oson Studio" },
    "O'zbekiston foydalanuvchilari uchun yaratilgan bepul onlayn vositalar to'plami.": {
      ru: "Бесплатный набор онлайн-инструментов для пользователей Узбекистана.",
      en: "A free collection of online tools for users in Uzbekistan."
    },
    "Biz kimmiz": { ru: "Кто мы", en: "Who we are" },
    "Oson Studio — bu kundalik raqamli vazifalarni soddalashtirish uchun yaratilgan bepul onlayn vositalar platformasidir. Sayt 2026-yildan boshlab xizmat ko'rsatib kelmoqda va O'zbekiston foydalanuvchilarining ehtiyojlariga moslashtirilgan: bu yerda hujjat generatorlari, kalkulyatorlar, klaviatura o'yinlari, qazo hisoblagichlari va boshqa ko'plab vositalar mavjud.": {
      ru: "Oson Studio — платформа бесплатных онлайн-инструментов для упрощения повседневных цифровых задач. Сайт работает с 2026 года и адаптирован под нужды пользователей Узбекистана: здесь генераторы документов, калькуляторы, клавиатурные игры, калькуляторы каза и множество других инструментов.",
      en: "Oson Studio is a platform of free online tools designed to simplify everyday digital tasks. The site has been operating since 2026 and is tailored to the needs of Uzbekistan users: document generators, calculators, keyboard games, qaza calculators, and many other tools are available here."
    },
    "Bizning maqsadimiz": { ru: "Наша цель", en: "Our mission" },
    "Kundalik vazifalarni — hisob-kitob, hujjat tayyorlash, fayl konvertatsiya, ovqat hisobi yoki diqqatni jamlash — tez, sodda va bepul bajarishni ta'minlash. Ro'yxatdan o'tish, ilova o'rnatish yoki to'lov shart emas — saytga kiring va darhol foydalaning.": {
      ru: "Обеспечить быстрое, простое и бесплатное выполнение повседневных задач — расчёты, подготовка документов, конвертация файлов, подсчёт калорий или фокусировка. Без регистрации, установки приложений или оплаты — заходите на сайт и сразу пользуйтесь.",
      en: "To enable fast, simple, and free completion of everyday tasks — calculations, document preparation, file conversion, calorie counting, or focus. No registration, app installation, or payment required — visit the site and use it instantly."
    },
    "Asosiy yo'nalishlar": { ru: "Основные направления", en: "Main sections" },
    "Buxgalteriya — Hisob-faktura, Akt, TTN, Shartnoma, Pul orderi, Ishonchnoma, Buyruq shabloni, soliq kalkulyatorlari, INPS, NDFL, maosh hisoblash va 30+ boshqa moliyaviy vositalar.": {
      ru: "Бухгалтерия — Счёт-фактура, Акт, ТТН, Договор, Кассовый ордер, Доверенность, Шаблон приказа, налоговые калькуляторы, ИНПС, НДФЛ, расчёт зарплаты и 30+ других финансовых инструментов.",
      en: "Accounting — Invoice, Act, Waybill, Contract, Cash Order, Power of Attorney, Order Template, tax calculators, INPS, PIT, salary calculation, and 30+ other financial tools."
    },
    "Hisoblagichlar — Yosh, IMC (BMI), Kaloriya, Kredit, Maosh, Soliq, O'lcham konvertor, Homiladorlik, Vaqt mintaqalari.": {
      ru: "Калькуляторы — Возраст, ИМТ (BMI), Калории, Кредит, Зарплата, Налог, Конвертер величин, Беременность, Часовые пояса.",
      en: "Calculators — Age, BMI, Calorie, Loan, Salary, Tax, Unit converter, Pregnancy, Time zones."
    },
    "Hujjatlar — PDF birlashtirish/ajratish, PDF↔JPG, PDF aylantirish/siqish, suv belgi qo'shish, OCR (matn aniqlash), Lotin↔Kirill o'tkazgich.": {
      ru: "Документы — Объединение/разделение PDF, PDF↔JPG, поворот/сжатие PDF, добавление водяного знака, OCR (распознавание текста), Латиница↔Кириллица.",
      en: "Documents — PDF merge/split, PDF↔JPG, rotate/compress PDF, add watermark, OCR (text recognition), Latin↔Cyrillic converter."
    },
    "Qazo hisoblagich — Namoz, ro'za va ayollar uchun qazo hisoblash.": {
      ru: "Калькулятор каза — расчёт каза-намаз, каза-руза и для женщин.",
      en: "Qaza calculator — calculation of qaza prayer, qaza fasting, and for women."
    },
    "Tezyoz — Klaviatura darslari, tezlik testi, 6 ta typing o'yini (Typerix, KeyTower, Attack, Zuma, Labirint, Vanish).": {
      ru: "Скоропечать — Уроки клавиатуры, тест скорости, 6 typing-игр (Typerix, KeyTower, Attack, Zuma, Labirint, Vanish).",
      en: "Fast Typing — Keyboard lessons, speed test, 6 typing games (Typerix, KeyTower, Attack, Zuma, Labirint, Vanish)."
    },
    "Boshqa xizmatlar — Thumbnail yuklab olish, QR kod, Parol generatori, Vaqtinchalik pochta, Pomodoro taymer, To-do, Pul boshqaruvi, Rasm bilan ishlash, Ovoz effektlari va boshqalar.": {
      ru: "Другие сервисы — Скачивание thumbnail, QR-код, Генератор паролей, Временная почта, Таймер Pomodoro, To-do, Управление финансами, Работа с изображениями, Звуковые эффекты и другие.",
      en: "Other services — Thumbnail download, QR code, Password generator, Temporary mail, Pomodoro timer, To-do, Money management, Image tools, Audio effects, and more."
    },
    "Texnik xususiyatlar": { ru: "Технические особенности", en: "Technical features" },
    "Vositalarning katta qismi to'g'ridan-to'g'ri brauzeringizda ishlaydi — bu degani:": {
      ru: "Большая часть инструментов работает прямо в вашем браузере — это значит:",
      en: "Most tools run directly in your browser — meaning:"
    },
    "Fayllaringiz hech qayerga yuborilmaydi. Rasm, video, PDF va boshqa fayllar faqat sizning qurilmangizda qayta ishlanadi.": {
      ru: "Ваши файлы никуда не отправляются. Изображения, видео, PDF и другие файлы обрабатываются только на вашем устройстве.",
      en: "Your files are never sent anywhere. Images, videos, PDFs, and other files are processed only on your device."
    },
    "Tezlik. Internet kerakmi yoki yo'qmi — vositalar deyarli darhol ishlaydi.": {
      ru: "Скорость. С интернетом или без — инструменты работают почти мгновенно.",
      en: "Speed. With or without internet — tools work almost instantly."
    },
    "Maxfiylik. Ma'lumotlar serverga yuborilmagani uchun, ular bizga ham, hech kimga ham ko'rinmaydi.": {
      ru: "Конфиденциальность. Данные не отправляются на сервер, поэтому они не видны ни нам, ни кому-либо ещё.",
      en: "Privacy. Data isn't sent to a server, so it's invisible to us and anyone else."
    },
    "Faqat ba'zi vositalar (AI rasm sifati, Vaqtinchalik pochta, ba'zi kutubxonalar) ishlash uchun tashqi xizmatlardan foydalanadi — bu haqida batafsil": {
      ru: "Лишь некоторые инструменты (AI улучшение изображений, Временная почта, некоторые библиотеки) используют внешние сервисы — подробнее в",
      en: "Only some tools (AI image enhancement, Temporary mail, some libraries) use external services — details in"
    },
    "Maxfiylik siyosatida.": { ru: "Политике конфиденциальности.", en: "Privacy Policy." },
    "Loyiha bepulmi?": { ru: "Проект бесплатный?", en: "Is the project free?" },
    "Ha, Oson Studio butunlay bepul. Sayt reklamalar orqali (ba'zi sahifalarda) qisman moliyalashtiriladi, lekin foydalanish uchun hech qanday to'lov yoki obuna talab qilinmaydi. Loyihani ixtiyoriy ravishda": {
      ru: "Да, Oson Studio полностью бесплатный. Сайт частично финансируется через рекламу (на некоторых страницах), но никакой оплаты или подписки не требуется. Проект можно добровольно",
      en: "Yes, Oson Studio is completely free. The site is partially funded by ads (on some pages), but no payment or subscription is required. You can voluntarily"
    },
    "qo'llab-quvvatlash": { ru: "поддержать", en: "support" },
    "mumkin.": { ru: "проект.", en: "the project." },
    "Kim yaratdi?": { ru: "Кто создал?", en: "Who created it?" },
    "Oson Studio — mustaqil dasturchi tomonidan O'zbekiston jamiyati uchun yaratilgan loyiha. Asoschisi va asosiy ishlab chiquvchi:": {
      ru: "Oson Studio — проект, созданный независимым разработчиком для общества Узбекистана. Основатель и главный разработчик:",
      en: "Oson Studio — a project created by an independent developer for the Uzbekistan community. Founder and lead developer:"
    },
    "Aloqa va qo'llab-quvvatlash": { ru: "Связь и поддержка", en: "Contact and support" },
    "Taklif, savol, xato haqida xabar yoki hamkorlik takliflari uchun": {
      ru: "Для предложений, вопросов, сообщений об ошибках или сотрудничества",
      en: "For suggestions, questions, bug reports, or collaboration"
    },
    "sahifasiga o'ting. Telegram orqali eng tez javob olishingiz mumkin:": {
      ru: "перейдите на страницу. Через Telegram получите ответ быстрее всего:",
      en: "go to the page. The fastest response is via Telegram:"
    },
    "Huquqiy ma'lumot": { ru: "Юридическая информация", en: "Legal information" },
    "Sayt ishlatishni boshlashdan oldin": { ru: "Перед началом использования сайта ознакомьтесь с", en: "Before using the site, review the" },
    "va": { ru: "и", en: "and" },
    "bilan tanishib chiqing.": { ru: "", en: "" },

    // ===========================================================
    // === CONTACT SAHIFASI — to'liq tarjima ===
    // ===========================================================
    "Taklif, savol, xato haqida xabar yoki hamkorlik takliflari uchun quyidagi yo'llar orqali bog'laning. Biz har bir murojaatga e'tibor beramiz.": {
      ru: "Свяжитесь с нами через указанные ниже способы для предложений, вопросов, сообщений об ошибках или сотрудничества. Мы уделяем внимание каждому обращению.",
      en: "Contact us through the methods below for suggestions, questions, bug reports, or collaboration. We pay attention to every inquiry."
    },
    "Telegram (eng tez)": { ru: "Telegram (быстрее всего)", en: "Telegram (fastest)" },
    "Eng tez javob olish uchun Telegram orqali yozing. Oddiy savollarga 1-2 soat ichida, batafsilroq talab qiluvchi murojaatlarga 1 ish kuni ichida javob beraman.": {
      ru: "Для быстрого ответа напишите через Telegram. На простые вопросы отвечаю в течение 1-2 часов, на сложные обращения — в течение 1 рабочего дня.",
      en: "For the fastest response, write via Telegram. I answer simple questions within 1-2 hours, more detailed inquiries within 1 working day."
    },
    "Email": { ru: "Email", en: "Email" },
    "Rasmiy murojaat, hujjat almashish yoki batafsil yozishmalar uchun email:": {
      ru: "Email для официальных обращений, обмена документами или подробных переписок:",
      en: "Email for official inquiries, document exchange, or detailed correspondence:"
    },
    "Qachon murojaat qilish kerak?": { ru: "Когда обращаться?", en: "When to contact?" },
    "Xato (bug) — biror vosita noto'g'ri ishlasa, sahifa ochilmasa yoki ko'rinish buzilsa. Iltimos, qaysi sahifa va qanday qurilma (telefon, kompyuter, brauzer turi) ekanini yozing.": {
      ru: "Ошибка (bug) — если инструмент работает неправильно, страница не открывается или нарушено отображение. Укажите, на какой странице и на каком устройстве (телефон, компьютер, тип браузера).",
      en: "Bug — if a tool works incorrectly, a page doesn't open, or display is broken. Please specify which page and what device (phone, computer, browser type)."
    },
    "Yangi vosita takliflari — Sizga zarur bo'lgan, lekin saytda yo'q vosita haqida.": {
      ru: "Предложения новых инструментов — об инструментах, которые вам нужны, но отсутствуют на сайте.",
      en: "New tool suggestions — about tools you need but aren't on the site."
    },
    "Hamkorlik — Reklamadan tashqari boshqa hamkorlik takliflari.": {
      ru: "Сотрудничество — Предложения сотрудничества помимо рекламы.",
      en: "Collaboration — Collaboration proposals beyond advertising."
    },
    "Cookie/Maxfiylik haqida savol — Shaxsiy ma'lumotlaringiz haqida.": {
      ru: "Вопросы о Cookie/Конфиденциальности — о ваших персональных данных.",
      en: "Cookie/Privacy questions — about your personal data."
    },
    "Mualliflik huquqi — Agar sayt kontentidan biror narsa sizning huquqlaringizni buzayotgan bo'lsa.": {
      ru: "Авторское право — если что-то в контенте сайта нарушает ваши права.",
      en: "Copyright — if any content on the site infringes your rights."
    },
    "Qaysi vaqtda javob keladi?": { ru: "В какое время приходит ответ?", en: "Response times" },
    "Oson Studio bir kishi tomonidan boshqariladi, shuning uchun javob vaqti:": {
      ru: "Oson Studio управляется одним человеком, поэтому время ответа:",
      en: "Oson Studio is managed by one person, so response times are:"
    },
    "Ish kunlari (Du-Ju): 09:00 — 21:00 (UZT) ichida": {
      ru: "Рабочие дни (Пн-Пт): 09:00 — 21:00 (UZT)",
      en: "Weekdays (Mon-Fri): 09:00 — 21:00 (UZT)"
    },
    "Dam olish kunlari (Sha-Ya): kechikishi mumkin": {
      ru: "Выходные (Сб-Вс): возможны задержки",
      en: "Weekends (Sat-Sun): may be delayed"
    },
    "Bayram kunlari: javob kechikadi": {
      ru: "Праздничные дни: ответ задерживается",
      en: "Holidays: response delayed"
    },
    "Loyihani qo'llab-quvvatlash": { ru: "Поддержать проект", en: "Support the project" },
    "Oson Studio bepul loyiha. Agar sizga foydali bo'lsa, loyihani rivojlantirishga ixtiyoriy hissa qo'shishingiz mumkin:": {
      ru: "Oson Studio — бесплатный проект. Если он вам полезен, вы можете добровольно поддержать его развитие:",
      en: "Oson Studio is a free project. If it's useful to you, you can voluntarily contribute to its development:"
    },
    "❤️ Qo'llab-quvvatlash (Tirikchilik)": {
      ru: "❤️ Поддержать (Tirikchilik)",
      en: "❤️ Support (Tirikchilik)"
    },
    "Har qanday qo'llab-quvvatlash yangi vositalar qo'shish va saytni yaxshilashga yordam beradi. Rahmat!": {
      ru: "Любая поддержка помогает добавлять новые инструменты и улучшать сайт. Спасибо!",
      en: "Any support helps add new tools and improve the site. Thank you!"
    },

    // === BOSHQA FAQAT UI ELEMENTLAR ===
    "Diqqat: faqat lotin harflarida to'ldiring": {
      ru: "Внимание: заполняйте только латиницей",
      en: "Attention: fill only in Latin alphabet"
    },
    "PDF hujjat lotin alifbosida tayyorlanadi. Agar maydonlarga kirill harflarida yozsangiz, PDF ichidagi matn buziladi yoki \"?\" belgilari bilan chiqadi.": {
      ru: "PDF документ готовится на латинице. Если заполните поля кириллицей, текст в PDF будет искажён или отобразится как \"?\".",
      en: "PDF document is prepared in Latin alphabet. If you fill fields in Cyrillic, text in PDF will be corrupted or appear as \"?\"."
    },

    // ===========================================================
    // === PRIVACY SAHIFASI — to'liq tarjima ===
    // ===========================================================
    "Maxfiylik siyosati": { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    "Oxirgi yangilanish: 2026-yil 1-iyun": {
      ru: "Последнее обновление: 1 июня 2026 г.",
      en: "Last updated: June 1, 2026"
    },
    "Kirish": { ru: "Введение", en: "Introduction" },
    "Oson Studio sizning maxfiyligingizni hurmat qiladi. Ushbu siyosat saytdan foydalanganingizda qaysi ma'lumotlar to'planishini, ular qanday ishlatilishini va sizning huquqlaringizni tushuntiradi.": {
      ru: "Oson Studio уважает вашу конфиденциальность. Эта политика объясняет, какие данные собираются при использовании сайта, как они используются и какие у вас права.",
      en: "Oson Studio respects your privacy. This policy explains what data is collected when you use the site, how it's used, and your rights."
    },
    "1. Biz to'playdigan ma'lumotlar": { ru: "1. Какие данные мы собираем", en: "1. Data we collect" },
    "1.1. Brauzeringizda qayta ishlanadigan ma'lumotlar": {
      ru: "1.1. Данные, обрабатываемые в браузере",
      en: "1.1. Data processed in your browser"
    },
    "Saytning katta qismi to'g'ridan-to'g'ri sizning brauzeringizda ishlaydi. Quyidagi ma'lumotlar serverlarimizga yuborilmaydi:": {
      ru: "Большая часть сайта работает прямо в вашем браузере. Следующие данные не отправляются на наши серверы:",
      en: "Most of the site runs directly in your browser. The following data is not sent to our servers:"
    },
    "PDF, rasm, video, audio fayllaringiz": { ru: "Ваши PDF, изображения, видео, аудиофайлы", en: "Your PDF, image, video, audio files" },
    "Kalkulyatorlarga kiritilgan raqamlar va matnlar": { ru: "Числа и тексты, введённые в калькуляторы", en: "Numbers and text entered in calculators" },
    "Hujjat generatorlariga (Hisob-faktura, Akt va h.k.) kiritilgan rekvizitlar": {
      ru: "Реквизиты, введённые в генераторы документов (Счёт-фактура, Акт и т.д.)",
      en: "Details entered in document generators (Invoice, Act, etc.)"
    },
    "Yaratilgan parollar": { ru: "Сгенерированные пароли", en: "Generated passwords" },
    "To-do va pul boshqaruvi yozuvlari": { ru: "Записи to-do и управления финансами", en: "To-do and money management records" },
    "1.2. Brauzerda saqlanadigan ma'lumotlar (localStorage)": {
      ru: "1.2. Данные, хранимые в браузере (localStorage)",
      en: "1.2. Data stored in browser (localStorage)"
    },
    "Qulaylik uchun quyidagilar faqat sizning qurilmangizda saqlanadi va bizga yuborilmaydi:": {
      ru: "Для удобства следующие данные хранятся только на вашем устройстве и не отправляются нам:",
      en: "For convenience, the following are stored only on your device and not sent to us:"
    },
    "Tanlangan ko'rinish rejimi (yorug'/qorong'i tema)": {
      ru: "Выбранная тема оформления (светлая/тёмная)",
      en: "Selected display mode (light/dark theme)"
    },
    "Tanlangan til (lotin/kirill)": { ru: "Выбранный язык (латиница/кириллица)", en: "Selected language (Latin/Cyrillic)" },
    "Saqlangan sotuvchi rekvizitlari (Hisob-faktura va shu kabi xizmatlarda)": {
      ru: "Сохранённые реквизиты продавца (в Счёт-фактуре и подобных сервисах)",
      en: "Saved seller details (in Invoice and similar services)"
    },
    "AI vositasi uchun kiritgan Gemini API kalitingiz": {
      ru: "Введённый Gemini API-ключ для AI-инструмента",
      en: "Your Gemini API key for AI tool"
    },
    "Vaqtinchalik pochta manzili": { ru: "Адрес временной почты", en: "Temporary mail address" },
    "Ularni istalgan vaqtda brauzer sozlamalari → \"Saytlar ma'lumotini tozalash\" orqali o'chirishingiz mumkin.": {
      ru: "Их можно удалить в любое время через настройки браузера → \"Очистить данные сайтов\".",
      en: "You can delete them anytime via browser settings → \"Clear site data\"."
    },
    "1.3. Avtomatik to'planadigan ma'lumotlar": {
      ru: "1.3. Автоматически собираемые данные",
      en: "1.3. Automatically collected data"
    },
    "Saytni tashrif buyurganingizda quyidagi anonim ma'lumotlar Google Analytics va sayt jurnallari orqali yig'iladi:": {
      ru: "При посещении сайта следующие анонимные данные собираются через Google Analytics и журналы сайта:",
      en: "When you visit the site, the following anonymous data is collected via Google Analytics and site logs:"
    },
    "IP manzil (anonim qilingan — oxirgi 3 raqami kesilgan)": {
      ru: "IP-адрес (анонимизирован — последние 3 цифры обрезаны)",
      en: "IP address (anonymized — last 3 digits trimmed)"
    },
    "Brauzer turi va versiyasi": { ru: "Тип и версия браузера", en: "Browser type and version" },
    "Qurilma turi (telefon, kompyuter)": { ru: "Тип устройства (телефон, компьютер)", en: "Device type (phone, computer)" },
    "Tashrif buyurilgan sahifalar va sahifada o'tkazgan vaqt": {
      ru: "Посещённые страницы и время на странице",
      en: "Pages visited and time on page"
    },
    "Tashrif yo'naltirgan manba (Google, ijtimoiy tarmoq va h.k.)": {
      ru: "Источник перехода (Google, соцсети и т.д.)",
      en: "Referral source (Google, social networks, etc.)"
    },
    "Yashash hududi (mamlakat darajasida)": { ru: "Регион проживания (на уровне страны)", en: "Region of residence (country level)" },
    "Bu ma'lumotlar shaxsingizni aniqlash uchun ishlatilmaydi.": {
      ru: "Эти данные не используются для вашей идентификации.",
      en: "This data is not used to identify you personally."
    },
    "2. Uchinchi tomon xizmatlari": { ru: "2. Сторонние сервисы", en: "2. Third-party services" },
    "2.1. Google Analytics": { ru: "2.1. Google Analytics", en: "2.1. Google Analytics" },
    "Sayt foydalanish statistikasi uchun Google Analytics 4 (GA4)'dan foydalanamiz. GA4 bizga ko'rsatadi: qaysi xizmatlar mashhur, foydalanuvchilar qaerdan keladi va sayt qanchalik tez ishlaydi. IP manzillaringiz anonimlashtiriladi.": {
      ru: "Для статистики использования сайта мы используем Google Analytics 4 (GA4). GA4 показывает: какие сервисы популярны, откуда приходят пользователи и насколько быстро работает сайт. Ваши IP-адреса анонимизируются.",
      en: "We use Google Analytics 4 (GA4) for site usage statistics. GA4 shows us: which services are popular, where users come from, and how fast the site is. Your IP addresses are anonymized."
    },
    "Batafsil:": { ru: "Подробнее:", en: "Details:" },
    "2.2. Google AdSense": { ru: "2.2. Google AdSense", en: "2.2. Google AdSense" },
    "Sayt sahifalarida Google AdSense reklamalari ko'rsatilishi mumkin. AdSense quyidagi maqsadlar uchun cookie va boshqa texnologiyalardan foydalanadi:": {
      ru: "На страницах сайта может отображаться реклама Google AdSense. AdSense использует cookie и другие технологии для следующих целей:",
      en: "Google AdSense ads may be displayed on site pages. AdSense uses cookies and other technologies for the following purposes:"
    },
    "Sizning qiziqishlaringizga mos reklama tanlash (shaxsiylashtirish)": {
      ru: "Подбор рекламы по вашим интересам (персонализация)",
      en: "Choosing ads matching your interests (personalization)"
    },
    "Bir xil reklama ortiqcha ko'rsatilmasligi uchun": {
      ru: "Чтобы одна и та же реклама не показывалась слишком часто",
      en: "To avoid showing the same ad too often"
    },
    "Reklama samaradorligini o'lchash": { ru: "Измерение эффективности рекламы", en: "Measuring ad effectiveness" },
    "Saxtakorlikni aniqlash": { ru: "Обнаружение мошенничества", en: "Fraud detection" },
    "AdSense uchinchi tomon vendor sifatida cookie'lardan foydalanadi (jumladan, DoubleClick DART cookie). Siz": {
      ru: "AdSense как сторонний вендор использует cookie (включая DoubleClick DART cookie). Вы можете отказаться от персонализированной рекламы через",
      en: "AdSense uses cookies as a third-party vendor (including DoubleClick DART cookie). You can opt out of personalized ads via"
    },
    "Google Reklama sozlamalari": { ru: "Настройки рекламы Google", en: "Google Ads Settings" },
    "orqali shaxsiylashtirilgan reklamalardan voz kechishingiz mumkin.": {
      ru: ".",
      en: "."
    },
    "2.3. Boshqa xizmatlar": { ru: "2.3. Другие сервисы", en: "2.3. Other services" },
    "3. Cookie va o'xshash texnologiyalar": { ru: "3. Cookie и подобные технологии", en: "3. Cookies and similar technologies" },
    "Cookie'lar haqida batafsil — alohida": {
      ru: "Подробнее о cookie — в отдельной",
      en: "Details about cookies — in a separate"
    },
    "Cookie siyosati": { ru: "Политика cookie", en: "Cookie Policy" },
    "sahifasida. Qisqacha:": { ru: "странице. Кратко:", en: "page. In short:" },
    "Zaruriy cookie'lar — saytning ishlashi uchun (theme, til sozlamalari).": {
      ru: "Необходимые cookie — для работы сайта (тема, языковые настройки).",
      en: "Essential cookies — for site functionality (theme, language settings)."
    },
    "Analitik cookie'lar — Google Analytics tomonidan.": {
      ru: "Аналитические cookie — от Google Analytics.",
      en: "Analytics cookies — by Google Analytics."
    },
    "Reklama cookie'lari — Google AdSense tomonidan.": {
      ru: "Рекламные cookie — от Google AdSense.",
      en: "Advertising cookies — by Google AdSense."
    },
    "4. Sizning huquqlaringiz": { ru: "4. Ваши права", en: "4. Your rights" },
    "Foydalanuvchi sifatida sizda quyidagi huquqlar mavjud:": {
      ru: "Как пользователь, у вас есть следующие права:",
      en: "As a user, you have the following rights:"
    },
    "Cookie'larni boshqarish — brauzer sozlamalari orqali ularni o'chirish yoki cheklash.": {
      ru: "Управление cookie — отключение или ограничение через настройки браузера.",
      en: "Manage cookies — disable or restrict via browser settings."
    },
    "localStorage'ni tozalash — saytda saqlangan barcha ma'lumotlarni o'chirish (brauzer → saytlar ma'lumotini tozalash).": {
      ru: "Очистка localStorage — удаление всех сохранённых на сайте данных (браузер → очистить данные сайтов).",
      en: "Clear localStorage — delete all site-stored data (browser → clear site data)."
    },
    "5. Bolalar uchun maxfiylik": { ru: "5. Конфиденциальность для детей", en: "5. Children's privacy" },
    "Sayt 13 yoshdan kichik bolalardan ataylab ma'lumot to'plamaydi. Agar farzandingiz saytdan foydalanayotganini bilsangiz va biror ma'lumot to'planganligini gumon qilsangiz, biz bilan bog'laning.": {
      ru: "Сайт намеренно не собирает данные от детей младше 13 лет. Если вы знаете, что ваш ребёнок пользуется сайтом, и подозреваете сбор данных, свяжитесь с нами.",
      en: "The site does not intentionally collect data from children under 13. If you know your child uses the site and suspect data collection, contact us."
    },
    "6. Xavfsizlik": { ru: "6. Безопасность", en: "6. Security" },
    "Sayt HTTPS (SSL) shifrlash bilan ishlaydi — sizning brauzeringiz va sayt o'rtasidagi barcha aloqa shifrlanadi. Lekin internet orqali ma'lumot uzatishning 100% xavfsizligini hech kim kafolatlolmaydi.": {
      ru: "Сайт работает с HTTPS (SSL) шифрованием — всё общение между браузером и сайтом зашифровано. Однако никто не может гарантировать 100% безопасность передачи данных через интернет.",
      en: "The site uses HTTPS (SSL) encryption — all communication between browser and site is encrypted. However, no one can guarantee 100% security of data transmission over the internet."
    },
    "7. O'zgartirishlar": { ru: "7. Изменения", en: "7. Changes" },
    "Ushbu siyosat vaqti-vaqti bilan yangilanishi mumkin. Muhim o'zgarishlar haqida sayt orqali ma'lum qilamiz. Yangilangan sana yuqorida ko'rsatilgan.": {
      ru: "Эта политика может периодически обновляться. О важных изменениях мы сообщим через сайт. Дата обновления указана выше.",
      en: "This policy may be updated from time to time. We'll announce major changes via the site. Updated date is shown above."
    },
    "8. Aloqa": { ru: "8. Контакты", en: "8. Contact" },
    "Maxfiylik bilan bog'liq savollar uchun:": { ru: "По вопросам конфиденциальности:", en: "For privacy questions:" },
    "Aloqa sahifasi": { ru: "Страница контактов", en: "Contact page" },
    "yoki to'g'ridan-to'g'ri": { ru: "или напрямую", en: "or directly" },

    // ===========================================================
    // === TERMS SAHIFASI — to'liq tarjima ===
    // ===========================================================
    "Foydalanish shartlari": { ru: "Условия использования", en: "Terms of Service" },
    "1. Umumiy holatlar": { ru: "1. Общие положения", en: "1. General provisions" },
    "xizmatlaridan foydalanishni boshlashdan oldin ushbu Foydalanish shartlarini diqqat bilan o'qib chiqing. Saytga kirish va xizmatlardan foydalanish orqali siz ushbu shartlarning barcha qoidalariga rozilik bildirgan hisoblanasiz.": {
      ru: "перед началом использования сервисов внимательно прочитайте эти Условия использования. Заходя на сайт и пользуясь сервисами, вы выражаете согласие со всеми положениями.",
      en: "before using the services, please read these Terms of Service carefully. By accessing the site and using the services, you agree to all provisions."
    },
    "Agar shartlardan birortasiga rozi bo'lmasangiz, saytdan foydalanmang.": {
      ru: "Если вы не согласны с каким-либо пунктом — не пользуйтесь сайтом.",
      en: "If you disagree with any term — do not use the site."
    },
    "2. Xizmat tavsifi": { ru: "2. Описание сервиса", en: "2. Service description" },
    "Oson Studio — bu kundalik raqamli vazifalar uchun bepul onlayn vositalar to'plami. Saytda quyidagi yo'nalishdagi xizmatlar mavjud:": {
      ru: "Oson Studio — бесплатный набор онлайн-инструментов для повседневных цифровых задач. На сайте доступны следующие сервисы:",
      en: "Oson Studio is a free collection of online tools for everyday digital tasks. The site offers the following services:"
    },
    "3. Foydalanish qoidalari": { ru: "3. Правила использования", en: "3. Usage rules" },
    "3.1. Ruxsat etilgan amallar": { ru: "3.1. Разрешённые действия", en: "3.1. Allowed actions" },
    "Saytni shaxsiy yoki tijorat maqsadlarda bepul ishlatish": {
      ru: "Бесплатное использование сайта в личных или коммерческих целях",
      en: "Free use of the site for personal or commercial purposes"
    },
    "Yaratilgan hujjatlar (PDF, CSV)dan o'z ishingizda foydalanish": {
      ru: "Использование созданных документов (PDF, CSV) в своей работе",
      en: "Using created documents (PDF, CSV) in your work"
    },
    "Saytga havola berish (link sharing)": {
      ru: "Делиться ссылкой на сайт",
      en: "Sharing the site link"
    },
    "Saytdan boshqalarga maslahat berish": {
      ru: "Рекомендовать сайт другим",
      en: "Recommending the site to others"
    },
    "3.2. Taqiqlangan amallar": { ru: "3.2. Запрещённые действия", en: "3.2. Prohibited actions" },
    "4. Mas'uliyat cheklash": { ru: "4. Ограничение ответственности", en: "4. Limitation of liability" },
    "5. Intellektual mulk": { ru: "5. Интеллектуальная собственность", en: "5. Intellectual property" },
    "6. Foydalanuvchi kontenti": { ru: "6. Пользовательский контент", en: "6. User content" },
    "Saytda yaratilgan hujjatlar (PDF, CSV) sizning mulkingiz hisoblanadi. Biz ularni ko'rmaymiz, saqlamaymiz va boshqalarga bermaymiz.": {
      ru: "Документы, созданные на сайте (PDF, CSV) — ваша собственность. Мы их не видим, не храним и не передаём третьим лицам.",
      en: "Documents created on the site (PDF, CSV) are your property. We don't see, store, or share them with third parties."
    },
    "7. Reklamalar": { ru: "7. Реклама", en: "7. Advertising" },
    "8. O'zgarishlar": { ru: "8. Изменения", en: "8. Changes" },
    "9. Hisobni to'xtatish": { ru: "9. Прекращение использования", en: "9. Account termination" },
    "Saytda ro'yxatdan o'tish kerak emas. Lekin agar siz foydalanish qoidalarini buzsangiz, biz sizning IP manzilingizni saytga kirishdan cheklash huquqini saqlab qolamiz.": {
      ru: "Регистрация на сайте не требуется. Но если вы нарушите правила, мы оставляем за собой право ограничить доступ с вашего IP-адреса.",
      en: "No registration is required. But if you violate the rules, we reserve the right to restrict access from your IP address."
    },
    "10. Aloqa": { ru: "10. Контакты", en: "10. Contact" },
    "Ushbu shartlar bo'yicha savollar uchun:": { ru: "По вопросам этих условий:", en: "For questions about these terms:" },

    // ===========================================================
    // === COOKIES SAHIFASI — to'liq tarjima ===
    // ===========================================================
    "1. Cookie nima?": { ru: "1. Что такое cookie?", en: "1. What is a cookie?" },
    "Cookie — bu sayt sizning qurilmangizda (kompyuter, telefon yoki planshet) brauzer orqali saqlaydigan kichik matn fayli. Ular saytning sizni tanishi, sozlamalaringizni eslab qolishi va foydalanish tajribasini yaxshilash uchun ishlatiladi.": {
      ru: "Cookie — это небольшой текстовый файл, который сайт сохраняет на вашем устройстве (компьютер, телефон или планшет) через браузер. Они нужны, чтобы сайт узнавал вас, запоминал настройки и улучшал опыт.",
      en: "A cookie is a small text file the site saves on your device (computer, phone, or tablet) via the browser. They're used to recognize you, remember settings, and improve the experience."
    },
    "Cookie'lar shaxsiy ma'lumotlaringizni (parol, bank kartasi va h.k.) o'g'irlamaydi va viruslar tarqatmaydi.": {
      ru: "Cookie не крадут ваши личные данные (пароли, банковские карты и т.д.) и не распространяют вирусы.",
      en: "Cookies don't steal personal data (passwords, bank cards, etc.) or spread viruses."
    },
    "2. Oson Studio qanday cookie'lardan foydalanadi?": {
      ru: "2. Какие cookie использует Oson Studio?",
      en: "2. What cookies does Oson Studio use?"
    },
    "Saytimizda 3 turdagi cookie'lar mavjud:": {
      ru: "На нашем сайте 3 типа cookie:",
      en: "Our site has 3 types of cookies:"
    },
    "2.1. Zaruriy cookie'lar (har doim faol)": {
      ru: "2.1. Необходимые cookie (всегда активны)",
      en: "2.1. Essential cookies (always active)"
    },
    "Sayt to'g'ri ishlashi uchun zarur. Ularsiz ba'zi xizmatlar ishlamaydi.": {
      ru: "Нужны для правильной работы сайта. Без них некоторые сервисы не работают.",
      en: "Required for proper site function. Without them, some services don't work."
    },
    "Cookie nomi": { ru: "Название cookie", en: "Cookie name" },
    "Maqsad": { ru: "Назначение", en: "Purpose" },
    "Muddat": { ru: "Срок", en: "Duration" },
    "Tanlangan tema (yorug'/qorong'i)": { ru: "Выбранная тема (светлая/тёмная)", en: "Selected theme (light/dark)" },
    "Tanlangan til (lotin/kirill)": { ru: "Выбранный язык (латиница/кириллица)", en: "Selected language (Latin/Cyrillic)" },
    "Doimiy": { ru: "Постоянно", en: "Permanent" },
    "Texnik jihatdan bular cookie emas, balki localStorage orqali saqlanadi — lekin foydalanuvchi nuqtai nazaridan o'xshash ishlaydi.": {
      ru: "Технически это не cookie, а localStorage — но с точки зрения пользователя работает похоже.",
      en: "Technically these aren't cookies but localStorage — but from the user's perspective they work similarly."
    },
    "2.2. Analitik cookie'lar (Google Analytics)": {
      ru: "2.2. Аналитические cookie (Google Analytics)",
      en: "2.2. Analytics cookies (Google Analytics)"
    },
    "Sayt qanday ishlatilayotganini tushunish uchun. Bu cookie'lar foydalanuvchi sonini, qaysi sahifalar mashhurligini va sayt tezligini o'lchaydi.": {
      ru: "Для понимания того, как используется сайт. Эти cookie измеряют количество пользователей, популярность страниц и скорость сайта.",
      en: "To understand how the site is used. These cookies measure user count, page popularity, and site speed."
    },
    "Foydalanuvchini ajratish (anonim)": {
      ru: "Идентификация пользователя (анонимно)",
      en: "User identification (anonymous)"
    },
    "Sessiya holati": { ru: "Состояние сессии", en: "Session state" },
    "Foydalanuvchini ajratish (24 soat)": {
      ru: "Идентификация пользователя (24 часа)",
      en: "User identification (24 hours)"
    },
    "IP manzilingiz anonimlashtirilgan (oxirgi 3 raqami kesilgan). Batafsil:": {
      ru: "Ваш IP-адрес анонимизирован (последние 3 цифры обрезаны). Подробнее:",
      en: "Your IP address is anonymized (last 3 digits trimmed). Details:"
    },
    "2.3. Reklama cookie'lari (Google AdSense)": {
      ru: "2.3. Рекламные cookie (Google AdSense)",
      en: "2.3. Advertising cookies (Google AdSense)"
    },
    "Sayt sahifalarida Google AdSense reklamalarini ko'rsatish uchun. Bu cookie'lar reklamalarni sizning qiziqishlaringizga moslashtirish, bir xil reklama ortiqcha ko'rsatilmasligini ta'minlash va reklamalar samaradorligini o'lchash uchun ishlatiladi.": {
      ru: "Для показа рекламы Google AdSense на сайте. Эти cookie используются для подбора рекламы под ваши интересы, контроля частоты показа и измерения эффективности.",
      en: "For showing Google AdSense ads on the site. These cookies match ads to your interests, control frequency, and measure effectiveness."
    },
    "AdSense reklama identifikatori": {
      ru: "Идентификатор рекламы AdSense",
      en: "AdSense ad identifier"
    },
    "Reklama personalizatsiyasi": {
      ru: "Персонализация рекламы",
      en: "Ad personalization"
    },
    "Reklama samaradorligini o'lchash": { ru: "Измерение эффективности рекламы", en: "Measuring ad effectiveness" },
    "AdSense'ning to'liq cookie ro'yxati:": {
      ru: "Полный список cookie AdSense:",
      en: "Full AdSense cookie list:"
    },
    "Google Cookie siyosati": { ru: "Политика cookie Google", en: "Google Cookie Policy" },
    "3. Uchinchi tomon cookie'lari": { ru: "3. Сторонние cookie", en: "3. Third-party cookies" },
    "Saytda quyidagi tashqi xizmatlar o'z cookie'larini o'rnatishi mumkin:": {
      ru: "На сайте следующие сторонние сервисы могут устанавливать cookie:",
      en: "The following external services may set cookies on the site:"
    },
    "Google Analytics — sayt foydalanish statistikasi": {
      ru: "Google Analytics — статистика использования",
      en: "Google Analytics — usage statistics"
    },
    "Google AdSense — reklama ko'rsatish va boshqarish": {
      ru: "Google AdSense — показ и управление рекламой",
      en: "Google AdSense — ad display and management"
    },
    "Google DoubleClick — reklama qayta o'lchash": {
      ru: "Google DoubleClick — переизмерение рекламы",
      en: "Google DoubleClick — ad re-measurement"
    },
    "YouTube (thumbnail xizmati orqali) — agar video ko'rsangiz": {
      ru: "YouTube (через сервис thumbnail) — если смотрите видео",
      en: "YouTube (via thumbnail service) — if you watch videos"
    },
    "4. Cookie'larni qanday boshqarish?": {
      ru: "4. Как управлять cookie?",
      en: "4. How to manage cookies?"
    },
    "4.1. Brauzer sozlamalari orqali": {
      ru: "4.1. Через настройки браузера",
      en: "4.1. Via browser settings"
    },
    "Hech qachon cookie qabul qilmaslik yoki ma'lum cookie'larni o'chirish uchun brauzer sozlamalaridan foydalaning:": {
      ru: "Чтобы никогда не принимать cookie или удалять определённые — используйте настройки браузера:",
      en: "To never accept cookies or delete specific ones — use browser settings:"
    },
    "Eslatma: agar barcha cookie'larni o'chirsangiz, ba'zi xizmatlar to'g'ri ishlamasligi mumkin (masalan, tanlangan tema saqlanmaydi).": {
      ru: "Примечание: если отключить все cookie, некоторые сервисы могут работать неправильно (например, не сохранится выбранная тема).",
      en: "Note: if you disable all cookies, some services may not work correctly (e.g., selected theme won't be saved)."
    },
    "4.2. Google reklama sozlamalari orqali": {
      ru: "4.2. Через настройки рекламы Google",
      en: "4.2. Via Google Ad Settings"
    },
    "Faqat shaxsiylashtirilgan reklamalarni o'chirish uchun (umuman reklama qolaveradi, lekin tasodifiy bo'ladi):": {
      ru: "Чтобы отключить только персонализацию рекламы (реклама останется, но случайная):",
      en: "To disable only personalized ads (ads remain, but random):"
    },
    "4.3. Analytics'dan voz kechish": {
      ru: "4.3. Отказ от Analytics",
      en: "4.3. Opt out of Analytics"
    },
    "Google Analytics o'lchamlaridan voz kechish uchun rasmiy brauzer kengaytmasi:": {
      ru: "Официальное расширение браузера для отказа от Google Analytics:",
      en: "Official browser extension for Google Analytics opt-out:"
    },
    "4.4. Incognito / Private rejim": {
      ru: "4.4. Режим Incognito / Private",
      en: "4.4. Incognito / Private mode"
    },
    "Brauzeringizning \"Incognito\" (yashirin) rejimida ochsangiz, sessiya tugagandan keyin barcha cookie'lar avtomatik o'chiriladi.": {
      ru: "Если откроете в режиме \"Incognito\" (приватном), все cookie автоматически удалятся после завершения сессии.",
      en: "If you open in 'Incognito' (private) mode, all cookies are automatically deleted after the session ends."
    },
    "5. Cookie roziligi (Consent)": {
      ru: "5. Согласие на cookie (Consent)",
      en: "5. Cookie consent"
    },
    "Yevropa Ittifoqi (EU) yoki Buyuk Britaniya (UK) hududidan tashrif buyursangiz, GDPR/UK GDPR qonunlariga binoan saytda alohida cookie banneri ko'rinadi va siz reklama/analitik cookie'lardan voz kechishingiz mumkin.": {
      ru: "При посещении из ЕС или Великобритании по законам GDPR/UK GDPR на сайте отобразится отдельный баннер cookie, и вы сможете отказаться от рекламных/аналитических cookie.",
      en: "When visiting from the EU or UK, per GDPR/UK GDPR laws, a separate cookie banner appears on the site and you can opt out of advertising/analytics cookies."
    },
    "O'zbekiston va boshqa hududlardan tashrif buyuruvchilar uchun saytdan foydalanish — cookie'lardan foydalanishga rozilik deb hisoblanadi.": {
      ru: "Для посетителей из Узбекистана и других регионов использование сайта означает согласие на использование cookie.",
      en: "For visitors from Uzbekistan and other regions, using the site implies consent to cookie usage."
    },
    "6. localStorage haqida": { ru: "6. О localStorage", en: "6. About localStorage" },
    "Cookie'lardan tashqari, sayt ba'zi ma'lumotlarni brauzeringizning localStorage'ida saqlaydi (cookie emas, lekin o'xshash). Bu:": {
      ru: "Кроме cookie, сайт хранит некоторые данные в localStorage браузера (не cookie, но похоже). Это:",
      en: "Besides cookies, the site stores some data in the browser's localStorage (not a cookie but similar). This includes:"
    },
    "To-do ro'yxatingiz": { ru: "Ваш список задач", en: "Your to-do list" },
    "Pul boshqaruvi yozuvlari": { ru: "Записи управления финансами", en: "Money management records" },
    "Saqlangan sotuvchi rekvizitlari (Hisob-faktura xizmatida)": {
      ru: "Сохранённые реквизиты продавца (в Счёт-фактуре)",
      en: "Saved seller details (in Invoice)"
    },
    "AI vositasi uchun API kalit": {
      ru: "API-ключ для AI-инструмента",
      en: "API key for AI tool"
    },
    "Bularni o'chirish uchun: brauzer sozlamalari → \"Saytlar ma'lumotini tozalash\" → osonstudio.uz tanlang.": {
      ru: "Чтобы их удалить: настройки браузера → \"Очистить данные сайтов\" → выберите osonstudio.uz.",
      en: "To delete: browser settings → \"Clear site data\" → select osonstudio.uz."
    },

    // === COOKIES — fragmentlangan matn (strong tag tufayli) ===
    "Cookie'lardan tashqari, sayt ba'zi ma'lumotlarni brauzeringizning": {
      ru: "Кроме cookie, сайт хранит некоторые данные в",
      en: "Besides cookies, the site stores some data in your browser's"
    },
    "'ida saqlaydi (cookie emas, lekin o'xshash). Bu:": {
      ru: " вашего браузера (не cookie, но похоже). Это:",
      en: " (not a cookie but similar). This includes:"
    },
    "— sayt foydalanish statistikasi": {
      ru: "— статистика использования сайта",
      en: "— site usage statistics"
    },
    "— reklama ko'rsatish va boshqarish": {
      ru: "— показ и управление рекламой",
      en: "— ad display and management"
    },
    "— reklama qayta o'lchash": {
      ru: "— переизмерение рекламы",
      en: "— ad re-measurement"
    },
    "(thumbnail xizmati orqali) — agar video ko'rsangiz": {
      ru: "(через сервис thumbnail) — если смотрите видео",
      en: "(via thumbnail service) — if you watch videos"
    },

    // === Cookie jadval — vaqt birliklari ===
    "2 yil": { ru: "2 года", en: "2 years" },
    "24 soat": { ru: "24 часа", en: "24 hours" },
    "13 oy": { ru: "13 месяцев", en: "13 months" },
    "1 yil": { ru: "1 год", en: "1 year" },
    "1 oy": { ru: "1 месяц", en: "1 month" },
    "1 hafta": { ru: "1 неделя", en: "1 week" },
    "1 kun": { ru: "1 день", en: "1 day" },
    "1 soat": { ru: "1 час", en: "1 hour" },

    // === Privacy/Cookie — qo'shimcha fragmentlar ===
    "Foydalanuvchini ajratish (anonim)": {
      ru: "Идентификация пользователя (анонимно)",
      en: "User identification (anonymous)"
    },
    "Sessiya holati": { ru: "Состояние сессии", en: "Session state" },
    "Foydalanuvchini ajratish (24 soat)": {
      ru: "Идентификация пользователя (24 часа)",
      en: "User identification (24 hours)"
    },
    "AdSense reklama identifikatori": {
      ru: "Идентификатор рекламы AdSense",
      en: "AdSense ad identifier"
    },
    "Reklama personalizatsiyasi": {
      ru: "Персонализация рекламы",
      en: "Ad personalization"
    },
    "7. O'zgartirishlar": { ru: "7. Изменения", en: "7. Changes" },
    "Cookie siyosatini vaqti-vaqti bilan yangilab turamiz. Yangilangan sana yuqorida ko'rsatilgan.": {
      ru: "Политика cookie периодически обновляется. Дата обновления указана выше.",
      en: "Cookie policy is updated periodically. Updated date shown above."
    },
    "Cookie'lar bo'yicha savollaringiz bo'lsa:": {
      ru: "По вопросам о cookie:",
      en: "For cookie questions:"
    },
    "Ushbu siyosat bilan birga": { ru: "Вместе с этой политикой", en: "Along with this policy" },
    "ni ham o'qib chiqing.": { ru: "тоже ознакомьтесь.", en: "please also read." },

    // ===========================================================
    // === ABOUT — combined matnlar (<strong> + <a> aralash) ===
    // ===========================================================
    "Ha, Oson Studio butunlay bepul. Sayt reklamalar orqali (ba'zi sahifalarda) qisman moliyalashtiriladi, lekin foydalanish uchun hech qanday to'lov yoki obuna talab qilinmaydi. Loyihani ixtiyoriy ravishda qo'llab-quvvatlash mumkin.": {
      ru: "Да, Oson Studio полностью бесплатный. Сайт частично финансируется за счёт рекламы (на некоторых страницах), но никакой оплаты или подписки для использования не требуется. Проект можно поддержать на добровольной основе.",
      en: "Yes, Oson Studio is completely free. The site is partially funded by ads (on some pages), but no payment or subscription is required to use it. You can voluntarily support the project."
    },
    "Oson Studio — mustaqil dasturchi tomonidan O'zbekiston jamiyati uchun yaratilgan loyiha. Asoschisi va asosiy ishlab chiquvchi: Eldor Ergashov.": {
      ru: "Oson Studio — проект, созданный независимым разработчиком для общества Узбекистана. Основатель и главный разработчик: Eldor Ergashov.",
      en: "Oson Studio is a project created by an independent developer for the Uzbekistan community. Founder and lead developer: Eldor Ergashov."
    },
    "Taklif, savol, xato haqida xabar yoki hamkorlik takliflari uchun Aloqa sahifasiga o'ting. Telegram orqali eng tez javob olishingiz mumkin: @eldoroga.": {
      ru: "Для предложений, вопросов, сообщений об ошибках или сотрудничества перейдите на страницу Контактов. Самый быстрый ответ — через Telegram: @eldoroga.",
      en: "For suggestions, questions, bug reports, or collaboration, go to the Contact page. The fastest response is via Telegram: @eldoroga."
    },
    "Sayt ishlatishni boshlashdan oldin Foydalanish shartlari, Maxfiylik siyosati va Cookie siyosati bilan tanishib chiqing.": {
      ru: "Перед началом использования сайта ознакомьтесь с Условиями использования, Политикой конфиденциальности и Политикой cookie.",
      en: "Before using the site, please review the Terms of Service, Privacy Policy, and Cookie Policy."
    },

    // ===========================================================
    // === PRIVACY — combined matnlar va list itemlari ===
    // ===========================================================
    "Oson Studio (osonstudio.uz) sizning maxfiyligingizni hurmat qiladi. Ushbu siyosat saytdan foydalanganingizda qaysi ma'lumotlar to'planishini, ular qanday ishlatilishini va sizning huquqlaringizni tushuntiradi.": {
      ru: "Oson Studio (osonstudio.uz) уважает вашу конфиденциальность. Эта политика объясняет, какие данные собираются при использовании сайта, как они используются и какие у вас права.",
      en: "Oson Studio (osonstudio.uz) respects your privacy. This policy explains what data is collected when you use the site, how it's used, and your rights."
    },
    "Saytning katta qismi to'g'ridan-to'g'ri sizning brauzeringizda ishlaydi. Quyidagi ma'lumotlar serverlarimizga yuborilmaydi:": {
      ru: "Большая часть сайта работает прямо в вашем браузере. Следующие данные не отправляются на наши серверы:",
      en: "Most of the site runs directly in your browser. The following data is not sent to our servers:"
    },
    "PDF, rasm, video, audio fayllaringiz": {
      ru: "Ваши PDF, изображения, видео, аудиофайлы",
      en: "Your PDF, image, video, audio files"
    },
    "Kalkulyatorlarga kiritilgan raqamlar va matnlar": {
      ru: "Введённые в калькуляторы числа и тексты",
      en: "Numbers and text entered into calculators"
    },
    "Hujjat generatorlariga (Hisob-faktura, Akt va h.k.) kiritilgan rekvizitlar": {
      ru: "Реквизиты, введённые в генераторы документов (Счёт-фактура, Акт и т.д.)",
      en: "Details entered into document generators (Invoice, Act, etc.)"
    },
    "Yaratilgan parollar": { ru: "Сгенерированные пароли", en: "Generated passwords" },
    "To-do ro'yxatingiz va pul boshqaruvi yozuvlari": {
      ru: "Ваш список to-do и записи управления финансами",
      en: "Your to-do list and money management records"
    },
    "Qulaylik uchun quyidagilar faqat sizning qurilmangizda saqlanadi va bizga yuborilmaydi:": {
      ru: "Для удобства следующие данные хранятся только на вашем устройстве и не отправляются нам:",
      en: "For convenience, the following are stored only on your device and not sent to us:"
    },
    "Saqlangan sotuvchi rekvizitlari (Hisob-faktura va shu kabi xizmatlarda)": {
      ru: "Сохранённые реквизиты продавца (в Счёт-фактуре и подобных сервисах)",
      en: "Saved seller details (in Invoice and similar services)"
    },
    "To-do va pul boshqaruvi yozuvlari": {
      ru: "Записи to-do и управления финансами",
      en: "To-do and money management records"
    },
    "AI vositasi uchun kiritgan API kalit (agar foydalansangiz)": {
      ru: "Введённый API-ключ для AI-инструмента (если используете)",
      en: "API key entered for AI tool (if you use it)"
    },
    "Vaqtinchalik pochta manzili (agar foydalansangiz)": {
      ru: "Адрес временной почты (если используете)",
      en: "Temporary mail address (if you use it)"
    },
    "Ularni istalgan vaqtda brauzer sozlamalari → \"Saytlar ma'lumotini tozalash\" orqali o'chirishingiz mumkin.": {
      ru: "Их можно удалить в любое время через настройки браузера → \"Очистить данные сайтов\".",
      en: "You can delete them anytime via browser settings → \"Clear site data\"."
    },
    "Saytni tashrif buyurganingizda quyidagi anonim ma'lumotlar Google Analytics va sayt jurnallari orqali yig'iladi:": {
      ru: "При посещении сайта следующие анонимные данные собираются через Google Analytics и журналы сайта:",
      en: "When you visit the site, the following anonymous data is collected via Google Analytics and site logs:"
    },
    "Brauzer turi va versiyasi": { ru: "Тип и версия браузера", en: "Browser type and version" },
    "Qurilma turi (telefon, kompyuter)": { ru: "Тип устройства (телефон, компьютер)", en: "Device type (phone, computer)" },
    "Tashrif buyurilgan sahifalar va sahifada o'tkazgan vaqt": {
      ru: "Посещённые страницы и время, проведённое на странице",
      en: "Pages visited and time spent on each page"
    },
    "Tashrif yo'naltirgan manba (Google, ijtimoiy tarmoq va h.k.)": {
      ru: "Источник перехода (Google, соцсети и т.д.)",
      en: "Referral source (Google, social networks, etc.)"
    },
    "Yashash hududi (mamlakat darajasida)": { ru: "Регион проживания (на уровне страны)", en: "Region of residence (country level)" },
    "Bu ma'lumotlar shaxsingizni aniqlash uchun ishlatilmaydi.": {
      ru: "Эти данные не используются для вашей идентификации.",
      en: "This data is not used to identify you personally."
    },
    "Sayt foydalanish statistikasi uchun Google Analytics 4 (GA4)'dan foydalanamiz. GA4 bizga ko'rsatadi: qaysi xizmatlar mashhur, foydalanuvchilar qaerdan keladi va sayt qanchalik tez ishlaydi. IP manzillaringiz anonimlashtiriladi.": {
      ru: "Для статистики использования сайта мы применяем Google Analytics 4 (GA4). GA4 показывает: какие сервисы популярны, откуда приходят пользователи и насколько быстро работает сайт. Ваши IP-адреса анонимизируются.",
      en: "We use Google Analytics 4 (GA4) for site usage statistics. GA4 tells us: which services are popular, where users come from, and how fast the site is. Your IP addresses are anonymized."
    },
    "Batafsil: Google Privacy Policy": {
      ru: "Подробнее: Google Privacy Policy",
      en: "Details: Google Privacy Policy"
    },
    "Sayt sahifalarida Google AdSense reklamalari ko'rsatilishi mumkin. AdSense quyidagi maqsadlar uchun cookie va boshqa texnologiyalardan foydalanadi:": {
      ru: "На страницах сайта может отображаться реклама Google AdSense. AdSense использует cookie и другие технологии для следующих целей:",
      en: "Google AdSense ads may be displayed on site pages. AdSense uses cookies and other technologies for the following purposes:"
    },
    "Sizning qiziqishlaringizga mos reklama tanlash (shaxsiylashtirish)": {
      ru: "Подбор рекламы по вашим интересам (персонализация)",
      en: "Selecting ads matching your interests (personalization)"
    },
    "Bir xil reklama ortiqcha ko'rsatilmasligi uchun": {
      ru: "Чтобы одна и та же реклама не показывалась слишком часто",
      en: "To prevent showing the same ad too often"
    },
    "Saxtakorlikni aniqlash": { ru: "Обнаружение мошенничества", en: "Fraud detection" },
    "AdSense uchinchi tomon vendor sifatida cookie'lardan foydalanadi (jumladan, DoubleClick DART cookie). Siz Google Reklama sozlamalari orqali shaxsiylashtirilgan reklamalardan voz kechishingiz mumkin.": {
      ru: "AdSense как сторонний вендор использует cookie (включая DoubleClick DART cookie). Вы можете отказаться от персонализированной рекламы через Настройки рекламы Google.",
      en: "AdSense uses cookies as a third-party vendor (including the DoubleClick DART cookie). You can opt out of personalized ads via Google Ads Settings."
    },
    "Google Gemini API (AI rasm sifati) — agar ushbu vositadan foydalansangiz, sizning rasmingiz va API kalitingiz Google'ga yuboriladi. API kalit faqat sizning brauzeringizda saqlanadi.": {
      ru: "Google Gemini API (улучшение изображений ИИ) — если используете этот инструмент, ваше изображение и API-ключ отправляются в Google. API-ключ хранится только в вашем браузере.",
      en: "Google Gemini API (AI image enhancement) — if you use this tool, your image and API key are sent to Google. The API key is stored only in your browser."
    },
    "mail.tm (Vaqtinchalik pochta) — bepul email xizmati. Yozishmalar mail.tm orqali kechadi.": {
      ru: "mail.tm (Временная почта) — бесплатный email-сервис. Переписка проходит через mail.tm.",
      en: "mail.tm (Temporary mail) — a free email service. Correspondence goes through mail.tm."
    },
    "i.ytimg.com (Thumbnail yuklash) — YouTube'ning rasm CDN'i.": {
      ru: "i.ytimg.com (загрузка thumbnail) — CDN изображений YouTube.",
      en: "i.ytimg.com (Thumbnail download) — YouTube's image CDN."
    },
    "cdn.jsdelivr.net, unpkg.com — JavaScript kutubxonalari yuklash uchun.": {
      ru: "cdn.jsdelivr.net, unpkg.com — для загрузки JavaScript-библиотек.",
      en: "cdn.jsdelivr.net, unpkg.com — for loading JavaScript libraries."
    },
    "Cookie'lar haqida batafsil — alohida Cookie siyosati sahifasida. Qisqacha:": {
      ru: "Подробнее о cookie — на отдельной странице Политика cookie. Кратко:",
      en: "More about cookies — on a separate Cookie Policy page. Briefly:"
    },
    "Foydalanuvchi sifatida sizda quyidagi huquqlar mavjud:": {
      ru: "Как пользователь, у вас есть следующие права:",
      en: "As a user, you have the following rights:"
    },
    "Cookie'larni boshqarish — brauzer sozlamalari orqali ularni o'chirish yoki cheklash.": {
      ru: "Управление cookie — отключение или ограничение через настройки браузера.",
      en: "Manage cookies — disable or restrict via browser settings."
    },
    "localStorage'ni tozalash — saytda saqlangan barcha ma'lumotlarni o'chirish (brauzer → saytlar ma'lumotini tozalash).": {
      ru: "Очистка localStorage — удаление всех сохранённых на сайте данных (браузер → очистить данные сайтов).",
      en: "Clear localStorage — delete all site-stored data (browser → clear site data)."
    },
    "Shaxsiy reklamalardan voz kechish — Google Reklama sozlamalari orqali.": {
      ru: "Отказ от персональной рекламы — через Настройки рекламы Google.",
      en: "Opt out of personalized ads — via Google Ads Settings."
    },
    "Analytics'dan voz kechish — Google Analytics Opt-out brauzer kengaytmasi orqali.": {
      ru: "Отказ от Analytics — через браузерное расширение Google Analytics Opt-out.",
      en: "Opt out of Analytics — via the Google Analytics Opt-out browser extension."
    },
    "Ma'lumotlar haqida so'rov — biz to'plagan har qanday ma'lumot haqida bilish uchun bizga yozing.": {
      ru: "Запрос данных — напишите нам, чтобы узнать о любых данных, которые мы собрали.",
      en: "Data request — write to us to learn about any data we've collected."
    },

    // ===========================================================
    // === TERMS — combined matnlar va list itemlari ===
    // ===========================================================
    "Oson Studio (osonstudio.uz, keyingi o'rinlarda \"Sayt\" yoki \"Biz\") xizmatlaridan foydalanishni boshlashdan oldin ushbu Foydalanish shartlarini diqqat bilan o'qib chiqing. Saytga kirish va xizmatlardan foydalanish orqali siz ushbu shartlarning barcha qoidalariga rozilik bildirgan hisoblanasiz.": {
      ru: "Перед началом использования сервисов Oson Studio (osonstudio.uz, далее «Сайт» или «Мы») внимательно прочитайте эти Условия использования. Заходя на сайт и пользуясь сервисами, вы выражаете согласие со всеми положениями настоящих Условий.",
      en: "Before using the services of Oson Studio (osonstudio.uz, hereinafter \"Site\" or \"We\"), please read these Terms of Service carefully. By accessing the site and using the services, you agree to all provisions of these Terms."
    },
    "Agar shartlardan birortasiga rozi bo'lmasangiz, saytdan foydalanmang.": {
      ru: "Если вы не согласны с каким-либо из условий — не пользуйтесь сайтом.",
      en: "If you disagree with any of the terms, do not use the site."
    },
    "Oson Studio — bu kundalik raqamli vazifalar uchun bepul onlayn vositalar to'plami. Saytda quyidagi yo'nalishdagi xizmatlar mavjud:": {
      ru: "Oson Studio — бесплатный набор онлайн-инструментов для повседневных цифровых задач. На сайте доступны сервисы следующих направлений:",
      en: "Oson Studio is a free collection of online tools for everyday digital tasks. The following types of services are available:"
    },
    "Buxgalteriya hujjatlari va kalkulyatorlari (Hisob-faktura, Akt, Shartnoma, soliq hisoblash va h.k.)": {
      ru: "Бухгалтерские документы и калькуляторы (Счёт-фактура, Акт, Договор, расчёт налогов и т.д.)",
      en: "Accounting documents and calculators (Invoice, Act, Contract, tax calculations, etc.)"
    },
    "Umumiy kalkulyatorlar (yosh, IMC, kredit, kaloriya va h.k.)": {
      ru: "Общие калькуляторы (возраст, ИМТ, кредит, калории и т.д.)",
      en: "General calculators (age, BMI, loan, calorie, etc.)"
    },
    "Hujjat ishlovi (PDF, OCR, konvertorlar)": {
      ru: "Обработка документов (PDF, OCR, конвертеры)",
      en: "Document processing (PDF, OCR, converters)"
    },
    "Qazo hisoblagichlari (namoz, ro'za, ayollar uchun)": {
      ru: "Калькуляторы каза (намаз, руза, для женщин)",
      en: "Qaza calculators (prayer, fasting, for women)"
    },
    "Klaviatura mashqlari va o'yinlari (Tezyoz)": {
      ru: "Упражнения и игры для клавиатуры (Tezyoz)",
      en: "Keyboard exercises and games (Tezyoz)"
    },
    "Boshqa yordamchi vositalar (QR, parol, thumbnail va h.k.)": {
      ru: "Другие вспомогательные инструменты (QR, пароль, thumbnail и т.д.)",
      en: "Other helper tools (QR, password, thumbnail, etc.)"
    },
    "Saytni shaxsiy yoki tijorat maqsadlarda bepul ishlatish": {
      ru: "Бесплатное использование сайта в личных или коммерческих целях",
      en: "Free use of the site for personal or commercial purposes"
    },
    "Yaratilgan hujjatlar (PDF, CSV)dan o'z ishingizda foydalanish": {
      ru: "Использование созданных документов (PDF, CSV) в своей работе",
      en: "Using generated documents (PDF, CSV) in your own work"
    },
    "Saytga havola berish (link sharing)": {
      ru: "Размещение ссылки на сайт (link sharing)",
      en: "Sharing a link to the site"
    },
    "Saytdan boshqalarga maslahat berish": {
      ru: "Рекомендовать сайт другим",
      en: "Recommending the site to others"
    },
    "Sayt ishini buzish — server, kod yoki tarmoqqa ataylab ziyon yetkazish, DDoS hujumlar, avtomatlashtirilgan so'rovlar (bot, scraping) saytni og'ir yuklash maqsadida.": {
      ru: "Нарушение работы сайта — умышленный вред серверу, коду или сети, DDoS-атаки, автоматизированные запросы (бот, скрапинг) с целью чрезмерной нагрузки.",
      en: "Disrupting the site — intentionally harming server, code, or network, DDoS attacks, automated requests (bots, scraping) intended to overload the site."
    },
    "Xavfsizlikni buzishga urinish — saytni hack qilishga urinish, zaif joylardan foydalanish (responsible disclosure'siz).": {
      ru: "Попытка нарушения безопасности — попытка взлома сайта, эксплуатация уязвимостей (без responsible disclosure).",
      en: "Attempting to breach security — attempting to hack the site, exploiting vulnerabilities (without responsible disclosure)."
    },
    "Mualliflik huquqini buzish — sayt kontentini ruxsatsiz nusxalash, qayta sotish, o'ziniki kabi ko'rsatish.": {
      ru: "Нарушение авторских прав — несанкционированное копирование контента сайта, перепродажа, выдача за собственный.",
      en: "Copyright infringement — unauthorized copying of site content, reselling, passing off as your own."
    },
    "Noqonuniy maqsadlar — saytdan O'zbekiston Respublikasi qonunlariga zid faoliyat uchun foydalanish.": {
      ru: "Незаконные цели — использование сайта для деятельности, противоречащей законам Республики Узбекистан.",
      en: "Illegal purposes — using the site for activities contrary to the laws of the Republic of Uzbekistan."
    },
    "Boshqa foydalanuvchilarga zarar — masalan, parol generatori orqali boshqalarga ziyon yetkazish maqsadi.": {
      ru: "Вред другим пользователям — например, цель причинить ущерб другим через генератор паролей.",
      en: "Harm to other users — e.g., intent to harm others via the password generator."
    },
    "Sayt va undagi barcha vositalar \"qanday bo'lsa shunday\" (as-is) taqdim etiladi, ya'ni hech qanday aniq yoki nazarda tutilgan kafolatlarsiz.": {
      ru: "Сайт и все его инструменты предоставляются «как есть» (as-is), то есть без каких-либо явных или подразумеваемых гарантий.",
      en: "The site and all its tools are provided \"as-is\", meaning without any express or implied warranties."
    },
    "Saytdagi kalkulyatorlar va hujjat generatorlari (Hisob-faktura, Akt, soliq kalkulyatorlari, IMC, kaloriya, Qazo hisoblagich va h.k.) ma'lumot beruvchi maqsadda taqdim etilgan. Aniq professional yoki yuridik maslahat o'rnini bosa olmaydi.": {
      ru: "Калькуляторы и генераторы документов на сайте (Счёт-фактура, Акт, налоговые калькуляторы, ИМТ, калории, Калькулятор каза и т.д.) предоставлены в информационных целях. Они не заменяют точную профессиональную или юридическую консультацию.",
      en: "The calculators and document generators on the site (Invoice, Act, tax calculators, BMI, calorie, Qaza calculator, etc.) are provided for informational purposes only. They do not replace exact professional or legal advice."
    },
    "Buxgalteriya hujjatlari — yaratilgan hujjatlarni rasmiy joyga taqdim etishdan oldin buxgalter yoki yurist bilan tekshiring.": {
      ru: "Бухгалтерские документы — перед подачей созданных документов в официальные органы проверьте их у бухгалтера или юриста.",
      en: "Accounting documents — verify generated documents with an accountant or lawyer before submitting to official authorities."
    },
    "Soliq hisoblash — soliq stavkalari o'zgarishi mumkin, eng so'nggi qonunchilik bilan tekshiring.": {
      ru: "Расчёт налогов — налоговые ставки могут меняться, сверяйтесь с актуальным законодательством.",
      en: "Tax calculation — tax rates may change; verify against the latest legislation."
    },
    "Tibbiy hisoblar (IMC, kaloriya, homiladorlik) — bu maslahat emas. Tibbiy qarorlar uchun shifokorga murojaat qiling.": {
      ru: "Медицинские расчёты (ИМТ, калории, беременность) — это не консультация. По медицинским вопросам обращайтесь к врачу.",
      en: "Medical calculations (BMI, calorie, pregnancy) — these are not medical advice. Consult a doctor for medical decisions."
    },
    "Qazo hisoblagich — taxminiy hisob. Diniy savollar uchun din ulamolari bilan maslahatlashing.": {
      ru: "Калькулятор каза — приблизительный расчёт. По религиозным вопросам консультируйтесь с религиозными учёными.",
      en: "Qaza calculator — approximate calculation. Consult religious scholars on religious matters."
    },
    "Oson Studio quyidagilar uchun mas'uliyat olmaydi:": {
      ru: "Oson Studio не несёт ответственности за:",
      en: "Oson Studio is not responsible for:"
    },
    "Sayt vaqtinchalik ishlamasligi yoki sekinlashishi": {
      ru: "Временную недоступность или замедление сайта",
      en: "Temporary unavailability or slowdown of the site"
    },
    "Foydalanuvchining sayt natijalariga asoslanib qabul qilgan qarorlari": {
      ru: "Решения пользователя, основанные на результатах сайта",
      en: "User decisions based on the site's results"
    },
    "Foydalanuvchi tomonidan ma'lumot yo'qotilishi (texnik xato, brauzer cache tozalash va h.k.)": {
      ru: "Потерю данных пользователем (технические ошибки, очистка кеша браузера и т.д.)",
      en: "Data loss by the user (technical errors, clearing browser cache, etc.)"
    },
    "Uchinchi tomon xizmatlarining (Google, YouTube, mail.tm va h.k.) ishlashi yoki sifati": {
      ru: "Работу или качество сторонних сервисов (Google, YouTube, mail.tm и т.д.)",
      en: "Operation or quality of third-party services (Google, YouTube, mail.tm, etc.)"
    },
    "Saytda ko'rsatilgan reklamalarning mazmuni": {
      ru: "Содержание рекламы, отображаемой на сайте",
      en: "Content of ads displayed on the site"
    },
    "Sayt dizayni, logotip, kod va o'ziga xos kontent (matnlar, ikonalar) Oson Studio mulki hisoblanadi. Ruxsatsiz nusxalash, qayta tarqatish yoki tijorat maqsadlarda foydalanish taqiqlanadi.": {
      ru: "Дизайн сайта, логотип, код и оригинальный контент (тексты, иконки) являются собственностью Oson Studio. Несанкционированное копирование, перераспространение или коммерческое использование запрещены.",
      en: "Site design, logo, code, and original content (text, icons) are the property of Oson Studio. Unauthorized copying, redistribution, or commercial use is prohibited."
    },
    "Saytda ishlatilgan ochiq manbali kutubxonalar (jsPDF, autoTable va h.k.) o'z mualliflarining litsenziyalari ostida ishlatiladi.": {
      ru: "Используемые на сайте библиотеки с открытым исходным кодом (jsPDF, autoTable и т.д.) применяются под лицензиями их авторов.",
      en: "Open-source libraries used on the site (jsPDF, autoTable, etc.) are used under their authors' licenses."
    },
    "Saytda yaratilgan hujjatlar (PDF, CSV) sizning mulkingiz hisoblanadi. Biz ularni ko'rmaymiz, saqlamaymiz va boshqalarga bermaymiz.": {
      ru: "Документы, созданные на сайте (PDF, CSV), являются вашей собственностью. Мы их не видим, не храним и не передаём третьим лицам.",
      en: "Documents created on the site (PDF, CSV) are your property. We don't see, store, or share them with third parties."
    },
    "Sayt sahifalarida Google AdSense va boshqa reklama xizmatlari orqali reklamalar ko'rsatilishi mumkin. Reklamalarning mazmuni biz tomonimizdan tasdiqlanmaydi va reklama beruvchilarning mas'uliyatidir. Reklama orqali boshqa saytga o'tganingizda, ulardan oldin ularning shartlarini o'qing.": {
      ru: "На страницах сайта может отображаться реклама через Google AdSense и другие рекламные сервисы. Содержание рекламы не утверждается нами и является ответственностью рекламодателей. Переходя по рекламе на другой сайт, ознакомьтесь с его условиями.",
      en: "Ads may be displayed on site pages via Google AdSense and other ad services. Ad content is not approved by us and is the responsibility of advertisers. When clicking an ad to another site, read their terms first."
    },
    "Biz ushbu shartlarni istalgan vaqtda o'zgartirish huquqini saqlab qolamiz. Muhim o'zgarishlar haqida saytdagi xabar yoki email orqali ma'lum qilamiz. O'zgarishlardan keyin saytdan foydalanishni davom ettirish — yangi shartlarga rozilik deb hisoblanadi.": {
      ru: "Мы оставляем за собой право изменять эти условия в любое время. О важных изменениях сообщим через уведомление на сайте или email. Продолжение использования сайта после изменений означает согласие с новыми условиями.",
      en: "We reserve the right to modify these terms at any time. We'll announce major changes via a site notice or email. Continued use of the site after changes constitutes acceptance of the new terms."
    },
    "Saytda ro'yxatdan o'tish kerak emas. Lekin agar siz foydalanish qoidalarini buzsangiz, biz sizning IP manzilingizni saytga kirishdan cheklash huquqini saqlab qolamiz.": {
      ru: "Регистрация на сайте не требуется. Но если вы нарушите правила использования, мы оставляем за собой право ограничить доступ с вашего IP-адреса.",
      en: "No registration is required. But if you violate the usage rules, we reserve the right to restrict access from your IP address."
    },
    "Ushbu shartlar bilan birga Maxfiylik siyosati va Cookie siyosatini ham o'qib chiqishingizni so'raymiz.": {
      ru: "Вместе с этими условиями просим также ознакомиться с Политикой конфиденциальности и Политикой cookie.",
      en: "Along with these terms, please also review the Privacy Policy and Cookie Policy."
    },
    "Ushbu shartlar bo'yicha savollar uchun:": {
      ru: "По вопросам этих условий:",
      en: "For questions about these terms:"
    },
  };

  // === Xizmatlar (navbar #2) — bo'lim sarlavhalari + tool tavsiflari (RU/EN) ===
  Object.assign(DICT, {
    // Bo'lim sarlavhalari
    "Eng mashhuri": { ru: "Самые популярные", en: "Most popular" },
    "Rasm va media": { ru: "Изображения и медиа", en: "Images & media" },
    "Biznes vositalari": { ru: "Бизнес-инструменты", en: "Business tools" },
    "Matn va mahsuldorlik": { ru: "Текст и продуктивность", en: "Text & productivity" },
    // Tool tavsiflari — "Eng mashhuri"
    "Bir necha hujjatni drag-drop bilan bitta PDF'ga aylantiring — fayllar serverga yuborilmaydi.": { ru: "Объедините несколько документов в один PDF перетаскиванием — файлы не отправляются на сервер.", en: "Merge several documents into one PDF by drag-and-drop — files never leave your device." },
    "Photoshop kerakmas — AI bir bosishda toza, shaffof fon: stiker, do'kon, profil rasm.": { ru: "Photoshop не нужен — ИИ одним кликом делает чистый прозрачный фон: стикеры, магазин, аватар.", en: "No Photoshop needed — AI makes a clean transparent background in one click: stickers, store, profile." },
    "Ekran + ovozni HD'da yozing — onlayn dars, demo, bug report uchun, faqat brauzerda.": { ru: "Запишите экран и звук в HD — для онлайн-уроков, демо и баг-репортов, прямо в браузере.", en: "Record screen + audio in HD — for online lessons, demos and bug reports, right in the browser." },
    "STIR, MFO, mahsulot ro'yxati va NDS — to'liq schyot-faktura PDF'i 30 soniyada.": { ru: "ИНН, МФО, список товаров и НДС — полный счёт-фактура в PDF за 30 секунд.", en: "TIN, bank code, item list and VAT — a complete invoice PDF in 30 seconds." },
    "Bir click — 16-belgili sindirib bo'lmas parol. Instagram, bank ilovasi, ish hisobi uchun.": { ru: "Один клик — надёжный 16-значный пароль. Для Instagram, банковского приложения и работы.", en: "One click — an uncrackable 16-character password. For Instagram, banking apps and work accounts." },
    "Wi-Fi paroli, menyu, vizit karta — istalgan ma'lumotdan telefonda o'qiluvchi QR kod.": { ru: "Пароль Wi-Fi, меню, визитка — QR-код из любых данных, читается телефоном.", en: "Wi-Fi password, menu, business card — a phone-scannable QR code from any data." },
    "Kredit olishdan oldin haqiqiy oylik to'lovni biling — bank aytmagan jami foiz va grafik.": { ru: "Узнайте реальный ежемесячный платёж до кредита — полная переплата и график, о которых банк молчит.", en: "Know your real monthly payment before a loan — total interest and schedule the bank won't show." },
    "Matn bir click'da o'zgaradi — universitet hujjati, rasmiy xat, ota-onaga yuborish uchun.": { ru: "Текст меняется одним кликом — для вузовских документов, официальных писем, родителям.", en: "Convert text in one click — for university papers, official letters, sending to parents." },
    "Asl email'ingizni sirda saqlang — 1 martalik pochta, spam va bezovta xatlardan qutuling.": { ru: "Скройте настоящий email — одноразовая почта, избавьтесь от спама и навязчивых писем.", en: "Keep your real email private — a one-time inbox, free of spam and junk mail." },
    // "Hujjatlar"
    "Kontrakt yoki sertifikatdan kerakli sahifalarni ajratib oling — qolganini tashlab.": { ru: "Извлеките нужные страницы из контракта или сертификата — остальное отбросьте.", en: "Extract the pages you need from a contract or certificate — drop the rest." },
    "Telefondagi rasm hujjatlardan tartibli PDF — pasport, sertifikat, chek uchun.": { ru: "Аккуратный PDF из фото-документов с телефона — для паспорта, справки, чека.", en: "A tidy PDF from phone photos of documents — passport, certificate, receipt." },
    "10 MB PDF ko'pmi? Sifatni saqlab 2-3 baravar siqing — email, Telegram uchun.": { ru: "10 МБ PDF — многовато? Сожмите в 2–3 раза без потери качества — для email и Telegram.", en: "10 MB PDF too big? Compress it 2–3× without losing quality — for email and Telegram." },
    "Skaner hujjatdagi matnni klaviatura urmasdan oling — AI 95% aniqlikda tanidi.": { ru: "Извлеките текст из скана без набора вручную — ИИ распознаёт с точностью 95%.", en: "Get text from a scanned document without typing — AI recognizes it with 95% accuracy." },
    // "Rasm va media"
    "AI 1 sekundda fonni olib tashlaydi — shaffof PNG: stiker, e-commerce, profil uchun.": { ru: "ИИ убирает фон за секунду — прозрачный PNG: стикеры, e-commerce, аватар.", en: "AI removes the background in a second — transparent PNG: stickers, e-commerce, profile." },
    "Studiyaga bormang — pasport, viza, haydovchilik 3×4 foto'ni telefondan tayyorlang.": { ru: "Без похода в студию — фото 3×4 на паспорт, визу или права прямо с телефона.", en: "Skip the studio — make a 3×4 ID photo for passport, visa or licence from your phone." },
    "PNG → JPG, WEBP, HEIC — istalgan format, sifat saqlanadi, drag-drop bilan.": { ru: "PNG → JPG, WEBP, HEIC — любой формат, качество сохраняется, перетаскиванием.", en: "PNG → JPG, WEBP, HEIC — any format, quality preserved, with drag-and-drop." },
    "Brend rangi yoki UI palitra — 2D picker, HEX/RGB/HSL, WCAG kontrast tekshiruvi.": { ru: "Цвет бренда или UI-палитра — 2D-пикер, HEX/RGB/HSL, проверка контраста WCAG.", en: "Brand colour or UI palette — 2D picker, HEX/RGB/HSL, WCAG contrast check." },
    "Brauzer ekrani + ovoz — onlayn dars, demo, oilaga ko'rsatish, MP4 yuklab oling.": { ru: "Экран браузера + звук — онлайн-урок, демо, показать семье; скачайте MP4.", en: "Browser screen + audio — online lesson, demo, show family; download as MP4." },
    "Videodagi ovozni MP3 sifatida ajratib oling — podkast, qo'shiq, dars uchun.": { ru: "Извлеките звук из видео в MP3 — для подкаста, песни, урока.", en: "Extract audio from a video as MP3 — for a podcast, song or lesson." },
    "YouTube link kiriting — 4K muqova rasmni yuklab oling, reference yoki repost uchun.": { ru: "Вставьте ссылку YouTube — скачайте обложку в 4K, для референса или репоста.", en: "Paste a YouTube link — download the 4K thumbnail, for reference or repost." },
    "Muqova YouTube'da qanday ko'rinadi? Uy, qidiruv, mobile, Shorts — 4 layout'da test.": { ru: "Как обложка смотрится на YouTube? Главная, поиск, мобильный, Shorts — тест в 4 раскладках.", en: "How does the thumbnail look on YouTube? Home, search, mobile, Shorts — test in 4 layouts." },
    "Kanal uchun @nik bo'shmi yoki bandmi — soniyada bilib oling, bo'sh variantlar taklifi bilan.": { ru: "@ник для канала свободен или занят — узнайте за секунду, с подсказкой свободных вариантов.", en: "Is a channel @handle free or taken — find out in a second, with free-name suggestions." },
    "Ovozni robot, bola, hayvon yoki monsterga o'zgartiring — TikTok, prank uchun 10+ effekt.": { ru: "Измените голос на робота, ребёнка, животное или монстра — 10+ эффектов для TikTok и пранков.", en: "Turn your voice into a robot, child, animal or monster — 10+ effects for TikTok and pranks." },
    // "Hisoblagichlar"
    "Aniq necha yil, oy, kun — pensiya yoshi, ish staji, hujjat to'ldirish uchun.": { ru: "Точно сколько лет, месяцев, дней — для пенсионного возраста, стажа, заполнения документов.", en: "Exactly how many years, months, days — for pension age, work record, filling forms." },
    "Ozish, vazn olish yoki saqlash — kunlik kaloriya, oqsil/yog'/uglevod nisbati aniq.": { ru: "Похудеть, набрать или удержать вес — суточные калории и баланс белков/жиров/углеводов.", en: "Lose, gain or maintain weight — daily calories and protein/fat/carb ratio." },
    "Bo'y va vazningizdan tana massasi indeksi — sog'lom oraliqdamisiz? 1 soniyada.": { ru: "Индекс массы тела по росту и весу — вы в здоровом диапазоне? За секунду.", en: "Body mass index from your height and weight — are you in the healthy range? In a second." },
    "Funt, mil, Fahrenheit, gallon — chet el reseptlar, AliExpress, o'qish uchun konvertor.": { ru: "Фунты, мили, Фаренгейт, галлоны — конвертер для зарубежных рецептов, AliExpress, учёбы.", en: "Pounds, miles, Fahrenheit, gallons — a converter for foreign recipes, AliExpress, studying." },
    // "Biznes vositalari"
    "Ish topshirdingiz? Dalolatnoma — STIR, summa, imzo o'rni bilan PDF tayyor.": { ru: "Сдали работу? Акт — с ИНН, суммой и местом для подписи, готовый PDF.", en: "Finished a job? An acceptance act — with TIN, amount and signature line, ready PDF." },
    "Xizmat, oldi-sotdi, ijara, mehnat — 5 tur shartnoma, to'ldiring va PDF qiling.": { ru: "Услуги, купля-продажа, аренда, труд — 5 видов договоров, заполните и сохраните в PDF.", en: "Services, sale, lease, employment — 5 contract types, fill in and export to PDF." },
    "Yakka tartibda tadbirkormisiz? Daromaddan kelib chiqib soliq, ENS va jami summa.": { ru: "Вы ИП? Налог, ЕСП и итоговая сумма исходя из дохода.", en: "Self-employed? Tax, social payment and total amount based on your income." },
    "Tannarx + foyda nechi % bo'lsin? Sotuv narxi, marja va naqd daromad — biznes uchun.": { ru: "Себестоимость + сколько % прибыли? Цена продажи, маржа и чистый доход — для бизнеса.", en: "Cost + what profit %? Selling price, margin and net profit — for business." },
    // "Matn va mahsuldorlik"
    "Insho, post, SMS, meta-tag — so'z, belgi, jumla, paragraf va o'qish vaqti real vaqtda.": { ru: "Эссе, пост, SMS, мета-тег — слова, символы, предложения, абзацы и время чтения в реальном времени.", en: "Essay, post, SMS, meta tag — words, characters, sentences, paragraphs and reading time, live." },
    "Dizayn yoki sayt uchun namuna matn — paragraf, ro'yxat, sarlavha bir click va tayyor.": { ru: "Текст-рыба для дизайна или сайта — абзацы, списки, заголовки одним кликом.", en: "Placeholder text for design or a site — paragraphs, lists, headings in one click." },
    "Bir martalik email — ro'yxatdan o'tish, kim ekanligingiz sir qoladi, spam yo'q.": { ru: "Одноразовый email — для регистраций, ваша личность скрыта, без спама.", en: "A disposable email — for sign-ups, your identity stays hidden, no spam." },
    "Pul qayoqqa ketdi? Kunlik xarajatni yozing — oylik diagramma va kategoriyalar bo'yicha.": { ru: "Куда ушли деньги? Записывайте расходы за день — месячная диаграмма по категориям.", en: "Where did the money go? Log daily spending — a monthly chart by category." },
    "Bugungi 10 ta ish — yodda turmaydi. Yozing, tartibga soling, ertangacha saqlanadi.": { ru: "10 дел на сегодня не удержать в голове. Запишите, упорядочьте — сохранится до завтра.", en: "Today's 10 tasks won't stay in your head. Write them, sort them — saved until tomorrow." },
    "25/5 metod bilan ishni 4x mahsuldor qiling — fokus, qisqa tanaffus, statistika.": { ru: "Метод 25/5 делает работу в 4× продуктивнее — фокус, короткие перерывы, статистика.", en: "The 25/5 method makes you 4× more productive — focus, short breaks, statistics." }
  });

  // === Navbar #1 — Kurslar sahifasi (RU/EN) ===
  Object.assign(DICT, {
    "Yangi kurs · O'zbek tilida": { ru: "Новый курс · на узбекском", en: "New course · in Uzbek" },
    "Kompyuter kursi — Noldan mustaqilgacha": { ru: "Компьютерный курс — с нуля до самостоятельности", en: "Computer course — from zero to independent" },
    "Kompyuterni hech qachon ishlatmagan bo'lsangiz ham — noldan boshlab mustaqil ishlay oladigan darajagacha yetib chiqasiz. Windows, Word, Excel, Internet, kanselyariya, tezyozish va boshqalar. 14 amaliy modul.": { ru: "Даже если вы никогда не пользовались компьютером — вы дойдёте от нуля до уровня самостоятельной работы. Windows, Word, Excel, интернет, делопроизводство, быстрый набор и другое. 14 практических модулей.", en: "Even if you've never used a computer — you'll go from zero to working independently. Windows, Word, Excel, internet, office paperwork, touch typing and more. 14 practical modules." },
    "Tezyozish": { ru: "Быстрый набор", en: "Touch typing" },
    "Kanselyariya": { ru: "Делопроизводство", en: "Office paperwork" },
    "Narxi": { ru: "Цена", en: "Price" },
    "590 000 so'm": { ru: "590 000 сум", en: "590,000 soum" },
    "14 modul · 1 marta to'lov": { ru: "14 модулей · разовая оплата", en: "14 modules · one-time payment" },
    "Kursga yozilish": { ru: "Записаться на курс", en: "Enroll in the course" },
    "Modul 1–3": { ru: "Модули 1–3", en: "Modules 1–3" },
    "Jadval + formula": { ru: "Таблицы + формулы", en: "Tables + formulas" },
    "Matn yaratish": { ru: "Создание текста", en: "Text creation" },
    "80+ WPM tezlikda": { ru: "Скорость 80+ WPM", en: "80+ WPM speed" },
    "Brauzer · qidiruv": { ru: "Браузер · поиск", en: "Browser · search" },
    "Hujjat boshqaruvi": { ru: "Управление документами", en: "Document management" },
    "Kursda nimani o'rganasiz": { ru: "Что вы изучите на курсе", en: "What you'll learn in the course" },
    "Kompyuter va Windows asoslari": { ru: "Основы компьютера и Windows", en: "Computer & Windows basics" },
    "Fayl va papkalar bilan ishlash": { ru: "Работа с файлами и папками", en: "Working with files and folders" },
    "Klaviatura va tezyozish": { ru: "Клавиатура и быстрый набор", en: "Keyboard and touch typing" },
    "Microsoft Word — matn yaratish": { ru: "Microsoft Word — создание текста", en: "Microsoft Word — creating text" },
    "Word — format va dizayn": { ru: "Word — формат и дизайн", en: "Word — formatting and design" },
    "Microsoft Excel — jadval va hisob": { ru: "Microsoft Excel — таблицы и расчёты", en: "Microsoft Excel — tables and calculations" },
    "Excel — formulalar va grafiklar": { ru: "Excel — формулы и графики", en: "Excel — formulas and charts" },
    "PowerPoint — taqdimot": { ru: "PowerPoint — презентация", en: "PowerPoint — presentations" },
    "PDF va hujjat boshqaruvi": { ru: "PDF и управление документами", en: "PDF and document management" },
    "Internet va brauzer": { ru: "Интернет и браузер", en: "Internet and browser" },
    "Email va aloqa": { ru: "Email и общение", en: "Email and communication" },
    "Onlayn xavfsizlik": { ru: "Онлайн-безопасность", en: "Online safety" },
    "Kanselyariya hujjatlari": { ru: "Делопроизводственные документы", en: "Office documents" },
    "Yakuniy amaliy loyiha": { ru: "Итоговый практический проект", en: "Final practical project" }
  });

  // === Bosh sahifa "Yana ko'proq" + badge'lar + chiplar + yetishmayotgan nomlar (RU/EN) ===
  Object.assign(DICT, {
    "Yana ko'proq": { ru: "Ещё", en: "More" },
    "Barchasini ko'rish": { ru: "Посмотреть все", en: "View all" },
    "Barchasi": { ru: "Все", en: "All" },
    "ta vosita": { ru: "сервисов", en: "tools" },
    // Badge yorliqlari (CSS bilan katta harf qilinadi)
    "Yangi": { ru: "Новое", en: "New" },
    "Mashhur": { ru: "Популярное", en: "Popular" },
    "Beta": { ru: "Бета", en: "Beta" },
    "AI": { ru: "ИИ", en: "AI" },
    // Yetishmayotgan tool/bo'lim nomlari
    "IQ Test": { ru: "IQ тест", en: "IQ Test" },
    "Yosh kalkulyator": { ru: "Калькулятор возраста", en: "Age Calculator" },
    "YouTube nik tekshirish": { ru: "Проверка YouTube-ника", en: "YouTube Handle Checker" },
    // "Yana ko'proq" HUB karta tavsiflari
    "20 savol, 30 daqiqa — IQ darajangiz, kognitiv yosh va yuklab olinadigan sertifikat.": { ru: "20 вопросов, 30 минут — ваш уровень IQ, когнитивный возраст и сертификат для скачивания.", en: "20 questions, 30 minutes — your IQ level, cognitive age and a downloadable certificate." },
    "Klaviatura darslari, tezlik testi va 6 ta typing o'yini — qarab turmay yozishni o'rganing.": { ru: "Уроки клавиатуры, тест скорости и 6 typing-игр — научитесь печатать вслепую.", en: "Keyboard lessons, a speed test and 6 typing games — learn to type without looking." },
    "Namoz, ro'za va ayollar uchun qazolarni aniq hisoblang — PDF jadval bilan.": { ru: "Точно рассчитайте каза по намазу, посту и для женщин — с таблицей в PDF.", en: "Accurately calculate missed prayers, fasts and for women — with a PDF table." },
    "Onlayn oq doska — chizish, eskiz va diagramma. Dars va jamoaviy fikrlash uchun.": { ru: "Онлайн-доска — рисование, эскизы и диаграммы. Для уроков и совместной работы.", en: "Online whiteboard — drawing, sketches and diagrams. For lessons and brainstorming." }
  });

  // === Bosh sahifa hero + typing so'zlar + BARCHA tool nomlari (RU/EN) ===
  Object.assign(DICT, {
    // Hero trust-chiplar
    "50+ vosita": { ru: "50+ сервисов", en: "50+ tools" },
    "Mutlaqo bepul": { ru: "Абсолютно бесплатно", en: "Completely free" },
    "Ro'yxatsiz": { ru: "Без регистрации", en: "No sign-up" },
    "Fayllar brauzerda": { ru: "Файлы в браузере", en: "Files in browser" },
    // Hero sarlavha qo'shimchasi + subtitle + tugma
    "ham": { ru: "тоже", en: "is also" },
    "shu yerda.": { ru: "здесь.", en: "here." },
    "Har safar yangi sayt qidirib yurmang — kunda kerak bo'ladigan vositalarni bitta joyga yig'dik.": { ru: "Не ищите каждый раз новый сайт — мы собрали нужные каждый день инструменты в одном месте.", en: "Stop hunting for a new site every time — we've gathered the tools you need daily in one place." },
    "Vosita qidirish": { ru: "Поиск сервиса", en: "Find a tool" },
    // Hero typing so'zlari
    "IQ test": { ru: "IQ тест", en: "IQ test" },
    "Kredit hisobi": { ru: "Расчёт кредита", en: "Loan calculator" },
    "QR kod": { ru: "QR-код", en: "QR code" },
    "Tezyoz mashqlari": { ru: "Тренажёр печати", en: "Typing trainer" },
    // BARCHA tool nomlari
    "Ekran yozish": { ru: "Запись экрана", en: "Screen Recorder" },
    "Hisob-faktura": { ru: "Счёт-фактура", en: "Invoice" },
    "Parol generatori": { ru: "Генератор паролей", en: "Password Generator" },
    "Kredit kalkulyator": { ru: "Кредитный калькулятор", en: "Loan Calculator" },
    "Lotin ↔ Kirill": { ru: "Латиница ↔ Кириллица", en: "Latin ↔ Cyrillic" },
    "Vaqtinchalik pochta": { ru: "Временная почта", en: "Temp Mail" },
    "PDF ajratish": { ru: "Разделить PDF", en: "Split PDF" },
    "PDF siqish": { ru: "Сжать PDF", en: "Compress PDF" },
    "OCR — matn tanish": { ru: "OCR — распознавание текста", en: "OCR — Text Recognition" },
    "Hujjat foto (3×4)": { ru: "Фото на документы (3×4)", en: "ID Photo (3×4)" },
    "Rasm konvertor": { ru: "Конвертер изображений", en: "Image Converter" },
    "Color Picker": { ru: "Палитра цветов", en: "Color Picker" },
    "Videodan MP3": { ru: "Видео в MP3", en: "Video to MP3" },
    "Thumbnail yuklab olish": { ru: "Скачать обложку", en: "Thumbnail Downloader" },
    "Thumbnail sinovi": { ru: "Тест обложки", en: "Thumbnail Tester" },
    "Ovoz effektlari": { ru: "Звуковые эффекты", en: "Voice Effects" },
    "Kaloriya hisoblagich": { ru: "Счётчик калорий", en: "Calorie Calculator" },
    "IMC (BMI) hisoblagich": { ru: "Калькулятор ИМТ (BMI)", en: "BMI Calculator" },
    "O'lcham konvertor": { ru: "Конвертер величин", en: "Unit Converter" },
    "Akt (bajarilgan ish)": { ru: "Акт (выполненных работ)", en: "Acceptance Act" },
    "Shartnoma shabloni": { ru: "Шаблон договора", en: "Contract Template" },
    "YaTT soliq": { ru: "Налог ИП", en: "Sole-Proprietor Tax" },
    "Marja kalkulyator": { ru: "Калькулятор маржи", en: "Margin Calculator" },
    "Word Counter": { ru: "Счётчик слов", en: "Word Counter" },
    "Pul boshqaruvi": { ru: "Управление деньгами", en: "Money Tracker" },
    "To-do ro'yxati": { ru: "Список задач", en: "To-do List" },
    "Pomodoro taymer": { ru: "Таймер Pomodoro", en: "Pomodoro Timer" }
  });

  // === Navbar #3 — Hujjatlar hub (hujjatlar.html) RU/EN ===
  Object.assign(DICT, {
    "Hujjatlar — PDF vositalari": { ru: "Документы — инструменты PDF", en: "Documents — PDF Tools" },
    "PDF fayllar bilan ishlang — birlashtiring, bo'ling, aylantiring. Sifat buzilmaydi, hammasi brauzeringizda bajariladi va fayllaringiz hech qayerga yuborilmaydi.": { ru: "Работайте с PDF — объединяйте, разделяйте, поворачивайте. Качество не теряется, всё выполняется в браузере, и ваши файлы никуда не отправляются.", en: "Work with PDF files — merge, split, rotate. No quality loss, everything runs in your browser, and your files never leave your device." },
    // Karta nomlari (hub'dagi maxsus nomlar)
    "Lotin ↔ Kiril": { ru: "Латиница ↔ Кириллица", en: "Latin ↔ Cyrillic" },
    "PDF bo'lish": { ru: "Разделить PDF", en: "Split PDF" },
    "Rasmlardan PDF": { ru: "Изображения в PDF", en: "Images to PDF" },
    "PDF'dan rasm": { ru: "PDF в изображения", en: "PDF to Images" },
    "PDF aylantirish": { ru: "Повернуть PDF", en: "Rotate PDF" },
    "PDF kichraytirish": { ru: "Сжать PDF", en: "Compress PDF" },
    "Rasmdan matn (OCR)": { ru: "Текст из изображения (OCR)", en: "Image to Text (OCR)" },
    "PDF suv belgisi": { ru: "Водяной знак на PDF", en: "PDF Watermark" },
    // Karta tavsiflari
    "O'zbekcha matnni lotindan kirilga va aksincha o'giring.": { ru: "Переводите узбекский текст с латиницы на кириллицу и обратно.", en: "Convert Uzbek text from Latin to Cyrillic and back." },
    "Bir nechta PDF faylni bitta hujjatga birlashtiring.": { ru: "Объедините несколько PDF-файлов в один документ.", en: "Merge several PDF files into one document." },
    "PDF'ni alohida sahifalarga yoki qismlarga ajrating.": { ru: "Разделите PDF на отдельные страницы или части.", en: "Split a PDF into separate pages or parts." },
    "JPG/PNG rasmlardan bitta PDF hujjat yarating.": { ru: "Создайте один PDF-документ из изображений JPG/PNG.", en: "Create one PDF document from JPG/PNG images." },
    "PDF sahifalarini JPG rasm sifatida yuklab oling.": { ru: "Скачайте страницы PDF в виде изображений JPG.", en: "Download PDF pages as JPG images." },
    "PDF sahifalarini 90°, 180° yoki 270° aylantiring.": { ru: "Поверните страницы PDF на 90°, 180° или 270°.", en: "Rotate PDF pages by 90°, 180° or 270°." },
    "PDF hajmini siqib, 50-80% gacha kamaytiring.": { ru: "Сожмите PDF, уменьшив размер на 50–80%.", en: "Compress the PDF size by 50–80%." },
    "Rasm yoki skanerdagi matnni o'qib oling. O'zbek, ingliz, rus.": { ru: "Распознайте текст с изображения или скана. Узбекский, английский, русский.", en: "Read text from an image or scan. Uzbek, English, Russian." },
    "Matn yoki logo watermark qo'ying — shaffoflik va burchak sozlanadi.": { ru: "Добавьте водяной знак — текст или логотип, с настройкой прозрачности и угла.", en: "Add a watermark — text or logo, with adjustable opacity and angle." },
    "So'z, belgi, jumla va paragraf sonini real vaqtda sanang.": { ru: "Считайте слова, символы, предложения и абзацы в реальном времени.", en: "Count words, characters, sentences and paragraphs in real time." },
    "Sayt va hujjatlar uchun namuna (to'ldiruvchi) matn yarating.": { ru: "Создавайте текст-заполнитель для сайтов и документов.", en: "Generate placeholder (filler) text for sites and documents." }
  });

  // === Hujjatlar PDF tool UI matnlari (sahifalararo umumiy) RU/EN ===
  Object.assign(DICT, {
    "Bir nechta PDF faylni tartib bilan bitta hujjatga birlashtiring. Sahifalar buzilmaydi — sifat asl holida qoladi.": { ru: "Объедините несколько PDF-файлов по порядку в один документ. Страницы не искажаются — качество остаётся исходным.", en: "Merge several PDF files in order into one document. Pages stay intact — quality remains original." },
    "PDF fayllarni tanlang": { ru: "Выберите PDF-файлы", en: "Select PDF files" },
    "PDF faylni tanlang": { ru: "Выберите PDF-файл", en: "Select a PDF file" },
    "yoki bu yerga torting": { ru: "или перетащите сюда", en: "or drag them here" },
    "Bir nechta fayl tanlash mumkin": { ru: "Можно выбрать несколько файлов", en: "You can select multiple files" },
    "Birlashtirish va yuklab olish": { ru: "Объединить и скачать", en: "Merge and download" },
    "Yana fayl qo'shish": { ru: "Добавить ещё файл", en: "Add more files" },
    "Faylni tanlang": { ru: "Выберите файл", en: "Select a file" },
    "Rasmlarni tanlang": { ru: "Выберите изображения", en: "Select images" }
  });

  // === Tool sahifalari tavsiflari + UI (background-removal, screen-recorder, password, qr-code) RU/EN ===
  Object.assign(DICT, {
    // Fon olib tashlash
    "Sun'iy intellekt fonni avtomatik olib tashlaydi, so'ng tahrirlash cho'tkasi bilan natijani aniqlashtirasiz — noto'g'ri kesilgan joyni qaytaring yoki ortiqcha qismni o'chiring. Rasm brauzeringizda qayta ishlanadi.": { ru: "Искусственный интеллект автоматически убирает фон, затем кистью редактирования вы уточняете результат — верните неверно срезанное или сотрите лишнее. Изображение обрабатывается в вашем браузере.", en: "AI removes the background automatically, then you refine the result with the edit brush — restore wrongly cut areas or erase extra parts. The image is processed in your browser." },
    "Rasm tanlang yoki shu yerga tashlang": { ru: "Выберите изображение или перетащите сюда", en: "Select an image or drop it here" },
    "Eng yaxshi natija — odam, mahsulot yoki aniq obyektli rasmlarda · JPG, PNG, WEBP": { ru: "Лучший результат — на фото с человеком, товаром или чётким объектом · JPG, PNG, WEBP", en: "Best results — on photos with a person, product or clear object · JPG, PNG, WEBP" },
    "Birinchi marta AI modeli (~bir necha MB) yuklab olinadi — biroz kutiladi. Keyingi safar tezroq ishlaydi.": { ru: "В первый раз загружается ИИ-модель (~несколько МБ) — немного подождите. В следующий раз будет быстрее.", en: "The AI model (~a few MB) downloads on first use — please wait a moment. Next time it's faster." },
    // Parol generatori
    "Hisoblaringiz uchun kuchli va tasodifiy parollar yarating. Parol faqat sizning qurilmangizda hosil bo'ladi va hech qayerga saqlanmaydi.": { ru: "Создавайте надёжные и случайные пароли для своих аккаунтов. Пароль создаётся только на вашем устройстве и нигде не сохраняется.", en: "Create strong, random passwords for your accounts. The password is generated only on your device and is never stored." },
    "Katta harflar": { ru: "Заглавные буквы", en: "Uppercase" },
    "Kichik harflar": { ru: "Строчные буквы", en: "Lowercase" },
    "Maxsus belgilar": { ru: "Спецсимволы", en: "Symbols" },
    "O'xshashlarsiz": { ru: "Без похожих", en: "No look-alikes" },
    "l, 1, O, 0 chiqarib tashlanadi": { ru: "Исключаются l, 1, O, 0", en: "Excludes l, 1, O, 0" },
    "Yangi parol yaratish": { ru: "Создать новый пароль", en: "Generate new password" },
    "Parol faqat brauzeringizda hosil bo'ladi — internetga jo'natilmaydi va saqlanmaydi.": { ru: "Пароль создаётся только в вашем браузере — не отправляется в интернет и не сохраняется.", en: "The password is generated only in your browser — never sent online or stored." },
    "Uzunlik": { ru: "Длина", en: "Length" },
    "belgi": { ru: "симв.", en: "chars" },
    // Ekran yozish
    "Ekran yoki kamerangizni yozib oling — video, tizim ovozi va mikrofon bilan. Pastdagi paneldan tanlang va yozishni boshlang.": { ru: "Запишите экран или камеру — с видео, системным звуком и микрофоном. Выберите на панели ниже и начните запись.", en: "Record your screen or camera — with video, system audio and microphone. Choose from the panel below and start recording." },
    "Ekranni yozishga tayyor": { ru: "Готово к записи экрана", en: "Ready to record screen" },
    "Kamera yozishga tayyor": { ru: "Готово к записи камеры", en: "Ready to record camera" },
    "Yozish": { ru: "Запись", en: "Record" },
    // QR kod
    "Ijtimoiy tarmoq profili, havola, Wi-Fi yoki telefondan brendlangan QR kod yarating — markazda logo, gradient rang. PNG yoki SVG qilib yuklab oling. Hammasi brauzeringizda.": { ru: "Создайте брендированный QR-код из профиля соцсети, ссылки, Wi-Fi или телефона — с логотипом по центру и градиентом. Скачайте в PNG или SVG. Всё в браузере.", en: "Create a branded QR code from a social profile, link, Wi-Fi or phone — with a centre logo and gradient. Download as PNG or SVG. All in your browser." },
    "Ma'lumot kiriting…": { ru: "Введите данные…", en: "Enter data…" }
  });

  // === Matn va mahsuldorlik sahifalari (pomodoro, todo, budget, tempmail) RU/EN ===
  Object.assign(DICT, {
    // Pomodoro
    "25 daqiqa diqqat bilan ishlang, so'ng qisqa tanaffus qiling. Har 4 sikldan keyin uzoq tanaffus. Diqqatni jamlash va charchamaslik uchun.": { ru: "Работайте 25 минут сосредоточенно, затем короткий перерыв. После каждых 4 циклов — длинный перерыв. Для концентрации и от усталости.", en: "Work for 25 focused minutes, then take a short break. A long break after every 4 cycles. For focus and to avoid burnout." },
    "Ish": { ru: "Работа", en: "Work" },
    "Qisqa tanaffus": { ru: "Короткий перерыв", en: "Short break" },
    "Uzoq tanaffus": { ru: "Длинный перерыв", en: "Long break" },
    "Ishlash vaqti": { ru: "Время работы", en: "Work time" },
    "Qayta": { ru: "Сброс", en: "Reset" },
    "Bugun tugatilgan:": { ru: "Сегодня завершено:", en: "Completed today:" },
    // To-do
    "Bajariladigan ishlaringizni ustuvorlik va muddat bilan yozing. Ro'yxat avtomatik saqlanadi — sahifani yopib qaytsangiz ham qoladi.": { ru: "Записывайте задачи с приоритетом и сроком. Список сохраняется автоматически — останется, даже если закрыть страницу.", en: "Write your tasks with priority and due date. The list saves automatically — it stays even if you close the page." },
    "Ro'yxatingiz faqat shu qurilmada, brauzeringizda saqlanadi — serverga yuborilmaydi.": { ru: "Ваш список хранится только на этом устройстве, в браузере — не отправляется на сервер.", en: "Your list is stored only on this device, in your browser — never sent to a server." },
    "Yangi vazifa": { ru: "Новая задача", en: "New task" },
    "masalan: Hisobotni yakunlash": { ru: "например: Завершить отчёт", en: "e.g. Finish the report" },
    "Ustuvorlik": { ru: "Приоритет", en: "Priority" },
    "Muddat (ixtiyoriy)": { ru: "Срок (необязательно)", en: "Due date (optional)" },
    "Sana tanlang": { ru: "Выберите дату", en: "Pick a date" },
    "Hammasi": { ru: "Все", en: "All" },
    "Faol": { ru: "Активные", en: "Active" },
    "Bajarilgan": { ru: "Выполненные", en: "Done" },
    "Bajarilganlarni tozalash": { ru: "Очистить выполненные", en: "Clear completed" },
    "Hozircha vazifa yo'q. Yuqorida birinchisini qo'shing!": { ru: "Пока нет задач. Добавьте первую выше!", en: "No tasks yet. Add your first one above!" },
    "Bu filtrda vazifa yo'q.": { ru: "В этом фильтре нет задач.", en: "No tasks in this filter." },
    "Yuqori": { ru: "Высокий", en: "High" },
    "O'rta": { ru: "Средний", en: "Medium" },
    "Past": { ru: "Низкий", en: "Low" },
    // Budjet
    "Kirim va xarajatlaringizni yozib boring — sayt kunlik, haftalik va oylik hisobotni chiqaradi va pulingiz qayerga ketayotganini ko'rsatadi.": { ru: "Записывайте доходы и расходы — сайт формирует дневной, недельный и месячный отчёт и показывает, куда уходят ваши деньги.", en: "Log your income and expenses — the site builds daily, weekly and monthly reports and shows where your money goes." },
    "Ma'lumotlaringiz faqat shu qurilmada, brauzeringizda saqlanadi — serverga yuborilmaydi.": { ru: "Ваши данные хранятся только на этом устройстве, в браузере — не отправляются на сервер.", en: "Your data is stored only on this device, in your browser — never sent to a server." },
    "Xarajat": { ru: "Расход", en: "Expense" },
    "Kirim": { ru: "Доход", en: "Income" },
    "Summa (so'm)": { ru: "Сумма (сум)", en: "Amount (UZS)" },
    "Kategoriya": { ru: "Категория", en: "Category" },
    "Oziq-ovqat": { ru: "Продукты", en: "Food" },
    "Izoh (ixtiyoriy)": { ru: "Заметка (необязательно)", en: "Note (optional)" },
    "masalan: Tushlik": { ru: "например: Обед", en: "e.g. Lunch" },
    "Bugun": { ru: "Сегодня", en: "Today" },
    "Hafta": { ru: "Неделя", en: "Week" },
    "Qoldiq": { ru: "Остаток", en: "Balance" },
    "Xarajatlar taqsimoti": { ru: "Распределение расходов", en: "Expense breakdown" },
    "Jami xarajat": { ru: "Всего расходов", en: "Total expense" },
    "Bu davrda xarajat yo'q.": { ru: "За этот период расходов нет.", en: "No expenses in this period." },
    // Tempmail
    "Bir martalik email manzili oling — spam, ro'yxatdan o'tish va tasdiqlash xatlari uchun. Shaxsiy pochtangizni bermang. Manzilga kelgan xatlar shu yerda ko'rinadi.": { ru: "Получите одноразовый email — для спама, регистраций и писем с подтверждением. Не давайте личную почту. Письма, пришедшие на адрес, появятся здесь.", en: "Get a disposable email address — for spam, sign-ups and confirmation emails. Don't share your personal inbox. Messages sent to it appear here." },
    "Sizning vaqtinchalik manzilingiz": { ru: "Ваш временный адрес", en: "Your temporary address" },
    "Yangi manzil": { ru: "Новый адрес", en: "New address" },
    "Kelgan xatlar": { ru: "Входящие", en: "Inbox" },
    "Avtomatik yangilanadi": { ru: "Обновляется автоматически", en: "Auto-refreshing" },
    "Hozircha xat yo'q.": { ru: "Пока писем нет.", en: "No emails yet." },
    "Yuqoridagi manzilni biror saytda ishlating — xatlar shu yerda paydo bo'ladi.": { ru: "Используйте адрес выше на каком-нибудь сайте — письма появятся здесь.", en: "Use the address above on a website — emails will appear here." }
  });

  // === BARCHA tool-head tavsiflari + h1 (sweep) RU/EN ===
  Object.assign(DICT, {
    // Hisoblagich/biznes h1 sarlavhalari
    "Akt — bajarilgan ish dalolatnomasi": { ru: "Акт — о выполненных работах", en: "Acceptance Act — completed work" },
    "Bank komissiyasi kalkulyatori": { ru: "Калькулятор банковской комиссии", en: "Bank Fee Calculator" },
    "Avans hisoblash kalkulyatori": { ru: "Калькулятор аванса", en: "Advance Pay Calculator" },
    "Aylanmadan soliq (4%)": { ru: "Налог с оборота (4%)", en: "Turnover Tax (4%)" },
    "Kasallik varaqasi (Bolnichniy) kalkulyatori": { ru: "Калькулятор больничного", en: "Sick Leave Calculator" },
    "Break-even point — zararsizlik nuqtasi": { ru: "Точка безубыточности", en: "Break-even Point" },
    "Cash flow bashorat": { ru: "Прогноз денежного потока", en: "Cash Flow Forecast" },
    "Akkreditiv kalkulyatori": { ru: "Калькулятор аккредитива", en: "Letter of Credit Calculator" },
    "Color Picker — Ranglar tanlash": { ru: "Color Picker — выбор цвета", en: "Color Picker" },
    "Aksiz solig'i kalkulyatori": { ru: "Калькулятор акцизного налога", en: "Excise Tax Calculator" },
    "Chegirma (Skidka) kalkulyatori": { ru: "Калькулятор скидки", en: "Discount Calculator" },
    "Buyruq (Prikaz) shablonlari": { ru: "Шаблоны приказов", en: "Order (Decree) Templates" },
    "Daromad-xarajat balansi (P&L)": { ru: "Баланс доходов и расходов (P&L)", en: "Income–Expense (P&L)" },
    "Foiz kalkulyator": { ru: "Калькулятор процентов", en: "Percentage Calculator" },
    "Homiladorlik kalkulyatori": { ru: "Калькулятор беременности", en: "Pregnancy Calculator" },
    "Hisob-faktura generatori": { ru: "Генератор счёта-фактуры", en: "Invoice Generator" },
    "Hujjat foto (ID Photo Maker)": { ru: "Фото на документы (ID Photo Maker)", en: "ID Photo Maker" },
    "IMC — Tana massasi indeksi": { ru: "ИМТ — индекс массы тела", en: "BMI — Body Mass Index" },
    "Inkassatsiya kalkulyatori": { ru: "Калькулятор инкассации", en: "Cash Collection Calculator" },
    "INPS (Pensiya jamg'armasi) kalkulyatori": { ru: "Калькулятор ИНПС (пенсионный фонд)", en: "INPS (Pension Fund) Calculator" },
    "Ishdan bo'shatish kompensatsiyasi": { ru: "Компенсация при увольнении", en: "Severance Pay" },
    "Ishonchnoma (Doverennost) generator": { ru: "Генератор доверенности", en: "Power of Attorney Generator" },
    "Kaloriya hisoblagich": { ru: "Счётчик калорий", en: "Calorie Calculator" },
    "Rasmlardan PDF": { ru: "Изображения в PDF", en: "Images to PDF" },
    "Korxona maoshi — toplu hisoblash": { ru: "Зарплата по предприятию — массовый расчёт", en: "Company Payroll — Bulk Calc" },
    "Lorem Ipsum Generator": { ru: "Генератор Lorem Ipsum", en: "Lorem Ipsum Generator" },
    "Lizing kalkulyatori": { ru: "Калькулятор лизинга", en: "Leasing Calculator" },
    "Marja va tannarx kalkulyatori": { ru: "Калькулятор маржи и себестоимости", en: "Margin & Cost Calculator" },
    "Lotin ↔ Kiril o'giruvchi": { ru: "Конвертер латиница ↔ кириллица", en: "Latin ↔ Cyrillic Converter" },
    "Maosh kalkulyator": { ru: "Калькулятор зарплаты", en: "Salary Calculator" },
    "O'lcham konvertor": { ru: "Конвертер величин", en: "Unit Converter" },
    "Mark-up (Ustama) kalkulyatori": { ru: "Калькулятор наценки", en: "Mark-up Calculator" },
    "YouTube Thumbnail yuklab olish": { ru: "Скачать обложку YouTube", en: "YouTube Thumbnail Downloader" },
    // Tavsiflar
    "Tomonlar rekvizitlari, bajarilgan ish/xizmat ro'yxati va summasini kiriting — to'liq PDF akt tayyor bo'ladi.": { ru: "Введите реквизиты сторон, список выполненных работ/услуг и сумму — готовый PDF-акт.", en: "Enter the parties' details, the list of completed work/services and the amount — a ready PDF act." },
    "O'zbekiston foydalanuvchilari uchun yaratilgan bepul onlayn vositalar to'plami.": { ru: "Набор бесплатных онлайн-инструментов для пользователей Узбекистана.", en: "A collection of free online tools made for users in Uzbekistan." },
    "Pul o'tkazma yoki to'lov uchun bank komissiyasini hisoblang. Foiz stavkasi, minimum va maksimum chegaralarni kiriting.": { ru: "Рассчитайте банковскую комиссию за перевод или платёж. Укажите ставку, минимум и максимум.", en: "Calculate the bank fee for a transfer or payment. Set the rate, minimum and maximum." },
    "Oylik avans miqdorini hisoblang — soliqlar oxirgi ulushda ushlanadi, avansga ushlanmaydi (an'anaviy).": { ru: "Рассчитайте сумму аванса — налоги удерживаются с финальной части, не с аванса (традиционно).", en: "Calculate the monthly advance — taxes are withheld from the final part, not the advance (traditional)." },
    "Kichik korxonalar uchun aylanmadan soliq — yillik aylanma 1 mlrd so'mgacha bo'lganda 4% stavka.": { ru: "Налог с оборота для малых предприятий — ставка 4% при годовом обороте до 1 млрд сум.", en: "Turnover tax for small businesses — a 4% rate when annual turnover is under 1 billion soum." },
    "Sug'urta staji asosida kasallik varaqasi to'lovini hisoblang. Faqat ish kunlari hisobga olinadi.": { ru: "Рассчитайте выплату по больничному на основе страхового стажа. Учитываются только рабочие дни.", en: "Calculate sick-leave pay based on insurance record. Only working days count." },
    "Zarar bo'lmaslik uchun necha dona mahsulot sotish va qancha aylanma qilish kerakligini aniqlang.": { ru: "Определите, сколько единиц товара продать и какой оборот нужен, чтобы не уйти в убыток.", en: "Find out how many units to sell and what turnover you need to avoid a loss." },
    "Audio yoki video faylni yuklang, effektni bosing — o'sha zahoti eshitasiz. Har bir effektning o'z sozlamalari bor; sozlagichni surganda ovoz darhol moslashadi. Yoqqanini MP3/WAV yuklab oling.": { ru: "Загрузите аудио или видео, нажмите эффект — услышите сразу. У каждого эффекта свои настройки; при движении ползунка звук меняется мгновенно. Понравившееся скачайте в MP3/WAV.", en: "Upload audio or video, tap an effect — hear it instantly. Each effect has its own settings; the sound adjusts as you drag the slider. Download what you like as MP3/WAV." },
    "Oylik kirim va chiqimlarning kelajakdagi qoldiq pulga ta'sirini avtomatik hisoblang. Past balansga ogohlantirish.": { ru: "Автоматически рассчитайте влияние ежемесячных доходов и расходов на будущий остаток. Предупреждение о низком балансе.", en: "Automatically project how monthly income and expenses affect your future balance. Low-balance warning." },
    "Bank akkreditivi (Letter of Credit) xizmati narxini hisoblang. Bu shartnoma bo'yicha to'lovni kafolatlash uchun bank tomonidan beriladigan xizmat.": { ru: "Рассчитайте стоимость банковского аккредитива (Letter of Credit) — услуги банка для гарантии оплаты по договору.", en: "Calculate the cost of a bank Letter of Credit — a bank service that guarantees contract payment." },
    "HEX, RGB, HSL kodlari. Tayyor palitra (Tailwind, Material). Rasmdan rang olish. Garmonik ranglar va WCAG kontrast tekshirgich.": { ru: "Коды HEX, RGB, HSL. Готовые палитры (Tailwind, Material). Пипетка с изображения. Гармоничные цвета и проверка контраста WCAG.", en: "HEX, RGB, HSL codes. Ready palettes (Tailwind, Material). Pick colour from an image. Harmonies and a WCAG contrast checker." },
    "Aksizlanadigan tovarlar (alkogol, tamaki, neft mahsulotlari, avtomobil) uchun aksiz solig'ini hisoblang.": { ru: "Рассчитайте акцизный налог на подакцизные товары (алкоголь, табак, нефтепродукты, авто).", en: "Calculate excise tax on excisable goods (alcohol, tobacco, oil products, cars)." },
    "Chegirma foizidan yakuniy narxni hisoblang. Yoki ikki narx orasidagi chegirma foizini aniqlang.": { ru: "Рассчитайте итоговую цену по проценту скидки. Или найдите процент скидки между двумя ценами.", en: "Get the final price from a discount percentage. Or find the discount percentage between two prices." },
    "Taklif, savol, xato haqida xabar yoki hamkorlik takliflari uchun quyidagi yo'llar orqali bog'laning. Biz har bir murojaatga e'tibor beramiz.": { ru: "Свяжитесь любым из способов ниже — предложение, вопрос, сообщение об ошибке или сотрудничество. Мы внимательны к каждому обращению.", en: "Reach us via the options below — a suggestion, question, bug report or partnership. We pay attention to every message." },
    "Korxona ichki buyruqlari: ishga qabul, ishdan bo'shatish, ta'til, avans, mukofot — formani to'ldiring, tayyor PDF oling.": { ru: "Внутренние приказы компании: приём, увольнение, отпуск, аванс, премия — заполните форму и получите готовый PDF.", en: "Internal company orders: hiring, dismissal, leave, advance, bonus — fill the form and get a ready PDF." },
    "Oddiy Profit & Loss hisoboti — daromadlaringiz va xarajatlaringizni qatorlar bo'yicha kiriting, sof foyda yoki zarar avtomatik hisoblanadi.": { ru: "Простой отчёт Profit & Loss — введите доходы и расходы построчно, чистая прибыль или убыток считается автоматически.", en: "A simple Profit & Loss report — enter income and expenses line by line, net profit or loss is computed automatically." },
    "Kundalik hisob-kitoblaringiz uchun zamonaviy onlayn kalkulyatorlar. Valyuta, yosh, kredit, IMC, maosh va boshqalar — barchasi bepul, ro'yxatdan o'tmasdan, brauzeringizda ishlaydi.": { ru: "Современные онлайн-калькуляторы для повседневных расчётов. Валюта, возраст, кредит, ИМТ, зарплата и другое — бесплатно, без регистрации, в браузере.", en: "Modern online calculators for everyday math. Currency, age, loan, BMI, salary and more — free, no sign-up, in your browser." },
    "Oddiy va kompound foiz, ulush hisoblash, foiz farqi va boshqalar — bir joyda.": { ru: "Простой и сложный процент, расчёт доли, разница процентов и другое — в одном месте.", en: "Simple and compound interest, share calculation, percentage difference and more — all in one place." },
    "Oxirgi hayz sanasini kiriting — kutilayotgan tug'ilish sanasi, hozirgi homilador hafta va trimestr avtomatik hisoblanadi.": { ru: "Введите дату последней менструации — ожидаемая дата родов, текущая неделя и триместр считаются автоматически.", en: "Enter the last period date — the due date, current week and trimester are calculated automatically." },
    "Sotuvchi va sotib oluvchi rekvizitlari, tovar/xizmat ro'yxati va NDS'ni kiriting — PDF schyot-faktura yarating. Ma'lumotlar brauzeringizda saqlanadi, hech qayerga yuborilmaydi.": { ru: "Введите реквизиты продавца и покупателя, список товаров/услуг и НДС — создайте PDF счёт-фактуру. Данные хранятся в браузере и никуда не отправляются.", en: "Enter seller and buyer details, the item/service list and VAT — create a PDF invoice. Data stays in your browser and is never sent anywhere." },
    "Hujjatlar uchun rasm tayyorlang: AI fonni olib tashlaydi, siz oq/ko'k/qizil fon va standart o'lcham (3×4, 3.5×4.5 va h.k.) tanlaysiz. Rasm brauzeringizda qayta ishlanadi.": { ru: "Подготовьте фото на документы: ИИ убирает фон, вы выбираете белый/синий/красный фон и стандартный размер (3×4, 3.5×4.5 и т.д.). Изображение обрабатывается в браузере.", en: "Prepare a document photo: AI removes the background, you choose a white/blue/red background and a standard size (3×4, 3.5×4.5, etc.). The image is processed in your browser." },
    "Bo'y va vazningizni kiriting — Tana Massasi Indeksi (BMI) avtomatik hisoblanadi. Salomatlik darajangiz va ideal vazn diapazonini bilib oling.": { ru: "Введите рост и вес — индекс массы тела (BMI) считается автоматически. Узнайте уровень здоровья и идеальный диапазон веса.", en: "Enter your height and weight — Body Mass Index (BMI) is calculated automatically. Learn your health level and ideal weight range." },
    "Naqd pul inkassatsiyasi (tashish) xizmati narxini hisoblang. Stavka, minimum va sayohatlar soni asosida.": { ru: "Рассчитайте стоимость инкассации наличных. На основе ставки, минимума и числа выездов.", en: "Calculate the cost of cash collection. Based on rate, minimum and number of trips." },
    "Xodim maoshidan INPS ulushi va ish beruvchining ijtimoiy soliq qismi — pensiya jamg'armasiga to'lovlar.": { ru: "Доля ИНПС из зарплаты сотрудника и социальный налог работодателя — выплаты в пенсионный фонд.", en: "The employee's INPS share and the employer's social tax — payments to the pension fund." },
    "Ishdan bo'shatishda xodimga berilishi kerak bo'lgan to'lovlarni hisoblang: ishlangan kun maoshi, foydalanilmagan ta'til, bo'shatish nafaqasi.": { ru: "Рассчитайте выплаты сотруднику при увольнении: зарплата за отработанные дни, неиспользованный отпуск, выходное пособие.", en: "Calculate the payments due to an employee on dismissal: pay for days worked, unused leave, severance." },
    "Shaxsiy yoki yuridik shaxs nomidan ishonchnoma yarating. Vakolat tafsilotlari, muddati va imzo bloki bilan rasmiy PDF.": { ru: "Создайте доверенность от физического или юридического лица. Официальный PDF с деталями полномочий, сроком и блоком подписи.", en: "Create a power of attorney from an individual or a legal entity. An official PDF with authority details, term and a signature block." },
    "Mifflin-St Jeor formulasi bo'yicha kunlik kaloriya ehtiyoji va vazn maqsadingizga mos kaloriya miqdorini hisoblang.": { ru: "Рассчитайте суточную потребность в калориях по формуле Миффлина-Сан-Жеора и норму под вашу цель по весу.", en: "Calculate your daily calorie needs by the Mifflin-St Jeor formula and the amount that fits your weight goal." },
    "JPG yoki PNG rasmlardan bitta PDF hujjat yarating. Har bir rasm alohida sahifa bo'ladi.": { ru: "Создайте один PDF-документ из изображений JPG или PNG. Каждое изображение — отдельная страница.", en: "Create one PDF document from JPG or PNG images. Each image becomes a separate page." },
    "Kredit miqdori, foiz stavkasi va muddatini kiriting — oylik to'lov, jami foiz va to'lov jadvali avtomatik hisoblanadi.": { ru: "Введите сумму кредита, ставку и срок — ежемесячный платёж, общий процент и график считаются автоматически.", en: "Enter the loan amount, rate and term — the monthly payment, total interest and schedule are calculated automatically." },
    "Bir necha xodim uchun maoshni bir vaqtda hisoblang. NDFL 12% va INPS 0.1% avtomatik chegiriladi. CSV (Excel uchun) va PDF eksport.": { ru: "Рассчитайте зарплату нескольким сотрудникам сразу. НДФЛ 12% и ИНПС 0,1% удерживаются автоматически. Экспорт в CSV (для Excel) и PDF.", en: "Calculate payroll for several employees at once. 12% income tax and 0.1% INPS are deducted automatically. CSV (for Excel) and PDF export." },
    "Dizayn va prototip uchun to'ldiruvchi matn. Klassik lotin, O'zbek, Hipster va boshqa versiyalar.": { ru: "Текст-заполнитель для дизайна и прототипов. Классическая латынь, узбекский, Hipster и другие версии.", en: "Placeholder text for design and prototypes. Classic Latin, Uzbek, Hipster and other versions." },
    "Texnika, transport, asbob-uskuna lizingi uchun boshlang'ich to'lov, oylik to'lov va jami summani hisoblang.": { ru: "Рассчитайте первоначальный взнос, ежемесячный платёж и общую сумму лизинга техники, транспорта, оборудования.", en: "Calculate the down payment, monthly payment and total for leasing machinery, vehicles or equipment." },
    "Tannarx tarkibini hisoblang (xom-ashyo, ish haqi, transport, boshqalar) yoki sotuv narxidan marja foizini va foyda summasini aniqlang. Optimal narx uchun tavsiya.": { ru: "Рассчитайте структуру себестоимости (сырьё, зарплата, транспорт и др.) или определите процент маржи и сумму прибыли от цены продажи. Рекомендация оптимальной цены.", en: "Break down the cost (materials, wages, transport, etc.) or find the margin percentage and profit from the selling price. Optimal-price suggestion." },
    "O'zbekcha matnni lotindan kirilga yoki kirildan lotinga o'giring. o', g', h, x va tutuq belgisi (') to'g'ri hisobga olinadi. Hammasi brauzeringizda.": { ru: "Переводите узбекский текст с латиницы на кириллицу и обратно. o', g', h, x и апостроф (') учитываются правильно. Всё в браузере.", en: "Convert Uzbek text from Latin to Cyrillic and back. o', g', h, x and the apostrophe (') are handled correctly. All in your browser." },
    "O'zbekiston soliq qoidalari bo'yicha sof (qo'lga oladigan) va yalpi (oyligi yozilgan) maoshlarni avtomatik hisoblang.": { ru: "Автоматически рассчитайте чистую (на руки) и брутто (начисленную) зарплату по налоговым правилам Узбекистана.", en: "Automatically calculate net (take-home) and gross (stated) salary by Uzbekistan's tax rules." },
    "Uzunlik, vazn, hajm, temperatura, tezlik, maydon va vaqt birliklarini bir-biriga aylantiring. Hammasi bepul, brauzeringizda.": { ru: "Переводите единицы длины, веса, объёма, температуры, скорости, площади и времени. Бесплатно, в браузере.", en: "Convert units of length, weight, volume, temperature, speed, area and time. Free, in your browser." },
    "Tannarxga ma'lum foiz ustama qo'shib sotuv narxini aniqlang. Mark-up bilan marja foizining farqi.": { ru: "Определите цену продажи, добавив наценку к себестоимости. Разница между наценкой и маржой.", en: "Find the selling price by adding a mark-up to cost. The difference between mark-up and margin." }
  });

  // === Mashina-tarjima (MT) fallback keshi — lug'atda yo'q matnlar uchun ===
  const MT_BASE = "https://youtube-nik.eldor7147.workers.dev";
  const MT = { ru: {}, en: {} };
  try { MT.ru = JSON.parse(localStorage.getItem("oson_mt_ru") || "{}") || {}; } catch (e) {}
  try { MT.en = JSON.parse(localStorage.getItem("oson_mt_en") || "{}") || {}; } catch (e) {}

  function tr(text, lang) {
    if (!text) return text;
    const lng = lang || getLang();
    if (lng === "uz") return text;
    if (lng === "uz-cyr") return lat2cyr(text);
    const key = text.replace(/\s+/g, " ").trim();
    const lead = text.match(/^\s*/)[0], trail = text.match(/\s*$/)[0];
    const e = DICT[key];
    if (e && e[lng]) return lead + e[lng] + trail;
    if (MT[lng] && MT[lng][key]) return lead + MT[lng][key] + trail;  // mashina-tarjima
    return text;
  }

  function getLang() {
    // Til sahifa bilan aniqlanadi (window.OSON_LANG — /ru/ /en/ HTML'da o'rnatiladi)
    const l = window.OSON_LANG;
    return (l === "uz" || l === "uz-cyr" || l === "ru" || l === "en") ? l : "uz";
  }
  function setLangStorage(l) {
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
  }

  // DOM ichidagi originallarni saqlash uchun
  const ORIG_TEXT = new WeakMap();   // textNode → original string
  const ORIG_ATTR = new WeakMap();   // element → { attr: original }
  const ORIG_HTML = new WeakMap();   // blokli element → original innerHTML
  let isApplying = false;            // applyLang ishlayotganda observer'ni jim qildirish uchun (qayta-tarjima siklini oldini olish)

  const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA"]);
  // Block-level elementlar — ichidagi inline elementlar bilan birga butun matni tarjima qilinadi
  const BLOCK_SEL = "p, li, h1, h2, h3, h4, h5, h6, td, th, summary, figcaption, dt, dd, blockquote";
  // Inline elementlar — block ichida bo'lsa, matn birlashtiriladi
  const INLINE_TAGS = new Set(["STRONG", "EM", "B", "I", "U", "CODE", "SPAN", "A", "SMALL", "MARK", "SUB", "SUP", "BR", "Q", "ABBR"]);

  function shouldSkipNode(el) {
    if (!el) return true;
    if (SKIP_TAGS.has(el.nodeName)) return true;
    if (el.closest && el.closest("[data-no-i18n]")) return true;
    return false;
  }

  // Block element faqat inline elementlar va matn tugunlaridan iboratmi?
  function hasOnlyInlineChildren(el) {
    for (let i = 0; i < el.childNodes.length; i++) {
      const c = el.childNodes[i];
      if (c.nodeType === 3) continue; // text node
      if (c.nodeType === 1 && INLINE_TAGS.has(c.nodeName)) continue;
      return false;
    }
    return true;
  }

  function applyLang(lang) {
    isApplying = true;
    const html = document.documentElement;
    html.lang = LANG_HTML[lang] || "uz";
    html.dataset.lang = lang;

    // 0. Avval saqlangan elementlarning originalini qaytarish
    document.querySelectorAll("[data-i18n-handled]").forEach(el => {
      if (ORIG_HTML.has(el)) el.innerHTML = ORIG_HTML.get(el);
      el.removeAttribute("data-i18n-handled");
    });

    // 1. Smart block tarjima — faqat RU/EN uchun (uz-cyr transliterator individual text node'ga ishlaydi)
    if (lang === "ru" || lang === "en") {
      document.body.querySelectorAll(BLOCK_SEL).forEach(el => {
        if (shouldSkipNode(el)) return;
        // Faqat inline elementlar bilan bezalgan block'lar
        if (el.children.length === 0) return; // hech qanday child element yo'q — oddiy walker yetarli
        if (!hasOnlyInlineChildren(el)) return;
        if (el.querySelector("a")) return; // ichida havola (<a>) bor — textContent almashtirsak havola o'ladi; text-walker'ga qoldiramiz
        const combined = el.textContent.replace(/\s+/g, " ").trim();
        if (!combined) return;
        const translated = tr(combined, lang);
        if (translated && translated !== combined) {
          if (!ORIG_HTML.has(el)) ORIG_HTML.set(el, el.innerHTML);
          el.textContent = translated;
          el.setAttribute("data-i18n-handled", "");
        }
      });
    }

    // 2. Text tugunlari (smart block bilan ushlanmaganlarini)
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentNode;
        if (!p || shouldSkipNode(p)) return NodeFilter.FILTER_REJECT;
        // Smart block tarjima qilingan ichini o'tkazib yuborish
        if (p.closest && p.closest("[data-i18n-handled]")) return NodeFilter.FILTER_REJECT;
        const v = n.nodeValue;
        if (!v || !v.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = walker.nextNode())) {
      if (!ORIG_TEXT.has(n)) ORIG_TEXT.set(n, n.nodeValue);
      const orig = ORIG_TEXT.get(n);
      n.nodeValue = tr(orig, lang);
    }

    // Attributelar: placeholder, title, aria-label, value (button/submit)
    const ATTRS = ["placeholder", "title", "aria-label", "alt"];
    document.querySelectorAll("[placeholder],[title],[aria-label],[alt]").forEach(el => {
      if (shouldSkipNode(el)) return;
      if (!ORIG_ATTR.has(el)) {
        const o = {};
        ATTRS.forEach(a => { if (el.hasAttribute(a)) o[a] = el.getAttribute(a); });
        ORIG_ATTR.set(el, o);
      }
      const o = ORIG_ATTR.get(el);
      Object.keys(o).forEach(a => {
        el.setAttribute(a, tr(o[a], lang));
      });
    });

    // Submit/button value
    document.querySelectorAll('input[type="submit"], input[type="button"]').forEach(el => {
      if (!ORIG_ATTR.has(el)) ORIG_ATTR.set(el, { value: el.value });
      el.value = tr(ORIG_ATTR.get(el).value, lang);
    });

    // Lang tugmalardagi belgi yangilash
    document.querySelectorAll(".lang-btn .lang-cur").forEach(s => {
      s.textContent = LANG_LABELS[lang];
    });
    document.querySelectorAll(".lang-menu .lang-opt").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    isApplying = false;
  }

  // Lug'atda yo'q matnlarni Worker (Workers AI) orqali tarjima qilib keshlaydi va qayta qo'llaydi
  let mtBusy = false;
  function mtFill(lang) {
    if ((lang !== "ru" && lang !== "en") || mtBusy || !window.fetch) return;
    const need = new Set();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) { const p = n.parentNode; return (!p || shouldSkipNode(p)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    let n;
    while ((n = walker.nextNode())) {
      const orig = (ORIG_TEXT.has(n) ? ORIG_TEXT.get(n) : (n.nodeValue || "")).replace(/\s+/g, " ").trim();
      if (orig.length < 3 || orig.length > 1500) continue;
      if (!/[a-zA-Z]/.test(orig)) continue;            // harf bo'lsin (raqam/belgi emas)
      if (DICT[orig] && DICT[orig][lang]) continue;     // lug'atda bor
      if (MT[lang][orig]) continue;                     // keshda bor
      need.add(orig);
    }
    // Inline elementli (<b>, <span>) bloklarning birlashtirilgan matnini ham yig'amiz
    // (applyLang smart-block ularni "combined" kalit bilan tarjima qiladi)
    if (lang === "ru" || lang === "en") {
      document.body.querySelectorAll(BLOCK_SEL).forEach(el => {
        if (shouldSkipNode(el) || el.children.length === 0) return;
        if (!hasOnlyInlineChildren(el) || el.querySelector("a")) return;
        const c = el.textContent.replace(/\s+/g, " ").trim();
        if (c.length < 3 || c.length > 1500 || !/[a-zA-Z]/.test(c)) return;
        if (DICT[c] && DICT[c][lang]) return;
        if (MT[lang][c]) return;
        need.add(c);
      });
    }
    if (!need.size) return;
    mtBusy = true;
    const texts = [...need].slice(0, 60);
    fetch(MT_BASE + "/translate", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to: lang, texts })
    }).then(r => r.json()).then(data => {
      mtBusy = false;
      if (data && data.map && Object.keys(data.map).length) {
        Object.assign(MT[lang], data.map);
        // Keshni cheklash — localStorage ~5MB limitiga yetib qolmaslik uchun (LRU-soddalashtirilgan)
        const ks = Object.keys(MT[lang]);
        if (ks.length > 2000) {
          const trimmed = {};
          ks.slice(ks.length - 1500).forEach(k => { trimmed[k] = MT[lang][k]; });
          MT[lang] = trimmed;
        }
        try {
          localStorage.setItem("oson_mt_" + lang, JSON.stringify(MT[lang]));
        } catch (e) {
          // Quota to'ldi — keshni tozalab, faqat shu partiyani saqlaymiz
          try { MT[lang] = Object.assign({}, data.map); localStorage.setItem("oson_mt_" + lang, JSON.stringify(MT[lang])); } catch (e2) {}
        }
        applyLang(lang);
        if (need.size > texts.length) setTimeout(() => mtFill(lang), 500);  // qolgan partiyalar
      }
    }).catch(() => { mtBusy = false; });
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    setLangStorage(lang);
    applyLang(lang);
    mtFill(lang);
  }

  // Eksport — boshqa fayllar dinamik kontent yangilangach `refresh()` chaqirishi mumkin
  window.OsonI18n = {
    getLang, setLang, lat2cyr, tr,
    refresh: () => applyLang(getLang()),
    LANGS, LANG_LABELS, LANG_NAMES
  };


  // --- Theme (light/dark) ---
  const THEME_KEY = "oson_theme";
  const sunIcon = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  const moonIcon = '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>';
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    document.querySelectorAll(".theme-btn").forEach(b => {
      b.innerHTML = svg(t === "dark" ? sunIcon : moonIcon);
      b.setAttribute("aria-label", t === "dark" ? "Yorug' rejim" : "Qorong'i rejim");
    });
  }
  const savedTheme = localStorage.getItem(THEME_KEY)
    || ((window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light");
  document.documentElement.dataset.theme = savedTheme;
  function toggleTheme() {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, t);
    applyTheme(t);
  }

  // --- Google Analytics (gtag.js) ---
  (function ga() {
    const GA_ID = "G-P5ZXVKZDQZ";
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
  })();

  // --- Google AdSense (verification + loader) ---
  (function adsense() {
    const ADSENSE_CLIENT = "ca-pub-7312326305522193";
    // Meta tag (egalik tasdig'i) — BARCHA sahifada (til-neytral; Google qayerda kraul qilsa ham topadi).
    const meta = document.createElement("meta");
    meta.name = "google-adsense-account";
    meta.content = ADSENSE_CLIENT;
    document.head.appendChild(meta);
    // ⚠️ Reklama LOADER faqat qo'llab-quvvatlanadigan tillarda (ru/en).
    // O'zbek (uz) sahifada reklama kodi YUKLANMAYDI — AdSense til-siyosati (o'zbek qo'llab-quvvatlanmaydi).
    if (CUR_LANG !== "ru" && CUR_LANG !== "en") return;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT;
    s.crossOrigin = "anonymous";
    document.head.appendChild(s);
    // ⚠️ REVIEW-REJIM: tasdiqlanmaguncha reklama chiqmasin. AdSense TASDIQLAGACH quyidagi 2 ta
    // pauseAdRequests qatorini O'CHIRING — shunda reklama faqat ru/en sahifalarda chiqadi.
    s.addEventListener("load", function () {
      try { (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1; } catch (e) {}
    });
    try { (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1; } catch (e) {}
  })();

  // --- SEO / head meta ---
  (function seo() {
    const SITE = "https://osonstudio.uz";
    const url = SITE + "/" + (page === "index.html" ? "" : page.replace(/\.html$/, ""));
    const descEl = document.querySelector('meta[name="description"]');
    const desc = descEl ? descEl.content : "Oson Studio — bepul onlayn vositalar.";
    const head = document.head;
    const add = (tag, attrs) => { const el = document.createElement(tag); for (const k in attrs) el.setAttribute(k, attrs[k]); head.appendChild(el); return el; };
    const addLd = obj => { const s = add("script", { type: "application/ld+json" }); s.textContent = JSON.stringify(obj); };
    const isArticle = page.startsWith("maqola-");
    const isCourse = page.startsWith("kurs-");
    const h1El = document.querySelector("h1");
    const headline = h1El ? h1El.textContent.trim() : document.title;
    const coverEl = document.querySelector(".course-cover");
    const ogImage = coverEl ? SITE + "/" + coverEl.getAttribute("src") : SITE + "/og-image.svg";
    const ogType = isArticle ? "article" : "website";
    // Statik canonical/hreflang mavjud bo'lsa (ko'p tilli sahifalar: /, /ru/, /en/),
    // app.js o'zinikini qo'shmaydi — aks holda canonical/hreflang konflikti SEO'ni buzadi.
    const existingCanon = document.querySelector('link[rel="canonical"]');
    let pageUrl = existingCanon ? existingCanon.href : url;
    if (!existingCanon) {
      if (CUR_LANG === "uz" && TRANSLATED_PAGES.has(page)) {
        // Ko'p tilli sahifaning uz versiyasi — to'liq reciprocal hreflang (.html, statik ru/en fayllarga mos)
        const uzU = SITE + "/" + page;
        pageUrl = uzU;
        add("link", { rel: "canonical", href: uzU });
        add("link", { rel: "alternate", hreflang: "uz", href: uzU });
        add("link", { rel: "alternate", hreflang: "ru", href: SITE + "/ru/" + page });
        add("link", { rel: "alternate", hreflang: "en", href: SITE + "/en/" + page });
        add("link", { rel: "alternate", hreflang: "x-default", href: uzU });
      } else {
        add("link", { rel: "canonical", href: url });
        add("link", { rel: "alternate", hreflang: "uz", href: url });
        add("link", { rel: "alternate", hreflang: "x-default", href: url });
      }
    }
    const OG_LOCALE = CUR_LANG === "ru" ? "ru_RU" : CUR_LANG === "en" ? "en_US" : "uz_UZ";
    const LANG_NAME = CUR_LANG === "ru" ? "Russian" : CUR_LANG === "en" ? "English" : "Uzbek";
    add("link", { rel: "manifest", href: "manifest.json" });
    add("link", { rel: "icon", href: "favicon.svg", type: "image/svg+xml" });
    add("link", { rel: "apple-touch-icon", href: "favicon.svg" });
    // Preconnect (tezroq ulanish — fonts/CDN)
    add("link", { rel: "preconnect", href: "https://fonts.googleapis.com" });
    add("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" });
    add("link", { rel: "dns-prefetch", href: "https://www.googletagmanager.com" });
    add("link", { rel: "dns-prefetch", href: "https://cdn.jsdelivr.net" });
    add("meta", { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" });
    add("meta", { name: "theme-color", content: "#181a24", media: "(prefers-color-scheme: dark)" });
    const noindex = (page === "iq-test.html" || page === "iq-result.html");
    add("meta", { name: "robots", content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
    add("meta", { name: "googlebot", content: noindex ? "noindex, follow" : "index, follow" });
    add("meta", { name: "google", content: "notranslate" });
    add("meta", { name: "author", content: "Oson Studio" });
    add("meta", { name: "publisher", content: "Oson Studio" });
    add("meta", { name: "language", content: LANG_NAME });
    add("meta", { "http-equiv": "Content-Language", content: CUR_LANG });
    add("meta", { name: "format-detection", content: "telephone=no" });
    // Google Search Console (xavfsizlik uchun) — verification meta
    add("meta", { name: "google-site-verification", content: "s4unJ4pyjTM1DPiKaQ9FzMHExOx8KvqSZnyGP0u5vO4" });
    // Open Graph
    add("meta", { property: "og:type", content: ogType });
    add("meta", { property: "og:site_name", content: "Oson Studio" });
    add("meta", { property: "og:title", content: document.title });
    add("meta", { property: "og:description", content: desc });
    add("meta", { property: "og:url", content: pageUrl });
    add("meta", { property: "og:image", content: ogImage });
    add("meta", { property: "og:image:width", content: "1200" });
    add("meta", { property: "og:image:height", content: "630" });
    add("meta", { property: "og:image:alt", content: "Oson Studio" });
    add("meta", { property: "og:locale", content: OG_LOCALE });
    // Twitter
    add("meta", { name: "twitter:card", content: "summary_large_image" });
    add("meta", { name: "twitter:site", content: "@osonstudio" });
    add("meta", { name: "twitter:title", content: document.title });
    add("meta", { name: "twitter:description", content: desc });
    add("meta", { name: "twitter:image", content: ogImage });
    add("meta", { name: "twitter:image:alt", content: "Oson Studio" });

    if (!isArticle && !isCourse) {
      addLd({
        "@context": "https://schema.org", "@type": "WebApplication",
        name: "Oson Studio", url: SITE, applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "UZS" },
        inLanguage: "uz", description: desc
      });
    }
    // Organization — har sahifada (sitelinks va knowledge panel uchun)
    addLd({
      "@context": "https://schema.org", "@type": "Organization",
      name: "Oson Studio", url: SITE,
      logo: { "@type": "ImageObject", url: SITE + "/favicon.svg", width: 512, height: 512 },
      image: SITE + "/og-image.svg",
      description: "Bepul onlayn vositalar va ta'lim kurslari O'zbek tilida.",
      inLanguage: "uz",
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", url: SITE + "/contact", availableLanguage: ["uz", "Uzbek"] }
    });
    if (page === "index.html") {
      // WebSite + SearchAction (sitelinks search box)
      addLd({
        "@context": "https://schema.org", "@type": "WebSite",
        name: "Oson Studio", alternateName: "osonstudio.uz",
        description: "50+ bepul onlayn vosita (PDF, hisob-faktura, parol, QR, ekran yozish, kalkulyator) va interaktiv sun'iy intellekt hamda Prompt Engineering kurslari — o'zbek, rus va ingliz tillarida.",
        url: SITE, inLanguage: "uz",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: SITE + "/?q={search_term_string}" },
          "query-input": "required name=search_term_string"
        }
      });
    }

    // Breadcrumb (sahifadagi yo'l chizig'idan avtomatik)
    const bc = document.querySelector(".breadcrumb");
    if (bc) {
      const items = []; let pos = 1;
      bc.querySelectorAll("a").forEach(a => {
        const href = (a.getAttribute("href") || "").replace(/\.html$/, "").replace(/^index$/, "");
        items.push({ "@type": "ListItem", position: pos++, name: a.textContent.trim(), item: new URL(href, SITE + "/").href });
      });
      let last = "";
      const lc = bc.lastChild;
      if (lc && lc.nodeType === 3) last = lc.nodeValue.replace(/^[\s/]+/, "").trim();
      if (!last) last = bc.textContent.split("/").pop().trim();
      if (last) items.push({ "@type": "ListItem", position: pos++, name: last, item: url });
      if (items.length) addLd({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items });
    }

    // Maqola sahifalari — Article
    if (isArticle) {
      addLd({
        "@context": "https://schema.org", "@type": "Article",
        headline, description: desc, image: ogImage, inLanguage: "uz",
        author: { "@type": "Person", name: "Ergashov Eldor" },
        publisher: { "@type": "Organization", name: "Oson Studio", logo: { "@type": "ImageObject", url: SITE + "/favicon.svg" } },
        mainEntityOfPage: url, datePublished: "2026-05-25", dateModified: "2026-05-25"
      });
    }

    // Kurs sahifalari — Course
    if (isCourse) {
      const course = {
        "@context": "https://schema.org", "@type": "Course",
        name: headline, description: desc, inLanguage: "uz",
        provider: { "@type": "Organization", name: "Oson Studio", sameAs: SITE }
      };
      const priceEl = document.querySelector(".course-hero .price .now");
      if (priceEl) {
        const num = priceEl.textContent.replace(/[^\d]/g, "");
        if (num) course.offers = { "@type": "Offer", price: num, priceCurrency: "UZS", availability: "https://schema.org/InStock" };
      }
      addLd(course);
    }
  })();

  // document.body.classList.add("has-sidebar");

  // --- Asosiy menyu (4 bo'lim) ---
  const TOOL_SLUGS = TOOLS.map(t => t.slug).concat("index.html", "");
  // === MENU — tartib ===
  // 1) Kurslar → 2) Xizmatlar → 3) Hujjatlar → 4) Tezyoz → 5) IQ Test
  // → 6) Doska → 7) Biznes vositalari (kalkulyatorlar shu yerda) → 8) Qazo hisoblagich
  const MENU = [
    { label: "Kurslar", href: "kurslar.html", icon: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>', match: s => s === "kurslar.html" || s.startsWith("kurs-") || s.endsWith("-kurs.html") },
    { label: "Xizmatlar", href: "index.html", icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>', match: s => TOOL_SLUGS.includes(s) },
    { label: "Hujjatlar", href: "hujjatlar.html", icon: '<path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"/>', match: s => s === "hujjatlar.html" || s.startsWith("pdf-") || s === "jpg-to-pdf.html" || s === "lotin-kiril.html" },
    { label: "Tezyoz", href: "tezyoz.html", icon: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>', match: s => s === "tezyoz.html" || s.startsWith("tezyoz-") },
    { label: "IQ Test", href: "iq.html", icon: '<path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.1 2.4 5.3.6.6 1 1.4 1.1 2.2l.2 1.3h6.6l.2-1.3c.1-.8.5-1.6 1.1-2.2C17.8 13.1 19 11.4 19 9a7 7 0 0 0-7-7z"/><path d="M9 21h6"/><path d="M10 18v-2.5"/><path d="M14 18v-2.5"/><path d="M9.5 12.5 12 10l2.5 2.5"/>', match: s => s === "iq.html" || s.startsWith("iq-") },
    { label: "Dasturlash", href: "dasturlash.html", icon: '<rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="m6.5 9.5 3 2.5-3 2.5"/><path d="M12.5 15h4.5"/>', match: s => s === "dasturlash.html" || s.startsWith("dasturlash-") },
    { label: "Kod Editor", href: "kod-editor.html", icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', match: s => s === "kod-editor.html" },
    { label: "Doska", href: "doska.html", icon: '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>', match: s => s === "doska.html" },
    { label: "Biznes vositalari", href: "buxgalteriya.html", icon: '<path d="M3 3v18h18"/><path d="m7 14 3-3 4 4 5-5"/><circle cx="10" cy="11" r="0.8" fill="currentColor"/><circle cx="14" cy="15" r="0.8" fill="currentColor"/><circle cx="19" cy="10" r="0.8" fill="currentColor"/>', match: s => s === "buxgalteriya.html" || ["hisob-faktura.html","akt-generator.html","shartnoma-shablon.html","pul-orderi.html","ttn.html","ishonchnoma.html","buyruq-shablon.html","yatt-soliq.html","yuridik-foyda.html","aylanmadan-soliq.html","patent-soliq.html","aksiz-soliq.html","inps-kalkulyator.html","soliq-taqvimi.html","korxona-maoshi.html","otpusk-puli.html","bolnichniy.html","avans.html","ishdan-boshatish.html","marja-kalkulyator.html","break-even.html","roi-kalkulyator.html","cash-flow.html","daromad-xarajat.html","bank-komissiya.html","inkassatsiya.html","akkreditiv.html","lizing.html","chegirma.html","mark-up.html","foiz-kalkulyator.html","yillik-oylik.html","yosh-hisoblagich.html","imc-hisoblagich.html","kaloriya-hisoblagich.html","kredit-hisoblagich.html","maosh-hisoblagich.html","soliq-hisoblagich.html","olcham-konvertor.html","homiladorlik-hisoblagich.html","vaqt-mintaqalari.html","hisoblagichlar.html"].includes(s) },
    { label: "Qazo hisoblagich", href: "qazo.html", icon: '<path d="M2 22h20"/><path d="M7 22V14"/><path d="M17 22V14"/><path d="M7 14c-1.5-4 1.5-9 5-9s6.5 5 5 9"/><path d="M10 22v-5a2 2 0 0 1 4 0v5"/><path d="M12 5V3.2"/><path d="M13.5 2a1.3 1.3 0 1 1-1.5 2.2 1 1 0 0 0 1.5-2.2z"/><path d="M2 22V15"/><path d="M6 22V15"/><path d="M2 15c-.7-2.5 1-5 2-5s2.7 2.5 2 5"/><path d="M4 10V8.4"/><path d="M5 7.5a.9 .9 0 1 1-1 1.5.7 .7 0 0 0 1-1.5z"/><path d="M18 22V15"/><path d="M22 22V15"/><path d="M18 15c-.7-2.5 1-5 2-5s2.7 2.5 2 5"/><path d="M20 10V8.4"/><path d="M21 7.5a.9 .9 0 1 1-1 1.5.7 .7 0 0 0 1-1.5z"/>', match: s => s === "qazo.html" || s.startsWith("qazo-") },
  ];
  const navItems = MENU.map(m => {
    const ic = m.rawIcon ? m.rawIcon : (m.emoji ? `<span class="nav-emoji">${m.emoji}</span>` : svg(m.icon));
    const sep = m.sepBefore ? '<div class="side-nav-sep" data-no-i18n></div>' : '';
    const badge = m.badge ? `<span class="side-nav-badge ${m.badge.toLowerCase() === 'beta' ? 'beta' : ''}" data-no-i18n>${m.badge}</span>` : '';
    const href = navUrl(m.href);
    return `${sep}<a href="${href}" class="${m.match(page) ? "active" : ""}">${ic}<span>${m.label}</span>${badge}</a>`;
  }).join("");

  // --- Til almashtirgich — globus dropdown (har til alohida URL) ---
  const globeIcon = '<svg viewBox="0 0 24 24" class="globe" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
  const langSwitchHtml = `
    <div class="lang-dd" data-no-i18n>
      <button type="button" class="lang-dd-btn" aria-haspopup="true" aria-expanded="false" title="Til / Язык / Language">
        ${globeIcon}<span class="lang-cur">${LANG_LABELS[CUR_LANG] || "Uz"}</span>
        <svg viewBox="0 0 24 24" class="chev" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="lang-dd-menu" role="menu">
        ${[["uz", "O'zbek", "UZ"], ["ru", "Русский", "RU"], ["en", "English", "EN"]].map(([code, name, ab]) =>
          `<a role="menuitem" href="${langUrl(code)}" hreflang="${code}" lang="${code}" class="${code === CUR_LANG ? "active" : ""}"><span class="lo-code">${ab}</span>${name}</a>`
        ).join("")}
      </div>
    </div>`;

  // --- Donat tugmalari (til almashtirgich oldida): Tirikchilik + Buy Me a Coffee ---
  const tkHtml = `<a class="tk-btn" href="${DONATE}" target="_blank" rel="noopener" title="Loyihani qo'llab-quvvatlash — Tirikchilik" aria-label="Loyihani qo'llab-quvvatlash — Tirikchilik" data-no-i18n><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3.3" y="4" width="17.4" height="4.5" rx="2.25"/><rect x="9.75" y="5.8" width="4.5" height="14.2" rx="2.25"/></svg></a>`;
  const bmcHtml = `<a class="bmc-btn" href="https://www.buymeacoffee.com/eldoroga" target="_blank" rel="noopener" title="Bir piyola qahva — Buy Me a Coffee" aria-label="Buy me a coffee" data-no-i18n><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="#0d0c22" stroke-width="1.5" stroke-linecap="round"><path d="M9 2.4c.55.65.55 1.45 0 2.1s-.55 1.45 0 2.1"/><path d="M12.5 2.1c.55.65.55 1.45 0 2.1s-.55 1.45 0 2.1"/><path d="M16 2.4c.55.65.55 1.45 0 2.1s-.55 1.45 0 2.1"/></g><path d="M4 9.1h13.4v4.5a5.6 5.6 0 0 1-5.6 5.6H9.6A5.6 5.6 0 0 1 4 13.6z" fill="#0d0c22"/><rect x="5.5" y="10.4" width="10.4" height="1.5" rx=".75" fill="#ffdd00"/><path d="M17.6 10.3h1.5a2.7 2.7 0 0 1 0 5.4h-1.5" fill="none" stroke="#0d0c22" stroke-width="2" stroke-linecap="round"/><rect x="6" y="20.5" width="9.4" height="1.7" rx=".85" fill="#0d0c22"/></svg></a>`;

  // --- Sidebar ---
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";
  sidebar.innerHTML = `
    <a class="brand" href="${LANG_HOME}" data-no-i18n>
      <span class="logo">${logoMark}</span>
      <span class="brand-name">Platforma</span>
    </a>
    <nav class="side-nav">
      ${navItems}
    </nav>
    <button class="side-search" type="button" title="Qidirish">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <span>Qidirish</span>
    </button>
    <div class="side-foot-row">
      ${tkHtml}
      ${bmcHtml}
      ${langSwitchHtml}
      <button class="theme-btn" type="button" title="Rejimni almashtirish"></button>
    </div>`;

  // --- Mobile topbar ---
  const topbar = document.createElement("header");
  topbar.className = "topbar";
  topbar.innerHTML = `
    <a class="brand" href="${LANG_HOME}" data-no-i18n><span class="logo">${logoMark}</span><span class="brand-name">Platforma</span></a>
    <div style="margin-left:auto;display:flex;align-items:center;gap:8px;">
      <button class="theme-btn" type="button" title="Rejimni almashtirish"></button>
    </div>`;

  const backdrop = document.createElement("div");
  backdrop.className = "backdrop";



  // Skip link (a11y)
  const skip = document.createElement("a");
  skip.className = "skip-link"; skip.href = "#main"; skip.textContent = "Asosiy kontentga o'tish";
  const mEl0 = document.querySelector("main"); if (mEl0) mEl0.id = "main";

  sidebar.id = "appSidebar";
  // document.body.prepend(backdrop);
  // document.body.prepend(sidebar);
  document.body.prepend(topbar);
  document.body.prepend(skip);

  // === REKLAMA (universal slot — footer'dan oldin + floating yon rails) ===
  // AdSense tasdiqlanmaguncha placeholder ko'rsatamiz.
  // Tasdiqlangach, .ads-ph ichini <ins class="adsbygoogle"> bilan almashtirish kifoya.
  const ADS_ENABLED = false; // ⚠️ AdSense tasdiqlangach `true` qiling
  if (ADS_ENABLED) {
    // 1) Footer'dan oldin (har sahifada, mobile + desktop)
    const adFooter = document.createElement("aside");
    adFooter.className = "container";
    adFooter.innerHTML = `
      <div class="ads-slot ads-banner" data-slot="footer">
        <span class="ads-tag">Reklama</span>
        <div class="ads-ph">
          <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/><circle cx="6" cy="7" r="1"/></svg>
          <span>Reklama joyi (footer'dan oldin)</span>
          <span class="ph-size">728×90 / responsive</span>
        </div>
      </div>`;
    document.body.appendChild(adFooter);

    // 2) Floating yon reklama — desktop ≥1600px (chap va o'ng)
    const railLeft = document.createElement("aside");
    railLeft.className = "ads-rail ads-rail-left";
    railLeft.innerHTML = `
      <span class="ads-tag">Reklama</span>
      <div class="ads-ph">
        <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 12h6M9 17h3"/></svg>
        <span>Yon reklama</span>
        <span class="ph-size">160×600</span>
      </div>`;
    document.body.appendChild(railLeft);

    const railRight = document.createElement("aside");
    railRight.className = "ads-rail ads-rail-right";
    railRight.innerHTML = `
      <span class="ads-tag">Reklama</span>
      <div class="ads-ph">
        <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 12h6M9 17h3"/></svg>
        <span>Yon reklama</span>
        <span class="ph-size">160×600</span>
      </div>`;
    document.body.appendChild(railRight);
  }

  // document.body.appendChild(footer);

  // === SEARCH (Ctrl+K command palette) ===
  const SEARCH_INDEX = [
    // Hublar
    { slug: "index.html", t: "Bosh sahifa", c: "Sayt", k: "bosh asosiy main home" },
    { slug: "hisoblagichlar.html", t: "Hisoblagichlar", c: "Hub", k: "calc kalkulyator hisob" },
    { slug: "buxgalteriya.html", t: "Buxgalteriya", c: "Hub", k: "buxgalter accounting hujjat" },
    { slug: "qazo.html", t: "Qazo hisoblagich", c: "Hub", k: "qazo namoz roza" },
    { slug: "hujjatlar.html", t: "Hujjatlar", c: "Hub", k: "pdf docx office" },
    { slug: "tezyoz.html", t: "Tezyoz", c: "Hub", k: "tezyoz klaviatura test" },
    { slug: "doska.html", t: "Doska", c: "Xizmatlar", k: "doska chizish whiteboard draw sketch excalidraw eskiz рисование доска" },
    { slug: "kurslar.html", t: "Kurslar", c: "Hub", k: "kurs ta'lim o'qish" },
    { slug: "prompt-kurs.html", t: "Prompt Engineering kursi", c: "Kurslar", k: "prompt engineering prumt sun'iy intellekt chatgpt claude noldan o'rganish" },
    { slug: "agent-kurs.html", t: "AI Agentlar kursi", c: "Kurslar", k: "ai agent agentlar claude sun'iy intellekt yordamchi avtomatlashtirish llm model kontekst token prompt mcp asbob tool function calling react react-based workflow multi-agent claude code agent sdk no-code dify n8n make zapier evals prompt injection xavfsizlik noldan advanced o'rganish ии agent клод искусственный интеллект" },
    { slug: "airasm-kurs.html", t: "AI bilan rasm yaratish kursi", c: "Kurslar", k: "ai rasm yaratish text to image matndan rasm sun'iy intellekt midjourney stable diffusion dalle dall-e leonardo gemini chatgpt flux prompt san'ati uslub kompozitsiya yorug'lik negative prompt inpainting outpainting upscale controlnet seed generatsiya tasvir grafika dizayn noldan advanced o'rganish ии генерация изображений нейросеть промпт миджорни" },
    { slug: "aivideo-kurs.html", t: "AI bilan video yaratish kursi", c: "Kurslar", k: "ai video yaratish text to video image to video matndan video sun'iy intellekt runway pika luma kling veo sora prompt san'ati harakat kamera dolly pan zoom montaj ovoz lip-sync izchillik generatsiya klip kinematografik reels shorts noldan advanced o'rganish ии генерация видео нейросеть промпт runway sora" },
    { slug: "iq.html", t: "IQ Test", c: "Hub", k: "iq test aql intellekt mantiq matematik xotira diqqat reaksiya emotsional eq sertifikat тест iq" },
    // Hisoblagichlar (9)
    { slug: "yosh-hisoblagich.html", t: "Yosh kalkulyatori", c: "Hisoblagichlar", k: "yosh age tug'ilgan kun" },
    { slug: "imc-hisoblagich.html", t: "IMC (Tana massasi)", c: "Hisoblagichlar", k: "imc bmi tana massasi vazn bo'y" },
    { slug: "kaloriya-hisoblagich.html", t: "Kaloriya hisoblagich", c: "Hisoblagichlar", k: "kaloriya calorie ovqat bmr tdee" },
    { slug: "kredit-hisoblagich.html", t: "Kredit kalkulyator", c: "Hisoblagichlar", k: "kredit loan annuitet diferensial qarz" },
    { slug: "maosh-hisoblagich.html", t: "Maosh kalkulyator", c: "Hisoblagichlar", k: "maosh oylik salary sof yalpi ndfl" },
    { slug: "soliq-hisoblagich.html", t: "Soliq hisoblagich", c: "Hisoblagichlar", k: "soliq nds tax property transport" },
    { slug: "olcham-konvertor.html", t: "O'lcham konvertor", c: "Hisoblagichlar", k: "olcham birlik uzunlik vazn temperatura konvertor" },
    { slug: "homiladorlik-hisoblagich.html", t: "Homiladorlik kalkulyatori", c: "Hisoblagichlar", k: "homiladorlik pregnancy tug'ilish hayz" },
    { slug: "vaqt-mintaqalari.html", t: "Vaqt mintaqalari", c: "Hisoblagichlar", k: "vaqt soat dunyo shahar timezone" },
    // Buxgalteriya — Hujjat generatorlari (7)
    { slug: "hisob-faktura.html", t: "Hisob-faktura", c: "Biznes vositalari", k: "schyot faktura invoice tovar nds" },
    { slug: "akt-generator.html", t: "Akt — bajarilgan ish", c: "Biznes vositalari", k: "akt dalolatnoma bajarilgan ish" },
    { slug: "shartnoma-shablon.html", t: "Shartnoma shabloni", c: "Biznes vositalari", k: "shartnoma contract xizmat oldi sotdi ijara mehnat qarz" },
    { slug: "pul-orderi.html", t: "Pul orderi (Kassa)", c: "Biznes vositalari", k: "kassa ko-1 ko-2 kirim chiqim order" },
    { slug: "ttn.html", t: "TTN — Yuk xati", c: "Biznes vositalari", k: "ttn nakladnoy yuk transport tovar" },
    { slug: "ishonchnoma.html", t: "Ishonchnoma (Doverennost)", c: "Biznes vositalari", k: "ishonchnoma doverennost vakolat" },
    { slug: "buyruq-shablon.html", t: "Buyruq (Prikaz)", c: "Biznes vositalari", k: "buyruq prikaz ishga qabul ta'til mukofot avans" },
    // Buxgalteriya — Maosh va xodim (6)
    { slug: "korxona-maoshi.html", t: "Korxona maoshi (toplu)", c: "Biznes vositalari", k: "korxona xodim maosh toplu jamoa ndfl" },
    { slug: "otpusk-puli.html", t: "Otpusk (Ta'til) puli", c: "Biznes vositalari", k: "otpusk tatil mehnat ta'til kompensatsiya" },
    { slug: "bolnichniy.html", t: "Kasallik varaqasi", c: "Biznes vositalari", k: "bolnichniy kasallik varaqasi staj sug'urta" },
    { slug: "avans.html", t: "Avans hisoblash", c: "Biznes vositalari", k: "avans aens advance oylik" },
    { slug: "ishdan-boshatish.html", t: "Ishdan bo'shatish kompensatsiyasi", c: "Biznes vositalari", k: "ishdan boshatish bo'shatish kompensatsiya" },
    // Buxgalteriya — Soliq (7)
    { slug: "yatt-soliq.html", t: "YaTT soliq kalkulyatori", c: "Biznes vositalari", k: "yatt ip tadbirkor soliq soddalashtirilgan aylanmadan patent" },
    { slug: "yuridik-foyda.html", t: "Yuridik foyda solig'i", c: "Biznes vositalari", k: "yuridik korxona foyda solig'i 15" },
    { slug: "aylanmadan-soliq.html", t: "Aylanmadan soliq (4%)", c: "Biznes vositalari", k: "aylanma soliq 4% kichik korxona" },
    { slug: "patent-soliq.html", t: "Patent soliq", c: "Biznes vositalari", k: "patent soliq faoliyat viloyat" },
    { slug: "aksiz-soliq.html", t: "Aksiz solig'i", c: "Biznes vositalari", k: "aksiz alkogol tamaki neft" },
    { slug: "inps-kalkulyator.html", t: "INPS (Pensiya)", c: "Biznes vositalari", k: "inps pensiya jamg'arma 12 0.1" },
    { slug: "soliq-taqvimi.html", t: "Soliq taqvimi", c: "Biznes vositalari", k: "soliq taqvim kalendar muddat ndfl" },
    // Buxgalteriya — Moliyaviy tahlil (5)
    { slug: "marja-kalkulyator.html", t: "Marja va tannarx", c: "Biznes vositalari", k: "marja tannarx margin mark-up foyda narx" },
    { slug: "break-even.html", t: "Break-even point", c: "Biznes vositalari", k: "break even zararsizlik nuqta" },
    { slug: "roi-kalkulyator.html", t: "ROI kalkulyator", c: "Biznes vositalari", k: "roi return investment qaytim" },
    { slug: "cash-flow.html", t: "Cash flow bashorat", c: "Biznes vositalari", k: "cash flow pul oqim kirim chiqim" },
    { slug: "daromad-xarajat.html", t: "Daromad-xarajat (P&L)", c: "Biznes vositalari", k: "p&l profit loss daromad xarajat balans" },
    // Buxgalteriya — Bank (4)
    { slug: "bank-komissiya.html", t: "Bank komissiyasi", c: "Biznes vositalari", k: "bank komissiya o'tkazma transfer" },
    { slug: "inkassatsiya.html", t: "Inkassatsiya", c: "Biznes vositalari", k: "inkassatsiya naqd pul tashish" },
    { slug: "akkreditiv.html", t: "Akkreditiv", c: "Biznes vositalari", k: "akkreditiv bank kafolat" },
    { slug: "lizing.html", t: "Lizing kalkulyatori", c: "Biznes vositalari", k: "lizing leasing texnika transport" },
    // Buxgalteriya — Maxsus kalkulyatorlar (4)
    { slug: "chegirma.html", t: "Chegirma (Skidka)", c: "Biznes vositalari", k: "chegirma skidka discount narx" },
    { slug: "mark-up.html", t: "Mark-up (Ustama)", c: "Biznes vositalari", k: "mark-up ustama markup tannarx" },
    { slug: "foiz-kalkulyator.html", t: "Foiz kalkulyator", c: "Biznes vositalari", k: "foiz percent kompound oddiy" },
    { slug: "yillik-oylik.html", t: "Yillik → oylik konvertor", c: "Biznes vositalari", k: "yillik oylik daromad haftalik kunlik" },
    // Qazo (3)
    { slug: "qazo-namoz.html", t: "Qazo namoz", c: "Qazo", k: "qazo namoz balog'at o'tkazib yuborilgan" },
    { slug: "qazo-roza.html", t: "Qazo ro'za", c: "Qazo", k: "qazo roza ramazon" },
    { slug: "qazo-women.html", t: "Uzrli ayollar", c: "Qazo", k: "ayollar hayz nifos uzrli qazo" },
    // Hujjat (PDF tools)
    { slug: "pdf-merge.html", t: "PDF birlashtirish", c: "Hujjatlar", k: "pdf merge birlashtirish ulash" },
    { slug: "pdf-split.html", t: "PDF ajratish", c: "Hujjatlar", k: "pdf split ajratish bo'lish" },
    { slug: "pdf-rotate.html", t: "PDF burish", c: "Hujjatlar", k: "pdf rotate burish aylantirish" },
    { slug: "pdf-compress.html", t: "PDF kichraytirish", c: "Hujjatlar", k: "pdf compress siqish hajm kichraytirish" },
    { slug: "pdf-watermark.html", t: "PDF suv belgisi", c: "Hujjatlar", k: "pdf watermark suv belgisi" },
    { slug: "jpg-to-pdf.html", t: "JPG → PDF", c: "Hujjatlar", k: "jpg png pdf rasm hujjat" },
    { slug: "pdf-to-jpg.html", t: "PDF → JPG", c: "Hujjatlar", k: "pdf jpg rasm extract" },
    { slug: "ocr.html", t: "OCR — matn tanish", c: "Hujjatlar", k: "ocr matn tanish skanlash rasm pdf" },
    { slug: "lotin-kiril.html", t: "Lotin ↔ Kiril", c: "Hujjatlar", k: "lotin kiril transliteratsiya o'zgartirish" },
    // Tezyoz
    { slug: "tezyoz-test.html", t: "Tezlik testi", c: "Tezyoz", k: "tezlik test wpm cpm tezyoz" },
    { slug: "tezyoz-darslar.html", t: "Klaviatura darslari", c: "Tezyoz", k: "klaviatura darslar typing o'rgatish" },
    { slug: "tezyoz-attack.html", t: "Typing Attack", c: "Tezyoz", k: "typing attack o'yin tank tezyoz" },
    { slug: "tezyoz-zuma.html", t: "Zuma", c: "Tezyoz", k: "zuma o'yin shar tezyoz" },
    { slug: "tezyoz-typerix.html", t: "Typerix (Tetris)", c: "Tezyoz", k: "typerix tetris o'yin tezyoz" },
    { slug: "tezyoz-keytower.html", t: "KeyTower", c: "Tezyoz", k: "keytower kran o'yin tezyoz" },
    { slug: "tezyoz-vanish.html", t: "Vanish (yo'qoluvchi)", c: "Tezyoz", k: "vanish yo'qoluvchi tezyoz touch typing" },
    { slug: "tezyoz-labirint.html", t: "Labirint", c: "Tezyoz", k: "labirint o'yin tezyoz" },
    // Tools (from TOOLS)
    { slug: "thumbnail.html", t: "Thumbnail yuklab olish", c: "Xizmatlar", k: "thumbnail youtube rasm muqova" },
    { slug: "thumbnail-tester.html", t: "Thumbnail sinovi", c: "Xizmatlar", k: "thumbnail test sinov youtube" },
    { slug: "screen-recorder.html", t: "Ekran yozib olish", c: "Xizmatlar", k: "ekran yozish screen recorder video" },
    { slug: "video-to-audio.html", t: "Videodan MP3", c: "Xizmatlar", k: "video audio mp3 ovoz ajratish" },
    { slug: "audio-effects.html", t: "Ovoz effektlari", c: "Xizmatlar", k: "ovoz effekt voice changer echo robot" },
    { slug: "background-removal.html", t: "Fon olib tashlash", c: "Xizmatlar", k: "fon background removal shaffof png ai" },
    { slug: "id-photo.html", t: "Hujjat foto", c: "Xizmatlar", k: "hujjat foto pasport 3x4 id photo" },
    { slug: "rasm-konvertor.html", t: "Rasm konvertor", c: "Xizmatlar", k: "rasm format png jpg webp konvertor" },
    { slug: "password.html", t: "Parol generatori", c: "Xizmatlar", k: "parol password generator xavfsiz" },
    { slug: "tempmail.html", t: "Vaqtinchalik pochta", c: "Xizmatlar", k: "tempmail vaqtinchalik email pochta spam" },
    { slug: "qr-code.html", t: "QR kod", c: "Xizmatlar", k: "qr kod generator havola wifi" },
    { slug: "budget.html", t: "Pul boshqaruvi", c: "Xizmatlar", k: "budget pul xarajat kirim chiqim hisobot" },
    { slug: "todo.html", t: "To-do ro'yxati", c: "Xizmatlar", k: "todo vazifa ro'yxat list" },
    { slug: "pomodoro.html", t: "Pomodoro taymer", c: "Xizmatlar", k: "pomodoro taymer diqqat tanaffus" },
    { slug: "color-picker.html", t: "Color Picker", c: "Xizmatlar", k: "color picker rang tanlash hex rgb hsl palitra" },
    { slug: "word-counter.html", t: "Word Counter", c: "Xizmatlar", k: "word counter so'z belgi sanash matn tahlil character" },
    { slug: "youtube-nik.html", t: "YouTube nik tekshirish", c: "Xizmatlar", k: "youtube nik handle username nickname band bo'sh tekshirish kanal nomi check available" },
    { slug: "lorem-ipsum.html", t: "Lorem Ipsum", c: "Xizmatlar", k: "lorem ipsum to'ldiruvchi matn dummy placeholder" },
  ];

  // Search modal
  const searchModal = document.createElement("div");
  searchModal.className = "search-modal";
  searchModal.innerHTML = `
    <div class="search-modal-bg"></div>
    <div class="search-modal-inner" role="dialog" aria-modal="true" aria-label="Xizmat qidirish">
      <div class="search-input-wrap">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" class="search-input" placeholder="Xizmat qidirish..." autocomplete="off">
        <button type="button" class="search-close" aria-label="Yopish">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="search-results" id="searchResults"></div>
    </div>
  `;
  document.body.appendChild(searchModal);

  const searchInput = searchModal.querySelector(".search-input");
  const searchResults = searchModal.querySelector("#searchResults");
  let searchActiveIdx = 0;
  let searchHits = [];

  let searchLastFocus = null;
  function openSearch() {
    searchLastFocus = document.activeElement;
    searchModal.classList.add("open");
    setTimeout(() => searchInput.focus(), 50);
    renderSearchResults("");
  }
  function closeSearch() {
    searchModal.classList.remove("open");
    searchInput.value = "";
    if (searchLastFocus && searchLastFocus.focus) { try { searchLastFocus.focus(); } catch (e) {} }
  }

  // Fuzzy match — score by relevance + ko'p tilli (Uz/УЗ/РУС/ENG)
  function searchIndex(query) {
    if (!query) {
      // Show popular/recent (just first 8 hubs + tools)
      return SEARCH_INDEX.slice(0, 8);
    }
    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/).filter(Boolean);
    const lang = (window.OsonI18n && window.OsonI18n.getLang) ? window.OsonI18n.getLang() : "uz";
    const trFn = (window.OsonI18n && window.OsonI18n.tr) ? window.OsonI18n.tr : (s => s);
    const cyrFn = (window.OsonI18n && window.OsonI18n.lat2cyr) ? window.OsonI18n.lat2cyr : (s => s);

    return SEARCH_INDEX
      .map(it => {
        // === Barcha tillarda title'ni hozirlash ===
        const tOrig = it.t.toLowerCase();
        const tCyr  = cyrFn(it.t).toLowerCase();
        const tRu   = trFn(it.t, "ru").toLowerCase();
        const tEn   = trFn(it.t, "en").toLowerCase();
        const cOrig = (it.c || "").toLowerCase();
        const cRu   = trFn(it.c || "", "ru").toLowerCase();
        const cEn   = trFn(it.c || "", "en").toLowerCase();
        const cCyr  = cyrFn(it.c || "").toLowerCase();
        const k     = (it.k || "").toLowerCase();
        // Tanlangan tilga ustunlik beramiz, lekin har doim barcha tillarda qidiramiz

        const titles = [tOrig, tCyr, tRu, tEn];
        const cats   = [cOrig, cCyr, cRu, cEn];

        let score = 0;
        // Exact match (any language)
        if (titles.some(t => t === q)) score += 1000;
        else if (titles.some(t => t.startsWith(q))) score += 200;
        else if (titles.some(t => t.includes(q))) score += 80;
        // Keyword matches — har bir so'z bo'yicha
        words.forEach(w => {
          if (titles.some(t => t.includes(w))) score += 30;
          if (k.includes(w)) score += 20;
          if (cats.some(c => c.includes(w))) score += 5;
        });
        return { ...it, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }

  function categoryColor(c) {
    const map = {
      "Hisoblagichlar": "#5b5bd6",
      "Buxgalteriya": "#5b5bd6",
      "Qazo": "#10b981",
      "Hujjatlar": "#3b82f6",
      "Tezyoz": "#f59e0b",
      "Xizmatlar": "#ec4899",
      "Hub": "#5b5bd6",
      "Sayt": "#5b5bd6",
    };
    return map[c] || "#5b5bd6";
  }

  function renderSearchResults(query) {
    searchHits = searchIndex(query);
    searchActiveIdx = 0;
    if (!searchHits.length) {
      searchResults.innerHTML = '<div class="search-empty">Hech narsa topilmadi. Boshqa so\'z bilan urinib ko\'ring.</div>';
      if (window.OsonI18n) window.OsonI18n.refresh();
      return;
    }
    // Search natijasini tanlangan tilda ko'rsatamiz
    const curLang = (window.OsonI18n && window.OsonI18n.getLang) ? window.OsonI18n.getLang() : "uz";
    const trH = (window.OsonI18n && window.OsonI18n.tr) ? window.OsonI18n.tr : ((s) => s);
    searchResults.innerHTML = searchHits.map((h, i) => {
      const titleTr = trH(h.t, curLang);
      return `
      <a class="search-hit ${i === 0 ? 'active' : ''}" href="${navUrl(h.slug)}" data-idx="${i}">
        <span class="search-hit-ic" style="background:${categoryColor(h.c)}1a; color:${categoryColor(h.c)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        </span>
        <span class="search-hit-info">
          <span class="search-hit-title">${titleTr}</span>
        </span>
        <svg class="search-hit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>`;
    }).join("");
    if (window.OsonI18n) window.OsonI18n.refresh();
  }

  function updateActive() {
    searchResults.querySelectorAll(".search-hit").forEach((el, i) => {
      el.classList.toggle("active", i === searchActiveIdx);
      if (i === searchActiveIdx) el.scrollIntoView({ block: "nearest" });
    });
  }

  searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));

  searchInput.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeSearch(); }
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (searchHits.length) { searchActiveIdx = (searchActiveIdx + 1) % searchHits.length; updateActive(); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (searchHits.length) { searchActiveIdx = (searchActiveIdx - 1 + searchHits.length) % searchHits.length; updateActive(); }
    } else if (e.key === "Enter") {
      e.preventDefault();
      const hit = searchHits[searchActiveIdx];
      if (hit) location.href = hit.slug;
    }
  });

  searchModal.querySelector(".search-modal-bg").addEventListener("click", closeSearch);
  searchModal.querySelector(".search-close").addEventListener("click", closeSearch);

  // Mobile'da hit'ga bosilganda inputni o'chir — klaviatura yopiladi
  searchResults.addEventListener("click", e => {
    if (e.target.closest(".search-hit")) {
      searchInput.blur();
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && searchModal.classList.contains("open")) {
      closeSearch();
    } else if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      if (searchModal.classList.contains("open")) closeSearch(); else openSearch();
    }
  });

  // Bind search buttons
  document.querySelectorAll(".search-btn, .side-search").forEach(b => b.addEventListener("click", openSearch));

  applyTheme(savedTheme);

  const navToggleBtn = topbar.querySelector(".nav-toggle");
  const close = () => { sidebar.classList.remove("open"); backdrop.classList.remove("show"); if (navToggleBtn) navToggleBtn.setAttribute("aria-expanded", "false"); };
  if (navToggleBtn) {
    navToggleBtn.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open"); backdrop.classList.toggle("show", open);
      navToggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  backdrop.addEventListener("click", close);
  if (sidebar.querySelector(".side-nav")) {
    sidebar.querySelector(".side-nav").addEventListener("click", e => { if (e.target.closest("a")) close(); });
  }
  document.querySelectorAll(".theme-btn").forEach(b => b.addEventListener("click", toggleTheme));

  // === Til almashtirgich (globus dropdown) uslubi ===
  (function injectLangCss() {
    const st = document.createElement("style");
    st.textContent =
      ".lang-dd{position:relative;}" +
      ".lang-dd-btn{display:inline-flex;align-items:center;gap:6px;width:auto;justify-content:center;padding:0 9px;height:40px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--text);font:700 12.5px var(--font-display);cursor:pointer;transition:border-color .15s,background .15s;}" +
      ".topbar .lang-dd-btn{padding:0 9px;height:38px;}" +
      ".lang-dd-btn:hover{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 6%,var(--surface));}" +
      ".lang-dd-btn .globe{width:17px;height:17px;flex-shrink:0;}" +
      ".lang-dd-btn .chev{width:13px;height:13px;flex-shrink:0;opacity:.7;transition:transform .2s;}" +
      ".lang-dd.open .lang-dd-btn .chev{transform:rotate(180deg);}" +
      ".topbar .lang-dd-btn .lang-cur{display:inline;font-size:12px;letter-spacing:.02em;}" +
      ".lang-dd-menu{position:absolute;z-index:130;min-width:168px;background:var(--surface);border:1px solid var(--border);border-radius:13px;box-shadow:0 14px 34px -10px rgba(0,0,0,.3);padding:6px;opacity:0;visibility:hidden;pointer-events:none;transform:translateY(6px);transition:opacity .16s ease,transform .16s ease;}" +
      ".lang-dd.open .lang-dd-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0);}" +
      ".sidebar .lang-dd-menu{bottom:calc(100% + 7px);right:0;left:auto;}" +
      ".topbar .lang-dd-menu{top:calc(100% + 7px);right:0;}" +
      ".lang-dd-menu a{display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:9px;color:var(--text);text-decoration:none;font:600 13.5px var(--font-display);transition:background .12s;}" +
      ".lang-dd-menu a:hover{background:var(--bg);text-decoration:none;}" +
      ".lang-dd-menu a.active{color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,transparent);}" +
      ".lang-dd-menu a .lo-code{font:800 10px var(--font-display);letter-spacing:.04em;color:var(--muted);background:var(--bg);border:1px solid var(--border);border-radius:6px;padding:3px 6px;min-width:26px;text-align:center;}" +
      ".lang-dd-menu a.active .lo-code{color:var(--accent);border-color:color-mix(in srgb,var(--accent) 35%,var(--border));}";
    document.head.appendChild(st);
  })();

  // Til dropdown ochish/yopish (delegatsiya — sidebar + topbar)
  (function wireLangDd() {
    const closeAll = () => document.querySelectorAll(".lang-dd.open").forEach(d => {
      d.classList.remove("open");
      const b = d.querySelector(".lang-dd-btn"); if (b) b.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-dd-btn");
      if (btn) {
        const dd = btn.closest(".lang-dd");
        const wasOpen = dd.classList.contains("open");
        closeAll();
        if (!wasOpen) { dd.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
        return;
      }
      if (!e.target.closest(".lang-dd-menu")) closeAll();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
  })();

  // === Sahifa tiliga ko'ra tarjima (RU/EN: nav, footer, qidiruv) ===
  // Grid (xizmatlar) keyinroq inline renderer tomonidan to'g'ridan-to'g'ri mos tilda chiziladi.
  if (getLang() !== "uz") applyLang(getLang());

  // Breadcrumb oxirgi qismi (sahifa nomi) bitta "/ Nom" matn-tugunda — tarjima
  // qilinishi uchun uni <span>ga o'rab, "/" ajratuvchidan ajratamiz (barcha sahifalar)
  document.querySelectorAll(".breadcrumb").forEach(bc => {
    const last = bc.lastChild;
    if (last && last.nodeType === 3) {
      const m = last.nodeValue.match(/^(\s*\/\s*)(\S.*?)(\s*)$/);
      if (m) {
        bc.removeChild(last);
        bc.appendChild(document.createTextNode(m[1]));
        const span = document.createElement("span");
        span.textContent = m[2];
        bc.appendChild(span);
        if (m[3]) bc.appendChild(document.createTextNode(m[3]));
      }
    }
  });

  // === Forma yorliqlarini inputlarga avtomatik bog'lash ===
  // (a11y: skrinrider input nomini o'qiydi + yorliqqa bosish inputni fokuslaydi = kattaroq tap-target)
  // Bu butun sayt bo'ylab <label for=> yo'qligini bir joydan hal qiladi.
  let _autoFldId = 0;
  function linkLabels() {
    document.querySelectorAll("label:not([for])").forEach(label => {
      if (label.querySelector("input, select, textarea")) return; // input'ni o'rab turgan label — allaqachon bog'langan
      const parent = label.parentElement;
      if (!parent) return;
      const ctrls = Array.prototype.slice.call(parent.querySelectorAll("input, select, textarea"))
        .filter(c => ["hidden", "button", "submit", "reset"].indexOf(c.type) === -1);
      if (ctrls.length !== 1) return;            // konteynerda aniq 1 ta control bo'lsagina (noaniqlikni oldini olamiz)
      const ctrl = ctrls[0];
      if (ctrl.id && document.querySelector('label[for="' + ctrl.id.replace(/"/g, '\\"') + '"]')) return; // boshqa label allaqachon bog'lagan
      if (!ctrl.id) ctrl.id = "auto-fld-" + (++_autoFldId);
      label.setAttribute("for", ctrl.id);
    });
  }
  linkLabels();
  setTimeout(linkLabels, 300);   // dinamik (JS bilan) render qilingan formalar uchun

  // Boshlang'ich tilni qo'llash
  applyLang(getLang());
  mtFill(getLang());

  // Sahifa skripti dinamik kartalar yaratganidan keyin qayta tarjima qilish
  // (buxgalteriya.html, hisoblagichlar.html va boshqa hublar CATS.map orqali
  // kartalarni DOMContentLoaded ichida render qiladi)
  function rerunI18n() {
    if (getLang() !== "uz") { applyLang(getLang()); mtFill(getLang()); }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      // Bir kichik kechikish — sahifa skripti ham DOMContentLoaded'da render qilishi mumkin
      setTimeout(rerunI18n, 0);
      setTimeout(rerunI18n, 200);
    });
  } else {
    setTimeout(rerunI18n, 0);
    setTimeout(rerunI18n, 200);
  }

  // MutationObserver — keyinroq qo'shilgan kontent uchun
  // (faqat birinchi 5 soniya — performance uchun)
  if (typeof MutationObserver !== "undefined") {
    let pendingTimer = null;
    const obs = new MutationObserver(muts => {
      if (getLang() === "uz" || isApplying) return;
      // Yangi element qo'shildimi?
      let hasNew = false;
      for (const m of muts) {
        if (m.addedNodes && m.addedNodes.length > 0) {
          for (const n of m.addedNodes) {
            if (n.nodeType === 1 || n.nodeType === 3) { hasNew = true; break; }
          }
        }
        if (hasNew) break;
      }
      if (!hasNew) return;
      // Debounce
      if (pendingTimer) clearTimeout(pendingTimer);
      pendingTimer = setTimeout(rerunI18n, 120);
    });
    obs.observe(document.body, { childList: true, subtree: true });
    // Eslatma: observer butun sessiya davomida ishlaydi (isApplying bayrog'i o'z-o'zini
    // qayta-tarjima siklini to'sadi) — shunda kech render bo'lgan dinamik natijalar
    // (kalkulyator natijalari, modallar) ham RU/EN'da tarjima qilinadi.
  }

  // --- SEO kontent + FAQ (har vosita sahifasida) ---
  const CONTENT = {
    "pdf-compress.html": {
      uz: {
        intro: ["PDF kichraytirish vositasi hujjat hajmini sezilarli kamaytiradi — pochta orqali yuborish, saytga yuklash yoki messenjer limitlariga sig'dirish uchun ideal. Har bir sahifa qayta optimallashtirilib, fayl hajmi 50-80% gacha kamayadi.", "Fayl to'liq brauzeringizda qayta ishlanadi va hech qayerga yuborilmaydi. Siqish darajasini (kuchli, muvozanat yoki yuqori sifat) o'zingiz tanlaysiz va natijani darhol ko'rasiz."],
        faq: [{ q: "Sifat juda yomonlashadimi?", a: "Yo'q. 'Muvozanat' darajasi sifat va hajm o'rtasida eng yaxshi nisbatni beradi. Matn o'qiladigan, rasmlar tiniq qoladi. Kuchliroq siqish kerak bo'lsa darajani o'zgartiring." }, { q: "Fayl qayerga yuklanadi?", a: "Hech qayerga — butun jarayon sizning brauzeringizda kechadi, hujjat internetga chiqmaydi." }, { q: "Nega ba'zi PDF hajmi kamaymaydi?", a: "Agar PDF allaqachon siqilgan yoki faqat matndan iborat bo'lsa, hajm sezilarli kamaymasligi mumkin. Bunday holatda asl fayldan foydalaning." }, { q: "Parol bilan himoyalangan PDF ishlaydimi?", a: "Yo'q, avval parolni olib tashlashingiz kerak. Himoyalangan fayllar ochilmaydi." }, { q: "Nechta sahifa siqsa bo'ladi?", a: "Cheklov yo'q, lekin sahifa ko'p bo'lsa qayta ishlash biroz vaqt oladi." }]
      },
      ru: {
        intro: ["Сжатие PDF существенно уменьшает размер документа — идеально для отправки по почте, загрузки на сайт или вписывания в лимиты мессенджеров. Каждая страница оптимизируется, размер файла уменьшается на 50-80%.", "Файл полностью обрабатывается в браузере и никуда не отправляется. Вы сами выбираете уровень сжатия (сильное, баланс или высокое качество) и сразу видите результат."],
        faq: [{ q: "Сильно ли ухудшается качество?", a: "Нет. Уровень «Баланс» даёт лучшее соотношение качества и размера. Текст остаётся читаемым, изображения — чёткими. Для более сильного сжатия выберите другой уровень." }, { q: "Куда загружается файл?", a: "Никуда — весь процесс идёт в вашем браузере, документ не уходит в интернет." }, { q: "Почему некоторые PDF не уменьшаются?", a: "Если PDF уже сжат или состоит только из текста, размер может почти не измениться. В таком случае используйте исходный файл." }, { q: "Работает ли с защищёнными паролем PDF?", a: "Нет, сначала нужно снять пароль. Защищённые файлы не открываются." }, { q: "Сколько страниц можно сжать?", a: "Без ограничений, но при большом количестве страниц обработка займёт чуть больше времени." }]
      },
      en: {
        intro: ["PDF compression significantly reduces document size — ideal for emailing, uploading, or fitting into messenger limits. Each page is re-optimized, reducing file size by 50-80%.", "The file is processed entirely in your browser and never sent anywhere. You choose the compression level (strong, balanced, or high quality) and see results instantly."],
        faq: [{ q: "Does quality degrade much?", a: "No. The 'Balanced' level gives the best quality-to-size ratio. Text stays readable, images sharp. Choose a different level if you need stronger compression." }, { q: "Where is the file uploaded?", a: "Nowhere — the entire process happens in your browser, the document never leaves your device." }, { q: "Why don't some PDFs shrink?", a: "If a PDF is already compressed or text-only, size may not change much. In that case, use the original file." }, { q: "Does it work with password-protected PDFs?", a: "No, you need to remove the password first. Protected files won't open." }, { q: "How many pages can I compress?", a: "No limit, but processing many pages takes a bit more time." }]
      }
    },
    "ocr.html": {
      uz: {
        intro: ["OCR (Optical Character Recognition) vositasi rasm yoki skanerlangan PDF dagi yozuvni avtomatik o'qib, tahrir qilinadigan matnga aylantiradi. O'zbek (lotin va kiril), ingliz va rus tillarini qo'llab-quvvatlaydi.", "Hammasi sun'iy intellekt yordamida brauzeringizda bajariladi — rasm yoki hujjat hech qayerga yuborilmaydi. Aniqlangan matnni tahrirlash, nusxa olish yoki TXT fayl qilib yuklab olish mumkin."],
        faq: [{ q: "Qaysi tillarni o'qiy oladi?", a: "O'zbekcha (lotin), o'zbekcha (kiril), ingliz va rus tillari. Bir vaqtda bir nechta tilni tanlash mumkin — masalan o'zbek va rus aralash matn uchun." }, { q: "Rasmim internetga yuklanadimi?", a: "Yo'q. OCR to'liq brauzeringizda ishlaydi. Faqat birinchi marta til ma'lumotlari yuklab olinadi, shuning uchun internet kerak bo'ladi." }, { q: "Qanday rasmlarda yaxshi ishlaydi?", a: "Aniq, to'g'ri yo'naltirilgan va yuqori sifatli rasmlarda eng yaxshi natija beradi. Qiyshiq, xira yoki past sifatli rasmlarda aniqlik pasayadi." }, { q: "PDF ham ishlaydimi?", a: "Ha. PDF yuklasangiz, dastlabki 5 sahifa o'qiladi. Skanerlangan (rasm ko'rinishidagi) PDF lar uchun ayniqsa foydali." }, { q: "Aniqlik 100% bo'ladimi?", a: "Yo'q, OCR taxminiy natija beradi. Aniqlangan matnni tekshirib, kerak bo'lsa to'g'rilab oling — natija oynasi tahrirlanadi." }]
      },
      ru: {
        intro: ["OCR (Optical Character Recognition) — инструмент, который автоматически считывает текст с изображения или сканированного PDF и превращает его в редактируемый. Поддерживает узбекский (латиница и кириллица), английский и русский.", "Всё выполняется с помощью ИИ в браузере — изображение или документ никуда не отправляется. Распознанный текст можно редактировать, копировать или скачать как TXT-файл."],
        faq: [{ q: "Какие языки распознаёт?", a: "Узбекский (латиница), узбекский (кириллица), английский и русский. Можно выбрать сразу несколько языков — например, для смешанного узбекско-русского текста." }, { q: "Моё изображение уходит в интернет?", a: "Нет. OCR работает полностью в браузере. Только при первом запуске скачиваются языковые данные, поэтому нужен интернет." }, { q: "С какими изображениями работает лучше?", a: "Лучше всего с чёткими, правильно ориентированными и качественными изображениями. На наклонных, размытых или некачественных точность снижается." }, { q: "PDF тоже работает?", a: "Да. При загрузке PDF читаются первые 5 страниц. Особенно полезно для сканированных (изображённых) PDF." }, { q: "Будет ли 100% точность?", a: "Нет, OCR даёт приблизительный результат. Проверяйте распознанный текст и при необходимости исправляйте — окно результата редактируется." }]
      },
      en: {
        intro: ["OCR (Optical Character Recognition) automatically reads text from images or scanned PDFs and converts it into editable text. Supports Uzbek (Latin and Cyrillic), English and Russian.", "Everything runs via AI in your browser — the image or document is never sent anywhere. The recognized text can be edited, copied, or downloaded as a TXT file."],
        faq: [{ q: "Which languages can it read?", a: "Uzbek (Latin), Uzbek (Cyrillic), English and Russian. You can select multiple languages at once — useful for mixed Uzbek-Russian text, for example." }, { q: "Is my image uploaded to the internet?", a: "No. OCR runs entirely in your browser. Language data is downloaded only on first use, so internet is needed initially." }, { q: "What images work best?", a: "Clear, properly oriented, high-quality images give the best results. Tilted, blurry, or low-quality images reduce accuracy." }, { q: "Does PDF work too?", a: "Yes. When you upload a PDF, the first 5 pages are read. Especially useful for scanned (image-based) PDFs." }, { q: "Is accuracy 100%?", a: "No, OCR provides an approximate result. Review the recognized text and correct if needed — the result window is editable." }]
      }
    },
    "pdf-watermark.html": {
      uz: {
        intro: ["PDF suv belgisi vositasi hujjatning har sahifasiga matn yoki logotip (rasm) suv belgisi qo'shadi. Maxfiy hujjatlarni belgilash, mualliflik huquqini himoya qilish yoki brending uchun ishlatiladi.", "Shaffoflik, aylanish burchagi, o'lcham va joylashuvni sozlaysiz; o'ng tomonda birinchi sahifa ko'rinishini darhol ko'rasiz. Butun sahifani takrorlab to'ldirish (tile) rejimi ham bor. Hammasi brauzeringizda bajariladi."],
        faq: [{ q: "Matn yoki rasm — qaysi biri mumkin?", a: "Ikkalasi ham. 'Matn belgisi' rejimida istalgan yozuvni (masalan MAXFIY, NUSXA) qo'shasiz; 'Rasm / logo' rejimida PNG yoki JPG logotip yuklaysiz." }, { q: "Shaffoflikni sozlash mumkinmi?", a: "Ha, 5% dan 100% gacha. Och (kam shaffof) belgi hujjat ustida yengil ko'rinadi va asosiy matnni to'sib qo'ymaydi." }, { q: "Belgi barcha sahifalarga qo'yiladimi?", a: "Ha, suv belgisi hujjatning hamma sahifalariga bir xil qo'yiladi." }, { q: "Tile (takrorlash) nima?", a: "Belgini butun sahifa bo'ylab qatorlab takrorlaydi — nusxalashdan himoya qilish uchun kuchliroq usul." }, { q: "Fayl xavfsizmi?", a: "Ha, PDF brauzeringizda qayta ishlanadi va hech qayerga yuborilmaydi." }]
      },
      ru: {
        intro: ["Водяной знак PDF добавляет текстовый или графический (логотип) водяной знак на каждую страницу документа. Используется для маркировки конфиденциальных документов, защиты авторских прав или брендинга.", "Вы настраиваете прозрачность, угол поворота, размер и позицию; справа сразу видно превью первой страницы. Есть режим заполнения всей страницы повторяющимся узором (tile). Всё происходит в браузере."],
        faq: [{ q: "Текст или картинка — что можно использовать?", a: "И то, и другое. В режиме «Текстовый знак» добавляете любую надпись (например, СЕКРЕТНО, КОПИЯ); в режиме «Изображение / логотип» загружаете PNG или JPG." }, { q: "Можно настроить прозрачность?", a: "Да, от 5% до 100%. Светлый (полупрозрачный) знак мягко ложится поверх документа и не закрывает основной текст." }, { q: "Знак ставится на все страницы?", a: "Да, водяной знак одинаково применяется ко всем страницам документа." }, { q: "Что такое Tile (повтор)?", a: "Знак повторяется по всей странице в виде сетки — более надёжная защита от копирования." }, { q: "Файл в безопасности?", a: "Да, PDF обрабатывается в браузере и никуда не отправляется." }]
      },
      en: {
        intro: ["PDF watermark adds a text or logo (image) watermark to every page of the document. Used to mark confidential documents, protect copyright, or for branding.", "You adjust opacity, rotation angle, size and position; the right side shows a live preview of the first page. There's a tile mode that repeats the watermark across the whole page. Everything runs in your browser."],
        faq: [{ q: "Text or image — which one?", a: "Both. In 'Text watermark' mode you add any text (e.g., CONFIDENTIAL, COPY); in 'Image / logo' mode you upload a PNG or JPG." }, { q: "Can opacity be adjusted?", a: "Yes, from 5% to 100%. A faint (low-opacity) mark sits lightly over the document and doesn't block the main text." }, { q: "Is the mark on all pages?", a: "Yes, the watermark is applied uniformly to all pages." }, { q: "What is Tile (repeat)?", a: "It repeats the mark across the whole page in a grid — a stronger anti-copy protection." }, { q: "Is the file safe?", a: "Yes, PDF is processed in your browser and never sent anywhere." }]
      }
    },
    "password.html": {
      uz: {
        intro: ["Parol generatori hisoblaringiz uchun kuchli, taxmin qilib bo'lmaydigan parollar yaratadi. Uzunlik va belgilar turini — katta/kichik harf, raqam, maxsus belgi — o'zingiz tanlaysiz.", "Parol faqat sizning brauzeringizda, xavfsiz tasodifiy generator (crypto) yordamida hosil bo'ladi va hech qayerga yuborilmaydi."],
        faq: [{ q: "Yaratilgan parol qayerda saqlanadi?", a: "Hech qayerda — parol faqat sizning qurilmangizda hosil bo'ladi, biz uni ko'rmaymiz." }, { q: "Qanday parol kuchli hisoblanadi?", a: "Kamida 12–16 ta belgidan iborat, katta-kichik harf, raqam va belgilarni o'z ichiga olgan parol kuchli hisoblanadi." }, { q: "Har bir sayt uchun alohida parol kerakmi?", a: "Ha, har bir hisob uchun alohida parol ishlatish xavfsizlikni sezilarli oshiradi." }]
      },
      ru: {
        intro: ["Генератор паролей создаёт сильные, непредсказуемые пароли для ваших аккаунтов. Длину и типы символов — заглавные/строчные буквы, цифры, спецсимволы — выбираете вы сами.", "Пароль генерируется только в вашем браузере через безопасный криптографический генератор случайных чисел и никуда не отправляется."],
        faq: [{ q: "Где сохраняется сгенерированный пароль?", a: "Нигде — пароль создаётся только на вашем устройстве, мы его не видим." }, { q: "Какой пароль считается сильным?", a: "Минимум 12–16 символов, с заглавными и строчными буквами, цифрами и спецсимволами." }, { q: "Нужен ли отдельный пароль для каждого сайта?", a: "Да, отдельный пароль на каждый аккаунт значительно повышает безопасность." }]
      },
      en: {
        intro: ["Password generator creates strong, unpredictable passwords for your accounts. You choose the length and character types — uppercase/lowercase letters, digits, special characters.", "The password is generated only in your browser using a secure cryptographic random generator and never sent anywhere."],
        faq: [{ q: "Where is the generated password stored?", a: "Nowhere — the password is created only on your device, we never see it." }, { q: "What's a strong password?", a: "At least 12–16 characters including upper- and lowercase letters, numbers, and special symbols." }, { q: "Do I need a separate password for each site?", a: "Yes, using a unique password per account significantly increases security." }]
      }
    },
    "thumbnail.html": {
      uz: {
        intro: ["YouTube Thumbnail yuklab olish vositasi video havolasidan muqova rasmni to'liq sifatda yuklab oladi. Barcha mavjud o'lchamlar — HD (maxres) dan kichikgacha — ko'rsatiladi.", "Faqat video havolasini joylashtiring; rasm to'g'ridan-to'g'ri YouTube serveridan olinadi."],
        faq: [{ q: "Qaysi havolalar ishlaydi?", a: "youtube.com/watch?v=..., youtu.be/... va Shorts havolalari ishlaydi." }, { q: "HD thumbnail nega ba'zan yo'q?", a: "Ba'zi videolarda maxres (HD) versiya mavjud emas — bunday holda kichikroq o'lchamdan foydalaning." }, { q: "Foydalanish qonuniymi?", a: "Shaxsiy maqsadda foydalanish odatda muammosiz, lekin mualliflik huquqini hurmat qiling." }]
      },
      ru: {
        intro: ["Скачивание YouTube Thumbnail позволяет получить превью видео в максимальном качестве по ссылке. Показываются все доступные размеры — от HD (maxres) до малых.", "Просто вставьте ссылку на видео; изображение берётся напрямую с серверов YouTube."],
        faq: [{ q: "Какие ссылки работают?", a: "youtube.com/watch?v=..., youtu.be/... и ссылки Shorts." }, { q: "Почему иногда нет HD thumbnail?", a: "У некоторых видео нет maxres (HD) версии — используйте меньший размер." }, { q: "Это законно?", a: "Личное использование обычно не вызывает вопросов, но уважайте авторские права." }]
      },
      en: {
        intro: ["YouTube Thumbnail downloader fetches the cover image of any video in full quality by URL. All available sizes — from HD (maxres) down — are shown.", "Just paste the video link; the image is fetched directly from YouTube servers."],
        faq: [{ q: "Which URLs work?", a: "youtube.com/watch?v=..., youtu.be/... and Shorts links." }, { q: "Why is HD thumbnail sometimes missing?", a: "Some videos don't have a maxres (HD) version — use a smaller size in that case." }, { q: "Is this legal?", a: "Personal use is usually fine, but please respect copyright." }]
      }
    },
    "thumbnail-tester.html": {
      uz: {
        intro: ["Thumbnail sinovi yaratgan muqovangizni YouTube'da real ko'rinishida — bosh sahifa, qidiruv, yon panel va mobilda — sinab ko'rish imkonini beradi.", "Sarlavha, kanal nomi va davomiylik bilan birga qanday ko'rinishini ko'rib, eng yaxshi variantni tanlang — bu bosish darajasini (CTR) oshiradi."],
        faq: [{ q: "Nega thumbnail sinovi kerak?", a: "Tomoshabin avval kichik muqovani ko'radi; turli joylarda qanday ko'rinishini bilish yaxshiroq tanlovga yordam beradi." }, { q: "Rasm yuklanadimi?", a: "Yo'q, rasm faqat brauzeringizda ko'rsatiladi." }, { q: "Qaysi ko'rinish muhim?", a: "Ko'pchilik mobilda ko'radi — mobil ko'rinishga alohida e'tibor bering." }]
      },
      ru: {
        intro: ["Тест thumbnail позволяет проверить вашу обложку в реальном виде YouTube — на главной, в поиске, в боковой панели и на мобильном.", "Видя, как обложка смотрится вместе с заголовком, именем канала и длительностью, выбирайте лучший вариант — это повышает кликабельность (CTR)."],
        faq: [{ q: "Зачем нужен тест thumbnail?", a: "Зритель сначала видит маленькую обложку; знание, как она выглядит в разных местах, помогает сделать лучший выбор." }, { q: "Загружается ли изображение?", a: "Нет, изображение отображается только в вашем браузере." }, { q: "Какой вид важнее?", a: "Большинство смотрит с мобильного — уделите особое внимание мобильному виду." }]
      },
      en: {
        intro: ["Thumbnail tester lets you preview your cover in YouTube's real layout — home, search, sidebar, and mobile.", "Seeing how it looks with the title, channel name, and duration helps you choose the best version — improving click-through rate (CTR)."],
        faq: [{ q: "Why test thumbnails?", a: "Viewers see the small cover first; knowing how it looks in different places helps make a better choice." }, { q: "Is the image uploaded?", a: "No, it's only shown in your browser." }, { q: "Which view matters most?", a: "Most people watch on mobile — pay special attention to the mobile preview." }]
      }
    },
    "background-removal.html": {
      uz: {
        intro: ["Fon olib tashlash vositasi rasmdagi asosiy obyektni (odam, mahsulot) ajratib, fonni avtomatik olib tashlaydi va shaffof PNG qaytaradi.", "Hammasi sun'iy intellekt yordamida brauzeringizda bajariladi — rasmingiz hech qayerga yuborilmaydi."],
        faq: [{ q: "Natija qanday formatda?", a: "Shaffof fonli PNG — uni istalgan fon ustiga qo'yishingiz mumkin." }, { q: "Internet kerakmi?", a: "Birinchi marta AI modeli yuklab olinadi, shuning uchun internet kerak." }, { q: "Qanday rasmlarda yaxshi?", a: "Aniq obyektli (odam, mahsulot) rasmlarda eng yaxshi ishlaydi." }]
      },
      ru: {
        intro: ["Удаление фона выделяет главный объект на изображении (человек, продукт), автоматически убирает фон и возвращает прозрачный PNG.", "Всё выполняется с помощью ИИ в браузере — ваше изображение никуда не отправляется."],
        faq: [{ q: "В каком формате результат?", a: "PNG с прозрачным фоном — можно наложить на любой фон." }, { q: "Нужен ли интернет?", a: "При первом запуске скачивается AI-модель, поэтому интернет нужен." }, { q: "С какими изображениями работает лучше?", a: "Лучше всего с чёткими объектами (человек, продукт)." }]
      },
      en: {
        intro: ["Background removal isolates the main subject (person, product), automatically removes the background, and returns a transparent PNG.", "Everything runs via AI in your browser — your image is never sent anywhere."],
        faq: [{ q: "What format is the result?", a: "Transparent PNG — you can place it over any background." }, { q: "Is internet needed?", a: "The AI model is downloaded on first use, so internet is required initially." }, { q: "What images work best?", a: "Clear subjects (person, product) give the best results." }]
      }
    },
    "video-to-audio.html": {
      uz: {
        intro: ["Videodan MP3 vositasi videodan ovoz yo'lini ajratib, MP3 yoki WAV sifatida yuklab olish imkonini beradi.", "Konvertatsiya brauzeringizda bajariladi — video internetga yuklanmaydi. MP4, MOV, WebM, M4A va boshqa formatlar qo'llab-quvvatlanadi."],
        faq: [{ q: "Qaysi formatlar ishlaydi?", a: "Brauzer qo'llab-quvvatlaydigan formatlar: MP4, MOV, WebM, M4A, OGG." }, { q: "Sifat yo'qoladimi?", a: "WAV yo'qotishsiz, MP3 esa biroz siqilgan, lekin ixcham bo'ladi." }, { q: "Video yuklanadimi?", a: "Yo'q, hammasi brauzeringizda qoladi." }]
      },
      ru: {
        intro: ["Видео → Аудио извлекает звуковую дорожку из видео и позволяет скачать её как MP3 или WAV.", "Конвертация выполняется в браузере — видео не уходит в интернет. Поддерживаются MP4, MOV, WebM, M4A и другие форматы."],
        faq: [{ q: "Какие форматы работают?", a: "Все поддерживаемые браузером: MP4, MOV, WebM, M4A, OGG." }, { q: "Теряется ли качество?", a: "WAV — без потерь, MP3 — слегка сжатый, но компактный." }, { q: "Видео загружается?", a: "Нет, всё остаётся в вашем браузере." }]
      },
      en: {
        intro: ["This tool extracts the audio track from a video and lets you download it as MP3 or WAV.", "Conversion runs in your browser — the video is never uploaded. MP4, MOV, WebM, M4A, and other formats are supported."],
        faq: [{ q: "Which formats work?", a: "Any formats your browser supports: MP4, MOV, WebM, M4A, OGG." }, { q: "Is quality lost?", a: "WAV is lossless; MP3 is slightly compressed but compact." }, { q: "Is the video uploaded?", a: "No, everything stays in your browser." }]
      }
    },
    "audio-effects.html": {
      uz: {
        intro: ["Ovoz effektlari (voice changer) audio yoki videoga 18 xil effekt qo'shadi: echo, deep, robot, vinyl, lo-fi va boshqalar. Har bir effektning o'z sozlamalari bor.", "Effektni tanlasangiz darhol eshitasiz; yoqqanini MP3 yoki WAV qilib yuklab olasiz. Hammasi brauzeringizda ishlaydi."],
        faq: [{ q: "Effektni qanday eshitaman?", a: "Effekt tugmasini bossangiz, ovoz darhol o'sha effekt bilan ijro etiladi." }, { q: "Sozlamalarni o'zgartira olamanmi?", a: "Ha, har effektning o'z sliderlari bor (masalan Echo uchun Quantity va Strength)." }, { q: "Qanaqa fayllar bo'ladi?", a: "Audio (MP3, WAV, M4A) yoki video fayl yuklashingiz mumkin." }]
      },
      ru: {
        intro: ["Звуковые эффекты (voice changer) добавляют к аудио или видео 18 разных эффектов: эхо, deep, robot, vinyl, lo-fi и другие. У каждого эффекта свои настройки.", "Выбрав эффект — сразу слышите результат; понравившийся скачиваете как MP3 или WAV. Всё работает в браузере."],
        faq: [{ q: "Как услышать эффект?", a: "Нажмите кнопку эффекта — звук сразу проиграется с этим эффектом." }, { q: "Можно настроить параметры?", a: "Да, у каждого эффекта свои слайдеры (например, у Echo — Quantity и Strength)." }, { q: "Какие файлы можно загрузить?", a: "Аудио (MP3, WAV, M4A) или видеофайлы." }]
      },
      en: {
        intro: ["Audio effects (voice changer) adds 18 different effects to audio or video: echo, deep, robot, vinyl, lo-fi, and more. Each effect has its own settings.", "Click an effect to hear it instantly; download what you like as MP3 or WAV. Everything runs in your browser."],
        faq: [{ q: "How do I hear an effect?", a: "Click the effect button — the audio plays with that effect immediately." }, { q: "Can I adjust settings?", a: "Yes, each effect has its own sliders (e.g., Quantity and Strength for Echo)." }, { q: "What files can I upload?", a: "Audio (MP3, WAV, M4A) or video files." }]
      }
    },
    "tempmail.html": {
      uz: {
        intro: ["Vaqtinchalik pochta bir martalik email manzili beradi — spam, ro'yxatdan o'tish yoki tasdiqlash xatlari uchun shaxsiy pochtangizni bermasdan foydalaning.", "Manzilga kelgan xatlar shu yerda avtomatik ko'rinadi. Manzil vaqtinchalik va istalgan payt yangisini olishingiz mumkin."],
        faq: [{ q: "Manzil qancha ishlaydi?", a: "Vaqtinchalik — bir necha kun. Istalgan payt 'Yangi manzil' bilan yangisini oling." }, { q: "Xat yubora olamanmi?", a: "Yo'q, bu faqat qabul qilish (inbox) uchun." }, { q: "Maxfiymi?", a: "Bu ochiq vaqtinchalik xizmat — maxfiy yoki muhim xatlar uchun ishlatmang." }]
      },
      ru: {
        intro: ["Временная почта даёт одноразовый email-адрес — пользуйтесь для спама, регистрации или подтверждений, не раскрывая личную почту.", "Пришедшие письма автоматически появляются здесь. Адрес временный, и в любой момент можно получить новый."],
        faq: [{ q: "Сколько работает адрес?", a: "Временно — несколько дней. В любое время нажмите «Новый адрес» для получения нового." }, { q: "Можно ли отправлять письма?", a: "Нет, только приём (inbox)." }, { q: "Это конфиденциально?", a: "Это публичный временный сервис — не используйте для конфиденциальных или важных писем." }]
      },
      en: {
        intro: ["Temporary mail gives you a disposable email address — use it for spam, signups, or confirmations without sharing your real email.", "Incoming messages appear here automatically. The address is temporary, and you can get a new one anytime."],
        faq: [{ q: "How long does the address work?", a: "Temporary — a few days. Get a new one anytime with 'New address'." }, { q: "Can I send emails?", a: "No, inbox only." }, { q: "Is it private?", a: "This is a public temporary service — don't use it for confidential or important messages." }]
      }
    },
    "budget.html": {
      uz: {
        intro: ["Pul boshqaruvi kirim va xarajatlaringizni yozib borib, kunlik, haftalik va oylik hisobot olish imkonini beradi. Pulingiz qaysi kategoriyaga ketayotganini diagramma bilan ko'rsatadi.", "Barcha ma'lumot faqat sizning brauzeringizda saqlanadi; hisobotni PDF qilib yuklab olishingiz mumkin."],
        faq: [{ q: "Ma'lumotlarim boshqalarga ko'rinadimi?", a: "Yo'q — hammasi faqat shu qurilmada, brauzeringizda saqlanadi." }, { q: "Hisobotni saqlay olamanmi?", a: "Ha, 'PDF hisobot' tugmasi orqali tanlangan davr hisobotini yuklab olasiz." }, { q: "Qaysi valyutada?", a: "So'm (UZS) ko'rinishida." }]
      },
      ru: {
        intro: ["Управление финансами позволяет записывать доходы и расходы и получать ежедневный, недельный и месячный отчёт. Диаграмма показывает, на какие категории уходят деньги.", "Все данные хранятся только в вашем браузере; отчёт можно скачать в PDF."],
        faq: [{ q: "Видны ли мои данные другим?", a: "Нет — всё хранится только на этом устройстве, в вашем браузере." }, { q: "Можно ли сохранить отчёт?", a: "Да, кнопкой «PDF отчёт» скачаете отчёт за выбранный период." }, { q: "В какой валюте?", a: "В сумах (UZS)." }]
      },
      en: {
        intro: ["Money management lets you log income and expenses and see daily, weekly, and monthly reports. A chart shows which categories your money goes to.", "All data stays only in your browser; you can download the report as PDF."],
        faq: [{ q: "Can others see my data?", a: "No — everything stays only on this device, in your browser." }, { q: "Can I save the report?", a: "Yes, the 'PDF report' button downloads a report for the selected period." }, { q: "Which currency?", a: "Uzbek soum (UZS)." }]
      }
    },
    "todo.html": {
      uz: {
        intro: ["To-do ro'yxati bajariladigan ishlaringizni yozib, belgilab borish uchun oddiy va tez vosita. Ro'yxat avtomatik saqlanadi.", "Vazifalarni filtrlash, tahrirlash va PDF qilib yuklab olish mumkin. Hamma ma'lumot faqat brauzeringizda qoladi."],
        faq: [{ q: "Ro'yxat saqlanadimi?", a: "Ha, brauzeringizda avtomatik saqlanadi — sahifani yopib qaytsangiz ham qoladi." }, { q: "Boshqa qurilmada ko'rinadimi?", a: "Yo'q, ma'lumot faqat shu qurilmada saqlanadi." }, { q: "PDF qilsam bo'ladimi?", a: "Ha, 'PDF' tugmasi orqali ro'yxatni yuklab olasiz." }]
      },
      ru: {
        intro: ["Список задач — простой и быстрый инструмент для записи и отметки выполненных дел. Список сохраняется автоматически.", "Задачи можно фильтровать, редактировать и скачать в PDF. Все данные остаются только в вашем браузере."],
        faq: [{ q: "Сохраняется ли список?", a: "Да, автоматически в браузере — остаётся, даже если закроете страницу." }, { q: "Виден ли он на других устройствах?", a: "Нет, данные хранятся только на этом устройстве." }, { q: "Можно ли сохранить в PDF?", a: "Да, кнопкой «PDF» скачаете список." }]
      },
      en: {
        intro: ["To-do list — a simple, fast tool to write down tasks and check them off. The list saves automatically.", "Filter, edit, and download tasks as PDF. All data stays only in your browser."],
        faq: [{ q: "Is the list saved?", a: "Yes, automatically in your browser — stays even if you close the page." }, { q: "Visible on other devices?", a: "No, data stays only on this device." }, { q: "Can I save as PDF?", a: "Yes, the 'PDF' button downloads the list." }]
      }
    },
    "pomodoro.html": {
      uz: {
        intro: ["Pomodoro taymer 25 daqiqa diqqat bilan ishlash va qisqa tanaffuslar orqali samaradorlikni oshirish texnikasi. Har 4 sikldan keyin uzoq tanaffus beriladi.", "Ish va tanaffus vaqtlarini o'zingiz sozlaysiz; taymer tugaganda signal beradi va kunlik tugatilgan sikllarni sanaydi."],
        faq: [{ q: "Pomodoro nima?", a: "Vaqtni 25 daqiqalik diqqat bloklariga bo'lib ishlash texnikasi — charchamasdan ko'proq ish bajarishga yordam beradi." }, { q: "Vaqtlarni o'zgartira olamanmi?", a: "Ha, sozlamalardan ish va tanaffus davomiyligini o'zgartiring." }, { q: "Signal eshitiladimi?", a: "Ha, har bosqich tugaganda ovozli signal beriladi." }]
      },
      ru: {
        intro: ["Таймер Pomodoro — техника повышения продуктивности: 25 минут сфокусированной работы и короткие перерывы. После каждых 4 циклов — длинный перерыв.", "Время работы и перерывов настраивается; таймер подаёт сигнал по завершении и считает выполненные циклы за день."],
        faq: [{ q: "Что такое Pomodoro?", a: "Техника разделения времени на 25-минутные блоки фокусировки — помогает делать больше без усталости." }, { q: "Можно менять длительность?", a: "Да, в настройках измените длительность работы и перерывов." }, { q: "Звучит ли сигнал?", a: "Да, по окончании каждого этапа звучит звуковой сигнал." }]
      },
      en: {
        intro: ["Pomodoro timer — a productivity technique: 25 minutes of focused work with short breaks. After every 4 cycles, take a long break.", "Customize work and break durations; the timer signals when each ends and counts cycles completed today."],
        faq: [{ q: "What is Pomodoro?", a: "A technique of splitting time into 25-minute focus blocks — helps you do more without burnout." }, { q: "Can I change durations?", a: "Yes, adjust work and break lengths in settings." }, { q: "Is there a sound?", a: "Yes, an audio signal plays at the end of each phase." }]
      }
    },
    "youtube-nik.html": {
      uz: {
        intro: ["YouTube nik tekshirish vositasi kanal uchun tanlagan @nik (handle) hozir bo'sh yoki bandligini aniqlaydi. Nik kiriting — natija soniyalarda chiqadi, band bo'lsa bo'sh variantlar taklif qilinadi.", "Tekshiruv youtube.com/@nik sahifasi ochiq yoki yo'qligiga qarab ishlaydi. Bu rasmiy YouTube API emas, shuning uchun natija taxminiy — muhim hollarda havola orqali o'zingiz tasdiqlang."],
        faq: [{ q: "Nik bo'sh ekani aniqmi?", a: "\"Bo'sh\" — hozir hech qaysi kanal bu nikni ishlatmayapti degani. Lekin YouTube ba'zi brend yoki taqiqlangan nomlarni baribir bermasligi mumkin." }, { q: "Qanday nik tanlash mumkin?", a: "Handle 3–30 belgi bo'lib, faqat harf, raqam, nuqta, pastki chiziq va tire (_ - .) dan iborat bo'lishi kerak." }, { q: "Nikni qayerdan olaman?", a: "YouTube Studio → Sozlamalar → Kanal → Asosiy ma'lumot bo'limidan handle o'rnatasiz." }]
      },
      ru: {
        intro: ["Инструмент проверки ника YouTube определяет, свободен ли выбранный @ник (handle) для канала или уже занят. Введите ник — результат за секунды, а если занято, предложим свободные варианты.", "Проверка опирается на доступность страницы youtube.com/@ник. Это не официальный API YouTube, поэтому результат ориентировочный — в важных случаях подтвердите по ссылке."],
        faq: [{ q: "Точно ли ник свободен?", a: "\"Свободен\" — значит сейчас ни один канал его не использует. Но YouTube может не выдать некоторые брендовые или запрещённые имена." }, { q: "Какой ник можно выбрать?", a: "Handle — 3–30 символов: буквы, цифры, точка, подчёркивание и дефис (_ - .)." }, { q: "Где задать ник?", a: "YouTube Studio → Настройки → Канал → Основные данные." }]
      },
      en: {
        intro: ["The YouTube handle checker tells you whether the @handle you want for your channel is free or already taken. Type a name and get the result in seconds; if taken, we suggest free alternatives.", "The check relies on whether the youtube.com/@handle page exists. It is not the official YouTube API, so the result is approximate — verify via the link for important cases."],
        faq: [{ q: "Is 'free' guaranteed?", a: "'Free' means no channel currently uses this handle. YouTube may still withhold some brand or restricted names." }, { q: "What handles are allowed?", a: "A handle is 3–30 characters: letters, digits, period, underscore and hyphen (_ - .)." }, { q: "Where do I set the handle?", a: "YouTube Studio → Settings → Channel → Basic info." }]
      }
    },
    "qr-code.html": {
      uz: {
        intro: ["QR kod generatori havola, matn, Wi-Fi ma'lumotlari yoki telefon raqamidan QR kod yaratadi. Rang va o'lchamni sozlab, yuqori sifatli PNG qilib yuklab olasiz.", "Hamma narsa brauzeringizda hosil bo'ladi — hech qanday ma'lumot serverga yuborilmaydi. Wi-Fi QR kodini skanерlagan odam parolni qo'lda yozmasdan tarmoqqa ulanadi."],
        faq: [{ q: "QR kodni nima uchun ishlatish mumkin?", a: "Veb-sayt havolasi, tashrif qog'ozi, menyu, Wi-Fi ulanishi, to'lov havolasi va boshqa ko'p maqsadlar uchun." }, { q: "Rang va o'lchamni o'zgartira olamanmi?", a: "Ha — QR va fon rangini, o'lchamni (256 yoki 512px) hamda xatoga chidamlilik darajasini tanlaysiz." }, { q: "Ma'lumotim saqlanadimi?", a: "Yo'q, QR kod faqat sizning brauzeringizda yaratiladi." }]
      },
      ru: {
        intro: ["Генератор QR-кода создаёт QR из ссылки, текста, данных Wi-Fi или номера телефона. Настраиваете цвет и размер, скачиваете как качественный PNG.", "Всё генерируется в браузере — никакие данные не отправляются на сервер. Wi-Fi QR-код позволяет подключиться к сети без ручного ввода пароля."],
        faq: [{ q: "Для чего использовать QR-код?", a: "Ссылка на сайт, визитка, меню, подключение к Wi-Fi, ссылка на оплату и многое другое." }, { q: "Можно менять цвет и размер?", a: "Да — выберите цвет QR и фона, размер (256 или 512px) и уровень коррекции ошибок." }, { q: "Сохраняются ли мои данные?", a: "Нет, QR-код создаётся только в вашем браузере." }]
      },
      en: {
        intro: ["QR code generator creates a QR from a link, text, Wi-Fi info, or phone number. Customize color and size, download as high-quality PNG.", "Everything is generated in your browser — no data is sent to a server. A Wi-Fi QR lets people join your network without typing the password."],
        faq: [{ q: "What can I use QR codes for?", a: "Website link, business card, menu, Wi-Fi connection, payment link, and much more." }, { q: "Can I change color and size?", a: "Yes — choose QR and background color, size (256 or 512px), and error correction level." }, { q: "Are my data saved?", a: "No, the QR is generated only in your browser." }]
      }
    },
    "id-photo.html": {
      uz: {
        intro: ["Hujjat foto (ID Photo Maker) hujjatlar uchun standart rasm tayyorlaydi: AI fonni olib tashlaydi, siz oq, ko'k yoki qizil fon hamda standart o'lcham (3×4, 3.5×4.5 pasport, 4×6 yoki 2×2 dyuym) tanlaysiz.", "Yuzning kattaligi va vertikal joylashuvini slayderlar bilan sozlaysiz, so'ng tayyor fotoni 300 DPI sifatda yuklab olasiz. Hammasi brauzeringizda bajariladi."],
        faq: [{ q: "Qanday o'lchamlar bor?", a: "3×4 sm, 3.5×4.5 sm (pasport), 4×6 sm va 2×2 dyuym (AQSh viza). Barchasi 300 DPI da tayyorlanadi." }, { q: "Fon rangini tanlay olamanmi?", a: "Ha — oq, ko'k, qizil yoki och ko'k fonni tanlash mumkin." }, { q: "Rasmim qayerga yuboriladi?", a: "Hech qayerga — fon olib tashlash va rasm tayyorlash to'liq brauzeringizda kechadi." }, { q: "Yuz joylashuvini to'g'rilay olamanmi?", a: "Ha, 'Kattalik' va 'Vertikal joylashuv' slayderlari bilan yuzni kerakli holatga keltirasiz." }]
      },
      ru: {
        intro: ["Фото на документ (ID Photo Maker) готовит стандартное фото для документов: ИИ удаляет фон, вы выбираете белый, синий или красный фон и стандартный размер (3×4, 3,5×4,5 паспорт, 4×6 или 2×2 дюйма).", "Размер и вертикальное положение лица настраиваются слайдерами, затем скачиваете фото в 300 DPI. Всё выполняется в браузере."],
        faq: [{ q: "Какие размеры доступны?", a: "3×4 см, 3,5×4,5 см (паспорт), 4×6 см и 2×2 дюйма (виза США). Все в 300 DPI." }, { q: "Можно ли выбрать цвет фона?", a: "Да — белый, синий, красный или голубой." }, { q: "Куда отправляется моё фото?", a: "Никуда — удаление фона и подготовка фото полностью в браузере." }, { q: "Можно ли поправить положение лица?", a: "Да, слайдерами «Размер» и «Вертикальное положение» лицо приводится в нужное положение." }]
      },
      en: {
        intro: ["ID Photo Maker prepares standard photos for documents: AI removes the background, you choose white, blue, or red background and standard size (3×4, 3.5×4.5 passport, 4×6, or 2×2 inch).", "Adjust face size and vertical position with sliders, then download the finished photo at 300 DPI. Everything runs in your browser."],
        faq: [{ q: "What sizes are available?", a: "3×4 cm, 3.5×4.5 cm (passport), 4×6 cm, and 2×2 inch (US visa). All at 300 DPI." }, { q: "Can I choose the background color?", a: "Yes — white, blue, red, or light blue." }, { q: "Where is my photo sent?", a: "Nowhere — background removal and photo preparation happen entirely in your browser." }, { q: "Can I adjust face position?", a: "Yes, use the 'Size' and 'Vertical position' sliders to position the face correctly." }]
      }
    },
    "screen-recorder.html": {
      uz: {
        intro: ["Ekran yozib olish vositasi kompyuter ekraningizni yuqori sifatda video va ovoz bilan yozib oladi. Tizim (brauzer/tab) ovozi va mikrofon ovozini birga yozish mumkin — qo'llanma, dars yoki taqdimot yozish uchun ideal.", "Yozuv to'liq brauzeringizda bajariladi va hech qayerga yuklanmaydi. Yakunida tayyor videoni qurilmangizga yuklab olasiz."],
        faq: [{ q: "Tizim ovozini ham yozadimi?", a: "Ha. Ekran tanlash oynasida 'Tab ovozini ulashish' (Share tab audio) belgisini yoqsangiz, brauzerdagi ovoz ham yoziladi. Mikrofon esa alohida belgilanadi." }, { q: "Video qaysi formatda saqlanadi?", a: "O'zingiz tanlaysiz: MP4 (telefon va montaj dasturlari uchun keng mos) yoki WebM (yuqori sifat, kichik hajm). Agar brauzer MP4 yozishni qo'llab-quvvatlamasa, avtomatik WebM'ga o'tadi." }, { q: "Videom internetga yuklanadimi?", a: "Yo'q — butun jarayon faqat sizning qurilmangizda kechadi, hech narsa serverga yuborilmaydi." }, { q: "Telefonda ishlaydimi?", a: "Ekran yozish asosan kompyuter brauzerlarida (Chrome, Edge, Firefox) ishlaydi; mobil brauzerlar buni cheklab qo'yadi." }, { q: "Yuzimni (old kamera) ham qo'sha olamanmi?", a: "Ha — 'Old kamera' belgisini yoqsangiz, web-kamerangiz tasviri yozuvning burchagida doira shaklida ko'rsatiladi. Uni yozuv davomida sichqoncha bilan sudrab istalgan burchakka olib o'tishingiz mumkin. Qo'llanma va izohli videolar uchun qulay." }]
      },
      ru: {
        intro: ["Запись экрана позволяет записывать экран компьютера в высоком качестве со звуком. Можно записать одновременно системный звук (браузер/вкладка) и микрофон — идеально для туториалов, уроков или презентаций.", "Запись полностью выполняется в браузере и никуда не загружается. По окончании скачиваете готовое видео на своё устройство."],
        faq: [{ q: "Записывает ли системный звук?", a: "Да. В окне выбора экрана отметьте «Поделиться аудио вкладки» (Share tab audio) — звук браузера тоже запишется. Микрофон выбирается отдельно." }, { q: "В каком формате сохраняется видео?", a: "Вы выбираете: MP4 (хорошо подходит для телефонов и видеоредакторов) или WebM (высокое качество, малый размер). Если браузер не поддерживает MP4, автоматически используется WebM." }, { q: "Моё видео загружается в интернет?", a: "Нет — весь процесс происходит только на вашем устройстве, ничего не отправляется на сервер." }, { q: "Работает ли на телефоне?", a: "Запись экрана работает в основном в десктопных браузерах (Chrome, Edge, Firefox); мобильные браузеры это ограничивают." }, { q: "Можно добавить лицо (фронтальную камеру)?", a: "Да — включите опцию «Передняя камера», и изображение веб-камеры будет показано в углу записи в виде круга. Во время записи его можно перетаскивать мышью в любой угол. Удобно для туториалов и видео с комментариями." }]
      },
      en: {
        intro: ["Screen recorder captures your computer screen in high quality with audio. You can record system audio (browser/tab) and microphone together — ideal for tutorials, lessons, or presentations.", "Recording runs entirely in your browser and isn't uploaded anywhere. At the end, you download the finished video to your device."],
        faq: [{ q: "Does it record system audio?", a: "Yes. In the screen selection dialog, check 'Share tab audio' — browser audio will be recorded too. Microphone is selected separately." }, { q: "What format does the video save in?", a: "You choose: MP4 (broad compatibility with phones and editors) or WebM (high quality, smaller size). If the browser doesn't support MP4 recording, it auto-falls back to WebM." }, { q: "Is my video uploaded to the internet?", a: "No — the entire process happens only on your device, nothing is sent to a server." }, { q: "Does it work on phones?", a: "Screen recording mainly works in desktop browsers (Chrome, Edge, Firefox); mobile browsers restrict this." }, { q: "Can I add my face (front camera)?", a: "Yes — enable 'Front camera' and your webcam appears in a circle in the corner of the recording. You can drag it to any corner during recording. Great for tutorials and commented videos." }]
      }
    },
    "tezyoz-darslar.html": {
      uz: {
        intro: ["Klaviatura darslari yozishni noldan o'rganishga mo'ljallangan bosqichma-bosqich kurs. Boshlang'ich, O'rta va Yuqori darajalardan iborat — har biri o'nlab darsdan tashkil topgan, har bir dars esa 13 ta ketma-ket mini-mashqdan iborat.", "Ekran klaviaturasi har bir tugmani qaysi barmoq bilan bosish kerakligini rang bilan ko'rsatadi. To'g'ri bosilgan harf yashil, xato qizil rangda yonadi; oxirida aniqlik va WPM bo'yicha 1–3 yulduz beriladi. Hammasi brauzeringizda, bepul va ro'yxatdan o'tmasdan ishlaydi."],
        faq: [{ q: "Qaysi darajadan boshlay?", a: "Klaviaturada yangi bo'lsangiz Boshlang'ich darajadan boshlang — u barmoqlar joyini va asosiy qatorni o'rgatadi. Tajribangiz bo'lsa, O'rta darajaga o'ting." }, { q: "Har dars qancha vaqt oladi?", a: "Bitta dars o'rtacha 3–7 daqiqa. 13 ta mini-mashq ketma-ket olib boriladi va oxirida natija ko'rsatiladi." }, { q: "Aniqlik nima uchun muhim?", a: "Tezlikdan ko'ra aniqlik birinchi — xato bo'lmasligi mushak xotirasini to'g'ri shakllantiradi. Tez tezlik o'zi keladi. 98%+ aniqlik 3 yulduz beradi." }, { q: "Caps Lock yoqilsa nima bo'ladi?", a: "Tizim avtomatik ogohlantiradi — yuqorida qizil banner chiqib, Caps Lock yoqilganini eslatadi." }, { q: "Qaysi qurilmada ishlaydi?", a: "Klaviatura kerak bo'lgan kompyuter va planshetlarda eng yaxshi. Telefon ekrani uchun jismoniy klaviatura tavsiya etiladi." }]
      },
      ru: {
        intro: ["Уроки клавиатуры — пошаговый курс для обучения слепой печати с нуля. Курс состоит из Начального, Среднего и Продвинутого уровней — в каждом десятки уроков, а каждый урок включает 13 последовательных мини-упражнений.", "Экранная клавиатура цветом показывает, какой палец должен нажимать каждую клавишу. Правильно набранная буква подсвечивается зелёным, ошибочная — красным; в конце выставляется 1–3 звезды по точности и WPM. Всё работает в браузере, бесплатно и без регистрации."],
        faq: [{ q: "С какого уровня начать?", a: "Если вы новичок — начните с Начального уровня, он учит расположению пальцев и основному ряду. С опытом переходите на Средний." }, { q: "Сколько занимает один урок?", a: "В среднем 3–7 минут. 13 мини-упражнений идут друг за другом, в конце показывается результат." }, { q: "Почему важна точность?", a: "Точность важнее скорости — отсутствие ошибок правильно формирует мышечную память. Скорость придёт сама. Точность 98%+ даёт 3 звезды." }, { q: "Что будет, если включён Caps Lock?", a: "Система автоматически предупреждает — сверху появляется красный баннер с напоминанием." }, { q: "На каких устройствах работает?", a: "Лучше всего на компьютерах и планшетах с клавиатурой. Для телефонов рекомендуется физическая клавиатура." }]
      },
      en: {
        intro: ["Keyboard lessons — a step-by-step course for learning touch typing from scratch. The course has Beginner, Intermediate and Advanced levels — each with dozens of lessons, and each lesson consists of 13 sequential mini-exercises.", "The on-screen keyboard shows which finger should press each key by color. Correctly typed letters glow green, errors red; at the end you get 1–3 stars based on accuracy and WPM. Everything runs in your browser, free and without registration."],
        faq: [{ q: "Which level should I start with?", a: "If you're new to typing — start with Beginner level; it teaches finger positions and the home row. If experienced, jump to Intermediate." }, { q: "How long does each lesson take?", a: "On average 3–7 minutes. 13 mini-exercises run consecutively, with results shown at the end." }, { q: "Why is accuracy important?", a: "Accuracy comes before speed — avoiding mistakes builds correct muscle memory. Speed will follow naturally. 98%+ accuracy earns 3 stars." }, { q: "What if Caps Lock is on?", a: "The system detects it automatically — a red banner appears at the top reminding you." }, { q: "What devices does it work on?", a: "Best on computers and tablets with a keyboard. For phones, a physical keyboard is recommended." }]
      }
    },
    "tezyoz-test.html": {
      uz: {
        intro: ["Tezlik testi 15, 30 yoki 60 soniya ichida qancha so'z yoza olishingizni o'lchaydi — so'z/daqiqa (WPM), belgi/daqiqa (CPM), aniqlik va xato soni bilan. O'zbekcha (lotin va kiril), ingliz hamda rus tillarida.", "Test boshlanishi bilan kerakli matn ekranda paydo bo'ladi; vaqt birinchi harfdan boshlanadi. Yakunida sizning darajangiz — Boshlovchidan Pro'gacha — zamonaviy belgi bilan ko'rsatiladi. Test cheksiz marta ishlatiladi va istalgan vaqtda Tab tugmasi bilan qaytadan boshlanadi."],
        faq: [{ q: "WPM nima va qancha bo'lsa yaxshi?", a: "WPM — so'z/daqiqa. O'rtacha foydalanuvchi 30–40 WPM yozadi; 60+ tez, 80+ professional darajada hisoblanadi." }, { q: "Aniqlik qanday hisoblanadi?", a: "To'g'ri terilgan belgilar sonini umumiy bosilgan tugmalarga bo'lib chiqariladi. 95%+ — yaxshi natija." }, { q: "Qaysi tilda sinovdan o'tay?", a: "O'zbekcha (lotin), O'zbekcha (kiril), English va Русский — 4 ta til o'rtasida tanlash mumkin." }, { q: "Test natijasi saqlanadimi?", a: "Yo'q — har test mustaqil. Mashq bo'lib o'tgan vaqtdagi yutuqlarni Klaviatura darslari saqlaydi." }, { q: "Backspace ishlatish hisoblanadi?", a: "Ha — orqaga qaytib xatoni to'g'rilashingiz mumkin, lekin aniqlikka ta'sir qiladi." }]
      },
      ru: {
        intro: ["Тест скорости измеряет, сколько слов вы можете напечатать за 15, 30 или 60 секунд — со словами в минуту (WPM), знаками в минуту (CPM), точностью и количеством ошибок. Доступен на узбекском (латиница и кириллица), английском и русском.", "При старте теста на экране появляется текст; время начинается с первой буквы. По окончании ваш уровень — от Новичка до Pro — показывается современным значком. Тест можно проходить бесконечно, клавиша Tab перезапускает его в любой момент."],
        faq: [{ q: "Что такое WPM и какой результат хороший?", a: "WPM — слов в минуту. Средний пользователь печатает 30–40 WPM; 60+ — быстро, 80+ — профессиональный уровень." }, { q: "Как считается точность?", a: "Количество правильно набранных символов делится на общее число нажатий. 95%+ — хороший результат." }, { q: "На каком языке проходить?", a: "На выбор 4 языка: Узбекский (латиница), Узбекский (кириллица), English и Русский." }, { q: "Сохраняются ли результаты?", a: "Нет — каждый тест независим. Достижения по урокам сохраняет раздел \"Уроки клавиатуры\"." }, { q: "Можно ли использовать Backspace?", a: "Да — можно вернуться и исправить ошибку, но это влияет на точность." }]
      },
      en: {
        intro: ["Speed test measures how many words you can type in 15, 30, or 60 seconds — with words per minute (WPM), characters per minute (CPM), accuracy, and error count. Available in Uzbek (Latin and Cyrillic), English and Russian.", "When the test starts, the text appears on screen; time begins with the first keystroke. At the end, your level — from Beginner to Pro — is shown with a modern badge. The test can be taken unlimited times and restarted anytime with Tab."],
        faq: [{ q: "What is WPM and what's a good score?", a: "WPM — words per minute. Average users type 30–40 WPM; 60+ is fast, 80+ is professional level." }, { q: "How is accuracy calculated?", a: "Correctly typed characters divided by total keystrokes. 95%+ is a good result." }, { q: "Which language should I take it in?", a: "Choose from 4: Uzbek (Latin), Uzbek (Cyrillic), English and Русский." }, { q: "Are results saved?", a: "No — each test is independent. Achievements over time are saved in Keyboard Lessons." }, { q: "Can I use Backspace?", a: "Yes — you can go back and fix mistakes, but it affects accuracy." }]
      }
    },
    "tezyoz-samolyot.html": {
      uz: {
        intro: ["Samolyot — so'z bombardimon o'yini. O'ngdan kelayotgan samolyotlar ustidagi so'zni tez yozing — raketa bilan portlatib yo'q qiling. Chap chegaradan o'tib ketsa shaharga bomba tashlaydi va jon kamayadi (jami 5 jon).", "3 daraja (Oson/Normal/Ekspert), 6 ta samolyot turi (oddiy/jet/bombardimonchi/yashirin/vertolyot/boss), 5 ta power-up, 4 ta day/night palette, 5 ta ob-havo, 6 ta hikoya missiyasi, kunlik chaqiriq, Top 10 reyting, XP/Level tizimi, 8 ta pilot avatar va PNG sertifikat eksporti. Hammasi brauzerda offlayn ishlaydi."],
        faq: [
          { q: "Qanday o'ynaladi?", a: "Yozishni boshlang — eng yaqin mos so'z avtomatik nishonga olinadi va har harfga raketa otadi. So'zni to'liq tering — samolyot portlaydi va ball beradi. Chap chegaradan o'tib ketsa shaharga bomba tashlaydi va jonni yo'qotasiz." },
          { q: "Samolyot turlari nima farq qiladi?", a: "🛩 Oddiy — standart. 🚀 Reaktiv — tez, qisqa so'z, kam ball. 🛬 Bombardimonchi — sekin, uzun so'z, ×3 ball. ✈ Yashirin — yarim ko'rinmas, ×5 ball. 🚁 Vertolyot — joyida turadi, ×2 ball. 👑 Boss — 2 so'z ketma-ket, ×8 ball." },
          { q: "Power-up samolyotlar nima beradi?", a: "❄ Slow-mo — 4 sek vaqt sekinlashadi. ♥ Yurakcha — +1 jon. ◉ Qalqon — keyingi xato bloklanadi. ⚡ Energiya — 6 sek ×3 ball. 💥 Atom — ekrandagi BARCHA samolyotlarni portlatadi." },
          { q: "Hikoya rejimi va Kunlik chaqiriq?", a: "Hikoya — 6 ta mission ketma-ket qulflanadi (Tongdagi patrul → Bulutli kun → Shomgi otish → Yomg'irli tun → Vertolyot to'lqini → Boss). Kunlik chaqiriq — har kuni bir xil 15 samolyot hammaga, kuniga 1 marta." },
          { q: "Top 10 Reytingga qanday kiraman?", a: "Oddiy rejimda (hikoya/daily emas) yuqori ball oling. Difficulty bo'yicha top 10'ga tushsa — ism kiritish so'raladi. Reyting local storage'da saqlanadi." },
          { q: "XP va Level qanday oshadi?", a: "XP = ball/2 + level×10 + aniqlik bonus (≥90% → +50). Level oshish chegaralari: Lv 2 = 100 XP, Lv 5 = ~975, Lv 10 = ~9,000. Har o'yindan XP olasiz." },
          { q: "Sozlamalarda nimalar bor?", a: "Bomba ko'rsatkichi rangi (4), Grafika sifati, Maslahatlar, Adaptiv qiyinlik, Vibration, Vaqt (Tong/Kun/Shom/Tun), Ob-havo (Tiniq/Bulutli/Yomg'ir/Bo'ron/Tuman), SFX/Musiqa sliderlari, BGM trek (4 ta uslub)." },
          { q: "Drill mode (sekin harflar mashqi) nima?", a: "Statistika modalida 26 ta harf heatmap'ini ko'rasiz — har birining tezligi. Eng sekin 6 ta harf qizil. \"Sustlovchilarni mashq qilish\" tugmasi shaxsiy mashq yaratadi — faqat shu sekin harflar bilan boshlanadigan so'zlar." },
          { q: "Sertifikat (PNG) qanday yuklab olinadi?", a: "Statistika modalini oching va pastdagi \"Sertifikat (PNG)\" tugmasini bosing. Shaxsiy ismingiz, leveli, eng yuqori ball va boshqa statistika bilan PNG fayl yuklab olinadi (samolyot-sertifikat-[ismingiz].png)." },
          { q: "Klaviatura yorliqlar?", a: "ESC — pauza. Yozishni boshlang — eng yaqin so'z avtomatik nishonga olinadi. Tankning otishi avtomatik (har harfga). Backspace — kerak emas (faqat to'g'ri tering)." },
          { q: "Mobil qurilmada qanday o'ynaladi?", a: "Mobil qurilmada ekranga teging — nativ klaviatura ochiladi. Vibration sozlamasi yoqilgan bo'lsa, samolyot urilganda tebranadi. Grafika sifatini \"Past\" qilib qo'ying — telefonda silliqroq ishlaydi." },
          { q: "Ma'lumotlarim qaerda saqlanadi?", a: "Barcha sozlamalar, statistika, ball rekordlari, profile, reyting va story progress lokal brauzerda (localStorage) saqlanadi. Boshqa qurilmaga ko'chmaydi. Brauzer keshini tozalasangiz — barchasi o'chiriladi." }
        ]
      },
      ru: {
        intro: ["Samolyot — игра-стрелялка по словам. Слова на самолётах справа уничтожаются набором — танк стреляет ракетами. Если самолёт пересечёт левую границу, бомбит город и теряете жизнь (всего 5)."],
        faq: [
          { q: "Как играть?", a: "Начните печатать — ближайшее подходящее слово автоматически берётся на прицел, ракета стреляет за каждую букву. Если слово достигнет левого края — теряете жизнь." },
          { q: "Какие типы самолётов?", a: "Обычный, Реактивный (быстрый), Бомбардировщик (×3 очков), Скрытый (×5), Вертолёт (×2), Босс (×8)." },
          { q: "Power-up?", a: "❄ Слоу-мо 4с, ♥ +1 жизнь, ◉ Щит, ⚡ ×3 очков 6с, 💥 Атом (все самолёты)." },
          { q: "Сюжет и Ежедневный?", a: "6 миссий + одинаковые 15 самолётов всем по дате (раз в день)." },
          { q: "Что в настройках?", a: "Цвет прицела, графика, среда, погода, BGM-трек (4)." },
          { q: "Сертификат?", a: "В Статистике — кнопка PNG. С вашим именем и уровнем." },
          { q: "Где сохраняется?", a: "Локально в браузере, без синхронизации." }
        ]
      },
      en: {
        intro: ["Samolyot — word bombardier game. Type the words on planes coming from the right to destroy them. If a plane crosses the left boundary, it bombs the city and you lose a life (5 total)."],
        faq: [
          { q: "How to play?", a: "Start typing — the nearest matching word is auto-targeted and the tank fires per letter. If it reaches the left edge — you lose a life." },
          { q: "Plane types?", a: "Normal, Jet (fast), Bomber (×3), Stealth (×5), Heli (×2), Boss (×8)." },
          { q: "Power-ups?", a: "❄ Slow-mo 4s, ♥ +1 life, ◉ Shield, ⚡ ×3 score 6s, 💥 Atom (all planes)." },
          { q: "Story and Daily?", a: "6 missions + same 15 planes daily (once per day)." },
          { q: "Settings?", a: "Bombsight color, graphics, time, weather, BGM track (4)." },
          { q: "Certificate?", a: "In Stats — PNG button. With your name and level." },
          { q: "Where saved?", a: "Locally in browser, no sync." }
        ]
      }
    },
    "tezyoz-mergan.html": {
      uz: {
        intro: ["Mergan — yozish ko'nikmasini snayper tematikasi orqali oshirishga mo'ljallangan typing o'yini. Snayper scope (linza) orqali ekranda paydo bo'lgan harf yoki so'zlarni tez yozib otib tushirasiz. Har nishonga 25 soniyagacha vaqt, 3 ta jon — uzun so'zlar ko'proq ball beradi.", "3 daraja (Boshlovchi/Mergan/Snayper), 6 ta hikoya missiyasi, kunlik chaqiriq, 4 ta power-up nishon (slow-mo, +jon, qalqon, ×3 ball), Top 10 reyting, XP/Level tizimi, 8 ta avatar, 8 ta crosshair temasi va PNG sertifikat eksporti bilan to'liq mukammal o'yin. Hammasi brauzerda, offlayn ishlaydi."],
        faq: [
          { q: "Qanday o'ynaladi?", a: "Ekrandagi snayper scope ichida nishonlar paydo bo'ladi — har birida harf yoki so'z bor. Klaviaturada bosgan harfingiz scope markazidagi nishonga to'g'ri keladigan bo'lsa, otish ovozi chiqadi va nishon parchalanadi. So'zlarni boshidan oxirigacha tez yozish ko'proq ball beradi." },
          { q: "Daraja qaysisini tanlay?", a: "Boshlovchi — yakka harflar bilan boshlanadi (qo'lni qizdirish uchun). Mergan — 4–6 harfli so'zlar. Snayper — 6+ harfli uzun so'zlar va eng tez tezlik. Yangi foydalanuvchilarga Boshlovchidan boshlash tavsiya etiladi." },
          { q: "Hikoya rejimi va Kunlik chaqiriq nima?", a: "Hikoya — 6 ta mission ketma-ket qulflanadi (O'rmon razvedka, Bahor kuni, Sahro shomi, Sahro qishi, Shahar tunida, Boss). Kunlik chaqiriq esa har kuni hammaga bir xil 10 ta nishon (sana asosida seed). Kuniga faqat 1 marta o'ynaladi." },
          { q: "Power-up nishonlari qanday ishlaydi?", a: "Tasodifiy ~5% ehtimol bilan paydo bo'ladi. ❄ Sekinlashtirgich — 4 sek vaqt sekin, ♥ Yurakcha — +1 jon, ◉ Qalqon — keyingi xato bloklanadi, ⚡ Energiya — 6 sek davomida ×3 ball. Soxta nishonlarni urmang — jazo bo'ladi." },
          { q: "Top 10 Reyting va Level qanday?", a: "Oddiy rejimda olingan ball difficulty bo'yicha Top 10 ga tushishi mumkin — ism kiritish so'raladi. Har o'yindan XP olasiz (ball/2 + level×10 + aniqlik bonus). Level oshganda yangi crosshair temalari ochiladi (Lv 3 da Kahrabo, Lv 20 da Oltin)." },
          { q: "Sertifikat (PNG) eksport qiladi?", a: "Ha — Statistika modali pastida \"📥 Sertifikat (PNG)\" tugmasi bor. PNG fayl shaxsiy ismingiz, leveli, eng yuqori ball, aniqlik va boshqa statistika bilan yaratiladi. Fayl nomi: mergan-sertifikat-[ismingiz].png" },
          { q: "Sozlamalarda nimalar bor?", a: "Reticle stili (Mil-dot/Duplex/Faqat nuqta), Crosshair temasi (8 ta), Recoil kuchi, Maslahatlar, Muhit (O'rmon/Sahro/Shahar), Vaqt (Kun/Shom/Tun), Til (O'zbekcha/English), Vibration, SFX ovozi, Musiqa ovozi, BGM trek (G'arb/Elektronik/Tinch/Dramatik)." },
          { q: "Klaviatura yorliqlari?", a: "ESC — pauza. SHIFT — zoom darajasi (4×/6×/8×). Markaziy harf yoki so'zni yozing. Mobil qurilmada ekranga tegsangiz nativ klaviatura ochiladi yoki pastdagi 📋 tugma orqali." },
          { q: "Ma'lumotlarim qaerda saqlanadi?", a: "Barcha sozlamalar, statistika, ball rekordlari va profile shu brauzerda lokal (localStorage) saqlanadi. Boshqa qurilmaga ko'chmaydi. Brauzer keshini tozalasangiz — barcha ma'lumotlar o'chiriladi." }
        ]
      },
      ru: {
        intro: ["Mergan — типинг-игра в стиле снайпера. Через снайперский прицел (scope) уничтожайте появляющиеся буквы и слова, быстро набирая их. До 25 секунд на каждую цель, 3 жизни — длинные слова дают больше очков.", "3 уровня (Новичок/Мерган/Снайпер), 6 сюжетных миссий, ежедневный вызов, 4 типа бонусных целей, Топ-10 рейтинг, система XP/Уровней, 8 аватаров, 8 тем прицела и экспорт PNG-сертификата. Всё работает в браузере, оффлайн."],
        faq: [
          { q: "Как играть?", a: "В снайперском прицеле появляются цели — на каждой буква или слово. Набирайте на клавиатуре, попадая в центр прицела — цель уничтожается. Чем быстрее набираете слова — тем больше очков." },
          { q: "Какой уровень выбрать?", a: "Новичок — одиночные буквы для разминки. Мерган — слова 4–6 букв. Снайпер — длинные слова 6+ и максимальная скорость. Новичкам — начинать с Новичка." },
          { q: "Что такое сюжет и ежедневный вызов?", a: "Сюжет — 6 миссий последовательно открываются (Лес, Весна, Закат, Зима, Город, Босс). Ежедневный вызов — одинаковые 10 целей всем по дате. 1 раз в день." },
          { q: "Как работают бонусные цели?", a: "Появляются с шансом ~5%. ❄ Замедление 4с, ♥ +1 жизнь, ◉ Щит на одну ошибку, ⚡ ×3 очков 6с. Не стреляйте по поддельным — штраф." },
          { q: "Топ-10 и Уровень?", a: "В обычном режиме высокий счёт попадает в Топ-10 по сложности. За каждую игру XP (счёт/2 + уровень×10 + бонус точности). С ростом уровня открываются новые темы прицела." },
          { q: "Экспорт сертификата (PNG)?", a: "Да — в модалке Статистика внизу кнопка \"📥 Сертификат (PNG)\". PNG с вашим именем, уровнем, рекордом, точностью. Имя файла: mergan-sertifikat-[ваше_имя].png" },
          { q: "Что в настройках?", a: "Стиль прицела, тема прицела (8), сила отдачи, подсказки, среда (Лес/Пустыня/Город), время (День/Закат/Ночь), язык, вибрация, SFX, музыка, BGM-трек (Вестерн/Электро/Тихо/Драма)." },
          { q: "Горячие клавиши?", a: "ESC — пауза. SHIFT — зум прицела (4×/6×/8×). На мобильном — нажмите на экран, откроется клавиатура." },
          { q: "Где хранятся данные?", a: "Всё локально в браузере (localStorage). Не синхронизируется. Очистка кэша удалит все данные." }
        ]
      },
      en: {
        intro: ["Mergan — a sniper-themed typing game. Through the sniper scope, destroy appearing letters and words by typing them quickly. Up to 25 seconds per target, 3 lives — longer words give more points.", "3 levels (Beginner/Mergan/Sniper), 6 story missions, daily challenge, 4 power-up targets, Top 10 leaderboard, XP/Level system, 8 avatars, 8 crosshair themes, and PNG certificate export. Everything works in browser, offline."],
        faq: [
          { q: "How to play?", a: "Targets appear inside the sniper scope — each with a letter or word. Type the letter on keyboard, the target in the center of the scope is destroyed. The faster you type words — the more points you get." },
          { q: "Which level to choose?", a: "Beginner — single letters for warm-up. Mergan — 4–6 letter words. Sniper — long 6+ letter words and max speed. Start with Beginner if new." },
          { q: "Story mode and Daily challenge?", a: "Story — 6 missions unlock sequentially (Forest, Spring, Dusk, Winter, City, Boss). Daily challenge — same 10 targets to everyone based on today's date. Once per day." },
          { q: "How do power-up targets work?", a: "Appear with ~5% chance. ❄ Slow-mo 4s, ♥ +1 life, ◉ Shield (blocks next miss), ⚡ ×3 score 6s. Don't shoot fake targets — penalty." },
          { q: "Top 10 leaderboard and Level?", a: "In normal mode, high score qualifies for Top 10 by difficulty. Each game earns XP (score/2 + level×10 + accuracy bonus). New crosshair themes unlock as level grows." },
          { q: "Export PNG certificate?", a: "Yes — in Statistika modal, bottom \"📥 Sertifikat (PNG)\" button. PNG with your name, level, top score, accuracy. File name: mergan-sertifikat-[your_name].png" },
          { q: "What's in settings?", a: "Reticle style, crosshair theme (8), recoil strength, hints, environment (Forest/Desert/City), time (Day/Dusk/Night), language, vibration, SFX, music, BGM track (Western/Electronic/Calm/Dramatic)." },
          { q: "Shortcuts?", a: "ESC — pause. SHIFT — zoom (4×/6×/8×). On mobile — tap screen, native keyboard opens." },
          { q: "Where is data stored?", a: "Everything locally in browser (localStorage). Doesn't sync. Cache clear deletes all data." }
        ]
      }
    },
    "tezyoz-attack.html": {
      uz: {
        intro: ["Typing Attack — yozish ko'nikmasini o'yin shaklida oshirishga mo'ljallangan arkade o'yini. So'zlar yon tomondan kelib hujum qiladi; siz ularni yozib tank o'qi bilan yo'q qilasiz. So'z tankka yetib kelsa — tank portlaydi va jondan biri yo'qoladi (jami 5 jon).", "Uchta daraja: Oson (qisqa 2–5 harfli so'zlar), Normal (4–7) va Ekspert (6+). Har daraja uchun rekord alohida saqlanadi. O'zbekcha va inglizcha 2000+ so'zli baza har gal yangi so'zlar chiqishini ta'minlaydi. Pauza uchun Esc tugmasi."],
        faq: [{ q: "Qanday o'ynaladi?", a: "Yozishni boshlang — eng yaqin mos so'z avtomatik nishonga olinadi va har harfga tank o'q otadi. So'zni to'liq tering, u portlaydi va sizga ball beradi." }, { q: "Ball qanday to'planadi?", a: "Har so'z uchun: uzunlik × 5 + joriy daraja × 2. Uzun so'zlar ko'p ball beradi; daraja har 200 balldan oshadi va spawn tezligi ortadi." }, { q: "Daraja qaysisini tanlay?", a: "Boshlash uchun Normal. Tezligingiz past bo'lsa Oson, professional bo'lsangiz Ekspert — bu daraja eng uzun so'zlarni beradi." }, { q: "Rekord qayerda saqlanadi?", a: "Brauzeringizda (localStorage) — har daraja uchun alohida. Boshqa qurilmaga ko'chmaydi." }, { q: "O'yin asabga tegishi mumkinmi?", a: "Cap 7 ta so'zdan oshmaydi va tezlik darajaga qarab oz-ozdan ortadi, shu sababli o'yin asabga tegmaydi. Bezgan bo'lsangiz Esc orqali pauza qiling." }]
      },
      ru: {
        intro: ["Typing Attack — аркадная игра для развития навыков печати. Слова атакуют сбоку; вы уничтожаете их набором текста — танк стреляет за каждую букву. Если слово достигает танка — он взрывается и теряете одну жизнь (всего 5 жизней).", "Три уровня: Лёгкий (короткие слова 2–5 букв), Нормальный (4–7) и Эксперт (6+). Рекорд для каждого уровня сохраняется отдельно. База на 2000+ узбекских и английских слов обеспечивает разнообразие. Esc — пауза."],
        faq: [{ q: "Как играть?", a: "Начните печатать — ближайшее подходящее слово автоматически берётся на прицел, и танк стреляет за каждую букву. Допишите слово до конца — оно взорвётся и принесёт очки." }, { q: "Как начисляются очки?", a: "За каждое слово: длина × 5 + текущий уровень × 2. Длинные слова приносят больше очков; уровень повышается каждые 200 очков, скорость появления растёт." }, { q: "Какой уровень выбрать?", a: "Для старта — Нормальный. Если печатаете медленно — Лёгкий, если профи — Эксперт, на нём самые длинные слова." }, { q: "Где сохраняется рекорд?", a: "В браузере (localStorage) — отдельно для каждого уровня. На другие устройства не переносится." }, { q: "Игра не раздражает?", a: "Лимит 7 слов одновременно, скорость растёт постепенно — поэтому игра не вызывает стресса. Если устали — Esc для паузы." }]
      },
      en: {
        intro: ["Typing Attack — an arcade game to improve typing skills. Words attack from the side; you destroy them by typing — the tank fires per letter. If a word reaches the tank, it explodes and you lose a life (5 lives total).", "Three levels: Easy (short 2–5 letter words), Normal (4–7), and Expert (6+). Records are saved per level. 2000+ Uzbek and English words ensure variety. Press Esc to pause."],
        faq: [{ q: "How to play?", a: "Start typing — the nearest matching word is automatically targeted and the tank fires per letter. Complete the word and it explodes, earning you points." }, { q: "How are points scored?", a: "Per word: length × 5 + current level × 2. Longer words give more points; level increases every 200 points, spawn rate goes up." }, { q: "Which level to choose?", a: "Start with Normal. If slow — Easy; if pro — Expert (longest words)." }, { q: "Where are records saved?", a: "In browser (localStorage) — separately per level. Not synced across devices." }, { q: "Is the game stressful?", a: "Cap is 7 simultaneous words and speed grows gradually — so it's not stressful. Press Esc to pause if tired." }]
      }
    },
    "tezyoz-typerix.html": {
      uz: {
        intro: ["Typerix — Tetris uslubidagi so'z o'yini. So'zlar taxtaga pastga tushib, bir-birining ustiga taxlanadi. Vazifa: so'zni yozib bartaraf qilish. So'z to'liq yozilsa — bloklar yo'q bo'ladi, yuqoridagi so'zlar pastga tushadi.", "3 daraja: Oson (qisqa 2–4 harfli so'zlar, sekin), Normal (3–5, me'yoriy), Ekspert (4–6, tez). Daraja har 6 ta so'zdan keyin ortadi. Ketma-ket so'zlarni tezyozish kombo va qo'shimcha ball beradi. Pauza uchun Esc."],
        faq: [{ q: "Qanday o'ynaladi?", a: "Taxtada bir necha so'z bir vaqtda tushadi — siz xohlagan birini yoza boshlang. To'g'ri yozilgan harflar yashil bo'ladi, so'z to'liq yozilgach yo'q bo'lib ketadi." }, { q: "Kombo nima?", a: "Ketma-ket so'zlarni adashmasdan yozsangiz kombo o'sadi. 3+ kombo qo'shimcha ball beradi. Xato yozsangiz kombo nolga tushadi." }, { q: "O'yin qachon tugaydi?", a: "Bloklar taxtaning yuqori qatoriga yetib kelsa — o'yin tugaydi. Demak, so'zlarni tez yozish lozim." }, { q: "Rekord qayerda saqlanadi?", a: "Brauzeringizda — har daraja uchun alohida saqlanadi." }, { q: "Backspace ishlatib bo'ladimi?", a: "Ha, noto'g'ri yozsangiz Backspace bilan orqaga qaytarib to'g'rilashingiz mumkin." }]
      },
      ru: {
        intro: ["Typerix — игра со словами в стиле Tetris. Слова падают на поле и складываются друг на друга. Задача: набрать слово, чтобы убрать его. При полном наборе блоки исчезают, а верхние слова опускаются.", "3 уровня: Лёгкий (короткие 2–4 буквы, медленно), Нормальный (3–5, средне), Эксперт (4–6, быстро). Уровень растёт каждые 6 слов. Последовательный набор даёт комбо и бонусные очки. Esc — пауза."],
        faq: [{ q: "Как играть?", a: "На поле падает несколько слов сразу — начните печатать любое. Правильно набранные буквы становятся зелёными, при полном вводе слово исчезает." }, { q: "Что такое комбо?", a: "Если печатаете слова подряд без ошибок — комбо растёт. 3+ комбо даёт бонусные очки. Ошибка сбрасывает комбо до нуля." }, { q: "Когда игра заканчивается?", a: "Когда блоки достигают верхнего ряда поля — игра окончена. Значит, нужно печатать быстро." }, { q: "Где сохраняется рекорд?", a: "В браузере — отдельно для каждого уровня." }, { q: "Можно использовать Backspace?", a: "Да, при ошибке можно вернуться назад и исправить." }]
      },
      en: {
        intro: ["Typerix — a Tetris-style word game. Words fall onto the board and stack on each other. Your task: type the word to clear it. Once typed fully, blocks disappear and words above drop down.", "3 levels: Easy (short 2–4 letter words, slow), Normal (3–5, medium), Expert (4–6, fast). Level rises every 6 words. Sequential fast typing gives combo and bonus points. Esc to pause."],
        faq: [{ q: "How to play?", a: "Several words fall on the board at once — start typing any one. Correctly typed letters turn green; when fully typed the word disappears." }, { q: "What is combo?", a: "If you type consecutive words without errors, combo grows. 3+ combo gives bonus points. A mistake resets it to zero." }, { q: "When does the game end?", a: "When blocks reach the top row — game over. So you need to type fast." }, { q: "Where are records saved?", a: "In your browser — separately per level." }, { q: "Can I use Backspace?", a: "Yes, you can go back and fix mistakes." }]
      }
    },
    "tezyoz-keytower.html": {
      uz: {
        intro: ["KeyTower yangi tipdagi typing va aniqlik o'yini: sohil bo'yidagi kran krayoni yuqorida chap-o'ngga BOTIQSIMON harakatlanib turadi (xuddi haqiqiy kran kabi pendulum). Krayoning ustidagi harfni 60 sekund ichida bosing, krayo pastga tushadi va Tower'ga taxlanadi.", "Aniq markazlashtirib qo'ysangiz Perfect bonus, kombo va qo'shimcha ball olasiz. Krayo chetga tushib qolsa hech narsa bo'lmaydi, hech qanday jazo yo'q. Yagona yutqazish sharti, 60 sekund vaqt tugab qolishi. Daraja har 6 ta krayodan keyin oshadi va krayo tezroq harakatlanadi. Quvnoq chiptune musiqasi bilan."],
        faq: [{ q: "Qanday o'ynaladi?", a: "Yuqoridagi krayo chap-o'ngga botiqsimon harakatlanadi. Krayoning ustidagi harfni 60 sekund ichida bosing, krayo pastga tushib Tower'ga qo'shiladi. Aniq markazlashtirishga harakat qiling, Perfect bonus olasiz." }, { q: "Qachon yutqazaman?", a: "FAQAT vaqt tugaganda yutqazasiz. Krayoni chetga tashlab yuborsangiz ham, hech narsa bo'lmaydi, faqat yangi krayo paydo bo'ladi va vaqt qaytadan 60 sekunddan boshlanadi." }, { q: "Perfect nima?", a: "Krayoni avvalgisining ustiga aniq markazlashtirib qo'ysangiz Perfect bonus olasiz: 50+ qo'shimcha ball va kombo o'sadi. Perfectni qancha ko'p ketma-ket olsangiz, kombo bonusi shuncha katta bo'ladi." }, { q: "Daraja qanday ortadi?", a: "Har 6 ta krayo qurilgandan keyin daraja oshadi. Krayolar tezroq harakatlanadi va harflar to'plami kengayadi (boshda A-S-D-F-J-K-L, keyin A-Z gacha barcha harflar)." }, { q: "Botiqsimon harakat nima?", a: "Krayo ip uchida osilib, kran trolleysi tepada harakatlanganda, pastdagi ip va krayo pendulum kabi botiqsimon (curved arc) chiziq bilan tebranadi. Bu real fizika va kran ishlashini taqlid qiladi." }, { q: "Musiqani o'chirsa bo'ladimi?", a: "Ha, o'ng yuqori burchakda speaker tugmasi bor. Bir marta bosib musiqani yoqasiz yoki o'chirasiz, holati brauzerda saqlanadi." }, { q: "Caps Lock yoqilsa nima bo'ladi?", a: "Tizim avtomatik aniqlaydi: yuqorida ogohlantirish chiqadi va Caps Lock o'chirilmaguncha harflar qabul qilinmaydi, krayo esa harakatda davom etadi." }]
      },
      ru: {
        intro: ["KeyTower — игра нового типа на скорость и точность набора: крюк подъёмного крана сверху качается влево-вправо ДУГОЙ (как настоящий маятник). Нажмите букву над крюком за 60 секунд — крюк опускается и груз ставится на башню.", "Если поставите точно по центру — Perfect-бонус, комбо и доп. очки. Если груз упал мимо — ничего страшного, без штрафа. Единственное условие проигрыша — закончилось 60 секунд. Уровень растёт каждые 6 грузов, крюк качается быстрее. Под бодрую chiptune-музыку."],
        faq: [{ q: "Как играть?", a: "Крюк сверху качается влево-вправо дугой. Нажмите букву над крюком за 60 секунд — груз опустится в башню. Старайтесь ставить точно по центру для Perfect-бонуса." }, { q: "Когда я проигрываю?", a: "ТОЛЬКО когда закончится время. Если груз упал мимо башни — ничего страшного, появится новый, а время начнётся заново с 60 секунд." }, { q: "Что такое Perfect?", a: "Если поставите груз точно по центру предыдущего — получаете Perfect-бонус: +50 очков и комбо растёт. Чем больше Perfect подряд, тем выше бонус." }, { q: "Как растёт уровень?", a: "Каждые 6 грузов уровень повышается. Крюк качается быстрее, и набор букв расширяется (сначала A-S-D-F-J-K-L, потом A-Z)." }, { q: "Что за дуга движения?", a: "Крюк висит на верёвке: когда тележка крана сверху движется, верёвка и груз снизу качаются маятником по дугообразной траектории. Это имитация реальной физики крана." }, { q: "Можно ли отключить музыку?", a: "Да, в правом верхнем углу есть кнопка динамика. Нажмите для вкл/выкл, состояние сохраняется в браузере." }, { q: "Что будет, если включён Caps Lock?", a: "Система автоматически определяет: сверху появляется предупреждение и буквы не принимаются до отключения Caps Lock, а крюк продолжает качаться." }]
      },
      en: {
        intro: ["KeyTower is a new type of typing and accuracy game: a crane hook above swings LEFT-RIGHT in a CURVED ARC (like a real pendulum). Press the letter above the hook within 60 seconds — the hook drops and the load stacks on the tower.", "Center the load precisely and get a Perfect bonus, combo, and extra points. If the load falls off the side, nothing happens, no penalty. The only way to lose is to run out of 60 seconds. Level rises every 6 loads, with the hook swinging faster. With cheerful chiptune music."],
        faq: [{ q: "How to play?", a: "The hook above swings left-right in an arc. Press the letter above the hook within 60 seconds — the load drops onto the tower. Try to center it precisely for the Perfect bonus." }, { q: "When do I lose?", a: "ONLY when time runs out. If the load falls off the side, nothing happens — a new one appears and timer resets to 60 seconds." }, { q: "What is Perfect?", a: "If you center the load exactly over the previous one, you get a Perfect bonus: +50 points and combo grows. The more Perfects in a row, the bigger the combo bonus." }, { q: "How does the level increase?", a: "Every 6 loads, the level rises. The hook swings faster and the letter set expands (starting with A-S-D-F-J-K-L, then full A-Z)." }, { q: "What is the curved motion?", a: "The hook hangs on a rope: when the crane trolley moves above, the rope and load below swing in a pendulum-like curved arc. It simulates real crane physics." }, { q: "Can I turn off the music?", a: "Yes, there's a speaker button in the top right. Click to toggle, state saved in browser." }, { q: "What if Caps Lock is on?", a: "The system detects it automatically: a warning appears at top and keys aren't accepted until Caps Lock is off; the hook keeps swinging." }]
      }
    },
    "tezyoz-labirint.html": {
      uz: {
        intro: ["Labirint — klaviaturada tez yozish ko'nikmasini sinash uchun yaratilgan typing adventure o'yini. Har gal tasodifiy yaratiladigan labirintda qahramon avtomatik yuradi va yo'l ayrilishlarida to'xtaydi — har yo'l ustida so'z ko'rinadi. Xohlagan yo'l so'zini yozsangiz qahramon o'sha tomonga buriladi va yuradi.", "Labirint ichida sandiqlar (oltin), qalblar (jon), kalitlar va dushmanlar bor. Kalitlarni topib eshiklarni oching va labirint chetidagi PORTALga yeting. Daraja oshgani sayin labirint kattalashadi, ranglar va tema o'zgaradi, dushmanlar ko'payadi. Vaqt va to'plangan narsalarga qarab 1–3 yulduz olasiz. Eng yuqori ball va daraja brauzeringizda saqlanadi."],
        faq: [{ q: "Qanday o'ynaladi?", a: "Qahramon avtomatik yuradi. Yo'l ayrilishida to'xtaydi va har yo'l ustida so'z chiqadi. Siz xohlagan yo'l so'zini yozsangiz qahramon o'sha tomonga buriladi. Sandiq, kalit, eshik yoki dushman uchratsangiz, ularning so'zini yozib bajarish kerak." }, { q: "Maqsad nima?", a: "Labirintning chetidagi PORTALga (oq porlash bilan ✦ belgi) yetib borish. Yo'l-yo'lakay sandiqlardan oltin to'plang, kalitlar bilan eshiklarni oching." }, { q: "Kalit va eshik qanday ishlaydi?", a: "Kalitni sandiq kabi ochasiz — uning so'zini yozsangiz olasiz. Eshikka yetganda agar kalitingiz bo'lsa eshik so'zini yozish bilan ochiladi. Aks holda eshikni ocha olmaysiz va boshqa yo'l qidirasiz." }, { q: "Yulduzlar qanday hisoblanadi?", a: "Daraja tugaganda vaqt va to'plagan narsalarga qarab 1, 2 yoki 3 yulduz beriladi. Tezroq tugatsangiz — ko'proq yulduz." }, { q: "Dushman bilan jang qanday?", a: "Dushman uchragan xonada qahramon to'xtaydi. Dushman boshidagi so'zni yozsangiz uni mag'lub etasiz va ball olasiz." }, { q: "Daraja oshganda nima o'zgaradi?", a: "Labirint kattalashadi, tema rangi o'zgaradi (tosh, yashil g'or, muz, olov, billur), dushmanlar va xazinalar ko'payadi. So'zlar ham qiyinroq bo'lib boradi." }, { q: "Caps Lock yoqilsa nima bo'ladi?", a: "Tizim avtomatik aniqlaydi: yuqorida sariq ogohlantirish chiqadi va Caps Lock o'chirilmaguncha harflar qabul qilinmaydi." }, { q: "Musiqani o'chirsa bo'ladimi?", a: "Ha — musiqa default o'chiq. Pastki o'ng burchakdagi tugmadan yengilroq ambient musiqani yoqasiz yoki o'chirasiz; holati brauzerda saqlanadi." }]
      },
      ru: {
        intro: ["Labirint — приключенческая typing-игра для тренировки быстрого набора. В случайно генерируемом лабиринте герой движется автоматически и останавливается на развилках — над каждым проходом появляется слово. Напечатайте слово нужного прохода — герой повернёт в ту сторону.", "В лабиринте есть сундуки (золото), сердца (жизни), ключи и враги. Найдите ключи, откройте двери и доберитесь до ПОРТАЛА на краю лабиринта. С ростом уровня лабиринт увеличивается, цвета и тема меняются, врагов становится больше. По времени и собранному получите 1–3 звезды. Лучший результат и уровень сохраняются."],
        faq: [{ q: "Как играть?", a: "Герой движется автоматически. На развилке останавливается, над каждым проходом появляется слово. Напечатайте нужное — герой повернёт. Сундук, ключ, дверь или враг — для взаимодействия напечатайте их слово." }, { q: "Какая цель?", a: "Добраться до ПОРТАЛА на краю лабиринта (белое свечение со значком ✦). По пути собирайте золото из сундуков, открывайте двери ключами." }, { q: "Как работают ключи и двери?", a: "Ключ открываете как сундук — печатаете его слово. У двери, если есть ключ, набираете слово двери и открываете. Иначе ищите другой путь." }, { q: "Как считаются звёзды?", a: "В конце уровня — 1, 2 или 3 звезды по времени и собранному. Чем быстрее — тем больше звёзд." }, { q: "Как сражаться с врагом?", a: "В комнате с врагом герой останавливается. Напечатайте слово над врагом — победите его и получите очки." }, { q: "Что меняется с ростом уровня?", a: "Лабиринт увеличивается, тема меняется (камень, зелёная пещера, лёд, огонь, кристалл), врагов и сокровищ больше. Слова сложнее." }, { q: "Что если включён Caps Lock?", a: "Система определяет автоматически: сверху появляется жёлтое предупреждение и буквы не принимаются." }, { q: "Можно ли отключить музыку?", a: "Да — музыка по умолчанию выключена. Кнопкой в правом нижнем углу включаете лёгкую ambient-музыку; состояние сохраняется." }]
      },
      en: {
        intro: ["Labirint — a typing adventure game to train fast keyboard skills. In a randomly generated maze, the hero moves automatically and stops at forks — a word appears above each path. Type the word of your chosen path and the hero turns that way.", "The maze contains chests (gold), hearts (lives), keys and enemies. Find keys, open doors and reach the PORTAL at the maze edge. As level grows, the maze enlarges, colors and theme change, more enemies appear. You earn 1–3 stars based on time and collected items. High score and level saved in browser."],
        faq: [{ q: "How to play?", a: "Hero moves automatically. At a fork, stops and shows a word over each path. Type the desired one — hero turns. For chest, key, door or enemy — type their word to interact." }, { q: "What's the goal?", a: "Reach the PORTAL at the maze edge (white glow with ✦). Collect gold from chests along the way, open doors with keys." }, { q: "How do keys and doors work?", a: "Open a key like a chest — type its word. At a door with a key in hand, type the door's word to open. Otherwise find another path." }, { q: "How are stars counted?", a: "At level end — 1, 2 or 3 stars based on time and collected items. Finish faster for more stars." }, { q: "How to fight an enemy?", a: "Hero stops in a room with an enemy. Type the word above the enemy to defeat them and earn points." }, { q: "What changes with level?", a: "Maze enlarges, theme color changes (stone, green cave, ice, fire, crystal), more enemies and treasures. Words get harder." }, { q: "What if Caps Lock is on?", a: "System detects automatically: yellow warning at top and letters aren't accepted." }, { q: "Can I turn off the music?", a: "Yes — music is off by default. Bottom-right button toggles ambient music; state saved." }]
      }
    },
    "tezyoz-zuma.html": {
      uz: {
        intro: ["Zuma — klassik arkada o'yinining typing (yozish mashqi) ko'rinishi. Spiral yo'l bo'ylab harfli rangli sharlar zanjiri teshik tomon yuradi. Klaviaturadan harf bossangiz — eng oldindagi (teshikka eng yaqin) shu harfli shar darhol portlaydi va ball qo'shiladi. Bir xil harf 3 tasi yonma-yon to'planib qolsa, ular zanjir reaksiyasi bilan kombo portlashda yo'q bo'ladi.", "O'yin sizga klaviaturadagi harflar joyini tez topish va aniq bosish mashqini beradi — touch typing va reaksiya ko'nikmasini bir vaqtda rivojlantiradi. Hammasi brauzeringizda ishlaydi, ro'yxatdan o'tish kerak emas. Zamonaviy dizayn, ovoz effektlari va o'yinga mos fon musiqasi bor; eng yuqori ball brauzeringizda saqlanadi."],
        faq: [{ q: "Qanday o'ynaladi?", a: "Sharlarda harf yozilgan. Klaviaturadan o'sha harfni bossangiz — eng oldindagi (teshikka eng yaqin) o'sha harfli shar darhol portlaydi. Maqsad: sharlar zanjirini teshikka yetib bormasdan tugatish." }, { q: "Kombo nima?", a: "Sharlarni siz portlatganingizdan keyin orqadagi sharlar bo'shliqni to'ldirib oldinga suriladi. Agar shu harakatda 3 ta bir xil harf yonma-yon tushib qolsa — ular yana portlaydi, kombo o'sadi va ball ko'paytiruvchisi oshadi." }, { q: "Qachon yutqazaman?", a: "Sharlar zanjirining boshi yo'lning oxiridagi teshikka yetib borsa o'yin tugaydi. Teshik atrofidagi qizil porlash xavf yaqinlashganini bildiradi — tez yozing." }, { q: "Yo'q harfni bossam nima bo'ladi?", a: "Zanjirda yo'q harfni bosish xato sanaladi, aniqlik foizi pasayadi va kombo nolga tushadi. Shu sababli faqat ekranda ko'ringan harflarni bosing." }, { q: "Qaysi tillarni qo'llab-quvvatlaydi?", a: "O'zbekcha (lotin) va English alifbosi tanlovi mavjud. Boshlash ekranida tilni tanlang. Daraja oshgani sayin yangi harflar qo'shiladi." }, { q: "Caps Lock yoqilsa nima bo'ladi?", a: "Tizim avtomatik aniqlaydi: yuqorida sariq ogohlantirish chiqadi va Caps Lock o'chirilmaguncha harflar qabul qilinmaydi." }, { q: "Musiqani o'chirsa bo'ladimi?", a: "Ha, pastki o'ng burchakdagi tugma orqali fon musiqasini yoqasiz yoki o'chirasiz; holati brauzerda saqlanadi." }]
      },
      ru: {
        intro: ["Zuma — typing-версия классической аркады. По спиральной дорожке к воронке движется цепочка цветных шаров с буквами. Нажмите букву на клавиатуре — ближайший к воронке шар с этой буквой мгновенно взрывается и приносит очки. Если рядом окажутся 3 одинаковых шара, они взрываются цепочкой комбо.", "Игра тренирует быстрый поиск букв на клавиатуре и точное нажатие — одновременно развивает touch typing и реакцию. Всё работает в браузере, регистрация не нужна. Современный дизайн, звуковые эффекты и подходящая фоновая музыка; рекорд сохраняется в браузере."],
        faq: [{ q: "Как играть?", a: "На шарах написаны буквы. Нажмите букву на клавиатуре — ближайший к воронке шар с этой буквой взорвётся. Цель: разбить всю цепочку до того, как она достигнет воронки." }, { q: "Что такое комбо?", a: "После взрыва шары сзади заполняют пустоту и двигаются вперёд. Если при этом 3 одинаковые буквы окажутся рядом — они снова взрываются, комбо растёт и множитель очков увеличивается." }, { q: "Когда я проигрываю?", a: "Когда голова цепочки шаров доходит до воронки в конце дорожки. Красное свечение вокруг воронки сигнализирует об опасности — печатайте быстрее." }, { q: "Что будет, если нажать неверную букву?", a: "Это считается ошибкой, точность снижается и комбо обнуляется. Поэтому жмите только видимые на экране буквы." }, { q: "Какие языки поддерживаются?", a: "Узбекский (латиница) и English. Язык выбирается на стартовом экране. С ростом уровня добавляются новые буквы." }, { q: "Что если включён Caps Lock?", a: "Система определяет автоматически: сверху появляется жёлтое предупреждение и буквы не принимаются до отключения Caps Lock." }, { q: "Можно ли отключить музыку?", a: "Да, кнопка в правом нижнем углу включает/выключает фоновую музыку; состояние сохраняется." }]
      },
      en: {
        intro: ["Zuma — a typing version of the classic arcade. A chain of colored balls with letters moves along a spiral track toward a hole. Press a letter on your keyboard — the ball closest to the hole with that letter instantly explodes and earns points. If 3 same letters end up next to each other, they chain-explode for combo bonus.", "The game trains finding letters quickly on the keyboard and pressing accurately — simultaneously developing touch typing and reaction. Everything runs in browser, no registration. Modern design, sound effects and matching background music; high score saved in browser."],
        faq: [{ q: "How to play?", a: "Balls have letters on them. Press that letter on the keyboard — the ball closest to the hole with that letter explodes. Goal: clear the chain before it reaches the hole." }, { q: "What is combo?", a: "After you explode balls, the back balls fill the gap moving forward. If 3 same letters end up adjacent during this, they explode again, combo grows and score multiplier increases." }, { q: "When do I lose?", a: "When the head of the ball chain reaches the hole at the end. Red glow around the hole signals danger — type faster." }, { q: "What if I press a wrong letter?", a: "It counts as an error, accuracy drops and combo resets to zero. So press only letters visible on screen." }, { q: "What languages are supported?", a: "Uzbek (Latin) and English. Choose on start screen. New letters added as level increases." }, { q: "What if Caps Lock is on?", a: "System detects it automatically: yellow warning appears at top and letters aren't accepted until Caps Lock is off." }, { q: "Can I turn off the music?", a: "Yes, button in bottom-right toggles background music; state is saved." }]
      }
    },
    "tezyoz-vanish.html": {
      uz: {
        intro: ["Vanish, yo'qoluvchi so'zlar, diqqat va touch typing ko'nikmasini sinaydigan noyob mashq. Ekranda matn paydo bo'ladi, lekin siz yozgan har bir harf darhol ko'zdan g'oyib bo'ladi. Faqat oldinda nima borligini ko'rasiz, o'zingiz yozganingizni esa eslab qolishingiz kerak.", "Darajalar yo'q, har gal tasodifiy yangi matn chiqadi. O'zbekcha yoki inglizcha tilini tanlang va boshlang. Yakunida WPM, aniqlik va ball ko'rinadi; eng yuqori ball brauzeringizda saqlanadi. Hammasi bepul, offlayn va ro'yxatdan o'tmasdan ishlaydi."],
        faq: [{ q: "Nega harflar yo'qoladi?", a: "Bu mashqning asosiy g'oyasi: ko'z bilan ko'rmasdan, faqat barmoq xotirasiga va matnni eslab qolish ko'nikmasiga tayanib yozishni o'rgatish. Klaviaturaga qaramay yozish (touch typing) malakasini chuqurlashtiradi." }, { q: "Darajalar bormi?", a: "Yo'q. Har gal o'ynaganingizda tasodifiy yangi matn tanlanadi va bazada yuzlab xilma-xil matn mavjud. Bu siz har sessiyada yangi mashq ko'rinishini ta'minlaydi." }, { q: "Xato yozsam nima bo'ladi?", a: "Xato bo'lsa qisqa tovush eshitiladi va aniqlik foizi pasayadi. Backspace bilan orqaga qaytib to'g'rilashingiz mumkin, lekin xato kombo va aniqlikni kamaytiradi." }, { q: "Caps Lock yoqilsa nima bo'ladi?", a: "Tizim avtomatik aniqlaydi: yuqorida ogohlantirish chiqadi va Caps Lock o'chirilmaguncha klaviaturadan harf qabul qilinmaydi." }, { q: "Ball qanday hisoblanadi?", a: "Ball matn uzunligi, tezligingiz (WPM) va aniqlik foizining kombinatsiyasi. Tez va xatosiz yozsangiz, kombo o'sadi va ball yanada oshadi. Eng yuqori ball brauzeringizda saqlanadi." }]
      },
      ru: {
        intro: ["Vanish — уникальная тренировка исчезающих слов, внимания и touch typing. На экране появляется текст, но каждая буква, которую вы набираете, мгновенно исчезает. Видно только то, что впереди, а набранное нужно запомнить.", "Уровней нет, каждый раз случайный новый текст. Выберите узбекский или английский и начните. В конце показываются WPM, точность и счёт; лучший результат сохраняется в браузере. Всё бесплатно, офлайн и без регистрации."],
        faq: [{ q: "Почему буквы исчезают?", a: "В этом и суть тренировки: набирать вслепую, опираясь на мышечную память пальцев и навык запоминания текста. Углубляет навык touch typing." }, { q: "Есть ли уровни?", a: "Нет. При каждой игре выбирается случайный новый текст из базы с сотнями вариантов. Это обеспечивает разнообразие в каждой сессии." }, { q: "Что будет при ошибке?", a: "Прозвучит короткий звук и точность снизится. Backspace позволяет вернуться и исправить, но ошибка снижает комбо и точность." }, { q: "Что если включён Caps Lock?", a: "Система определяет автоматически: сверху появляется предупреждение и буквы не принимаются до отключения Caps Lock." }, { q: "Как считается счёт?", a: "Счёт — комбинация длины текста, скорости (WPM) и точности. Печатая быстро и без ошибок, комбо растёт и счёт ещё выше. Лучший результат сохраняется в браузере." }]
      },
      en: {
        intro: ["Vanish — a unique practice with disappearing words testing focus and touch typing. Text appears on screen, but every letter you type vanishes instantly. You only see what's ahead — you must remember what you've typed.", "No levels — each game shows a random new text. Choose Uzbek or English and start. At the end you see WPM, accuracy and score; high score saved in browser. Everything is free, offline and without registration."],
        faq: [{ q: "Why do letters disappear?", a: "That's the core idea: type blindly relying on finger memory and text retention. Deepens your touch typing skill." }, { q: "Are there levels?", a: "No. Each game picks a random new text from a base of hundreds. Ensures variety every session." }, { q: "What if I make a mistake?", a: "A short sound plays and accuracy drops. Backspace lets you go back and fix, but errors reduce combo and accuracy." }, { q: "What if Caps Lock is on?", a: "System detects automatically: warning at top and keys aren't accepted until Caps Lock is off." }, { q: "How is the score calculated?", a: "Score combines text length, your speed (WPM) and accuracy. Fast and clean typing grows combo and score. High score saved in browser." }]
      }
    },
  };
  const cont = CONTENT[page];
  const mainEl = document.querySelector("main");
  if (cont && mainEl) {
    // Tanlangan tilga qarab kontentni tanlash (uz-cyr → uz, transliterator ishlaydi)
    const _lang = (window.OsonI18n && window.OsonI18n.getLang) ? window.OsonI18n.getLang() : "uz";
    const _langKey = _lang === "uz-cyr" ? "uz" : _lang;
    // Yangi format: {uz, ru, en} — eski format: {intro, faq}
    const c = (cont[_langKey] || cont.uz || cont);
    // Til sarlavhalari
    const SEC_HEADS = {
      uz: { about: "Bu vosita haqida", faq: "Ko'p beriladigan savollar" },
      ru: { about: "Об этом инструменте", faq: "Часто задаваемые вопросы" },
      en: { about: "About this tool", faq: "Frequently asked questions" }
    };
    const h = SEC_HEADS[_langKey] || SEC_HEADS.uz;

    const sec = document.createElement("section");
    sec.className = "seo-content";
    sec.innerHTML = `<h2>${h.about}</h2>${c.intro.map(p => `<p>${p}</p>`).join("")}`
      + `<h2>${h.faq}</h2>${c.faq.map(f => `<details class="faq"><summary>${f.q}</summary><p>${f.a}</p></details>`).join("")}`;
    mainEl.appendChild(sec);
    const ld = document.createElement("script"); ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
    document.head.appendChild(ld);
  }
})();

/* ===== pk-kurs mundarija (TOC) — kurs-nomi sarlavhasini olib tashlash + mobilda Loop uslubidagi yig'iladigan toggle =====
   .pk-side (progress + #nav) bor sahifalarda ishlaydi. Desktopda toggle yashirin (CSS), mundarija to'liq ochiq. */
(function () {
  function enhancePkToc() {
    var side = document.querySelector(".pk-side");
    if (!side || side.dataset.tocEnh) return;
    var nav = side.querySelector("#nav");
    if (!nav) return;                       // faqat kurs TOC sahifalari
    side.dataset.tocEnh = "1";

    // 1) Kurs-nomi sarlavhasini DOM'dan butunlay olib tashlash (talab: TOC bosh qismida kurs nomi bo'lmasin)
    var h = side.querySelector(".pk-side-h");
    if (h) h.parentNode.removeChild(h);

    // 2) Qolgan bolalarni (progress + nav + Resurslar) yig'iladigan tana ichiga o'rash
    var body = document.createElement("div");
    body.className = "pk-toc-body";
    while (side.firstChild) body.appendChild(side.firstChild);

    // 3) Til yorlig'i
    var lang = window.OSON_LANG || "uz";
    var L = ({ uz: "Mundarija", ru: "Содержание", en: "Contents" })[lang] || "Mundarija";

    // 4) Toggle tugma (mobilda CSS orqali ko'rinadi)
    var btn = document.createElement("button");
    btn.className = "pk-toc-toggle";
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", L);
    btn.innerHTML =
      '<span class="pk-toc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3.5" y1="6" x2="3.51" y2="6"/><line x1="3.5" y1="12" x2="3.51" y2="12"/><line x1="3.5" y1="18" x2="3.51" y2="18"/></svg></span>' +
      '<span class="pk-toc-tx">' + L + '<small></small></span>' +
      '<svg class="pk-toc-cv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
    side.appendChild(btn);
    side.appendChild(body);

    // 5) Subtitle = progress matni ("0 / 37 dars") — o'zgarganda yangilanadi
    var sub = btn.querySelector(".pk-toc-tx small");
    var prog = document.getElementById("progTxt");
    function syncSub() { if (sub && prog) sub.textContent = prog.textContent.trim(); }
    syncSub();
    if (prog && window.MutationObserver) {
      new MutationObserver(syncSub).observe(prog, { childList: true, characterData: true, subtree: true });
    }

    // 6) Ochish/yopish
    btn.addEventListener("click", function () {
      var open = side.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // 7) Mobilda dars tanlanganda mundarijani avtomatik yopish (kontentga o'tadi)
    body.addEventListener("click", function (e) {
      var ls = e.target.closest && e.target.closest(".pk-ls");
      if (ls && window.matchMedia && window.matchMedia("(max-width:900px)").matches) {
        side.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }
  if (document.readyState !== "loading") enhancePkToc();
  else document.addEventListener("DOMContentLoaded", enhancePkToc);
  window.addEventListener("load", enhancePkToc);
})();

/* Umumiy yordamchilar */
window.Oson = {
  showMsg(el, type, text) {
    el.className = "msg show " + type;
    el.textContent = text;
  },
  hideMsg(el) { el.className = "msg"; },
  bytes(n) {
    if (n < 1024) return n + " B";
    if (n < 1048576) return (n / 1024).toFixed(1) + " KB";
    return (n / 1048576).toFixed(2) + " MB";
  },
  download(blobOrUrl, filename) {
    const url = typeof blobOrUrl === "string" ? blobOrUrl : URL.createObjectURL(blobOrUrl);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    if (typeof blobOrUrl !== "string") setTimeout(() => URL.revokeObjectURL(url), 4000);
  },
  // Drag & drop + click file picker
  setupDrop(dropEl, inputEl, onFile, accept) {
    dropEl.addEventListener("click", () => inputEl.click());
    dropEl.addEventListener("dragover", e => { e.preventDefault(); dropEl.classList.add("dragover"); });
    dropEl.addEventListener("dragleave", () => dropEl.classList.remove("dragover"));
    dropEl.addEventListener("drop", e => {
      e.preventDefault(); dropEl.classList.remove("dragover");
      const f = e.dataTransfer.files[0];
      if (f) onFile(f);
    });
    inputEl.addEventListener("change", () => { if (inputEl.files[0]) onFile(inputEl.files[0]); });
  },

  /* ============================================================
     ZAMONAVIY TOAST + CONFIRM MODAL (alert/confirm o'rniga)
     - Oson.toast(text, type)  type: 'info' | 'success' | 'error'
     - Oson.confirm(text, opts) -> Promise<boolean>
     - Mobile-friendly, dark-mode-friendly
     ============================================================ */
  _toastEl: null,
  _toastTimer: null,
  toast(text, type = "info", duration = 2400) {
    if (!this._toastEl) {
      const c = document.createElement("div");
      c.className = "oson-toast";
      document.body.appendChild(c);
      this._toastEl = c;
    }
    const el = this._toastEl;
    el.className = "oson-toast type-" + type;
    el.textContent = text;
    requestAnimationFrame(() => el.classList.add("show"));
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove("show"), duration);
  },
  confirm(text, opts = {}) {
    return new Promise(resolve => {
      const okText = opts.ok || "Tasdiqlash";
      const cancelText = opts.cancel || "Bekor qilish";
      const danger = !!opts.danger;
      const backdrop = document.createElement("div");
      backdrop.className = "oson-modal";
      backdrop.innerHTML = `
        <div class="oson-modal-backdrop"></div>
        <div class="oson-modal-dialog" role="dialog" aria-modal="true">
          <div class="oson-modal-msg"></div>
          <div class="oson-modal-actions">
            <button class="oson-btn oson-btn-cancel" type="button"></button>
            <button class="oson-btn ${danger ? 'oson-btn-danger' : 'oson-btn-ok'}" type="button"></button>
          </div>
        </div>`;
      backdrop.querySelector(".oson-modal-msg").textContent = text;
      backdrop.querySelector(".oson-btn-cancel").textContent = cancelText;
      backdrop.querySelector(".oson-btn-ok, .oson-btn-danger").textContent = okText;
      document.body.appendChild(backdrop);
      requestAnimationFrame(() => backdrop.classList.add("show"));
      const close = (val) => {
        backdrop.classList.remove("show");
        setTimeout(() => backdrop.remove(), 200);
        document.removeEventListener("keydown", onKey);
        resolve(val);
      };
      const onKey = e => {
        if (e.key === "Escape") close(false);
        else if (e.key === "Enter") close(true);
      };
      document.addEventListener("keydown", onKey);
      backdrop.querySelector(".oson-modal-backdrop").addEventListener("click", () => close(false));
      backdrop.querySelector(".oson-btn-cancel").addEventListener("click", () => close(false));
      backdrop.querySelector(".oson-btn-ok, .oson-btn-danger").addEventListener("click", () => close(true));
      setTimeout(() => backdrop.querySelector(".oson-btn-ok, .oson-btn-danger").focus(), 50);
    });
  }
};
