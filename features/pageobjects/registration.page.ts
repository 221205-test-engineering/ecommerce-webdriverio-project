class RegistrationPage {
  public open() {
    browser.url("http://localhost:3000/register");
  }
  //Registration page title locator
  public get registrationTitle() {
    return $('//*[@id="root"]/main/div/h1');
  }
}
export default new RegistrationPage();
