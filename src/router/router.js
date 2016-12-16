// const fooPath = components'/foo'
import foo from '../components/foo'
// import foo from fooPath
import bar from '../components/bar'
// import quotation from '../components/quotation'
// import applyGoods from '../components/applyGoods'
// import transfer from '../components/transfer'
// import personal from '../components/personal'

import login from '../pages/identity/login'
import register from '../pages/identity/register'
import registerStep1 from '../pages/identity/register-step1'
import registerStep2 from '../pages/identity/register-step2'

import mainView from '../pages/main-view'
import quotationList from '../pages/quotation/quotation-list'

import quotation from '../pages/quotation/quotation-highstock'

// module.exports = {
//   '/foo': {
//     name: 'foo',
//     component: foo,
//   },
//   '/bar': {
//     name: 'bar',
//     component: bar,
//   },
//   '/login': {
//     name: 'login',
//     component: login
//   }
//   // '/quotation': {
//   //   name: 'quotation',
//   //   component: quotation
//   // },
//   // '/applyGoods': {
//   //   name: 'applyGoods',
//   //   component: applyGoods
//   // },
//   // '/transfer': {
//   //   name: 'transfer',
//   //   component: transfer
//   // },
//   // '/personal': {
//   //   name: 'personal',
//   //   component: personal
//   // },
// };

module.exports = [
  {
    path: '/foo',
    component: foo,
  },
  {
    path: '/bar',
    component: bar,
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register,
    children: [
      {
        path: 'step-1',
        component: registerStep1
      },
      {
        path: 'step-2',
        component: registerStep2
      }
    ]
  },

  {
    path: '/view',
    component: mainView,
    children: [
      {
        path: 'quotation',
        component: quotationList
      }
    ]
  },

  {
    path: '/quotation',
    component: quotation
  }
];
