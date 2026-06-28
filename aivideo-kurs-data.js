/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   1-modul: Kirish — AI video dunyosi
   Format: window.AIVIDEO_COURSE = { title, subtitle, modules:[{ id,title,
     lessons:[{ id, title, read, html, sim?, quiz:[{q,o:[4],c}] }] }] }
   - sim turlari: "classify" | "order" | "build" | "compare"
   - Boshqa modullar push bilan ulanadi (aivideo-kurs-m2.js, ...).
   ============================================================ */
window.AIVIDEO_COURSE = {
  title: "AI bilan video yaratish",
  subtitle: "Noldan advanced darajagacha",
  modules: [
    {
      id: "v1",
      title: "Kirish — AI video dunyosi",
      lessons: [
        {
          id: "v1_1",
          title: "AI video nima va qanday ishlaydi",
          read: "8 daqiqa",
          html: `
<p class="pk-lead">Bir necha so'z yozasiz — sun'iy intellekt sizga jonli, harakatlanuvchi video klip yaratib beradi. Bu bugun haqiqat. Rasm yaratishni o'rgangan bo'lsangiz, video — uning tabiiy davomi: endi nafaqat ko'rinishni, balki <b>harakatni</b> ham boshqarasiz. Birinchi darsda AI videoning qanday ishlashini sodda tilda ko'rib chiqamiz — shunda butun kurs davomida nima qilayotganingizni aniq tushunasiz.</p>

<h3>Ikki asosiy yo'l</h3>
<ul>
  <li><b>Text-to-video (matndan video)</b> — siz sahna va harakatni so'z bilan tasvirlaysiz, model shunga mos klip yaratadi.</li>
  <li><b>Image-to-video (rasmdan video)</b> — sizda tayyor rasm bor (masalan, AI yaratgan surat), modelga uni <b>jonlantirish</b>ni — harakat qo'shishni — aytasiz.</li>
</ul>

<h3>Qanday ishlaydi</h3>
<p>Video — bu tez almashinadigan <b>kadrlar ketma-ketligi</b>. AI video modeli shu kadrlarni birin-ketin yaratadi va eng muhimi — ularni bir-biriga <b>silliq ulaydi</b>, toki harakat tabiiy ko'rinsin. Texnologiya rasm yaratishdagi diffusion'ga o'xshaydi, lekin unga <b>vaqt</b> qo'shilgan: model nafaqat «nima ko'rinadi», balki «u qanday harakatlanadi»ni ham hisoblaydi. Buni model millionlab videolarni o'rganish orqali bilib olgan.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>AI nafaqat ko'rinishni, harakatni ham yaratadi</b>Rasmda faqat bitta kadr bor. Videoda esa subyekt <b>harakatlanadi</b> va kamera <b>siljiydi</b>. Shuning uchun video promptida ikki narsa muhim: sahna qanday ko'rinishi va unda nima qanday harakatlanishi.</div></div>

<h3>Nega qisqa va ba'zan g'alati</h3>
<p>Bugungi AI kliplar odatda <b>qisqa</b> (bir necha soniya) va ba'zan harakat «buzilib» ketadi — narsalar g'alati o'zgaradi yoki suzib yuradi. Bu kamchilik emas, texnologiyaning hozirgi bosqichi; u juda tez yaxshilanmoqda. Yaxshi xabar: <b>aniq prompt</b> va to'g'ri usullar bilan bunday xatolarni ancha kamaytirish mumkin — buni ham o'rganamiz.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv11bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv11vid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f97316"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <linearGradient id="fv11sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fca5a5"/></linearGradient>
    <linearGradient id="fv11fr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cbd5e1"/><stop offset=".5" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv11sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#dc2626" flood-opacity=".22"/></filter>
    <clipPath id="fv11clip"><rect x="556" y="62" width="108" height="62" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="210" rx="16" fill="url(#fv11bg)"/>
  <circle cx="652" cy="36" r="82" fill="#ffe4d6" opacity=".6"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Matn → AI → Video</text>
  <g filter="url(#fv11sh)"><rect x="40" y="64" width="152" height="80" rx="13" fill="#ffffff"/></g>
  <rect x="40" y="64" width="152" height="80" rx="13" fill="none" stroke="#fed7aa"/>
  <text x="56" y="87" font-family="system-ui" font-size="9" font-weight="800" fill="#dc2626">PROMPT</text>
  <text x="56" y="105" font-family="system-ui" font-size="9.3" font-weight="600" fill="#9a3412">dengiz bo'yida</text>
  <text x="56" y="119" font-family="system-ui" font-size="9.3" font-weight="600" fill="#9a3412">yuguruvchi it,</text>
  <text x="56" y="133" font-family="system-ui" font-size="9.3" font-weight="600" fill="#9a3412">yon dolly</text>
  <path d="M194 104 H234" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv11ar)"/>
  <g filter="url(#fv11sh)"><rect x="240" y="58" width="250" height="92" rx="14" fill="url(#fv11vid)"/></g>
  <rect x="240" y="58" width="250" height="28" rx="14" fill="#ffffff" opacity=".14"/>
  <text x="365" y="82" text-anchor="middle" font-family="system-ui" font-size="11.5" font-weight="800" fill="#ffffff">AI video model</text>
  <rect x="264" y="98" width="202" height="20" rx="6" fill="url(#fv11fr)"/>
  <text x="365" y="140" text-anchor="middle" font-family="system-ui" font-size="8.7" fill="#ffffff" opacity=".9">kadrlar ketma-ketligi → silliq harakat</text>
  <path d="M492 104 H532" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv11ar)"/>
  <g filter="url(#fv11sh)"><rect x="546" y="52" width="128" height="100" rx="13" fill="url(#fv11vid)"/></g>
  <g clip-path="url(#fv11clip)">
    <rect x="556" y="62" width="108" height="62" fill="url(#fv11sky)"/>
    <circle cx="582" cy="82" r="10" fill="#fff7d6"/>
    <path d="M556 124 L556 112 L584 96 L606 110 L664 98 L664 124 Z" fill="#7c2d12" opacity=".7"/>
  </g>
  <circle cx="610" cy="93" r="13" fill="#ffffff" opacity=".9"/><path d="M606 87 l9 6 -9 6z" fill="#dc2626"/>
  <g fill="#fed7aa"><rect x="552" y="130" width="12" height="14" rx="2"/><rect x="568" y="130" width="12" height="14" rx="2"/><rect x="584" y="130" width="12" height="14" rx="2"/><rect x="600" y="130" width="12" height="14" rx="2"/><rect x="616" y="130" width="12" height="14" rx="2"/><rect x="632" y="130" width="12" height="14" rx="2"/><rect x="648" y="130" width="12" height="14" rx="2"/></g>
  <defs><marker id="fv11ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#fb923c"/></marker></defs>
</svg>
<figcaption>Tavsifingiz kadrlar ketma-ketligiga, so'ng silliq harakatga aylanadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>AI video matndan (text-to-video) yoki rasmdan (image-to-video) harakatlanuvchi klip yaratadi. U kadrlar ketma-ketligini hosil qilib, ularni silliq ulaydi — diffusion ustiga vaqt qo'shilgan. Kliplar hozircha qisqa va ba'zan buzilishi mumkin; aniq prompt buni kamaytiradi.</span></div>`,
          sim: {
            type: "classify",
            intro: "AI video haqidagi quyidagi fikrlarni baholang: <b>to'g'ri</b> tushunchami yoki <b>noto'g'ri</b>mi?",
            groups: ["to'g'ri", "noto'g'ri"],
            items: [
              { name: "AI video matnli tavsif asosida harakatlanuvchi kadrlar yaratadi", answer: "to'g'ri", hint: "Aynan shunday — tavsifdan jonli klip." },
              { name: "AI video tayyor klipni internetdan qidirib beradi", answer: "noto'g'ri", hint: "Model har safar yangi klip yaratadi, qidirmaydi." },
              { name: "Mavjud rasmni jonlantirish (image-to-video) ham mumkin", answer: "to'g'ri", hint: "Image-to-video — rasmga harakat qo'shadi." },
              { name: "Bugungi AI kliplar odatda 10 daqiqalik uzun chiqadi", answer: "noto'g'ri", hint: "Hozircha kliplar qisqa — bir necha soniya." },
              { name: "Harakatni aniq tasvirlash natijani yaxshilaydi", answer: "to'g'ri", hint: "Aniq harakat tavsifi — yaxshiroq natija." },
              { name: "AI video hech qachon xato yoki buzilish bermaydi", answer: "noto'g'ri", hint: "Hozirgi bosqichda harakat ba'zan buziladi." }
            ]
          },
          quiz: [
            { q: "AI video yaratishning ikki asosiy yo'li qaysi?", o: ["Faqat matndan", "Text-to-video va image-to-video", "Faqat rasmdan", "Faqat ovozdan"], c: 1 },
            { q: "Video aslida nima?", o: ["Bitta katta rasm", "Tez almashinadigan kadrlar ketma-ketligi", "Faqat ovoz", "Matn fayli"], c: 1 },
            { q: "AI video modeli rasm modelidan nimasi bilan farq qiladi?", o: ["Hech qanday farqi yo'q", "Unga vaqt (harakat) qo'shilgan — kadrlarni silliq ulaydi", "U faqat qora-oq", "U sekinroq"], c: 1 },
            { q: "Image-to-video nima qiladi?", o: ["Rasmni o'chiradi", "Mavjud rasmga harakat qo'shib jonlantiradi", "Rasmni matnga aylantiradi", "Faqat rangni o'zgartiradi"], c: 1 },
            { q: "Bugungi AI kliplar haqida qaysi fikr to'g'ri?", o: ["Cheksiz uzun bo'ladi", "Qisqa va ba'zan harakat buzilishi mumkin", "Hech qachon xato qilmaydi", "Faqat rasmdan ishlaydi"], c: 1 }
          ]
        },

        {
          id: "v1_2",
          title: "Vositalar olami: qaysi birini tanlash",
          read: "9 daqiqa",
          html: `
<p class="pk-lead">AI video yaratadigan vositalar tez ko'payib bormoqda va har biri o'ziga xos. Boshlovchini bu xilma-xillik adashtiradi. Lekin xuddi rasmdagidek — boshida vositaning o'zi unchalik muhim emas. Eng muhim ko'nikma — <b>yaxshi video prompt yozish</b> — barcha vositaga ko'chadi. Bu darsda asosiy vositalar bilan tanishamiz.</p>

<h3>Asosiy vositalar bilan tanishuv</h3>
<p>Vositalarni ikki guruhga bo'lish mumkin: <b>oson va arzon</b> (boshlash uchun) hamda <b>kuchli va professional</b> (yuqori sifat va boshqaruv). Eng mashhurlari:</p>

<table class="pk-tbl">
  <tr><th>Vosita</th><th>Qulaylik</th><th>Kuchli tomoni</th></tr>
  <tr><td><b>Pika</b></td><td>Oson, bepul rejasi bor</td><td>Boshlovchi uchun qulay kirish</td></tr>
  <tr><td><b>Luma (Dream Machine)</b></td><td>Oson, bepul cheklov</td><td>Tabiiy harakat, image-to-video</td></tr>
  <tr><td><b>Kling</b></td><td>O'rta</td><td>Uzunroq, sifatli klip</td></tr>
  <tr><td><b>Runway</b></td><td>O'rta, pullik</td><td>Professional boshqaruv — sanoat standarti</td></tr>
  <tr><td><b>Google Veo / OpenAI Sora</b></td><td>Cheklangan kirish</td><td>Eng yuqori real sifat</td></tr>
</table>
<p>Bu ro'yxat tez o'zgaradi — yangi vositalar chiqadi, imkoniyatlar kengayadi. Shuning uchun nomlarni yodlashga emas, <b>tamoyillarni</b> tushunishga e'tibor bering.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Boshlovchiga maslahat: bepuldan boshlang</b>Pullik vositaga shoshilmang. Pika, Luma yoki Kling'ning bepul imkoniyatlari bilan video prompt yozishni mashq qiling. Ko'nikma oshgach, professional vositalar (Runway, Veo) ham tushunarli bo'ladi — chunki <b>prompt mantig'i</b> hammasida bir xil.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 186" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv12bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv12tr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#86efac"/><stop offset=".5" stop-color="#fb923c"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
    <filter id="fv12sh" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#dc2626" flood-opacity=".3"/></filter>
  </defs>
  <rect width="720" height="186" rx="16" fill="url(#fv12bg)"/>
  <circle cx="64" cy="150" r="58" fill="#dcfce7" opacity=".4"/>
  <circle cx="656" cy="150" r="58" fill="#ffe4d6" opacity=".55"/>
  <text x="360" y="34" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Oson va bepuldan — kuchli va professionalgacha</text>
  <text x="104" y="68" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#15803d">bepul · oson</text>
  <text x="628" y="68" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#dc2626">kuchli · pro</text>
  <rect x="80" y="97" width="560" height="9" rx="4.5" fill="url(#fv12tr)"/>
  <g font-family="system-ui" font-size="10.5" font-weight="700">
    <g filter="url(#fv12sh)"><circle cx="104" cy="101.5" r="9" fill="#22c55e"/></g><circle cx="104" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="78" y="121" width="52" height="20" rx="10" fill="#fff" stroke="#bbf7d0"/><text x="104" y="134.5" text-anchor="middle" fill="#15803d">Pika</text>
    <g filter="url(#fv12sh)"><circle cx="235" cy="101.5" r="9" fill="#4ade80"/></g><circle cx="235" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="205" y="121" width="60" height="20" rx="10" fill="#fff" stroke="#bbf7d0"/><text x="235" y="134.5" text-anchor="middle" fill="#15803d">Luma</text>
    <g filter="url(#fv12sh)"><circle cx="366" cy="101.5" r="9" fill="#fb923c"/></g><circle cx="366" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="338" y="121" width="56" height="20" rx="10" fill="#fff" stroke="#fed7aa"/><text x="366" y="134.5" text-anchor="middle" fill="#c2410c">Kling</text>
    <g filter="url(#fv12sh)"><circle cx="497" cy="101.5" r="9" fill="#f97316"/></g><circle cx="497" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="463" y="121" width="68" height="20" rx="10" fill="#fff" stroke="#fed7aa"/><text x="497" y="134.5" text-anchor="middle" fill="#c2410c">Runway</text>
    <g filter="url(#fv12sh)"><circle cx="628" cy="101.5" r="9" fill="#dc2626"/></g><circle cx="628" cy="101.5" r="3.4" fill="#fff"/>
    <rect x="592" y="121" width="76" height="20" rx="10" fill="#fff" stroke="#fecaca"/><text x="630" y="134.5" text-anchor="middle" fill="#dc2626">Veo / Sora</text>
  </g>
</svg>
<figcaption>Bepul vositadan boshlab, ko'nikma oshgach professional vositalarga o'ting</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Vositalar ko'p, lekin asosiy ko'nikma — video prompt yozish — hammasiga ko'chadi. Boshlovchi bepul vositalardan (Pika, Luma, Kling) boshlagani, ko'nikma oshgach professional vositalarga (Runway, Veo, Sora) o'tgani ma'qul.</span></div>`,
          sim: {
            type: "classify",
            intro: "Quyidagi ish usullarini ajrating: <b>boshlash uchun</b> (oson/arzon) yoki <b>professional</b> (yuqori boshqaruv talab qiladigan)?",
            groups: ["boshlash uchun", "professional"],
            items: [
              { name: "Pika'ning bepul rejasi bilan birinchi klip yaratish", answer: "boshlash uchun", hint: "Bepul reja — boshlovchi uchun mos." },
              { name: "Luma'da rasmni jonlantirib mashq qilish", answer: "boshlash uchun", hint: "Oson va bepul cheklov — boshlash uchun yaxshi." },
              { name: "Kling'ning bepul imkoniyati bilan tajriba qilish", answer: "boshlash uchun", hint: "Boshlang'ich darajada bemalol o'rganish mumkin." },
              { name: "Runway'da ilg'or kamera va harakat sozlamalari bilan ishlash", answer: "professional", hint: "Ilg'or boshqaruv — professional ish." },
              { name: "Veo yoki Sora bilan yuqori sifatli kinematografik sahna qurish", answer: "professional", hint: "Eng yuqori sifat va kirish cheklovi — professional daraja." },
              { name: "Kadrlararo aniq izchillikni nozik boshqarish", answer: "professional", hint: "Nozik izchillik nazorati — ilg'or daraja." }
            ]
          },
          quiz: [
            { q: "Boshlovchi uchun eng to'g'ri maslahat qaysi?", o: ["Darrov eng qimmat vositani olish", "Bepul va oson vositalardan boshlash", "Faqat Sora kutish", "Hech narsa o'rganmaslik"], c: 1 },
            { q: "Vositadan vositaga eng yaxshi ko'chadigan ko'nikma qaysi?", o: ["Dastur o'rnatish", "Yaxshi video prompt yozish", "Kompyuter yig'ish", "Tez yozish"], c: 1 },
            { q: "Quyidagilardan qaysi biri boshlash uchun mos bepul vosita?", o: ["Runway pullik rejasi", "Pika yoki Luma bepul rejasi", "Faqat Sora", "Hech qaysi"], c: 1 },
            { q: "Professional/ilg'or vosita qaysi?", o: ["Pika bepul reja", "Luma bepul cheklov", "Runway ilg'or boshqaruv bilan", "Hech qaysi"], c: 2 },
            { q: "Nega aniq vosita nomlarini yodlashga urinmaslik kerak?", o: ["Ular hech qachon o'zgarmaydi", "Vositalar tez o'zgaradi — tamoyilni tushunish muhimroq", "Nomlar yodlash mumkin emas", "Ularning ahamiyati yo'q"], c: 1 }
          ]
        },

        {
          id: "v1_3",
          title: "Birinchi klipni yaratish",
          read: "8 daqiqa",
          html: `
<p class="pk-lead">Nazariya yetarli — endi birinchi klipingizni yaratamiz. Jarayon doim bir xil oltita qadamdan iborat: tanlash, tasavvur qilish, yozish, yaratish, baholash va yaxshilash. Sirni darrov aytaman: <b>birinchi natija kamdan-kam mukammal</b> bo'ladi — va bu mutlaqo normal. Ustalik aynan <b>takrorlab yaxshilash</b>da.</p>

<h3>Bosqichma-bosqich</h3>
<ol>
  <li><b>Vositani oching</b> — bepul biror vosita (masalan Pika yoki Luma) tanlang.</li>
  <li><b>Sahna va harakatni tasavvur qiling</b> — nima ko'rinadi va unda <b>nima qanday harakatlanadi</b>: kim, qayerda, qanday harakat.</li>
  <li><b>Sodda prompt yozing</b> — sahnani va asosiy harakatni so'z bilan yozing.</li>
  <li><b>Klipni yarating</b> — generate tugmasini bosing va natijani kuting.</li>
  <li><b>Ko'ring va baholang</b> — klipga qarang: harakat tabiiymi, kamera to'g'rimi, biror joyi buzildimi?</li>
  <li><b>Yaxshilang va qayta yarating</b> — promptga kamchilikni tuzatadigan so'zlar qo'shing va yana yarating.</li>
</ol>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Klip qisqa — bitta sahnaga e'tibor bering</b>Bir klipga butun hikoyani tiqishtirmang. Eng yaxshi natija — <b>bitta aniq sahna va bitta aniq harakat</b>. Murakkab voqeani keyin bir nechta qisqa klipdan montaj qilib yig'asiz (bu haqda keyingi modullarda bor).</div></div>

<h3>Birinchi promptga misol</h3>
<p>Sodda promptdan boshlaymiz, keyin uni harakat va kamera bilan boyitamiz:</p>
<div class="pk-ex pk-bad"><span class="tag">Juda sodda</span>it</div>
<div class="pk-ex pk-good"><span class="tag">Yaxshilangan</span>dengiz bo'yida quvnoq yuguruvchi oltin retriver it, to'lqinlar yonida suv sachraydi, yon tomondan silliq dolly harakati, oltin soat yorug'ligi, kinematografik</div>

<p>Ikkala prompt ham ishlaydi, lekin ikkinchisi <b>aniq harakat va kamerani</b> ko'rsatadi — natija jonli va maqsadli bo'ladi. Keyingi modulda video promptini shu tarzda tuzishni chuqur o'rganamiz.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 176" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fv13bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff2ec"/></linearGradient>
    <linearGradient id="fv13c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff7f4"/></linearGradient>
    <filter id="fv13sh" x="-30%" y="-40%" width="160%" height="190%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#dc2626" flood-opacity=".2"/></filter>
    <marker id="fv13a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#fb923c"/></marker>
    <marker id="fv13a2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#dc2626"/></marker>
  </defs>
  <rect width="720" height="176" rx="16" fill="url(#fv13bg)"/>
  <text x="360" y="32" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Yarat → ko'r → yaxshila (takrorlanadigan halqa)</text>
  <g font-family="system-ui" font-size="11.5" font-weight="800" fill="#c2410c">
    <g filter="url(#fv13sh)"><rect x="116" y="62" width="136" height="54" rx="13" fill="url(#fv13c)" stroke="#fed7aa"/></g>
    <circle cx="139" cy="89" r="11" fill="#ffe4d6"/><path d="M134 89 h10 M139 84 v10" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/>
    <text x="159" y="93" text-anchor="start">Prompt yoz</text>
    <g filter="url(#fv13sh)"><rect x="292" y="62" width="136" height="54" rx="13" fill="url(#fv13c)" stroke="#fed7aa"/></g>
    <circle cx="315" cy="89" r="11" fill="#ffe4d6"/><path d="M311 84 l8 5 -8 5z" fill="#dc2626"/>
    <text x="335" y="93" text-anchor="start">Yarat</text>
    <g filter="url(#fv13sh)"><rect x="468" y="62" width="136" height="54" rx="13" fill="url(#fv13c)" stroke="#fed7aa"/></g>
    <circle cx="491" cy="89" r="11" fill="#ffe4d6"/><circle cx="491" cy="89" r="5.5" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="511" y="93" text-anchor="start">Ko'r</text>
  </g>
  <path d="M254 89 H289" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv13a)"/>
  <path d="M430 89 H465" stroke="#fb923c" stroke-width="2.4" marker-end="url(#fv13a)"/>
  <path d="M536 120 q0 28 -176 28 q-176 0 -176 -26" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#fv13a2)"/>
  <text x="360" y="168" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#dc2626">promptni yaxshilab qayta yarat</text>
</svg>
<figcaption>Yaxshi klip — bitta urinish emas, kichik yaxshilashlar halqasi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Birinchi klip oltita qadamda yaratiladi: vositani oching, sahna va harakatni tasavvur qiling, sodda prompt yozing, yarating, ko'rib baholang, promptni yaxshilab qayta yarating. Klip qisqa — bitta aniq sahna va harakatga e'tibor bering. Ustalik takrorlab yaxshilashda.</span></div>`,
          sim: {
            type: "order",
            intro: "Birinchi klipni yaratish bosqichlarini <b>to'g'ri tartibga</b> joylashtiring (strelkalar bilan).",
            steps: [
              "Qaysi vositadan foydalanishni tanlang va oching",
              "Sahna va undagi harakatni aniq tasavvur qiling",
              "Sodda, sahna va harakatni tavsiflovchi prompt yozing",
              "Klipni yarating (generate)",
              "Klipni ko'rib baholang — harakat tabiiymi, nima kam",
              "Promptni yaxshilab, qayta yarating"
            ]
          },
          quiz: [
            { q: "Birinchi klip yaratishda prompt yozishdan oldin nima qilinadi?", o: ["Darrov generate bosiladi", "Sahna va undagi harakatni tasavvur qilinadi", "Klip yuklab olinadi", "Vosita o'chiriladi"], c: 1 },
            { q: "Birinchi natija mukammal chiqmasa, bu nimani bildiradi?", o: ["Vosita buzilgan", "Bu normal — promptni yaxshilab qayta yaratish kerak", "AI ishlamaydi", "Boshqa vosita yagona yechim"], c: 1 },
            { q: "Bir klipga nimani sig'dirgan ma'qul?", o: ["Butun uzun hikoyani", "Bitta aniq sahna va bitta aniq harakatni", "Iloji boricha ko'p voqeani", "Hech qanday harakatni"], c: 1 },
            { q: "Quyidagi promptlardan qaysi biri kuchliroq video natija beradi?", o: ["it", "video", "dengiz bo'yida yuguruvchi it, yon dolly harakati, oltin soat", "hayvon"], c: 2 },
            { q: "Klipni baholashda nimaga e'tibor beriladi?", o: ["Faqat fayl hajmiga", "Harakat tabiiyligi, kamera, biror joyi buzilgani-buzilmaganiga", "Internet tezligiga", "Vosita rangiga"], c: 1 }
          ]
        }
      ]
    }
  ]
};
