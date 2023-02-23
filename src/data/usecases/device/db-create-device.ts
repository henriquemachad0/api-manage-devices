import { CreateDevice } from '@/domain/usecases/device/create-device'
import { CreateDeviceRepository } from '@/data/protocols/db/device/create-device-repository'

export class DbCreateDevice implements CreateDevice {
  constructor (private readonly createDeviceRepository: CreateDeviceRepository) {}

  async create (data: CreateDevice.Params): Promise<void> {
    await this.createDeviceRepository.create(data)
  }
}
