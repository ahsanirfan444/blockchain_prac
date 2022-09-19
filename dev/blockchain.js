const sha256 = require('sha256');

function blockchain(){
    this.chain = [];
    this.pendingTransactions = [];

    // Genesis Blocknpm install express --save
    this.createnewblock(100,'0','0')
}

blockchain.prototype.createnewblock = function(nonce,prevblockhash,hash){

    const newblock = {
        index:this.chain.length+1,
        timestamp:Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        prevblockhash:prevblockhash,
        hash,hash
    };
    this.pendingTransactions = [];
    this.chain.push(newblock)

    return newblock;
}
blockchain.prototype.getlastblock = function(){
   return this.chain[this.chain.length-1];
}

blockchain.prototype.createnewtransaction = function(amount,sender,recipient){
    const newTransaction ={
        amount :amount,
        sender:sender,
        recipient:recipient
    };
    this.pendingTransactions.push(newTransaction);

return this.getlastblock()['index']+1;

}


blockchain.prototype.hashblock = function(previousblockhash,currentBlockData,nonce){

    const DataString = previousblockhash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(DataString);
    return hash;
    
}

blockchain.prototype.proveofwork = function(prevblockhash,currentBlockData){

    let nonce = 0;
    let hash = this.hashblock(prevblockhash,currentBlockData,nonce);
    while (hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashblock(prevblockhash,currentBlockData,nonce);
        // console.log(nonce)
        // console.log(hash)
    }

    return nonce;

}



module.exports = blockchain;