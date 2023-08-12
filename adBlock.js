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

const adBlock = () => { //広告削除
    Array.from(document.getElementsByTagName("iframe")).forEach((el) => {
        el.remove();
    });
    Array.from(document.getElementsByClassName("yjAdImage")).forEach((el) => {
        el.remove();
    });
    Array.from(document.getElementsByClassName("yadsOverlay")).forEach((el) => {
        el.remove();
    });
}