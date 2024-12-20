const express = require("express");

const { google } = require("googleapis");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/", async (req, res) => {

    const {name, inconveniente} = req.body;



    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    //crear cliente para auth
    const client = await auth.getClient();

    const googleSheets = google.sheets({version: "v4", auth: client});

    const spreadsheetId = "1BcikDwGx7vnLsu0qtYJZABvZjYCRsBdupFM_qVDrGE8"

    //get metadata

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId
    })

    // Read rows from spreadsheet

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Tickets"
    })

    //write row(s) to spreadsheet

    googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Tickets!A10:F",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [name, inconveniente, "hola", "joni"]
            ]
        }
    })

  res.send("Enviado correctamente");

});

app.listen(1337, (req, res) => console.log("running localhost:1337"));
