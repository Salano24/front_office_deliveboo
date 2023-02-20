<script>
import { store as store } from "../store.js";
import { router } from "../router.js";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import axios from "axios";
export default {
    components: {
        AppHeader,
        AppFooter
    },
    name: "AppCartPreview",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container p-5">
        <div class="alert alert-success text-center p-5 m-5" role="alert">
            <strong>Ordine effettuato con successo!</strong>

            <router-link class="to_home text-decoration-none" :to="{ name: 'home' }" aria-current="page">
                <h2 class="to_home pt-5"> Torna alla home <i class="fa-solid fa-burger"></i> </h2>
            </router-link>

        </div>
    </div>
    <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.alert {
    height: 40vh;

    strong {
        font-size: 3rem;
    }

    .to_home {
        color: #0f5132;
    }

}
</style>