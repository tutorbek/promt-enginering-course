/* ============================================================
   Oson Studio — Prompt Engineering kursi: Qo'shimcha ilg'or modul
   (model parametrlari, multimodal/rasm prompting, tayyor freymvorklar)
   Yakuniy moduldan OLDIN joylashtiriladi (splice).
   ============================================================ */
(function () {
  if (!window.PROMPT_COURSE || !window.PROMPT_COURSE.modules) return;

  var ADV = {
    id: "madv",
    title: "Qo'shimcha: ilg'or va amaliy mavzular",
    lessons: [
      {
        id: "madv_1",
        title: "Model parametrlari: ijodiylik va aniqlikni boshqarish",
        read: "9 daqiqa",
        html: `
<p class="pk-lead">Bir xil promptga AI goh quruq-aniq, goh erkin-ijodiy javob berishi mumkin. Buning ortida sozlanadigan \"murvatlar\" — model parametrlari turadi. Eng muhimi — <b>temperature</b> (harorat). Uni tushunsangiz, javobning xarakterini boshqara olasiz.</p>

<h3>Temperature — \"ijodiylik murvati\"</h3>
<p>Esingizda bo'lsa, model har qadamda keyingi so'zni ehtimollik bo'yicha tanlaydi. <b>Temperature</b> esa model qanchalik \"tavakkal qilishini\" belgilaydi — ya'ni u doim eng ehtimolli so'zni tanlaydimi yoki ba'zan kamroq ehtimolli, kutilmagan so'zlarni ham sinab ko'radimi.</p>
<ul>
  <li><b>Past temperature (0 ga yaqin)</b> — model \"xavfsiz\" o'ynaydi: aniq, izchil, takrorlanadigan javob. Faktik savollar, kod, tarjima, hisob-kitob uchun ideal.</li>
  <li><b>Yuqori temperature (1 ga yaqin)</b> — model erkinroq: rang-barang, ijodiy, kutilmagan g'oyalar. She'r, brend nomi, marketing g'oyalari, miya-hujumi uchun yaxshi.</li>
</ul>

<div class="pk-fig">
<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="210" rx="14" fill="#f7f8ff"/>
  <text x="300" y="34" text-anchor="middle" font-family="system-ui" font-size="16" font-weight="bold" fill="#312e81">Temperature — javob xarakteri</text>
  <defs><linearGradient id="tg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs>
  <rect x="60" y="70" width="480" height="16" rx="8" fill="url(#tg)"/>
  <circle cx="150" cy="78" r="9" fill="#fff" stroke="#0ea5e9" stroke-width="3"/>
  <text x="60" y="110" font-family="system-ui" font-size="12" font-weight="bold" fill="#0c4a6e">0 — Aniq</text>
  <text x="540" y="110" text-anchor="end" font-family="system-ui" font-size="12" font-weight="bold" fill="#9d174d">1 — Ijodiy</text>
  <rect x="60" y="128" width="225" height="60" rx="10" fill="#e0f2fe" stroke="#0ea5e9"/>
  <text x="72" y="150" font-family="system-ui" font-size="12" font-weight="bold" fill="#0c4a6e">Past harorat</text>
  <text x="72" y="170" font-family="system-ui" font-size="11" fill="#075985">Kod · tarjima · faktlar ·</text>
  <text x="72" y="184" font-family="system-ui" font-size="11" fill="#075985">aniq, izchil javob</text>
  <rect x="315" y="128" width="225" height="60" rx="10" fill="#fce7f3" stroke="#ec4899"/>
  <text x="327" y="150" font-family="system-ui" font-size="12" font-weight="bold" fill="#9d174d">Yuqori harorat</text>
  <text x="327" y="170" font-family="system-ui" font-size="11" fill="#9d174d">She'r · g'oyalar · nom ·</text>
  <text x="327" y="184" font-family="system-ui" font-size="11" fill="#9d174d">rang-barang javob</text>
</svg>
<figcaption>Harorat past bo'lsa — aniqlik, yuqori bo'lsa — ijodiylik ortadi.</figcaption>
</div>

<h3>Yana ikkita foydali parametr</h3>
<h4>Top-p (so'z tanlash kengligi)</h4>
<p>Top-p ham temperature kabi javobning xilma-xilligini boshqaradi, lekin boshqacha yo'l bilan. Model keyingi so'zni tanlashda eng ehtimolli so'zlardan iborat "to'p" tuzadi va ularning ehtimoli yig'indisi <b>p</b> qiymatiga yetguncha o'sha to'pdan tanlaydi:</p>
<ul>
  <li><b>top-p = 0.2</b> — faqat eng ishonchli bir nechta so'zdan tanlaydi → aniq, bashoratli javob (kod, faktlar uchun).</li>
  <li><b>top-p = 0.9</b> — ancha keng doiradan tanlaydi → erkin, rang-barang javob (ijodiy matn uchun).</li>
</ul>
<p>Amaliy qoida: odatda <b>temperature yoki top-p</b> — bittasini sozlash kifoya, ikkalasini birga emas. Boshlovchi uchun temperature tushunarliroq.</p>
<h4>Max tokens (javob uzunligi chegarasi)</h4>
<p>Token — so'z yoki so'z bo'lagi (taxminan 1 so'z ≈ 1,3 token). <b>Max tokens</b> — model qaytaradigan javobning eng katta uzunligi:</p>
<ul>
  <li><b>Past qiymat (masalan 100)</b> — qisqa javob; uzun matn yarmida kesilib qolishi mumkin.</li>
  <li><b>Yuqori qiymat (masalan 2000)</b> — uzun maqola yoki batafsil tahlil uchun joy beradi.</li>
</ul>
<p>Agar javob tugamay birdan kesilib qolsa — bu ko'pincha max tokens kamligidan. Uni oshiring yoki shunchaki "davom et" deb yozing.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><span><b>Eslatma</b>ChatGPT yoki Claude'ning oddiy chat oynasida bu parametrlar ko'pincha ko'rinmaydi — ular API yoki \"playground\"da sozlanadi. Lekin tushunchaning o'zi muhim: u javob nega goh aniq, goh erkin ekanini izohlaydi.</span></div>

<h3>Chat oynasida \"temperature\"ni so'z bilan boshqarish</h3>
<p>Parametr tugmasi bo'lmasa ham, promptning o'zida modelga qanday xarakter kerakligini ayta olasiz — bu xuddi temperature'ni qo'lda sozlashdek ishlaydi:</p>
<div class="pk-ex pk-good"><span class="tag">Aniqlik (past harorat)</span>Faqat aniq va tasdiqlangan ma'lumot ber. Ijodiy bo'lma, qisqa va izchil javob yoz. Taxmin qilma.</div>
<div class="pk-ex pk-good"><span class="tag">Ijodiylik (yuqori harorat)</span>Erkin va ijodiy yondash. Menga 10 ta bir-biridan farqli, kutilmagan g'oya ber — oddiy va \"xavfsiz\" variantlardan qoch.</div>
<div class="pk-ex pk-good"><span class="tag">Tahliliy (o'rta)</span>Quyidagi ma'lumotni xolisona tahlil qil: kuchli va zaif tomonlarini ajrat, asoslangan xulosa chiqar. Ortiqcha bezaksiz, lekin to'liq yoz.</div>
<div class="pk-ex pk-good"><span class="tag">Kod (eng past)</span>Faqat ishlaydigan kod yoz. Tushuntirishni minimal qil; taxminiy yoki \"ehtimol shunday\" yechimlardan qoch. Aniq, sinab ko'rilgan yondashuvni ber.</div>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg></span><span><b>Maslahat</b>Bir vazifaning ikki bosqichi bo'lsa: avval yuqori \"haroratda\" ko'p g'oya yig'ing, keyin past \"haroratda\" eng yaxshisini tanlab, sayqallang.</span></div>
`,
        quiz: [
          { q: "Temperature parametri nimani boshqaradi?", o: ["Javobning rang-barangligi va ijodiyligi darajasini", "Internet tezligini", "Matn shriftini", "Model qaysi tilda javob berishini"], c: 0 },
          { q: "Kod yozish yoki aniq faktik javob uchun qaysi sozlama mosroq?", o: ["Juda yuqori temperature", "Past temperature (aniqlik)", "Parametrlarning ahamiyati yo'q", "Eng uzun javob"], c: 1 },
          { q: "ChatGPT/Claude'ning oddiy chat oynasida temperature ko'rinmasa, nima qilish mumkin?", o: ["Hech narsa — ijodiylikni boshqarib bo'lmaydi", "Promptda 'ijodiy bo'l' yoki 'aniq bo'l, taxmin qilma' deb yo'naltirish", "Kompyuterni qayta ishga tushirish", "Boshqa brauzer ochish"], c: 1 },
          { q: "Ko'p, xilma-xil g'oya kerak bo'lsa qaysi yondashuv mantiqiy?", o: ["Past harorat (aniqlik)", "Yuqori harorat (ijodiylik)", "Max tokenlarni 1 qilish", "Faqat bitta so'zli prompt"], c: 1 }
        ]
      },
      {
        id: "madv_2",
        title: "Rasm bilan prompting (multimodal)",
        read: "9 daqiqa",
        html: `
<p class="pk-lead">Zamonaviy AI modellar endi faqat matnni emas, <b>rasmlarni ham \"ko'radi\"</b>. Bu — multimodal imkoniyat. Siz rasmni AI'ga berib u haqida so'rashingiz yoki AI yordamida yangi rasm yaratish uchun prompt yozishingiz mumkin. Ikkalasi ham alohida ko'nikma talab qiladi.</p>

<h3>Ikki yo'nalish</h3>
<div class="pk-fig">
<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="230" rx="14" fill="#f7f8ff"/>
  <text x="300" y="30" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#312e81">Multimodal prompting ikki tomonlama</text>
  <rect x="40" y="55" width="90" height="60" rx="10" fill="#eef2ff" stroke="#6366f1"/><text x="85" y="90" text-anchor="middle" font-family="system-ui" font-size="12" fill="#312e81">Rasm</text>
  <rect x="255" y="50" width="90" height="70" rx="12" fill="#6366f1"/><text x="300" y="90" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="bold" fill="#fff">AI</text>
  <rect x="470" y="55" width="90" height="60" rx="10" fill="#e7f9f0" stroke="#16a34a"/><text x="515" y="83" text-anchor="middle" font-family="system-ui" font-size="12" fill="#14532d">Matn</text><text x="515" y="100" text-anchor="middle" font-family="system-ui" font-size="10" fill="#16a34a">(tavsif, tahlil)</text>
  <path d="M132 85 H252" stroke="#9aa0c9" stroke-width="2.5" marker-end="url(#a2)"/><path d="M347 85 H468" stroke="#9aa0c9" stroke-width="2.5" marker-end="url(#a2)"/>
  <text x="300" y="140" text-anchor="middle" font-family="system-ui" font-size="11" fill="#6b7280">1) Rasmni tushunish: \"bu rasmda nima bor?\"</text>
  <rect x="40" y="160" width="90" height="50" rx="10" fill="#fef3c7" stroke="#d97706"/><text x="85" y="190" text-anchor="middle" font-family="system-ui" font-size="12" fill="#92400e">Matn</text>
  <rect x="255" y="158" width="90" height="54" rx="12" fill="#8b5cf6"/><text x="300" y="190" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="bold" fill="#fff">AI</text>
  <rect x="470" y="160" width="90" height="50" rx="10" fill="#fce7f3" stroke="#ec4899"/><text x="515" y="190" text-anchor="middle" font-family="system-ui" font-size="12" fill="#9d174d">Rasm</text>
  <path d="M132 185 H252" stroke="#9aa0c9" stroke-width="2.5" marker-end="url(#a2)"/><path d="M347 185 H468" stroke="#9aa0c9" stroke-width="2.5" marker-end="url(#a2)"/>
  <text x="300" y="225" text-anchor="middle" font-family="system-ui" font-size="11" fill="#6b7280">2) Rasm yaratish: matnli tavsifdan rasm</text>
  <defs><marker id="a2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#9aa0c9"/></marker></defs>
</svg>
<figcaption>Rasmni tushuntirish (1) va matndan rasm yaratish (2) — har biri alohida texnika.</figcaption>
</div>

<h3>Avval: ikki xil AI'ni adashtirmang</h3>
<p>Bu mavzuda butunlay ikki xil narsa bor — ularni farqlash muhim:</p>
<ul>
  <li><b>Ko'ruvchi AI</b> — rasmni <b>tushunadi</b>. Siz rasm yuklaysiz, u haqida savol berasiz. Masalan: ChatGPT (GPT-4o), Google Gemini, Claude.</li>
  <li><b>Yaratuvchi AI</b> — rasmni <b>chizadi</b>. Siz so'z bilan tasvirlaysiz, u yangi rasm yasaydi. Masalan: DALL·E (ChatGPT ichida), Google Gemini, Midjourney.</li>
</ul>
<p>Qayerdan boshlash kerak? <b>ChatGPT</b> (chat.openai.com) va <b>Google Gemini</b> (gemini.google.com) bepul versiyasida ham <b>rasmni tushunish</b> (rasm yuklab, savol berish) mavjud — alohida dastur shart emas. <b>Rasm yaratish</b> esa ko'pincha cheklangan yoki pullik (masalan ChatGPT Plus, Google'ning Pro rejasi); Midjourney butunlay alohida, pullik xizmat. Shuning uchun avval bepul imkoniyatlardan boshlang.</p>

<h3>1. Rasmni tushuntirish promptlari</h3>
<p>GPT-4o, Claude, Gemini kabi modellarga rasm yuklab, u haqida so'rash mumkin: nima tasvirlangan, matnni o'qib berish, jadvalni tahlil qilish, xatoni topish. Bu yerda ham <b>aniqlik</b> qoidasi ishlaydi — modelga rasmda aynan nimaga e'tibor berishini ayting.</p>
<div class="pk-ex pk-bad"><span class="tag">Yomon prompt</span>Bu rasmda nima bor?</div>
<div class="pk-ex pk-good"><span class="tag">Yaxshi prompt</span>Ushbu chek rasmidagi mahsulotlar ro'yxatini va har birining narxini jadval ko'rinishida chiqar. Oxirida umumiy summani hisobla.</div>
<p>Ko'ruvchi AI'ning yana bir nechta kundalik foydali holati:</p>
<ul>
  <li><b>Hujjat yoki qo'lyozma</b> — "Bu rasmdagi qo'lda yozilgan matnni ko'chirib ber".</li>
  <li><b>Diagramma yoki grafik</b> — "Bu grafikda qaysi oy eng yuqori? Asosiy tendensiyani 2 jumlada izohla".</li>
  <li><b>Skrinshot yoki xatolik</b> — "Bu xatolik oynasi nimani anglatadi va men buni qanday tuzataman?".</li>
  <li><b>Mahsulot, ovqat yoki o'simlik</b> — "Bu o'simlik kasalmi? Bargidagi belgilardan aytib ber".</li>
</ul>

<h3>2. Rasm yaratish promptlari</h3>
<p>Midjourney, DALL-E yoki shunga o'xshash vositalar uchun prompt yozayotganda, so'z bilan rasm \"chizasiz\". Yaxshi rasm prompti odatda quyidagilarni o'z ichiga oladi:</p>
<ul>
  <li><b>Obyekt</b> — asosiy narsa nima (kim, nima).</li>
  <li><b>Uslub</b> — fotosurat, rassomlik, 3D, multfilm, akvarel.</li>
  <li><b>Tafsilotlar</b> — rang, yorug'lik, kayfiyat, fon.</li>
  <li><b>Kompozitsiya</b> — yaqindan, uzoqdan, yuqoridan ko'rinish.</li>
</ul>
<div class="pk-ex pk-good"><span class="tag">Yaxshi rasm prompti</span>Tog' cho'qqisida turgan yolg'iz archa daraxti, quyosh botishi paytida, iliq oltin yorug'lik, tumanli fon, professional peyzaj fotosurati, keng burchakli kadr.</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Rasmni tushuntirishda — \"nimaga qarashni\" ayting. Rasm yaratishda — obyekt, uslub, tafsilot va kompozitsiyani so'z bilan chizing. Qanchalik tasvirli bo'lsangiz, natija shunchalik mos chiqadi.</span></div>
`,
        quiz: [
          { q: "\"Multimodal\" prompting nimani anglatadi?", o: ["Faqat ko'p tilda yozish", "AI'ning matn bilan birga rasm kabi boshqa turdagi ma'lumot bilan ham ishlay olishi", "Bir vaqtda ko'p AI ishlatish", "Ovoz yozish"], c: 1 },
          { q: "Rasm yaratish (masalan Midjourney) prompti uchun qaysi elementlar muhim?", o: ["Faqat obyekt nomi", "Obyekt, uslub, tafsilotlar va kompozitsiya", "Faqat rang", "Hech narsa — AI o'zi hal qiladi"], c: 1 },
          { q: "Chek rasmidan summani hisoblash — bu qaysi yo'nalishga misol?", o: ["Rasm yaratish", "Rasmni tushunish/tahlil qilish", "Ovozni matnga aylantirish", "Tarjima"], c: 1 },
          { q: "Rasmni tushuntirish promptini kuchaytirish uchun eng yaxshi yo'l?", o: ["Imkon qadar umumiy so'rash", "Modelga rasmda aynan nimaga e'tibor berishini aniq aytish", "Rasmni kichraytirish", "Bir nechta rasm yuborish"], c: 1 }
        ]
      },
      {
        id: "madv_3",
        title: "Tayyor freymvorklar: RTF, RACE, CRISPE",
        read: "9 daqiqa",
        html: `
<p class="pk-lead">Har safar promptni noldan o'ylab topish shart emas. Tajribali foydalanuvchilar <b>tayyor freymvorklardan</b> foydalanadi — bular promptni tuzishda biror muhim elementni unutmaslik uchun aqliy shablon (eslatma) vazifasini bajaradi.</p>

<h3>Freymvork nima va nega kerak?</h3>
<p>Freymvork — bu promptning qaysi qismlardan iborat bo'lishi kerakligini ko'rsatadigan harflar yig'indisi (qisqartma). U sizni <b>izchillikka</b> o'rgatadi: har gal bir xil sifatli prompt tuzasiz, muhim qismni tushirib qoldirmaysiz. Bu ayniqsa boshlovchilar uchun foydali.</p>

<div class="pk-fig">
<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="240" rx="14" fill="#f7f8ff"/>
  <text x="300" y="30" text-anchor="middle" font-family="system-ui" font-size="15" font-weight="bold" fill="#312e81">3 ta mashhur freymvork</text>
  <rect x="30" y="50" width="170" height="170" rx="12" fill="#eef2ff" stroke="#6366f1"/>
  <text x="115" y="78" text-anchor="middle" font-family="system-ui" font-size="20" font-weight="bold" fill="#4338ca">RTF</text>
  <text x="48" y="108" font-family="system-ui" font-size="12.5" fill="#312e81">R — Rol</text>
  <text x="48" y="132" font-family="system-ui" font-size="12.5" fill="#312e81">T — Topshiriq</text>
  <text x="48" y="156" font-family="system-ui" font-size="12.5" fill="#312e81">F — Format</text>
  <text x="115" y="200" text-anchor="middle" font-family="system-ui" font-size="11" fill="#6b7280">eng sodda</text>
  <rect x="215" y="50" width="170" height="170" rx="12" fill="#e7f9f0" stroke="#16a34a"/>
  <text x="300" y="78" text-anchor="middle" font-family="system-ui" font-size="20" font-weight="bold" fill="#15803d">RACE</text>
  <text x="233" y="104" font-family="system-ui" font-size="12.5" fill="#14532d">R — Rol</text>
  <text x="233" y="126" font-family="system-ui" font-size="12.5" fill="#14532d">A — Amal</text>
  <text x="233" y="148" font-family="system-ui" font-size="12.5" fill="#14532d">C — Kontekst</text>
  <text x="233" y="170" font-family="system-ui" font-size="12.5" fill="#14532d">E — Kutilgan natija</text>
  <rect x="400" y="50" width="170" height="170" rx="12" fill="#fce7f3" stroke="#ec4899"/>
  <text x="485" y="78" text-anchor="middle" font-family="system-ui" font-size="19" font-weight="bold" fill="#be185d">CRISPE</text>
  <text x="416" y="100" font-family="system-ui" font-size="10.5" fill="#9d174d">C — Salohiyat</text>
  <text x="416" y="118" font-family="system-ui" font-size="10.5" fill="#9d174d">R — Rol</text>
  <text x="416" y="136" font-family="system-ui" font-size="10.5" fill="#9d174d">I — Fon (kontekst)</text>
  <text x="416" y="154" font-family="system-ui" font-size="10.5" fill="#9d174d">S — Topshiriq</text>
  <text x="416" y="172" font-family="system-ui" font-size="10.5" fill="#9d174d">P — Uslub/ohang</text>
  <text x="416" y="190" font-family="system-ui" font-size="10.5" fill="#9d174d">E — Variant so'rash</text>
</svg>
<figcaption>Soddadan batafsilgacha: RTF → RACE → CRISPE.</figcaption>
</div>

<h3>RTF — Rol, Topshiriq, Format</h3>
<p>Eng sodda va tez freymvork. Uchta savolga javob berasiz: AI kim bo'lsin? Nima qilsin? Natija qanday ko'rinishda bo'lsin?</p>
<div class="pk-ex pk-good"><span class="tag">RTF misol</span>Rol: Sen tajribali HR mutaxassisisan.\nTopshiriq: Sotuvchi lavozimi uchun ish e'lonini yoz.\nFormat: 5 ta banddan iborat ro'yxat, qisqa va aniq.</div>

<h3>RACE — Rol, Amal, Kontekst, Kutilgan natija</h3>
<p>RTF'ga <b>kontekst</b> va <b>kutilgan natija</b> qo'shadi — shuning uchun aniqroq ishlaydi.</p>
<div class="pk-ex pk-good"><span class="tag">RACE misol</span>Rol: Sen marketing maslahatchisisan.\nAmal: Mahsulotim uchun reklama shiori o'ylab top.\nKontekst: Mahsulot — talabalar uchun arzon qahva; raqobat yuqori.\nKutilgan natija: 5 ta qisqa, eslab qolinadigan shior.</div>

<h3>CRISPE — eng batafsil freymvork</h3>
<p>CRISPE — olti harf, olti qism. Har bir harfni alohida ochib beramiz:</p>
<ul>
  <li><b>C — Salohiyat (Capacity)</b>: AI nimaga qodir, qaysi sohada kuchli ("Sen 10 yillik tajribaga ega marketing eksperti darajasidasan").</li>
  <li><b>R — Rol (Role)</b>: AI aynan kim sifatida javob bersin ("...kontent-strateg sifatida yondash").</li>
  <li><b>I — Fon ma'lumot (Insight)</b>: vaziyat va kontekst ("Brendim — talabalar uchun arzon qahvaxona, raqobat kuchli").</li>
  <li><b>S — Topshiriq (Statement)</b>: aniq vazifa ("Instagram uchun 1 haftalik post rejasini tuz").</li>
  <li><b>P — Shaxsiyat/uslub (Personality)</b>: javob qanday yangrashi ("Yengil, do'stona, yoshlarga mos ohangda").</li>
  <li><b>E — Variant so'rash (Experiment)</b>: bir nechta yechim ("3 xil variant ber va farqini izohla").</li>
</ul>
<div class="pk-ex pk-good"><span class="tag">To'liq CRISPE misol</span>Sen 10 yillik tajribaga ega kontent-strategsan (C, R). Brendim — talabalar uchun arzon qahvaxona, raqobat kuchli (I). Instagram uchun 1 haftalik post rejasini tuz (S). Ohang yengil, do'stona, yoshlarga mos bo'lsin (P). 3 xil variant ber va qaysi biri nega ishlashini qisqa izohla (E).</div>

<h3>Bitta vazifa — uch freymvork bilan</h3>
<p>Farqni his qilish uchun aynan bitta vazifani ("reklama shiori") uchala freymvork bilan yozamiz — soddadan batafsilgacha:</p>
<div class="pk-ex pk-good"><span class="tag">RTF</span>Rol: Marketolog. Topshiriq: Qahva uchun shior yoz. Format: 5 ta variant.</div>
<div class="pk-ex pk-good"><span class="tag">RACE</span>Rol: Marketolog. Amal: Shior yoz. Kontekst: talabalar uchun arzon qahva. Kutilgan natija: 5 ta qisqa, eslab qolinadigan shior.</div>
<div class="pk-ex pk-good"><span class="tag">CRISPE</span>Sen tajribali marketologsan (C, R). Mahsulot — talabalar uchun arzon qahva, raqobat yuqori (I). 5 ta reklama shiori yoz (S). Ohang yosh va energiyali bo'lsin (P). 3 xil yo'nalishda variant ber (E).</div>
<p>Ko'rib turganingizdek: qancha ko'p kontekst bersangiz, natija shuncha aniq va mos bo'ladi. Ammo har doim eng murakkabini tanlash shart emas — vazifaga qarab tanlang.</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><span><b>Eslatma</b>Freymvorklarni yodlash shart emas — ular shunchaki yordamchi. Vaqt o'tib, kuchli prompt tuzish sizga tabiiy odatga aylanadi va siz o'z \"shaxsiy freymvorkingizni\" yaratasiz.</span></div>

<h3>Qaysi birini tanlash?</h3>
<ul>
  <li><b>Tez, oddiy vazifa</b> — RTF yetarli.</li>
  <li><b>Aniqroq natija kerak</b> — RACE.</li>
  <li><b>Murakkab, ijodiy vazifa</b> — CRISPE kabi batafsil freymvork.</li>
</ul>
`,
        quiz: [
          { q: "Prompt freymvorki asosan nima uchun foydali?", o: ["Internetni tezlashtirish uchun", "Promptni tuzishda muhim elementni unutmaslik va izchillik uchun", "AI'ni o'chirish uchun", "Faqat ingliz tili uchun"], c: 1 },
          { q: "RTF freymvorki qaysi 3 elementdan iborat?", o: ["Rang, Tovush, Forma", "Rol, Topshiriq, Format", "Reja, Test, Fikr", "Rasm, Tahlil, Fayl"], c: 1 },
          { q: "RACE freymvorki RTF'dan nimasi bilan farq qiladi?", o: ["Hech qanday farqi yo'q", "Kontekst va kutilgan natija elementlarini qo'shadi", "Faqat rasm bilan ishlaydi", "Faqat kod uchun"], c: 1 },
          { q: "Oddiy, tez vazifa uchun qaysi freymvork eng mos?", o: ["CRISPE (eng batafsil)", "RTF (eng sodda)", "Hech qaysi", "Faqat RACE"], c: 1 }
        ]
      }
    ]
  };

  var mods = window.PROMPT_COURSE.modules;
  // Yakuniy moduldan oldin joylashtirish (oxiridan bitta oldin)
  var pos = Math.max(0, mods.length - 1);
  mods.splice(pos, 0, ADV);
})();
