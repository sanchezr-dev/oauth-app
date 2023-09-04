import type { NextApiRequest, NextApiResponse } from "next"
import { createJwt } from "@/lib/jwt"

const authorizeApiRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { redirect_uri, state } = req.query
    const jwt = await createJwt()
    const redirectUrl = `${redirect_uri}?token=${encodeURIComponent(
      jwt,
    )}&state=${encodeURIComponent(state as string)}`
    res.redirect(301, redirectUrl)
  } catch (error) {
    console.error(error)
    res.status(500).send("")
  }
}

export default authorizeApiRoute
