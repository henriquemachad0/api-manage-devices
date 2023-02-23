import { DeviceRepository } from '@/infra/db/mongodb/device-repository'
import { GetAllDevice } from '@/domain/usecases/device/get-all-device'
import { DbGetAllDevice } from '@/data/usecases/device/db-get-all-device'

export const makeDbGetAllDevice = (): GetAllDevice => {
  const deviceMongoRepository = new DeviceRepository()
  return new DbGetAllDevice(deviceMongoRepository)
}
