/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   4-modul: Kompozitsiya va kamera
   window.AIRASM_COURSE.modules.push({...})
   ============================================================ */
window.AIRASM_COURSE.modules.push({
  id: "b1",
  title: "Kompozitsiya va kamera",
  lessons: [
    {
      id: "b1_1",
      title: "Rakurs, plan va kadr",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Subyekt qanchalik yaxshi bo'lmasin, u <b>kadrda qanday joylashgani</b> butun taassurotni o'zgartiradi. Yuzning yaqin plani hissiyot uyg'otadi; uzoq umumiy plan personajni katta dunyoda kichik qilib ko'rsatadi. Bu — kompozitsiyaning yuragi. Bugun plan (kadr masofasi) va rakurs (kamera burchagi) bilan rasmni boshqarishni o'rganamiz.</p>

<h3>Plan — kadr masofasi</h3>
<ul>
  <li><b>Yaqin plan</b> — yuz yoki mayda detal butun kadrni egallaydi. Hissiyot, tafsilot, mahsulot detali uchun.</li>
  <li><b>O'rta plan</b> — bel-bosh yoki yarim gavda. Muvozanatli, suhbat va portret uchun.</li>
  <li><b>Umumiy plan</b> — subyekt muhit ichida kichik. Manzara, kontekst, masshtab uchun.</li>
</ul>

<h3>Rakurs — kamera burchagi</h3>
<ul>
  <li><b>Ko'z sathida</b> — neytral, tabiiy, tomoshabin bilan teng.</li>
  <li><b>Pastdan (low angle)</b> — subyekt ulug'vor, kuchli, hukmron ko'rinadi.</li>
  <li><b>Yuqoridan (high angle)</b> — subyekt kichik, zaif, ojiz ko'rinadi.</li>
  <li><b>Qush nigohi (top-down)</b> — tepadan; taom, xarita, tartibli kompozitsiya uchun.</li>
</ul>

<div class="pk-note"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></span><div><b>Planni va rakursni promptda ayting</b>Modelga aniq ko'rsatma bering: «yaqin plan portret», «umumiy plan manzara», «pastdan olingan kadr», «qush nigohidan». Bu so'zlar kompozitsiyani sizning maqsadingizga yo'naltiradi — aks holda model tasodifiy kadrni tanlaydi.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 178" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b11bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b11sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9d5ff"/><stop offset="1" stop-color="#fbcfe8"/></linearGradient>
    <linearGradient id="b11fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <filter id="b11sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="b11a"><rect x="46" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="b11b"><rect x="275" y="44" width="170" height="76" rx="8"/></clipPath>
    <clipPath id="b11c"><rect x="504" y="44" width="170" height="76" rx="8"/></clipPath>
  </defs>
  <rect width="720" height="178" rx="16" fill="url(#b11bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Bir subyekt — uch xil plan</text>
  <g filter="url(#b11sh)"><rect x="40" y="38" width="182" height="88" rx="11" fill="url(#b11fr)"/></g>
  <g clip-path="url(#b11a)"><rect x="46" y="44" width="170" height="76" fill="url(#b11sky)"/><circle cx="131" cy="92" r="44" fill="#7c3aed" opacity=".85"/><circle cx="118" cy="84" r="5" fill="#fff"/><circle cx="144" cy="84" r="5" fill="#fff"/></g>
  <text x="131" y="140" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">Yaqin plan</text>
  <g filter="url(#b11sh)"><rect x="269" y="38" width="182" height="88" rx="11" fill="url(#b11fr)"/></g>
  <g clip-path="url(#b11b)"><rect x="275" y="44" width="170" height="76" fill="url(#b11sky)"/><circle cx="360" cy="80" r="16" fill="#7c3aed" opacity=".85"/><path d="M336 120 q24 -28 48 0 z" fill="#7c3aed" opacity=".85"/></g>
  <text x="360" y="140" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">O'rta plan</text>
  <g filter="url(#b11sh)"><rect x="498" y="38" width="182" height="88" rx="11" fill="url(#b11fr)"/></g>
  <g clip-path="url(#b11c)"><rect x="504" y="44" width="170" height="76" fill="url(#b11sky)"/><path d="M504 120 L504 104 L548 90 L598 102 L674 88 L674 120 Z" fill="#a78bfa" opacity=".6"/><circle cx="589" cy="96" r="7" fill="#7c3aed"/><rect x="585" y="100" width="8" height="14" rx="3" fill="#7c3aed"/></g>
  <text x="589" y="140" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">Umumiy plan</text>
</svg>
<figcaption>Plan o'zgarganda — bir subyekt butunlay boshqacha hikoya aytadi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Plan (yaqin/o'rta/umumiy) kadr masofasini, rakurs (ko'z sathi/pastdan/yuqoridan/qush nigohi) kamera burchagini belgilaydi. Yaqin plan hissiyot va detal, umumiy plan kontekst va masshtab beradi. Planni va rakursni promptda aniq ayting.</span></div>`,
      sim: {
        type: "classify",
        intro: "Quyidagi maqsadlarga qaysi plan mos? <b>yaqin plan</b> (detal/hissiyot)mi yoki <b>umumiy plan</b> (kontekst/manzara)mi?",
        groups: ["yaqin plan", "umumiy plan"],
        items: [
          { name: "Yuzdagi hissiyot va ko'z detalini ko'rsatish", answer: "yaqin plan", hint: "Hissiyot va mayda detal — yaqin plan." },
          { name: "Tog' va vodiy manzarasini to'liq ko'rsatish", answer: "umumiy plan", hint: "Keng manzara — umumiy plan." },
          { name: "Soatning mayda mexanizm detalini ko'rsatish", answer: "yaqin plan", hint: "Mayda detal — yaqin plan." },
          { name: "Olomon va butun shahar muhitini ko'rsatish", answer: "umumiy plan", hint: "Muhit va masshtab — umumiy plan." },
          { name: "Taomning ishtaha qo'zg'ovchi tafsilotini ko'rsatish", answer: "yaqin plan", hint: "Ishtaha uyg'otuvchi detal — yaqin plan." },
          { name: "Personajning katta sahnadagi yolg'izligini ko'rsatish", answer: "umumiy plan", hint: "Katta muhitda kichik subyekt — umumiy plan." }
        ]
      },
      quiz: [
        { q: "Yaqin plan nima uchun mos?", o: ["Keng manzara ko'rsatish", "Hissiyot va mayda detalni ko'rsatish", "Olomon ko'rsatish", "Masshtab berish"], c: 1 },
        { q: "Umumiy plan nimani yaxshi ko'rsatadi?", o: ["Faqat yuzni", "Subyektni muhit va kontekst ichida", "Mayda detalni", "Bir ko'zni"], c: 1 },
        { q: "Pastdan olingan rakurs (low angle) qanday taassurot beradi?", o: ["Subyekt zaif ko'rinadi", "Subyekt ulug'vor, kuchli ko'rinadi", "Hech qanday farq yo'q", "Rang o'zgaradi"], c: 1 },
        { q: "Taom yoki xaritani ko'rsatish uchun ko'pincha qaysi rakurs ishlatiladi?", o: ["Pastdan", "Ko'z sathida", "Qush nigohi (tepadan)", "Orqadan"], c: 2 },
        { q: "Planni va rakursni qanday boshqarasiz?", o: ["Hech qanday yo'l yo'q", "Promptda aniq aytib (yaqin plan, pastdan olingan)", "Faqat rang aytib", "Fayl nomidan"], c: 1 }
      ]
    },

    {
      id: "b1_2",
      title: "Kadr nisbati va kompozitsiya qoidalari",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Professional ko'rinishning ikki maxfiy ingredienti bor: <b>kadr nisbati</b> (rasm shakli) va <b>kompozitsiya qoidalari</b> (subyektni qayerga joylashtirish). Ularni bilsangiz, oddiy g'oya ham pishiq, muvozanatli va «to'g'ri» ko'rinadi. Bu darsda kadr nisbatlarini va asosiy kompozitsiya qoidalarini ko'ramiz.</p>

<h3>Kadr nisbati (aspect ratio)</h3>
<p>Kadr nisbati — rasm shakli: eni va bo'yi nisbati. To'g'ri nisbat — qaysi joyga qo'yishingizga bog'liq:</p>
<ul>
  <li><b>1:1 (kvadrat)</b> — ijtimoiy tarmoq posti, profil rasmi.</li>
  <li><b>16:9 (keng)</b> — manzara, kino kadri, ish stoli foni.</li>
  <li><b>9:16 (vertikal)</b> — telefon ekrani, stories, Reels.</li>
  <li><b>4:5 (portret)</b> — Instagram lentasida ko'proq joy egallaydigan post.</li>
</ul>

<h3>Kompozitsiya qoidalari</h3>
<ul>
  <li><b>Uchdan bir qoidasi</b> — kadrni 3×3 panjaraga bo'lib, subyektni chiziqlar kesishgan nuqtaga qo'ying. Tabiiy va dinamik ko'rinadi.</li>
  <li><b>Markaziy kompozitsiya</b> — subyekt aniq markazda: kuchli, rasmiy, simmetrik taassurot.</li>
  <li><b>Yetakchi chiziqlar</b> — yo'l, daryo, soya ko'zni subyektga olib boradi.</li>
  <li><b>Bo'sh joy (negative space)</b> — subyekt atrofidagi bo'shliq nafas va e'tibor beradi.</li>
</ul>

<div class="pk-tip"><span class="ci"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.7.7 1 1.4 1 2h6c0-.6.3-1.3 1-2a7 7 0 0 0-4-12z"/></svg></span><div><b>Nisbatni aniq so'rang</b>Ko'p vositada kadr nisbatini to'g'ridan-to'g'ri belgilash mumkin. Masalan, Midjourney'da <code>--ar 16:9</code>, boshqa vositalarda esa «vertikal 9:16 format» yoki «keng kvadrat bo'lmagan kadr» deb yozasiz. Avval qayerga qo'yishingizni o'ylang — keyin nisbatni tanlang.</div></div>

<div class="pk-fig">
<svg viewBox="0 0 720 176" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b12bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b12fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="b12sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient>
    <filter id="b12sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#7c3aed" flood-opacity=".22"/></filter>
  </defs>
  <rect width="720" height="176" rx="16" fill="url(#b12bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Kadr nisbatlari + uchdan bir qoidasi</text>
  <!-- 1:1 -->
  <g filter="url(#b12sh)"><rect x="60" y="58" width="80" height="80" rx="8" fill="url(#b12fr)"/></g>
  <rect x="66" y="64" width="68" height="68" rx="5" fill="#ede9fe"/>
  <text x="100" y="152" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">1:1</text>
  <!-- 9:16 -->
  <g filter="url(#b12sh)"><rect x="172" y="46" width="56" height="100" rx="8" fill="url(#b12fr)"/></g>
  <rect x="178" y="52" width="44" height="88" rx="5" fill="#ede9fe"/>
  <text x="200" y="160" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">9:16</text>
  <!-- 16:9 with rule of thirds -->
  <g filter="url(#b12sh)"><rect x="270" y="62" width="180" height="72" rx="8" fill="url(#b12fr)"/></g>
  <rect x="276" y="68" width="168" height="60" rx="5" fill="url(#b12sky)"/>
  <g stroke="#ffffff" stroke-width="1" opacity=".7"><line x1="332" y1="68" x2="332" y2="128"/><line x1="388" y1="68" x2="388" y2="128"/><line x1="276" y1="88" x2="444" y2="88"/><line x1="276" y1="108" x2="444" y2="108"/></g>
  <circle cx="388" cy="88" r="9" fill="#fff7d6" stroke="#a21caf" stroke-width="2"/>
  <text x="360" y="152" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">16:9 · uchdan bir nuqtasi</text>
  <!-- 4:5 -->
  <g filter="url(#b12sh)"><rect x="486" y="54" width="72" height="84" rx="8" fill="url(#b12fr)"/></g>
  <rect x="492" y="60" width="60" height="72" rx="5" fill="#ede9fe"/>
  <text x="522" y="152" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">4:5</text>
  <!-- markaziy -->
  <g filter="url(#b12sh)"><rect x="588" y="62" width="72" height="72" rx="8" fill="url(#b12fr)"/></g>
  <rect x="594" y="68" width="60" height="60" rx="5" fill="#ede9fe"/><circle cx="624" cy="98" r="11" fill="#fff7d6" stroke="#a21caf" stroke-width="2"/>
  <text x="624" y="152" text-anchor="middle" font-family="system-ui" font-size="10.5" font-weight="700" fill="#7c3aed">markaziy</text>
</svg>
<figcaption>Shakl (nisbat) va joylashuv (qoida) — professional ko'rinishning asosi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Kadr nisbati (1:1, 16:9, 9:16, 4:5) rasm shaklini belgilaydi — qayerga qo'yishingizga qarab tanlang. Kompozitsiya qoidalari (uchdan bir, markaziy, yetakchi chiziqlar, bo'sh joy) subyektni joylashtirishni boshqaradi. Nisbatni promptda aniq so'rang.</span></div>`,
      sim: {
        type: "compare",
        intro: "Ikkala prompt bir maqsad uchun. Qaysi biri to'g'riroq kompozitsiya beradi? Birini bosing.",
        goal: "Instagram Stories uchun vertikal reklama bannerasi",
        a: { text: "kvadrat 1:1 format, mahsulot kadr markazida, keng gorizontal manzara" },
        b: { text: "vertikal 9:16 format, mahsulot uchdan bir nuqtada, telefon ekraniga to'liq mos, tepada matn uchun bo'sh joy" },
        better: "b",
        why: "Stories vertikal ekran — to'g'ri nisbat 9:16. A'dagi 1:1 va keng gorizontal manzara vertikal ekranni to'ldirmaydi. B nisbatni, joylashuvni (uchdan bir) va matn uchun bo'sh joyni hisobga olgan — maqsadga to'liq mos."
      },
      quiz: [
        { q: "Kadr nisbati (aspect ratio) nimani belgilaydi?", o: ["Rasm rangini", "Rasmning shaklini (eni va bo'yi nisbati)", "Yaratish tezligini", "Fayl turini"], c: 1 },
        { q: "Telefon Stories/Reels uchun qaysi nisbat mos?", o: ["1:1", "16:9 gorizontal", "9:16 vertikal", "4:3"], c: 2 },
        { q: "Uchdan bir qoidasi nimani tavsiya qiladi?", o: ["Subyektni doim markazga qo'yishni", "Subyektni 3×3 panjara chiziqlari kesishgan nuqtaga qo'yishni", "Rasmni uchga bo'lib o'chirishni", "Faqat uchta rang ishlatishni"], c: 1 },
        { q: "Keng kino kadri yoki manzara uchun qaysi nisbat odatda ishlatiladi?", o: ["9:16", "16:9", "1:1", "Hech qaysi"], c: 1 },
        { q: "«Bo'sh joy» (negative space) nima beradi?", o: ["Rasmni buzadi", "Subyektga nafas va e'tibor beradi", "Faylni kattalashtiradi", "Rangni o'zgartiradi"], c: 1 }
      ]
    },

    {
      id: "b1_3",
      title: "Kamera tili: lens, fokus va chuqurlik",
      read: "9 daqiqa",
      html: `
<p class="pk-lead">Fotograflar tilidan foydalansangiz, natijani juda aniq boshqarasiz. <b>Lens</b>, <b>diafragma</b>, <b>fokus</b> va <b>chuqurlik</b> kabi so'zlar modelga aynan qanday ko'rinish kerakligini aytadi. Bu darsda shu kamera tilini o'rganamiz — u sizning promptingizni havaskorlikdan professional darajaga ko'taradi.</p>

<h3>Lens (obyektiv)</h3>
<ul>
  <li><b>Keng burchak</b> — keng manzara, kuchaytirilgan perspektiva, interyer.</li>
  <li><b>Portret (85mm)</b> — yuzni tabiiy, yoqimli ko'rsatadi; portret uchun klassik tanlov.</li>
  <li><b>Makro</b> — juda mayda detal: hasharot, taqinchoq, mato faktura.</li>
  <li><b>Teleobyektiv</b> — uzoqdagi subyektni yaqinlashtiradi, fonni siqadi.</li>
</ul>

<h3>Diafragma va chuqurlik</h3>
<p>Eng kuchli vositalardan biri — <b>fon chuqurligi</b> (depth of field):</p>
<ul>
  <li><b>Ochiq diafragma (f/1.8)</b> — fon yumshoq xira (bokeh), subyekt aniq ajraladi. Portret, mahsulot uchun zo'r.</li>
  <li><b>Yopiq diafragma (f/11)</b> — old va orqa — hammasi tiniq. Manzara uchun.</li>
</ul>

<h3>Promptda kamera tili</h3>
<p>Bularni promptga to'g'ridan-to'g'ri yozasiz. Masalan:</p>
<div class="pk-ex pk-good"><span class="tag">Kamera tili bilan</span>yosh ayol portreti, 85mm obyektiv, f/1.8 ochiq diafragma, sayoz chuqurlik, fon yumshoq xira (bokeh), tabiiy yumshoq yorug'lik</div>
<p>Bu prompt modelga aynan professional portret ko'rinishini beradi: subyekt o'tkir, fon esa chiroyli xiralashgan.</p>

<div class="pk-fig">
<svg viewBox="0 0 720 172" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b13bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f7eafe"/></linearGradient>
    <linearGradient id="b13fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c084fc"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    <radialGradient id="b13bok" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#f9a8d4"/><stop offset="1" stop-color="#c084fc"/></radialGradient>
    <filter id="b13sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7c3aed" flood-opacity=".2"/></filter>
    <clipPath id="b13clip"><rect x="46" y="44" width="380" height="92" rx="10"/></clipPath>
  </defs>
  <rect width="720" height="172" rx="16" fill="url(#b13bg)"/>
  <text x="360" y="28" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="800" fill="#1f2937">Sayoz chuqurlik: subyekt o'tkir, fon xira (bokeh)</text>
  <!-- scene: blurred bokeh bg + sharp subject -->
  <g filter="url(#b13sh)"><rect x="40" y="38" width="392" height="104" rx="13" fill="url(#b13fr)"/></g>
  <g clip-path="url(#b13clip)">
    <rect x="46" y="44" width="380" height="92" fill="url(#b13bok)"/>
    <circle cx="110" cy="70" r="16" fill="#fff" opacity=".35"/><circle cx="360" cy="64" r="20" fill="#fff" opacity=".3"/><circle cx="300" cy="110" r="14" fill="#fff" opacity=".35"/><circle cx="170" cy="116" r="18" fill="#fde68a" opacity=".4"/>
    <!-- sharp subject -->
    <circle cx="226" cy="86" r="26" fill="#7c3aed"/><circle cx="216" cy="80" r="5" fill="#fff"/><circle cx="236" cy="80" r="5" fill="#fff"/><path d="M214 96 q12 10 24 0" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <text x="236" y="128" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="800" fill="#fff">subyekt — o'tkir</text>
  <!-- legend -->
  <g font-family="system-ui" font-size="11" font-weight="700" fill="#7c3aed">
    <g filter="url(#b13sh)"><rect x="456" y="48" width="224" height="30" rx="9" fill="#fff" stroke="#ead8fb"/></g>
    <circle cx="478" cy="63" r="7" fill="#a21caf"/><text x="494" y="67" text-anchor="start">f/1.8 — fon yumshoq xira</text>
    <g filter="url(#b13sh)"><rect x="456" y="88" width="224" height="30" rx="9" fill="#fff" stroke="#ead8fb"/></g>
    <circle cx="478" cy="103" r="7" fill="#7c3aed"/><text x="494" y="107" text-anchor="start">85mm — portret obyektivi</text>
  </g>
</svg>
<figcaption>Kamera tili promptingizni professional darajaga ko'taradi</figcaption>
</div>

<div class="pk-key"><span class="ci"><svg viewBox="0 0 24 24"><path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.5-6.3 4.5L8 13.9 2 9.4h7.6z"/></svg></span><span><b>Asosiy fikr</b>Kamera tili — lens (keng, 85mm portret, makro, teleobyektiv), diafragma va chuqurlik — natijani aniq boshqaradi. Ochiq diafragma (f/1.8) fonni yumshoq xira qiladi va subyektni ajratadi; yopiq diafragma (f/11) hammasini tiniq qoldiradi. Bularni promptga to'g'ridan-to'g'ri yozing.</span></div>`,
      sim: {
        type: "build",
        intro: "Maqsad: <b>professional portret — subyekt o'tkir, fon yumshoq xira</b>. Har bo'lim uchun maqsadga mos variantni tanlang.",
        goal: "Professional portret — subyekt o'tkir, fon yumshoq xira",
        slots: [
          {
            label: "Subyekt", options: [
              { text: "yosh ayol portreti", good: true },
              { text: "odam", good: false, why: "Subyekt juda umumiy." }
            ]
          },
          {
            label: "Obyektiv (lens)", options: [
              { text: "85mm portret obyektivi", good: true },
              { text: "keng burchak obyektiv", good: false, why: "Keng burchak yuzni buzadi — portret uchun mos emas." }
            ]
          },
          {
            label: "Diafragma / chuqurlik", options: [
              { text: "yopiq diafragma f/11, hammasi tiniq", good: false, why: "f/11 fonni ham tiniq qoldiradi — fon xira bo'lmaydi." },
              { text: "ochiq diafragma f/1.8, sayoz chuqurlik, bokeh", good: true }
            ]
          },
          {
            label: "Yorug'lik", options: [
              { text: "tabiiy yumshoq yorug'lik", good: true },
              { text: "keskin qattiq chiroq", good: false, why: "Qattiq chiroq portret uchun noxush soyalar beradi." }
            ]
          },
          {
            label: "Uslub", options: [
              { text: "fotorealistik studiya portreti", good: true },
              { text: "tekis anime", good: false, why: "Anime professional foto-portret maqsadiga mos emas." }
            ]
          }
        ]
      },
      quiz: [
        { q: "Portret uchun klassik obyektiv qaysi?", o: ["Keng burchak", "85mm portret obyektivi", "Baliq ko'zi (fisheye)", "Hech qaysi"], c: 1 },
        { q: "Ochiq diafragma (f/1.8) qanday natija beradi?", o: ["Hammasi tiniq", "Fon yumshoq xira (bokeh), subyekt ajraladi", "Rasm qorayadi", "Rang yo'qoladi"], c: 1 },
        { q: "Manzara uchun (old va orqa tiniq) qaysi diafragma mos?", o: ["f/1.8 ochiq", "f/11 yopiq", "Hech qaysi", "Faqat makro"], c: 1 },
        { q: "Makro obyektiv nima uchun?", o: ["Keng manzara", "Juda mayda detal (hasharot, faktura)", "Uzoq sport", "Tungi osmon"], c: 1 },
        { q: "Kamera tilini qayerda ishlatasiz?", o: ["Hech qayerda", "Promptga to'g'ridan-to'g'ri yozib (85mm, f/1.8, bokeh)", "Faqat fayl nomida", "Faqat vosita sozlamasida"], c: 1 }
      ]
    }
  ]
});
