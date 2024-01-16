// ドキュメントが読み込まれたときに実行される処理
document.addEventListener("DOMContentLoaded", () => {
    // 現在のウィンドウでアクティブなタブを取得
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // アクティブなタブにメッセージを送信
        chrome.tabs.sendMessage(tabs[0].id, {}, (res) => {
            // 0.7秒後にポップアップウィンドウを閉じる
            setTimeout(() => {
                window.close();
            }, 10000); // 10000ミリ秒（10秒）
        });
    });
});

// 保存ボタンがクリックされたときの処理を定義
document.getElementById("saveButton").addEventListener("click", function () {
    // テキスト入力フィールドの値を取得
    const inputText = document.getElementById("inputText").value;

    // ローカルストレージから保存されたテキストリストを取得
    chrome.storage.local.get("savedTextList", function (result) {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            // 保存されたテキストリストを取得し、存在しなければ空のリストを作成
            const savedTextList = result.savedTextList || [];

            // 新しいテキストをリストに追加
            savedTextList.push(inputText);

            // テキストリストをChromeストレージに保存
            chrome.storage.local.set({ "savedTextList": savedTextList }, function () {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                } else {
                    console.log("Text saved successfully!");
                    alert("このクラスを持つ要素をブロックします" + inputText);
                    // テキストを保存した後にリストを更新
                    displaySavedTextList(savedTextList);
                }
            });
        }
    });
});

// 参照ボタンがクリックされたときの処理を定義
document.getElementById("retrieveButton").addEventListener("click", function () {
    // ローカルストレージから保存されたテキストリストを取得
    chrome.storage.local.get("savedTextList", function (result) {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            const savedTextList = result.savedTextList;
            if (savedTextList && savedTextList.length > 0) {
                // 保存されたテキストリストを表示
                alert(savedTextList);
            } else {
                alert("No saved text found.");
            }
        }
    });
});