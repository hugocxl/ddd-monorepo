const FORM = '[data-test=form]'
const BUTTON = '[data-test=button]'
const BUTTON_EDIT_NODE = '[data-test=edit-node-button]'
const BUTTON_DELETE_NODE = '[data-test=delete-node-button]'
const TABLE = '[data-test=table]'
const CREATE_NODE_CARD = '[data-test=create-node-card]'
const EDIT_NODE_CARD = '[data-test=edit-node-card]'
const INPUT_NAME = '[data-test=input-name]'
const INPUT_PARENT_ID = '[data-test=input-parent-id]'
const INPUT_PASSWORD = '[data-test=input-password]'
const UI_URL = 'http://localhost:3000'
const API_URL = 'http://localhost:8000'
const EMAIL = 'hugo@test.com'
const PASSWORD = '123456789'

describe('E2E Test', () => {
  beforeEach(() => {
    cy.visit(`${UI_URL}/auth`)

    // cy.request('POST', `${API_URL}/users/signin`, {
    //   email: EMAIL,
    //   password: PASSWORD,
    // })

    cy.get(INPUT_NAME).type(EMAIL)
    cy.get(INPUT_PASSWORD).type(PASSWORD)
    cy.get(BUTTON).click()
    cy.wait(1000)
  })

  it('Logins', () => {
    cy.url().should('eq', UI_URL + '/')
  })

  it('Renders Home', () => {
    cy.get('header').should('exist')
    cy.get('main').should('exist')
    cy.get('footer').should('exist')
  })

  it('Renders nodes table', () => {
    cy.get(TABLE).should('exist')
    cy.get(TABLE)
      .find('tr')
      .then((n) => {
        console.log(n)
        expect(n.length).to.be.gt(0)
      })
  })

  it('Add node', () => {
    let nodesLength = 0
    cy.intercept('/nodes/create').as('createNode')
    cy.get(TABLE)
      .find('tr')
      .then((n) => {
        nodesLength = n.length
      })

    cy.get(CREATE_NODE_CARD).should('exist')
    cy.get(CREATE_NODE_CARD).find(INPUT_NAME).type('Test Node')
    cy.get(CREATE_NODE_CARD).find(INPUT_PARENT_ID).type('10')
    cy.get(CREATE_NODE_CARD).find(BUTTON).click()
    cy.wait(1000)

    cy.wait('@createNode').its('response.statusCode').should('eq', 201)
    cy.get(TABLE)
      .find('tr')
      .then((n) => {
        expect(n.length).to.be.gt(nodesLength)
      })
  })

  it('Delete node', () => {
    let nodesLength = 0
    cy.intercept('/nodes/delete').as('deleteNode')
    cy.get(TABLE)
      .find('tr')
      .then((n) => {
        nodesLength = n.length
      })

    cy.get(CREATE_NODE_CARD).find(INPUT_NAME).type('Test Node')
    cy.get(CREATE_NODE_CARD).find(INPUT_PARENT_ID).type('10')
    cy.get(CREATE_NODE_CARD).find(BUTTON).click()
    cy.wait(1000)

    cy.get(TABLE)
      .find(BUTTON_DELETE_NODE)
      .then((n) => {
        n[n.length - 1].click()
      })
    cy.wait(1000)

    cy.wait('@deleteNode').its('response.statusCode').should('eq', 201)
    cy.get(TABLE)
      .find('tr')
      .then((n) => {
        expect(n.length).to.be.eq(nodesLength)
      })
  })

  it('Edits node', () => {
    let nodeName = 'Test edit node'
    let nodeParentId = '123'
    cy.intercept('/nodes/edit').as('editNode')

    cy.get(CREATE_NODE_CARD).find(INPUT_NAME).type('Test Node')
    cy.get(CREATE_NODE_CARD).find(INPUT_PARENT_ID).type('10')
    cy.get(CREATE_NODE_CARD).find(BUTTON).click()
    cy.wait(1000)
    cy.get(TABLE)
      .find(BUTTON_EDIT_NODE)
      .then((n) => {
        n[n.length - 1].click()
      })
    cy.get(EDIT_NODE_CARD).find(INPUT_NAME).type(nodeName)
    cy.get(CREATE_NODE_CARD).find(INPUT_PARENT_ID).type(nodeParentId)
    cy.get(EDIT_NODE_CARD).find(BUTTON).click()
    cy.wait(1000)

    cy.wait('@editNode').its('response.statusCode').should('eq', 201)
  })
})
