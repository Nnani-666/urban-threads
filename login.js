function switchToRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("form-title").innerText = "Register";
}

function switchToLogin() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("form-title").innerText = "Login";
}

function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (!username || !password) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Registration successful");
  switchToLogin();
}

function forceLogin() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    (username === "admin" && password === "1234") ||
    (storedUser && username === storedUser.username && password === storedUser.password)
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "Dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}
