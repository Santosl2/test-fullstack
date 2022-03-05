import AppError from "@shared/errors/AppError";

import FakeUsersRepository from "../infra/typeorm/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import { CreateUserService } from "./CreateUserService";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe("CreateUserService", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it("should be able to create a new user", async () => {
    const user = await createUser.execute({
      name: "John Doe",
      password: "123456",
      email: "test@test.com",
    });

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("John Doe");
  });

  it("should not be able to create a new user on the same email", async () => {
    await createUser.execute({
      name: "John Doe",
      password: "olamundo",
      email: "johndoe@example.com.br",
    });

    await expect(
      createUser.execute({
        name: "John Doe 2 ",
        password: "helloworld",
        email: "johndoe@example.com.br",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should be able hash password", async () => {
    const generatePasswordHash = jest.spyOn(fakeHashProvider, "generateHash");

    await createUser.execute({
      name: "John Doe",
      password: "olamundo",
      email: "johndoe@example.com.br",
    });

    expect(generatePasswordHash).toBeCalledWith("olamundo");
  });
});
