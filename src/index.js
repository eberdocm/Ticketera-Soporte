const express = require("express");
const { google } = require("googleapis");
const app = express();
const ghpages = require('gh-pages');

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


let main = require("./routers/main");

app.use("/", main);

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post("/", async (req, res) => {
//   const { name, inconveniente } = req.body;

//   const auth = new google.auth.GoogleAuth({
//     keyFile: "credentials.json",
//     scopes: "https://www.googleapis.com/auth/spreadsheets",
//   });

//   //crear cliente para auth
//   const client = await auth.getClient();

//   const googleSheets = google.sheets({ version: "v4", auth: client });

//   const spreadsheetId = "1BcikDwGx7vnLsu0qtYJZABvZjYCRsBdupFM_qVDrGE8";

//   //get metadata

//   const metaData = await googleSheets.spreadsheets.get({
//     auth,
//     spreadsheetId,
//   });

//   // Read rows from spreadsheet

//   const getRows = await googleSheets.spreadsheets.values.get({
//     auth,
//     spreadsheetId,
//     range: "Tickets",
//   });

//   //write row(s) to spreadsheet

//   const date = new Date();

//   const [hour, minutes, seconds] = [
//     date.getHours(),
//     date.getMinutes(),
//     date.getSeconds(),
//   ];

//   const [day, month, year] = [
//     date.getDate(),
//     date.getMonth(),
//     date.getFullYear(),
//   ];

//   const fecha = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`

//   googleSheets.spreadsheets.values.append({
//     auth,
//     spreadsheetId,
//     range: "Tickets!B5",
//     valueInputOption: "USER_ENTERED",
//     resource: {
//       values: [[name, inconveniente, fecha , "joni"]],
//     },
//   });

//   res.send("Enviado correctamente");
// });



ghpages.publish('dist', function(err) {});

app.listen(3001, () => {
  console.log("Servidor funcionando en http://localhost:3001");
});
