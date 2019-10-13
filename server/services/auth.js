const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const config = require('../config');

const NAMESPACE = config.NAMESPACE;

exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 50,
        jwksUri: 'https://tech-blog-nextjs.auth0.com/.well-known/jwks.json'
    }),
    audience: 'odZXfHCBiMY1FMx6d0YTInqwCg7y1R11',
    issuer: 'https://tech-blog-nextjs.auth0.com/',
    algorithms: ['RS256']
});

exports.checkRole = role => (req, res, next) => {
    const user = req.user;
    if (user && user[`${NAMESPACE}/role`] && user[`${NAMESPACE}/role`] === role) {
        next();
    } else {
        return res.status(401).send({ title: 'Not Authorized', detail: 'You are not authorized to access this data' })
    }
}
// OTHER SYNTAX
// exports.checkRole = function (role) {
//     return function (req, res, next) {
//         const user = req.user;
//         if (user && user[`${NAMESPACE}/role`] === role) {
//             next();
//         } else {
//             return res.status(401).send({ title: 'Not Authorized', detail: 'You are not authorized to access this data' })
//         }
//     }
// }