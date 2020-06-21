import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product'
import Login from '@/components/Login'


import EWallet from '@/components/account/EWallet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/EWallet',
      name: 'EWallet',
      component: EWallet
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
