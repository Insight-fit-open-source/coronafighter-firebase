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
  ingestDailyData(data: object): Promise<void> {
    return this.firestore.collection('dashbaord')
      .doc('za')
      .set(data)
      .then(() => null)
  }

  /**
   * @inheritDoc
   */
  ingestCumulativeData (data: object): Promise<void> {
    return this.firestore.collection('cumulative')
      .doc('za')
      .set(data)
      .then(() => null)
  }
}

export { CspDashboardRepository }
