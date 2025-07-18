const encodedUser = {
  email: "dXNlckBleGFtcGxlLmNvbQ==",
  password: "bXlwYXNzd29yZDEyMw=="
};

function decodeBase64(str) {
  return atob(str);
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const enteredEmail = document.getElementById("email").value;
  const enteredPassword = document.getElementById("password").value;
  const message = document.getElementById("message");

  const validEmail = decodeBase64(encodedUser.email);
  const validPassword = decodeBase64(encodedUser.password);

  if (enteredEmail === validEmail && enteredPassword === validPassword) {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password.";
  }
});
