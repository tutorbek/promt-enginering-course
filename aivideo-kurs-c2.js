/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   8-modul: Professional ish va axloq
   window.AIVIDEO_COURSE.modules.push({...})
   ============================================================ */
window.AIVIDEO_COURSE.modules.push({
  id: "v8",
  title: "Pro ish va axloq",
  lessons: [
    {
      id: "v8_1",
      title: "Mualliflik, litsenziya va tijorat",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">AI videoni biznesda — reklama, ijtimoiy tarmoq, mijoz uchun — ishlatmoqchimisiz? Unda bir savol muhim: <b>uni tijoratda ishlatishga huquqim bormi?</b> Bu texnik emas, huquqiy va axloqiy masala. Javob vositaga, mamlakatga va videoning mazmuniga bog'liq. Bu darsda tijorat uchun mas'uliyatli yondashuvni ko'ramiz.</p>

<h3>Asosiy savollar</h3>
<ul>
  <li><b>Vosita shartlari</b> — har vosita o'z litsenziyasiga ega. Ba'zilari tijoratga ruxsat beradi, ba'zilari (ayniqsa bepul rejada) cheklaydi. Sotishdan oldin <b>shartlarni o'qing</b>.</li>
  <li><b>Mazmun</b> — videoda birovning <b>brendi</b>, <b>logotipi</b>, <b>tanilgan yuzi</b> yoki <b>ovozi</b> bo'lsa, ulardan foydalanish huquqi alohida masala.</li>
  <li><b>Musiqa</b> — fon musiqasi ham litsenziyali bo'lishi mumkin. Tijorat uchun ruxsat berilgan yoki o'z musiqangizdan foydalaning.</li>
  <li><b>Mahalliy qonun</b> — qoidalar mamlakatlarda har xil va o'zgarib turadi. Yirik tijorat uchun mutaxassisdan so'rang.</li>
</ul>

<h3>Mas'uliyatli amaliyot</h3>
<p>Xavfsiz yo'l oddiy: <b>o'zingiz tasvirlagan, birovning huquqini buzmaydigan</b> kontent; vosita va musiqa litsenziyasini tekshiring; mijozga AI ishlatilganini yashirmang. «Bilmasdim» muammodan himoya qilmaydi — avval tekshiring.</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Video uchun uchta tekshiruv</b>Tijoratdan oldin uchta narsani aniqlang: (1) <b>vosita litsenziyasi</b> tijoratga ruxsat beradimi; (2) <b>mazmunda</b> birovning brendi, yuzi yoki ovozi yo'qmi; (3) <b>musiqa</b> tijoratga ruxsatlimi. Uchalasi toza bo'lsagina — xavfsiz.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv81bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv81card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff7f4"/></linearGradient>
    <filter id="fv81sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#dc2626" flood-opacity=".18"/></filter>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv81bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Tijoratdan oldingi tekshiruv ro'yxati</text>
  <g filter="url(#fv81sh)"><rect x="120" y="42" width="480" height="112" rx="14" fill="url(#fv81card)" stroke="#fed7aa"/></g>
  <g font-family="system-ui" font-size="11.5" font-weight="600" fill="#334155">
    <circle cx="150" cy="66" r="10" fill="#22c55e"/><path d="M145 66 l3.4 3.4 6-7" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="170" y="70" text-anchor="start">Vosita litsenziyasi tijoratga ruxsat beradi</text>
    <circle cx="150" cy="94" r="10" fill="#22c55e"/><path d="M145 94 l3.4 3.4 6-7" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="170" y="98" text-anchor="start">Musiqa tijoratga ruxsatli yoki o'ziniki</text>
    <circle cx="150" cy="122" r="10" fill="#ef4444"/><path d="M146 118 l8 8 M154 118 l-8 8" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
    <text x="170" y="126" text-anchor="start">Brend, real yuz yoki ovoz — ruxsatsiz EMAS</text>
  </g>
</svg>
<figcaption>Sotishdan oldin: vosita, mazmun va musiqa — uchalasi ham toza bo'lsin</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Tijorat uchun ishlatishdan oldin tekshiring: vosita litsenziyasi ruxsat beradimi, mazmunda birovning brendi/yuzi/ovozi yo'qmi, musiqa tijoratga ruxsatlimi. Mahalliy qonunni hisobga oling, mijozga AI ishlatilganini yashirmang. «Bilmasdim» himoya qilmaydi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi yondashuvlarni baholang: <b>mas'uliyatli</b>mi yoki <b>ehtiyot/xato</b>mi?",
        groups: ["mas'uliyatli", "ehtiyot"],
        items: [
          { name: "Sotishdan oldin vosita litsenziyasini o'qib, tijoratga ruxsatini tekshirish", answer: "mas'uliyatli", hint: "Shartlarni tekshirish — mas'uliyatli." },
          { name: "Tanilgan brend logotipini videoda ruxsatsiz ishlatish", answer: "ehtiyot", hint: "Himoyalangan belgi — muammoli." },
          { name: "Real shaxs yuzi yoki ovozini ruxsatsiz reklamada ishlatish", answer: "ehtiyot", hint: "Ruxsatsiz yuz/ovoz — xato." },
          { name: "Tijoratga ruxsatli yoki o'z musiqangizdan foydalanish", answer: "mas'uliyatli", hint: "Litsenziyali musiqa — to'g'ri." },
          { name: "Generatsiya va musiqa shartlarini o'qimasdan sotaverish", answer: "ehtiyot", hint: "Shartlarni bilmasdan sotish — xavfli." },
          { name: "Mijozga video AI bilan yaratilganini ochiq aytish", answer: "mas'uliyatli", hint: "Ochiqlik — ishonchli munosabat." }
        ]
      },
      quiz: [
        { q: "AI videoni tijoratda ishlatishdan oldin nimani tekshirish kerak?", o: ["Faqat rangini", "Vosita litsenziyasi tijoratga ruxsat beradimi", "Faqat o'lchamini", "Internet tezligini"], c: 1 },
        { q: "Videoga qo'shilgan fon musiqasi haqida nima to'g'ri?", o: ["Hech qanday cheklov yo'q", "U ham litsenziyali bo'lishi mumkin — tijoratga ruxsatini tekshiring", "Doim bepul", "Faqat texnik masala"], c: 1 },
        { q: "Mas'uliyatli amaliyot qaysi?", o: ["Shartlarni o'qimasdan sotish", "O'zing yaratgan, huquq buzmaydigan kontentdan foydalanish", "Real yuz/ovozni ruxsatsiz ishlatish", "Brendlarni nusxalash"], c: 1 },
        { q: "Mijoz bilan ishlashda to'g'ri yondashuv qaysi?", o: ["AI ishlatilganini yashirish", "AI ishlatilganini ochiq aytish", "Yolg'on aytish", "Hech narsa demaslik"], c: 1 },
        { q: "«Bilmasdim» degan uzr nima beradi?", o: ["To'liq himoya qiladi", "Muammodan himoya qilmaydi — avval tekshirish kerak", "Qonuniy kafolat", "Hammasini hal qiladi"], c: 1 }
      ]
    },

    {
      id: "v8_2",
      title: "Deepfake, ovoz klonlash va mas'uliyat",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Video va ovoz birgalikda — eng ishonarli, lekin shu sababli eng <b>xavfli</b> soxta kontentni yaratishi mumkin. AI haqiqatga o'xshash soxta video (deepfake) va klonlangan ovozni birlashtirsa, ko'pchilik uni haqiqat deb qabul qiladi. Kuchli vosita — kuchli mas'uliyat. Bu darsda chegarani aniq belgilaymiz.</p>

<h3>Nega video deepfake ayniqsa xavfli</h3>
<p>Rasm deepfake'ni hali sezish mumkin, lekin <b>harakatli video + mos ovoz</b> juda ishonarli bo'ladi. Shuning uchun u tuhmat, firib, siyosiy dezinformatsiya va obro'ga putur yetkazish uchun ishlatilishi mumkin. Bu nafaqat axloqsiz, ko'p joyda <b>noqonuniy</b> ham.</p>

<h3>Chegara qayerda</h3>
<p>Oddiy mezon: <b>kimgadir zarar yetkazadimi yoki aldaydimi?</b></p>
<ul>
  <li><b>Maqbul</b> — o'z yuzingiz/ovozingiz bilan ijodiy kontent; xayoliy personajlar; AI ekani ochiq belgilangan badiiy yoki ta'limiy video.</li>
  <li><b>Nomaqbul</b> — real shaxs yuzi yoki ovozini ruxsatsiz ishlatish; tanilgan kishini soxta vaziyatda «gapirtirish»; odamlarni «haqiqiy» deb chalg'itish.</li>
</ul>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Belgilash va rozilik — ikki tamoyil</b>Ikki oddiy qoida ko'p muammoning oldini oladi: (1) AI yaratgan, chalg'itishi mumkin bo'lgan videoni <b>ochiq belgilang</b> («AI tomonidan yaratilgan»); (2) real odamning yuzi yoki ovozini ishlatsangiz — <b>roziligini oling</b>. Shubha bo'lsa — qilmang.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 158" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv82bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv82g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0fdf4"/></linearGradient>
    <linearGradient id="fv82r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fef2f2"/></linearGradient>
    <filter id="fv82sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".16"/></filter>
  </defs>
  <rect width="720" height="158" rx="16" fill="url(#fv82bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Mezon: zarar yetkazadimi yoki aldaydimi?</text>
  <g filter="url(#fv82sh)"><rect x="56" y="50" width="278" height="88" rx="14" fill="url(#fv82g)" stroke="#bbf7d0"/></g>
  <circle cx="86" cy="80" r="15" fill="#22c55e"/><path d="M80 80 l4 4 8 -9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="112" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#15803d">Maqbul</text>
  <text x="112" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">o'z yuz/ovoz · xayoliy personaj</text>
  <text x="112" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">AI ekani ochiq belgilangan</text>
  <g filter="url(#fv82sh)"><rect x="386" y="50" width="278" height="88" rx="14" fill="url(#fv82r)" stroke="#fecaca"/></g>
  <g transform="translate(416,80)"><circle r="15" fill="#ef4444"/><path d="M-5 -5 l10 10 M5 -5 l-10 10" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>
  <text x="442" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#b91c1c">Nomaqbul</text>
  <text x="442" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">real yuz/ovoz — ruxsatsiz</text>
  <text x="442" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">«haqiqiy» deb chalg'itish</text>
</svg>
<figcaption>Zarar yetkazadigan yoki aldaydigan soxta video — chegaradan tashqarida</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Video deepfake (soxta video + klonlangan ovoz) juda ishonarli, shuning uchun ayniqsa xavfli — tuhmat, firib, dezinformatsiya uchun ishlatilishi mumkin va ko'p joyda noqonuniy. Mezon: zarar yetkazadimi yoki aldaydimi. Chalg'itishi mumkin bo'lsa belgilang, real yuz/ovozga rozilik oling, shubha bo'lsa — qilmang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi ishlatishlarni baholang: <b>maqbul</b>mi yoki <b>nomaqbul</b> (zararli)mi?",
        groups: ["maqbul", "nomaqbul"],
        items: [
          { name: "O'z yuzingiz va ovozingiz bilan izohlovchi video yaratish", answer: "maqbul", hint: "O'z yuz/ovoz, zararsiz — maqbul." },
          { name: "Tanilgan shaxsni soxta vaziyatda «gapirtirish»", answer: "nomaqbul", hint: "Soxta video + ovoz — chalg'ituvchi, nomaqbul." },
          { name: "Xayoliy personaj uchun badiiy klip yaratish", answer: "maqbul", hint: "Xayoliy personaj — maqbul." },
          { name: "Real odam ovozini ruxsatsiz klonlab, firib uchun ishlatish", answer: "nomaqbul", hint: "Ruxsatsiz ovoz + firib — qat'iy nomaqbul." },
          { name: "Reklamada video AI ekanini ochiq belgilash", answer: "maqbul", hint: "Ochiq belgilash — mas'uliyatli." },
          { name: "Soxta video bilan odamlarni aldab, yolg'on tarqatish", answer: "nomaqbul", hint: "Chalg'itish va yolg'on — nomaqbul." }
        ]
      },
      quiz: [
        { q: "Nega video deepfake rasm deepfake'dan xavfliroq?", o: ["Tezroq", "Harakatli video + mos ovoz juda ishonarli bo'ladi", "Arzonroq", "Rang ko'p"], c: 1 },
        { q: "Maqbul va nomaqbul orasidagi asosiy mezon qaysi?", o: ["Video o'lchami", "Kimgadir zarar yetkazadimi yoki aldaydimi", "Rang soni", "Klip uzunligi"], c: 1 },
        { q: "Real odamning yuzi yoki ovozini ishlatmoqchi bo'lsangiz?", o: ["Hech narsa", "Roziligini olasiz", "Yashirasiz", "Tarqatasiz"], c: 1 },
        { q: "Chalg'itishi mumkin bo'lgan AI video bilan nima qilish to'g'ri?", o: ["«Haqiqiy» deb tarqatish", "AI ekanini ochiq belgilash", "Hech narsa demaslik", "Sotish"], c: 1 },
        { q: "Quyidagilardan qaysi biri nomaqbul?", o: ["O'z ovozing bilan izoh", "Xayoliy personaj", "Tanilgan kishini soxta vaziyatda gapirtirish", "AI ekanini belgilash"], c: 2 }
      ]
    },

    {
      id: "v8_3",
      title: "Ish jarayoni, portfolio va daromad",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi sizda to'liq bilim bor — AI video asoslaridan tortib professional boshqaruv, montaj va axloqgacha. Oxirgi savol: <b>bu ko'nikmadan qanday foyda olish mumkin?</b> AI video — bugun real, o'sib borayotgan daromad manbai: reklama roliklar, ijtimoiy kontent, mijoz uchun videolar. Bu darsda ko'nikmani amaliy natijaga aylantirishni ko'ramiz.</p>

<h3>Ko'nikmadan daromadga</h3>
<ul>
  <li><b>Ko'nikmani mustahkamlang</b> — bir necha hafta muntazam mashq: turli prompt, kamera, montaj.</li>
  <li><b>Yo'nalish tanlang</b> — hammasini emas, bittasini: reklama roliklar, ijtimoiy kontent, izohlovchi videolar yoki mahsulot demolari.</li>
  <li><b>Showreel (namuna to'plam) yig'ing</b> — eng yaxshi 5–10 klipingizdan qisqa namoyish video. Bu sizning «tashrif qog'ozingiz».</li>
  <li><b>Xizmat taklif qiling</b> — frilans platformalari, mahalliy biznes, ijtimoiy tarmoq orqali mijoz toping.</li>
  <li><b>Sifatni oshiring</b> — mijoz fikriga quloq soling, takror buyurtmaga intiling.</li>
</ul>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Onlayn daromadda hushyor bo'ling</b>Frilans va onlayn ish — real imkoniyat, lekin firibgarlar ham shu yerda. «Ishni boshlash uchun pul to'lang» degan takliflardan, oldindan to'lov so'rovlaridan ehtiyot bo'ling. Haqiqiy ish beruvchi sizga to'laydi, siz emas. (Bu haqda «Raqamli savodxonlik va xavfsizlik» kursida batafsil bor.)</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv83bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv83st" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv83sh" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#dc2626" flood-opacity=".25"/></filter>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#fv83bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Ko'nikmadan daromadga — bosqichma-bosqich</text>
  <g font-family="system-ui" font-size="9.5" font-weight="700" fill="#fff" text-anchor="middle">
    <g filter="url(#fv83sh)"><rect x="36" y="116" width="116" height="34" rx="9" fill="url(#fv83st)"/></g><text x="94" y="137">Ko'nikma</text>
    <g filter="url(#fv83sh)"><rect x="170" y="94" width="116" height="34" rx="9" fill="url(#fv83st)"/></g><text x="228" y="115">Yo'nalish</text>
    <g filter="url(#fv83sh)"><rect x="304" y="72" width="116" height="34" rx="9" fill="url(#fv83st)"/></g><text x="362" y="93">Showreel</text>
    <g filter="url(#fv83sh)"><rect x="438" y="50" width="116" height="34" rx="9" fill="url(#fv83st)"/></g><text x="496" y="71">Mijoz</text>
    <g filter="url(#fv83sh)"><rect x="572" y="30" width="116" height="34" rx="9" fill="url(#fv83st)"/></g><text x="630" y="51">Daromad</text>
  </g>
  <g stroke="#fb923c" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M152 126 L170 113"/><path d="M286 104 L304 91"/><path d="M420 82 L438 69"/><path d="M554 60 L572 49"/>
  </g>
  <path d="M630 66 q.8 4 5 4.6 q-4.2.6 -5 4.6 q-.8-4 -5-4.6 q4.2-.6 5-4.6Z" fill="#fb923c" opacity=".85"/>
</svg>
<figcaption>Muntazam mashq → aniq yo'nalish → showreel → mijoz → daromad</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Daromadga yo'l: ko'nikmani mustahkamlang, aniq yo'nalish tanlang (reklama, ijtimoiy kontent, demo), showreel (namuna to'plam) yig'ing, xizmat taklif qiling, sifatni oshiring. Onlayn ishda firibdan hushyor bo'ling — haqiqiy ish beruvchi sizga to'laydi, siz emas.</span></div>`,
      sim: {
        type: "order",
        intro: "AI video ko'nikmasini daromadga aylantirish bosqichlarini <b>to'g'ri tartibga</b> joylashtiring.",
        steps: [
          "Prompt, kamera va montaj ko'nikmangizni muntazam mashq bilan mustahkamlang",
          "Aniq yo'nalish tanlang (reklama, ijtimoiy kontent yoki demo)",
          "Eng yaxshi kliplardan showreel (namuna to'plam) yig'ing",
          "Xizmatni taklif qilib, mijoz toping",
          "Mijoz fikri asosida sifat va xizmatni oshiring"
        ]
      },
      quiz: [
        { q: "Daromadga yo'lda birinchi qadam nima?", o: ["Darrov mijoz qidirish", "Ko'nikmani muntazam mashq bilan mustahkamlash", "Showreel sotish", "Pul to'lash"], c: 1 },
        { q: "«Showreel» nima?", o: ["Bitta uzun video", "Eng yaxshi kliplaringizdan qisqa namoyish (tashrif qog'ozi)", "Ovoz fayli", "Vosita nomi"], c: 1 },
        { q: "Yo'nalish tanlashda to'g'ri yondashuv qaysi?", o: ["Hammasini birdan qilish", "Bitta aniq yo'nalishga e'tibor qaratish", "Hech qaysi", "Faqat eng qiyinini"], c: 1 },
        { q: "Onlayn ish izlashda nimadan ehtiyot bo'lish kerak?", o: ["Mijoz fikridan", "«Ishni boshlash uchun pul to'lang» kabi firib takliflardan", "Showreel ko'rsatishdan", "Sifatni oshirishdan"], c: 1 },
        { q: "Sifatni qanday oshirasiz?", o: ["Hech narsa qilmasdan", "Mijoz fikriga quloq solib, takror buyurtmaga intilib", "Faqat narxni oshirib", "Yo'nalishni tez-tez o'zgartirib"], c: 1 }
      ]
    }
  ]
});
