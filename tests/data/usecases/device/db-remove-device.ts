import { DbRemoveDevice } from '@/data/usecases/device/db-remove-device'
import { RemoveDeviceRepositorySpy } from '@/tests/data/mocks/device/mock-db-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'
import faker from 'faker'

type SutTypes = {
  sut: DbRemoveDevice
  removeDeviceRepositorySpy: RemoveDeviceRepositorySpy
}

const makeSut = (): SutTypes => {
  const removeDeviceRepositorySpy = new RemoveDeviceRepositorySpy()
  const sut = new DbRemoveDevice(removeDeviceRepositorySpy)
  return {
    sut,
    removeDeviceRepositorySpy
  }
}

let _id: string

describe('DbRemoveDevice', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  beforeEach(() => {
    _id = faker.datatype.uuid()
  })

  test('Should call RemoveDeviceRepository', async () => {
    const { sut, removeDeviceRepositorySpy } = makeSut()
    await sut.remove(_id)
    expect(removeDeviceRepositorySpy._id).toBe(_id)
  })

  test('Should throw if RemoveDeviceRepository throws', async () => {
    const { sut, removeDeviceRepositorySpy } = makeSut()
    jest.spyOn(removeDeviceRepositorySpy, 'remove').mockImplementationOnce(throwError)
    const promise = sut.remove(_id)
    await expect(promise).rejects.toThrow()
  })
})
