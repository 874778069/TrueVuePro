<template>
  <div class="m-tpls m-tpls-new">
    <a :href="obj.schemeUrl">
      <div class="title">{{obj.title}}</div>
      <div class="content">{{obj.subTitle}}</div>
    </a>
    <ul class="m-gplist">
      <li v-for="item in obj.itemList" v-if="item">
        <img :src="item.itemUrl" alt="" width="100%" height="100%">
      </li>
    </ul>
    <div class="u-rcount">
      <i class="ico"></i>
      <span>{{(obj.readCount/1000).toFixed(1)}}k人看过</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:["obj"],
    name: 'newCom'
  }
</script>

<style scoped lang="stylus">
  .m-tpls{
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    padding: .36rem .3rem;
    a{
      .title {
        width: 100%;
        color: #333;
        font-size: .36rem;
        line-height: .54rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: PingFangSC-Regular;
      }
      .content{
        font-size: .28rem;
        color: #7F7F7F;
        line-height: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        padding-top: .08rem;
      }
    }
    ul{
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: .24rem 0;
      li{
        width: 1.66rem;
        height: 1.66rem;
        border-radius: .04rem;
        overflow: hidden;
        background: #f4f4f4;
        margin-bottom: .08rem;
      }
    }
    .u-rcount{
      font-size: .22rem;
      color: #999;
      line-height: .32rem;
      margin-top: .18rem;
      span{
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

</style>
