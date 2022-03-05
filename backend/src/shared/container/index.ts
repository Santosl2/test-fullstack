import "@modules/users/providers";
import { container } from "tsyringe";

import IUsersRepository from "@modules/users/repositories/IUserRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);
