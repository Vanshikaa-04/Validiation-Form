// Get the form and input fields
const form = document.getElementById('registration-form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');


// Add event listeners to the form and input fields
form.addEventListener('submit', validateForm);
fullNameInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        validateFullName(fullNameInput.value.trim());
        if (validateFullName(fullNameInput.value.trim())) {
            emailInput.focus();
        }
    }
    validateFullName(fullNameInput.value.trim());
});
emailInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        validateEmail(emailInput.value.trim());
        if (validateEmail(emailInput.value.trim())) {
            phoneNumberInput.focus();
        }
    }
    validateEmail(emailInput.value.trim());
});
phoneNumberInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        validatePhoneNumber(phoneNumberInput.value.trim());
        if (validatePhoneNumber(phoneNumberInput.value.trim())) {
            passwordInput.focus();
        }
    }
    validatePhoneNumber(phoneNumberInput.value.trim());
});
passwordInput.addEventListener('keyup', function() {
    validatePassword(passwordInput.value.trim(), confirmPasswordInput.value.trim());
});
confirmPasswordInput.addEventListener('keyup', function() {
    validateConfirmPassword(passwordInput.value.trim(), confirmPasswordInput.value.trim());
});

// Validation functions
function validateForm(event) {
    event.preventDefault();
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!validateFullName(fullName)) {
        return;
    }
    if (!validateEmail(email)) {
        return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
        return;
    }
    if (!validatePassword(password)) {
        return;
    }
    if (!validateConfirmPassword(password, confirmPassword)) {
        return;
    }

    // If all validations pass, submit the form
    form.submit();
}

function validateFullName(fullName) {
    if (fullName.length < 5) {
        document.getElementById('full-name-error').innerText = 'Name must be at least 5 characters';
        return false;
    }
    document.getElementById('full-name-error').innerText = '';
    return true;
}

function validateEmail(email) {
    if (!email.includes('@')) {
        document.getElementById('email-error').innerText = 'Email must contain @ character';
        return false;
    }
    document.getElementById('email-error').innerText = '';
    return true;
}

function validatePhoneNumber(phoneNumber) {
    if (phoneNumber === '123456789' || phoneNumber.length!== 10) {
        document.getElementById('phone-number-error').innerText = 'Invalid phone number';
        return false;
    }
    document.getElementById('phone-number-error').innerText = '';
    return true;
}

function validatePassword(password) {
    let errorMessage = '';

    if (password === '') {
        errorMessage = 'Password is required';
    } else if (password === 'password') {
        errorMessage = 'Password cannot be "password"';
    } else if (password.length < 8) {
        errorMessage = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(password)) {
        errorMessage = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(password)) {
        errorMessage = 'Password must contain at least one lowercase letter';
    } else if (!/[0-9]/.test(password)) {
        errorMessage = 'Password must contain at least one number';
    } else if (!/[@]/.test(password)) {
        errorMessage = 'Password must contain at least one special character';
    }

    if (errorMessage) {
        document.getElementById('password-error').innerText = errorMessage;
        return false;
    }
    document.getElementById('password-error').innerText = '';
    return true;
}

function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword === '') {
        document.getElementById('confirm-password-error').innerText = 'Confirm password is required';
        return false;
    }
    if (password!== confirmPassword) {
        document.getElementById('confirm-password-error').innerText = 'Passwords do not match';
        return false;
    }
    document.getElementById('confirm-password-error').innerText = '';
    return true;
}

