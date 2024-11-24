document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
  
    let valid = true;
  
    // Проверка логина
    if (username.value.length < 6) {
      valid = false;
      document.getElementById("username-hint").textContent = "Логин должен содержать минимум 6 символов.";
      document.getElementById("username-hint").style.display = "block";
      username.classList.add("error");
    } else {
      document.getElementById("username-hint").style.display = "none";
      username.classList.remove("error");
    }
  
    // Проверка пароля
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
      valid = false;
      document.getElementById("password-hint").textContent = "Пароль должен содержать минимум 8 символов, 1 цифру, 1 спецсимвол или заглавную букву.";
      document.getElementById("password-hint").style.display = "block";
      password.classList.add("error");
    } else {
      document.getElementById("password-hint").style.display = "none";
      password.classList.remove("error");
    }
  
    // Проверка подтверждения пароля
    if (password.value !== confirmPassword.value) {
      valid = false;
      document.getElementById("confirm-password-hint").textContent = "Пароли не совпадают.";
      document.getElementById("confirm-password-hint").style.display = "block";
      confirmPassword.classList.add("error");
    } else {
      document.getElementById("confirm-password-hint").style.display = "none";
      confirmPassword.classList.remove("error");
    }
  
    // Если все поля валидны
    if (valid) {
      alert("Регистрация успешна!");
      // Здесь может быть логика для отправки данных на сервер
    }
  });
  