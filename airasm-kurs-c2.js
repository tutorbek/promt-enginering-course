/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   8-modul: Professional ish va axloq
   window.AIRASM_COURSE.modules.push({...})
   ============================================================ */
window.AIRASM_COURSE.modules.push({
  id: "c2",
  title: "Pro ish va axloq",
  lessons: [
    {
      id: "c2_1",
      title: "Mualliflik, litsenziya va tijorat",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">AI rasmni biznes uchun ishlatmoqchi bo'lsangiz, bir savol muhim: <b>uni sotish yoki reklamada ishlatishga huquqim bormi?</b> Bu — texnik emas, huquqiy va axloqiy masala. Javob vositaga, mamlakatga va rasmning mazmuniga bog'liq. Bu darsda tijorat uchun mas'uliyatli yondashuvni ko'ramiz.</p>

<h3>Asosiy savollar</h3>
<ul>
  <li><b>Vosita shartlari</b> — har bir vosita o'z litsenziyasiga ega. Ba'zilari tijoratga ruxsat beradi, ba'zilari (ayniqsa bepul rejada) cheklaydi. Sotishdan oldin <b>shartlarni o'qing</b>.</li>
  <li><b>Mazmun</b> — rasmda birovning <b>brendi</b>, <b>logotipi</b> yoki <b>tanilgan yuzi</b> bo'lsa, hatto vosita ruxsat bersa ham, ulardan foydalanish huquqi alohida masala.</li>
  <li><b>Mahalliy qonun</b> — O'zbekiston va boshqa mamlakatlarda qoidalar har xil va o'zgarib turadi. Yirik tijorat uchun aniqlik kerak bo'lsa, mutaxassisdan so'rang.</li>
</ul>

<h3>Mas'uliyatli amaliyot</h3>
<p>Xavfsiz yo'l oddiy: <b>o'zingiz tasvirlagan, birovning huquqini buzmaydigan</b> rasmlardan foydalaning; vosita litsenziyasini tekshiring; mijozga AI ishlatilganini yashirmang. Bu — ham qonuniy, ham ishonchli munosabat. «Bilmasdim» — muammodan himoya qilmaydi, shuning uchun avval tekshiring.</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Tijoratdan oldin tekshiring</b>Pul ishlash maqsadida ishlatishdan avval ikki narsani aniqlang: (1) vosita litsenziyasi tijoratga ruxsat beradimi; (2) rasmda birovning himoyalangan belgisi, brendi yoki yuzi yo'qmi. Ikkalasi ham toza bo'lsagina — xavfsiz.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c21bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="c21card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#faf2ff"/></linearGradient>
    <filter id="c21sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#7c3aed" flood-opacity=".18"/></filter>
  </defs>
  <rect width="720" height="168" rx="16" fill="url(#c21bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Tijoratdan oldingi tekshiruv ro'yxati</text>
  <g filter="url(#c21sh)"><rect x="120" y="42" width="480" height="112" rx="14" fill="url(#c21card)" stroke="#ead8fb"/></g>
  <g font-family="system-ui" font-size="11.5" font-weight="600" fill="#334155">
    <circle cx="150" cy="66" r="10" fill="#22c55e"/><path d="M145 66 l3.4 3.4 6-7" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="170" y="70" text-anchor="start">Vosita litsenziyasi tijoratga ruxsat beradi</text>
    <circle cx="150" cy="94" r="10" fill="#22c55e"/><path d="M145 94 l3.4 3.4 6-7" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="170" y="98" text-anchor="start">Rasm o'zim tasvirlagan, mustaqil g'oya</text>
    <circle cx="150" cy="122" r="10" fill="#ef4444"/><path d="M146 118 l8 8 M154 118 l-8 8" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
    <text x="170" y="126" text-anchor="start">Brend logotipi yoki real yuz — ruxsatsiz EMAS</text>
  </g>
</svg>
<figcaption>Sotishdan oldin: litsenziya + mazmun — ikkalasi ham toza bo'lsin</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Tijorat uchun ishlatishdan oldin tekshiring: vosita litsenziyasi tijoratga ruxsat beradimi va rasmda birovning brendi, logotipi yoki yuzi yo'qmi. Mahalliy qonunni hisobga oling, mijozga AI ishlatilganini yashirmang. «Bilmasdim» himoya qilmaydi — avval tekshiring.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi yondashuvlarni baholang: <b>mas'uliyatli</b>mi yoki <b>ehtiyot/xato</b>mi?",
        groups: ["mas'uliyatli", "ehtiyot"],
        items: [
          { name: "Sotishdan oldin vosita litsenziyasini o'qib, tijoratga ruxsatini tekshirish", answer: "mas'uliyatli", hint: "Shartlarni tekshirish — mas'uliyatli." },
          { name: "Tanilgan brend logotipini AI bilan qayta yaratib sotish", answer: "ehtiyot", hint: "Himoyalangan belgini sotish — muammoli." },
          { name: "Real shaxs yuzini ruxsatsiz reklamada ishlatish", answer: "ehtiyot", hint: "Birovning yuzini ruxsatsiz ishlatish — xato." },
          { name: "Mijozga AI ishlatilganini ochiq aytish", answer: "mas'uliyatli", hint: "Ochiqlik — ishonchli munosabat." },
          { name: "Generatsiya shartlarini o'qimasdan mijozga sotaverish", answer: "ehtiyot", hint: "Shartlarni bilmasdan sotish — xavfli." },
          { name: "Mahalliy qonun va platforma qoidalarini hisobga olish", answer: "mas'uliyatli", hint: "Qonunni hisobga olish — mas'uliyatli." }
        ]
      },
      quiz: [
        { q: "AI rasmni tijoratda ishlatishdan oldin nimani tekshirish kerak?", o: ["Faqat rangini", "Vosita litsenziyasi tijoratga ruxsat beradimi", "Faqat o'lchamini", "Internet tezligini"], c: 1 },
        { q: "Rasmda birovning brendi yoki logotipi bo'lsa, bu nima?", o: ["Muammosiz", "Alohida huquqiy masala — ehtiyot bo'lish kerak", "Doim ruxsat etilgan", "Faqat texnik nuqson"], c: 1 },
        { q: "Mas'uliyatli amaliyot qaysi?", o: ["Shartlarni o'qimasdan sotish", "O'zing tasvirlagan, huquq buzmaydigan rasmdan foydalanish", "Real yuzlarni ruxsatsiz ishlatish", "Brendlarni nusxalash"], c: 1 },
        { q: "Mijoz bilan ishlashda to'g'ri yondashuv qaysi?", o: ["AI ishlatilganini yashirish", "AI ishlatilganini ochiq aytish", "Hech narsa demaslik shart", "Yolg'on aytish"], c: 1 },
        { q: "«Bilmasdim» degan uzr nima beradi?", o: ["To'liq himoya qiladi", "Muammodan himoya qilmaydi — avval tekshirish kerak", "Hammasini hal qiladi", "Qonuniy kafolat"], c: 1 }
      ]
    },

    {
      id: "c2_2",
      title: "Deepfake va mas'uliyat",
      read: "8 daqiqa",
      html: `
<p class="pk-lead">Kuchli vosita — kuchli mas'uliyat. AI haqiqatga o'xshash soxta rasmlar (deepfake) yaratishi mumkin, va bu jiddiy zarar keltirishi ham mumkin: tuhmat, firib, yolg'on tarqatish. Bu darsda chegarani aniq belgilaymiz — nima maqbul, nima esa zararli va nomaqbul.</p>

<h3>Deepfake nima va xavfi nimada</h3>
<p><b>Deepfake</b> — real odamning yuzi yoki ovozini ishlatib yaratilgan soxta, lekin haqiqatga o'xshash kontent. Xavfi: odamlar uni <b>haqiqat deb qabul qiladi</b>. Shu sababli u tuhmat, obro'siga putur yetkazish, firib va dezinformatsiya uchun ishlatilishi mumkin. Bu nafaqat axloqsiz, ko'p joyda <b>noqonuniy</b> ham.</p>

<h3>Chegara qayerda</h3>
<p>Oddiy mezon: <b>kimgadir zarar yetkazadimi yoki aldaydimi?</b></p>
<ul>
  <li><b>Maqbul</b> — o'z yuzingiz bilan ijodiy/kulgili kontent; xayoliy personajlar; AI ekani ochiq belgilangan badiiy ish.</li>
  <li><b>Nomaqbul</b> — birovning yuzini ruxsatsiz ishlatish; tanilgan shaxsni soxta janjalda ko'rsatish; odamlarni chalg'itish uchun «haqiqiy» deb tarqatish.</li>
</ul>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Belgilash va rozilik — ikki tamoyil</b>Ikki oddiy qoida ko'p muammoning oldini oladi: (1) AI yaratgan, chalg'itishi mumkin bo'lgan rasmni <b>ochiq belgilang</b> («AI tomonidan yaratilgan»); (2) real odamning yuzini ishlatsangiz — <b>roziligini oling</b>. Shubha bo'lsa — qilmang.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 158" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c22bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="c22g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0fdf4"/></linearGradient>
    <linearGradient id="c22r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fef2f2"/></linearGradient>
    <filter id="c22sh" x="-20%" y="-30%" width="140%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".16"/></filter>
  </defs>
  <rect width="720" height="158" rx="16" fill="url(#c22bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Mezon: zarar yetkazadimi yoki aldaydimi?</text>
  <g filter="url(#c22sh)"><rect x="56" y="50" width="278" height="88" rx="14" fill="url(#c22g)" stroke="#bbf7d0"/></g>
  <circle cx="86" cy="80" r="15" fill="#22c55e"/><path d="M80 80 l4 4 8 -9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="112" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#15803d">Maqbul</text>
  <text x="112" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">o'z yuzing · xayoliy personaj</text>
  <text x="112" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">AI ekani ochiq belgilangan</text>
  <g filter="url(#c22sh)"><rect x="386" y="50" width="278" height="88" rx="14" fill="url(#c22r)" stroke="#fecaca"/></g>
  <g transform="translate(416,80)"><circle r="15" fill="#ef4444"/><path d="M-5 -5 l10 10 M5 -5 l-10 10" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>
  <text x="442" y="76" text-anchor="start" font-family="system-ui" font-size="12" font-weight="800" fill="#b91c1c">Nomaqbul</text>
  <text x="442" y="98" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">birovning yuzi — ruxsatsiz</text>
  <text x="442" y="116" text-anchor="start" font-family="system-ui" font-size="10.5" fill="#475569">«haqiqiy» deb chalg'itish</text>
</svg>
<figcaption>Zarar yetkazadigan yoki aldaydigan soxta kontent — chegaradan tashqarida</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Deepfake — real odam yuzi/ovozi bilan yaratilgan haqiqatga o'xshash soxta kontent; tuhmat, firib va dezinformatsiya uchun xavfli, ko'p joyda noqonuniy. Mezon: zarar yetkazadimi yoki aldaydimi. Chalg'itishi mumkin bo'lsa belgilang, real yuzga rozilik oling, shubha bo'lsa — qilmang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi ishlatishlarni baholang: <b>maqbul</b>mi yoki <b>nomaqbul</b> (zararli)mi?",
        groups: ["maqbul", "nomaqbul"],
        items: [
          { name: "O'z yuzingiz bilan kulgili stiker yaratish", answer: "maqbul", hint: "O'z yuzingiz, zararsiz ijod — maqbul." },
          { name: "Tanilgan shaxsni soxta janjalli sahnada ko'rsatish", answer: "nomaqbul", hint: "Obro'ga putur yetkazuvchi soxta sahna — nomaqbul." },
          { name: "Tarixiy mavzuda badiiy illyustratsiya (real shaxssiz)", answer: "maqbul", hint: "Real shaxssiz badiiy ish — maqbul." },
          { name: "Birovning yuzini ruxsatsiz nomaqbul kontentga qo'yish", answer: "nomaqbul", hint: "Ruxsatsiz yuz va zararli kontent — nomaqbul." },
          { name: "Reklamada rasm AI ekanini ochiq belgilash", answer: "maqbul", hint: "Ochiq belgilash — mas'uliyatli, maqbul." },
          { name: "Soxta rasm bilan odamlarni aldab, yolg'on tarqatish", answer: "nomaqbul", hint: "Chalg'itish va yolg'on — nomaqbul." }
        ]
      },
      quiz: [
        { q: "Deepfake nima?", o: ["Yangi vosita", "Real odam yuzi/ovozi bilan yaratilgan haqiqatga o'xshash soxta kontent", "Rasm formati", "Bir uslub turi"], c: 1 },
        { q: "Deepfake nima uchun xavfli?", o: ["Sekin ishlaydi", "Odamlar uni haqiqat deb qabul qilib, tuhmat/firib/yolg'on uchun ishlatilishi mumkin", "Rang yo'qoladi", "Fayl katta"], c: 1 },
        { q: "Maqbul va nomaqbul orasidagi asosiy mezon qaysi?", o: ["Rasm o'lchami", "Kimgadir zarar yetkazadimi yoki aldaydimi", "Rang soni", "Yaratish tezligi"], c: 1 },
        { q: "Real odamning yuzini ishlatmoqchi bo'lsangiz nima qilasiz?", o: ["Hech narsa", "Roziligini olasiz", "Yashirasiz", "Ko'paytirasiz"], c: 1 },
        { q: "Chalg'itishi mumkin bo'lgan AI rasm bilan nima qilish to'g'ri?", o: ["«Haqiqiy» deb tarqatish", "AI ekanini ochiq belgilash", "Hech narsa demaslik", "Boshqalarga sotish"], c: 1 }
      ]
    },

    {
      id: "c2_3",
      title: "Ish jarayoni, portfolio va daromad",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Endi sizda bilim bor — text-to-image asoslaridan tortib professional boshqaruv va axloqgacha. Oxirgi savol: <b>bu ko'nikmadan qanday foyda olish mumkin?</b> AI rasm yaratish — bugun real daromad manbai: frilans xizmat, kontent, dizayn yordami. Bu darsda ko'nikmani amaliy natijaga aylantirish yo'lini ko'ramiz.</p>

<h3>Professional ish jarayoni</h3>
<p>Tasodifiy emas, <b>tizimli</b> ishlang: maqsadni aniqlang → prompt va parametrlarni puxta tuzing → variantlar yarating → eng yaxshisini tahrirlang (inpaint, tuzating) → upscale qiling → yakuniy natijani saralang. Bu izchil jarayon sifatni barqaror qiladi — mijoz aynan shuni qadrlaydi.</p>

<h3>Ko'nikmadan daromadga</h3>
<ul>
  <li><b>Ko'nikmani mustahkamlang</b> — bir necha hafta muntazam mashq, turli uslub va vazifalarda.</li>
  <li><b>Yo'nalish tanlang</b> — hammasini emas, bittasini: logo/brending, illyustratsiya, reklama yoki ijtimoiy kontent.</li>
  <li><b>Portfolio yig'ing</b> — eng yaxshi 10–15 ishingizni ko'rsating; ular sizning «tashrif qog'ozingiz».</li>
  <li><b>Xizmat taklif qiling</b> — frilans platformalari, mahalliy biznes, ijtimoiy tarmoq orqali mijoz toping.</li>
  <li><b>Sifatni oshiring</b> — mijoz fikriga quloq soling, takror buyurtmaga intiling.</li>
</ul>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Onlayn daromadda hushyor bo'ling</b>Frilans va onlayn ish — real imkoniyat, lekin firibgarlar ham shu yerda. «Ishni boshlash uchun pul to'lang» degan takliflardan, oldindan to'lov so'rovlaridan ehtiyot bo'ling. Haqiqiy ish beruvchi sizga to'laydi, siz emas. (Bu haqda «Raqamli savodxonlik va xavfsizlik» kursida batafsil bor.)</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 178" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c23bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="c23st" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <filter id="c23sh" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#7c3aed" flood-opacity=".25"/></filter>
  </defs>
  <rect width="720" height="178" rx="16" fill="url(#c23bg)"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Ko'nikmadan daromadga — bosqichma-bosqich</text>
  <g font-family="system-ui" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">
    <g filter="url(#c23sh)"><rect x="36" y="120" width="116" height="34" rx="9" fill="url(#c23st)"/></g><text x="94" y="141">Ko'nikma</text>
    <g filter="url(#c23sh)"><rect x="170" y="98" width="116" height="34" rx="9" fill="url(#c23st)"/></g><text x="228" y="119">Yo'nalish</text>
    <g filter="url(#c23sh)"><rect x="304" y="76" width="116" height="34" rx="9" fill="url(#c23st)"/></g><text x="362" y="97">Portfolio</text>
    <g filter="url(#c23sh)"><rect x="438" y="54" width="116" height="34" rx="9" fill="url(#c23st)"/></g><text x="496" y="75">Mijoz</text>
    <g filter="url(#c23sh)"><rect x="572" y="34" width="116" height="34" rx="9" fill="url(#c23st)"/></g><text x="630" y="55">Daromad</text>
  </g>
  <g stroke="#a78bfa" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M152 130 L170 117"/><path d="M286 108 L304 95"/><path d="M420 86 L438 73"/><path d="M554 64 L572 53"/>
  </g>
  <path d="M630 70 q.8 4 5 4.6 q-4.2.6 -5 4.6 q-.8-4 -5-4.6 q4.2-.6 5-4.6Z" fill="#e879f9" opacity=".85"/>
</svg>
<figcaption>Muntazam mashq → aniq yo'nalish → portfolio → mijoz → daromad</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Professional ish — tizimli jarayon: maqsad → prompt/parametr → variantlar → tahrir → upscale → saralash. Daromadga yo'l: ko'nikmani mustahkamlang, aniq yo'nalish tanlang, portfolio yig'ing, xizmat taklif qiling, sifatni oshiring. Onlayn ishda firibdan hushyor bo'ling.</span></div>`,
      sim: {
        type: "order",
        intro: "AI rasm ko'nikmasini daromadga aylantirish bosqichlarini <b>to'g'ri tartibga</b> joylashtiring.",
        steps: [
          "Prompt va uslub ko'nikmangizni muntazam mashq bilan mustahkamlang",
          "Aniq yo'nalish tanlang (logo, illyustratsiya, reklama yoki kontent)",
          "Eng yaxshi ishlardan portfolio yig'ing",
          "Xizmatni taklif qilib, mijoz toping",
          "Mijoz fikri asosida sifat va xizmatni oshiring"
        ]
      },
      quiz: [
        { q: "Professional ish jarayoni qanday bo'lishi kerak?", o: ["Tasodifiy, har safar boshqacha", "Tizimli: maqsad → prompt → variant → tahrir → upscale → saralash", "Faqat bitta urinish", "Hech qanday tartibsiz"], c: 1 },
        { q: "Daromadga yo'lda birinchi qadam nima?", o: ["Darrov mijoz qidirish", "Ko'nikmani muntazam mashq bilan mustahkamlash", "Portfolio sotish", "Pul to'lash"], c: 1 },
        { q: "Portfolio nima uchun kerak?", o: ["Faqat chiroy uchun", "Eng yaxshi ishlaringizni ko'rsatib, mijoz ishonchini qozonish", "Fayl saqlash", "Hech qanday foydasi yo'q"], c: 1 },
        { q: "Yo'nalish tanlashda to'g'ri yondashuv qaysi?", o: ["Hammasini birdan qilish", "Bitta aniq yo'nalishga e'tibor qaratish", "Hech qaysi", "Faqat eng qiyinini"], c: 1 },
        { q: "Onlayn ish izlashda nimadan ehtiyot bo'lish kerak?", o: ["Mijoz fikridan", "«Ishni boshlash uchun pul to'lang» kabi firib takliflardan", "Portfolio ko'rsatishdan", "Sifatni oshirishdan"], c: 1 }
      ]
    }
  ]
});
