function createAccount(pin, amount = 0) {
  return {
    checkBalance(attemptedPin) {
      if (attemptedPin !== pin) {
        return "Invalid PIN.";
      } else return `$${amount}`;
    },
    deposit(attemptedPin, depositAmt) {
      if (attemptedPin !== pin) {
        return "Invalid PIN.";
      } else {
        amount += depositAmt;
        return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`;
      }
    },
    withdraw(attemptedPin, withdrawAmt) {
      if (attemptedPin !== pin) {
        return "Invalid PIN.";
      } else {
        if (withdrawAmt > amount) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          amount -= withdrawAmt;
          return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
        }
      }
    },
    changePin(attemptedPin, newPin) {
      if (attemptedPin !== pin) {
        return "Invalid PIN.";
      } else {
        pin = newPin;
        return "PIN successfully changed!";
      }
    },
  };
}

module.exports = { createAccount };
