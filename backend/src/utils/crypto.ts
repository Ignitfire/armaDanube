import crypto from 'crypto';

const SECRET = 'ARMADANUBE_API';

export const random = () => crypto.randomBytes(16).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};