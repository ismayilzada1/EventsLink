import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Events": "Events",
            "About us": "About us",
            "Contact us": "Contact us",
            "Sign In":"Sign In",
           "main_page_main":"ENJOY YOUR CITY TO THE FULLEST",
            "main_page_minor":"Find events that match your interests and book your tickets effortlessly. From theater shows to sports events, we have it all!",
            "main_page_btn":"Find Events",
            "workshops":"Workshops",
            "exhibitions":"Exhibitions",
            "foodsAndDrinks":"Foods & Drinks",
            "holidays":"Holidays",
            "sports":"Sports",
            "concerts":"Concerts",
            "popularEvents":"Popular events near you",
            "upcomingEvents": "Upcoming events",
            "event_art_and_wine":"Art & Wine",
            "event_outdoor_yoga_session":"Outdoor Yoga Session",
            "event_food_truck_festival":"Food Truck Festival",
            "event_dream_fest":"Dream Fest",
            "event_outdoor_movie_night":"Outdoor Movie Night",
            "event_tech_meetup":"Tech Meetup",
            "event_photography_workshop":"Photography Workshop",
            "event_live_jazz_concert":"Live Jazz Concert",
            "going":"going",
            "MON":"MON",
            "JUL":"JUL",
            "seeAll":"See all",
            "topDestinations":"Top Destinations",
            "joinEventsLink":"Join EventsLink",
            "cardMinorText":"People use Eventslink to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.",
            "cardButton":"Sign Up",
        }
    },
    aze: {
        translation: {
            "Events": "Tədbirlər",
            "About us": "Haqqımızda",
            "Contact us": "Əlaqə",
            "Sign In": "Daxil Ol",
            "main_page_main": "ŞƏHƏRİNİZDƏN TAM DADDANIN",
            "main_page_minor": "Maraqlarınıza uyğun tədbirləri tapın və biletinizi asanlıqla rezerv edin. Teatr şoularından idman tədbirlərinə qədər hər şey var!",
            "main_page_btn": "Tədbirləri Tapın",
            "workshops": "Təlimlər",
            "exhibitions": "Sərgilər",
            "foodsAndDrinks": "Qidalar və İçkilər",
            "holidays": "Bayramlar",
            "sports": "İdman",
            "concerts": "Konsertlər",
            "popularEvents": "Sizin yaxınlığınızda məşhur tədbirlər",
            "upcomingEvents": "Gələcək tədbirlər",
            "event_art_and_wine": "İncəsənət və Şərab",
            "event_outdoor_yoga_session": "Açıq Hava Yoga Sessiyası",
            "event_food_truck_festival": "Qida Kamyonları Festivalı",
            "event_dream_fest": "Dream Fest",
            "event_outdoor_movie_night": "Açıq Hava Kino Gecəsi",
            "event_tech_meetup": "Texnologiya Görüşü",
            "event_photography_workshop": "Fotografiya Təlimi",
            "event_live_jazz_concert": "Canlı Caz Konserti",
            "going": "gedir",
            "MON": "BZA",
            "JUL": "İYL",
            "seeAll": "Hamısını Gör",
            "topDestinations": "Ən Yaxşı Məkanlar",
            "joinEventsLink": "Tədbirlərə Qoşulun",
            "cardMinorText": "İnsanlar Eventslink istifadə edərək yeni insanlarla tanış olur, yeni şeylər öyrənir, dəstək alır, komfort zonalarından çıxır və birlikdə ehtiraslarını izləyirlər. Üzvlük pulsuzdur.",
            "cardButton": "Qeydiyyatdan Keç"
        }
    },
    ru: {
        translation: {
            "Events": "Мероприятия",
            "About us": "О нас",
            "Contact us": "Связаться с нами",
            "Sign In": "Войти",
            "main_page_main": "НАСЛАДИТЕСЬ ГОРОДОМ НА ПОЛНУЮ",
            "main_page_minor": "Найдите события, соответствующие вашим интересам, и забронируйте билеты без усилий. От театральных шоу до спортивных мероприятий – у нас есть все!",
            "main_page_btn": "Найти мероприятия",
            "workshops": "Мастер-классы",
            "exhibitions": "Выставки",
            "foodsAndDrinks": "Еда и напитки",
            "holidays": "Праздники",
            "sports": "Спорт",
            "concerts": "Концерты",
            "popularEvents": "Популярные события рядом с вами",
            "upcomingEvents": "Предстоящие события",
            "event_art_and_wine": "Искусство и Вино",
            "event_outdoor_yoga_session": "Йога на свежем воздухе",
            "event_food_truck_festival": "Фестиваль Фудтраков",
            "event_dream_fest": "Dream Fest",
            "event_outdoor_movie_night": "Кино под открытым небом",
            "event_tech_meetup": "Техническая встреча",
            "event_photography_workshop": "Мастер-класс по фотографии",
            "event_live_jazz_concert": "Живой Джазовый Концерт",
            "going": "идет",
            "MON": "ПН",
            "JUL": "ИЮЛ",
            "seeAll": "Посмотреть все",
            "topDestinations": "Топ-направления",
            "joinEventsLink": "Присоединиться к EventsLink",
            "cardMinorText": "Люди используют Eventslink, чтобы познакомиться с новыми людьми, узнать что-то новое, найти поддержку, выйти из зоны комфорта и следовать своим увлечениям вместе. Членство бесплатно.",
            "cardButton": "Зарегистрироваться"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
