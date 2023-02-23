import { CreateDeviceRepository } from '@/data/protocols/db/device/create-device-repository'
import { UpdateDeviceRepository } from '@/data/protocols/db/device/update-device-repository'
import { GetAllDeviceRepository } from '@/data/protocols/db/device/get-all-device-repository'

import Device from '@/domain/models/mongodb/device'
import IDevice from '@/domain/models/types/device/IDevice'

import { GetByIdDevice } from '@/domain/usecases/device/get-by-id-device'
import { UpdateDevice } from '@/domain/usecases/device/update-device'
import { RemoveDevice } from '@/domain/usecases/device/remove-device'

export class DeviceRepository
implements
    CreateDeviceRepository,
    GetAllDeviceRepository,
    GetByIdDevice,
    UpdateDevice,
    RemoveDevice {
  async create (
    data: CreateDeviceRepository.Params
  ): Promise<void> {
    const device = new Device({
      name: data.name,
      luminosity: data.luminosity,
      moisture: data.moisture,
      temperature: data.temperature
    })

    await device.save()
  }

  async update (
    data: UpdateDeviceRepository.Params,
    _id: string
  ): Promise<void> {
    await Device.findByIdAndUpdate(_id, data)
  }

  async remove (_id: string): Promise<void> {
    await Device.findByIdAndRemove(_id)
  }

  async getAll (
  ): Promise<IDevice[]> {
    const devices = await Device.find().sort('-createdAt')
    return devices as IDevice[]
  }

  async getById (_id: string): Promise<IDevice> {
    const device = await Device.findOne({
      _id: _id
    })

    return device as unknown as IDevice
  }
}
