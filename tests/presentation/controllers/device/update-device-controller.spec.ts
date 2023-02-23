import { UpdateDeviceController } from '@/presentation/controllers/device/update-device-controller'
import { serverError, noContent, forbidden } from '@/presentation/helpers'
import {
  GetByIdDeviceSpy,
  UpdateDeviceSpy
} from '@/tests/presentation/mocks/device/mock-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'
import faker from 'faker'
import { InvalidParamError } from '@/presentation/errors'

const mockRequest = (): UpdateDeviceController.Request => ({
  name: faker.name.findName(),
  luminosity: faker.name.findName(),
  temperature: faker.name.findName(),
  moisture: faker.name.findName()
})

type SutTypes = {
  sut: UpdateDeviceController
  updateDeviceSpy: UpdateDeviceSpy
  getByIdDeviceSpy: GetByIdDeviceSpy
}

const makeSut = (): SutTypes => {
  const updateDeviceSpy = new UpdateDeviceSpy()
  const getByIdDeviceSpy = new GetByIdDeviceSpy()
  const sut = new UpdateDeviceController(
    getByIdDeviceSpy,
    updateDeviceSpy
  )
  return {
    sut,
    updateDeviceSpy,
    getByIdDeviceSpy
  }
}

describe('UpdateDevice Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  describe('GetByIdDevice in UpdateDevice', () => {
    test('Should call GetByIdDevice with correct value', async () => {
      const { sut, getByIdDeviceSpy } = makeSut()
      const request = mockRequest()
      await sut.handle(request)
      expect(getByIdDeviceSpy._id).toBe(request._id)
    })

    test('Should return 204 if name is empty', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle({
        name: null,
        luminosity: faker.name.findName(),
        temperature: faker.name.findName(),
        moisture: faker.name.findName()
      })
      expect(httpResponse).toEqual(forbidden(new InvalidParamError('name')))
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

  test('Should call UpdateDevice with correct values', async () => {
    const { sut, updateDeviceSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(updateDeviceSpy.params).toEqual(request)
  })

  test('Should return 500 if UpdateDevice throws', async () => {
    const { sut, updateDeviceSpy } = makeSut()
    jest
      .spyOn(updateDeviceSpy, 'update')
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
