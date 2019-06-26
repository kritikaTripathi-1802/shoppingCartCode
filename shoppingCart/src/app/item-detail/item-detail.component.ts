import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
@Input() selectedItem:any;
@Output() closeEvent=new EventEmitter();
@Output()addToCart= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closePopup(){
this.closeEvent.emit(false);
  }

  buyThis(){
    localStorage.setItem('selectedItem', this.selectedItem);
    this.addToCart.emit(this.selectedItem);
  }
}
