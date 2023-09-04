import * as jose from "jose"

export const createJwt = async () => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  const alg = "HS256"

  const jwt = await new jose.SignJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .sign(secret)

  return jwt
}
