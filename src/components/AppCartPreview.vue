<script>
export default {
    name: "AppCartPreview",
}
</script>

<template>

    <div class="off-canvas">

        <div id="CartDrawer" class="drawer drawer--right open" tabindex="-1">
            <div class="drawer__header">
                <span class="drawer__close js-drawer-close dt-sc-btn open close-icon">
                    x
                </span>
                <h4 class="my-3">Il tuo carrello</h4>
            </div>


            <div id="CartContainer">

                <form action="/cart" method="post" novalidate="" class="cart ajaxcart">
                    <ul class="ajaxcart__inner">

                        <li class="ajaxcart__product">
                            <div class="ajaxcart row" data-line="1">
                                <div class="item_img"><a href="/products/toritilla-wrap?variant=39541360099411"
                                        class="ajaxcart__product-image"> <img
                                            src="https://cdn.shopify.com/s/files/1/0549/7359/5731/products/shop007_medium.jpg?v=1638158749"
                                            alt=""></a> </div>
                                <div class="details_cart">

                                    <h6><a href="/products/toritilla-wrap?variant=39541360099411"
                                            class="ajaxcart__product-name">Toritilla Wrap</a></h6>
                                    <div class="item-desc">
                                        <div class="item_dtl">
                                            <p class="ajaxcart__product-meta">M / Non Veg</p>
                                            <div class="pricing">
                                                <span class="ajaxcart__price">
                                                    <span class="money">Rs.296.00</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="ajaxcart__qty product-item-caption-qty">
                                            <button type="button"
                                                class="ajaxcart__qty-adjust ajaxcart__qty--minus quantity-increment"
                                                data-id="" data-qty="1" data-line="1">
                                                <span>−</span>
                                            </button>
                                            <input type="text" name="updates[]" class="ajaxcart__qty-num input-number"
                                                value="2" min="0" data-id="" data-line="1" aria-label="quantity"
                                                pattern="[0-9]*">
                                            <button type="button"
                                                class="ajaxcart__qty-adjust ajaxcart__qty--plus quantity-increment"
                                                data-id="" data-line="1" data-qty="3">
                                                <span>+</span>
                                            </button>
                                            <span id="changeQty" class="ajaxcart__qty-remove remove-btn  dt-sc-btn"
                                                data-id="39541360099411:afe9063be9fe031a79240fb6ef1e514b" data-line="1"
                                                data-qty="3">
                                                <font-awesome-icon icon="fa-solid fa-trash" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="ajaxcart__footer row">
                        <div class="subtotal">
                            <p class="title">Total</p>
                            <p class="subtotal-price"><span class="cart-original-total money">Rs. 296.00</span></p>
                        </div>


                        <div class="discounts">


                        </div>
                        <div class="total">
                            <p>Shipping, taxes, and discounts will be calculated at checkout.</p>
                        </div>

                        <div class="d-flex flex-column px-3">
                            <router-link :to="{ name: 'checkout' }">
                                <button type="submit" class="btn btn_orange mb-4 w-100" name="checkout">
                                    Procedi al Checkout
                                </button>
                            </router-link>


                            <router-link class="btn btn_orange" :to="{ name: 'cart' }">Vedi il carrello</router-link>

                        </div>



                    </div>
                </form>

            </div>
        </div>

    </div>


</template>

<style lang="scss" scoped>
.off-canvas {
    top: 0;
    height: 100vw;
    width: 100%;
    position: absolute;
    z-index: 9999;
}
</style>