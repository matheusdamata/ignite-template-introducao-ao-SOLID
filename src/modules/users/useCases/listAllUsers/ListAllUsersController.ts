/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */

import { Request, Response } from 'express'

import { ListAllUsersUseCase } from './ListAllUsersUseCase'

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    const { user_id } = req.headers

    try {
      const all = this.listAllUsersUseCase.execute({
        user_id: user_id as string,
      })

      return res.json(all)
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      })
    }
  }
}

export { ListAllUsersController }
