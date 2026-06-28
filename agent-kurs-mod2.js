/* ============================================================
   Oson Studio — AI Agentlar kursi (2-bosqich: Agentning ichki mexanikasi)
   window.AGENT_COURSE.modules.push({ id:"b2", ... })
   - sim turlari: "agentloop" | "classify" | "order"
   - Ohang: ustoz tilida, har dars real muammodan boshlanadi.
   ============================================================ */
window.AGENT_COURSE.modules.push({
  id: "b2",
  title: "Agentning ichki mexanikasi",
  lessons: [
    {
      id: "b2_1",
      title: "Agent halqasi ichkaridan: Fikr → Harakat → Kuzatuv",
      read: "10 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling: do'koningiz uchun non yetkazib beruvchini topyapsiz. Bitta odam telefon qiladi, narxni so'raydi, eslab qoladi; keyin ikkinchisiga qo'ng'iroq qiladi, uning narxini ham eslaydi; oxirida ikkalasini taqqoslab, sizga mana bu arzon deydi. U bir vaqtning o'zida <b>o'ylaydi</b>, <b>harakat qiladi</b> va <b>natijani ko'radi</b> — keyin yana o'ylaydi. Agent ham aynan shunday ishlaydi. Bu darsda halqaning ichiga kirib, har bir aylanishni sekin-sekin ko'ramiz.</p>

<h3>Halqa — bu uchta qadamning takrori</h3>
<p>1-bosqichda biz agent o'ylab → harakat qilib → natijani ko'rib ishlashini bilib oldik. Endi shu uchta qadamga nom beramiz, chunki keyingi hamma narsa shu uchtaning atrofida quriladi:</p>
<ul>
  <li><b>Fikr (Thought)</b> — agent o'ziga: hozir nima qilsam maqsadga yaqinlashaman? deb javob beradi. Bu — uning ovoz chiqarib o'ylashi.</li>
  <li><b>Harakat (Action)</b> — agent bitta <b>asbobni</b> tanlab chaqiradi va unga kerakli ma'lumotni (argumentlarni) beradi.</li>
  <li><b>Kuzatuv (Observation)</b> — asbob qaytargan <b>natija</b>. Agent uni o'qiydi va keyingi fikrida hisobga oladi.</li>
</ul>
<p>So'ng halqa <b>boshidan</b> takrorlanadi: yangi fikr, yangi harakat, yangi kuzatuv. Bu aylanish maqsad bajarilmaguncha davom etadi. Oxirida agent <b>yakuniy javob</b> beradi va halqa tugaydi.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="300" rx="16" fill="#f7fbfa"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Agent halqasi — uch qadam aylanib turadi</text>
  <rect x="80" y="120" width="150" height="60" rx="13" fill="#e7f6ee" stroke="#bfe6d0"/>
  <text x="155" y="148" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#15803d">💭 FIKR</text>
  <text x="155" y="167" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">nima qilsam?</text>
  <rect x="285" y="120" width="150" height="60" rx="13" fill="#d6f2ed" stroke="#5eead4"/>
  <text x="360" y="148" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#0f766e">🔧 HARAKAT</text>
  <text x="360" y="167" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">asbobni chaqir</text>
  <rect x="490" y="120" width="150" height="60" rx="13" fill="#e0f2fe" stroke="#bae6fd"/>
  <text x="565" y="148" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#0369a1">👁 KUZATUV</text>
  <text x="565" y="167" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">natijani ko'r</text>
  <path d="M230 150 H281" stroke="#0d9488" stroke-width="2.4" marker-end="url(#a1)"/>
  <path d="M435 150 H486" stroke="#0d9488" stroke-width="2.4" marker-end="url(#a1)"/>
  <path d="M565 180 q0 60 -205 60 q-205 0 -205 -56" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="5 5" marker-end="url(#a2)"/>
  <text x="360" y="262" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">maqsad bajarilmaguncha qayta-qayta aylanadi → keyin ✅ yakuniy javob</text>
  <defs>
    <marker id="a1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
    <marker id="a2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker>
  </defs>
</svg>
<figcaption>Fikr → Harakat → Kuzatuv — va yana boshidan; oxirida yakuniy javob</figcaption>
</div>

<h3>ReAct: o'yla, keyin harakat qil</h3>
<p>Bu naqshning ilmiy nomi bor: <b>ReAct</b> — inglizcha <b>Reasoning</b> (fikrlash) va <b>Acting</b> (harakat) so'zlaridan. G'oyasi juda sodda, lekin kuchli: model <b>darrov asbobni bosmaydi</b>, avval <b>bir og'iz o'ylab oladi</b> — nega men buni qilyapman, hozir qaysi asbob to'g'ri keladi?. Keyin harakat qiladi. Kuzatuvni olgach, yana o'ylaydi.</p>
<p>Nega bu yaxshi natija beradi? Chunki ovoz chiqarib o'ylash modelni <b>shoshilishdan</b> saqlaydi. Odam ham masalani yechishdan oldin keling, avval shuni aniqlab olay desa, kamroq xato qiladi. ReAct — modelga aynan shu odatni beradi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Fikr — bu shunchaki matn</b>Agentning fikri sehr emas: bu model yozgan oddiy matn. Lekin shu matn keyingi qadamning kontekstiga qo'shiladi, shuning uchun u <b>harakatga ta'sir qiladi</b>. Ya'ni model o'z fikrini o'qib, o'ziga yo'l ko'rsatadi.</div></div>

<h3>Bir aylanishni kadr-kadr ko'ramiz</h3>
<p>Faraz qilaylik, maqsad: <i>Ikki do'kondan non narxini solishtir va arzonini ayt</i>. Agentda ikkita asbob bor: <code>narx_ol</code> (do'kondan non narxini so'raydi) va <code>xabar</code> (foydalanuvchiga javob yozadi). Mantiqiy halqa shunday ketadi:</p>
<ol>
  <li><b>Fikr:</b> Ikki do'kon bor. Avval birinchisining narxini bilay.</li>
  <li><b>Harakat:</b> <code>narx_ol(do'kon: "Anvar non")</code></li>
  <li><b>Kuzatuv:</b> <code>{ narx: 4500 }</code></li>
  <li><b>Fikr:</b> Birinchisi 4500. Endi ikkinchisini bilishim kerak.</li>
  <li><b>Harakat:</b> <code>narx_ol(do'kon: "Tandir uyi")</code></li>
  <li><b>Kuzatuv:</b> <code>{ narx: 4000 }</code></li>
  <li><b>Fikr:</b> 4000 &lt; 4500 — Tandir uyi arzon. Endi javob yozaman.</li>
  <li><b>Yakuniy javob.</b></li>
</ol>
<p>E'tibor bering: har bir <b>harakat</b>dan keyin albatta <b>kuzatuv</b> keladi. Bu — qoida emas, balki <b>mantiq</b>: asbobni chaqirsangiz, javobini ko'rmasdan keyingi qadamga o'tib bo'lmaydi. Pastdagi Agent Laboratoriyasida shu halqani jonli kuzating.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Soddalashtiruvchi tasavvur</b>Halqani savol-javob suhbati deb tasavvur qiling: agent o'ziga savol beradi (fikr), asbobdan javob oladi (harakat + kuzatuv), keyin yana savol beradi. Suhbat to'g'ri javobga yetganda — to'xtaydi.</div></div>

<h3>Haqiqiy kod: agent halqasi (while-tsikl)</h3>
<p>Mana shu halqa kodda atigi bitta <code>while</code> tsikli, xolos. Model asbob chaqiraman desa — biz uni bajaramiz, kuzatuvni qaytaramiz, tsikl davom etadi. Model <code>end_turn</code> bilan tugatsa — chiqamiz. Bu — har qanday agentning yuragi (Python, Claude SDK):</p>
<div class="pk-code">
  <div class="pk-code-bar"><span class="d r"></span><span class="d y"></span><span class="d g"></span><span class="lang">Python · Claude API — agent halqasi</span></div>
  <pre><code>import anthropic
client = anthropic.Anthropic()

<span class="c"># Asbobni HAQIQATDA bajaradigan funksiya (biz yozamiz)</span>
narxlar = {"Anvar non": 4500, "Tandir uyi": 4000}
def asbobni_bajar(nom, kirish):
    if nom == "narx_ol":
        return {"narx_som": narxlar[kirish["dokon"]]}
    return {"holat": "ok"}

xabarlar = [{"role": "user", "content": "Ikki do'kondan non narxini solishtir, arzonini ayt"}]

<span class="c"># === AGENT HALQASI: maqsad bajarilmaguncha aylanadi ===</span>
while True:
    javob = client.messages.create(
        model="claude-opus-4-8",
        max_tokens=1024,
        tools=asboblar,            <span class="c"># oldingi darsdagi kabi tavsiflangan</span>
        messages=xabarlar,
    )

    <span class="c"># Model tugatdi (boshqa asbob chaqirmadi) — halqadan chiqamiz</span>
    if javob.stop_reason == "end_turn":
        break

    <span class="c"># Modelning javobini (tool_use bloklari bilan) tarixga qo'shamiz</span>
    xabarlar.append({"role": "assistant", "content": javob.content})

    <span class="c"># Har bir "tool_use" buyurtmasini bajaramiz (KUZATUV)</span>
    natijalar = []
    for blok in javob.content:
        if blok.type == "tool_use":
            natija = asbobni_bajar(blok.name, blok.input)
            natijalar.append({
                "type": "tool_result",
                "tool_use_id": blok.id,      <span class="c"># qaysi chaqiruvga javob</span>
                "content": str(natija),
            })

    <span class="c"># Kuzatuvlarni "user" xabari sifatida qaytaramiz — halqa davom etadi</span>
    xabarlar.append({"role": "user", "content": natijalar})

<span class="c"># Yakuniy javob matni</span>
print(next(b.text for b in javob.content if b.type == "text"))</code></pre>
</div>
<p>Ko'rdingizmi — sim'da kuzatgan Fikr → Harakat → Kuzatuv aynan shu tsikl. Modelning fikri — <code>javob.content</code> ichidagi matn; harakati — <code>tool_use</code> bloki; kuzatuv — bizning <code>tool_result</code>imiz. Boshqa hech qanday sehr yo'q.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Agent halqasi — uchta qadamning takrori: <b>Fikr</b> (nima qilay?), <b>Harakat</b> (asbobni chaqir), <b>Kuzatuv</b> (natijani ko'r). Bu naqshning nomi — <b>ReAct</b> (o'yla, keyin harakat qil). Har bir harakatdan keyin kuzatuv keladi, halqa esa maqsad bajarilmaguncha aylanaveradi.</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Maqsad: <b>ikki do'kondan non narxini solishtirib, arzonini aytish</b>. Keyingi qadamni bosib, agent qanday o'ylab, narxlarni olib, taqqoslab xulosa chiqarishini kuzating. Yoki Avtomatik bilan o'zi ketsin.",
        goal: "Ikki do'kondan non narxini solishtir va arzonini ayt.",
        tools: [
          { name: "narx_ol", label: "narx_ol", desc: "do'kondan non narxi" },
          { name: "xabar", label: "xabar", desc: "foydalanuvchiga javob" }
        ],
        steps: [
          { kind: "thought", text: "Ikkita do'kon bor: Anvar non va Tandir uyi. Avval birinchisining non narxini bilib olaman." },
          { kind: "action", tool: "narx_ol", args: "{ \"dokon\": \"Anvar non\" }" },
          { kind: "observation", text: "{ \"non\": \"oddiy\", \"narx_som\": 4500 }" },
          { kind: "thought", text: "Anvar non — 4500 so'm. Endi ikkinchi do'kon Tandir uyi narxini ham olishim kerak, aks holda taqqoslay olmayman." },
          { kind: "action", tool: "narx_ol", args: "{ \"dokon\": \"Tandir uyi\" }" },
          { kind: "observation", text: "{ \"non\": \"oddiy\", \"narx_som\": 4000 }" },
          { kind: "thought", text: "Endi ikkalasi ham bor: 4500 va 4000. 4000 < 4500, demak Tandir uyi arzonroq. Shu xulosani foydalanuvchiga yozaman." },
          { kind: "action", tool: "xabar", args: "{ \"matn\": \"Tandir uyi arzonroq: 4000 som (Anvar non — 4500 som).\" }" },
          { kind: "observation", text: "{ \"yuborildi\": true }" },
          { kind: "answer", text: "Solishtirdim: Anvar non — 4500 so'm, Tandir uyi — 4000 so'm. Arzonrog'i — Tandir uyi (4000 so'm)." }
        ]
      },
      quiz: [
        { q: "Agent halqasining uchta asosiy qadami qaysi?", o: ["Kirish, qayta ishlash, chiqish", "Fikr, Harakat, Kuzatuv", "Savol, Tarjima, Javob", "Boshlash, Kutish, Tugatish"], c: 1 },
        { q: "ReAct nomi qaysi ikki so'zdan kelib chiqqan?", o: ["Read va Act (o'qish va harakat)", "Reasoning va Acting (fikrlash va harakat)", "React va Action (reaksiya va amal)", "Real va Active (haqiqiy va faol)"], c: 1 },
        { q: "Nega har bir Harakatdan keyin Kuzatuv keladi?", o: ["Bu shunchaki chiroyli ko'rinish uchun", "Asbob qaytargan natijani ko'rmasdan keyingi qadamga o'tib bo'lmaydi", "Kuzatuv halqani tezlashtiradi", "Bu majburiy emas, ixtiyoriy"], c: 1 },
        { q: "Agentning Fikr qadami aslida nima?", o: ["Maxsus sehrli signal", "Model yozgan oddiy matn — keyingi qadamga ta'sir qiladi", "Foydalanuvchining buyrug'i", "Asbobning ichki kodi"], c: 1 },
        { q: "ReAct naqshining o'yla, keyin harakat qil yondashuvi nimaga yordam beradi?", o: ["Agentni tezroq ishlatadi", "Modelni shoshilishdan saqlab, kamroq xato qildiradi", "Token sarfini nolga tushiradi", "Asboblarsiz ishlashga imkon beradi"], c: 1 }
      ]
    },

    {
      id: "b2_2",
      title: "Asboblar (Tools) va function calling — agentga qo'l berish",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Eslaysizmi, 1-bosqichda agentning qo'li bor degandik? Mana shu qo'l — bu <b>asboblar (tools)</b>. Tasavvur qiling, ishchiga: devorga rasm os dedingiz. Agar uning oldida bolg'a, mix va o'lchagich bo'lsa — bajaradi. Bo'lmasa — faqat qanday osishni tushuntiradi, xolos. Model ham xuddi shunday: asbobsiz u faqat <b>gapiradi</b>; asbob bersangiz — <b>ish qiladi</b>. Bu darsda asbob nima ekanini va model uni qanday chaqirishini ochamiz.</p>

<h3>Asbob nima? — uch qismdan iborat</h3>
<p>Texnik jihatdan asbob — bu modelga taqdim etilgan <b>funksiya tavsifi</b>. Har bir asbobning uchta qismi bo'ladi:</p>
<ul>
  <li><b>Nom (name)</b> — qisqa, aniq nom, masalan <code>ob_havo_ol</code>. Model shu nom orqali asbobni chaqiradi.</li>
  <li><b>Tavsif (description)</b> — asbob nima qilishini va <b>qachon ishlatish</b> kerakligini tushuntiruvchi matn. Bu — eng muhim qism, chunki model aynan tavsifga qarab bu asbob menga kerakmi? deb qaror qiladi.</li>
  <li><b>Parametrlar (schema)</b> — asbob qabul qiladigan ma'lumotlar ro'yxati: nomi, turi (matn, son, ...), majburiymi yoki yo'q. Bu — asbobning anketasi.</li>
</ul>

<h3>Function calling: model JSON buyurtma beradi</h3>
<p>Eng muhim tushunchani aniqlashtiramiz: <b>modelning o'zi asbobni ishga tushirmaydi</b>. U faqat <b>qaysi asbobni, qanday argumentlar bilan</b> chaqirish kerakligini <b>JSON</b> shaklida yozib beradi. Bu naqshning nomi — <b>function calling</b> (funksiyani chaqirish). Keyin sizning dasturingiz (yoki agent ramkasi) o'sha asbobni haqiqatda bajaradi va natijani modelga qaytaradi.</p>
<p>Bu xuddi restoranga o'xshaydi: mijoz (model) <b>buyurtma qog'ozini</b> to'ldiradi — 1 ta non, 2 ta choy. U o'zi oshxonaga kirib pishirmaydi; oshpaz (sizning kodingiz) tayyorlaydi va olib chiqadi. Model buyurtmani <b>aniq formatda</b> yozishi shart, aks holda oshpaz tushunmaydi.</p>

<div class="pk-fig">
<svg viewBox="0 0 740 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="740" height="250" rx="16" fill="#f7fbfa"/>
  <text x="370" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Function calling — model buyurtma beradi, kod bajaradi</text>
  <rect x="50" y="80" width="150" height="74" rx="13" fill="#0d9488"/>
  <text x="125" y="112" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#fff">MODEL</text>
  <text x="125" y="132" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#a7f3e9">qaysi asbob?</text>
  <rect x="295" y="80" width="160" height="74" rx="13" fill="#fff" stroke="#0d9488" stroke-width="2"/>
  <text x="375" y="106" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#0f766e">JSON buyurtma</text>
  <text x="375" y="128" text-anchor="middle" font-family="ui-monospace,monospace" font-size="10" fill="#475569">ob_havo_ol(</text>
  <text x="375" y="142" text-anchor="middle" font-family="ui-monospace,monospace" font-size="10" fill="#475569">{shahar:"Toshkent"})</text>
  <rect x="550" y="80" width="150" height="74" rx="13" fill="#e2e8f0"/>
  <text x="625" y="112" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#334155">SIZNING KOD</text>
  <text x="625" y="132" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">asbobni bajaradi</text>
  <path d="M200 117 H291" stroke="#0d9488" stroke-width="2.4" marker-end="url(#b1)"/>
  <path d="M455 117 H546" stroke="#0d9488" stroke-width="2.4" marker-end="url(#b1)"/>
  <path d="M625 154 q0 50 -250 50 q-250 0 -250 -44" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="5 5" marker-end="url(#b2)"/>
  <text x="375" y="226" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">natija (kuzatuv) modelga qaytadi → model davom etadi</text>
  <defs>
    <marker id="b1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
    <marker id="b2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker>
  </defs>
</svg>
<figcaption>Model asbobni o'zi bajarmaydi — u JSON buyurtma yozadi, kod bajaradi, natija qaytadi</figcaption>
</div>

<h3>Yaxshi tavsif — yarim ish</h3>
<p>Model qaysi asbobni qachon ishlatishni faqat <b>tavsif</b>dan biladi. Tavsif noaniq bo'lsa — model adashadi: kerakmas joyda asbob chaqiradi yoki keraklisini o'tkazib yuboradi. Quyidagi farqni ko'ring:</p>

<div class="pk-ex pk-bad"><b>Yomon tavsif</b><br><code>narx</code> — narx bilan ishlaydi. Bu hech narsa demaydi: qaysi narx? qachon? qanday kiritiladi? Model taxmin qilishga majbur.</div>

<div class="pk-ex pk-good"><b>Yaxshi tavsif</b><br><code>mahsulot_narxini_ol</code> — Bitta mahsulot nomini qabul qiladi va uning hozirgi narxini so'mda qaytaradi. Foydalanuvchi biror mahsulot narxini so'raganda ishlat. Parametr: <code>mahsulot</code> (matn, majburiy). Aniq, qachon va qanday ishlatishi tushunarli.</div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Kam asbob — yaxshi asbob</b>Agentga 30 ta o'xshash asbob bersangiz, u <b>qaysi birini</b> tanlashda chalkashadi. Kamroq, lekin <b>aniq tavsifli</b> asboblar har doim yaxshiroq ishlaydi. Asboblar nomi va vazifasi bir-biridan ravshan farq qilsin.</div></div>

<h3>Qaysi vazifaga asbob kerak, qaysiga — yo'q?</h3>
<p>Hamma narsaga asbob shart emas. Agar javob modelning o'z bilimida bo'lsa (umumiy fakt, ta'rif, tarjima, qisqartirish) — asbob ortiqcha. Asbob esa <b>tashqi yoki yangi ma'lumot</b> kerak bo'lganda zarur: hozirgi narx, ob-havo, sizning bazangizdagi yozuv, fayl ichidagi matn. Pastdagi mashqda buni mashq qilamiz.</p>

<h3>Haqiqiy kod: Claude'da asbob qanday beriladi</h3>
<p>Endi nazariyani <b>haqiqiy, ishlaydigan kod</b>da ko'ramiz. Quyida Claude API'da bitta asbob (<code>ob_havo_ol</code>) tavsiflanadi va modelga beriladi. Diqqat: model faqat <b>JSON buyurtma</b> qaytaradi — biz uni o'zimiz bajaramiz (Python, Claude SDK):</p>
<div class="pk-code">
  <div class="pk-code-bar"><span class="d r"></span><span class="d y"></span><span class="d g"></span><span class="lang">Python · Claude API</span></div>
  <pre><code>import anthropic
client = anthropic.Anthropic()  <span class="c"># API kalit muhit o'zgaruvchisidan olinadi</span>

<span class="c"># 1) Asbob tavsifi: nom + tavsif + parametrlar (schema)</span>
asboblar = [{
    "name": "ob_havo_ol",
    "description": "Berilgan shahar uchun hozirgi havo haroratini qaytaradi. "
                   "Foydalanuvchi ob-havoni so'raganda ishlat.",
    "input_schema": {
        "type": "object",
        "properties": {
            "shahar": {"type": "string", "description": "Shahar nomi, masalan: Toshkent"}
        },
        "required": ["shahar"]
    }
}]

<span class="c"># 2) Modelga so'rov — asboblar bilan birga</span>
javob = client.messages.create(
    model="claude-opus-4-8",
    max_tokens=1024,
    tools=asboblar,
    messages=[{"role": "user", "content": "Toshkentda havo qanday?"}],
)

<span class="c"># 3) Model asbobni "chaqirsa", JSON buyurtmani o'qiymiz — o'zimiz bajaramiz</span>
for blok in javob.content:
    if blok.type == "tool_use":
        print(blok.name)    <span class="c"># "ob_havo_ol"</span>
        print(blok.input)   <span class="c"># {"shahar": "Toshkent"}</span></code></pre>
</div>
<p>E'tibor bering: <code>blok.type == "tool_use"</code> bo'lganda model men <code>ob_havo_ol</code>ni <code>shahar="Toshkent"</code> bilan chaqirmoqchiman deyapti, xolos. Haqiqiy ob-havo xizmatiga ulanish va natijani qaytarish — keyingi darsda (agent halqasi) ko'radigan ishimiz.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Asbob — bu modelga berilgan funksiya tavsifi: <b>nom + tavsif + parametrlar (schema)</b>. Model asbobni o'zi bajarmaydi — u <b>JSON buyurtma</b> yozadi (function calling), kod bajaradi, natija qaytadi. Aniq <b>tavsif</b> — modelning to'g'ri asbobni tanlashidagi eng muhim omil.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi vazifalar uchun agentga <b>asbob kerak</b>mi (tashqi/yangi ma'lumot, real harakat), yoki <b>model o'zi javob beradi</b>mi (umumiy bilim, ta'rif, til ishi)? To'g'ri ajrating.",
        groups: ["asbob kerak", "model o'zi javob beradi"],
        items: [
          { name: "Toshkentda hozir havo necha gradus?", answer: "asbob kerak", hint: "Hozirgi, real-vaqt ma'lumot — ob-havo asbobini chaqirish kerak." },
          { name: "Suvning kimyoviy formulasi nima?", answer: "model o'zi javob beradi", hint: "Umumiy, doimiy bilim — modelda bor, asbob shart emas." },
          { name: "Mening bazamdagi 1500-buyurtma holatini ayt", answer: "asbob kerak", hint: "Sizning shaxsiy bazangiz — model bilmaydi, asbob orqali olinadi." },
          { name: "Bu jumlani ingliz tiliga tarjima qil", answer: "model o'zi javob beradi", hint: "Til ishi — model o'zi bajaradi, tashqi ma'lumot kerak emas." },
          { name: "Bu xatni mijozimga elektron pochta orqali yubor", answer: "asbob kerak", hint: "Real harakat (xat yuborish) — pochta asbobi kerak." },
          { name: "Quyoshdan Yergacha bo'lgan o'rtacha masofa qancha?", answer: "model o'zi javob beradi", hint: "Mashhur, o'zgarmas fakt — modelning bilimida mavjud." }
        ]
      },
      quiz: [
        { q: "Asbob (tool) qaysi uch qismdan iborat?", o: ["Nom, rang, narx", "Nom, tavsif, parametrlar (schema)", "Kirish, chiqish, xato", "Boshlanish, o'rta, oxir"], c: 1 },
        { q: "Function calling da modelning o'zi nima qiladi?", o: ["Asbobni to'g'ridan-to'g'ri ishga tushiradi", "Qaysi asbobni qanday argumentlar bilan chaqirishni JSON ko'rinishida yozib beradi", "Internetga ulanib ma'lumot oladi", "Faylga yozadi"], c: 1 },
        { q: "Model qaysi asbobni qachon ishlatishni asosan nimadan biladi?", o: ["Asbobning rangidan", "Asbobning tavsifidan (description)", "Foydalanuvchining yoshidan", "Tasodifiy tanlovdan"], c: 1 },
        { q: "Nima uchun agentga juda ko'p o'xshash asbob bermaslik kerak?", o: ["Ular ko'p joy egallaydi", "Model qaysi birini tanlashda chalkashib, xato qiladi", "Asboblar pul turadi", "Hech qanday muammo yo'q"], c: 1 },
        { q: "Quyidagi vazifalardan qaysi biri uchun asbob KERAK?", o: ["Salomlashishni rasmiy uslubda yoz", "Hozirgi dollar kursini ayt", "Uchburchak nima?", "Bu so'zni ko'plikka aylantir"], c: 1 }
      ]
    },

    {
      id: "b2_3",
      title: "Strukturalangan natija — ishonchli javob (JSON, sxema)",
      read: "10 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling: agentingiz mijoz arizasini o'qib, undan <b>ism</b>, <b>telefon</b> va <b>summa</b>ni ajratib olishi kerak — keyin bu ma'lumotni bazaga yozadi. Agar agent javobni <i>Mijozning ismi Aziz, telefoni bormku, summasi taxminan million atrofida</i> deb erkin matnda qaytarsa, dasturingiz buni qanday qabul qiladi? Hech qanday. Mana shu yerda <b>strukturalangan natija</b> kerak bo'ladi: javob aniq, mashina o'qiy oladigan shaklda kelishi shart.</p>

<h3>Erkin matn nega agentni sindiradi?</h3>
<p>Odam uchun erkin matn — qulay. Lekin agentda javobni ko'pincha <b>boshqa kod</b> qabul qiladi: bazaga yozadi, hisob-kitob qiladi, keyingi asbobga uzatadi. Kod esa erkin matnni tushunmaydi — unga <b>aniq maydonlar</b> kerak. Erkin matn quyidagi muammolarni keltiradi:</p>
<ul>
  <li><b>Mo'rtlik</b> — bugun model Ism: Aziz deb yozadi, ertaga Mijozni Aziz deb atashadi. Kod ikkalasini bir xil o'qiy olmaydi.</li>
  <li><b>Noaniqlik</b> — million atrofida — bu 1 000 000 mi, 900 000 mi? Kod taxmin qila olmaydi.</li>
  <li><b>Yo'qolgan maydon</b> — model ba'zan telefonni umuman yozmay qo'yadi, kod esa uni kutadi.</li>
</ul>

<h3>Yechim: sxema (schema) bo'yicha JSON</h3>
<p>Yechim — modeldan javobni <b>oldindan kelishilgan tuzilma</b> (sxema) bo'yicha berishni so'rash. Eng keng tarqalgan tuzilma — <b>JSON</b>: maydon nomi va qiymati aniq ko'rsatilgan format. Siz modelga aytasiz: javobni mana shu maydonlar bilan qaytar — <code>ism</code> (matn), <code>telefon</code> (matn), <code>summa</code> (son). Model esa har safar aynan shu shaklda javob beradi:</p>

<div class="pk-ex pk-bad"><b>Mo'rt (erkin matn)</b><br><code>Mijozning ismi Aziz bo'lib, telefoni bor, summasi million atrofida.</code><br>Kod buni o'qiy olmaydi: maydonlar yo'q, summa noaniq.</div>

<div class="pk-ex pk-good"><b>Ishonchli (strukturali JSON)</b><br><code>{ "ism": "Aziz", "telefon": "+998901234567", "summa": 1000000 }</code><br>Har bir maydon aniq; kod to'g'ridan-to'g'ri o'qiydi va ishlatadi.</div>

<div class="pk-fig">
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="240" rx="16" fill="#f7fbfa"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Erkin matn sinadi — struktura ishlaydi</text>
  <rect x="50" y="56" width="290" height="150" rx="13" fill="#fff" stroke="#fecaca" stroke-width="2"/>
  <text x="195" y="82" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#b91c1c">✕ Erkin matn</text>
  <text x="195" y="108" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">ismi Aziz, telefoni bor,</text>
  <text x="195" y="126" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">summasi million atrofida</text>
  <text x="195" y="160" text-anchor="middle" font-family="system-ui" font-size="11" fill="#b91c1c">kod o'qiy olmaydi →</text>
  <text x="195" y="178" text-anchor="middle" font-family="system-ui" font-size="11" fill="#b91c1c">agent sinadi</text>
  <rect x="380" y="56" width="290" height="150" rx="13" fill="#fff" stroke="#5eead4" stroke-width="2"/>
  <text x="525" y="82" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#0f766e">✓ Strukturali JSON</text>
  <text x="525" y="108" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#334155">{ "ism": "Aziz",</text>
  <text x="525" y="126" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#334155">"telefon": "+99890...",</text>
  <text x="525" y="144" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#334155">"summa": 1000000 }</text>
  <text x="525" y="178" text-anchor="middle" font-family="system-ui" font-size="11" fill="#0f766e">kod ishonchli o'qiydi</text>
</svg>
<figcaption>Bir xil ma'lumot — lekin faqat strukturali shakl agent uchun ishonchli</figcaption>
</div>

<h3>Sxema — bu to'ldiriladigan anketa</h3>
<p><b>Sxema (schema)</b> — bu javobning qolipi: qaysi maydonlar bo'lishi, har biri qanaqa <b>tur</b>da (matn, son, ha/yo'q, ro'yxat) ekani va qaysilari <b>majburiy</b>ligini oldindan belgilaydi. Modelga sxema bersangiz, u xuddi <b>anketani to'ldirgandek</b> har bir katakni to'ldiradi. Bu ikki narsani kafolatlaydi:</p>
<ul>
  <li><b>Bir xillik</b> — javob har safar bir xil tuzilishda keladi, kod ishonch bilan o'qiydi.</li>
  <li><b>To'liqlik</b> — majburiy maydonlar tushib qolmaydi.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Asbob argumentlari ham — struktura</b>O'tgan darsdagi function calling esingizdami? O'sha JSON argumentlar ham aslida <b>strukturalangan natija</b>ning bir ko'rinishi. Ya'ni siz bu g'oyani allaqachon ko'rgansiz: model erkin gapirmasdan, aniq formatda buyurtma bergan edi.</div></div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Qoida</b>Agentingizning javobini <b>boshqa kod</b> o'qisa — struktura (JSON sxema) ishlating. Faqat <b>odam</b> o'qisa — erkin matn ham yetadi. Shubha bo'lsa, strukturani tanlang: keyin uni odam uchun chiroyli matnga aylantirish oson.</div></div>

<h3>Haqiqiy kod: sxema bo'yicha kafolatlangan JSON</h3>
<p>Claude'da buni <code>messages.parse</code> bajaradi: siz qolipni (sxemani) berasiz, model javobni <b>majburan</b> shu shaklda qaytaradi — boshqa kod uni taxminsiz o'qiydi (Python, Claude API):</p>
<div class="pk-code">
  <div class="pk-code-bar"><span class="d r"></span><span class="d y"></span><span class="d g"></span><span class="lang">Python · Claude API — strukturalangan natija</span></div>
  <pre><code>from pydantic import BaseModel
import anthropic

<span class="c"># Kerakli javob "qolipi" — sxema</span>
class Mijoz(BaseModel):
    ism: str
    telefon: str
    summa: int

client = anthropic.Anthropic()

javob = client.messages.parse(
    model="claude-opus-4-8",
    max_tokens=1024,
    messages=[{"role": "user",
        "content": "Ariza: Aziz Karimov, +998901234567, 1 mln so'm"}],
    output_format=Mijoz,            <span class="c"># javob shu sxemaga MAJBURAN moslanadi</span>
)

m = javob.parsed_output             <span class="c"># tekshirilgan Mijoz obyekti — taxmin yo'q</span>
print(m.ism, m.telefon, m.summa)    <span class="c"># Aziz Karimov +998901234567 1000000</span></code></pre>
</div>
<p>Diqqat: <code>m.summa</code> — <b>son</b> (1000000), million atrofida degan noaniq matn emas. Kod endi uni to'g'ridan-to'g'ri hisob-kitobda yoki bazaga ishlata oladi.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Erkin matn mo'rt: kod uni ishonchli o'qiy olmaydi. Agent javobini boshqa kod ishlatsa, modeldan <b>strukturalangan natija</b> (JSON, sxema bo'yicha) so'rang. Sxema — javobning anketasi: maydonlar, turlar va majburiylikni belgilab, <b>bir xillik</b> va <b>to'liqlik</b>ni kafolatlaydi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi agent javoblari <b>ishonchli (strukturali)</b>mi — kod oson o'qiy oladimi, yoki <b>mo'rt (erkin matn)</b>mi — kod tushunmasligi mumkinmi? To'g'ri ajrating.",
        groups: ["ishonchli (strukturali)", "mo'rt (erkin matn)"],
        items: [
          { name: "{ \"holat\": \"tasdiqlandi\", \"raqam\": 1500 }", answer: "ishonchli (strukturali)", hint: "Aniq maydonlar va qiymatlar — kod to'g'ridan-to'g'ri o'qiydi." },
          { name: "Buyurtma qabul qilindi shekilli, raqamini eslolmayapman", answer: "mo'rt (erkin matn)", hint: "Noaniq, maydonsiz matn — kod o'qiy olmaydi." },
          { name: "{ \"ob_havo\": \"quyoshli\", \"harorat_C\": 28 }", answer: "ishonchli (strukturali)", hint: "Tur va maydon aniq — strukturali, ishonchli." },
          { name: "Harorat issiqroq, balki yigirma besh-o'ttiz gradusdir", answer: "mo'rt (erkin matn)", hint: "Taxminiy, oraliq qiymat — kod aniq son ola olmaydi." },
          { name: "[ { \"nom\": \"Aziz\" }, { \"nom\": \"Dilnoza\" } ]", answer: "ishonchli (strukturali)", hint: "Aniq ro'yxat tuzilmasi — kod aylanib o'qiydi." },
          { name: "Ro'yxatda bir nechta odam bor, ulardan biri Aziz edi chamamda", answer: "mo'rt (erkin matn)", hint: "Erkin bayon, aniq tuzilma yo'q — ishonchsiz." }
        ]
      },
      quiz: [
        { q: "Agentda erkin matnli javob nega muammo tug'diradi?", o: ["U juda qisqa bo'ladi", "Javobni boshqa kod ishonchli o'qiy olmaydi (maydonlar noaniq, o'zgaruvchan)", "U ko'p token sarflaydi", "Erkin matn umuman ishlamaydi"], c: 1 },
        { q: "Strukturalangan natija eng ko'p qaysi formatda beriladi?", o: ["Rasm (PNG)", "JSON (aniq maydon va qiymatlar)", "Ovozli xabar", "Tasodifiy belgilar"], c: 1 },
        { q: "Sxema (schema) nimani belgilaydi?", o: ["Javobning rangi va shriftini", "Qaysi maydonlar bo'lishi, ularning turi va majburiyligini", "Modelning narxini", "Internet tezligini"], c: 1 },
        { q: "Strukturalangan natija qaysi ikki narsani kafolatlaydi?", o: ["Tezlik va arzonlik", "Bir xillik va to'liqlik", "Chiroylilik va qisqalik", "Maxfiylik va shifrlash"], c: 1 },
        { q: "Qachon erkin matnli javob ham yetarli bo'ladi?", o: ["Javobni boshqa kod ishlatganda", "Javobni faqat odam o'qiganda", "Hech qachon", "Faqat JSON ishlamaganda"], c: 1 }
      ]
    },

    {
      id: "b2_4",
      title: "ReAct, reasoning va rejalashtirish",
      read: "10 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling, sizdan murakkab vazifa so'rashdi: mehmonlar uchun kechki ovqat tashkil qil. Aqlli odam darrov idishlarni olib chopmaydi — avval <b>reja</b> tuzadi: 1) menyu tanlay, 2) mahsulot ro'yxati yozay, 3) bozorga boray, 4) pishiray, 5) stol bezatay. Reja bo'lsa, har bir qadam tartibli ketadi. Agent ham xuddi shunday: <b>harakatdan oldin o'ylash</b> va <b>rejalashtirish</b> uni murakkab vazifalarda ancha ishonchli qiladi.</p>

<h3>O'yla, keyin harakat qil — qayta eslaylik</h3>
<p>O'tgan darslarda ReAct naqshini ko'rgandik: model <b>avval fikrlaydi</b>, keyin harakat qiladi. Endi shu fikrlash qadamining <b>kuchini</b> ochamiz. Modelga ovoz chiqarib o'ylash imkonini bersangiz, u quyidagilarni qiladi:</p>
<ul>
  <li>Vazifani <b>kichik qismlarga</b> bo'ladi;</li>
  <li>Qaysi qadamda <b>qaysi asbob</b> kerakligini oldindan ko'radi;</li>
  <li>Mantiqiy <b>tartib</b>ni belgilaydi (nimadan boshlash kerak).</li>
</ul>
<p>Bu ichki o'ylash zanjiri — inglizcha <b>chain-of-thought</b> (fikrlar zanjiri) deyiladi. U modelga bitta sakrash bilan emas, <b>qadam-baqadam</b> mulohaza yuritib, to'g'ri xulosaga kelishga yordam beradi.</p>

<h3>Aniq rejalashtirish: avval plan, keyin ijro</h3>
<p>Murakkab vazifalarda yana bir kuchli usul bor: agent <b>birinchi qadamda</b> umuman harakat qilmaydi — u faqat <b>reja</b> tuzadi. Mana shu vazifani hal qilish uchun avval A, keyin B, keyin C qilaman. Shundan keyingina ijroga o'tadi. Bu — odam keling, avval rejani aytib olay deganiga o'xshaydi.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="250" rx="16" fill="#f7fbfa"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Avval reja, keyin ijro</text>
  <rect x="60" y="56" width="600" height="56" rx="13" fill="#fef3c7" stroke="#fde68a"/>
  <text x="80" y="80" font-family="system-ui" font-size="12" font-weight="800" fill="#b45309">📋 REJA (1-fikr)</text>
  <text x="80" y="100" font-family="system-ui" font-size="11" fill="#475569">1) Narxni ol  ·  2) Chegirmani hisobla  ·  3) Yakuniy summani ayt</text>
  <rect x="60" y="134" width="180" height="52" rx="12" fill="#e7f6ee" stroke="#bfe6d0"/>
  <text x="150" y="158" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#15803d">Qadam 1</text>
  <text x="150" y="175" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">narxni ol</text>
  <rect x="270" y="134" width="180" height="52" rx="12" fill="#d6f2ed" stroke="#5eead4"/>
  <text x="360" y="158" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#0f766e">Qadam 2</text>
  <text x="360" y="175" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">chegirma hisobla</text>
  <rect x="480" y="134" width="180" height="52" rx="12" fill="#e0f2fe" stroke="#bae6fd"/>
  <text x="570" y="158" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#0369a1">Qadam 3</text>
  <text x="570" y="175" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">summani ayt</text>
  <path d="M150 112 V130" stroke="#94a3b8" stroke-width="2" marker-end="url(#c1)"/>
  <path d="M240 160 H266" stroke="#94a3b8" stroke-width="2" marker-end="url(#c1)"/>
  <path d="M450 160 H476" stroke="#94a3b8" stroke-width="2" marker-end="url(#c1)"/>
  <text x="360" y="220" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">reja yo'l xaritasi bo'lib xizmat qiladi — agent adashmaydi</text>
  <defs><marker id="c1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker></defs>
</svg>
<figcaption>Reja — agentning yo'l xaritasi; har bir qadam undan kelib chiqadi</figcaption>
</div>

<h3>Step-back: orqaga bir qadam</h3>
<p>Yana bir foydali usul — <b>step-back</b> (orqaga qadam). Agent murakkab savolga to'g'ridan-to'g'ri tashlanmasdan, avval <b>umumiyroq savol</b> beradi: Bu vazifaning asl mohiyati nima? Qanday tamoyil bu yerga taalluqli?. Umumiy rasmni ko'rgach, aniq yechimga qaytadi. Bu — daraxtni emas, avval o'rmonni ko'rishga o'xshaydi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Nega rejalashtirish ko'p token sarflaydi-yu, baribir foydali?</b>To'g'ri — o'ylash va reja tuzish qo'shimcha matn (token) demakdir. Lekin u <b>xato qadamlarni</b> kamaytiradi. Rejasiz agent noto'g'ri yo'ldan ketib, ko'p asbobni behuda chaqirishi mumkin — bu undan ham qimmatga tushadi. Demak reja — tejamkorlik vositasi.</div></div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Amaliy maslahat</b>Murakkab vazifa bersangiz, agentga avval qisqacha reja tuz, keyin bajar deb ayting. Bu bitta jumla ko'pincha natija sifatini sezilarli oshiradi — ayniqsa bir necha asbob va shart bo'lgan vazifalarda.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Murakkab vazifada agent <b>harakatdan oldin o'ylashi</b> va <b>rejalashtirishi</b> kerak. <b>Chain-of-thought</b> — qadam-baqadam mulohaza; <b>plan-then-act</b> — avval reja, keyin ijro; <b>step-back</b> — avval umumiy rasmga qarash. Reja qo'shimcha token sarflasa-da, xato qadamlarni kamaytirib, oxir-oqibat tejamliroq bo'ladi.</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Maqsad: <b>mijozga 15% chegirma bilan yakuniy narxni aytish</b>. Diqqat qiling — agent birinchi qadamda harakat qilmaydi, avval <b>qisqa reja</b> tuzadi, keyin reja bo'yicha ijro etadi. Keyingi qadamni bosib kuzating.",
        goal: "Anvar non nonidan 15% chegirma bilan yakuniy narxni mijozga ayt.",
        tools: [
          { name: "narx_ol", label: "narx_ol", desc: "do'kondan narx" },
          { name: "chegirma_hisobla", label: "chegirma_hisobla", desc: "foiz chegirma" },
          { name: "xabar", label: "xabar", desc: "foydalanuvchiga javob" }
        ],
        steps: [
          { kind: "thought", text: "Avval reja tuzaman. REJA: 1) Anvar non narxini olaman; 2) undan 15% chegirma hisoblayman; 3) yakuniy summani mijozga yozaman. Endi reja bo'yicha ish boshlayman." },
          { kind: "action", tool: "narx_ol", args: "{ \"dokon\": \"Anvar non\" }" },
          { kind: "observation", text: "{ \"narx_som\": 5000 }" },
          { kind: "thought", text: "Reja 1-qadami bajarildi: narx 5000 so'm. Endi 2-qadam — 15% chegirmani hisoblayman." },
          { kind: "action", tool: "chegirma_hisobla", args: "{ \"narx\": 5000, \"foiz\": 15 }" },
          { kind: "observation", text: "{ \"chegirma_som\": 750, \"yakuniy_som\": 4250 }" },
          { kind: "thought", text: "Reja 2-qadami tugadi: yakuniy narx 4250 so'm. Endi 3-qadam — natijani mijozga yetkazaman." },
          { kind: "action", tool: "xabar", args: "{ \"matn\": \"Anvar non: 5000 som, 15% chegirma bilan 4250 som.\" }" },
          { kind: "observation", text: "{ \"yuborildi\": true }" },
          { kind: "answer", text: "Reja bo'yicha bajardim: Anvar non — 5000 so'm, 15% chegirma (750 so'm) bilan yakuniy narx 4250 so'm." }
        ]
      },
      quiz: [
        { q: "Chain-of-thought (fikrlar zanjiri) nimani anglatadi?", o: ["Agentlarni zanjir bilan bog'lash", "Modelning qadam-baqadam mulohaza yuritib xulosaga kelishi", "Bir nechta modelni ulash", "Token chegarasini oshirish"], c: 1 },
        { q: "Avval reja, keyin ijro (plan-then-act) yondashuvida agent birinchi qadamda nima qiladi?", o: ["Darrov birinchi asbobni chaqiradi", "Hech narsa qilmaydi", "Avval rejani tuzadi, keyin ijroga o'tadi", "Foydalanuvchidan ruxsat so'raydi"], c: 2 },
        { q: "Step-back (orqaga qadam) usuli nima?", o: ["Oxirgi harakatni bekor qilish", "Avval umumiyroq savol berib, mohiyatni tushunib, keyin aniq yechimga qaytish", "Bir qadam ortga qaytib, qaytadan boshlash", "Token sarfini kamaytirish"], c: 1 },
        { q: "Rejalashtirish ko'proq token sarflasa ham, nega foydali?", o: ["U javobni chiroyliroq qiladi", "U xato va behuda qadamlarni kamaytirib, oxir-oqibat tejamliroq bo'ladi", "U modelni tezlashtiradi", "Token sarfining ahamiyati yo'q"], c: 1 },
        { q: "Murakkab vazifada agentga qanday ko'rsatma natijani yaxshilaydi?", o: ["Imkon qadar tez javob ber", "Avval qisqacha reja tuz, keyin bajar", "Hech qachon o'ylama", "Faqat bitta asbob ishlat"], c: 1 }
      ]
    },

    {
      id: "b2_5",
      title: "O'z-o'zini tekshirish: reflection va evaluator-optimizer",
      read: "10 daqiqa",
      html: `
<p class="pk-lead">Yaxshi yozuvchi maqolasini bir o'tirishda yozib, darrov chop etmaydi. U yozadi, <b>qayta o'qiydi</b>, mana bu jumla noaniq, bu fakt shubhali deb topadi, <b>tuzatadi</b>, keyin yakuniy nusxani beradi. Aynan shu odat — birinchi urinishni baholab, yaxshilash — agentni ham ancha ishonchli qiladi. Bu darsda agentga <b>o'zini tekshirish</b>ni o'rgatamiz.</p>

<h3>Reflection: agent o'z ishini tanqid qiladi</h3>
<p><b>Reflection</b> (o'ziga nazar tashlash) — bu agentning oddiy, lekin kuchli odati: u birinchi javobni <b>yakuniy</b> deb hisoblamaydi. Avval qoralama (draft) tuzadi, keyin o'ziga savol beradi: Bu javob to'g'rimi? Biror narsa tushib qolmaganmi? Xato bormi?. Agar kamchilik topsa — tuzatadi. Faqat shundan keyin yakuniy javobni beradi.</p>
<p>Bu uch bosqichli tsiklni shunday tasavvur qiling:</p>
<ol>
  <li><b>Generatsiya</b> — birinchi qoralama javobni tuzadi.</li>
  <li><b>Tanqid (kritika)</b> — o'z javobini tekshiradi, kamchilik qidiradi.</li>
  <li><b>Yaxshilash</b> — topilgan kamchilikni tuzatib, yakuniy javobni beradi.</li>
</ol>

<div class="pk-fig">
<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="220" rx="16" fill="#f7fbfa"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Generatsiya → Tanqid → Yaxshilash</text>
  <rect x="50" y="80" width="170" height="64" rx="13" fill="#e7f6ee" stroke="#bfe6d0"/>
  <text x="135" y="108" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#15803d">✍ Qoralama</text>
  <text x="135" y="128" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">birinchi javob</text>
  <rect x="275" y="80" width="170" height="64" rx="13" fill="#fef3c7" stroke="#fde68a"/>
  <text x="360" y="108" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#b45309">🔍 Tanqid</text>
  <text x="360" y="128" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">kamchilik qidir</text>
  <rect x="500" y="80" width="170" height="64" rx="13" fill="#d6f2ed" stroke="#5eead4"/>
  <text x="585" y="108" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#0f766e">✅ Yaxshilash</text>
  <text x="585" y="128" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">tuzat, yakunla</text>
  <path d="M220 112 H271" stroke="#0d9488" stroke-width="2.4" marker-end="url(#d1)"/>
  <path d="M445 112 H496" stroke="#0d9488" stroke-width="2.4" marker-end="url(#d1)"/>
  <path d="M360 144 q0 42 -112 42 q-113 0 -113 -38" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#d2)"/>
  <text x="360" y="206" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#94a3b8">kerak bo'lsa, tanqid yana qoralamaga qaytib takrorlanishi mumkin</text>
  <defs>
    <marker id="d1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker>
    <marker id="d2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker>
  </defs>
</svg>
<figcaption>Agent o'z javobini tanqid qilib, tuzatadi — sifat oshadi</figcaption>
</div>

<h3>Evaluator-optimizer: ikki rolga bo'linish</h3>
<p>Reflection g'oyasini bir pog'ona yuqori ko'tarsak, <b>evaluator-optimizer</b> naqshiga kelamiz. Bu yerda ikkita rol bo'ladi:</p>
<ul>
  <li><b>Optimizer (yaratuvchi)</b> — javob yoki yechim ishlab chiqaradi.</li>
  <li><b>Evaluator (baholovchi)</b> — o'sha javobni <b>belgilangan mezonlar</b> bo'yicha baholaydi: to'g'rimi? to'liqmi? talabga mosmi?. Agar yetarli bo'lmasa, nima kamligini aytadi.</li>
</ul>
<p>Optimizer baholovchining izohini olib, javobni <b>qayta ishlaydi</b>. Bu sikl javob mezonga yetguncha takrorlanadi. Bu — xuddi muharrir va yozuvchi birga ishlagandek: biri yozadi, ikkinchisi mana buni yaxshila deydi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Qachon ishlatish kerak?</b>Reflection har doim ham shart emas — oddiy savolga u ortiqcha (qo'shimcha token va vaqt). Lekin <b>aniqlik muhim</b> bo'lgan vazifalarda — kod yozish, hisob-kitob, rasmiy hujjat, faktlarni tekshirish — o'z-o'zini tekshirish xatolarni sezilarli kamaytiradi.</div></div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Cheksiz tsikldan ehtiyot bo'ling</b>O'zini tekshirish foydali, lekin agentni to'la mukammallikkacha tuzat deb qo'ymang — u cheksiz aylanib qolishi mumkin. Har doim <b>chegara</b> qo'ying: masalan ko'pi bilan 2 marta tuzat yoki mezonga yetsa to'xta.</div></div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Soddalashtiruvchi tasavvur</b>Reflection = yozdim, qayta o'qidim, tuzatdim. Evaluator-optimizer = yozuvchi + muharrir. Ikkalasi ham bir g'oyaga asoslanadi: <b>birinchi javob — oxirgi emas</b>.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b><b>Reflection</b> — agent qoralama tuzadi, o'zini tanqid qiladi, kamchilikni tuzatib yakunlaydi. <b>Evaluator-optimizer</b> — yaratuvchi va baholovchi rollari: biri javob beradi, ikkinchisi mezon bo'yicha baholaydi, sikl yaxshilanguncha takrorlanadi. Bu aniqlik muhim vazifalarda xatoni kamaytiradi — lekin tsiklga chegara qo'ying.</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Maqsad: <b>mijozga rasmiy javob xati yozish</b>. Agent avval qoralama tuzadi, keyin o'zini tekshirib <b>kamchilik topadi</b> (sana yo'q!), uni tuzatadi va yakuniy javobni beradi. Keyingi qadamni bosib, o'z-o'zini tekshirishni kuzating.",
        goal: "Mijozga buyurtmasi tayyor bo'lganini bildiruvchi rasmiy xat yoz.",
        tools: [
          { name: "qoralama_yoz", label: "qoralama_yoz", desc: "matn qoralamasi" },
          { name: "xabar", label: "xabar", desc: "yakuniy xatni yuborish" }
        ],
        steps: [
          { kind: "thought", text: "Avval xatning qoralamasini tuzaman, keyin uni tekshiraman." },
          { kind: "action", tool: "qoralama_yoz", args: "{ \"matn\": \"Hurmatli mijoz, buyurtmangiz tayyor. Olib ketishingiz mumkin.\" }" },
          { kind: "observation", text: "{ \"qoralama\": \"Hurmatli mijoz, buyurtmangiz tayyor...\" }" },
          { kind: "thought", text: "Endi qoralamani o'zim tekshiraman. Bir kamchilik bor: xatda buyurtma RAQAMI va OLIB KETISH MUDDATI ko'rsatilmagan. Mijoz qaysi buyurtma va qachongacha ekanini bilmaydi. Buni tuzataman." },
          { kind: "action", tool: "qoralama_yoz", args: "{ \"matn\": \"Hurmatli mijoz, №1500 buyurtmangiz tayyor. Uni 20-iyungacha do'konimizdan olib ketishingiz mumkin. Rahmat!\" }" },
          { kind: "observation", text: "{ \"qoralama\": \"Hurmatli mijoz, №1500 buyurtmangiz tayyor...\" }" },
          { kind: "thought", text: "Endi xat to'liq: raqam ham, muddat ham bor, ohang rasmiy. Yakuniy nusxani yuboraman." },
          { kind: "action", tool: "xabar", args: "{ \"matn\": \"Hurmatli mijoz, №1500 buyurtmangiz tayyor. Uni 20-iyungacha olib ketishingiz mumkin. Rahmat!\" }" },
          { kind: "observation", text: "{ \"yuborildi\": true }" },
          { kind: "answer", text: "Xatni o'zim tekshirib, kamchilikni (buyurtma raqami va muddati yo'q edi) tuzatdim. Yakuniy rasmiy xat mijozga yuborildi." }
        ]
      },
      quiz: [
        { q: "Reflection (o'ziga nazar tashlash) qadamlari to'g'ri tartibda qaysi?", o: ["Yakunlash → tanqid → qoralama", "Generatsiya (qoralama) → tanqid → yaxshilash", "Faqat bitta javob berish", "Tanqid → generatsiya → o'chirish"], c: 1 },
        { q: "Evaluator-optimizer naqshidagi ikkita rol qaysi?", o: ["O'qituvchi va o'quvchi", "Yaratuvchi (optimizer) va baholovchi (evaluator)", "Mijoz va sotuvchi", "Server va mijoz"], c: 1 },
        { q: "Reflection eng ko'p qaysi vazifalarda foydali?", o: ["Oddiy salomlashishda", "Aniqlik muhim bo'lgan vazifalarda (kod, hisob, rasmiy hujjat)", "Faqat tarjimada", "Hech qachon"], c: 1 },
        { q: "O'z-o'zini tekshirish tsiklida qanday xavf bor va undan qanday saqlanish kerak?", o: ["Token tejaladi — chegara shart emas", "Agent cheksiz tuzatishga tushib qolishi mumkin — tsiklga chegara qo'yish kerak", "Javob har doim yomonlashadi", "Hech qanday xavf yo'q"], c: 1 },
        { q: "Reflection g'oyasining asosida qaysi tamoyil yotadi?", o: ["Birinchi javob — eng yaxshisi", "Birinchi javob oxirgi emas — uni baholab yaxshilash mumkin", "Ko'p javob — yomon", "Tekshirish vaqt isrofi"], c: 1 }
      ]
    },

    {
      id: "b2_6",
      title: "Xotira va RAG — agent sizning bilimingizni biladi",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling: do'koningiz uchun agent yasadingiz. Mijoz so'raydi: sizning qaytarish siyosatingiz qanday?. Agent buni qayerdan biladi? Modelning boshida bu ma'lumot yo'q — bu sizning <b>ichki hujjatingiz</b>. Agar har savolga butun hujjatni kontekstga tiqishtirsangiz — token tugaydi. Yechim — agentga <b>xotira</b> berish va kerakli paytda <b>kerakli parchani topib olish</b>. Bu — <b>RAG</b> deb ataladi va aynan shu darsda o'rganamiz.</p>

<h3>Ikki xil xotira: qisqa va uzoq muddatli</h3>
<p>Agentning xotirasini ikkiga bo'lish foydali:</p>
<ul>
  <li><b>Qisqa muddatli xotira</b> — bu <b>kontekst oynasi</b> (1-bosqichdan eslang). Bunda joriy suhbat, agentning fikrlari va so'nggi kuzatuvlar turadi. U <b>vaqtinchalik</b>: suhbat tugasa yoki oyna to'lsa — yo'qoladi.</li>
  <li><b>Uzoq muddatli xotira</b> — suhbatdan tashqarida, doimiy saqlanadigan bilim: hujjatlar, ma'lumotlar bazasi, oldingi suhbatlar xulosasi. U <b>katta</b> va <b>doimiy</b>, lekin kontekstga sig'maydi — shuning uchun kerakli qismini <b>qidirib</b> olamiz.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="220" rx="16" fill="#f7fbfa"/>
  <text x="360" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Ikki xotira: kontekst (qisqa) va bilim bazasi (uzoq)</text>
  <rect x="60" y="56" width="270" height="130" rx="13" fill="#e0f2fe" stroke="#bae6fd" stroke-width="2"/>
  <text x="195" y="84" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#0369a1">⏱ Qisqa muddatli</text>
  <text x="195" y="106" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">kontekst oynasi</text>
  <text x="195" y="126" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">joriy suhbat + fikrlar</text>
  <text x="195" y="152" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">kichik · tez · vaqtinchalik</text>
  <text x="195" y="170" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">suhbat tugasa yo'qoladi</text>
  <rect x="390" y="56" width="270" height="130" rx="13" fill="#e7f6ee" stroke="#bfe6d0" stroke-width="2"/>
  <text x="525" y="84" text-anchor="middle" font-family="system-ui" font-size="12.5" font-weight="800" fill="#15803d">📚 Uzoq muddatli</text>
  <text x="525" y="106" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">bilim bazasi · hujjatlar</text>
  <text x="525" y="126" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">oldingi suhbatlar xulosasi</text>
  <text x="525" y="152" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">katta · doimiy</text>
  <text x="525" y="170" text-anchor="middle" font-family="system-ui" font-size="10.5" fill="#64748b">kerakli qismi qidirib olinadi</text>
  <path d="M390 121 H334" stroke="#0d9488" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#e1)"/>
  <text x="362" y="46" text-anchor="middle" font-family="system-ui" font-size="9.5" fill="#0f766e">qidir → ol</text>
  <defs><marker id="e1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#0d9488"/></marker></defs>
</svg>
<figcaption>Katta bilim doimiy bazada turadi; faqat kerakli parcha kontekstga olinadi</figcaption>
</div>

<h3>RAG — qidir, keyin javob ber</h3>
<p><b>RAG</b> (inglizcha <i>Retrieval-Augmented Generation</i> — qidiruv bilan boyitilgan javob) juda sodda g'oyaga asoslanadi: model javob berishdan <b>oldin</b>, savolga mos ma'lumotni bilim bazasidan <b>qidirib topadi</b>, topilganini kontekstga qo'shadi va <b>shu ma'lumotga tayanib</b> javob beradi. Ya'ni model yoddan emas, <b>qo'lidagi hujjatdan</b> javob beradi.</p>
<p>RAG oqimi quyidagicha ketadi:</p>
<ol>
  <li>Foydalanuvchi savol beradi: qaytarish siyosatingiz qanday?.</li>
  <li>Savolga <b>mos parchalar</b> bilim bazasidan qidiriladi.</li>
  <li>Eng mos parchalar <b>tanlanadi</b> (masalan, eng yaqin 3 ta).</li>
  <li>Topilgan ma'lumot <b>kontekstga qo'shiladi</b>.</li>
  <li>Agent <b>shu ma'lumotga tayanib</b> javob beradi.</li>
</ol>

<h3>Nega RAG kuchli?</h3>
<ul>
  <li><b>Yangi va shaxsiy bilim</b> — model o'qitilgandan keyingi yoki sizning ichki ma'lumotingizni ishlata oladi.</li>
  <li><b>Kamroq gallyutsinatsiya</b> — model taxmin qilmaydi, haqiqiy parchaga tayanadi.</li>
  <li><b>Tejamkorlik</b> — butun bazani emas, faqat kerakli parchalarni kontekstga qo'yamiz.</li>
  <li><b>Manba ko'rsatish</b> — javob qaysi hujjatdan olinganini ko'rsatish mumkin, ishonch oshadi.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Vektor bazasi nima?</b>Parchalarni mosligi bo'yicha tez topish uchun ular ko'pincha <b>vektor bazasi</b>da saqlanadi. Sodda qilib aytganda, har bir matn parchasi <b>ma'no</b>siga qarab raqamli manzilga aylantiriladi; savol ham shunday aylantiriladi, keyin manzili eng yaqin parchalar topiladi. Tafsilotini hozir bilish shart emas — muhimi: <b>ma'noga ko'ra qidiriladi</b>, faqat so'z mosligi bo'yicha emas.</div></div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Kontekstni boshqarish</b>Kontekst oynasi cheklangani uchun, unga <b>hamma narsani</b> tiqishtirmang. Yaxshi agent: kerakli parchanigina qidirib oladi, eski va keraksiz qismni tashlaydi, muhim xulosalarni qisqartirib saqlaydi. Bu — token tejaydi va modelni chalg'itmaydi.</div></div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>RAG sehrli tayoqcha emas</b>Agar bilim bazasi <b>noto'g'ri yoki eskirgan</b> bo'lsa — agent ham noto'g'ri javob beradi. Topilgan parchalar mos kelmasa, javob sifati pasayadi. Demak RAG sifati — sizning <b>bazangiz sifatiga</b> bog'liq.</div></div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Agentda ikki xotira bor: <b>qisqa muddatli</b> (kontekst oynasi, vaqtinchalik) va <b>uzoq muddatli</b> (bilim bazasi, doimiy). <b>RAG</b> — savolga mos parchani bazadan <b>qidirib</b>, kontekstga <b>qo'shib</b>, shunga <b>tayanib</b> javob berish. U yangi/shaxsiy bilimni ishlatishga imkon beradi va gallyutsinatsiyani kamaytiradi — lekin sifati bilim bazasi sifatiga bog'liq.</span></div>`,
      sim: {
        type: "order",
        intro: "RAG (qidiruv bilan boyitilgan javob) qadamlarini to'g'ri tartibga keling: foydalanuvchi savol beradi, mos parchalar qidiriladi, tanlanadi, kontekstga qo'shiladi, agent shunga tayanib javob beradi. Strelkalar bilan joylashtiring.",
        steps: [
          "Foydalanuvchi savol beradi",
          "Savolga mos parchalar bilim bazasidan qidiriladi",
          "Eng mos parchalar tanlanadi",
          "Topilgan ma'lumot kontekstga qo'shiladi",
          "Agent shu ma'lumotga tayanib javob beradi"
        ]
      },
      quiz: [
        { q: "Agentning qisqa muddatli xotirasi aslida nima?", o: ["Bilim bazasi", "Kontekst oynasi — joriy suhbat va fikrlar, vaqtinchalik", "Internet", "Asboblar ro'yxati"], c: 1 },
        { q: "Uzoq muddatli xotira qanday xususiyatga ega?", o: ["Kichik va tez yo'qoladigan", "Katta va doimiy, kontekstga sig'maydi — kerakli qismi qidiriladi", "Faqat raqamlardan iborat", "Modelning ichida o'rnatilgan"], c: 1 },
        { q: "RAG g'oyasining mohiyati nima?", o: ["Modelni qaytadan o'qitish", "Javobdan oldin mos ma'lumotni bazadan qidirib, kontekstga qo'shib, shunga tayanib javob berish", "Barcha hujjatni har savolda kontekstga solish", "Asboblarni o'chirish"], c: 1 },
        { q: "RAG quyidagilardan qaysi biriga YORDAM BERADI?", o: ["Modelning rangini o'zgartirish", "Yangi/shaxsiy bilimni ishlatish va gallyutsinatsiyani kamaytirish", "Internetni tezlashtirish", "Token chegarasini cheksiz qilish"], c: 1 },
        { q: "RAG javobining sifati eng ko'p nimaga bog'liq?", o: ["Internet tezligiga", "Bilim bazasining sifatiga (to'g'ri va yangi bo'lishiga)", "Ekran o'lchamiga", "Foydalanuvchi yoshiga"], c: 1 }
      ]
    }
  ]
});
