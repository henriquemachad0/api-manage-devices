import { CreateDeviceController } from '@/presentation/controllers/device/create-device-controller'
import { serverError, noContent, forbidden } from '@/presentation/helpers'
import { CreateDeviceSpy } from '@/tests/presentation/mocks/device/mock-device'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import MockDate from 'mockdate'
import faker from 'faker'
import { InvalidParamError } from '@/presentation/errors'

const mockRequest = (): CreateDeviceController.Request => ({
  name: faker.name.findName(),
  luminosity: faker.name.findName(),
  temperature: faker.name.findName(),
  moisture: faker.name.findName()
})

type SutTypes = {
  sut: CreateDeviceController
  createDeviceSpy: CreateDeviceSpy
}

const makeSut = (): SutTypes => {
  const createDeviceSpy = new CreateDeviceSpy()
  const sut = new CreateDeviceController(createDeviceSpy)
  return {
    sut,
    createDeviceSpy
  }
}

describe('CreateDevice Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call CreateDevice with correct values', async () => {
    const { sut, createDeviceSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(createDeviceSpy.params).toEqual(request)
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

  test('Should return 500 if CreateDevice throws', async () => {
    const { sut, createDeviceSpy } = makeSut()
    jest.spyOn(createDeviceSpy, 'create').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
