document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const state = document.getElementById("state").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;
    const pincodePattern = /^[0-9]{6}$/;
  
    if (!name || !email || !phone || !password || !confirmPassword || !state || !city || !pincode) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!phonePattern.test(phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }
  
    if (!pincodePattern.test(pincode)) {
      alert("Pincode must be 6 digits.");
      return;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    alert(`🎉 Registered Successfully!\n\nWelcome, ${name}!`);
    this.reset();
  });
  
