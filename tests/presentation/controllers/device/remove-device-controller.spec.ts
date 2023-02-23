import { RemoveDeviceController } from '@/presentation/controllers/device/remove-device-controller'
import { serverError, noContent, forbidden } from '@/presentation/helpers'
import {
  GetByIdDeviceSpy,
  RemoveDeviceSpy
} from '@/tests/presentation/mocks/device/mock-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'
import faker from 'faker'
import { InvalidParamError } from '@/presentation/errors'

const mockRequest = (): RemoveDeviceController.Request => ({
  _id: faker.datatype.uuid(),
  user: { id: faker.datatype.uuid(), token: faker.datatype.uuid() }
})

type SutTypes = {
  sut: RemoveDeviceController
  removeDeviceSpy: RemoveDeviceSpy
  getByIdDeviceSpy: GetByIdDeviceSpy
}

const makeSut = (): SutTypes => {
  const removeDeviceSpy = new RemoveDeviceSpy()
  const getByIdDeviceSpy = new GetByIdDeviceSpy()
  const sut = new RemoveDeviceController(
    getByIdDeviceSpy,
    removeDeviceSpy
  )
  return {
    sut,
    removeDeviceSpy,
    getByIdDeviceSpy
  }
}

describe('RemoveDevice Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  describe('GetByIdDevice in RemoveDevice', () => {
    test('Should call GetByIdDevice with correct value', async () => {
      const { sut, getByIdDeviceSpy } = makeSut()
      const request = mockRequest()
      await sut.handle(request)
      expect(getByIdDeviceSpy._id).toBe(request._id)
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

  test('Should call RemoveDevice with correct values', async () => {
    const { sut, removeDeviceSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(removeDeviceSpy._id).toEqual(request._id)
  })

  test('Should return 500 if RemoveDevice throws', async () => {
    const { sut, removeDeviceSpy } = makeSut()
    jest
      .spyOn(removeDeviceSpy, 'remove')
      .mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
