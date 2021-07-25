const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyParser = require("body-parser");

// db 관련

class App {
  constructor() {
    this.app = express();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 라우팅
    this.getRouting();
  }

  setMiddleWare() {
    // 미들웨어 셋팅
    this.app.use(logger("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  getRouting() {
    this.app.use(require("./controllers"));
  }
}

module.exports = new App().app;
