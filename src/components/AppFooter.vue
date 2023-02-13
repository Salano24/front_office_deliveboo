<script>
export default {
    name: "AppFooter",
}
</script>

<template>
    <footer>
        <div class="container-fluid">
            <div class="container py-5">
                <div class="title d-flex justify-content-center align-items-center flex-wrap">
                    <h1 class="fs-1 lh-sm text-center">Seguici sui social</h1>
                    <img class="ms-4" src="../assets/people.png" alt="people">
                </div>
                <!-- title -->

                <div class="row justify-content-center pt-5">
                    <img src="../assets/facebook.png" alt="facebook logo">
                    <img src="../assets/instagram.png" alt="intagram logo">
                    <img src="../assets/twitter.png" alt="twitter logo">
                </div>
                <!-- social logos -->

                <div class="row pt-5">
                    <div class="col-12 col-md-6 my-auto">
                        <div class="logo w-75 d-flex
                        align-items-center justify-content-center text-decoration-none m-auto pb-5 pb-md-0" href="#"><img class="logo img-fluid w-75"
                        src="../assets/logo-trasparente.png" alt=""><span class="fw-bold fs-1">DeliveBoo</span></div>
                    </div>
                    <div class="col-6 col-md-3">
                      <h5 class="fw-bold  ps-2">Categorie</h5>
                        <ul>
                            <li><a href="">Italiano</a></li>
                            <li><a href="">Internazionale</a></li>
                            <li><a href="">Cinese</a></li>
                            <li><a href="">Giapponese</a></li>
                            <li><a href="">Messicano</a></li>
                            <li><a href="">Indiano</a></li>
                            <li><a href="">Pesce</a></li>
                            <li><a href="">Carne</a></li>
                            <li><a href="">Pizza</a></li>
                            <li><a href="">Altro</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-3">
                          <h5 class="fw-bold ps-2">Social</h5>
                        <ul>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div class="bottom-footer text-center">
                    <hr class="text-white">
                    <small>&copy; Boolean Careers - Team 7 | 2023</small>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
   .container-fluid{
    background-color: #383531;
    color: #FFFFFF;

    img{
        max-width: 80px;
    }

    span{
        color: #8ea61d;
    }

    a{
        color: #FFFFFF;
        text-decoration: none;
        &:hover{
            color: #ffde59;
        }
    }
   }
</style>