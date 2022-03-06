/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

import "reflect-metadata";
import { isCelebrateError } from "celebrate";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import "../typeorm";

import AppError from "@shared/errors/AppError";

import "@shared/container";
import routes from "./routes";

const app = express();
app.use(express.json());

app.use(routes);

// app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (isCelebrateError(err)) {
    const errorBody = err.details.get("body");

    return response.json({
      statusCode: 400,
      message: errorBody?.message,
    });
  }
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => {
  console.log("Server listen on port 3333");
});
