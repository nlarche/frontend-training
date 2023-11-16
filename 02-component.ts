interface DumbComponentProps {
  a: number;
  b: number;
}

const getSideEffects = (): number => {
  return 3;
};

const DumbComponent = (props: DumbComponentProps) => {
  console.log(props.a + props.b);
};

const ContainerComponent = () => {
  const sideEffectNumber = getSideEffects();

  const composantA = DumbComponent({ a: 1, b: 2 });

  const composantB = DumbComponent({ a: sideEffectNumber, b: 2 });

  return [composantA, composantB];
};
