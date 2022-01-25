//Business Logic for Bank Account

function BankAccount(){
  this.accounts = {}
  this.currentId = 0;
}

//Assign account id
BankAccount.prototype.assignId = function(account){
  this.currentId += 1;
  return this.currentId;
}
//add account
BankAccount.prototype.addAccount = function(account){
account.id = this.assignId();
this.accounts[account.id]= account;

}
//check account balance
BankAccount.prototype.checkBalance = function(id){
  if (this.accounts[id] != undefined){
    return this.accounts[id];
  }
  return false;
}

//Business Logic for Account

function Account(name, amount){
  this.name = name;
  this.amount = amount;
}

//deposit amount
Account.prototype.deposit = function(amount){
  this.amount += amount;
  console.log(this.amount);
  return this.amount;
}
//withdraw amount
Account.prototype.withdraw = function(amount){
  this.amount -= amount;
  console.log(this.amount);
  return this.amount;
}

//UI logic

$(document).ready(function(){
  $("form#initialBalanceForm").submit(function(event){
    event.preventDefault();
    const name = $("input#name").val();
    const initialBalance = parseInt($("input#initial-balance").val());
    console.log(initialBalance);
    const withdraw = parseInt($("input#withdrawal-amount").val());
      const deposit = parseInt($("input#deposit-amount").val());
    let newBankAccount = new BankAccount();
    let account = new Account(name, initialBalance);
    newBankAccount.addAccount(account);
    console.log(newBankAccount);
    console.log(account);
    if(withdraw != NaN){
      account.withdraw();
      newBankAccount.checkBalance(account.id);
      console.log("withdraw");
    }else if(deposit != NaN){
      account.deposit();
      newBankAccount.checkBalance(account.id);
      console.log("deposit");
    }else{
      newBankAccount.checkBalance(account.id);
      console.log("initial funds");
    }
    });
})