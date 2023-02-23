export const deviceSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      required: true
    },
    temperature: {
      type: 'string',
      required: false
    },
    moisture: {
      type: 'string',
      required: false
    },
    luminosity: {
      type: 'string',
      required: false
    }
  }
}
