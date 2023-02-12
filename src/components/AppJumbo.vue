<script>
export default {
    name: "AppHJumbo",
}
</script>

<template>
<div class="jumbo w-100"></div>
</template>

<style lang="scss" scoped>
.jumbo{
    background-image: url(../assets/jumbo.png);
    width: 100vw;
    aspect-ratio: 16 / 8;
    
    background-repeat: no-repeat;
    background-size: cover;
}
</style>