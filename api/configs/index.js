import sqlite from 'sqlite3'
import tb from './create_table'

const { Database } = sqlite
const db = new Database('api/configs/.data/database.db', (error) => {
  if (error) {
    return error
  } else {
    db.run(tb.users)
    db.run(tb.person)
  }
})

export default db
