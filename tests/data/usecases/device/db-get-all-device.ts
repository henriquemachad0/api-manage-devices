import { DbGetAllDevice } from '@/data/usecases/device/db-get-all-device'
import { GetAllDeviceRepositorySpy } from '@/tests/data/mocks/device/mock-db-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'

type SutTypes = {
  sut: DbGetAllDevice
  getAllDeviceRepositorySpy: GetAllDeviceRepositorySpy
}

const makeSut = (): SutTypes => {
  const getAllDeviceRepositorySpy = new GetAllDeviceRepositorySpy()
  const sut = new DbGetAllDevice(getAllDeviceRepositorySpy)
  return {
    sut,
    getAllDeviceRepositorySpy
  }
}

describe('DbGetAllDevice', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call GetAllDeviceRepository', async () => {
    const { sut, getAllDeviceRepositorySpy } = makeSut()
    await sut.getAll()
    expect(getAllDeviceRepositorySpy.result[0]._id).toBeTruthy()
  })

  test('Should return a list of Device on success', async () => {
    const { sut, getAllDeviceRepositorySpy } = makeSut()
    const devices = await sut.getAll()
    expect(devices).toEqual(getAllDeviceRepositorySpy.result)
  })

  test('Should throw if GetAllDeviceRepository throws', async () => {
    const { sut, getAllDeviceRepositorySpy } = makeSut()
    jest.spyOn(getAllDeviceRepositorySpy, 'getAll').mockImplementationOnce(throwError)
    const promise = sut.getAll()
    await expect(promise).rejects.toThrow()
  })
})
