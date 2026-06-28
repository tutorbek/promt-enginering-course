/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   7-modul: Amaliy qo'llash
   window.AIVIDEO_COURSE.modules.push({...})
   ============================================================ */
window.AIVIDEO_COURSE.modules.push({
  id: "v7",
  title: "Amaliy qo'llash",
  lessons: [
    {
      id: "v7_1",
      title: "Reklama va mahsulot roliki",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi bilim biznesga aylanadi. AI video reklama va mahsulot roliklarida ulkan qiymat beradi: qimmat suratga olish guruhisiz ham professional ko'rinishli rolik. Lekin ta'sirli reklama roliki tasodifan chiqmaydi — uning aniq tuzilmasi bor. Bu darsda reklamabop video yaratish sirlarini ko'ramiz.</p>

<h3>Yaxshi reklama rolikining belgilari</h3>
<ul>
  <li><b>E'tiborni ushlovchi boshlanish</b> — birinchi soniyada tomoshabinni «ilintirish».</li>
  <li><b>Aniq mahsulot fokusi</b> — mahsulot eng yaxshi tomondan, toza muhitda.</li>
  <li><b>Boshqarilgan yorug'lik va kamera</b> — studiya yorug'ligi, sekin orbit yoki dolly.</li>
  <li><b>Brendga mos kayfiyat</b> — hashamatli, sport, tabiiy — mahsulot xarakteriga mos.</li>
  <li><b>Aniq chaqiriq</b> — oxirida nima qilish kerakligi (xarid, obuna).</li>
</ul>

<h3>Reklama prompti</h3>
<p>Mahsulotni aniq ayting, keyin unga <b>nozik, hashamatli harakat</b> va <b>professional kamera</b> qo'shing: «… qora marmar yuzada, yorug'lik flakon yuzasida sekin o'ynaydi, flakon atrofida sekin orbit, dramatik studiya yorug'ligi, kinematografik». Maqsad — mahsulotni jonli va jozibali ko'rsatish.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Birinchi soniya — eng qimmati</b>Tomoshabin birinchi soniyadayoq qoladimi yoki ketadimi — hal bo'ladi. Rolikni eng kuchli, e'tibor tortuvchi kadr bilan boshlang. Oxirida esa aniq, sodda chaqiriq qoldiring — tomoshabin nima qilishini bilsin.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv71bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv71fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <radialGradient id="fv71pro" cx="0.5" cy="0.35" r="0.8"><stop offset="0" stop-color="#3b0a0a"/><stop offset="1" stop-color="#0f0606"/></radialGradient>
    <filter id="fv71sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv71c"><rect x="276" y="42" width="168" height="84" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="160" rx="16" fill="url(#fv71bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Reklama roliki — fokus, yorug'lik, harakat</text>
  <g filter="url(#fv71sh)"><rect x="270" y="36" width="180" height="96" rx="13" fill="url(#fv71fr)"/></g>
  <g clip-path="url(#fv71c)">
    <rect x="276" y="42" width="168" height="84" fill="url(#fv71pro)"/>
    <ellipse cx="360" cy="116" rx="44" ry="8" fill="#fff" opacity=".12"/>
    <rect x="344" y="62" width="32" height="50" rx="5" fill="#fde68a"/><rect x="350" y="68" width="8" height="38" rx="3" fill="#fff" opacity=".5"/><circle cx="360" cy="58" r="9" fill="#fb923c"/>
    <circle cx="312" cy="60" r="5" fill="#fff" opacity=".22"/><circle cx="416" cy="98" r="6" fill="#fff" opacity=".16"/>
  </g>
  <circle cx="360" cy="82" r="13" fill="#fff" opacity=".88"/><path d="M355 75 l10 7 -10 7z" fill="#dc2626"/>
  <text x="360" y="148" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">studiya yorug'ligi · sekin orbit · akslanish</text>
  <!-- structure -->
  <g font-family="system-ui" font-size="10" font-weight="700" fill="#c2410c">
    <g filter="url(#fv71sh)"><rect x="44" y="52" width="190" height="22" rx="9" fill="#fff" stroke="#fed7aa"/></g><circle cx="62" cy="63" r="4" fill="#dc2626"/><text x="76" y="67" text-anchor="start">1. E'tibor tortuvchi boshlanish</text>
    <g filter="url(#fv71sh)"><rect x="44" y="80" width="190" height="22" rx="9" fill="#fff" stroke="#fed7aa"/></g><circle cx="62" cy="91" r="4" fill="#dc2626"/><text x="76" y="95" text-anchor="start">2. Mahsulot fokusi</text>
    <g filter="url(#fv71sh)"><rect x="44" y="108" width="190" height="22" rx="9" fill="#fff" stroke="#fed7aa"/></g><circle cx="62" cy="119" r="4" fill="#dc2626"/><text x="76" y="123" text-anchor="start">3. Aniq chaqiriq</text>
    <g filter="url(#fv71sh)"><rect x="486" y="66" width="190" height="22" rx="9" fill="#fff" stroke="#fed7aa"/></g><circle cx="504" cy="77" r="4" fill="#dc2626"/><text x="518" y="81" text-anchor="start">brendga mos kayfiyat</text>
    <g filter="url(#fv71sh)"><rect x="486" y="94" width="190" height="22" rx="9" fill="#fff" stroke="#fed7aa"/></g><circle cx="504" cy="105" r="4" fill="#dc2626"/><text x="518" y="109" text-anchor="start">boshqarilgan kamera</text>
  </g>
</svg>
<figcaption>Boshqarilgan yorug'lik, harakat va aniq tuzilma — reklama sifati</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Yaxshi reklama roliki: e'tiborni ushlovchi boshlanish, aniq mahsulot fokusi, boshqarilgan yorug'lik va kamera, brendga mos kayfiyat va aniq chaqiriq. Mahsulotni professional foto/video tilida tasvirlang. Birinchi soniya eng muhim, oxirida aniq chaqiriq qoldiring.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>atir uchun hashamatli reklama kadri</b>. Har bo'lim uchun maqsadga mos variantni tanlang.",
        goal: "Atir uchun hashamatli reklama kadri",
        slots: [
          {
            label: "Mahsulot / sahna", options: [
              { text: "qora marmar yuzadagi atir flakoni", good: true },
              { text: "atir", good: false, why: "Sahna juda umumiy — muhit va fonni ko'rsating." }
            ]
          },
          {
            label: "Harakat", options: [
              { text: "yorug'lik flakon yuzasida sekin o'ynaydi", good: true },
              { text: "tartibsiz silkinadi", good: false, why: "Tartibsiz silkinish hashamatli reklamaga mos emas." }
            ]
          },
          {
            label: "Kamera", options: [
              { text: "tasodifiy silkinish", good: false, why: "Tasodifiy silkinish professional reklama emas." },
              { text: "flakon atrofida sekin orbit", good: true }
            ]
          },
          {
            label: "Atmosfera", options: [
              { text: "dramatik studiya yorug'ligi, yumshoq akslanish", good: true },
              { text: "oddiy xona yorug'ligi", good: false, why: "Oddiy yorug'lik hashamat his bermaydi." }
            ]
          },
          {
            label: "Uslub", options: [
              { text: "telefonda olingan kabi", good: false, why: "«Telefonda olingan» natijani havaskor qiladi." },
              { text: "hashamatli reklama, kinematografik", good: true }
            ]
          }
        ]
      },
      quiz: [
        { q: "Reklama rolikida eng muhim lahza qaysi?", o: ["Oxirgi soniya", "Birinchi soniya — e'tiborni ushlash", "O'rtasi", "Ahamiyatsiz"], c: 1 },
        { q: "Yaxshi reklama rolikining belgisi qaysi?", o: ["Xira fon, tasodifiy kamera", "Aniq mahsulot fokusi, boshqarilgan yorug'lik va kamera", "Telefonda olingan ko'rinish", "Hech qanday tuzilma"], c: 1 },
        { q: "Mahsulot uchun kamera qanday bo'lishi ma'qul?", o: ["Tasodifiy silkinish", "Boshqarilgan (sekin orbit yoki dolly)", "Umuman harakatsiz tasodifiy", "Tez, chalkash"], c: 1 },
        { q: "Rolik oxirida nima bo'lishi kerak?", o: ["Hech narsa", "Aniq, sodda chaqiriq (xarid, obuna)", "Yana mahsulot", "Tasodifiy kadr"], c: 1 },
        { q: "«Telefonda olingan» kabi so'zlar natijaga qanday ta'sir qiladi?", o: ["Yaxshilaydi", "Havaskor qiladi", "Hech qanday", "Hashamat qo'shadi"], c: 1 }
      ]
    },

    {
      id: "v7_2",
      title: "Ijtimoiy kontent: Reels va Shorts",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Bugun ijtimoiy tarmoqlarda <b>qisqa vertikal video</b> hukmron: Instagram Reels, YouTube Shorts, TikTok. AI video aynan shu format uchun ideal — tez, arzon, ko'p variant. Lekin Reels/Shorts'ning o'z qoidalari bor. Bu darsda ijtimoiy kontent uchun samarali video yaratishni ko'ramiz.</p>

<h3>Reels va Shorts qoidalari</h3>
<ul>
  <li><b>Vertikal 9:16</b> — telefon ekraniga to'liq mos format.</li>
  <li><b>Birinchi soniyada ilintirish</b> — tomoshabin tez aylantiradi; boshida darrov qiziq narsa bo'lsin.</li>
  <li><b>Qisqa va dinamik</b> — sekin, cho'zilgan kadrlardan qoching; sur'at saqlang.</li>
  <li><b>Bitta aniq g'oya</b> — bitta xabar, bitta his. Ko'p g'oya tomoshabinni chalg'itadi.</li>
</ul>

<h3>E'tiborni ushlash</h3>
<p>Qisqa formatda <b>birinchi soniya hal qiluvchi</b>. Eng kuchli, e'tibor tortuvchi kadr bilan boshlang — savol, kutilmagan tasvir yoki harakatli sahna. Agar boshi sust bo'lsa, tomoshabin qolganini ko'rmaydi. Vertikal formatda asosiy obyektni <b>markazga yaqin</b> joylashtiring.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Format — gorizontalni vertikalga aralashtirmang</b>Reels/Shorts uchun gorizontal 16:9 video ishlatish — keng tarqalgan xato: ekranda kichik bo'lib qoladi yoki yon tomonlari bo'sh turadi. Boshidanoq <b>vertikal 9:16</b> formatda yarating — telefon ekranini to'liq egallasin.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv72bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv72fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv72sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fb7185"/></linearGradient>
    <filter id="fv72sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv72c"><rect x="312" y="34" width="96" height="118" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv72bg)"/>
  <text x="360" y="26" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Reels / Shorts — vertikal 9:16, tez ilintir</text>
  <!-- vertical phone frame -->
  <g filter="url(#fv72sh)"><rect x="306" y="28" width="108" height="130" rx="14" fill="url(#fv72fr)"/></g>
  <g clip-path="url(#fv72c)">
    <rect x="312" y="34" width="96" height="118" fill="url(#fv72sky)"/>
    <circle cx="360" cy="78" r="20" fill="#dc2626"/><path d="M349 67 a14 14 0 0 1 22 0" fill="#7c2d12"/>
    <rect x="312" y="120" width="96" height="32" fill="#7c2d12" opacity=".45"/>
  </g>
  <circle cx="360" cy="90" r="12" fill="#fff" opacity=".88"/><path d="M356 84 l8 6 -8 6z" fill="#dc2626"/>
  <text x="360" y="166" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">9:16 · obyekt markazga yaqin</text>
  <!-- left rules -->
  <g font-family="system-ui" font-size="10" font-weight="700" fill="#15803d">
    <g filter="url(#fv72sh)"><rect x="44" y="50" width="220" height="24" rx="10" fill="#fff" stroke="#bbf7d0"/></g><circle cx="62" cy="62" r="6" fill="#22c55e"/><path d="M59 62 l2 2 4-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="76" y="66" text-anchor="start">vertikal 9:16</text>
    <g filter="url(#fv72sh)"><rect x="44" y="82" width="220" height="24" rx="10" fill="#fff" stroke="#bbf7d0"/></g><circle cx="62" cy="94" r="6" fill="#22c55e"/><path d="M59 94 l2 2 4-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="76" y="98" text-anchor="start">1-soniyada ilintir</text>
    <g filter="url(#fv72sh)"><rect x="44" y="114" width="220" height="24" rx="10" fill="#fff" stroke="#bbf7d0"/></g><circle cx="62" cy="126" r="6" fill="#22c55e"/><path d="M59 126 l2 2 4-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><text x="76" y="130" text-anchor="start">qisqa · bitta g'oya</text>
  </g>
  <!-- right anti-rules -->
  <g font-family="system-ui" font-size="10" font-weight="700" fill="#b91c1c">
    <g filter="url(#fv72sh)"><rect x="456" y="66" width="220" height="24" rx="10" fill="#fff" stroke="#fecaca"/></g><g transform="translate(474,78)"><circle r="6" fill="#ef4444"/><path d="M-2.5 -2.5 l5 5 M2.5 -2.5 l-5 5" stroke="#fff" stroke-width="1.8"/></g><text x="488" y="82" text-anchor="start">gorizontal 16:9</text>
    <g filter="url(#fv72sh)"><rect x="456" y="98" width="220" height="24" rx="10" fill="#fff" stroke="#fecaca"/></g><g transform="translate(474,110)"><circle r="6" fill="#ef4444"/><path d="M-2.5 -2.5 l5 5 M2.5 -2.5 l-5 5" stroke="#fff" stroke-width="1.8"/></g><text x="488" y="114" text-anchor="start">sust, cho'zilgan boshlanish</text>
  </g>
</svg>
<figcaption>Vertikal format va tez ilintirish — qisqa kontentning kaliti</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Reels/Shorts qoidalari: vertikal 9:16 format, birinchi soniyada ilintirish, qisqa va dinamik, bitta aniq g'oya. Gorizontal formatni telefon kontentiga aralashtirmang. Birinchi soniya hal qiluvchi — eng kuchli kadr bilan boshlang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi amaliyotlarni baholang: Reels/Shorts uchun <b>to'g'ri</b>mi yoki <b>xato</b>mi?",
        groups: ["to'g'ri", "xato"],
        items: [
          { name: "Vertikal 9:16 format tanlash", answer: "to'g'ri", hint: "Telefon ekraniga mos — to'g'ri." },
          { name: "Birinchi soniyada e'tiborni ushlash", answer: "to'g'ri", hint: "Qisqa formatda boshi hal qiluvchi." },
          { name: "Gorizontal 16:9 ni telefon Reels uchun ishlatish", answer: "xato", hint: "Ekranni to'ldirmaydi — xato format." },
          { name: "Bitta aniq g'oyaga e'tibor qaratish", answer: "to'g'ri", hint: "Bitta xabar — kuchli kontent." },
          { name: "Sekin, cho'zilgan kirish bilan boshlash", answer: "xato", hint: "Sust boshlanish — tomoshabin ketadi." },
          { name: "Bitta klipga o'nta turli g'oyani tiqishtirish", answer: "xato", hint: "Ko'p g'oya — chalg'itadi." }
        ]
      },
      quiz: [
        { q: "Reels/Shorts uchun qaysi format mos?", o: ["Gorizontal 16:9", "Vertikal 9:16", "Kvadrat 1:1 majburiy", "Ahamiyatsiz"], c: 1 },
        { q: "Qisqa formatda eng hal qiluvchi lahza qaysi?", o: ["Oxiri", "Birinchi soniya", "O'rtasi", "Hech qaysi"], c: 1 },
        { q: "Reels uchun keng tarqalgan xato qaysi?", o: ["Vertikal format", "Gorizontal 16:9 ni telefon kontentiga ishlatish", "Qisqa qilish", "Bitta g'oya"], c: 1 },
        { q: "Qisqa kontent qanday bo'lishi kerak?", o: ["Sekin va uzun", "Qisqa va dinamik, bitta aniq g'oya bilan", "Ko'p g'oyali", "Ovozsiz"], c: 1 },
        { q: "Vertikal formatda asosiy obyektni qayerga joylashtirish ma'qul?", o: ["Chet-chetga", "Markazga yaqin", "Yashirib", "Pastki burchakka"], c: 1 }
      ]
    },

    {
      id: "v7_3",
      title: "G'oyadan tayyor videogacha",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi barcha bilimni bitta amaliy yo'lga birlashtiramiz: <b>g'oyadan tayyor videogacha</b>. Professional natija tasodifan emas, tizimli jarayon orqali keladi. Bu darsda to'liq ish jarayonini — fikrdan eksportgacha — ko'rib chiqamiz. Bu sizning amaliy «yo'l xaritangiz» bo'ladi.</p>

<h3>To'liq ish jarayoni</h3>
<ol>
  <li><b>G'oya</b> — nima haqida video, qanday his, kim uchun.</li>
  <li><b>Storyboard</b> — kadrlar rejasi: har kadr uchun sahna, harakat, kamera.</li>
  <li><b>Kliplarni yaratish</b> — har kadrni alohida, sifatli prompt bilan generatsiya qiling.</li>
  <li><b>Ko'rish va yaxshilash</b> — eng yaxshi variantlarni tanlang, kerakini qayta yarating.</li>
  <li><b>Ovoz va musiqa</b> — diktor/ovoz va kayfiyatga mos fon musiqasini qo'shing.</li>
  <li><b>Montaj</b> — kliplarni tartiblang, kesing, ulang, ritmga moslang.</li>
  <li><b>Eksport</b> — to'g'ri format va sifatda yakuniy videoni saqlang.</li>
</ol>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Reja birinchi, generatsiya keyin</b>Eng katta xato — rejasiz, to'g'ridan-to'g'ri klip yaratishni boshlash. Avval g'oya va storyboardni aniqlang. Shunda har klip aniq maqsad bilan yaratiladi, behuda urinishlar kamayadi va yakuniy video bir butun bo'ladi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv73bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv73st" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv73sh" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#dc2626" flood-opacity=".25"/></filter>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv73bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">G'oyadan tayyor videogacha — yetti qadam</text>
  <g font-family="system-ui" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">
    <g filter="url(#fv73sh)"><rect x="34" y="118" width="92" height="30" rx="9" fill="url(#fv73st)"/></g><text x="80" y="137">G'oya</text>
    <g filter="url(#fv73sh)"><rect x="134" y="100" width="92" height="30" rx="9" fill="url(#fv73st)"/></g><text x="180" y="119">Storyboard</text>
    <g filter="url(#fv73sh)"><rect x="234" y="82" width="92" height="30" rx="9" fill="url(#fv73st)"/></g><text x="280" y="101">Kliplar</text>
    <g filter="url(#fv73sh)"><rect x="334" y="64" width="92" height="30" rx="9" fill="url(#fv73st)"/></g><text x="380" y="83">Yaxshilash</text>
    <g filter="url(#fv73sh)"><rect x="434" y="64" width="92" height="30" rx="9" fill="url(#fv73st)"/></g><text x="480" y="83">Ovoz/musiqa</text>
    <g filter="url(#fv73sh)"><rect x="534" y="46" width="78" height="30" rx="9" fill="url(#fv73st)"/></g><text x="573" y="65">Montaj</text>
    <g filter="url(#fv73sh)"><rect x="620" y="28" width="78" height="30" rx="9" fill="url(#fv73st)"/></g><text x="659" y="47">Eksport</text>
  </g>
  <g stroke="#fb923c" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M126 130 L134 122"/><path d="M226 112 L234 104"/><path d="M326 94 L334 86"/><path d="M426 79 H434"/><path d="M526 76 L534 68"/><path d="M612 58 L620 50"/>
  </g>
  <path d="M659 64 q.8 4 5 4.6 q-4.2.6 -5 4.6 q-.8-4 -5-4.6 q4.2-.6 5-4.6Z" fill="#fb923c" opacity=".85"/>
</svg>
<figcaption>Tizimli ish jarayoni — fikrdan tugallangan videogacha</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>To'liq ish jarayoni: g'oya → storyboard → kliplarni yaratish → ko'rish/yaxshilash → ovoz va musiqa → montaj → eksport. Eng katta xato — rejasiz to'g'ridan-to'g'ri yaratishni boshlash. Avval g'oya va storyboardni aniqlang — keyin generatsiya.</span></div>`,
      sim: {
        type: "order",
        intro: "G'oyadan tayyor videogacha bo'lgan amaliy ish jarayoni bosqichlarini <b>to'g'ri tartibga</b> joylashtiring.",
        steps: [
          "G'oyani aniqlang (mavzu, his, kim uchun)",
          "Storyboard tuzing — har kadr uchun sahna, harakat, kamera",
          "Har kadrni alohida sifatli prompt bilan yarating",
          "Eng yaxshi variantlarni tanlab, kerakini yaxshilang",
          "Ovoz va kayfiyatga mos musiqani qo'shing",
          "Kliplarni montaj qilib, tayyor videoni eksport qiling"
        ]
      },
      quiz: [
        { q: "To'liq ish jarayonida birinchi qadam qaysi?", o: ["Darrov klip yaratish", "G'oyani aniqlash", "Eksport", "Montaj"], c: 1 },
        { q: "Kliplarni yaratishdan oldin nima tuziladi?", o: ["Eksport", "Storyboard (kadrlar rejasi)", "Faqat musiqa", "Hech narsa"], c: 1 },
        { q: "Eng katta xato nima?", o: ["Storyboard tuzish", "Rejasiz, to'g'ridan-to'g'ri klip yaratishni boshlash", "Ovoz qo'shish", "Montaj qilish"], c: 1 },
        { q: "Ovoz va musiqa qaysi bosqichda qo'shiladi?", o: ["Eng birinchi", "Kliplar tayyor bo'lib, montajdan oldin yoki davomida", "Hech qachon", "Faqat eksportdan keyin"], c: 1 },
        { q: "Ish jarayonining oxirgi qadami qaysi?", o: ["G'oya", "Storyboard", "Tayyor videoni eksport qilish", "Klip yaratish"], c: 2 }
      ]
    }
  ]
});
