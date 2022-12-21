/// <reference types="cypress" />
import LoginPage from "../../pages/login-page"
import { faker } from "@faker-js/faker"

describe('Login BugBank', () => {

const loginPage = new LoginPage
const email = faker.internet.email()
const nome = faker.name.firstName()
const senha = faker.internet.password()


beforeEach('', () => {
    cy.visit('https://bugbank.netlify.app/')
})


it('Login com email inválido', () => {
   loginPage.LoginEmailInvalido('abc.com')
})

it('Login válido com email, nome e senha', () => {
    loginPage.RegistrarComSucesso(email,nome,senha)
    loginPage.LoginValido(email,senha)
 })


})