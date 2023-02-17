<script>
import { store as store } from "../store.js";
import { cart as cart } from "../cart.js";
import braintree from 'braintree-web';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter
    },
    name: "AppCartPreview",
    data() {
        return {
            store,
            cart,
            products: cart.products,
            hostedFieldInstance: false,
            nonce: "",
            error: "",
            price: cart.productSum
        };
    },
    // #region logica carrello
    watch: {
        products: {//viene costruito in questo modo perché é un array di oggetti
            handler(newProducts) {//viene costruito in questo modo perché é un array di oggetti
                //ogni volta che products viene modificato viene trasformato in stringa e aggiunto al localStorage
                localStorage.products = JSON.stringify(newProducts);
                cart.products = this.products
                console.log('watch')
            },
            deep: true
        }
    }, methods: {
        payWithCreditCard() {
            this.error = "";
            this.nonce = "";
            this.price = cart.productSum()
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload);
                    this.nonce = payload.nonce
                    //quando siamo qua invochiamo la funzione che invia l'ordine
                })
                    .catch(err => {
                        console.error(err);
                        this.error = err.message;
                    })
            }
        }
    },
    mounted() {
        if (localStorage.products) {
            this.products = JSON.parse(localStorage.products);
        }
        cart.count = cart.products.length
        console.log(cart.products);

        braintree.client.create({
            authorization: "sandbox_q7z92y97_vtb2xgfs69b9ns8t"
        })
            .then(clientInstance => {
                let options = {
                    client: clientInstance,
                    styles: {
                        input: {
                            'font-size': '14px',
                            'font-family': 'Open Sans'
                        }
                    },
                    fields: {
                        number: {
                            selector: '#creditCardNumber',
                            placeholder: 'Inserisci numero di carta'
                        },
                        cvv: {
                            selector: '#cvv',
                            placeholder: 'Inserisci CVV'
                        },
                        expirationDate: {
                            selector: '#expireDate',
                            placeholder: '00 / 0000'
                        }
                    }
                }
                return braintree.hostedFields.create(options)
            })
            .then(hostedFieldInstance => {
                // Use hostedFieldInstance to send data to Braintree
                this.hostedFieldInstance = hostedFieldInstance;
            })
            .catch(err => {
            });
    },
}
</script>

<template>
    <AppHeader />
<div class="background py-5">
    <div v-if="cart.productSum()" class="container py-5">
        <div class="row gap-5 gy-0">
            <div class="col-12 col-lg-6">
                <div class="card box rounded-4 border-0 shadow  overflow-auto px-3 py-4">
                    <h2 class="fw-bold mb-0 green_text mb-4">Procedi al pagamento</h2>
                    <h3 class="fw-bold mb-0 text-muted mx-1">Il tuo ordine</h3>
                    <div v-for="product, index in cart.products" class="wrapper card border-0 p-3">
                        <div class="row justify-content-between hover-style">
                            <div class="sb-cover-frame d-flex py-2 col-5 col-sm-4">
                                <img :src="store.getImagePath(product.plate_image)" :alt="'img ' + product.name"
                                    class="img-fluid" />
                            </div>
                            <div class="py-2 col-7 col-sm-8 text-end d-flex flex-column justify-content-center">
                                <h4>{{ product.name }}</h4>

                                <div class="price">{{ product.price }} € </div>


                                <div class="quantity_input justify-content-end pt-3">
                                    <button class="bg-transparent btn" @click.stop="cart.removeProduct(index)"><i
                                            class="fa-solid fa-trash text-muted pe-3"></i></button>
                                    <div class="a minus text-white fw-bold" @click.stop="cart.changeQuantity(index, '-')">-
                                    </div>
                                    <span class="bg-white px-3">{{ product.quantity }}</span>
                                    <div class="a plus text-white fw-bold" @click.stop="cart.changeQuantity(index, '+')">+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 col-lg-5">
                <div class="card rounded-4 border-0 shadow px-3 py-4">
                    <div class="card bg-light">
                        <div class="card-header">Pagamento</div>
                        <div class="card-body">
                            <div class="alert alert-danger" v-if="error">
                                {{ error }}
                            </div>
                            <div class="alert alert-success" v-if="nonce">
                                Pagamento effettuato con successo!
                            </div>
                            <form>
                                <div class="form-group">
                                    <label>Numero carta di credito</label>
                                    <div id="creditCardNumber" class="form-control"></div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>Data di scadenza</label>
                                            <div id="expireDate" class="form-control"></div>
                                        </div>
                                        <div class="col-6">
                                            <label>CVV</label>
                                            <div id="cvv" class="form-control"></div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group">
                                    <label for="amount">Prezzo</label>
                                    <div class="input-group">
                                        <input disabled id="amount" :value="cart.productSum()" class="form-control"
                                            placeholder="Enter Amount">
                                        <div class="input-group-prepend"><span class="input-group-text">&euro;</span>
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-primary btn-block my-2" @click.prevent="payWithCreditCard">
                                    Paga con carta di credito
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="container py-5">
        <div class="row py-5">
            <div class="col-12">
                <div class="card  rounded-4 border-0 shadow px-3 py-5">
                    <router-link class="btn bg-white p-4" :to="{ name: 'home' }" aria-current="page">
                        <h2 class="text-muted fw-bold text-uppercase mb-3">Nessun prodotto nel carrello</h2>
                        <h2 class="text-muted mb-5">Puoi trovare nella pagina principale i migliori ristoranti!</h2>
                        <h2 class="to_home"> Torna alla home <i class="fa-solid fa-burger"></i></h2>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
<AppFooter />
</template>

<style lang="scss" scoped>
.background {
    background-color: #ffbd59;
    background-image: url(../assets/background.png);
}
a,
.hover-style {
    background-color: #f6edda;
    text-decoration: none;
    color: #a43c28;
    font-size: 1.1rem;

    &:hover {
        color: #8ea61d;
    }
}

.quantity_input {
    display: flex;
    align-items: center;

    .plus,
    .minus {
        background-color: #f5c332;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: none;
        transition: 0.3s ease-in-out;
    }
}

.box {
    max-height: 600px;
}

/* width */
.box::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.box::-webkit-scrollbar-track {
    border: 1px solid rgb(182, 182, 182);
    border-radius: 10px;
}

/* Handle */
.box::-webkit-scrollbar-thumb {
    background: #ffbd59;
    border-radius: 10px;
}

/* Handle on hover */
.box::-webkit-scrollbar-thumb:hover {
    background: grey;
}

.cart_footer {
    .view_order {
        background-color: #ffbd59;

        &:hover {
            background-color: #8ea61d;
        }
    }

    .pay {
        background-color: #a43c28;

        &:hover {
            background-color: #8ea61d;
        }
    }
}

.to_home {
    color: #8ea61d;
    font-weight: bold;
    font-size: 50px;

    &:hover {
        color: #a43c28;
    }
}
</style>