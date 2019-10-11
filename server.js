const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('app.db')

db.serialize(
  function() {
    db.run("CREATE TABLE if not exists products (imageSrc TEXT, productName TEXT, productDescription TEXT, discount INTEGER, price INTEGER)");
  }
);

db.close();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/products', (req, res) => {
  res.send({
    'products': [
      {
        imageSrc: '',
        productName:'',
        productDescription:'',
        discount:'',
        price:'',        
      }
    ]
  });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
