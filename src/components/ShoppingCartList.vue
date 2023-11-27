<template>
    <div v-if="cartItems.length>0">
    <div class="product-container"
     v-for="item in cartItems"
    :key="item.id">
    <img class="product-image" :src="item.image">
    <div class="details-wrap">
    <h3>{{ item.name }}</h3>
    <p>{{ item.price }}</p>
    </div>
    <button class="remove-button">Remove</button>
    </div>
    <button class="checkout-button">Proceed to checkout</button>
    </div>
    <div v-if="cartItems.length===0">
      <p>You currently have no items in your cart!</p>  
    </div>
</template>

<script>
export default{
    name:"ShoppingCartList",
    props: ['cartItems'],
}
</script>