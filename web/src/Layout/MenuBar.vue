<script setup lang="ts">

</script>

<template>
    <el-menu router unique-opened class="menu">
        <el-sub-menu  index="1">
            <template #title>
                <el-icon><User></User></el-icon>
                <span>基础数据</span>
            </template>
            <el-menu-item>
                <span>物料基本档</span>
            </el-menu-item>
            <el-menu-item>
                <span>工艺基本档</span>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <span>仓库管理</span>
            </template>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <span>生产制造</span>
            </template>
            <el-menu-item index = "/SNRegister">
                <span>条码登记</span>
            </el-menu-item>
            <el-menu-item>
                <span>条码过站</span>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                品质管理
            </template>
        </el-sub-menu>
        <el-sub-menu index="5">
            <template #title>
                机台档案
            </template>
        </el-sub-menu>
        
    </el-menu>
</template>

<style>
.menu{
    background: var(--el-color-primary-light-8);
}
</style>