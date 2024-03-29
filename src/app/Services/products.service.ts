import { EventEmitter, Injectable, Output } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { IOrderItem } from '../Models/IOrderItem';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ProductList: IProduct[];
  cartList:IOrderItem[]=[];
  @Output() onOrderItemAdd :EventEmitter<IOrderItem>;


  constructor(private cartService:CartService) {
    this.ProductList = [
      {
        id: 1,
        name: 'Drawing 1',
        quantity: 1,
        price: 1999,
        img: 'https://i.ibb.co/4WNw2zm/20230730-191029.jpg',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'Drawing 2',
        quantity: 0,
        price: 1999,
        img: 'https://i.ibb.co/59cNsb0/IMG.jpg',
        categoryID: 2,
      },
      {
        id: 3,
        name: 'Drawing 3',
        quantity: 5,
        price: 2090,
        img: 'https://i.ibb.co/YfZjJCH/167518700489.jpg',
        categoryID: 2,
      },
      {
        id: 4,
        name: 'Drawing 4',
        quantity: 15,
        price: 9099,
        img: 'https://i.ibb.co/yRLTwpK/Pics-Art-10-10-06-38-33.jpg',
        categoryID: 2,
      },
      {
        id: 5,
        name: 'Drawing 5',
        quantity: 15,
        price: 9099,
        img: 'https://i.ibb.co/Mf5QFd9/20220928-003021.jpg',
        categoryID: 2,
      },
      {
        id: 6,
        name: 'Drawing 6',
        quantity: 1,
        price: 1900,
        img: 'https://i.ibb.co/9ThYC8L/image.jpg',
        categoryID: 2,
      },
      {
        id: 7,
        name: 'Drawing 7',
        quantity: 1,
        price: 290,
        img: 'https://i.ibb.co/ryD5WjQ/image.jpg',
        categoryID: 3,
      },
      {
        id: 8,
        name: 'Drawing 8',
        quantity: 3,
        price: 290,
        img: 'https://i.ibb.co/sRqTDdF/image.jpg',
        categoryID: 2,
      },
      {
        id: 9,
        name: 'Drawing 9',
        quantity: 0,
        price: 9100,
        img: 'https://i.ibb.co/DVv8G1N/IMG.jpg',
        categoryID: 2,
      },
      {
        id:10 ,
        name: 'Drawing 10',
        quantity: 3,
        price: 7100,
        img: 'https://i.ibb.co/V9Xgn6k/Pics-Art-11-27-04-23-48.jpg',
        categoryID: 3,
      },
      {
        id:11,
        name: 'Drawing 11',
        quantity: 2,
        price: 8000,
        img: 'https://i.ibb.co/JzSdcFR/image.jpg',
        categoryID: 3,
      },
      {
        id:12,
        name: 'Drawing 12',
        quantity: 3,
        price: 300,
        img: 'https://i.ibb.co/JdbR3VY/IMG.jpg',
        categoryID: 1,
      },

    ];
    this.onOrderItemAdd=new EventEmitter<IOrderItem>();

  }
  getProductsByCatID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.ProductList;
    } else {
      return this.ProductList.filter((prd) => prd.categoryID == catID);
    }
  }
  getProductByID(prodID: number): IProduct | undefined {
    return this.ProductList.find((prod) => prod.id == prodID);
  }
  getProductsIDs():number[]{
    let prdIDs=this.ProductList.map(prd=>prd.id);
    return prdIDs;
  }
  decrease(prdQuant: number): number {
    if (prdQuant >= 1) {
      prdQuant = prdQuant - 1;
    }
    return prdQuant;
  }
  isProductExist(id: number): boolean {
    return this.getProductByID(id) ? true : false;
  }
  AddOrderItemToCartList(orderItem: IOrderItem) {

    let isOrderItemExist = this.cartList.findIndex(
      (oItem) => oItem.product.id == orderItem.product.id
    );
    if (isOrderItemExist == -1) {
      this.cartList.push(orderItem);
      this.cartService.cartCount++;
      orderItem.product.quantity -= orderItem.count;
      let product = this.getProductByID(orderItem.product.id);
      // product!.quantity -= orderItem.count;
    } else {
      let oldOrderItem = this.cartList[isOrderItemExist];

      let product = this.getProductByID(orderItem.product.id);

      // product!.quantity += oldOrderItem.count;

      // this.cardList[isOrderItemExist] = orderItem;

      // product!.quantity -= orderItem.count;

      oldOrderItem.count+=orderItem.count;
      product!.quantity -= orderItem.count;
    }
  }
  getCartItems(){
    return this.cartList;
  }
}
