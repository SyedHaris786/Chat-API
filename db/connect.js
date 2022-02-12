const { Client } = require("pg");

const client = new Client({
  user: "admin",
  password: "admin123",
  host: "localhost",
  port: 5432,
  database: "node_login",
});
client.connect()
// The promises way

// const connectPg = () => {
//   client
//     .connect()
//     .then(() => console.log("Connected to database"))
//     .then(() => client.query("SELECT * FROM person where id=1"))
//     .then((results) => console.table(results.rows))
//     .catch((e) => console.log(e))
//     .finally(() => client.end());
// };

// //The async await way
// async function connectPg() {

//   await client.connect();

//   console.log('Connected Succesfully');

//   // const results = await client.query("select * from person order by id")
//   // console.table(results.rows);
//   // await client.end()
//   // console.log('Disconnected');
// }


// using connection string code
// require("dotenv").config();

// const { Pool } = require("pg");

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: isProduction
// });

// const Pool = require('pg').Pool;


// const pool = new Pool({  
//   user: "admin",
//   password: "admin123",
//   host: "localhost",
//   port: 5432,
//   database: "node_login",
// });

module.exports = { client };

// module.exports = connectPg