// FlyKG: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "flykg",
  "name": "FlyKG",
  "nameParts": [
    "Fly",
    "KG"
  ],
  "logo": "✈️",
  "currency": "KGS",
  "theme": {
    "primary": "#0ea5e9",
    "primaryDark": "#0284c7",
    "accent": "#e11d48",
    "dark": "#082f49"
  },
  "heroImage": "https://loremflickr.com/1600/900/airplane,sky?lock=61",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Кыргызстан",
      "ru": "г. Бишкек, Кыргызстан",
      "en": "Bishkek, Kyrgyzstan"
    }
  },
  "text": {
    "tagline": {
      "ky": "Бишкек жана Оштон авиабилеттер",
      "ru": "Авиабилеты из Бишкека и Оша",
      "en": "Flights from Bishkek and Osh"
    },
    "heroTitle": {
      "ky": "Арзан авиабилеттер — бир нече чыкылдатуу менен",
      "ru": "Дешёвые авиабилеты — в пару кликов",
      "en": "Cheap flights in a few clicks"
    },
    "heroText": {
      "ky": "Москва, Стамбул, Дубай, Алматы, Ош жана башка багыттар. Багаж, орун тандоо жана 24/7 колдоо.",
      "ru": "Москва, Стамбул, Дубай, Алматы, Ош и другие направления. Багаж, выбор места, поддержка 24/7.",
      "en": "Moscow, Istanbul, Dubai, Almaty, Osh and more. Baggage, seat choice, 24/7 support."
    },
    "catalog": {
      "ky": "Рейстер",
      "ru": "Рейсы",
      "en": "Flights"
    },
    "catalogText": {
      "ky": "Багыт жана баа боюнча рейс тандаңыз",
      "ru": "Выбирайте рейс по направлению и цене",
      "en": "Pick a flight by route and price"
    },
    "search": {
      "ky": "Шаар: Москва, Стамбул, Ош…",
      "ru": "Город: Москва, Стамбул, Ош…",
      "en": "City: Moscow, Istanbul, Osh…"
    },
    "plans": {
      "ky": "Кошумчалар",
      "ru": "Доп. услуги",
      "en": "Add-ons"
    },
    "plansText": {
      "ky": "Багаж, орун жана камсыздандыруу",
      "ru": "Багаж, место и страховка",
      "en": "Baggage, seats and insurance"
    },
    "booking": {
      "ky": "Билетти брондоо",
      "ru": "Бронь билета",
      "en": "Hold a ticket"
    },
    "bookingText": {
      "ky": "Рейсти тандап, билетти 24 саатка брондоңуз",
      "ru": "Выберите рейс и забронируйте на 24 часа",
      "en": "Choose a flight and hold it for 24 hours"
    },
    "bookBtn": {
      "ky": "Брондоо",
      "ru": "Забронировать",
      "en": "Hold"
    },
    "buy": {
      "ky": "Билет сатып алуу",
      "ru": "Купить билет",
      "en": "Buy ticket"
    },
    "about": {
      "ky": "FlyKG — Кыргызстандан учуулар үчүн авиабилеттер.",
      "ru": "FlyKG — авиабилеты для перелётов из Кыргызстана.",
      "en": "FlyKG — flights from Kyrgyzstan."
    }
  },
  "categories": [
    {
      "id": "domestic",
      "name": {
        "ky": "Ички рейстер",
        "ru": "Внутренние",
        "en": "Domestic"
      },
      "icon": "🇰🇬",
      "image": "https://loremflickr.com/800/600/airport,mountains?lock=1018"
    },
    {
      "id": "russia",
      "name": {
        "ky": "Россия",
        "ru": "Россия",
        "en": "Russia"
      },
      "icon": "🇷🇺",
      "image": "https://loremflickr.com/800/600/moscow,kremlin?lock=999"
    },
    {
      "id": "asia",
      "name": {
        "ky": "Азия жана Түркия",
        "ru": "Азия и Турция",
        "en": "Asia & Turkey"
      },
      "icon": "🌏",
      "image": "https://loremflickr.com/800/600/istanbul,city?lock=962"
    },
    {
      "id": "mideast",
      "name": {
        "ky": "Жакынкы Чыгыш",
        "ru": "Ближний Восток",
        "en": "Middle East"
      },
      "icon": "🕌",
      "image": "https://loremflickr.com/800/600/dubai,city?lock=992"
    }
  ],
  "plans": [
    {
      "id": "bag-23",
      "icon": "🧳",
      "price": 3500,
      "title": {
        "ky": "Багаж 23 кг",
        "ru": "Багаж 23 кг",
        "en": "Baggage 23 kg"
      },
      "desc": {
        "ky": "Бир багытка",
        "ru": "В одну сторону",
        "en": "One way"
      }
    },
    {
      "id": "seat",
      "icon": "💺",
      "price": 1200,
      "title": {
        "ky": "Орун тандоо",
        "ru": "Выбор места",
        "en": "Seat selection"
      },
      "desc": {
        "ky": "Терезе же өтмөк жанында",
        "ru": "У окна или прохода",
        "en": "Window or aisle"
      }
    },
    {
      "id": "insur",
      "icon": "🛡️",
      "price": 900,
      "popular": true,
      "title": {
        "ky": "Учуу камсыздандыруусу",
        "ru": "Страховка перелёта",
        "en": "Flight insurance"
      },
      "desc": {
        "ky": "Кечигүү жана багаж",
        "ru": "Задержка и багаж",
        "en": "Delay and baggage"
      }
    }
  ],
  "booking": {
    "slots": [
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00"
    ],
    "formats": [
      {
        "id": "econom",
        "label": {
          "ky": "Эконом",
          "ru": "Эконом",
          "en": "Economy"
        }
      },
      {
        "id": "business",
        "label": {
          "ky": "Бизнес",
          "ru": "Бизнес",
          "en": "Business"
        }
      }
    ],
    "itemLabel": {
      "ky": "Рейс",
      "ru": "Рейс",
      "en": "Flight"
    },
    "people": true,
    "sundayOff": false
  },
  "features": [
    {
      "icon": "💸",
      "title": {
        "ky": "Комиссиясыз",
        "ru": "Без наценки",
        "en": "No markup"
      },
      "text": {
        "ky": "Авиакомпаниянын баасы.",
        "ru": "Цены авиакомпаний.",
        "en": "Airline prices."
      }
    },
    {
      "icon": "🔁",
      "title": {
        "ky": "Алмаштыруу",
        "ru": "Обмен",
        "en": "Changes"
      },
      "text": {
        "ky": "Билетти алмаштырууга жардам.",
        "ru": "Помощь с обменом билета.",
        "en": "Help with ticket changes."
      }
    },
    {
      "icon": "📱",
      "title": {
        "ky": "Электрондук билет",
        "ru": "Электронный билет",
        "en": "E-ticket"
      },
      "text": {
        "ky": "Почтага жана WhatsApp'ка.",
        "ru": "На почту и в WhatsApp.",
        "en": "By email and WhatsApp."
      }
    },
    {
      "icon": "🕐",
      "title": {
        "ky": "24/7",
        "ru": "24/7",
        "en": "24/7"
      },
      "text": {
        "ky": "Түнкү рейстерде да колдоо.",
        "ru": "Поддержка и ночью.",
        "en": "Support even at night."
      }
    }
  ],
  "stats": [
    {
      "value": "12",
      "label": {
        "ky": "багыт",
        "ru": "направлений",
        "en": "routes"
      }
    },
    {
      "value": "FRU",
      "label": {
        "ky": "Манас аэропорту",
        "ru": "аэропорт Манас",
        "en": "Manas airport"
      }
    },
    {
      "value": "0%",
      "label": {
        "ky": "комиссия",
        "ru": "комиссия",
        "en": "fee"
      }
    },
    {
      "value": "24/7",
      "label": {
        "ky": "колдоо",
        "ru": "поддержка",
        "en": "support"
      }
    }
  ],
  "specLabels": {
    "from": {
      "ky": "Каяктан",
      "ru": "Откуда",
      "en": "From"
    },
    "to": {
      "ky": "Каякка",
      "ru": "Куда",
      "en": "To"
    },
    "airline": {
      "ky": "Авиакомпания",
      "ru": "Авиакомпания",
      "en": "Airline"
    },
    "time": {
      "ky": "Учуу убактысы",
      "ru": "Время в пути",
      "en": "Flight time"
    },
    "bag": {
      "ky": "Багаж",
      "ru": "Багаж",
      "en": "Baggage"
    },
    "type": {
      "ky": "Түрү",
      "ru": "Тип",
      "en": "Type"
    }
  },
  "faq": [
    {
      "keys": [
        "багаж",
        "baggage",
        "чемодан"
      ],
      "answer": {
        "ky": "Кол жүгү баасына кирет; 23 кг багажды \"Кошумчалар\" бетинен кошуңуз.",
        "ru": "Ручная кладь включена; багаж 23 кг — в «Доп. услугах».",
        "en": "Carry-on included; add 23 kg baggage in Add-ons."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "кайтар",
        "возврат",
        "refund"
      ],
      "answer": {
        "ky": "Кайтаруу тарифке жараша — WhatsApp аркылуу жазыңыз.",
        "ru": "Возврат зависит от тарифа — напишите в WhatsApp.",
        "en": "Refunds depend on fare — message us."
      },
      "link": "/contact"
    }
  ],
  "priceNote": {
    "ky": "Баалар бир багытка, эконом, болжолдуу (2026-ж. күз). Так баа датага жараша.",
    "ru": "Цены в одну сторону, эконом, ориентировочно (осень 2026).",
    "en": "One-way economy, approximate (autumn 2026)."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу; учуу датасына жараша өзгөрөт.",
    "ru": "Цены ориентировочные; зависят от даты.",
    "en": "Approximate; depend on date."
  },
  "sources": [
    {
      "title": "aviasales.ru — Бишкек",
      "url": "https://www.aviasales.ru/cities/bishkek-bsz"
    },
    {
      "title": "uniticket.ru — Бишкек–Россия",
      "url": "https://uniticket.ru/bilet/bishkek/russia/"
    }
  ]
};
