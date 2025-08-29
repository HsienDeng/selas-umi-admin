import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      { path: "/", redirect: "/home" },
      { path: "/home", name: "首页", component: "./Home" },
    ]
  },
  location: {
    pathname: '/',
  },
};
