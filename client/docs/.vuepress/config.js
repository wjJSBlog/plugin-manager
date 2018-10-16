let sidebar =  require('./nav-sidebar.js');
module.exports = {
    title: '收录集',
    description: '收录集',
    base: '/',
    host: '0.0.0.0',
    port: 8080,
    themeConfig: {
        //gitc 仓库地址
        repo: '/wjJSBlog',
        sidebarDepth: 2,
        //导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Markdown入门', link: '/markdown/' }
        ],
        sidebar: sidebar
    }
}