//Business Logic for Bank Account

function BankAccount(){
  this.accounts = {}
  this.currentId = 0;
}

//Assign account id
BankAccount.prototype.assignId = function(account){

}
//add account
BankAccount.prototype.addAccount = function(id){
  
}
//check account balance
BankAccount.prototype.checkBalance = function(id){
  if (this.account.id != undefined){
    return this.account.amount;
  }
}

//Business Logic for Account

function Account(name, amount){
  this.name = name;
  this.amount = amount;
}

//deposit amount
Account.prototype.deposit = function(amount){
  this.amount += amount;
  return amount;
}
//withdraw amount
Account.prototype.withdraw = function(amount){
  this.amount -= amount;
  return amount;
}

//UI logic