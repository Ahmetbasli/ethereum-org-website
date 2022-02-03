import { handler as lambda } from "../lambda/roadmap"

async function handler(__req, res) {
  console.log("api envs ==== ", process.env)
  const { statusCode, body } = await lambda()
  res.status(statusCode).send(body)
}

export default handler