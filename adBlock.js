$(document).ready(() => { //ページ読み込み直後
    
    /*setTimeout(adBlock, 3000); //3秒後
    setTimeout(adBlock, 5000); //5秒後
    setTimeout(adBlock, 7000);*/
    for (let i = 0; i < 4; i++){
        //adBlock();
        setTimeout(adBlock, 500)
      }
});
/*window.onload = () => { //ページ読み込み完了時
    adBlock();
    
}*/
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