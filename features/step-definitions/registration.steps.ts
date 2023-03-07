import { Given, When, Then } from "@wdio/cucumber-framework";

import OpenPage from "../pageobjects/open.page.js";

import RegistrationPage from "../pageobjects/registration.page.js";

import LoginPage from "../pageobjects/login.page.js";

Given(/^User is in the registration page$/, async () => {
  await OpenPage.open();
  await OpenPage.register.click();
});

When(/^User entered first name in the input field$/, async () => {
  await (await RegistrationPage.firstName).setValue("Mon");
});

When(/^User entered last name in the input field$/, async () => {
  await (await RegistrationPage.lastName).setValue("Dan");
});

When(/^User entered email in the input field$/, async () => {
  await (await RegistrationPage.email).setValue("mon@mail.com");
});

When(/^User entered password in the input field$/, async () => {
  await (await RegistrationPage.password).setValue("Pass123!");
});

When(/^User clicks Sign Up button$/, async () => {
  await (await RegistrationPage.signUp).click();
});

When(/^User clicks Already have an account Sign in$/, async () => {
  await (await RegistrationPage.signIn).click();
});

Then(/^User will be in the Sign In page$/, async () => {
  await LoginPage.open();
  const text = await LoginPage.signinTitle.getText();
  expect(text === "Sign in");
});
