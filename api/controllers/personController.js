import moment from 'moment'
import Person from '../models/person'
export default {
  infections_all: (_req, res) => {
    Person.infections_all((error, result) => {
      if (error) { return res.json({ error }) }
      res.json(result)
    })
  },
  infections_today: (req, res) => {
    moment.locale('th')
    const today = moment().format('L')
    Person.infections_today(today, (error, result) => {
      if (error) { return res.json({ error }) }
      res.json(result)
    })
  }
}
