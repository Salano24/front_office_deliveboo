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
    products: {//viene costruito in questo modo perché é un array di oggetti
      handler(newProducts) {//viene costruito in questo modo perché é un array di oggetti
        //ogni volta che products viene modificato viene trasformato in stringa e aggiunto al localStorage
        localStorage.products = JSON.stringify(newProducts);
        cart.products = this.products
        console.log('watch')
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.products) {
      cart.products = JSON.parse(localStorage.products);
    }
  },
};
</script>

<template>
  <div class="cart_preview">
    <div class="cart_right p-3">
      <div class="cart_preview_header d-flex">
        <button type="button" class="btn-close me-3" @click="this.store.showOffcanvasMenu();" aria-label="Close">
        </button>
        <div class="cart_body pb-3 me-2">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h4 class="title_frame mb-0">Il tuo ordine</h4>
            <div class="square px-2 py-1">
              <router-link class="btn btn_secondary col-12" :to="{ name: 'checkout' }" aria-current="page">
                <i class="fa-solid fa-utensils text-white"></i>
              </router-link>
              <router-link class="btn btn_secondary col-12 text-white" :to="{ name: 'checkout' }" aria-current="page">
                Procedi al pagamento
              </router-link>
            </div>
          </div>
          <div class="cart_content">
            <!-- #region order (sotto) -->
            <div v-for="product in cart.products" class="wrapper">
              <div class="d-flex flex-column gap-3 mb-2 hover-style px-2">
                <div class="sb-cover-frame d-flex ">
                  <div class="py-2 col-4">
                    <img :src="store.getImagePath(product.plate_image)" :alt="'img ' + product.name" />
                  </div>
                  <div class="py-2 col-6">
                    <h4 class="sb-card-title">{{ product.name }}</h4>
                    <h4 class="sb-card-title">{{ product.id }}</h4>
                    <div class="price">{{ product.price }} € </div>
                  </div>
                </div>
                <div class="quantity_input mb-4">
                  <div class="plus">-</div>
                  <input type="number" value="1" min="1" max="10" />
                  <div class="minus">+</div>
                </div>
              </div>

            </div>
            <!-- #endregion order -->
          </div>

          <div class="cart_footer border-top py-3">
            <div class="buttons mb-2">
              <a href="#" class="view_order btn rounded-0 text-white me-2">
                <span>Visualizza</span>
              </a>

              <a href="#" class="pay btn rounded-0 text-white">
                <span>Pagamento</span>
              </a>
            </div>
            <!-- //buttons -->
            <div class="total">
              <h3>Totale</h3>
              <h4>34.00 €</h4>
            </div>
          </div>
          <!-- //cart_footer -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart_preview {
  transition: 0.5;
  background-color: #0000004f;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  z-index: 9000;

  .cart_right {
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    z-index: 9000;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    outline: 0;
    transition: transform 0.3s ease-in-out;

    .square {
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
      overflow: auto;

      a,
      .hover-style {
        background-color: #f6edda;
        text-decoration: none;
        color: #a43c28;
        font-size: 1.1rem;

        &:hover {
          color: #8ea61d;
        }
      }

      .quantity_input {
        display: flex;
        align-items: center;

        .plus,
        .minus {
          background-color: #f5c332;
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: none;
          transition: 0.3s ease-in-out;
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
      .view_order {
        background-color: #ffbd59;

        &:hover {
          background-color: #8ea61d;
        }
      }

      .pay {
        background-color: #a43c28;

        &:hover {
          background-color: #8ea61d;
        }
      }
    }
  }
}
</style>
