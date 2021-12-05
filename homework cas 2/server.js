const http = require("http");
const fileOps = require ("./promises");

const server = http.createServer();

fileOps
.fileWriter("Kucheto Buli, Macheto Sara")
.than(() => {
    console.log("Wrote to file!");
})
.catch((greska) => {
    console.log(greska);
})

server.listen(8080, () => {
    console.log("Zdravo!");
});