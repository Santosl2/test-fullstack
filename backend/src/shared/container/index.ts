import "@modules/users/providers";
import { container } from "tsyringe";

import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import IUsersRepository from "@modules/users/repositories/IUserRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);
