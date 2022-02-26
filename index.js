const signUpForm = document.querySelector("form");
const submitButton = document.querySelector("button#create-account");
const passwordTextBox = document.querySelector("input#password");
const confirmPasswordTextBox = document.querySelector("input#confirm-password");

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
    } else {
        passwordTextBox.classList.remove("invalid");
        confirmPasswordTextBox.classList.remove("invalid");
    }
}