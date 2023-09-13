import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  ClientName: string;
  ProductList: IProduct[];
  StoreObject: Store;
  flagImg: boolean = true;
  catList: ICategory[];
  selectedCatID: number = 0

  constructor() {
    this.ClientName = '';
    this.StoreObject = new Store(
      'ArtStore',
      ['Branch1', 'Branch2'],
      'https://picsum.photos/200/300'
    );
    this.catList = [
      { id: 1, name: 'Colored' },
      { id: 2, name: 'Black & White' },
      { id: 3, name: "Oil Paintings" },
    ]

    this.ProductList = [
      {
        id: 1,
        name: 'Drawing 1',
        quantity: 1,
        price: 1999,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(3).webp',
        categoryID: 1,
      },
      {
        id: 15,
        name: 'Drawing 2',
        quantity: 1,
        price: 1999,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'Drawing 3',
        quantity: 5,
        price: 2090,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
        categoryID: 1,
      },
      {
        id: 3,
        name: 'Drawing 4',
        quantity: 15,
        price: 9099,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(6).webp',
        categoryID: 2,
      },
      {
        id: 14,
        name: 'Drawing 5',
        quantity: 15,
        price: 9099,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp',
        categoryID: 2,
      },
      {
        id: 4,
        name: 'Drawing 6',
        quantity: 0,
        price: 1900,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp',
        categoryID: 2,
      },
      {
        id: 5,
        name: 'Drawing 7',
        quantity: 1,
        price: 290,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(12).webp',
        categoryID: 3,
      },
      {
        id: 13,
        name: 'Drawing 8',
        quantity: 1,
        price: 290,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp',
        categoryID: 3,
      },
      {
        id: 6,
        name: 'Drawing 9',
        quantity: 0,
        price: 9100,
        img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp',
        categoryID: 3,
      },
    ];
  }

  isPurchased: boolean = false;

  purchase() {
    this.isPurchased = true;
    this.flagImg = !this.flagImg;
  }
  decrease(prdQuant: number): number {
    if (prdQuant >= 1) {
      prdQuant = prdQuant - 1;
    }
    return prdQuant;
  }
}
