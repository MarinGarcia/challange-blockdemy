require('dotenv').config()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const db = process.env.DB_NAME

module.exports = `mongodb+srv://${user}:${password}@${db}/?retryWrites=true&w=majority`
