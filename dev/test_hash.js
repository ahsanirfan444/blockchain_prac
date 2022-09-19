const blockchain = require('./blockchain');

const bitcoin = new blockchain();
 
const prevblockhash = "snfksbjgnvsgdfgdgsgfsgdjbgdndkbjg";

const currentBlockData = [
    {
        amount :10,
        sender : 'afjskjdbskbksnflsnskfsppppppppp',
        recipient : 'fjsbjkfskbfskvsknvks'
    },
    {
        amount :55,
        sender : 'afjskjdbskbksnflsnskfsppppppppp',
        recipient : 'fjsbjkfskbfskvsknvks'
    },
    {
        amount :98,
        sender : 'afjskjdbskbksnflsnskfsppppppppp',
        recipient : 'fjsbjkfskbfskvsknvks'
    }
];

nonce = 12345;


var bitcoin_hash = bitcoin.hashblock(prevblockhash,currentBlockData,nonce)

var bitcoin_proof_of_work = bitcoin.proveofwork(prevblockhash,currentBlockData)


var bitcoin_hash_with_correct_nonce = bitcoin.hashblock(prevblockhash,currentBlockData,bitcoin_proof_of_work)

// console.log(bitcoin);
// console.log(bitcoin_hash);
// console.log(bitcoin_proof_of_work);


console.log(bitcoin_hash_with_correct_nonce);

