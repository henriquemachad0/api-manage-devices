import { GetByIdDevice } from '@/domain/usecases/device/get-by-id-device'
import { GetByIdDeviceRepository } from '@/data/protocols/db/device/get-by-id-device-repository'

export class DbGetByIdDevice implements GetByIdDevice {
  constructor (private readonly getAllBanksAccountRepository: GetByIdDeviceRepository) {}

  async getById (_id: string): Promise<GetByIdDevice.Result> {
    return this.getAllBanksAccountRepository.getById(_id)
  }
}
