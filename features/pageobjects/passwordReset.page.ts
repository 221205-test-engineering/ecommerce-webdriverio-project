class PasswordResetPage {
  // Url to open forgot password page
  public open() {
    browser.url("http://localhost:3000/forgot-password");
  }
  // Send a link to your email heading locator
  public get sendEmail() {
    return $('//*[@id="root"]/main/div/h1');
  }
}
export default new PasswordResetPage();
