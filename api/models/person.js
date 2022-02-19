// import moment from 'moment'
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
  }
}
