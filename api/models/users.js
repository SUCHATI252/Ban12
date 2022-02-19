import db from '../configs'
export default {
  findAll: (result) => {
    const sql = 'SELECT * FROM users'
    db.all(sql, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  }
}
