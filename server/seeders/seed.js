const db = require('../config/connection');
// REQUIRE YOUR MODELS INSIDE THE CURLEY BRACES BELOW
const {} = require('../models');
// REQUIRE ANY SEED FILES YOU MAY HAVE BELOW

db.once('open', async () => {
    // REPLACE THE CHEVRONS WITH THE MODEL NAME YOU REQUIRED
  await <"MODEL NAME HERE">.deleteMany({});
  await <"MODEL NAME HERE">.create(<"SEEDER FILE NAME HERE">);

  console.log('all done!');
  process.exit(0);
});