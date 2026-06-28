/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   4-modul: Image-to-video va boshqaruv
   window.AIVIDEO_COURSE.modules.push({...})
   ============================================================ */
window.AIVIDEO_COURSE.modules.push({
  id: "v4",
  title: "Image-to-video va boshqaruv",
  lessons: [
    {
      id: "v4_1",
      title: "Rasmni jonlantirish (image-to-video)",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Sizda mukammal rasm bormi — AI yaratgan surat yoki o'z fotongiz? <b>Image-to-video</b> uni jonlantiradi: harakat qo'shib, jonli klipga aylantiradi. Bu — AI rasm va AI video kuchlarini birlashtiradigan eng amaliy usul: avval rasmni xohlagandek mukammal qiling, keyin uni harakatga keltiring. Bu darsda rasmni jonlantirishni o'rganamiz.</p>

<h3>Qanday ishlaydi</h3>
<p>Image-to-video'da matn o'rniga (yoki u bilan birga) <b>boshlang'ich rasm</b> berasiz, model esa shu rasmni harakatga keltiradi. Uchta narsani aytasiz: <b>(1)</b> qaysi rasm; <b>(2)</b> unda nima harakatlanishi kerak; <b>(3)</b> harakat qanchalik kuchli bo'lishi.</p>

<h3>Motion kuchi (strength)</h3>
<ul>
  <li><b>Past kuch</b> — nozik, yengil harakat: bayroq sekin hilpiraydi, suv jimirlaydi. Asl rasm ko'rinishi yaxshi saqlanadi.</li>
  <li><b>Yuqori kuch</b> — katta harakat: kamera keng siljiydi, subyekt faol harakatlanadi. Lekin asl rasm ko'proq o'zgaradi va buzilish xavfi ortadi.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>AI rasm + AI video — kuchli juftlik</b>Avval AI rasm kursida o'rgangan usullar bilan <b>mukammal rasm</b> yarating (kompozitsiya, yorug'lik, uslub aniq). Keyin uni image-to-video bilan jonlantiring. Shunda kompozitsiya ustidan to'liq nazoratga ega bo'lib, ustiga harakat qo'shasiz.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv41bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv41fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv41sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fb7185"/></linearGradient>
    <filter id="fv41sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv41a"><rect x="64" y="50" width="180" height="74" rx="7"/></clipPath>
    <clipPath id="fv41b"><rect x="478" y="50" width="180" height="74" rx="7"/></clipPath>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv41bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Tayyor rasm → jonli klip</text>
  <!-- still image -->
  <g filter="url(#fv41sh)"><rect x="58" y="44" width="192" height="86" rx="12" fill="#fff" stroke="#fed7aa"/></g>
  <g clip-path="url(#fv41a)"><rect x="64" y="50" width="180" height="74" fill="url(#fv41sky)"/><circle cx="96" cy="72" r="11" fill="#fff7d6"/><path d="M64 124 L64 108 L114 88 L154 106 L244 90 L244 124 Z" fill="#7c2d12" opacity=".7"/></g>
  <text x="154" y="148" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">boshlang'ich rasm (statik)</text>
  <!-- arrow -->
  <path d="M258 86 H468" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv41ar)"/>
  <rect x="296" y="60" width="136" height="18" rx="9" fill="#ffe4d6"/><text x="364" y="73" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#c2410c">+ harakat · motion kuchi</text>
  <defs><marker id="fv41ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#fb923c"/></marker></defs>
  <!-- video frame -->
  <g filter="url(#fv41sh)"><rect x="472" y="44" width="192" height="86" rx="12" fill="url(#fv41fr)"/></g>
  <g clip-path="url(#fv41b)"><rect x="478" y="50" width="180" height="74" fill="url(#fv41sky)"/><circle cx="510" cy="72" r="11" fill="#fff7d6"/><path d="M478 124 L478 108 L528 88 L568 106 L658 90 L658 124 Z" fill="#7c2d12" opacity=".7"/><g stroke="#fff" stroke-width="2" opacity=".55" stroke-linecap="round"><path d="M610 64 h22 M608 72 h18"/></g></g>
  <circle cx="568" cy="86" r="13" fill="#fff" opacity=".92"/><path d="M563 79 l10 7 -10 7z" fill="#dc2626"/>
  <text x="568" y="148" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">jonli klip (harakatli)</text>
</svg>
<figcaption>Mukammal rasmni asos qilib, unga harakat qo'shasiz</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Image-to-video boshlang'ich rasmni harakatga keltiradi: qaysi rasm, nima harakatlanishi va motion kuchini aytasiz. Past kuch — nozik harakat, asl rasm saqlanadi; yuqori kuch — katta harakat, lekin o'zgarish va buzilish xavfi ortadi. Avval mukammal rasm yarating, keyin jonlantiring.</span></div>`,
      sim: {
        type: "order",
        intro: "Rasmni jonlantirish (image-to-video) bosqichlarini <b>to'g'ri tartibga</b> joylashtiring.",
        steps: [
          "Jonlantirmoqchi bo'lgan mukammal boshlang'ich rasmni tanlang",
          "Rasmda nima harakatlanishini aniq tasvirlang",
          "Motion kuchini (nozik yoki katta) maqsadga mos sozlang",
          "Klipni yarating (generate)",
          "Natijani ko'rib, kerak bo'lsa kuch yoki tavsifni tuzating"
        ]
      },
      quiz: [
        { q: "Image-to-video nima qiladi?", o: ["Rasmni o'chiradi", "Boshlang'ich rasmni harakatga keltiradi", "Rasmni matnga aylantiradi", "Faqat rangni o'zgartiradi"], c: 1 },
        { q: "Image-to-video'da nimani aytasiz?", o: ["Faqat narxni", "Qaysi rasm, nima harakatlanishi va motion kuchi", "Faqat o'lchamni", "Vosita versiyasini"], c: 1 },
        { q: "Past motion kuchi qanday natija beradi?", o: ["Katta, kuchli harakat", "Nozik harakat, asl rasm yaxshi saqlanadi", "Rasm o'chadi", "Rang yo'qoladi"], c: 1 },
        { q: "Yuqori motion kuchining xavfi nima?", o: ["Hech qanday", "Asl rasm ko'proq o'zgaradi, buzilish xavfi ortadi", "Klip qisqaradi", "Ovoz yo'qoladi"], c: 1 },
        { q: "Eng yaxshi ish tartibi qanday?", o: ["Darrov jonlantirish", "Avval mukammal rasm yaratib, keyin uni jonlantirish", "Faqat matndan", "Rasmsiz"], c: 1 }
      ]
    },

    {
      id: "v4_2",
      title: "Boshlang'ich va oxirgi kadr (keyframe)",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Ba'zi vositalarda klipning <b>boshlang'ich va oxirgi kadrini</b> o'zingiz belgilashingiz mumkin — AI esa orasidagi silliq o'tishni yaratadi. Bu <b>keyframe</b> usuli klip ustidan kuchli nazorat beradi: aniq qayerdan boshlanib, aniq qayerda tugashini siz hal qilasiz. Bu darsda keyframe'ni to'g'ri ishlatishni ko'ramiz.</p>

<h3>Keyframe nima</h3>
<p>Siz ikkita <b>tayanch kadr</b> berasiz: boshlanish va tugash. Model ular orasini <b>mantiqiy, silliq o'tish</b> bilan to'ldiradi. Masalan: yopiq g'uncha (boshlanish) → ochilgan gul (tugash); kunduzgi ko'cha → tungi ko'cha; yaqin plan → uzoq plan.</p>

<h3>To'g'ri ishlatish</h3>
<p>Eng muhim qoida — ikki kadr <b>mantiqiy bog'liq</b> bo'lishi kerak. Agar boshlang'ich va oxirgi kadr butunlay bog'liqsiz bo'lsa (ko'cha → o'rmon), model g'alati, buzilgan o'tish yasaydi. Bir <b>sahnaning ikki holati</b>ni bering — shunda o'tish tabiiy chiqadi.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Yaxshi keyframe juftliklari</b>Bir sahnaning bog'liq ikki holatini tanlang: kun → tun, yopiq → ochiq, bo'sh → to'la, yaqin → uzoq. Bunday juftliklar orasida model tabiiy o'tish topadi. «Mushuk → mashina» kabi bog'liqsiz juftlik esa buziladi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv42bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv42fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv42day" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bae6fd"/><stop offset="1" stop-color="#fde68a"/></linearGradient>
    <linearGradient id="fv42night" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e1b4b"/><stop offset="1" stop-color="#7c2d12"/></linearGradient>
    <filter id="fv42sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv42a"><rect x="40" y="54" width="150" height="66" rx="7"/></clipPath>
    <clipPath id="fv42b"><rect x="530" y="54" width="150" height="66" rx="7"/></clipPath>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv42bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Boshlang'ich kadr → silliq o'tish → oxirgi kadr</text>
  <!-- start frame -->
  <g filter="url(#fv42sh)"><rect x="34" y="48" width="162" height="78" rx="12" fill="url(#fv42fr)"/></g>
  <g clip-path="url(#fv42a)"><rect x="40" y="54" width="150" height="66" fill="url(#fv42day)"/><circle cx="68" cy="74" r="9" fill="#fff7d6"/><rect x="40" y="104" width="150" height="16" fill="#92400e" opacity=".5"/></g>
  <text x="115" y="142" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#c2410c">kunduz (boshlanish)</text>
  <!-- interpolation dots -->
  <g fill="#fb923c"><circle cx="230" cy="84" r="4"/><circle cx="262" cy="84" r="5"/><circle cx="296" cy="84" r="6"/><circle cx="330" cy="84" r="6"/><circle cx="364" cy="84" r="6"/><circle cx="398" cy="84" r="6"/><circle cx="432" cy="84" r="5"/><circle cx="464" cy="84" r="4"/></g>
  <text x="347" y="112" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#94a3b8">AI orasini to'ldiradi (silliq o'tish)</text>
  <!-- end frame -->
  <g filter="url(#fv42sh)"><rect x="524" y="48" width="162" height="78" rx="12" fill="url(#fv42fr)"/></g>
  <g clip-path="url(#fv42b)"><rect x="530" y="54" width="150" height="66" fill="url(#fv42night)"/><circle cx="640" cy="72" r="8" fill="#e0e7ff"/><rect x="530" y="104" width="150" height="16" fill="#000" opacity=".4"/><g fill="#fde68a"><rect x="548" y="96" width="3" height="8"/><rect x="566" y="98" width="3" height="6"/><rect x="588" y="95" width="3" height="9"/></g></g>
  <text x="605" y="142" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#c2410c">tun (tugash)</text>
</svg>
<figcaption>Bir sahnaning ikki holati orasida AI tabiiy o'tish yaratadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Keyframe usulida boshlang'ich va oxirgi kadrni o'zingiz belgilaysiz, AI orasini silliq to'ldiradi. Eng muhim qoida: ikki kadr mantiqiy bog'liq (bir sahnaning ikki holati) bo'lishi kerak. Bog'liqsiz kadrlar buzilgan o'tish beradi.</span></div>`,
      sim: {
        type: "compare",
        intro: "Ikkala keyframe juftligi bir maqsad uchun. Qaysi biri silliq, tabiiy o'tish beradi? Birini bosing.",
        goal: "Kun → tunga o'tish — boshlang'ich va oxirgi kadr (keyframe)",
        a: { text: "boshlang'ich kadr: yorqin kunduzgi shahar ko'chasi; oxirgi kadr: butunlay boshqa joy — o'rmondagi yog'och kulba" },
        b: { text: "boshlang'ich kadr: kunduzgi shahar ko'chasi; oxirgi kadr: aynan shu ko'cha tunda, neon chiroqlar yonadi; oraliqda silliq kun-tun o'tishi" },
        better: "b",
        why: "Keyframe ishlashi uchun ikki kadr mantiqiy bog'liq bo'lishi shart. A'da boshlang'ich (ko'cha) va oxirgi (o'rmon kulbasi) butunlay bog'liqsiz — model g'alati, buzilgan o'tish yasaydi. B aynan bir ko'chaning kun→tun o'zgarishini beradi — tabiiy, silliq o'tish."
      },
      quiz: [
        { q: "Keyframe usuli nima imkon beradi?", o: ["Faqat rang tanlash", "Boshlang'ich va oxirgi kadrni belgilab, AI orasini to'ldiradi", "Faqat ovoz qo'shish", "Klipni o'chirish"], c: 1 },
        { q: "Keyframe'ning eng muhim qoidasi nima?", o: ["Kadrlar yorqin bo'lishi", "Ikki kadr mantiqiy bog'liq bo'lishi", "Kadrlar katta bo'lishi", "Ikki kadr bir xil bo'lishi"], c: 1 },
        { q: "Quyidagilardan qaysi biri yaxshi keyframe juftligi?", o: ["Mushuk → mashina", "Yopiq g'uncha → ochilgan gul", "Ko'cha → o'rmon", "Raqam → harf"], c: 1 },
        { q: "Bog'liqsiz boshlang'ich va oxirgi kadr nima beradi?", o: ["Eng yaxshi o'tish", "G'alati, buzilgan o'tish", "Tezroq klip", "Yaxshi sifat"], c: 1 },
        { q: "AI keyframe'lar orasida nima qiladi?", o: ["Hech narsa", "Mantiqiy, silliq o'tishni yaratadi", "Kadrlarni o'chiradi", "Faqat rangni almashtiradi"], c: 1 }
      ]
    },

    {
      id: "v4_3",
      title: "Motion brush va mintaqaviy boshqaruv",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Ba'zan siz <b>faqat bir qism</b> harakatlanishini istaysiz — masalan, bayroq hilpirasin, lekin uni ushlab turgan odam tinch tursin. Aynan shu uchun <b>motion brush</b> (harakat cho'tkasi) va mintaqaviy boshqaruv kerak: rasmning qaysi qismi harakatlanishini «bo'yab» belgilaysiz. Bu darsda shu nozik boshqaruvni ko'ramiz.</p>

<h3>Motion brush nima</h3>
<p>Motion brush — rasmning <b>aniq mintaqasini</b> tanlab, faqat o'sha joyga harakat berish imkoni. Siz harakatlanishi kerak bo'lgan qismni cho'tka bilan belgilaysiz, qolgan qism esa tinch qoladi. Bu klipni ancha tabiiy va boshqariladigan qiladi.</p>

<h3>Qachon kerak</h3>
<p>Mintaqaviy harakat mana bunday holatlarda zo'r: <b>bayroq</b> hilpiraydi, qolgani tinch; <b>soch</b> shamolda uchadi, yuz tinch; <b>suvdagi aks</b> jimirlaydi, qirg'oq qotgan; <b>tutun/bug'</b> ko'tariladi, ob'ekt joyida. Agar <b>butun sahna</b> birdek harakatlanishi kerak bo'lsa — motion brush shart emas, oddiy prompt yetadi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Nozik harakat — tabiiy natija</b>Ko'pincha eng ishonchli, chiroyli kliplar — kam, lekin aniq harakatli bo'ladi. Hamma narsani harakatga keltirishga urinmang; bitta-ikkita mintaqani jonlantiring, qolganini tinch qoldiring. Bu buzilishni kamaytiradi va natijani professional qiladi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 162" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv43bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv43fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv43sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bae6fd"/><stop offset="1" stop-color="#e0f2fe"/></linearGradient>
    <filter id="fv43sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv43c"><rect x="262" y="40" width="196" height="96" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="162" rx="16" fill="url(#fv43bg)"/>
  <text x="360" y="26" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Faqat tanlangan mintaqa harakatlanadi</text>
  <g filter="url(#fv43sh)"><rect x="256" y="34" width="208" height="108" rx="13" fill="url(#fv43fr)"/></g>
  <g clip-path="url(#fv43c)">
    <rect x="262" y="40" width="196" height="96" fill="url(#fv43sky)"/>
    <rect x="262" y="110" width="196" height="26" fill="#86efac" opacity=".7"/>
    <!-- pole + flag -->
    <rect x="320" y="56" width="4" height="80" fill="#7c2d12"/>
    <path d="M324 58 q14 6 28 0 q14 -6 28 0 v22 q-14 -6 -28 0 q-14 6 -28 0 z" fill="#dc2626"/>
  </g>
  <!-- brush highlight over flag -->
  <rect x="318" y="52" width="64" height="34" rx="8" fill="none" stroke="#fb923c" stroke-width="2.6" stroke-dasharray="5 4"/>
  <path d="M388 60 q10 4 18 -2" stroke="#fb923c" stroke-width="3" fill="none" stroke-linecap="round"/>
  <g stroke="#dc2626" stroke-width="2" opacity=".7" stroke-linecap="round"><path d="M386 68 q6 2 11 -1"/></g>
  <text x="150" y="74" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#dc2626">Bo'yalgan:</text>
  <text x="150" y="92" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#64748b">bayroq hilpiraydi</text>
  <text x="572" y="74" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#64748b">Qolgani:</text>
  <text x="572" y="92" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#64748b">tinch qoladi</text>
</svg>
<figcaption>Motion brush bilan faqat kerakli qismni jonlantirasiz</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Motion brush rasmning aniq mintaqasini «bo'yab», faqat o'sha joyga harakat beradi (bayroq hilpiraydi, soch uchadi), qolgani tinch qoladi. Butun sahna birdek harakatlanishi kerak bo'lsa — motion brush shart emas. Kam, aniq harakat ko'pincha eng tabiiy natija beradi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi holatlarda <b>motion brush</b> (mintaqaviy harakat) foydalimi yoki <b>kerak emas</b> (butun kadr harakati)mi?",
        groups: ["motion brush foydali", "kerak emas"],
        items: [
          { name: "Faqat bayroq hilpirasin, qolgani tinch tursin", answer: "motion brush foydali", hint: "Bir qism harakat — motion brush." },
          { name: "Butun manzara birdek oldinga harakatlansin", answer: "kerak emas", hint: "Butun kadr harakati — oddiy prompt yetadi." },
          { name: "Faqat soch shamolda uchsin, yuz tinch qolsin", answer: "motion brush foydali", hint: "Mintaqaviy harakat — motion brush." },
          { name: "Kamera butun sahnani aylanib chiqsin", answer: "kerak emas", hint: "Kamera harakati — motion brush emas." },
          { name: "Suvdagi aks jimirlasin, qirg'oq qotgan qolsin", answer: "motion brush foydali", hint: "Faqat suv harakati — motion brush." },
          { name: "Hammasi bir xil tezlikda birga harakatlansin", answer: "kerak emas", hint: "Yagona umumiy harakat — motion brush shart emas." }
        ]
      },
      quiz: [
        { q: "Motion brush nima imkon beradi?", o: ["Rangni o'zgartirish", "Rasmning aniq mintaqasini tanlab, faqat o'sha joyga harakat berish", "Klipni o'chirish", "Ovoz qo'shish"], c: 1 },
        { q: "Motion brush qaysi holatda foydali?", o: ["Butun sahna harakatlanganda", "Faqat bir qism (bayroq, soch) harakatlanib, qolgani tinch qolganda", "Kamera aylanganda", "Hech qachon"], c: 1 },
        { q: "Butun sahna birdek harakatlanishi kerak bo'lsa?", o: ["Motion brush shart", "Oddiy prompt yetadi, motion brush shart emas", "Klip o'chiriladi", "Rang o'zgartiriladi"], c: 1 },
        { q: "Eng tabiiy kliplar ko'pincha qanday bo'ladi?", o: ["Hamma narsa harakatlanadigan", "Kam, lekin aniq harakatli", "Umuman harakatsiz", "Faqat tez harakatli"], c: 1 },
        { q: "Nima uchun kam harakat ko'pincha yaxshiroq?", o: ["Tezroq chiqadi", "Buzilishni kamaytiradi va natijani professional qiladi", "Arzonroq", "Rangni o'zgartiradi"], c: 1 }
      ]
    }
  ]
});
