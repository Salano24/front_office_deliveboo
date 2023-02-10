<script>
export default {
    name: "AppCategory",
}
</script>

<template>
<div class="category_title">
    <h1>LE NOSTRE CATEGORIE </h1>
    <h3>Ciò che più ti piace, subito a casa tua</h3>
</div>

<div class="container-100">
    <div class="row">
        <div class="col-3 text_center pizza"><h2>PIZZA</h2></div>
        <div class="col-3 text_center hamburgher"><h2>HAMBURGER</h2></div>
        <div class="col-3 text_center indiano"><h2>INDIANO</h2></div>
        <div class="col-3 text_center insalata"><h2>VEGANO</h2></div>
        <div class="col-3 text_center messicano"><h2>MESSICANO</h2></div>
        <div class="col-3 text_center sushi"><h2>SUSHI</h2></div>
        <div class="col-3 text_center carne"><h2>CARNE</h2></div>
        <div class="col-3 text_center pasta"><h2>PASTA</h2></div>
    </div>
</div>
</template>

<style lang="scss">
    .category_title{
       text-align: center;
       margin: 4rem 0;

       h1{
        font-size: 3.5rem;
        margin-bottom: 2rem;
        
       }

       h3{
        font-weight: 100;
       }
    }

    
.container-100{
    width: 100%;

    .row{
        display: flex;
        width: 100%;
        flex-wrap: wrap;

        .col-3{
            width: calc(100% / 12 * 3);
        }
        .text_center{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 13rem;
            background-repeat: no-repeat;
            background-size: cover;
            color:white ;
        }

        .pizza{
            background-image: url(../assets/pizza.png);
            
        }
        .hamburgher{
            background-image: url(../assets/hamburgher.png);
            
        }
        .indiano{
            background-image: url(../assets/indiano.png);
            
        }
        .insalata{
            background-image: url(../assets/insalata.png);
            
        }
        .messicano{
            background-image: url(../assets/messicano.png);
            
        }
        .sushi{
            background-image: url(../assets/sushi.png);
            
        }
        .carne{
            background-image: url(../assets/carne.png);
            
        }
        .pasta{
            background-image: url(../assets/pasta.png);
            
        }
    }

}
    
</style>