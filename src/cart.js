import { reactive } from "vue";
import axios from "axios";
import { store as store } from "./store.js";
export const cart = reactive({
    loading: true,
    products: [],
    count: null,
    removeProduct(index) {
        this.products.splice(index, 1)
        this.count = --this.count
    },
    changeQuantity(index, operator) {
        let quantity = this.products[index].quantity
        if (operator === '+') {
            this.products[index].quantity = ++quantity
        } else if (operator === '-') {
            this.products[index].quantity = --quantity
        } else {
            return console.log('argomenti della funzione errati')
        }
        if (quantity <= 0) {
            return this.removeProduct(index)
        }
    }
});
// ToDo carrello:
//aggiungere chiave quantitá all oggetto piatto nel carello la quale verra modificata successivamente #fatto
// eliminare un elemento dal carrello #fatto
// aggiungere check di tipo questo piatto é di un'altro ristorante #fatto //aggiungere un messaggio per l'utente nel caso ci provi
