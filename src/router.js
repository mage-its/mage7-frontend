import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/dashboard/Dashboard.vue';
// import PersonalBlog from './views/PersonalBlog.vue';
// import UserProfileLite from './views/UserProfileLite.vue';
// import AddNewPost from './views/AddNewPost.vue';
// import Errors from './views/Errors.vue';
// import ComponentsOverview from './views/ComponentsOverview.vue';
// import Tables from './views/Tables.vue';
// import BlogPosts from './views/BlogPosts.vue';
import RegisApp from './views/dashboard/register-competition/RegisApp.vue';
import RegisGame from './views/dashboard/register-competition/RegisGame.vue';
import RegisIoT from './views/dashboard/register-competition/RegisIoT.vue';
import RegisOlim from './views/dashboard/register-competition/RegisOlim.vue';

import Home from './views/Home.vue';
import Main from './views/Main.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import ForgotPassword from './views/ForgotPassword.vue';
import ResetPassword from './views/ResetPassword.vue';
import ChangePassword from './views/ChangePassword.vue';
import ConfirmationEmail from './views/ConfirmationEmail.vue';

import IndexCompetition from './views/competition/Index.vue';
import AppDev from './views/competition/AppDev.vue';
import GameDev from './views/competition/GameDev.vue';
import IoTDev from './views/competition/IoTDev.vue';
import Olimpiade from './views/competition/Olimpiade.vue';

import DashboardMain from './views/dashboard/main/DashboardMain.vue';
// import IndexArticle from './views/dashboard/article/IndexArticle.vue';
// import IndexTwibbon from './views/dashboard/twibbon/IndexTwibbon.vue';

// import IndexPayment from './views/dashboard/payment/IndexPayment.vue';
// import MainPayment from './views/dashboard/payment/MainPayment.vue';
import CreatePayment from './views/dashboard/payment/CreatePayment.vue';
// import CreatePayment from './views/dashboard/CreatePayment.vue';

import IndexAnnouncement from './views/dashboard/announcement/IndexAnnouncement.vue';
import MainAnnouncement from './views/dashboard/announcement/MainAnnouncement.vue';
import CreateAnnouncement from './views/dashboard/announcement/CreateAnnouncement.vue';
import DetailAnnouncement from './views/dashboard/announcement/DetailAnnouncement.vue';
import EditAnnouncement from './views/dashboard/announcement/EditAnnouncement.vue';

import IndexDocument from './views/dashboard/document/IndexDocument.vue';
import MainDocument from './views/dashboard/document/MainDocument.vue';
import CreateDocument from './views/dashboard/document/CreateDocument.vue';

import IndexParticipant from './views/dashboard/participant/IndexParticipant.vue';
import MainParticipant from './views/dashboard/participant/MainParticipant.vue';
import DetailParticipant from './views/dashboard/participant/DetailParticipant.vue';

import IndexUserCompetition from './views/dashboard/user-competition/IndexUserCompetition.vue';
import MainUserCompetition from './views/dashboard/user-competition/MainUserCompetition.vue';
import DetailUserCompetition from './views/dashboard/user-competition/DetailUserCompetition.vue';

import UploadProposal from './views/dashboard/upload-proposal/UploadProposal.vue';
import SubmitKaryaUser from './views/dashboard/submit-karya/SubmitKaryaUser.vue';
import NotFound from './views/NotFound.vue';

import IndexKodePromoAdmin from './views/dashboard/kode-promo/IndexKodePromoAdmin.vue';
import MainKodePromoAdmin from './views/dashboard/kode-promo/MainKodePromoAdmin.vue';
import CreateKodePromoAdmin from './views/dashboard/kode-promo/CreateKodePromoAdmin.vue';
import KodePromoUser from './views/dashboard/kode-promo/KodePromoUser.vue';

import IndexPengumumanAdmin from './views/dashboard/pengumuman/IndexPengumumanAdmin.vue';
import MainPengumumanAdmin from './views/dashboard/pengumuman/MainPengumumanAdmin.vue';
import CreatePengumumanAdmin from './views/dashboard/pengumuman/CreatePengumumanAdmin.vue';
import PengumumanUser from './views/dashboard/pengumuman/PengumumanUser.vue';


Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'active',
	linkExactActiveClass: 'exact-active',
	scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			children: [{
				path: 'confirmationemail',
				name: 'ConfirmationEmail',
				component: ConfirmationEmail,
				meta: {
					title: 'ConfirmationEmail',
          requiresAuth: false,
				},
			},
			{
				path: '',
				name: 'Main',
				component: Main,
				meta: {
					title: 'Home',
          requiresAuth: false,
				},
			},
			{
				path: 'about',
				name: 'About',
				component: About,
				meta: {
					title: 'About',
          requiresAuth: false,
				},
			},
			{
				path: 'login',
				name: 'Login',
				component: Login,
				meta: {
					title: 'About',
          requiresAuth: false,
				},
			},
			{
				path: 'register',
				name: 'Register',
				component: Register,
				meta: {
					title: 'About',
          requiresAuth: false,
				},
			},
			{
				path: 'forgot-password',
				name: 'ForgotPassword',
				component: ForgotPassword,
				meta: {
					title: 'About',
          requiresAuth: false,
				},
			},
			{
				path: 'change-password/:id',
				name: 'ChangePassword',
				component: ChangePassword,
				meta: {
					title: 'Change Password',
          requiresAuth: false,
				},
			},
      {
				path: 'reset-password/:token',
				name: 'ResetPassword',
				component: ResetPassword,
				meta: {
					title: 'Reset Password',
          requiresAuth: false,
				},
			},
			{
				path: 'confirm-email/:id',
				name: 'ConfirmationEmail',
				component: ConfirmationEmail,
				meta: {
					title: 'Confirmation Email',
          requiresAuth: false,
				},
			},
			{
				path: 'competition',
				name: 'Competition',
				meta: {
					title: 'Competition',
				},
				component: IndexCompetition,
				children: [{
					path: 'app',
					name: 'App',
					component: AppDev,
					meta: {
						title: 'App',
            requiresAuth: false,
					},
				},
				{
					path: 'game',
					name: 'Game',
					component: GameDev,
					meta: {
						title: 'Game',
            requiresAuth: false,
					},
				},
				{
					path: 'iot',
					name: 'IoT',
					component: IoTDev,
					meta: {
						title: 'IoT',
            requiresAuth: false,
					},
				},
				{
					path: 'olim',
					name: 'Olimpiade',
					component: Olimpiade,
					meta: {
						title: 'Olimpiade',
            requiresAuth: false,
					},
				},
				],
			},
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: Dashboard,
				meta: {
					title: 'Dashboard',
          requiresAuth: true,
				},
				children: [{
					path: '',
					name: 'DashboardMain',
					component: DashboardMain,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
				},
				{
					path: 'regisolim',
					name: 'RegisOlim',
					component: RegisOlim,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
				},
				{
					path: 'regisapp',
					name: 'RegisApp',
					component: RegisApp,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
				},
				{
					path: 'regisgame',
					name: 'RegisGame',
					component: RegisGame,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
				},
				{
					path: 'regisiot',
					name: 'RegisIoT',
					component: RegisIoT,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
				},
				{
					path: '',
					name: 'DashboardMain',
					component: DashboardMain,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
				},
				{
					path: 'createpayment',
					name: 'CreatePayment',
					component: CreatePayment,
          meta: {
            title: 'Create Payment',
            requiresAuth: true,
          },
				},
				{
					path: 'uploadproposal',
					name: 'UploadProposal',
					component: UploadProposal,
          meta: {
            title: 'Upload Proposal',
            requiresAuth: true,
          },
				},
				{
					path: 'announcement',
					name: 'IndexAnnouncement',
					component: IndexAnnouncement,
          meta: {
            title: 'Announcement',
            requiresAuth: true,
          },
					children: [{
						path: '',
						name: 'MainAnnouncement',
						component: MainAnnouncement,
            meta: {
              title: 'Announcement',
              requiresAuth: true,
            },
					},
					{
						path: 'add',
						name: 'CreateAnnouncement',
						component: CreateAnnouncement,
            meta: {
              title: 'Announcement',
              requiresAuth: true,
            },
					},
					{
						path: ':id',
						name: 'DetailAnnouncement',
						component: DetailAnnouncement,
            meta: {
              title: 'Announcement',
              requiresAuth: true,
            },
					},
					{
						path: ':id/edit',
						name: 'EditAnnouncement',
						component: EditAnnouncement,
            meta: {
              title: 'Announcement',
              requiresAuth: true,
            },
					},
					],
				},
				{
					path: 'document',
					name: 'IndexDocument',
					component: IndexDocument,
          meta: {
            title: 'Document',
            requiresAuth: true,
          },
					children: [{
						path: '',
						name: 'MainDocument',
						component: MainDocument,
            meta: {
              title: 'Document',
              requiresAuth: true,
            },
					},
					{
						path: 'add',
						name: 'CreateDocument',
						component: CreateDocument,
            meta: {
              title: 'Document',
              requiresAuth: true,
            },
					},
					],
				},
				{
					path: 'participant',
					name: 'IndexParticipant',
					component: IndexParticipant,
          meta: {
            title: 'Participant',
            requiresAuth: true,
          },
					children: [{
						path: '',
						name: 'MainParticipant',
						component: MainParticipant,
            meta: {
              title: 'Participant',
              requiresAuth: true,
            },
					}, {
						path: ':id',
						name: 'DetailParticipant',
						component: DetailParticipant,
            meta: {
              title: 'Participant',
              requiresAuth: true,
            },
					}],
				},
				{
					path: 'usercompetition',
					name: 'IndexUserCompetition',
					component: IndexUserCompetition,
					children: [{
						path: ':competition',
						name: 'MainUserCompetition',
						component: MainUserCompetition,
					}, {
						path: ':competition/:id',
						name: 'DetailUserCompetition',
						component: DetailUserCompetition,
					}],
				},
				{
					path: 'kodepromoadmin',
					name: 'IndexKodePromoAdmin',
					component: IndexKodePromoAdmin,
					children: [{
						path: '',
						name: 'MainKodePromoAdmin',
						component: MainKodePromoAdmin,
					}, {
						path: 'createkodepromoadmin',
						name: 'CreateKodePromoAdmin',
						component: CreateKodePromoAdmin,
					}],
				},
				{
					path: 'kodepromouser',
					name: 'KodePromoUser',
					component: KodePromoUser,
				},
        {
          path: 'submitkarya',
          name: 'SubmitKarya',
          component: SubmitKaryaUser,
        },
        {
          path: 'pengumumanadmin',
          name: 'IndexPengumumanAdmin',
          component: IndexPengumumanAdmin,
          children: [{
            path: '',
            name: 'MainPengumumanAdmin',
            component: MainPengumumanAdmin,
          }, {
            path: 'createpengumumanadmin',
            name: 'CreatePengumumanAdmin',
            component: CreatePengumumanAdmin,
          }],
        },
        {
          path: 'pengumumanuser',
          name: 'PengumumanUser',
          component: PengumumanUser,
        },
				],
			},
			],
		},
    {
			path: '*',
			name: 'Not Found',
			component: NotFound,
		},
  ],
});


router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('user')) {
      next();
    } else {
      next('/');
    }
	} else {
		next();
	}
});

export default router;
