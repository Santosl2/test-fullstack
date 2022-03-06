import AppError from "@shared/errors/AppError";

import FakeUsersRepository from "../infra/typeorm/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import { CreateUserService } from "./CreateUserService";
import { RequestInformationsService } from "./RequestInformationsService";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let requestInformations: RequestInformationsService;

describe("RequestInformationsService", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    requestInformations = new RequestInformationsService(fakeUsersRepository);
  });

  it("should be able to find user info", async () => {
    const user = await createUser.execute({
      name: "John Doe",
      password: "123456",
      email: "test@test.com",
    });

    const info = await requestInformations.execute({ id: user.id });
    expect(info).toHaveProperty("email");
    expect(info).toHaveProperty("name");
  });

  it("should not be able to find user info if user not exists", async () => {
    await expect(
      requestInformations.execute({ id: "1" }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
