<script>
import { store as store } from "../store.js";
import { cart as cart } from "../cart.js";

export default {
    name: "AppCartPreview",
    data() {
        return {
            store,
            cart,
            products: cart.products
        };
    },
}
</script>

<template>
    Descrizione carrello!
</template>

<style lang="scss" scoped>

</style>