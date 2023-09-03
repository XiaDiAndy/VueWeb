<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
const isCollapse = true

</script>

<template>
    <el-header>
        <el-icon>
            <Expand  v-show="isCollapse"></Expand>
            <Fold v-show="!isCollapse"> </Fold>
        </el-icon>
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown class="title-Right">
            <el-avatar :size="32" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            
        </el-dropdown>
    </el-header>
</template>


<style scoped>
.el-header{
    display: flex;
    align-items: center;
    .el-icon{
        margin-right: 8px;
    }
    .title-Right{
        margin-left: auto;
    }
}
</style>
