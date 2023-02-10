<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/2x2_logo.png" alt="">
            <span>DeliveBoo</span>

        </div>
        <div class="search">
              <select class="restaurant_type" >
                <option value="" selected disabled> CUCINA</option>
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
              
              <input placeholder="Cerca un ristorante" type="search" id="restaurant_search" name="restaurant_search">
              <button><i class="fa-solid fa-magnifying-glass"></i></button>

        </div>
        <div class="head_user">
            <a href="#">Login</a>
            <a href="#">Registrati</a>
            <a href="#"><i class="cart fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>

   
</template>

<style lang="scss" >
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f6edda;
    padding-left: 4rem;
    padding-right: 4rem;

    .logo{
        display: flex;
        align-items: center;
        img{
                width: 20%;
            }
        span{
            color: #8ea61d;
            font-size: 2rem;
            font-weight: bold;
        }    
    }
   
}

.search{
    width: 20%;
    display: flex;
    justify-content: space-around;
    select{
        font-size: 1.2rem;
    }

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

}

.restaurant_type{
    border: 0;
    color: #a43c28;
    font-weight: bold;
    background-color: #f6edda;
    margin-right: 1rem;
    
}

.head_user{
    a{
        text-decoration: none;
        color: black;
        margin-left: 2rem;
        font-size: 1.1rem;
        .cart{
            color: #a43c28;
            font-size: 1.3rem;
        }
    }
}
</style>