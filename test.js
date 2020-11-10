const crypto = require('crypto');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKey = crypto.createSecretKey(fs.readFileSync('./rsa_private_key.pem'));
const hmac = jwt.sign({id: 1}, privateKey);
console.log("hmac", hmac)