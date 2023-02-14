<script>
import { store as store } from "../store.js";
export default {
    name: "AppCategory",
    components: {

    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        store.getRestaurants(store.base_api_url + 'api/restaurants')
        //store.getRestaurants(store.base_api_url + 'api/restaurants/types/' + store.queryString + 'italiano')
    }
}
</script>

<template>
    <div class="category_title text-center py-5 px-5">
        <div class="top_title d-flex justify-content-center flex-wrap">
            <h1 class="lh-sm">Le nostre categorie</h1>
            <img class="ms-4" src="../assets/category_food.png" alt="hamburger">
        </div>
        <h3 class="pt-md-4">Ciò che più ti piace, subito a casa tua</h3>
    </div>

    <div class="container-fluid bg-black m-auto p-0">
        <div class="row gx-0">
            <div class="col-12 col-sm-6 col-md-3 text_center pizza">
                <h2>PIZZA</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-3 text_center hamburgher">
                <h2>HAMBURGER</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-3 text_center indiano">
                <h2>INDIANO</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-3 text_center insalata">
                <h2>VEGANO</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-3 text_center messicano">
                <h2>MESSICANO</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-3 text_center sushi">
                <h2>SUSHI</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-3 text_center carne">
                <h2>CARNE</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-3 text_center pasta">
                <h2>PASTA</h2>
            </div>
        </div>
    </div>
    <h1 class="lh-sm">I nostri ristoranti</h1>
    <div class="top_title" v-if="store.restaurants.data && !store.loading">
        <div class="row">
            <div v-for="restaurant in store.restaurants.data" class="col-4">
                <div class="card">
                    {{ restaurant.name }}
                    {{ restaurant.address }}
                    {{ restaurant.phone }}
                </div>
            </div>
        </div>
    </div>
    <div class="top_title" v-if="store.restaurants && !store.loading">
        <div class="row">
            <div v-for="restaurant in store.restaurants" class="col-4">
                <div v-if="restaurant">
                    <div class="card">
                        {{ restaurant.name }}
                        {{ restaurant.address }}
                        {{ restaurant.phone }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.top_title {
    margin: 0 0 1rem 0;

    h1 {
        font-size: 50px;
    }

    img {
        width: 70px;
        height: fit-content;
    }
}


.container-fluid {
    .text_center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 13rem;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
    }

    .pizza {
        background-image: url(../assets/pizza.png);

    }

    .hamburgher {
        background-image: url(../assets/hamburgher.png);

    }

    .indiano {
        background-image: url(../assets/indiano.png);

    }

    .insalata {
        background-image: url(../assets/insalata.png);

    }

    .messicano {
        background-image: url(../assets/messicano.png);

    }

    .sushi {
        background-image: url(../assets/sushi.png);

    }

    .carne {
        background-image: url(../assets/carne.png);

    }

    .pasta {
        background-image: url(../assets/pasta.png);

    }

}
</style>