import Vue from 'vue'
import Router from 'vue-router'
import film from '@/components/Film';
import person from '@/components/Person';
import starship from '@/components/Starship';
import specie from '@/components/Specie';
import vehicle from '@/components/Vehicle';
import planet from '@/components/Planet';
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/film/:id', component: film},
    {path: '/person/:name', component: person},
    {path: '/starship/:name', component: starship},
    {path: '/specie/:id', component: specie},
    {path: '/vehicle/:id', component: vehicle},
    {path: '/planet/:id', component: planet},
  ]
})
