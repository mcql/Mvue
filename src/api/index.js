import { post } from '../axios/axiosConfig'

export default {
    login(params) {
        return post("/api/public/index.php/admin/admin/login", params)
    }
}