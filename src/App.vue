<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from './components/AppJumbo.vue'
import AppCategory from './components/AppCategory.vue'
import AppReview from './components/AppReview.vue'
import AppDownload from './components/AppDownload.vue'

export default {
    components: {
        AppHeader,
        AppJumbo,
        AppCategory,
        AppReview,
        AppDownload,

    }
}
</script>

<template>
    <AppHeader />
    <AppJumbo />
    <AppCategory />
    <AppReview />
    <AppDownload />
</template>



<style lang="scss">
@use './styles/general.scss';
/* *{
    box-sizing: 0;
    padding: 0;
    margin: 0;
    font-family: 'League Spartan', sans-serif;
} */

</style>
