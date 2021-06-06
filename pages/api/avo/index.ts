import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  res.status(200).json({ 
    length,
    data: allEntries 
  })
}

export default allAvos
