<template>
  <div class="container">
    <q-header></q-header>
    <div class="wrapper">
      <q-silder></q-silder>
      <q-content></q-content>
    </div>            
  </div>
</template>

<script>
const qHeader = () => import('./common/header')
const qSilder = () => import('./common/silderbar')
const qContent = () => import('./common/content')

export default {
  name: 'container',
  components: {
    qHeader,
    qSilder,
    qContent
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    height: 100%
  }
  .wrapper{
    display: flex;
    flex: 1;
  }
</style>