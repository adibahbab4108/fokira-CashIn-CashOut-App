//Add Money Button Handling
document.getElementById('add-money-btn').addEventListener('click', function () {
    showSectionById('add-money-form');
})
//Cash Out button handling
document.getElementById('cash-out-btn').addEventListener('click', function () {
    showSectionById('cash-out-form');
})

//Transaction Button Handling
document.getElementById('transaction-btn').addEventListener('click', function () {
    showSectionById('transaction-history');
})


// Add money to the Account
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const amountToAdd = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;

    // verification
    if (pinNumber === '1234') {
        const balance = document.getElementById('available-balance').innerText;
        const addMoneyNumber = parseFloat(amountToAdd);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('available-balance').innerText = newBalance;

        //Add to transaction
        const div = document.createElement('div');
        div.innerHTML = `
        <h2 class="font-bold text-green-600">
            Added ${addMoneyNumber} tk. New Balance: ${newBalance}
        </h2>
        `
        console.log(div)
        document.getElementById('transaction-container').appendChild(div);

    } else alert("Please try again");


})

// Cash Out from the Account
document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();
    const amountToCashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('cash-out-pin-number').value;

    // verification
    if (pinNumber === '1234') {
        const balance = document.getElementById('available-balance').innerText;
        const amountToCashOutNumber = parseFloat(amountToCashOut);
        const balanceNumber = parseFloat(balance);
        console.log(balanceNumber);
        const newBalance = balanceNumber - amountToCashOutNumber;
        document.getElementById('available-balance').innerText = newBalance;

         //Add to transaction
         const div = document.createElement('div');
         div.innerHTML = `
         <h2 class="font-bold text-red-600">
             Cash Out ${amountToCashOutNumber} tk. New Balance: ${newBalance}
         </h2>
         `
         console.log(div)
         document.getElementById('transaction-container').appendChild(div);
    } else alert("Please try again");
})


