import * as admin from 'firebase-admin'
import { DashboardRepository } from './types/DashboardRepository'

/**
 * The dashboard DAL
 */
class CspDashboardRepository implements DashboardRepository {
  constructor (protected firestore: admin.firestore.Firestore) {}

  /**
   * @inheritDoc
   */
  ingest(data: object): Promise<void> {
    return this.firestore.collection('dashbaord')
      .doc('za')
      .set(data)
      .then(() => null)
  }
}

export { CspDashboardRepository }
