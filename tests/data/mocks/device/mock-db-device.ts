import { CreateDeviceRepository } from '@/data/protocols/db/device/create-device-repository'
import { GetAllDeviceRepository } from '@/data/protocols/db/device/get-all-device-repository'
import { GetByIdDeviceRepository } from '@/data/protocols/db/device/get-by-id-device-repository'
import { RemoveDeviceRepository } from '@/data/protocols/db/device/remove-device-repository'
import { UpdateDeviceRepository } from '@/data/protocols/db/device/update-device-repository'
import { mockDeviceModel, mockDeviceModels } from '@/tests/domain/mocks/device/mock-device'

export class CreateDeviceRepositorySpy
implements CreateDeviceRepository {
  params: CreateDeviceRepository.Params

  async create (params: CreateDeviceRepository.Params): Promise<void> {
    this.params = params
  }
}
export class UpdateDeviceRepositorySpy
implements UpdateDeviceRepository {
  _id: string
  params: UpdateDeviceRepository.Params

  async update (params: UpdateDeviceRepository.Params, _id: string): Promise<void> {
    this._id = _id
    this.params = params
  }
}
export class RemoveDeviceRepositorySpy
implements RemoveDeviceRepository {
  _id: string

  async remove (_id: string): Promise<void> {
    this._id = _id
  }
}

export class GetAllDeviceRepositorySpy
implements GetAllDeviceRepository {
  result = mockDeviceModels()

  async getAll (): Promise<GetAllDeviceRepository.Result> {
    return this.result
  }
}
export class GetByIdDeviceRepositorySpy
implements GetByIdDeviceRepository {
  _id: string
  result = mockDeviceModel()

  async getById (_id: string): Promise<GetByIdDeviceRepository.Result> {
    this._id = _id
    return this.result
  }
}
