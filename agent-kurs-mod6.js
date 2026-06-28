/* ============================================================
   Oson Studio — AI Agentlar kursi (6-bosqich: Mahorat va loyiha)
   YAKUNIY MODUL — 3 dars:
     b6_1 — Agentlar uchun professional promptlash (system prompt, rol, kontekst muhandisligi)
     b6_2 — Real keyslar galereyasi (sohalar bo'yicha)
     b6_3 — Capstone: o'z agentingizni rejalashtirish va qurish
   Format: window.AGENT_COURSE.modules.push({ id,title,lessons:[{id,title,read,html,sim,quiz}] })
   sim turlari: agentloop | classify | order. Ohang: ustoz tilida, real muammodan boshlanadi.
   ============================================================ */
window.AGENT_COURSE.modules.push({
  id: "b6",
  title: "Mahorat va loyiha",
  lessons: [

    {
      id: "b6_1",
      title: "Agentlar uchun professional promptlash",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Tasavvur qiling: do'koningizga ikki yangi xodim keldi. Birinchisiga shunchaki ishla dedingiz — u nima qilishni bilmay, mijozga noto'g'ri narx aytdi. Ikkinchisiga esa aniq aytdingiz: Sen sotuvchisan; mijoz bilan hurmat bilan gaplash, narxni faqat narxnomadan ayt, shubha bo'lsa menga murojaat qil. Ikkinchisi birinchi kunidan ishonchli ishladi. Agent ham xuddi shu yangi xodim: unga qanday <b>ko'rsatma</b> bersangiz, shunday ishlaydi. Bu ko'rsatma — <b>system prompt</b>.</p>

<h3>System prompt — agentning xizmat yo'riqnomasi</h3>
<p>Har bir agent ishga tushganda, modelga eng birinchi beriladigan matn — <b>system prompt</b>dir. U foydalanuvchiga ko'rinmaydi, lekin agentning butun xulqini belgilaydi. Yaxshi system prompt uch savolga aniq javob beradi:</p>
<ul>
  <li><b>Rol:</b> agent kim? (Sen O'zbekiston onlayn-do'koni uchun mijozlarni qo'llab-quvvatlash yordamchisisan.)</li>
  <li><b>Vazifa va qoidalar:</b> nima qilishi va nima qilmasligi kerak? (Faqat buyurtma holati va yetkazib berish bo'yicha yordam ber. Narxni hech qachon o'zing taxmin qilma.)</li>
  <li><b>Uslub:</b> qanday gapirsin? (Qisqa, hurmatli, o'zbek tilida. Shubha bo'lsa — operatorga ulashni taklif qil.)</li>
</ul>

<h3>Yaxshi vs yomon system prompt</h3>
<p>Farqni ikki misolda ko'raylik. Ikkalasi ham bir xil agent uchun, lekin natija yer bilan osmoncha farq qiladi.</p>

<div class="pk-ex pk-bad">
<b>Yomon system prompt</b>
<p><code>Sen yordamchisan. Foydalanuvchiga yordam ber. Hamma savolga javob ber.</code></p>
<p>Nega yomon? Rol noaniq (qaysi sohada?), chegara yo'q (hamma savol — demak siyosat, tibbiyot, raqobatchi haqida ham gapiradi), qoidalar yo'q (narxni o'zi to'qib chiqaradi). Bunday agent har safar boshqacha, ishonchsiz xulq ko'rsatadi.</p>
</div>

<div class="pk-ex pk-good">
<b>Yaxshi system prompt</b>
<p><code>Sen "Anor Market" onlayn-do'koni uchun qo'llab-quvvatlash yordamchisisan. Vazifang: buyurtma holati, yetkazib berish va qaytarish bo'yicha yordam berish. Qoidalar: (1) Narx va mavjudlikni faqat "katalog" asbobidan ol, o'zing taxmin qilma. (2) Do'konga aloqasiz savollarga "bu mavzu bo'yicha yordam bera olmayman" deb javob ber. (3) Mijoz xafa bo'lsa yoki masala murakkab bo'lsa, "operatorga ulash" asbobini chaqir. Uslub: qisqa, hurmatli, o'zbek tilida.</code></p>
<p>Nega yaxshi? Rol, soha, aniq chegara, asbob qoidalari va uslub — hammasi joyida. Agent endi har safar bir xil, ishonchli ishlaydi.</p>
</div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Oltin qoida</b>Agentga <i>nima qilma</i>ni ham, <i>nima qil</i>ni ham ayting. Faqat taqiqlardan iborat prompt agentni qotirib qo'yadi; faqat ruxsatlardan iborat prompt esa uni nazoratsiz qiladi. Ikkalasining muvozanati kerak.</div></div>

<h3>Kontekst muhandisligi — kerakligini bering, ortig'ini bermang</h3>
<p>Ko'rsatma yaxshi bo'lsa-da, agent har qadamda <b>kontekst</b> bilan ishlaydi: maqsad, oldingi fikrlar, asbob natijalari. <b>Kontekst muhandisligi</b> — bu agentga <b>aynan kerakli ma'lumotni</b>, na ko'p, na kam berish san'atidir. Ikki tomonlama xato bor:</p>
<ul>
  <li><b>Juda kam kontekst:</b> agent muhim faktni bilmaydi — masalan, mijozning shahri yoki buyurtma raqami berilmagan bo'lsa, u taxminga o'tadi.</li>
  <li><b>Juda ko'p kontekst:</b> 100 sahifa hujjatni butunlay tiqsangiz, agent muhimini topa olmay adashadi, token isrof bo'ladi, sekinlashadi va xato ko'payadi.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 740 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="740" height="250" rx="16" fill="#f7fbfa"/>
  <text x="370" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Kontekst muhandisligi — oltin o'rtalik</text>
  <!-- kam -->
  <rect x="50" y="58" width="190" height="150" rx="13" fill="#fff7ed" stroke="#fcd9b6"/>
  <text x="145" y="84" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#b45309">Juda KAM</text>
  <text x="145" y="112" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">muhim fakt yo'q</text>
  <text x="145" y="134" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">agent taxminga o'tadi</text>
  <text x="145" y="178" text-anchor="middle" font-family="system-ui" font-size="26">🫥</text>
  <!-- o'rtalik -->
  <rect x="275" y="50" width="190" height="166" rx="14" fill="#d6f2ed" stroke="#5eead4" stroke-width="2"/>
  <text x="370" y="80" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#0f766e">AYNAN KERAKLI</text>
  <text x="370" y="108" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">maqsad + zarur faktlar</text>
  <text x="370" y="130" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">aniq, arzon, ishonchli</text>
  <text x="370" y="180" text-anchor="middle" font-family="system-ui" font-size="28">🎯</text>
  <!-- ko'p -->
  <rect x="500" y="58" width="190" height="150" rx="13" fill="#fef2f2" stroke="#fecaca"/>
  <text x="595" y="84" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#b91c1c">Juda KO'P</text>
  <text x="595" y="112" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">100 sahifa tiqildi</text>
  <text x="595" y="134" text-anchor="middle" font-family="system-ui" font-size="11.5" fill="#475569">adashadi · token isrofi</text>
  <text x="595" y="178" text-anchor="middle" font-family="system-ui" font-size="26">🌀</text>
</svg>
<figcaption>Agentga aynan kerakli kontekstni bering — kam ham, ko'p ham ziyon</figcaption>
</div>

<p>Amalda bu shuni anglatadi: agentga butun bazani emas, <b>qidiruv asbobi</b> orqali topilgan 2-3 ta tegishli parchani bering; butun tarixni emas, <b>xulosani</b> bering; har bir asbob natijasidan faqat <b>kerakli maydonni</b> oling. Bu — 4 va 5-bosqichdagi xotira va kontekstni boshqarish g'oyalarining amaliy davomi.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Prompt — bir martalik emas, takrorlanadigan ish</b>Birinchi system prompt hech qachon mukammal bo'lmaydi. Professional usul: yozasiz → sinaysiz → agent qayerda adashganini ko'rasiz → promptga aniqlik kiritasiz. Bu sikl <b>prompt muhandisligi</b> deyiladi va u bir kunlik emas, doimiy jarayondir.</div></div>

<h3>Endi o'zingiz baholang</h3>
<p>Pastdagi mashqda 6 ta system-prompt parchasi bor. Ularni <b>yaxshi ko'rsatma</b> yoki <b>yomon ko'rsatma</b> deb ajrating. Rol aniqmi? Chegara bormi? Qoidalar tushunarlimi? — shu savollarni o'zingizga bering.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Agentni system prompt boshqaradi: unga aniq <b>rol</b>, <b>qoidalar</b> va <b>uslub</b> bering. Kontekst muhandisligi esa — har qadamda aynan kerakli ma'lumotni berish: kam ham, ko'p ham ziyon. Promptni bir marta emas, sinab-sinab yaxshilang.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi system-prompt parchalarini baholang. <b>Yaxshi ko'rsatma</b> — rol aniq, chegara va qoidalar bor. <b>Yomon ko'rsatma</b> — noaniq, chegarasiz yoki xavfli. To'g'ri ajrating.",
        groups: ["yaxshi ko'rsatma", "yomon ko'rsatma"],
        items: [
          { name: "Sen \"Anor Market\" qo'llab-quvvatlash yordamchisisan; narxni faqat \"katalog\" asbobidan ol, o'zing taxmin qilma.", answer: "yaxshi ko'rsatma", hint: "Rol aniq, asbob qoidasi bor, taxmin taqiqlangan — namunali." },
          { name: "Yordam ber. Hamma savolga javob ber.", answer: "yomon ko'rsatma", hint: "Rol yo'q, chegara yo'q — agent har narsani gapiradi." },
          { name: "Rol: HR yordamchisi. Vazifa: faqat ta'til va ish jadvali savollariga javob. Aloqasiz savolda: \"bu mavzu mening doiramdan tashqarida\" deb ayt.", answer: "yaxshi ko'rsatma", hint: "Rol, vazifa va aniq chegara — uchchovi ham bor." },
          { name: "Aqlli bo'l va foydalanuvchini xursand qil.", answer: "yomon ko'rsatma", hint: "O'lchovsiz, bajarib bo'lmaydigan, hech qanday aniq ko'rsatma yo'q." },
          { name: "Maslahat berma; faqat \"hisob_kitob\" asbobini chaqirib, natijani aynan qaytar. Pul o'tkazmasini hech qachon o'zing bajarma — odam tasdig'ini so'ra.", answer: "yaxshi ko'rsatma", hint: "Aniq vazifa + xavfsizlik chegarasi (odam tasdig'i) — kuchli prompt." },
          { name: "Mijoz bilan istalgancha bahslash, har doim o'zingni haq deb hisobla.", answer: "yomon ko'rsatma", hint: "Zararli uslub: agentni qaysar va xato yo'lga soladi." }
        ]
      },
      quiz: [
        { q: "System prompt nima vazifani bajaradi?", o: ["Foydalanuvchiga ko'rinadigan birinchi xabar", "Agentning rolini, qoidalarini va uslubini belgilaydigan boshlang'ich ko'rsatma", "Faqat agent nomini saqlaydi", "Internet tezligini sozlaydi"], c: 1 },
        { q: "Yaxshi system prompt qaysi uch savolga javob beradi?", o: ["Narx, sana, joy", "Rol (kim), qoidalar (nima qil/qilma), uslub (qanday gapir)", "Til, rang, shrift", "Token, narx, tezlik"], c: 1 },
        { q: "Kontekst muhandisligi nimani anglatadi?", o: ["Agentga imkon qadar ko'proq ma'lumot tiqish", "Agentga aynan kerakli ma'lumotni berish — kam ham, ko'p ham emas", "Kontekst oynasini o'chirib qo'yish", "Faqat ingliz tilida yozish"], c: 1 },
        { q: "Agentga 100 sahifalik hujjatni butunlay berib qo'yish nega xato?", o: ["Hech qanday muammosi yo'q", "Agent muhimini topa olmay adashadi, token isrof bo'ladi va xato ko'payadi", "Hujjatlar agentga umuman tushunarsiz", "Bu agentni tezlashtiradi"], c: 1 },
        { q: "Professional prompt yozish jarayoni qanday kechadi?", o: ["Bir marta yozasiz va o'zgartirmaysiz", "Yozasiz → sinaysiz → adashgan joyini ko'rib aniqlik kiritasiz — takror-takror", "Promptni umuman yozmaysiz", "Faqat agent o'zi yozadi"], c: 1 }
      ]
    },

    {
      id: "b6_2",
      title: "Real keyslar galereyasi",
      read: "11 daqiqa",
      html: `
<p class="pk-lead">Toshkentdagi kichik bir IT-jamoa har kuni o'nlab mijoz xatiga javob berishdan charchadi. Ular oddiy bir agent qurishdi: u kelgan xatni o'qiydi, savol turini aniqlaydi, bilimlar bazasidan javob topadi va tayyor matnni operatorga taklif qiladi. Operator faqat tasdiqlaydi. Natija — javob vaqti uch baravar qisqardi. Bu — uydirma emas; aynan shunday agentlar bugun butun dunyoda ishlamoqda. Keling, agentlar qaysi sohalarda haqiqiy foyda berayotganini ko'ramiz.</p>

<h3>Agentlar qayerda ishlaydi — 5 ta yo'nalish</h3>

<div class="pk-fig">
<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="750" height="320" rx="16" fill="#f7fbfa"/>
  <text x="375" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">Agentlar foyda berayotgan 5 soha</text>
  <!-- card 1 -->
  <rect x="40" y="52" width="210" height="116" rx="13" fill="#d6f2ed" stroke="#5eead4"/>
  <text x="145" y="80" text-anchor="middle" font-family="system-ui" font-size="22">💬</text>
  <text x="145" y="108" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#0f766e">Qo'llab-quvvatlash</text>
  <text x="145" y="130" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">mijoz savoliga</text>
  <text x="145" y="146" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">tezkor javob</text>
  <!-- card 2 -->
  <rect x="270" y="52" width="210" height="116" rx="13" fill="#eef2ff" stroke="#c7d2fe"/>
  <text x="375" y="80" text-anchor="middle" font-family="system-ui" font-size="22">🔬</text>
  <text x="375" y="108" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#4338ca">Tadqiqot</text>
  <text x="375" y="130" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">qidir · o'qi ·</text>
  <text x="375" y="146" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">xulosa yoz</text>
  <!-- card 3 -->
  <rect x="500" y="52" width="210" height="116" rx="13" fill="#fff7ed" stroke="#fcd9b6"/>
  <text x="605" y="80" text-anchor="middle" font-family="system-ui" font-size="22">⌨️</text>
  <text x="605" y="108" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#b45309">Kod yozish</text>
  <text x="605" y="130" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">kod yoz · ishga</text>
  <text x="605" y="146" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">tushir · tuzat</text>
  <!-- card 4 -->
  <rect x="155" y="184" width="210" height="116" rx="13" fill="#e7f6ee" stroke="#bfe6d0"/>
  <text x="260" y="212" text-anchor="middle" font-family="system-ui" font-size="22">🏢</text>
  <text x="260" y="240" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#15803d">Biznes avtomati</text>
  <text x="260" y="262" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">hujjat · hisobot ·</text>
  <text x="260" y="278" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">jarayon</text>
  <!-- card 5 -->
  <rect x="385" y="184" width="210" height="116" rx="13" fill="#e0f2fe" stroke="#bae6fd"/>
  <text x="490" y="212" text-anchor="middle" font-family="system-ui" font-size="22">🧭</text>
  <text x="490" y="240" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#0369a1">Shaxsiy yordamchi</text>
  <text x="490" y="262" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">reja · eslatma ·</text>
  <text x="490" y="278" text-anchor="middle" font-family="system-ui" font-size="11" fill="#475569">kundalik ishlar</text>
</svg>
<figcaption>Bir xil halqa g'oyasi — beshta turli sohada amaliy foyda</figcaption>
</div>

<h4>1. Mijozlarni qo'llab-quvvatlash</h4>
<p>Eng keng tarqalgan soha. Agent kelgan savolni o'qiydi, bilimlar bazasidan (FAQ, qo'llanma) javob qidiradi, buyurtma holatini tekshiradi va tayyor javob beradi. Murakkab yoki nozik holatda — masalan, mijoz juda xafa bo'lsa — u <b>jonli operatorga ulaydi</b>. O'zbekistondagi onlayn-do'konlar, banklar va mobil operatorlar uchun bu — kechayu kunduz ishlaydigan birinchi qatlam yordam.</p>

<h4>2. Tadqiqot (research)</h4>
<p>Falon mavzu bo'yicha qisqacha hisobot tayyorla — bu agent uchun klassik vazifa. U bir necha bor <b>qidiradi</b>, topilgan manbalarni <b>o'qiydi</b>, muhim faktlarni ajratadi va oxirida <b>xulosa</b> yozadi. Talaba kurs ishi uchun manba yig'ishi, jurnalist mavzuni o'rganishi, tadbirkor bozorni tahlil qilishi — hammasi shu naqshda. Pastdagi laboratoriyada aynan shunday tadqiqot agentini ko'rasiz.</p>

<h4>3. Kod yozish</h4>
<p>Dasturlash — agentlarning eng kuchli sohalaridan biri. Agent topshiriqni o'qiydi, kod yozadi, uni <b>ishga tushiradi</b>, xatoni ko'radi va <b>o'zini o'zi tuzatadi</b> — toki test o'tguncha. Bu kichik xatoliklarni tuzatish, test yozish yoki bir tildan boshqasiga o'tkazishda ayniqsa qulay. Siz hozir o'qiyotgan kurs ham aynan shunday agent — Claude Code — yordamida tayyorlangan.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Diqqat: agent — yordamchi, almashtiruvchi emas</b>Bu sohalarning hammasida agent <b>odamning ishini tezlashtiradi</b>, lekin to'liq o'rnini bosmaydi. Eng yaxshi natija odam + agent juftligida bo'ladi: agent og'ir, takrorlanuvchi qismni bajaradi, odam esa muhim qarorni nazorat qiladi va tasdiqlaydi.</div></div>

<h4>4. Biznes avtomatlashtirish</h4>
<p>Ofis ishlarining katta qismi — bir xil, takrorlanuvchi jarayonlar: hisob-faktura tayyorlash, ma'lumotni jadvalga kiritish, haftalik hisobot yig'ish, xatlarni saralash. Agent bu jarayonlarni o'ziga oladi: kerakli ma'lumotni topadi, hujjatni shakllantiradi va natijani odamga tekshirish uchun beradi. Buxgalter, menejer va tadbirkor uchun bu — vaqtni tejaydigan kuchli vosita.</p>

<h4>5. Shaxsiy yordamchi</h4>
<p>Eng yaqin soha — har birimiz uchun. Agent kalendaringizni ko'radi, bo'sh vaqt topadi, uchrashuv belgilaydi; eslatma qo'yadi; uzun xatlarni qisqartiradi; sayohat rejasini tuzadi. Bu — 1-bosqichdagi poyezd chiptasi misolining real ko'rinishi: agent shunchaki gapirmaydi, <b>ish bajaradi</b>.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>E'tibor bering</b>Beshta sohaning hammasida <b>bir xil halqa</b> ishlaydi: maqsad → o'ylash → asbob → kuzatuv → yana o'ylash → javob. Faqat asboblar va soha o'zgaradi. Demak siz bitta g'oyani o'rganib, cheksiz ko'p sohaga qo'llay olasiz.</div></div>

<h3>Tadqiqot agentini harakatda ko'ring</h3>
<p>Pastdagi laboratoriyada kichik <b>tadqiqot agenti</b> bor. Unga qisqacha hisobot tayyorla maqsadi berilgan. U qanday qidirayotganini, natijaga qarab yana qidirayotganini, manbani o'qiyotganini va oxirida xulosa yozayotganini bosqichma-bosqich kuzating.</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Agentlar bugun beshta katta sohada foyda bermoqda: qo'llab-quvvatlash, tadqiqot, kod yozish, biznes avtomatlashtirish va shaxsiy yordamchilik. Hammasida bir xil halqa ishlaydi — faqat asboblar farq qiladi. Agent odamni almashtirmaydi, uni <b>tezlashtiradi</b>.</span></div>`,
      sim: {
        type: "agentloop",
        intro: "Quyida kichik <b>tadqiqot agenti</b>. Unga qisqacha hisobot tayyorlash topshirildi. <b>Keyingi qadam</b>ni bosib, u qanday qidirib, o'qib, natijaga qarab qaror qilib, oxirida xulosa yozishini kuzating.",
        goal: "Elektromobillarning afzalliklari mavzusi bo'yicha qisqacha hisobot tayyorla.",
        tools: [
          { name: "qidiruv", label: "qidiruv", desc: "internetdan manba topish" },
          { name: "ochib_oqi", label: "ochib_oqi", desc: "manbani o'qish" }
        ],
        steps: [
          { kind: "thought", text: "Avval mavzu bo'yicha umumiy manba topishim kerak. qidiruv asbobini chaqiraman." },
          { kind: "action", tool: "qidiruv", args: "{ \"so'rov\": \"elektromobil afzalliklari\" }" },
          { kind: "observation", text: "{ \"natijalar\": [\"ekologiya-portali.uz/elektromobil\", \"tejamkorlik-blog.uz/ev\"] }" },
          { kind: "thought", text: "Ikki manba bor. Birinchisini ochib o'qib, ekologik tomonini bilib olaman." },
          { kind: "action", tool: "ochib_oqi", args: "{ \"manba\": \"ekologiya-portali.uz/elektromobil\" }" },
          { kind: "observation", text: "{ \"matn\": \"Elektromobil chiqindi gaz chiqarmaydi, havoni ifloslantirmaydi va shovqini past.\" }" },
          { kind: "thought", text: "Ekologik afzallik aniq. Endi tejamkorlik tomonini bilish uchun ikkinchi manbani o'qiyman." },
          { kind: "action", tool: "ochib_oqi", args: "{ \"manba\": \"tejamkorlik-blog.uz/ev\" }" },
          { kind: "observation", text: "{ \"matn\": \"Elektr quvvati yoqilg'idan arzon; harakatlanuvchi qismlar kam — ta'mirlash xarajati past.\" }" },
          { kind: "thought", text: "Endi ikkala manbadan yetarli ma'lumot to'pladim. Qisqacha hisobotni jamlab yozaman." },
          { kind: "answer", text: "Qisqacha hisobot — Elektromobil afzalliklari: (1) Ekologik: chiqindi gaz chiqarmaydi, shovqini past. (2) Tejamkor: elektr yoqilg'idan arzon, ta'mirlash xarajati kam. Manbalar: ekologiya-portali.uz, tejamkorlik-blog.uz." }
        ]
      },
      quiz: [
        { q: "Tadqiqot agenti odatda qanday ishlaydi?", o: ["Bitta javobni darhol o'zidan to'qiydi", "Bir necha bor qidiradi, manbalarni o'qiydi va oxirida xulosa yozadi", "Faqat rasm chizadi", "Hech qanday asbob ishlatmaydi"], c: 1 },
        { q: "Mijozlarni qo'llab-quvvatlash agenti murakkab yoki nozik holatda nima qilishi kerak?", o: ["O'zi taxminiy javob berib qo'ya qolishi", "Jonli operatorga ulashi", "Suhbatni to'xtatishi", "Mijozni e'tiborsiz qoldirishi"], c: 1 },
        { q: "Kod yozuvchi agentning o'ziga xos ustunligi nimada?", o: ["U hech qachon xato qilmaydi", "Kodni ishga tushirib, xatoni ko'rib, o'zini o'zi tuzata oladi", "U faqat bitta dasturlash tilini biladi", "U internetsiz ishlay olmaydi"], c: 1 },
        { q: "Beshta sohada ham umumiy bo'lgan narsa nima?", o: ["Bir xil til ishlatilishi", "Bir xil halqa: maqsad → o'ylash → asbob → kuzatuv → javob", "Bir xil narx", "Bir xil kompaniya"], c: 1 },
        { q: "Darsdagi asosiy ogohlantirish qaysi?", o: ["Agent odamni butunlay almashtiradi", "Agent odamni almashtirmaydi, balki tezlashtiradi; eng yaxshi natija odam + agent juftligida", "Agent faqat kod yozish uchun yaroqli", "Agentga ishonib bo'lmaydi"], c: 1 }
      ]
    },

    {
      id: "b6_3",
      title: "Capstone: o'z agentingizni rejalashtirish va qurish",
      read: "12 daqiqa",
      html: `
<p class="pk-lead">Mana, biz uzoq yo'lni bosib o'tdik. Siz agent nimadan boshlab, halqani, asboblarni, xotirani, ko'p agentli tizimlarni, xavfsizlikni va professional promptlashni o'rgandingiz. Endi eng qiziq qism — <b>o'z agentingizni rejalashtirish</b>. Bu darsni tugatganingizda, qo'lingizda haqiqiy bir reja bo'ladi: o'zingiz har kuni duch keladigan bir muammoni hal qiladigan agent loyihasi. Keling, uni birga loyihalaymiz.</p>

<h3>Yaxshi agent — to'g'ri muammodan boshlanadi</h3>
<p>Eng katta xato — menga ham agent kerak deb, muammosiz boshlash. Aksincha: avval <b>haqiqiy og'riq</b>ni toping. O'zingizga so'rang: <i>Men har hafta qaysi takrorlanuvchi, zerikarli ishni qilaman?</i> — xat saralash, hisobot yig'ish, manba qidirish, narx solishtirish... Mana o'sha — agentingizning birinchi muammosidir.</p>

<h3>Loyihalash nazorat ro'yxati — 6 qadam</h3>

<div class="pk-fig">
<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="750" height="300" rx="16" fill="#f7fbfa"/>
  <text x="375" y="30" text-anchor="middle" font-family="system-ui" font-size="13.5" font-weight="800" fill="#1f2937">O'z agentingizni qurish — 6 qadam</text>
  <!-- 1 -->
  <rect x="40" y="52" width="200" height="64" rx="12" fill="#eef2ff" stroke="#c7d2fe"/>
  <circle cx="66" cy="84" r="14" fill="#6366f1"/><text x="66" y="89" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">1</text>
  <text x="90" y="80" font-family="system-ui" font-size="12" font-weight="700" fill="#4338ca">Muammoni tanlash</text>
  <text x="90" y="98" font-family="system-ui" font-size="10.5" fill="#64748b">aniq, real og'riq</text>
  <!-- 2 -->
  <rect x="275" y="52" width="200" height="64" rx="12" fill="#e7f6ee" stroke="#bfe6d0"/>
  <circle cx="301" cy="84" r="14" fill="#22c55e"/><text x="301" y="89" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">2</text>
  <text x="325" y="80" font-family="system-ui" font-size="12" font-weight="700" fill="#15803d">Maqsadni belgilash</text>
  <text x="325" y="98" font-family="system-ui" font-size="10.5" fill="#64748b">kerakli natija nima?</text>
  <!-- 3 -->
  <rect x="510" y="52" width="200" height="64" rx="12" fill="#d6f2ed" stroke="#5eead4"/>
  <circle cx="536" cy="84" r="14" fill="#0d9488"/><text x="536" y="89" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">3</text>
  <text x="560" y="80" font-family="system-ui" font-size="12" font-weight="700" fill="#0f766e">Asboblarni aniqlash</text>
  <text x="560" y="98" font-family="system-ui" font-size="10.5" fill="#64748b">qaysi vositalar kerak?</text>
  <!-- 4 -->
  <rect x="40" y="142" width="200" height="64" rx="12" fill="#fff7ed" stroke="#fcd9b6"/>
  <circle cx="66" cy="174" r="14" fill="#f59e0b"/><text x="66" y="179" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">4</text>
  <text x="90" y="170" font-family="system-ui" font-size="12" font-weight="700" fill="#b45309">Naqsh tanlash</text>
  <text x="90" y="188" font-family="system-ui" font-size="10.5" fill="#64748b">workflow yoki agent?</text>
  <!-- 5 -->
  <rect x="275" y="142" width="200" height="64" rx="12" fill="#fef2f2" stroke="#fecaca"/>
  <circle cx="301" cy="174" r="14" fill="#ef4444"/><text x="301" y="179" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">5</text>
  <text x="325" y="170" font-family="system-ui" font-size="12" font-weight="700" fill="#b91c1c">Xavfsizlik nuqtasi</text>
  <text x="325" y="188" font-family="system-ui" font-size="10.5" fill="#64748b">odam tasdig'i qayerda?</text>
  <!-- 6 -->
  <rect x="510" y="142" width="200" height="64" rx="12" fill="#e0f2fe" stroke="#bae6fd"/>
  <circle cx="536" cy="174" r="14" fill="#0ea5e9"/><text x="536" y="179" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#fff">6</text>
  <text x="560" y="170" font-family="system-ui" font-size="12" font-weight="700" fill="#0369a1">Sinab, baholash</text>
  <text x="560" y="188" font-family="system-ui" font-size="10.5" fill="#64748b">yaxshilab takrorlash</text>
  <!-- strelka pastga: doimiy takomil -->
  <path d="M610 206 q0 40 -235 40 q-235 0 -235 -40" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#a6)"/>
  <text x="375" y="284" text-anchor="middle" font-family="system-ui" font-size="11" fill="#64748b">6-qadamdan keyin — yana 2-qadamga qaytib, agentni yaxshilab boring</text>
  <defs><marker id="a6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#94a3b8"/></marker></defs>
</svg>
<figcaption>Olti qadamli reja — oxirida yana boshiga qaytib, agentni doimo yaxshilab borasiz</figcaption>
</div>

<h4>1. Hal qilinadigan aniq muammoni tanlang</h4>
<p>Mavhum emas, <b>aniq</b> bo'lsin. Ishimni osonlashtirsin emas, balki <i>har kuni 20 ta mijoz xatini turkumlarga ajratib bersin</i>. Aniq muammo — aniq agent demakdir.</p>

<h4>2. Agent maqsadini (kerakli natijani) belgilang</h4>
<p>Agent ishini <b>nima bilan tugatishi</b> kerak? Natija qanday ko'rinadi? Masalan: har bir xat \"shikoyat / savol / buyurtma\" yorlig'ini olsin va shikoyatlar alohida ro'yxatga tushsin. Bu — agentning g'alaba shartidir.</p>

<h4>3. Qaysi asboblar kerakligini aniqlang</h4>
<p>Maqsadga yetish uchun agent tashqi dunyo bilan qanday ishlashi kerak? Pochta o'qish, baza qidirish, jadvalga yozish, xat yuborish... Faqat <b>haqiqatan kerak</b> bo'lganini qo'shing — ortiqcha asbob chalkashlik tug'diradi.</p>

<h4>4. Mos naqshni tanlang: workflow yoki agent</h4>
<p>1-bosqichdagi savolni eslang: <b>qadamlar har safar bir xilmi?</b> Agar ha — oddiy <b>workflow</b> yeting (arzon, ishonchli). Agar yo'q, vaziyatga qarab o'zgaradi va qaror talab qiladi — <b>agent</b> tanlang. Eng sodda yetadiganidan boshlang.</p>

<h4>5. Xavfsizlik va odam tasdig'i nuqtalarini qo'ying</h4>
<p>5-bosqichni eslang: agent <b>qaytarib bo'lmaydigan</b> ishni o'zi qilmasin. Pul o'tkazish, xat yuborish, fayl o'chirish — bularda <b>odam tasdig'i</b> shart. Agentga aniq chegara bering: bu yerdan nariga o'tma, avval mendan so'ra.</p>

<h4>6. Sinab, baholab, yaxshilang</h4>
<p>Birinchi versiya hech qachon mukammal bo'lmaydi — bu normal. Bir nechta real misolda sinab ko'ring, agent qayerda adashganini yozib oling, system promptni yoki asboblarni tuzating va qayta sinang. Mana shu sikl agentni haftadan-haftaga kuchaytiradi.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span><div><b>Kod yozmasdan ham boshlash mumkin</b>Birinchi agentingizni qurish uchun dasturchi bo'lishingiz shart emas. Bugun ko'plab <b>no-code</b> va past-kodli platformalar bor — siz faqat maqsad, asboblar va qoidalarni so'z bilan tasvirlaysiz. Avval shu yerda sinang; tushuncha mustahkamlangach, kodga o'tasiz.</div></div>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Kichikdan boshlang</b>Birinchi loyihangizni butun biznesni boshqaradigan ulkan agent qilib rejalashtirmang. Bitta tor, aniq vazifani mukammal bajaradigan kichik agent — eng yaxshi boshlang'ich. Kichik g'alaba sizga ishonch va keyingi qadam uchun tajriba beradi.</div></div>

<h3>To'liq misol: boshdan-oxir ishlaydigan agent</h3>
<p>Mana — kurs davomida o'rgangan hamma narsa bitta dasturda. Bu agent: ikki do'kondan arzon nonni topadi (<b>asboblar + halqa</b>), do'kon topilmasa <b>xatoni</b> modelga qaytaradi, va SMS yuborishdan oldin (<b>qaytarib bo'lmas amal</b>) <b>inson tasdig'ini</b> so'raydi. Production agentning to'rt ustuni shu yerda (Python, Claude API):</p>
<div class="pk-code">
  <div class="pk-code-bar"><span class="d r"></span><span class="d y"></span><span class="d g"></span><span class="lang">Python · Claude API — to'liq agent</span></div>
  <pre><code>import time
import anthropic
client = anthropic.Anthropic()

narxlar = {"Anvar non": 4500, "Tandir uyi": 4000}

asboblar = [
    {"name": "narx_ol",
     "description": "Berilgan do'kondan non narxini (so'mda) qaytaradi.",
     "input_schema": {"type": "object",
         "properties": {"dokon": {"type": "string"}}, "required": ["dokon"]}},
    {"name": "xabar_yubor",
     "description": "Foydalanuvchiga SMS yuboradi. Qaytarib bo'lmaydi!",
     "input_schema": {"type": "object",
         "properties": {"matn": {"type": "string"}}, "required": ["matn"]}},
]

def asbobni_bajar(nom, kirish):
    if nom == "narx_ol":
        do = kirish["dokon"]
        if do not in narxlar:
            return {"xato": f"'{do}' topilmadi"}        <span class="c"># XATO — model moslashadi</span>
        return {"narx_som": narxlar[do]}
    if nom == "xabar_yubor":
        <span class="c"># XAVFSIZLIK: qaytarib bo'lmas amal — avval inson tasdig'i</span>
        if input(f"SMS: {kirish['matn']} yuborilsinmi? (ha/yo'q) ") != "ha":
            return {"holat": "foydalanuvchi rad etdi"}
        return {"holat": "yuborildi"}

xabarlar = [{"role": "user", "content": "Arzon nonni top va menga SMS yubor"}]

while True:
    try:
        javob = client.messages.create(
            model="claude-opus-4-8", max_tokens=1024,
            tools=asboblar, messages=xabarlar,
        )
    except anthropic.RateLimitError:
        time.sleep(5); continue                          <span class="c"># ISHONCHLILIK: qayta urinish</span>

    if javob.stop_reason == "end_turn":
        break
    xabarlar.append({"role": "assistant", "content": javob.content})

    natijalar = []
    for blok in javob.content:
        if blok.type == "tool_use":
            n = asbobni_bajar(blok.name, blok.input)
            natijalar.append({
                "type": "tool_result",
                "tool_use_id": blok.id,
                "content": str(n),
                "is_error": "xato" in n,                 <span class="c"># modelga "bu xato" deb belgilash</span>
            })
    xabarlar.append({"role": "user", "content": natijalar})

print(next(b.text for b in javob.content if b.type == "text"))</code></pre>
</div>
<p>Shu 60 qatorda <b>asboblar</b>, <b>agent halqasi</b>, <b>xato boshqaruvi</b> (<code>is_error</code>), <b>ishonchlilik</b> (retry) va <b>inson tasdig'i</b> — hammasi bor. Agar siz buni o'qib tushunsangiz, demak siz haqiqatan agentlarni tushunasiz. Endi o'zingiznikini yozish navbati.</p>

<h3>Endi navbat sizda</h3>
<p>Pastdagi mashqda yuqoridagi olti qadam aralashtirib berilgan. Ularni <b>to'g'ri tartibga</b> joylashtiring — bu sizning shaxsiy agent qurish xaritangiz bo'ladi. Tartibni eslab qoling: aynan shu ketma-ketlik bilan o'z loyihangizni bugun rejalashtira olasiz.</p>

<p>Tabriklaymiz — siz AI Agentlar kursini yakunladingiz! Endi siz nafaqat agent nima ekanini bilasiz, balki <b>o'z agentingizni rejalashtira va boshqara olasiz</b>. Eng muhim qadam — birinchi loyihani boshlash. Kichik bir muammoni tanlang, shu xaritani oching va bugun ishga kirishing. Omad sizga yor bo'lsin, ustozingiz sizdan faxrlanadi!</p>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>O'z agentingizni 6 qadamda quring: aniq <b>muammo</b> → <b>maqsad</b> → kerakli <b>asboblar</b> → mos <b>naqsh</b> → <b>xavfsizlik</b> nuqtalari → <b>sinab-baholash</b>. Kichikdan, hatto no-code'dan boshlang va doimo yaxshilab boring. Bilim endi sizda — birinchi loyihani boshlash navbati keldi!</span></div>`,
      sim: {
        type: "order",
        intro: "Yakuniy mashq — o'z agentingizni qurishning <b>6 qadamini</b> to'g'ri tartibga keltiring. Strelkalar bilan joylashtiring va Tartibni tekshirishni bosing. Bu — sizning amaliy agent qurish xaritangiz.",
        steps: [
          "Hal qilinadigan aniq muammoni tanlash",
          "Agent maqsadini (kerakli natijani) belgilash",
          "Qaysi asboblar kerakligini aniqlash",
          "Mos naqsh (workflow yoki agent) tanlash",
          "Xavfsizlik va odam tasdig'i nuqtalarini qo'yish",
          "Sinab, baholab, yaxshilash"
        ]
      },
      quiz: [
        { q: "O'z agentingizni qurishda eng birinchi qadam qaysi?", o: ["Darhol kod yozishni boshlash", "Hal qilinadigan aniq, real muammoni tanlash", "Eng qimmat modelni sotib olish", "Imkon qadar ko'p asbob qo'shish"], c: 1 },
        { q: "Agent maqsadini belgilash nimani anglatadi?", o: ["Agentga ism qo'yish", "Agent qanday natija bilan ishini tugatishi kerakligini aniqlash", "Faqat asbob tanlash", "Token sonini hisoblash"], c: 1 },
        { q: "Naqsh tanlashda qaysi savol asosiy?", o: ["Agent qaysi rangda bo'lsin?", "Qadamlar har safar bir xilmi (workflow) yoki vaziyatga qarab o'zgaradimi (agent)?", "Necha xodim bor?", "Internet tezligi qancha?"], c: 1 },
        { q: "Qaytarib bo'lmaydigan ish (pul o'tkazish, xat yuborish) uchun nima qilish kerak?", o: ["Agentga to'liq ishonib, o'zi qilsin", "Odam tasdig'i nuqtasini qo'yish — avval inson tasdiqlasin", "Bu ishlarni umuman qilmaslik", "Asboblarni ko'paytirish"], c: 1 },
        { q: "Birinchi agent loyihangiz uchun eng yaxshi maslahat qaysi?", o: ["Butun biznesni boshqaradigan ulkan agent qilish", "Bitta tor, aniq vazifani mukammal bajaradigan kichik agentdan boshlash", "Hech qachon sinamaslik", "Faqat bitta marta yozib, hech yaxshilamaslik"], c: 1 }
      ]
    }

  ]
});
