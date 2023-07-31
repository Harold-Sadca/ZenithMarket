import { Request, Response } from 'express';
import { createUserModel } from '../models/methods/userMethods';

const createUserController = async (req:Request, res:Response) => {
  try {
    const {firstName, lastName, email, password, address, contactNumber} = req.body
    if (firstName && lastName && email && password && address && contactNumber) {
      const user = {firstName, lastName, email, password, address, contactNumber}
      const newUser = await createUserModel(user)
      console.log(newUser)
      res.status(201).send(newUser)
    } else {
      res.status(400).json({ error: 'Missing Information' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to create an account' });
  }
}

export {
  createUserController
}