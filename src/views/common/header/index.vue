<template>
  <div class="header">
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
              <MenuItem name="1">
                  <Icon type="ios-navigate"></Icon>
                moduleA
              </MenuItem>
              <MenuItem name="2">
                  <Icon type="ios-keypad"></Icon>
                  moduleB
              </MenuItem>
              <MenuItem name="3">
                  <Icon type="ios-analytics"></Icon>
                  moduleC
              </MenuItem>
          </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .header{
    height: 72px;
    background: #515a6e;
    color: #fff;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>