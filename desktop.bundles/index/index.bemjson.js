module.exports = {
    block: 'page',
    title: 'Web shop',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'head',
            content: {
                block: 'layout',
                content: [
                    {
                        elem: 'left',
                        content: {
                            tag: 'form',
                            attrs: { action: 'https://yandex.ru/yandsearch' },
                            content: [
                                {
                                    block: 'input',
                                    name: 'text',
                                    val: 'Find'
                                },
                                {
                                    block: 'button',
                                    mods: { type: 'submit' },
                                    content: 'Search'
                                }
                            ]
                        }
                    },
                    {
                        elem: 'right',
                        content: {
                            block: 'logo',
                            content: [
                                {
                                    block: 'link',
                                    url: 'http://ru.bem.info',
                                    content: [
                                        {
                                            block: 'image',
                                            url: '//varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png'
                                        },
                                        {
                                            elem: 'slogan',
                                            content: 'A new way of thinking'
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            block: 'goods',
            goods: [
                {
                    title: 'iPhone 7 128Gb',
                    image: 'https://cdn.rawgit.com/bem-site/bem-method/bem-project/articles/start-with-project-stub/iphone7.png',
                    price: '47 000',
                    url: '/'
                },
                {
                    title: 'Samsung Galaxy A7 32Gb',
                    image: 'https://cdn.rawgit.com/bem-site/bem-method/bem-project/articles/start-with-project-stub/samsung.png',
                    price: '26 000',
                    url: '/'
                },
                {
                    title: 'Meizu MX5 16Gb',
                    image: 'https://cdn.rawgit.com/bem-site/bem-method/bem-project/articles/start-with-project-stub/meizu.png',
                    price: '15 000',
                    url: '/'
                },
                {
                    title: 'iPhone 6s 32GB',
                    image: 'https://cdn.rawgit.com/bem-site/bem-method/bem-project/articles/start-with-project-stub/iphone6s.png',
                    price: '***',
                    url: '/',
                    new: true
                },
                {
                    title: 'Xiaomi Redmi 4X 16Gb',
                    image: 'https://cdn.rawgit.com/bem-site/bem-method/bem-project/articles/start-with-project-stub/xiaomi.png',
                    price: '10 000',
                    url: '/'
                }
            ]
        }
    ]
};
