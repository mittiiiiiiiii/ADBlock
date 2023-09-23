document.addEventListener("DOMContentLoaded", () => { //読み込み直後処理
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => { //今開いているタブ
        chrome.tabs.sendMessage(tabs[0].id, {}, (res) => { //メッセージを送る
            setTimeout( () => { window.close(); }, 10000); //0.7秒後にpopup.htmlを閉じる
        });
    });
});



// ボタンクリック時の処理を定義
document.getElementById("submit_button").addEventListener("click", function() {
    const inputText = document.getElementById("user_input").value;
    
    // テキストをChromeストレージに保存
    chrome.storage.local.set({ "savedText": inputText }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log("Text saved successfully!");
        }
    });
    alert("このクラスを持つ要素をブロックします"+ inputText);
});


// 入力値を保存する変数


// 参照ボタンがクリックされたときに保存された入力値を表示する関数
function referenceUserInput() {
    const resultDiv = document.getElementById('result');
    if (savedInputValue !== "") {
        resultDiv.textContent = '保存された値: ' + savedInputValue;
    } else {
        resultDiv.textContent = '保存された値はありません。';
    }
}