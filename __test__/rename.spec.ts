import rename from '../src/rename'

describe('rename()', () => {
  it('returns renamed key', () => {
    expect(rename('source/image.jpg')).toEqual('skeleton/image.svg')
  })

  it('throws error', () => {
    expect(() => rename('image.jpg')).toThrowError('Invalid key')
  })
})
