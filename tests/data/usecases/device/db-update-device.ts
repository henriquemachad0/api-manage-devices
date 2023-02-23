import { DbUpdateDevice } from '@/data/usecases/device/db-update-device'
import { UpdateDeviceRepositorySpy } from '@/tests/data/mocks/device/mock-db-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'
import { mockUpdateDeviceParams } from '@/tests/domain/mocks/device/mock-device'

import MockDate from 'mockdate'
import faker from 'faker'

type SutTypes = {
  sut: DbUpdateDevice
  updateDeviceRepositorySpy: UpdateDeviceRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateDeviceRepositorySpy = new UpdateDeviceRepositorySpy()
  const sut = new DbUpdateDevice(updateDeviceRepositorySpy)
  return {
    sut,
    updateDeviceRepositorySpy
  }
}
let _id: string

describe('DbUpdateDevice Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  beforeEach(() => {
    _id = faker.datatype.uuid()
  })

  test('Should call UpdateDeviceRepository with correct values', async () => {
    const { sut, updateDeviceRepositorySpy } = makeSut()
    const deviceData = mockUpdateDeviceParams()
    await sut.update(deviceData, _id)
    expect(updateDeviceRepositorySpy.params).toEqual(deviceData)
  })

  test('Should throw if UpdateDeviceRepository throws', async () => {
    const { sut, updateDeviceRepositorySpy } = makeSut()
    jest.spyOn(updateDeviceRepositorySpy, 'update').mockImplementationOnce(throwError)
    const promise = sut.update(mockUpdateDeviceParams(), _id)
    await expect(promise).rejects.toThrow()
  })
})
