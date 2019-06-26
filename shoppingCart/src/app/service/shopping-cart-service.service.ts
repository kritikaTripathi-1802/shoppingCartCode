import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  constructor(private http: HttpClient) {
}

public getItemList(): Observable<any> {
    return this.http.get("./assets/shoppingItemData/shoppingCartData.json");
}


}