const formTitle = document.getElementById("formTitle");
const authButton = document.getElementById("authButton");
const switchText = document.getElementById("switchText");
const switchLink = document.getElementById("switchLink");
const authForm = document.getElementById("authForm");

let isSignUp = false; // Default is now Sign In

function updateForm() {
  formTitle.textContent = isSignUp ? "Create Your Account" : "Welcome Back";
  authButton.textContent = isSignUp ? "Sign Up" : "Sign In";
  switchText.innerHTML = isSignUp
    ? `Already have an account? <a href="#" id="switchLink">Sign In</a>`
    : `Don't have an account? <a href="#" id="switchLink">Sign Up</a>`;

  document.getElementById("switchLink").addEventListener("click", switchMode);
}

function switchMode(e) {
  e.preventDefault();
  isSignUp = !isSignUp;
  updateForm();
}

switchLink.addEventListener("click", switchMode);

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isSignUp) {
    alert(`Signing up with:\nEmail: ${email}\nPassword: ${password}`);
  } else {
    alert(`Signing in with:\nEmail: ${email}\nPassword: ${password}`);
  }

  authForm.reset();
});
