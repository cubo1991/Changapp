const { expressjwt } = require("express-jwt");
const { expressJwtSecret } = require("jwks-rsa");

const { AUTH0_JWKS_URI, AUTH0_AUDIENCE, AUTH0_ISSUER } = process.env;

// CONFIGURES JWT AND AUTH0 AUTHORIZATION
const jwtCheck = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: AUTH0_JWKS_URI,
  }),
  audience: AUTH0_AUDIENCE,
  issuer: AUTH0_ISSUER,
  algorithms: ["RS256"],
});

module.exports = { jwtCheck };
