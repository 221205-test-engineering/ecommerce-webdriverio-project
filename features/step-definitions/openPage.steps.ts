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
  // await OpenPage.dayNight.click();
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
  const size = await OpenPage.productCollection.length;
  expect(size > 0);
  console.log("Number of products seen in the page: ", size);
});

Then(/^Page color can change to dark or white$/, async () => {
  const elem = await $("body");
  await elem.waitForDisplayed({ timeout: 3000 });
  const backgroundColor = await elem.getCSSProperty("color");
  expect(backgroundColor.parsed.hex === "#000000");
  console.log(backgroundColor);
});

Then(/^User can land in registration page$/, async () => {
  // await expect(browser).toHaveTitleContaining("Congo");
  await RegistrationPage.open();
  const text = await RegistrationPage.registrationTitle.getText();
  expect(text === "Sign up");
});

Then(/^User can land in SignIn page$/, async () => {
  await LoginPage.open();
  const text = await LoginPage.signinTitle.getText();
  expect(text === "Sign in");
});

Then(/^User can land in YOUR BAG page$/, async () => {
  await CartPage.open();
  const text = await CartPage.cartHeader.getText();
  expect(text === "YOUR BAG");
});
