import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";
import AppError from "@shared/errors/AppError";

type TokenPayload = {
  iat: number;
  exp: number;
  sub: string;
};

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token em falta", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decodeToken = verify(token, auth.jwt.secret);

    const { sub } = decodeToken as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError("Token inválido ou expirado.", 401);
  }
}
