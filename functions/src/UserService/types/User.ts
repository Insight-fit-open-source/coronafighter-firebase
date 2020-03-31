/**
 * Represents an end user of the system
 */
interface User {
  // Has the user completed the on-boarding process
  onBoardingComplete: boolean,
  // The last time the user was seen
  lastCheckin: string,
  // The screening history of the user
  medicalHistory: Object
  // When the user account was created
  createdAt: string,
  // When the user account was last updated
  updatedAt: string
}

export { User }
