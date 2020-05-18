export default (key: string) => {
  const regExp = /^(.+?)\.jpg$/

  if (!regExp.test(key)) {
    throw new Error('Invalid key')
  }

  return key.replace(regExp, '$1.svg')
}
