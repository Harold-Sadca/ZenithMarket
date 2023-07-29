import { Router } from 'express';
import { createUserController } from '../controllers/userControllers';

const userRouter = Router();

userRouter.post('/new-user', createUserController)

export default userRouter