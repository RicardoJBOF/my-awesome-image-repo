export function generateRandomString() {
  let randomKey = Math.random().toString(36).substring(6);
  return randomKey;
}

export const AWSconfig = {
  bucketName: process.env.REACT_APP_bucketName,
  region: process.env.REACT_APP_region,
  accessKeyId: process.env.REACT_APP_accessKeyId,
  secretAccessKey: process.env.REACT_APP_secretAccessKey,
};