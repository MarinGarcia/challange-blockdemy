require('dotenv').config()
const { connect } = require('mongoose');
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const db = process.env.DB_NAME
const URI = `mongodb+srv://${user}:${password}@${db}/?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    await connect(URI);
    console.log('Mongodb connected..')
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
