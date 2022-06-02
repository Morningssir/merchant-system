import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/login' },
        {
          path: '/administrator',
          component: '@/layouts/Administrator',
          routes: [
            {path: '/administrator', component: '@/pages/administrator/workspace'},
            {path: '/administrator/merchant', component: '@/pages/administrator/merchant'},
            {path: '/administrator/member', component: '@/pages/administrator/member'},
            {path: '/administrator/house', component: '@/pages/administrator/house'},
            {path: '/administrator/category', component: '@/pages/administrator/category'},
            {path: '/administrator/record', component: '@/pages/administrator/record'},
            {path: '/administrator/personal', component: '@/pages/administrator/personal'},

          ],
        },
        {
          path: '/user',
          component: '@/layouts/User',
          routes: [
            {path: '/user', component: '@/pages/user/workspace'},
            {path: '/user/personal', component: '@/pages/user/personal'},
            {path: '/user/merchant', component: '@/pages/user/merchant'},
          ],
        },
        
      ],
    },
  ],
  fastRefresh: {},
});
