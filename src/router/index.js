import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomeOffice from "../views/HomeOffice.vue";
import SignIn from "../views/auth/SignIn.vue";
import Register from "../views/auth/Register.vue";
import NotFound from "../views/auth/404.vue";
import WeeklyEvaluation from "../views/weekly_evaluation/WeeklyEvaluation.vue";
import PersonalEvaluation from "../views/personal_evaluation/PersonalEvaluation.vue";
import Receipt from "../views/receipt/Receipt.vue";
import UserProfile from "../views/user_profile/UserProfile.vue";
import SuggestionsMailbox from "../views/suggestions_mailbox/SuggestionsMailbox.vue";
import CalendarReservations from "../views/meeting_room/admin_reservations/AdminCalendarReservations.vue";
import PhoneBook from "../views/phone_book/PhoneBook.vue";
import ForgottenPassword from "../views/auth/ForgottenPassword.vue";
import NewPassword from "../views/auth/NewPassword.vue";
import Logotipos from "../views/Logotipos.vue";
import Catalogs from "../views/Catalogs.vue";
import WeatherView from "../views/weather_view/WeatherView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/forgotten-password",
    name: "ForgottenPassword",
    component: ForgottenPassword,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/NewPassword/:id",
    name: "NewPassword",
    component: NewPassword,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/home-office",
    name: "HomeOffice",
    component: HomeOffice,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/personal-evaluation",
    name: "PersonalEvaluation",
    component: PersonalEvaluation,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/weekly-evaluation",
    name: "WeeklyEvaluation",
    component: WeeklyEvaluation,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/receipt",
    name: "Receipt",
    component: Receipt,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      }
      next();
    },
  },
  {
    path: "/phone-book",
    name: "PhoneBook",
    component: PhoneBook,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/calendar-reservations",
    name: "CalendarReservations",
    component: CalendarReservations,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/logotipos",
    name: "Logotipos",
    component: Logotipos,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/catalogs",
    name: "Catalogs",
    component: Catalogs,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/weather-view",
    name: "WeatherView",
    component: WeatherView,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  /* {
    path: "/meeting-room",
    component: () => import("@/views/meeting_room/layout/Layout.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      }
      next();
    },
    children: [
      {
        path: "/",
        name: "MeetingRoom",
        component: () => import("@/views/meeting_room/MeetingRoom.vue"),
      },
      {
        path: "reservations",
        name: "Reservations",
        component: () =>
          import("@/views/meeting_room/reservations/Reservations.vue"),
      },
    ],
  },*/
  {
    path: "/meeting-room",
    component: () => import("@/views/meeting_room/layout/Layout.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
    children: [
      {
        path: "/",
        name: "MeetingRoom",
        component: () => import("@/views/meeting_room/MeetingRoom.vue"),
      },
      {
        path: "admin-reservations",
        name: "AdminReservations",
        component: () =>
          import(
            "@/views/meeting_room/admin_reservations/AdminReservations.vue"
          ),
      },
      {
        path: "reservations",
        name: "Reservations",
        component: () =>
          import("@/views/meeting_room/reservations/Reservations.vue"),
      },
      {
        path: "rooms_reserve",
        name: "RoomsReserve",
        component: () =>
          import("@/views/meeting_room/rooms_reserve/RoomsReserve.vue"),
      },
      {
        path: "reservation_detail/:id",
        name: "ReservationDetail",
        component: () =>
          import("@/views/meeting_room/reservations/ReservationsDetail.vue"),
      },
      {
        path: "reservation_reprogram/:id",
        name: "ReservationReprogram",
        component: () =>
          import("@/views/meeting_room/admin_reservations/RoomsReprogram.vue"),
      },
    ],
  },
  {
    path: "/suggestions-mailbox",
    name: "SuggestionsMailbox",
    component: SuggestionsMailbox,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
  },
  {
    path: "/vacation-request",
    component: () => import("@/views/vacation_request/layout/Layout.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      } else if (!store.getters["auth/user"].fiscal) {
        return next({
          name: "UserProfile",
        });
      }
      next();
    },
    children: [
      {
        path: "/",
        name: "VacationRequest",
        component: () => import("@/views/vacation_request/VacationRequest.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      }
      next();
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
