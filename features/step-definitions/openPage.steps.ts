import { Given, When, Then } from "@wdio/cucumber-framework";

import OpenPage from "../pageobjects/open.page.js";

import RegistrationPage from "../pageobjects/registration.page.js";

import LoginPage from "../pageobjects/login.page.js";

import CartPage from "../pageobjects/cart.page.js";

Given(/^User is in the opening page of ecommerce website$/, async () => {
  await OpenPage.open();
});

When(/^User clicks CONGO icon$/, async () => {
  await OpenPage.congoIcon.click();
});

When(/^User clicks day and night icon$/, async () => {
  await OpenPage.dayNight.click();
});

When(/^User clicks REGISTER button$/, async () => {
  await OpenPage.register.click();
});

When(/^User clicks SIGNIN button$/, async () => {
  await OpenPage.signIn.click();
});

When(/^User clicks navbar cart icon$/, async () => {
  await OpenPage.cart.click();
});

Then(/^User can see all the products$/, async () => {
  await OpenPage.productCollection.forEach((element) => {
    console.log(element.getText());
  });
});

Then(/^Page color can change to dark or white$/, async () => {
  const element = await $("body");
  const backgroundColor = await element.getCSSProperty("color");
  console.log(backgroundColor);
});

Then(/^User can land in registration page$/, async () => {
  console.log(RegistrationPage.registrationTitle);
});

Then(/^User can land in SignIn page$/, async () => {
  console.log(LoginPage.signinTitle);
});

Then(/^User can land in YOUR BAG page$/, async () => {
  console.log(CartPage.cartHeader);
});
