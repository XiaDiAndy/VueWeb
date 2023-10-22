import { ElMessage } from "element-plus"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

interface Token {
    access_token: string
    token_type: string
    refresh_token: string
    expires_in: number
    user_id: string
}


export const useTokenStore = defineStore('mytoken', () => {
    const tokenJson = ref("")
    const token = computed<Token>(() => {
        try {
            return JSON.parse(tokenJson.value || window.localStorage.getItem("TokenInfo") || "{}")
        } catch (err) {
            ElMessage.error("json字符串格式不对，转换失败")
            throw err
        }
    })
    function saveToken(token: string) {
        tokenJson.value = token
        window.localStorage.setItem("TokenInfo",token)
    }

    return { token, saveToken }
})