import { Order } from "../index";
import { TypeOrder } from "../../types/types";
import { Product } from '../index'


const createOrderModel = async (userId:string, productId:string, totalAmount:number) => {
  try {
    const newOrder = await Order.create({totalAmount})
    const product = await Product.findOne({where:{id:productId}})
    const productStock = product?.quantityInStock as number
    product!.quantityInStock = productStock - totalAmount
    await product?.save()
    newOrder.setProduct(productId)
    newOrder.setUser(userId)
    console.log("Order",newOrder)
    await newOrder.save()
    return newOrder
  } catch (error) {
    console.log(error)
  }
}


export {
  createOrderModel
}