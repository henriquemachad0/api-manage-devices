import { GetAllDevice } from '@/domain/usecases/device/get-all-device'
import { GetAllDeviceRepository } from '@/data/protocols/db/device/get-all-device-repository'

export class DbGetAllDevice implements GetAllDevice {
  constructor (private readonly getAllDeviceRepository: GetAllDeviceRepository) {}

  async getAll (): Promise<GetAllDevice.Result> {
    return this.getAllDeviceRepository.getAll()
  }
}
