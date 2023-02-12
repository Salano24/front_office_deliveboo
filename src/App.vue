<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from './components/AppJumbo.vue'
import AppCategory from './components/AppCategory.vue'
import AppReview from './components/AppReview.vue'
import AppDownload from './components/AppDownload.vue'
import AppJoinUs from './components/AppJoinUs.vue'
import AppFooter from './components/AppFooter.vue'

export default {
    components: {
        AppHeader,
        AppJumbo,
        AppCategory,
        AppReview,
        AppDownload,
        AppJoinUs,
        AppFooter
    }
}
</script>

<template>
    <AppHeader />
    <AppJumbo />
    <AppCategory />
    <AppReview />
    <AppDownload />
    <AppJoinUs />
    <AppFooter />
</template>



<style lang="scss">
@use './styles/general.scss';

</style>
