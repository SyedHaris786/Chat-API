const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "admin123",
  host: "localhost",
  port: 5432,
  database: "test",
});
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

//The async await way
const connectPg = async () => {

  await client.connect()
  
  console.log('Connected Succesfully');

  // const results = await client.query("select * from person order by id")
  // console.table(results.rows);

  // await client.end()
  // console.log('Disconnected');

}


module.exports = connectPg