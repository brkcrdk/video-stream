import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import useAddHook from './index';

describe('Test useAdd hook', () => {
  it('should return 0 if array is empty', () => {
    const {
      result: { current },
    } = renderHook(() => useAddHook([]));

    expect(current).toBe(0);
  });

  it('it adds all given numbers', () => {
    const {
      result: { current },
    } = renderHook(() => useAddHook([1, 2, 4]));

    expect(current).toBe(7);
  });
});
