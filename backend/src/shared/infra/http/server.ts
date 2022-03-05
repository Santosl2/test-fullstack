/* eslint-disable import/extensions */
import "reflect-metadata";

import express from "express";
// eslint-disable-next-line import/no-unresolved
import "../typeorm";

const app = express();

app.use(express.json());

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log("Server listen on port 3333");
});
