<template>
  <div>
    <div>
      <div style="height: 44px;" class="hdWraper">
        <div class="m-hd">
          <div class="m-topBar">
            <div class="bd">
              <div class="row">
                <a class="u-icon u-icon-home" @click="homeage"></a>
                <a href="javascript:;"><i class="logo u-icon u-icon-logo" ></i></a>
                <div class="right">
                  <a href="javascript:;" class="search">
                    <li class="u-icon u-icon-search1"></li>
                  </a>
                  <a href="javascript:;" class="cart">
                    <li class="u-icon u-icon-cart" @click="shopping"></li>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="height: 623px;" v-show="home" class="loginTypesWrap" >
        <div class="m-loginTypes">
          <div class="cont">
            <div class="logoWrap">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
            </div>
            <div class="btnWrap">
              <div class="w-button w-button-xl w-button-block" @click="handleC(true,false,false)">
                <i class="u-icon u-icon-loginPhone"></i>
                <span>手机号码登录</span>
              </div>
              <div class="w-button w-button-xl w-button-block w-button-ghostRed" @click="handleC(false,false,true)">
                <i class="u-icon u-icon-loginMail"></i>
                <span>用户账号登录</span>
              </div>
              <div class="btn">
                <span>手机号快捷注册</span>
                <i class="u-icon u-icon-arrow-right3"></i>
              </div>

            </div>
          </div>
          <div class="thirdWrap">
            <div class="itemWrap">
              <span class="item">
                <i class="icon icon-weixin"></i>
               <span class="name">微信</span>
              </span>
            </div>
            <div class="itemWrap">
              <span class="item">
                <i class="icon icon-qq"></i>
               <span class="name">QQ</span>
              </span>
            </div>
            <div class="itemWrap">
              <span class="item">
                <i class="icon icon-weibo"></i>
               <span class="name">微博</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="loginWrap loginWrap-1" v-show="isPhone">
        <div class="view">
          <div id="logo1">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
            <div id="loginPhone">
              <div class="phone">
                <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone">
              </div>
              <div class="code">
                <input type="text" placeholder="请输入验证码" v-model="code">
                <button @click="sendCode" :class="{on : isPhoneNum}" :disabled="isPhoneNum || time > 0">{{time > 0 ? `已发送${time}s` : "获取验证码"}}</button>
              </div>
              <div class="denglu" @click="codeLogin">
                登录
              </div>
            </div>
          </div>
          </div>
          <div class="foot">
            <div class="w-button w-button-xl w-button-block w-button-ghostRed" @click="handleC(false,true,false)"><span>其他登录方式</span>
            </div>
            <div class="btn btn-1" ><span>注册帐号</span><i class="u-icon u-icon-arrow-right3" ></i>
            </div>
          </div>
        </div>

      <div class="loginWrap loginWrap-1" v-show="isUser">
        <div class="view">
          <div id="logo2">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
            <div id="username">
              <div class="name">
                <input type="text" placeholder="请输入用户名" v-model="username">
              </div>
              <div class="code">
                <input type="password" placeholder="请输入密码" v-model="pwd">
              </div>
              <div class="denglu" @click="userPwd">
                登录
              </div>
            </div>
          </div>
          </div>
          <div class="foot">
            <div class="w-button w-button-xl w-button-block w-button-ghostRed" @click="handleC(false,true,false)"><span>其他登录方式</span>
            </div>
            <div class="btn btn-1" ><span>注册帐号</span><i class="u-icon u-icon-arrow-right3" ></i>
            </div>
          </div>
        </div>


    </div>



    </div>
</template>

<script>
  import {reqUserLogin,reqCodeLogin,reqCode} from "./../../api/index.js";
  import {MessageBox,Toast} from "mint-ui"
  export default {
    data(){
      return{
        home:true,
        isPhone:false,
        isUser:false,
        phone:"",
        pwd : "",
        username:"",
        code:"",
        time : 0
      }
    },
    computed:{
      isPhoneNum(){
        return !/^1\d{10}$/.test(this.phone)
      }
    },

    methods:{
      shopping(){
        this.$router.push('/shiwu')
      },
      homeage(){
        this.$router.push('/msite')
      },
      handleC(isPhone,home,isUser){
        this.isPhone = isPhone
        this.home = home
        this.isUser = isUser
      },

      async userPwd(){
        const {username,pwd} = this;
        if (!username){
          return MessageBox.alert("必须输入用户名")
        } else if(!pwd){
          return MessageBox.alert("密码不能为空")
        }

        const result = await reqUserLogin(this.username,this.pwd)
        if (result.code == 0){
          this.$store.commit("changeUser",{user:result.data,cb:()=>{
              this.$router.replace("/profile")
            }});

        }else {
          MessageBox.alert(result.msg)
        }
      },

      async sendCode(){
        Toast("发送验证码...");
        const result = await reqCode(this.phone);
        if (result.code == 0){
          this.time = 30;
          Toast("验证码发送成功");
          var timer = setInterval(()=>{
            this.time--;
            if(this.time==0) {
              clearInterval(timer)
            }
          },1000)
        }else {
          this.time = 0
          MessageBox.alert(result.msg)
        }

      },

      async codeLogin(){
        const {code,isPhoneNum} = this;
        if(isPhoneNum){
          return MessageBox.alert("手机号码必须11位")
        }else if(!/^\d{6}$/.test(code)){
          return MessageBox.alert("验证码必须6位")
        }

        const result = await reqCodeLogin(this.phone,this.code);
        if (result.code == 0){
          this.$store.commit("changeUser",{user:result.data,cb:()=>{
              this.time = 0;
              this.$router.replace("/profile")
            }});
        }else {
          MessageBox.alert(result.msg)
        }
      }
    },


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
  .m-hd {
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
  }

  .m-topBar, .m-topBar .bd {
    position: relative;
  }

  .m-topBar .bd {
    height: 1.16rem;
    background-color: #fafafa;
  }

  .m-topBar .bd .row {
    z-index: 1;
    width: 10rem;
    margin: auto;
    overflow: hidden;
    position: relative;
    padding: 0 .21333rem 0 .32rem;
    box-sizing: border-box
    height: 1.17333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .m-topBar .bd:after {
    position: absolute;
    background-color: #d9d9d9;
    width: 100%;
    height: 1px;
    transform-origin: 50% 100% 0;
    bottom: 0;
  }

  .u-icon-home {
    width: .64rem;
    height: .58667rem;
    display: inline-block;
    vertical-align: middle;
    background url("./images/zhu.png") no-repeat
    background-size: 100% 100%
  }

  .logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 2.29333rem;
    height: .72rem;
    background-image url("images/logo.png")
    background-repeat no-repeat
    background-size: 100% 100%
    display: inline-block;
    vertical-align: middle;

  }

  .m-topBar .bd .row .right {
    margin-left: auto;
    margin-right: .06667rem;
  }

  .m-topBar .bd .row .search {
    margin-right: .26667rem;
  }

  .m-topBar .bd .row .search .u-icon-search1 {
    position: relative;
    bottom: 0;
  }

  .u-icon-search1 {
    width: .64rem;
    height: .58667rem;
    background-position: 0 -4.74667rem;
    display: inline-block;
    vertical-align: middle;
    background url("./images/search.png") no-repeat
    background-size: 100% 100%
  }

  .u-icon-cart {
    width: .64rem;
    height: .58667rem;
    background-position: 0 0;
    display: inline-block;
    vertical-align: middle;
    background url("./images/cart.png") no-repeat
    background-size: 100% 100%
  }

  .m-loginTypes {
    position: relative;
    height: 100%;
    background: #F2F5F4;
    clearFix()
  }

  .m-loginTypes .logoWrap {
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 2.13333rem;
  }

  .m-loginTypes .logoWrap img {
    width: 3.57333rem;
    height: 1.2rem;
  }

  .m-loginTypes .btnWrap {
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem;
  }

  .m-loginTypes .btnWrap .w-button {
    margin-bottom: .42667rem;
  }

  .m-loginTypes .btnWrap .u-icon {
    margin-right: .21333rem;
    position: relative;
    top: -.02667rem;
  }

  .w-button-xl {
    height: 1.25333rem;
    line-height: 1.25333rem;
  }

  .w-button {
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    overflow: hidden;
  }

  .u-icon-loginPhone {
    background-position: 0 -.66667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
    background-repeat: no-repeat;
    background-size: .53333rem 3.86667rem;
    width: .53333rem;
    height: .53333rem;
  }

  .u-icon-loginMail {
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
    background-repeat: no-repeat;
    background-size: .53333rem 3.86667rem;
    width: .53333rem;
    height: .53333rem;
  }

  .w-button-ghostRed {
    border-color: #b4282d;
    color: #b4282d;
    background-color: transparent;
  }

  .m-loginTypes .btnWrap .btn {
    color: #333;
    font-size: .37333rem;
    text-align: center;
    width: 100%;
  }

  .m-loginTypes .btnWrap .u-icon {
    margin-right: .21333rem;
    position: relative;
    top: -.02667rem;
  }

  .m-loginTypes .u-icon-arrow-right3 {
    margin-left: .05333rem;
    position: relative;
    top: -.02667rem;
  }

  .u-icon-arrow-right3 {
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
  }

  .thirdWrap {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 1.06667rem;
    height: .53333rem;
    text-align: center;
    .itemWrap:nth-child(3){
      border-right: 0px solid #979797 !important;
    }
  }
  .m-loginTypes .thirdWrap .itemWrap {
    height: .53333rem;
    border-right: 1px solid #979797;
    display: inline-block;
    text-align: center;
    padding: 0 .53333rem;
  }
  .m-loginTypes .thirdWrap .item {
    height: .53333rem;
    position: relative;
    top: -.13333rem;
  }
  .m-loginTypes .thirdWrap .item .icon-weixin {
    background url("./images/1.png")
    background-size: 98%;
  }
  .m-loginTypes .thirdWrap .item .icon {
    position: relative;
    top: .13333rem;
    display: inline-block;
    width: .53333rem;
    height: .53333rem;
  }
  .m-loginTypes .thirdWrap .item .name {
    font-size: .37333rem;
    line-height: .53333rem;
    height: .53333rem;
    color: #7F7F7F;
    margin-left: .06667rem;
  }
  .m-loginTypes .thirdWrap .item .icon-qq{
    background url("./images/2.png")
    background-size: 98%;
  }
  .m-loginTypes .thirdWrap .item .icon-weibo{
    background url("./images/3.png")
    background-size: 98%;
  }
  .loginWrap .logo {
    text-align: center;
    margin-top: .74667rem;
    margin-bottom: 0;
  }
  .loginWrap .foot {
    padding: 0 .53333rem;
  }
  .loginWrap .btn-1 {
    margin-top: .42667rem;
  }
  .loginWrap .btn span {
    font-size: .37333rem;
    line-height: .53333rem;
    color: #333;
  }
  .loginWrap .btn {
    text-align: center;
  }
  .loginWrap .logo img {
    width: 2.56rem;
    height: .85333rem;
  }
  .loginWrap .logo[data-v-2a2af8af] {
    text-align: center;
    margin-top: 0.74667rem;
    margin-bottom: 0;
  }
  #logo1{
    width: 90%
    margin-left: 5%
    vertical-align: middle;
    height: 9.18rem
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    flex-wrap wrap
    padding-top 1.3rem
    font-size .36rem
    margin-bottom 0.2rem
    img{
      width: 2.56rem;
      height: .85333rem;
    }
    #loginPhone{
      width: 100%
      height: 5rem
      display flex
      flex-direction column
      justify-content space-around
      .phone{
        width: 100%
        height 25%
        display flex
        align-items center
        bottom-border-1px(gray)
        input{
          width: 90%
          height: 90%
          outline:none
        }
      }
      .code{
        width: 100%
        height 25%
        display flex
        justify-content space-around
        align-items center
        bottom-border-1px(gray)
        input{
          width: 75%
          height: 90%
          outline:none
        }
        button{
          height: 90%
          border: 0 solid #000
          background-color: white
          &.on{
            color gray
          }
        }

      }
      .denglu{
        width: 100%
        height: 25%
        background-color: #b4282d
        text-align: center;
        line-height 1.2rem
        color white
      }
    }
  }
  #logo2{
    width: 90%
    margin-left: 5%
    vertical-align: middle;
    height: 9.18rem
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    flex-wrap wrap
    padding-top 1.3rem
    font-size .36rem
    margin-bottom 0.2rem
    img{
      width: 2.56rem;
      height: .85333rem;
    }
    #username{
      width: 100%
      height: 5rem
      display flex
      flex-direction column
      justify-content space-around
      .name{
        width: 100%
        height 25%
        display flex
        align-items center
        bottom-border-1px(gray)
        input{
          width: 90%
          height: 90%
          outline:none
        }
      }
      .code{
        width: 100%
        height 25%
        display flex
        align-items center
        bottom-border-1px(gray)
        input{
          width: 90%
          height: 90%
          outline:none
        }
      }
      .denglu{
        width: 100%
        height: 25%
        background-color: #b4282d
        text-align: center;
        line-height 1.2rem
        color white
      }
    }
  }
</style>
