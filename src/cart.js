import { reactive } from "vue";
import axios from "axios";
import { store as store } from "./store.js";

export const cart = reactive({
    loading: true,
    products: [],
    count: null,
    // addProduct(plate) {
    //     this.products.unshift(plate)
    //     console.log('aggiunto il piatto all\' array di prodotti in cart.js')

    // },
});
//aggiungere chiave quantitá all oggetto piatto nel carello la quale verra modificata successivamente
// eliminare un elemento dal carrello 
// aggiungere la quantitá //solo nella sezione checkout
// aggiungere il check di tipo esiste gia questo piatto nel carrello 
// oppure check di tipo questo piatto é di un'altro ristorante



/*
tutto cio che si riferisce al carrello si deve trovare dentro i file scritti sotto E BASTA!

- cart.js
- SingleRestaurantView.vue
- AppCartPrewiew.vue
 */

//eliminare tutta la logica riferita al carrello da AppHeader // fatto


//AppCartPreview //fatto
// import { cart as cart } from "../cart.js";
// import { assert } from "@vue/compiler-core";

// export default {
//   name: "AppCartPreview",
//   data() {
//     return {
//       store,
//       cart
//     };
//   },
//   // #region logica carrello
//   // #endregion logica carrello
//   mounted() {
//     if (localStorage.products) {
//       this.productsOrder = JSON.parse(localStorage.products);
//     }
//   },













//AppCategory //fatto
 // #region logica carrello
//  getPlates(call) {
//   axios.get(call)
//       .then(response => {
//           this.plates = response.data.results;
//           console.log(this.plates)
//           this.loading = false
//       })
//       .catch(error => {
//           console.error(error)
//           this.error = error.message
//           this.loading = false
//       })
// }, addProduct(plate) {
//   cart.products.unshift(plate)
//   console.log('cambiato local storage')
//   console.log(cart.products);
// }

// dentro mouted 
//  #region logica carrello

// if (localStorage.products) {
//   cart.products = JSON.parse(localStorage.products);
// }
// #endregion logica carrello
//    #endregion
/* <div class="top_title" v-if="true">
<div class="container">
    <div class="row">
        <div v-for="plate in this.plates" class="col-3">
            <div class="card">
                nome:<div>{{ plate.name }}</div>
                id: <div>{{ plate.id }}</div>
                restaurant_id:<div>{{ plate.restaurant_id }}</div>
                <button @click="this.addProduct(plate)">+</button>
            </div>
        </div>
    </div>
</div>
</div> */