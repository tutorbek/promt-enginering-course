/* ============================================================
   Oson Studio — AI Agentlar kursi YAKUNIY IMTIHON
   Format: window.AGENT_EXAM = { pass, questions:[{ q, o:[4], c }] }
   - pass: o'tish balli (0.7 = 70%)
   - 25 ta savol, butun kursni (6 bosqich) qamrab oladi:
       B1 Asoslar · B2 Ichki mexanika · B3 Dizayn naqshlari ·
       B4 Qurish (Claude bilan) · B5 Production · B6 Mahorat
   - c: to'g'ri javobning massivdagi indeksi (0-3)
   Kirill harflari ishlatilmaydi. Ohang: amaliy, ustozona.
   ============================================================ */
window.AGENT_EXAM = {
  pass: 0.7,
  questions: [
    /* ---- B1: Asoslar — agent nima, avtonomiya, LLM/kontekst/token (4 savol) ---- */
    { q: "Oddiy chatbot bilan agentni ajratib turadigan eng asosiy farq nima?", o: ["Agent chiroyliroq javob yozadi", "Agent maqsadga yetish uchun o'zi asbob ishlatib, qadamlarni rejalashtiradi va natijani ko'rib harakatni o'zgartiradi", "Agent faqat ingliz tilida ishlaydi", "Agent har doim inson tasdig'isiz ishlaydi"], c: 1 },
    { q: "Quyidagi vazifalardan qaysi biri uchun agent EMAS, oddiy skript yoki bitta so'rov yetarli?", o: ["Har kuni soat 9:00 da bitta jadvalni bir xil formatga o'tkazib yuborish", "Mijoz shikoyatini o'qib, kerakli bo'limga yo'naltirib, javob qoralama qilish", "Hujjatlarni qidirib, solishtirib, qaror chiqarish", "Ko'p bosqichli tekshiruvdan o'tkazib hisobot tayyorlash"], c: 0 },
    { q: "Gallyutsinatsiya (model ishonch bilan xato taxmin qilishi) xavfini agentda kamaytirishning eng to'g'ri yo'li qaysi?", o: ["Modelni tez-tez qayta ishga tushirish", "Asboblar orqali haqiqiy ma'lumotni tekshirtirish (qidiruv, baza, hisob)", "Promptni qisqartirish", "Tokenni ko'paytirish"], c: 1 },
    { q: "Kontekst oynasi nima va nega muhim?", o: ["Brauzerdagi oyna — dizayn uchun", "Modelning bir vaqtda ko'rib turadigan ish xotirasi; u narx, tezlik va nimani esda tutishiga ta'sir qiladi", "Agentning sertifikati", "Internet tezligi ko'rsatkichi"], c: 1 },

    /* ---- B2: Ichki mexanika — halqa, function calling, strukturalangan natija, ReAct, reflection, xotira, RAG (5 savol) ---- */
    { q: "Agent halqasidagi (loop) to'g'ri tartib qaysi?", o: ["Javob → Fikr → Harakat", "Fikr → Harakat → Kuzatuv, va shart bajarilmaguncha takror", "Harakat → Harakat → Harakat", "Kuzatuv → Javob → Fikr"], c: 1 },
    { q: "Function calling (asbob chaqirish) aslida qanday ishlaydi?", o: ["Model asbobni o'zi bevosita ishga tushiradi", "Model qaysi asbobni qaysi argument bilan chaqirishni aytadi, dasturingiz uni bajaradi va natijani modelga qaytaradi", "Asbob model o'rniga javob yozadi", "Asboblar faqat bezak uchun"], c: 1 },
    { q: "Agent javobini boshqa dastur avtomatik o'qishi kerak bo'lsa, eng ishonchli format qaysi?", o: ["Erkin matn — model qanday yozsa", "Aniq sxema bo'yicha strukturalangan natija (masalan JSON), maydonlari oldindan belgilangan", "Faqat emoji", "Rasmga aylantirilgan matn"], c: 1 },
    { q: "ReAct (Reasoning + Acting) yondashuvining mohiyati nimada?", o: ["Avval butun rejani yozib, keyin hech qachon o'zgartirmaslik", "Har qadamda fikrlash va harakatni almashtirib borish — kuzatuvga qarab keyingi qadamni moslash", "Faqat bitta marta harakat qilish", "Fikrlashni butunlay o'tkazib yuborish"], c: 1 },
    { q: "RAG (qidirib-boyitilgan generatsiya) qanday muammoni hal qiladi?", o: ["Agentni tezroq gapirtiradi", "Modelga o'zida bo'lmagan yoki yangilangan bilimni (hujjatlar, baza) kerakli paytda topib berib, javobni dalilga asoslaydi", "Modelni butunlay qayta o'qitadi", "Tokenni bepul qiladi"], c: 1 },

    /* ---- B3: Dizayn naqshlari — workflow vs agent, routing/parallel, orchestrator-workers, multi-agent (4 savol) ---- */
    { q: "Workflow (oqim) bilan agentning dizayndagi asosiy farqi nima?", o: ["Workflow qimmatroq", "Workflowda qadamlar oldindan belgilangan va doim bir xil; agent qadamlarni vaziyatga qarab o'zi tanlaydi", "Agent doim sekinroq", "Ular bir xil narsa"], c: 1 },
    { q: "Kiruvchi so'rovni turini aniqlab, mos yo'lakka yuboradigan naqsh qaysi?", o: ["Routing (yo'naltirish)", "Parallel (parallellashtirish)", "Reflection", "Caching"], c: 0 },
    { q: "Bir vazifani bir nechta mustaqil qismga bo'lib, ularni bir vaqtda bajarib, keyin birlashtirish — bu qaysi naqsh? (To'g'ri tanlang)", o: ["Prompt chaining", "Parallellashtirish (sectioning/voting)", "Inson tasdig'i", "Strukturalangan natija"], c: 1 },
    { q: "Murakkab loyihada bitta ulkan hamma ishni qiladigan agent o'rniga ko'pincha nima tavsiya etiladi?", o: ["Hech qachon agent ishlatmaslik", "Orkestrator + tor ixtisoslashgan ishchilarga (yoki bir necha kichik agentga) bo'lish — har biri aniq vazifaga javobgar", "Modelni eng qimmatiga almashtirish", "Barcha asboblarni bitta promptga tiqish"], c: 1 },

    /* ---- B4: Qurish (Claude bilan) — no-code, Projects/Artifacts, Skills/Subagents, MCP, Claude Code/SDK, computer use (5 savol) ---- */
    { q: "MCP (Model Context Protocol) nimaga xizmat qiladi?", o: ["Modelni tezlashtiradigan apparat", "Agentni tashqi ma'lumot manbalari va asboblarga standart usulda ulaydigan universal rozetka", "Faqat Claude ichidagi tema", "Internet provayderi"], c: 1 },
    { q: "Bir martalik vazifa uchun kod yozmasdan tez agent yasamoqchisiz. Eng mos boshlang'ich yo'l qaysi?", o: ["Darhol Agent SDK bilan murakkab tizim qurish", "No-code/low-code vositalar yoki Claude.ai ichidagi imkoniyatlardan (Projects, Artifacts) foydalanish", "Modelni o'zingiz noldan o'qitish", "Hech narsa qilmaslik"], c: 1 },
    { q: "Claude Projects asosan nima beradi?", o: ["O'yin rejimi", "Bir loyiha bo'yicha barqaror kontekst va ko'rsatmalarni saqlab, suhbatlar orasida qayta ishlatish", "Bepul internet", "Faqat rasm chizish"], c: 1 },
    { q: "Subagent tushunchasi nimani anglatadi?", o: ["Asosiy agent topshiriqning bir qismini alohida, tor ixtisosli yordamchi agentga berib, natijasini qaytarib oladi", "Agentning eski versiyasi", "Foydalanuvchining boshqa akkaunti", "Faqat sertifikat turi"], c: 0 },
    { q: "Computer use (kompyuterdan foydalanish) imkoniyati nima qiladi?", o: ["Kompyuterni o'chiradi", "Agentga ekranni ko'rib, sichqoncha va klaviatura orqali interfeys bilan ishlash imkonini beradi", "Faqat matn yozadi", "Internetni tezlashtiradi"], c: 1 },

    /* ---- B5: Production — evals, observability, prompt injection, reliability, cost (4 savol) ---- */
    { q: "Evals (baholash to'plami) production agentda nega zarur?", o: ["Faqat reklama uchun", "Agent o'zgartirilgandan keyin ham kerakli vazifalarni to'g'ri bajarayotganini o'lchab, regressiyani (yomonlashuvni) ushlash uchun", "Agentni chiroyli qilish uchun", "Token sonini oshirish uchun"], c: 1 },
    { q: "Prompt injection hujumi nima va asosiy himoya tamoyili qanday?", o: ["Tarmoq hujumi — antivirus yetarli", "Tashqi matn (sahifa, hujjat) agentga yashirin buyruq berib, uni yo'ldan urishi; himoya — tashqi kontentni buyruq emas, ma'lumot deb hisoblash va xavfli amallarni cheklash", "Modelni qayta o'qitish kerak", "Hech qanday xavf yo'q"], c: 1 },
    { q: "Qaytarib bo'lmaydigan amal (pul o'tkazish, xat yuborish, fayl o'chirish) uchun production agentda eng to'g'ri qaror qaysi?", o: ["Agent o'zi qilaversin, tezroq bo'ladi", "Inson tasdig'i nuqtasi (human-in-the-loop) qo'yib, avval foydalanuvchi tasdiqlasin", "Bunday amallarni hech kim bilmaydi deb umid qilish", "Logni o'chirib qo'yish"], c: 1 },
    { q: "Agent xarajatini (token narxini) kamaytirishning to'g'ri usuli qaysi?", o: ["Har doim eng qimmat modelni ishlatish", "Vazifaga qarab mos modelni tanlash, kontekstni kerakligicha qisqartirish va caching (keshlash)dan foydalanish", "Kontekstga imkon qadar ko'p ma'lumot tiqish", "Asboblardan voz kechish"], c: 1 },

    /* ---- B6: Mahorat — promptlash, kontekst muhandisligi, capstone (3 savol) ---- */
    { q: "Yaxshi system prompt qaysi uch savolga aniq javob beradi?", o: ["Narx, sana, joy", "Rol (kim), qoidalar (nima qil va nima qilma), uslub (qanday gapir)", "Til, rang, shrift", "Token, tezlik, narx"], c: 1 },
    { q: "Agentga 100 sahifalik hujjatni butunlay tiqib qo'yish nega ko'pincha xato — kontekst muhandisligi nimani o'rgatadi?", o: ["Hech qanday muammosi yo'q", "Agentga aynan kerakli qismni berish kerak; ortiqcha ma'lumot uni adashtiradi, token isrof qiladi va xatoni ko'paytiradi", "Ko'p ma'lumot doim yaxshi", "Hujjatni umuman bermaslik kerak"], c: 1 },
    { q: "Birinchi marta o'z agentingizni qurayotganda eng to'g'ri yondashuv qaysi?", o: ["Butun biznesni boshqaradigan, hamma ishni qiladigan ulkan agent qurish", "Bitta tor va aniq vazifani ishonchli bajaradigan kichik agentdan boshlab, keyin asta kengaytirish", "Imkon qadar ko'p asbob ulab, sinovsiz ishga tushirish", "Eng qimmat modelni tanlasangiz, qolgani o'z-o'zidan hal bo'ladi"], c: 1 }
  ]
};
