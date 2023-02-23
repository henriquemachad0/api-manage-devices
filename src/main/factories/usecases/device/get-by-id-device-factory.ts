import { DeviceRepository } from '@/infra/db/mongodb/device-repository'
import { GetByIdDevice } from '@/domain/usecases/device/get-by-id-device'
import { DbGetByIdDevice } from '@/data/usecases/device/db-get-by-id-device'

export const makeDbGetByIdDevice = (): GetByIdDevice => {
  const deviceRepository = new DeviceRepository()
  return new DbGetByIdDevice(deviceRepository)
}
