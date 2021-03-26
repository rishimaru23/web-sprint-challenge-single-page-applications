describe ('App tests', ()=> {
    beforeEach(() =>{
        cy.visit('http://localhost:3001')
    })
    const submitBtn = () => cy.get("button[id=submit]")
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni')
    const chickenInput = () => cy.get('input[name=chicken')
    const pineappleInput = () => cy.get('input[name=pineapple')
    const peppersInput = () => cy.get('input[name=peppers')
    const sausageInput = () => cy.get('input[name=sausage')
    const instructionsInput = () => cy.get('input[name=instructions]')

    it('Elements showing on page', () => {
        nameInput().should('exist')
        submitBtn().should('exist')
        sizeInput().should('exist')
        nameInput().should('exist')
        pepperoniInput().should('exist')
        chickenInput().should('exist')
        sausageInput().should('exist')
        peppersInput().should('exist')
        pineappleInput().should('exist')
        instructionsInput().should('exist')
    })

    it('Functionality of inputs', () => {
        sizeInput()
            .select('medium')
            .should('have.value', 'medium')

        chickenInput().click()
            .should('have.value', 'on')

        pepperoniInput().click()
            .should('have.value', 'on')

        instructionsInput()
            .type("I would like light cheese!")
            .should('have.value', "I would like light cheese!")

        submitBtn().click()
    })
}) 


