import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './Dashboard.vue';
import PersonalBlog from './views/PersonalBlog.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import AddNewPost from './views/AddNewPost.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import BlogPosts from './views/BlogPosts.vue';

import Home from "./views/Home.vue";
import Main from "./views/Main.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import ChangePassword from "./views/ChangePassword.vue";
import ConfirmationEmail from "./views/ConfirmationEmail.vue";

import IndexCompetition from "./views/competition/Index.vue";
import OSM from "./views/competition/OSM.vue";
import Poster from "./views/competition/Poster.vue";
import Rank1 from "./views/competition/Rank1.vue";
import Sigma from "./views/competition/Sigma.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [{
        path: "/",
        name: "Home",
        component: Home,
        children: [{
                path: "",
                name: "Main",
                component: Main,
                meta: {
                    title: 'Home',
                }
            }, {
                path: "about",
                name: "About",
                component: About,
                meta: {
                    title: 'About',
                }
            },
            {
                path: "login",
                name: "Login",
                component: Login,
                meta: {
                    title: 'About',
                }
            },
            {
                path: "register",
                name: "Register",
                component: Register,
                meta: {
                    title: 'About',
                }
            },
            {
                path: "forgot-password",
                name: "ForgotPassword",
                component: ForgotPassword,
                meta: {
                    title: 'About',
                }
            },
            {
                path: "change-password/:id",
                name: "ChangePassword",
                component: ChangePassword,
                meta: {
                    title: 'About',
                }
            },
            {
                path: "confirm-email/:id",
                name: "ConfirmationEmail",
                component: ConfirmationEmail,
                meta: {
                    title: 'About',
                }
            },
            {
                path: "competition",
                name: "Competition",
                meta: {
                    title: 'Competition',
                },
                component: IndexCompetition,
                children: [{
                        path: "app",
                        name: "App",
                        component: OSM,
                        meta: {
                            title: 'App',
                        }
                    },
                    {
                        path: "game",
                        name: "Game",
                        component: Poster,
                        meta: {
                            title: 'Game',
                        }
                    },
                    {
                        path: "iot",
                        name: "IoT",
                        component: Rank1,
                        meta: {
                            title: 'IoT',
                        }
                    },
                    {
                        path: "olim",
                        name: "Olimpiad",
                        component: Sigma,
                        meta: {
                            title: 'Olimpiade',
                        }
                    },
                ]
            },
        ]
    }, ]
})