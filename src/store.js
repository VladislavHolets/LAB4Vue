
import Vue from 'vue'
import Vuex from 'vuex'
import film from './components/Film'


Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    films: [],
    people: [],
    planets: [],
    species: [],
    vehicles: [],
    starships: [],
  },
  getters:{
    films: state => state.films,
    people: state => state.people,
    planets: state => state.planets,
    species: state => state.species,
    vehicles: state => state.vehicles,
    starships: state => state.starships,
  },
  actions:{
    set: (context, data) => context.commit('set', data),
    append: (context, data) => context.commit('append', data)

  },
  mutations:{
    set: (state, [key, value]) => state[key] = value,
    append: (state, [key, value]) => state[key] = state[key].concat(value)
  },
})
