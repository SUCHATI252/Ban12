import db from '../configs'
export default {
  infections_all: (result) => {
    const sql = 'SELECT COUNT(id) as total FROM persons;'
    db.get(sql, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res.total)
      }
    })
  },
  infections_today: (data, result) => {
    const sql = 'SELECT COUNT(id) as total FROM persons WHERE date_infection = ?;'
    db.get(sql, data, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res.total)
      }
    })
  },
  addPerson: (data, result) => {
    const sql = 'INSERT INTO persons(name, age, gender, number, checked_by, date_infection, created_at) VALUES (?,?,?,?,?,?,?)'
    db.run(sql, [data.name, data.age, data.gender, data.number, data.checked_by, data.date_infection, data.created_at], (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  },
  infections_list_all: (result) => {
    const sql = 'SELECT * FROM persons;'
    db.all(sql, (err, res) => {
      if (err) {
        result(null, err)
      } else {
        result(null, res)
      }
    })
  }
}
