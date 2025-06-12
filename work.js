// ✅ 漢堡選單開關
// 原生函式，用來開關導覽選單的顯示狀態（搭配 HTML 的 onclick 呼叫）
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show"); // 切換 navMenu 的 show class，用來顯示或隱藏選單
}

// ✅ 打字機效果（使用 jQuery）
// 🔔【事件監測】這是 jQuery 的事件監聽器，等 DOM 完全載入才執行內部程式碼
$(document).ready(function () {
  // 要輸出的文字
  const text =
    "哈囉各位～我是黃彥程👋，我喜歡嘗試一些我沒做過的事情，這樣讓我覺得很有挑戰性，也希望未來能去英國或其他歐美國家深造，挑戰世界～🌎";

  let i = 0;              // 目前輸出到第幾個字
  const speed = 60;       // 每個字出現的間隔（毫秒）

  // ✅ 定義一個打字機函式
  function typeWriter() {
    if (i < text.length) {
      // 🔔【DOM操作】使用 jQuery 選取 #intro-text，並加上一個字元
      $("#intro-text").append(text.charAt(i));
      i++; // 移到下一個字
      setTimeout(typeWriter, speed); // 延遲呼叫自己，製造「一字一字出現」效果
    }
  }

  // ✅ 保險檢查：只有當頁面上有 #intro-text 才執行打字機
  if ($("#intro-text").length) {
    typeWriter(); // 啟動打字效果
  }
});
