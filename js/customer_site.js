const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    ftys: {
        api: 'https://www.fantuan.tv/api.php/provide/vod',
        name: '饭团影视',
    },
    ysgc: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '影视工厂',
    },
    zy360: {
        api: 'https://360zyzz.com/api.php/provide/vod',
        name: '360资源',
    },
    dytt: {
        api: 'https://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    ryzy: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    tyzy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    lzzy: {
        api: 'https://lziapi.com/api.php/provide/vod',
        name: '量子资源',
    },
    wlzy: {
        api: 'https://wlaszy.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    hnzy: {
        api: 'https://hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源',
    },
    snzy: {
        api: 'https://suonizy.com/api.php/provide/vod',
        name: '索尼资源',
    },
    kczy: {
        api: 'https://kczyapi.com/api.php/provide/vod',
        name: '快车资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
