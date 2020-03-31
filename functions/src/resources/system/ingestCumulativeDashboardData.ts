import * as functions from 'firebase-functions'
import { container } from '../../container'
import { DashboardService } from '../..//DashboardService'

const dashboardService = container.resolve('dashboardService') as DashboardService

export default functions.pubsub.schedule('0 * * * *').onRun(() => {
  console.log('Updating cumulative data')

  return dashboardService.ingestCumulativeData()
})
