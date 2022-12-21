class LoginPage {

    inputEmail = '.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default'
    inputSenha = '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'
    inputEmailRegistrar = ':nth-child(2) > .input__default'
    inputSenhaRegistrar = ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'
    inputConfirmarSenhaRegistrar = ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'
    inputNome = ':nth-child(3) > .input__default'
    btnAcessar = '.otUnI'
    msgBemVindo = '.home__ContainerText-sc-1auj767-7 > :nth-child(2)'
    btnRegistrar = '.ihdmxA'
    btnCadastrar = '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0'
    erroFormatoInvalido = '.kOeYBn > .input__warging' 
    erroNomeVazio = '#modalText'
    msgCadastroSucesso = '#modalText'
    btnFecharCadastro = '#btnCloseModal'
    

    RegistrarComSucesso(email,nome,senha){
        cy.get(this.btnRegistrar).click()
        cy.get(this.inputEmailRegistrar).type(email,{force: true})
        cy.get(this.inputNome).type(nome,{force: true})
        cy.get(this.inputSenhaRegistrar).type(senha,{force: true})
        cy.get(this.inputConfirmarSenhaRegistrar).type(senha,{force: true})
        cy.get(this.btnCadastrar).click({force: true})
        cy.get(this.msgCadastroSucesso).should('contain','foi criada com sucesso')
        cy.get(this.btnFecharCadastro).click({force: true})
    }

    RegistrarEmailInvalido(email){
        cy.get(this.btnRegistrar).click()
        cy.get(this.inputEmailRegistrar).type(email,{force: true})
        cy.get(this.erroFormatoInvalido).should('have.text', 'Formato inválido')
    }

    RegistrarSemNome(email,senha){
        cy.get(this.btnRegistrar).click()
        cy.get(this.inputEmailRegistrar).type(email,{force: true})
        cy.get(this.inputSenhaRegistrar).type(senha,{force: true})
        cy.get(this.inputConfirmarSenhaRegistrar).type(senha,{force: true})
        cy.get(this.btnCadastrar).click({force: true})
        cy.get(this.erroNomeVazio).should('have.text', 'Nome não pode ser vazio.\n')
    }

    LoginEmailInvalido(email){
        cy.get(this.inputEmail).type(email)
        cy.get(this.erroFormatoInvalido).should('have.text','Formato inválido')
    }

    LoginValido(email,senha){
        cy.get(this.inputEmail).type(email)
        cy.get(this.inputSenha).type(senha)
        cy.get(this.btnAcessar).click()
        cy.get(this.msgBemVindo).should('have.text','bem vindo ao BugBank :)')
    }

}

export default LoginPage