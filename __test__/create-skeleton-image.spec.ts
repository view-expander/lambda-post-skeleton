import createSkeletonImage from '../src/create-skeleton-image'
import fetchThumb from '../src/fetch-thumb'
import optimize from '../src/optimize'
import trace from '../src/trace'
jest.mock('../src/fetch-thumb')
jest.mock('../src/optimize')
jest.mock('../src/trace')

describe('createSkeletonImage()', () => {
  beforeEach(() => createSkeletonImage('image.jpg'))

  it('calls fetchThumb()', () =>
    expect(fetchThumb).toHaveBeenCalledWith('image.jpg'))

  it('calls trace()', () => expect(trace).toHaveBeenCalled())

  it('calls optimize()', () => expect(optimize).toHaveBeenCalled())
})
