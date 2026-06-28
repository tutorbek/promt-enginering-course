/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   3-modul: Uslub va badiiy til
   window.AIRASM_COURSE.modules.push({...})
   ============================================================ */
window.AIRASM_COURSE.modules.push({
  id: "a3",
  title: "Uslub va badiiy til",
  lessons: [
    {
      id: "a3_1",
      title: "Badiiy uslublar olami",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Bitta subyektni — masalan, tog' manzarasini — fotosurat, moybo'yoq rangtasvir, anime yoki 3D render ko'rinishida yaratish mumkin. Subyekt bir xil, lekin <b>uslub</b> butun taassurotni o'zgartiradi. Uslubni ongli tanlash — natijaning yarmi. Bu darsda asosiy uslub oilalari bilan tanishamiz va promptda ularni qanday so'rashni o'rganamiz.</p>

<h3>Asosiy uslub oilalari</h3>
<ul>
  <li><b>Fotorealistik (foto)</b> — haqiqiy fotosuratga o'xshash: studiya foto, hujjatli kadr, makro. Real loyihalar, mahsulot, portret uchun.</li>
  <li><b>Rangtasvir / illyustratsiya</b> — moybo'yoq, akvarel, raqamli rasm: mo'yqalam izlari, badiiy erkinlik. Plakat, kitob muqovasi, hissiy asar uchun.</li>
  <li><b>Anime / karikatura</b> — tekis yorqin ranglar, sodda shakllar, ifodali. Yoshlar kontenti, stiker, qiziqarli post uchun.</li>
  <li><b>3D render</b> — hajmli, yorug'lik va soya bilan: mahsulot vizualizatsiyasi, personaj, o'yin estetikasi uchun.</li>
</ul>

<h3>Uslubni qanday so'rash</h3>
<p>Uslubni promptga oddiy so'z bilan qo'shasiz: <b>fotorealistik portret</b>, <b>moybo'yoq rangtasvir</b>, <b>anime uslubi</b>, <b>3D render</b>. Aniqroq xohlasangiz, texnikani ham qo'shing: akvarel, qalam eskizi, past poli (low-poly), piksel art. Har bir so'z modelni o'sha vizual dunyoga yo'naltiradi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Bitta uslubni tanlang</b>Bir promptga «fotorealistik + anime + moybo'yoq» deb uchta zid uslubni qo'shsangiz, model dovdiraydi va loyqa natija beradi. Bitta asosiy uslubni tanlang; kerak bo'lsa unga mos texnikani qo'shing.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 184" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="s31bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="s31sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bae6fd"/><stop offset="1" stop-color="#fde68a"/></linearGradient>
    <linearGradient id="s31pnt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbcfe8"/><stop offset="1" stop-color="#fcd34d"/></linearGradient>
    <linearGradient id="s31fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <radialGradient id="s313d" cx="0.35" cy="0.32" r="0.75"><stop offset="0" stop-color="#e9d5ff"/><stop offset="1" stop-color="#7c3aed"/></radialGradient>
    <filter id="s31sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="s31a"><rect x="34" y="46" width="130" height="72" rx="8"/></clipPath>
    <clipPath id="s31b"><rect x="208" y="46" width="130" height="72" rx="8"/></clipPath>
    <clipPath id="s31c"><rect x="382" y="46" width="130" height="72" rx="8"/></clipPath>
    <clipPath id="s31d"><rect x="556" y="46" width="130" height="72" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="184" rx="16" fill="url(#s31bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bir subyekt — to'rt xil uslub</text>
  <!-- fotorealistik -->
  <g filter="url(#s31sh)"><rect x="28" y="40" width="142" height="84" rx="11" fill="url(#s31fr)"/></g>
  <g clip-path="url(#s31a)"><rect x="34" y="46" width="130" height="72" fill="url(#s31sky)"/><circle cx="62" cy="68" r="10" fill="#fff7d6"/><path d="M34 118 L34 100 L70 80 L94 98 L120 78 L164 104 L164 118 Z" fill="#4b5563" opacity=".75"/></g>
  <text x="99" y="138" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">Fotorealistik</text>
  <!-- rangtasvir -->
  <g filter="url(#s31sh)"><rect x="202" y="40" width="142" height="84" rx="11" fill="url(#s31fr)"/></g>
  <g clip-path="url(#s31b)"><rect x="208" y="46" width="130" height="72" fill="url(#s31pnt)"/><circle cx="236" cy="66" r="11" fill="#fff1c2" opacity=".9"/><path d="M208 118 q34 -34 64 -12 q30 22 66 -6 v18 z" fill="#a21caf" opacity=".55"/><path d="M214 96 q24 -10 44 2" stroke="#fff" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round"/></g>
  <text x="273" y="138" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">Rangtasvir</text>
  <!-- anime -->
  <g filter="url(#s31sh)"><rect x="376" y="40" width="142" height="84" rx="11" fill="url(#s31fr)"/></g>
  <g clip-path="url(#s31c)"><rect x="382" y="46" width="130" height="72" fill="#7dd3fc"/><circle cx="412" cy="68" r="12" fill="#fff"/><rect x="382" y="98" width="130" height="20" fill="#4ade80"/><path d="M460 98 l16 -22 l16 22 z" fill="#22c55e"/></g>
  <text x="447" y="138" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">Anime</text>
  <!-- 3D render -->
  <g filter="url(#s31sh)"><rect x="550" y="40" width="142" height="84" rx="11" fill="url(#s31fr)"/></g>
  <g clip-path="url(#s31d)"><rect x="556" y="46" width="130" height="72" fill="#ede9fe"/><ellipse cx="621" cy="108" rx="34" ry="7" fill="#7c3aed" opacity=".25"/><circle cx="621" cy="84" r="22" fill="url(#s313d)"/><circle cx="613" cy="76" r="6" fill="#fff" opacity=".55"/></g>
  <text x="621" y="138" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">3D render</text>
</svg>
<figcaption>Bir xil g'oya turli uslublarda butunlay boshqacha taassurot beradi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Uslub — subyekt qanday ko'rinishda chiqishini belgilaydi: fotorealistik, rangtasvir/illyustratsiya, anime yoki 3D render. Uslubni promptga oddiy so'z bilan qo'shasiz. Bitta asosiy uslubni tanlang — zid uslublarni aralashtirmang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi uslub tavsiflarini ajrating: <b>fotorealistik</b> (foto)mi yoki <b>badiiy</b> (chizma/rasm)mi?",
        groups: ["fotorealistik", "badiiy"],
        items: [
          { name: "studiya fotosurati, tabiiy teri faktura", answer: "fotorealistik", hint: "Studiya foto — fotorealistik uslub." },
          { name: "moybo'yoq rangtasvir, ko'rinadigan mo'yqalam izlari", answer: "badiiy", hint: "Mo'yqalam izlari — badiiy (chizma) uslub." },
          { name: "hujjatli foto, tabiiy yorug'lik", answer: "fotorealistik", hint: "Hujjatli foto — fotorealistik." },
          { name: "anime uslubi, yorqin tekis ranglar", answer: "badiiy", hint: "Anime — badiiy uslub oilasi." },
          { name: "makro fotosurat, o'tkir detal", answer: "fotorealistik", hint: "Makro foto — fotorealistik." },
          { name: "akvarel illyustratsiya, yumshoq rang o'tishlari", answer: "badiiy", hint: "Akvarel — badiiy uslub." }
        ]
      },
      quiz: [
        { q: "Uslub nimani belgilaydi?", o: ["Rasm narxini", "Subyekt qanday ko'rinishda chiqishini (foto, rasm, anime, 3D)", "Fayl hajmini", "Yaratish tezligini"], c: 1 },
        { q: "Mahsulot reklamasi uchun ko'pincha qaysi uslub mos?", o: ["Anime", "Fotorealistik yoki 3D render", "Qalam eskizi", "Piksel art"], c: 1 },
        { q: "Uslubni promptga qanday qo'shasiz?", o: ["Faqat rang aytib", "Uslub so'zini yozib (moybo'yoq rangtasvir, anime uslubi)", "Fayl nomini o'zgartirib", "Hech qanday yo'l yo'q"], c: 1 },
        { q: "Bir promptga uchta zid uslubni qo'shsangiz nima bo'ladi?", o: ["Eng yaxshi natija", "Model dovdirab, loyqa natija beradi", "Rasm tezroq chiqadi", "Hech qanday ta'sir yo'q"], c: 1 },
        { q: "Quyidagilardan qaysi biri badiiy (chizma) uslub?", o: ["Studiya fotosurati", "Hujjatli foto", "Akvarel illyustratsiya", "Makro foto"], c: 2 }
      ]
    },

    {
      id: "a3_2",
      title: "Yorug'lik, rang va kayfiyat",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Bir xil sahna ertalabki yumshoq nurda iliq va sokin, tunda neon yorug'likda esa sirli va dramatik ko'rinadi. Subyekt o'zgarmaydi — faqat <b>yorug'lik va rang</b> o'zgaradi, lekin kayfiyat butunlay boshqacha bo'ladi. Bu — rasmga his bag'ishlovchi eng kuchli vositalardan biri. Bugun yorug'lik va rangni ataylab boshqarishni o'rganamiz.</p>

<h3>Yorug'lik turlari</h3>
<ul>
  <li><b>Yumshoq yorug'lik</b> — mayin, soyalari mayin: portret, sokin sahna uchun.</li>
  <li><b>Qattiq yorug'lik</b> — keskin soyalar, kontrast: dramatik, kuchli taassurot uchun.</li>
  <li><b>Oltin soat</b> — quyosh chiqishi/botishi: iliq, nostalgik.</li>
  <li><b>Orqa yorug'lik (kontrjur)</b> — subyekt ortidan: siluet, romantik.</li>
  <li><b>Neon / sun'iy</b> — tungi shahar, kibermakon estetikasi.</li>
</ul>

<h3>Rang va kayfiyat</h3>
<p>Rang palitrasi hissiyotni belgilaydi: <b>iliq ranglar</b> (sariq, to'q sariq, qizil) — qulaylik, nostalgiya, energiya; <b>salqin ranglar</b> (ko'k, binafsha) — sokinlik, texnologiya, sirlilik. Promptga kayfiyat so'zini ham qo'shing: sokin, dramatik, quvnoq, sirli. Shunda model yorug'lik va rangni shu hisga moslaydi.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Formula: yorug'lik + rang = kayfiyat</b>Avval qanday his uyg'otmoqchi ekaningizni hal qiling, keyin shunga mos yorug'lik va rangni so'rang. «sokin, nostalgik» istasangiz — «oltin soat, iliq ranglar, yumshoq yorug'lik». «Dramatik» istasangiz — «qattiq yorug'lik, yuqori kontrast, salqin soyalar».</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 178" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="s32bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="s32warm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fcd34d"/><stop offset="1" stop-color="#fb7185"/></linearGradient>
    <linearGradient id="s32cool" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#93c5fd"/><stop offset="1" stop-color="#6d28d9"/></linearGradient>
    <linearGradient id="s32drama" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b5563"/><stop offset="1" stop-color="#111827"/></linearGradient>
    <linearGradient id="s32fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <filter id="s32sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="s32a"><rect x="46" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="s32b"><rect x="275" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="s32c"><rect x="504" y="44" width="170" height="76" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="178" rx="16" fill="url(#s32bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bir sahna — uch kayfiyat (yorug'lik + rang)</text>
  <g filter="url(#s32sh)"><rect x="40" y="38" width="182" height="88" rx="11" fill="url(#s32fr)"/></g>
  <g clip-path="url(#s32a)"><rect x="46" y="44" width="170" height="76" fill="url(#s32warm)"/><circle cx="131" cy="82" r="16" fill="#fff4d6" opacity=".9"/><path d="M46 120 l170 0 0 -16 -60 -10 -50 8 -60 -6 z" fill="#7c2d12" opacity=".45"/></g>
  <text x="131" y="140" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#b45309">Iliq · sokin</text>
  <g filter="url(#s32sh)"><rect x="269" y="38" width="182" height="88" rx="11" fill="url(#s32fr)"/></g>
  <g clip-path="url(#s32b)"><rect x="275" y="44" width="170" height="76" fill="url(#s32cool)"/><circle cx="360" cy="82" r="16" fill="#dbeafe" opacity=".85"/><path d="M275 120 l170 0 0 -16 -60 -10 -50 8 -60 -6 z" fill="#1e1b4b" opacity=".5"/></g>
  <text x="360" y="140" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#6d28d9">Salqin · sirli</text>
  <g filter="url(#s32sh)"><rect x="498" y="38" width="182" height="88" rx="11" fill="url(#s32fr)"/></g>
  <g clip-path="url(#s32c)"><rect x="504" y="44" width="170" height="76" fill="url(#s32drama)"/><circle cx="589" cy="82" r="16" fill="#fca5a5" opacity=".8"/><path d="M504 120 l170 0 0 -14 -60 -12 -50 9 -60 -7 z" fill="#000" opacity=".5"/></g>
  <text x="589" y="140" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">Dramatik</text>
</svg>
<figcaption>Yorug'lik va rang — rasmga his bag'ishlovchi eng kuchli vosita</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Yorug'lik (yumshoq, qattiq, oltin soat, orqa yorug'lik, neon) va rang palitrasi (iliq yoki salqin) rasmning kayfiyatini belgilaydi. Avval qanday his kerakligini hal qiling, keyin shunga mos yorug'lik, rang va kayfiyat so'zini promptga qo'shing.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>kech tushgan shahar — sokin, nostalgik kayfiyat</b>. Har bo'lim uchun maqsadga mos variantni tanlang.",
        goal: "Kech tushgan shahar — sokin, nostalgik kayfiyat",
        slots: [
          {
            label: "Subyekt", options: [
              { text: "kech tushgan tor shahar ko'chasi", good: true },
              { text: "biror joy", good: false, why: "Subyekt aniq emas." }
            ]
          },
          {
            label: "Yorug'lik", options: [
              { text: "qattiq tush yorug'ligi, keskin soyalar", good: false, why: "Qattiq tush yorug'ligi sokin/nostalgik his bermaydi." },
              { text: "oltin soat, yumshoq iliq yorug'lik", good: true }
            ]
          },
          {
            label: "Rang palitrasi", options: [
              { text: "iliq sariq-to'q sariq ranglar", good: true },
              { text: "sovuq neon-ko'k ranglar", good: false, why: "Salqin neon nostalgik emas, sirli/texnologik his beradi." }
            ]
          },
          {
            label: "Kayfiyat", options: [
              { text: "shovqinli, tahlikali", good: false, why: "Maqsad sokin — tahlikali kayfiyat ziddir." },
              { text: "sokin, nostalgik, tinch", good: true }
            ]
          },
          {
            label: "Uslub", options: [
              { text: "kinematografik fotosurat", good: true },
              { text: "yorqin anime", good: false, why: "Anime bu nostalgik kinematografik his uchun mos emas." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Yorug'lik va rang asosan nimani belgilaydi?", o: ["Fayl hajmini", "Rasmning kayfiyatini (hissiy taassurotini)", "Yaratish tezligini", "Vosita narxini"], c: 1 },
        { q: "«Oltin soat» yorug'ligi qanday his beradi?", o: ["Sovuq, texnologik", "Iliq, nostalgik", "Tahlikali", "Befarq"], c: 1 },
        { q: "Salqin ranglar (ko'k, binafsha) ko'pincha qanday kayfiyat beradi?", o: ["Quvnoq bayram", "Sokinlik, sirlilik, texnologiya", "Iliq nostalgiya", "Issiq yoz"], c: 1 },
        { q: "Dramatik taassurot uchun qaysi yorug'lik mos?", o: ["Yumshoq, mayin", "Qattiq yorug'lik, yuqori kontrast", "Befarq tush nuri", "Hech qanday"], c: 1 },
        { q: "Kayfiyatni promptda qanday beradi?", o: ["Hech qanday yo'l yo'q", "Kayfiyat so'zini yozib (sokin, dramatik, sirli)", "Faqat o'lcham aytib", "Fayl turini o'zgartirib"], c: 1 }
      ]
    },

    {
      id: "a3_3",
      title: "Referens va axloqiy chegara",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Uslubni aniqlashtirishning bir yo'li — <b>referens</b>: «70-yillar plakat uslubida», «kinematografik estetika» kabi. Bu foydali va o'rinli. Lekin shu yerda <b>axloqiy chegara</b> ham bor: tirik rassomning nomini ishlatib, uning aynan uslubini ommaviy nusxalash yoki birovning yuzini ruxsatsiz ishlatish — muammoli. Bugun referensdan to'g'ri foydalanishni va chegarani ko'ramiz.</p>

<h3>Referens — to'g'ri foydalanish</h3>
<p>Sog'lom referens — bu <b>uslub, davr, texnika yoki kayfiyat</b>ga ishora. Masalan: «retro plakat estetikasi», «kibermakon vizuali», «klassik moybo'yoq texnikasi», «90-yillar film kadri». Bular umumiy badiiy yo'nalishlar — hech kimning shaxsiy huquqini buzmaydi va natijani aniq yo'naltiradi.</p>

<h3>Chegara qayerda</h3>
<p>Muammo <b>aniq shaxsga</b> bog'langanda boshlanadi:</p>
<ul>
  <li><b>Tirik rassom nomidan aynan nusxa</b> — uning uslubini ruxsatsiz ommaviy ishlab chiqarish; ba'zi platformalar buni cheklaydi.</li>
  <li><b>Tanilgan shaxs yuzi</b> — birovning yuzini ruxsatsiz soxta sahnada ishlatish (deepfake xavfi).</li>
  <li><b>Brend va logotip</b> — himoyalangan belgilarni ruxsatsiz qayta yaratish.</li>
</ul>
<p>Yaxshi yechim oddiy: <b>shaxsni emas, sifatni tasvirlang</b>. «Falonchi rassom uslubida» o'rniga — sizga yoqqan xususiyatlarni ayting: «qalin mo'yqalam izlari, jonli ranglar, ekspressionistik kayfiyat».</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Shaxsni emas, sifatni tasvirlang</b>Tirik rassom yoki tanilgan shaxs nomiga tayanish o'rniga, sizga yoqqan vizual xususiyatlarni so'zlar bilan tasvirlang. Bu ham axloqiy jihatdan toza, ham ko'pincha aniqroq natija beradi — chunki modelga aniq ko'rsatma berasiz.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 156" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="s33bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="s33g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0fdf4"/></linearGradient>
    <linearGradient id="s33w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fffbeb"/></linearGradient>
    <filter id="s33sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".16"/></filter>
  </defs>
  <rect width="720" height="156" rx="16" fill="url(#s33bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Referens: maqbul yondashuv va ehtiyot chegarasi</text>
  <g filter="url(#s33sh)"><rect x="56" y="50" width="278" height="86" rx="14" fill="url(#s33g)" stroke="#bbf7d0"/></g>
  <circle cx="86" cy="80" r="15" fill="#22c55e"/><path d="M80 80 l4 4 8 -9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="112" y="78" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#15803d">Maqbul: uslub va sifat</text>
  <text x="112" y="100" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">retro plakat, kinematografik</text>
  <text x="112" y="118" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">qalin mo'yqalam izlari</text>
  <g filter="url(#s33sh)"><rect x="386" y="50" width="278" height="86" rx="14" fill="url(#s33w)" stroke="#fde68a"/></g>
  <g transform="translate(416,80)"><circle r="15" fill="#f59e0b"/><path d="M0 -7 v8 M0 5 v.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>
  <text x="442" y="78" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#b45309">Ehtiyot: aniq shaxs</text>
  <text x="442" y="100" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">tirik rassom nomidan nusxa</text>
  <text x="442" y="118" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">birovning yuzi, brend logotipi</text>
</svg>
<figcaption>Uslub va sifatga ishora qiling — aniq shaxsni nusxalashdan saqlaning</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Referens uslub, davr, texnika va kayfiyatga ishora qilsa — maqbul. Tirik rassom nomidan aynan nusxa, birovning yuzini ruxsatsiz ishlatish yoki brend logotipini qayta yaratish — axloqiy/huquqiy jihatdan muammoli. Shaxsni emas, sifatni tasvirlang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi yondashuvlarni baholang: <b>maqbul</b>mi yoki <b>ehtiyot bo'lish kerak</b>mi?",
        groups: ["maqbul", "ehtiyot"],
        items: [
          { name: "70-yillar retro plakat uslubida yaratish", answer: "maqbul", hint: "Umumiy uslub/davr ishorasi — maqbul." },
          { name: "Tirik mashhur rassom nomidan aynan uning uslubida 100 ta rasm sotish", answer: "ehtiyot", hint: "Tirik rassom uslubini ruxsatsiz ommaviy nusxalash — muammoli." },
          { name: "Yumshoq akvarel va pastel ranglar uslubini so'rash", answer: "maqbul", hint: "Texnika va palitra tavsifi — maqbul." },
          { name: "Tanilgan shaxsning yuzini ruxsatsiz soxta sahnada ishlatish", answer: "ehtiyot", hint: "Birovning yuzini ruxsatsiz ishlatish — deepfake xavfi." },
          { name: "Kinematografik, dramatik yorug'lik estetikasini so'rash", answer: "maqbul", hint: "Estetika/yorug'lik ishorasi — maqbul." },
          { name: "Mashhur brend logotipini ruxsatsiz qayta yaratish", answer: "ehtiyot", hint: "Himoyalangan belgini qayta yaratish — muammoli." }
        ]
      },
      quiz: [
        { q: "Referensdan to'g'ri foydalanish qaysi?", o: ["Tirik rassom nomidan nusxa", "Uslub, davr, texnika yoki kayfiyatga ishora qilish", "Birovning yuzini ishlatish", "Brend logotipini qayta yaratish"], c: 1 },
        { q: "Axloqiy muammo asosan qachon boshlanadi?", o: ["Umumiy uslub aytilganda", "Natija aniq shaxsga (rassom/inson/brend) bog'langanda", "Rang qo'shilganda", "Yorug'lik aytilganda"], c: 1 },
        { q: "Tirik rassom nomidan aynan nusxa ko'chirish nega muammoli?", o: ["Sekin ishlaydi", "Uning uslubini ruxsatsiz ommaviy nusxalash — ba'zi platformalar cheklaydi", "Rang yo'qoladi", "Fayl buziladi"], c: 1 },
        { q: "Eng yaxshi axloqiy yechim qaysi?", o: ["Shaxs nomini ishlatish", "Shaxsni emas, sizga yoqqan sifat va xususiyatlarni tasvirlash", "Hech narsa so'ramaslik", "Faqat brend ishlatish"], c: 1 },
        { q: "Quyidagilardan qaysi biri maqbul yondashuv?", o: ["Tanilgan shaxs yuzini ruxsatsiz ishlatish", "Brend logotipini nusxalash", "Kibermakon estetikasini so'rash", "Tirik rassom nomidan 100 ta rasm sotish"], c: 2 }
      ]
    }
  ]
});
