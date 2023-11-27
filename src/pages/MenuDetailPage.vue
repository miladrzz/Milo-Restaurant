<template>
    <h1>Food Details Page</h1>
    <div v-if="menu">
        <FoodDetails :item="menu"/>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>
</template>

<script>
import FoodDetails from '@/components/FoodDetails.vue';
import {menu} from '../temp-data';
import NotFoundPage from '@/pages/NotFoundPage.vue';
export default{
    name:"MenuDetailPage",
    components:{
        NotFoundPage,
        FoodDetails,
    },
    data(){
        return{
            menu: menu.find(menu=>menu.id===this.$route.params.menuId),
        }
    }
}
</script>