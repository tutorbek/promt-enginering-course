/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   6-modul: Ovoz, musiqa va montaj
   window.AIVIDEO_COURSE.modules.push({...})
   ============================================================ */
window.AIVIDEO_COURSE.modules.push({
  id: "v6",
  title: "Ovoz, musiqa va montaj",
  lessons: [
    {
      id: "v6_1",
      title: "AI ovoz va lip-sync",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Ovozsiz video — yarim video. Tasvir qanchalik chiroyli bo'lmasin, <b>ovoz</b> unga jon va ma'no bag'ishlaydi. Bugun AI nafaqat tasvir, balki <b>ovoz</b>ni ham yarata oladi: diktor matni, personaj ovozi va hatto <b>lip-sync</b> (lab harakatini nutqqa moslash). Bu darsda video ovozini boyitishni va bir muhim axloqiy chegarani ko'ramiz.</p>

<h3>AI ovoz qanday yordam beradi</h3>
<ul>
  <li><b>Diktor ovozi (voiceover)</b> — videongiz uchun professional ohangdagi matn o'qish.</li>
  <li><b>Personaj ovozi</b> — animatsion personajga mos sun'iy ovoz.</li>
  <li><b>Ko'p til</b> — bir matnni turli tillarda ovozlash.</li>
  <li><b>Lip-sync</b> — personajning lab harakatini aytilayotgan nutqqa moslash; gapirayotgan «tirik» personaj effekti.</li>
</ul>

<h3>Lip-sync nima</h3>
<p>Lip-sync — personaj <b>og'zining harakati</b>ni ovoz/nutq bilan moslashtirish. Avval matn yoki ovoz berasiz, model esa personaj lablarini shunga mos harakatlantiradi. Bu — gapiruvchi avatarlar, izohlovchi videolar va personajli kontent uchun kuchli vosita.</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Ovoz klonlash — axloqiy chegara</b>AI birovning ovozini «klonlay» oladi. Lekin real odamning ovozini <b>ruxsatsiz</b> ishlatish — soxta xabar, firib yoki tuhmat uchun — axloqsiz va ko'p joyda noqonuniy. O'z ovozingiz yoki ruxsat berilgan/sun'iy ovozlardan foydalaning. (Bu haqda 8-modulda batafsil.)</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv61bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv61fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv61sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fb7185"/></linearGradient>
    <filter id="fv61sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv61c"><rect x="56" y="42" width="180" height="76" rx="7"/></clipPath>
  </defs>
  <rect width="720" height="160" rx="16" fill="url(#fv61bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Tasvir + ovoz + lip-sync = jonli video</text>
  <g filter="url(#fv61sh)"><rect x="50" y="36" width="192" height="88" rx="12" fill="url(#fv61fr)"/></g>
  <g clip-path="url(#fv61c)"><rect x="56" y="42" width="180" height="76" fill="url(#fv61sky)"/><circle cx="146" cy="74" r="22" fill="#fde68a"/><circle cx="139" cy="70" r="3" fill="#1f2937"/><circle cx="153" cy="70" r="3" fill="#1f2937"/><ellipse cx="146" cy="84" rx="6" ry="4" fill="#7c2d12"/></g>
  <text x="146" y="140" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">lablar nutqqa mos harakatlanadi</text>
  <!-- sound wave -->
  <g stroke="#dc2626" stroke-width="3" stroke-linecap="round">
    <path d="M300 80 v-8"/><path d="M312 80 v-22"/><path d="M324 80 v-14"/><path d="M336 80 v-30"/><path d="M348 80 v-18"/><path d="M360 80 v-26"/><path d="M372 80 v-10"/><path d="M384 80 v-22"/><path d="M396 80 v-16"/><path d="M408 80 v-28"/><path d="M420 80 v-12"/>
  </g>
  <g stroke="#fb923c" stroke-width="3" stroke-linecap="round">
    <path d="M300 84 v8"/><path d="M312 84 v18"/><path d="M324 84 v12"/><path d="M336 84 v24"/><path d="M348 84 v14"/><path d="M360 84 v22"/><path d="M372 84 v8"/><path d="M384 84 v18"/><path d="M396 84 v13"/><path d="M408 84 v22"/><path d="M420 84 v10"/>
  </g>
  <text x="360" y="128" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#dc2626">AI ovoz / diktor</text>
  <!-- speech badge -->
  <g filter="url(#fv61sh)"><rect x="476" y="56" width="190" height="48" rx="12" fill="#fff" stroke="#fed7aa"/></g>
  <g transform="translate(502,80)" stroke="#dc2626" fill="none" stroke-width="2.2" stroke-linecap="round"><path d="M-10 -6 h20 a3 3 0 0 1 3 3 v6 a3 3 0 0 1 -3 3 h-12 l-6 5 v-5 a3 3 0 0 1 -2 -3 v-6 a3 3 0 0 1 3 -3z"/></g>
  <text x="540" y="84" text-anchor="start" font-family="system-ui" font-size="10.5" font-weight="700" fill="#c2410c">diktor · personaj · ko'p til</text>
</svg>
<figcaption>AI ovoz va lip-sync personajni gapiruvchi, jonli qiladi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>AI ovoz videoga jon bag'ishlaydi: diktor matni, personaj ovozi, ko'p til va lip-sync (lab harakatini nutqqa moslash). Lekin real odamning ovozini ruxsatsiz klonlash — axloqsiz va ko'p joyda noqonuniy; o'z yoki ruxsat berilgan/sun'iy ovozdan foydalaning.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi ovoz ishlatishlarini baholang: <b>foydali</b> (maqbul) qo'llashmi yoki <b>ehtiyot</b> bo'lish kerakmi?",
        groups: ["foydali", "ehtiyot"],
        items: [
          { name: "Videongizga professional diktor (AI) ovozi qo'shish", answer: "foydali", hint: "Diktor ovozi — maqbul qo'llash." },
          { name: "Boshqa odamning ovozini ruxsatsiz klonlash", answer: "ehtiyot", hint: "Ruxsatsiz ovoz klonlash — muammoli." },
          { name: "O'z matningizni turli tillarda ovozlash", answer: "foydali", hint: "Ko'p til — foydali qo'llash." },
          { name: "Tanilgan shaxs ovozidan soxta xabar yasash", answer: "ehtiyot", hint: "Soxta xabar — axloqsiz, noqonuniy." },
          { name: "Animatsion personajga mos sun'iy ovoz tanlash", answer: "foydali", hint: "Sun'iy personaj ovozi — maqbul." },
          { name: "Birovni aldash uchun uning ovozini klonlash", answer: "ehtiyot", hint: "Aldash uchun klonlash — qat'iy nomaqbul." }
        ]
      },
      quiz: [
        { q: "AI ovoz videoga nima beradi?", o: ["Faqat fayl hajmi", "Jon va ma'no — diktor, personaj ovozi, ko'p til", "Faqat rang", "Tezlik"], c: 1 },
        { q: "Lip-sync nima?", o: ["Rangni o'zgartirish", "Personaj lab harakatini nutqqa moslash", "Klipni kesish", "Ovozni o'chirish"], c: 1 },
        { q: "Lip-sync qaysi kontent uchun kuchli?", o: ["Faqat manzara", "Gapiruvchi avatar, izohlovchi va personajli video", "Faqat ovozsiz", "Hech qanday"], c: 1 },
        { q: "Real odam ovozini ruxsatsiz klonlash qanday?", o: ["Muammosiz", "Axloqsiz va ko'p joyda noqonuniy", "Doim ruxsat etilgan", "Faqat texnik nuqson"], c: 1 },
        { q: "Qaysi ovozdan foydalanish to'g'ri?", o: ["Istalgan odamniki", "O'z, ruxsat berilgan yoki sun'iy ovoz", "Tanilgan shaxsniki ruxsatsiz", "Soxta xabar uchun"], c: 1 }
      ]
    },

    {
      id: "v6_2",
      title: "Fon musiqasi va ritm",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Bir xil klipni g'amgin musiqa ostida ko'rsang — yurakni siqadi; quvnoq musiqa ostida — kayfiyatni ko'taradi. <b>Musiqa</b> — videoning hissiy yuragi. To'g'ri tanlangan fon musiqasi oddiy klipni esda qoladigan asarga aylantiradi; nomos musiqa esa hatto yaxshi klipni ham buzadi. Bu darsda musiqani videoga moslashni o'rganamiz.</p>

<h3>Musiqani kayfiyatga moslash</h3>
<p>Asosiy qoida — musiqa <b>video kayfiyatiga mos</b> bo'lishi: sokin tabiat klipiga yumshoq, tinch ohang; energetik sport klipiga tez, kuchli ritm; dramatik sahnaga taranglik beruvchi musiqa. Musiqa va tasvir bir <b>his</b>ni gapirsa — ta'sir ikki barobar ortadi.</p>

<h3>Ritm va montaj</h3>
<p>Professional sir: kliplarni <b>musiqa ritmiga</b> moslab kesish. Kadr almashinuvini musiqaning kuchli zarbalariga to'g'rilang — video «jonli» va professional his beradi. Reklama oxiridagi asosiy chaqiriqni musiqa cho'qqisi bilan bog'lash ham kuchli usul.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Avval kayfiyat, keyin musiqa</b>Videongiz qanday his uyg'otishini hal qiling (quvnoq, sokin, dramatik), keyin shu hisga mos musiqa tanlang. Musiqa balandligi tasvirni «bosib ketmasin» — agar nutq bo'lsa, fon musiqasi ostida tinchroq bo'lsin.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 158" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv62bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv62g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0fdf4"/></linearGradient>
    <linearGradient id="fv62r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fef2f2"/></linearGradient>
    <filter id="fv62sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".16"/></filter>
  </defs>
  <rect width="720" height="158" rx="16" fill="url(#fv62bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Musiqa kayfiyatga mos bo'lsa — ta'sir ikki barobar</text>
  <g filter="url(#fv62sh)"><rect x="56" y="50" width="278" height="88" rx="14" fill="url(#fv62g)" stroke="#bbf7d0"/></g>
  <circle cx="86" cy="80" r="15" fill="#22c55e"/><path d="M80 80 l4 4 8 -9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="112" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#15803d">Mos tanlov</text>
  <text x="112" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">sokin klip · yumshoq ohang</text>
  <text x="112" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">sport klip · tez ritm</text>
  <g filter="url(#fv62sh)"><rect x="386" y="50" width="278" height="88" rx="14" fill="url(#fv62r)" stroke="#fecaca"/></g>
  <g transform="translate(416,80)"><circle r="15" fill="#ef4444"/><path d="M-5 -5 l10 10 M5 -5 l-10 10" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>
  <text x="442" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#b91c1c">Nomos tanlov</text>
  <text x="442" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">quvnoq klip · g'amgin musiqa</text>
  <text x="442" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">dramatik sahna · befarq fon</text>
</svg>
<figcaption>Musiqa va tasvir bir hisni gapirsa — video kuchayadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Fon musiqasi videoning hissiy yuragi — u video kayfiyatiga mos bo'lishi kerak (sokin klip → yumshoq, sport → tez ritm). Kadrlarni musiqa ritmiga moslab kessangiz, video professional his beradi. Avval kayfiyatni hal qiling, keyin musiqani tanlang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi musiqa tanlovlarini baholang: video uchun <b>mos tanlov</b>mi yoki <b>nomos</b>mi?",
        groups: ["mos tanlov", "nomos"],
        items: [
          { name: "Sokin tabiat klipiga yumshoq, tinch musiqa", answer: "mos tanlov", hint: "Kayfiyatga mos — to'g'ri tanlov." },
          { name: "Quvnoq bayram klipiga g'amgin, sekin musiqa", answer: "nomos", hint: "Kayfiyatga zid — nomos." },
          { name: "Energetik sport klipiga tez, kuchli ritm", answer: "mos tanlov", hint: "Energiya mos — to'g'ri tanlov." },
          { name: "Dramatik sahnaga befarq, e'tiborsiz fon", answer: "nomos", hint: "Dramaga befarq fon — kuchsiz tanlov." },
          { name: "Reklama chaqiriqini musiqa cho'qqisi bilan bog'lash", answer: "mos tanlov", hint: "Ritm bilan bog'lash — kuchli usul." },
          { name: "Hissiy lahzaga to'satdan baland, qo'pol shovqin", answer: "nomos", hint: "Hisni buzuvchi shovqin — nomos." }
        ]
      },
      quiz: [
        { q: "Fon musiqasi videoga nima beradi?", o: ["Faqat fayl hajmi", "Hissiy yurak — kayfiyat va ta'sir", "Faqat uzunlik", "Rang"], c: 1 },
        { q: "Musiqani tanlashda asosiy qoida nima?", o: ["Eng baland bo'lsin", "Video kayfiyatiga mos bo'lsin", "Eng uzun bo'lsin", "Hech qanday qoida yo'q"], c: 1 },
        { q: "«Ritmga moslab kesish» nima beradi?", o: ["Hech narsa", "Video jonli, professional his beradi", "Klipni o'chiradi", "Rangni buzadi"], c: 1 },
        { q: "Nutq bo'lganda fon musiqasi qanday bo'lishi kerak?", o: ["Eng baland", "Tinchroq — nutqni bosib ketmasin", "O'chiq", "Ahamiyatsiz"], c: 1 },
        { q: "Quvnoq klipga qaysi musiqa mos?", o: ["G'amgin, sekin", "Quvnoq, energetik", "Befarq shovqin", "Hech qanday"], c: 1 }
      ]
    },

    {
      id: "v6_3",
      title: "Kliplarni montaj qilish",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Yakuniy bosqich — <b>montaj</b>: alohida kliplarni, ovozni va musiqani bir butun, silliq videoga yig'ish. Aynan montaj parcha-parcha kliplarni tugallangan asarga aylantiradi. Bu darsda montajning asosiy tushunchalarini va oddiy ish tartibini o'rganamiz.</p>

<h3>Montaj asoslari</h3>
<ul>
  <li><b>Tartib</b> — kliplarni mantiqiy, hikoyaga mos ketma-ketlikda joylash.</li>
  <li><b>Kesim (cut)</b> — har klipdan faqat eng yaxshi qismni qoldirib, ortig'ini olib tashlash.</li>
  <li><b>O'tish (transition)</b> — kliplar orasidagi ulanish (oddiy kesim, eritish va h.k.). Ko'pincha sodda kesim eng yaxshi.</li>
  <li><b>Ritm</b> — kadrlar almashinuvi tezligi; musiqa va kayfiyatga mos sur'at.</li>
</ul>

<h3>Oddiy montaj tartibi</h3>
<p>Tartibli ishlang: barcha kliplarni <b>yig'ing</b> → mantiqiy <b>tartibga soling</b> → keraksiz qismlarni <b>kesing</b> → kerak bo'lsa <b>o'tish</b> qo'shing → <b>musiqa va ovoz</b> qo'shing → <b>eksport</b> qiling. Bu izchil jarayon parcha kliplardan professional video yasaydi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Sodda kesim — ko'pincha eng yaxshisi</b>Boshlovchilar har kadr orasiga murakkab effektli o'tish qo'yadi va video havaskor ko'rinadi. Professionallar esa asosan <b>oddiy kesim</b> ishlatadi. Effektga emas, kliplarning yaxshi tanlangani va ritmiga e'tibor bering.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 162" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv63bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv63fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv63sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".16"/></filter>
  </defs>
  <rect width="720" height="162" rx="16" fill="url(#fv63bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Montaj — video va audio yo'laklarni yig'ish</text>
  <g filter="url(#fv63sh)"><rect x="40" y="42" width="640" height="100" rx="13" fill="#fff" stroke="#fed7aa"/></g>
  <!-- ruler -->
  <g stroke="#fed7aa" stroke-width="1"><path d="M60 58 H660"/></g>
  <!-- video track -->
  <text x="56" y="82" font-family="system-ui" font-size="9" font-weight="700" fill="#94a3b8">VIDEO</text>
  <g>
    <rect x="100" y="68" width="120" height="26" rx="4" fill="url(#fv63fr)"/><path d="M150 75 l10 6 -10 6z" fill="#fff"/>
    <rect x="228" y="68" width="150" height="26" rx="4" fill="url(#fv63fr)" opacity=".88"/><path d="M295 75 l10 6 -10 6z" fill="#fff"/>
    <rect x="386" y="68" width="110" height="26" rx="4" fill="url(#fv63fr)" opacity=".76"/><path d="M433 75 l10 6 -10 6z" fill="#fff"/>
    <rect x="504" y="68" width="156" height="26" rx="4" fill="url(#fv63fr)" opacity=".64"/><path d="M574 75 l10 6 -10 6z" fill="#fff"/>
  </g>
  <!-- transition markers -->
  <g fill="#dc2626"><path d="M224 81 l-5 -5 5 -5 5 5z" opacity=".0"/></g>
  <!-- audio track -->
  <text x="56" y="120" font-family="system-ui" font-size="9" font-weight="700" fill="#94a3b8">AUDIO</text>
  <rect x="100" y="106" width="560" height="22" rx="4" fill="#ffedd5"/>
  <g stroke="#fb923c" stroke-width="2" stroke-linecap="round">
    <path d="M116 117 v-6"/><path d="M132 117 v-10"/><path d="M148 117 v-5"/><path d="M164 117 v-12"/><path d="M180 117 v-7"/><path d="M196 117 v-11"/><path d="M212 117 v-5"/><path d="M228 117 v-13"/><path d="M244 117 v-7"/><path d="M260 117 v-10"/><path d="M276 117 v-5"/><path d="M292 117 v-12"/><path d="M308 117 v-8"/><path d="M324 117 v-11"/><path d="M340 117 v-5"/><path d="M356 117 v-13"/><path d="M372 117 v-7"/><path d="M388 117 v-10"/><path d="M404 117 v-6"/><path d="M420 117 v-12"/><path d="M436 117 v-7"/><path d="M452 117 v-11"/><path d="M468 117 v-5"/><path d="M484 117 v-12"/><path d="M500 117 v-8"/><path d="M516 117 v-10"/><path d="M532 117 v-6"/><path d="M548 117 v-13"/><path d="M564 117 v-7"/><path d="M580 117 v-10"/><path d="M596 117 v-6"/><path d="M612 117 v-12"/><path d="M628 117 v-7"/><path d="M644 117 v-9"/>
  </g>
</svg>
<figcaption>Video kliplari va musiqa yo'lagi montajda yagona videoga birlashadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Montaj — kliplar, ovoz va musiqani bir butun videoga yig'ish: tartib, kesim, o'tish va ritm. Tartib: yig'ish → tartiblash → kesish → o'tish → musiqa/ovoz → eksport. Ko'pincha sodda kesim eng yaxshisi — effektga emas, klip tanlovi va ritmga e'tibor bering.</span></div>`,
      sim: {
        type: "order",
        intro: "Kliplardan tayyor video yig'ish (montaj) bosqichlarini <b>to'g'ri tartibga</b> joylashtiring.",
        steps: [
          "Barcha kliplarni bir joyga yig'ing",
          "Kliplarni mantiqiy, hikoyaga mos tartibga soling",
          "Har klipdan keraksiz qismlarni kesib tashlang",
          "Kerak bo'lganda kliplar orasiga o'tish qo'shing",
          "Musiqa va ovozni qo'shib, ritmga moslang",
          "Tayyor videoni eksport qiling"
        ]
      },
      quiz: [
        { q: "Montaj nima?", o: ["Klip yaratish", "Kliplar, ovoz va musiqani bir butun videoga yig'ish", "Rangni o'zgartirish", "Prompt yozish"], c: 1 },
        { q: "«Kesim (cut)» nima qiladi?", o: ["Klipni o'chiradi", "Har klipdan faqat eng yaxshi qismni qoldiradi", "Rang qo'shadi", "Ovozni baland qiladi"], c: 1 },
        { q: "Boshlovchilar montajda qanday xato qiladi?", o: ["Sodda kesim ishlatadi", "Har kadr orasiga murakkab effektli o'tish qo'yadi", "Musiqa qo'shadi", "Kliplarni tartiblaydi"], c: 1 },
        { q: "Professional montajda asosan qaysi o'tish ishlatiladi?", o: ["Murakkab effektlar", "Oddiy kesim", "Hech qanday", "Faqat eritish"], c: 1 },
        { q: "Montaj tartibida eng oxirgi qadam qaysi?", o: ["Kliplarni yig'ish", "Tartiblash", "Tayyor videoni eksport qilish", "Kesish"], c: 2 }
      ]
    }
  ]
});
