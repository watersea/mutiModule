<template>
  <div class="error-404">
    <img src="/static/image/404.svg" alt="">
    <div style="flex: 1">
      <p class="title">404</p>
      <p class="error-text">抱歉，你访问的页面不存在</p>
      <Button type="primary" @click="$router.replace('/')">返回首页</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nothing"
  }

</script>

<style scoped lang="less">
  .error-404{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    img{
      width: 60%
    }
  }
  .title{
    margin-bottom: 24px;
    color: #515a6e;
    font-weight: 600;
    font-size: 72px;
    line-height: 72px;
  }
  .error-text{
    margin-bottom: 16px;
    color: #808695;
    font-size: 20px;
    line-height: 28px;
  }
</style>
