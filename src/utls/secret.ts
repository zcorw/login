import fs from 'fs';
import path from 'path';

const secretKey = fs.readFileSync(path.resolve(__dirname, '../../rsa_key.pem'));
export default secretKey;