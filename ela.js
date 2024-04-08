const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});

function validateEmail(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (validateEmailFormat(email)) {
        document.getElementById('result').textContent = 'Valid email entered.';
        emailInput.style.border = '1px solid green';
    } else {
        document.getElementById('result').textContent = 'Invalid email format. Please enter a valid email.';
        emailInput.style.border = '1px solid red';
    }
}

function validateEmailFormat(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}