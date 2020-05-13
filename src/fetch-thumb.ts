import api from './api'

export default (key: string) =>
  api.get<ArrayBuffer>(`/photo/${key}`, {
    headers: {
      Accept: 'image/jpeg',
    },
    params: {
      size: 'thumb',
    },
    responseType: 'arraybuffer',
  })
