const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("connected");
    conn.write('Name: RNK');
  });

  conn.on("data", (data) => {
    console.log(data);// code that does something when data is sent
  });

  return conn;
};

module.exports = { net, connect };
