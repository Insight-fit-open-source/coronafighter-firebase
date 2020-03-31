import * as moment from 'moment'
import { User } from './types/User'

/**
 * Creates User accounts
 */
class UserFactory {
  /**
   * Create the default user account
   */
  static createAccount (): User {
    const now = moment().toISOString()

    return {
      onBoardingComplete: false,
      lastCheckin: now,
      medicalHistory: [],
      createdAt: now,
      updatedAt: now
    }
  }
}

export { UserFactory }

