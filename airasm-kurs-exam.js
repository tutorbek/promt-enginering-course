/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi
   Yakuniy imtihon — 8 modul qamrovi, 20 savol
   window.AIRASM_EXAM = { pass, questions:[{q,o:[4],c}] }
   Javoblar balansi: A×5, B×5, C×5, D×5
   ============================================================ */
window.AIRASM_EXAM = {
  pass: 0.7,
  questions: [
    { q: "AI rasm yaratish (text-to-image) asosi nimada?", o: ["Tayyor rasmni internetdan qidirishda", "Rasmni qo'lda chizishda", "Matnli tavsif asosida yangi rasm chizishda", "Faylni siqishda"], c: 2 },
    { q: "Diffusion modeli rasmni qanday hosil qiladi?", o: ["Shovqindan boshlab, tavsifga mos kelguncha bosqichma-bosqich aniqlashtiradi", "Bir urinishda tayyor tashlaydi", "Rassomdan so'rab oladi", "Internetdan yuklab oladi"], c: 0 },
    { q: "Kuchli promptning beshta qismi qaysi?", o: ["Narx, hajm, sana, rang, format", "Faqat subyekt", "Vosita, ilova, bot, sayt, narx", "Subyekt, tafsilot, uslub, yorug'lik, kompozitsiya"], c: 3 },
    { q: "Negative prompt nima qiladi?", o: ["Rasmni qimmatlashtiradi", "Rasmda bo'lishini istamagan narsalarni chetlatadi", "Rasmni kattalashtiradi", "Rangni o'zgartiradi"], c: 1 },
    { q: "Uslub (foto, anime, 3D) nimani belgilaydi?", o: ["Rasm narxini", "Subyekt qanday ko'rinishda chiqishini", "Fayl hajmini", "Yaratish tezligini"], c: 1 },
    { q: "Referensda axloqiy muammo qachon boshlanadi?", o: ["Umumiy uslub aytilganda", "Yorug'lik qo'shilganda", "Natija aniq shaxsga (rassom/inson/brend) bog'langanda", "Rang aytilganda"], c: 2 },
    { q: "Yaqin plan nima uchun mos?", o: ["Yuzdagi hissiyot va mayda detalni ko'rsatish", "Keng manzara ko'rsatish", "Olomonni ko'rsatish", "Masshtab berish"], c: 0 },
    { q: "Telefon Stories uchun qaysi kadr nisbati mos?", o: ["1:1 kvadrat", "16:9 gorizontal", "9:16 vertikal", "4:3"], c: 2 },
    { q: "Ochiq diafragma (f/1.8) qanday natija beradi?", o: ["Hammasi tiniq bo'ladi", "Fon yumshoq xira (bokeh), subyekt ajraladi", "Rasm qorayadi", "Rang yo'qoladi"], c: 1 },
    { q: "Midjourney'da <code>--ar</code> nimani belgilaydi?", o: ["Rangni", "Kadr nisbatini", "Seed'ni", "Versiyani"], c: 1 },
    { q: "Stable Diffusion'da CFG scale nimani boshqaradi?", o: ["Fayl hajmini", "Rang sonini", "Model promptga qanchalik qattiq amal qilishini", "Internet tezligini"], c: 2 },
    { q: "Seed nima?", o: ["Yaratishni boshlaydigan tasodifiy urug' (boshlang'ich shovqin)", "Rasm narxi", "Fayl formati", "Vosita versiyasi"], c: 0 },
    { q: "Outpainting nima qiladi?", o: ["Ichidagi qismni o'zgartiradi", "Kadrni chetidan kengaytirib, atrofni davom ettiradi", "Rangni o'chiradi", "Faqat sifatni oshiradi"], c: 1 },
    { q: "Upscale nima qiladi?", o: ["Pozani o'zgartiradi", "Rangni almashtiradi", "Prompt yozadi", "Rasmni kattalashtirib, detalni qayta tiklaydi"], c: 3 },
    { q: "ControlNet asosan nima uchun?", o: ["Rangni o'zgartirish", "Faylni siqish", "Aniq tuzilma berish (poza, kontur, perspektiva)", "Narxni kamaytirish"], c: 2 },
    { q: "AI logo yaratishda asosiy cheklov nima?", o: ["Rang ishlatolmaydi", "Logo umuman chiqmaydi", "Faqat qora-oq chiqadi", "Matnni (harflarni) ishonchli chiza olmaydi"], c: 3 },
    { q: "Professional mahsulot rasmining belgisi qaysi?", o: ["Xira telefon surati", "Tasodifiy burchak", "Past o'lcham", "Toza fon, studiya yorug'ligi, makro detal"], c: 3 },
    { q: "Personaj izchilligini qanday saqlaysiz?", o: ["Aniq tavsifni har promptda so'zma-so'z takrorlab", "Har safar boshqa tavsif yozib", "Tavsifsiz yaratib", "Faqat rangni o'zgartirib"], c: 0 },
    { q: "AI rasmni tijoratda ishlatishdan oldin nimani tekshirasiz?", o: ["Faqat rangini", "Faqat o'lchamini", "Internet tezligini", "Vosita litsenziyasi va rasm mazmuni (brend/yuz yo'qligi)"], c: 3 },
    { q: "Deepfake'da maqbul va nomaqbul orasidagi asosiy mezon qaysi?", o: ["Kimgadir zarar yetkazadimi yoki aldaydimi", "Rasm o'lchami", "Rang soni", "Yaratish tezligi"], c: 0 }
  ]
};
