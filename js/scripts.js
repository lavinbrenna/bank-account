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


//UI logic

function withdrawAmount(account, amount){
  let newAmount = account.amount;
  if(amount != "" ){
    newAmount = parseInt(newAmount) - parseInt(amount);
    console.log(newAmount);
    console.log("withdraw");
    account.amount = newAmount.toString();
    return account.amount;

  }
  else{
    return account.amount;
  }
}
function depositAmount(account, amount){
  let newAmount = account.amount;
  if(amount!= ""){
    newAmount = parseInt(newAmount) + parseInt(amount);
    console.log(newAmount);
    console.log("deposit");
    account.amount = newAmount.toString();
    return account.amount;
  }
  else{
    return account.amount;
  }
}
$(document).ready(function(){
  $("form#initialBalanceForm").submit(function(event){
    event.preventDefault();
    const name = $("input#name").val();
    const initialBalance = $("input#initial-balance").val();
    console.log(initialBalance);
    const withdraw = $("input#withdrawal-amount").val();
      const deposit = $("input#deposit-amount").val();
    let newBankAccount = new BankAccount();
    let account = new Account(name, initialBalance);
    newBankAccount.addAccount(account);
    if(withdraw != ""){
      withdrawAmount(account, withdraw);
    }
    else if(deposit != ""){
      depositAmount(account, deposit);
    }
    else{
      newBankAccount.checkBalance(account.id);
    }
    });
})