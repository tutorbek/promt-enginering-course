/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   2-modul: Prompt asoslari
   window.AIRASM_COURSE.modules.push({...})
   ============================================================ */
window.AIRASM_COURSE.modules.push({
  id: "a2",
  title: "Prompt asoslari",
  lessons: [
    {
      id: "a2_1",
      title: "Yaxshi prompt anatomiyasi",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Prompt — bu AI bilan gaplashish tili. Yaxshi prompt va yomon prompt orasidagi farq — ko'pincha tasodifiy rasm bilan aynan siz xohlagan rasm orasidagi farqdir. Yaxshi yangilik: kuchli prompt yozish — <b>tartib</b> masalasi, iste'dod emas. Bir necha qismdan iborat oddiy tuzilma bor; uni o'rgansangiz, har safar aniq natijaga erishasiz.</p>

<h3>Kuchli promptning besh qismi</h3>
<p>Yaxshi prompt odatda quyidagi qismlardan tuziladi. Hammasi har doim shart emas, lekin qancha ko'pini qo'shsangiz — natija shuncha aniq:</p>
<ul>
  <li><b>Subyekt</b> — asosiy narsa: <i>kim yoki nima</i>. «o'rta yoshli ishbilarmon ayol portreti».</li>
  <li><b>Tafsilot</b> — subyektning xususiyatlari: kiyimi, holati, ifodasi. «ko'zoynak taqqan, mayin tabassum».</li>
  <li><b>Uslub</b> — qanday ko'rinishda: foto, rangtasvir, anime, 3D. «professional studiya fotosurati».</li>
  <li><b>Yorug'lik</b> — yorug'lik turi va kayfiyati. «yumshoq yon yorug'lik».</li>
  <li><b>Kompozitsiya</b> — kadr va rakurs: yaqin plan, fon. «yelka-bosh plani, fon biroz xira».</li>
</ul>

<h3>Hammasini birlashtirsak</h3>
<p>Yuqoridagi beshta qismni vergul bilan ulasak, mana shunday to'liq prompt chiqadi:</p>
<div class="pk-ex pk-good"><span class="tag">To'liq prompt</span>o'rta yoshli ishbilarmon ayol portreti, ko'zoynak taqqan mayin tabassum, professional studiya fotosurati, yumshoq yon yorug'lik, yelka-bosh plani fon biroz xira</div>
<p>E'tibor bering — bu yerda hech qanday murakkab atama yo'q. Faqat <b>aniq, tartibli tavsif</b>. Aynan shu AI'ni sizning tasavvuringizga yo'naltiradi.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Tartib ko'pincha muhim</b>Ko'p vositalarda promptning <b>boshidagi</b> so'zlar ko'proq ta'sir qiladi. Shuning uchun eng muhim narsani — subyektni — boshida yozing, ikkinchi darajali tafsilotlarni keyin qo'shing.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 212" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="f21bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="f21c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <filter id="f21sh" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#7c3aed" flood-opacity=".3"/></filter>
    <filter id="f21g" x="-30%" y="-30%" width="160%" height="190%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#16a34a" flood-opacity=".32"/></filter>
    <marker id="f21a" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#a78bfa"/></marker>
  </defs>
  <rect width="720" height="212" rx="16" fill="url(#f21bg)"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Besh qism birlashib — kuchli prompt hosil qiladi</text>
  <g font-family="system-ui">
    <g filter="url(#f21sh)"><rect x="40" y="54" width="120" height="50" rx="12" fill="url(#f21c)"/></g>
    <circle cx="58" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="58" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">1</text>
    <text x="111" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Subyekt</text><text x="100" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">kim / nima</text>
    <g filter="url(#f21sh)"><rect x="170" y="54" width="120" height="50" rx="12" fill="url(#f21c)"/></g>
    <circle cx="188" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="188" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">2</text>
    <text x="241" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Tafsilot</text><text x="230" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">xususiyat</text>
    <g filter="url(#f21sh)"><rect x="300" y="54" width="120" height="50" rx="12" fill="url(#f21c)"/></g>
    <circle cx="318" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="318" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">3</text>
    <text x="371" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Uslub</text><text x="360" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">foto / chizma</text>
    <g filter="url(#f21sh)"><rect x="430" y="54" width="120" height="50" rx="12" fill="url(#f21c)"/></g>
    <circle cx="448" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="448" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">4</text>
    <text x="501" y="75" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Yorug'lik</text><text x="490" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">tur / kayfiyat</text>
    <g filter="url(#f21sh)"><rect x="560" y="54" width="120" height="50" rx="12" fill="url(#f21c)"/></g>
    <circle cx="578" cy="71" r="9" fill="#ffffff" opacity=".22"/><text x="578" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">5</text>
    <text x="623" y="75" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Kompozitsiya</text><text x="620" y="93" text-anchor="middle" font-size="8.5" fill="#fff" opacity=".82">kadr / rakurs</text>
  </g>
  <path d="M360 110 V128" stroke="#a78bfa" stroke-width="2.4" marker-end="url(#f21a)"/>
  <g filter="url(#f21g)"><rect x="150" y="134" width="420" height="52" rx="13" fill="#ecfdf5" stroke="#bbf7d0"/></g>
  <circle cx="186" cy="160" r="12" fill="#22c55e"/><path d="M181 160 l3.5 3.5 6-7" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="374" y="165" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#15803d">Aniq, tartibli prompt = aniq natija</text>
</svg>
<figcaption>Promptni qismlarga bo'lib o'ylash — har safar to'liqroq tavsif beradi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Kuchli prompt besh qismdan tuziladi: subyekt, tafsilot, uslub, yorug'lik va kompozitsiya. Eng muhimini (subyektni) boshida yozing. Aniq, tartibli tavsif AI'ni sizning tasavvuringizga yo'naltiradi.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>professional portret fotosurat</b>. Har bo'lim uchun eng kuchli variantni tanlang — prompt jonli yig'iladi.",
        goal: "Professional portret fotosurat",
        slots: [
          {
            label: "Subyekt", options: [
              { text: "bir odam", good: false, why: "Juda umumiy — kim, qanday ko'rinishda ekani noma'lum." },
              { text: "o'rta yoshli ishbilarmon ayol portreti", good: true },
              { text: "narsa", good: false, why: "Subyekt umuman aniq emas." }
            ]
          },
          {
            label: "Tafsilot", options: [
              { text: "chiroyli", good: false, why: "Sub'ektiv so'z — modelga aniq ma'lumot bermaydi." },
              { text: "ko'zoynak taqqan, mayin tabassum", good: true },
              { text: "yaxshi", good: false, why: "Hech qanday aniq xususiyat bermaydi." }
            ]
          },
          {
            label: "Uslub", options: [
              { text: "professional studiya fotosurati", good: true },
              { text: "qandaydir uslubda", good: false, why: "Uslub ko'rsatilmagan — natija tasodifiy bo'ladi." }
            ]
          },
          {
            label: "Yorug'lik", options: [
              { text: "yorug'lik bilan", good: false, why: "Qanday yorug'lik ekani aytilmagan." },
              { text: "yumshoq yon yorug'lik", good: true }
            ]
          },
          {
            label: "Kompozitsiya", options: [
              { text: "yelka-bosh plani, fon biroz xira", good: true },
              { text: "shunchaki", good: false, why: "Kadr va rakurs haqida ma'lumot yo'q." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Kuchli promptning beshta asosiy qismi qaysilar?", o: ["Narx, hajm, format, rang, sana", "Subyekt, tafsilot, uslub, yorug'lik, kompozitsiya", "Faqat subyekt", "Vosita, ilova, sayt, bot, narx"], c: 1 },
        { q: "Promptda eng muhim narsa — subyekt — qayerda turishi ma'qul?", o: ["Eng oxirida", "O'rtasida", "Boshida", "Umuman yozilmaydi"], c: 2 },
        { q: "«Uslub» qismi nimani belgilaydi?", o: ["Rasm narxini", "Rasm qanday ko'rinishda bo'lishini (foto, chizma, 3D)", "Fayl hajmini", "Yaratish tezligini"], c: 1 },
        { q: "Quyidagi tafsilotlardan qaysi biri modelga aniq ma'lumot beradi?", o: ["chiroyli", "zo'r", "ko'zoynak taqqan, mayin tabassum", "yaxshi"], c: 2 },
        { q: "Nega promptni qismlarga bo'lib o'ylash foydali?", o: ["Rasm tez chiqadi", "Har safar to'liqroq va aniqroq tavsif berishga yordam beradi", "Internet tejaladi", "Vosita arzonlashadi"], c: 1 }
      ]
    },

    {
      id: "a2_2",
      title: "Noaniqdan aniqqa — promptni boyitish",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi bilasizki, kuchli prompt qismlardan tuziladi. Lekin amalda ko'pchilik baribir juda <b>noaniq</b> prompt yozadi — keyin natijadan hafsalasi pir bo'ladi. Bu darsda bir xil g'oyani noaniqdan aniqqa qanday «boyitish»ni ko'ramiz. Bu ko'nikma — AI rasm yaratishdagi eng kuchli tezkor g'alaba.</p>

<h3>Noaniq prompt nega zaif</h3>
<p>«mashina» deb yozsangiz, model <b>millionlab</b> turli mashina ko'rgan — qaysi birini chizishni bilmaydi, shuning uchun tasodifiy birini tanlaydi. Natija sizniki bo'lmaydi, chunki siz aniq ko'rsatma bermadingiz. AI o'qiy olmaydi — u faqat <b>yozganingizga</b> tayanadi.</p>

<h3>Boyitishning uch yo'nalishi</h3>
<p>Noaniq promptni aniqlashtirish uchun uchta savolga javob bering:</p>
<ul>
  <li><b>Qanaqa?</b> — subyektni aniqlang: rangi, yoshi, holati, materiali. «qizil sport mashina» yoki «eski klassik mashina».</li>
  <li><b>Qayerda va qanday yorug'likda?</b> — muhit va yorug'lik: «yomg'irdan keyingi shahar ko'chasida, tunda, neon yorug'lik».</li>
  <li><b>Qanday ko'rinishda?</b> — uslub va kadr: «kinematografik foto, past rakurs».</li>
</ul>
<p>Mana bir g'oyaning uch bosqichda boyishi:</p>
<div class="pk-ex pk-bad"><span class="tag">Noaniq</span>mashina</div>
<div class="pk-ex"><span class="tag">Yaxshilanmoqda</span>qizil sport mashina, shahar ko'chasida</div>
<div class="pk-ex pk-good"><span class="tag">Aniq</span>qizil sport mashina, yomg'irdan keyingi shahar ko'chasida tunda, neon yorug'lik aksi asfaltda, kinematografik foto, past rakurs</div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Aniqlik ≠ cheksiz uzunlik</b>Boyitish foydali, lekin bir promptga ellikta sifat tiqishtirmang. Juda uzun va bir-biriga zid tavsif modelni chalg'itadi. Maqsad — <b>aniqlik</b>, ortiqcha so'z emas. 1–2 jumlalik, tartibli prompt ko'pincha eng yaxshi ishlaydi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 182" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="f22bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="f22c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#faf2ff"/></linearGradient>
    <linearGradient id="f22sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <filter id="f22sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="f22t1"><rect x="56" y="58" width="148" height="46" rx="6"/></clipPath>
    <clipPath id="f22t2"><rect x="286" y="58" width="148" height="46" rx="6"/></clipPath>
    <clipPath id="f22t3"><rect x="516" y="58" width="148" height="46" rx="6"/></clipPath>
    <marker id="f22a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#a78bfa"/></marker>
  </defs>
  <rect width="720" height="182" rx="16" fill="url(#f22bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Bitta so'z → boyitilgan tavsif → aniq natija</text>
  <!-- 1: noaniq -->
  <g filter="url(#f22sh)"><rect x="40" y="46" width="180" height="116" rx="13" fill="url(#f22c)" stroke="#fecaca"/></g>
  <g clip-path="url(#f22t1)"><rect x="56" y="58" width="148" height="46" fill="#e5e7eb"/><circle cx="100" cy="84" r="14" fill="#cbd5e1"/><rect x="120" y="74" width="60" height="22" rx="6" fill="#d1d5db"/></g>
  <text x="130" y="124" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#b91c1c">mashina</text>
  <text x="130" y="143" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#94a3b8">tasodifiy natija</text>
  <path d="M224 104 H282" stroke="#a78bfa" stroke-width="2.4" marker-end="url(#f22a)"/>
  <!-- 2: boyitilmoqda -->
  <g filter="url(#f22sh)"><rect x="270" y="46" width="180" height="116" rx="13" fill="url(#f22c)" stroke="#e9d5ff"/></g>
  <g clip-path="url(#f22t2)"><rect x="286" y="58" width="148" height="46" fill="url(#f22sky)" opacity=".55"/><circle cx="312" cy="80" r="9" fill="#fff7d6"/><path d="M286 104 L286 96 L316 82 L340 98 L434 84 L434 104 Z" fill="#a78bfa" opacity=".5"/></g>
  <text x="360" y="122" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#7c3aed">qanaqa + qayerda +</text>
  <text x="360" y="139" text-anchor="middle" font-family="system-ui" font-size="10" font-weight="700" fill="#7c3aed">qanday ko'rinishda</text>
  <path d="M454 104 H512" stroke="#a78bfa" stroke-width="2.4" marker-end="url(#f22a)"/>
  <!-- 3: aniq -->
  <g filter="url(#f22sh)"><rect x="500" y="46" width="180" height="116" rx="13" fill="url(#f22c)" stroke="#bbf7d0"/></g>
  <g clip-path="url(#f22t3)"><rect x="516" y="58" width="148" height="46" fill="url(#f22sky)"/><circle cx="544" cy="80" r="11" fill="#fff7d6"/><path d="M516 104 L516 92 L546 74 L568 92 L596 70 L664 96 L664 104 Z" fill="#6d28d9" opacity=".8"/><path d="M516 104 L516 98 L540 86 L562 98 L588 84 L664 100 L664 104 Z" fill="#5b21b6" opacity=".6"/></g>
  <text x="590" y="124" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#15803d">aynan siz xohlagan</text>
  <text x="590" y="143" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#94a3b8">aniq, mos rasm</text>
</svg>
<figcaption>Har bir aniqlik qismi natijani tasavvuringizga yaqinlashtiradi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Noaniq prompt tasodifiy natija beradi, chunki AI faqat yozganingizga tayanadi. Boyitish uchun uch savolga javob bering: qanaqa, qayerda/qanday yorug'likda, qanday ko'rinishda. Lekin aniqlik — bu ortiqcha so'z emas; tartibli 1–2 jumla eng yaxshi ishlaydi.</span></div>`,
      sim: {
        type: "compare",
        intro: "Ikkala prompt bir xil maqsad uchun yozilgan. Qaysi biri kuchliroq natija beradi? Birini bosing.",
        goal: "Atir flakoni uchun hashamatli reklama fotosurati",
        a: { text: "atir flakoni stol ustida, telefonda olingan rasm, oddiy fon" },
        b: { text: "atir flakoni qora marmar yuzada, dramatik studiya yorug'ligi, suv tomchilari, makro detal, hashamatli reklama foto, yumshoq akslanish" },
        better: "b",
        why: "Ikkala prompt ham subyektni (atir flakoni) aytadi, lekin B reklama maqsadiga mos uslub, yorug'lik, fon va detalni aniq beradi. A esa «telefonda olingan, oddiy fon» deyish bilan natijani zaiflashtiradi — bu hashamatli reklamaga mos emas."
      },
      quiz: [
        { q: "Nega «mashina» kabi bitta so'zli prompt zaif natija beradi?", o: ["Vosita uni o'qiy olmaydi", "Model qaysi mashinani chizishni bilmay, tasodifiy birini tanlaydi", "So'z juda uzun", "Mashina rasmga tushmaydi"], c: 1 },
        { q: "Promptni boyitishning uch yo'nalishi qaysi?", o: ["Narx, hajm, sana", "Qanaqa; qayerda/qanday yorug'likda; qanday ko'rinishda", "Faqat rang", "Tezlik, format, vosita"], c: 1 },
        { q: "Quyidagilardan qaysi biri eng aniq prompt?", o: ["mashina", "qizil mashina", "qizil sport mashina, tunda neon yorug'likli shahar ko'chasida, kinematografik foto", "transport"], c: 2 },
        { q: "Promptni boyitishda qanday xatodan saqlanish kerak?", o: ["Subyektni aytishdan", "Yorug'lik qo'shishdan", "Ellikta zid sifatni tiqishtirib, modelni chalg'itishdan", "Uslub ko'rsatishdan"], c: 2 },
        { q: "Aksariyat hollarda eng yaxshi ishlaydigan prompt qanaqa?", o: ["Iloji boricha eng uzun", "Bitta so'zdan iborat", "Aniq, tartibli 1–2 jumla", "Faqat sifatlardan iborat"], c: 2 }
      ]
    },

    {
      id: "a2_3",
      title: "Negative prompt va keng tarqalgan xatolar",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Ba'zan muammo prompt'ga nima <b>qo'shganingizda</b> emas, balki nimani <b>chiqarib tashlamaganingizda</b>. Rasmda keraksiz narsa paydo bo'lib qolsa — masalan, fonda ortiqcha odamlar yoki buzilgan qo'l — buni «negative prompt» bilan hal qilish mumkin. Shu darsda negative promptni va boshlovchilar tez-tez qiladigan xatolarni ko'ramiz.</p>

<h3>Negative prompt nima</h3>
<p><b>Negative prompt</b> — bu rasmda <b>bo'lishini istamagan</b> narsalaringiz ro'yxati. Masalan «buzilgan qo'l, ortiqcha barmoq, matn, suv belgisi, xira» deb yozsangiz, model bularni kamaytirishga harakat qiladi. Bu — promptning teskari tomoni: biri «nima kerak»ni, ikkinchisi «nima kerakmas»ni aytadi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Hamma vositada bir xil emas</b>Negative prompt alohida maydon sifatida ko'pincha <b>Stable Diffusion</b> va <b>Leonardo</b> kabi vositalarda bor. ChatGPT yoki Gemini kabi suhbat asosidagi vositalarda alohida maydon bo'lmasligi mumkin — u yerda shunchaki «fonda odam bo'lmasin» deb tabiiy tilda aytasiz. Natija — bir xil: keraksiz narsani chetlatish.</div></div>

<h3>Boshlovchilarning tez-tez xatolari</h3>
<ul>
  <li><b>Sub'ektiv so'zlarga tayanish</b> — «chiroyli», «zo'r», «ajoyib» modelga aniq narsa aytmaydi.</li>
  <li><b>Bir promptga juda ko'p zid g'oya</b> — «qishki yoz manzarasi, ham tun ham kunduz» kabi qarama-qarshiliklar.</li>
  <li><b>Tafsilotsizlik</b> — bitta so'z bilan cheklanish.</li>
  <li><b>Negative promptni unutish</b> — keraksiz narsa qaytsa ham, uni chiqarib tashlamaslik.</li>
</ul>

<div class="pk-ex pk-good"><span class="tag">Negative prompt misoli</span>buzilgan qo'l, ortiqcha barmoq, ikkinchi yuz, matn, suv belgisi, xira, past sifat</div>

<div class="pk-fig">
<svg viewBox="0 0 720 156" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="f23bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="f23g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0fdf4"/></linearGradient>
    <linearGradient id="f23r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fef2f2"/></linearGradient>
    <filter id="f23sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".16"/></filter>
  </defs>
  <rect width="720" height="156" rx="16" fill="url(#f23bg)"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Prompt va negative prompt — ikki tomon</text>
  <g filter="url(#f23sh)"><rect x="56" y="52" width="278" height="84" rx="14" fill="url(#f23g)" stroke="#bbf7d0"/></g>
  <circle cx="86" cy="80" r="15" fill="#22c55e"/><path d="M86 73 v14 M79 80 h14" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
  <text x="112" y="78" text-anchor="start" font-family="system-ui" font-size="12.5" font-weight="800" fill="#15803d">Prompt — nima KERAK</text>
  <text x="112" y="100" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">subyekt, uslub, yorug'lik...</text>
  <text x="112" y="118" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">kompozitsiya, kayfiyat</text>
  <g filter="url(#f23sh)"><rect x="386" y="52" width="278" height="84" rx="14" fill="url(#f23r)" stroke="#fecaca"/></g>
  <circle cx="416" cy="80" r="15" fill="#ef4444"/><path d="M409 80 h14" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
  <text x="442" y="78" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#b91c1c">Negative — nima KERAKMAS</text>
  <text x="442" y="100" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">buzilgan qo'l, ortiqcha barmoq</text>
  <text x="442" y="118" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">matn, suv belgisi, xira</text>
</svg>
<figcaption>Ikkalasi birgalikda natijani tozalaydi va aniqlashtiradi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Negative prompt — rasmda bo'lishini istamagan narsalar ro'yxati (buzilgan qo'l, matn, xira). Ba'zi vositalarda alohida maydon, ba'zilarida tabiiy til bilan aytiladi. Keng tarqalgan xatolar: sub'ektiv so'zlar, zid g'oyalar, tafsilotsizlik va negative promptni unutish.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi prompt amaliyotlarini baholang: ular natijani <b>kuchaytiradi</b>mi yoki <b>kuchsizlantiradi</b>mi?",
        groups: ["kuchaytiradi", "kuchsizlantiradi"],
        items: [
          { name: "Subyekt, uslub va yorug'likni aniq ko'rsatish", answer: "kuchaytiradi", hint: "Aniq qismlar — aniq natija." },
          { name: "«chiroyli», «zo'r» kabi sub'ektiv so'zlarga tayanish", answer: "kuchsizlantiradi", hint: "Sub'ektiv so'zlar modelga aniq ma'lumot bermaydi." },
          { name: "Keraksiz narsalarni negative prompt bilan chiqarib tashlash", answer: "kuchaytiradi", hint: "Negative prompt rasmni tozalaydi." },
          { name: "Bir promptga bir-biriga zid ko'p g'oyani tiqishtirish", answer: "kuchsizlantiradi", hint: "Qarama-qarshiliklar modelni chalg'itadi." },
          { name: "Aniq kadr va rakursni ko'rsatish (yaqin plan, past rakurs)", answer: "kuchaytiradi", hint: "Kompozitsiya ko'rsatkichi natijani boshqaradi." },
          { name: "Hech qanday tafsilotsiz bitta so'z yozish", answer: "kuchsizlantiradi", hint: "Tafsilotsizlik tasodifiy natijaga olib keladi." }
        ]
      },
      quiz: [
        { q: "Negative prompt nima vazifani bajaradi?", o: ["Rasmni qimmatlashtiradi", "Rasmda bo'lishini istamagan narsalarni chetlatadi", "Rasmni kattalashtiradi", "Internetni tezlashtiradi"], c: 1 },
        { q: "Quyidagilardan qaysi biri negative promptga yaxshi misol?", o: ["chiroyli, yorqin, zo'r", "buzilgan qo'l, ortiqcha barmoq, matn, xira", "tog', dengiz, quyosh", "katta, kichik, o'rta"], c: 1 },
        { q: "Suhbat asosidagi vositalarda (ChatGPT, Gemini) keraksiz narsani qanday chetlatasiz?", o: ["Buni qilib bo'lmaydi", "Tabiiy tilda «fonda odam bo'lmasin» deb aytib", "Faqat pul to'lab", "Rasmni o'chirib"], c: 1 },
        { q: "Boshlovchilarning keng tarqalgan xatosi qaysi?", o: ["Subyektni aniq yozish", "Sub'ektiv so'zlarga tayanib, tafsilot bermaslik", "Yorug'lik ko'rsatish", "Uslub qo'shish"], c: 1 },
        { q: "«Qishki yoz manzarasi, ham tun ham kunduz» kabi prompt nega yomon?", o: ["Juda qisqa", "Bir-biriga zid g'oyalar modelni chalg'itadi", "Rang yo'q", "Uslub aniq"], c: 1 }
      ]
    }
  ]
});
