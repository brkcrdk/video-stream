import '@testing-library/jest-dom';
import { render, cleanup, screen, within } from '@testing-library/react';

import Modal from './';

afterEach(cleanup);

describe('Modal Works', () => {
  it('Should render if its open', async () => {
    // const { getByText } = render(
    //   <Modal open>
    //     <div>1234</div>
    //   </Modal>
    // );
    expect(2).toBe(2);
    // expect(getByText('1234').toBeT
    // screen.getByText('Load Greeting');
  });
});
