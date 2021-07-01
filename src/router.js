import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/dashboard/Dashboard.vue';
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

import DashboardMain from "./views/dashboard/main/DashboardMain.vue";

import IndexArticle from "./views/dashboard/article/IndexArticle.vue";

import IndexTwibbon from "./views/dashboard/twibbon/IndexTwibbon.vue";

import IndexPayment from "./views/dashboard/payment/IndexPayment.vue";
import MainPayment from "./views/dashboard/payment/MainPayment.vue";
import CreatePayment from "./views/dashboard/payment/CreatePayment.vue";

import IndexAnnouncement from "./views/dashboard/announcement/IndexAnnouncement.vue";
import MainAnnouncement from "./views/dashboard/announcement/MainAnnouncement.vue";
import CreateAnnouncement from "./views/dashboard/announcement/CreateAnnouncement.vue";
import DetailAnnouncement from "./views/dashboard/announcement/DetailAnnouncement.vue";
import EditAnnouncement from "./views/dashboard/announcement/EditAnnouncement.vue";

import IndexDocument from "./views/dashboard/document/IndexDocument.vue";
import MainDocument from "./views/dashboard/document/MainDocument.vue";
import CreateDocument from "./views/dashboard/document/CreateDocument.vue";

import IndexSchedule from "./views/dashboard/schedule/IndexSchedule.vue";
import MainSchedule from "./views/dashboard/schedule/MainSchedule.vue";
import CreateSchedule from "./views/dashboard/schedule/CreateSchedule.vue";

import IndexParticipant from "./views/dashboard/participant/IndexParticipant.vue";
import MainParticipant from "./views/dashboard/participant/MainParticipant.vue";
import DetailParticipant from "./views/dashboard/participant/DetailParticipant.vue";

import IndexEvent from "./views/dashboard/event/IndexEvent.vue";
import SettingEvent from "./views/dashboard/event/SettingEvent.vue";

import IndexStage from "./views/dashboard/stage/IndexStage.vue";
import MainStage from "./views/dashboard/stage/MainStage.vue";
import SettingStage from "./views/dashboard/stage/SettingStage.vue";
import ListParticipantStage from "./views/dashboard/stage/participant/ListParticipantStage.vue";
import AddParticipantStage from "./views/dashboard/stage/participant/AddParticipantStage.vue";
import MainQuestionStage from "./views/dashboard/stage/question/MainQuestionStage.vue";
import CreateQuestionStage from "./views/dashboard/stage/question/CreateQuestionStage.vue";
import EditQuestionStage from "./views/dashboard/stage/question/EditQuestionStage.vue";
import ListResultStage from "./views/dashboard/stage/result/ListResultStage.vue";
import DetailResultStage from "./views/dashboard/stage/result/DetailResultStage.vue";

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
            },
            {
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
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard,
                meta: {
                    title: 'Dashboard',
                },
                children: [{
                        path: "article",
                        name: "IndexArticle",
                        component: IndexArticle,
                    },
                    {
                        path: "twibbon",
                        name: "IndexTwibbon",
                        component: IndexTwibbon,
                    },
                    {
                        path: "payment",
                        name: "IndexPayment",
                        component: IndexPayment,
                        children: [{
                                path: "",
                                name: "MainPayment",
                                component: MainPayment,
                            },
                            {
                                path: "add",
                                name: "CreatePayment",
                                component: CreatePayment,
                            },
                        ],
                    },
                    {
                        path: "announcement",
                        name: "IndexAnnouncement",
                        component: IndexAnnouncement,
                        children: [{
                                path: "",
                                name: "MainAnnouncement",
                                component: MainAnnouncement,
                            },
                            {
                                path: "add",
                                name: "CreateAnnouncement",
                                component: CreateAnnouncement,
                            },
                            {
                                path: ":id",
                                name: "DetailAnnouncement",
                                component: DetailAnnouncement,
                            },
                            {
                                path: ":id/edit",
                                name: "EditAnnouncement",
                                component: EditAnnouncement,
                            },
                        ],
                    },
                    {
                        path: "document",
                        name: "IndexDocument",
                        component: IndexDocument,
                        children: [{
                                path: "",
                                name: "MainDocument",
                                component: MainDocument,
                            },
                            {
                                path: "add",
                                name: "CreateDocument",
                                component: CreateDocument,
                            },
                        ],
                    },
                    {
                        path: "schedule",
                        name: "IndexSchedule",
                        component: IndexSchedule,
                        children: [{
                                path: "",
                                name: "MainSchedule",
                                component: MainSchedule,
                            },
                            {
                                path: "add",
                                name: "CreateSchedule",
                                component: CreateSchedule,
                            },
                        ],
                    },
                    {
                        path: "event",
                        name: "IndexEvent",
                        component: IndexEvent,
                        children: [{
                            path: ":idEvent",
                            children: [{
                                path: "",
                                name: "SettingEvent",
                                component: SettingEvent,
                            }, ],
                        }, ],
                    },
                    {
                        path: "stage/:idStage",
                        name: "IndexStage",
                        component: IndexStage,
                        children: [{
                                path: "",
                                name: "MainStage",
                                component: MainStage,
                            },
                            {
                                path: "setting",
                                name: "SettingStage",
                                component: SettingStage,
                            },
                            {
                                path: "participant",
                                name: "ListParticipantStage",
                                component: ListParticipantStage,
                            },
                            {
                                path: "participant/add",
                                name: "AddParticipantStage",
                                component: AddParticipantStage,
                            },
                            {
                                path: "question",
                                name: "MainQuestionStage",
                                component: MainQuestionStage,
                            },
                            {
                                path: "question/:idQuestion",
                                name: "EditQuestionStage",
                                component: EditQuestionStage,
                            },
                            {
                                path: "question/add",
                                name: "CreateQuestionStage",
                                component: CreateQuestionStage,
                            },
                            {
                                path: "result",
                                name: "ListResultStage",
                                component: ListResultStage,
                            },
                            {
                                path: "result/:idResult",
                                name: "DetailResultStage",
                                component: DetailResultStage,
                            },
                        ],
                    },
                ]
            }
        ]
    }, ]
})