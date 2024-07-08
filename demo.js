/* eslint-disable no-undef */
(() => {
    // eslint-disable-next-line no-undef
    console.log(
        `%c 📌 添加自定义脚本 %c 这里啥也没有，测试自定义脚本执行`,
        'color: white; background: #0078E7; padding:.0625rem 0;margin: 0 0 .025rem 0;border-radius: .05rem 0 0 .05rem;',
        'padding: .05rem;border:.0125rem solid #0078E7;border-radius: 0 .05rem .05rem 0; background: linear-gradient(70deg, #e3f9eb, #d1dbff);',
    );

    danMu(() =>
        [
            { role: '朱一龙', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/1.gif', text: '这咕噜掐了。。。。' },
            { role: '林楠笙', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/2.gif', text: '只要还在一条路上，我们终究会相逢' },
            { role: '小公爷', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/3.gif', text: '你就是我的天地' },
            { role: '罗浮生', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/4.gif', text: '戏一旦开唱了，就没有停下来的道理，这是隆福戏院的规矩，也是我罗浮生的规矩' },
            { role: '莫三妹', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/5.gif', text: '你以后不会把我忘了吧' },
            { role: '沈巍', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/6.gif', text: '幸好，我伤惯了' },
            { role: '丑', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/7.gif', text: '最渺小的我，有大大的梦' },
            { role: '面面', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/8.gif', text: '可在我心里，哥哥以外的任何人，都不过是沙粒芥子' },
            { role: '何非', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/9.gif', text: '我做这一切都是为了匹配她！有什么错吗？没有！没有！' },
            { role: '吴邪', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/10.gif', text: '这还难呀~' },
            { role: '陈一鸣', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/11.gif', text: '所有的事儿都能少，爱你的事儿不能少' },
            { role: '小鬼王', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/12.gif', text: '' },
            { role: '朱一龙', img: 'https://cdn.jsdelivr.net/gh/zhudaidai416/blog-image/role/13.gif', text: '这咕噜掐了。。。。' },
        ].map((item, index) => ({ id: index, text: item.text, avatar: item.img })),
    );
})();