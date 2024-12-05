function calculateEMI() {
  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interestRate = parseFloat(document.getElementById("interest-rate").value);
  const interest = loanAmount * (interestRate / 100);
  const totalAmount = loanAmount + interest;
  // const emi = totalAmount*12; 
  const emi = interest*12+loanAmount; 
  // const emi = totalAmount;
  document.getElementById("emi-result").innerText = "EMI: $" + emi.toFixed(2);
  
}