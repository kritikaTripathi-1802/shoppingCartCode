import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
@Input()addItemIncartInput:any;
@Output() closeEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closePopup(){
    this.closeEvent.emit(false);
  }
  totalPrice:number=0;
  ngOnChanges(){
this.addItemIncartInput.forEach(element => {
  this.totalPrice=parseInt(element.price)+this.totalPrice;
});
  }
}
