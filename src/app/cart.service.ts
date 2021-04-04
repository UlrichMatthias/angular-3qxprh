import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  items = [];

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(productId: number) {
    var index: number = this.items.indexOf(productId);
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
