$(document).ready(() => { //ページ読み込み直後
    adBlock();
});
window.onload = () => { //ページ読み込み完了時
    adBlock();
    setTimeout(adBlock, 3000); //3秒後
    setTimeout(adBlock, 5000); //5秒後
}
chrome.runtime.onMessage.addListener((msg) => { //main.jsからメッセージが送られてきた時
    adBlock();
    return true;
});

const adBlock = () => { //広告削除
    Array.prototype.slice.call(document.getElementsByTagName("iframe")).forEach((el) => {
        el.remove();
    });
    Array.prototype.slice.call(document.getElementsByClassName("yjAdImage")).forEach((el) => {
        el.remove();
    });
    Array.prototype.slice.call(document.getElementsByClassName("yadsOverlay")).forEach((el) => {
        el.remove();
    });
}