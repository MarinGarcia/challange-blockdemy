const seeder = require('mongoose-seed');
const URI = require('../../config/db');

const locationsData =  require('./resources/locations');
const episodesData = require('./resources/episodes');
const charactersData = require('./resources/characters');

seeder.connect(URI, () => {
  require('../models/Location');
  require('../models/Episode');
  require('../models/Character');

  seeder.loadModels([
    './src/models/Location.js',
    './src/models/Episode.js',
    './src/models/Character.js'
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
