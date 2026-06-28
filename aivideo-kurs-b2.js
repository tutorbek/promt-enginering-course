/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   5-modul: Davomiylik, kadr va izchillik
   window.AIVIDEO_COURSE.modules.push({...})
   ============================================================ */
window.AIVIDEO_COURSE.modules.push({
  id: "v5",
  title: "Davomiylik, kadr va izchillik",
  lessons: [
    {
      id: "v5_1",
      title: "Klip uzunligi va kengaytirish",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">«Nega men 2 daqiqalik video yarata olmayapman?» — bu eng ko'p beriladigan savol. Javob oddiy: bugungi AI kliplar <b>qisqa</b> (odatda bir necha soniya). Lekin bu cheklov emas — to'g'ri usul bilan uzun video ham yasaladi. Sir shundaki, uzun videolar <b>bitta uzun klip emas, bir nechta qisqa klipdan</b> yig'iladi. Bu darsda uzun videoga ikki yo'lni ko'ramiz.</p>

<h3>Nega kliplar qisqa</h3>
<p>Model klip uzaygan sari harakatni <b>izchil ushlab turishi qiyinlashadi</b> — narsalar asta-sekin «suzib», o'zgarib ketadi. Shuning uchun vositalar klipni qisqa qiladi, toki sifat yuqori qolsin. Bu — texnologiyaning hozirgi tabiati.</p>

<h3>Uzun video qilishning ikki yo'li</h3>
<ul>
  <li><b>Bir nechta klip + montaj</b> — har sahnani alohida qisqa klip qilib yaratasiz, keyin ularni ketma-ket ulaysiz (montaj). Eng moslashuvchan usul.</li>
  <li><b>Extend (kengaytirish)</b> — ko'p vositada klipni <b>oxirgi kadridan davom ettirib</b>, uzaytirish mumkin. Bir g'oyani bosqichma-bosqich cho'zish uchun.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Bitta promptdan butun video kutmang</b>«2 daqiqalik to'liq hikoya» degan promptdan yaxshi natija chiqmaydi. Buning o'rniga voqeani <b>qisqa sahnalarga bo'ling</b>: har birini alohida, sifatli klip qiling, keyin montajda yig'ing. Bu professional video ishlashning asosi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 162" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv51bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv51fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv51sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
  </defs>
  <rect width="720" height="162" rx="16" fill="url(#fv51bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Uzun video = bir nechta qisqa klip yig'indisi</text>
  <g font-family="system-ui" font-size="9.5" font-weight="700" fill="#fff" text-anchor="middle">
    <g filter="url(#fv51sh)"><rect x="60" y="50" width="120" height="48" rx="10" fill="url(#fv51fr)"/></g><path d="M105 64 l12 8 -12 8z" fill="#fff"/><text x="135" y="78">Klip 1</text>
    <g filter="url(#fv51sh)"><rect x="200" y="50" width="120" height="48" rx="10" fill="url(#fv51fr)"/></g><path d="M245 64 l12 8 -12 8z" fill="#fff"/><text x="275" y="78">Klip 2</text>
    <g filter="url(#fv51sh)"><rect x="340" y="50" width="120" height="48" rx="10" fill="url(#fv51fr)"/></g><path d="M385 64 l12 8 -12 8z" fill="#fff"/><text x="415" y="78">Klip 3</text>
    <g filter="url(#fv51sh)"><rect x="480" y="50" width="120" height="48" rx="10" fill="url(#fv51fr)"/></g><path d="M525 64 l12 8 -12 8z" fill="#fff"/><text x="555" y="78">Klip 4</text>
  </g>
  <g fill="#fdba74"><path d="M186 74 h10" stroke="#fb923c" stroke-width="2"/><path d="M326 74 h10" stroke="#fb923c" stroke-width="2"/><path d="M466 74 h10" stroke="#fb923c" stroke-width="2"/></g>
  <path d="M360 104 V118" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv51ar)"/>
  <rect x="120" y="124" width="480" height="22" rx="7" fill="#ffe4d6"/><rect x="120" y="124" width="480" height="22" rx="7" fill="none" stroke="#fed7aa"/>
  <g fill="#fb923c"><rect x="130" y="129" width="108" height="12" rx="3"/><rect x="244" y="129" width="108" height="12" rx="3" opacity=".85"/><rect x="358" y="129" width="108" height="12" rx="3" opacity=".7"/><rect x="472" y="129" width="118" height="12" rx="3" opacity=".55"/></g>
  <defs><marker id="fv51ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#fb923c"/></marker></defs>
</svg>
<figcaption>Qisqa, sifatli kliplarni montajda yig'ib uzun video qilasiz</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>AI kliplar qisqa, chunki uzaygan sari harakat izchilligi yo'qoladi. Uzun video ikki yo'l bilan yasaladi: bir nechta qisqa klip + montaj (eng moslashuvchan) yoki extend (klipni oxirgi kadridan davom ettirish). Bitta promptdan butun video kutmang — sahnalarga bo'ling.</span></div>`,
      sim: {
        type: "classify",
        intro: "Klip uzunligi haqidagi yondashuvlarni baholang: <b>to'g'ri</b>mi yoki <b>xato</b>mi?",
        groups: ["to'g'ri", "xato"],
        items: [
          { name: "Uzun voqeani bir nechta qisqa klipga bo'lish", answer: "to'g'ri", hint: "Sahnalarga bo'lish — to'g'ri yondashuv." },
          { name: "Butun 2 daqiqalik hikoyani bitta promptga tiqish", answer: "xato", hint: "Bitta klipdan butun video chiqmaydi." },
          { name: "Klipni extend bilan bosqichma-bosqich uzaytirish", answer: "to'g'ri", hint: "Extend — uzaytirishning to'g'ri usuli." },
          { name: "Bitta klipdan cheksiz uzunlik kutish", answer: "xato", hint: "Klip uzaygan sari sifat tushadi." },
          { name: "Har klipni bitta aniq sahna bilan cheklash", answer: "to'g'ri", hint: "Bitta sahna = sifatli klip." },
          { name: "Sifatdan qat'i nazar faqat uzunlikka intilish", answer: "xato", hint: "Uzunlik sifatdan ustun qo'yilmasligi kerak." }
        ]
      },
      quiz: [
        { q: "Nega bugungi AI kliplar qisqa?", o: ["Vosita arzon", "Klip uzaygan sari harakat izchilligi yo'qoladi", "Internet sekin", "Rang yetishmaydi"], c: 1 },
        { q: "Uzun video qilishning eng moslashuvchan yo'li qaysi?", o: ["Bitta uzun prompt", "Bir nechta qisqa klip + montaj", "Faqat extend", "Hech qanday yo'l yo'q"], c: 1 },
        { q: "«Extend» nima qiladi?", o: ["Klipni o'chiradi", "Klipni oxirgi kadridan davom ettirib uzaytiradi", "Rangni o'zgartiradi", "Ovoz qo'shadi"], c: 1 },
        { q: "«2 daqiqalik to'liq hikoya» promptidan nima chiqadi?", o: ["Mukammal video", "Yomon natija — sahnalarga bo'lish kerak", "Tezroq video", "Yuqori sifat"], c: 1 },
        { q: "Professional video ishlashning asosi nima?", o: ["Bitta uzun klip", "Voqeani qisqa sahnalarga bo'lib, har birini alohida sifatli qilish", "Faqat eng arzon vosita", "Hech qanday reja"], c: 1 }
      ]
    },

    {
      id: "v5_2",
      title: "Sahna va personaj izchilligi",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Uzun videoni bir nechta klipdan yig'asiz — lekin agar har klipda personaj boshqacha ko'rinsa yoki uslub o'zgarib tursa, video <b>bir butun</b> bo'lib chiqmaydi. <b>Izchillik</b> — bu professional ko'rinishning kaliti. Bu darsda kliplararo bir xil personaj, uslub va atmosferani saqlash usullarini o'rganamiz.</p>

<h3>Nega izchillik qiyin</h3>
<p>Har bir klip <b>alohida</b> yaratiladi, model esa har safar biroz boshqacha natija beradi. Shuning uchun personaj yuzi, kiyimi yoki sahnaning umumiy uslubi klipdan klipga o'zgarib ketishi mumkin. Yechim — modelga <b>imkon qadar bir xil ko'rsatma</b> berish.</p>

<h3>Izchillikni saqlash usullari</h3>
<ul>
  <li><b>Bir xil tavsifni takrorlang</b> — personaj va uslub tavsifini har promptda so'zma-so'z bir xil yozing.</li>
  <li><b>Bir xil boshlang'ich rasm</b> — image-to-video'da bir xil personaj rasmidan foydalaning.</li>
  <li><b>Uslub so'zlarini qat'iy saqlang</b> — yorug'lik, rang, uslub har klipda bir xil bo'lsin.</li>
  <li><b>Seed</b> (agar vosita qo'llab-quvvatlasa) — natijani barqarorlashtiradi.</li>
</ul>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Personaj tavsifini bir marta yozib oling</b>Personajni juda aniq tasvirlab (yosh, soch, kiyim, o'ziga xos belgi) alohida yozib qo'ying. Har yangi klipda aynan shu tavsifni o'zgartirmasdan ishlating — faqat sahnani va harakatni almashtiring. Bu izchillikning eng oddiy va kuchli usuli.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv52bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv52fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv52s1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fca5a5"/></linearGradient>
    <linearGradient id="fv52s2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a5f3fc"/><stop offset="1" stop-color="#fdba74"/></linearGradient>
    <linearGradient id="fv52s3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bbf7d0"/><stop offset="1" stop-color="#fde68a"/></linearGradient>
    <filter id="fv52sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <clipPath id="fv52a"><rect x="46" y="44" width="170" height="74" rx="8"/></clipPath>
    <clipPath id="fv52b"><rect x="275" y="44" width="170" height="74" rx="8"/></clipPath>
    <clipPath id="fv52c"><rect x="504" y="44" width="170" height="74" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv52bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bir personaj — uch klip, bir xil ko'rinish</text>
  <g filter="url(#fv52sh)"><rect x="40" y="38" width="182" height="86" rx="12" fill="url(#fv52fr)"/></g>
  <g clip-path="url(#fv52a)"><rect x="46" y="44" width="170" height="74" fill="url(#fv52s1)"/><circle cx="131" cy="82" r="20" fill="#dc2626"/><path d="M120 71 a14 14 0 0 1 22 0" fill="#7c2d12"/><circle cx="124" cy="80" r="3" fill="#fff"/><circle cx="138" cy="80" r="3" fill="#fff"/></g>
  <circle cx="64" cy="104" r="9" fill="#fff" opacity=".9"/><path d="M61 100 l6 4 -6 4z" fill="#dc2626"/>
  <text x="131" y="140" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">klip 1</text>
  <g filter="url(#fv52sh)"><rect x="269" y="38" width="182" height="86" rx="12" fill="url(#fv52fr)"/></g>
  <g clip-path="url(#fv52b)"><rect x="275" y="44" width="170" height="74" fill="url(#fv52s2)"/><circle cx="360" cy="82" r="20" fill="#dc2626"/><path d="M349 71 a14 14 0 0 1 22 0" fill="#7c2d12"/><circle cx="353" cy="80" r="3" fill="#fff"/><circle cx="367" cy="80" r="3" fill="#fff"/></g>
  <circle cx="293" cy="104" r="9" fill="#fff" opacity=".9"/><path d="M290 100 l6 4 -6 4z" fill="#dc2626"/>
  <text x="360" y="140" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">klip 2</text>
  <g filter="url(#fv52sh)"><rect x="498" y="38" width="182" height="86" rx="12" fill="url(#fv52fr)"/></g>
  <g clip-path="url(#fv52c)"><rect x="504" y="44" width="170" height="74" fill="url(#fv52s3)"/><circle cx="589" cy="82" r="20" fill="#dc2626"/><path d="M578 71 a14 14 0 0 1 22 0" fill="#7c2d12"/><circle cx="582" cy="80" r="3" fill="#fff"/><circle cx="596" cy="80" r="3" fill="#fff"/></g>
  <circle cx="522" cy="104" r="9" fill="#fff" opacity=".9"/><path d="M519 100 l6 4 -6 4z" fill="#dc2626"/>
  <text x="589" y="140" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">klip 3</text>
  <text x="360" y="158" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#dc2626">tavsif o'zgarmaydi — faqat sahna almashadi</text>
</svg>
<figcaption>Aniq tavsifni qat'iy takrorlab, personajni kliplararo izchil saqlaysiz</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Har klip alohida yaratilgani uchun ko'rinish o'zgarib ketishi mumkin. Izchillikni saqlash usullari: bir xil personaj/uslub tavsifini so'zma-so'z takrorlash, image-to-video'da bir xil boshlang'ich rasm, uslub so'zlarini qat'iy saqlash, seed (qo'llab-quvvatlansa). Faqat sahnani o'zgartiring.</span></div>`,
      sim: {
        type: "order",
        intro: "Kliplararo personaj izchilligini saqlash bosqichlarini <b>to'g'ri tartibga</b> joylashtiring.",
        steps: [
          "Personajni juda aniq tasvirlang (yosh, soch, kiyim, belgi)",
          "Bu tavsifni alohida yozib, qayd qilib oling",
          "Birinchi klip uchun sahna va harakatni qo'shib yarating",
          "Keyingi kliplarda aynan shu tavsifni saqlab, faqat sahnani almashtiring",
          "Kliplarni solishtiring; ko'rinish o'zgarsa tavsif yoki rasmni qayd eting"
        ]
      },
      quiz: [
        { q: "Nega kliplararo izchillik qiyin?", o: ["Internet sekin", "Har klip alohida yaratiladi, model har safar biroz boshqacha beradi", "Rang yetishmaydi", "Vosita buzilgan"], c: 1 },
        { q: "Izchillikni saqlashning eng oddiy usuli qaysi?", o: ["Har klipda boshqa tavsif", "Personaj/uslub tavsifini har klipda so'zma-so'z takrorlash", "Tavsifsiz yaratish", "Faqat rangni o'zgartirish"], c: 1 },
        { q: "Image-to-video izchillikka qanday yordam beradi?", o: ["Hech qanday", "Bir xil personaj rasmidan boshlanish imkonini beradi", "Faqat tezlik", "Faqat rang"], c: 1 },
        { q: "Kliplararo nimani o'zgartirasiz?", o: ["Personaj tavsifini", "Faqat sahnani va harakatni", "Hammasini", "Hech narsani"], c: 1 },
        { q: "Seed (qo'llab-quvvatlansa) nima beradi?", o: ["Klipni o'chiradi", "Natijani barqarorlashtiradi", "Ovoz qo'shadi", "Rangni buzadi"], c: 1 }
      ]
    },

    {
      id: "v5_3",
      title: "Kadr rejalashtirish — storyboard",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Tajribali rejissyor kamerani yoqishdan oldin <b>har bir kadrni rejalashtiradi</b>. AI video ham xuddi shunday: tasodifiy kliplar yaratish o'rniga, avval <b>storyboard</b> (kadrlar rejasi) tuzsangiz, natija izchil va maqsadli bo'ladi, vaqt ham tejaladi. Bu darsda kadrlarni rejalashtirishni o'rganamiz.</p>

<h3>Storyboard nima</h3>
<p>Storyboard — videongizning <b>kadrlar ro'yxati</b>. Har kadr uchun qisqacha yozasiz: <b>sahna</b> (nima ko'rinadi), <b>harakat</b> (nima bo'ladi), <b>kamera</b> (qanday suratga olinadi). Bu — videongizni klip yaratishdan oldingi «chizmasi».</p>

<h3>Nega reja muhim</h3>
<ul>
  <li><b>Izchillik</b> — barcha kadr bitta uslub va hikoyaga bo'ysunadi.</li>
  <li><b>Mantiqiy ketma-ketlik</b> — kadrlar bir-biriga tabiiy ulanadi.</li>
  <li><b>Vaqt tejash</b> — har kadr uchun nima kerakligini avval bilasiz, behuda urinishlar kamayadi.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Avval qog'ozda, keyin ekranda</b>Murakkab video yasashdan oldin 3–5 kadrli sodda storyboard yozing: har kadr uchun sahna, harakat va kamera. Bu besh daqiqalik reja keyin soatlab vaqtingizni tejaydi va videoni bir butun, professional qiladi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv53bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv53fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv53sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv53bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Storyboard — har kadr oldindan rejalashtiriladi</text>
  <g font-family="system-ui">
    <g filter="url(#fv53sh)"><rect x="40" y="44" width="150" height="100" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <circle cx="58" cy="62" r="10" fill="url(#fv53fr)"/><text x="58" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">1</text>
    <rect x="52" y="78" width="126" height="34" rx="5" fill="#ffedd5"/><circle cx="72" cy="92" r="6" fill="#fb923c"/>
    <text x="115" y="128" text-anchor="middle" font-size="9" fill="#94a3b8">sahna · harakat · kamera</text>
    <g filter="url(#fv53sh)"><rect x="206" y="44" width="150" height="100" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <circle cx="224" cy="62" r="10" fill="url(#fv53fr)"/><text x="224" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">2</text>
    <rect x="218" y="78" width="126" height="34" rx="5" fill="#ffedd5"/><rect x="232" y="86" width="40" height="20" rx="3" fill="#fb923c"/>
    <text x="281" y="128" text-anchor="middle" font-size="9" fill="#94a3b8">sahna · harakat · kamera</text>
    <g filter="url(#fv53sh)"><rect x="372" y="44" width="150" height="100" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <circle cx="390" cy="62" r="10" fill="url(#fv53fr)"/><text x="390" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">3</text>
    <rect x="384" y="78" width="126" height="34" rx="5" fill="#ffedd5"/><path d="M398 104 l16 -14 24 14z" fill="#fb923c"/>
    <text x="447" y="128" text-anchor="middle" font-size="9" fill="#94a3b8">sahna · harakat · kamera</text>
    <g filter="url(#fv53sh)"><rect x="538" y="44" width="150" height="100" rx="12" fill="#fff" stroke="#fed7aa"/></g>
    <circle cx="556" cy="62" r="10" fill="url(#fv53fr)"/><text x="556" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">4</text>
    <rect x="550" y="78" width="126" height="34" rx="5" fill="#ffedd5"/><circle cx="613" cy="95" r="11" fill="none" stroke="#fb923c" stroke-width="2.4"/><path d="M610 95 l2 2 4-5" stroke="#fb923c" stroke-width="2" fill="none" stroke-linecap="round"/>
    <text x="613" y="128" text-anchor="middle" font-size="9" fill="#94a3b8">sahna · harakat · kamera</text>
  </g>
</svg>
<figcaption>Har kadr uchun sahna, harakat va kamerani oldindan yozasiz</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Storyboard — videongizning kadrlar rejasi: har kadr uchun sahna, harakat va kamerani oldindan yozasiz. U izchillik, mantiqiy ketma-ketlik va vaqt tejashni ta'minlaydi. Murakkab videodan oldin sodda 3–5 kadrli reja tuzing.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi storyboard amaliyotlarini baholang: <b>yaxshi reja</b>mi yoki <b>xato</b>mi?",
        groups: ["yaxshi reja", "xato"],
        items: [
          { name: "Har kadr uchun sahna, harakat va kamerani oldindan yozish", answer: "yaxshi reja", hint: "Aniq reja — yaxshi storyboard." },
          { name: "Hech reja qilmasdan tasodifiy kliplar yaratish", answer: "xato", hint: "Rejasizlik — tartibsiz natija." },
          { name: "Kadrlar mantiqiy ketma-ketlikda ulanishini ta'minlash", answer: "yaxshi reja", hint: "Mantiqiy ulanish — yaxshi reja." },
          { name: "Bir-biriga bog'liqsiz kliplarni tartibsiz yig'ish", answer: "xato", hint: "Bog'liqsiz kliplar — yaxshi video bermaydi." },
          { name: "Uslub va kayfiyatni barcha kadrda izchil saqlash", answer: "yaxshi reja", hint: "Izchil uslub — professional ko'rinish." },
          { name: "Har kadrda butunlay boshqa uslub ishlatish", answer: "xato", hint: "Uslub har kadrda o'zgarsa — video parchalanadi." }
        ]
      },
      quiz: [
        { q: "Storyboard nima?", o: ["Tayyor video", "Videongizning kadrlar rejasi (har kadr uchun sahna, harakat, kamera)", "Ovoz fayli", "Vosita nomi"], c: 1 },
        { q: "Storyboard nega muhim?", o: ["Klipni qimmatlashtiradi", "Izchillik, mantiqiy ketma-ketlik va vaqt tejashni beradi", "Internetni tezlashtiradi", "Faqat chiroy uchun"], c: 1 },
        { q: "Har kadr uchun nima yoziladi?", o: ["Faqat narx", "Sahna, harakat va kamera", "Faqat fayl hajmi", "Vosita versiyasi"], c: 1 },
        { q: "Murakkab videodan oldin nima qilish kerak?", o: ["Darrov yaratishni boshlash", "Sodda 3–5 kadrli storyboard tuzish", "Hech narsa", "Faqat eng arzon vositani tanlash"], c: 1 },
        { q: "Yaxshi storyboardning belgisi qaysi?", o: ["Har kadrda boshqa uslub", "Kadrlar mantiqiy ulanadi va uslub izchil", "Bog'liqsiz kliplar", "Hech qanday reja"], c: 1 }
      ]
    }
  ]
});
