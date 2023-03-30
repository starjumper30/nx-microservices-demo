import express from 'express';
import {Product} from '@acme-commerce/model-product';

const foo: Product = {
  id: "1",
  title: "Widget",
  description: "A really cool widget",
  price: 1.50
}
console.log(foo)

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
