import fetchThumb from './fetch-thumb'
import optimize from './optimize'
import trace from './trace'

export default (key: string) =>
  fetchThumb(key)
    .then((thumb) => trace(Buffer.from(thumb.data)))
    .then(optimize)
