/* ============================================================
   Oson Studio — "AI bilan video yaratish" kursi
   Yakuniy imtihon — 8 modul qamrovi, 20 savol
   window.AIVIDEO_EXAM = { pass, questions:[{q,o:[4],c}] }
   Javoblar balansi: A×5, B×5, C×5, D×5
   ============================================================ */
window.AIVIDEO_EXAM = {
  pass: 0.7,
  questions: [
    { q: "AI video yaratishning ikki asosiy yo'li qaysi?", o: ["Faqat ovozdan", "Faqat rasmdan", "Text-to-video va image-to-video", "Faqat matndan"], c: 2 },
    { q: "Video aslida nima?", o: ["Tez almashinadigan kadrlar ketma-ketligi", "Bitta katta rasm", "Faqat ovoz", "Matn fayli"], c: 0 },
    { q: "Kuchli video promptning beshta qismi qaysi?", o: ["Narx, hajm, sana, rang, format", "Faqat sahna", "Vosita, ilova, bot, sayt, narx", "Sahna, harakat, kamera, atmosfera, uslub"], c: 3 },
    { q: "Nega statik prompt zaif video beradi?", o: ["Harakat aytilmagani uchun klip jonsiz yoki tasodifiy chiqadi", "So'z juda uzun", "Ko'cha tasvirga tushmaydi", "Vosita o'qiy olmaydi"], c: 0 },
    { q: "«Dolly» kamera harakati nima?", o: ["Kamera o'rnida buriladi", "Kamera fizik oldinga/orqaga harakatlanadi", "Faqat linza ishi", "Rang o'zgaradi"], c: 1 },
    { q: "Quyosh botishini siqib, tez ko'rsatish uchun qaysi tezlik?", o: ["Sekin-tasvir", "Time-lapse", "Normal", "Hech qaysi"], c: 1 },
    { q: "Image-to-video nima qiladi?", o: ["Rasmni o'chiradi", "Rasmni matnga aylantiradi", "Boshlang'ich rasmni harakatga keltiradi", "Faqat rangni o'zgartiradi"], c: 2 },
    { q: "Keyframe (boshlang'ich/oxirgi kadr)ning eng muhim qoidasi nima?", o: ["Kadrlar yorqin bo'lishi", "Ikki kadr mantiqiy bog'liq bo'lishi", "Kadrlar katta bo'lishi", "Ikki kadr bir xil bo'lishi"], c: 1 },
    { q: "Motion brush qachon foydali?", o: ["Faqat bir qism (bayroq, soch) harakatlanib, qolgani tinch qolganda", "Butun sahna harakatlanganda", "Kamera aylanganda", "Hech qachon"], c: 0 },
    { q: "Nega bugungi AI kliplar qisqa?", o: ["Vosita arzon", "Klip uzaygan sari harakat izchilligi yo'qoladi", "Internet sekin", "Rang yetishmaydi"], c: 1 },
    { q: "Kliplararo personaj izchilligini qanday saqlaysiz?", o: ["Har klipda boshqa tavsif yozib", "Tavsifsiz yaratib", "Faqat rangni o'zgartirib", "Personaj/uslub tavsifini har klipda so'zma-so'z takrorlab"], c: 3 },
    { q: "Storyboard nima?", o: ["Tayyor video", "Ovoz fayli", "Videongizning kadrlar rejasi (sahna, harakat, kamera)", "Vosita nomi"], c: 2 },
    { q: "Lip-sync nima?", o: ["Rangni o'zgartirish", "Personaj lab harakatini nutqqa moslash", "Klipni kesish", "Ovozni o'chirish"], c: 1 },
    { q: "Fon musiqasini tanlashda asosiy qoida nima?", o: ["Eng baland bo'lsin", "Eng uzun bo'lsin", "Video kayfiyatiga mos bo'lsin", "Hech qanday qoida yo'q"], c: 2 },
    { q: "Professional montajda asosan qaysi o'tish ishlatiladi?", o: ["Murakkab effektlar", "Faqat eritish", "Hech qanday", "Oddiy kesim"], c: 3 },
    { q: "Reklama rolikida eng muhim lahza qaysi?", o: ["Birinchi soniya — e'tiborni ushlash", "Oxirgi soniya", "O'rtasi", "Ahamiyatsiz"], c: 0 },
    { q: "Reels / Shorts uchun qaysi format mos?", o: ["Gorizontal 16:9", "Kvadrat 1:1 majburiy", "Vertikal 9:16", "Ahamiyatsiz"], c: 2 },
    { q: "To'liq ish jarayonida birinchi qadam qaysi?", o: ["Darrov klip yaratish", "Eksport", "Montaj", "G'oyani aniqlash"], c: 3 },
    { q: "AI videoni tijoratda ishlatishdan oldin nimani tekshirasiz?", o: ["Faqat rangini", "Faqat o'lchamini", "Internet tezligini", "Vosita litsenziyasi, mazmun (brend/yuz/ovoz) va musiqa"], c: 3 },
    { q: "Deepfake'da maqbul va nomaqbul orasidagi asosiy mezon qaysi?", o: ["Kimgadir zarar yetkazadimi yoki aldaydimi", "Video o'lchami", "Rang soni", "Klip uzunligi"], c: 0 }
  ]
};
