var account = {
    cash: 12000,
    withdraw: function(amount) {
        this.cash -=amount;
        console.log('withdrew ' + amount + ', new cash reserve is: ' + this.cash);
    }
};



Object.defineProperty(account, 'deposit',{
    value: function(amount){
        this.cash += amount;
    }
});

account.deposit(3000);
account.withdraw(1000);