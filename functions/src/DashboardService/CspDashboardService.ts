import { DashboardService } from './types/DashboardService'
import { DashboardRepository } from 'src/DashboardService/types/DashboardRepository'
import { DashboardDataClient } from 'src/DashboardService/types/DashboardDataClient'

/**
 * The dashboard service layer
 */
class CspDashboardService implements DashboardService {
  constructor (protected dashboardDataClient: DashboardDataClient, protected dashboardRepository: DashboardRepository) {}

  /**
   * @inheritDoc
   */
  ingestDaily (): Promise<void> {
    return this.dashboardDataClient.fetchDailyData()
      .then(data => this.dashboardRepository.ingestDailyData(data))
  }

  ingestCumulativeData (): Promise<void> {
    return this.dashboardDataClient.fetchCumulativeData()
      .then(data => this.dashboardRepository.ingestCumulativeData(data))
  }
}

export { CspDashboardService }
