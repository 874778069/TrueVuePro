<template>
  <div class="wrap" v-if="daRen.length>0">
      <TopItem v-for="(obj,index) in daRen" :obj="obj" :key="index"></TopItem>
  </div>
</template>

<script>
  import TopItem from "./../../../components/Topic/TopicItem.vue"
  import {mapState} from "vuex"
  export default {
    name: 'recommend',
    computed:{
      ...mapState(["daRen"])
    },
    mounted(){
      this.$store.dispatch("reqD")
    },
    components:{
      TopItem
    }
  }
</script>

<style scoped lang="stylus">
  .wrap{
    width: 100%
  }

</style>
