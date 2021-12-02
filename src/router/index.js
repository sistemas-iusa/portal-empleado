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
    path: "/home",
    name: "Home",
    component: Home,
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
    path: "/home-office",
    name: "HomeOffice",
    component: HomeOffice,
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
    path: "/personal-evaluation",
    name: "PersonalEvaluation",
    component: PersonalEvaluation,
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
    path: "/weekly-evaluation",
    name: "WeeklyEvaluation",
    component: WeeklyEvaluation,
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
    path: "/receipt",
    name: "Receipt",
    component: Receipt,
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
