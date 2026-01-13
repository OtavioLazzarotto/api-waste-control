import { makeUser } from '../../../../test/factories/make-user';
import { InMemoryUsersRepository } from '../../../../test/repositories/in-memomry-users-repository';
import { CreateUserUseCase } from './create-user';

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    sut = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to create an user', async () => {
    const newUser = makeUser();

    const result = await sut.execute(newUser);

    expect(result.isRight()).toBe(true);
    expect(inMemoryUsersRepository.items[0]).toEqual(result.value?.user);
  });
});
