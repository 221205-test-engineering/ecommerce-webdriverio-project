class OpenPage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open() {
    return browser.url(`http://localhost:3000/`);
  }
  //Congo icon webelement locator
  public get congoIcon() {
    return $('//img[@class = "congoLogo"]');
  }
  // Day Night Icon locator in the opening page
  public get dayNight() {
    return $("//span[@class='MuiIconButton-label']");
  }
  // User register  locator in the opening page
  public get register() {
    return $("strong=REGISTER");
  }
  // User signin locator in the opening page
  public get signIn() {
    return $("strong=SIGN IN");
  }
  // Cart icon locator in the Navbar
  public get cart() {
    return $(".MuiBadge-root");
  }
  // Main search icon locator in the opening page
  public get searchIcon() {
    return $("[data-testid=SearchIcon]");
  }
  // Input product search text locator in the opening page
  public get productSearch() {
    return $("[type=text]");
  }
  // Cart on product locator in the opening page
  public get cartOnProduct() {
    return $("MuiBadge-root");
  }
  // Search on product locator in the opening page
  public get searchOnProduct() {
    return $("view-product-details");
  }
  // Search product clear(X) locator in the opening page
  public get searchClear() {
    return $("[data-testid=ClearIcon]");
  }
  // Collection of products in the opening page
  public get productCollection() {
    return $$('//*[@id="root"]/div[3]/div');
  }
}
export default new OpenPage();
