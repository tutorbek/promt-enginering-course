/* Prompt Engineering kursi — Yakuniy imtihon
   Butun kursni qamrab oladi: nazariy + amaliy ("zaif promptni baholash") savollar.
   pass: o'tish uchun zarur ulush (0.7 = 70%). */
window.PROMPT_EXAM = {
  pass: 0.7,
  questions: [
    {
      q: "Kuchli promptning asosiy tarkibiy qismlari qaysilar?",
      o: [
        "Faqat qisqa va bitta jumlalik savol",
        "Rol, vazifa, kontekst va kerakli format",
        "Iloji boricha ko'p so'roq belgisi",
        "Hamisha rasmiy va uzun matn"
      ],
      c: 1
    },
    {
      q: "Menga matn yoz — bu promptning asosiy kamchiligi nimada?",
      o: [
        "Juda uzun va murakkab",
        "Rasmiy ohangda emas",
        "Mavzu, auditoriya, hajm va format ko'rsatilmagan — o'ta noaniq",
        "Ingliz tilida emas"
      ],
      c: 2
    },
    {
      q: "Few-shot (bir necha namunali) texnikasi nimani anglatadi?",
      o: [
        "Modelga hech qanday misol bermaslik",
        "Modelga bir nechta namuna (kirish → chiqish) berib, kerakli format yoki uslubni o'rgatish",
        "Bir savolni bir necha bor takrorlash",
        "Faqat rasm yuborish"
      ],
      c: 1
    },
    {
      q: "Murakkab mantiqiy yoki matematik masalada javob aniqligini oshirishning eng yaxshi usuli qaysi?",
      o: [
        "Faqat yakuniy javobni darhol so'rash",
        "Modeldan qadamba-qadam fikrla deb mulohaza qilishni so'rash (Chain-of-Thought)",
        "Savolni qisqartirish",
        "Bir necha marta ishonchingiz komilmi? deb so'rash"
      ],
      c: 1
    },
    {
      q: "Javobni boshqa dasturda avtomatik ishlatmoqchisiz. Promptga nimani qo'shgan ma'qul?",
      o: [
        "Iloji boricha chiroyli yoz",
        "Erkin matn ko'rinishida tushuntir",
        "Faqat JSON formatda, ortiqcha izohsiz javob ber",
        "Javobni rasm qilib ber"
      ],
      c: 2
    },
    {
      q: "AI haqiqatga to'g'ri kelmaydigan, lekin ishonchli ko'rinadigan faktni to'qib chiqardi. Bu hodisa nima deyiladi?",
      o: ["Iteratsiya", "Gallyutsinatsiya", "Tokenizatsiya", "Few-shot"],
      c: 1
    },
    {
      q: "Noto'g'ri ma'lumot (gallyutsinatsiya) xavfini kamaytirish uchun promptga nima qo'shish foydali?",
      o: [
        "Javobni iloji boricha uzun qil",
        "Aniq bilmasang, 'bilmayman' deb yoz va manba ko'rsat",
        "Hamma narsaga ishonch bilan javob ber",
        "Faqat bitta so'z bilan javob ber"
      ],
      c: 1
    },
    {
      q: "Quyidagilardan qaysi birini AI suhbatiga KIRITMASLIK kerak?",
      o: [
        "Umumiy savol va mavzu",
        "Parol, bank kartasi raqami, JSHSHIR kabi maxfiy shaxsiy ma'lumot",
        "Matn namunasi",
        "Kerakli format tavsifi"
      ],
      c: 1
    },
    {
      q: "Birinchi javob siz xohlagandek chiqmadi. Eng to'g'ri yondashuv qaysi?",
      o: [
        "AI yomon, boshqa vositaga o'tish",
        "Bir xil promptni o'zgartirmay qayta-qayta yuborish",
        "Javobni baholab, aniqroq ko'rsatma bilan qayta so'rash (iteratsiya)",
        "Javobni o'zgartirmay qabul qilish"
      ],
      c: 2
    },
    {
      q: "Promptni Sen tajribali marketologsan... deb boshlash (rol berish) nimaga yordam beradi?",
      o: [
        "Modelga internetdan real vaqtli ma'lumot olib keladi",
        "Modelga rol/kontekst berib, javob uslubi va chuqurligini mavzuga moslaydi",
        "Javobni har doim 100% xatosiz qiladi",
        "Faqat rasmiy hujjatlar uchun ishlaydi"
      ],
      c: 1
    },
    {
      q: "Quyidagi promptlardan QAYSI BIRI eng kuchli (aniq natija beradi)?",
      o: [
        "Reklama yoz",
        "Menga yaxshi reklama kerak",
        "Telefon uchun reklama yoz",
        "Yangi smartfon uchun yosh auditoriyaga mo'ljallangan, qiziqarli ohangdagi 3 jumlalik Instagram reklama matnini yoz"
      ],
      c: 3
    },
    {
      q: "Promptda nafaqat nima qilishni, balki nima QILMASLIKNI ham aytish nega foydali?",
      o: [
        "Promptni ataylab uzaytiradi, lekin natijaga ta'sir qilmaydi",
        "Keraksiz qism yoki uslubni chiqarib tashlab, natijani aniqroq qiladi",
        "Model cheklovlarni umuman tushunmaydi, shuning uchun befoyda",
        "Faqat dasturlashda ishlaydi"
      ],
      c: 1
    },
    {
      q: "Temperature (haroratlik) sozlamasi asosan nimaga ta'sir qiladi?",
      o: [
        "Javob tezligiga",
        "Javobning ijodiyligi va tasodifiylik darajasiga",
        "Matn tiliga",
        "Modelning xotira hajmiga"
      ],
      c: 1
    },
    {
      q: "RTF, RACE, CRISPE kabi freymvorklar nima uchun ishlatiladi?",
      o: [
        "Modelning javob tezligini oshirish uchun",
        "Promptda muhim elementlarni (rol, vazifa, format va h.k.) unutmaslik uchun tayyor shablon sifatida",
        "Javobni avtomatik boshqa tilga o'girish uchun",
        "Faqat professional dasturchilar uchun majburiy qoida"
      ],
      c: 1
    },
    {
      q: "Quyidagi maqola haqida fikr yoz — shu promptni qanday KUCHAYTIRASIZ?",
      o: [
        "Hech narsa qo'shmayman, shundayam yaxshi",
        "Faqat iltimos so'zini qo'shaman",
        "Maqola matnini biriktirib, rol/auditoriya, format va hajmni belgilayman (masalan: 3 ta kuchli va 3 ta zaif tomonini ro'yxat ko'rinishida ko'rsat)",
        "Promptni ingliz tiliga o'giraman"
      ],
      c: 2
    },
    {
      q: "Bir nechta mahsulot tavsifini bir xil uslub va tuzilishda yozdirmoqchisiz. Eng samarali yo'l qaysi?",
      o: [
        "Har birini alohida, har xil so'rab chiqish",
        "2-3 ta tayyor namuna (few-shot) berib, qolganini shu namunaga moslab so'rash",
        "Faqat mahsulot nomini yozish",
        "Uslub haqida umuman gapirmaslik"
      ],
      c: 1
    },
    {
      q: "Sayohat haqida insho yoz — bu zaif promptni yaxshilashning ENG yaxshi yo'li qaysi?",
      o: [
        "Iltimos, sayohat haqida insho yoz deb iltimos qo'shaman",
        "Sayohat haqida uzun insho yoz deyman",
        "Mavzu, auditoriya, hajm va uslubni aniqlayman: 9-sinf o'quvchisi tilida, Samarqandga sayohat haqida 150 so'zlik insho yoz",
        "Promptni ikki marta yuboraman"
      ],
      c: 2
    },
    {
      q: "Sen hamma narsani bilasan, menga eng to'g'ri javobni ber — bu promptdagi asosiy xato nima?",
      o: [
        "Juda qisqa",
        "AI'ni hamma narsani biladi deb ishontirish — u xato qilishi mumkin; bunday tasdiqlash gallyutsinatsiya xavfini oshiradi",
        "Rasmiy ohangda emas",
        "Ingliz tilida emas"
      ],
      c: 1
    },
    {
      q: "Sen marketologsan. 5 ta reklama shiori yoz. — bu promptda qaysi muhim qism yetishmaydi?",
      o: [
        "Rol — yetishmaydi",
        "Kontekst — mahsulot nima va kim uchun ekani aytilmagan",
        "Format — javob necha qatorda bo'lishi aytilmagan",
        "Hech narsa yetishmaydi, prompt mukammal"
      ],
      c: 1
    },
    {
      q: "Self-Consistency texnikasi aniqlikni qanday oshiradi?",
      o: [
        "Promptni ingliz tilida yozish orqali",
        "Bir masalani bir necha bor qadamba-qadam yechtirib, eng ko'p takrorlangan javobni (ovoz berish) tanlash orqali",
        "Javobni qisqartirish orqali",
        "Modelni o'chirib-yoqish orqali"
      ],
      c: 1
    },
    {
      q: "ReAct texnikasi va AI agentlari asosida qaysi tsikl yotadi?",
      o: [
        "Yozish → o'chirish → qayta yozish",
        "Fikr (Thought) → Harakat/vosita (Action) → Kuzatuv (Observation) — javob topilguncha takror",
        "Savol → javob, bir martalik",
        "Kirish → chiqish, tahrirsiz"
      ],
      c: 1
    },
    {
      q: "Korxonangizning O'Z hujjatlariga (ichki bilim bazasiga) tayanib javob beradigan AI kerak. Qaysi yondashuv eng mos?",
      o: [
        "Fine-tuning — modelni qaytadan o'rgatish",
        "RAG — modelga kerakli hujjatni topib berib, javobni o'sha manbaga asoslash",
        "Temperature'ni oshirish",
        "Faqat few-shot misollar berish"
      ],
      c: 1
    }
  ]
};
