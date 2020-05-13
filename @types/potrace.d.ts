declare module 'potrace' {
  type Options = {
    turdSize?: number
    color?: string
  }
  type CallBackFn = (err: Error, svg: string) => void
  export const trace: (
    image: string | Buffer,
    optionsOrCallback: Options | CallBackFn,
    callback?: CallBackFn
  ) => void
}
