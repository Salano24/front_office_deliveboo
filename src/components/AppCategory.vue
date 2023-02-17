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
  methods: {
    prevPage(url) {
      this.store.getRestaurants(url);
    },
    nextPage(url) {
      this.store.getRestaurants(url);
    },
    simpleCall(url) {
      axios
        .get(url)
        .then((response) => {
          if (response.data.success) {
            store.restaurants = response.data.results;
            store.results = response.data.results;
            console.log(store.restaurants);
            this.loading = false;
          } else {
            this.$router.replace({ name: "not-found" });
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    scrollToBottom() {
      this.$refs["restaurants"].scrollIntoView({ behavior: "smooth" })
    }
  },
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
      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/pizza'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center pizza" style="cursor:pointer">
        <h2>PIZZA</h2>
      </div>
      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/cinese'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center hamburgher" style="cursor:pointer">
        <h2>CINESE</h2>
      </div>
      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/indiano'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center indiano" style="cursor:pointer">
        <h2>INDIANO</h2>
      </div>
      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/vegano'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center insalata" style="cursor:pointer">
        <h2>VEGANO</h2>
      </div>
      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/messicano'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center messicano" style="cursor:pointer">
        <h2>MESSICANO</h2>
      </div>

      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/giapponese'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center sushi" style="cursor:pointer">
        <h2>SUSHI</h2>

      </div>
      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/carne'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center carne" style="cursor:pointer">
        <h2>CARNE</h2>
      </div>
      <div @click="this.simpleCall(store.base_api_url + 'api/restaurants/types/pasta'), this.scrollToBottom()"
        class="col-12 col-sm-6 col-md-3 text_center pasta" style="cursor:pointer">
        <h2>PASTA</h2>
      </div>
    </div>
  </div>

  <div ref="restaurants" class="p-3" id="special"></div>

  <section id="restaurants">

    <div class="search container-fluid shadow-sm p-5">

      <div class="container restaurant_type fs-6">

        <div class="row">

          <h1 class="lh-sm text-center">I nostri ristoranti</h1>

          <h3 class="pt-md-4 text-center">Seleziona la tipologia che preferisci</h3>

          <div v-for="type in store.types" class="col-2 checkbox text-uppercase mt-5">

          

            <input type="checkbox" name="types" v-model="store.selectedTypes" :value="type.name" :id="type.id"
              class="me-2" />

            <label class="checkbox-text fw-bold" for="types">{{ type.name }}</label>

          </div>

          <button class="btn btn_danger col-4 mt-5 m-auto" @click="store.callApi()">Avvia ricerca</button>

          <p v-if="store.failed === true" class="text-center text-danger text-lowercase fst-italic ">Seleziona almeno
            una
            categoria</p>

        </div>

      </div>

    </div>


    <div class="container py-4" v-if="!store.loading && store.restaurants">
      <div class="row">

        <div v-for="restaurant in store.restaurants" class="col-6 p-3 d-flex align-content-center">

          
          <div class="card rounded-4 border-0 shadow">
              <div class="row gy-0 p-4">
              <div class="col-4 d-flex align-content-center flex-wrap">
                <img :src="store.getImagePath(restaurant.restaurant_image)" alt="" class="img-fluid p-3">

                <router-link class="btn btn_secondary col-12"
                  :to="{ name: 'single-restaurant', params: { id: restaurant.id } }" aria-current="page">Dettaglio<span
                  class="visually-hidden">(current)</span></router-link>

              </div>

                <div class="col-8 px-3 d-flex align-content-center flex-wrap">

                  <div class=" text-muted">

                    <h4 class="m-0 green_text text-uppercase fw-bold mb-2">{{ restaurant.name }}</h4>
                    <span class="fw-bold pe-2"><i class="fa-solid fa-utensils"></i> Categoria: </span>
                    <span class="pe-3" v-for="type in restaurant.types"><i class="fa-solid fa-hashtag"></i> {{ type.name }} </span>  
                      
                      <p class="m-0"><strong><i class="fa-solid fa-phone"></i> Contatti: </strong> {{ restaurant.phone }}</p>

                    <p class="m-0"><strong><i class="fa-solid fa-location-dot"></i> Indirizzo: </strong> {{ restaurant.address }} </p>

                  </div>

                </div>
            </div>

          </div>

        </div>
      </div>

      <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5"
        v-if="store.results.next_page_url || store.results.prev_page_url">
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

    <div v-else-if="store.restaurants === null" class="p-5">
      <h3 class="text-center">La ricerca non ha generato risultati</h3>

      <div class="mt-5 text-center">
        <button class="btn btn_danger" @click="store.getRestaurants(store.base_api_url + 'api/restaurants')">Torna a
          tutti i ristoranti</button>
      </div>

    </div>


  </section>

</template>

<style lang="scss" scoped>

#restaurants {
  .btn_danger {
    background-color: #A43C28;
    color: #ffffff;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 18%);

    &:hover {
      background-color: #b44933;
      color: #F6EDDA;
    }
  }


  hr {
    border: 3px solid #A43C28;
    opacity: 1;
    width: 90%;
    margin: auto;
  }
}

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
    background-image: url(../assets/chinese.jpg);
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


.checkbox-text {
  font-weight: 600;
  color: #A43C28;
}

</style>
