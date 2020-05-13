import potrace from 'potrace'
import { DUMMY_IMAGE } from './../src/__mocks__/fetch-thumb'
import trace from '../src/trace'

describe('trace()', () => {
  it.skip('resolves svg', async () => {
    expect.assertions(1)
    return expect(trace(Buffer.from(DUMMY_IMAGE))).resolves.toMatchSnapshot()
  })

  it('rejects error', () => {
    expect.assertions(1)
    jest.spyOn(potrace, 'trace').mockImplementation(() => {
      throw new Error('DUMMY_ERROR')
    })

    return expect(trace(Buffer.from(DUMMY_IMAGE))).rejects.toMatchSnapshot()
  })
})
