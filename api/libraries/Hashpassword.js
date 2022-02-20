import bcrypt from 'bcryptjs'

export default (password, salt) => {
  return bcrypt.hashSync(password, salt)
}
