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
        }
        if (quantity <= 0) {
            return this.removeProduct(index)
        }
    },
    productSum() {
        let totalPrice = 0;
        this.products.forEach(product => {
            let singlePrice = product.price * product.quantity
            totalPrice = totalPrice + singlePrice
        });
        return Number(totalPrice.toFixed(2))
    }, emptyCart() {
        localStorage.products = [];
        this.products = []
    }
});

