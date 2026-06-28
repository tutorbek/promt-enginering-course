/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   7-modul: Amaliy qo'llash
   window.AIRASM_COURSE.modules.push({...})
   ============================================================ */
window.AIRASM_COURSE.modules.push({
  id: "c1",
  title: "Amaliy qo'llash",
  lessons: [
    {
      id: "c1_1",
      title: "Logo, brending va ijtimoiy kontent",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi bilim amalga aylanadi. AI rasm yaratish — bu nafaqat chiroyli manzaralar, balki <b>real ehtiyojlar</b>: biznes uchun logo g'oyasi, brend uslubidagi postlar, ijtimoiy tarmoq kontenti. Bu darsda AI'dan amaliy, biznesga foydali natijalar olishni o'rganamiz — va bir muhim cheklovni ham aytamiz.</p>

<h3>Logo g'oyasi — to'g'ri yondashuv</h3>
<p>AI logo <b>g'oyasi va belgisi</b>ni (mark) yaratishda ajoyib yordamchi. Lekin muhim cheklov bor: <b>AI matnni (harflarni) ishonchli chiza olmaydi</b> — logodagi yozuv ko'pincha buzilib chiqadi. Shuning uchun to'g'ri usul: AI'dan <b>belgi/simvol</b>ni oling, brend nomini esa keyin alohida (oddiy dizayn dasturida) qo'shing. Yaxshi logo belgisi uchun so'rang: <b>minimalist</b>, <b>vektorga o'xshash</b>, <b>cheklangan palitra</b>, <b>toza fon</b>.</p>

<h3>Brending va ijtimoiy kontent</h3>
<p>Brend uchun <b>izchil uslub</b> muhim. Bir marta yaxshi uslubni topganda (rang, yorug'lik, kompozitsiya), uni har postda takrorlang — auditoriya brendingizni taniydi. Ijtimoiy tarmoq uchun foydali natijalar: post foni, e'lon banneri, mavzuli illyustratsiya, mahsulot taqdimoti. Har birida to'g'ri kadr nisbatini tanlashni unutmang (post, stories, banner).</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Matnni AI'ga ishonmang</b>Logo yoki bannerdagi yozuvni AI'ga chizdirmang — u harflarni ko'pincha buzadi. AI'dan faqat <b>vizual qism</b>ni (belgi, fon, illyustratsiya) oling, matnni esa o'zingiz aniq dizayn vositasida qo'shing. Bu — professional natijaning siri.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c11bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="c11fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <filter id="c11sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#7c3aed" flood-opacity=".2"/></filter>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#c11bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Minimalist logo belgisi — toza, vektorga o'xshash</text>
  <!-- logo badge -->
  <g filter="url(#c11sh)"><circle cx="150" cy="92" r="46" fill="#ffffff" stroke="#ead8fb"/></g>
  <g transform="translate(150,92)" stroke="#7c3aed" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M-16 -6 h26 v10 a13 13 0 0 1 -26 0 z"/>
    <path d="M10 -2 h6 a6 6 0 0 1 0 12 h-6"/>
    <path d="M-10 -16 q0 -5 4 -8 M-2 -16 q0 -5 4 -8 M6 -16 q0 -5 4 -8"/>
  </g>
  <!-- attributes -->
  <g font-family="system-ui" font-size="11" font-weight="700" fill="#6d28d9">
    <g filter="url(#c11sh)"><rect x="250" y="50" width="200" height="26" rx="13" fill="#fff" stroke="#ead8fb"/></g>
    <circle cx="270" cy="63" r="4" fill="#a21caf"/><text x="284" y="67" text-anchor="start">minimalist · vektor</text>
    <g filter="url(#c11sh)"><rect x="250" y="84" width="200" height="26" rx="13" fill="#fff" stroke="#ead8fb"/></g>
    <circle cx="270" cy="97" r="4" fill="#a21caf"/><text x="284" y="101" text-anchor="start">cheklangan palitra</text>
    <g filter="url(#c11sh)"><rect x="250" y="118" width="200" height="26" rx="13" fill="#fff" stroke="#ead8fb"/></g>
    <circle cx="270" cy="131" r="4" fill="#a21caf"/><text x="284" y="135" text-anchor="start">toza, sodda fon</text>
  </g>
  <!-- text added separately -->
  <g filter="url(#c11sh)"><rect x="486" y="74" width="190" height="36" rx="10" fill="url(#c11fr)"/></g>
  <text x="581" y="90" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="800" fill="#fff">Matn — alohida qo'shiladi</text>
  <text x="581" y="103" text-anchor="middle" font-family="system-ui" font-size="8.5" fill="#ede9fe">(AI harflarni buzadi)</text>
</svg>
<figcaption>AI'dan belgini oling, brend nomini esa o'zingiz alohida qo'shing</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>AI logo belgisi va brend illyustratsiyasida kuchli yordamchi: minimalist, vektorga o'xshash, cheklangan palitra so'rang. Lekin AI matnni ishonchli chiza olmaydi — yozuvni alohida qo'shing. Brend uchun izchil uslubni har postda takrorlang.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>kafe uchun zamonaviy minimalist logo belgisi</b>. Har bo'lim uchun maqsadga mos variantni tanlang.",
        goal: "Kafe uchun zamonaviy minimalist logo belgisi",
        slots: [
          {
            label: "Belgi (mark)", options: [
              { text: "soddalashtirilgan kofe fincha belgisi", good: true },
              { text: "to'liq fotorealistik kafe ichki manzarasi", good: false, why: "Logo uchun murakkab sahna emas, sodda belgi kerak." }
            ]
          },
          {
            label: "Uslub", options: [
              { text: "minimalist vektor logo", good: true },
              { text: "detalli 3D fotorealistik render", good: false, why: "Logo minimalist va vektorga o'xshash bo'lishi kerak." }
            ]
          },
          {
            label: "Rang", options: [
              { text: "rang-barang ko'p tusli gradient", good: false, why: "Logoda cheklangan palitra yaxshi taniladi va ko'p joyda ishlaydi." },
              { text: "cheklangan 2 rangli palitra", good: true }
            ]
          },
          {
            label: "Fon", options: [
              { text: "toza, sodda fon", good: true },
              { text: "shovqinli, band fon", good: false, why: "Logo toza fonda ajralib turishi kerak." }
            ]
          },
          {
            label: "Chiziq", options: [
              { text: "loyqa, faktura bilan", good: false, why: "Logo aniq, toza chiziqli bo'lishi kerak." },
              { text: "aniq, vektorga o'xshash chiziqlar", good: true }
            ]
          }
        ]
      },
      quiz: [
        { q: "AI logo yaratishda asosiy cheklov nima?", o: ["Rang ishlatolmaydi", "Matnni (harflarni) ishonchli chiza olmaydi", "Logo umuman chiqmaydi", "Faqat qora-oq"], c: 1 },
        { q: "Logodagi brend nomini qanday qo'shgan ma'qul?", o: ["AI'ga chizdirib", "Keyin alohida dizayn vositasida o'zingiz qo'shib", "Umuman qo'shmasdan", "Faqat qo'lda chizib"], c: 1 },
        { q: "Yaxshi logo belgisi uchun nima so'raysiz?", o: ["Murakkab fotorealistik sahna", "Minimalist, vektorga o'xshash, cheklangan palitra", "Rang-barang gradient", "Band, shovqinli fon"], c: 1 },
        { q: "Brending uchun nima muhim?", o: ["Har post butunlay boshqa uslubda bo'lishi", "Izchil uslubni har postda takrorlash", "Faqat bitta rasm", "Uslub ahamiyatsiz"], c: 1 },
        { q: "Ijtimoiy kontent yaratishda nimani unutmaslik kerak?", o: ["Faqat kvadrat ishlatish", "Joyga mos to'g'ri kadr nisbatini tanlash", "Doim eng katta o'lcham", "Rangni o'chirish"], c: 1 }
      ]
    },

    {
      id: "c1_2",
      title: "Mahsulot va reklama rasmi",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">AI mahsulot va reklama rasmlarini yaratishda biznes uchun katta qiymat beradi — qimmat fotosessiyasiz ham professional ko'rinishli natija. Lekin «professional» va «havaskor» rasm orasida aniq farq bor. Bu darsda reklamabop rasm yaratish sirlarini ko'ramiz.</p>

<h3>Professional mahsulot rasmining belgilari</h3>
<ul>
  <li><b>Toza, maqsadli fon</b> — mahsulotni ajratib turadigan oddiy yoki mavzuga mos fon.</li>
  <li><b>Boshqarilgan yorug'lik</b> — studiya yorug'ligi, mahsulot shaklini ko'rsatuvchi soya va refleks.</li>
  <li><b>Makro detal</b> — mato, metall, shisha fakturasi aniq ko'rinadi.</li>
  <li><b>Brendga mos kayfiyat</b> — hashamatli, sport, tabiiy — mahsulot xarakteriga mos.</li>
</ul>

<h3>Reklama uchun prompt qanday tuziladi</h3>
<p>Mahsulotni aniq ayting, keyin uni <b>professional foto tilida</b> tasvirlang: «… qora marmar yuzada, yumshoq studiya yorug'ligi, yumshoq akslanish, makro detal, hashamatli reklama fotosurati». Yorug'lik, fon va kayfiyat — bu yerda eng muhim. Maqsad — mahsulotni eng yaxshi tomondan ko'rsatish.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>«Telefonda olingan» demang</b>Reklama rasmida «oddiy fon», «telefonda olingan» kabi so'zlar natijani havaskor qiladi. Buning o'rniga professional foto tilini ishlating: studiya yorug'ligi, makro, refleks, mavzuli fon. So'z tanlovingiz natija sifatini belgilaydi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 172" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c12bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="c12fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <radialGradient id="c12pro" cx="0.5" cy="0.35" r="0.8"><stop offset="0" stop-color="#3b0764"/><stop offset="1" stop-color="#0f0720"/></radialGradient>
    <filter id="c12sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="c12a"><rect x="62" y="46" width="220" height="92" rx="8"/></clipPath>
    <clipPath id="c12b"><rect x="438" y="46" width="220" height="92" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="172" rx="16" fill="url(#c12bg)"/>
  <!-- amateur -->
  <text x="172" y="30" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#b91c1c">Havaskor</text>
  <g filter="url(#c12sh)"><rect x="56" y="40" width="232" height="104" rx="12" fill="#ffffff" stroke="#fecaca"/></g>
  <g clip-path="url(#c12a)"><rect x="62" y="46" width="220" height="92" fill="#e5e7eb"/><rect x="150" y="74" width="40" height="50" rx="4" fill="#9ca3af"/><circle cx="170" cy="70" r="10" fill="#cbd5e1"/></g>
  <text x="172" y="156" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">xira fon · tartibsiz yorug'lik</text>
  <!-- vs -->
  <text x="360" y="98" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#7c3aed">vs</text>
  <!-- professional -->
  <text x="548" y="30" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#15803d">Professional</text>
  <g filter="url(#c12sh)"><rect x="432" y="40" width="232" height="104" rx="12" fill="url(#c12fr)"/></g>
  <g clip-path="url(#c12b)"><rect x="438" y="46" width="220" height="92" fill="url(#c12pro)"/><ellipse cx="548" cy="120" rx="46" ry="9" fill="#fff" opacity=".12"/><rect x="528" y="72" width="40" height="52" rx="5" fill="#ede9fe"/><rect x="534" y="78" width="10" height="40" rx="3" fill="#fff" opacity=".5"/><circle cx="548" cy="68" r="11" fill="#c4b5fd"/><circle cx="500" cy="64" r="6" fill="#fff" opacity=".25"/><circle cx="596" cy="100" r="8" fill="#fff" opacity=".18"/></g>
  <text x="548" y="156" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">studiya yorug'ligi · refleks · makro</text>
</svg>
<figcaption>So'z tanlovi — havaskor va professional natija orasidagi farq</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Professional mahsulot rasmida toza maqsadli fon, boshqarilgan studiya yorug'ligi, makro detal va brendga mos kayfiyat bo'ladi. Mahsulotni professional foto tilida tasvirlang (studiya yorug'ligi, refleks, makro). «Telefonda olingan, oddiy fon» kabi so'zlar natijani havaskor qiladi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi belgilarni ajrating: <b>professional</b> mahsulot rasmi belgisimi yoki <b>havaskor</b>mi?",
        groups: ["professional", "havaskor"],
        items: [
          { name: "Studiya yorug'ligi, toza fon, makro detal", answer: "professional", hint: "Boshqarilgan yorug'lik va toza fon — professional." },
          { name: "Xira telefon surati, tartibsiz fon", answer: "havaskor", hint: "Xira surat va tartibsiz fon — havaskor." },
          { name: "Mahsulotga mos refleks va yumshoq soya", answer: "professional", hint: "Refleks va boshqarilgan soya — professional." },
          { name: "Tasodifiy burchak, yorug'lik yetishmaydi", answer: "havaskor", hint: "Tasodifiy, yorug'siz kadr — havaskor." },
          { name: "Brend rangiga mos palitra va kompozitsiya", answer: "professional", hint: "Brendga mos palitra — professional yondashuv." },
          { name: "Past o'lcham, piksellashgan natija", answer: "havaskor", hint: "Past sifat — havaskor." }
        ]
      },
      quiz: [
        { q: "Professional mahsulot rasmining belgisi qaysi?", o: ["Xira fon", "Toza fon, boshqarilgan studiya yorug'ligi, makro detal", "Tasodifiy burchak", "Past o'lcham"], c: 1 },
        { q: "Reklama prompti uchun qaysi so'zlar yaxshi?", o: ["telefonda olingan, oddiy fon", "studiya yorug'ligi, refleks, makro, hashamatli", "xira, tartibsiz", "tasodifiy kadr"], c: 1 },
        { q: "Reklama rasmida nima natijani havaskor qiladi?", o: ["Studiya yorug'ligi", "«Oddiy fon, telefonda olingan» kabi so'zlar", "Makro detal", "Mavzuli fon"], c: 1 },
        { q: "Mahsulot rasmida fon qanday bo'lishi kerak?", o: ["Band va shovqinli", "Toza yoki mavzuga mos, mahsulotni ajratuvchi", "Doim qora", "Ahamiyatsiz"], c: 1 },
        { q: "Reklama rasmining asosiy maqsadi nima?", o: ["Faylni kichraytirish", "Mahsulotni eng yaxshi tomondan ko'rsatish", "Ko'p rang ishlatish", "Tez yaratish"], c: 1 }
      ]
    },

    {
      id: "c1_3",
      title: "Personaj izchilligi",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Bitta chiroyli personaj yaratish oson. Lekin <b>o'sha personajni</b> bir nechta rasmda — turli sahnalarda, lekin bir xil yuz, soch va kiyim bilan — saqlash ancha qiyin. Bu ko'nikma hikoya, komiks, brend mascot yoki ketma-ket kontent uchun zarur. Bu darsda personaj izchilligini saqlash usullarini o'rganamiz.</p>

<h3>Nega izchillik qiyin</h3>
<p>Har safar yaratganda model tasodifiy boshlaydi, shuning uchun personaj har rasmda biroz boshqacha chiqadi. Yechim — modelga <b>imkon qadar kam erkinlik</b> qoldirish: personajni juda aniq tasvirlash va shu tavsifni qat'iy takrorlash.</p>

<h3>Izchillikni saqlash usullari</h3>
<ul>
  <li><b>Juda aniq tavsif</b> — yosh, soch rangi va turi, ko'z, kiyim, o'ziga xos belgi (masalan ko'zoynak). Qanchalik aniq — shunchalik izchil.</li>
  <li><b>Tavsifni aynan takrorlash</b> — har promptda personaj tavsifini <b>so'zma-so'z</b> bir xil yozing.</li>
  <li><b>Seed va referens</b> — seed'ni qayd eting; ko'p vositada personaj referens rasmini berib, undan yuzni «ushlab turish» mumkin.</li>
  <li><b>Faqat sahnani o'zgartiring</b> — personaj tavsifi o'zgarmaydi, faqat atrof-muhit va harakat almashadi.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Izchillik — bu intizom</b>Sehrli tugma yo'q: izchillik aniq tavsifni qat'iy takrorlash va seed/referensdan foydalanishdan kelib chiqadi. Personaj tavsifini bir marta yozib oling va uni har rasmda o'zgartirmasdan ishlating — faqat sahnani almashtiring.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 176" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c13bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="c13fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="c13s1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <linearGradient id="c13s2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a5f3fc"/><stop offset="1" stop-color="#818cf8"/></linearGradient>
    <linearGradient id="c13s3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bbf7d0"/><stop offset="1" stop-color="#34d399"/></linearGradient>
    <filter id="c13sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="c13a"><rect x="46" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="c13b"><rect x="275" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="c13c"><rect x="504" y="44" width="170" height="76" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="176" rx="16" fill="url(#c13bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bir personaj — uch sahna, bir xil yuz</text>
  <g filter="url(#c13sh)"><rect x="40" y="38" width="182" height="88" rx="11" fill="url(#c13fr)"/></g>
  <g clip-path="url(#c13a)"><rect x="46" y="44" width="170" height="76" fill="url(#c13s1)"/><circle cx="131" cy="84" r="22" fill="#7c3aed"/><path d="M119 72 a16 16 0 0 1 24 0" fill="#5b21b6"/><circle cx="123" cy="82" r="3.5" fill="#fff"/><circle cx="139" cy="82" r="3.5" fill="#fff"/></g>
  <text x="131" y="140" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">sahna 1</text>
  <g filter="url(#c13sh)"><rect x="269" y="38" width="182" height="88" rx="11" fill="url(#c13fr)"/></g>
  <g clip-path="url(#c13b)"><rect x="275" y="44" width="170" height="76" fill="url(#c13s2)"/><circle cx="360" cy="84" r="22" fill="#7c3aed"/><path d="M348 72 a16 16 0 0 1 24 0" fill="#5b21b6"/><circle cx="352" cy="82" r="3.5" fill="#fff"/><circle cx="368" cy="82" r="3.5" fill="#fff"/></g>
  <text x="360" y="140" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">sahna 2</text>
  <g filter="url(#c13sh)"><rect x="498" y="38" width="182" height="88" rx="11" fill="url(#c13fr)"/></g>
  <g clip-path="url(#c13c)"><rect x="504" y="44" width="170" height="76" fill="url(#c13s3)"/><circle cx="589" cy="84" r="22" fill="#7c3aed"/><path d="M577 72 a16 16 0 0 1 24 0" fill="#5b21b6"/><circle cx="581" cy="82" r="3.5" fill="#fff"/><circle cx="597" cy="82" r="3.5" fill="#fff"/></g>
  <text x="589" y="140" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">sahna 3</text>
  <text x="360" y="162" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#7c3aed">tavsif o'zgarmaydi — faqat sahna almashadi</text>
</svg>
<figcaption>Aniq tavsifni qat'iy takrorlab, personajni izchil saqlaysiz</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Personaj izchilligi — bir personajni bir nechta rasmda bir xil saqlash. Usullar: juda aniq tavsif (yosh, soch, ko'z, kiyim, belgi), tavsifni har promptda so'zma-so'z takrorlash, seed va referensdan foydalanish, faqat sahnani o'zgartirish. Izchillik — sehr emas, intizom.</span></div>`,
      sim: {
        type: "order",
        intro: "Bir personajni bir nechta rasmda izchil saqlash bosqichlarini <b>to'g'ri tartibga</b> joylashtiring.",
        steps: [
          "Personajni juda aniq tasvirlang (yosh, soch, ko'z, kiyim, belgi)",
          "Bu tavsifni alohida yozib, qayd qilib oling",
          "Yoqqan natijaning seed yoki referens rasmini saqlang",
          "Yangi sahnani aynan shu tavsif + seed bilan yarating",
          "Natijani solishtiring; mos kelmasa tavsifni yana aniqlang"
        ]
      },
      quiz: [
        { q: "Personaj izchilligi nima degani?", o: ["Har rasmda boshqa personaj", "Bir personajni bir nechta rasmda bir xil (yuz, soch, kiyim) saqlash", "Faqat bitta rasm yaratish", "Personajni o'chirish"], c: 1 },
        { q: "Nega izchillik tabiiy ravishda qiyin?", o: ["Internet sekin", "Model har safar tasodifiy boshlaydi", "Rang yetishmaydi", "Vosita buzilgan"], c: 1 },
        { q: "Izchillikni saqlashning eng muhim usuli qaysi?", o: ["Har safar boshqa tavsif yozish", "Juda aniq tavsifni har promptda so'zma-so'z takrorlash", "Tavsifsiz yaratish", "Faqat rangni o'zgartirish"], c: 1 },
        { q: "Personajni turli sahnalarda saqlashda nimani o'zgartirasiz?", o: ["Personaj tavsifini", "Faqat sahnani (atrof-muhit, harakat)", "Hammasini", "Hech narsani"], c: 1 },
        { q: "Izchillik uchun seed va referens nima beradi?", o: ["Hech narsa", "Yuz va ko'rinishni «ushlab turish» imkonini", "Faqat tezlik", "Faqat rang"], c: 1 }
      ]
    }
  ]
});
