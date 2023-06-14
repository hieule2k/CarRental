import routesConfig from '../config/routes';

import SidebarLayout from '../layout/sidebarLayout';
import DefaultLayoutWithoutSlider from '../layout/defaultLayoutWithoutSlider';

import Cars from '../pages/cars';
import Home from '../pages/home';
import CarDetails from '../pages/carDetails';
import Cart from '../pages/cart';
import About from '../pages/about';
import Contact from '../pages/contact';
import Posts from '../pages/posts';
import SinglePostPage from '../pages/singlePostPage';
import EditPostPage from '../pages/editPostPage';
import AddPostPage from '../pages/addPostPage';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.cars, component: Cars, layout: SidebarLayout },
  {
    path: routesConfig.carDetails,
    component: CarDetails,
    layout: DefaultLayoutWithoutSlider,
  },
  {
    path: routesConfig.cart,
    component: Cart,
    layout: DefaultLayoutWithoutSlider,
  },
  { path: routesConfig.about, component: About },
  {
    path: routesConfig.contact,
    component: Contact,
    layout: DefaultLayoutWithoutSlider,
  },
  {
    path: routesConfig.posts,
    component: Posts,
    layout: DefaultLayoutWithoutSlider,
  },
  {
    path: routesConfig.singlePostPage,
    component: SinglePostPage,
    layout: DefaultLayoutWithoutSlider,
  },
  {
    path: routesConfig.editPostPage,
    component: EditPostPage,
    layout: DefaultLayoutWithoutSlider,
  },
  {
    path: routesConfig.addPostPage,
    component: AddPostPage,
    layout: DefaultLayoutWithoutSlider,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
