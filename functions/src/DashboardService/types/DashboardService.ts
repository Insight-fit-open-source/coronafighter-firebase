/**
 * Concretions provide services related to the dashboard
 */
interface DashboardService {
  /**
   * Fetches and ingests data for the dashboard
   */
  ingest (): Promise<void>;
}

export { DashboardService }
