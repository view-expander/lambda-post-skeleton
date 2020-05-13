declare module 'potrace' {
  type CallBackFn = (err: Error, svg: string) => void
  export const trace: (image: string | Buffer, callback: CallBackFn) => void
}
