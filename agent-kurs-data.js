/* ============================================================
   Oson Studio — AI Agentlar kursi (1-bosqich: Asoslar)
   Format: window.AGENT_COURSE = { title, subtitle, modules:[{ id,title,
     lessons:[{ id, title, read, html, sim?, quiz:[{q,o:[4],c}] }] }] }
   - sim turlari: "agentloop" (Agent Laboratoriyasi) | "classify" | "order"
   - Ohang: ustoz tilida, har dars real muammodan boshlanadi.
   ============================================================ */
window.AGENT_COURSE = {
  title: "AI Agentlar",
  subtitle: "Noldan amaliyotgacha · Claude bilan",
  modules: [
    {
      id: "b1",
      title: "Asoslar — agent dunyosiga kirish",
      lessons: [
        {
          id: "a1_1",
          title: "AI agent nima — va nima EMAS?",
          read: "9 daqiqa",
          html: `
<p class="pk-lead">Tasavvur qiling: siz ChatGPT'ga yozasiz — <i>Menga ertaga Toshkentdan Samarqandga poyezd chiptasini olib ber</i>. U sizga chiroyli javob beradi: Buni qilish uchun chipta.uzbekistan-railway.uz saytiga kiring.... Ya'ni u <b>gapirdi</b>, lekin <b>chiptani olmadi</b>. Mana shu — oddiy chatbot bilan <b>agent</b> orasidagi asosiy farq: chatbot <b>gapiradi</b>, agent esa <b>ish bajaradi</b>.</p>

<h3>Chatbot bir gapiradi — agent ish qiladi</h3>
<p>Oddiy chatbot bilan suhbat juda sodda: siz savol berasiz — u bitta javob qaytaradi. Tamom. U tashqi dunyoga ta'sir qila olmaydi: na saytga kira oladi, na fayl ocha oladi, na xat yubora oladi. U faqat <b>matn</b> ishlab chiqaradi.</p>
<p><b>Agent</b> esa boshqacha. Unga <b>maqsad</b> berasiz (natija nima bo'lishini), va u o'zi <b>qadam-baqadam</b> harakat qiladi: o'ylaydi, kerakli <b>asbob</b>ni ishlatadi (qidiruv, kalkulyator, kalendar, fayl...), natijani ko'radi, keyin yana o'ylaydi — toki maqsad bajarilmaguncha. Ya'ni agent — bu <b>qo'li bor, o'zi qaror qabul qiladigan AI</b>.</p>

<div class="pk-fig">
<svg viewBox="0 0 760 290" xmlns="http://www.w3.org/2000/svg">
  <rect width="760" height="290" rx="16" fill="#f7fbfa"/>
  <!-- CHATBOT -->
  <text x="190" y="34" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#64748b">ODDIY CHATBOT</text>
  <rect x="60" y="56" width="110" height="44" rx="10" fill="#e2e8f0"/><text x="115" y="83" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="700" fill="#334155">Siz</text>
  <rect x="220" y="56" width="110" height="44" rx="10" fill="#0f766e"/><text x="275" y="83" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="700" fill="#fff">AI</text>
  <path d="M170 70 H214" stroke="#94a3b8" stroke-width="2.2" marker-end="url(#ar)"/>
  <path d="M220 90 H176" stroke="#94a3b8" stroke-width="2.2" marker-end="url(#ar)"/>
  <text x="195" y="132" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#64748b">savol → javob (faqat matn)</text>
  <text x="195" y="152" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#94a3b8">tashqi dunyoga ta'siri yo'q</text>
  <!-- ajratuvchi -->
  <line x1="380" y1="40" x2="380" y2="250" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="4 5"/>
  <!-- AGENT -->
  <text x="570" y="34" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#0d9488">AI AGENT</text>
  <rect x="500" y="52" width="140" height="46" rx="11" fill="#0d9488"/><text x="570" y="74" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">AGENT (miya)</text><text x="570" y="90" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#a7f3e9">o'ylaydi · qaror qiladi</text>
  <!-- tools -->
  <rect x="430" y="150" width="90" height="36" rx="9" fill="#fff" stroke="#0d9488"/><text x="475" y="173" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">🔎 Qidiruv</text>
  <rect x="525" y="150" width="90" height="36" rx="9" fill="#fff" stroke="#0d9488"/><text x="570" y="173" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">📅 Kalendar</text>
  <rect x="620" y="150" width="92" height="36" rx="9" fill="#fff" stroke="#0d9488"/><text x="666" y="173" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">📁 Fayllar</text>
  <path d="M540 100 L480 148" stroke="#0d9488" stroke-width="2" marker-end="url(#art)"/>
  <path d="M570 100 V146" stroke="#0d9488" stroke-width="2" marker-end="url(#art)"/>
  <path d="M600 100 L660 148" stroke="#0d9488" stroke-width="2" marker-end="url(#art)"/>
  <path d="M475 188 q-30 40 65 44 q95 4 96 -44" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#art)"/>
  <text x="570" y="252" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">maqsad → o'ylaydi → asbob ishlatadi → natija → yana o'ylaydi (halqa)</text>
  <defs>
    <marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker>
    <marker id="art" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
  </defs>
</svg>
<figcaption>Chatbot faqat gaplashadi; agentning qo'li (asboblari) bor va o'zi qaror qabul qiladi</figcaption>
</div>

<h3>Nima narsani agent qiladi? — 4 belgi</h3>
<p>Bir narsani agent deyish uchun unda quyidagilar bo'lishi kerak:</p>
<ul>
  <li><b>Maqsad</b> — unga nima qilish emas, qanday natija kerakligini aytasiz.</li>
  <li><b>Asboblar (tools)</b> — tashqi dunyo bilan ishlash imkoni: qidiruv, hisoblash, fayl, API va h.k.</li>
  <li><b>Halqa (loop)</b> — bitta javob emas, balki <b>o'ylab → harakat qilib → natijani ko'rib</b> takrorlanadigan tsikl.</li>
  <li><b>Avtonomiya</b> — keyingi qadamni har safar siz emas, <b>o'zi</b> tanlaydi.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Agent — bu aqlli skript emas</b>Oddiy <b>avtomatlashtirish</b> (skript, makros) <b>oldindan yozilgan</b> qadamlarni aynan bajaradi: 1, 2, 3. Agent esa qadamlarni <b>o'zi o'ylab topadi</b> — vaziyatga qarab boshqacha yo'l tutishi mumkin. Skript — relsdagi poyezd; agent — yo'lni o'zi tanlaydigan haydovchi.</div></div>

<h3>Keling, agentni harakatda ko'ramiz</h3>
<p>Pastdagi <b>Agent Laboratoriyasi</b>da haqiqiy bo'lmagan, lekin xuddi haqiqatdek ishlaydigan oddiy agent bor. Unga bitta maqsad berildi. <b>Keyingi qadam</b> tugmasini bosib, u qanday <b>o'ylaganini</b>, qaysi <b>asbobni</b> ishlatganini va <b>natijaga qarab</b> qanday qaror qabul qilganini bosqichma-bosqich kuzating. Hozir hammasi tushunarli bo'lmasa ham — xavotir olmang, keyingi darslarda har bir bosqichni alohida ochamiz.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Chatbot gapiradi, agent ish qiladi. Agent — bu maqsad berilgan, asboblari bor va <b>o'zi qaror qabul qilib</b>, o'ylab-harakat qilib natijaga boradigan AI. U oddiy skriptdan farqli — qadamlarni o'zi tanlaydi.</span></div>`,
          sim: {
            type: "agentloop",
            intro: "Quyida oddiy agent. Foydalanuvchi unga maqsad berdi. <b>Keyingi qadam</b>ni bosib, u qanday o'ylab, asbob ishlatib, natijaga qarab qaror qilishini kuzating. Yoki <b>Avtomatik</b> bilan o'zi ketsin.",
            goal: "Toshkentda hozir havo sovuqmi? Agar sovuq bo'lsa, menga eslatma yozib qo'y.",
            tools: [
              { name: "ob_havo", label: "ob_havo", desc: "shahar harorati" },
              { name: "eslatma", label: "eslatma", desc: "eslatma saqlash" }
            ],
            steps: [
              { kind: "thought", text: "Avval Toshkentdagi haroratni bilishim kerak. Buning uchun ob_havo asbobini chaqiraman." },
              { kind: "action", tool: "ob_havo", args: "{ \"shahar\": \"Toshkent\" }" },
              { kind: "observation", text: "{ \"harorat_C\": -3, \"holat\": \"qor\" }" },
              { kind: "thought", text: "Harorat -3°C — bu sovuq. Demak shartning agar sovuq bo'lsa qismi bajarildi. Endi eslatma yozaman." },
              { kind: "action", tool: "eslatma", args: "{ \"matn\": \"Tashqarida sovuq (-3°C). Iliq kiyining!\" }" },
              { kind: "observation", text: "{ \"saqlandi\": true }" },
              { kind: "answer", text: "Bajardim! Toshkentda hozir -3°C — sovuq. Sizga eslatma qo'yib qo'ydim: Tashqarida sovuq, iliq kiyining!." }
            ]
          },
          quiz: [
            { q: "Oddiy chatbot bilan agent orasidagi ASOSIY farq nima?", o: ["Agent chiroyliroq gapiradi", "Chatbot faqat gapiradi, agent esa asboblar bilan ish bajaradi", "Agent faqat ingliz tilida ishlaydi", "Hech qanday farqi yo'q"], c: 1 },
            { q: "Quyidagilardan qaysi biri agentning belgisi EMAS?", o: ["Maqsad", "Asboblar (tools)", "Har bir qadamni faqat odam tanlashi", "O'ylab-harakat qiladigan halqa"], c: 2 },
            { q: "Agent oddiy avtomatlashtirish (skript)dan nimasi bilan farq qiladi?", o: ["Skript tezroq ishlaydi", "Agent qadamlarni o'zi o'ylab topadi, skript esa oldindan yozilganini bajaradi", "Agent hech qachon xato qilmaydi", "Ular bir xil narsa"], c: 1 },
            { q: "Agentga maqsad beriladi degani nimani anglatadi?", o: ["Unga aniq 1-2-3 qadamlar aytiladi", "Unga qanday natija kerakligi aytiladi, qadamlarni o'zi tanlaydi", "Unga faqat savol beriladi", "Unga pul beriladi"], c: 1 },
            { q: "Laboratoriyadagi agent nega avval ob_havo asbobini chaqirdi?", o: ["Tasodifan", "Eslatma yozish shartini hal qilish uchun avval haroratni bilish kerak edi", "Ob-havo eng oson asbob bo'lgani uchun", "Foydalanuvchi shuni buyurgani uchun"], c: 1 }
          ]
        },

        {
          id: "a1_2",
          title: "Avtonomiya spektri — Menga agent KERAKMI?",
          read: "9 daqiqa",
          html: `
<p class="pk-lead">Yangi narsani o'rgangan har bir kishi bitta xatoga yo'l qo'yadi: <b>hamma narsa uchun agent ishlatmoqchi bo'ladi</b>. Bu — xonaning narigi burchagiga o'tish uchun taksi chaqirgandek gap. Haqiqiy professional birinchi savolni boshqacha qo'yadi: <b>Bu vazifa uchun menga umuman agent kerakmi?</b> Ko'p hollarda javob — yo'q.</p>

<h3>Avtonomiya spektri: prompt → workflow → agent</h3>
<p>AI yechimlarini qancha mustaqil qaror qabul qiladi bo'yicha uch pog'onaga ajratish mumkin:</p>
<ul>
  <li><b>1. Bitta prompt</b> — bir savol, bir javob. Hech qanday qadam, asbob yo'q. Mas: bu xatni rasmiy uslubga o'tkaz. Eng tez va arzon.</li>
  <li><b>2. Workflow (belgilangan oqim)</b> — bir necha qadam, lekin <b>qadamlar oldindan ma'lum va doimiy</b>. Mas: har bir kelgan xatni o'qi → tilini aniqla → tarjima qil → papkaga saqla. Bu har safar bir xil ketadi.</li>
  <li><b>3. Agent</b> — qadamlar <b>oldindan noma'lum</b>, vaziyatga qarab o'zgaradi; asboblar kerak; agent o'zi qaror qabul qiladi. Mas: internetdan 3 raqobatchi narxini top, solishtir va eng arzonini ayt.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 740 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="740" height="220" rx="16" fill="#f7fbfa"/>
  <text x="370" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Avtonomiya spektri — kam → ko'p mustaqillik</text>
  <!-- strelka -->
  <line x1="60" y1="170" x2="690" y2="170" stroke="#cbd5e1" stroke-width="3"/>
  <polygon points="690,170 678,164 678,176" fill="#cbd5e1"/>
  <text x="70" y="196" font-family="system-ui" font-size="11" fill="#94a3b8">kam avtonomiya</text>
  <text x="690" y="196" text-anchor="end" font-family="system-ui" font-size="11" fill="#94a3b8">ko'p avtonomiya</text>
  <!-- 3 bosqich -->
  <g>
    <rect x="70" y="64" width="180" height="88" rx="13" fill="#eef2ff" stroke="#c7d2fe"/>
    <text x="160" y="92" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="800" fill="#4338ca">1 · Bitta prompt</text>
    <text x="160" y="114" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">bir savol → bir javob</text>
    <text x="160" y="132" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">tez · arzon · oddiy</text>
    <circle cx="160" cy="170" r="7" fill="#6366f1"/>
  </g>
  <g>
    <rect x="280" y="64" width="180" height="88" rx="13" fill="#e7f6ee" stroke="#bfe6d0"/>
    <text x="370" y="92" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="800" fill="#15803d">2 · Workflow</text>
    <text x="370" y="114" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">qadamlar doimiy</text>
    <text x="370" y="132" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">takrorlanuvchi · ishonchli</text>
    <circle cx="370" cy="170" r="7" fill="#22c55e"/>
  </g>
  <g>
    <rect x="490" y="64" width="180" height="88" rx="13" fill="#d6f2ed" stroke="#5eead4"/>
    <text x="580" y="92" text-anchor="middle" font-family="system-ui" font-size="14" font-weight="800" fill="#0f766e">3 · Agent</text>
    <text x="580" y="114" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">qadamlar noma'lum</text>
    <text x="580" y="132" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">asbob · qaror · halqa</text>
    <circle cx="580" cy="170" r="7" fill="#0d9488"/>
  </g>
</svg>
<figcaption>Avval eng sodda yechimni sinang; agent — eng kuchli, lekin eng qimmat darajadir</figcaption>
</div>

<h3>Agent qachon KERAK EMAS?</h3>
<p>Quyidagi hollarda agent ortiqcha — oddiyroq yechim afzal:</p>
<ul>
  <li>Vazifa <b>bitta qadamda</b> hal bo'lsa (tarjima, qisqartirish, javob) → <b>prompt</b>.</li>
  <li>Qadamlar <b>har safar bir xil va aniq</b> bo'lsa → <b>workflow</b> (oddiy, ishonchli, arzon).</li>
  <li>Natija <b>aniq va oldindan ma'lum</b> bo'lishi kerak bo'lsa — agentning o'zicha qaror qilishi xavf tug'diradi.</li>
</ul>
<p>Agent esa quyida o'rinli: qadamlar <b>oldindan noma'lum</b>, <b>asboblar</b> kerak, va vazifa <b>bir necha bosqich</b>li.</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Agentning narxi bor</b>Agent ko'proq <b>token</b> sarflaydi (qimmatroq), <b>sekinroq</b> ishlaydi va <b>kamroq bashoratli</b> — har safar biroz boshqacha yo'l tutishi mumkin. Shuning uchun professionallar: <i>eng sodda yechim ish bermaganda</i> agentga o'tadi.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Avval o'zingizga agent kerakmi? deb savol bering. Bitta qadam — prompt; doimiy qadamlar — workflow; noma'lum, ko'p qadamli, asbob talab qiladigan vazifa — agent. Agent kuchli, lekin qimmat va kamroq bashoratli.</span></div>`,
          sim: {
            type: "classify",
            intro: "Quyidagi vazifalar uchun <b>agent</b> kerakmi (ko'p qadam, asbob, noma'lum yo'l), yoki <b>oddiy</b> yechim (bitta prompt yoki belgilangan workflow) yetadimi? To'g'ri ajrating.",
            groups: ["agent", "oddiy"],
            items: [
              { name: "Bu xatni rasmiy uslubga aylantirib ber", answer: "oddiy", hint: "Bitta matn → bitta javob. Bu oddiy prompt." },
              { name: "Internetdan 3 ta raqobatchi narxini top, jadval qil, eng arzonini ayt", answer: "agent", hint: "Qidirish + solishtirish + bir necha qadam → agent." },
              { name: "2 + 2 nechiga teng?", answer: "oddiy", hint: "Bir lahzalik javob — agent shart emas." },
              { name: "Kalendarimni ko'r, bo'sh vaqt top va uchrashuv belgila", answer: "agent", hint: "Bir necha asbob + qaror → agent." },
              { name: "Bu paragrafni 2 jumlaga qisqartir", answer: "oddiy", hint: "Bitta transformatsiya — oddiy prompt." },
              { name: "Papkadagi 50 ta faylni o'qib, qaysisida xato borligini topib ber", answer: "agent", hint: "Ko'p fayl + tekshirish sikli → agent." }
            ]
          },
          quiz: [
            { q: "Yangi boshlovchilar agent bilan ishlashda eng ko'p qiladigan xato qaysi?", o: ["Agentni umuman ishlatmaslik", "Hamma narsa uchun, hatto sodda vazifaga ham agent ishlatish", "Faqat ingliz tilida yozish", "Juda ko'p asbob qo'shish"], c: 1 },
            { q: "Har bir kelgan xatni tarjima qilib, papkaga saqlash — qadamlar doimiy. Bu nima?", o: ["Bitta prompt", "Workflow (belgilangan oqim)", "Murakkab agent", "Buni umuman qilib bo'lmaydi"], c: 1 },
            { q: "Agent qachon eng o'rinli?", o: ["Vazifa bitta qadamda hal bo'lganda", "Qadamlar har safar bir xil bo'lganda", "Qadamlar oldindan noma'lum va asboblar kerak bo'lganda", "Hech qachon"], c: 2 },
            { q: "Agentning narxi deganda nima nazarda tutiladi?", o: ["Faqat pul to'lash", "Ko'proq token, sekinroq va kamroq bashoratli ishlash", "Agent doimo bepul", "Hech qanday kamchiligi yo'q"], c: 1 },
            { q: "2+2 nechiga teng? degan savol uchun to'g'ri yechim qaysi?", o: ["Murakkab ko'p agentli tizim", "Oddiy bitta prompt yetarli", "Albatta asboblar ulash kerak", "Workflow qurish kerak"], c: 1 }
          ]
        },

        {
          id: "a1_3",
          title: "Agent qanday fikrlaydi: LLM, kontekst va token",
          read: "10 daqiqa",
          html: `
<p class="pk-lead">Agentning miyasi — bu <b>til modeli (LLM)</b>, masalan Claude. Agentni yaxshi boshqarish uchun bu miya qanday ishlashini <b>tuyg'u darajasida</b> bilish kerak. Qo'rqmang — matematik formula yo'q. Faqat uchta sodda g'oya: model <b>matnni davom ettiradi</b>, uning <b>cheklangan xotirasi</b> bor, va bu xotira <b>token</b>larda o'lchanadi.</p>

<h3>1. LLM — keyingi so'zni taxmin qiladi</h3>
<p>Til modeli ulkan matnlar ustida o'qitilgan. U aslida bitta ishni juda yaxshi bajaradi: berilgan matndan keyin <b>eng mos keladigan keyingi bo'lakni</b> taxmin qiladi — so'zma-so'z. Shuning uchun u juda aqlli tuyuladi, lekin u <b>ma'lumotlar bazasi emas</b>: ba'zan ishonch bilan <b>xato</b> ham taxmin qiladi (buni <b>gallyutsinatsiya</b> deyiladi). Aynan shu sabab agentga <b>asboblar</b> beriladi — taxmin qilish o'rniga, u haqiqiy ma'lumotni (qidiruv, kalkulyator, baza) tekshirib oladi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Nega bu muhim?</b>Model o'zicha -3°C deb taxmin qilishi mumkin, lekin u rost emas. Agent esa ob_havo asbobini chaqirib, <b>haqiqiy</b> haroratni oladi. Demak asboblar — modelning taxminini <b>haqiqatga bog'laydigan</b> vositadir.</div></div>

<h3>2. Kontekst oynasi — modelning ish stoli</h3>
<p>Model bir vaqtning o'zida faqat ma'lum miqdordagi matnni ko'ra oladi. Bu — uning <b>kontekst oynasi</b> (ish xotirasi). Unga hamma narsa sig'ishi kerak:</p>
<ul>
  <li><b>Ko'rsatma</b> (system prompt — agent kim va qanday ishlashi);</li>
  <li><b>Maqsad</b> (foydalanuvchi topshirig'i);</li>
  <li><b>Suhbat tarixi</b> va agentning oldingi <b>fikrlari</b>;</li>
  <li><b>Asboblardan kelgan natijalar</b> (kuzatuvlar).</li>
</ul>
<p>Agent har bir halqada bu oynaga yangi narsa qo'shadi — fikr, harakat, kuzatuv... Oyna to'lib qolsa, eng eski qismlar unutiladi. Shuning uchun keyingi modullarda <b>xotira</b> va <b>kontekstni boshqarish</b>ni alohida o'rganamiz.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="260" rx="16" fill="#f7fbfa"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Kontekst oynasi — hammasi bitta oynaga sig'ishi kerak</text>
  <rect x="60" y="48" width="600" height="174" rx="14" fill="#fff" stroke="#0d9488" stroke-width="2"/>
  <text x="78" y="70" font-family="system-ui" font-size="11" font-weight="800" fill="#0f766e">KONTEKST OYNASI (ish xotirasi)</text>
  <g font-family="system-ui" font-size="12.5">
    <rect x="78" y="80" width="564" height="28" rx="7" fill="#eef2ff"/><text x="92" y="99" fill="#4338ca">⚙ Ko'rsatma (system prompt) — agent kim va qanday ishlaydi</text>
    <rect x="78" y="114" width="564" height="28" rx="7" fill="#e7f6ee"/><text x="92" y="133" fill="#15803d">🎯 Maqsad — foydalanuvchi topshirig'i</text>
    <rect x="78" y="148" width="564" height="28" rx="7" fill="#fff7ed"/><text x="92" y="167" fill="#b45309">💬 Suhbat tarixi + agentning fikrlari</text>
    <rect x="78" y="182" width="564" height="28" rx="7" fill="#e0f2fe"/><text x="92" y="201" fill="#0369a1">👁 Asboblardan kelgan natijalar (kuzatuvlar)</text>
  </g>
  <text x="360" y="244" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">Oyna to'lsa — eng eski qism unutiladi. Token = bu oynaning o'lchov birligi.</text>
</svg>
<figcaption>Model faqat shu oynadagini ko'radi; tashqaridagini bilmaydi</figcaption>
</div>

<h3>3. Token — matnning o'lchov birligi</h3>
<p><b>Token</b> — matnning kichik bo'lagi (taxminan so'zning bir qismi). Model matnni so'z emas, <b>token</b>larda o'lchaydi. Nega bu sizga kerak?</p>
<ul>
  <li><b>Narx:</b> ko'p token = ko'proq to'lov (API'da har token uchun haq olinadi).</li>
  <li><b>Tezlik:</b> uzun kontekst sekinroq ishlanadi.</li>
  <li><b>Chegara:</b> har modelning oyna o'lchovi cheklangan — juda uzun bo'lsa, sig'maydi.</li>
</ul>
<p>Agentda har bir halqa kontekstni biroz shishiradi, demak tokenni ham oshiradi. Yaxshi agent — kerakli ma'lumotnigina kontekstda saqlaydigan, isrof qilmaydigan agentdir.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Sodda tuyg'u</b>LLM = matnni davom ettiruvchi miya. Kontekst = uning ish stoli. Token = stol o'lchovi. Agent har qadamda stolga yangi qog'oz qo'yadi — stol kichik bo'lsa, joyni tejash kerak. Mana shu uchta tuyg'u bilan siz allaqachon agentlarni boshqalardan yaxshiroq tushunasiz.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Agentning miyasi — LLM: u matnni davom ettiradi va ba'zan xato taxmin qiladi (shuning uchun asboblar kerak). Uning ish xotirasi — kontekst oynasi; unga ko'rsatma, maqsad, tarix va kuzatuvlar sig'adi. O'lchov birligi — token (narx, tezlik, chegara).</span></div>`,
          sim: {
            type: "order",
            intro: "Endi bilganlaringizni umumlashtiramiz. <b>Agent halqasi</b>ning qadamlarini to'g'ri tartibga keling — strelkalar bilan joylashtiring va Tartibni tekshirishni bosing.",
            steps: [
              "Foydalanuvchi agentga maqsad beradi",
              "Agent o'ylaydi: keyin nima qilish kerak?",
              "Agent kerakli asbobni chaqiradi (harakat)",
              "Asbobdan kelgan natijani kuzatadi",
              "Natijaga qarab yana o'ylaydi (halqa takrorlanishi mumkin)",
              "Maqsad bajarilsa — yakuniy javobni beradi"
            ]
          },
          quiz: [
            { q: "Til modeli (LLM) asosan nima qiladi?", o: ["Ma'lumotlar bazasidan aniq javob qidiradi", "Berilgan matndan keyingi eng mos bo'lakni taxmin qiladi", "Internetga avtomatik ulanadi", "Faqat matematik hisob qiladi"], c: 1 },
            { q: "Gallyutsinatsiya nima va agentda unga qanday qarshi turiladi?", o: ["Modelning sekin ishlashi — tezlashtirib", "Modelning ishonch bilan xato taxmin qilishi — asboblar bilan haqiqatni tekshirib", "Internet uzilishi — qayta ulanib", "Token tugashi — to'lov qilib"], c: 1 },
            { q: "Kontekst oynasi nima?", o: ["Brauzerdagi yangi oyna", "Modelning bir vaqtda ko'ra oladigan ish xotirasi", "Agentning sertifikati", "Internet tezligi"], c: 1 },
            { q: "Kontekst oynasiga quyidagilardan qaysi biri KIRMAYDI?", o: ["Ko'rsatma (system prompt)", "Asboblardan kelgan natijalar", "Modelning kompyuteridagi barcha fayllar", "Suhbat tarixi"], c: 2 },
            { q: "Token bilan nega qiziqamiz?", o: ["U faqat dizayn uchun", "U narx, tezlik va kontekst chegarasiga ta'sir qiladi", "Token agentni xavfsiz qiladi", "Tokenning ahamiyati yo'q"], c: 1 }
          ]
        }
      ]
    }
  ]
};
