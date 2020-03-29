/**
 * Concretions provide DAL functionality relating to the dashboard
 */
interface DashboardRepository {
  /**
   * Store data related to the dashboard.
   * @param data Arbitrary data. Intentionally vague while the data structure is unknown.
   */
  ingest (data: object): Promise<void>;
}

export { DashboardRepository }
