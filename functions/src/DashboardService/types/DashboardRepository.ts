/**
 * Concretions provide DAL functionality relating to the dashboard
 */
interface DashboardRepository {
  /**
   * Store daily data related to the dashboard.
   * @param data Arbitrary data. Intentionally vague while the data structure is unknown.
   */
  ingestDailyData (data: object): Promise<void>;

  /**
   * Store cumulative data related to the dashboard
   * @param data Arbitrary data. Intentionally vague while the data structure is unknown.
   */
  ingestCumulativeData (data: object): Promise<void>;
}

export { DashboardRepository }
