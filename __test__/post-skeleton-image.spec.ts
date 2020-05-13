import * as AWS from 'aws-sdk'
import postSkeletonImage from '../src/post-skeleton-image'
import { DUMMY_POST_RESPONSE } from '../src/__mocks__/post-skeleton-image'
import { DUMMY_OPTIMIZED_IMAGE } from './../src/__mocks__/optimize'

describe('postSkeletonImage()', () => {
  beforeEach(() => {
    jest
      .spyOn((AWS.S3 as any).services['2006-03-01'].prototype, 'putObject')
      .mockImplementation(() => ({
        promise: (): any => DUMMY_POST_RESPONSE,
      }))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('will be succeed', async () => {
    expect.assertions(1)
    return expect(
      postSkeletonImage(DUMMY_OPTIMIZED_IMAGE, 'image.svg')
    ).resolves.toMatchSnapshot()
  })
})
