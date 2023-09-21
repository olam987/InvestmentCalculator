function calculateSavings() {
    const monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
    const savingsPeriod = parseInt(document.getElementById('savingsPeriod').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const includeTax = document.getElementById('includeTax').checked;

    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    let totalSavings = 0;

    for (let i = 0; i < savingsPeriod; i++) {
        totalSavings += monthlyDeposit;
        if (includeTax) {
            const interest = (totalSavings * monthlyInterestRate) * (1 - 0.19); 
            totalSavings += interest;
        } else {
            const interest = totalSavings * monthlyInterestRate;
            totalSavings += interest;
        }
    }

    document.getElementById('result').innerHTML = `After ${savingsPeriod} months you will have ${totalSavings.toFixed(2)} PLN on your account.`;
}

