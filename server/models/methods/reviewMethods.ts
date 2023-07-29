import { TypeReview } from '../../types/types'
import { Review } from '../index'
import { Product } from '../index'


const createReviewModel = async (productId:string, review:TypeReview) => {
  try {
    const product = await Product.findOne({where:{id:productId}})
    const newReview = await Review.create(review)
    product?.addReview(newReview)
    await product?.save()
    return product
  } catch (error) {
    console.log(error)
  }
}


export {
  createReviewModel
}