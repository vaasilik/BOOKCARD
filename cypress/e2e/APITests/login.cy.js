import { loginViaAPI, token } from "../models/APILogin"

describe('Log in via API with the created user', () => {
  it('login via API', () => {
    loginViaAPI();
        cy.visit('https://bookcart.azurewebsites.net', {
            onBeforeLoad(content) {
                content.window.localStorage.setItem('authToken', token);
            }
        });
    })
})