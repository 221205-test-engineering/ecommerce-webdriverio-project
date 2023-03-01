import { ChainablePromiseElement } from "webdriverio";

class RegistrationPage {
  //Registration page title locator
  public registrationTitle() {
    return $('//*[@id="root"]/div[2]/h1');
  }
}
export default new RegistrationPage();
