import request from "../utils/Request"

//用户请求登录
type LoginInfo = {
    phone:string
    code?:string
    password:string
}

type LoginInfoResult = {
    success:boolean
    state:number
    message:string
    content:string
}

export const login = (loginInfo : LoginInfo) => {
    return request<LoginInfoResult>({
        method:"POST",
        url:"/front/user/login",
        data:`phone=${loginInfo.phone}&password=${loginInfo.password}`,
    })
}