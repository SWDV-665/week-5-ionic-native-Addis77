import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {
  items:any[] = [];

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItems(){
    return this.items;
  }

  removeItem(index:any) {
    this.items.splice(index, 1);
  }

  addItem(item:any) {
    this.items.push(item);
  }

  editItem(item:any, index:any) {
    this.items[index] = item;
  }
}