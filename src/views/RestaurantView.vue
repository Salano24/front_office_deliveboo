<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: "RestaurantView",
    components: {
       
        AppHeader,
        AppFooter,
    },
}
</script>

<template>
     
            <AppHeader /> 

            <div class="bg_yellow position-relative">
                <div class="cucina d-flex">
                    <h3 class="light_orange">Cucina Italiana</h3>
                    <h3 class="light_orange"> > </h3>
                    <h3 class="text-light">Pizzeria Pacifici</h3>
                </div>

                <div class="menu d-flex position-absolute align-items-center">
                    <img src="../assets/logo-trasparente.png" alt="">
                    <ul class="d-flex">
                        <li class="menu_type">Antipasti</li>
                        <li class="menu_type">Pizze</li>
                        <li class="menu_type">Bibite</li>
                        <li class="menu_type">Desserts</li>
                    </ul>
                </div>
            </div>

            <div class="menu_main mt-5 pt-5">
                <div class="container mt-5">
                    <div class="row ">
                        <div class="col-4 ">
                          <div class="menu_card d-flex flex-column align-items-center pt-3 pb-3 ps-3 pe-3">
                            <img src="../assets/pizza.png" alt="">
                            <span id="red" class="fw-bolder">Margherita</span>
                            <span>Pomodoro, Mozzarella, Basilico</span>
                            <div class=" card_bottom d-flex justify-content-between">
                                <span class="price">€8</span>
                                <span class="kart"><i class="fa-solid fa-cart-shopping"></i></span>
                            </div>

                          </div> 
                            
                        </div>

                        <div class="col-4 ">
                          <div class="menu_card d-flex flex-column align-items-center pt-3 pb-3 ps-3 pe-3">
                            <img src="../assets/pizza.png" alt="">
                            <span id="red" class="fw-bolder">Margherita</span>
                            <span>Pomodoro, Mozzarella, Basilico</span>
                            <div class=" card_bottom d-flex justify-content-between">
                                <span class="price">€8</span>
                                <span class="kart"><i class="fa-solid fa-cart-shopping"></i></span>
                            </div>

                          </div> 
                            
                        </div>

                        <div class="col-4 ">
                          <div class="menu_card d-flex flex-column align-items-center pt-3 pb-3 ps-3 pe-3">
                            <img src="../assets/pizza.png" alt="">
                            <span id="red" class="fw-bolder">Margherita</span>
                            <span>Pomodoro, Mozzarella, Basilico</span>
                            <div class=" card_bottom d-flex justify-content-between">
                                <span class="price">€8</span>
                                <span class="kart"><i class="fa-solid fa-cart-shopping"></i></span>
                            </div>

                          </div> 
                            
                        </div>

                        <div class="col-4 ">
                          <div class="menu_card d-flex flex-column align-items-center pt-3 pb-3 ps-3 pe-3">
                            <img src="../assets/pizza.png" alt="">
                            <span id="red" class="fw-bolder">Margherita</span>
                            <span>Pomodoro, Mozzarella, Basilico</span>
                            <div class=" card_bottom d-flex justify-content-between">
                                <span class="price">€8</span>
                                <span class="kart"><i class="fa-solid fa-cart-shopping"></i></span>
                            </div>

                          </div> 
                            
                        </div>

                        <div class="col-4 ">
                          <div class="menu_card d-flex flex-column align-items-center pt-3 pb-3 ps-3 pe-3">
                            <img src="../assets/pizza.png" alt="">
                            <span id="red" class="fw-bolder">Margherita</span>
                            <span>Pomodoro, Mozzarella, Basilico</span>
                            <div class=" card_bottom d-flex justify-content-between">
                                <span class="price">€8</span>
                                <span class="kart"><i class="fa-solid fa-cart-shopping"></i></span>
                            </div>

                          </div> 
                            
                        </div>

                        <div class="col-4 ">
                          <div class="menu_card d-flex flex-column align-items-center pt-3 pb-3 ps-3 pe-3">
                            <img src="../assets/pizza.png" alt="">
                            <span id="red" class="fw-bolder">Margherita</span>
                            <span>Pomodoro, Mozzarella, Basilico</span>
                            <div class=" card_bottom d-flex justify-content-between">
                                <span class="price">€8</span>
                                <span class="kart"><i class="fa-solid fa-cart-shopping"></i></span>
                            </div>

                          </div> 
                            
                        </div>

                        

                      
                     
                    </div>
                </div>
            </div>

            <div class="navigator d-flex justify-content-center mb-5">
                <div class="pt-1 pb-1 ps-3 pe-3">1</div>
                <div class="pt-1 pb-1 ps-3 pe-3">2</div>
                <div class="pt-1 pb-1 ps-3 pe-3">3</div>
            </div>

            <AppFooter />
</template>

<style lang="scss">

    .bg_yellow{
        background-color: #ffbd59;
     

        .cucina{
            padding-top: 5rem;
            padding-left: 2rem;
            padding-bottom: 10rem;
            width: 35%;
            justify-content: space-between;
           
            .light_orange{
                color: #f6edda;
            }
        }

        .menu{
            width: 80%;
            background-color: #f6edda;
            padding: 1rem ;
            bottom: -30%;
            left:10% ;
            border-radius: 25px;

            img{
                width: 10rem;
            }

            .menu_type{
                color: #ffbd59;
                list-style: none;
                font-weight: 700;
                font-size: 1.5rem;
                margin-right: 1.5rem;
            }
            .menu_type:hover{
                color: #a53c28;
                text-decoration: underline;
            }
        }
    }

    .menu_card{
        border-radius: 25px;
        background-color: #f6edda;
        color: #a53c28;
        margin-bottom: 2rem;
       
        #red{
                color: #a53c28;
                font-size: 2rem;
                margin-top: 1rem;
                margin-bottom: 1rem;
            }

        img{
            width: 80%;
        }
        .card_bottom{
            width: 80%;
            margin-top: 1rem;
        }
    }

    .navigator{
        div{
            color: #a53c28;
            background-color: #f6edda;
            border: 1px solid #a53c28;
            font-size: 1.5rem;
        }
    }

   

</style>
