import potrace from 'potrace'

export default (buffer: Buffer) =>
  new Promise<string>((resolve, reject) => {
    return potrace.trace(buffer, (err, svg) => {
      if (err) {
        reject(err)
        return
      }

      resolve(svg)
    })
  })
