const readline = require("readline-sync");

const account1 = {
  accountNumber: "1",
  routingNumber: "1",
  balance: 1000,
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = "2";

const bankAccounts = [account1, account2];

let isProcessing = true;

while (isProcessing) {
  printMenu();
  let userOption = getUserOption();

  if (userOption == 0) {
    isProcessing = false;
  } else if (userOption == 1) {
    findAnAccount(bankAccounts);
  } else if (userOption == 2) {
    let currentAccount = findAnAccount(bankAccounts);
    if (currentAccount != null) {
      let withdrawMoney = getWithdrawMoney();
      updateBalance(currentAccount, withdrawMoney);
    }
  } else {
    console.log("Invalid option");
  }
  console.log("Welcome to bank application");
}

function printMenu() {
  console.log("0. Exit");
  console.log("1. Find an account");
  console.log("2. Update balance");
}

function getUserOption() {
  return readline.question("Please select an option: ");
}

function getAccountNumber() {
  return readline.question("Input your account number: ");
}

function getWithdrawMoney() {
  return readline.question("Input your withdraw money: ");
}

function findAnAccount(bankAccounts) {
  let getAccountUser = getAccountNumber();
  for (const account of bankAccounts) {
    if (account.accountNumber === getAccountUser) {
      console.log("Your account is: ", account);
    }
    if (account == null || account == undefined) {
      console.log("The account does not exist");
    }
  }
}

function updateBalance(accountNumber, withdrawMoney) {
  if (withdrawMoney > accountNumber.balance) {
    console.log("Your balance is not enough");
  } else {
    accountNumber.balance = accountNumber.balance - Number(withdrawMoney);
    console.log("Remaining balance is: ", accountNumber.balance);
  }
}
