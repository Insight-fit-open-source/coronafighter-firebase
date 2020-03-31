/**
 * Represents system configuration
 */
interface Configuration {
  // General service related configuration
  service: {
    // The name of the service
    name: string
  }
  // Dashboard related configuration
  dashboard: {
    // The URL to fetchDailyData the dashboard data from
    source: string
    // The timeout for the dashboard data request in milliseconds
    timeout: number
  }
}

export { Configuration }
