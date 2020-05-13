import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import createSkeletonImage from './create-skeleton-image'
import postSkeletonImage from './post-skeleton-image'

export async function handler(
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> {
  try {
    if (
      event.queryStringParameters?.key === undefined ||
      event.queryStringParameters.key === null
    ) {
      throw new Error('Object key is required')
    }

    const { key } = event.queryStringParameters
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
