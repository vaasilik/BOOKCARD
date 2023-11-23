export let token;

export function createNewUser() {
  return cy.request({
    method: 'POST',
    url: 'https://bookcart.azurewebsites.net/api/User',
    body: {
      "userId": 0,
      "firstName": "Max",
      "lastName": "Ivanov",
      "username": "ivanov007",
      "password": "password123",
      "gender": "Male",
      "userTypeId": 0
    }
  });
}

export function loginViaAPI() {
  cy.request({
    method: "POST",    
    url: "https://bookcart.azurewebsites.net/api/Login",
    body: {
      "username": "ivanov007",
      "password": "password123"
    }
  }).then((response) => {
    token = response.body.token;
    cy.log(response);
    cy.log(response.body.token); 
    cy.log(response.status);
  });
}