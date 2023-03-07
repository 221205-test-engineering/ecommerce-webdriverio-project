import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";

import OpenPage from "../pageobjects/open.page.js";

import RegistrationPage from "../pageobjects/registration.page.js";

import PasswordResetPage from "../pageobjects/passwordReset.page.js";

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
  await LoginPage.login(email, password);
});

Then(/^I should see all the products in the main page$/, async () => {
  const size = await OpenPage.productCollection.length;
  expect(size > 0);
  console.log("Number of products seen in the page: ", size);
});
When(/^I clicks Don't have account, Sing Up$/, async () => {
  await (await LoginPage.noAccount).click();
});

When(/^I clicks reset your password$/, async () => {
  await (await LoginPage.resetPassword).click();
});

Then(/^I should be in the registration page$/, async () => {
  await RegistrationPage.open();
  const text = await RegistrationPage.registrationTitle.getText();
  expect(text === "Sign up");
});

Then(/^I should be on the send a link to your email page$/, async () => {
  await PasswordResetPage.open();
  const text = await PasswordResetPage.sendEmail.getText();
  expect(text === "Send a link to your Email");
});
