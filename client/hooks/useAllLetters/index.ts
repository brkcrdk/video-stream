const useAllLetters = (word: string): string[] => {
  return word.split('').filter(val => val !== ' ');
};

export default useAllLetters;
