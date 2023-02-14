<script>
export default {
    name: "AppDownload",
}
</script>

<template>
<div class="container app mt-5 mt-sm-0">
    <div class="row mt-5 mt-sm-0">
        <div class="col-12 col-md-7 col-lg-6 ps-lg-5 pb-5 text-center text-sm-start">
            <h1 class="mt-5 mt-sm-0 lh-sm mx-auto mx-sm-0">Ordina<br>ovunque<br>tu sia con</h1>
            <h2 class="green fw-bold">DeliveBoo<span class="red">App</span></h2>
            <button class="btn_dark">Scarica</button>
        </div>

        <div class="col-12 col-md-5 col-lg-6">
            <img class="img-fluid h-100 mt-md-0" src="../assets/Deliveboo-social.png" alt="">
        </div>
    </div>
</div>
</template>

<style lang="scss" scope>

.app{
    padding-top: 15rem;
}
.container{
    
           
    .row{           
        h1{  
            margin-bottom: 1rem;
        }

        h2{
            margin-bottom: 2.5rem;
            color: #8ea61d;
            font-size: 2.5rem;

            span{
                    color: #a43c28;
                }
        }

        button{
            border-radius: 6px;
            border: 0;
            color: white;
            background-color: black;
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
        }
img{
    object-fit: cover;
}
        }
    }
</style>