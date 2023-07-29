import { TypeUser } from '../../types/types';
import { User } from '../index'


const createUserModel = async (user: TypeUser) => {
  try {
    const newUser = await User.create(user);
    newUser.password = null;
    return newUser;
  } catch (error) {
    console.log(error)
  }
}



export {
  createUserModel,
}