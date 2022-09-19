const blockchain = require('./blockchain');

const bitcoin = new blockchain();
 
bitcoin.createnewblock(1234,'hgjbklnkbj','unkjbkjvghc');
bitcoin.createnewblock(09876,'czvxbxvbx','cnvxnbc');

bitcoin.createnewtransaction(1000,"korangi","defence");
bitcoin.createnewtransaction(8000,".............korangi","............defence");
bitcoin.createnewtransaction(8000,"11111111111111","qqqqqqqqqqqqqq");

bitcoin.createnewblock(11111111,'zzzzzzzzzzzzz','xxxxxxxxxxxxx');


// console.log(bitcoin);
console.log(bitcoin.chain[2]);