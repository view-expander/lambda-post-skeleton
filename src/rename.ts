export default (key: string) => {
  const regExp = /^source\/(.+?)\.jpg$/

  if (!regExp.test(key)) {
    throw new Error('Invalid key')
  }

  return key.replace(regExp, 'skeleton/$1.svg')
}
