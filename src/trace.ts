import potrace from 'potrace'

export default (buffer: Buffer) =>
  new Promise<string>((resolve, reject) => {
    return potrace.trace(
      buffer,
      {
        color: '#cccccc',
        turdSize: 10,
      },
      (err, svg) => {
        if (err) {
          reject(err)
          return
        }

        resolve(svg)
      }
    )
  })
