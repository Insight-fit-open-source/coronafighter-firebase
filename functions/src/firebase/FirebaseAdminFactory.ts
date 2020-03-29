import * as admin from 'firebase-admin'
admin.initializeApp()

/**
 * Firebase Admin related functionality
 */
class FirebaseAdminFactory {
  static getFirestore()  {
    return admin.firestore()
  }
}

export { FirebaseAdminFactory }
