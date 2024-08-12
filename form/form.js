const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameErr = document.getElementById('nameErr');
const emailErr = document.getElementById('emailErr');
const successMsg = document.getElementById('success');

nameErr.style.display = 'none';
emailErr.style.display = 'none';
successMsg.style.display = 'none';

const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    let hasError = false;

    const nameValue = nameInput.value.trim();
    if (!namePattern.test(nameValue)) {
        nameErr.style.display = 'block';
        nameErr.textContent = 'Name is invalid.';
        hasError = true;
    } else {
        nameErr.style.display = 'none';
    }

    const emailValue = emailInput.value.trim();
    if (!emailPattern.test(emailValue)) {
        emailErr.style.display = 'block';
        emailErr.textContent = 'Email is invalid.';
        hasError = true;
    } else {
        emailErr.style.display = 'none';
    }

    if (!hasError) {
        successMsg.style.display = 'block';
        successMsg.textContent = 'Data is successfully submitted!';
    }
});