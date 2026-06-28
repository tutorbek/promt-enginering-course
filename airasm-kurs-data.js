/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   1-modul: Kirish — AI rasm dunyosi
   Format: window.AIRASM_COURSE = { title, subtitle, modules:[{ id,title,
     lessons:[{ id, title, read, html, sim?, quiz:[{q,o:[4],c}] }] }] }
   - sim turlari: "classify" | "order" | "build" | "compare"
   - Boshqa modullar push bilan ulanadi (airasm-kurs-m2.js, ...).
   ============================================================ */
window.AIRASM_COURSE = {
  title: "AI bilan rasm yaratish",
  subtitle: "Noldan advanced darajagacha",
  modules: [
    {
      id: "a1",
      title: "Kirish — AI rasm dunyosi",
      lessons: [
        {
          id: "a1_1",
          title: "AI rasm nima va qanday ishlaydi",
          read: "8 daqiqa",
          html: `
<p class="pk-lead">Bir necha yil oldin rasm chizish uchun qo'l mahorati yoki murakkab dasturlar kerak edi. Bugun esa siz <b>so'z bilan tasvirlasangiz</b> — sun'iy intellekt sizga o'rniga rasm chizib beradi. Bu sehr emas, balki tushunarli texnologiya. Birinchi darsda AI rasmni qanday «o'ylab topishi»ni sodda tilda ko'rib chiqamiz — shunda butun kurs davomida nima qilayotganingizni aniq tushunasiz.</p>

<h3>Text-to-image — matndan rasm</h3>
<p>AI rasm yaratishning asosiy g'oyasi oddiy: siz <b>matn</b> (tavsif) yozasiz, model esa shu tavsifga mos <b>yangi rasm</b> chizadi. Bu matn <b>prompt</b> deb ataladi. Masalan, «quyosh botayotganda dengiz bo'yida turgan mayoq» deb yozsangiz — model shunga o'xshash manzarani yaratadi. Siz qancha aniq tasvirlasangiz, natija shunchalik sizning tasavvuringizga yaqin bo'ladi.</p>

<h3>Diffusion — shovqindan rasmga</h3>
<p>Eng keng tarqalgan modellar <b>diffusion</b> usulida ishlaydi. Buni shunday tasavvur qiling: model avval <b>tasodifiy shovqin</b>dan (televizordagi «qor» kabi donador tasvir) boshlaydi va sizning tavsifingizga mos kelguncha uni <b>bosqichma-bosqich</b> tozalab, aniqlashtirib boradi. Har bir qadamda rasm biroz tiniqlashadi — oxirida esa tayyor tasvir paydo bo'ladi.</p>
<p>Model bunday qilishni millionlab rasm va ularning tavsiflarini <b>o'rganish</b> orqali bilib olgan. Ya'ni u «mushuk» degan so'z odatda qanday tasvirlar bilan birga kelishini o'rgangan — va shu naqshlar asosida yangi mushuk rasmini chizadi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>AI rasmni internetdan nusxa qilmaydi</b>Ko'pchilik o'ylaydiki, AI tayyor rasmni qidirib topib beradi. Aslida unday emas — model har safar <b>yangi</b> tasvir yaratadi. Lekin u mavjud rasmlardan o'rgangani uchun mualliflik va axloq masalalari bor; bularni kursning oxirgi modulida batafsil ko'ramiz.</div></div>

<h3>Nega ba'zan g'alati chiqadi</h3>
<p>AI inson kabi <b>tushunmaydi</b> — u faqat naqshlar asosida taxmin qiladi. Shuning uchun ba'zan qo'lda olti barmoq chizadi yoki rasmga yozilgan harflar ma'nosiz bo'ladi. Bu — kamchilik emas, balki texnologiyaning hozirgi tabiati. Yaxshi yangilik: <b>aniq prompt</b> va to'g'ri usullar bilan bunday xatolarni kamaytirish mumkin — buni ham o'rganamiz.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="f11bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="f11ai" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="f11sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <linearGradient id="f11df" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cbd5e1"/><stop offset=".5" stop-color="#a78bfa"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <filter id="f11sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#7c3aed" flood-opacity=".22"/></filter>
    <clipPath id="f11clip"><rect x="556" y="66" width="108" height="72" rx="8"/></clipPath>
    <marker id="f11ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#a78bfa"/></marker>
  </defs>
  <rect width="720" height="210" rx="16" fill="url(#f11bg)"/>
  <circle cx="652" cy="36" r="82" fill="#f3e0ff" opacity=".5"/>
  <circle cx="48" cy="186" r="50" fill="#fbe3f3" opacity=".5"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Matn → AI (diffusion) → Rasm</text>
  <g filter="url(#f11sh)"><rect x="40" y="66" width="152" height="80" rx="13" fill="#ffffff"/></g>
  <rect x="40" y="66" width="152" height="80" rx="13" fill="none" stroke="#ead8fb"/>
  <text x="56" y="89" font-family="system-ui" font-size="9" font-weight="800" fill="#a21caf">PROMPT</text>
  <text x="56" y="107" font-family="system-ui" font-size="9.3" font-weight="600" fill="#6b21a8">dengiz bo'yidagi</text>
  <text x="56" y="121" font-family="system-ui" font-size="9.3" font-weight="600" fill="#6b21a8">mayoq, oltin</text>
  <text x="56" y="135" font-family="system-ui" font-size="9.3" font-weight="600" fill="#6b21a8">soat yorug'ligi</text>
  <path d="M194 106 H234" stroke="#a78bfa" stroke-width="2.4" marker-end="url(#f11ar)"/>
  <g filter="url(#f11sh)"><rect x="240" y="58" width="250" height="96" rx="14" fill="url(#f11ai)"/></g>
  <rect x="240" y="58" width="250" height="30" rx="14" fill="#ffffff" opacity=".13"/>
  <text x="365" y="84" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#ffffff">AI model</text>
  <rect x="264" y="100" width="202" height="22" rx="7" fill="url(#f11df)"/>
  <text x="365" y="142" text-anchor="middle" font-family="system-ui" font-size="8.7" fill="#ffffff" opacity=".9">shovqin → bosqichma-bosqich → tiniq</text>
  <path d="M492 106 H532" stroke="#a78bfa" stroke-width="2.4" marker-end="url(#f11ar)"/>
  <g filter="url(#f11sh)"><rect x="546" y="56" width="128" height="92" rx="13" fill="url(#f11ai)"/></g>
  <g clip-path="url(#f11clip)">
    <rect x="556" y="66" width="108" height="72" fill="url(#f11sky)"/>
    <circle cx="582" cy="88" r="11" fill="#fff7d6"/>
    <path d="M556 138 L556 122 L578 102 L596 118 L618 96 L664 122 L664 138 Z" fill="#6d28d9" opacity=".8"/>
    <path d="M556 138 L556 128 L574 114 L592 128 L612 112 L664 130 L664 138 Z" fill="#5b21b6" opacity=".6"/>
  </g>
  <path d="M660 42 q.8 4 5 4.6 q-4.2.6 -5 4.6 q-.8-4 -5-4.6 q4.2-.6 5-4.6Z" fill="#e879f9" opacity=".85"/>
</svg>
<figcaption>Tavsifingiz shovqindan tiniq rasmgacha bosqichma-bosqich shakllanadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>AI rasm — matnli tavsif (prompt) asosida yaratiladigan yangi tasvir. Diffusion modellari shovqindan boshlab, tavsifga mos kelguncha rasmni bosqichma-bosqich aniqlashtiradi. AI inson kabi tushunmaydi — naqshlar asosida taxmin qiladi, shuning uchun aniq prompt muhim.</span></div>`,
          sim: {
            type: "classify",
            intro: "AI rasm yaratish haqidagi quyidagi fikrlarni baholang: <b>to'g'ri</b> tushunchami yoki <b>noto'g'ri</b>mi?",
            groups: ["to'g'ri", "noto'g'ri"],
            items: [
              { name: "AI matnli tavsif asosida yangi tasvir yaratadi", answer: "to'g'ri", hint: "Aynan shunday — siz tasvirlaysiz, model chizadi." },
              { name: "AI tayyor rasmni internetdan qidirib, nusxa qilib beradi", answer: "noto'g'ri", hint: "Model har safar yangi rasm yaratadi, nusxa qilmaydi." },
              { name: "Tavsif qancha aniq bo'lsa, natija shuncha mos bo'ladi", answer: "to'g'ri", hint: "Aniq prompt — aniqroq natija." },
              { name: "AI inson kabi tushunadi, shuning uchun hech qachon xato qilmaydi", answer: "noto'g'ri", hint: "AI tushunmaydi, taxmin qiladi — shuning uchun ba'zan g'alati chiqadi." },
              { name: "Bir xil promptdan har xil natijalar chiqishi mumkin", answer: "to'g'ri", hint: "Tasodifiy shovqindan boshlangani uchun natijalar har xil bo'ladi." },
              { name: "AI rasm yaratish faqat qimmat dasturlardagina mumkin", answer: "noto'g'ri", hint: "Bepul va oson vositalar ham bor — keyingi darsda ko'ramiz." }
            ]
          },
          quiz: [
            { q: "AI rasm yaratish (text-to-image) asosi nimada?", o: ["Tayyor rasmni qidirishda", "Internetdan rasm yuklab olishda", "Matnli tavsif asosida yangi rasm chizishda", "Rasmni qo'lda tahrirlashda"], c: 2 },
            { q: "Diffusion modeli rasmni qanday hosil qiladi?", o: ["Shovqindan boshlab, tavsifga mos kelguncha bosqichma-bosqich aniqlashtiradi", "Bitta urinishda tayyor rasm chiqaradi", "Rassomdan so'rab oladi", "Rasmni ikkiga bo'lib ulaydi"], c: 0 },
            { q: "Prompt nima?", o: ["Rasmning narxi", "Modelga beriladigan matnli tavsif", "Rasm formati", "Dastur nomi"], c: 1 },
            { q: "Nega AI ba'zan qo'l yoki harflarni xato chizadi?", o: ["Internet sekin bo'lgani uchun", "U inson kabi tushunmaydi, naqshlar asosida taxmin qiladi", "Rasm kichik bo'lgani uchun", "Bu hech qachon bo'lmaydi"], c: 1 },
            { q: "Quyidagilardan qaysi biri to'g'ri?", o: ["AI rasmni internetdan nusxa qiladi", "Bir xil promptdan doim aynan bir xil rasm chiqadi", "AI mavjud rasmlardan o'rgangan naqshlar asosida yangi tasvir yaratadi", "AI faqat mavjud rasmlarni ko'rsatadi"], c: 2 }
          ]
        },

        {
          id: "a1_2",
          title: "Vositalar olami: qaysi birini tanlash",
          read: "9 daqiqa",
          html: `
<p class="pk-lead">AI rasm yaratadigan o'nlab vositalar bor va har oyda yangilari chiqadi. Boshlovchini bu ko'plik adashtiradi: «qaysi birini tanlasam?». Yaxshi xabar — boshida vositaning o'zi unchalik muhim emas. Eng muhim ko'nikma — <b>yaxshi prompt yozish</b> — barcha vositaga birdek ko'chadi. Shu darsda asosiy vositalar bilan tanishamiz va sizga mosini tanlashni o'rganamiz.</p>

<h3>Asosiy vositalar bilan tanishuv</h3>
<p>Vositalarni ikki katta guruhga bo'lish mumkin: <b>oson va bepul</b> (boshlash uchun) hamda <b>kuchli va ilg'or</b> (ko'proq boshqaruv beradigan). Quyida eng mashhurlari:</p>

<table class="pk-tbl">
  <tr><th>Vosita</th><th>Qulaylik</th><th>Kuchli tomoni</th></tr>
  <tr><td><b>ChatGPT</b> (rasm)</td><td>Juda oson, suhbat ichida</td><td>Boshlovchi uchun eng qulay kirish</td></tr>
  <tr><td><b>Google Gemini</b></td><td>Oson, bepul</td><td>Tez va sifatli natija</td></tr>
  <tr><td><b>Leonardo.ai</b></td><td>O'rta, bepul rejasi bor</td><td>Ko'proq sozlama va boshqaruv</td></tr>
  <tr><td><b>Midjourney</b></td><td>O'rta, pullik</td><td>Yuqori badiiy sifat — sanoat standarti</td></tr>
  <tr><td><b>Stable Diffusion</b></td><td>Murakkab, bepul/ochiq</td><td>To'liq nazorat, cheksiz sozlama</td></tr>
</table>
<p>Bu ro'yxat o'zgarib turadi — yangi vositalar paydo bo'ladi, eskilarining imkoniyatlari kengayadi. Shuning uchun aniq nomlarni yodlashga emas, <b>tamoyillarni</b> tushunishga e'tibor bering.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Boshlovchiga maslahat: bepuldan boshlang</b>Pulga shoshilmang. ChatGPT, Gemini yoki Leonardo'ning bepul imkoniyatlari bilan prompt yozishni mashq qiling. Ko'nikma oshgach, professional vositalar (Midjourney, Stable Diffusion) ham oson tushunarli bo'ladi — chunki <b>prompt mantig'i</b> hammasida bir xil.</div></div>

<h3>Web, ilova yoki Telegram-bot</h3>
<p>Bir xil model turli ko'rinishda taqdim etilishi mumkin: <b>sayt</b> orqali (brauzerda), <b>ilova</b> orqali (telefonga o'rnatiladi) yoki <b>Telegram-bot</b> orqali. O'zbekistonda Telegram-botlar ayniqsa qulay — alohida ro'yxatdan o'tmasdan, chat ichida rasm yaratish mumkin. Qaysi ko'rinishni tanlash — shaxsiy qulaylikka bog'liq; natija sifati asosan <b>modelga va promptga</b> bog'liq, ko'rinishga emas.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 186" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="f12bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="f12tr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#86efac"/><stop offset=".5" stop-color="#a78bfa"/><stop offset="1" stop-color="#a21caf"/></linearGradient>
    <filter id="f12sh" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#7c3aed" flood-opacity=".3"/></filter>
  </defs>
  <rect width="720" height="186" rx="16" fill="url(#f12bg)"/>
  <circle cx="64" cy="150" r="58" fill="#dcfce7" opacity=".4"/>
  <circle cx="656" cy="150" r="58" fill="#f3e0ff" opacity=".5"/>
  <text x="360" y="34" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Oson va bepuldan — kuchli va ilg'orgacha</text>
  <text x="104" y="68" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#15803d">bepul · oson</text>
  <text x="628" y="68" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#a21caf">kuchli · ilg'or</text>
  <rect x="80" y="97" width="560" height="9" rx="4.5" fill="url(#f12tr)"/>
  <g font-family="system-ui" font-size="10.5" font-weight="700">
    <g filter="url(#f12sh)"><circle cx="104" cy="101.5" r="9" fill="#22c55e"/></g><circle cx="104" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="72" y="121" width="64" height="20" rx="10" fill="#fff" stroke="#bbf7d0"/><text x="104" y="134.5" text-anchor="middle" fill="#15803d">ChatGPT</text>
    <g filter="url(#f12sh)"><circle cx="235" cy="101.5" r="9" fill="#4ade80"/></g><circle cx="235" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="205" y="121" width="60" height="20" rx="10" fill="#fff" stroke="#bbf7d0"/><text x="235" y="134.5" text-anchor="middle" fill="#15803d">Gemini</text>
    <g filter="url(#f12sh)"><circle cx="366" cy="101.5" r="9" fill="#a78bfa"/></g><circle cx="366" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="332" y="121" width="68" height="20" rx="10" fill="#fff" stroke="#e9d5ff"/><text x="366" y="134.5" text-anchor="middle" fill="#7c3aed">Leonardo</text>
    <g filter="url(#f12sh)"><circle cx="497" cy="101.5" r="9" fill="#9333ea"/></g><circle cx="497" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="459" y="121" width="76" height="20" rx="10" fill="#fff" stroke="#e9d5ff"/><text x="497" y="134.5" text-anchor="middle" fill="#a21caf">Midjourney</text>
    <g filter="url(#f12sh)"><circle cx="628" cy="101.5" r="9" fill="#a21caf"/></g><circle cx="628" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="588" y="121" width="80" height="20" rx="10" fill="#fff" stroke="#e9d5ff"/><text x="628" y="134.5" text-anchor="middle" fill="#a21caf">Stable Diff.</text>
  </g>
</svg>
<figcaption>Bepul vositadan boshlab, ko'nikma oshgach ilg'orlariga o'ting</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Vositalar ko'p, lekin asosiy ko'nikma — prompt yozish — hammasiga ko'chadi. Boshlovchi bepul va oson vositalardan (ChatGPT, Gemini, Leonardo) boshlagani, ko'nikma oshgach professional vositalarga (Midjourney, Stable Diffusion) o'tgani ma'qul. Natija sifati ko'rinishga emas, modelga va promptga bog'liq.</span></div>`,
          sim: {
            type: "classify",
            intro: "Quyidagi ish usullarini ajrating: <b>boshlash uchun</b> (oson/bepul) yoki <b>professional</b> (ilg'or boshqaruv talab qiladigan)?",
            groups: ["boshlash uchun", "professional"],
            items: [
              { name: "ChatGPT suhbati ichida rasm so'rab olish", answer: "boshlash uchun", hint: "Eng qulay kirish — alohida bilim talab qilmaydi." },
              { name: "Google Gemini'da bepul rasm yaratish", answer: "boshlash uchun", hint: "Bepul va oson — boshlovchi uchun mos." },
              { name: "Leonardo.ai bepul rejasida mashq qilish", answer: "boshlash uchun", hint: "Bepul reja bilan bemalol o'rganish mumkin." },
              { name: "Stable Diffusion'ni kompyuterga o'rnatib, to'liq sozlash bilan ishlash", answer: "professional", hint: "O'rnatish va sozlama bilim talab qiladi — ilg'or daraja." },
              { name: "Midjourney'ning ilg'or parametrlari bilan sifatni nozik boshqarish", answer: "professional", hint: "Parametrlarni bilish kerak — professional ish." },
              { name: "ControlNet yordamida personaj pozasini aniq nazorat qilish", answer: "professional", hint: "ControlNet — ilg'or boshqaruv vositasi." }
            ]
          },
          quiz: [
            { q: "Boshlovchi uchun eng to'g'ri maslahat qaysi?", o: ["Darrov eng qimmat vositani sotib olish", "Bepul va oson vositalardan boshlash", "Faqat Stable Diffusion o'rnatish", "Hech narsa o'rganmaslik"], c: 1 },
            { q: "Vositadan vositaga eng yaxshi ko'chadigan ko'nikma qaysi?", o: ["Dastur o'rnatish", "Yaxshi prompt yozish", "Kompyuter yig'ish", "Tezda yozish"], c: 1 },
            { q: "Rasm sifati asosan nimaga bog'liq?", o: ["Vosita web yoki ilova ekaniga", "Telegram yoki sayt ekaniga", "Modelga va promptga", "Telefon rangiga"], c: 2 },
            { q: "Quyidagilardan qaysi biri professional/ilg'or vosita hisoblanadi?", o: ["ChatGPT ichida rasm so'rash", "Gemini'da bepul yaratish", "Stable Diffusion'ni sozlab ishlatish", "Tayyor rasmni ko'rish"], c: 2 },
            { q: "Nega aniq vosita nomlarini yodlashga urinmaslik kerak?", o: ["Ular hech qachon o'zgarmaydi", "Vositalar tez o'zgaradi — tamoyilni tushunish muhimroq", "Nomlar yodlash mumkin emas", "Ularning ahamiyati yo'q"], c: 1 }
          ]
        },

        {
          id: "a1_3",
          title: "Birinchi promptdan birinchi rasmgacha",
          read: "8 daqiqa",
          html: `
<p class="pk-lead">Nazariya yetarli — endi amalda birinchi rasmingizni yaratamiz. Jarayon doim bir xil oltita qadamdan iborat: tanlash, tasavvur qilish, yozish, yaratish, baholash va yaxshilash. Eng muhim sirni darrov aytaman: <b>birinchi natija kamdan-kam mukammal bo'ladi</b> — va bu mutlaqo normal. Ustalik aynan <b>takrorlab yaxshilash</b>da.</p>

<h3>Bosqichma-bosqich</h3>
<ol>
  <li><b>Vositani oching</b> — bepul biror vosita (masalan ChatGPT yoki Gemini) tanlang.</li>
  <li><b>Maqsadni aniqlang</b> — qanday rasm kerakligini avval o'z miyangizda tasavvur qiling: nima, qayerda, qanday kayfiyatda.</li>
  <li><b>Sodda prompt yozing</b> — tasavvuringizni so'z bilan yozing. Boshida murakkablashtirmang.</li>
  <li><b>Yarating</b> — generate (yaratish) tugmasini bosing va natijani kuting.</li>
  <li><b>Baholang</b> — chiqqan rasmga qarang: nima yoqdi, nima kam? Yorug'likmi, rakursmi, detalmi?</li>
  <li><b>Yaxshilang va qayta yarating</b> — promptga kamchilikni tuzatadigan so'zlar qo'shing va yana yarating.</li>
</ol>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Iteratsiya — bu kuchsizlik emas, usul</b>Professional rassomlar ham birinchi urinishda to'xtamaydi. AI bilan ishlashda ham har bir qayta yaratish promptni biroz aniqlashtiradi. 3–4 marta yaxshilab qayta yaratish — oddiy va to'g'ri ish jarayoni.</div></div>

<h3>Birinchi promptga misol</h3>
<p>Aytaylik, sokin tabiat manzarasi kerak. Sodda promptdan boshlaymiz, keyin uni boyitamiz:</p>

<div class="pk-ex pk-bad"><span class="tag">Juda sodda</span>tog' manzarasi</div>
<div class="pk-ex pk-good"><span class="tag">Yaxshilangan</span>quyosh chiqayotgan paytda tumanli tog' manzarasi, oldinda ko'l, sokin va tinch kayfiyat, yumshoq tabiiy yorug'lik</div>

<p>Ikkala prompt ham ishlaydi, lekin ikkinchisi <b>natijani sizning tasavvuringizga ancha yaqinlashtiradi</b>. Keyingi modulda promptni shu tarzda boyitishni chuqur o'rganamiz.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 178" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="f13bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="f13c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#faf2ff"/></linearGradient>
    <filter id="f13sh" x="-30%" y="-40%" width="160%" height="190%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <marker id="f13a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#a78bfa"/></marker>
    <marker id="f13a2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#a21caf"/></marker>
  </defs>
  <rect width="720" height="178" rx="16" fill="url(#f13bg)"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Yarat → bahola → yaxshila (takrorlanadigan halqa)</text>
  <g font-family="system-ui" font-size="11.5" font-weight="800" fill="#7c3aed">
    <g filter="url(#f13sh)"><rect x="116" y="62" width="136" height="54" rx="13" fill="url(#f13c)" stroke="#ead8fb"/></g>
    <circle cx="139" cy="89" r="11" fill="#f3e8ff"/><path d="M134 89 h10 M139 84 v10" stroke="#a21caf" stroke-width="2" stroke-linecap="round"/>
    <text x="159" y="93" text-anchor="start">Prompt yoz</text>
    <g filter="url(#f13sh)"><rect x="292" y="62" width="136" height="54" rx="13" fill="url(#f13c)" stroke="#ead8fb"/></g>
    <circle cx="315" cy="89" r="11" fill="#f3e8ff"/><path d="M310 89 l3.6 3.6 6.4 -7" stroke="#a21caf" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="335" y="93" text-anchor="start">Yarat</text>
    <g filter="url(#f13sh)"><rect x="468" y="62" width="136" height="54" rx="13" fill="url(#f13c)" stroke="#ead8fb"/></g>
    <circle cx="491" cy="89" r="11" fill="#f3e8ff"/><circle cx="491" cy="89" r="5.5" fill="none" stroke="#a21caf" stroke-width="2"/>
    <text x="511" y="93" text-anchor="start">Bahola</text>
  </g>
  <path d="M254 89 H289" stroke="#a78bfa" stroke-width="2.4" marker-end="url(#f13a)"/>
  <path d="M430 89 H465" stroke="#a78bfa" stroke-width="2.4" marker-end="url(#f13a)"/>
  <path d="M536 120 q0 28 -176 28 q-176 0 -176 -26" fill="none" stroke="#a21caf" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#f13a2)"/>
  <text x="360" y="168" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#a21caf">promptni yaxshilab qayta yarat</text>
</svg>
<figcaption>Yaxshi natija — bitta urinish emas, kichik yaxshilashlar halqasi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Birinchi rasm oltita qadamda yaratiladi: vositani oching, maqsadni tasavvur qiling, sodda prompt yozing, yarating, natijani baholang, promptni yaxshilab qayta yarating. Birinchi natija kamdan-kam mukammal — ustalik takrorlab yaxshilashda.</span></div>`,
          sim: {
            type: "order",
            intro: "Birinchi rasmni yaratish bosqichlarini <b>to'g'ri tartibga</b> joylashtiring (strelkalar bilan).",
            steps: [
              "Qaysi vositadan foydalanishni tanlang va oching",
              "Qanday rasm kerakligini aniq tasavvur qiling",
              "Sodda, tavsiflovchi prompt yozing",
              "Rasmni yarating (generate)",
              "Natijani baholang — nima yaxshi, nima kam",
              "Promptni yaxshilab, qayta yarating"
            ]
          },
          quiz: [
            { q: "Birinchi rasm yaratishda prompt yozishdan oldin nima qilinadi?", o: ["Darrov generate bosiladi", "Qanday rasm kerakligini tasavvur qilinadi", "Rasm yuklab olinadi", "Vosita o'chiriladi"], c: 1 },
            { q: "Birinchi natija mukammal chiqmasa, bu nimani bildiradi?", o: ["Vosita buzilgan", "Bu normal — promptni yaxshilab qayta yaratish kerak", "AI ishlamaydi", "Boshqa vosita yagona yechim"], c: 1 },
            { q: "«Iteratsiya» nima degani?", o: ["Rasmni o'chirish", "Promptni yaxshilab qayta-qayta yaratish", "Vositani almashtirish", "Internetni tekshirish"], c: 1 },
            { q: "Quyidagi promptlardan qaysi biri kuchliroq natija beradi?", o: ["tog'", "rasm", "quyosh chiqayotgan tumanli tog' manzarasi, oldinda ko'l, sokin kayfiyat", "manzara"], c: 2 },
            { q: "Natijani baholashda nimaga e'tibor beriladi?", o: ["Faqat fayl hajmiga", "Yorug'lik, rakurs, detal — nima yaxshi, nima kam ekaniga", "Internet tezligiga", "Vosita rangiga"], c: 1 }
          ]
        }
      ]
    }
  ]
};
