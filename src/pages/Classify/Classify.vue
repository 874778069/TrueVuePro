<template>
    <div class="wrap">

      <div class="header">
        <div class="sreachInput">
          <i></i>
          <span>搜索商品,共19932款好物</span>
        </div>
      </div>


      <div class="minWrap">
        <div class="left">
          <ul>
            <li v-for="cate in category">
              <router-link :to="`/classify?id=${cate.id}`">{{cate.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="right"></div>
      </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "Classify",

        computed:{
          ...mapState(["category"])
        },

        mounted(){
          this.$store.dispatch("reqC")
        }
    }
</script>

<style scoped lang="stylus">
  @import "./../../common/mixins.styl"
  .wrap{
    width: 100%
    .header{
      width: 100%
      height: .88rem
      box-sizing border-box
      padding .2rem .3rem 0 .3rem
      position: fixed !important
      background-color: white
      z-index 88
      top: 0
      left: 0
      .sreachInput{
        font-size 0.28rem
        color rgb(102,102,102)
        display block
        width: 6.9rem
        height: 0.56rem
        background-color: #EDEDED
        border-radius 0.07rem
        text-align center
        line-height 0.56rem
        i{
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .28rem;
          height: .28rem;
          margin-right: .1rem;
        }
      }
      bottom-border-1px(gray)
    }

    .minWrap{
      width: 100%
      margin-top: 0.2rem
      margin-bottom:1rem
      .left{
        width: 1.62rem
        float: left
        font-size .28rem
        ul{
          li{
            width: 1.62rem
            height: .5rem
            margin-top:.5rem
            text-align: center
            line-height .5rem
            box-sizing border-box
            &:first-child{
              margin-top:0
            }
          }
        }
      }
      .right{
        width: 5.88rem
        background-color: red
        float: right
        border-left 0.005rem solid gray
      }
    }
  }

</style>
