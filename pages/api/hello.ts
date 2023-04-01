// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  name: string,
  method: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ name: 'John Doe', method: 'POST' })
  } else if ((req.method === 'GET')) {
    // Process a Get request
    res.status(200).json({ name: 'John Doe', method: 'GET' })
  }
}
