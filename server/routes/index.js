var express = require("express");
var router = express.Router();
var data = require("./../db/data");
const Caver = require("caver-js");

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

  const constructorType = ["string"]; // 적절한 생성자 타입을 입력하세요.
  const constructorValue = ["Hello, Klaytn!"];
  caver.klay
    .sendTransaction({
      type: "SMART_CONTRACT_DEPLOY",
      from: caver.klay.accounts.wallet[0].address,
      gas: "5000000",
      value: caver.utils.toPeb("1", "mKLAY"),
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
    data[req.query.key]
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
module.exports = router;
