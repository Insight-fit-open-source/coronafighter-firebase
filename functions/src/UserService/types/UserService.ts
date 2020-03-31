/**
 * Concretions handle user auth events
 */
interface UserService {
  /**
   * Initialise a user's account
   */
  initialiseUser (userId: string);
}

export { UserService }
