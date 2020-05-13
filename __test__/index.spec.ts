import { DUMMY_IMAGE } from './../src/__mocks__/fetch-thumb'
import { handler } from '../src'
import fetchThumb from '../src/fetch-thumb'
import optimize from '../src/optimize'
import trace from '../src/trace'
jest.mock('../src/fetch-thumb')
jest.mock('../src/optimize')
jest.mock('../src/trace')

describe('handler()', () => {
  it('calls fetchThumb()', async () => {
    expect.assertions(1)

    await handler({
      pathParameters: { key: 'image.jpg' },
    } as any)

    return expect(fetchThumb).toHaveBeenCalledWith('image.jpg')
  })

  it('calls trace()', async () => {
    expect.assertions(1)

    await handler({
      pathParameters: { key: 'image.jpg' },
    } as any)

    return expect(trace).toHaveBeenCalled()
  })

  it('calls optimize()', async () => {
    expect.assertions(1)

    await handler({
      pathParameters: { key: 'image.jpg' },
    } as any)

    return expect(optimize).toHaveBeenCalled()
  })

  it('returns response', () => {
    expect.assertions(1)
    return expect(
      handler({
        pathParameters: { key: 'image.jpg' },
      } as any)
    ).resolves.toMatchSnapshot()
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
