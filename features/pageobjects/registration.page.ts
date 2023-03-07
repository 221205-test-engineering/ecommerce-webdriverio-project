// import { ChainablePromiseElement } from "webdriverio";
class RegistrationPage {
  // Opening register web page
  public open() {
    browser.url("http://localhost:3000/register");
  }
  //Registration page title locator
  public get registrationTitle() {
    return $('//*[@id="root"]/main/div/h1');
  }

  // Registration page firstName locator
  public get firstName() {
    return $("#firstName");
  }
  // Registration page lastName locator
  public get lastName() {
    return $("#lastName");
  }
  // Registration Page email locator
  public get email() {
    return $("#email");
  }
  //Registration page password locator
  public get password() {
    return $("#password");
  }
  //Registration page Sign up locator
  public get signUp() {
    return $("//button[@type='submit']");
  }
  // Already have an account Sign in locator
  public get signIn() {
    return $("*=Already have an account");
  }
}
export default new RegistrationPage();
