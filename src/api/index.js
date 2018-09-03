import { post } from '../axios/axiosConfig'

export default {
    login(params) {
        return post("/api/public/index.php/admin/admin/login", params)
    },
    changePwd(params) {
        return post("/api/public/index.php/admin/admin/changePwd", params)
    },
    findUserPwd(params) {
        return post("/api/public/index.php/admin/admin/findUserPwd", params)
    },
    getProvinceData() {
        return post("/api/public/index.php/admin/admin/getProvinceData")
    },
    getCityData(params) {
        return post("/api/public/index.php/admin/admin/getCityData", params)
    },
    getArticle(params) {
        return post("/api/public/index.php/admin/admin/getArticle", params)
    },
    getArticleNum() {
        return post("/api/public/index.php/admin/admin/getArticleNum")
    }
}