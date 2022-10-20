import { useState, useEffect, ReactNode } from 'react';

import { createPortal } from 'react-dom';

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

  return createPortal(children, document.querySelector('#modal') as HTMLElement);
}
export default Modal;
