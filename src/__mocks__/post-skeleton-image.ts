export const DUMMY_POST_RESPONSE = {
  $response: {
    httpResponse: {
      statusCode: 200,
    },
  },
}
export default jest.fn().mockResolvedValue(DUMMY_POST_RESPONSE)
