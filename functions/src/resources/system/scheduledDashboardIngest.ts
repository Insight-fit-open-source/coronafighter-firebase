import * as functions from 'firebase-functions'
import { container } from '../../container'
import { DashboardService } from '../../DashboardService'

const dashboardService = container.resolve('dashboardService') as DashboardService

export default functions.pubsub.schedule('every 1 hour').onRun(() => {
  console.log('Updating dashboard data (schedule)')

  return dashboardService.ingest()
})