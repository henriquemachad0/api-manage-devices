import { DeviceRepository } from '@/infra/db/mongodb/device-repository'
import {
  mockCreateDeviceParams,
  mockUpdateDeviceParams
} from '@/tests/domain/mocks/device/mock-device'
import mongoose, { connectMongo } from '@/domain/db/conn'
import Device from '@/domain/models/mongodb/device'
import FakeObjectId from 'bson-objectid'

const makeSut = (): DeviceRepository => {
  return new DeviceRepository()
}

describe('DeviceRepository', () => {
  beforeAll(async () => {
    await connectMongo()
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })

  beforeEach(async () => {
    await Device.deleteMany({})
  })

  afterEach(async () => {

  })

  describe('create()', () => {
    test('Should create a device on success', async () => {
      const sut = makeSut()
      await sut.create(mockCreateDeviceParams())
      const count = await Device.countDocuments()
      expect(count).toBe(1)
    })
  })

  describe('update()', () => {
    test('Should update a device on success', async () => {
      const sut = makeSut()
      const bank = await new Device(mockCreateDeviceParams())
      const res = await bank.save()
      await sut.update(mockUpdateDeviceParams(), res._id.toHexString())
      const count = await Device.countDocuments()
      expect(count).toBe(1)
    })
  })

  describe('remove()', () => {
    test('Should remove a device on success', async () => {
      const sut = makeSut()
      const bank = await new Device(mockCreateDeviceParams())
      const res = await bank.save()
      await sut.remove(res._id.toHexString())
      const count = await Device.countDocuments()
      expect(count).toBe(0)
    })
  })

  describe('getAll()', () => {
    test('Should get all device on success', async () => {
      const createDeviceModels = [
        mockCreateDeviceParams(),
        mockCreateDeviceParams()
      ]
      await Device.insertMany(createDeviceModels)
      const sut = makeSut()
      const device = await sut.getAll()
      expect(device.length).toBe(2)
      expect(device[0]._id).toBeTruthy()
      expect(device[1]._id).toBeTruthy()
    })

    test('Should get empty list', async () => {
      const sut = makeSut()
      const device = await sut.getAll()
      expect(device.length).toBe(0)
    })
  })

  describe('getById()', () => {
    test('Should get device by id on success', async () => {
      const bank = await new Device(mockCreateDeviceParams())
      const res = await bank.save()
      const sut = makeSut()
      const device = await sut.getById(res._id.toHexString())
      expect(device).toBeTruthy()
      expect(device._id).toBeTruthy()
    })

    test('Should return null if device does not exists', async () => {
      const sut = makeSut()
      const device = await sut.getById(new FakeObjectId().toHexString())
      expect(device).toBeFalsy()
    })
  })
})
