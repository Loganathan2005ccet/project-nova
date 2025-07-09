function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    alert("Signup successful! Redirecting to login...");
    window.location.href = "login.html";
  } else {
    alert("Please fill in all fields.");
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (username === savedUser && password === savedPass) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
}

