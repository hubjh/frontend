const usernameInput = document.getElementById("username").getElementsByTagName('input');
const passwordInput = document.getElementById("password").getElementsByTagName('input');
const emailInput = document.getElementById("email").getElementsByTagName('input');
const phoneNumberInput = document.getElementById("phoneNumber").getElementsByTagName('input');

const usernameButton = document.getElementById("username").getElementsByTagName('button');
const passwordButton = document.getElementById("password").getElementsByTagName('button');
const emailButton = document.getElementById("email").getElementsByTagName('button');
const phoneNumberButton = document.getElementById("phoneNumber").getElementsByTagName('button');

const submitButton = document.getElementById("submit");

const inputedUsername = document.getElementById('inputed-username');
const inputedPassword = document.getElementById('inputed-password');
const inputedEmail = document.getElementById('inputed-email');
const inputedPhoneNumber = document.getElementById('inputed-phoneNumber');



const usernameRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,20}$/;

usernameButton[0].addEventListener("click", function() {
    const username = usernameInput[0].value;
    if (!usernameRegex.test(username)) {
        alert("올바른 아이디 형식이 아닙니다.");
    } else {
        inputedUsername.innerHTML = username;
    }
});

passwordButton[0].addEventListener("click", function() {
    const password = passwordInput[0].value;
    if (!passwordRegex.test(password)) {
        alert("올바른 패스워드 형식이 아닙니다.");
    } else {
        inputedPassword.innerHTML = password;
    }
});

emailButton[0].addEventListener("click", function() {
    const email = emailInput[0].value;
    inputedEmail.innerHTML = email;
});

phoneNumberButton[0].addEventListener("click", function() {
    const phoneNumber = phoneNumberInput[0].value;
    inputedPhoneNumber.innerHTML = phoneNumber;
});


submitButton.addEventListener("click", function() {
    if ((inputedUsername.textContent && inputedPassword.textContent && inputedEmail.textContent && inputedPhoneNumber.textContent)) {
        alert("로그인 성공!");
        document.getElementById('test').innerHTML = `${inputedUsername.textContent} ${inputedPassword.textContent} ${inputedEmail.textContent} ${inputedPhoneNumber.textContent}`;
    } else {
        alert("로그인 조건을 만족 못했습니다.");
    }
});









