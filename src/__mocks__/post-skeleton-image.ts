export const DUMMY_POST_RESPONSE = {
  $response: {
    httpResponse: {
      statusCode: 200,
    },
  },
  ETag: 'd8d1c86cb0147624bb493f41483b7383',
}
export default jest.fn().mockResolvedValue(DUMMY_POST_RESPONSE)
