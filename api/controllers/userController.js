import User from '../models/users'
export default {
  AllUsers: (req, res) => {
    User.findAll((error, result) => {
      if (error) { return res.json({ error }) }
      res.json({ users: result })
    })
  }
}
