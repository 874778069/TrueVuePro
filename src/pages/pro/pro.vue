<template>
  <div class="wrap">
    <div class="top">
      <span @click="$router.push('/msite')"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img :src="imgU" alt="">
    <div style="width: 100%;height: 0.2rem;background-color: #F4F4F4;"></div>

  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: 'pro',
    computed:{
      ...mapState(["msite"]),
      imgU(){
        const id = this.$route.query.id;
        const imgU = this.msite.tagList.filter((tag)=>{
          return tag.id == id
        })
        return imgU[0].appListPicUrl
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrap{
    font-size 0.32rem
    width: 100%
    .top{
      width: 100%
      padding 0 .16rem 0 .2rem
      height: .88rem
      line-height .88rem
      box-sizing border-box

      span{
        &:nth-child(1){
          vertical-align: middle;
          display: inline-block
          width: 0.48rem
          height: .44rem
          background-image url("./img/logo.png")
          background-size: 1.72rem 4.2rem
          background-position-y -4.95rem
        }
        &:nth-child(2){
          vertical-align: middle;
          display: inline-block
          width: 1.71rem
          height: .55rem
          background-image url("./img/logo.png")
          background-size: 1.72rem 4.2rem
          background-position-y -9.65rem
          margin-left:2rem
        }
        &:nth-child(3){
          vertical-align: middle;
          display: inline-block
          width: 0.48rem
          height: .44rem
          background-image url("./img/logo.png")
          background-size: 1.72rem 4.2rem
          background-position -0.1rem -7.83rem
          margin-left:1.45rem
        }
        &:nth-child(4){
          vertical-align: middle;
          display: inline-block
          width: 0.64rem
          height: .64rem
          background-image url("./img/logo.png")
          background-size: 1.72rem 4.2rem
        }
      }
    }
    img{
      width: 100%
    }
  }

</style>
