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
  },
  addUser: (data, result) => {
    const sql = 'INSERT INTO users(u_name, email, password, salt, address, phone, u_created_at) VALUES (?,?,?,?,?,?,?)'
    db.run(sql, [data.u_name, data.email, data.password, data.salt, data.address, data.phone, data.u_created_at], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  }
}
