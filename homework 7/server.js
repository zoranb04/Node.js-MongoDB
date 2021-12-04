require("dotenv").config();
const http = require("http");
const app = require("./app");
const db = require("./config/db");


const PORT = process.env.PORT;
const server = http.createServer(app);

db().then(() => {
    server.listen(PORT, () =>{
        console.log("Server strted!");
    })

})
.catch((err) => {
console.log(err)
})