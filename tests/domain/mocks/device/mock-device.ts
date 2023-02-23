import IDevice from '@/domain/models/types/device/IDevice'
import { CreateDevice } from '@/domain/usecases/device/create-device'
import { UpdateDevice } from '@/domain/usecases/device/update-device'

import faker from 'faker'

export const mockCreateDeviceParams = (): CreateDevice.Params => ({
  name: faker.name.findName(),
  luminosity: faker.name.findName(),
  temperature: faker.name.findName(),
  moisture: faker.name.findName()
})

export const mockUpdateDeviceParams = (): UpdateDevice.Params => ({
  name: faker.name.findName(),
  luminosity: faker.name.findName(),
  temperature: faker.name.findName(),
  moisture: faker.name.findName()
})

export const mockDeviceModel = (): IDevice => ({
  _id: faker.datatype.uuid(),
  name: faker.name.findName(),
  luminosity: faker.name.findName(),
  temperature: faker.name.findName(),
  moisture: faker.name.findName()
})

export const mockDeviceModels = (): IDevice[] => [
  mockDeviceModel(),
  mockDeviceModel()
]
