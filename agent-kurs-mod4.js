/* ============================================================
   Oson Studio — AI Agentlar kursi (4-bosqich: Qurish — amaliyot, Claude bilan)
   Format: window.AGENT_COURSE.modules.push({ id, title, lessons:[...] })
   - sim turlari: "agentloop" | "classify" | "order"
   - Ohang: ustoz tilida; har dars real muammodan boshlanadi.
   - Faqat lotin yozuvi. Klasslar: agent-kurs-data.js bilan bir xil.
   ============================================================ */
window.AGENT_COURSE.modules.push({
  id: "b4",
  title: "Qurish: amaliyot (Claude bilan)",
  lessons: [

    {
      id: "b4_1",
      title: "Kod yozmasdan agent qurish (no-code)",
      read: "10 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling: siz kichik do'kon yuritasiz va har kuni Telegram'ga kelgan buyurtmalarni qo'lda jadvalga ko'chirib o'tirasiz — kuniga bir soat vaqtingiz shunga ketadi. Eh, buni avtomatlashtirsa bo'lardi-yu, lekin men dasturchi emasman deb o'ylaysiz. Mana shu yerda yaxshi yangilik bor: <b>agent qurish uchun endi kod yozish shart emas</b>. Bir nechta vizual platforma bor — siz sichqoncha bilan bloklarni ulab, ishlaydigan agent yoki avtomatlashtirish qurasiz.</p>

<h3>No-code nima degani?</h3>
<p><b>No-code</b> (kodsiz) — bu dasturlash tilini bilmasdan, tayyor bloklardan dastur yoki agent yig'ish usuli. Siz kod yozmaysiz; uning o'rniga ekranda <b>bu bo'lsa → buni qil</b> tipidagi qadamlarni vizual ulaysiz. Xuddi konstruktordan uy yig'gandek: g'isht (blok) tayyor, siz faqat to'g'ri tartibda joylashtirsangiz bo'ldi.</p>
<p>Bu yo'l dasturchi bo'lmaganlar uchun idealdir: tezroq, arzonroq, va xatolikni ko'rish osonroq, chunki hamma narsa ko'z oldingizda.</p>

<h3>Eng mashhur no-code vositalar</h3>
<ul>
  <li><b>Custom GPTs</b> (ChatGPT ichida) — o'z maxsus yordamchingizni yaratasiz: unga ko'rsatma, bilim fayllari va bir nechta asbob berasiz. Kod yo'q — faqat suhbat va sozlamalar.</li>
  <li><b>n8n</b> — kuchli vizual avtomatlashtirish platformasi. Bloklarni (node) chiziq bilan ulab, butun ish-oqimini quryapsiz. Ochiq kodli, o'zingizning serveringizda ham ishlatsa bo'ladi.</li>
  <li><b>Make</b> (avvalgi nomi Integromat) — chiroyli vizual ssenariy muharriri; yuzlab xizmatga (Gmail, Telegram, Google Sheets...) ulanadi.</li>
  <li><b>Zapier</b> — eng oddiy trigger → harakat mantig'i: yangi xat kelsa → jadvalga qator qo'sh. Boshlovchilar uchun eng yengili.</li>
  <li><b>Dify</b> va <b>Flowise</b> — aynan <b>AI agent</b> va chatbotlar qurish uchun vizual konstruktorlar; LLM, bilim bazasi va asboblarni bloklar bilan ulaysiz.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="760" height="250" rx="16" fill="#f7fbfa"/>
  <text x="380" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">No-code: bloklarni ulaysiz — kod yozmaysiz</text>
  <rect x="40" y="70" width="150" height="60" rx="12" fill="#eef2ff" stroke="#c7d2fe"/>
  <text x="115" y="98" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="700" fill="#4338ca">Trigger</text>
  <text x="115" y="116" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">yangi xat keldi</text>
  <rect x="305" y="70" width="150" height="60" rx="12" fill="#d6f2ed" stroke="#5eead4"/>
  <text x="380" y="98" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="700" fill="#0f766e">AI bloki</text>
  <text x="380" y="116" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">matnni tahlil qil</text>
  <rect x="570" y="70" width="150" height="60" rx="12" fill="#e7f6ee" stroke="#bfe6d0"/>
  <text x="645" y="98" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="700" fill="#15803d">Harakat</text>
  <text x="645" y="116" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">jadvalga yoz</text>
  <path d="M190 100 H301" stroke="#0d9488" stroke-width="2.4" marker-end="url(#a41)"/>
  <path d="M455 100 H566" stroke="#0d9488" stroke-width="2.4" marker-end="url(#a41)"/>
  <text x="380" y="190" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#64748b">Siz faqat bloklarni chiziq bilan ulaysiz — ortda kod o'zi ishlaydi</text>
  <text x="380" y="214" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">Zapier · Make · n8n · Dify · Flowise · Custom GPTs</text>
  <defs>
    <marker id="a41" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
  </defs>
</svg>
<figcaption>No-code platformada agent — bu chiziqlar bilan ulangan bloklar zanjiri</figcaption>
</div>

<h3>Qaysi birini tanlash kerak?</h3>
<p>Boshlashda murakkablashtirmaslik kerak. Quyidagi oddiy yo'l-yo'riq yetarli:</p>
<ul>
  <li>Faqat <b>oddiy agar X bo'lsa → Y qil</b> kerakmi? — <b>Zapier</b> yoki <b>Make</b>.</li>
  <li>Murakkab ko'p qadamli, ko'p shartli oqim kerakmi? — <b>n8n</b> (egiluvchanroq).</li>
  <li>Suhbatlashadigan <b>AI agent / chatbot</b> kerakmi (bilim bazasi bilan)? — <b>Dify</b> yoki <b>Flowise</b>, yoki oddiyroq holatda <b>Custom GPT</b>.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>No-code kuchsiz degani emas</b>Ko'pchilik kompaniya o'zining real avtomatlashtirishini aynan n8n yoki Make'da quradi. No-code — bu o'yinchoq emas, balki <b>tezkor va amaliy</b> yo'l. Faqat juda murakkab, maxsus mantiq kerak bo'lgandagina kodga o'tasiz.</div></div>

<h3>Birinchi agentni qurish tartibi</h3>
<p>Qaysi platformani tanlamang, jarayon deyarli bir xil: avval <b>maqsadni</b> aniqlaysiz, keyin <b>platforma</b> tanlaysiz, kerakli <b>ulanmalarni</b> qo'shasiz, agentga aniq <b>ko'rsatma</b> yozasiz, va albatta <b>sinab</b> ko'rib tuzatasiz. Pastdagi mashqda aynan shu tartibni joylashtirasiz.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Maslahat</b>Birinchi agentingizni juda kichik qiling: bitta trigger, bitta-ikkita harakat. Ishlaganini ko'rganingizdan keyin sekin-asta kengaytirasiz. Hamma narsani birdan qilishga urinish — eng tez-tez uchraydigan xato.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Agent qurish uchun dasturchi bo'lish shart emas. Custom GPTs, n8n, Make, Zapier, Dify va Flowise — bularning hammasi <b>vizual</b>, kodsiz vositalar. Maqsadni aniqlang, mos platforma tanlang, ulanmalarni qo'shing, aniq ko'rsatma bering va sinab tuzating.</span></div>`,
      sim: {
        type: "order",
        intro: "No-code platformada birinchi agentingizni qurish qadamlarini <b>to'g'ri tartibga</b> keltiring — strelkalar bilan joylashtiring va Tartibni tekshirishni bosing.",
        steps: [
          "Agent maqsadini aniqlash",
          "Mos no-code platforma tanlash",
          "Kerakli ulanmalar/asboblarni qo'shish",
          "Agentga aniq ko'rsatma (prompt) yozish",
          "Sinab ko'rish va tuzatish"
        ]
      },
      quiz: [
        { q: "No-code nima degani?", o: ["Faqat ingliz tilida kod yozish", "Dasturlash tilini bilmasdan, tayyor bloklardan agent/avtomatlashtirish yig'ish", "Agentni umuman ishlatmaslik", "Faqat Python yozish"], c: 1 },
        { q: "Quyidagilardan qaysi biri no-code vosita EMAS?", o: ["n8n", "Make (Integromat)", "Zapier", "Bularning hammasi no-code vositalar"], c: 3 },
        { q: "Custom GPTs qayerda yaratiladi?", o: ["Faqat terminalda", "ChatGPT ichida — ko'rsatma, bilim fayllari va asboblar berib", "Faqat n8n serverida", "Hech qayerda, bu mavjud emas"], c: 1 },
        { q: "Aynan AI agent va chatbotlar qurish uchun mo'ljallangan vizual konstruktorlar qaysilar?", o: ["Dify va Flowise", "Word va Excel", "Gmail va Telegram", "Faqat Zapier"], c: 0 },
        { q: "Birinchi agentni qurishda eng to'g'ri yondashuv qaysi?", o: ["Birdan hamma narsani qamrab oluvchi katta agent qurish", "Kichik boshlab — bitta trigger, bir-ikki harakat — keyin kengaytirish", "Avval kod o'rganib, keyin no-code'ga o'tish", "Sinab ko'rmasdan ishga tushirish"], c: 1 }
      ]
    },

    {
      id: "b4_2",
      title: "Claude amaliyoti: Claude.ai, Projects, Artifacts",
      read: "10 daqiqa",
      html: `
<p class="pk-lead">Aytaylik, siz bir oydan beri Claude bilan o'z biznes-rejangiz ustida ishlayapsiz. Har gal yangi suhbat ochganingizda hammasini boshidan tushuntirishingizga to'g'ri keladi: biz O'zbekistonda mebel sotamiz, mijozlarimiz shunday.... Charchatadi, to'g'rimi? Mana shu yerda Claude'ning ikkita amaliy quroli yordamga keladi: <b>Projects</b> (loyihalar) va <b>Artifacts</b>. Ular bilan Claude sizning kontekstingizni eslab qoladi va natijani tirik, tahrirlanadigan ko'rinishda beradi.</p>

<h3>Claude.ai — ishchi maydoningiz</h3>
<p><b>Claude.ai</b> — bu Claude bilan ishlaydigan veb-sayt (va ilova). Bu yerda siz oddiy suhbat qilasiz, fayl yuklaysiz, rasm ko'rsatasiz va javob olasiz. Lekin haqiqiy kuch — uning ustidagi ikkita maxsus imkoniyatda: Projects va Artifacts.</p>

<h3>Projects — har bir mavzu uchun alohida xona</h3>
<p><b>Project (loyiha)</b> — bu bitta mavzu uchun ajratilgan maxsus maydon. Uning ikkita asosiy qismi bor:</p>
<ul>
  <li><b>Bilim fayllari (knowledge)</b> — siz loyihaga hujjatlar yuklaysiz (narxlar, qoidalar, brend ovozi, mahsulot ro'yxati). Claude shu loyihadagi <b>har bir suhbatda</b> bu fayllarni ko'rib turadi.</li>
  <li><b>Maxsus ko'rsatma (custom instructions)</b> — loyihaga doimiy yo'l-yo'riq berasiz: sen mebel do'konining marketologisan, o'zbekcha, samimiy ohangda yoz.</li>
</ul>
<p>Natijada loyiha ichida <b>har bir yangi suhbat allaqachon kontekstni biladi</b> — siz boshidan tushuntirib o'tirmaysiz. Bu xuddi har gal yangi xodimni qaytadan o'qitish o'rniga, bir marta o'rgatilgan tajribali xodimga ish topshirgandek.</p>

<div class="pk-fig">
<svg viewBox="0 0 740 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="740" height="250" rx="16" fill="#f7fbfa"/>
  <text x="370" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Project — umumiy kontekst, ko'p suhbat</text>
  <rect x="50" y="55" width="230" height="150" rx="14" fill="#fff" stroke="#0d9488" stroke-width="2"/>
  <text x="165" y="80" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#0f766e">PROJECT: Mebel do'koni</text>
  <rect x="70" y="95" width="190" height="32" rx="8" fill="#e7f6ee"/><text x="84" y="116" font-family="system-ui" font-size="11" fill="#15803d">📄 Bilim fayllari (narx, qoida)</text>
  <rect x="70" y="135" width="190" height="32" rx="8" fill="#eef2ff"/><text x="84" y="156" font-family="system-ui" font-size="11" fill="#4338ca">⚙ Maxsus ko'rsatma</text>
  <text x="165" y="192" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#94a3b8">bir marta sozlanadi</text>
  <rect x="430" y="60" width="250" height="40" rx="10" fill="#d6f2ed" stroke="#5eead4"/><text x="555" y="85" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">Suhbat 1 · reklama matni</text>
  <rect x="430" y="108" width="250" height="40" rx="10" fill="#d6f2ed" stroke="#5eead4"/><text x="555" y="133" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">Suhbat 2 · mijozga javob</text>
  <rect x="430" y="156" width="250" height="40" rx="10" fill="#d6f2ed" stroke="#5eead4"/><text x="555" y="181" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">Suhbat 3 · narx hisobi</text>
  <path d="M280 110 H426" stroke="#0d9488" stroke-width="2" marker-end="url(#a42)"/>
  <path d="M280 130 L426 128" stroke="#0d9488" stroke-width="2" marker-end="url(#a42)"/>
  <path d="M280 150 L426 174" stroke="#0d9488" stroke-width="2" marker-end="url(#a42)"/>
  <text x="350" y="232" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">Har bir suhbat loyihaning bilim va ko'rsatmasini avtomatik biladi</text>
  <defs><marker id="a42" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker></defs>
</svg>
<figcaption>Project — kontekstni bir marta o'rnatasiz, barcha suhbatlar undan foydalanadi</figcaption>
</div>

<h3>Artifacts — tirik, tahrirlanadigan natija</h3>
<p><b>Artifact</b> — Claude yaratgan <b>mustaqil, jonli mazmun</b> bo'lib, u suhbat yonidagi <b>alohida panelda</b> ko'rinadi. Bu kod, hujjat, jadval yoki kichik ishlaydigan dastur bo'lishi mumkin. Oddiy javobdan farqi:</p>
<ul>
  <li>U <b>alohida panelda</b> turadi — suhbat oqimida yo'qolib ketmaydi.</li>
  <li>Uni <b>tahrirlash</b> mumkin: bu tugmani ko'k qil, bu paragrafni qisqartir — Claude o'sha artefaktni yangilaydi.</li>
  <li>Agar bu kichik dastur (masalan kalkulyator yoki o'yin) bo'lsa, u <b>o'sha yerda ishlaydi</b> — ko'rib, bosib sinab ko'rasiz.</li>
</ul>
<p>Ya'ni Artifact — bu gapdan natijaga o'tish: Claude faqat tushuntirmaydi, balki <b>tayyor, foydalanishga shay narsa</b> qo'lingizga beradi.</p>

<div class="pk-ex"><div class="pk-bad"><b>Artifactsiz</b> — Claude javobning ichida uzun kodni matn sifatida yozib beradi; siz uni ko'chirib, boshqa joyda ishga tushirishingiz kerak.</div><div class="pk-good"><b>Artifact bilan</b> — o'sha kod yon panelda <b>ishlab turadi</b>; rangini o'zgartir desangiz, shu yerda yangilanadi.</div></div>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Ikkalasi birga kuchli</b>Project — <b>kontekst</b>ni saqlaydi (Claude nimani bilishi kerak); Artifact — <b>natija</b>ni jonli ko'rinishda beradi. Mebel loyihangizda Claude do'kon ma'lumotini biladi (Project) va sizga tayyor reklama-sahifa qaytaradi (Artifact).</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Claude.ai — ishchi maydoningiz. <b>Projects</b> bir mavzu uchun doimiy kontekst beradi (bilim fayllari + maxsus ko'rsatma), shu loyihadagi har bir suhbat uni biladi. <b>Artifacts</b> esa natijani yon panelda jonli, tahrirlanadigan ko'rinishda chiqaradi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi holatlar Claude'ning qaysi imkoniyatiga tegishli — <b>Projects</b>mi (doimiy kontekst) yoki <b>Artifacts</b>mi (yon paneldagi jonli natija)? To'g'ri ajrating.",
        groups: ["Projects", "Artifacts"],
        items: [
          { name: "Do'kon narxlari va qoidalari yuklangan, har suhbat ularni biladi", answer: "Projects", hint: "Bu loyihaning doimiy bilim fayllari — Projects." },
          { name: "Claude yon panelda ishlaydigan kalkulyator dasturchasini chiqardi", answer: "Artifacts", hint: "Jonli, ishlaydigan natija yon panelda — Artifacts." },
          { name: "Sen mebel marketologisan, o'zbekcha yoz degan doimiy ko'rsatma", answer: "Projects", hint: "Maxsus ko'rsatma (custom instructions) — Projects." },
          { name: "Yon paneldagi matnni bu paragrafni qisqartir deb tahrirlash", answer: "Artifacts", hint: "Alohida paneldagi tahrirlanadigan mazmun — Artifacts." },
          { name: "Yangi suhbat boshidan kontekstni qayta tushuntirmaslik", answer: "Projects", hint: "Doimiy umumiy kontekst — Projects." },
          { name: "Claude HTML sahifani chizib, tugma rangini ko'k qil deyilganda yangilaydi", answer: "Artifacts", hint: "Tahrirlanadigan jonli natija — Artifacts." }
        ]
      },
      quiz: [
        { q: "Claude'da Project (loyiha) nima beradi?", o: ["Faqat chiroyli rang", "Bilim fayllari + maxsus ko'rsatma orqali bir mavzu uchun doimiy kontekst", "Internetga ulanish", "Bepul token"], c: 1 },
        { q: "Project ichidagi har bir yangi suhbat haqida nima to'g'ri?", o: ["Har safar hamma narsani boshidan tushuntirish kerak", "U loyihaning bilim va ko'rsatmasini avtomatik biladi", "Faqat bitta suhbat ochish mumkin", "Fayllarni ko'ra olmaydi"], c: 1 },
        { q: "Artifact nima?", o: ["Eski fayl turi", "Yon panelda ko'rinadigan jonli, mustaqil, tahrirlanadigan mazmun (kod, hujjat, dastur)", "Claude'ning paroli", "Internet tezligi o'lchovi"], c: 1 },
        { q: "Artifact oddiy matnli javobdan nimasi bilan farq qiladi?", o: ["Hech qanday farqi yo'q", "Alohida panelda turadi, tahrirlash mumkin, dastur bo'lsa o'sha yerda ishlaydi", "Faqat ingliz tilida bo'ladi", "Uni ko'rib bo'lmaydi"], c: 1 },
        { q: "Projects va Artifacts birga qanday ishlaydi?", o: ["Ular bir-biriga to'sqinlik qiladi", "Project kontekstni saqlaydi, Artifact natijani jonli ko'rinishda beradi", "Ikkalasi ham bir xil narsa", "Faqat bittasini ishlatish mumkin"], c: 1 }
      ]
    },

    {
      id: "b4_3",
      title: "Claude'ning agent imkoniyatlari: Skills va Subagents",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling, sizning yordamchingiz bor va siz unga aytasiz: Bizning hisob-faktura qoidalarimiz bo'yicha bu hujjatni rasmiylashtir. Yaxshi yordamchi javondan hisob-faktura qoidalari degan papkani oladi, qoidalarni o'qiydi va ishni qiladi. Yoki katta vazifa bo'lsa, u bir mutaxassis hamkasbiga sen faqat raqamlarni tekshir deb topshiradi. Claude'ning ham aynan shunday ikkita kuchli mexanizmi bor: <b>Skills</b> (ko'nikma to'plamlari) va <b>Subagents</b> (yordamchi sub-agentlar).</p>

<h3>Skills — talab bo'yicha yuklanadigan ko'nikma to'plami</h3>
<p><b>Skill (ko'nikma)</b> — bu <b>oldindan jamlangan, qayta ishlatiladigan ko'rsatmalar va resurslar to'plami</b> bo'lib, agent uni <b>kerak bo'lganda yuklab</b> oladi. Tasavvur qiling, har bir skill — javondagi alohida papka: ichida shu vazifa uchun yo'l-yo'riq, namunalar, kerak bo'lsa kichik fayllar bor.</p>
<ul>
  <li>Agentga hamma narsani <b>doim</b> kontekstga tiqishtirish o'rniga, u faqat <b>kerakli</b> skillni o'sha topshiriq uchun yuklaydi.</li>
  <li>Bu kontekstni toza saqlaydi (token tejaladi) va agentni shu vazifada <b>aniqroq</b> qiladi.</li>
  <li>Skill — qayta ishlatiladi: bir marta yozasiz, ko'p marta turli topshiriqda chaqiriladi.</li>
</ul>
<p>Masalan hisob-faktura rasmiylashtirish skillida bizning shablon, qoidalar va misollar bor. Claude shu turdagi topshiriq kelganda o'sha skillni ochib, aynan to'g'ri tarzda bajaradi.</p>

<h3>Subagents — yordamchi sub-agentlar</h3>
<p>Katta vazifa ko'p qism talab qilsa, asosiy agent o'zi hammasini ko'tarishi shart emas. U <b>subagent (sub-agent)</b> ochishi mumkin — ya'ni <b>kichik vazifa uchun maxsus, o'z alohida kontekstiga ega yordamchi agent</b> spawn (yaratish) qiladi. Subagent o'z qismini bajaradi va <b>natijani</b> asosiy agentga qaytaradi.</p>
<ul>
  <li>Har bir subagent <b>o'z fokuslangan kontekstida</b> ishlaydi — asosiy agentning xotirasini iflos qilmaydi.</li>
  <li>Asosiy agent bir nechta subagentni topshiriqning turli qismlariga qo'yib, keyin natijalarni <b>birlashtiradi</b>.</li>
  <li>Bu — bo'lib tashla va yut usuli: katta ish kichik, boshqariladigan bo'laklarga bo'linadi.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg">
  <rect width="740" height="280" rx="16" fill="#f7fbfa"/>
  <text x="370" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Asosiy agent → subagentlar → natija</text>
  <rect x="285" y="50" width="170" height="50" rx="12" fill="#0d9488"/>
  <text x="370" y="73" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">ASOSIY AGENT</text>
  <text x="370" y="90" text-anchor="middle" font-family="system-ui" font-size="10" fill="#a7f3e9">vazifani bo'ladi</text>
  <rect x="70" y="160" width="170" height="58" rx="11" fill="#fff" stroke="#0d9488" stroke-width="1.6"/>
  <text x="155" y="184" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">Subagent A</text>
  <text x="155" y="202" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">qidiruv qismi · o'z konteksti</text>
  <rect x="285" y="160" width="170" height="58" rx="11" fill="#fff" stroke="#0d9488" stroke-width="1.6"/>
  <text x="370" y="184" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">Subagent B</text>
  <text x="370" y="202" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">hisob qismi · o'z konteksti</text>
  <rect x="500" y="160" width="170" height="58" rx="11" fill="#fff" stroke="#0d9488" stroke-width="1.6"/>
  <text x="585" y="184" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">Subagent C</text>
  <text x="585" y="202" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">tekshirish · o'z konteksti</text>
  <path d="M330 100 L160 158" stroke="#0d9488" stroke-width="2" marker-end="url(#a43)"/>
  <path d="M370 100 V158" stroke="#0d9488" stroke-width="2" marker-end="url(#a43)"/>
  <path d="M410 100 L580 158" stroke="#0d9488" stroke-width="2" marker-end="url(#a43)"/>
  <path d="M155 218 q40 36 200 36 q160 0 230 -36" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#a43)"/>
  <text x="370" y="270" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">Subagentlar natijani qaytaradi → asosiy agent ularni birlashtirib javob beradi</text>
  <defs><marker id="a43" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker></defs>
</svg>
<figcaption>Asosiy agent katta ishni subagentlarga bo'lib beradi, keyin natijalarni yig'adi</figcaption>
</div>

<h3>Skills va Subagents farqi</h3>
<table class="pk-tbl">
  <tr><th>Skill</th><th>Subagent</th></tr>
  <tr><td>Ko'rsatma + resurs to'plami</td><td>Alohida ishlaydigan yordamchi agent</td></tr>
  <tr><td>Kerak bo'lganda <b>yuklanadi</b></td><td>Kichik vazifaga <b>spawn qilinadi</b></td></tr>
  <tr><td>Buni qanday qilish kerakni beradi</td><td>Bu qismni o'zing bajarni ko'taradi</td></tr>
  <tr><td>Token tejaydi, aniqlik beradi</td><td>Kontekstni bo'lib, parallel ish imkoni</td></tr>
</table>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Oddiy tuyg'u</b>Skill — javondan to'g'ri qo'llanmani olish. Subagent — bir bo'lakni mutaxassis hamkasbga topshirish. Ikkalasi ham bitta maqsadga xizmat qiladi: kontekstni toza saqlash va har bir vazifaga to'g'ri fokus berish.</div></div>

<p>Pastdagi laboratoriyada asosiy agent katta tahlil so'roviga duch keladi, bir qismni <b>subagentga topshiradi</b>, uning natijasini oladi va yakuniy javobni beradi. Keyingi qadamni bosib kuzating.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b><b>Skills</b> — kerak bo'lganda yuklanadigan, qayta ishlatiladigan ko'rsatma + resurs to'plamlari (token tejaydi, aniqlik beradi). <b>Subagents</b> — asosiy agent kichik vazifalar uchun o'z fokuslangan kontekstiga ega yordamchi agentlarni spawn qilib, ularning natijalaridan foydalanadi.</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Asosiy agentga katta so'rov keldi. U bir qismni <b>subagentga</b> topshiradi, natijasini oladi va javob beradi. <b>Keyingi qadam</b>ni bosib kuzating.",
        goal: "O'tgan oydagi 3 ta tanlangan raqobatchining narx siyosatini chuqur tahlil qilib, qisqacha xulosa ber.",
        tools: [
          { name: "subagent_yarat", label: "subagent_yarat", desc: "kichik vazifaga yordamchi agent ochish" },
          { name: "hujjat_yoz", label: "hujjat_yoz", desc: "xulosani saqlash" }
        ],
        steps: [
          { kind: "thought", text: "Bu katta vazifa: 3 raqobatchini alohida o'rganish kerak. Asosiy kontekstni shishirmaslik uchun chuqur qidiruv qismini alohida subagentga topshiraman." },
          { kind: "action", tool: "subagent_yarat", args: "{ \"vazifa\": \"3 raqobatchining o'tgan oydagi narxlarini topib, jadval qil\", \"fokus\": \"faqat narx ma'lumoti\" }" },
          { kind: "observation", text: "{ \"subagent\": \"narx_tahlilchi\", \"natija\": { \"A\": \"o'rtacha 5% pasaytirdi\", \"B\": \"o'zgarmadi\", \"C\": \"aksiya bilan 12% arzonlashtirdi\" } }" },
          { kind: "thought", text: "Subagent toza natija qaytardi. Endi men bu natijani umumlashtirib, qisqacha xulosaga aylantiraman." },
          { kind: "action", tool: "hujjat_yoz", args: "{ \"sarlavha\": \"Raqobatchi narx tahlili\", \"matn\": \"C eng agressiv (12% aksiya), A yengil pasaytirgan (5%), B barqaror.\" }" },
          { kind: "observation", text: "{ \"saqlandi\": true }" },
          { kind: "answer", text: "Tayyor. Subagent yordamida 3 raqobatchini tahlil qildim: C eng agressiv chegirma (12% aksiya) qildi, A narxni 5% pasaytirdi, B esa barqaror qoldi. Xulosa hujjatga saqlandi." }
        ]
      },
      quiz: [
        { q: "Claude'da Skill nima?", o: ["Faqat bitta savol", "Kerak bo'lganda yuklanadigan, qayta ishlatiladigan ko'rsatma + resurs to'plami", "Internetga ulanish", "Subagentning boshqa nomi"], c: 1 },
        { q: "Skill nima uchun foydali?", o: ["U agentni sekinlashtiradi", "Hamma narsani doim kontekstda saqlamasdan, faqat kerakli yo'l-yo'riqni o'sha topshiriqqa yuklaydi — token tejaydi, aniqlik beradi", "U faqat rang beradi", "U internetni tezlashtiradi"], c: 1 },
        { q: "Subagent nima?", o: ["Asosiy agentning paroli", "Asosiy agent kichik vazifa uchun spawn qiladigan, o'z fokuslangan kontekstiga ega yordamchi agent", "Bilim fayli", "Bir tur token"], c: 1 },
        { q: "Subagentlardan foydalanishning asosiy foydasi qaysi?", o: ["Ular hech qachon natija qaytarmaydi", "Har biri o'z fokuslangan kontekstida ishlaydi, asosiy agent natijalarni birlashtiradi", "Ular asosiy agentni o'chiradi", "Ular faqat ingliz tilida ishlaydi"], c: 1 },
        { q: "Skill va Subagent o'rtasidagi to'g'ri farq qaysi?", o: ["Skill — yordamchi agent, Subagent — fayl", "Skill — yuklanadigan ko'rsatma/resurs to'plami; Subagent — alohida ishlaydigan yordamchi agent", "Ikkalasi ham bir xil narsa", "Subagent har doim Skilldan sust"], c: 1 }
      ]
    },

    {
      id: "b4_4",
      title: "MCP — Claude'ni tashqi vositalarga ulash",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Bir narsani tasavvur qiling: har bir gadjetingiz uchun alohida zaryadlovchi kerak edi — telefonga bittasi, planshetga boshqasi, noutbukka yana boshqasi. Keyin <b>USB-C</b> chiqdi: bitta universal ulagich — hamma narsaga to'g'ri keladi. AI dunyosida ham aynan shunday muammo bor edi: har bir agent har bir asbob (GitHub, Slack, fayl tizimi, baza...) bilan o'zicha, alohida ulanardi. <b>MCP</b> mana shu muammoni hal qiladi — u AI uchun USB-C.</p>

<h3>MCP nima?</h3>
<p><b>MCP (Model Context Protocol)</b> — bu <b>ochiq standart</b> (Anthropic taqdim etgan) bo'lib, AI ilovalariga tashqi <b>asboblar va ma'lumot manbalariga</b> MCP serverlar orqali ulanish imkonini beradi. Standart degani — kelishilgan, umumiy til: har kim shu qoidaga ko'ra server yozsa, har qanday MCP'ni qo'llaydigan AI (jumladan Claude) unga ulanadi.</p>
<p>Eng oson tasavvur — <b>universal adapter (USB-C)</b>: bir marta to'g'ri teshik kelishib olingach, har xil asbobni shu teshikka ulay olasiz.</p>

<h3>Client ⇄ Server ⇄ Asbob</h3>
<p>MCP'da uchta tomon bor:</p>
<ul>
  <li><b>Client (mijoz)</b> — AI ilovasi, masalan Claude. U asbobdan foydalanmoqchi.</li>
  <li><b>MCP server</b> — adapter. U bir tomondan Claude bilan standart tilda gaplashadi, ikkinchi tomondan haqiqiy asbob/ma'lumotni biladi.</li>
  <li><b>Asbob yoki ma'lumot manbai</b> — fayl tizimi, GitHub, Slack, ma'lumotlar bazasi va h.k.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="760" height="250" rx="16" fill="#f7fbfa"/>
  <text x="380" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">MCP — AI uchun USB-C: client ⇄ server ⇄ asbob</text>
  <rect x="50" y="90" width="160" height="70" rx="13" fill="#0d9488"/>
  <text x="130" y="120" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">CLIENT</text>
  <text x="130" y="140" text-anchor="middle" font-family="system-ui" font-size="11" fill="#a7f3e9">Claude (AI ilova)</text>
  <rect x="300" y="90" width="160" height="70" rx="13" fill="#fff" stroke="#0d9488" stroke-width="2.4"/>
  <text x="380" y="120" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#0f766e">MCP SERVER</text>
  <text x="380" y="140" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">universal adapter</text>
  <g font-family="system-ui">
    <rect x="560" y="56" width="150" height="34" rx="9" fill="#e7f6ee" stroke="#bfe6d0"/><text x="635" y="78" text-anchor="middle" font-size="11.5" fill="#15803d">📁 Fayl tizimi</text>
    <rect x="560" y="98" width="150" height="34" rx="9" fill="#eef2ff" stroke="#c7d2fe"/><text x="635" y="120" text-anchor="middle" font-size="11.5" fill="#4338ca">🐙 GitHub</text>
    <rect x="560" y="140" width="150" height="34" rx="9" fill="#fff7ed" stroke="#fed7aa"/><text x="635" y="162" text-anchor="middle" font-size="11.5" fill="#b45309">💬 Slack</text>
    <rect x="560" y="182" width="150" height="34" rx="9" fill="#e0f2fe" stroke="#bae6fd"/><text x="635" y="204" text-anchor="middle" font-size="11.5" fill="#0369a1">🗄 Ma'lumotlar bazasi</text>
  </g>
  <path d="M210 118 H296" stroke="#0d9488" stroke-width="2.6" marker-end="url(#a44)"/>
  <path d="M296 132 H214" stroke="#94a3b8" stroke-width="2" marker-end="url(#a44b)"/>
  <text x="253" y="108" text-anchor="middle" font-family="system-ui" font-size="10" fill="#0f766e">standart til</text>
  <path d="M460 110 L556 73" stroke="#0d9488" stroke-width="2" marker-end="url(#a44)"/>
  <path d="M460 122 L556 115" stroke="#0d9488" stroke-width="2" marker-end="url(#a44)"/>
  <path d="M460 134 L556 157" stroke="#0d9488" stroke-width="2" marker-end="url(#a44)"/>
  <path d="M460 146 L556 199" stroke="#0d9488" stroke-width="2" marker-end="url(#a44)"/>
  <text x="380" y="236" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">Claude server bilan standart tilda gaplashadi; server haqiqiy asboblarga ulanadi</text>
  <defs>
    <marker id="a44" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
    <marker id="a44b" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker>
  </defs>
</svg>
<figcaption>MCP server — Claude bilan haqiqiy asboblar orasidagi universal adapter</figcaption>
</div>

<h3>Bu amalda qanday ishlaydi?</h3>
<p>Foydalanuvchi sifatida jarayon sodda:</p>
<ol>
  <li>Kerakli <b>MCP serverni tanlaysiz</b> (masalan, GitHub serveri yoki fayl-tizimi serveri).</li>
  <li>Uni Claude'ga <b>ulaysiz</b> (yoqasiz).</li>
  <li><b>Ruxsat berasiz</b> — Claude qaysi narsalarga (qaysi papka, qaysi repozitoriy) tegishi mumkinligini siz nazorat qilasiz.</li>
  <li>Shundan so'ng agent <b>yangi asboblarni ko'radi</b> — ular uning quroliga qo'shiladi.</li>
  <li>Topshiriq kelganda agent <b>o'sha asbobni ishlatadi</b> (masalan, faylni o'qiydi yoki GitHub'ga issue ochadi).</li>
</ol>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Ruxsat — siz nazoratdasiz</b>MCP server agentga <b>haqiqiy</b> kuch beradi (fayl o'chirish, xat yuborish, baza o'zgartirish). Shuning uchun faqat <b>ishonchli</b> serverlarni ulang va ruxsatni eng zarur narsalar bilan cheklang. Hammasiga ruxsat — bu xavf.</div></div>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Nega standart muhim?</b>MCP'gacha har bir asbob har bir AI bilan alohida ulanishi kerak edi — bu ko'p mehnat. Endi server bir marta yoziladi va <b>MCP'ni qo'llaydigan har qanday client</b> undan foydalana oladi. Ochiq standart shuning uchun butun ekotizimni tezlashtiradi.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b><b>MCP (Model Context Protocol)</b> — Anthropic taqdim etgan <b>ochiq standart</b>, AI uchun USB-C. U <b>client (Claude) ⇄ MCP server ⇄ asbob/ma'lumot</b> orqali ishlaydi. Siz serverni yoqasiz, ruxsat berasiz — va agent yangi asboblarni ko'rib, topshiriqda ishlatadi.</span></div>`,
      sim: {
        type: "order",
        intro: "Claude'ga yangi MCP serverni ulash va undan foydalanish qadamlarini <b>to'g'ri tartibga</b> keltiring — strelkalar bilan joylashtiring va Tartibni tekshirishni bosing.",
        steps: [
          "Kerakli MCP serverni tanlash",
          "Serverni Claude'ga ulash",
          "Ruxsatlarni berish",
          "Agent yangi asboblarni ko'radi",
          "Agent asbobni topshiriqda ishlatadi"
        ]
      },
      quiz: [
        { q: "MCP (Model Context Protocol) nima?", o: ["Yangi til modeli", "Anthropic taqdim etgan ochiq standart — AI'ni tashqi asbob va ma'lumotga MCP serverlar orqali ulaydi", "Bir tur token", "Faqat Slack'ga ulanish usuli"], c: 1 },
        { q: "MCP uchun eng to'g'ri o'xshatma qaysi?", o: ["Eski kabel", "AI uchun universal adapter — USB-C", "Antivirus", "Internet brauzeri"], c: 1 },
        { q: "MCP'da uchta tomon to'g'ri qaysi?", o: ["Client (Claude) ⇄ MCP server ⇄ asbob/ma'lumot", "Faqat Claude va internet", "Telefon, kabel, zaryad", "Skill, Subagent, Project"], c: 0 },
        { q: "MCP serverning vazifasi nima?", o: ["Faqat rasm chizish", "Client bilan standart tilda gaplashib, haqiqiy asbob/ma'lumotga ulanadigan adapter bo'lish", "Tokenni ko'paytirish", "Internetni tezlashtirish"], c: 1 },
        { q: "MCP serverni ulashda nimaga e'tibor berish kerak?", o: ["Hech narsaga, hammasiga to'liq ruxsat bering", "Faqat ishonchli serverlarni ulang va ruxsatni zarur narsalar bilan cheklang", "Serverni internetga ulamang", "Ruxsat umuman so'ralmaydi"], c: 1 }
      ]
    },

    {
      id: "b4_5",
      title: "Claude Code va Agent SDK — kod yozadigan agent",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Aytaylik, siz kichik veb-sayt yozdingiz, lekin tugma bosilganda xato chiqyapti. Avval kodni o'zingiz qatorma-qator tekshirib, sababini topib, tuzatib, qaytadan sinab ko'rishingiz kerak edi — soatlar ketardi. Endi tasavvur qiling, terminalga bu xatoni top va tuzat deb yozasiz, va agent o'zi faylni o'qiydi, xatoni topadi, tuzatadi va testni ishga tushirib tekshiradi. Mana bu — <b>Claude Code</b>: kod ustida ko'p qadamli ishlaydigan agent.</p>

<h3>Claude Code — terminaldagi kod agenti</h3>
<p><b>Claude Code</b> — bu <b>terminal yoki IDE'da ishlaydigan agentik dasturlash quroli</b>. Oddiy chatbotdan farqi shuki, u <b>haqiqiy harakat qiladi</b>:</p>
<ul>
  <li><b>Fayllarni o'qiydi</b> — loyihangizdagi kodni ko'radi.</li>
  <li><b>Fayllarni tahrirlaydi</b> — kodni o'zgartiradi, yangi fayl yozadi.</li>
  <li><b>Buyruqlarni ishga tushiradi</b> — test, build, dasturni yurgizadi.</li>
  <li><b>Ko'p qadamda ishlaydi</b> — bitta katta vazifani bir necha bosqichda, halqa bilan oxirigacha olib boradi.</li>
</ul>
<p>Ya'ni Claude Code — bu gapiradigan yordamchi emas, balki <b>klaviaturasi va qo'li bor</b> dasturchi-agent. Siz unga maqsad berasiz, u esa o'qib, o'ylab, tahrirlab, sinab — natijaga boradi.</p>

<div class="pk-fig">
<svg viewBox="0 0 740 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="740" height="240" rx="16" fill="#f7fbfa"/>
  <text x="370" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Claude Code halqasi: o'qi → top → tahrirla → sinab ko'r</text>
  <rect x="40" y="70" width="140" height="56" rx="11" fill="#fff" stroke="#0d9488" stroke-width="1.8"/>
  <text x="110" y="94" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">📖 Faylni o'qi</text>
  <text x="110" y="112" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">kodni ko'radi</text>
  <rect x="215" y="70" width="140" height="56" rx="11" fill="#fff7ed" stroke="#fed7aa"/>
  <text x="285" y="94" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#b45309">🐞 Xatoni top</text>
  <text x="285" y="112" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">sababni aniqlaydi</text>
  <rect x="390" y="70" width="140" height="56" rx="11" fill="#fff" stroke="#0d9488" stroke-width="1.8"/>
  <text x="460" y="94" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">✏ Tahrirla</text>
  <text x="460" y="112" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">kodni tuzatadi</text>
  <rect x="565" y="70" width="140" height="56" rx="11" fill="#e7f6ee" stroke="#bfe6d0"/>
  <text x="635" y="94" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#15803d">▶ Testni yur</text>
  <text x="635" y="112" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">natijani tekshiradi</text>
  <path d="M180 98 H211" stroke="#0d9488" stroke-width="2.2" marker-end="url(#a45)"/>
  <path d="M355 98 H386" stroke="#0d9488" stroke-width="2.2" marker-end="url(#a45)"/>
  <path d="M530 98 H561" stroke="#0d9488" stroke-width="2.2" marker-end="url(#a45)"/>
  <path d="M635 126 q0 50 -262 50 q-263 0 -263 -50" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#a45)"/>
  <text x="370" y="200" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">Test o'tmasa — halqa qaytadi va yana tuzatadi (oxirigacha)</text>
  <defs><marker id="a45" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker></defs>
</svg>
<figcaption>Claude Code — fayllarni o'qib-tahrirlab, buyruq ishga tushirib, ko'p qadamda kod yozadi</figcaption>
</div>

<h3>Claude Agent SDK — o'z agentingizni qurish to'plami</h3>
<p>Agar siz Claude Code'dan ham nariga o'tib, <b>o'zingizning maxsus agentingizni</b> qurmoqchi bo'lsangiz — <b>Claude Agent SDK</b> bor. SDK (Software Development Kit) — bu dasturchilar uchun <b>asboblar to'plami</b>. (Eslatma: Claude Agent SDK avval Claude Code SDK deb atalardi — eski maqolalarda shu nomni uchratishingiz mumkin.) Claude Agent SDK bilan siz kod yozib:</p>
<ul>
  <li><b>Halqani</b> (loop) boshqarasiz — agent qachon to'xtashi, qachon yana o'ylashi;</li>
  <li><b>Asboblarni</b> (tools) belgilaysiz — agentga qanday qurollar berilishi;</li>
  <li><b>Kontekstni</b> boshqarasiz — nima xotirada qoladi, nima tashlanadi.</li>
</ul>
<p>Sodda qilib: <b>Claude Code — tayyor mahsulot</b> (terminalda ishlatasiz); <b>Agent SDK — qurilish to'plami</b> (o'z agentingizni yozasiz). Birinchisi foydalanuvchiga, ikkinchisi dasturchi-quruvchiga.</p>

<div class="pk-ex"><div class="pk-good"><b>Claude Code</b> — menga tayyor kod-agent kerak, terminalimda ishlasin → o'rnatasiz va ishlatasiz.</div><div class="pk-bad"><b>Agent SDK</b> — bu tayyor mahsulot emas; u bilan <b>o'zingiz</b> agent dasturini yozasiz (kod talab qiladi).</div></div>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Boshlovchiga maslahat</b>Agar siz hali kod yozmasangiz — Claude Code'ni kuzatuvchi rejimda ham sinab ko'rishingiz mumkin: u nima qilayotganini har qadamda tasdiqlatib boradi. Agent SDK esa allaqachon dasturlashni biladiganlar uchun keyingi bosqich.</div></div>

<h3>Haqiqiy kod: Agent SDK halqani o'zi boshqaradi</h3>
<p>2-bosqichda agent halqasini <code>while</code> bilan <b>qo'lda</b> yozgandik. Agent SDK'da esa <b>tool_runner</b> bor — u halqani (model chaqirdi → asbobni bajardi → natijani qaytardi → takror) <b>o'zi</b> aylantiradi. Siz faqat asboblarni yozasiz (Python):</p>
<div class="pk-code">
  <div class="pk-code-bar"><span class="d r"></span><span class="d y"></span><span class="d g"></span><span class="lang">Python · Claude Agent SDK — tool_runner</span></div>
  <pre><code>import anthropic
from anthropic import beta_tool

client = anthropic.Anthropic()

<span class="c"># Asbob — oddiy funksiya. Sxema imzo va izohdan AVTOMATIK tuziladi</span>
@beta_tool
def ob_havo_ol(shahar: str) -&gt; str:
    """Berilgan shahar uchun hozirgi havo haroratini qaytaradi.

    Args:
        shahar: Shahar nomi, masalan: Toshkent.
    """
    return f"{shahar}da +28 daraja, ochiq"

<span class="c"># tool_runner HALQANI O'ZI boshqaradi — biz while yozmaymiz</span>
runner = client.beta.messages.tool_runner(
    model="claude-opus-4-8",
    max_tokens=1024,
    tools=[ob_havo_ol],
    messages=[{"role": "user", "content": "Toshkentda havo qanday?"}],
)

<span class="c"># Har bosqichda model javobi keladi; asbob chaqiruvi tugaguncha aylanadi</span>
for xabar in runner:
    print(xabar)</code></pre>
</div>
<p>Solishtiring: <b>qo'lda halqa</b> (2-bosqich) — to'liq nazorat, lekin ko'proq kod; <b>tool_runner</b> — kam kod, tez. Ikkalasi ham bir xil naqsh: <i>Fikr → Harakat → Kuzatuv</i>. Murakkab ishlarda (tasdiq nuqtasi, maxsus jurnal) qo'lda halqa, oddiy ishlarda tool_runner qulay.</p>

<p>Pastdagi laboratoriyada kod-agent xatoli faylni o'qiydi, muammoni topadi, tuzatadi va testni ishga tushiradi. Har bir <b>harakatdan keyin kuzatuv</b> keladi — Keyingi qadamni bosib kuzating.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b><b>Claude Code</b> — terminal/IDE'da ishlaydigan agentik kod quroli: fayllarni o'qiydi, tahrirlaydi, buyruq ishga tushiradi va ko'p qadamda vazifani bajaradi. <b>Claude Agent SDK</b> — bu Claude ustida <b>o'z agentingizni</b> qurish to'plami (halqa, asboblar, kontekstni boshqarish).</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Kod-agent xatoli faylni o'qiydi, muammoni topadi, tuzatadi va testni ishga tushiradi. Har <b>harakatdan keyin kuzatuv</b> keladi. <b>Keyingi qadam</b>ni bosib kuzating.",
        goal: "login.js faylida tugma bosilganda chiqayotgan xatoni top va tuzat, keyin testni ishga tushir.",
        tools: [
          { name: "fayl_oqi", label: "fayl_oqi", desc: "fayl mazmunini o'qish" },
          { name: "fayl_tahrirla", label: "fayl_tahrirla", desc: "kodga o'zgartirish kiritish" },
          { name: "test_yur", label: "test_yur", desc: "testlarni ishga tushirish" }
        ],
        steps: [
          { kind: "thought", text: "Avval xatoni ko'rish uchun login.js faylini o'qib chiqaman." },
          { kind: "action", tool: "fayl_oqi", args: "{ \"fayl\": \"login.js\" }" },
          { kind: "observation", text: "{ \"satr_14\": \"if (parol = kiritilgan) {\", \"izoh\": \"'=' tenglashtirish o'rniga ishlatilgan\" }" },
          { kind: "thought", text: "Xatoni topdim: 14-satrda solishtirish uchun '==' kerak, lekin '=' (qiymat berish) yozilgan. Buni tuzataman." },
          { kind: "action", tool: "fayl_tahrirla", args: "{ \"fayl\": \"login.js\", \"satr\": 14, \"yangi\": \"if (parol == kiritilgan) {\" }" },
          { kind: "observation", text: "{ \"tahrirlandi\": true }" },
          { kind: "thought", text: "Tuzatish kiritildi. Endi haqiqatan ishlayotganini tekshirish uchun testni yuraman." },
          { kind: "action", tool: "test_yur", args: "{ \"fayl\": \"login.test.js\" }" },
          { kind: "observation", text: "{ \"o'tdi\": 5, \"yiqildi\": 0, \"holat\": \"yashil\" }" },
          { kind: "answer", text: "Tuzatdim! login.js 14-satrida '=' o'rniga '==' bo'lishi kerak edi — solishtirish noto'g'ri yozilgan ekan. O'zgartirishdan so'ng barcha 5 ta test muvaffaqiyatli o'tdi." }
        ]
      },
      quiz: [
        { q: "Claude Code nima?", o: ["Oddiy chatbot", "Terminal/IDE'da ishlaydigan agentik kod quroli — fayllarni o'qiydi, tahrirlaydi, buyruq ishga tushiradi, ko'p qadamda ishlaydi", "Bilim fayli", "MCP serverning nomi"], c: 1 },
        { q: "Claude Code'ni oddiy chatbotdan nimasi ajratadi?", o: ["U chiroyliroq gapiradi", "U haqiqiy harakat qiladi: kod o'qiydi, tahrirlaydi va buyruqlarni ishga tushiradi", "U faqat ingliz tilida", "Hech qanday farqi yo'q"], c: 1 },
        { q: "Claude Agent SDK nima uchun?", o: ["Tayyor terminal quroli sifatida ishlatish uchun", "Claude ustida o'z maxsus agentingizni qurish (halqa, asboblar, kontekstni boshqarish) uchun", "Token sotib olish uchun", "Internetga ulanish uchun"], c: 1 },
        { q: "Claude Code va Agent SDK orasidagi to'g'ri farq qaysi?", o: ["Ikkalasi ham bir xil", "Claude Code — tayyor mahsulot (ishlatasiz); Agent SDK — qurilish to'plami (o'zingiz agent yozasiz)", "Agent SDK — chatbot, Claude Code — fayl", "Claude Code kod yoza olmaydi"], c: 1 },
        { q: "Laboratoriyadagi kod-agent nega faylni tuzatgandan keyin testni ishga tushirdi?", o: ["Tasodifan", "Tuzatish haqiqatan ishlayotganini tekshirish uchun", "Test eng oson amal bo'lgani uchun", "Foydalanuvchi shuni talab qilgani uchun"], c: 1 }
      ]
    },

    {
      id: "b4_6",
      title: "Brauzer/kompyuter agentlari va framework manzarasi",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling, sizga kerakli ma'lumot eski bir saytda bor, lekin u saytda hech qanday API yo'q — ya'ni dastur orqali ulanish imkoni yo'q. Inson bo'lsangiz, oddiygina brauzerni ochib, sichqoncha bilan bosib, ma'lumotni olardingiz. Claude ham aynan shuni qila oladi: ekranga qarab, sichqoncha va klaviatura bilan ishlay oladi. Bu — <b>computer use</b> (kompyuterdan foydalanish). Bu darsda shuni va eng muhim savolni — <b>menga qaysi vosita kerak?</b> — ko'rib chiqamiz.</p>

<h3>Computer use / brauzer agentlari</h3>
<p><b>Computer use</b> — Claude'ning kompyuter yoki brauzerni <b>ekran rasmlariga (screenshot) qarab</b> boshqarish qobiliyati. U ekranni ko'radi, keyin <b>sichqoncha va klaviatura</b> harakatlarini chiqaradi: bu yerga bos, bu yerga yoz, pastga aylantir.</p>
<ul>
  <li><b>Foydasi:</b> API bo'lmaganda ham ishlaydi — har qanday saytda, har qanday dasturda, xuddi odam kabi.</li>
  <li><b>Kamchiligi:</b> <b>sekinroq</b> (har qadamda ekranni ko'rib o'ylaydi) va <b>nazorat talab qiladi</b> — noto'g'ri tugmani bosib qo'yishi mumkin, shuning uchun kuzatib turish kerak.</li>
</ul>
<p>Demak computer use — oxirgi chora: API yoki MCP bor bo'lsa, ularni afzal ko'ring (tez va aniq); ular bo'lmaganda computer use qutqaradi.</p>

<div class="pk-fig">
<svg viewBox="0 0 740 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="740" height="200" rx="16" fill="#f7fbfa"/>
  <text x="370" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Computer use halqasi: ko'r → o'yla → harakat qil</text>
  <rect x="70" y="70" width="160" height="60" rx="12" fill="#e0f2fe" stroke="#bae6fd"/>
  <text x="150" y="96" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#0369a1">📷 Ekranni ko'r</text>
  <text x="150" y="114" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">screenshot</text>
  <rect x="290" y="70" width="160" height="60" rx="12" fill="#d6f2ed" stroke="#5eead4"/>
  <text x="370" y="96" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#0f766e">🤔 O'yla</text>
  <text x="370" y="114" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">qayerga bosish kerak?</text>
  <rect x="510" y="70" width="160" height="60" rx="12" fill="#fff7ed" stroke="#fed7aa"/>
  <text x="590" y="96" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#b45309">🖱 Harakat qil</text>
  <text x="590" y="114" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">bos · yoz · aylantir</text>
  <path d="M230 100 H286" stroke="#0d9488" stroke-width="2.4" marker-end="url(#a46)"/>
  <path d="M450 100 H506" stroke="#0d9488" stroke-width="2.4" marker-end="url(#a46)"/>
  <path d="M590 130 q0 38 -220 38 q-220 0 -220 -38" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#a46)"/>
  <text x="370" y="186" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">Sekinroq + nazorat kerak — API/MCP bo'lmaganda ishlatiladi</text>
  <defs><marker id="a46" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker></defs>
</svg>
<figcaption>Computer use — odam kabi ekranni ko'rib, sichqoncha/klaviatura bilan ishlaydi</figcaption>
</div>

<h3>Framework manzarasi — kodda agent qurish</h3>
<p>Agar siz dasturchi bo'lsangiz va kodda agent qurmoqchi bo'lsangiz, bir nechta <b>framework</b> (qurilma-asos) bor:</p>
<ul>
  <li><b>Claude Agent SDK</b> — Anthropic'ning rasmiy to'plami; Claude ustida agent qurish uchun.</li>
  <li><b>LangGraph</b> — agent oqimini graf (tugunlar va o'tishlar) ko'rinishida quradi; murakkab, ko'p shartli oqimlar uchun kuchli.</li>
  <li><b>CrewAI</b> — bir nechta agentni jamoa qilib, har biriga rol berib ishlatishga moslangan.</li>
  <li><b>OpenAI Agents SDK</b> — OpenAI ekotizimida agent qurish to'plami.</li>
</ul>
<p>Qaysi birini tanlash — <b>ehtiyojga</b> bog'liq. Lekin eng muhim narsani yodda tuting: <b>boshlovchi uchun framework shart emas</b>. No-code (1-dars) yoki to'g'ridan-to'g'ri Claude.ai ko'pincha yetarli. Framework — vazifa kod talab qilganda, takrorlanadigan va murakkab bo'lganda kerak bo'ladi.</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Eng kuchli emas, eng mos</b>Yangi boshlovchilar tez-tez eng murakkab frameworkdan boshlay deb xato qiladi. To'g'ri yo'l — <b>eng sodda yetarli yechim</b>dan boshlash: avval no-code yoki Claude.ai, ehtiyoj o'sgandagina kod/frameworkga o'tish.</div></div>

<h3>Qachon nima kerak?</h3>
<table class="pk-tbl">
  <tr><th>Vaziyat</th><th>To'g'ri tanlov</th></tr>
  <tr><td>Oddiy avtomatlashtirish, kod bilmaysiz</td><td>No-code (Zapier, n8n, Make)</td></tr>
  <tr><td>Suhbat, bilim bazasi, tezkor natija</td><td>Claude.ai (Projects, Artifacts)</td></tr>
  <tr><td>Kod ustida ishlash</td><td>Claude Code</td></tr>
  <tr><td>Maxsus, murakkab kod-agent</td><td>Framework (Claude Agent SDK, LangGraph, CrewAI)</td></tr>
  <tr><td>API yo'q, faqat sayt/ekran orqali</td><td>Computer use (ehtiyot bo'lib)</td></tr>
</table>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Oddiy qoida</b>Kod yozmasdan hal bo'ladimi? deb so'rang. Ha bo'lsa — no-code yoki Claude.ai. Yo'q bo'lsa — Claude Code yoki framework. API umuman yo'qmi — shundagina computer use. Shu uchta savol sizni deyarli har doim to'g'ri yo'lga soladi.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b><b>Computer use</b> — Claude ekranga qarab sichqoncha/klaviatura bilan ishlaydi (API yo'qda foydali, lekin sekin va nazorat kerak). Kodda agent qurish uchun frameworklar bor: <b>Claude Agent SDK, LangGraph, CrewAI, OpenAI Agents SDK</b>. Boshlovchi uchun esa no-code yoki Claude.ai ko'pincha yetarli — eng sodda yetarli yechimdan boshlang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi vazifalar uchun <b>no-code/Claude.ai yetarli</b>mi, yoki <b>kod/framework kerak</b>mi? To'g'ri ajrating.",
        groups: ["no-code yetarli", "kod/framework kerak"],
        items: [
          { name: "Yangi xat kelsa Google Sheets'ga qator qo'shish — oddiy trigger", answer: "no-code yetarli", hint: "Oddiy agar X → Y — Zapier/Make yetadi." },
          { name: "Mijozlarga bilim bazasi asosida suhbatda javob beradigan yordamchi", answer: "no-code yetarli", hint: "Claude.ai Projects yoki Dify/Flowise yetarli." },
          { name: "Mavjud katta kod loyihasida bir nechta faylni o'zgartiruvchi maxsus agent", answer: "kod/framework kerak", hint: "Murakkab kod-ish — Claude Code / framework." },
          { name: "Har biri rolga ega bir nechta agentni jamoa qilib parallel ishlatish", answer: "kod/framework kerak", hint: "Ko'p agentli, rolli tizim — CrewAI kabi framework." },
          { name: "Reklama matnini o'zbekcha samimiy ohangda yozdirish", answer: "no-code yetarli", hint: "Bitta-ikki qadamli matn ishi — Claude.ai yetadi." },
          { name: "Murakkab, ko'p shartli oqimni grafda qurib, kodda boshqarish", answer: "kod/framework kerak", hint: "Graf-oqim, kod nazorati — LangGraph kabi framework." }
        ]
      },
      quiz: [
        { q: "Computer use (kompyuterdan foydalanish) nima?", o: ["Claude'ning yangi parol turi", "Claude ekran rasmiga qarab, sichqoncha va klaviatura bilan kompyuter/brauzerni boshqarishi", "Faqat token o'lchovi", "Bir tur bilim fayli"], c: 1 },
        { q: "Computer use qachon eng foydali?", o: ["Har doim, hamma vazifada", "API yoki MCP bo'lmaganda — odam kabi sayt/ekran orqali ishlash kerak bo'lganda", "Faqat matn yozishda", "Hech qachon"], c: 1 },
        { q: "Computer use'ning kamchiligi nima?", o: ["U juda tez va xatosiz", "Sekinroq ishlaydi va nazorat talab qiladi (noto'g'ri bosishi mumkin)", "U faqat o'zbek tilida ishlaydi", "Hech qanday kamchiligi yo'q"], c: 1 },
        { q: "Quyidagilardan qaysilari kodda agent qurish frameworklari?", o: ["Claude Agent SDK, LangGraph, CrewAI, OpenAI Agents SDK", "Word, Excel, PowerPoint", "Gmail, Slack, Telegram", "Faqat Zapier"], c: 0 },
        { q: "Boshlovchi uchun eng to'g'ri maslahat qaysi?", o: ["Doim eng murakkab frameworkdan boshlash", "Eng sodda yetarli yechimdan boshlash — ko'pincha no-code yoki Claude.ai yetadi", "Faqat computer use ishlatish", "Hech qachon kodga o'tmaslik"], c: 1 }
      ]
    }

  ]
});
