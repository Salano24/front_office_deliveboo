<script>
import { store as store } from "../store.js";
import { cart as cart } from "../cart.js";
import braintree from 'braintree-web';

export default {
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
                            placeholder: 'Enter Credit Card'
                        },
                        cvv: {
                            selector: '#cvv',
                            placeholder: 'Enter CVV'
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
    <div class="container">
        <div v-if="cart.count > 0">
            <div v-for="product, index in cart.products" class="wrapper">
                <div class="d-flex flex-column gap-3 mb-2 hover-style px-2">
                    <div class="sb-cover-frame d-flex ">
                        <div class="py-2 col-4">
                            <img :src="store.getImagePath(product.plate_image)" :alt="'img ' + product.name" />
                        </div>
                        <div class="py-2 col-6">
                            <h4 class="sb-card-title">{{ product.name }}</h4>
                            <h4 class="sb-card-title">{{ product.id }}</h4>
                            <div class="price">{{ product.price }} € </div>
                        </div>
                    </div>
                    <div class="quantity_input mb-4">
                        <div class="a minus" @click.stop="cart.changeQuantity(index, '-')">-</div>
                        {{ product.quantity }}
                        <div class="a plus" @click.stop="cart.changeQuantity(index, '+')">+</div>
                    </div>
                    <button class="btn btn-danger" @click.stop="cart.removeProduct(index)"> Rimuovi </button>
                </div>
            </div>
            Prezzo totale: {{ cart.productSum() }}
        </div>
        <div v-else class="m-5">
            <router-link class="btn btn_secondary p-4" :to="{ name: 'home' }" aria-current="page">
                <h2>Ancora nessun
                    prodotto nel carrello, puoi trovare nella pagina principale i migliori ristoranti!</h2>
                <h1 class="h2"> Torna alla HOME!</h1>
            </router-link>
        </div>
    </div>











    <div class="container">
        <div class="col-6 offset-3">
            <div class="card bg-light">
                <div class="card-header">Payment Information</div>
                <div class="card-body">
                    <div class="alert alert-danger" v-if="error">
                        {{ error }}
                    </div>
                    <div class="alert alert-success" v-if="nonce">
                        Successfully generated nonce.
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="amount">Prezzo</label>
                            <div class="input-group">
                                <input disabled id="amount" :value="cart.productSum()" class="form-control"
                                    placeholder="Enter Amount">
                                <div class="input-group-prepend"><span class="input-group-text">&euro;</span></div>
                            </div>
                        </div>
                        <hr />
                        <div class="form-group">
                            <label>Credit Card Number</label>
                            <div id="creditCardNumber" class="form-control"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Expire Date</label>
                                    <div id="expireDate" class="form-control"></div>
                                </div>
                                <div class="col-6">
                                    <label>CVV</label>
                                    <div id="cvv" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block" @click.prevent="payWithCreditCard">Pay with Credit
                            Card
                        </button>
                    </form>
                </div>
            </div>

        </div>
</div>
</template>

<style lang="scss" scoped>
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


/* width */
.cart_content::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.cart_content::-webkit-scrollbar-track {
    border: 1px solid rgb(182, 182, 182);
    border-radius: 10px;
}

/* Handle */
.cart_content::-webkit-scrollbar-thumb {
    background: #ffbd59;
    border-radius: 10px;
}

/* Handle on hover */
.cart_content::-webkit-scrollbar-thumb:hover {
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
</style>