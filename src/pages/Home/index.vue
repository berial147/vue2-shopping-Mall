<template>
   <div>
       <!-- 三级联动全局组件 -->
       <TypeNav></TypeNav>
       <ListContainer/>
       <TodayRecommend/>
       <Rank/>
       <Like/>
       <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"/>
       <Brand/>
   </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'


export default{
    name: '',
    mounted() {
        this.$store.dispatch('getFloorList')
    },
    components: {
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed: {
        ...mapState({
            floorList: (state) => state.home.floorList
        })
    }
}

</script>
<style lang='less' scoped>

</style>