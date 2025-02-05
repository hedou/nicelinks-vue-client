import Frame from 'partials/Frame'

export default {
  path: '/',
  component: Frame,
  children: [
    {
      path: '/',
      meta: {},
      component: (resolve) => require(['views/Index'], resolve),
    },
    {
      path: 'explore/:classify',
      meta: {},
      component: (resolve) => require(['views/Nicelinks'], resolve),
    },
    {
      path: 'setting',
      meta: {
        isNeedLogin: true,
      },
      component: (resolve) => require(['views/Setting'], resolve),
    },
    {
      path: 'forgot-pwd',
      alias: 'reset-pwd',
      meta: {},
      component: (resolve) => require(['views/ForgotPwd'], resolve),
    },
    {
      path: 'account',
      meta: {},
      component: (resolve) => require(['views/Account'], resolve),
    },
    {
      path: 'member/:id/:tab',
      meta: {},
      component: (resolve) => require(['views/Homepage'], resolve),
    },
    {
      path: 'member/:id',
      meta: {},
      component: (resolve) => require(['views/Homepage'], resolve),
    },
    {
      path: 'post/:id',
      meta: {},
      component: (resolve) => require(['views/Post'], resolve),
    },
    {
      path: 'tags/:tags',
      meta: {},
      component: (resolve) => require(['views/Tags'], resolve),
    },
    {
      path: 'collections/tags',
      meta: {},
      component: (resolve) => require(['views/TagsCollections'], resolve),
    },
    {
      path: 'theme/:theme',
      meta: {},
      component: (resolve) => require(['views/Theme'], resolve),
    },
    {
      path: 'collections/theme',
      meta: {},
      component: (resolve) => require(['views/ThemeCollections'], resolve),
    },
    {
      path: 'share-link',
      meta: {
        isNeedLogin: true,
      },
      component: (resolve) => require(['views/share/ShareLink'], resolve),
    },
    {
      path: 'about',
      meta: {
        isNeedLogin: false,
      },
      component: (resolve) => require(['views/About'], resolve),
    },
    {
      path: 'sponsor',
      meta: {
        isNeedLogin: false,
      },
      component: (resolve) => require(['views/Sponsor'], resolve),
    },
    {
      path: 'business',
      meta: {
        isNeedLogin: false,
      },
      component: (resolve) => require(['views/Business'], resolve),
    },
    {
      path: 'cemetery',
      meta: {
        isNeedLogin: false,
      },
      component: (resolve) => require(['views/Cemetery'], resolve),
    },
    {
      path: 'friendlink',
      meta: {
        isNeedLogin: false,
      },
      component: (resolve) => require(['views/FriendLink'], resolve),
    },
  ],
}
