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
            '云上看景，周末愉快！',
            '拨云见日，未来可期！',
            '心之所向，勇往直前！',
            '(/≧▽≦/)嘻嘻，你来啦！',
            '看不见我。。。。',
            '这咕噜掐了。。。。',
            '火锅火锅',
            '这是电影频道耶~',
            '没有十多年~',
            '哈哈哈哈哈哈哈哈哈',
            '嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻',
            '嘿嘿',
            '可爱小猪',
            'ღ( ´･ᴗ･` )比心',
        ].map((text, id) => ({ id, text })),
    );
})();