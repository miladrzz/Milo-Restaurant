<template>
        <div class="img-wrap">
            <img :src="item.image">
        </div>
        <div class="product-details">
            <h1>{{ item.name }}</h1>
            <h3 class="price">{{ item.price }}</h3>
            <h3>Ingrediants:</h3>
            <div v-if="item.id==='001'">
            <h4>Rice, Saffron, BBQ tomato, 300g BBQ lamb, Lemon, Butter</h4>
            </div>
            <div v-if="item.id==='002'">
            <h4>Rice, Lentil, Raisin, Beef, Cinnamon</h4>
            </div>
            <div v-if="item.id==='003'">
            <h4>Rice, Broad bean, Dill, Saffron, Garlic, Lamb</h4>
            </div>
            <div v-if="item.id==='004'">
            <h4>Rice, Chicken, Walnut, Pomegranate Sause, Onion</h4>
            </div>
            <div v-if="item.id==='005'">
            <h4>Rice, Pea, Chips, Lamb, Onion</h4>
            </div>
            <div v-if="item.id==='006'">
            <h4>Rice, Vegtablabes, Lamb, Bean, Onion, Lemon</h4>
            </div>
            <div v-if="item.id==='007'">
            <h4>Rice, Dill, BBQ fish, Garlic, Pickle</h4>
            </div>
            <div v-if="item.id==='008'">
            <h4>Rice, Saffron, Chicken, Yoghurt, Barberry</h4>
            </div>
            <div v-if="item.id==='009'">
            <h4>Rice, Barberry, Saffron, Chicken</h4>
            </div>
            <button class="add-to-cart">Add to cart</button>
        </div>
</template>

<script>
export default{
    name:"FoodDetails",
    props:['item'],
}
</script>