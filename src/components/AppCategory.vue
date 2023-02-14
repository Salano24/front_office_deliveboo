<script>
import { store as store } from "../store.js";
import axios from "axios";
export default {
  name: "AppCategory",
  components: {},
  data() {
    return {
      store,
      products: [],
    };
  },
    // #region logica carrello
    watch: {
        products: {//viene costruito in questo modo perché é un array di oggetti
            handler(newProducts) {//viene costruito in questo modo perché é un array di oggetti
                //ogni volta che products viene modificato viene trasformato in stringa e aggiunto al localStorage
                localStorage.products = JSON.stringify(newProducts);
            },
            deep: true
        }
    },
    // #endregion logica carrello
  methods: {
        // #region logica carrello
        getPlates(call) {
            axios.get(call)
                .then(response => {
                    this.plates = response.data.results;
                    console.log(this.plates)
                    this.loading = false
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
                    this.loading = false
                })
        }, addProduct(plate) {
            this.products.unshift({
                id: plate.id,
                name: plate.name,
                restaurant_id: plate.restaurant_id,
            })
            console.log(this.products);
        }
        //    #endregion
    },
  mounted() {
    store.getRestaurants(store.base_api_url + "api/restaurants");
    if (localStorage.products) {
            this.products = JSON.parse(localStorage.products);
        }
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
          <input
            type="checkbox"
            name="types"
            v-model="store.selectedTypes"
            :value="type.name"
            :id="type.id"
          />
          <label for="types">{{ type.name }}</label>
        </div>
      </div>
    </div>
    <button class="btn btn-danger" @click="store.callApi">Filtra</button>
  </div>
  <!-- <input placeholder="Cerca un ristorante" type="search" id="restaurant_search" name="restaurant_search">
                <button><i class="fa-solid fa-magnifying-glass"></i></button> -->

  <div class="top_title" v-if="!store.loading && store.restaurants">
    <div class="row">
      <div v-for="restaurant in store.restaurants" class="col-4">
        <div v-if="restaurant">
          <div class="card">
            {{ restaurant.name }}
            {{ restaurant.address }}
            {{ restaurant.phone }}
          </div>
        </div>
      </div>
    </div>
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
</style>
