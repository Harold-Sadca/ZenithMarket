import { TypeProduct } from '../../types/types'
import { Product } from '../index'


const createProductModel = async (userId:string, product:TypeProduct) => {
  try {
    const newProduct = await Product.create(product)
    newProduct.setUser(userId)
    await newProduct.save()
    console.log(newProduct)
    return newProduct
  } catch (error) {
    console.log(error)
  }
}


export {
  createProductModel
}