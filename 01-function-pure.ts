// Not pure function
const one = 1;

const addOne = (value: number): number => {
  return one + value;
};

// pure function
const add = (a: number, b: number): number => {
  return a + b;
};

const addOnePure = (value: number) => add(1, value);
