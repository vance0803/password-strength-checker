document.getElementById("password").addEventListener("input", function() {
  const password = this.value;
  const strengthText = document.getElementById("strength-text");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength === 0) {
    strengthText.textContent = "";
  } else if (strength <= 2) {
    strengthText.textContent = "Weak ❌";
    strengthText.style.color = "red";
  } else if (strength === 3 || strength === 4) {
    strengthText.textContent = "Moderate ⚠️";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "Strong ✅";
    strengthText.style.color = "green";
  }
});
