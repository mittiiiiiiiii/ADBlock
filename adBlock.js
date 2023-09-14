// ページ読み込み完了時にadBlock関数を4回呼び出す
window.onload = () => {
    for (let i = 0; i < 4; i++) {
        setTimeout(adBlock, 500); // adBlock関数を0.5秒ごとに4回呼び出す
    }
}

// main.jsからのメッセージ受信時にadBlock関数を4回呼び出す
chrome.runtime.onMessage.addListener((msg) => {
    for (let i = 0; i < 4; i++) {
        setTimeout(adBlock, 500); // adBlock関数を0.5秒ごとに4回呼び出す
    }
    return true;
});

// 指定されたセレクタに一致する要素を削除するユーティリティ関数
const removeElementsBySelector = (selector) => {
    document.querySelectorAll(selector).forEach(el => el.remove()); // セレクタに一致する要素を全て削除
};

// adBlock関数: 消したい要素の文字列を配列で指定し、それらの要素を全て削除
const adBlock = () => {
    const elementPatterns = [/ad-/i, /iframe/i, /otherElement/i,/banner-/i,/closed_icon/i]; // 正規表現パターンを配列で指定
    elementPatterns.forEach(pattern => {
        const elementsToRemove = document.querySelectorAll('*'); // ページ内のすべての要素を取得

        elementsToRemove.forEach(element => {
            // クラス名を取得し、正規表現に一致するか、またはタグ名が正規表現に一致する場合に要素を削除
            const classNames = element.className.split(' '); // クラス名をスペースで分割
            classNames.forEach(className => {
                if (pattern.test(className)) {
                    element.remove(); // 要素を削除
                }
            });
            if (pattern.test(element.tagName.toLowerCase())) {
                element.remove(); // タグ名が正規表現に一致する場合、要素を削除
            }
        });
    });
};
