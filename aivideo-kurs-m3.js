/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   3-modul: Harakat va kamera tili
   window.AIVIDEO_COURSE.modules.push({...})
   ============================================================ */
window.AIVIDEO_COURSE.modules.push({
  id: "v3",
  title: "Harakat va kamera tili",
  lessons: [
    {
      id: "v3_1",
      title: "Kamera harakati turlari",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Kino tilini bilgan odam videoni boshqaradi. Subyekt harakatini o'tgan modulda ko'rdik; endi <b>kamera harakati</b>ga o'tamiz. Kameraning qanday siljishi sahnaning his-tuyg'usini butunlay o'zgartiradi — bir xil sahna pastdan ko'tarilsa ulug'vor, atrofida aylansa dinamik bo'ladi. Bu darsda asosiy kamera harakatlarini va ularni promptda qanday so'rashni o'rganamiz.</p>

<h3>Asosiy kamera harakatlari</h3>
<ul>
  <li><b>Pan</b> — kamera o'rnida turib <b>chapdan o'ngga</b> (yoki teskari) buriladi. Manzarani kuzatish uchun.</li>
  <li><b>Tilt</b> — kamera o'rnida turib <b>yuqoridan pastga</b> buriladi. Baland bino yoki odamni ko'rsatish uchun.</li>
  <li><b>Zoom</b> — kamera joyida turib linza orqali <b>yaqinlashtiradi/uzoqlashtiradi</b>.</li>
  <li><b>Dolly</b> — kamera <b>fizik ravishda oldinga/orqaga</b> harakatlanadi. Sahnaga «kirib borish» effekti.</li>
  <li><b>Tracking</b> — kamera subyekt bilan <b>yonma-yon</b> harakatlanadi. Yuguruvchini kuzatish uchun.</li>
  <li><b>Orbit</b> — kamera subyekt <b>atrofida aylanadi</b>. Mahsulot yoki personajni ta'sirli ko'rsatish uchun.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Kamera promptda aniq aytiladi</b>Modelga aynan qaysi harakat kerakligini ayting: «sekin oldinga dolly», «chapdan o'ngga pan», «subyekt atrofida orbit». Bu so'zlar professional kino tilidan olingan va model ularni yaxshi tushunadi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 178" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv31bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv31fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv31sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
  </defs>
  <rect width="720" height="178" rx="16" fill="url(#fv31bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Kamera harakatlari — har biri boshqacha his beradi</text>
  <g font-family="system-ui" font-size="10.5" font-weight="700" fill="#c2410c">
    <g filter="url(#fv31sh)"><rect x="34" y="46" width="150" height="84" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <rect x="48" y="60" width="122" height="44" rx="6" fill="#ffedd5"/><path d="M64 82 h94" stroke="#dc2626" stroke-width="2.4" marker-start="url(#fv31l)" marker-end="url(#fv31r)"/>
    <text x="109" y="122" text-anchor="middle">Pan (chap↔o'ng)</text>
    <g filter="url(#fv31sh)"><rect x="200" y="46" width="150" height="84" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <rect x="214" y="60" width="122" height="44" rx="6" fill="#ffedd5"/><path d="M275 66 v32" stroke="#dc2626" stroke-width="2.4" marker-start="url(#fv31u)" marker-end="url(#fv31d)"/>
    <text x="275" y="122" text-anchor="middle">Tilt (yuqori↕past)</text>
    <g filter="url(#fv31sh)"><rect x="366" y="46" width="150" height="84" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <rect x="380" y="60" width="122" height="44" rx="6" fill="#ffedd5"/><rect x="420" y="70" width="42" height="24" rx="3" fill="none" stroke="#dc2626" stroke-width="2.4"/><path d="M441 82 m-9 0 h18 M441 82 m0 -9 v18" stroke="#dc2626" stroke-width="2"/>
    <text x="441" y="122" text-anchor="middle">Zoom (yaqin/uzoq)</text>
    <g filter="url(#fv31sh)"><rect x="532" y="46" width="154" height="84" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <rect x="546" y="60" width="126" height="44" rx="6" fill="#ffedd5"/><path d="M560 82 h98" stroke="#dc2626" stroke-width="2.4" stroke-dasharray="2 3" marker-end="url(#fv31r)"/><circle cx="560" cy="82" r="4" fill="#dc2626"/>
    <text x="609" y="122" text-anchor="middle">Dolly (fizik siljish)</text>
  </g>
  <text x="360" y="150" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#94a3b8">+ tracking (yonma-yon) va orbit (atrofida aylanish)</text>
  <defs>
    <marker id="fv31r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 Z" fill="#dc2626"/></marker>
    <marker id="fv31l" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto"><path d="M8 0 L1 4 L8 8 Z" fill="#dc2626"/></marker>
    <marker id="fv31u" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto"><path d="M0 8 L4 1 L8 8 Z" fill="#dc2626"/></marker>
    <marker id="fv31d" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0 0 L4 7 L8 0 Z" fill="#dc2626"/></marker>
  </defs>
</svg>
<figcaption>Kamera harakatini promptda kino tilida aniq ayting</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Asosiy kamera harakatlari: pan (chap-o'ng buriladi), tilt (yuqori-past buriladi), zoom (linza yaqinlashtiradi), dolly (fizik siljiydi), tracking (yonma-yon) va orbit (atrofida aylanadi). Kamerani promptda aniq, kino tilida ayting.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi kamera harakatlarini ajrating: kamera <b>fizik siljiydi</b>mi (joyini o'zgartiradi) yoki <b>o'rnida buriladi/linza</b>mi (joyida turadi)?",
        groups: ["fizik siljiydi", "o'rnida turadi"],
        items: [
          { name: "dolly — kamera oldinga/orqaga fizik harakatlanadi", answer: "fizik siljiydi", hint: "Dolly — kamera joyini o'zgartiradi." },
          { name: "pan — kamera o'rnida chapdan o'ngga buriladi", answer: "o'rnida turadi", hint: "Pan — kamera o'rnida buriladi." },
          { name: "tracking — kamera subyekt bilan yonma-yon harakatlanadi", answer: "fizik siljiydi", hint: "Tracking — kamera fizik harakatlanadi." },
          { name: "tilt — kamera o'rnida yuqoridan pastga buriladi", answer: "o'rnida turadi", hint: "Tilt — o'rnida vertikal buriladi." },
          { name: "orbit — kamera subyekt atrofida aylanib harakatlanadi", answer: "fizik siljiydi", hint: "Orbit — kamera atrofida aylanib siljiydi." },
          { name: "zoom — kamera joyida turib linza yaqinlashtiradi", answer: "o'rnida turadi", hint: "Zoom — linza ishi, kamera joyida turadi." }
        ]
      },
      quiz: [
        { q: "«Pan» kamera harakati nima?", o: ["Kamera fizik oldinga yuradi", "Kamera o'rnida chapdan o'ngga buriladi", "Linza yaqinlashtiradi", "Kamera aylanadi"], c: 1 },
        { q: "«Dolly» nima?", o: ["Kamera o'rnida buriladi", "Kamera fizik oldinga/orqaga harakatlanadi", "Faqat linza ishi", "Rang o'zgaradi"], c: 1 },
        { q: "Mahsulotni atrofidan ta'sirli ko'rsatish uchun qaysi harakat mos?", o: ["Tilt", "Orbit (atrofida aylanish)", "Zoom out", "Statik"], c: 1 },
        { q: "Yuguruvchini yonidan kuzatish uchun qaysi harakat?", o: ["Pan", "Tracking (yonma-yon)", "Zoom", "Tilt"], c: 1 },
        { q: "Kamera harakatini qanday boshqarasiz?", o: ["Hech qanday yo'l yo'q", "Promptda kino tilida aniq aytib (sekin dolly, chapdan pan)", "Faqat rang aytib", "Fayl nomidan"], c: 1 }
      ]
    },

    {
      id: "v3_2",
      title: "Harakat tezligi: sekin-tasvir va time-lapse",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Harakatning <b>tezligi</b> — kuchli badiiy vosita. Suv tomchisining sachrashini sekinlashtirsangiz, oddiy lahza ta'sirli san'atga aylanadi. Gulning ochilishini tezlashtirsangiz, soatlab davom etadigan jarayonni bir necha soniyada ko'rsatasiz. Bu darsda <b>sekin-tasvir (slow motion)</b> va <b>time-lapse</b> (tezlashtirilgan)ni qanday va qachon ishlatishni ko'ramiz.</p>

<h3>Sekin-tasvir (slow motion)</h3>
<p>Harakatni sekinlashtirib, har bir lahzani <b>cho'zib</b> ko'rsatadi. Mos holatlar: dramatik sport lahzasi, suv/chang sachrashi, hissiy cho'qqi, mayda harakatni diqqat bilan ko'rsatish. Promptda: «sekin-tasvir (slow motion)», «super sekin».</p>

<h3>Time-lapse (tezlashtirilgan)</h3>
<p>Uzoq vaqtni <b>siqib</b>, tez ko'rsatadi. Mos holatlar: quyosh botishi, bulutlar oqishi, gulning ochilishi, shahar hayoti, qurilish jarayoni. Promptda: «time-lapse», «tezlashtirilgan».</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Tezlik — bu hissiyot</b>Sekin-tasvir <b>e'tibor va dramani</b> kuchaytiradi: tomoshabin har detalni ko'radi. Time-lapse <b>vaqt o'tishini va miqyosni</b> ko'rsatadi. Avval qanday his uyg'otmoqchi ekaningizni hal qiling — keyin mos tezlikni tanlang.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 166" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv32bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv32fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv32sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
  </defs>
  <rect width="720" height="166" rx="16" fill="url(#fv32bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Tezlik — vaqtni cho'zish yoki siqish</text>
  <!-- slow motion -->
  <g filter="url(#fv32sh)"><rect x="50" y="44" width="290" height="98" rx="13" fill="#fff" stroke="#fed7aa"/></g>
  <text x="195" y="66" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#dc2626">Sekin-tasvir (slow motion)</text>
  <g fill="#fb923c"><rect x="72" y="86" width="42" height="34" rx="4"/><rect x="124" y="86" width="42" height="34" rx="4"/><rect x="176" y="86" width="42" height="34" rx="4"/><rect x="228" y="86" width="42" height="34" rx="4"/><rect x="280" y="86" width="42" height="34" rx="4"/></g>
  <text x="195" y="135" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">ko'p kadr · har lahza cho'zilgan</text>
  <!-- time-lapse -->
  <g filter="url(#fv32sh)"><rect x="380" y="44" width="290" height="98" rx="13" fill="#fff" stroke="#fed7aa"/></g>
  <text x="525" y="66" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#c2410c">Time-lapse (tezlashtirilgan)</text>
  <g fill="#fdba74"><rect x="402" y="86" width="20" height="34" rx="3"/><rect x="430" y="86" width="20" height="34" rx="3"/><rect x="458" y="86" width="20" height="34" rx="3"/><rect x="486" y="86" width="20" height="34" rx="3"/><rect x="514" y="86" width="20" height="34" rx="3"/><rect x="542" y="86" width="20" height="34" rx="3"/><rect x="570" y="86" width="20" height="34" rx="3"/><rect x="598" y="86" width="20" height="34" rx="3"/><rect x="626" y="86" width="20" height="34" rx="3"/></g>
  <text x="525" y="135" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">uzoq vaqt · siqilgan</text>
</svg>
<figcaption>Sekin-tasvir lahzani cho'zadi; time-lapse uzoq vaqtni siqadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Sekin-tasvir (slow motion) harakatni cho'zib, dramani va detalni kuchaytiradi (sport, sachrash, hissiy lahza). Time-lapse uzoq vaqtni siqib ko'rsatadi (quyosh botishi, bulutlar, gul ochilishi). Avval kerakli hisni hal qiling, keyin tezlikni tanlang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi maqsadlar uchun qaysi tezlik mos: <b>sekin-tasvir</b> (cho'zish)mi yoki <b>time-lapse</b> (siqish)mi?",
        groups: ["sekin-tasvir", "time-lapse"],
        items: [
          { name: "Suv sachrashining har tomchisini ta'sirli ko'rsatish", answer: "sekin-tasvir", hint: "Mayda, tez lahzani cho'zish — slow motion." },
          { name: "Gulning ochilishini bir necha soniyada ko'rsatish", answer: "time-lapse", hint: "Uzoq jarayonni siqish — time-lapse." },
          { name: "Yuguruvchining dramatik, kuchli sakrash lahzasi", answer: "sekin-tasvir", hint: "Dramatik lahzani cho'zish — slow motion." },
          { name: "Bulutlarning kun davomida tez oqishini ko'rsatish", answer: "time-lapse", hint: "Uzoq vaqt — time-lapse." },
          { name: "Suzuvchi sochning shamolda silkinishini cho'zib ko'rsatish", answer: "sekin-tasvir", hint: "Nozik harakatni cho'zish — slow motion." },
          { name: "Quyosh botishini siqib, tez ko'rsatish", answer: "time-lapse", hint: "Uzoq jarayonni tezlashtirish — time-lapse." }
        ]
      },
      quiz: [
        { q: "Sekin-tasvir (slow motion) nima qiladi?", o: ["Uzoq vaqtni siqadi", "Harakatni cho'zib, lahzani dramatik qiladi", "Rangni o'chiradi", "Kamerani aylantiradi"], c: 1 },
        { q: "Time-lapse nima qiladi?", o: ["Harakatni cho'zadi", "Uzoq vaqtni siqib, tez ko'rsatadi", "Faqat sifatni oshiradi", "Ovoz qo'shadi"], c: 1 },
        { q: "Quyosh botishini ko'rsatish uchun qaysi tezlik?", o: ["Sekin-tasvir", "Time-lapse", "Normal va boshqasi yo'q", "Hech qaysi"], c: 1 },
        { q: "Sport lahzasini dramatik qilish uchun?", o: ["Time-lapse", "Sekin-tasvir (slow motion)", "Faqat zoom", "Statik"], c: 1 },
        { q: "Tezlikni tanlashda birinchi nima hal qilinadi?", o: ["Fayl hajmi", "Qanday his uyg'otmoqchi ekaningiz", "Vosita narxi", "Internet tezligi"], c: 1 }
      ]
    },

    {
      id: "v3_3",
      title: "Harakat va kamerani birlashtirish",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi eng muhim mahorat: <b>subyekt harakati</b> va <b>kamera harakati</b>ni bitta jonli, mantiqiy kadrga birlashtirish. Aynan shu professional klipni havaskor klipdan ajratadi. Bu darsda ikkisini uyg'un birlashtirib, ta'sirli kadr qurishni amalda mashq qilamiz.</p>

<h3>Birlashtirish mantig'i</h3>
<p>Yaxshi kadrda subyekt va kamera <b>bir-birini to'ldiradi</b>: agar subyekt oldinga yugursa, kamera uni tracking bilan kuzatishi mumkin; agar subyekt tinch tursa, kamera orbit bilan unga jon bag'ishlaydi. Asosiy qoida — <b>bitta asosiy subyekt harakati + bitta mos kamera harakati</b>. Ikkalasini ham aniq, lekin sodda tasvirlang.</p>

<h3>Misol bilan</h3>
<div class="pk-ex pk-bad"><span class="tag">Zaif</span>tog' cho'qqisi</div>
<div class="pk-ex pk-good"><span class="tag">Kuchli</span>tog' cho'qqisida turgan sayyoh, shamol kiyimini tebratadi (subyekt harakati), kamera sekin pastdan yuqoriga ko'tariladi va cho'qqini ochadi (kamera harakati), oltin soat, kinematografik</div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Ko'p harakat — buzilish</b>Bir klipga uchta subyekt harakati va ikkita kamera harakatini tiqishtirmang — model dovdiraydi. <b>Bitta + bitta</b> qoidasiga amal qiling: bitta aniq subyekt harakati, bitta mos kamera harakati. Murakkabni keyin montajda yig'asiz.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv33bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv33fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv33sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fb7185"/></linearGradient>
    <filter id="fv33sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv33c"><rect x="266" y="48" width="188" height="84" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="170" rx="16" fill="url(#fv33bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bitta subyekt harakati + bitta kamera harakati</text>
  <g filter="url(#fv33sh)"><rect x="256" y="40" width="208" height="100" rx="13" fill="url(#fv33fr)"/></g>
  <g clip-path="url(#fv33c)"><rect x="266" y="48" width="188" height="84" fill="url(#fv33sky)"/><circle cx="300" cy="74" r="11" fill="#fff7d6"/><path d="M266 132 L266 110 L320 86 L360 106 L454 88 L454 132 Z" fill="#7c2d12" opacity=".7"/><circle cx="360" cy="96" r="7" fill="#1f2937"/><rect x="356" y="100" width="8" height="18" rx="3" fill="#1f2937"/></g>
  <!-- subyekt harakat -->
  <g stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"><path d="M376 92 q8 -3 14 0"/><path d="M378 100 q9 -3 16 0"/></g>
  <!-- kamera harakat arrow (pastdan yuqoriga) -->
  <path d="M360 158 V134" stroke="#dc2626" stroke-width="2.6" marker-end="url(#fv33u)"/>
  <text x="150" y="76" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#dc2626">Subyekt:</text>
  <text x="150" y="94" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#64748b">shamol kiyimni tebratadi</text>
  <text x="572" y="76" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#dc2626">Kamera:</text>
  <text x="572" y="94" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#64748b">pastdan yuqoriga ko'tariladi</text>
  <defs><marker id="fv33u" markerWidth="9" markerHeight="9" refX="4.5" refY="2" orient="auto"><path d="M0 9 L4.5 1 L9 9 Z" fill="#dc2626"/></marker></defs>
</svg>
<figcaption>Subyekt va kamera bir-birini to'ldirsa — kadr jonli va professional bo'ladi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Professional kadr — subyekt harakati va kamera harakatining uyg'unligi. Asosiy qoida: bitta aniq subyekt harakati + bitta mos kamera harakati. Ikkalasini ham aniq, lekin sodda tasvirlang; ko'p harakat tiqishtirmang.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>dramatik sport lahzasi — kuchli kamera bilan</b>. Har bo'lim uchun maqsadga mos variantni tanlang.",
        goal: "Dramatik sport lahzasi — kuchli kamera bilan",
        slots: [
          {
            label: "Sahna", options: [
              { text: "stadionda gol urayotgan futbolchi", good: true },
              { text: "sport", good: false, why: "Sahna juda umumiy." }
            ]
          },
          {
            label: "Subyekt harakati", options: [
              { text: "to'pni kuchli zarba bilan uradi, tana cho'ziladi", good: true },
              { text: "joyida turadi", good: false, why: "Statik — dramatik sport lahzasi emas." }
            ]
          },
          {
            label: "Kamera harakati", options: [
              { text: "to'p bilan birga sekin tracking", good: true },
              { text: "tasodifiy silkinish", good: false, why: "Tasodifiy silkinish kuchli kamera emas." }
            ]
          },
          {
            label: "Tezlik", options: [
              { text: "tezlashtirilgan time-lapse", good: false, why: "Time-lapse dramatik lahzaga mos emas." },
              { text: "sekin-tasvir (slow motion)", good: true }
            ]
          },
          {
            label: "Uslub", options: [
              { text: "kinematografik, yuqori kontrast", good: true },
              { text: "past sifat veb-kamera", good: false, why: "Past sifat dramatik maqsadga zid." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Professional kadrning asosiy siri nima?", o: ["Faqat yorqin rang", "Subyekt harakati va kamera harakatining uyg'unligi", "Faqat uzun klip", "Ovoz balandligi"], c: 1 },
        { q: "Birlashtirishning asosiy qoidasi qaysi?", o: ["Iloji boricha ko'p harakat", "Bitta subyekt harakati + bitta mos kamera harakati", "Hech qanday harakat", "Faqat kamera harakati"], c: 1 },
        { q: "Subyekt oldinga yugursa, kamera qanday harakat qilishi mumkin?", o: ["Tinch turishi", "Tracking bilan uni kuzatishi", "Aylanib ketishi", "O'chishi"], c: 1 },
        { q: "Bir klipga ko'p harakat tiqishtirsangiz nima bo'ladi?", o: ["Eng yaxshi natija", "Model dovdiraydi, klip buziladi", "Klip uzayadi", "Rang yaxshilanadi"], c: 1 },
        { q: "Subyekt tinch tursa, kamera unga qanday jon bag'ishlashi mumkin?", o: ["Hech qanday", "Orbit bilan atrofida aylanib", "Faqat zoom out", "O'chib qolib"], c: 1 }
      ]
    }
  ]
});
