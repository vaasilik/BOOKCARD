export let token;
export function loginViaAPI() {
    cy.request({
        method: "POST",    
        url: "https://bookcart.azurewebsites.net/api/login",
        body:{
            "username": "Maryna",
            "password": "8va@GVNNR@E2"
        }
    }).then ((responce) => {
        token = responce.body.token;
        cy.log(responce);
        cy.log(responce.body.token); 
        cy.log(responce.status);
    });
}