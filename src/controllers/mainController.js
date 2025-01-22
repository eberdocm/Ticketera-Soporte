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
    await enviarDatos(req);
    return res.redirect("/enviado");
  },
  enviado: (req, res) => {
    res.render(path.resolve(__dirname, "../views/enviado.ejs"));
  },
};

async function enviarDatos(req, res) {
  const {
    nombre,
    apellido,
    documento,
    telefono,
    usuario,
    campana,
    turno,
    superior,
    email,
    motivo,
    ubicacion,
    anydesk,
    puesto,
    comentario,
  } = req.body;
  const libre = "";
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1BcikDwGx7vnLsu0qtYJZABvZjYCRsBdupFM_qVDrGE8";

  const date = new Date();

  const [hour, minutes, seconds] = [
    date.getHours().toString().padStart(2, '0'),
    date.getMinutes().toString().padStart(2, '0'),
    date.getSeconds().toString().padStart(2, '0'),
  ];

  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  const fecha = `${day}/${month}/${year} ${hour-3}:${minutes}:${seconds}`;

  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Tickets!A2",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [
          fecha,
          libre,
          libre,
          ubicacion,
          campana,
          puesto,
          motivo,
          comentario,
          anydesk,
          telefono,
          nombre,
          apellido,
          documento,
          usuario,
          email,
          superior,
          turno,
        ],
      ],
    },
  });
  console.log(fecha);
  
  return true;
}

module.exports = controlador;
