import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getOneAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = req.query.id

  const avo = await db.getById(id as string)

  if(!avo) {
    res.status(404).json({
      error: 'Avocado not found'
    })
  }

  res.status(200).json({ 
    data: avo
  })
}

export default getOneAvo
