import { GetByIdDeviceController } from '@/presentation/controllers/device/get-by-id-device-controller'
import { ok, serverError, forbidden } from '@/presentation/helpers'
import { GetByIdDeviceSpy } from '@/tests/presentation/mocks/device/mock-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'
import faker from 'faker'
import { InvalidParamError } from '@/presentation/errors'

const mockRequest = (): GetByIdDeviceController.Request => ({
  _id: faker.datatype.uuid(),
  user: { id: faker.datatype.uuid(), token: faker.datatype.uuid() }
})

type SutTypes = {
  sut: GetByIdDeviceController
  getByIdDeviceSpy: GetByIdDeviceSpy
}

const makeSut = (): SutTypes => {
  const getByIdDeviceSpy = new GetByIdDeviceSpy()
  const sut = new GetByIdDeviceController(
    getByIdDeviceSpy
  )
  return {
    sut,
    getByIdDeviceSpy
  }
}

describe('GetByIdDevice Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call GetByIdDevice with correct value', async () => {
    const { sut, getByIdDeviceSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(getByIdDeviceSpy._id).toBe(request._id)
  })

  test('Should return 200 on success', async () => {
    const { sut, getByIdDeviceSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(getByIdDeviceSpy.result))
  })

  test('Should return 204 if GetByIdDevice returns empty', async () => {
    const { sut, getByIdDeviceSpy } = makeSut()
    getByIdDeviceSpy.result = null
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('_id')))
  })

  test('Should return 500 if GetByIdDevice throws', async () => {
    const { sut, getByIdDeviceSpy } = makeSut()
    jest
      .spyOn(getByIdDeviceSpy, 'getById')
      .mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
