<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { login } from "@/API/User.ts";
import { useTokenStore } from "@/Stores/myToken.ts";

//#region 属性

//表单实例
const fromRef = ref<FormInstance>()
const isLoading = ref(false)
//#endregion
// 表单响应式数据
const form = reactive({
    phone: '18201288771',
    password: '111111'
})

//#region 登录方法
const onsubmit = async () => {

    isLoading.value = true

    //登录验证
    await fromRef.value?.validate().catch((err) => {
        ElMessage.error("表单校验失败")
        isLoading.value = false
        throw err
    });

    //登录请求接口
    const result = await login(form).then((res) => {
        if (!res.data.success) {
            ElMessage.error("登录失败")
            isLoading.value = false
            throw new Error("登录信息有误")
        }
        return res.data
    })
    console.log(result);
    const store = useTokenStore()
    //保存token信息
    store.saveToken(result.content)


    ElMessage.success("成功了")
    isLoading.value = false

}
//#endregion
//表单校验规则
const rules = reactive<FormRules>({
    phone: [
        { required: true, message: "电话号码不能为空", trigger: "blur" },
        { pattern: /^1\d{10}$/, message: "手机号必须是11位数字", trigger: "blur" }
    ],
    password: [
        { required: true, message: "请输入密码" },
        { min: 6, max: 18, message: "密码长度需要6~18位", trigger: "blur" }
    ]
})
//18201288771

</script>

<template>
    <div class="login">
        <el-form :model="form" :rules="rules" ref="fromRef" label-width="120px" label-position="top" size="large">
            <h2>登录</h2>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="isLoading" @click="onsubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<style scoped>
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;

    .el-form {
        width: 300px;
        border-radius: 10px;
        padding: 30px;
        background-color: aliceblue;
    }

    .el-form-item {
        margin-top: 20px;
    }

    .el-button {
        width: 100%;
        margin-top: 30px;
    }
}
</style>