<script>
import AppCartPreview from './AppCartPreview.vue'

export default {
    name: "AppHeader",
    components: {
        AppCartPreview
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
                        <a href=""><button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Cart</button><AppCartPreview /></a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
   
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

</style>