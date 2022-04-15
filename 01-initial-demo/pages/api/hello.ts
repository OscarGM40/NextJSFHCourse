import { NextApiRequest, NextApiResponse } from "next";

/* si yo sé que este tipo no lo voy a expandir,no lo voy a heredar,etc puedo usarlo perfectamente.Si no debo usar interface */
type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
