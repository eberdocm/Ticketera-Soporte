const express = require("express");
const { google } = require("googleapis");

const path = require("path");

const controlador = {
  index: (req, res) => {
    res.render(path.resolve(__dirname, "../views/index.ejs"));
  },
  processSend: async (req, res) => {
    await enviarDatos(req);
    return res.redirect("/enviado");
  },
  enviado: (req, res) => {
    res.render(path.resolve(__dirname, "../views/enviado.ejs"));
  },
  login: (req, res) => {
    res.render(path.resolve(__dirname, "../views/login.ejs"), {
      errors: "",
    });
  },
  processLogin: (req, res) => {
    if (req.body.password !== "Soporte*123") {
      res.render(path.resolve(__dirname, "../views/login.ejs"), {
        errors: "Contraseña incorrecta",
      });
    } else {
      res.cookie("logged", true, {
        maxAge: 15000 * 60,
        httpOnly: true,
      });
      return res.redirect("/");
    }
  },
  staff: (req, res) => {
    res.render(path.resolve(__dirname, "../views/staff.ejs"));
  },
  staffEnviado: async (req, res) => {
    await enviarDatosStaff(req);
    return res.redirect("/enviado");
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
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getSeconds().toString().padStart(2, "0"),
  ];

  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  const fecha = `${day}/${month}/${year} ${hour - 3}:${minutes}:${seconds}`;

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
  return true;
}

async function enviarDatosStaff(req, res) {
  const {
    nombre,
    apellido,
    documento,
    telefono,
    sector,
    email,
    ubicacion,
    anydesk,
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
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getSeconds().toString().padStart(2, "0"),
  ];

  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  const fecha = `${day}/${month + 1}/${year} ${hour - 3}:${minutes}:${seconds}`;

  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Staff!A2",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [
          fecha,
          libre,
          libre,
          ubicacion,
          sector,
          comentario,
          anydesk,
          telefono,
          nombre,
          apellido,
          documento,
          email,
        ],
      ],
    },
  });
  return true;
}

module.exports = controlador;
