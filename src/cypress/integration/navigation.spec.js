context('Home', () => {
    beforeEach(() => {
      cy.visit('http://104.131.187.125:3000/login')
    })
  
    it('should have welcome in the h1', ()=>{
      cy.get('h1').contains('Personal Budget App')
    })
  
    it('should look the same', () => {
      cy.eyesOpen({
        appName: 'My Personal Budget App',
        testName: 'Login Page check'
      });
      cy.eyesCheckWindow();
       cy.eyesClose();
     })
  })