import { GetAllDeviceController } from '@/presentation/controllers/device/get-all-device-controller'
import { ok, serverError, noContent } from '@/presentation/helpers'
import { GetAllDeviceSpy } from '@/tests/presentation/mocks/device/mock-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'
import faker from 'faker'

const mockRequest = (): GetAllDeviceController.Request => ({
  _id: null,
  status: null,
  user: { id: null, token: null }
})
const mockRequestWithParams = (): GetAllDeviceController.Request => ({
  _id: faker.datatype.uuid(),
  status: false,
  user: { id: faker.datatype.uuid(), token: faker.datatype.uuid() }
})

type SutTypes = {
  sut: GetAllDeviceController
  getAllDeviceSpy: GetAllDeviceSpy
}

const makeSut = (): SutTypes => {
  const getAllDeviceSpy = new GetAllDeviceSpy()
  const sut = new GetAllDeviceController(
    getAllDeviceSpy
  )
  return {
    sut,
    getAllDeviceSpy
  }
}

describe('GetAllDevice Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call GetAllDevice with correct value', async () => {
    const { sut, getAllDeviceSpy } = makeSut()
    const request = mockRequestWithParams()
    await sut.handle(request)
    expect(getAllDeviceSpy._id).toBe(request._id)
  })

  test('Should return 200 on success', async () => {
    const { sut, getAllDeviceSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(getAllDeviceSpy.result))
  })

  test('Should return 204 if GetAllDevice returns empty', async () => {
    const { sut, getAllDeviceSpy } = makeSut()
    getAllDeviceSpy.result = []
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if GetAllDevice throws', async () => {
    const { sut, getAllDeviceSpy } = makeSut()
    jest
      .spyOn(getAllDeviceSpy, 'getAll')
      .mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
