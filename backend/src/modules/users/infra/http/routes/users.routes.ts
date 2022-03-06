import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";

import RequestInformationController from "../controllers/RequestInformationController";
import UsersController from "../controllers/UsersControllers";
import ensureAuthenticated from "../middlewares/ensureAutenticated";

const usersRouter = Router();

usersRouter.get(
  "/",
  ensureAuthenticated,
  new RequestInformationController().index,
);

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(6).max(32).required(),
      email: Joi.string().email().max(40).required(),
      password: Joi.string().min(6).max(40).required(),
    },
  }),
  new UsersController().create,
);

export default usersRouter;
