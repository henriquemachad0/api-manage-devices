import { RemoveDevice } from '@/domain/usecases/device/remove-device'
import { RemoveDeviceRepository } from '@/data/protocols/db/device/remove-device-repository'

export class DbRemoveDevice implements RemoveDevice {
  constructor (private readonly removeDeviceRepository: RemoveDeviceRepository) {}

  async remove (_id: string): Promise<void> {
    return this.removeDeviceRepository.remove(_id)
  }
}
