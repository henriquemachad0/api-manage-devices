import { DbCreateDevice } from '@/data/usecases/device/db-create-device'
import { CreateDeviceRepositorySpy } from '@/tests/data/mocks/device/mock-db-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'
import { mockCreateDeviceParams } from '@/tests/domain/mocks/device/mock-device'

import MockDate from 'mockdate'

type SutTypes = {
  sut: DbCreateDevice
  createDeviceRepositorySpy: CreateDeviceRepositorySpy
}

const makeSut = (): SutTypes => {
  const createDeviceRepositorySpy = new CreateDeviceRepositorySpy()
  const sut = new DbCreateDevice(createDeviceRepositorySpy)
  return {
    sut,
    createDeviceRepositorySpy
  }
}

describe('DbCreateDevice Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call CreateDeviceRepository with correct values', async () => {
    const { sut, createDeviceRepositorySpy } = makeSut()
    const deviceData = mockCreateDeviceParams()
    await sut.create(deviceData)
    expect(createDeviceRepositorySpy.params).toEqual(deviceData)
  })

  test('Should throw if CreateDeviceRepository throws', async () => {
    const { sut, createDeviceRepositorySpy } = makeSut()
    jest.spyOn(createDeviceRepositorySpy, 'create').mockImplementationOnce(throwError)
    const promise = sut.create(mockCreateDeviceParams())
    await expect(promise).rejects.toThrow()
  })
})
