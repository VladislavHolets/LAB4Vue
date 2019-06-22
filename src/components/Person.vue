<template>
  <div>
    <h1>{{ person.name }}</h1>
    <h2>Color: {{ person.skin_color }}</h2>
    <h2>Birth Year: {{ person.birth_year }}</h2>
    <h2>Gender: {{ person.gender }}</h2>
    <h2>Homeworld: {{ planet.name }}</h2>
    <h2>Specie: {{ specie(person.species[0]).name }}</h2>
    <h2>Films with {{ person.name }}</h2>
    <button v-for="url of person.films" class="detail-button">
      <router-link :to="'/film/'+film(url).episode_id">
        {{ film(url).title }}
      </router-link>
    </button>
    <h2>Starships visited by {{ person.name }}</h2>
    <button v-for="url of person.starships" class="detail-button">
      <router-link :to="'/starship/'+starship(url).model">
        {{ starship(url).model }}
      </router-link>
    </button>
    <h2>Vehicles driven by {{person.name}}</h2>
    <button v-for="url of person.vehicles" class="detail-button">
      <router-link :to="'/vehicle/'+vehicle(url).name">
        {{ vehicle(url).name }}
      </router-link>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Person",
    methods: {
      film(url) {
        return this.$store.getters.films.find(film => film.url === url);
      },
      starship(url) {
        return this.$store.getters.starships.find(starship => starship.url === url);
      },
      vehicle(url) {
        return this.$store.getters.vehicles.find(vehicle => vehicle.url === url);
      },
      specie(url) {
        return this.$store.getters.species.find(specie => specie.url === url);
      }

    },
    computed: {
      person() {
        return this.$store.getters.people.find(v => v.name == this.$route.params.name);
      },
      planet() {
        return this.$store.getters.planets.find(v => v.url === this.person.homeworld);
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
