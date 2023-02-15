<script>
import { store } from '../store.js';
import { cart } from '../cart.js';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import axios from 'axios';
import { createDOMCompilerError } from '@vue/compiler-dom';


export default {
    components: {
        AppHeader,
        AppFooter,
    },
    name: "SingleRestaurant",

    data() {
        return {
            store,
            cart,
            restaurant: [],
            loading: true,
            message: "",
            products: store.products
        }
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
    methods: {
        addProduct(plate) {
            if (this.products.includes(plate)) {
                plate.quantity = plate.quantity + 1
            } else {
                plate.quantity = 1
                this.products.unshift(plate)
            }
            cart.count = cart.count + 1;
        },
        getImagePath(path) {
            console.log(path)
            if (path) {
                return this.store.base_api_url + "storage/" + path;
            }
            return "src/assets/no-image-available.png";
        }

    },
    mounted() {
        if (localStorage.products) {
            this.products = JSON.parse(localStorage.products);
        }
        cart.count = cart.products.length
        const url = this.store.base_api_url + 'api/restaurants/' + this.$route.params.id
        console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.restaurant = response.data.results
                    console.log(this.restaurant)
                    this.loading = false
                } else {
                    this.message = "404 not found"
                }
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
    }
}
</script>

<template>

    <AppHeader />


    <div class="container p-3" v-if="!loading">

        <div class="row flex-column">

            <!-- <div class="col-6">
                <img :src="this.getImagePath(restaurant.restaurant_image)" alt="" class="img-fluid">
            </div> -->

            <div class="col-12">
                <div>

                    <h4 class="m-0">{{ restaurant.name }}</h4>

                    <p class="m-0"><strong>Contatti: </strong> {{ restaurant.phone }}</p>

                    <p class="m-0"><strong>Indirizzo: </strong> {{ restaurant.address }} </p>

                </div>
            </div>

            <div class="col-12">

                <ul v-if="restaurant.plates.length > 0">
                    <li v-for="plate in restaurant.plates">
                        {{ plate.name }}
                        <button class="btn btn-sm btn-danger" @click="this.addProduct(plate)">
                            Aggiungi
                        </button>
                    </li>
                </ul>

                <ul v-else>
                    <li>Non ci sono piatti disponibili per questo ristorante</li>
                </ul>

            </div>

        </div>

    </div>

    <div v-else>Caricamento</div>

    <AppFooter />

</template>

<style lang="scss">

</style>