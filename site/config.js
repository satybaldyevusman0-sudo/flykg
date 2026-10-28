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
  "heroWiki": "Airbus A320 family",
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
      "ky": "Арзан авиабилеттер — бир нече чыкылдатууда",
      "ru": "Дешёвые авиабилеты — в пару кликов",
      "en": "Cheap flights in a few clicks"
    },
    "heroText": {
      "ky": "Ош, Москва, Стамбул, Дубай, Сеул жана Европага 26 багыт. Билетти онлайн сатып алып, ордуңузду жана багажды тандаңыз.",
      "ru": "26 направлений: Ош, Москва, Стамбул, Дубай, Сеул и Европа. Покупайте онлайн, выбирайте место и багаж.",
      "en": "26 routes: Osh, Moscow, Istanbul, Dubai, Seoul and Europe. Buy online and choose seats and baggage."
    },
    "catalog": {
      "ky": "Рейстер",
      "ru": "Рейсы",
      "en": "Flights"
    },
    "catalogText": {
      "ky": "Багыт, баа жана авиакомпания боюнча тандаңыз",
      "ru": "Выбирайте по направлению, цене и авиакомпании",
      "en": "Filter by route, price and airline"
    },
    "search": {
      "ky": "Шаар издөө: Москва, Дубай…",
      "ru": "Поиск города: Москва, Дубай…",
      "en": "Search a city: Moscow, Dubai…"
    },
    "plans": {
      "ky": "Кошумча кызматтар",
      "ru": "Доп. услуги",
      "en": "Extras"
    },
    "plansText": {
      "ky": "Багаж, орун жана камсыздандыруу",
      "ru": "Багаж, место и страховка",
      "en": "Baggage, seats and insurance"
    },
    "booking": {
      "ky": "Билет брондоо",
      "ru": "Бронь билета",
      "en": "Booking"
    },
    "bookingText": {
      "ky": "Учуу күнүн жана классты тандаңыз",
      "ru": "Выберите дату вылета и класс",
      "en": "Pick a date and class"
    },
    "bookBtn": {
      "ky": "Брондоо",
      "ru": "Забронировать",
      "en": "Book"
    },
    "buy": {
      "ky": "Билет сатып алуу",
      "ru": "Купить билет",
      "en": "Buy ticket"
    },
    "about": {
      "ky": "FlyKG — Кыргызстандагы онлайн авиакасса: 20дан ашык авиакомпаниянын билеттери.",
      "ru": "FlyKG — онлайн-авиакасса Кыргызстана: билеты 20+ авиакомпаний.",
      "en": "FlyKG is Kyrgyzstan’s online ticket office for 20+ airlines."
    }
  },
  "categories": [
    {
      "id": "domestic",
      "name": {
        "ky": "Ички рейстер",
        "ru": "Внутренние рейсы",
        "en": "Domestic"
      },
      "icon": "🇰🇬",
      "wiki": "Manas International Airport",
      "tags": "airport,kyrgyzstan"
    },
    {
      "id": "russia",
      "name": {
        "ky": "Россия",
        "ru": "Россия",
        "en": "Russia"
      },
      "icon": "🏙️",
      "wiki": "Moscow Kremlin",
      "tags": "moscow,city"
    },
    {
      "id": "asia",
      "name": {
        "ky": "Азия жана КМШ",
        "ru": "Азия и СНГ",
        "en": "Asia & CIS"
      },
      "icon": "🌏",
      "wiki": "Almaty",
      "tags": "asia,city"
    },
    {
      "id": "mideast",
      "name": {
        "ky": "Жакынкы Чыгыш",
        "ru": "Ближний Восток",
        "en": "Middle East"
      },
      "icon": "🕌",
      "wiki": "Dubai",
      "tags": "dubai"
    },
    {
      "id": "europe",
      "name": {
        "ky": "Европа",
        "ru": "Европа",
        "en": "Europe"
      },
      "icon": "🇪🇺",
      "wiki": "Frankfurt Airport",
      "tags": "europe,airport"
    }
  ],
  "plans": [
    {
      "id": "bag",
      "icon": "🧳",
      "price": 3500,
      "popular": true,
      "title": {
        "ky": "Багаж 23 кг",
        "ru": "Багаж 23 кг",
        "en": "Baggage 23 kg"
      },
      "desc": {
        "ky": "Кошумча бир чемодан",
        "ru": "Дополнительный чемодан",
        "en": "One extra suitcase"
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
      "id": "insurance",
      "icon": "🛡️",
      "price": 900,
      "title": {
        "ky": "Учуу камсыздандыруусу",
        "ru": "Страховка перелёта",
        "en": "Flight insurance"
      },
      "desc": {
        "ky": "Кечигүү жана жоготуудан",
        "ru": "От задержки и потери багажа",
        "en": "Delays and lost baggage"
      }
    }
  ],
  "booking": {
    "slots": [
      "06:30",
      "09:00",
      "12:30",
      "15:45",
      "19:20",
      "23:50"
    ],
    "formats": [
      {
        "id": "economy",
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
    "sundayOff": false
  },
  "features": [
    {
      "icon": "💸",
      "title": {
        "ky": "Эң арзан баа",
        "ru": "Лучшая цена",
        "en": "Best price"
      },
      "text": {
        "ky": "20+ авиакомпанияны салыштырабыз.",
        "ru": "Сравниваем 20+ авиакомпаний.",
        "en": "We compare 20+ airlines."
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
        "ky": "Почтага жана WhatsApp’ка.",
        "ru": "На почту и в WhatsApp.",
        "en": "By email and WhatsApp."
      }
    },
    {
      "icon": "🕐",
      "title": {
        "ky": "24/7 колдоо",
        "ru": "Поддержка 24/7",
        "en": "24/7 support"
      },
      "text": {
        "ky": "Рейс өзгөрсө жардам беребиз.",
        "ru": "Поможем при изменении рейса.",
        "en": "Help with schedule changes."
      }
    },
    {
      "icon": "💳",
      "title": {
        "ky": "Ыңгайлуу төлөм",
        "ru": "Удобная оплата",
        "en": "Easy payment"
      },
      "text": {
        "ky": "Карта, Элсом, терминал.",
        "ru": "Карта, Элсом, терминал.",
        "en": "Card, Elsom or kiosk."
      }
    }
  ],
  "stats": [
    {
      "value": "26",
      "label": {
        "ky": "багыт",
        "ru": "направлений",
        "en": "routes"
      }
    },
    {
      "value": "20+",
      "label": {
        "ky": "авиакомпания",
        "ru": "авиакомпаний",
        "en": "airlines"
      }
    },
    {
      "value": "50 000+",
      "label": {
        "ky": "жүргүнчү",
        "ru": "пассажиров",
        "en": "passengers"
      }
    },
    {
      "value": "4.8★",
      "label": {
        "ky": "рейтинг",
        "ru": "рейтинг",
        "en": "rating"
      }
    }
  ],
  "specLabels": {
    "from": {
      "ky": "Кайдан",
      "ru": "Откуда",
      "en": "From"
    },
    "to": {
      "ky": "Кайда",
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
        "ky": "Көп рейстерде 20–23 кг багаж кошулган. Кошумча багажды \"Кошумча кызматтардан\" алыңыз.",
        "ru": "На большинстве рейсов включено 20–23 кг. Доп. багаж — в «Доп. услугах».",
        "en": "Most fares include 20–23 kg; buy extra in Extras."
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
        "ky": "Кайтаруу шарттары тарифке жараша — менеджерге жазыңыз.",
        "ru": "Условия возврата зависят от тарифа — напишите менеджеру.",
        "en": "Refund rules depend on the fare — contact us."
      },
      "link": "/contact"
    },
    {
      "keys": [
        "арзан",
        "дешев",
        "cheap"
      ],
      "answer": {
        "ky": "Эң арзан билеттер — Бишкек–Ош жана Бишкек–Алматы.",
        "ru": "Самые дешёвые — Бишкек–Ош и Бишкек–Алматы.",
        "en": "Cheapest: Bishkek–Osh and Bishkek–Almaty."
      },
      "link": "/catalog?sort=price_asc"
    }
  ],
  "priceNote": {
    "ky": "Баалар бир тарапка, эконом класс, болжолдуу; күнгө жараша өзгөрөт.",
    "ru": "Цены в одну сторону, эконом, ориентировочные.",
    "en": "One-way economy, approximate; varies by date."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу (28.10.2026), рейстер демо максатта. Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Цены ориентировочные (28.10.2026), рейсы демонстрационные. Фото: Wikipedia.",
    "en": "Approximate prices (28.10.2026); demo schedule. Photos: Wikipedia."
  },
  "sources": []
};
