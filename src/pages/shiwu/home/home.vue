<template>
  <div>
    <homeC v-for="(home,index) in homes" :obj="home" :key="index"></homeC>
  </div>
</template>

<script>
  import homeC from "./../../../components/homeC/homeC.vue";
  import {mapState} from "vuex"
  export default {
    name: 'home',
    components:{
      homeC
    },
    computed:{
      ...mapState(["homes"])
    },
    mounted(){
      this.$store.dispatch("reqH")
    }
  }
</script>

<style scoped>

</style>
