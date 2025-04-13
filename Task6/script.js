document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to handle validation

    // Clear previous error messages
    document.getElementById("error-messages").innerHTML = "";

    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let errors = [];

    // Validate username
    if (username.length < 3) {
      errors.push("Username must be at least 3 characters long.");
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // Validate password
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    // Show error messages if any
    if (errors.length > 0) {
      let errorMessages = "";
      errors.forEach(function (error) {
        errorMessages += `<p>${error}</p>`;
      });
      document.getElementById("error-messages").innerHTML = errorMessages;
    } else {
      // 
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
    }
  });
