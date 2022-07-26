require('dotenv').config()
const seeder = require('mongoose-seed');

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const db = process.env.DB_NAME

const URI = `mongodb+srv://${user}:${password}@${db}/?retryWrites=true&w=majority`

const locationsData =  require('./resources/locations');
const episodesData = require('./resources/episodes');
const charactersData = require('./resources/characters');

seeder.connect(URI, () => {
  require('../models/Location');
  require('../models/Episode');
  require('../models/Character');

  seeder.loadModels([
    './models/Location.js',
    './models/Episode.js',
    './models/Character.js'
  ]);

  seeder.clearModels(['Location', 'Episode', 'Character'], () => {
    seeder.populateModels(locationsData, () => {
      seeder.populateModels(episodesData, () => {
        seeder.populateModels(charactersData, () => {
          seeder.disconnect();
        })
      });
    });
  });
})
