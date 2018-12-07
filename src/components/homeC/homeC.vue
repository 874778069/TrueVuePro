<template>
  <div class="m-tpls m-tpls-rec">
    <a :href="obj.schemeUrl">
      <div class="title">{{obj.title}}</div>
      <div class="u-pic">
        <img :src="obj.picUrl" alt="" width="100%" height="100%">
      </div>
      <div class="u-rcount"><i class="ico"></i><span>{{obj.readCount}}人看过</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props:["obj"],
    name: 'homeC'
  }
</script>

<style scoped lang="stylus">
  .m-tpls{
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .36rem .3rem;
    a{
      color: inherit;
      .title{
        font-size: .36rem;
        color: #333;
        line-height: .52rem;
        margin: -.08rem 0 .16rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-family: PingFangSC-Regular;
      }
      .u-pic{
        width: 6.9rem;
        height: 3.76rem;
        position: relative;
        margin-bottom: .2rem;
        overflow: hidden;
        border-radius: .08rem;
      }
      .u-rcount{
        margin-bottom: -.16rem;
        font-size: .22rem;
        color: #999;
        line-height: .32rem;
        margin-top: .18rem;
        &span{
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

</style>
