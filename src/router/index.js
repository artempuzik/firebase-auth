import {createMemoryHistory, createRouter} from "vue-router";
import {useAppStore} from "../store/index.js";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/HomePage.vue') },
    {
        path: '/upload',
        name: 'upload',
        component: () => import('../pages/UploadNewCvPage.vue') },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const appStore = useAppStore()
    if (to.name !== 'home' && !appStore.user) {
        appStore.signIn().then(() => {
            next({
                name: to.name
            })
        })
    }
    else next()
})

export default router
