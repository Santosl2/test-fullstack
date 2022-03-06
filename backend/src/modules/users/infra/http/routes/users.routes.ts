import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";

import UsersController from "../controllers/UsersControllers";

const usersRouter = Router();

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
