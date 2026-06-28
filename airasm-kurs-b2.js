/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   5-modul: Vosita ustasi — parametrlar
   window.AIRASM_COURSE.modules.push({...})
   ============================================================ */
window.AIRASM_COURSE.modules.push({
  id: "b2",
  title: "Vosita ustasi: parametrlar",
  lessons: [
    {
      id: "b2_1",
      title: "Midjourney parametrlari",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Promptni yaxshi yozishni o'rgandingiz. Endi keyingi daraja — <b>parametrlar</b>: promptga qo'shiladigan qisqa buyruqlar, ular natijani nozik boshqaradi. Midjourney — eng mashhur professional vositalardan biri — bunday parametrlardan keng foydalanadi. Ularni bilsangiz, bir promptdan butunlay boshqacha natijalar olasiz. Bu darsda eng muhim Midjourney parametrlarini ko'ramiz.</p>

<h3>Asosiy parametrlar</h3>
<p>Midjourney'da parametr promptdan keyin <b>ikki tire</b> bilan yoziladi. Eng ko'p ishlatiladiganlari:</p>
<ul>
  <li><code>--ar</code> — <b>kadr nisbati</b> (aspect ratio): <code>--ar 16:9</code> keng, <code>--ar 9:16</code> vertikal, <code>--ar 1:1</code> kvadrat.</li>
  <li><code>--s</code> (stylize) — <b>badiiy stilizatsiya darajasi</b>: past qiymat promptga sodiq, yuqori qiymat ko'proq badiiy erkinlik beradi.</li>
  <li><code>--chaos</code> — <b>xilma-xillik</b>: past (masalan 10) barqaror, o'xshash variantlar; yuqori (masalan 80) kutilmagan, har xil variantlar.</li>
  <li><code>--no</code> — <b>istisno</b>: rasmda bo'lishini istamagan narsa, masalan <code>--no matn, suv belgisi</code>.</li>
  <li><code>--q</code> (quality) — ishlov sifati/vaqti; <code>--v</code> — model versiyasi.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Parametrlar — promptning «sozlamalari»</b>Prompt nimani chizishni aytsa, parametrlar uni qanday chizishni nozik boshqaradi. Maqsadingizni o'ylang: keng kino kadri kerakmi — <code>--ar 16:9</code>; izchil, o'xshash variantlar kerakmi — past <code>--chaos</code>; ko'proq badiiy ko'rinish kerakmi — yuqoriroq <code>--s</code>.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b21bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b21card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#faf2ff"/></linearGradient>
    <filter id="b21sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#7c3aed" flood-opacity=".2"/></filter>
  </defs>
  <rect width="720" height="170" rx="16" fill="url(#b21bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bitta buyruq: prompt + parametrlar</text>
  <g filter="url(#b21sh)"><rect x="40" y="44" width="640" height="100" rx="14" fill="url(#b21card)" stroke="#ead8fb"/></g>
  <rect x="40" y="44" width="640" height="22" rx="14" fill="#f3e8ff"/><rect x="40" y="56" width="640" height="10" fill="#f3e8ff"/>
  <g fill="#c4b5fd"><circle cx="56" cy="55" r="2.6"/><circle cx="66" cy="55" r="2.6"/><circle cx="76" cy="55" r="2.6"/></g>
  <text x="92" y="58.5" font-family="ui-monospace,monospace" font-size="9.5" font-weight="700" fill="#7c3aed">Midjourney</text>
  <text x="56" y="88" font-family="ui-monospace,monospace" font-size="11" fill="#334155">/imagine prompt: tumanli tog' qal'asi, sharqona uslub</text>
  <g font-family="ui-monospace,monospace" font-size="9.5" font-weight="700">
    <rect x="56" y="100" width="92" height="20" rx="10" fill="#ede9fe"/><text x="102" y="114" text-anchor="middle" fill="#6d28d9">--ar 16:9</text>
    <rect x="158" y="100" width="78" height="20" rx="10" fill="#fce7f3"/><text x="197" y="114" text-anchor="middle" fill="#a21caf">--s 400</text>
    <rect x="246" y="100" width="104" height="20" rx="10" fill="#ede9fe"/><text x="298" y="114" text-anchor="middle" fill="#6d28d9">--chaos 10</text>
    <rect x="360" y="100" width="120" height="20" rx="10" fill="#f1f5f9"/><text x="420" y="114" text-anchor="middle" fill="#475569">--no matn</text>
  </g>
  <g font-family="system-ui" font-size="8.5" fill="#94a3b8">
    <text x="102" y="134" text-anchor="middle">nisbat</text>
    <text x="197" y="134" text-anchor="middle">uslub</text>
    <text x="298" y="134" text-anchor="middle">xilma-xillik</text>
    <text x="420" y="134" text-anchor="middle">istisno</text>
  </g>
</svg>
<figcaption>Parametrlar — promptga qo'shiladigan nozik boshqaruv tugmalari</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Midjourney parametrlari promptdan keyin ikki tire bilan yoziladi: <code>--ar</code> kadr nisbati, <code>--s</code> stilizatsiya darajasi, <code>--chaos</code> xilma-xillik, <code>--no</code> istisno. Prompt nima chizishni, parametrlar qanday chizishni boshqaradi.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>keng kino kadri, kuchli badiiy uslub, izchil natija</b>. Midjourney buyrug'i bo'laklarini tanlang.",
        goal: "Keng kino kadri, kuchli badiiy uslub, izchil natija",
        slots: [
          {
            label: "Tavsif (prompt)", options: [
              { text: "tumanli tog' ustidagi qadimiy qal'a, sharqona uslub", good: true },
              { text: "qal'a", good: false, why: "Juda umumiy — aniq tavsif bering." }
            ]
          },
          {
            label: "Kadr nisbati", options: [
              { text: "--ar 1:1", good: false, why: "Kvadrat — keng kino kadri emas." },
              { text: "--ar 16:9", good: true }
            ]
          },
          {
            label: "Stilizatsiya", options: [
              { text: "--s 400", good: true },
              { text: "--s 0", good: false, why: "Stilizatsiya 0 — badiiy ko'rinish kuchsiz bo'ladi." }
            ]
          },
          {
            label: "Xilma-xillik", options: [
              { text: "--chaos 10", good: true },
              { text: "--chaos 90", good: false, why: "Yuqori chaos — natijalar juda tasodifiy, izchil emas." }
            ]
          },
          {
            label: "Istisno", options: [
              { text: "--no rang, soya", good: false, why: "Rang va soyani chiqarib tashlash kerak emas — ular foydali." },
              { text: "--no matn, suv belgisi", good: true }
            ]
          }
        ]
      },
      quiz: [
        { q: "Midjourney'da parametr qanday yoziladi?", o: ["Promptdan oldin yulduzcha bilan", "Promptdan keyin ikki tire bilan (--ar, --s)", "Alohida faylda", "Hech qanday yo'l yo'q"], c: 1 },
        { q: "<code>--ar 16:9</code> nimani belgilaydi?", o: ["Rang", "Kadr nisbatini (keng format)", "Sifatni", "Versiyani"], c: 1 },
        { q: "Izchil, bir-biriga o'xshash variantlar kerak bo'lsa, <code>--chaos</code> qanday bo'lsin?", o: ["Yuqori (80-90)", "Past (masalan 10)", "Ahamiyati yo'q", "Manfiy"], c: 1 },
        { q: "<code>--no matn, suv belgisi</code> nima qiladi?", o: ["Matn qo'shadi", "Shu narsalarni rasmdan chetlatadi", "Rangni o'chiradi", "Nisbatni o'zgartiradi"], c: 1 },
        { q: "Ko'proq badiiy, erkinroq ko'rinish uchun qaysi parametr oshiriladi?", o: ["--ar", "--no", "--s (stylize)", "--q faqat"], c: 2 }
      ]
    },

    {
      id: "b2_2",
      title: "Stable Diffusion sozlamalari",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Stable Diffusion — ochiq va bepul, eng ko'p boshqaruv beradigan vosita. Buning evaziga unda <b>ko'proq sozlama</b> bor: model, sampler, steps, CFG va seed. Bu birinchi qarashda qo'rqinchli ko'rinadi, lekin har biri oddiy mantiqqa ega. Ularni tushunsangiz, natija ustidan to'liq nazoratga ega bo'lasiz. Bugun asosiy sozlamalarni ko'ramiz.</p>

<h3>Asosiy sozlamalar</h3>
<ul>
  <li><b>Model (checkpoint)</b> — rasmning umumiy uslubini belgilaydi: fotorealistik model, anime model, badiiy model. To'g'ri model — yarim ish.</li>
  <li><b>Sampler</b> — rasmni hisoblash usuli. Turli samplerlar biroz boshqacha ko'rinish/tezlik beradi; boshlovchi uchun standart tanlov yetarli.</li>
  <li><b>Steps (qadamlar)</b> — model rasmni necha bosqichda tozalaydi. Juda kam (masalan 4) — xom; o'rtacha (taxminan 25–35) — yetarli detal. Cheksiz oshirish foyda bermaydi.</li>
  <li><b>CFG scale</b> — model promptga qanchalik qattiq amal qilishi. Past — erkinroq; o'rtacha (taxminan 6–8) — muvozanat; juda yuqori — rang «kuyadi», g'ayritabiiy bo'ladi.</li>
  <li><b>Seed</b> — tasodifiylik urug'i (keyingi darsda batafsil).</li>
</ul>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>«Ko'proq» har doim «yaxshiroq» emas</b>Yangi boshlovchilar steps va CFG'ni eng yuqoriga ko'taradi va natija yomonlashadi. Ko'pchilik holatda o'rtacha qiymatlar (steps ~30, CFG ~7) eng yaxshi ishlaydi. Avval o'rta qiymatdan boshlang, keyin bittadan o'zgartirib, ta'sirini kuzating.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 176" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b22bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b22card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#faf2ff"/></linearGradient>
    <linearGradient id="b22tr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <filter id="b22sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#7c3aed" flood-opacity=".2"/></filter>
  </defs>
  <rect width="720" height="176" rx="16" fill="url(#b22bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Stable Diffusion — asosiy sozlamalar paneli</text>
  <g filter="url(#b22sh)"><rect x="120" y="42" width="480" height="116" rx="14" fill="url(#b22card)" stroke="#ead8fb"/></g>
  <g font-family="system-ui" font-size="11" font-weight="700" fill="#475569">
    <text x="146" y="70">Model</text>
    <rect x="300" y="60" width="278" height="16" rx="8" fill="#ede9fe"/><text x="312" y="72" font-size="10" fill="#6d28d9">fotorealistik</text>
    <text x="146" y="98">Steps</text>
    <rect x="300" y="92" width="278" height="6" rx="3" fill="#e9d5ff"/><rect x="300" y="92" width="160" height="6" rx="3" fill="url(#b22tr)"/><circle cx="460" cy="95" r="7" fill="#7c3aed"/><text x="556" y="98" font-size="10" fill="#7c3aed">~30</text>
    <text x="146" y="126">CFG</text>
    <rect x="300" y="120" width="278" height="6" rx="3" fill="#e9d5ff"/><rect x="300" y="120" width="120" height="6" rx="3" fill="url(#b22tr)"/><circle cx="420" cy="123" r="7" fill="#7c3aed"/><text x="556" y="126" font-size="10" fill="#7c3aed">~7</text>
    <text x="146" y="150">Seed</text>
    <rect x="300" y="140" width="278" height="16" rx="8" fill="#f1f5f9"/><text x="312" y="152" font-size="10" font-family="ui-monospace,monospace" fill="#475569">1234567</text>
    <g transform="translate(560,148)"><rect x="-6" y="-6" width="12" height="9" rx="2" fill="#a21caf"/><path d="M-3 -6 v-2 a3 3 0 0 1 6 0 v2" stroke="#a21caf" stroke-width="1.4" fill="none"/></g>
  </g>
</svg>
<figcaption>Har sozlama oddiy mantiqqa ega — o'rta qiymatdan boshlang</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Stable Diffusion sozlamalari: model (umumiy uslub), sampler (hisoblash usuli), steps (qadamlar — ~30 yetarli), CFG (promptga sodiqlik — ~7 muvozanat), seed (tasodifiylik urug'i). «Ko'proq» har doim yaxshi emas — o'rta qiymatdan boshlab, bittadan sozlang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi sozlamalarni baholang: <b>to'g'ri sozlama</b> (odatda yaxshi natija)mi yoki <b>muammoli</b>mi?",
        groups: ["to'g'ri sozlama", "muammoli"],
        items: [
          { name: "Steps ~30 (yetarli detal)", answer: "to'g'ri sozlama", hint: "O'rtacha steps — yetarli detal beradi." },
          { name: "Steps 4 (juda kam, xom natija)", answer: "muammoli", hint: "Juda kam qadam — rasm xom va chala chiqadi." },
          { name: "CFG ~7 (prompt va erkinlik muvozanati)", answer: "to'g'ri sozlama", hint: "O'rtacha CFG — eng yaxshi muvozanat." },
          { name: "CFG 30 (haddan tashqari, kuygan ranglar)", answer: "muammoli", hint: "Juda yuqori CFG — rang kuyadi, g'ayritabiiy bo'ladi." },
          { name: "Yoqqan natijaning seed'ini saqlash", answer: "to'g'ri sozlama", hint: "Seed'ni saqlash — natijani takrorlash imkonini beradi." },
          { name: "Fotorealistik maqsadga anime modelini tanlash", answer: "muammoli", hint: "Model maqsadga mos kelmasa — uslub zid bo'ladi." }
        ]
      },
      quiz: [
        { q: "Stable Diffusion'da model (checkpoint) nimani belgilaydi?", o: ["Faqat o'lchamni", "Rasmning umumiy uslubini (foto, anime, badiiy)", "Faqat narxni", "Internet tezligini"], c: 1 },
        { q: "Steps (qadamlar) soni haqida to'g'ri fikr qaysi?", o: ["Qancha ko'p bo'lsa shuncha yaxshi, cheksiz", "Juda kam — xom; o'rtacha (~30) yetarli", "Doim 4 bo'lishi kerak", "Hech qanday ahamiyati yo'q"], c: 1 },
        { q: "CFG scale nimani boshqaradi?", o: ["Rang sonini", "Model promptga qanchalik qattiq amal qilishini", "Fayl hajmini", "Seed'ni"], c: 1 },
        { q: "Juda yuqori CFG qanday muammo beradi?", o: ["Hech qanday", "Rang «kuyadi», natija g'ayritabiiy bo'ladi", "Rasm kichrayadi", "Internet uziladi"], c: 1 },
        { q: "Boshlovchiga eng yaxshi maslahat qaysi?", o: ["Hamma sozlamani maksimumga qo'yish", "O'rta qiymatdan boshlab, bittadan o'zgartirib kuzatish", "Faqat seed'ni o'zgartirish", "Sozlamalarga tegmaslik"], c: 1 }
      ]
    },

    {
      id: "b2_3",
      title: "Seed va takrorlanuvchanlik",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Bir marta ajoyib rasm chiqdi-yu, keyin uni qayta yaratolmay qoldingizmi? Buning yechimi — <b>seed</b>. Seed — rasm yaratishni boshlaydigan tasodifiy «urug'». Uni bilsangiz, yoqqan natijani qayta tiklash yoki ustiga ozgina o'zgartirish kiritish mumkin. Bu — professional ish jarayonining muhim qismi.</p>

<h3>Seed nima</h3>
<p>Yodingizdami — diffusion model tasodifiy shovqindan boshlaydi. <b>Seed</b> — aynan shu boshlang'ich shovqinni belgilaydigan raqam. Demak: <b>bir xil prompt + bir xil seed + bir xil sozlamalar → deyarli bir xil natija</b>. Seed'ni o'zgartirsangiz — boshqacha kompozitsiya chiqadi, garchi prompt o'zgarmasa ham.</p>

<h3>Seed nima uchun foydali</h3>
<ul>
  <li><b>Takrorlash</b> — yoqqan natijaning seed'ini saqlab, uni qayta tiklaysiz.</li>
  <li><b>Nozik tahrirlash</b> — seed'ni qayd etib, promptga kichik o'zgarish kiritasiz: kompozitsiya saqlanadi, faqat o'zgartirgan joyingiz yangilanadi.</li>
  <li><b>Variantlar</b> — seed'ni o'zgartirib, bir promptdan turli variantlar olasiz.</li>
</ul>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Seed sifatni oshirmaydi</b>Keng tarqalgan adashish: «to'g'ri seed topsam, rasm chiroyli bo'ladi». Aslida seed faqat <b>qaysi</b> natija chiqishini belgilaydi, uning <b>sifatini</b> emas. Sifat promptga, modelga va sozlamalarga bog'liq. Seed esa — takrorlanuvchanlik vositasi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 178" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b23bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b23fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="b23sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <linearGradient id="b23sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a5f3fc"/><stop offset="1" stop-color="#818cf8"/></linearGradient>
    <filter id="b23sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="b23a"><rect x="46" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="b23b"><rect x="275" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="b23c"><rect x="504" y="44" width="170" height="76" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="178" rx="16" fill="url(#b23bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bir xil seed — takrorlanadigan natija; boshqa seed — boshqacha</text>
  <g filter="url(#b23sh)"><rect x="40" y="38" width="182" height="88" rx="11" fill="url(#b23fr)"/></g>
  <g clip-path="url(#b23a)"><rect x="46" y="44" width="170" height="76" fill="url(#b23sky)"/><circle cx="80" cy="68" r="11" fill="#fff7d6"/><path d="M46 120 L46 102 L96 84 L130 100 L216 86 L216 120 Z" fill="#6d28d9" opacity=".8"/></g>
  <text x="131" y="140" text-anchor="middle" font-family="ui-monospace,monospace" font-size="10" font-weight="700" fill="#7c3aed">seed 1234</text>
  <g filter="url(#b23sh)"><rect x="269" y="38" width="182" height="88" rx="11" fill="url(#b23fr)"/></g>
  <g clip-path="url(#b23b)"><rect x="275" y="44" width="170" height="76" fill="url(#b23sky)"/><circle cx="309" cy="68" r="11" fill="#fff7d6"/><path d="M275 120 L275 102 L325 84 L359 100 L445 86 L445 120 Z" fill="#6d28d9" opacity=".8"/></g>
  <text x="360" y="140" text-anchor="middle" font-family="ui-monospace,monospace" font-size="10" font-weight="700" fill="#15803d">seed 1234 → o'xshash</text>
  <g filter="url(#b23sh)"><rect x="498" y="38" width="182" height="88" rx="11" fill="url(#b23fr)"/></g>
  <g clip-path="url(#b23c)"><rect x="504" y="44" width="170" height="76" fill="url(#b23sky2)"/><circle cx="630" cy="66" r="11" fill="#e0e7ff"/><path d="M504 120 L504 96 L548 110 L598 88 L640 104 L674 92 L674 120 Z" fill="#3730a3" opacity=".75"/></g>
  <text x="589" y="140" text-anchor="middle" font-family="ui-monospace,monospace" font-size="10" font-weight="700" fill="#b45309">seed 5678 → boshqacha</text>
</svg>
<figcaption>Seed — boshlang'ich shovqinni belgilab, natijani takrorlanadigan qiladi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Seed — boshlang'ich tasodifiy shovqinni belgilaydigan raqam. Bir xil prompt + bir xil seed → deyarli bir xil natija. Seed takrorlash, nozik tahrirlash va variantlar uchun foydali — lekin sifatni emas, faqat qaysi natija chiqishini belgilaydi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Seed va takrorlanuvchanlik haqidagi fikrlarni baholang: <b>to'g'ri</b>mi yoki <b>noto'g'ri</b>mi?",
        groups: ["to'g'ri", "noto'g'ri"],
        items: [
          { name: "Bir xil prompt + bir xil seed → deyarli bir xil natija", answer: "to'g'ri", hint: "Seed boshlang'ich shovqinni qayd etadi — natija takrorlanadi." },
          { name: "Seed'ni o'zgartirsangiz, kompozitsiya o'zgaradi", answer: "to'g'ri", hint: "Boshqa seed — boshqa boshlang'ich, boshqa natija." },
          { name: "Seed rasm sifatini avtomatik oshiradi", answer: "noto'g'ri", hint: "Seed sifatga emas, qaysi natija chiqishiga ta'sir qiladi." },
          { name: "Yoqqan natijani takrorlash uchun seed'ni saqlash foydali", answer: "to'g'ri", hint: "Aynan shu — seed'ning asosiy foydasi." },
          { name: "Random (tasodifiy) seed har safar bir xil rasm beradi", answer: "noto'g'ri", hint: "Random seed har safar boshqacha natija beradi." },
          { name: "Seed — bu rasmning narxi yoki o'lchami", answer: "noto'g'ri", hint: "Seed — tasodifiylik urug'i, narx yoki o'lcham emas." }
        ]
      },
      quiz: [
        { q: "Seed nima?", o: ["Rasm narxi", "Yaratishni boshlaydigan tasodifiy «urug'» (boshlang'ich shovqin)", "Fayl formati", "Vosita versiyasi"], c: 1 },
        { q: "Bir xil prompt va bir xil seed nima beradi?", o: ["Har safar butunlay boshqa rasm", "Deyarli bir xil (takrorlanadigan) natija", "Xato", "Rang yo'qoladi"], c: 1 },
        { q: "Seed'ning asosiy foydasi nima?", o: ["Sifatni oshirish", "Natijani takrorlash va nozik tahrirlash", "Internetni tezlatish", "Faylni kichraytirish"], c: 1 },
        { q: "Seed haqidagi qaysi fikr noto'g'ri?", o: ["Seed boshlang'ich shovqinni belgilaydi", "Seed natijani takrorlash imkonini beradi", "To'g'ri seed avtomatik chiroyli rasm beradi", "Seed o'zgarsa kompozitsiya o'zgaradi"], c: 2 },
        { q: "Bir promptdan turli variantlar olish uchun nima qilasiz?", o: ["Promptni o'chirasiz", "Seed'ni o'zgartirasiz", "Vositani almashtirasiz", "Internetni o'chirasiz"], c: 1 }
      ]
    }
  ]
});
