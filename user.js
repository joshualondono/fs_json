const fs = require('fs');
const axios = require('axios');

async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = await JSON.stringify(response.data)
      console.log('Converting data to string')
      const save = await fs.writeFile('addressList.json', data, function (err) {
        if (err) throw err;
        console.log('Saved to addressList.json!');
      });

    } catch (error) {
      console.error(error);
    }
  }

  console.log(axios.get('/addressList.json'))
  console.log(getUser())