import * as admin from 'firebase-admin'
import { UserRepository } from './types/UserRepository'
import { User } from './types/User'

/**
 * The user DAL
 */
class CspUserRepository implements UserRepository {
  constructor (protected firestore: admin.firestore.Firestore) {}

  /**
   * @inheritDoc
   */
  initialiseUser (userId: string, user: User): Promise<void> {
    return this.firestore.collection('profiles')
      .doc(userId)
      .set(user)
      .then(() => null)
  }
}

export { CspUserRepository }
