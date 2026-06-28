/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   2-modul: Video prompt asoslari
   window.AIVIDEO_COURSE.modules.push({...})
   ============================================================ */
window.AIVIDEO_COURSE.modules.push({
  id: "v2",
  title: "Video prompt asoslari",
  lessons: [
    {
      id: "v2_1",
      title: "Video prompt anatomiyasi",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Rasm promptini eslang: subyekt, tafsilot, uslub, yorug'lik, kompozitsiya. Video promptida bularning hammasi bor, lekin <b>ikkita yangi, eng muhim qism</b> qo'shiladi: <b>harakat</b> (subyekt nima qiladi) va <b>kamera</b> (kamera qanday siljiydi). Aynan shu ikkisi statik rasmni jonli klipga aylantiradi. Bu darsda kuchli video promptning tuzilmasini o'rganamiz.</p>

<h3>Kuchli video promptning besh qismi</h3>
<ul>
  <li><b>Sahna</b> — kim/nima va qayerda: «dengiz bo'yida oltin retriver it».</li>
  <li><b>Harakat</b> — subyekt nima qiladi: «to'lqinlar yonida quvnoq yuguradi, suv sachraydi».</li>
  <li><b>Kamera</b> — kamera qanday harakatlanadi: «yon tomondan silliq dolly harakati».</li>
  <li><b>Atmosfera</b> — yorug'lik va kayfiyat: «oltin soat, iliq quyosh nuri».</li>
  <li><b>Uslub</b> — umumiy ko'rinish: «kinematografik, sekin harakat».</li>
</ul>

<h3>Hammasini birlashtirsak</h3>
<p>Beshta qismni ulasak, mana shunday to'liq video prompt chiqadi:</p>
<div class="pk-ex pk-good"><span class="tag">To'liq video prompt</span>dengiz bo'yida oltin retriver it, to'lqinlar yonida quvnoq yuguradi va suv sachraydi, yon tomondan silliq dolly harakati, oltin soat iliq yorug'ligi, kinematografik sekin harakat</div>
<p>Bu yerda hech qanday murakkab atama yo'q — faqat <b>aniq sahna, aniq harakat va aniq kamera</b>. Aynan shu AI'ni sizning tasavvuringizdagi klipga yo'naltiradi.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Harakat va kamera — alohida ikki narsa</b>Eng ko'p uchraydigan chalkashlik: subyekt harakati va kamera harakatini aralashtirish. «It yuguradi» — bu subyekt harakati. «Kamera it bilan birga siljiydi» — bu kamera harakati. Ikkalasini alohida, aniq ayting (kamera tilini keyingi modulda chuqur ko'ramiz).</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 212" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv21bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv21c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv21sh" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#dc2626" flood-opacity=".3"/></filter>
    <filter id="fv21g" x="-30%" y="-30%" width="160%" height="190%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#16a34a" flood-opacity=".32"/></filter>
    <marker id="fv21a" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#fb923c"/></marker>
  </defs>
  <rect width="720" height="212" rx="16" fill="url(#fv21bg)"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Besh qism — harakat va kamera klipni jonlantiradi</text>
  <g font-family="system-ui">
    <g filter="url(#fv21sh)"><rect x="40" y="54" width="120" height="50" rx="12" fill="url(#fv21c)"/></g>
    <circle cx="58" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="58" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">1</text>
    <text x="111" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Sahna</text><text x="100" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">kim / qayerda</text>
    <g filter="url(#fv21sh)"><rect x="170" y="54" width="120" height="50" rx="12" fill="url(#fv21c)"/></g>
    <circle cx="188" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="188" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">2</text>
    <text x="241" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Harakat</text><text x="230" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">nima qiladi</text>
    <g filter="url(#fv21sh)"><rect x="300" y="54" width="120" height="50" rx="12" fill="url(#fv21c)"/></g>
    <circle cx="318" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="318" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">3</text>
    <text x="371" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Kamera</text><text x="360" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">qanday siljiydi</text>
    <g filter="url(#fv21sh)"><rect x="430" y="54" width="120" height="50" rx="12" fill="url(#fv21c)"/></g>
    <circle cx="448" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="448" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">4</text>
    <text x="501" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Atmosfera</text><text x="490" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">yorug'lik</text>
    <g filter="url(#fv21sh)"><rect x="560" y="54" width="120" height="50" rx="12" fill="url(#fv21c)"/></g>
    <circle cx="578" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="578" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">5</text>
    <text x="623" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Uslub</text><text x="620" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">ko'rinish</text>
  </g>
  <path d="M360 110 V128" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv21a)"/>
  <g filter="url(#fv21g)"><rect x="150" y="134" width="420" height="52" rx="13" fill="#ecfdf5" stroke="#bbf7d0"/></g>
  <circle cx="186" cy="160" r="12" fill="#22c55e"/><path d="M182 154 l9 6 -9 6z" fill="#fff"/>
  <text x="376" y="165" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#15803d">Aniq sahna + harakat + kamera = jonli klip</text>
</svg>
<figcaption>Harakat va kamera qismlari videoni statik rasmdan ajratadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Kuchli video prompt besh qismdan tuziladi: sahna, harakat, kamera, atmosfera, uslub. Harakat (subyekt nima qiladi) va kamera (kamera qanday siljiydi) — videoni rasmdan ajratuvchi asosiy qismlar; ularni alohida va aniq ayting.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>kinematografik klip — dengiz bo'yida yuguruvchi it</b>. Har bo'lim uchun eng kuchli variantni tanlang — prompt jonli yig'iladi.",
        goal: "Kinematografik klip — dengiz bo'yida yuguruvchi it",
        slots: [
          {
            label: "Sahna", options: [
              { text: "dengiz bo'yida oltin retriver it", good: true },
              { text: "it", good: false, why: "Juda umumiy — sahna va joy aniq emas." }
            ]
          },
          {
            label: "Harakat", options: [
              { text: "joyida turadi", good: false, why: "Statik — videoda harakat bo'lishi kerak." },
              { text: "to'lqinlar yonida quvnoq yuguradi, suv sachraydi", good: true }
            ]
          },
          {
            label: "Kamera", options: [
              { text: "yon tomondan silliq dolly harakati", good: true },
              { text: "tartibsiz silkinuvchi kamera", good: false, why: "Tartibsiz silkinish kinematografik emas — sifatni buzadi." }
            ]
          },
          {
            label: "Atmosfera", options: [
              { text: "yorug'lik bilan", good: false, why: "Qanday yorug'lik ekani aytilmagan." },
              { text: "oltin soat, iliq quyosh nuri", good: true }
            ]
          },
          {
            label: "Uslub", options: [
              { text: "kinematografik, sekin harakat", good: true },
              { text: "past sifat veb-kamera", good: false, why: "Past sifat veb-kamera kinematografik maqsadga zid." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Video promptga rasm promptidan farqli ravishda qaysi ikki qism qo'shiladi?", o: ["Narx va hajm", "Harakat va kamera", "Sana va format", "Rang va o'lcham"], c: 1 },
        { q: "Kuchli video promptning beshta qismi qaysi?", o: ["Narx, hajm, format, rang, sana", "Sahna, harakat, kamera, atmosfera, uslub", "Faqat sahna", "Vosita, ilova, bot, sayt, narx"], c: 1 },
        { q: "«Harakat» qismi nimani belgilaydi?", o: ["Rasm narxini", "Subyekt nima qilishini", "Fayl hajmini", "Kamera markasini"], c: 1 },
        { q: "«It yuguradi» va «kamera it bilan siljiydi» — bu ikkisi nima?", o: ["Bir xil narsa", "Subyekt harakati va kamera harakati — alohida ikki narsa", "Ikkalasi ham noto'g'ri", "Faqat uslub"], c: 1 },
        { q: "Video promptni qismlarga bo'lib o'ylash nega foydali?", o: ["Klip tez chiqadi", "Sahna, harakat va kamerani aniq ko'rsatib, jonli natija beradi", "Internet tejaladi", "Vosita arzonlashadi"], c: 1 }
      ]
    },

    {
      id: "v2_2",
      title: "Statikdan harakatga — promptni boyitish",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi bilasizki, video prompt sahna, harakat va kameradan tuziladi. Lekin amalda ko'pchilik baribir <b>statik, harakatsiz</b> prompt yozadi — keyin natija jonsiz chiqadi. Bu darsda bir g'oyani statikdan jonliga qanday «boyitish»ni ko'ramiz. Bu — AI videoda eng kuchli tezkor g'alaba.</p>

<h3>Nega statik prompt zaif</h3>
<p>«shahar ko'chasi» deb yozsangiz, modelga <b>nima harakatlanishini aytmadingiz</b>. U taxmin qiladi: ehtimol deyarli qimirlamaydigan, jonsiz klip beradi yoki tasodifiy g'alati harakat qo'shadi. Video — bu harakat; agar harakatni tasvirlamasangiz, videoning eng muhim qismini tashlab ketgan bo'lasiz.</p>

<h3>Boyitishning uch yo'nalishi</h3>
<p>Statik promptni jonlantirish uchun uchta savolga javob bering:</p>
<ul>
  <li><b>Nima harakatlanadi?</b> — subyekt harakati: «mashinalar o'tib turadi, odamlar yuradi».</li>
  <li><b>Kamera qanday harakatlanadi?</b> — «sekin oldinga dolly», «yuqoridan pastga tilt».</li>
  <li><b>Qanday atmosfera va uslub?</b> — «tunda, neon, kinematografik».</li>
</ul>
<p>Mana bir g'oyaning bosqichma-bosqich jonlanishi:</p>
<div class="pk-ex pk-bad"><span class="tag">Statik</span>shahar ko'chasi</div>
<div class="pk-ex"><span class="tag">Jonlanmoqda</span>tunda shahar ko'chasi, mashinalar o'tib turadi</div>
<div class="pk-ex pk-good"><span class="tag">Jonli</span>tunda yomg'irli shahar ko'chasi, neon chiroqlar suvda aks etadi, mashinalar o'tib turadi, sekin oldinga dolly harakati, kinematografik</div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Aniqlik ≠ ko'p zid harakat</b>Harakat qo'shish foydali, lekin bir qisqa klipga o'nta turli harakatni tiqishtirmang — model dovdiraydi va buzilgan natija beradi. Maqsad — <b>bitta aniq asosiy harakat</b> + mos kamera. Murakkab voqeani bir nechta klipdan montaj qiling.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv22bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv22fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv22sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e1b4b"/><stop offset="1" stop-color="#7c2d12"/></linearGradient>
    <filter id="fv22sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv22a"><rect x="56" y="50" width="180" height="70" rx="7"/></clipPath>
    <clipPath id="fv22b"><rect x="484" y="50" width="180" height="70" rx="7"/></clipPath>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv22bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Statik kadr → harakat + kamera → jonli klip</text>
  <!-- static -->
  <g filter="url(#fv22sh)"><rect x="50" y="44" width="192" height="82" rx="12" fill="#ffffff" stroke="#e2e8f0"/></g>
  <g clip-path="url(#fv22a)"><rect x="56" y="50" width="180" height="70" fill="#e5e7eb"/><rect x="96" y="74" width="30" height="40" fill="#cbd5e1"/><rect x="150" y="68" width="30" height="46" fill="#d1d5db"/></g>
  <text x="146" y="142" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">statik · jonsiz</text>
  <!-- arrow + labels -->
  <path d="M250 85 H470" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv22ar)"/>
  <rect x="286" y="58" width="148" height="18" rx="9" fill="#ffe4d6"/><text x="360" y="71" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#c2410c">harakat + kamera</text>
  <rect x="312" y="92" width="96" height="18" rx="9" fill="#fef3c7"/><text x="360" y="105" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#b45309">+ atmosfera</text>
  <defs><marker id="fv22ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#fb923c"/></marker></defs>
  <!-- motion -->
  <g filter="url(#fv22sh)"><rect x="478" y="44" width="192" height="82" rx="12" fill="url(#fv22fr)"/></g>
  <g clip-path="url(#fv22b)"><rect x="484" y="50" width="180" height="70" fill="url(#fv22sky)"/><rect x="524" y="74" width="26" height="40" fill="#fb923c"/><rect x="574" y="68" width="26" height="46" fill="#f97316"/><circle cx="612" cy="64" r="6" fill="#fca5a5"/><path d="M500 100 h30 M498 108 h26" stroke="#fff" stroke-width="2" opacity=".6" stroke-linecap="round"/></g>
  <text x="574" y="142" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">jonli · harakatli</text>
</svg>
<figcaption>Harakat va kamera qo'shilganda statik kadr jonli klipga aylanadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Statik prompt jonsiz natija beradi, chunki video — bu harakat. Boyitish uchun uch savolga javob bering: nima harakatlanadi, kamera qanday harakatlanadi, qanday atmosfera/uslub. Lekin bitta klipga ko'p zid harakat tiqishtirmang — bitta aniq harakat eng yaxshi ishlaydi.</span></div>`,
      sim: {
        type: "compare",
        intro: "Ikkala prompt bir maqsad uchun yozilgan. Qaysi biri jonliroq, kuchliroq video beradi? Birini bosing.",
        goal: "Yomg'irli tungi shahar ko'chasi — atmosferali klip",
        a: { text: "shahar ko'chasi, yomg'ir" },
        b: { text: "tunda yomg'irli shahar ko'chasi, neon chiroqlar suvda aks etadi, mashinalar sekin o'tib turadi, kamera sekin oldinga dolly harakati qiladi, kinematografik" },
        better: "b",
        why: "Ikkala prompt ham sahnani aytadi, lekin B harakatni (mashinalar o'tadi), kamerani (sekin dolly) va atmosferani (neon, aks etish, kinematografik) aniq beradi. A statik va umumiy — model harakatsiz yoki tasodifiy natija beradi. Video — bu harakat, shuning uchun B ancha kuchli."
      },
      quiz: [
        { q: "Nega «shahar ko'chasi» kabi statik prompt zaif video beradi?", o: ["Vosita uni o'qiy olmaydi", "Harakat aytilmagani uchun klip jonsiz yoki tasodifiy chiqadi", "So'z juda uzun", "Ko'cha rasmga tushmaydi"], c: 1 },
        { q: "Video promptni boyitishning uch yo'nalishi qaysi?", o: ["Narx, hajm, sana", "Nima harakatlanadi; kamera qanday harakatlanadi; atmosfera/uslub", "Faqat rang", "Tezlik, format, vosita"], c: 1 },
        { q: "Quyidagilardan qaysi biri eng jonli video prompt?", o: ["ko'cha", "shahar ko'chasi", "tunda yomg'irli ko'cha, mashinalar o'tadi, sekin oldinga dolly, kinematografik", "transport"], c: 2 },
        { q: "Video promptni boyitishda qanday xatodan saqlanish kerak?", o: ["Harakat qo'shishdan", "Bitta klipga o'nta zid harakatni tiqishtirib, modelni dovdiratishdan", "Kamera ko'rsatishdan", "Atmosfera berishdan"], c: 1 },
        { q: "Bitta qisqa klip uchun eng yaxshi yondashuv qaysi?", o: ["Iloji boricha ko'p harakat", "Bitta aniq asosiy harakat + mos kamera", "Hech qanday harakat", "Faqat sub'ektiv so'zlar"], c: 1 }
      ]
    },

    {
      id: "v2_3",
      title: "Keng tarqalgan xatolar",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Ba'zan natija yomon chiqadi, chunki promptda tipik xato bor. Boshlovchilar deyarli bir xil xatolarni qiladi — va ularni bir marta o'rgansangiz, darrov sezasiz va tuzatasiz. Bu darsda AI video promptidagi eng keng tarqalgan xatolarni va ularning yechimini ko'ramiz.</p>

<h3>Boshlovchilarning tez-tez xatolari</h3>
<ul>
  <li><b>Harakatni umuman aytmaslik</b> — faqat statik sahnani tasvirlash; natija jonsiz bo'ladi.</li>
  <li><b>Harakat va kamerani chalkashtirish</b> — «kamera yuguradi» degandek noaniq ifodalar.</li>
  <li><b>Bir klipga ko'p zid harakat</b> — model dovdiraydi, narsalar buzilib «suzadi».</li>
  <li><b>Sub'ektiv so'zlarga tayanish</b> — «chiroyli video», «zo'r klip» modelga aniq narsa aytmaydi.</li>
  <li><b>Butun hikoyani bitta klipga</b> — qisqa klipga ko'p sahna sig'maydi.</li>
</ul>

<h3>To'g'ri amaliyot</h3>
<p>Aksincha, kuchli video prompt: <b>aniq harakat</b>, <b>aniq kamera</b>, <b>aniq atmosfera</b> va <b>bitta sahna</b>ni o'z ichiga oladi. Sub'ektiv so'zlar o'rniga konkret tavsif bering: «chiroyli» o'rniga — «oltin soat yorug'ligi, yumshoq fokus, sekin harakat».</p>

<div class="pk-ex pk-good"><span class="tag">Kuchli prompt formulasi</span>sahna + nima harakatlanadi + kamera qanday siljiydi + atmosfera + uslub</div>

<div class="pk-fig">
<svg viewBox="0 0 720 158" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv23bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv23g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0fdf4"/></linearGradient>
    <linearGradient id="fv23r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fef2f2"/></linearGradient>
    <filter id="fv23sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".16"/></filter>
  </defs>
  <rect width="720" height="158" rx="16" fill="url(#fv23bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Kuchli prompt va keng tarqalgan xato</text>
  <g filter="url(#fv23sh)"><rect x="56" y="50" width="278" height="88" rx="14" fill="url(#fv23g)" stroke="#bbf7d0"/></g>
  <circle cx="86" cy="80" r="15" fill="#22c55e"/><path d="M80 80 l4 4 8 -9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="112" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#15803d">Kuchaytiradi</text>
  <text x="112" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">aniq harakat · aniq kamera</text>
  <text x="112" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">atmosfera · bitta sahna</text>
  <g filter="url(#fv23sh)"><rect x="386" y="50" width="278" height="88" rx="14" fill="url(#fv23r)" stroke="#fecaca"/></g>
  <g transform="translate(416,80)"><circle r="15" fill="#ef4444"/><path d="M-5 -5 l10 10 M5 -5 l-10 10" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>
  <text x="442" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#b91c1c">Kuchsizlantiradi</text>
  <text x="442" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">harakatsiz · zid harakatlar</text>
  <text x="442" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">«chiroyli» · butun hikoya</text>
</svg>
<figcaption>Aniq harakat va kamera kuchaytiradi; harakatsizlik va zidlik kuchsizlantiradi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Keng tarqalgan xatolar: harakatni aytmaslik, harakat va kamerani chalkashtirish, bir klipga ko'p zid harakat, sub'ektiv so'zlar va butun hikoyani bitta klipga sig'dirish. To'g'ri formula: sahna + aniq harakat + aniq kamera + atmosfera + bitta sahna.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi video prompt amaliyotlarini baholang: natijani <b>kuchaytiradi</b>mi yoki <b>kuchsizlantiradi</b>mi?",
        groups: ["kuchaytiradi", "kuchsizlantiradi"],
        items: [
          { name: "Aniq harakatni tasvirlash (kim/nima qanday harakatlanadi)", answer: "kuchaytiradi", hint: "Aniq harakat — jonli natija." },
          { name: "Kamera harakatini ko'rsatish (dolly, pan, zoom)", answer: "kuchaytiradi", hint: "Kamera tili — kinematografik nazorat beradi." },
          { name: "Faqat statik sahnani aytib, harakatni umuman aytmaslik", answer: "kuchsizlantiradi", hint: "Harakatsizlik — jonsiz, statik klip." },
          { name: "Bitta klipga juda ko'p zid harakatni tiqishtirish", answer: "kuchsizlantiradi", hint: "Zid harakatlar modelni dovdiratadi, buzilish beradi." },
          { name: "Atmosfera va yorug'likni belgilash", answer: "kuchaytiradi", hint: "Atmosfera — kayfiyat va sifatni oshiradi." },
          { name: "«chiroyli video» kabi sub'ektiv so'zga tayanish", answer: "kuchsizlantiradi", hint: "Sub'ektiv so'z modelga aniq ma'lumot bermaydi." }
        ]
      },
      quiz: [
        { q: "Boshlovchilarning eng keng tarqalgan xatosi qaysi?", o: ["Kamera ko'rsatish", "Harakatni umuman aytmay, faqat statik sahnani tasvirlash", "Atmosfera qo'shish", "Bitta sahnaga e'tibor"], c: 1 },
        { q: "«Bitta klipga butun hikoya» nega yomon?", o: ["Juda qisqa", "Qisqa klipga ko'p sahna sig'maydi — buziladi", "Rang yo'q", "Kamera aniq"], c: 1 },
        { q: "Sub'ektiv so'z («chiroyli video») o'rniga nima yozish kerak?", o: ["Hech narsa", "Konkret tavsif (oltin soat yorug'ligi, sekin harakat)", "Faqat «zo'r»", "Vosita nomini"], c: 1 },
        { q: "Quyidagilardan qaysi biri natijani kuchaytiradi?", o: ["Harakatni aytmaslik", "Aniq harakat va aniq kamerani ko'rsatish", "Zid harakatlar", "Sub'ektiv so'zlar"], c: 1 },
        { q: "Kuchli video prompt formulasi qanday?", o: ["Faqat sahna", "Sahna + harakat + kamera + atmosfera + uslub", "Faqat sub'ektiv so'zlar", "Faqat narx"], c: 1 }
      ]
    }
  ]
});
