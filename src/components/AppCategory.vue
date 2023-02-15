<script>
import { store as store } from "../store.js";
import { cart as cart } from "../cart.js";
import axios from "axios";
export default {
  name: "AppCategory",
  components: {},
  data() {
    return {
      store,
      cart,
      products: [],
    };
  },
  methods: {},
  mounted() {
    store.getRestaurants(store.base_api_url + "api/restaurants");
  },
};

</script>

<template>
  <div class="category_title text-center py-5 px-5">
    <div class="top_title d-flex justify-content-center flex-wrap">
      <h1 class="lh-sm">Le nostre categorie</h1>
      <img class="ms-4" src="../assets/category_food.png" alt="hamburger" />
    </div>
    <h3 class="pt-md-4">Ciò che più ti piace, subito a casa tua</h3>
  </div>

  <div class="container-fluid bg-black m-auto p-0">
    <div class="row gx-0">
      <div class="col-12 col-sm-6 col-md-3 text_center pizza">
        <h2>PIZZA</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center hamburgher">
        <h2>HAMBURGER</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center indiano">
        <h2>INDIANO</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center insalata">
        <h2>VEGANO</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center messicano">
        <h2>MESSICANO</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center sushi">
        <h2>SUSHI</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center carne">
        <h2>CARNE</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center pasta">
        <h2>PASTA</h2>
      </div>
    </div>
  </div>

  <div class="search container">
    <div class="restaurant_type fs-6 text-uppercase">
      <div class="row mb-1 d-flex">
        <h1 class="lh-sm">I nostri ristoranti</h1>
        <div v-for="type in store.types" class="col-3">
          <input type="checkbox" name="types" v-model="store.selectedTypes" :value="type.name" :id="type.id" />
          <label for="types">{{ type.name }}</label>
        </div>
      </div>
    </div>
    <button class="btn btn-danger" @click="store.callApi">Filtra</button>
  </div>
  <!-- <input placeholder="Cerca un ristorante" type="search" id="restaurant_search" name="restaurant_search">
                <button><i class="fa-solid fa-magnifying-glass"></i></button> -->
  <div class="container" v-if="!store.loading && store.restaurants">
    <div class="row">

      <div v-for="restaurant in store.restaurants" class="col-6 gy-3 d-flex align-content-center">

        <div class="row">

          <div class="col-4 d-flex align-content-center flex-wrap">

            <img :src="store.getImagePath(restaurant.restaurant_image)" alt="" class="img-fluid p-3">

            <router-link class="btn btn_secondary col-12"
              :to="{ name: 'single-restaurant', params: { id: restaurant.id } }" aria-current="page">Dettaglio<span
                class="visually-hidden">(current)</span></router-link>

          </div>

          <div class="col-8 px-3 d-flex align-content-center flex-wrap">

            <div>

              <h4 class="m-0">{{ restaurant.name }}</h4>

              <p class="m-0"><strong>Contatti: </strong> {{ restaurant.phone }}</p>

              <p class="m-0"><strong>Indirizzo: </strong> {{ restaurant.address }} </p>

            </div>
          </div>

        </div>

      </div>
    </div>

    <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
      <ul class="pagination">
        <li class="page-item" v-if="store.results.prev_page_url" @click="prevPage(store.results.prev_page_url)">
          <a class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">{{ store.results.current_page }}</a>
        </li>

        <li class="page-item" v-if="store.results.next_page_url" @click="nextPage(store.results.next_page_url)">
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div v-else-if="store.restaurants === null">
    <h3>nessun ristorante corrisponde alla ricerca</h3>
  </div>

</template>

<style lang="scss" scoped>
.top_title {
  margin: 0 0 1rem 0;

  h1 {
    font-size: 50px;
  }

  img {
    width: 70px;
    height: fit-content;
  }
}

.container-fluid {
  .text_center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13rem;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }

  .pizza {
    background-image: url(../assets/pizza.png);
  }

  .hamburgher {
    background-image: url(../assets/hamburgher.png);
  }

  .indiano {
    background-image: url(../assets/indiano.png);
  }

  .insalata {
    background-image: url(../assets/insalata.png);
  }

  .messicano {
    background-image: url(../assets/messicano.png);
  }

  .sushi {
    background-image: url(../assets/sushi.png);
  }

  .carne {
    background-image: url(../assets/carne.png);
  }

  .pasta {
    background-image: url(../assets/pasta.png);
  }
}

.container .row img {
  object-fit: scale-down;
}

.btn_secondary {
  background-color: #f7af42;
  color: #ffffff;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 18%);

  &:hover {
    background-color: #FFBD59;
    border: 1px solid #FFBD59;
    color: #ffffff;
  }
}
</style>
