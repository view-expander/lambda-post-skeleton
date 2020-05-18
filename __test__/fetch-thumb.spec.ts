import { DUMMY_IMAGE } from '../src/__mocks__/fetch-thumb'
import MockAdapter from 'axios-mock-adapter'
import api from '../src/api'
import fetchThumb from '../src/fetch-thumb'

describe('fetch-thumb()', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(api)
  })

  afterEach(() => {
    mock.restore()
  })

  it('resolves arrayBuffer', async () => {
    expect.assertions(1)

    mock.onGet('/source/image.jpg').reply(200, DUMMY_IMAGE, {
      'content-type': 'image/jpeg',
    })

    return expect(fetchThumb('image.jpg')).resolves.toMatchSnapshot()
  })
})
