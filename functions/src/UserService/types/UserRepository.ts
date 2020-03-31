import { User } from './User'

/**
 * Acts as the DAL for user accounts
 */
interface UserRepository {
  /**
   * Create a user's account document
   */
  initialiseUser (userId: string, user: User): Promise<void>
}

export { UserRepository }
