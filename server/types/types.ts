export interface TypeUser {
  id?: string;
  firstName: string;
  lastName:string;
  email: string;
  password: string;
  address: string;
  contactNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TypeProduct {
  id?:string;
  name:string;
  price: number;
  description:string;
  image:string;
  quantityInStock:number;
  createdAt?:Date;
  updatedAt?:Date;
}

export interface TypeReview {
  id?:string;
  rating:number;
  review:string;
  date:Date;
  createdAt?:Date;
  updatedAt?:Date;
}

export interface TypeOrder {
  id?:string;
  date:Date;
  totalAmount:number;
  createdAt:Date;
  updatedAt:Date
}