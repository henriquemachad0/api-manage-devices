import { UpdateDevice } from '@/domain/usecases/device/update-device'
import { DeviceRepository } from '@/infra/db/mongodb/device-repository'
import { DbUpdateDevice } from '@/data/usecases/device/db-update-device'

export const makeDbUpdateDevice = (): UpdateDevice => {
  const deviceRepository = new DeviceRepository()
  return new DbUpdateDevice(deviceRepository)
}
