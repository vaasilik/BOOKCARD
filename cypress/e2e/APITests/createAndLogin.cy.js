import { createNewUser, loginViaAPI, token } from "../models/APICreate";

describe('Create a new user via API and login', () => {
  it('create and login new user', () => {
  createNewUser();
  loginViaAPI();
      cy.visit('https://bookcart.azurewebsites.net', {
        onBeforeLoad(content) {
          content.window.localStorage.setItem('authToken', token);
        }
      });
  });
});
