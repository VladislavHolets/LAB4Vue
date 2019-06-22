<template>
  <div>
<button v-for="film in films" class="title-button">
  <router-link :to="'/film/'+film.episode_id">{{film.title}}</router-link>
  </button>
<router-view>
</router-view>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'App',
  methods: {
    ...mapActions(["set","append"])
  },
  computed:{
    ...mapGetters(['films'])
  },
  beforeMount() {
    this.axios.get('https://swapi.co/api/').then(async r => {
      let roots = [];
      for (let root in r.data) {
        roots.push(this.axios.get(r.data[root]));
      }
      await this.axios.all(roots).then(async root => {
        for (let resp of root) {
          let section = resp.config.url.replace('https://swapi.co/api/', '').slice(0, -1);
          this.append([section, resp.data.results]);
          let count = Math.ceil((resp.data.count - 10) / 10);
          for (let i = 0; i < count; i++) {
            this.axios.get(resp.config.url+'?page='+(i + 2)).then(r => {
              this.append([section, r.data.results]);
            });
          }
        }
      })
    });
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title-button {
  align-self: flex-end;
  width: 99.5%;
  background-color: #44a767;
  border-radius: 8px;
  border: 1px solid #18a029;
  cursor: pointer;
  color: #ffffff;
  font-size: 25px;
  padding: 8px 8px;
  margin: 4px;
  text-transform: none;
  text-transform: uppercase;
  text-decoration: none;

}
</style>
