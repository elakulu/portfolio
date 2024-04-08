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