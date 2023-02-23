import mongoose from '@/domain/db/conn'
const { Schema } = mongoose

const EntryInvoice =
  mongoose.models.EntryInvoice ||
  mongoose.model(
    'Device',
    new Schema(
      {
        name: {
          type: String,
          required: true
        },
        temperature: {
          type: String,
          required: false
        },
        moisture: {
          type: String,
          required: false
        },
        luminosity: {
          type: String,
          required: false
        }
      },
      { timestamps: true }
    )
  )

export default EntryInvoice
