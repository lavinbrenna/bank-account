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