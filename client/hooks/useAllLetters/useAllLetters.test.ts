import { renderHook } from '@testing-library/react';

import useAllLetters from './index';

describe('Test useAllLetters hook', () => {
  it('should gets all letters from given words', () => {
    const {
      result: { current },
    } = renderHook(() => useAllLetters('deneme'));
    expect(current).toEqual(['d', 'e', 'n', 'e', 'm', 'e']);
  });

  it('should filters all empty strings', () => {
    const {
      result: { current },
    } = renderHook(() => useAllLetters('dene me'));
    expect(current).toEqual(['d', 'e', 'n', 'e', 'm', 'e']);
  });
});
