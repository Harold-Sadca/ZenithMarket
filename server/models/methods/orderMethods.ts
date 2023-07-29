import { Order } from "../index";
import { TypeOrder } from "../../types/types";
import { Product } from '../index'


const createOrderModel = async (userId:string, productId:string, order:TypeOrder) => {
  try {
    const newOrder = await Order.create(order)
    const product = await Product.findOne({where:{id:productId}})
    const productStock = product?.quantityInStock as number
    product!.quantityInStock = productStock - order.totalAmount
    await product?.save()
    newOrder.setProduct(productId)
    newOrder.setUser(userId)
    await newOrder.save()
    return newOrder
  } catch (error) {
    console.log(error)
  }
}


export {
  createOrderModel
}