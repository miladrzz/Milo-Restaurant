<template>
    <div class="nav-bar">
        <router-link to="/menu" class="products-link">
            <div class="logo-wrap">
            <img :src="logo" width="65" height="65">
        </div>
        </router-link>
        <router-link to="/cart" class="cart-link">
            <button>Shopping Cart</button>
        </router-link>
    </div>
</template>

<script>
import logo from '@/assets/logo-hexagon.svg';
export default{
    name:"NavBar",
    data(){
        return{
            logo
        }
    }
}
</script>