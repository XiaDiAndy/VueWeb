<script setup lang="ts">
import { ElMessage, FormRules } from 'element-plus';
import { reactive } from 'vue';

// 表单响应式数据
const form = reactive({
    phone:'phone',
    password:'13456'
})
//登录
const onsubmit = () =>{
    ElMessage.success("成功了")
}
//表单校验规则
const rules = reactive<FormRules>({
    phone:[
        {required: true, message:"电话号码不能为空", trigger:"blur"}
    ],
    password:[
        {required : true, message:"请输入密码"}
    ]
})

</script>

<template>
    <div class="login">
        <el-form :model="form" :rules="rules"  label-width="120px" label-position="top" size="large" > 
            <h2>登录</h2>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onsubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<style scoped>
.login{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    .el-form{
        width: 300px;
        border-radius: 10px;
        padding: 30px;
        background-color: aliceblue;
    }

    .el-form-item{
        margin-top: 20px;
    }

    .el-button{
        width: 100%;
        margin-top: 30px;
    }
}
</style>