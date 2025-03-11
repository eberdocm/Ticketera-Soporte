const express = require("express");
const path = require("path");

const instructivosController = {
  personal: (req, res) => {
    res.render(path.resolve(__dirname, "../views/instructivos/personal.ejs"));
  },
  telecentro: (req, res) => {
    res.render(path.resolve(__dirname, "../views/instructivos/telecentro.ejs"));
  },
  ventas: (req, res) => {
    res.render(path.resolve(__dirname, "../views/instructivos/ventas.ejs"));
  },
  reten: (req, res) => {
    res.render(path.resolve(__dirname, "../views/instructivos/reten.ejs"));
  },
  pfizer: (req, res) => {
    res.render(path.resolve(__dirname, "../views/instructivos/pfizer.ejs"));
  },
  zurich: (req, res) => {
    res.render(path.resolve(__dirname, "../views/instructivos/zurich.ejs"));
  },
};

module.exports = instructivosController;
