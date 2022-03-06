/* eslint-disable import/extensions */
import { Router } from "express";

import sessionsRouter from "@modules/users/infra/http/routes/password.routes";
import usersRouter from "@modules/users/infra/http/routes/users.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);

export default routes;
