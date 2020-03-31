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
    const now = moment().unix().toString()

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

