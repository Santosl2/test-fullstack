/* eslint-disable no-useless-constructor */
import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import IUsersRepository from "../repositories/IUserRepository";

interface IRequest {
  id: string;
}

interface Response {
  name: string;
  email: string;
}

@injectable()
class RequestInformationsService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Response> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário inválido");
    }

    return {
      email: user.email,
      name: user.name,
    };
  }
}

export { RequestInformationsService };
