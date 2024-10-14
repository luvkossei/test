document.addEventListener('DOMContentLoaded', function() {
    // 画像切り替え処理
    const toggleImage = document.getElementById('toggle-image');
    let isImage1 = true;
    toggleImage.addEventListener('click', function() {
      if (isImage1) {
        toggleImage.src = '/images/web-pro-1.jpg';
      } else {
        toggleImage.src = '/images/web-pro-1.jpg';
      }
      isImage1 = !isImage1;
    });
  
    // ユーザー名を変更する処理
    const welcomeMessage = document.getElementById('welcome-message');
    const changeUserButton = document.getElementById('change-user');
    const usernameInput = document.getElementById('username');
  
    changeUserButton.addEventListener('click', function() {
      const username = usernameInput.value;
      if (username) {
        welcomeMessage.textContent = `こんにちは、${username}！`;
      } else {
        welcomeMessage.textContent = 'こんにちは、ゲスト！';
      }
    });
  });
  