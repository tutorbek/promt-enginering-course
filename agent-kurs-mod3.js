/* ============================================================
   Oson Studio — AI Agentlar kursi (3-bosqich: Agent dizayn naqshlari)
   Format: window.AGENT_COURSE.modules.push({ id, title, lessons:[...] })
   - Lesson shape: { id, title, read, html, sim?, quiz:[{q,o:[4],c}] }
   - sim turlari: "agentloop" | "classify" | "order"
   - Ohang: ustoz tilida, har dars real muammodan boshlanadi.
   - Manba g'oyasi: Anthropic — "Building Effective Agents".
   ============================================================ */
window.AGENT_COURSE.modules.push({
  id: "b3",
  title: "Agent dizayn naqshlari",
  lessons: [
    {
      id: "b3_1",
      title: "Workflow naqshlari: zanjir, yo'naltirish, parallel",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling: do'koningizga kuniga 200 ta mijoz xati keladi — kimdir narxni so'raydi, kimdir shikoyat yozadi, kimdir buyurtmasini bekor qilmoqchi. Siz buni AI bilan avtomatlashtirmoqchisiz. Bitta ulkan promptga hammasini hal qil deb yozsangiz — chalkashlik chiqadi. Professional muhandis bu yerda <b>naqsh</b> (pattern) tanlaydi: vazifani toza, oldindan ma'lum <b>qadamlarga</b> bo'ladi. Mana shu — <b>workflow</b>. Bu darsda eng ko'p ishlatiladigan uchta workflow naqshini o'rganamiz.</p>

<h3>Avval: workflow va agent farqi</h3>
<p>Anthropic'ning Building Effective Agents qo'llanmasi muhim chegara chizadi:</p>
<ul>
  <li><b>Workflow</b> — modelni <b>oldindan yozilgan kod yo'llari</b> boshqaradi. Qadamlar ketma-ketligini <i>siz</i> belgilab qo'ygansiz. Natija bashoratli, arzon, sinash oson.</li>
  <li><b>Agent</b> — model <b>o'z jarayonini o'zi boshqaradi</b>: qaysi qadamni qachon qilishni dinamik tanlaydi.</li>
</ul>
<p>Oltin qoida bitta: <b>ishni bajaradigan eng sodda naqshni tanlang</b>. Murakkablik faqat aniq foyda berganda qo'shiladi. Ko'p vazifa uchun to'liq avtonom agent emas, oddiy workflow yetarli.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Nega naqsh?</b>Naqsh — bu ko'p marta sinalgan, ishonchli tayyor sxema. Har safar noldan o'ylamaysiz: vazifa shaklini ko'rib, mos naqshni qo'yasiz. Quyidagi uchtasi — barcha murakkab tizimlarning g'ishtchalari.</div></div>

<h3>1. Zanjir (prompt chaining) — qadamma-qadam</h3>
<p>Vazifani <b>ketma-ket bosqichlarga</b> bo'lasiz: har bir LLM chaqiruvi natijasi <b>keyingisiga kiritma</b> bo'lib uzatiladi. Bir katta, chalkash ishni bitta promptda so'rash o'rniga — zanjir har qadamni <b>soddalashtiradi</b>, shuning uchun sifat oshadi.</p>
<p>Masalan: <code>maqola yozish</code> → 1) reja tuz → 2) reja asosida matn yoz → 3) matnni qisqartir va sayqalla. Har bosqich oldingisining chiqishini oladi.</p>

<div class="pk-fig">
<svg viewBox="0 0 760 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="760" height="150" rx="16" fill="#f7fbfa"/>
  <text x="380" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Zanjir — natija keyingi qadamga oqib o'tadi</text>
  <rect x="40" y="58" width="120" height="50" rx="11" fill="#0d9488"/><text x="100" y="80" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="700" fill="#fff">LLM 1</text><text x="100" y="97" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#a7f3e9">reja tuz</text>
  <rect x="320" y="58" width="120" height="50" rx="11" fill="#0d9488"/><text x="380" y="80" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="700" fill="#fff">LLM 2</text><text x="380" y="97" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#a7f3e9">matn yoz</text>
  <rect x="600" y="58" width="120" height="50" rx="11" fill="#0d9488"/><text x="660" y="80" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="700" fill="#fff">LLM 3</text><text x="660" y="97" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#a7f3e9">sayqalla</text>
  <path d="M160 83 H316" stroke="#0d9488" stroke-width="2.4" marker-end="url(#c1)"/>
  <path d="M440 83 H596" stroke="#0d9488" stroke-width="2.4" marker-end="url(#c1)"/>
  <text x="238" y="74" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">reja →</text>
  <text x="518" y="74" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">qoralama →</text>
  <text x="380" y="132" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">har bosqich soddalashadi → umumiy sifat oshadi</text>
  <defs><marker id="c1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker></defs>
</svg>
<figcaption>Zanjir: bitta katta ish → bir necha kichik, ketma-ket bosqich</figcaption>
</div>

<h3>2. Yo'naltirish (routing) — to'g'ri yo'lga ulash</h3>
<p>Avval kiruvchi so'rovni <b>tasniflaysiz</b> (qaysi turga tegishli?), so'ng uni <b>maxsus tayyorlangan yo'lga</b> (alohida prompt yoki model) yuborasiz. Bu — telefon operatorining 1 — savdo, 2 — texnik yordam menyusiga o'xshaydi.</p>
<p>Mijoz xati misolida: narx so'rovi → narx bo'limi prompti; shikoyat → empatik javob prompti; texnik nosozlik → texnik yordam prompti. Har yo'l o'z ishiga <b>ixtisoslashgani</b> uchun har biri yaxshiroq javob beradi — bitta hammabop prompt o'rniga.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="230" rx="16" fill="#f7fbfa"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Yo'naltirish — tasnifla, keyin to'g'ri yo'lga yubor</text>
  <rect x="40" y="92" width="120" height="48" rx="11" fill="#e2e8f0"/><text x="100" y="113" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#334155">Kiruvchi xat</text><text x="100" y="129" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">(noma'lum tur)</text>
  <rect x="240" y="86" width="130" height="60" rx="12" fill="#f59e0b"/><text x="305" y="112" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#fff">TASNIFLOVCHI</text><text x="305" y="130" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#fff7ed">qaysi tur?</text>
  <path d="M160 116 H236" stroke="#94a3b8" stroke-width="2.2" marker-end="url(#r1)"/>
  <rect x="470" y="44" width="210" height="40" rx="9" fill="#fff" stroke="#0d9488"/><text x="575" y="69" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">Narx bo'limi prompti</text>
  <rect x="470" y="96" width="210" height="40" rx="9" fill="#fff" stroke="#0d9488"/><text x="575" y="121" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">Shikoyat (empatik) prompti</text>
  <rect x="470" y="148" width="210" height="40" rx="9" fill="#fff" stroke="#0d9488"/><text x="575" y="173" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#0f766e">Texnik yordam prompti</text>
  <path d="M370 102 C420 80 430 70 466 64" stroke="#0d9488" stroke-width="2" fill="none" marker-end="url(#r2)"/>
  <path d="M370 116 H466" stroke="#0d9488" stroke-width="2" marker-end="url(#r2)"/>
  <path d="M370 130 C420 152 430 162 466 168" stroke="#0d9488" stroke-width="2" fill="none" marker-end="url(#r2)"/>
  <text x="360" y="214" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">har yo'l o'z ishiga ixtisoslashgan → aniqroq javob</text>
  <defs>
    <marker id="r1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker>
    <marker id="r2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
  </defs>
</svg>
<figcaption>Yo'naltirish: bitta tasniflovchi → bir necha ixtisoslashgan yo'l</figcaption>
</div>

<h3>3. Parallel (parallelization) — bir vaqtda</h3>
<p>Ba'zan ishni <b>bo'laklarga bo'lib, bir vaqtda</b> bajarish mumkin. Ikki asosiy ko'rinishi bor:</p>
<ul>
  <li><b>Bo'lakcha (sectioning):</b> vazifani <b>mustaqil qismlarga</b> bo'lasiz va hammasini parallel ishlatasiz. Mas: uzun hujjatning 5 bobini 5 ta chaqiruv bir vaqtda jamlaydi → keyin birlashtirasiz. Tezroq tugaydi.</li>
  <li><b>Ovoz berish (voting):</b> bir <b>xil</b> vazifani bir necha marta mustaqil ishlatasiz va natijalarni <b>jamlaysiz</b> (mas: 3 javobdan ko'pchilik tanlagani). Bu ishonchlilikni oshiradi — bitta xato javob ovozda yutqazadi.</li>
</ul>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Qachon qaysi naqsh?</b><b>Zanjir</b> — ish tabiiy ketma-ket bosqichlarga bo'linganda. <b>Yo'naltirish</b> — kiruvchi so'rov turlari aniq farq qilganda. <b>Parallel</b> — qismlar bir-biriga bog'liq bo'lmaganda (tezlik) yoki ishonchlilik kerak bo'lganda (ovoz berish).</div></div>

<table class="pk-tbl">
  <thead><tr><th>Naqsh</th><th>G'oya</th><th>Yaxshi misol</th></tr></thead>
  <tbody>
    <tr><td><b>Zanjir</b></td><td>ketma-ket, har qadam keyingisini oziqlantiradi</td><td>reja → matn → sayqal</td></tr>
    <tr><td><b>Yo'naltirish</b></td><td>tasnifla → ixtisoslashgan yo'lga yubor</td><td>mijoz xati turini ajratish</td></tr>
    <tr><td><b>Parallel</b></td><td>bir vaqtda bo'lib bajar yoki ovoz ber</td><td>5 bobni jamlash / 3 javobdan ovoz</td></tr>
  </tbody>
</table>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Murakkablikni keraksiz oshirmang</b>Bu naqshlar chiroyli, lekin har vazifaga uchchalasini tiqishtirmang. Agar bitta prompt ish bersa — naqsh ham shart emas. Naqsh <b>aniq muammoni</b> hal qilishi kerak, zo'r ko'rinishi uchun emas.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Workflow — qadamlarni siz boshqaradigan oldindan yozilgan yo'l. Uchta asosiy naqsh: <b>zanjir</b> (ketma-ket, natija keyingisiga), <b>yo'naltirish</b> (tasnifla → ixtisoslashgan yo'l), <b>parallel</b> (bir vaqtda bo'lib bajar yoki ovoz ber). Eng sodda ishlaydiganini tanlang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi vazifalar qaysi workflow naqshiga eng mos? <b>Zanjir</b> (ketma-ket bosqichlar), <b>yo'naltirish</b> (tasnifla → to'g'ri yo'l), yoki <b>parallel</b> (bir vaqtda / ovoz berish)? To'g'ri ajrating.",
        groups: ["zanjir", "yo'naltirish", "parallel"],
        items: [
          { name: "Avval kontur tuz, keyin shu kontur asosida matn yoz, oxirida grammatikani tuzat", answer: "zanjir", hint: "Har bosqich oldingisining chiqishini oladi — ketma-ket → zanjir." },
          { name: "Kelgan xatni o'qib, u shikoyatmi, savolmi yoki maqtovmi — aniqlab, mos bo'limga uzat", answer: "yo'naltirish", hint: "Avval tasnif, keyin mos yo'lga yuborish → yo'naltirish." },
          { name: "Bitta savolni 3 marta mustaqil so'rab, ko'pchilik tanlagan javobni qaytar", answer: "parallel", hint: "Bir xil ishni takror + ovoz berish → parallel (voting)." },
          { name: "100 betlik hisobotning 10 bo'limini bir vaqtning o'zida qisqartir, keyin birlashtir", answer: "parallel", hint: "Mustaqil bo'laklarni bir vaqtda → parallel (sectioning)." },
          { name: "Mijoz tilini aniqlab, ingliz/rus/o'zbek yordam promptiga yo'naltir", answer: "yo'naltirish", hint: "Til turini tasniflab mos yo'lga ulash → yo'naltirish." },
          { name: "Hujjatni tarjima qil → tarjimani tahrirla → tahrirlangan matnni jilolab ber", answer: "zanjir", hint: "Ketma-ket bosqichlar, har biri keyingisini oziqlantiradi → zanjir." }
        ]
      },
      quiz: [
        { q: "Workflow va agent orasidagi asosiy farq nima?", o: ["Workflow qimmatroq", "Workflow'da qadamlar oldindan yozilgan kod boshqaradi, agentda model jarayonni o'zi boshqaradi", "Agent faqat ingliz tilida ishlaydi", "Hech qanday farqi yo'q"], c: 1 },
        { q: "Prompt chaining (zanjir) qanday ishlaydi?", o: ["Bir necha vazifani bir vaqtda bajaradi", "Vazifani ketma-ket bosqichlarga bo'ladi, har LLM chiqishi keyingisiga kiritma bo'ladi", "Faqat bitta promptdan iborat", "So'rovni tasniflaydi"], c: 1 },
        { q: "Routing (yo'naltirish) naqshining mohiyati nimada?", o: ["Vazifani qisqartirish", "Kiruvchini tasniflab, ixtisoslashgan yo'lga (promptga) yuborish", "Javoblarni ovozga qo'yish", "Tokenni tejash"], c: 1 },
        { q: "Parallelizatsiyaning ovoz berish (voting) ko'rinishi nima beradi?", o: ["Eng arzon yechimni", "Bir xil vazifani bir necha bor mustaqil ishlatib, ishonchliroq natija olish", "Vazifani bosqichlarga bo'lish", "So'rovni boshqa yo'lga ulash"], c: 1 },
        { q: "Naqsh tanlashda oltin qoida qaysi?", o: ["Doimo eng murakkab naqshni tanlash", "Hamma naqshni birga ishlatish", "Ishni bajaradigan eng sodda naqshni tanlash", "Naqsh ishlatmaslik kerak"], c: 2 }
      ]
    },

    {
      id: "b3_2",
      title: "Agent naqshlari: orchestrator-workers va evaluator-optimizer",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Aytaylik, sizdan yangi mahsulot uchun to'liq marketing materiali tayyorla deb so'rashdi — bunga shior, mahsulot tavsifi va ijtimoiy tarmoq posti kerak. Bitta LLM chaqiruvida hammasini so'rasangiz, javob yuzaki chiqadi. Bu yerda ikkita kuchli naqsh yordam beradi: <b>orchestrator-workers</b> (boshliq ishni bo'lib beradi) va <b>evaluator-optimizer</b> (sifat tekshirilib, yaxshilanadi). Bu naqshlar — to'liq workflow'dan biroz aqlliroq, chunki model qadamlarning bir qismini o'zi belgilaydi.</p>

<h3>1. Orchestrator–workers: boshliq va ishchilar</h3>
<p>Bitta <b>yetakchi LLM (orchestrator)</b> vazifani <b>kichik qism-vazifalarga bo'ladi</b>, har birini <b>ishchi LLM</b>larga (workers) topshiradi, so'ng natijalarni <b>yig'ib-birlashtiradi</b> (sintez qiladi). Zanjirdan farqi: bu yerda qism-vazifalar <b>oldindan qat'iy belgilanmagan</b> — orchestrator <i>kiruvchi vazifaga qarab</i> ularni o'zi aniqlaydi.</p>
<p>Marketing misolida: orchestrator 3 ta narsa kerak deb qaror qiladi → ishchi 1 shiorni yozadi, ishchi 2 tavsifni yozadi → orchestrator ikkalasini bitta yaxlit materialga jamlaydi.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="270" rx="16" fill="#f7fbfa"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Orchestrator–workers: bo'l → topshir → birlashtir</text>
  <rect x="285" y="46" width="150" height="48" rx="12" fill="#0d9488"/><text x="360" y="68" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#fff">ORCHESTRATOR</text><text x="360" y="85" text-anchor="middle" font-family="system-ui" font-size="10" fill="#a7f3e9">ishni bo'ladi</text>
  <rect x="120" y="138" width="130" height="46" rx="11" fill="#fff" stroke="#0d9488"/><text x="185" y="160" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">ishchi_1</text><text x="185" y="176" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">shior yozadi</text>
  <rect x="470" y="138" width="130" height="46" rx="11" fill="#fff" stroke="#0d9488"/><text x="535" y="160" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">ishchi_2</text><text x="535" y="176" text-anchor="middle" font-family="system-ui" font-size="10" fill="#64748b">tavsif yozadi</text>
  <path d="M320 94 C260 110 230 120 195 136" stroke="#0d9488" stroke-width="2" fill="none" marker-end="url(#o1)"/>
  <path d="M400 94 C460 110 490 120 525 136" stroke="#0d9488" stroke-width="2" fill="none" marker-end="url(#o1)"/>
  <rect x="285" y="206" width="150" height="46" rx="12" fill="#0d9488"/><text x="360" y="228" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#fff">SINTEZ</text><text x="360" y="244" text-anchor="middle" font-family="system-ui" font-size="10" fill="#a7f3e9">yaxlit material</text>
  <path d="M195 184 C230 200 260 205 290 214" stroke="#5eead4" stroke-width="2" fill="none" marker-end="url(#o1)"/>
  <path d="M525 184 C490 200 460 205 430 214" stroke="#5eead4" stroke-width="2" fill="none" marker-end="url(#o1)"/>
  <defs><marker id="o1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker></defs>
</svg>
<figcaption>Orchestrator qism-vazifalarni o'zi belgilaydi, ishchilarga beradi, keyin sintez qiladi</figcaption>
</div>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Zanjir bilan farqi</b>Zanjirda qadamlar <b>oldindan qotirilgan</b> (siz yozgansiz). Orchestrator–workers'da esa qism-vazifalar soni va turi <b>kirishga qarab o'zgaradi</b> — modelning o'zi buni 2 qismga bo'laman yoki 3 qismga bo'laman deb qaror qiladi.</div></div>

<h3>2. Evaluator–optimizer: yozuvchi va muharrir</h3>
<p>Bu naqshda ikki rol bor. Bittasi (<b>generator</b>) javob ishlab chiqaradi. Ikkinchisi (<b>evaluator</b>) uni <b>baholaydi va aniq fikr-mulohaza</b> beradi: bu yaxshi, lekin shior juda uzun, qisqartir. So'ng generator shu fikr asosida <b>qayta yozadi</b>. Bu halqa <b>natija yetarli darajada yaxshi bo'lguncha</b> takrorlanadi.</p>
<p>Bu — yozuvchi va muharrir ishiga juda o'xshaydi: birovi yozadi, ikkinchisi tanqid qiladi, birinchisi tuzatadi. Aylanish har safar sifatni oshiradi.</p>

<div class="pk-fig">
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <rect width="700" height="190" rx="16" fill="#f7fbfa"/>
  <text x="350" y="28" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Evaluator–optimizer: yoz → baholan → tuzat (halqa)</text>
  <rect x="70" y="74" width="180" height="56" rx="12" fill="#0d9488"/><text x="160" y="100" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#fff">GENERATOR</text><text x="160" y="118" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#a7f3e9">javob yozadi</text>
  <rect x="450" y="74" width="180" height="56" rx="12" fill="#f59e0b"/><text x="540" y="100" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#fff">EVALUATOR</text><text x="540" y="118" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#fff7ed">baholaydi</text>
  <path d="M250 92 H446" stroke="#0d9488" stroke-width="2.2" marker-end="url(#e1)"/>
  <text x="348" y="84" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">qoralama →</text>
  <path d="M446 116 H254" stroke="#f59e0b" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#e2)"/>
  <text x="350" y="138" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#b45309">← fikr-mulohaza (yetarli emas → qayta)</text>
  <text x="350" y="166" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">yetarli yaxshi bo'lganda halqa to'xtaydi</text>
  <defs>
    <marker id="e1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
    <marker id="e2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#f59e0b"/></marker>
  </defs>
</svg>
<figcaption>Evaluator–optimizer: javob aniq mezon bo'yicha sifat yetguncha qayta-qayta yaxshilanadi</figcaption>
</div>

<p>Evaluator–optimizer ayniqsa shunday hollarda foydali: <b>yaxshi nimaligini aniq aytib bera olasiz</b> (mas: shior 6 so'zdan oshmasin, kod testdan o'tsin), va LLM o'z natijasini shu mezon bo'yicha yaxshilay oladi.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Qaysi birini qachon?</b><b>Orchestrator–workers</b> — vazifa qancha qismga bo'linishi <b>oldindan noma'lum</b> bo'lganda (model o'zi bo'lsin). <b>Evaluator–optimizer</b> — natijani <b>aniq mezon bilan baholash</b> mumkin va takror yaxshilash foyda berganda.</div></div>

<p>Pastdagi <b>Agent Laboratoriyasi</b>da orchestrator ishini jonli kuzating: u avval ishni bo'lib oladi, ishchilarga topshiradi, har topshiriqdan natija (kuzatuv) keladi, oxirida hammasini bitta javobga jamlaydi.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b><b>Orchestrator–workers</b>: yetakchi LLM ishni dinamik qism-vazifalarga bo'lib, ishchilarga topshiradi va natijalarni sintez qiladi. <b>Evaluator–optimizer</b>: bir LLM yozadi, ikkinchisi baholab fikr beradi, sifat yetguncha halqa takrorlanadi. Ikkalasi ham aqlliroq, chunki model jarayonning bir qismini o'zi boshqaradi.</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Quyida <b>orchestrator</b> agenti. Foydalanuvchi marketing materiali so'radi. Orchestrator avval ishni bo'ladi, <b>ishchi_1</b> va <b>ishchi_2</b>ga topshiradi, keyin hammasini jamlaydi. <b>Keyingi qadam</b> bilan kuzating.",
        goal: "Yangi 'Oson Notebook' mahsuloti uchun marketing materiali tayyorla: bitta shior va bir abzas tavsif.",
        tools: [
          { name: "ishchi_1", label: "ishchi_1", desc: "qisqa shior yozuvchi" },
          { name: "ishchi_2", label: "ishchi_2", desc: "mahsulot tavsifi yozuvchi" }
        ],
        steps: [
          { kind: "thought", text: "Bu vazifa ikki qismdan iborat: (1) jozibali shior, (2) bir abzaslik tavsif. Men — orchestrator. Har qismni alohida ishchiga topshiraman, keyin birlashtiraman." },
          { kind: "action", tool: "ishchi_1", args: "{ \"vazifa\": \"'Oson Notebook' uchun 6 so'zdan oshmaydigan shior yoz\" }" },
          { kind: "observation", text: "{ \"shior\": \"Oson Notebook — fikrlaringiz bir joyda.\" }" },
          { kind: "action", tool: "ishchi_2", args: "{ \"vazifa\": \"'Oson Notebook' uchun bir abzaslik sotuvchi tavsif yoz\" }" },
          { kind: "observation", text: "{ \"tavsif\": \"Oson Notebook — yozuvlar, vazifalar va rejalarni bitta toza interfeysda saqlovchi yengil ilova. Offline ishlaydi, sinxronlanadi va ortiqcha tugmalardan xoli.\" }" },
          { kind: "thought", text: "Ikkala ishchi ham natija qaytardi. Endi men ularni bitta yaxlit, izchil marketing materialiga sintez qilaman." },
          { kind: "answer", text: "Tayyor!\\n\\nShior: Oson Notebook — fikrlaringiz bir joyda.\\n\\nTavsif: Oson Notebook — yozuvlar, vazifalar va rejalarni bitta toza interfeysda saqlovchi yengil ilova. Offline ishlaydi, qurilmalar aro sinxronlanadi va ortiqcha tugmalardan xoli — shunchaki oching va yozing." }
        ]
      },
      quiz: [
        { q: "Orchestrator–workers naqshida orchestrator nima qiladi?", o: ["Faqat javobni baholaydi", "Vazifani qism-vazifalarga bo'lib, ishchilarga topshiradi va natijalarni sintez qiladi", "Hech narsa qilmaydi, faqat kuzatadi", "So'rovni boshqa serverga uzatadi"], c: 1 },
        { q: "Orchestrator–workers zanjirdan nimasi bilan farq qiladi?", o: ["Tezroq ishlaydi", "Qism-vazifalar oldindan qotirilmagan — orchestrator ularni kirishga qarab o'zi belgilaydi", "Faqat bitta LLM ishlaydi", "Asbob ishlatmaydi"], c: 1 },
        { q: "Evaluator–optimizer naqshida ikki rol qaysi?", o: ["Foydalanuvchi va admin", "Generator (yozadi) va evaluator (baholab fikr beradi)", "Server va klient", "Token va kontekst"], c: 1 },
        { q: "Evaluator–optimizer halqasi qachon to'xtaydi?", o: ["Bir martadan keyin doimo", "Natija yetarli darajada yaxshi bo'lganda", "Token tugaganda", "Hech qachon to'xtamaydi"], c: 1 },
        { q: "Evaluator–optimizer qaysi holatda eng foydali?", o: ["Yaxshi nimaligini aniq mezon bilan aytib bera olganingizda", "Natijani umuman baholab bo'lmaganda", "Faqat bitta so'z javob kerak bo'lganda", "Asbob umuman bo'lmaganda"], c: 0 }
      ]
    },

    {
      id: "b3_3",
      title: "Autonom agent va qachon TO'XTASH",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling: agentingizga xatomni top va tuzat dedingiz. U fayllarni o'qiy boshladi, tahrir qildi, qayta o'qidi, yana tahrir qildi... va to'xtamadi. Yarim soatdan keyin u hamon aylanyapti, hisobingizdan token oqib turibdi. Bu — eng mashhur agent xatosi: <b>cheksiz halqa</b>. Autonom agent kuchli, ammo unga <b>qachon to'xtash</b>ni o'rgatish — uni qurishning eng muhim qismidir.</p>

<h3>Autonom agent: ochiq halqa</h3>
<p>Avvalgi naqshlarda qadamlarni asosan biz boshqargandik. <b>Autonom agent</b> esa <b>ochiq halqada</b> ishlaydi: u o'zi <b>o'ylaydi → harakat qiladi (asbob) → natijani kuzatadi</b>, keyin yana o'ylaydi — qaysi qadamni qachon qilishni <b>to'liq o'zi</b> hal qiladi. Qadamlar soni oldindan noma'lum.</p>
<p>Bu juda moslashuvchan: agent kutilmagan vaziyatga ham javob bera oladi. Ammo aynan shu erkinlik <b>xavf</b> tug'diradi — to'xtash sharti bo'lmasa, agent abadiy aylanishi yoki noto'g'ri yo'lga kirib ketishi mumkin.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="240" rx="16" fill="#f7fbfa"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Autonom halqa — to'xtash sharti bo'lishi SHART</text>
  <rect x="120" y="60" width="130" height="46" rx="11" fill="#0d9488"/><text x="185" y="88" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#fff">O'ylaydi</text>
  <rect x="470" y="60" width="130" height="46" rx="11" fill="#0d9488"/><text x="535" y="88" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#fff">Harakat</text>
  <rect x="470" y="150" width="130" height="46" rx="11" fill="#0d9488"/><text x="535" y="178" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="700" fill="#fff">Kuzatadi</text>
  <rect x="120" y="150" width="130" height="46" rx="11" fill="#f59e0b"/><text x="185" y="172" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#fff">TO'XTASH?</text><text x="185" y="187" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#fff7ed">shart bajarildimi?</text>
  <path d="M250 83 H466" stroke="#0d9488" stroke-width="2.2" marker-end="url(#a1)"/>
  <path d="M535 106 V146" stroke="#0d9488" stroke-width="2.2" marker-end="url(#a1)"/>
  <path d="M470 173 H252" stroke="#0d9488" stroke-width="2.2" marker-end="url(#a1)"/>
  <path d="M185 150 V108" stroke="#f59e0b" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#a2)"/>
  <text x="120" y="130" font-family="system-ui" font-size="10" fill="#b45309">yo'q → davom</text>
  <rect x="300" y="200" width="180" height="32" rx="9" fill="#e7f6ee" stroke="#bfe6d0"/><text x="390" y="221" text-anchor="middle" font-family="system-ui" font-size="11" fill="#15803d">ha → ✅ javob ber, to'xta</text>
  <path d="M250 173 C290 192 300 200 330 210" stroke="#22c55e" stroke-width="2" fill="none" marker-end="url(#a3)"/>
  <defs>
    <marker id="a1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
    <marker id="a2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#f59e0b"/></marker>
    <marker id="a3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#22c55e"/></marker>
  </defs>
</svg>
<figcaption>Har aylanishdan keyin agent to'xtash sharti bajarildimi? degan savolni tekshiradi</figcaption>
</div>

<h3>To'xtash shartlari (stop conditions)</h3>
<p>Yaxshi autonom agentda <b>kamida bitta</b>, odatda <b>bir nechta</b> to'xtash sharti bo'ladi:</p>
<ul>
  <li><b>Maqsad bajarildi</b> — agent natijaga yetdi, javob tayyor. Bu — eng yaxshi to'xtash.</li>
  <li><b>Qadam chegarasi (max-steps)</b> — mas: 20 qadamdan oshma. Cheksiz aylanishga qarshi himoya.</li>
  <li><b>Byudjet chegarasi</b> — token yoki vaqt limiti tugadi → to'xta.</li>
  <li><b>Boshi berk ko'cha</b> — agent oldinga siljimayotganini sezsa (bir xil harakatni takrorlayotgan bo'lsa) → to'xtab, odamdan yordam so'rashi mumkin.</li>
</ul>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Cheksiz halqa — eng qimmat xato</b>To'xtash sharti bo'lmagan agent abadiy aylanishi, har aylanishda token sarflashi va hisobingizni bo'shatishi mumkin. Shuning uchun <b>max-steps</b> — har bir autonom agentning eng kamida bo'lishi shart bo'lgan xavfsizlik to'rchasi.</div></div>

<h3>Guardrail'lar (qo'riqchi to'siqlar)</h3>
<p>To'xtash shartidan tashqari, agentni <b>chegaralar ichida</b> ushlab turadigan qoidalar ham kerak. Bularni <b>guardrail</b> deyiladi:</p>
<ul>
  <li><b>Ruxsat etilgan asboblar</b> — agent faqat berilgan asboblardan foydalanadi (mas: fayl o'chirish asbobi umuman berilmaydi).</li>
  <li><b>Inson tasdig'i (human-in-the-loop)</b> — xavfli amal (pul o'tkazish, fayl o'chirish, xat yuborish) oldidan odamdan hani so'raydi.</li>
  <li><b>Tekshiruv qoidalari</b> — chiqishni qaytarishdan oldin shaklini/xavfsizligini tekshirish.</li>
</ul>

<table class="pk-tbl">
  <thead><tr><th>Mexanizm</th><th>Nimani himoya qiladi</th></tr></thead>
  <tbody>
    <tr><td><b>Max-steps</b></td><td>cheksiz halqa va token isrofidan</td></tr>
    <tr><td><b>Byudjet limiti</b></td><td>vaqt/token chegarasidan oshib ketishdan</td></tr>
    <tr><td><b>Inson tasdig'i</b></td><td>xavfli amallarni (o'chirish, to'lov) avtomatik bajarishdan</td></tr>
    <tr><td><b>Ruxsat etilgan asboblar</b></td><td>agent imkoniyatini xavfsiz doirada ushlab turishdan</td></tr>
  </tbody>
</table>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Avtonomiya — masuliyat demak</b>Agentga qancha erkinlik bersangiz, shuncha ko'p to'xtash va qo'riqchi mexanizm qo'shishingiz kerak. Erkinlik va nazorat — taroziningi ikki pallasi.</div></div>

<p>Pastdagi <b>Laboratoriya</b>da qisqa autonom halqani kuzating: agent bir necha qadam o'ylab-harakat qiladi, har gal yetarlimi? deb tekshiradi va to'xtash sharti bajarilganda javob berib to'xtaydi.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Autonom agent ochiq halqada (o'ylaydi → harakat → kuzatadi) qadamlarni o'zi tanlaydi. Eng muhimi — <b>to'xtash sharti</b>: maqsad bajarildi, max-steps, byudjet yoki boshi berk ko'cha. Bularsiz agent cheksiz aylanadi. Guardrail'lar (inson tasdig'i, ruxsat etilgan asboblar) uni xavfsiz chegarada ushlaydi.</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Quyida qisqa <b>autonom agent</b>. U max-steps chegarasi bilan ishlaydi va har qadamdan keyin to'xtash sharti bajarildimi? deb tekshiradi. <b>Keyingi qadam</b> bilan kuzating — shart bajarilganda u to'xtaydi.",
        goal: "Loyiha papkasida 'parol' so'zi ochiq yozilgan faylni topib, ogohlantirish ber. (max 8 qadam)",
        tools: [
          { name: "fayl_royxati", label: "fayl_royxati", desc: "papkadagi fayllar" },
          { name: "matn_qidir", label: "matn_qidir", desc: "fayl ichidan so'z qidirish" }
        ],
        steps: [
          { kind: "thought", text: "Maqsadim — 'parol' ochiq yozilgan faylni topish. Avval papkada qanday fayllar borligini ko'rishim kerak. (1/8 qadam)" },
          { kind: "action", tool: "fayl_royxati", args: "{ \"papka\": \"loyiha\" }" },
          { kind: "observation", text: "{ \"fayllar\": [\"config.js\", \"index.html\", \"readme.md\"] }" },
          { kind: "thought", text: "3 ta fayl bor. 'parol' so'zini birinchi navbatda config.js'da qidiraman — sozlama fayllarida ko'pincha shunday xato bo'ladi. (2/8 qadam)" },
          { kind: "action", tool: "matn_qidir", args: "{ \"fayl\": \"config.js\", \"sozlama\": \"parol\" }" },
          { kind: "observation", text: "{ \"topildi\": true, \"qator\": 14, \"matn\": \"const parol = '12345';\" }" },
          { kind: "thought", text: "Topdim — config.js, 14-qator. To'xtash sharti BAJARILDI: izlangan narsa topildi. Boshqa fayllarni tekshirishga hojat yo'q. Endi javob beraman va halqani to'xtataman." },
          { kind: "answer", text: "Ogohlantirish! 'parol' ochiq matnda yozilgan: config.js fayli, 14-qator — const parol = '12345'. Tavsiya: parolni koddan olib, muhit o'zgaruvchisiga (env) ko'chiring va kodga hech qachon ochiq parol yozmang." }
        ]
      },
      quiz: [
        { q: "Autonom agent qadamlar sonini qanday belgilaydi?", o: ["Har doim aniq 3 qadam", "Ochiq halqada o'zi hal qiladi — qadamlar soni oldindan noma'lum", "Foydalanuvchi har qadamni qo'lda kiritadi", "Doimo bitta qadam"], c: 1 },
        { q: "To'xtash sharti bo'lmagan agentning eng katta xavfi nima?", o: ["Juda chiroyli javob berishi", "Cheksiz halqada aylanib, token va vaqtni isrof qilishi", "Sekin ishlashi", "Hech qanday xavf yo'q"], c: 1 },
        { q: "Max-steps nimani himoya qiladi?", o: ["Javob sifatini oshiradi", "Cheksiz halqaga qarshi xavfsizlik — qadam soni chegarasi", "Tokenni bepul qiladi", "Internetni tezlashtiradi"], c: 1 },
        { q: "Quyidagilardan qaysi biri to'xtash sharti EMAS?", o: ["Maqsad bajarildi", "Qadam chegarasiga (max-steps) yetildi", "Byudjet/vaqt limiti tugadi", "Agent yangi asbob nomini chiroyli yozdi"], c: 3 },
        { q: "Xavfli amal (mas: fayl o'chirish) oldidan odamdan ruxsat so'rash — bu qaysi mexanizm?", o: ["Max-steps", "Inson tasdig'i (human-in-the-loop) guardrail", "Token tejash", "Yo'naltirish"], c: 1 }
      ]
    },

    {
      id: "b3_4",
      title: "Ko'p agentli tizimlar (multi-agent)",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Yangi narsani o'rgangach, ko'pchilik shunday o'ylaydi: Bitta agent yaxshi bo'lsa, o'nta agent o'n barobar yaxshi-da!. Aslida ko'pincha aksincha bo'ladi — o'nta agent o'n barobar <b>chalkashlik, narx va xato</b> degani. Bu darsda eng muhim qaror bilan tanishamiz: <b>qachon bitta agent yetadi, qachon haqiqatan ko'p agent kerak?</b></p>

<h3>Multi-agent nima?</h3>
<p><b>Ko'p agentli tizim</b> — bir necha <b>ixtisoslashgan agent</b> birgalikda ishlab, umumiy maqsadga xizmat qiladi. Har biri o'z sohasiga ega: mas, biri faqat <b>qidiruv</b>, biri faqat <b>kod yozish</b>, biri faqat <b>tekshirish</b> bilan shug'ullanadi. Ular o'zaro natija almashadi.</p>
<p>Bu orchestrator–workers'ga o'xshaydi, lekin bu yerda ishchilar — oddiy bir martalik chaqiruv emas, balki <b>o'z asbobi va halqasi bo'lgan to'laqonli agentlar</b>. Ya'ni har biri o'zicha kichik mustaqil xodim.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="250" rx="16" fill="#f7fbfa"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Ko'p agent — har biri o'z sohasiga ixtisoslashgan</text>
  <rect x="290" y="46" width="140" height="46" rx="12" fill="#475569"/><text x="360" y="68" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#fff">BOSHQARUVCHI</text><text x="360" y="84" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#cbd5e1">muvofiqlashtiradi</text>
  <rect x="60" y="140" width="160" height="58" rx="12" fill="#fff" stroke="#0d9488" stroke-width="1.5"/><text x="140" y="165" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">🔎 Qidiruvchi agent</text><text x="140" y="183" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#64748b">o'z asbobi + halqasi</text>
  <rect x="280" y="140" width="160" height="58" rx="12" fill="#fff" stroke="#0d9488" stroke-width="1.5"/><text x="360" y="165" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">⌨ Kod yozuvchi agent</text><text x="360" y="183" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#64748b">o'z asbobi + halqasi</text>
  <rect x="500" y="140" width="160" height="58" rx="12" fill="#fff" stroke="#0d9488" stroke-width="1.5"/><text x="580" y="165" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="700" fill="#0f766e">✓ Tekshiruvchi agent</text><text x="580" y="183" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#64748b">o'z asbobi + halqasi</text>
  <path d="M320 92 C250 110 200 122 150 138" stroke="#475569" stroke-width="2" fill="none" marker-end="url(#m1)"/>
  <path d="M360 92 V138" stroke="#475569" stroke-width="2" marker-end="url(#m1)"/>
  <path d="M400 92 C470 110 520 122 570 138" stroke="#475569" stroke-width="2" fill="none" marker-end="url(#m1)"/>
  <text x="360" y="228" text-anchor="middle" font-family="system-ui" font-size="11" fill="#94a3b8">faqat bitta agent yetmaganda — har bir agent qo'shimcha narx va murakkablik qo'shadi</text>
  <defs><marker id="m1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#475569"/></marker></defs>
</svg>
<figcaption>Ko'p agentli tizim: ixtisoslashgan, o'z halqasiga ega agentlar muvofiqlashtirib ishlaydi</figcaption>
</div>

<h3>Qachon bitta agent yetadi?</h3>
<p>Quyidagi hollarda ko'p agent <b>ortiqcha</b> — bittasi mukammal yetadi:</p>
<ul>
  <li>Vazifa bitta <b>uzluksiz oqim</b>da bajariladi (bo'lish shart emas).</li>
  <li>Bitta umumiy <b>kontekst</b> yetarli — qismlar bir-biriga juda bog'liq.</li>
  <li>Vazifa <b>kichik yoki o'rta</b> — bo'lib yuborish faqat sarson qiladi.</li>
  <li>Bashoratlilik va arzonlik muhim — ko'p agent narx va kechikishni oshiradi.</li>
</ul>

<h3>Qachon ko'p agent foydali?</h3>
<p>Ko'p agent <b>aniq foyda berganda</b>gina o'rinli:</p>
<ul>
  <li>Vazifa <b>aniq, mustaqil ixtisos sohalarga</b> ajraladi (qidiruv ≠ kod ≠ dizayn).</li>
  <li>Qismlarni <b>parallel</b> bajarish katta tezlik beradi.</li>
  <li>Har ixtisos uchun <b>alohida kontekst/ko'rsatma</b> sifatni sezilarli oshiradi.</li>
  <li>Vazifa shunchalik <b>katta</b>ki, bitta agent kontekstiga sig'maydi.</li>
</ul>

<div class="pk-ex">
  <div class="pk-good"><b>To'g'ri: ko'p agent</b>Raqobatchilar bozorini tadqiq qil, hisobot yoz va dizayn maket tayyorla — bu uch xil ixtisos. Qidiruvchi + yozuvchi + dizayner agentlar parallel ishlaydi, har biri o'z sohasida kuchli.</div>
  <div class="pk-bad"><b>Noto'g'ri: ko'p agent</b>Bu xatga muloyim javob yoz uchun 4 ta agent qurish — bu shunchaki bitta promptlik ish. Ko'p agent bu yerda faqat narx, kechikish va xatoni oshiradi.</div>
</div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Ko'p agentning yashirin soliqlari</b>Har qo'shilgan agent: ko'proq token, ko'proq kechikish, agentlararo aloqada yangi xatolik nuqtalari va sinash qiyinligi olib keladi. Shuning uchun: <i>bitta agent yetmaganda</i>gina ko'p agentga o'ting — go'zallik uchun emas.</div></div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Bosqichma-bosqich o'sing</b>Yo'l bitta: prompt → workflow → bitta agent → (faqat zarur bo'lsa) ko'p agent. Har pog'onaga faqat oldingisi yetmaganda ko'taring. Bu — barcha modulning umumiy falsafasi: <b>eng sodda ishlaydigan yechim</b>.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Ko'p agentli tizim — bir necha ixtisoslashgan, o'z halqasiga ega agent birga ishlaydi. U faqat vazifa aniq mustaqil sohalarga bo'linganda, parallel tezlik kerak bo'lganda yoki bitta agentga sig'maganda foydali. Aks holda bitta agent yetadi — ko'p agent narx, kechikish va xatoni oshiradi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi vazifalar uchun <b>bitta agent yetarli</b>mi, yoki <b>ko'p agent foydali</b>mi (aniq mustaqil ixtisoslar, parallel, juda katta hajm)? To'g'ri ajrating.",
        groups: ["bitta agent yetarli", "ko'p agent foydali"],
        items: [
          { name: "Bu mijoz xatiga muloyim va qisqa javob yoz", answer: "bitta agent yetarli", hint: "Bir oqimda bajariladigan kichik ish — bitta agent (hatto bitta prompt) yetadi." },
          { name: "Bozorni tadqiq qil, moliyaviy hisobot yoz va reklama maketini chiz", answer: "ko'p agent foydali", hint: "Uch xil mustaqil ixtisos (qidiruv/yozuv/dizayn) → ko'p agent foydali." },
          { name: "Bu kalkulyatsiyani bajar va natijani ayt", answer: "bitta agent yetarli", hint: "Bitta uzluksiz oqim, kichik vazifa → bitta agent." },
          { name: "500 mahsulot tavsifini 5 tilga tarjima qilib, har tilni alohida mutaxassis tekshirsin", answer: "ko'p agent foydali", hint: "Katta hajm + parallel ixtisoslashgan tekshiruv → ko'p agent." },
          { name: "Bu paragrafni qisqartirib, sarlavha qo'shib ber", answer: "bitta agent yetarli", hint: "Qismlar bir-biriga bog'liq, kichik ish → bitta agent." },
          { name: "Bir vaqtda 8 ta shaharning ob-havosini yig', har birini alohida tahlilchi izohlasin, keyin umumlashtir", answer: "ko'p agent foydali", hint: "Mustaqil parallel qismlar + alohida tahlil → ko'p agent." }
        ]
      },
      quiz: [
        { q: "Ko'p agentli tizim nima?", o: ["Bitta agentni tez ishlatish", "Bir necha ixtisoslashgan agent birga ishlab umumiy maqsadga xizmat qilishi", "Bitta promptni ko'p marta yuborish", "Agentni o'chirib-yoqish"], c: 1 },
        { q: "Ko'p agent orchestrator–workers'dan nimasi bilan farq qiladi?", o: ["Hech qanday farqi yo'q", "Bu yerda 'ishchilar' o'z asbobi va halqasiga ega to'laqonli agentlar", "Ko'p agent har doim sekinroq emas", "Ko'p agentda LLM ishlatilmaydi"], c: 1 },
        { q: "Qachon bitta agent yetarli?", o: ["Vazifa aniq mustaqil ixtisoslarga bo'linganda", "Vazifa uzluksiz oqimda, kichik/o'rta va bitta kontekstga sig'ganda", "Juda katta hajm bo'lganda", "Parallel tezlik kerak bo'lganda"], c: 1 },
        { q: "Ko'p agent qachon haqiqatan foydali?", o: ["Har doim, ko'p agent doimo yaxshiroq", "Vazifa aniq mustaqil sohalarga ajralganda yoki bitta agentga sig'maganda", "Faqat bitta jumla javob kerak bo'lganda", "Hech qachon"], c: 1 },
        { q: "Ko'p agentning yashirin soliqlari nimalar?", o: ["Hech qanday kamchiligi yo'q", "Ko'proq token, kechikish, agentlararo aloqa xatolari va sinash qiyinligi", "Faqat dizayn muammosi", "Ular har doim bepul"], c: 1 }
      ]
    }
  ]
});
