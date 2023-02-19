<script>
import AppCartPreview from "./AppCartPreview.vue";
import { store as store } from "../store.js";
import { cart as cart } from "../cart.js";

export default {
  name: "AppHeader",
  components: {
    AppCartPreview,
  },
  data() {
    return {
      store,
      cart
    };
  },
  methods: {
  },
  mounted() {
    store.getTypes(store.base_api_url + "api/types");
  },
};
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-sm shadow">
    <div class="container-fluid d-flex gap-sm-5">

      <router-link class="logo w-sm-75 d-flex align-items-center text-decoration-none" :to="{ name: 'home' }"
        aria-current="page">

        <img class="img-fluid" src="../assets/logo.png" alt="" />
        <span class="d-none d-sm-inline fw-bold fs-4">DeliveBoo</span>

      </router-link>

      <!-- <div class="search w-50">
                                                                                                                                                                                                                <div class="restaurant_type fs-6 w-75 text-uppercase">
                                                                                                                                                                                                                  <div v-for="type in store.types" class="mb-1 d-flex">
                                                                                                                                                                                                                    <input type="checkbox" name="types" v-model="store.selectedTypes" :value="type.name" :id="type.id">
                                                                                                                                                                                                                    <label for="types">{{ type.name }}</label>
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                  <button class="btn btn-danger" @click="store.callApi">Filtra</button>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                              <input placeholder="Cerca un ristorante" type="search" id="restaurant_search" name="restaurant_search">
                                                                                                                                                                                                                        <button><i class="fa-solid fa-magnifying-glass"></i></button> -->

      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto text-end gap-3">
          <li class="nav-itemhead_user">
            <a href="http://127.0.0.1:8000/login">Accedi</a>
          </li>

          <li class="nav-item">
            <a href="http://127.0.0.1:8000/register">Registrati</a>
          </li>
          <li class="nav-item cart">
            <button class="cart_icon pe-2 border-0 bg-white position-relative" type=" button"
              @click.prevent="this.store.showOffcanvasMenu()">
              <i class="fa-solid fa-cart-shopping"></i>
              <div v-show="cart.productSum()" class="cart_badge"></div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- cart_preview -->
  <div v-show="this.store.showMenu">
    <AppCartPreview />
  </div>
<!-- //cart_preview --></template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.container-fluid {
  max-width: 1800px;
}

nav {
  background-color: #ffffff;

  .logo {
    img {
      max-height: 50px;
    }

    span {
      color: #8ea61d;
    }
  }

  a {
    text-decoration: none;
    color: $db_danger;
    font-size: 1.1rem;

    .cart {
      font-size: 1.3rem;
    }

    &:hover {
      color: #8ea61d;
    }
  }

  .cart_icon {
    color: $db_danger;

    &:hover {
      color: #8ea61d;
    }
  }
}

.search {
  max-width: 130px;
}

.cart_badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: $db_danger;
  border-radius: 50%;
  width: 6px;
  aspect-ratio: 1/1;
}

/*
    input{
        height: 60%;
        border:2px solid #8ea61d ;
        border-radius: 25px;
        padding: 0.5rem ;
        padding-right: 6rem ;
       
    }
    
    button{
        border: 0;
        background-color: #f6edda;
        color:#92959c ;
        margin-left: 1rem;
        font-size: 2rem;
    }

} */

.restaurant_type {
  border: 0;
  color: $db_danger;
  font-weight: bold;
  background-color: #ffffff;

  &:hover {
    color: #8ea61d;

    option {
      color: $db_danger;
      background-color: #ffffff;

      &:hover {
        background-color: #ffbd59;
      }
    }
  }

  option {
    text-transform: lowercase;
  }
}

.navbar-collapse {
  flex-grow: unset;
}
</style>
