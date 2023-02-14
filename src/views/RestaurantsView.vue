<script>
import { store  } from '../store.js';
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'


export default {
    components: {
        AppHeader,
        AppFooter,
    },
    name: "Restaurants",
    
    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <!-- <AppHeader /> -->
<div class="our_restaurants">
    <div class=" container text-center">
         <h1 class="">I nostri ristoranti</h1>
    
         <div class="top_title" v-if="store.restaurants.data && !store.loading">
    <div class="row">
    
        <div v-for="restaurant in store.restaurants" class=" col-4">
            <div v-if="restaurant">
                <div class=" restaurant_card">
<!-- <img :src=" store.getImage(restaurant.restaurant_image) " alt="">-->   
    <img src="../assets/hamburgher.png" alt="">        
    <h3 class="mt-3">{{ restaurant.name }}</h3> 


                </div>
            </div>
        </div>
    </div>
</div>

<div class="top_title" v-if="store.restaurants && !store.loading">
    <div class="row">
    
        <div v-for="restaurant in store.restaurants" class=" col-4">
            <div v-if="restaurant">
                <div class=" restaurant_card">
<!-- <img :src=" store.getImage(restaurant.restaurant_image) " alt="">-->   
    <img src="../assets/hamburgher.png" alt="">        
    <h3 class="mt-3">{{ restaurant.name }}</h3> 
    <router-link :to="{ name: 'single-restaurant', params: { id: restaurant.id } }" class="btn btn-primary">
                    Più informazioni
                </router-link>


                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</div>

    
  

    <AppFooter />
</template>

<style lang="scss">
    .our_restaurants{
        background-color: #ffbd59;
        h1{
            
            color: #a53c28;
        }
        .restaurant_card{
            background-color: #f6edda;
            margin-bottom: 2rem;
            border: 2px solid #a53c28;
            padding: 2rem;
            border-radius: 25%;

            img{
                max-width: 100%;
            }
            h3{
                color: #a53c28;
            }
        }
    }

</style>
