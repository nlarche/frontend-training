interface outputEvent {
  value: number;
}

interface DumbComponentWithOuputProps {
  a: number;
  b: number;
  outputHandler: (event: outputEvent) => void;
}

const getSideEffects = (): number => {
  return Math.random();
};

const DumbComponent = (props: DumbComponentWithOuputProps) => {
  const addition = props.a + props.b;
  props.outputHandler({ value: addition });
  return addition;
};

const ContainerComponent = () => {
  const sideEffectNumber = getSideEffects();

  const handleOutput = (event: outputEvent) =>
    console.log("containerComponet", event.value);

  const composantA = DumbComponent({ a: 1, b: 2, outputHandler: handleOutput });

  const composantB = DumbComponent({
    a: sideEffectNumber,
    b: 2,
    outputHandler: handleOutput,
  });

  return [composantA, composantB];
};

ContainerComponent().forEach(console.log);
