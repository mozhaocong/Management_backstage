import Vue from 'vue'
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import Test from '../pages/test/router'
import Product from '../pages/productManagement/router'
import transactionInformation from '../pages/transactionInformation/router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('../pages/index')
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('../pages/home'),
            children: [
                ...Test,
                ...Product,
                ...transactionInformation
            ]
        },
    ]
})
