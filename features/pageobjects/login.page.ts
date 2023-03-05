// import { ChainablePromiseElement } from "webdriverio";

// import OpenPage from "./open.page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  public open() {
    return browser.url("http://localhost:3000/login");
  }

  public get inputUsername() {
    return $("#username");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public get signinButton() {
    return $("login");
  }
  public get signinTitle() {
    return $("//*[@id='root']/main/div/h1");
  }
}

export default new LoginPage();
