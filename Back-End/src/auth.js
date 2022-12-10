const jwt = require("express-jwt");
const jwts = require("jwks-rsa");
const jwtAuthz = require("express-jwt-authz");

// CONFIGURES JWT AND AUTH0 AUTHORIZATION
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-izk3hxpk80q83gn7.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "MARKETPLACE_API",
  issuer: "https://dev-izk3hxpk80q83gn7.us.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = { jwtCheck, jwtAuthz };
