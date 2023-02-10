<script>
export default {
    name: "AppReview",
}
</script>

<template>
    <div class="review_title">
        <h1>DICONO DI NOI</h1>
        <div class="container">
            <div class="row">
                <div class="col_3">
                    <div class="card">
                        <div class="card_top">
                            <img src="../assets/uomo1.png" alt="">
                            <h3>Tommaso <br> Baldanzi</h3>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat accusantium ea at laudantium autem sequi animi consequatur fugit voluptate?
                        </div>
                        <div class="card_star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>
                    </div>
                </div><div class="col_3">
                    <div class="card">
                        <div class="card_top">
                            <img src="../assets/donna1.png" alt="">
                            <h3>Sofia <br> Preti</h3>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat accusantium ea at laudantium autem sequi animi consequatur fugit voluptate?
                        </div>
                        <div class="card_star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div><div class="col_3">
                    <div class="card">
                        <div class="card_top">
                            <img src="../assets/uomo2.png" alt="">
                            <h3>Gabriele <br> Nardella</h3>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat accusantium ea at laudantium autem sequi animi consequatur fugit voluptate?
                        </div>
                        <div class="card_star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                           
                        </div>
                    </div>
                </div><div class="col_3">
                    <div class="card">
                        <div class="card_top">
                            <img src="../assets/donna2.png" alt="">
                            <h3>Carolina <br> Capuano</h3>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat accusantium ea at laudantium autem sequi animi consequatur fugit voluptate?
                        </div>
                        <div class="card_star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .review_title{
        background-color: #ffbd59;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 10rem;
        position: relative;

        h1{
            font-size: 3.5rem;
        }

        .container{
            width: 70%;
            margin: auto;
            position: absolute;
            left: 15%;
            top: 60%;

           
         .row{
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;

            .col_3{
                width: calc(100% / 12 * 3 - 21px);
               padding: 7px;
                
                .card{
                background-color: white;
                border-radius:45px;
                box-shadow: 0px 5px 8px 2px #888888;

                .card_top{
                    padding:1rem ;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    img{
                        border-radius: 50%;
                        height: 3rem;
                    }
                    
                }

                .card_text{
                    padding-bottom: 1rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
                .card_star{
                    padding-bottom: 1rem;
                    color: #ffde59;
                    font-size: 1.5rem;
                }
                }
            }
         }
        }
        
    }
    
</style>