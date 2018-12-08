<template>
    <div class="wrap" v-if="category.length>0">

      <div class="header">
        <div class="sreachInput" @click="$router.push('/search')">
          <i></i>
          <span>搜索商品,共19932款好物</span>
        </div>
      </div>


      <div class="minWrap">
        <div class="left">
          <ul v-if="category">
            <li v-for="cate in category" :class="{on:(cate.id) == ($route.query.id)}" v-if="cate.subCateList.length > 0">
              <router-link :to="`/classify?id=${cate.id}`">{{cate.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="right" v-if="list">
          <div class="up"><img :src="imgU" alt=""></div>

          <ul class="down" v-if="isShow">
            <li v-for="(sub,index) in list">
              <a :href="`http://m.you.163.com/item/list?categoryId=${sub.id-1-index}&subCategoryId=${sub.id}`">
                <img :src="sub.bannerUrl" alt="">
                <span>{{sub.name}}</span>
              </a>
            </li>
          </ul>

          <ul class="down2" v-if="!isShow">
            <li v-for="(sub) in list">
              <span>{{sub.name}}</span>
              <ul>
                <li v-for="cate in sub.categoryList">
                  <a :href="`http://m.you.163.com/item/list?categoryId=${cate.superCategoryId}&subCategoryId=${cate.id}`">
                    <img :src="cate.wapBannerUrl" alt="">
                    <span>{{cate.name}}</span>
                  </a>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "Classify",
        data(){
          return{
            flag:false
          }
        },
        computed:{
          ...mapState(["category"]),
          imgU(){
            const id = this.$route.query.id;
            const imgU = this.category.filter((cate)=>{
              return cate.id == id
            })
            return imgU[0].bannerUrl
          },

          list(){
            const id = this.$route.query.id;
            const imgU = this.category.filter((cate)=>{
              return cate.id == id
            })
            return imgU[0].subCateList
          },

          // list2(){
          //   const id = this.$route.query.id;
          //   const imgU = this.category.filter((cate)=>{
          //     return cate.id == id
          //   })
          //   return imgU[0].subCateList
          // },

          isShow(){
            const id = this.$route.query.id;
            const arr = this.category.filter((cate)=>{
              return cate.id == id
            })
            return arr[0].subCateList.length >= 10
          }
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
      margin-top: 0.88rem
      margin-bottom:1rem
      clearFix()
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
            a{
              color #333
              &.active{
                color #ab2b2b
              }
            }
            &:first-child{
              margin-top:.2rem
            }
            &.on{
              border-left 0.05rem solid #ab2b2b
            }
          }
        }
      }
      .right{
        width: 5.88rem
        float: right
        border-left 0.005rem solid gray
        box-sizing border-box
        padding .3rem
        .up{
          width: 5.28rem
          height: 2rem
          img{
            width: 100%
            height: 100%
          }
        }
        .down{
          display: flex
          justify-content flex-start
          flex-wrap wrap
          margin-top 0.2rem
          li{
            width: 1.44rem
            height: 2.16rem
            font-size 0.24rem
            text-align: center
            margin-right 0.31rem
            a{
              color #333
            }
            img{
              width: 100%
              height: 1.44rem
            }

          }
        }
        .down2{

          margin-top 0.2rem
          > li{
            font-size 0.28rem
            margin-top 0.5rem
            clearFix()
            &:first-child{
              margin-top 0.2rem
            }
            > span{
              display block
              width: 100%
              height: 0.5rem
              font-weight 700
              bottom-border-1px(gray)
            }
            ul{
              display flex
              flex-wrap wrap
              justify-content flex-start
              li{
                float: left
                width: 1.44rem
                display flex
                flex-direction column
                align-items center
                margin-right:0.2rem
                text-align center
                margin-top 0.25rem
                a{
                  color rgb(51, 51, 51)
                  >span{
                    display block
                  }
                  img{
                    width: 1.44rem
                    height: 1.44rem
                  }
                }

              }
            }
          }
        }
      }
    }
  }

</style>
