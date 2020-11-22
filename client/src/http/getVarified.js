export const valid = (hashKey) => {
  return new Promise(async (resolve) => {
    const dataString = {
      jsonrpc: "2.0",
      method: "klay_getTransactionByHash",
      params: [hashKey],
      id: 0,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataString),
    };
    const res = await fetch("https://api.baobab.klaytn.net:8651", options);
    const temp = await res.json();
    function hexToString(hex) {
      var string = "";
      for (var i = 0; i < hex.length; i += 2) {
        string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }
      return string;
    }
    const res2 = await fetch("http://localhost:3000/api/hexToString?payload=" + temp.result.input, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    resolve(await res2.json());
  });
};
