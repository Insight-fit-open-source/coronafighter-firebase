import { UserService } from './types/UserService'
import { UserRepository } from './types/UserRepository'
import { UserFactory } from 'src/UserService/UserFactory'

/**
 * Handles user auth related events
 */
class CspUserService implements UserService {
  constructor (protected userRepository: UserRepository) {}

  /**
   * @inheritDoc
   */
  initialiseUser (userId: string) {
    const user = UserFactory.createAccount()
    return this.userRepository.initialiseUser(userId, user)
  }
}

export { CspUserService }
