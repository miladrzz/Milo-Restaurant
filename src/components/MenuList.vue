<template>
    <div class="grid-wrap">
        <div class="product-item"
         v-for="item in Menu"
         :key="item.id">
            <img :src="item.image">
            <h3 class="product-name">{{ item.name }}</h3>
            <p class="product-price">{{ item.price }}</p>
            <router-link :to="'/menu/'+item.id">
            <button>View Details</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default{
    name:"MenuList",
    props:['Menu']
}
</script>