import { User } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  name: string
  email: string
}

class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new Error('User already exists!')
    }

    const userCreated = this.usersRepository.create({ name, email })

    return userCreated
  }
}

export { CreateUserUseCase }
