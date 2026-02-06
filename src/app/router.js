import { createRouter, createWebHashHistory } from 'vue-router';
import Login from './pages/Login.vue';
import Campaigns from './pages/Campaigns.vue';
import Campaign from './pages/Campaign.vue';
import Users from './pages/Users.vue';
import User from './pages/User.vue';
import Statistics from './pages/Statistics.vue';
import Ads from './pages/Ads.vue';
import Sites from './pages/Sites.vue';
import Payments from './pages/Payments.vue';

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', name: 'Sign in', component: Login },
		{ path: '/campaigns', name: 'Campaigns', component: Campaigns },
		{ path: '/campaign/:id', name: 'Campaign', component: Campaign },
		{ path: '/users', name: 'Users', component: Users },
		{ path: '/user/:id', name: 'User', component: User },
		{ path: '/statistics', name: 'Statistics', component: Statistics },
		{ path: '/ads', name: 'Ads', component: Ads },
		{ path: '/sites', name: 'Sites', component: Sites },
		{ path: '/payments', name: 'Payments', component: Payments }
	]
});
