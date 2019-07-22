module.exports = {
    title: 'Kenquiet的技术积累',
    description: '一棵毛竹正在扎根',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.png'
        }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    base:'/myVuepress/',
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        //prev: './some-other-page',
        next: true,
        //导航栏路由
        nav: [
            {text: 'Home', link: '/'},
            {
                text: '前端学习',
                items: [
                    { text: 'css3', link: '/QT/css3/cover' },
                    { text: 'ES6', link: '/QT/ES6/cover' },
                    //{ text: 'JavaScript', link: '/QT/JavaScript/cover' },
                    { text: 'jQuery', link: '/QT/jQuery/cover' },
                    { text: 'Vue', link: '/QT/Vuejs/cover' },

                ]
            },
            {
                text:'交互学习',
                items: [
                    {text:'nodejs',link:'/QT/nodejs/cover'}
                ]
            },
            {text: 'github', link: 'https://github.com/Kenquiet'},
        ],

        sidebar: {
            '/QT/nodejs/': [{
               title: 'nodejs学习',
               collapsable: false,
               children: [
                   ['cover','前言'],
                   '2.1-Module'
               ]
           }],
            '/QT/css3/': [{
                title: 'css3笔记',
                collapsable: false,
                children: [
                    ['cover','前言'],
                    '1-选择器',
                    '2-新增UI样式',
                    '3-背景和渐变',
                    '4-过渡',
                    '5-2D变换',
                    '6-3D变形',
                    '7-flex'
                ]
            }],
            '/QT/ES6/': [{
                title: 'ES6学习',
                collapsable: false,
                children: [
                    ['cover','前言'],
                    '1-let和const 命令',
                    '10-set和map',
                    '19-Class的基本语法',
                    '20-Class的继承'

                ]
            }],
            /*'/QT/JavaScript/': [{
                title: 'JavaScript学习',
                collapsable: false,
                children: [
                    ['cover','前言']
                ]
            }],*/
            '/QT/jQuery/': [{
                title: 'jQuery笔记',
                collapsable: false,
                children: [
                    ['cover','前言'],
                    '2-对象',
                    '3-选择器',
                    '4-操作样式和属性',
                    '5-动画',
                    '6-事件机制',
                    '7-冒泡和默认行为',
                    'each'
                ]
            }]
        }
    }
};
