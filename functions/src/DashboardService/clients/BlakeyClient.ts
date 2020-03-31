import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { Configuration } from 'src/types/Configuration'
import { DashboardDataClient } from '../types/DashboardDataClient'

const DAILY_DATA_PATH = 'covid.php'
const CUMULATIVE_DATA_PATH = 'graph.php'

/**
 * Fetches data for the dashboard
 */
class BlakeyClient implements DashboardDataClient {
  protected client: AxiosInstance

  constructor (protected configuration: Configuration) {
    const {
      service: {
        name: serviceName
      },
      dashboard: {
        source: baseURL,
        timeout
      }
    } = this.configuration

    const config: AxiosRequestConfig = {
      baseURL,
      timeout,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; charset=utf-8',
        'User-Agent': serviceName
      }
    }

    this.client = Axios.create(config)
  }

  fetchDailyData (): Promise<object> {
    return this.client.get(DAILY_DATA_PATH)
      .then(response => response.data)
  }

  fetchCumulativeData (): Promise<object> {
    return this.client.get(CUMULATIVE_DATA_PATH)
      .then(response => response.data)
  }
}

export { BlakeyClient }
