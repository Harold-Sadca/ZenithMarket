import { TypeProduct } from '../../types/types'
import { Product } from '../index'


const createProductModel = async (userId:string, product:TypeProduct) => {
  try {
    const newProduct = new Product(product)
    newProduct.setUser(userId)
    await newProduct.save()
    return newProduct
  } catch (error) {
    console.log(error)
  }
}


export {
  createProductModel
}