import express, {Express} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
const app:Express = express();


app.listen(port, () => {
  console.log(`Running at ${port}`)
})