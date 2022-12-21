/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import { faker } from '@faker-js/faker'


describe('Registro no BugBank', () => {

    const loginPage = new LoginPage
    const email = faker.internet.email()
    const nome = faker.name.firstName()
    const senha = faker.internet.password()


    beforeEach('', () => {
        cy.visit('https://bugbank.netlify.app/')
    })

    it('Registrar com email inválido', () => {
        loginPage.RegistrarEmailInvalido('abc.com')
    })

    it('Registrar sem o campo nome', () => {
        loginPage.RegistrarSemNome(email,nome,senha)
    })

    it('Registrar com sucesso', () => {
        loginPage.RegistrarComSucesso(email,nome,senha)
    })

})