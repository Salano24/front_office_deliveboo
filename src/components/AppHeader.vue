<script>
import AppCartPreview from './AppCartPreview.vue'

export default {
    name: "AppHeader",
    data(){
    return {
      showMenu: false
    }
  },
  methods: {
    showOffcanvasMenu(){
      this.showMenu ? this.showMenu = false : this.showMenu = true;
    }
  }
}
</script>

<template>

<nav class="navbar sticky-top navbar-expand-sm shadow">
        <div class="container-fluid d-flex gap-sm-5">
            <a class="logo w-sm-75 d-flex
             align-items-center text-decoration-none" href="#"><img class="img-fluid"
                    src="../assets/logo.png" alt=""><span class="d-none d-sm-inline fw-bold fs-4">DeliveBoo</span></a>

            <div class="search w-50">
                <select class="restaurant_type fs-6 w-75 text-uppercase" >
                    <option value="" selected disabled>cucina</option>
                    <option >Italiano</option>
                    <option>Internazionale</option>
                    <option >Cinese</option>
                    <option >Giapponese</option>
                    <option >Messicano</option>
                    <option >Indiano</option>         
                    <option >Pesce</option>
                    <option >Carne</option>
                    <option>Pizza</option>
                    <option>Vegano</option>
                    <option>Altro</option>
                </select>    
                
                <!-- <input placeholder="Cerca un ristorante" type="search" id="restaurant_search" name="restaurant_search">
                <button><i class="fa-solid fa-magnifying-glass"></i></button> -->

            </div>
           
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ms-auto text-end gap-3">
                    <li class="nav-itemhead_user">
                        <a href="">Accedi</a>
                    </li>

                    <li class="nav-item">
                       <a href="">Registrati</a>
                    </li>
                    <li class="nav-item cart">
                        <button class="cart_icon border-0 bg-white" type="button" @click.prevent="showOffcanvasMenu()"><i class="fa-solid fa-cart-shopping"></i></button>
                    </li>

                </ul>
            </div>
          
        </div>
</nav>
<!-- cart_preview -->
    <div v-show="showMenu === true">

        <div class="cart_preview">
            <div class="cart_right p-4">
                <div class="cart_preview_header d-flex">
                    <button type="button" class="btn-close me-4" @click.prevent="showOffcanvasMenu()" aria-label="Close"></button>
                    <div class="cart_body pb-3">
                        
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h4 class="title_frame mb-0">Il tuo ordine</h4>
                                <div class="square px-2 py-1"><i class="fa-solid fa-utensils text-white"></i></div>
                            </div>
                        <div class="cart_content overflow-auto">
                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/plate1.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->

                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/hambuerger.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->
                            
                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/plate1.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->

                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/hambuerger.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->
                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/plate1.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->

                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/hambuerger.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->
                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/plate1.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->

                            <!-- order -->
                            <a href="#" class="d-flex gap-3 mb-2">
                                <div class="sb-cover-frame">
                                    <img src="../assets/hambuerger.jpg" alt="product">
                                </div>
                                <div class="sb-card-tp py-2 pe-2">
                                    <h4 class="sb-card-title">Insalata</h4>
                                    <div class="price">6.50 €</div>
                                </div>
                            </a>
                            <div class="quantity_input mb-4">
                                <div class="plus">-</div>
                                <input type="number" value="1" min="1" max="10">
                                <div class="minus">+</div>
                            </div>
                            <!-- //order -->
                            
                        </div>

                            <div class="cart_footer border-top py-3">
                                <!-- button -->
                                <a href="#" class="view_order btn rounded-0 text-white me-2">
                                    <span>Visualizza</span>
                                </a>
                                <!-- button end -->

                                <!-- button -->
                                <a href="#" class="pay btn rounded-0 text-white">
                                    <span>Pagamento</span>
                                </a>
                                <!-- button end -->

                                <h3>Totale</h3>
                                <h4>34.00 €</h4>
                            </div>
                            <!-- //cart_footer -->
                    </div>
                </div>

            </div>
        </div>

    
    </div>
      <!-- //cart_preview -->
</template>

<style lang="scss" scoped>
.container-fluid{
    max-width: 1800px;
}
nav{
    background-color: #FFFFFF;
    .logo{
        img{
                max-height: 50px;
            }
        span{
            color: #8ea61d;
        }    
    }
   a{
        text-decoration: none;
        color:#a43c28;
        font-size: 1.1rem;
        .cart{
            font-size: 1.3rem;
           } 
        &:hover{
                color: #8ea61d;
            }
}
.cart_icon{
    color:#a43c28;
    &:hover{
                color: #8ea61d;
            }
}
}

 .search{
    max-width: 130px;
 }
/*
    input{
        height: 60%;
        border:2px solid #8ea61d ;
        border-radius: 25px;
        padding: 0.5rem ;
        padding-right: 6rem ;
       
    }
    
    button{
        border: 0;
        background-color: #f6edda;
        color:#92959c ;
        margin-left: 1rem;
        font-size: 2rem;
    }

} */

.restaurant_type{
    border: 0;
    color: #a43c28;
    font-weight: bold;
    background-color: #FFFFFF;
    &:hover{
                color: #8ea61d;
                option{
                    color: #a43c28;
                    background-color: #FFFFFF;
                    &:hover{
                        background-color: #ffbd59;
                    }
                }
            }
            option{
                text-transform: lowercase;
            }
}
.navbar-collapse {
flex-grow: unset;
}
    .cart_preview {
        transition: 0.5;
    background-color: #0000004f;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    z-index: 1000;
.cart_right{
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    outline: 0;
    transition: transform .3s ease-in-out;

    .square{
        background-color: #ffbd59;
    }
    img{
        width: 80px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
    .title_frame{
        color: #8ea61d;
    }
    .cart_content{
        height: 40%;
         a{
            background-color:#F6EDDA;
            text-decoration: none;
            color:#a43c28;
            font-size: 1.1rem;

        &:hover{
                color: #8ea61d;
            }
        }
        .quantity_input{
            display: flex;
            align-items: center;
            .plus, .minus{
               
                background-color: #F5C332;
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border: none;
                transition: 0.3s ease-in-out;
            }
        }
    }
   .cart_footer{

        .view_order{
            background-color: #ffbd59;
            &:hover{
                background-color: #8ea61d;
            }
        }
        .pay{
            background-color:#a43c28;
            &:hover{
                background-color: #8ea61d;
            }
        }

   }
}
}


</style>