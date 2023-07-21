/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */

import { User } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  user_id: string
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error('User not exists!')
    }

    const userUpdated = this.usersRepository.turnAdmin(user)

    return userUpdated
  }
}

export { TurnUserAdminUseCase }
