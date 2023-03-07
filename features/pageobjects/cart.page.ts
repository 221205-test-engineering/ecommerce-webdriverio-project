import openPage from "./open.page.js";

class CartPage {
  // Open cart webpage
  public open() {
    return browser.url("http://localhost:3000/cart");
  }

  // Header 'Your Bag' selector
  public get cartHeader() {
    return $("//*[@id='root']/div[2]/div/h1");
  }
}
export default new CartPage();
