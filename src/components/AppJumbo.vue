<script>
export default {
    name: "AppHJumbo",
}
</script>

<template>
<div class="jumbo">
  <div class="container-xxl py-5">
    <div class="row g-0 h-75 m-auto">
        <div class="col-12 col-lg-9 text-center d-flex flex-column justify-content-center m-auto">
            <img class="img-fluid" src="../assets/vuoi_ordinare.png" alt="">
            <h2 class="fw-bold pt-4">Consegna veloce nella tua città</h2>
            <img class="delivery_icon mx-auto" src="../assets/delivery_icon.png" alt="">
        </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.jumbo{
    background-image: url(../assets/background.png);
  
    background-repeat: no-repeat;
    background-size: cover;
    img .img-fluid{
        object-fit:cover;
        max-width: 500px;
    }
    h2{
        color:#a43c28;
    }
    .delivery_icon{
        width: 50px;
    }
}

</style>