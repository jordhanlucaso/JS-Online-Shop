import bcryptjs from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'jlos94@hotmail.com',
    password: bcryptjs.hashSync('123456789', 10),
    idAdmin: true
  },
  {
    name: 'Kata',
    email: 'kath.erinxdimo@gmail.com',
    password: bcryptjs.hashSync('987654321', 10),
    isAdmin: false
  }
]

export default users
