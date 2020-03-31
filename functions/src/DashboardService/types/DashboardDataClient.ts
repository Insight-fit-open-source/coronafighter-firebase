/**
 * Fetches data from a third party for use with the dashboard
 */
interface DashboardDataClient {
  /**
   * Fetch daily dashboard data
   */
  fetchDailyData(): Promise<object>;

  /**
   * Fetch cumulative dashboard data
   */
  fetchCumulativeData(): Promise<object>;
}

export { DashboardDataClient }
