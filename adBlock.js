window.onload = () => { //ページ読み込み完了時
    for (let i = 0; i < 4; i++){
        setTimeout(adBlock, 500)
    }  
}
chrome.runtime.onMessage.addListener((msg) => { //main.jsからメッセージが送られてきた時
    for (let i = 0; i < 4; i++){
        setTimeout(adBlock, 500)
    }  
    return true;
});

const removeElementsBySelector = (selector) => {
    document.querySelectorAll(selector).forEach(el => el.remove());
};

const adBlock = () => {
    removeElementsBySelector("iframe");
    removeElementsBySelector(".yjAdImage");
    removeElementsBySelector(".yadsOverlay");
    removeElementsBySelector(".header-banner-link");
    removeElementsBySelector(".popup-inner");
    removeElementsBySelector(".ad");
    removeElementsBySelector(".advertisement");
    removeElementsBySelector(".banner");
    removeElementsBySelector(".ad-banner");
    removeElementsBySelector(".ad-container");
    removeElementsBySelector(".ad-box");
    removeElementsBySelector(".ad-link");
    removeElementsBySelector(".ad-anchor");
    removeElementsBySelector(".sponsor");
    removeElementsBySelector(".advertiser");
    removeElementsBySelector(".promo");
    removeElementsBySelector(".promotion");
    removeElementsBySelector(".Introduction__item__image");

};