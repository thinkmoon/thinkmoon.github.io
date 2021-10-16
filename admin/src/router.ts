import { createRouter,createWebHashHistory } from 'vue-router';
import Admin from '@/views/admin/Index.vue';
import Editor from '@/views/admin/components/Editor.vue';
const routes = [
    {
        path: '/admin',
        component: Admin,
        children: [{
            path: 'editor',
            component: Editor,
        }]
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})