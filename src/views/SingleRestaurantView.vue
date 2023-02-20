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
            products: store.products,
            confirm: false,
            plates: []
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
                    this.confirm = true

                } else {
                    plate.quantity = 1
                    this.products.unshift(plate)
                    this.confirm = true
                }

            }

        }
    },
    mounted() {
        if (localStorage.products) {
            this.products = JSON.parse(localStorage.products);
        }
        const url = this.store.base_api_url + 'api/restaurants/' + this.$route.params.id
        console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.loading = false
                    this.restaurant = response.data.results
                    this.plates = response.data.plates
                    console.log(this.restaurant)
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
    <div class="background py-5" v-if="!loading">
        <div class="container-lg py-4">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="card border-0 shadow p-4 rounded-4">
                        <div class="row">
                            <div class="col-12 col-sm-4">
                                <img class="img-fluid" :src="store.getImagePath(restaurant.restaurant_image)" alt="">
                            </div>
                            <div class="col-12 col-sm-7 ms-auto text-start">
                                <h1 class="mb-4 lh-1 green_text text-uppercase">{{ restaurant.name }}</h1>
                                <p class="m-0"><strong>Contatti: </strong> +39 {{ restaurant.phone }}</p>
                                <p class="m-0"><strong>Indirizzo: </strong> {{ restaurant.address }} </p>
                                <div v-if="plates.length > 0">
                                    <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert"
                                        v-if="this.confirm">
                                        <strong>Piatto aggiunto al carrello</strong>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                            @click="this.confirm = false"></button>
                                    </div>
                                    <div class="plates overflow-auto">
                                        <div v-for="plate in restaurant.plates">
                                            <div class='pt-2'>
                                                <div class="row g-0 border-top py-3">

                                                    <div class="col-4 pe-3">
                                                        <img class="img-fluid" :src="store.getImagePath(plate.plate_image)"
                                                            alt="">
                                                    </div>
                                                    <div class="col-8 text-muted">
                                                        <h2>{{ plate.name }}</h2>
                                                        <p class="py-2">{{ plate.ingredients }}</p>
                                                        <div class="d-flex justify-content-between w-75 align-items-center">
                                                            <span class="fs-4 fw-bold">€ {{ plate.price }}</span>
                                                            <button class="add_cart btn" @click="this.addProduct(plate)">
                                                                <i class="fa-solid fa-cart-plus fa-2xl text-muted"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mt-5 text-muted " v-else>Non ci sono piatti disponibili per questo ristorante
                                </h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Caricamento</div>

    <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.background {
    background-color: #ffbd59;
    background-image: url(../assets/background.png);
}

li {
    width: 25%;
    padding: 1rem 1rem 1rem 3rem;
    margin: 1rem;
    list-style: none;
}

.plate_card {
    margin-top: 1rem;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6edda;
    color: $db_danger;
    height: 100%;
    margin-bottom: 2rem;


    h2 {
        margin-top: 0.5rem;
    }

    div {
        font-size: 2rem;
    }
}

.add_cart {
    &:hover {
        color: #ffbd59;
    }
}

.plates {
    max-height: 800px;
}

.plates::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.plates::-webkit-scrollbar-track {
    border: 1px solid rgb(182, 182, 182);
    border-radius: 10px;
}

/* Handle */
.plates::-webkit-scrollbar-thumb {
    background: #ffbd59;
    border-radius: 10px;
}

/* Handle on hover */
.plates::-webkit-scrollbar-thumb:hover {
    background: grey;
}
</style>