/* ============================================================
   Oson Studio — Prompt Engineering kursi: Ilg'or texnikalar moduli
   (reasoning texnikalari, ReAct, AI agentlar, meta-prompting/RAG)
   Yakuniy moduldan OLDIN joylashtiriladi (splice).
   ============================================================ */
(function () {
  if (!window.PROMPT_COURSE || !window.PROMPT_COURSE.modules) return;

  var ADV = {
    id: "madv2",
    title: "Ilg'or texnikalar: reasoning va AI agentlar",
    lessons: [
      {
        id: "madv2_1",
        title: "CoT'dan keyin: Self-Consistency, Tree-of-Thoughts va boshqalar",
        read: "9 daqiqa",
        html: `
<p class="pk-lead">Siz allaqachon <b>Chain-of-Thought</b> (CoT — fikrlash zanjiri) bilan tanishsiz: modeldan \"qadamba-qadam o'yla\" deb so'rasangiz, javob aniqroq bo'ladi. Lekin oddiy CoT — bu boshlanish. Murakkab masalalar uchun undan ancha kuchliroq ilg'or fikrlash texnikalari bor. Ushbu darsda to'rttasini ko'rib chiqamiz.</p>

<h3>Muammo: bitta fikr zanjiri har doim ham to'g'ri emas</h3>
<p>Oddiy CoT'da model bitta fikr yo'lidan boradi. Agar shu yo'lning boshida kichik xato qilsa, oxirigacha shu xato bilan ketadi — xuddi ko'chada noto'g'ri burilib, butun yo'lni adashib bosib o'tgandek. Ilg'or texnikalar aynan shu zaiflikni bartaraf etadi: bir nechta yo'lni sinab, eng ishonchlisini tanlaydi yoki masalani boshqacha bo'lakka ajratadi.</p>

<div class="pk-fig">
<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="250" rx="14" fill="#f7f8ff"/>
  <text x="300" y="30" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#312e81">Uch xil fikrlash uslubi</text>
  <text x="100" y="58" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="bold" fill="#0c4a6e">CoT — bitta yo'l</text>
  <circle cx="100" cy="80" r="9" fill="#0ea5e9"/>
  <circle cx="100" cy="120" r="9" fill="#0ea5e9"/>
  <circle cx="100" cy="160" r="9" fill="#0ea5e9"/>
  <circle cx="100" cy="200" r="9" fill="#0284c7"/>
  <path d="M100 89 V111 M100 129 V151 M100 169 V191" stroke="#7dd3fc" stroke-width="3"/>
  <text x="300" y="58" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="bold" fill="#15803d">Tree-of-Thoughts — shoxlar</text>
  <circle cx="300" cy="80" r="9" fill="#16a34a"/>
  <circle cx="255" cy="135" r="8" fill="#22c55e"/>
  <circle cx="300" cy="135" r="8" fill="#22c55e"/>
  <circle cx="345" cy="135" r="8" fill="#22c55e"/>
  <circle cx="255" cy="200" r="8" fill="#bbf7d0"/>
  <circle cx="300" cy="200" r="8" fill="#15803d"/>
  <circle cx="345" cy="200" r="8" fill="#bbf7d0"/>
  <path d="M300 89 L257 127 M300 89 L300 127 M300 89 L343 127" stroke="#86efac" stroke-width="2.5"/>
  <path d="M255 143 V192 M300 143 V192 M345 143 V192" stroke="#86efac" stroke-width="2.5"/>
  <text x="500" y="58" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="bold" fill="#9d174d">Self-Consistency — ovoz</text>
  <circle cx="460" cy="90" r="8" fill="#ec4899"/>
  <circle cx="500" cy="90" r="8" fill="#ec4899"/>
  <circle cx="540" cy="90" r="8" fill="#ec4899"/>
  <path d="M460 98 L495 150 M500 98 L500 150 M540 98 L505 150" stroke="#f9a8d4" stroke-width="2.5"/>
  <rect x="455" y="152" width="90" height="30" rx="8" fill="#fce7f3" stroke="#ec4899"/>
  <text x="500" y="172" text-anchor="middle" font-family="system-ui" font-size="11" fill="#9d174d">Ovoz berish</text>
  <rect x="465" y="195" width="70" height="26" rx="8" fill="#be185d"/>
  <text x="500" y="212" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="bold" fill="#fff">Eng ko'p</text>
</svg>
<figcaption>Chap: bitta zanjir. O'rta: shoxlangan daraxt. O'ng: bir nechta javob → ovoz berish.</figcaption>
</div>

<h3>1. Self-Consistency — \"ovoz berib\" eng ishonchli javobni topish</h3>
<p>G'oyasi juda sodda: bir xil masalani modelga <b>bir necha marta</b> (masalan, 5 marta) qadamba-qadam yechtiramiz. Har safar model biroz boshqacha yo'ldan boradi va goh turli oraliq javoblar chiqadi. Keyin barcha javoblardan <b>eng ko'p takrorlanganini</b> olamiz — bu xuddi ovoz berish (majority vote) kabi.</p>
<p>Nega ishlaydi? Chunki tasodifiy xatolar har xil tomonga \"og'adi\", to'g'ri javob esa odatda eng barqarori bo'ladi. Agar 5 ta yechimdan 4 tasi \"42\" desa-yu, 1 tasi \"40\" desa — \"42\"ga ishonish mantiqiyroq.</p>
<div class="pk-ex pk-good"><span class="tag">Amalda qanday qilinadi</span>Bitta murakkab matematik yoki mantiqiy masalani modelga 3-5 marta alohida bering ("Qadamba-qadam yech" bilan), keyin javoblarni solishtiring. Ko'pchilik bergan javobni qabul qiling.</div>
<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><span><b>Eslatma</b>Self-Consistency aniqlikni oshiradi, lekin har bir takror — qo'shimcha so'rov, ya'ni ko'proq vaqt va xarajat. Shuning uchun uni faqat muhim, xatolik qimmatga tushadigan masalalarda ishlating.</span></div>

<h3>2. Tree-of-Thoughts — fikrlar daraxti</h3>
<p>Oddiy CoT bitta yo'ldan boradi. <b>Tree-of-Thoughts</b> (ToT — fikrlar daraxti) esa bir nechta fikr yo'lini bir vaqtda <b>shoxlab</b> ko'radi: har bir bosqichda \"qanaqa variantlar bor?\" deb so'raydi, har birini baholaydi va eng istiqbollisini davom ettiradi. Yomon shoxlar tashlab yuboriladi.</p>
<p>Analogiya: shaxmatchi bir yurishdan oldin bir nechta variantni \"miyasida\" o'ynab ko'radi, har birining oqibatini chamalaydi, keyin eng yaxshisini tanlaydi. ToT ham aynan shunday — masalani daraxt kabi shoxlab tekshiradi.</p>
<p>Bu texnika rejalashtirish, jumboqlar, strategiya, bir nechta yechimi bo'lgan murakkab vazifalar uchun kuchli. Oddiy chatda uni so'z bilan ham qo'zg'atish mumkin:</p>
<div class="pk-ex pk-good"><span class="tag">Tree-of-Thoughts uslubidagi prompt</span>Bu masalani yechishning 3 xil yo'lini taklif qil. Har birining kuchli va zaif tomonini qisqa baholab chiq, keyin eng istiqbollisini tanla va faqat o'shani oxirigacha yechib ber.</div>

<h3>3. Least-to-most — oddiydan murakkabga</h3>
<p><b>Least-to-most</b> (eng oddiydan eng murakkabga) — katta masalani avval kichik, sodda <b>qism-masalalarga</b> bo'lib, ularni ketma-ket, osondan qiyinga qarab yechish. Har bir yechilgan qism keyingisi uchun zamin bo'ladi.</p>
<p>Bu — xuddi binoni qavatma-qavat qurgandek: avval poydevor, keyin birinchi qavat, undan keyin ikkinchisi. To'g'ridan-to'g'ri tomdan boshlab bo'lmaydi.</p>
<div class="pk-ex pk-good"><span class="tag">Least-to-most prompt</span>Bu vazifani bir zarbada yechma. Avval uni qaysi kichik bosqichlarga bo'lish kerakligini sanab ber. So'ng o'sha bosqichlarni eng oddiyidan boshlab, birin-ketin yech.</div>

<h3>4. Step-back — orqaga qadam tashlash</h3>
<p><b>Step-back</b> (orqaga qadam) texnikasida aniq savolga to'g'ridan-to'g'ri o'tmasdan, avval bir qadam orqaga chekinib, <b>umumiy tamoyil yoki qoidani</b> so'raymiz, keyin o'sha qoidani aniq holatga qo'llaymiz.</p>
<p>Masalan, \"shu fizika masalasini yech\" o'rniga avval \"bu masalaga qaysi qonun va formula tegishli?\" deb so'rang, keyin o'sha formula bilan masalani yechtiring. Umumiy qoidani aniqlash modelni to'g'ri yo'nalishga soladi va xatoni kamaytiradi.</p>
<div class="pk-ex pk-good"><span class="tag">Step-back prompt</span>Bu savolga javob berishdan oldin: shu mavzudagi qaysi asosiy tamoyil yoki qoidalar bu yerda qo'llaniladi? Avval o'shalarni qisqa sana, keyin o'sha qoidalarga tayanib aniq savolga javob ber.</div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg></span><span><b>Maslahat</b>Bu texnikalarning hammasini har kuni ishlatmaysiz. Oddiy savolga oddiy prompt yetarli. Lekin masala murakkab, xato qimmatga tushadigan bo'lsa — Self-Consistency yoki Tree-of-Thoughts kabi kuchliroq yondashuvga o'ting.</span></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Oddiy CoT bitta yo'ldan boradi; ilg'or texnikalar bir nechta yo'lni sinaydi (Tree-of-Thoughts), ovoz beradi (Self-Consistency), masalani bo'laklaydi (Least-to-most) yoki avval qoidani aniqlaydi (Step-back). Murakkab masala — kuchliroq fikrlash texnikasi.</span></div>
`,
        quiz: [
          { q: "Self-Consistency texnikasining asosiy g'oyasi nima?", o: ["Masalani bir necha marta yechtirib, eng ko'p takrorlangan javobni olish", "Modelni o'chirib yoqish", "Faqat bitta so'z bilan so'rash", "Javobni qisqartirish"], c: 0 },
          { q: "Tree-of-Thoughts oddiy Chain-of-Thought'dan nimasi bilan farq qiladi?", o: ["Hech qanday farqi yo'q", "Bitta yo'l o'rniga bir nechta fikr yo'lini shoxlab, baholab, eng yaxshisini tanlaydi", "Faqat rasm bilan ishlaydi", "Javobni tasodifiy tanlaydi"], c: 1 },
          { q: "Least-to-most yondashuvi qanday ishlaydi?", o: ["Katta masalani kichik qism-masalalarga bo'lib, osondan qiyinga ketma-ket yechadi", "Eng qiyin qismdan boshlaydi", "Masalani umuman yechmaydi", "Faqat javobni qisqartiradi"], c: 0 },
          { q: "Step-back texnikasida birinchi navbatda nima qilinadi?", o: ["Darhol aniq javob beriladi", "Avval umumiy tamoyil yoki qoida so'raladi, keyin u aniq holatga qo'llanadi", "Savol o'chiriladi", "Boshqa modelga o'tiladi"], c: 1 }
        ]
      },
      {
        id: "madv2_2",
        title: "ReAct: fikrlash va harakat tsikli",
        read: "9 daqiqa",
        html: `
<p class="pk-lead">Hozirgacha biz model faqat \"o'ylab\" javob berishini ko'rdik. Lekin haqiqiy hayotda ko'p vazifalar uchun model tashqaridan ma'lumot olishi yoki biror amalni bajarishi kerak: internetdan qidirish, hisoblash, fayl o'qish. Aynan shu yerda <b>ReAct</b> texnikasi ish boshlaydi — bu zamonaviy AI agentlarining yuragi.</p>

<h3>ReAct = Reasoning + Acting</h3>
<p><b>ReAct</b> nomi ikki so'zdan: <b>Reasoning</b> (fikrlash) va <b>Acting</b> (harakat qilish). G'oya shundaki, model bir qadamda emas, <b>tsikl</b> (aylanma jarayon) ichida ishlaydi va har aylanishda fikrlash bilan harakatni birlashtiradi. Tsiklning uch bosqichi bor:</p>
<ul>
  <li><b>Fikr (Thought)</b> — model o'ylaydi: \"hozir nima qilishim kerak? Qaysi ma'lumot yetishmayapti?\"</li>
  <li><b>Harakat (Action)</b> — model tashqi vositani chaqiradi: internetda qidiradi, kalkulyatorda hisoblaydi, API'ga so'rov yuboradi.</li>
  <li><b>Kuzatuv (Observation)</b> — vosita qaytargan natijani model \"ko'radi\": qidiruv natijasi, hisob javobi, ma'lumot.</li>
</ul>
<p>Keyin model yana <b>Fikr</b>ga qaytadi: \"endi yetarli ma'lumot bormi? Yo'qmi — yana qidiraman\". Bu aylanish yakuniy javob topilguncha davom etadi. Shuning uchun u <b>tsikl</b> deyiladi.</p>

<div class="pk-fig">
<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="270" rx="14" fill="#f7f8ff"/>
  <text x="300" y="32" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#312e81">ReAct tsikli</text>
  <rect x="225" y="55" width="150" height="48" rx="10" fill="#eef2ff" stroke="#6366f1"/>
  <text x="300" y="78" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="bold" fill="#4338ca">Fikr</text>
  <text x="300" y="95" text-anchor="middle" font-family="system-ui" font-size="10" fill="#6366f1">nima qilish kerak?</text>
  <rect x="420" y="135" width="150" height="48" rx="10" fill="#fef3c7" stroke="#d97706"/>
  <text x="495" y="158" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="bold" fill="#92400e">Harakat</text>
  <text x="495" y="175" text-anchor="middle" font-family="system-ui" font-size="10" fill="#b45309">vositani chaqir</text>
  <rect x="30" y="135" width="150" height="48" rx="10" fill="#e7f9f0" stroke="#16a34a"/>
  <text x="105" y="158" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="bold" fill="#15803d">Kuzatuv</text>
  <text x="105" y="175" text-anchor="middle" font-family="system-ui" font-size="10" fill="#16a34a">natijani o'qi</text>
  <path d="M375 88 C440 100 470 115 480 132" stroke="#9aa0c9" stroke-width="2.5" fill="none" marker-end="url(#ra)"/>
  <path d="M420 168 C300 215 200 215 130 184" stroke="#9aa0c9" stroke-width="2.5" fill="none" marker-end="url(#ra)"/>
  <path d="M120 132 C130 115 160 100 224 87" stroke="#9aa0c9" stroke-width="2.5" fill="none" marker-end="url(#ra)"/>
  <text x="300" y="232" text-anchor="middle" font-family="system-ui" font-size="11" fill="#6b7280">tsikl javob topilguncha aylanadi</text>
  <rect x="225" y="240" width="150" height="24" rx="8" fill="#312e81"/>
  <text x="300" y="257" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="bold" fill="#fff">Yakuniy javob</text>
  <defs><marker id="ra" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#9aa0c9"/></marker></defs>
</svg>
<figcaption>Fikr → Harakat → Kuzatuv aylanasi; yetarli ma'lumot to'planganda yakuniy javob beriladi.</figcaption>
</div>

<h3>Oddiy bir misol</h3>
<p>Savol: \"Toshkentda hozir havo harorati qancha va u Parijdagidan necha gradus farq qiladi?\" Model buni bir qadamda bila olmaydi — havo o'zgaruvchan. ReAct tsiklida esa shunday ketadi:</p>
<div class="pk-ex pk-good"><span class="tag">ReAct jarayoni</span>Fikr: Toshkent haroratini bilishim kerak. → Harakat: ob-havo qidiruvi (Toshkent). → Kuzatuv: 31°C. → Fikr: endi Parij kerak. → Harakat: ob-havo qidiruvi (Parij). → Kuzatuv: 22°C. → Fikr: farqi 31 − 22 = 9. → Yakuniy javob: Toshkentda 31°C, bu Parijdan 9 gradus issiqroq.</div>
<p>Diqqat qiling: model har bosqichda <b>o'zi hal qildi</b> — qaysi ma'lumot kerakligini, qaysi vositani chaqirishni, qachon to'xtashni. Bu — oddiy savol-javobdan tubdan farq qiladi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><span><b>Eslatma</b>ReAct'ni odatda dasturchi yoki agent platformasi sozlaydi — oddiy foydalanuvchi tsiklning ichki qadamlarini ko'rmaydi. Lekin mexanizmni tushunish muhim: \"o'ylab harakat qiladigan\" AI vositalari (masalan, internetga ulangan, kod ishga tushiradigan assistentlar) aynan shu prinsipga asoslanadi.</span></div>

<h3>Nega bu shunchalik muhim?</h3>
<p>ReAct ikkita zaiflikni bir vaqtda yengadi. Birinchidan, model <b>eskirgan yoki yetishmaydigan ma'lumotni</b> tashqaridan to'ldira oladi (qidiruv orqali). Ikkinchidan, model <b>o'zi yaxshi bajarmaydigan amallarni</b> (aniq hisob, sana hisoblash) ishonchli vositaga topshiradi. Natijada bir qadamli javobga qaraganda ancha ishonchli va dolzarb natija chiqadi.</p>
<p>Ushbu bo'limda o'rgangan ReAct — keyingi darsdagi <b>AI agentlar</b> mavzusiga to'g'ridan-to'g'ri zamin. Agent — aslida ReAct tsiklini doimiy ishlatib turadigan tizim.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>ReAct = Reasoning + Acting. Model Fikr → Harakat → Kuzatuv tsiklida ishlaydi: o'ylaydi, tashqi vositani chaqiradi, natijani ko'radi va yakuniy javob topilguncha takrorlaydi. Bu — AI agentlarining asosiy mexanizmi.</span></div>
`,
        quiz: [
          { q: "ReAct nomi qaysi ikki so'zdan tashkil topgan?", o: ["Reading + Acting", "Reasoning (fikrlash) + Acting (harakat)", "Reaction + Activity", "Real + Action"], c: 1 },
          { q: "ReAct tsiklining uch asosiy bosqichi qaysilar?", o: ["Boshlash, kutish, tugatish", "Fikr (Thought), Harakat (Action), Kuzatuv (Observation)", "Savol, javob, baho", "Kirish, chiqish, xato"], c: 1 },
          { q: "ReAct'da \"Harakat\" (Action) bosqichida nima yuz beradi?", o: ["Model tashqi vositani chaqiradi (qidiruv, hisob, API)", "Model o'chadi", "Foydalanuvchi javob yozadi", "Hech narsa"], c: 0 },
          { q: "ReAct nega bir qadamli javobdan ishonchliroq bo'lishi mumkin?", o: ["Chunki u doim qisqaroq javob beradi", "Chunki tashqi ma'lumotni to'ldiradi va aniq amallarni ishonchli vositaga topshiradi", "Chunki u tilni o'zgartiradi", "Hech qanday afzalligi yo'q"], c: 1 }
        ]
      },
      {
        id: "madv2_3",
        title: "AI agentlar va vositalardan foydalanish (function calling)",
        read: "10 daqiqa",
        html: `
<p class="pk-lead">So'nggi yillarda AI haqida gapirilganda \"<b>agent</b>\" so'zi tobora ko'p eshitiladi. Agent — bu shunchaki chatbot emas: u mustaqil ravishda ko'p qadamli vazifani rejalashtirib, vositalardan foydalanib oxirigacha bajara oladigan tizim. Ushbu darsda agent qanday tuzilganini va u qaysi mexanizmlarga tayanishini ko'rib chiqamiz.</p>

<h3>AI agent nima?</h3>
<p>Oddiy formula bilan aytganda:</p>
<p style="text-align:center;font-weight:bold;color:#4338ca;">AI agent = LLM (miya) + Vositalar (tools) + Xotira (memory) + Tsikl (loop)</p>
<ul>
  <li><b>LLM (til modeli)</b> — agentning \"miyasi\": qaror qabul qiladi, fikrlaydi, rejalashtiradi.</li>
  <li><b>Vositalar (tools)</b> — agentning \"qo'llari\": qidiruv, kalkulyator, kod ishga tushirish, fayl o'qish/yozish, API'lar.</li>
  <li><b>Xotira (memory)</b> — avvalgi qadamlarni, natijalarni va maqsadni eslab turish.</li>
  <li><b>Tsikl (loop)</b> — o'tgan darsdagi ReAct tsikli: vazifa bajarilguncha qayta-qayta fikrlab, harakat qiladi.</li>
</ul>
<p>Analogiya: oddiy chatbot — ma'lumot beradigan kutubxonachi. Agent esa — sizga topshiriq berilsa, o'zi kutubxonaga borib, kerakli kitoblarni topib, o'qib, qaydlar olib, natijani tayyorlab keladigan yordamchi. U bir savolga emas, butun <b>vazifaga</b> javobgar.</p>

<div class="pk-fig">
<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" rx="14" fill="#f7f8ff"/>
  <text x="300" y="30" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#312e81">AI agent arxitekturasi</text>
  <circle cx="300" cy="140" r="52" fill="#6366f1"/>
  <text x="300" y="135" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="bold" fill="#fff">LLM</text>
  <text x="300" y="154" text-anchor="middle" font-family="system-ui" font-size="10" fill="#e0e7ff">miya</text>
  <rect x="60" y="62" width="140" height="46" rx="10" fill="#fef3c7" stroke="#d97706"/>
  <text x="130" y="84" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="bold" fill="#92400e">Vositalar</text>
  <text x="130" y="100" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#b45309">qidiruv · kod · API</text>
  <rect x="400" y="62" width="140" height="46" rx="10" fill="#e7f9f0" stroke="#16a34a"/>
  <text x="470" y="84" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="bold" fill="#15803d">Xotira</text>
  <text x="470" y="100" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#16a34a">maqsad · qadamlar</text>
  <rect x="230" y="218" width="140" height="34" rx="10" fill="#fce7f3" stroke="#ec4899"/>
  <text x="300" y="240" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="bold" fill="#9d174d">Tsikl (loop)</text>
  <path d="M205 95 C235 108 245 115 258 124" stroke="#9aa0c9" stroke-width="2.5" fill="none" marker-end="url(#ag)"/>
  <path d="M395 95 C365 108 355 115 342 124" stroke="#9aa0c9" stroke-width="2.5" fill="none" marker-end="url(#ag)"/>
  <path d="M300 192 V216" stroke="#9aa0c9" stroke-width="2.5" fill="none" marker-end="url(#ag)"/>
  <defs><marker id="ag" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#9aa0c9"/></marker></defs>
</svg>
<figcaption>Markazda LLM \"miya\"; atrofida vositalar, xotira va hammasini bog'lab turadigan tsikl.</figcaption>
</div>

<h3>Function calling — model vositani qanday chaqiradi?</h3>
<p>Eng muhim mexanizm — <b>function calling</b> (funksiya chaqirish), boshqacha aytganda <b>tool use</b> (vositadan foydalanish). Bu shunday ishlaydi:</p>
<ul>
  <li>Dasturchi modelga vositalar ro'yxatini beradi — har birining <b>nomi</b>, nimaga xizmat qilishi (<b>vazifasi</b>) va qanday <b>argumentlar</b> qabul qilishi tasvirlanadi. Masalan: <i>obhavo_ol(shahar)</i> — berilgan shahar bo'yicha haroratni qaytaradi.</li>
  <li>Foydalanuvchi savol berganda model <b>o'zi hal qiladi</b>: bu savol uchun vosita kerakmi, agar kerak bo'lsa qaysi vositani qaysi argument bilan chaqirish lozim.</li>
  <li>Tizim o'sha funksiyani haqiqatda ishga tushiradi, natijani modelga qaytaradi, model esa shu natija asosida javobni davom ettiradi.</li>
</ul>
<p>Muhim nuqta: modelning o'zi kod ishga tushirmaydi yoki internetga chiqmaydi. U faqat \"qaysi vositani, qaysi argument bilan chaqirish kerak\"ligini <b>aytadi</b>; haqiqiy ishni tashqi tizim bajaradi va natijani qaytaradi. Bu — xavfsizlik va nazorat uchun ham qulay.</p>
<div class="pk-ex pk-good"><span class="tag">Function calling g'oyasi</span>Modelga: "Senda obhavo_ol(shahar) va kalkulyator(ifoda) vositalari bor". Foydalanuvchi: "Toshkentda harorat qancha?". Model o'zi qaror qiladi → obhavo_ol("Toshkent") chaqiradi → natijani oladi → tabiiy tilda javob beradi.</div>

<h3>Rejalashtirish va ko'p-agentli tizimlar</h3>
<p>Murakkab vazifalarda agent avval <b>rejalashtiradi (planning)</b>: katta maqsadni kichik qadamlarga bo'ladi, keyin har qadamni navbat bilan bajaradi. Bu — o'tgan darsdagi \"least-to-most\" g'oyasining amaliy ko'rinishi.</p>
<p>Yana kuchliroq yondashuv — <b>ko'p-agentli tizimlar (multi-agent)</b>: bir nechta agent bir-biri bilan ishlaydi, har biri o'z roliga ega. Masalan, bittasi reja tuzadi (\"rejalashtiruvchi\"), boshqasi bajaradi (\"ijrochi\"), uchinchisi natijani tekshiradi (\"tanqidchi\"). Xuddi jamoa bo'lib ishlagandek — har kim o'z sohasiga mas'ul.</p>

<h3>MCP — vositalarni ulashning ochiq standarti</h3>
<p>Har bir vositani har bir modelga alohida ulash mashaqqatli. <b>MCP (Model Context Protocol)</b> — bu modelni tashqi vositalar va ma'lumot manbalariga ulashning <b>ochiq standarti</b>. U xuddi USB port kabi: bir marta umumiy \"ulagich\" yaratiladi, keyin turli vositalar (ma'lumotlar bazasi, fayl tizimi, xizmatlar) shu standart orqali modelga oson ulanadi. Bu agentlar dunyosini ancha soddalashtiradi.</p>

<h3>Real misollar</h3>
<ul>
  <li><b>Kod yozuvchi agentlar</b> — fayllarni o'qiydi, kod yozadi, testni ishga tushiradi, xatoni o'zi tuzatadi.</li>
  <li><b>Tadqiqot agentlari</b> — savol bo'yicha bir nechta manbani qidiradi, o'qiydi va xulosa hisobot tayyorlaydi.</li>
  <li><b>Assistentlardagi tool use</b> — zamonaviy AI assistentlar (Claude, ChatGPT) ham internet qidiruvi, kod ishga tushirish kabi vositalardan shu mexanizm orqali foydalanadi.</li>
</ul>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2z"/><path d="M12 9v5M12 17h.01"/></svg></span><span><b>Ogohlantirish</b>Agentga real harakat qilish (fayl o'chirish, xat yuborish, pul o'tkazish, buyurtma berish) ruxsatini ehtiyotkorlik bilan bering. Muhim yoki qaytarilmas amallar uchun agent doim tasdiq so'rashi kerak — \"avtomatik bajar\" deb to'liq erkinlik berish xavfli. Avval xavfsiz, faqat o'qiydigan vositalardan boshlang.</span></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>AI agent = LLM + vositalar + xotira + tsikl. Function calling orqali model qaysi vositani qaysi argument bilan chaqirishni o'zi hal qiladi. Rejalashtirish, ko'p-agentli tizimlar va MCP agentlarni kuchaytiradi — lekin real amallarga ruxsatni ehtiyotkorlik bilan bering.</span></div>
`,
        quiz: [
          { q: "AI agentni tashkil etuvchi to'rt asosiy qism qaysilar?", o: ["Klaviatura, sichqoncha, ekran, printer", "LLM (miya), vositalar, xotira va tsikl", "Faqat LLM va internet", "Rasm, ovoz, matn, video"], c: 1 },
          { q: "Function calling (tool use) qanday ishlaydi?", o: ["Model qaysi vositani qaysi argument bilan chaqirishni o'zi hal qiladi, tashqi tizim uni ishga tushiradi", "Model hamma kodni o'zi internetda ishga tushiradi", "Foydalanuvchi har bir funksiyani qo'lda yozadi", "Vositalar umuman ishlatilmaydi"], c: 0 },
          { q: "Ko'p-agentli (multi-agent) tizim nima?", o: ["Bitta agent ko'p marta ishlashi", "Bir nechta agent o'z rollari bilan bir-biri bilan ishlashi (rejalashtiruvchi, ijrochi, tanqidchi)", "Faqat bitta katta model", "Agentlarni o'chirish usuli"], c: 1 },
          { q: "MCP (Model Context Protocol) nima vazifani bajaradi?", o: ["Modelni o'chiradi", "Modelni tashqi vosita va ma'lumotlarga ulashning ochiq standarti", "Faqat rasm yaratadi", "Internet tezligini oshiradi"], c: 1 }
        ]
      },
      {
        id: "madv2_4",
        title: "Meta-prompting va to'g'ri yondashuvni tanlash: Prompt vs RAG vs Fine-tuning",
        read: "10 daqiqa",
        html: `
<p class="pk-lead">Kursning ilg'or yakuniga keldik. Endi ikki kuchli g'oyani ko'rib chiqamiz: avval AI'ning o'zidan prompt yozdirish (<b>meta-prompting</b>), so'ng eng katta amaliy savol — qaysi vazifa uchun qaysi yondashuv to'g'ri keladi: oddiy <b>prompting</b>mi, <b>RAG</b>mi yoki <b>fine-tuning</b>mi?</p>

<h3>Meta-prompting — AI'dan prompt yozishni so'rash</h3>
<p><b>Meta-prompting</b> — bu \"prompt haqida prompt\". Ya'ni AI'ning o'zidan sizga yaxshi prompt yozib berishini yoki mavjud promptingizni yaxshilashni so'raysiz. AI prompt yozish bo'yicha juda ko'p misol \"ko'rgani\" uchun, ko'pincha bu ishni a'lo bajaradi.</p>
<p>Ikki asosiy ko'rinishi bor:</p>
<div class="pk-ex pk-good"><span class="tag">1. Yangi prompt yozdirish</span>Men mijozlarning shikoyat xatlariga muloyim javob yozdirmoqchiman. Shu vazifa uchun eng yaxshi, batafsil system prompt yozib ber. Unda rol, ohang va qoidalar bo'lsin.</div>
<div class="pk-ex pk-good"><span class="tag">2. Mavjud promptni yaxshilash</span>Quyidagi promptimni ko'rib chiq: kamchiliklarini top, noaniq joylarini aniqlashtir va yaxshilangan to'liq variantini qaytar. [promptingiz]</div>
<p>Meta-prompting — ayniqsa boshlovchilar uchun kuchli vosita: AI sizga prompt yozishni ham o'rgatadi. Lekin natijani har doim o'qib, o'zingizning ehtiyojingizga moslang — ko'r-ko'rona qabul qilmang.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg></span><span><b>Maslahat</b>Prompt yaxshi ishlamasa, uni AI'ning o'ziga ko'rsating: \"bu prompt nega kutilgan natija bermayapti, qanday tuzatsam bo'ladi?\". Bu — promptni tezda sayqallashning eng oson yo'li.</span></div>

<h3>Eng katta savol: Prompting, RAG yoki Fine-tuning?</h3>
<p>Vazifani AI bilan hal qilishning uch asosiy yo'li bor. Ko'pchilik ularni adashtiradi, holbuki tanlov xarajat va natijaga katta ta'sir qiladi. Keling, har birini sodda tushuntiramiz:</p>
<ul>
  <li><b>Prompting</b> — modelga hech narsa \"o'rgatmaysiz\", shunchaki yaxshi ko'rsatma yozasiz. Tez, arzon, darhol ishlaydi. <b>Aksariyat vazifalar uchun aynan shu yetarli.</b></li>
  <li><b>RAG (Retrieval-Augmented Generation)</b> — \"qidirib topib, keyin javob berish\". Model avval sizning hujjatlaringiz yoki bilim bazangizdan tegishli matnni <b>topadi</b>, keyin javobni o'sha matnga <b>asoslaydi</b>. O'z ma'lumotlaringizga (kompaniya hujjatlari, mahsulot bazasi) tayanish kerak bo'lganda ishlatiladi.</li>
  <li><b>Fine-tuning</b> — modelni yuzlab-minglab misol bilan <b>qayta o'rgatish</b>. Maxsus uslub yoki format doimiy va juda ko'p kerak bo'lganda qilinadi. Eng qimmat va murakkab yo'l.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="250" rx="14" fill="#f7f8ff"/>
  <text x="300" y="30" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#312e81">Qaysi yondashuvni tanlash?</text>
  <rect x="30" y="55" width="175" height="170" rx="12" fill="#e7f9f0" stroke="#16a34a"/>
  <text x="117" y="83" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#15803d">Prompting</text>
  <text x="117" y="108" text-anchor="middle" font-family="system-ui" font-size="11" fill="#14532d">tez · arzon</text>
  <text x="117" y="128" text-anchor="middle" font-family="system-ui" font-size="11" fill="#14532d">o'rgatish shart emas</text>
  <text x="117" y="162" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#16a34a">Qachon: aksariyat</text>
  <text x="117" y="180" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#16a34a">oddiy vazifalar</text>
  <text x="117" y="205" text-anchor="middle" font-family="system-ui" font-size="20">✶</text>
  <rect x="213" y="55" width="175" height="170" rx="12" fill="#eef2ff" stroke="#6366f1"/>
  <text x="300" y="83" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#4338ca">RAG</text>
  <text x="300" y="108" text-anchor="middle" font-family="system-ui" font-size="11" fill="#312e81">o'rta xarajat</text>
  <text x="300" y="128" text-anchor="middle" font-family="system-ui" font-size="11" fill="#312e81">o'z hujjatga tayanadi</text>
  <text x="300" y="162" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#6366f1">Qachon: o'z bilim</text>
  <text x="300" y="180" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#6366f1">bazang kerak bo'lsa</text>
  <rect x="396" y="55" width="175" height="170" rx="12" fill="#fce7f3" stroke="#ec4899"/>
  <text x="483" y="83" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#be185d">Fine-tuning</text>
  <text x="483" y="108" text-anchor="middle" font-family="system-ui" font-size="11" fill="#9d174d">qimmat · sekin</text>
  <text x="483" y="128" text-anchor="middle" font-family="system-ui" font-size="11" fill="#9d174d">modelni qayta o'rgatadi</text>
  <text x="483" y="162" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#ec4899">Qachon: maxsus uslub</text>
  <text x="483" y="180" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#ec4899">doimiy, ko'p kerak</text>
</svg>
<figcaption>Soddadan murakkabga: avval Prompting'ni sinang; kifoya qilmasa RAG; faqat zarur bo'lsa Fine-tuning.</figcaption>
</div>

<h3>Solishtirish jadvali</h3>
<table class="pk-tbl">
  <thead><tr><th>Mezon</th><th>Prompting</th><th>RAG</th><th>Fine-tuning</th></tr></thead>
  <tbody>
    <tr><td>Xarajat</td><td>Eng arzon</td><td>O'rta</td><td>Eng qimmat</td></tr>
    <tr><td>Tezlik (sozlash)</td><td>Darhol</td><td>Bir necha kun</td><td>Sekin, ko'p mehnat</td></tr>
    <tr><td>O'z ma'lumoting</td><td>Promptga qo'l bilan qo'yiladi</td><td>Avtomatik topiladi</td><td>Modelga singdiriladi</td></tr>
    <tr><td>Qachon ishlatish</td><td>Aksariyat holatlar</td><td>O'z hujjat/bazaga tayanish</td><td>Maxsus uslub doimiy kerak</td></tr>
  </tbody>
</table>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><span><b>Eslatma</b>Amaliy qoida: <b>doim prompting'dan boshlang</b>. Faqat oddiy prompt yetmaganda RAG'ga o'ting; fine-tuning'ni esa eng oxirgi chora sifatida, juda aniq ehtiyoj bo'lgandagina ko'rib chiqing. Ko'pchilik o'ylaganidan ancha ko'p muammo to'g'ri yozilgan prompt bilan hal bo'ladi.</span></div>

<h3>Promptni baholash va optimizatsiya</h3>
<p>Ilg'or foydalanuvchi promptni \"yozdim — bo'ldi\" demaydi, balki uni <b>sinaydi va yaxshilaydi</b>:</p>
<ul>
  <li><b>Sinash</b> — bir promptni bir nechta turli kirish ma'lumoti bilan tekshiring: u doim mos natija beryaptimi? Faqat bitta misolga qarab xulosa chiqarmang.</li>
  <li><b>Solishtirish</b> — bir vazifaga ikki xil prompt yozib, qaysi biri yaxshiroq ishlashini ko'ring (A/B sinov).</li>
  <li><b>Token va xarajatni kamaytirish</b> — kerakmas, takroriy so'zlarni olib tashlang. Qisqaroq, lekin aniq prompt — kamroq token, ya'ni tez va arzon. Ammo aniqlikni qurbon qilmang.</li>
</ul>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Meta-prompting bilan AI'dan prompt yozdiring va yaxshilang. Yondashuv tanlashda esa qoidaga amal qiling: avval Prompting (tez, arzon, aksariyat holat); o'z hujjatlaringga tayanish kerak bo'lsa RAG; maxsus uslub doimiy va ko'p kerak bo'lsagina Fine-tuning. Va har doim promptni sinab, sayqallab boring.</span></div>
`,
        quiz: [
          { q: "Meta-prompting nima?", o: ["AI'ning o'zidan prompt yozdirish yoki mavjud promptni yaxshilashni so'rash", "Bir vaqtda ko'p model ishlatish", "Promptni o'chirish", "Faqat rasm yaratish"], c: 0 },
          { q: "RAG (Retrieval-Augmented Generation) asosan qachon ishlatiladi?", o: ["Hech qachon kerak emas", "O'z hujjatlaring yoki bilim bazangga tayanib javob berish kerak bo'lganda", "Faqat she'r yozishda", "Internetni tezlashtirishda"], c: 1 },
          { q: "Aksariyat oddiy vazifalar uchun qaysi yondashuv eng mantiqiy boshlang'ich?", o: ["Fine-tuning (eng qimmat)", "Prompting (tez, arzon, o'rgatish shart emas)", "Hech qaysi", "Faqat RAG"], c: 1 },
          { q: "Fine-tuning qachon o'rinli bo'ladi?", o: ["Har doim, birinchi navbatda", "Maxsus uslub yoki format doimiy va ko'p kerak bo'lganda, yuzlab-minglab misol bilan", "Faqat bitta savol uchun", "Hech qachon"], c: 1 }
        ]
      }
    ]
  };

  var mods = window.PROMPT_COURSE.modules;
  // Yakuniy moduldan oldin joylashtirish (oxiridan bitta oldin)
  var pos = Math.max(0, mods.length - 1);
  mods.splice(pos, 0, ADV);
})();
