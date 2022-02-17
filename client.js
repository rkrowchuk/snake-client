const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("connected");
    conn.write('Name: RNK');
  });

  // conn.on("connect", () => {
  //   setInterval(() => {conn.write("Move: up")}, 50);
  // });

  

  conn.on("data", (data) => {
    console.log(data);// code that does something when data is sent
  });

  return conn;
};

module.exports = { connect };
