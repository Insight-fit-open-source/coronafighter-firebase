import * as functions from 'firebase-functions'
import { container } from '../../container'
import { UserService } from 'src/UserService'

const userService = container.resolve('userService') as UserService;

export default functions.auth.user().onCreate((user: any) => {
  const { uid } = user
  return userService.initialiseUser(uid)
})
