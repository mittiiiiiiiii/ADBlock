document.addEventListener("DOMContentLoaded", () => { //読み込み直後処理
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => { //今開いているタブ
        chrome.tabs.sendMessage(tabs[0].id, {}, (res) => { //メッセージを送る
            setTimeout( () => { window.close(); }, 10000); //0.7秒後にpopup.htmlを閉じる
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var showButton = document.getElementById("submit_button");
    var userInput = document.getElementById('user_input');

    showButton.addEventListener('click', function () {
        var text = userInput.value;
        alert("このクラスを持つ要素をブロックします"+ text);
    });
});