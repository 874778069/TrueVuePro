<template>
    <div class="wrap">
      <img :src="shiWuArr[0].ad.picUrl" alt="">
      <div v-for="item in shiWuArr">
        <TopItem v-for="(obj,index) in item.topics" :obj="obj" :key="index"></TopItem>
      </div>
    </div>
</template>

<script>
  import TopItem from "./../../../components/Topic/TopicItem.vue"
  import {mapState} from "vuex"
  export default {
    name: 'recommend',
    computed:{
      ...mapState(["shiWuArr"])
    },
    components:{
      TopItem
    }
  }
</script>

<style scoped lang="stylus">
  .wrap{
    width: 100%
    > img{
      width: 100%
    }
  }

</style>
