<script>
import { store as store } from "../store.js";
import { cart as cart } from "../cart.js";
import { assert } from "@vue/compiler-core";
export default {
  name: "AppCartPreview",
  data() {
    return {
      store,
      cart,
      products: cart.products
    };
  },
  // #region logica carrello
  watch: {
    products: {
      handler(newProducts) {
        localStorage.products = JSON.stringify(newProducts);
        cart.products = this.products
      },
      deep: true
    }
  }, methods: {},
  mounted() {
    if (localStorage.products) {
      this.products = JSON.parse(localStorage.products);
    }

  },
};
</script>
<template>
  <div class="cart_preview" @click.prevent="store.showOffcanvasMenu">
    <!-- carrello si chiude quanto premo fuori dal carrello  -->
    <div class="cart_right p-3" @click.stop="none">
      <div class="cart_preview_header d-flex">
        <button type="button" class="btn-close me-3" @click="this.store.showOffcanvasMenu();" aria-label="Close">
        </button>
        <div class="cart_body d-flex flex-column pb-3 me-2 min-vh-100">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h3 class="title_frame mb-2 fw-bold">Il tuo ordine</h3>
          </div>
          <div class="cart_content">
            <div v-for="product, index in cart.products" class="wrapper">
              <div class="row d-flex flex-column hover-style g-0 mb-2  px-3">
                <div class="sb-cover-frame d-flex justify-content-between gap-1">
                  <div class="py-2 col-3">
                    <img class="img-fluid" :src="store.getImagePath(product.plate_image)" :alt="'img ' + product.name" />
                  </div>
                  <div class="py-2 col-9  ps-3">
                    <span class="sb-card-title fw-bold">{{ product.name }}</span>
                    <div class="price fw-bold fs-6 text-center">{{ product.price }} € </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="form-row ms-auto py-2">
                    <div class="form-group mb-0">
                      <div class="input-group bg-white justify-content-center mb-0">
                        <div class="number-input border-0">

                          <button class="a minus" @click.stop="cart.changeQuantity(index, '-')">-</button>
                          <span class="bg-white px-3">{{ product.quantity }}</span>
                          <button class="a plus" @click.stop="cart.changeQuantity(index, '+')">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button @click.stop="cart.removeProduct(index)" class="btn trash"><i
                      class="fa-solid fa-trash text-muted"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div class="cart_footer pt-4">
            <div class="d-flex justify-content-end">
              <button @click.stop="cart.emptyCart" class="btn btn-secondary btn-sm">Svuota tutto</button>
            </div>
            <h3 class="total mt-5 text-muted fw-bold d-inline pe-2">Totale:</h3>
            <h4 class="text-danger fw-bold d-inline">{{ cart.productSum() }}<span>€</span></h4>

            <div class="px-1 pt-3">
              <router-link class="btn pay bg_yellow text-white shadow border-0 rounded-pill" :to="{ name: 'checkout' }"
                aria-current="page">
                <i class="fa-solid fa-credit-card"></i>
                <span class="fs-6 ps-1">Vai al pagamento</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.cart_preview {
  transition: 0.5;
  background-color: #0000004f;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 66px;
  right: 0;
  bottom: 0;
  z-index: 9000;
  height: 100vh;

  .cart_right {
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    z-index: 9000;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    outline: 0;
    transition: transform 0.3s ease-in-out;

    .bg_yellow {
      background-color: #ffbd59;
    }

    img {
      width: 80px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    .title_frame {
      color: #8ea61d;
    }

    .cart_content {
      height: 40%;
      min-height: 50%;
      overflow: auto;

      a,
      .hover-style {
        background-color: #f6edda;
        text-decoration: none;
        color: $db_danger;
        font-size: 1.1rem;

        &:hover {
          color: #8ea61d;
        }
      }
    }

    /* width */
    .cart_content::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    .cart_content::-webkit-scrollbar-track {
      border: 1px solid rgb(182, 182, 182);
      border-radius: 10px;
    }

    /* Handle */
    .cart_content::-webkit-scrollbar-thumb {
      background: #ffbd59;
      border-radius: 10px;
    }

    /* Handle on hover */
    .cart_content::-webkit-scrollbar-thumb:hover {
      background: grey;
    }

    .cart_footer {
      min-height: 100px;

      .pay {
        &:hover {
          background-color: #8ea61d;
        }
      }
    }


  }
}

.number-input {
  border: none;
  display: inline-flex;
}

.number-input,
.number-input * {
  box-sizing: border-box;
}

.number-input button {
  outline: none;
  -webkit-appearance: none;
  background-color: #ffbd59;
  border: none;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  cursor: pointer;
  margin: 0;
  position: relative;
  padding: 0;
}

button {
  color: white
}
</style>