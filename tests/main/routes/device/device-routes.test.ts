import env from '@/main/config/env'
import { setupApp } from '@/main/config/app'
import mongoose from '@/domain/db/conn'

import { Express } from 'express'
import request from 'supertest'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import Device from '@/domain/models/mongodb/device'

dayjs.extend(utc)

let app: Express

describe('Device Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await mongoose.connect(env.mongoUrl)
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })

  afterEach(async () => {
    await Device.deleteMany({})
  })

  describe('POST /device', () => {
    test('Should return 204 on add device', async () => {
      await request(app)
        .post('/api-manage-devices/device/create')
        .send({
          name: 'nome do dispositivo'
        })
        .expect(204)
    })
  })

  describe('PATCH /device/update/:_id', () => {
    test('Should return 204 on update device', async () => {
      const device = await new Device({
        name: 'nome do dispositivo'
      })
      const res = await device.save()
      await request(app)
        .patch(`/api-manage-devices/device/update/${res._id.toHexString()}`)
        .send({
          name: 'nome do dispositivo'
        })
        .expect(204)
    })
  })

  describe('DELETE /device/remove/:_id', () => {
    test('Should return 204 on remove device', async () => {
      const device = await new Device({
        name: 'nome do dispositivo'
      })
      const res = await device.save()
      await request(app)
        .delete(`/api-manage-devices/device/remove/${res._id.toHexString()}`)
        .expect(204)
    })
  })

  describe('GET /device', () => {
    test('Should return 200 on load devices', async () => {
      const device = await new Device({
        name: 'nome do dispositivo'
      })

      device.save()

      await request(app)
        .get('/api-manage-devices/device/')
        .expect(200)
    })
  })

  describe('GET /device/:_id', () => {
    test('Should return 200 on load devices', async () => {
      const device = await new Device({
        name: 'nome do dispositivo'
      })
      const res = await device.save()
      await request(app)
        .get(`/api-manage-devices/device/${res._id.toHexString()}`)
        .expect(200)
    })
  })
})
