import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Recommend from '../pages/Home/Recommend'
import Hot from '../pages/Home/Hot'
import Search from '../pages/Home/Search'
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/recommend',
        component: Recommend,
        auth: true
      },
      {
        path: '/home/hot',
        component: Hot
      },
      {
        path: '/home/search',
        component: Search
      },
      {
        path: '/home',
        redirect: '/home/recommend'
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    redirect: '/home'
  }
]
export default routes;