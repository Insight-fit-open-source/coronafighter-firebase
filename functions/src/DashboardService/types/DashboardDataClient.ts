/**
 * Fetches data from a third party for use with the dashboard
 */
interface DashboardDataClient {
  /**
   * Fetch dashboard data
   */
  fetch(): Promise<object>;
}

export { DashboardDataClient }
