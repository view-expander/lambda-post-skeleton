import { DUMMY_TRACED_IMAGE } from './../src/__mocks__/trace'
import optimize from '../src/optimize'

describe('optimize()', () => {
  it('resolves opimized svg', async () => {
    expect.assertions(1)

    return expect(optimize(DUMMY_TRACED_IMAGE)).resolves.toMatchSnapshot()
  })
})
