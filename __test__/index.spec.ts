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

  it('catchs response error', async () => {
    expect.assertions(1)
    ;(fetchThumb as jest.Mock).mockRejectedValueOnce({
      message: 'Bad Request',
      response: {
        status: 400,
      },
    })

    return expect(
      handler({
        pathParameters: { key: 'image.jpg' },
      } as any)
    ).resolves.toMatchSnapshot()
  })

  it('cacths network error', async () => {
    expect.assertions(1)
    ;(fetchThumb as jest.Mock).mockRejectedValueOnce({
      message: 'Network Error',
    })

    return expect(
      handler({
        pathParameters: { key: 'image.jpg' },
      } as any)
    ).resolves.toMatchSnapshot()
  })
})
