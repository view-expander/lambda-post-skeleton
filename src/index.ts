import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import createSkeletonImage from './create-skeleton-image'
import postSkeletonImage from './post-skeleton-image'

export async function handler(
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> {
  try {
    const { key } =
      event.body !== null ? JSON.parse(event.body) : { key: undefined }

    if (typeof key !== 'string') {
      throw new Error('Object key is required')
    }

    const res = await createSkeletonImage(key)
      .then((svg) =>
        postSkeletonImage(svg, key.replace(/^(.+)\.jpg$/, '$1.svg'))
      )
      .catch((err) => {
        throw err
      })

    return {
      statusCode: res.$response.httpResponse.statusCode,
      body: JSON.stringify(res),
    }
  } catch (err) {
    return {
      statusCode: err.response?.status || err.statusCode || 500,
      body: JSON.stringify(err.message),
    }
  }
}
