import { ChainablePromiseElement } from "webdriverio";

class CartPage {
  public cartHeader() {
    return $("h1=YOUR BAG");
  }
}
export default new CartPage();
