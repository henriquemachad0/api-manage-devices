import { CreateDevice } from '@/domain/usecases/device/create-device'
import { DeviceRepository } from '@/infra/db/mongodb/device-repository'
import { DbCreateDevice } from '@/data/usecases/device/db-create-device'

export const makeDbCreateDevice = (): CreateDevice => {
  const deviceMongoRepository = new DeviceRepository()
  return new DbCreateDevice(deviceMongoRepository)
}
