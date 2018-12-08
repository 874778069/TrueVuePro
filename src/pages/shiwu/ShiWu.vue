<template>
    <div class="wrap" v-if="shiWuArr.length>0">
      <div class="header">
        <span @click="$router.push('/msite')"></span>
        <span>发现</span>
        <span @click="$router.push('/search')"></span>
        <span></span>
      </div>
      <div class="nav">
        <router-link to="/shiwu/recommend">推荐</router-link>
        <router-link to="/shiwu/daren">达人</router-link>
        <router-link to="/shiwu/new">上新</router-link>
        <router-link to="/shiwu/shaidan">晒单</router-link>
        <router-link to="/shiwu/home">HOME</router-link>
      </div>
      <router-view style="margin-top: 1.72rem;margin-bottom: 1rem"></router-view>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "ShiWu",
        computed:{
          ...mapState(["shiWuArr"]),

        },
        mounted(){
          this.$store.dispatch("reqSA")
        }
    }
</script>

<style scoped lang="stylus">
  @import "./../../common/mixins.styl"
  .wrap{
    font-size 0.32rem
    width: 100%
    .header{
      width: 100%
      padding 0 .16rem 0 .2rem
      height: 1rem
      line-height 1rem
      box-sizing border-box
      bottom-border-1px(gray)
      position: fixed
      background-color: white
      z-index 99
      top: 0
      left: 0
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
          vertical-align middle
          line-height .55rem
          text-align: center;
          display: inline-block
          font-size .4rem
          font-weight 700
          color: rgb(180, 40, 45)
          width: 1.71rem
          height: .55rem
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
    .nav{
      width: 100%
      height: .72rem
      font-size .28rem
      display flex
      justify-content space-around
      background-color: white
      align-items center
      padding-top 0rem
      bottom-border-1px(gray)
      position: fixed
      z-index 99
      top: 1rem
      left: 0
      a{
        &.active{
          display inline-block
          box-sizing border-box
          height: .72rem
          text-align: center;
          line-height .72rem
          color #B4282D
          border-bottom: 0.05rem solid #B4282D
        }
      }
    }

  }

</style>
