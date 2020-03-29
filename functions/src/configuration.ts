import { Configuration } from './types/Configuration'

const configuration: Configuration = {
  service: {
    name: 'coronasepush-firebase'
  },
  dashboard: {
    source: process.env['DASHBOARD_DATA_SOURCE'] || 'https://blakey.co/',
    timeout: parseInt(process.env['DASHBOARD_DATA_TIMEOUT']) || 5000
  }
}

export { configuration }
