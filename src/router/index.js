import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dice from '../views/Dice.vue'
import Faq from '../views/FAQ.vue'
import Calculator from '../views/Calculator.vue'
import Clock from '../views/Clock.vue'
import Counters from '../views/Counters.vue'
import Counter from '../components/Counter.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/Dice',
    name: 'Dice',
    component: Dice
  }, {
    path: '/FAQ',
    name: 'Faq',
    component: Faq
  }, {
    path: '/Calculator',
    name: 'Calculator',
    component: Calculator
   }, {
    path: '/Clock',
    name: 'Clock',
    component: Clock
  }, {
    path: '/Counters',
    name: 'Counters',
    component: Counters
  }, {
    path: '/Counter',
    name: 'counter',
    component: Counter
  }
]

const router = new VueRouter({
  routes
})

export default router
