import { UpdateDevice } from '@/domain/usecases/device/update-device'
import { UpdateDeviceRepository } from '@/data/protocols/db/device/update-device-repository'

export class DbUpdateDevice implements UpdateDevice {
  constructor (private readonly updateDeviceRepository: UpdateDeviceRepository) {}

  async update (data: UpdateDevice.Params, _id: string): Promise<void> {
    await this.updateDeviceRepository.update(data, _id)
  }
}
