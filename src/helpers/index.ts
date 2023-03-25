import crypto from 'crypto';

const SECRET = 'yogyy-rest-api';

export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac('sha256', [salt, password].join('/'))
    .update(SECRET)
    .digest('hex');
};

export const random = () => crypto.randomBytes(128).toString('base64');
