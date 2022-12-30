const url = require("../url");
const urlSeeds = require("./urlData.json");
const db = require("../../config/mongoose");

db.once('open', () => {
  url.create(urlSeeds)
  console.log('mongodb seeder finished')
})