const fs = require('fs');
const axios = require('axios');

async function getUser() {
    try {
      const read = await fs.createReadStream(__dirname + '/addressList.json', 'utf8', function (err) {
        if (err) throw err;
        console.log(read);
      });

    } catch (error) {
      console.error(error);
    }
  }

  console.log(getUser())