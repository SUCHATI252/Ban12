import moment from 'moment'
import Person from '../models/personModel'
export default {
  infections_all: (_req, res) => {
    Person.infections_all((error, result) => {
      if (error) { return res.json({ error }) }
      return res.json(result)
    })
  },
  infections_today: (req, res) => {
    const today = moment().format('L')
    Person.infections_today(today, (error, result) => {
      if (error) { return res.json({ error }) }
      return res.json(result)
    })
  },
  addPerson: (req, res) => {
    const { fname, lname, age, gender, number, checkedby } = req.body
    const newdata = {
      fname,
      name: `${fname}  ${lname}`,
      age,
      gender,
      number,
      checked_by: checkedby,
      date_infection: moment().format('L'),
      created_at: moment().format('L LT')
    }
    if (newdata) {
      Person.addPerson(newdata, (err) => {
        if (err) { return res.json(err) }
        return res.json({ success: true })
      })
    } else {
      res.json({ success: false })
    }
  },
  infections_list_all: (_req, res) => {
    Person.infections_list_all((error, result) => {
      if (error) { return res.json({ error }) }
      return res.json(result)
    })
  }
}
