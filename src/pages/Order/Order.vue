<template>
  <div class="g-bd">
    <div   class="g-row" id="j-bd">
      <div class="m-mainView">
        <div style="height: 44px;" class="hdWraper">
          <div class="m-hd">
            <div class="m-cartHd">
              <span class="logo">购物车</span>
              <div class="right">
                <a href="javascript:;" class="cart-coupon">
                  <span class="txt">领券</span>
                </a>
                <span class="cart-btn"></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul class="m-servicePolicy">
            <li class="item">
              <i class="u-icon u-icon-servicePolicy"></i>
              <span>30天无忧退货</span>
            </li>
            <li class="item">
              <i class="u-icon u-icon-servicePolicy"></i>
              <span>48小时快速退款</span>
            </li>
            <li class="item">
              <i class="u-icon u-icon-servicePolicy"></i>
              <span>满88元免邮费</span>
            </li>
          </ul>
        </div>
        <div class="m-defaultPage m-defaultPage-noCart">
          <div class="container">
            <div class="img"></div>
            <div class="txt">
              <div class="noCart-login">
                <div class="noCart-title">去添加点什么吧</div>
                <div class="noCart-btn" @click="$router.push('/login')">登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


  export default {
    beforeRouteLeave:(to, from,next) =>{
      var size = (window.innerWidth || document.documentElement.clientWidth) / 750 * 100;
      document.documentElement.style.fontSize = size + "px";
      document.body.style.fontSize = 24 + "px";
      next();
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/mixins.styl"
  .g-row {
    width: 10rem;
    margin-right: auto;
    margin-left: auto;
  }
  .m-mainView {
    padding-bottom: 2.64rem;
  }

  .m-hd {
    position: fixed!important;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
  }
  .m-cartHd {
    height: 1.17333rem;
    padding: 0 .4rem;
    line-height: 1.17333rem;
    text-align: center;
    background-color: #fff;
    position: relative;
  }
  .m-cartHd .logo {
    display: inline-block;
    font-size: .48rem;
  }
  .m-cartHd .right {
    position: absolute;
    top: 0;
    right: .4rem;
    font-size: .4rem;
  }
  .m-cartHd .right .cart-coupon {
    position: relative;
    color: #B4282D;
  }
  .m-cartHd .right .cart-btn {
    margin-left: .4rem;
  }
  .m-cartHd:after {
    content: '';
    position: absolute;
    background-color: #d9d9d9;
    left: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 50% 100% 0;
    transform-origin: 50% 100% 0;
    bottom: 0;
  }
  .m-servicePolicy {
    position: relative;
    z-index: 1;
    height: .93333rem;
    padding: 0 .4rem;
    background: #f4f4f4;
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .m-servicePolicy .item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: .32rem;
    color: #666;
  }
  .m-servicePolicy .item .u-icon-servicePolicy, .m-servicePolicy .item .u-icon-servicePolicySolid{
    margin-right: .08rem;
    position: relative;
    top: -1px;
  }
  .m-defaultPage {
    position: fixed;
    top: 1.17333rem;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center;
  }
  .m-defaultPage .container {
    position: absolute;
    top: -.66667rem;
    right: 0;
    bottom: 0;
    left: 0;
    height: 4rem;
    margin: auto;
  }
  .m-defaultPage-noCart .img{
    background-image url("images/gwc.png")
  }
  .m-defaultPage .img {
    display: inline-block;
    vertical-align: middle;
    width: 3.30667rem;
    height: 3.30667rem;
    margin-bottom: .10667rem;
    background-size: 3.30667rem 3.30667rem;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .m-defaultPage .txt {
    font-size: .37333rem;
    line-height: 1;
    color: #7f7f7f;
  }
  .noCart-login {
    margin-top: -.26667rem;
  }
  .noCart-login .noCart-title {
    margin-bottom: .66667rem;
    line-height: 1;
    font-size: .37333rem;
    color: #999;
  }
  .noCart-login .noCart-btn {
    margin: auto;
    width: 6.4rem;
    height: 1.22667rem;
    font-size: .4rem;
    line-height: 1.22667rem;
    color: #fff;
    background-color: #b4282d;
    border-radius: .04rem;
  }
</style>
