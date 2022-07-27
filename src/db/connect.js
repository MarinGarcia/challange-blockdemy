const URI = require('../../config/db');
const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    await connect(URI);
    console.log('Mongodb connected..')
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
