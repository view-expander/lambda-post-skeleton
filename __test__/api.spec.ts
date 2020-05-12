import MockAdapter from 'axios-mock-adapter'
import api from '../src/api'

describe('api', () => {
  it('is an axios instance', () => {
    expect(api.defaults).toMatchObject({
      baseURL: process.env.API_PATH,
      timeout: 180000,
    })
  })
})
