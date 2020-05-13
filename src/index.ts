import { APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda'
import fetchThumb from './fetch-thumb'

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
    const res = await fetchThumb(key).catch((err) => {
      throw err
    })

    return {
      statusCode: 200,
      body: JSON.stringify({}),
    }
  } catch (err) {
    return {
      statusCode: err.response?.status || err.statusCode || 500,
      body: JSON.stringify(err.message),
    }
  }
}
