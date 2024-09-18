//Add Money Button Handling
document.getElementById('add-money-btn').addEventListener('click', function () {
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

})
//Cash Out button handling
document.getElementById('cash-out-btn').addEventListener('click', function () {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden');

})


// Add money to the Account
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const amountToAdd = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(amountToAdd, pinNumber)

    // verification
    if (pinNumber === '55') {
        const balance = document.getElementById('available-balance').innerText;
        const addMoneyNumber = parseFloat(amountToAdd);
        const balanceNumber = parseFloat(balance);
        console.log(balanceNumber);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('available-balance').innerText = newBalance;
    } else alert("Please try again");
})

// Cash Out from the Account
document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();
    const amountToCashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('cash-out-pin-number').value;
    console.log(amountToCashOut, pinNumber)

    // verification
    if (pinNumber === '55') {
        const balance = document.getElementById('available-balance').innerText;
        const amountToCashOutNumber = parseFloat(amountToCashOut);
        const balanceNumber = parseFloat(balance);
        console.log(balanceNumber);
        const newBalance = balanceNumber - amountToCashOutNumber;
        document.getElementById('available-balance').innerText = newBalance;
    } else alert("Please try again");
})