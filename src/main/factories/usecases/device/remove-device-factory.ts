import { DeviceRepository } from '@/infra/db/mongodb/device-repository'
import { RemoveDevice } from '@/domain/usecases/device/remove-device'
import { DbRemoveDevice } from '@/data/usecases/device/db-remove-device'

export const makeDbRemoveDevice = (): RemoveDevice => {
  const deviceRepository = new DeviceRepository()
  return new DbRemoveDevice(deviceRepository)
}
