import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Address from '@/views/Address'
import Calendar from '@/views/Calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
