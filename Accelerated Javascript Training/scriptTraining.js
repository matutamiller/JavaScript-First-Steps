var account = {
    cash: 12000,
    withdraw: function(amount) {
        this.cash -=amount;
        console.log('withdrew ' + amount + ', new cash reserve is: ' + this.cash);
    }
};

account.withdraw(1000);



