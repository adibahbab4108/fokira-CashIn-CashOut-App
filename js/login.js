
// step 1- Set Event handler
document.getElementById('login-btn').addEventListener('click', function (event) {
    // step-2  prevent auto reloading browser
    event.preventDefault();

    // step-3 get the phone and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '5' && pinNumber === "1234") {
        location.href = '/home.html';
    } else alert('Wrong phone or pin');
})