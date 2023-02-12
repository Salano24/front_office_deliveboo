<script>
export default {
    name: "AppJoinUs",
}
</script>

<template>
<div class="container-fluid px-0">

        <div class="row gx-0">
            <div class="d-none d-md-block col-md-6">
                <img class="rider img-fluid h-100" src="../assets/rider.png" alt="rider">
            </div>
            <!-- visibile solo per smarthphone e sm tablet-->

            <div class="col-12 col-md-6 px-lg-5 d-flex align-items-center">
                <div class="container title py-5">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-12 col-xxl-5 text-center text-xxl-start">
                               <h1 class="lh-sm mx-auto ">Lavora <br> con noi</h1>
                        </div>
                        <div class="bike_box col-4 col-xxl-3 text-center text-xxl-start">
                            <img class="bike" src="../assets/bike.png" alt="bike">
                        </div>
                        <p class="pt-5 px-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, saepe corporis! Corporis dolorem incidunt eligendi enim libero eius totam qui! Eveniet ex voluptatum magni sit, non, molestiae aliquid repellendus libero, esse eum nulla quibusdam possimus adipisci! Voluptates quos dolorum exercitationem, maxime repellendus recusandae explicabo assumenda repellat dolorem quas veritatis iusto!</p>
                    </div>
                </div>
            </div>

            <div class="col-12 d-md-none col-md-5">
                <img class="img-fluid w-100" src="../assets/rider.png" alt="rider">
            </div>
        </div>


</div>
</template>

<style lang="scss" scoped>
.container-fluid{
    background-color: #FFFAEF;
    .col-7{
        padding: 10rem;
    }
    .rider{
        object-fit: cover;
    } 
        .bike{
        width: 70%;
    }
    
}
</style>