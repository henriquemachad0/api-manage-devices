import { CreateDevice } from '@/domain/usecases/device/create-device'
import { GetAllDevice } from '@/domain/usecases/device/get-all-device'
import { GetByIdDevice } from '@/domain/usecases/device/get-by-id-device'
import { RemoveDevice } from '@/domain/usecases/device/remove-device'
import { UpdateDevice } from '@/domain/usecases/device/update-device'
import {
  mockDeviceModel,
  mockDeviceModels
} from '@/tests/domain/mocks/device/mock-device'

export class CreateDeviceSpy implements CreateDevice {
  params: CreateDevice.Params

  async create (params: CreateDevice.Params): Promise<void> {
    this.params = params
  }
}
export class UpdateDeviceSpy implements UpdateDevice {
  _id: string
  params: UpdateDevice.Params

  async update (params: UpdateDevice.Params, _id: string): Promise<void> {
    this._id = _id
    this.params = params
  }
}

export class RemoveDeviceSpy implements RemoveDevice {
  _id: string

  async remove (_id: string): Promise<void> {
    this._id = _id
  }
}

export class GetAllDeviceSpy implements GetAllDevice {
  _id: string
  result = mockDeviceModels()

  async getAll (
    _id: string
  ): Promise<GetAllDevice.Result> {
    this._id = _id
    return this.result
  }
}
export class GetByIdDeviceSpy implements GetByIdDevice {
  _id: string
  result = mockDeviceModel()

  async getById (_id: string): Promise<GetByIdDevice.Result> {
    this._id = _id
    return this.result
  }
}
