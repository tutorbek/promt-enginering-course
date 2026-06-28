/* ============================================================
   Oson Studio — Prompt Engineering kursi kontenti
   Format: window.PROMPT_COURSE = { title, modules:[{ id,title,lessons:[
     { id, title, read, html, quiz:[{q,o:[4],c}] } ] }] }
   Maqolalar boy HTML; rasmlar inline SVG (har biri o'z ochiq foni bilan —
   light/dark rejimda ham o'qilishi uchun).
   ============================================================ */
window.PROMPT_COURSE = {
  title: "Prompt Engineering",
  subtitle: "Noldan mukammallikgacha",
  modules: [
    {
      id: "m1",
      title: "Kirish: AI va promptlar dunyosi",
      lessons: [
        {
          id: "l1_1",
          title: "Prompt Engineering nima va nega muhim?",
          read: "7 daqiqa",
          html: `
<p class="pk-lead">Tasavvur qiling, sizda dunyodagi eng bilimdon yordamchi bor — u deyarli har qanday savolga javob bera oladi, matn yozadi, kod tuzadi, tahlil qiladi. Lekin bitta sharti bor: u faqat siz <b>aniq tushuntirgan</b> narsani bajaradi. Ana shu yordamchidan eng yaxshi natijani olish san'ati — <b>Prompt Engineering</b> deyiladi.</p>

<h3>Prompt nima?</h3>
<p><b>Prompt</b> (o'qiladi: <i>prompt</i>) — bu siz sun'iy intellektga (AI'ga) yuboradigan <b>ko'rsatma yoki so'rov</b>. Bu oddiy savol ham, batafsil topshiriq ham bo'lishi mumkin. Masalan, ChatGPT yoki Claude'ga Menga sho'rva retseptini yoz deb yozsangiz — bu sizning promptingiz.</p>
<p>AI shu promptni o'qiydi va unga javob qaytaradi. Demak, <b>natija sifati ko'p jihatdan promptga bog'liq</b>: yomon prompt — yomon javob; aniq, o'ylangan prompt — kuchli, foydali javob.</p>

<div class="pk-fig">
<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aiG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#818cf8"/><stop offset="1" stop-color="#6366f1"/></linearGradient>
    <linearGradient id="pG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eef0ff"/></linearGradient>
    <linearGradient id="jG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e7f9f0"/></linearGradient>
    <marker id="ar" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L8 5 L0 10 Z" fill="#a78bfa"/></marker>
  </defs>
  <rect width="620" height="200" rx="16" fill="#fafbff"/>
  <rect x="26" y="58" width="150" height="86" rx="14" fill="url(#pG)" stroke="#c7cbf5" stroke-width="1.5"/>
  <circle cx="101" cy="84" r="15" fill="#eef0ff"/>
  <path d="M95 91 l9-9 a2.2 2.2 0 0 1 3 3 l-9 9 -4.5 1.5 z" fill="none" stroke="#6366f1" stroke-width="1.8" stroke-linejoin="round"/>
  <text x="101" y="119" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="700" fill="#312e81">Prompt</text>
  <text x="101" y="134" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#6b7280">sizning so'rovingiz</text>
  <rect x="235" y="48" width="150" height="106" rx="16" fill="url(#aiG)"/>
  <path d="M310 68 l3 8.5 8.5 3 -8.5 3 -3 8.5 -3 -8.5 -8.5 -3 8.5 -3 z" fill="#ffffff" opacity="0.96"/>
  <text x="310" y="120" text-anchor="middle" font-family="system-ui" font-size="14.5" font-weight="800" fill="#ffffff">AI model</text>
  <text x="310" y="137" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#dfe1ff">ChatGPT · Claude</text>
  <rect x="444" y="58" width="150" height="86" rx="14" fill="url(#jG)" stroke="#a7e8c8" stroke-width="1.5"/>
  <circle cx="519" cy="84" r="15" fill="#dcfce7"/>
  <path d="M512 84 l4.5 4.5 8.5 -8.5" fill="none" stroke="#16a34a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="519" y="119" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="700" fill="#14532d">Javob</text>
  <text x="519" y="134" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#6b7280">tayyor natija</text>
  <path d="M180 101 H231" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" marker-end="url(#ar)"/>
  <path d="M389 101 H440" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" marker-end="url(#ar)"/>
</svg>
<figcaption>Prompt → AI model → Javob: oddiy, lekin har bir bosqich muhim</figcaption>
</div>

<h3>Prompt Engineering nima?</h3>
<p><b>Prompt Engineering</b> — bu sun'iy intellektdan aniq, sifatli va kerakli natijani olish uchun promptlarni <b>to'g'ri tuzish, sinash va yaxshilash</b> ko'nikmasi. Bu shunchaki savol berish emas — bu AI bilan <b>samarali muloqot qilish tili</b>.</p>
<p>Yaxshi prompt muhandisi AI'ga nima istayotganini shunday tushuntiradiki, model ikkilanmasdan, aynan kerakli javobni beradi. Bu xuddi mohir menejerga o'xshaydi: u xodimga vazifani aniq qo'yadi, kontekst beradi va natija qanday ko'rinishi kerakligini aytadi.</p>

<h3>Nega bu ko'nikma bugun shunchalik muhim?</h3>
<p>So'nggi yillarda AI hayotimizning bir qismiga aylandi. Yozuvchilar, dasturchilar, marketologlar, o'qituvchilar, tadbirkorlar — hamma undan foydalanmoqda. Lekin <b>bir xil AI'dan turli odamlar juda turlicha natija oladi</b>. Farq — promptda.</p>
<ul>
  <li><b>Vaqtni tejaydi:</b> to'g'ri prompt bilan soatlik ishni daqiqalarda bajarasiz.</li>
  <li><b>Sifatni oshiradi:</b> noaniq so'rov o'rtacha javob beradi; aniq prompt — professional natija.</li>
  <li><b>Talabga ega ko'nikma:</b> ish bozorida AI bilan ishlay oladigan mutaxassis ustun turadi.</li>
  <li><b>Universal:</b> bu ko'nikma har bir kasbda — kontent, dizayn, dasturlash, biznes — qo'l keladi.</li>
</ul>

<h3>Bir misol: yomon va yaxshi prompt</h3>
<p>Aytaylik, kichik biznesingiz uchun Instagram post matni kerak. Ko'pchilik shunday yozadi:</p>
<div class="pk-ex pk-bad"><span class="tag">Yomon prompt</span>Instagram uchun post yoz.</div>
<p>AI bunga umumiy, quruq matn beradi — chunki u sizning biznesingizni, ohangni, maqsadni bilmaydi. Endi xuddi shu so'rovni aniqroq qilamiz:</p>
<div class="pk-ex pk-good"><span class="tag">Yaxshi prompt</span>Sen tajribali SMM (ijtimoiy tarmoqlar marketingi) mutaxassisisan. Toshkentdagi uy gullari do'koni uchun Instagram post matni yoz. Maqsad — bahorgi 20% chegirmani e'lon qilish. Ohang: iliq va do'stona. 3–4 jumla, 1 ta chaqiruv (call to action) va 5 ta mos hashtag qo'sh.</div>
<p>Ikkinchi prompt AI'ga <b>rol</b> (SMM mutaxassisi), <b>kontekst</b> (qaysi biznes), <b>maqsad</b> (chegirma e'loni), <b>ohang</b> va <b>format</b> berdi. Natija — bevosita ishlatsa bo'ladigan, tayyor post.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>AI sehrli quti emas — u sizning ko'rsatmangizni bajaradi. Qanchalik aniq so'rasangiz, shunchalik yaxshi javob olasiz. Prompt Engineering — aynan shu aniqlikni o'rgatadi.</span></div>

<h3>Ushbu kursda nimani o'rganasiz?</h3>
<p>Biz noldan boshlaymiz: AI qanday ishlashidan tortib, professional darajadagi prompt texnikalarigacha. Har bir dars — qisqa maqola, vizual rasm va kichik test. Test'dan o'tmaguningizcha keyingi mavzu ochilmaydi — shunda bilim mustahkam o'rnashadi. Oxirida esa kursni tamomlaganingiz haqida <b>sertifikat</b> olasiz.</p>
`,
          quiz: [
            { q: "Prompt nima?", o: ["AI yuborgan javob", "AI'ga yuboriladigan ko'rsatma yoki so'rov", "Dasturlash tili", "AI'ning ichki xotirasi"], c: 1 },
            { q: "Prompt Engineering — bu...", o: ["AI modelini noldan yaratish", "Kompyuterni tezlashtirish", "AI'dan kerakli natijani olish uchun promptlarni to'g'ri tuzish ko'nikmasi", "Internetda qidirish usuli"], c: 2 },
            { q: "Quyidagilardan qaysi biri YAXSHI promptga xos?", o: ["Imkon qadar qisqa va umumiy bo'lishi", "Rol, kontekst, maqsad va format berilishi", "Faqat bitta so'zdan iborat bo'lishi", "AI o'zi tushunib oladi, tafsilot shart emas"], c: 1 },
            { q: "Nega bir xil AI'dan turli odamlar turlicha natija oladi?", o: ["AI har kimga tasodifiy javob beradi", "Natija ko'p jihatdan promptning sifatiga bog'liq", "AI ba'zilarni yaxshi ko'radi", "Internet tezligi sababli"], c: 1 }
          ]
        },
        {
          id: "l1_2",
          title: "Sun'iy intellekt qanday o'ylaydi?",
          read: "8 daqiqa",
          html: `
<p class="pk-lead">Promptni yaxshi yozish uchun avval AI'ning miyasi qanday ishlashini tushunish kerak. Xavotir olmang — bu yerda murakkab matematika yo'q. Faqat bitta sodda, lekin kuchli g'oyani tushunsangiz, kifoya: <b>AI keyingi so'zni bashorat qiladi</b>.</p>

<h3>LLM — katta til modeli</h3>
<p>ChatGPT, Claude va shu kabi vositalar zamirida <b>LLM</b> (ingliz tilida <i>Large Language Model</i> — katta til modeli) turadi. Bu model internetdagi ulkan hajmdagi matnlar — kitoblar, maqolalar, suhbatlar — ustida <b>o'qitilgan</b> dastur. O'qitish davomida u tildagi qonuniyatlarni, so'zlar bir-biri bilan qanday bog'lanishini o'rganib oladi.</p>
<p>Eng muhimi: model bu matnlarni <b>yodlab olmaydi</b>. Aksincha, u <b>so'zlar orasidagi ehtimollik aloqalarini</b> o'rganadi. Ya'ni qaysi so'zdan keyin qaysi so'z kelishi ehtimoli yuqori degan tuyg'uni shakllantiradi.</p>

<h3>Asosiy sir: keyingi so'zni bashorat qilish</h3>
<p>AI matn yaratganda, u aslida bitta ishni juda ko'p marta takrorlaydi: <b>shu paytgacha yozilgan matnga qarab, eng ehtimolli keyingi so'z qaysi?</b> degan savolga javob beradi, so'zni qo'yadi, keyin yana shu savolni beradi — va hokazo.</p>

<div class="pk-fig">
<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bA" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#818cf8"/><stop offset="1" stop-color="#6366f1"/></linearGradient>
    <linearGradient id="bB" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c4b5fd"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient>
  </defs>
  <rect width="600" height="240" rx="16" fill="#fafbff"/>
  <rect x="28" y="22" width="324" height="32" rx="9" fill="#eef0ff" stroke="#c7cbf5"/>
  <text x="44" y="43" font-family="system-ui" font-size="13.5" font-weight="700" fill="#312e81">Bugun havo juda ___</text>
  <text x="30" y="80" font-family="system-ui" font-size="12.5" fill="#6b7280">Keyingi so'z ehtimoli:</text>
  <g font-family="system-ui">
    <rect x="28" y="92" width="304" height="26" rx="7" fill="#eef0ff" stroke="#6366f1" stroke-width="1.5"/>
    <rect x="30" y="94" width="187" height="22" rx="6" fill="url(#bA)"/>
    <text x="42" y="110" font-size="12.5" font-weight="800" fill="#ffffff">issiq</text>
    <text x="345" y="110" font-size="13" font-weight="800" fill="#4338ca">63%</text>
    <path d="M373 104 l4 4 7 -8" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="30" y="128" width="300" height="22" rx="6" fill="#e9eafc"/><rect x="30" y="128" width="92" height="22" rx="6" fill="url(#bB)"/>
    <text x="42" y="144" font-size="12.5" font-weight="700" fill="#ffffff">sovuq</text><text x="345" y="144" font-size="12.5" font-weight="700" fill="#6b7280">23%</text>
    <rect x="30" y="158" width="300" height="22" rx="6" fill="#e9eafc"/><rect x="30" y="158" width="40" height="22" rx="6" fill="#c4b5fd"/>
    <text x="42" y="174" font-size="12.5" font-weight="700" fill="#5b21b6">ch...</text><text x="345" y="174" font-size="12.5" font-weight="700" fill="#6b7280">10%</text>
    <rect x="30" y="188" width="300" height="22" rx="6" fill="#e9eafc"/><rect x="30" y="188" width="16" height="22" rx="6" fill="#ddd6fe"/>
    <text x="42" y="204" font-size="12" fill="#6b7280">boshqa</text><text x="345" y="204" font-size="12.5" font-weight="700" fill="#6b7280">4%</text>
  </g>
  <rect x="410" y="92" width="162" height="118" rx="12" fill="#e7f9f0" stroke="#a7e8c8"/>
  <text x="491" y="124" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#15803d">Model eng yuqori</text>
  <text x="491" y="142" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#15803d">ehtimolni tanlaydi</text>
  <text x="491" y="180" text-anchor="middle" font-family="system-ui" font-size="20" font-weight="800" fill="#16a34a">issiq</text>
</svg>
<figcaption>Model har qadamda keyingi so'zni ehtimollik bo'yicha tanlaydi</figcaption>
</div>

<p>Garchi bu oddiy ko'rinsa-da, aynan shu mexanizm — millionlab marta takrorlanganda — instroq matn, kod va g'oyalar yaratadi. Promptingiz esa modelga qaysi yo'nalishda bashorat qilishni ko'rsatadigan <b>boshlang'ich nuqta</b>dir.</p>

<h3>Buning prompting uchun 3 ta amaliy oqibati</h3>
<h4>1. Kontekst — bu hammasi</h4>
<p>Model faqat siz bergan matnga (kontekstga) qarab javob beradi. Qancha ko'p va aniq kontekst bersangiz, bashorat shunchalik to'g'ri yo'nalishda boradi. Shuning uchun kim uchun, qanday maqsadda, qaysi uslubda kabi tafsilotlar javobni keskin yaxshilaydi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><span><b>Eslab qoling</b>AI sizning fikringizni o'qiy olmaydi. U faqat siz <b>yozgan</b> narsani biladi. Miyangizdagi kontekstni promptga ko'chiring.</span></div>

<h4>2. AI xotirasi cheklangan</h4>
<p>Modelning bir vaqtda ko'ra oladigan matn hajmi cheklangan — bu <b>kontekst oynasi</b> deyiladi. Masalan, juda uzun suhbatda siz eng boshida bergan ko'rsatma model uchun asta-sekin xira tortib, e'tibordan chiqib qolishi mumkin. Shuning uchun muhim ko'rsatmalarni kerakli joyda qisqacha takrorlash foydali.</p>

<h4>3. Javob har safar biroz boshqacha bo'lishi mumkin</h4>
<p>Model ehtimolliklar bilan ishlagani uchun, bir xil promptga ham har safar biroz farqli javob berishi mumkin. Bu — kamchilik emas, balki tabiati. Agar barqaror natija kerak bo'lsa, promptni yanada aniqroq va qat'iyroq qilish kerak.</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><span><b>Diqqat</b>AI ba'zan ishonch bilan <b>noto'g'ri</b> ma'lumot ham berishi mumkin (bu gallyutsinatsiya deyiladi). Shuning uchun bu kursda doimo tekshirish odatini ham o'rgatamiz. Muhim faktlarni har doim mustaqil tekshiring — gallyutsinatsiyaga qarshi kurashni keyingi modullarda batafsil ko'ramiz.</span></div>

<h3>Xulosa</h3>
<p>AI — bu keyingi so'zni bashorat qiluvchi juda kuchli mashina. U sehrli emas, lekin to'g'ri yo'naltirilganda hayratlanarli natija beradi. Sizning vazifangiz — promptingiz orqali bu bashoratni kerakli tomonga burish. Keyingi modulda biz aynan shu — kuchli promptning tuzilishini o'rganamiz.</p>
`,
          quiz: [
            { q: "LLM (katta til modeli) asosan nimani qiladi?", o: ["Internetni real vaqtda qidiradi", "Matnga qarab keyingi so'zni ehtimollik bo'yicha bashorat qiladi", "Barcha kitoblarni yodlab oladi", "Faqat tarjima qiladi"], c: 1 },
            { q: "Kontekst oynasi nimani anglatadi?", o: ["Ekrandagi oyna o'lchami", "Modelning bir vaqtda ko'ra oladigan matn hajmi cheklanganligi", "Internet tezligi", "Javob rangini tanlash"], c: 1 },
            { q: "Nega aniq kontekst berish muhim?", o: ["AI fikrimizni o'qiy olmaydi, faqat yozilgan matnga qarab javob beradi", "Aks holda kompyuter qiziydi", "Kontekst hech narsani o'zgartirmaydi", "Faqat uzun promptlar ishlaydi"], c: 0 },
            { q: "AI gallyutsinatsiya qilganda nima yuz beradi?", o: ["Javob bermay qoladi", "Ishonch bilan noto'g'ri ma'lumot beradi", "Promptni o'chiradi", "Sekin ishlaydi"], c: 1 }
          ]
        }
      ]
    }
  ]
};
