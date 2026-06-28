/* ============================================================
   Oson Studio — Prompt Engineering kursi: amaliy mashqlar
   Har modul oxirida "qo'l bilan" mashq: vazifa + namunaviy ekspert
   yechimi + o'z-o'zini tekshirish ro'yxati. (Baholanmaydi — mustaqil mashq.)
   window.PROMPT_PRACTICE[moduleId] = { task, sample, checklist:[...] }
   ============================================================ */
window.PROMPT_PRACTICE = {
  m1: {
    task: "O'zingizga yaqin biror mavzuni tanlang (masalan, sevimli taomingiz, kasbingiz yoki sayohat). AI'ga shu mavzuda bitta aniq ko'rsatma yozing — shunchaki \"...haqida yoz\" emas, balki kim uchun, qancha va qanday shaklda kerakligini ayting.",
    sample: "Sen tajribali oshpazsan. Palov tayyorlashni hech qachon ko'rmagan talaba uchun, oddiy va do'stona tilda, 6 ta qadamdan iborat qisqa retsept yoz. Har qadam bitta jumla bo'lsin.",
    checklist: ["Promptda KIM uchun ekani aytildimi? (auditoriya)", "Natija TURI aniqmi? (retsept, ro'yxat, maqola...)", "HAJM yoki shakl ko'rsatildimi? (6 qadam, 1 jumla...)", "Ohang yoki uslub belgilandimi?"]
  },
  m2: {
    task: "Tasavvur qiling, do'koningiz yoki ishingiz uchun reklama matni kerak. Avval qasddan NOANIQ prompt yozing, keyin uni KONTEKST va ANIQLIK qo'shib qayta yozing. Ikkalasini solishtiring.",
    sample: "Sen SMM mutaxassisisan. Toshkentdagi kichik gulchilik do'koni uchun Telegram post matni yoz. Maqsad — 8-mart arafasida buyurtmalarni oshirish. Auditoriya: 25-40 yoshli erkaklar. Ohang: iliq va ishonarli. 3 jumla + 1 ta chaqiruv (call to action) + 3 mos hashtag.",
    checklist: ["NOANIQ va ANIQ variantni alohida yozdingizmi?", "Aniq variantda auditoriya, maqsad va ohang bormi?", "Hajm/format aniq ko'rsatildimi?", "Aniq variant natijasi sezilarli yaxshiroqmi?"]
  },
  m3: {
    task: "Bitta promptda 5 ustunning HAMMASINI qo'llang: Rol, Vazifa, Kontekst, Format va Misol. Mavzu — o'zingiz tanlang (masalan, mijozga uzr xati).",
    sample: "Rol: Sen mijozlar bilan ishlash bo'yicha xushmuomala mutaxassissan.\nVazifa: Yetkazib berish kechikkani uchun mijozga uzr xati yoz.\nKontekst: Buyurtma 3 kun kechikdi, mijoz norozi, biz aybdormiz.\nFormat: 4 jumla, rasmiy-iliq ohang, oxirida kichik chegirma taklifi.\nMisol uslubi: \"Hurmatli mijoz, yuzaga kelgan noqulaylik uchun uzr so'raymiz...\"",
    checklist: ["Rol berildimi?", "Vazifa aniq aytildimi?", "Kontekst (vaziyat tafsiloti) bormi?", "Format va misol/uslub ko'rsatildimi?"]
  },
  m4: {
    task: "Few-shot texnikasidan foydalaning: AI'ga kamida 2 ta namuna (kirish → chiqish) bering, so'ng yangi kirishni bering. Masalan, mahsulot nomidan qisqa shior yasash.",
    sample: "Quyidagi uslubda mahsulot uchun qisqa shior yoz.\nMahsulot: Termos → Shior: \"Issig'i ham, sovug'i ham — soatlab saqlanadi.\"\nMahsulot: Noutbuk sumkasi → Shior: \"Texnikangiz uchun ishonchli qalqon.\"\nMahsulot: Simsiz quloqchin → Shior:",
    checklist: ["Kamida 2 ta namuna berdingizmi?", "Namunalar bir xil formatda (kirish → chiqish)mi?", "Oxirida yangi kirishni qoldirdingizmi?", "Namunalar kerakli uslubni aniq ko'rsatadimi?"]
  },
  m5: {
    task: "AI'dan biror masalani (mantiqiy yoki hisob-kitob) darhol javob emas, balki QADAMA-QADAM yechishni so'rang. \"Qadamba-qadam fikrla\" iborasini qo'shing.",
    sample: "Bir do'kon mahsulotni 20% qimmatlashtirdi, keyin yangi narxdan 20% chegirma berdi. Yakuniy narx dastlabkidan farq qiladimi? Darhol javob berma — avval qadamba-qadam hisobla, har qadamni ko'rsat, keyin xulosa qil.",
    checklist: ["\"Qadamba-qadam\" yoki shunga o'xshash ko'rsatma berdingizmi?", "Modeldan oraliq qadamlarni ko'rsatishni so'radingizmi?", "Masala yetarlicha aniq qo'yildimi?", "Yakuniy xulosani alohida so'radingizmi?"]
  },
  m6: {
    task: "Bitta g'oyani (masalan, \"har kuni kitob o'qish foydali\") AI'ga IKKI XIL rol/ohangda yozdiring: biri — qattiqqo'l murabbiy, ikkinchisi — mehribon do'st. Farqni kuzating.",
    sample: "1) Sen qat'iyatli sport murabbiysisan. \"Har kuni kitob o'qish kerak\" g'oyasini 2 jumlada, talabchan va rag'batlantiruvchi ohangda ayt.\n2) Sen mehribon do'stsan. Xuddi shu g'oyani 2 jumlada, iliq va qo'llab-quvvatlovchi ohangda ayt.",
    checklist: ["Ikki xil ROL berdingizmi?", "Har biriga ohang aniq ko'rsatildimi?", "Mavzu (g'oya) bir xil qoldimi?", "Natijada ohang farqi sezilarlimi?"]
  },
  m7: {
    task: "AI'dan natijani aniq STRUKTURADA so'rang — jadval yoki ro'yxat ko'rinishida. Masalan, 3 ta shahar haqida ma'lumotni jadvalda.",
    sample: "O'zbekistonning 3 ta yirik shahri (Toshkent, Samarqand, Buxoro) haqida ma'lumotni jadval ko'rinishida ber. Ustunlar: Shahar | Aholisi (taxminan) | Mashhur joyi. Faqat jadval, ortiqcha izoh yo'q.",
    checklist: ["Aniq format (jadval/ro'yxat/JSON) so'radingizmi?", "Ustunlar yoki maydonlar nomini ko'rsatdingizmi?", "Ortiqcha matnni cheklab qo'ydingizmi?", "Natija aynan so'ralgan shaklda chiqdimi?"]
  },
  m8: {
    task: "Katta vazifani 3 bosqichli PROMPT ZANJIRIGA bo'ling. Masalan, blog maqola yozish: (1) reja, (2) matn, (3) tahrir. Har bosqich uchun alohida prompt yozing.",
    sample: "Prompt 1: \"Sog'lom uyqu\" mavzusida blog maqola uchun 5 bo'limli reja tuz.\nPrompt 2: Yuqoridagi rejaning [1-bo'lim] qismini 150 so'zda, sodda tilda yoz.\nPrompt 3: Quyidagi matnni tahrirla: qisqartir, takrorlarni olib tashla, sarlavha qo'sh. Matn: [...]",
    checklist: ["Vazifani kamida 3 qadamga bo'ldingizmi?", "Har qadam alohida prompt bo'ldimi?", "Bir qadamning chiqishi keyingisiga kirish bo'ladimi?", "Zanjir mantiqiy ketma-ketlikdami?"]
  },
  m9: {
    task: "O'zingizning HAQIQIY ish yoki o'qish vazifangiz uchun foydali bitta prompt yozing — uni bugun ishlatishingiz mumkin bo'lsin (masalan, email, hisobot, reja yoki tushuntirish).",
    sample: "Sen tajribali biznes-yordamchisan. Quyidagi qisqa eslatmalardan mijozga yuborish uchun rasmiy email yoz: [eslatmalar]. Email 4-5 jumladan iborat, xushmuomala va aniq bo'lsin, oxirida keyingi qadam taklif qilinsin.",
    checklist: ["Prompt haqiqiy, amaliy vazifaga oidmi?", "Rol/kontekst/format berdingizmi?", "Natijani bevosita ishlata olasizmi?", "Kerak bo'lsa, qaytarib yaxshilash oson bo'ladimi?"]
  },
  m10: {
    task: "Gallyutsinatsiyani kamaytiradigan prompt yozing: AI'dan faqat ishonchli ma'lumot berishni, bilmasa \"bilmayman\" deyishini va imkon bo'lsa manba ko'rsatishini so'rang.",
    sample: "Quyidagi savolga javob ber, lekin faqat aniq bilgan ma'lumotingni yoz. Agar aniq bilmasang, \"Bu haqda aniq ma'lumotim yo'q\" deb yoz — taxmin qilma. Iloji bo'lsa, javobing qancha ishonchli ekanini ham ayt. Savol: [savol].",
    checklist: ["\"Bilmasang — bilmayman de\" ko'rsatmasi bormi?", "Taxmin qilishni taqiqladingizmi?", "Ishonchlilik yoki manba so'radingizmi?", "Bu prompt xato ma'lumot xavfini kamaytiradimi?"]
  },
  m11: {
    task: "Bitta zaif (noaniq) promptni oling va uni IKKI ITERATSIYADA yaxshilang. Har bosqichda nimani o'zgartirganingizni qisqacha yozing.",
    sample: "Boshlang'ich: \"Biznes-reja yoz.\"\n1-iteratsiya: \"Kichik kafe uchun 1 yillik biznes-reja yoz.\" (mavzu aniqlashtirildi)\n2-iteratsiya: \"Toshkentdagi 30 o'rinli kafe uchun 1 yillik biznes-rejani 5 bo'limda yoz: g'oya, bozor, xarajat, daromad, xavflar. Har bo'lim 3-4 jumla.\" (kontekst, format va hajm qo'shildi)",
    checklist: ["Zaif promptdan boshladingizmi?", "Kamida 2 marta yaxshiladingizmi?", "Har bosqichda aniq nimani o'zgartirganingiz ko'rinadimi?", "Oxirgi variant sezilarli kuchliroqmi?"]
  },
  m12: {
    task: "YAKUNIY LOYIHA: o'zingiz tez-tez bajaradigan bitta real vazifani tanlang va unga to'liq, qayta ishlatsa bo'ladigan prompt-shablon yarating — o'zgaruvchilar ([MAVZU], [AUDITORIYA] kabi) bilan.",
    sample: "Sen tajribali [SOHA] mutaxassisisan. [AUDITORIYA] uchun [MAVZU] haqida [FORMAT] tayyorla. Ohang: [OHANG]. Hajm: [HAJM]. Quyidagi shartlarga rioya qil: [SHARTLAR]. Agar ma'lumot yetarli bo'lmasa, avval menga aniqlovchi savol ber.",
    checklist: ["Shablon real, takrorlanuvchi vazifaga moslanganmi?", "O'zgaruvchilar ([...]) ishlatdingizmi?", "Rol, format, ohang va hajm joriy qilindimi?", "Shablonni turli holatlarda qayta ishlata olasizmi?"]
  },
  madv: {
    task: "Bir vazifani tanlang va unga RACE freymvorki bo'yicha to'liq prompt yozing (Rol, Amal, Kontekst, Kutilgan natija). Ohangni ham belgilang — masalan 'ijodiy yondash' yoki 'aniq va izchil bo'l' deb (bu temperature'ni so'z bilan boshqarish).",
    sample: "Rol: Sen tajribali kontent-marketologsan.\nAmal: Boshlovchilar uchun Excel kursiga e'lon matni yoz.\nKontekst: Auditoriya 20-35 yosh, raqobat yuqori, narx hamyonbop.\nKutilgan natija: 4 jumlali, ishonarli va do'stona e'lon + 1 ta chaqiruv. Ijodiy yondash, oddiy variantlardan qoch.",
    checklist: ["RACE'ning 4 elementi ham bormi (Rol, Amal, Kontekst, Kutilgan natija)?", "Ohang yoki uslub belgilandimi (ijodiy/aniq)?", "Kutilgan natija aniq va o'lchovli so'raldimi?", "Promptni boshqa vazifaga ham moslashtira olasizmi?"]
  },
  madv2: {
    task: "Murakkab, ko'p qadamli vazifani tanlang (masalan: raqobatchi 3 ta do'konni o'rganib, narx va xizmatlarni taqqoslab, qisqa hisobot tayyorlash). Uni AI agent bajaradigan qilib loyihalang: (1) qaysi VOSITALAR (tools) kerak, (2) qadamlarni ReAct uslubida — Fikr → Harakat → Kuzatuv ketma-ketligida yozib chiqing.",
    sample: "Vazifa: 3 ta raqobatchini taqqoslab, qisqa hisobot tayyorlash.\nKerakli vositalar: web-qidiruv, sahifa-o'qish, jadval tuzuvchi.\nReAct rejasi:\n• Fikr: Avval har bir raqobatchining narx sahifasini topishim kerak. Harakat: web-qidiruv(\"<do'kon> narxlar\"). Kuzatuv: 3 ta havola olindi.\n• Fikr: Endi har sahifadan narx va xizmatni o'qiyman. Harakat: sahifa-o'qish(havola). Kuzatuv: ma'lumot yig'ildi.\n• Fikr: Ma'lumot to'liq — endi taqqoslash jadvalini tuzaman. Harakat: jadval-tuzuvchi(ma'lumot). Kuzatuv: jadval tayyor.\n• Fikr: Hammasi bor — yakuniy qisqa hisobotni yozaman (yakuniy javob).",
    checklist: ["Kerakli vositalar (tools) ro'yxati aniqmi?", "Qadamlar ReAct (Fikr→Harakat→Kuzatuv) ko'rinishida yozildimi?", "Katta vazifa kichik qadamlarga bo'lindimi (dekompozitsiya)?", "To'xtash sharti / yakuniy javob bosqichi belgilandimi?", "Muhim yoki qaytarilmas amal uchun tasdiq nazarda tutildimi?"]
  }
};
