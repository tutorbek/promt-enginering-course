/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   6-modul: Rasmni tahrirlash va boshqarish
   window.AIRASM_COURSE.modules.push({...})
   ============================================================ */
window.AIRASM_COURSE.modules.push({
  id: "b3",
  title: "Rasmni tahrirlash va boshqarish",
  lessons: [
    {
      id: "b3_1",
      title: "Inpainting va outpainting",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Ko'pchilik AI rasmni «bir marta yaratiladigan» narsa deb o'ylaydi. Aslida professionallar rasmni <b>tahrirlaydi</b>: bir qismini almashtiradi, kerakmasini olib tashlaydi yoki kadrni kengaytiradi. Buning ikki asosiy vositasi — <b>inpainting</b> (ichini o'zgartirish) va <b>outpainting</b> (chetini kengaytirish). Bularni bilsangiz, deyarli har qanday rasmni xohlagan ko'rinishga keltira olasiz.</p>

<h3>Inpainting — ichini o'zgartirish</h3>
<p><b>Inpainting</b> — rasmning <b>tanlangan qismini</b> qayta yaratish. Siz o'zgartirmoqchi bo'lgan joyni belgilaysiz (niqoblaysiz) va u yerga nima kerakligini aytasiz. Misollar: keraksiz narsani olib tashlash, ko'ylak rangini almashtirish, yuzdagi nuqsonni tuzatish, fonga obyekt qo'shish. Rasmning qolgan qismi o'zgarmaydi.</p>

<h3>Outpainting — chetini kengaytirish</h3>
<p><b>Outpainting</b> — rasm <b>chegarasidan tashqariga</b> chizish: kadrni kengaytirib, atrofni davom ettirish. Misollar: portretni keng manzaraga aylantirish, kvadrat rasmni 16:9 ga cho'zish, tepaga osmon qo'shib balandlatish. Model mavjud rasmga mos ravishda davomini «o'ylab topadi».</p>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Oddiy farqi: ichkarimi yoki tashqarimi</b><b>Inpainting</b> — mavjud kadr <b>ichidagi</b> biror qismni o'zgartiradi. <b>Outpainting</b> — kadr <b>tashqarisiga</b> yangi joy qo'shadi. Ikkalasi ham asl rasmni butunlay qayta yaratmaydi — faqat kerakli qismni ishlaydi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 176" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b31bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b31fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="b31sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <filter id="b31sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="b31a"><rect x="78" y="48" width="200" height="92" rx="8"/></clipPath>
    <clipPath id="b31b"><rect x="446" y="58" width="200" height="72" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="176" rx="16" fill="url(#b31bg)"/>
  <!-- inpainting -->
  <text x="178" y="30" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#7c3aed">Inpainting — ichini o'zgartirish</text>
  <g filter="url(#b31sh)"><rect x="72" y="42" width="212" height="104" rx="12" fill="url(#b31fr)"/></g>
  <g clip-path="url(#b31a)"><rect x="78" y="48" width="200" height="92" fill="url(#b31sky)"/><circle cx="110" cy="74" r="12" fill="#fff7d6"/><path d="M78 140 L78 116 L140 96 L200 116 L278 100 L278 140 Z" fill="#6d28d9" opacity=".75"/></g>
  <rect x="150" y="70" width="58" height="58" rx="6" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="6 4"/>
  <text x="179" y="103" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="800" fill="#fff">tanlangan</text>
  <!-- outpainting -->
  <text x="540" y="30" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#7c3aed">Outpainting — kengaytirish</text>
  <rect x="430" y="42" width="232" height="104" rx="12" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="6 4"/>
  <g filter="url(#b31sh)"><rect x="500" y="58" width="92" height="72" rx="10" fill="url(#b31fr)"/></g>
  <g clip-path="url(#b31b)"><rect x="446" y="58" width="200" height="72" fill="url(#b31sky)" opacity=".5"/></g>
  <rect x="506" y="64" width="80" height="60" rx="6" fill="url(#b31sky)"/><circle cx="528" cy="82" r="9" fill="#fff7d6"/><path d="M506 124 L506 108 L536 96 L560 108 L586 98 L586 124 Z" fill="#6d28d9" opacity=".75"/>
  <path d="M468 94 H498" stroke="#a21caf" stroke-width="2" marker-end="url(#b31ar)"/>
  <path d="M624 94 H594" stroke="#a21caf" stroke-width="2" marker-end="url(#b31ar)"/>
  <defs><marker id="b31ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 Z" fill="#a21caf"/></marker></defs>
  <text x="540" y="144" text-anchor="middle" font-family="system-ui" font-size="8.5" fill="#94a3b8">model atrofni davom ettiradi</text>
</svg>
<figcaption>Inpainting — ichini ishlaydi; outpainting — chetiga yangi joy qo'shadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Inpainting — rasmning tanlangan (niqoblangan) qismini qayta yaratish (narsa olib tashlash, rang almashtirish, nuqson tuzatish). Outpainting — kadrni chetidan kengaytirib, atrofni davom ettirish. Ikkalasi ham butun rasmni emas, faqat kerakli qismni ishlaydi.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi vazifalar uchun qaysi vosita kerak: <b>inpainting</b> (ichini o'zgartirish)mi yoki <b>outpainting</b> (kengaytirish)mi?",
        groups: ["inpainting", "outpainting"],
        items: [
          { name: "Rasmdagi keraksiz odamni olib tashlash", answer: "inpainting", hint: "Kadr ichidagi qismni o'zgartirish — inpainting." },
          { name: "Portretni atrofini qo'shib, keng manzaraga aylantirish", answer: "outpainting", hint: "Kadr tashqarisiga joy qo'shish — outpainting." },
          { name: "Faqat ko'ylak rangini almashtirish", answer: "inpainting", hint: "Ichidagi bir qismni o'zgartirish — inpainting." },
          { name: "Kvadrat rasmni yon tomonlarini to'ldirib 16:9 ga cho'zish", answer: "outpainting", hint: "Chegarani kengaytirish — outpainting." },
          { name: "Yuzdagi mayda nuqsonni tuzatish", answer: "inpainting", hint: "Kichik joyni qayta ishlash — inpainting." },
          { name: "Rasm tepasiga osmon qo'shib, balandroq qilish", answer: "outpainting", hint: "Tepaga yangi joy qo'shish — outpainting." }
        ]
      },
      quiz: [
        { q: "Inpainting nima qiladi?", o: ["Butun rasmni qayta yaratadi", "Rasmning tanlangan (niqoblangan) qismini qayta yaratadi", "Kadrni kengaytiradi", "Faylni siqadi"], c: 1 },
        { q: "Outpainting nima qiladi?", o: ["Ichidagi qismni o'zgartiradi", "Kadrni chetidan kengaytirib, atrofni davom ettiradi", "Rangni o'chiradi", "Faqat sifatni oshiradi"], c: 1 },
        { q: "Rasmdagi keraksiz obyektni olib tashlash uchun nima ishlatiladi?", o: ["Outpainting", "Inpainting", "Upscale", "Seed"], c: 1 },
        { q: "Kvadrat rasmni keng 16:9 formatga aylantirish (yonlarni to'ldirish) uchun?", o: ["Inpainting", "Outpainting", "CFG oshirish", "Sampler almashtirish"], c: 1 },
        { q: "Inpainting va outpainting orasidagi asosiy farq nima?", o: ["Narxi", "Biri kadr ichini, ikkinchisi tashqarisini ishlaydi", "Biri faqat anime uchun", "Hech qanday farq yo'q"], c: 1 }
      ]
    },

    {
      id: "b3_2",
      title: "Image-to-image va referens rasm",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Hamma ham noldan, faqat matn bilan boshlamaydi. Ko'pincha sizda <b>boshlang'ich rasm</b> bor — eskiz, suratga olingan narsa yoki ilhom rasmi — va siz uni asos qilib ishlamoqchisiz. Bunda <b>image-to-image</b> va <b>referens rasm</b> yordam beradi: matn bilan birga rasm ham berib, natijani kuchli boshqarasiz.</p>

<h3>Image-to-image (rasmdan rasmga)</h3>
<p>Bu usulda siz <b>boshlang'ich rasm</b> berasiz, model esa uni prompt asosida qayta ishlaydi. Eng muhim sozlama — <b>o'zgartirish kuchi</b> (denoise/strength):</p>
<ul>
  <li><b>Past kuch</b> — asl rasmga sodiq qoladi, faqat ozgina o'zgaradi (masalan, suratga uslub berish).</li>
  <li><b>Yuqori kuch</b> — asl rasmdan ko'p uzoqlashadi, prompt ko'proq hukmronlik qiladi.</li>
</ul>
<p>Masalan, qo'pol eskizdan boshlab, uni o'rta kuch bilan tugallangan rasmga aylantirish mumkin — kompozitsiya saqlanadi, sifat ko'tariladi.</p>

<h3>Referens rasm</h3>
<p>Ba'zi vositalarda <b>referens rasm</b> berib, undan <b>uslub</b>, <b>rang</b> yoki <b>kompozitsiya</b>ni «olish» mumkin — subyektni esa promptda aytasiz. Bu ilhom rasmidagi ko'rinishni yangi g'oyangizga ko'chirishning qulay yo'li.</p>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Kuchni maqsadga moslang</b>Kompozitsiyani aniq saqlamoqchimisiz — past/o'rta kuch tanlang. Faqat g'oyani olib, butunlay yangisini chizmoqchimisiz — yuqori kuch. Bittadan sinab, qaysi kuch sizning maqsadingizga mosligini toping.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b32bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b32fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="b32sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <filter id="b32sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="b32b"><rect x="446" y="46" width="200" height="92" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="170" rx="16" fill="url(#b32bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Eskiz (boshlang'ich rasm) → tugallangan natija</text>
  <!-- sketch -->
  <g filter="url(#b32sh)"><rect x="74" y="40" width="200" height="98" rx="12" fill="#ffffff" stroke="#ead8fb"/></g>
  <g stroke="#a78bfa" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M96 122 L96 104 L150 84 L196 104 L252 86 L252 122 Z"/>
    <circle cx="128" cy="72" r="10"/>
  </g>
  <text x="174" y="134" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">qo'pol eskiz</text>
  <!-- arrow + strength -->
  <path d="M288 90 H420" stroke="#a21caf" stroke-width="2.4" marker-end="url(#b32ar)"/>
  <rect x="306" y="66" width="96" height="18" rx="9" fill="#ede9fe"/><text x="354" y="79" text-anchor="middle" font-family="system-ui" font-size="9.5" font-weight="700" fill="#6d28d9">o'rta kuch</text>
  <defs><marker id="b32ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#a21caf"/></marker></defs>
  <!-- result -->
  <g filter="url(#b32sh)"><rect x="440" y="40" width="212" height="104" rx="12" fill="url(#b32fr)"/></g>
  <g clip-path="url(#b32b)"><rect x="446" y="46" width="200" height="92" fill="url(#b32sky)"/><circle cx="494" cy="72" r="12" fill="#fff7d6"/><path d="M446 138 L446 112 L520 84 L566 110 L646 90 L646 138 Z" fill="#6d28d9" opacity=".8"/><path d="M446 138 L446 122 L512 102 L560 122 L646 106 L646 138 Z" fill="#5b21b6" opacity=".55"/></g>
  <text x="546" y="156" text-anchor="middle" font-family="system-ui" font-size="9" fill="#94a3b8">kompozitsiya saqlandi, sifat ko'tarildi</text>
</svg>
<figcaption>Mavjud rasmni asos qilib, uni prompt bilan tugallangan natijaga aylantirasiz</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Image-to-image — boshlang'ich rasmni prompt asosida qayta ishlash; o'zgartirish kuchi past bo'lsa asl rasmga sodiq, yuqori bo'lsa prompt hukmron. Referens rasm — undan uslub/rang/kompozitsiyani olib, subyektni promptda aytish. Ikkalasi ham natija ustidan kuchli nazorat beradi.</span></div>`,
      sim: {
        type: "compare",
        intro: "Sizda qo'pol eskiz bor va uni real rasmga aylantirib, kompozitsiyani saqlamoqchisiz. Qaysi yondashuv to'g'riroq?",
        goal: "Mavjud eskizni real rasmga aylantirish — bir xil kompozitsiyani saqlab",
        a: { text: "noldan, faqat matndan yangi rasm yaratish (eskizdan foydalanmaslik)" },
        b: { text: "image-to-image: eskizni boshlang'ich rasm qilib, o'rta kuch (denoise) bilan, bir xil kompozitsiyani saqlab qayta ishlash" },
        better: "b",
        why: "Maqsad — aynan shu eskizning kompozitsiyasini saqlash. Noldan matndan yaratish (A) tasodifiy kompozitsiya beradi. Image-to-image (B) eskizni asos qilib, kompozitsiyani saqlaydi va o'rta kuch bilan sifatni ko'taradi — maqsadga aniq mos."
      },
      quiz: [
        { q: "Image-to-image nima qiladi?", o: ["Faqat matndan yaratadi", "Boshlang'ich rasmni prompt asosida qayta ishlaydi", "Rasmni o'chiradi", "Faqat o'lchamni o'zgartiradi"], c: 1 },
        { q: "Image-to-image'da «past kuch» (denoise) nimani anglatadi?", o: ["Asl rasmga sodiq qoladi, ozgina o'zgaradi", "Asl rasmdan butunlay uzoqlashadi", "Rasm o'chadi", "Rang yo'qoladi"], c: 0 },
        { q: "Kompozitsiyani aniq saqlamoqchi bo'lsangiz, qaysi kuch mos?", o: ["Eng yuqori kuch", "Past yoki o'rta kuch", "Kuchning ahamiyati yo'q", "Faqat seed"], c: 1 },
        { q: "Referens rasmdan odatda nimani «olish» mumkin?", o: ["Faqat fayl hajmini", "Uslub, rang yoki kompozitsiyani", "Internet tezligini", "Vosita versiyasini"], c: 1 },
        { q: "Qo'pol eskizni tugallangan rasmga aylantirishning eng to'g'ri yo'li?", o: ["Eskizni tashlab, noldan matndan yaratish", "Eskizni image-to-image bilan asos qilib ishlash", "Faqat upscale qilish", "Hech narsa qilmaslik"], c: 1 }
      ]
    },

    {
      id: "b3_3",
      title: "ControlNet va upscale",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Ikki ilg'or vosita ishingizni professional darajaga olib chiqadi: <b>ControlNet</b> — tuzilma va pozani aniq boshqarish, va <b>upscale</b> — rasmni kattalashtirib, detalini oshirish. Birinchisi «aynan men xohlagandek» natija olishga, ikkinchisi tayyor rasmni bosib chiqarish yoki katta ekran uchun yaroqli qilishga yordam beradi.</p>

<h3>ControlNet — tuzilmani boshqarish</h3>
<p>Oddiy promptda model kompozitsiyani o'zi tanlaydi. <b>ControlNet</b> esa unga <b>aniq tuzilma</b> beradi: poza skeleti, kontur (chiziqlar), chuqurlik xaritasi yoki perspektiva. Misollar:</p>
<ul>
  <li><b>Poza nazorati</b> — personajni aynan belgilangan pozada chizdirish.</li>
  <li><b>Kontur (edge)</b> — eskiz yoki konturga aniq rioya qilish.</li>
  <li><b>Perspektiva/chuqurlik</b> — bino yoki sahnaning fazoviy tuzilmasini saqlash.</li>
</ul>

<h3>Upscale — kattalashtirish va detal</h3>
<p>AI rasmlar ko'pincha nisbatan kichik o'lchamda chiqadi. <b>Upscale</b> ularni kattalashtiradi va shu bilan birga <b>detalni qayta tiklaydi</b> — oddiy cho'zishdan farqli o'laroq, rasm loyqalanmaydi, balki aniqlashadi. Bu — bosib chiqarish, katta banner yoki yuqori sifatli ekran uchun zarur qadam.</p>

<div class="pk-warn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><b>Avval kompozitsiya, keyin upscale</b>To'g'ri tartib muhim: avval promptni, kerak bo'lsa ControlNet va tahrirni ishlatib, <b>kompozitsiya va mazmunni</b> mukammal qiling. Upscale — eng oxirgi qadam: tayyor, yoqqan rasmni kattalashtirish uchun. Xom rasmni upscale qilish vaqtni behuda sarflaydi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 176" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b33bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b33fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="b33sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <filter id="b33sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="b33s"><rect x="476" y="58" width="44" height="44" rx="5"/></clipPath>
    <clipPath id="b33l"><rect x="556" y="44" width="100" height="100" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="176" rx="16" fill="url(#b33bg)"/>
  <!-- ControlNet -->
  <text x="190" y="30" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#7c3aed">ControlNet — poza nazorati</text>
  <g filter="url(#b33sh)"><rect x="60" y="44" width="120" height="100" rx="12" fill="#ffffff" stroke="#ead8fb"/></g>
  <g stroke="#a78bfa" fill="none" stroke-width="2.4" stroke-linecap="round"><circle cx="120" cy="68" r="9"/><path d="M120 77 V104 M120 86 L104 96 M120 86 L136 96 M120 104 L108 128 M120 104 L132 128"/></g>
  <text x="120" y="140" text-anchor="middle" font-family="system-ui" font-size="8.5" fill="#94a3b8">poza skeleti</text>
  <path d="M186 94 H224" stroke="#a21caf" stroke-width="2.4" marker-end="url(#b33ar)"/>
  <g filter="url(#b33sh)"><rect x="230" y="44" width="120" height="100" rx="12" fill="url(#b33fr)"/></g>
  <circle cx="290" cy="72" r="13" fill="#e9d5ff"/><path d="M290 85 V110 M290 92 L274 102 M290 92 L306 102 M290 110 L278 134 M290 110 L302 134" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/>
  <text x="290" y="140" text-anchor="middle" font-family="system-ui" font-size="8.5" fill="#fff">aynan shu pozada</text>
  <defs><marker id="b33ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L8 4.5 L0 9 Z" fill="#a21caf"/></marker></defs>
  <!-- Upscale -->
  <text x="566" y="30" text-anchor="middle" font-family="system-ui" font-size="12" font-weight="800" fill="#7c3aed">Upscale — kattalashtirish</text>
  <g filter="url(#b33sh)"><rect x="470" y="52" width="56" height="56" rx="9" fill="url(#b33fr)"/></g>
  <g clip-path="url(#b33s)"><rect x="476" y="58" width="44" height="44" fill="url(#b33sky)"/><circle cx="490" cy="72" r="6" fill="#fff7d6"/><path d="M476 102 L476 92 L496 84 L520 94 L520 102 Z" fill="#6d28d9" opacity=".7"/></g>
  <path d="M532 80 H550" stroke="#a21caf" stroke-width="2.4" marker-end="url(#b33ar)"/>
  <g filter="url(#b33sh)"><rect x="550" y="38" width="112" height="112" rx="11" fill="url(#b33fr)"/></g>
  <g clip-path="url(#b33l)"><rect x="556" y="44" width="100" height="100" fill="url(#b33sky)"/><circle cx="588" cy="76" r="14" fill="#fff7d6"/><path d="M556 144 L556 116 L606 92 L656 112 L656 144 Z" fill="#6d28d9" opacity=".8"/><path d="M556 144 L556 128 L600 110 L656 124 L656 144 Z" fill="#5b21b6" opacity=".5"/></g>
  <text x="606" y="166" text-anchor="middle" font-family="system-ui" font-size="8.5" fill="#94a3b8">katta + aniqroq detal</text>
</svg>
<figcaption>ControlNet tuzilmani boshqaradi; upscale o'lcham va detalni oshiradi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>ControlNet modelga aniq tuzilma beradi — poza, kontur yoki perspektivani nazorat qiladi. Upscale rasmni kattalashtirib, detalni qayta tiklaydi (oddiy cho'zishdan farqli, loyqalanmaydi). To'g'ri tartib: avval kompozitsiya/mazmunni mukammal qiling, upscale — eng oxirgi qadam.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi vazifalar uchun qaysi vosita kerak: <b>ControlNet</b> (tuzilma/poza nazorati)mi yoki <b>Upscale</b> (o'lcham/detal oshirish)mi?",
        groups: ["ControlNet", "Upscale"],
        items: [
          { name: "Personajni aynan belgilangan pozada chizdirish", answer: "ControlNet", hint: "Poza nazorati — ControlNet." },
          { name: "Kichik rasmni bosib chiqarishga yaroqli katta qilish", answer: "Upscale", hint: "O'lcham va detalni oshirish — upscale." },
          { name: "Eskizning aniq konturiga rioya qilish", answer: "ControlNet", hint: "Kontur/edge nazorati — ControlNet." },
          { name: "Tayyor rasm detalini oshirib, aniqroq qilish", answer: "Upscale", hint: "Detalni qayta tiklash — upscale." },
          { name: "Binoning perspektiva chiziqlarini saqlash", answer: "ControlNet", hint: "Fazoviy tuzilma nazorati — ControlNet." },
          { name: "640px rasmni 4K o'lchamga chiqarish", answer: "Upscale", hint: "O'lchamni kattalashtirish — upscale." }
        ]
      },
      quiz: [
        { q: "ControlNet asosan nima uchun?", o: ["Rangni o'zgartirish", "Aniq tuzilma berish (poza, kontur, perspektiva)", "Faylni siqish", "Narxni kamaytirish"], c: 1 },
        { q: "Upscale nima qiladi?", o: ["Rasmni o'chiradi", "Rasmni kattalashtirib, detalni qayta tiklaydi", "Pozani o'zgartiradi", "Promptni yozadi"], c: 1 },
        { q: "Personajni aynan belgilangan pozada chizdirish uchun nima ishlatiladi?", o: ["Upscale", "ControlNet (poza nazorati)", "Seed", "CFG"], c: 1 },
        { q: "Upscale oddiy cho'zishdan nimasi bilan farq qiladi?", o: ["Hech qanday farqi yo'q", "Rasm loyqalanmaydi — detal qayta tiklanadi, aniqlashadi", "Faqat rangni o'zgartiradi", "Faqat tezroq", ], c: 1 },
        { q: "To'g'ri ish tartibi qanday?", o: ["Avval upscale, keyin kompozitsiya", "Avval kompozitsiya/mazmunni mukammal qilish, upscale — oxirgi qadam", "Faqat upscale yetarli", "Tartibning ahamiyati yo'q"], c: 1 }
      ]
    }
  ]
});
