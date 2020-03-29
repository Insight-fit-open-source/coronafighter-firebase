import { createContainer, asClass, InjectionMode, asValue, asFunction } from 'awilix'
import { FirebaseAdminFactory } from './firebase/FirebaseAdminFactory'
import { configuration } from './configuration';
import { CspDashboardRepository, CspDashboardService, BlakeyClient } from './DashboardService'

const container = createContainer({ injectionMode: InjectionMode.CLASSIC })

container.register({
  configuration: asValue(configuration),
  firestore: asFunction(() => FirebaseAdminFactory.getFirestore()).singleton(),
  dashboardDataClient: asClass(BlakeyClient).singleton(),
  dashboardRepository: asClass(CspDashboardRepository).singleton(),
  dashboardService: asClass(CspDashboardService).singleton(),
})

export { container }
