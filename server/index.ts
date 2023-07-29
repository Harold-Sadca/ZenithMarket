import express, {Express} from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRoutes';

dotenv.config();
const port = process.env.PORT;
const app:Express = express();

app.use(userRouter)


app.listen(port, () => {
  console.log(`Running at ${port}`)
})