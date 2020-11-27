var express = require("express");
var router = express.Router();
var data = require("./../db/data");
const Caver = require("caver-js");
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("test.db");

router.get("/", function (req, res, next) {
  res.json({
    res: "",
  });
});

router.get("/create", function (req, res) {
  const caver = new Caver("https://api.baobab.klaytn.net:8651");
  const walletInstance = caver.klay.accounts.privateKeyToAccount(
    data[req.query.key]
  );
  caver.klay.accounts.wallet.add(walletInstance);

  const fs = require("fs");
  const bytecode = fs.readFileSync("./back_sol_Bank.bin"); // 컴파일된 출력

  caver.klay
    .sendTransaction({
      type: "SMART_CONTRACT_DEPLOY",
      from: caver.klay.accounts.wallet[0].address,
      gas: "5000000",
      value: caver.utils.toPeb(Number(req.query.price), "mKLAY"),
      data: bytecode.toString(),
    })
    .then(function (receipt) {
      res.json({ url: `/api/getMoney?address=${receipt.contractAddress}` });
    })
    .catch(function (err) {
      console.log(err);
    });
});
router.get("/getMoney", function (req, res) {
  const caver = new Caver("https://api.baobab.klaytn.net:8651");
  const walletInstance = caver.klay.accounts.privateKeyToAccount(
    data["0xa35f6ef18ae324ab95df55963a90bb84937c4480"]
  );
  caver.klay.accounts.wallet.add(walletInstance);

  caver.klay
    .sendTransaction({
      type: "SMART_CONTRACT_EXECUTION",
      from: caver.klay.accounts.wallet[0].address,
      to: req.query.address,
      gas: "300000",
      data: caver.utils.sha3("getMoney()").substr(0, 10),
    })
    .then(function (err, r) {
      res.json({ r, receipt });
    });
});
router.get("/menu", function (req, res) {
  db.serialize(function () {
    const query = `select * from menu where seller_id=1`;
    db.all(query, function (err, rows) {
      if (err) res.status(400).send("ee");
      else {
        res.json({ rows });
      }
    });
  });
});

router.post("/menu", function (req, res) {
  const caver = new Caver("https://api.baobab.klaytn.net:8651");
  const sendData_str = JSON.stringify({
    title: req.body.title,
    price: req.body.price,
  });
  var encoded = caver.utils.utf8ToHex(sendData_str);
  const walletInstance = caver.klay.accounts.privateKeyToAccount(
    "0xd122215bc376df8636d270846613019d572ad66e314be192f070792e66377a7f"
  );
  caver.klay.accounts.wallet.add(walletInstance);
  console.log(sendData_str);
  caver.klay
    .sendTransaction({
      type: "VALUE_TRANSFER_MEMO",
      from: caver.klay.accounts.wallet[0].address,
      to: caver.klay.accounts.wallet[0].address,
      gas: "300000",
      value: caver.utils.toPeb("1", "mKLAY"),
      data: `${encoded}`,
    })
    .then(function (rawTransaction) {
      db.serialize(function () {
        const query = `insert into menu(name,price,hashText,seller_id) values('${req.body.title}',${req.body.price},'${rawTransaction.transactionHash}',1);`;
        db.run(query, function (err) {
          if (err) res.status(400).send("ee");
          else res.send("good");
        });
      });
    })
    .catch(function (err) {
      reject(err);
    });
});
router.get("/hexToString", function (req, res) {
  const caver = new Caver("https://api.baobab.klaytn.net:8651");
  res.json({ result: caver.utils.hexToUtf8(req.query.payload) });
});

module.exports = router;
