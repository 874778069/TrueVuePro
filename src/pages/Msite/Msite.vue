<template>
    <div class="wrap">

      <div class="search">
        <a href="javascript:;">
        </a>
        <div class="sreachInput">
          <i></i>
          <span>搜索商品,共19932款好物</span>
        </div>
        <span class="login">登录</span>
      </div>

      <div class="minWrap">

        <div class="scrollNav">
          <div class="BS">
            <ul class="scroll">
              <li>推荐</li>
              <li>饮食</li>
              <li>音乐</li>
              <li>鞋包</li>
              <li>辣鸡</li>
              <li>废物</li>
              <li>无聊</li>
              <li>傻逼</li>
              <li>红牛</li>
              <li>D&G</li>
              <li>特色区</li>
            </ul>
          </div>
          <div class="down">
            <span></span>
          </div>
        </div>

        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./img/3d300175542f86c213da0afd53f7f08c.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/5ac976683b6b5c51b2865dbc15bca10b.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/12eb5c994d76ea4458b0cdc03fffa593.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/562a03a7cc919126d828397876b0164c.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/529578c5e3c7d9d8e6a14c281ecde1e0.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/cfe8ed06eca142828bacb5e35015770f.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/e00ce7c76ca85291071c81d72e8b6bf4.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/f547c90c7ca41113f880b82806baa006.jpg" alt=""></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

        <div class="msg">
          <ul class="msgUl">
            <li><i></i><span>网易自营品牌</span></li>
            <li><i></i><span>30天无忧退货</span></li>
            <li><i></i><span>48小时快速退款</span></li>
          </ul>
        </div>

        <div class="shopList">
          <ul>
            <li>
              <img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
              <span>居家</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/46d33b9a9fbb659fcbac37ec58d51e62.png" alt="">
              <span>饮食</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/31831ada59dc10319cba195620ed9ed0.png" alt="">
              <span>音乐</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/45833c71d4b0d0de0755a20f893fa25f.png" alt="">
              <span>鞋包</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/2fde77529e90a26427d1c02faa3bfbf6.png" alt="">
              <span>辣鸡</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/15e364ca93313bbd6e87dfcba7ae7b74.png" alt="">
              <span>废物</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/793bca13bb931475ea7f0c00299362bb.png" alt="">
              <span>无聊</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/fc3e359da08577228354da61ea912c99.png" alt="">
              <span>傻逼</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/97eb6fd2c7ea76a3a42b9dafa3bd6543.png" alt="">
              <span>红牛</span>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/db5e2ce8c66f7db3f4282ecb24a64236.png" alt="">
              <span>D&G</span>
            </li>
          </ul>
        </div>

        <img src="https://yanxuan.nosdn.127.net/15435902145614507.gif" alt="" style="width: 100%">
      </div>
    </div>
</template>

<script>
  import BS from "better-scroll";
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css"
  export default {
    name: "Msite",
    components:{
      
    },
    mounted(){
      new BS(".BS",{
        click: true,
        scrollX: true,
      });
      new Swiper(".swiper-container",{
        effect : "slide",
        direction: 'horizontal',
        loop: true, // 循环模式选项
        autoplay: {
          disableOnInteraction : false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      })
    }
  }
</script>
<style scoped lang="stylus">
  .wrap
    width: 100%
    font-size 0.24rem
    overflow hidden
    .search
      display flex
      align-items: center;
      background: #fff;
      padding: .16rem .3rem;
      flex-flow: row nowrap;
      position: fixed;
      top: 0
      left: 0
      z-index: 2;
      height: 0.9rem
      line-height 0.9rem
      width: 100%
      box-sizing border-box
      a
        width: 1.38rem;
        height: .4rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-right: .2rem;
        background-size: cover;
        background-position: center;
      .sreachInput
        font-size 0.28rem
        color rgb(102,102,102)
        display inline-block
        width: 4.42rem
        height: 0.56rem
        background-color: #EDEDED
        border-radius 0.07rem
        text-align center
        line-height 0.56rem
        i
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .28rem;
          height: .28rem;
          margin-right: .1rem;

      .login
        display inline-block
        margin-left:0.16rem
        width: 0.75rem
        height: 0.4rem
        line-height 0.4rem
        text-align center
        color: rgb(180,40,45)
        border-radius 0.07rem
        box-sizing border-box
        border: 0.01rem solid rgba(180,40,45,.5)
    .minWrap
      width: 100%
      margin-top 0.9rem
      .scrollNav
        width: 100%
        height: 0.6rem
        overflow hidden
        padding-left 0.3rem
        position relative
        .BS
          width 6rem
          ul{
              width: 9.9rem
              height: 0.6rem
              li{
                  width: 0.9rem
                  text-align: center
                  line-height: 0.6rem
                  float: left
                  font-size 0.28rem
                  color: rgb(51,51,51)
                  height: 0.6rem
                  &:first-child{
                      box-sizing border-box
                      color rgb(180, 40, 45);
                      border-bottom 0.03rem solid rgb(180, 40, 45);
                  }
              }
          }
        .down{
            width: 1.5rem
            height: 0.6rem
            background-color: white
            z-index 99
            position absolute
            top: 0
            right: 0
            text-align center
            line-height 0.7rem
            span{
              display inline-block
              width: 0.3rem
              height: 0.3rem
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
              background-size cover
            }
        }

      .swiper-container
        width: 100%
        height: 3.7rem
        .swiper-wrapper
          width: 100%
          height: 100%
          img
            width: 100%
            height: 100%
      .msg
        width: 100%
        height: 0.72rem
        background-color: #FFEDDB
        .msgUl{
          display flex
          justify-content space-around
          li{
            line-height:0.72rem
            display flex
            align-items center
            color rgb(180, 40, 45)
            i{
              width: 0.32rem
              height: 0.32rem
              display inline-block
              background-image url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
              background-size cover
            }
          }
        }
      .shopList{
        width: 100%
        height: 3.9rem
        background-color: #FFEDDB
        ul{
          display flex
          flex-wrap wrap
          justify-content space-around
          li{
            width: 1.5rem
            height: 1.95rem
            display flex
            justify-content space-evenly
            align-items center
            flex-direction column
            color rgb(51,51,51)
            img{
              width: 1.1rem
              height: 1.1rem
            }
          }
        }
      }
</style>
