import { useState, useEffect, ReactNode } from 'react';

import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface Props {
  open: boolean;
  children: ReactNode;
}

function Modal({ open, children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <ModalOverlay>
      <ModalContainer>{children}</ModalContainer>
    </ModalOverlay>,
    document.querySelector('#modal') as HTMLElement
  );
}
export default Modal;

// const ModalOverlay = styled('div', {
//   position: 'fixed',
//   inset: 0,
//   backgroundColor: '$overlay',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   zIndex: 9,
//   overflow: 'auto',
// });

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  overflow: auto;
  background: ${p => p.theme.colors.grayScale.gray900}40; // Sona eklenen değer alpha değerini ifade eder
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 630px;
  background-color: ${p => p.theme.colors.grayScale.gray900};
  /* backgroundColor: '$white',
  padding: '$12',
  borderRadius: '$3xl',
  zIndex: 10, */
`;
