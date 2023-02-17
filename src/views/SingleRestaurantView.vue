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
            if (cart.products.filter(product => product.restaurant_id !== plate.restaurant_id).length > 0) {
                return console.log('Puoi ordinare da un solo ristorante per volta!')
            } else {
                if (this.products.includes(plate)) {
                    plate.quantity = plate.quantity + 1
                } else {
                    plate.quantity = 1
                    this.products.unshift(plate)
                }
                cart.count = cart.count + 1;
            }

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
    <div class="bg_yellow py-5" v-if="!loading">
        <div class="container">
            <div class="row">
                <div class="col-6 text-center">
                    <h1 class="mt-5 ">{{ restaurant.name }}</h1>
                    <p class="m-0"><strong>Contatti: </strong> +39 {{ restaurant.phone }}</p>

                    <p class="m-0"><strong>Indirizzo: </strong> {{ restaurant.address }} </p>
                </div>
                <div class="col-6">
                    <img :src="store.getImagePath(restaurant.restaurant_image)" alt="">
                </div>
            </div>

            <div class="red_line"></div>

            <div>

                <div class="container" v-if="restaurant.plates.length > 0">
                    <div class="row">
                        <div class="col-3" v-for="plate in restaurant.plates">
                            <div class='plate_card'>
                                <img :src="store.getImagePath(plate.plate_image)" alt="">
                                <h2>{{ plate.name }}</h2>
                                <p class="w-75">{{ plate.ingredients }}</p>
                                <div class="d-flex justify-content-between w-75 align-items-center">
                                    <span>€ {{ plate.price }}</span>
                                    <button class="add_kart btn" @click="this.addProduct(plate)">
                                        <i class="fa-solid fa-cart-shopping"></i>

                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

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
.bg_yellow {
    background-color: #ffbd59;

    img {
        height: 70%;
        margin-top: 1rem;
    }

    li {
        width: 25%;
        padding: 1rem 1rem 1rem 3rem;
        margin: 1rem;
        list-style: none;


    }

    .red_line {
        background-color: #a43c28;
        height: 5px;
        width: 100%;
    }

    .plate_card {
        margin-top: 1rem;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f6edda;
        color: #a43c28;
        height: 100%;
        margin-bottom: 2rem;

        img {
            width: 200px;
        }

        h2 {
            margin-top: 0.5rem;
        }

        div {
            font-size: 2rem;


            .add_kart {
                background-color: #f6edda;
                font-weight: bold;
                font-size: 2rem;
                color: #a43c28;

            }

            .add_kart:hover {
                color: #ffbd59;
            }
        }


    }
}
</style>