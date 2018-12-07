<template>
  <div>
  <div v-if="newData.length>0">
      <newC v-for="(obj,index) in newData" :obj="obj" :key="index"></newC>
  </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import newC from "./../../../components/newCom/newCom.vue"
  export default {
    name: 'new',
    components:{
      newC
    },
    computed:{
      ...mapState(["newData"])
    },
    mounted(){
      this.$store.dispatch("reqN")
    }
  }
</script>

<style scoped>

</style>
