import { makeUser } from "../../../../test/factories/make-user";
import { InMemoryUsersRepository } from "../../../../test/repositories/in-memomry-users-repository";
import { CreateUserUseCase } from "./create-user";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    sut = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to create an user', async () => {

    const newUser = makeUser()

    const { user } = await sut.execute(newUser);

    expect(user.id).toBeTruthy();
    expect(inMemoryUsersRepository.items[0].id).toEqual(user.id);
  });
});
