function checkLogin() {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}
