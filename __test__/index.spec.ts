import { handler } from '../src'
import createSkeletonImage from '../src/create-skeleton-image'
jest.mock('../src/create-skeleton-image')

describe('handler()', () => {
  it('calls createSkeletonImage()', async () => {
    expect.assertions(1)

    await handler({
      pathParameters: { key: 'image.jpg' },
    } as any)

    return expect(createSkeletonImage).toHaveBeenCalledWith('image.jpg')
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
    ;(createSkeletonImage as jest.Mock).mockRejectedValueOnce({
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
    ;(createSkeletonImage as jest.Mock).mockRejectedValueOnce({
      message: 'Network Error',
    })

    return expect(
      handler({
        pathParameters: { key: 'image.jpg' },
      } as any)
    ).resolves.toMatchSnapshot()
  })
})
