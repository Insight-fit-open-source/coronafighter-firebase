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
  ingest (): Promise<void> {
    return this.dashboardDataClient.fetch()
      .then(data => this.dashboardRepository.ingest(data))
  }
}

export { CspDashboardService }
