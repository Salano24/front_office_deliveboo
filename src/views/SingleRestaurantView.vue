<script>
import { store } from '../store.js';
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

import axios from 'axios';


export default {
    components: {
        AppHeader,
        AppFooter,
    },
    name: "SingleRestaurant",

    data() {
        return {
            store,
            restaurant: [],
            loading: true,
            message: ""
        }
    },

    methods: {
        getImagePath(path) {
            console.log(path)
            if (path) {
                return this.store.base_api_url + "storage/" + path;
            }
            return "src/assets/no-image-available.png";
        }

    },
    mounted() {
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
                    <li v-for="plate in restaurant.plates">{{ plate.name }}</li>
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