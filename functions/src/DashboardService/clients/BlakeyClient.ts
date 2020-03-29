import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { Configuration } from 'src/types/Configuration'
import { DashboardDataClient } from '../types/DashboardDataClient'

const DATA_PATH = 'covid.php'

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

  fetch (): Promise<object> {
    return this.client.get(DATA_PATH)
      .then(response => response.data)
  }
}

export { BlakeyClient }
