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

function removeElementsByClassName(className) {
    Array.prototype.slice.call(document.getElementsByClassName(className)).forEach((el) => {
        el.remove();
    });
}

const adBlock = () => { //広告削除
    
    
    removeElementsByClassName("iframe");
    removeElementsByClassName("yjAdImage");
    removeElementsByClassName("yadsOverlay");
}
