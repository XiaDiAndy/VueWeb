<script setup lang="ts">
  import LogoBar from '../Layout/LogoBar.vue'
  import MenuBar from '../Layout/MenuBar.vue'
  import Header from '../Layout/Header.vue'
</script>

<template>
  <div class="layout-container-demo">
    <el-container>
      <el-aside>
        <LogoBar class="logoBar"></LogoBar>
        <MenuBar class="menuBar"></MenuBar>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
  
</template>

<style lang="scss">
.layout-container-demo{
    display: flex;
    height: 100vh;
    .el-header {
      background-color: var(--el-color-primary-light-7);
      color: var(--el-text-color-primary);
  }
  .el-aside {
    text-align: center;
    line-height: 200px;
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .el-main {
    background-color:var(--el-color-primary-light-5);
    color: var(--el-text-color-primary);
    line-height: 60px;
    text-align: center;
  }
  .menuBar{
    margin-top: 10px;
  }
}
</style>