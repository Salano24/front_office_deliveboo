<script>
import { store  } from '../store.js';
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'


export default {
    components: {
        AppHeader,
        AppFooter,
    },
    name: "SingleRestaurant",
    
    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <AppHeader />

    
    <h1 class="my-3">{{ restaurant.name }}</h1>


    <AppFooter/>

</template>

<style lang="scss">

</style>