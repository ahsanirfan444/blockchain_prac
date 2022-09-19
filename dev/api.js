const express = require('express');
const app = express();

const body_parser = require('body-parser');
const {'v4':uuidv4} = require('uuid');

const nodeAddress = uuidv4().split('-').join('');


const blockchain = require('./blockchain');

const bitcoin = new blockchain;

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended : false}));

app.get('/bitcoin', (req, res) => {
  res.send(bitcoin);
})
// post data in new transaction array
app.post('/transaction', (req, res) => {
    const blockindex =  bitcoin.createnewtransaction(req.body.amount,req.body.sender,req.body.recipient);
    res.json({note:`this transactin will be added in block ${blockindex}`} );
  });

app.get('/mine', (req, res) => {
  // poora ka poora object return hoga getlastblock m
  const lastblock = bitcoin.getlastblock();
  const lastblockhash = lastblock['hash'];

  

  const currentBlockData ={
    transaction:bitcoin.pendingTransactions,
    index:lastblock['index'] +1
  };

  const nonce = bitcoin.proveofwork(lastblockhash,currentBlockData);


  const blockhash = bitcoin.hashblock(lastblockhash,currentBlockData,nonce)

  bitcoin.createnewtransaction(10,"ssss",nodeAddress);

  const newblock = bitcoin.createnewblock(nonce,lastblockhash,blockhash)

  res.json(
    {note:"New block has been mine successfully",
    newblock :newblock
  
  } );
})


app.listen(3000);