const { log } = require("console");
const express = require("express");
const { google } = require("googleapis");

const path = require("path");

const controlador = {
  index: (req, res) => {
    // console.log(await autenticacion(req));
    res.render(path.resolve(__dirname, "../views/index.ejs"));
  },
  processSend: async (req, res) => {

    await enviarDatos(req)

    return res.redirect("/home")
    
  },
  home: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.html"));
  },
};

async function enviarDatos(req, res) {
  const { nombre, usuario, inconveniente } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1BcikDwGx7vnLsu0qtYJZABvZjYCRsBdupFM_qVDrGE8";

  const date = new Date();

  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  const fecha = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;

  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Tickets!A2",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[fecha, nombre, usuario, inconveniente]],
    },
  });

  return true;
}

module.exports = controlador;
