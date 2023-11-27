<template>
    <h1>Menu</h1>
    <MenuList :Menu="menu"/>
</template>

<script>
import MenuList from '@/components/MenuList.vue';
import {menu} from '../temp-data';
export default{
    name:"MenuPage",
    components:{
        MenuList,
    },
    data() {
        return{
            menu,
        }
    }
}
</script>