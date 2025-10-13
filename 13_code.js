const form = document.getElementById("register");

function validatePhone(number) {
    let re = /\(\d{4}\)\s\d{3}-\d{4}/g;
    return re.test(number);
}

form.onsubmit = function () {
    const phoneInput = document.getElementById("phone").value;
    // console.log(validatePhone(phoneInput));
    return validatePhone(phoneInput);
};
