<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from './components/AppJumbo.vue'

export default {
    components: {
        AppHeader,
        AppJumbo,

    }
}
</script>

<template>
    <AppHeader />
    <AppJumbo />
</template>



<style lang="scss">
*{
    box-sizing: 0;
    padding: 0;
    margin: 0;
    font-family: 'League Spartan', sans-serif;
}

</style>
