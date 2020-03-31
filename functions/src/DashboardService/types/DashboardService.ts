/**
 * Concretions provide services related to the dashboard
 */
interface DashboardService {
  /**
   * Fetches and ingests daily data for the dashboard
   */
  ingestDaily (): Promise<void>;

  /**
   * Fetches and ingests cumulative data for the dashboard
   */
  ingestCumulativeData (): Promise<void>;
}

export { DashboardService }
