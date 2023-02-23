import { DbGetByIdDevice } from '@/data/usecases/device/db-get-by-id-device'
import { GetByIdDeviceRepositorySpy } from '@/tests/data/mocks/device/mock-db-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'
import faker from 'faker'

type SutTypes = {
  sut: DbGetByIdDevice
  getByIdDeviceRepositorySpy: GetByIdDeviceRepositorySpy
}

const makeSut = (): SutTypes => {
  const getByIdDeviceRepositorySpy = new GetByIdDeviceRepositorySpy()
  const sut = new DbGetByIdDevice(getByIdDeviceRepositorySpy)
  return {
    sut,
    getByIdDeviceRepositorySpy
  }
}

let _id: string

describe('DbGetByIdDevice', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  beforeEach(() => {
    _id = faker.datatype.uuid()
  })

  test('Should call GetByIdDeviceRepository', async () => {
    const { sut, getByIdDeviceRepositorySpy } = makeSut()
    await sut.getById(_id)
    expect(getByIdDeviceRepositorySpy._id).toBe(_id)
  })

  test('Should return a list of Device on success', async () => {
    const { sut, getByIdDeviceRepositorySpy } = makeSut()
    const surveys = await sut.getById(_id)
    expect(surveys).toEqual(getByIdDeviceRepositorySpy.result)
  })

  test('Should throw if GetByIdDeviceRepository throws', async () => {
    const { sut, getByIdDeviceRepositorySpy } = makeSut()
    jest.spyOn(getByIdDeviceRepositorySpy, 'getById').mockImplementationOnce(throwError)
    const promise = sut.getById(_id)
    await expect(promise).rejects.toThrow()
  })
})
