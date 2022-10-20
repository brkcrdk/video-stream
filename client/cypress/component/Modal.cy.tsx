import { Modal } from 'components';

describe('Modal Component', () => {
  it('mounts', () => {
    cy.mount(<Modal open>123123</Modal>);
  });
});
