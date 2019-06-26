import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from "../service/shopping-cart-service.service";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
shoppingData:any;
showPopup:boolean=false;
  constructor( private shoppingServiceObj:ShoppingCartServiceService) { }

  ngOnInit() {
    this.getItemListToShop()
 
  }
  getItemListToShop(){
    this.shoppingServiceObj.getItemList().subscribe(data => {
      console.log(data);
      this.shoppingData=data;
  });
  }
selectedItem:any;
  openDetail(selectedItem){
    this.showPopup=true;
    this.selectedItem=selectedItem;
  }
  closePopup(){
    this.showPopup=false;
    this.selectedItem=null;
  }
  selectedItemFromCart:any;
  closePopupEvent(event){
    this.showPopup=event;
  }

  closePopupCart(event){
    this.showCart=event;
  }
  addItemIncart:any=[];
  add(event){
    this.selectedItemFromCart=event.item;
    this.showPopup=false;
    this.addItemIncart.push(event);
  }
  showCart:boolean=false;
  showCartItems(){
    this.showCart=true;
  }
}
