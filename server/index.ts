const test = <T>(param: T) => {
  console.log(param);
  return param;
};

test<string>('tst');
