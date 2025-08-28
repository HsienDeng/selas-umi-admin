const router = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: '登录',
    layout: false,
    component: './Login',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
];

export default router;
