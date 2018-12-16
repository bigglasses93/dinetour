import Vue from "vue";
import Router from "vue-router";
// import Home from "@/views/Home";
import Users from "@/views/Users";
import User from "@/views/User";
import Layout from "@/views/Layout";
import Events from "@/views/Events";
import Event from "@/views/Event";
import SignUp from "@/views/SignUp";
import SignIn from "@/views/SignIn";
import Todo from "@/views/Todo";
import Homepage from "@/views/Homepage";
import CreateEvent from "@/views/CreateEvent";
import ApplyEvent from "@/views/ApplyEvent";
import Contactus from "@/views/ContactUs";
import Profile from "@/views/Profile";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: { name: "homepage" },
      children: [
        // {
        //   path: "/home",
        //   name: "home",
        //   component: Home
        // },
        {
          path: "/users",
          name: "users",
          component: Users
        },
        {
          path: "/users/:userId",
          name: "user",
          component: User,
          props: true
        },
        {
          path: "/events",
          name: "events",
          component: Events
        },
        {
          path: "/events/:eventId",
          name: "event",
          component: Event,
          props: true
        },
        {
          path: "/signup",
          name: "signup",
          component: SignUp
        },
        {
          path: "/signin",
          name: "signin",
          component: SignIn
        },
        {
          path: "/todo",
          name: "todo",
          component: Todo
        },
        {
          path: "/create-event",
          name: "create-event",
          component: CreateEvent
        },
        {
          path: "/homepage",
          name: "homepage",
          component: Homepage
        },
        {
          path: "/apply-event/:eventId",
          name: "apply-event",
          component: ApplyEvent,
          props: true
        },
        {
          path: "/contactus",
          name: "contactus",
          component: Contactus
        },
        {
          path: "/profile",
          name: "profile",
          component: Profile
        }
      ]
    }
  ]
});

export default router;
