import { handler } from '../src'
import fetchThumb from '../src/fetch-thumb'
jest.mock('../src/fetch-thumb')

describe('handler()', () => {
  it('calls fetchThumb()', async () => {
    expect.assertions(1)

    await handler({
      pathParameters: { key: 'image.jpg' },
    } as any)

    return expect(fetchThumb).toHaveBeenCalledWith('image.jpg')
  })
})
