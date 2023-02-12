<script>
export default {
    name: "AppReview",
}
</script>

<template>
    <div class="review">
        <div class="category_title d-flex justify-content-center flex-wrap text-center py-5 px-5">
            <h1 class="lh-sm">Dicono di noi</h1>
            <img class="ms-4 mb-sm-0 pt-3" src="../assets/megafono.png" alt="megafono">
        </div>

        <div class="container">
            <div class="row gx-0 gy-4 mx-0 gx-sm-5">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div class="card">
                        <div class="card_top">
                            <img src="../assets/uomo1.png" alt="">
                            <h5>Tommaso <br> Baldanzi</h5>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div class="card_star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>
                    </div>
                </div>
                
                <div class="col-12 col-sm-6 col-lg-4  col-xl-3">
                    <div class="card">
                        <div class="card_top">
                            <img class="img-fluid" src="../assets/donna1.png" alt="">
                            <h5>Sofia <br> Preti</h5>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div class="card_star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                
                <div class="d-none d-lg-block col-lg-4 col-xl-3">
                    <div class="card">
                        <div class="card_top">
                            <img class="img-fluid" src="../assets/uomo2.png" alt="">
                            <h5>Gabriele <br> Nardella</h5>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div class="card_star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                           
                        </div>
                    </div>
                </div>
                
                <div class="d-none d-xl-block col-xl-3">
                    <div class="card">
                        <div class="card_top">
                            <img class="img-fluid" src="../assets/donna2.png" alt="">
                            <h5>Carolina <br> Capuano</h5>
                        </div>
                        <div class="card_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

<style lang="scss" scoped>
    .review{
        background-color: #ffbd59;
        position: relative;

        .category_title{
            img{
                width: 70px;
                height: fit-content;
                padding-bottom: 7rem;
                margin-bottom: 5rem;
            }
        }

    }

        .container{
            width: 80%;
            margin: auto;
            position: absolute;
            left: 50%;
            top: 70%;
            transform: translateX(-50%);

           
         .row{
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
                
                .card{
                background-color: white;
                border-radius:30px;
                box-shadow: 0px 3px 5px 0px #adadad;

                .card_top{
                    padding:1rem ;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    img{
                        border-radius: 50%;
                        height: 3rem;
                    }
                    h5{
                        padding-left: 10px;
                    }
                    
                }

                .card_text{
                padding: 1rem 2rem 0 2rem;
                }
                .card_star{
                    text-align: center;
                    padding-bottom: 1rem;
                    color: #ffde59;
                    font-size: 1.5rem;
                }
                }
            }
         }
        
    
</style>