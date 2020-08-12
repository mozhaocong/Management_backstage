import Vue from 'vue'
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import Test from '../page/test/router'
import Product from '../page/productManagement/router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('../page/index')
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('../page/home'),
            children: [
                ...Test,
                ...Product,
            ]
        },
    ]
})