<script>
import { store as store } from "../store.js";
import { cart as cart } from "../cart.js";
import braintree from 'braintree-web';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import { router } from "../router.js";
import axios from "axios";
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
            price: cart.productSum,
            payLoading: false,
            full_name: '',
            email: '',
            description: '',
            phone: '',
            address: '',
            form_info: false
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
            this.payLoading = true
            this.error = "";
            this.nonce = "";
            this.price = cart.productSum()
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload);
                    this.nonce = payload.nonce

                })
                    .catch(err => {
                        console.error(err);
                        this.error = err.message;
                    })
            }
            this.payLoading = false
            this.$router.push({ name: "home" })
        },
        sendForm() {
            this.payLoading = true;
            this.errors = {};
            const data = {
                full_name: this.full_name,
                email: this.email,
                description: this.description,
                phone: this.phone,
                address: this.address,
                cart: JSON.stringify(cart.products),
                price: cart.productSum()
            }
            // console.log(data);
            axios.post(`${this.store.base_api_url}api/order`, data).then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.form_info = true
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
                } else {
                    this.errors = response.data.errors;
                }
                this.payLoading = false;
            });
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
                                        <div class="a minus text-white fw-bold"
                                            @click.stop="cart.changeQuantity(index, '-')">-
                                        </div>
                                        <span class="bg-white px-3">{{ product.quantity }}</span>
                                        <div class="a plus text-white fw-bold"
                                            @click.stop="cart.changeQuantity(index, '+')">+
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="wrapper d-flex justify-content-end mt-2">
                        <div class="card pt-1 px-4 rounded-4 border-0 shadow d-flex">
                            <h4 class="total text-muted fw-bold">Totale:</h4>
                            <h5 class="text-danger fw-bold">{{ cart.productSum() }}<span>€</span></h5>
                        </div>
                    </div>
                </div>


                <div class="col-12 col-lg-5">
                    <div class="card rounded-4 border-0 shadow px-3 py-4">
                        <div class="card bg-light">

                            <div class="card-body">
                                <div class="alert alert-danger" v-if="error">
                                    {{ error }}
                                </div>
                                <div class="alert alert-success" v-if="nonce">
                                    Pagamento effettuato con successo!
                                </div>
                                <form @submit.prevent="sendForm()" v-if="!form_info">
                                    <h2>Informazioni ordine</h2>
                                    <div class="mb-3">
                                        <label for="full_name" class="form-label">Nome</label>
                                        <input required type="full_name" name="full_name" id="full_name" v-model="full_name"
                                            class="form-control" placeholder="Mario Rossi"
                                            aria-describedby="full_nameHelper">
                                        <small id="full_nameHelper" class="text-muted">Inserisci il tuo nome</small>
                                    </div>
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Indirizzo</label>
                                        <input required type="address" name="address" id="address" v-model="address"
                                            class="form-control" placeholder="Via Roma 54" aria-describedby="addressHelper">
                                        <small id="addressHelper" class="text-muted">Inserisci l'indirizzo di
                                            consegna</small>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">Email</label>
                                        <input required type="email" name="email" id="email" v-model="email"
                                            class="form-control" placeholder="name@example.com"
                                            aria-describedby="emailHelper">
                                        <small id="emailHelper" class="text-muted">Inserisci la tua email</small>
                                    </div>

                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Numero di telefono</label>
                                        <input required minlength="9" maxlength="12" type="text" name="phone" id="phone"
                                            v-model="phone" class="form-control" placeholder="3211234456"
                                            aria-describedby="phoneHelper">
                                        <small id="phoneHelper" class="text-muted">Inserisci il tuo numero di
                                            telefono</small>
                                    </div>

                                    <div class="mb-3">
                                        <label for="description" class="form-label">Dettagli aggiuntivi per l'ordine</label>
                                        <textarea name="description" id="description" v-model="description"
                                            class="form-control" placeholder="Inserisci dettagli"
                                            aria-describedby="descriptionHelper" />
                                        <small id="descriptionHelper" class="text-muted">Inserisci descrizione aggiuntiva
                                        </small>
                                    </div>

                                    <button type="submit" class="btn btn-primary" :disabled="payLoading"> {{
                                        payLoading ? 'Caricamento...' : 'Procedi al pagamento'
                                    }} </button>
                                </form>

                                <form v-else>
                                    <div class="card-header">Pagamento</div>
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

                                    <button class="btn btn-primary btn-block my-2" @click.prevent="payWithCreditCard"
                                        :disabled="payLoading">
                                        {{
                                            payLoading ? 'Caricamento...' : 'Procedi al pagamento'
                                        }}
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

    <div class="container">

    </div>
    <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;


.background {
    background-color: #ffbd59;
    background-image: url(../assets/background.png);
}

a,
.hover-style {
    background-color: #f6edda;
    text-decoration: none;
    color: $db_danger;
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
        background-color: $db_danger;

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
        color: $db_danger;
    }
}
</style>