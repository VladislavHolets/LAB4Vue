<template>
    <div>

      <h1>{{film.title}}</h1>

      <h2>Characters in {{film.title}}</h2>
      <button v-for="url of film.characters" class="detail-button">
        <router-link :to="'/person/'+person(url).name">
          {{ person(url).name }}
        </router-link>
      </button>

      <h2>Planets in {{film.title}}</h2>
      <button v-for="url of film.planets" class="detail-button">
        <router-link :to="'/planet/'+planet(url).name">
          {{ planet(url).name }}
        </router-link>
      </button>

      <h2>Species in {{film.title}}</h2>
      <button v-for="url of film.species" class="detail-button">
        <router-link :to="'/specie/'+specie(url).name">
          {{ specie(url).name }}
        </router-link>
      </button>

      <h2>Starships in {{film.title}}</h2>
      <button v-for="url of film.starships" class="detail-button">
        <router-link :to="'/starship/'+starship(url).model">
          {{ starship(url).model }}
        </router-link>
      </button>

      <h2>Vehicles in {{film.title}}</h2>
      <button v-for="url of film.vehicles" class="detail-button">
        <router-link :to="'/vehicle/'+vehicle(url).name">
          {{ vehicle(url).name }}
        </router-link>
      </button>

    </div>
</template>

<script>
    export default {
        name: "Film",
      methods: {
        person(url) {
          return this.$store.getters.people.find(person => person.url === url);
        },
        starship(url) {
          return this.$store.getters.starships.find(starship => starship.url === url);
        },
        vehicle(url) {
          return this.$store.getters.vehicles.find(vehicle => vehicle.url === url);
        },
        planet(url) {
          return this.$store.getters.planets.find(planet => planet.url === url);
        },
        specie(url) {
          return this.$store.getters.species.find(specie => specie.url === url);
        }
      },
      computed: {
        film() {
          return this.$store.getters.films.find(specie => specie.episode_id == this.$route.params.id);
        },
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
