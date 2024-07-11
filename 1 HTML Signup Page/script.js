function validatePasswords(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = event.value; 
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false; // Prevent the form from being submitted
    }

    return true; // Allow the form to be submitted
}
