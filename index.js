const signUpForm = document.querySelector("form");
const submitButton = document.querySelector("button#create-account");
const passwordTextBox = document.querySelector("input#password");
const confirmPasswordTextBox = document.querySelector("input#confirm-password");
const passwordMismatchMessageElement = document.querySelector("#password-mismatch-error-message");

passwordTextBox.onkeyup = () => {
    checkPasswordsMatch(passwordTextBox, confirmPasswordTextBox);
}

confirmPasswordTextBox.onkeyup = () => {
    checkPasswordsMatch(passwordTextBox, confirmPasswordTextBox);
}

function checkPasswordsMatch(passwordTextBox, confirmPasswordTextBox) {
    if (passwordTextBox.value !== confirmPasswordTextBox.value) {
        passwordTextBox.classList.add("invalid");
        confirmPasswordTextBox.classList.add("invalid");
        passwordMismatchMessageElement.style.setProperty("display", "block");
    } else {
        passwordTextBox.classList.remove("invalid");
        confirmPasswordTextBox.classList.remove("invalid");
        passwordMismatchMessageElement.style.setProperty("display", "none");
    }
}