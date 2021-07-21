import Home from '../pages/home'
import About from '../pages/about'
import User from '../pages/user'
//import NoMatch from '../pages/noMatch'


const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes:[
      
    ]
  },
  {
    path: '/user',
    component: User
  },

]

export default routes

