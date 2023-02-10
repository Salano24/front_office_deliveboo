<script>
export default {
    name: "AppDownload",
}
</script>

<template>
<div class="container app">
    <div class="row">
        <div class="col-2">
            <h1>ORDINA <br> OVUNQUE <br> TU SIA CON</h1>
            <h2 class="green">DeliveBoo<span class="red">App</span></h2>
            <button class="btn_dark">Scarica</button>
        </div>

        <div class="col-2">
            <img src="../assets/Deliveboo-social.png" alt="">
        </div>
    </div>
</div>
</template>

<style lang="scss">

      .app{
            padding-top: 15rem;
        }
     .container{
            width: 50%;
            margin: auto;
            left: 15%;
            top: 60%;

           
         .row{
            display: flex;
            width: 100%;

            .col-2{
                width: calc(100% / 12 * 6 );
              

               h1{
                margin-bottom: 1rem;
                font-size: 3rem;
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
                width: 100%;
               }
            }
        }
    }
</style>