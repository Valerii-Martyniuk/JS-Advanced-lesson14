import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  public changeBasket = new Subject<boolean>();
  public changeUser = new Subject<boolean>();
  constructor() {}
}
