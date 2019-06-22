<template>
  <div>
    <h1>{{ starship.name }}</h1>
    <h2>Model: {{ starship.model }}</h2>
    <h2>Class: {{ starship.starship_class }}</h2>
    <h2>Manufacturer: {{ starship.manufacturer }}</h2>
    <h2>Films with {{ starship.model }}</h2>
    <button v-for="url of starship.films" class="detail-button">
      <router-link :to="'/film/'+film(url).episode_id">
        {{ film(url).title }}
      </router-link>
    </button>
    <h2>Pilots of {{ starship.model }}</h2>
    <button v-for="url of starship.pilots" class="detail-button">
     // <router-link :to="'/person/'+person(url).name">
        {{ person(url).name }}
      </router-link>
    </button>

  </div>
</template>

<script>
  export default {
    name: "Starship",
    methods: {
      person(url) {
        return this.$store.getters.people.find(person => person.url === url);
      },
      film(url) {
        return this.$store.getters.films.find(film => film.url === url);
      }
    },
    computed: {
      starship() {
        return this.$store.getters.starships.find(v => v.model == this.$route.params.name);
      }
    }
  }
</script>

<style scoped>
  .detail-button {
    align-self: flex-end;
    width: 24%;
    background-color: #44a767;
    border-radius: 8px;
    border: 1px solid #18a029;
    cursor: pointer;
    color: #ffffff;
    font-size: 14px;
    padding: 8px 8px;
    margin: 4px;
    text-transform: none;
    text-transform: uppercase;
    text-decoration: none;

  }
</style>
