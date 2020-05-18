import * as AWS from 'aws-sdk'
const s3 = new AWS.S3()

export default async (svg: string, key: string) => {
  try {
    const Bucket = process.env.BUCKET

    if (Bucket === undefined) {
      throw new Error('Bucket name is required')
    }

    return s3
      .putObject({
        Bucket,
        Key: `skeleton/${key}`,
        Body: svg,
        ContentType: 'image/svg+xml',
      })
      .promise()
  } catch (err) {
    throw err
  }
}
