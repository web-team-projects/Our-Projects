document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".submit-button");
    const messageDiv = document.querySelector(".message");
  
    // Function to validate the input, using a parameter for the input value
    function validateInput(input) {
      if (input === "") {
        setMessage("Error: Input is empty.", "error");
      } else if (input.length < 3) {
        setMessage("Error: Name must be at least 3 characters long.", "error");
    //   } else if (!/^[a-zA-Z\s]+$/.test(input)) {
    //     setMessage("Error: Name can only contain letters and spaces.", "error");
      } else {
        setMessage("Success: Name is valid!", "success");
      }
    }
  
    // Function to set the message dynamically
    function setMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.className = "message " + type;
    }
  
    // Show validation message only on button click
    submitButton.addEventListener("click", function () {
      const inputField = document.querySelector(".input-field");
      const input = inputField.value;  // Get the input value here
      validateInput(input);  // Pass the input value as an argument to validateInput
    });
  });
  