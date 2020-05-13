import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import createSkeletonImage from './create-skeleton-image'
import postSkeletonImage from './post-skeleton-image'

export async function handler(
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> {
  try {
    if (
      event.pathParameters?.key === undefined ||
      event.pathParameters.key === null
    ) {
      throw new Error('Object key is required')
    }

    const { key } = event.pathParameters
    const res = await createSkeletonImage(key)
      .then((svg) =>
        postSkeletonImage(svg, key.replace(/^(.+)\.jpg$/, '$1.svg'))
      )
      .catch((err) => {
        throw err
      })

    console.log(res)

    return {
      statusCode: res.$response.httpResponse.statusCode,
      body: JSON.stringify({ key: null }),
    }
  } catch (err) {
    return {
      statusCode: err.response?.status || err.statusCode || 500,
      body: JSON.stringify(err.message),
    }
  }
}
