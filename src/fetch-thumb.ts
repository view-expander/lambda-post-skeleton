import api from './api'

export default (key: string) =>
  api.get<ArrayBuffer>(`/photo/${key}`, {
    params: {
      size: 'thumb',
    },
    responseType: 'arraybuffer',
  })
