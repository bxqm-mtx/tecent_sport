// index.js=> indexedDB.ts
// typescript = js + 强类型 type 类型
import { compile } from 'vue';
import{ createRouter,createWebHistory,RouteRecordRaw} from 'vue-router';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history:  createWebHistory(),
    // 每个router 配置 满足RouteRecordRaw 类型的约束
    routes:[
        {
            path: '/',
            name: 'home',
            component:HomeView
        }
    ]as RouteRecordRaw[]
})
// 路由管理对象
export default router