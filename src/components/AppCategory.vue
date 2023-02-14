<script>
export default {
  name: "AppCategory",
};
</script>

<template>
  <div class="category_title text-center py-5 px-5">
    <div class="top_title d-flex justify-content-center flex-wrap">
      <h1 class="lh-sm">Le nostre categorie</h1>
      <img class="ms-4" src="../assets/category_food.png" alt="hamburger" />
    </div>
    <h3 class="pt-md-4">Ciò che più ti piace, subito a casa tua</h3>
  </div>

  <div class="container-fluid bg-black m-auto p-0">
    <div class="row gx-0">
      <div class="col-12 col-sm-6 col-md-3 text_center pizza">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="">
            <h2 class="mb-0" id="flush-headingOne">
              <button
                class="border-0 bg-transparent w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h2 class="text-white">PIZZA</h2>
              </button>
            </h2>
          </div>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body pb-0">
              <div class="content overflow-auto">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugit natus laborum perferendis
                blanditiis inventore ipsam harum unde amet recusandae! Quam
                laboriosam dignissimos animi possimus velit, magnam repudiandae
                neque ab nesciunt beatae magni quaerat obcaecati labore dolor
                quo. Ea itaque debitis exercitationem harum magnam porro, vero,
                sint nesciunt ut dolorem libero?
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-3 text_center hamburgher">
        <h2>HAMBURGER</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center indiano">
        <h2>INDIANO</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center insalata">
        <h2>VEGANO</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center messicano">
        <h2>MESSICANO</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center sushi">
        <h2>SUSHI</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center carne">
        <h2>CARNE</h2>
      </div>
      <div class="col-12 col-sm-6 col-md-3 text_center pasta">
        <h2>PASTA</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top_title {
  margin: 0 0 1rem 0;
  h1 {
    font-size: 50px;
  }
  img {
    width: 70px;
    height: fit-content;
  }
}

.container-fluid {
  .text_center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13rem;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }

  .pizza {
    background-image: url(../assets/pizza.png);
  }
  .hamburgher {
    background-image: url(../assets/hamburgher.png);
  }
  .indiano {
    background-image: url(../assets/indiano.png);
  }
  .insalata {
    background-image: url(../assets/insalata.png);
  }
  .messicano {
    background-image: url(../assets/messicano.png);
  }
  .sushi {
    background-image: url(../assets/sushi.png);
  }
  .carne {
    background-image: url(../assets/carne.png);
  }
  .pasta {
    background-image: url(../assets/pasta.png);
  }
}
.content {
  height: 110px;
}
.content::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.content::-webkit-scrollbar-track {
  border: 1px solid rgb(77, 77, 77);
  border-radius: 10px;
}

/* Handle */
.content::-webkit-scrollbar-thumb {
  background: #ffbd59;
  border-radius: 10px;
}

/* Handle on hover */
.content::-webkit-scrollbar-thumb:hover {
  background: grey;
}
.accordion h2 {
  line-height: 0;
}
</style>
