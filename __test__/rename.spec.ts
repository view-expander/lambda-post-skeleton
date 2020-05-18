import rename from '../src/rename'

describe('rename()', () => {
  it('returns renamed key', () => {
    expect(rename('image.jpg')).toEqual('image.svg')
  })

  it('throws error', () => {
    expect(() => rename('image.png')).toThrowError('Invalid key')
  })
})
