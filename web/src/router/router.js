import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Main = ()  => import('@/views/Main');
const Home = ()  => import('@/views/home/Home');
const Article = ()  => import('@/views/Article');
const Heroes = ()  => import('@/views/Heroes');
const Strategy = ()  => import('@/views/strategy/Strategy');
const Match = ()  => import('@/views/match/Match');

const router = new VueRouter ({
  routes: [
    {path: '/', name: 'main', component: Main, 
      children: [
        {path: '/', name: 'home', component: Home }, 
        {path: '/articles/:id',name: 'articles', component: Article,props: true },
        {path: '/strategy', component: Strategy }, 
        {path: '/match', component: Match }, 
      ]
    }, 
    {path: '/heroes/:id',name: 'heroes', component: Heroes,props: true },


    
  ]
})

export default router