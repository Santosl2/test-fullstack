import "reflect-metadata";

import express from "express";
import "../typeorm";

const app = express();

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log("Server listen on port 3333");
});
