<script>
import AppHeader from './components/AppHeader.vue'

export default {
    components: {
        AppHeader,
        AppJumbo,
        AppCategory,
        AppReview,
        AppDownload,
        AppJoinUs,
        AppFooter,
    },
    data() {
        return {
        }
    },
    methods() {
    }
}

</script>

<template>
    
        <router-view></router-view>
    
</template>



<style lang="scss">
@use './styles/general.scss';
</style>
