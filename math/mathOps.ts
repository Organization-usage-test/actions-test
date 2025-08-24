export const sum = ({
  operand1,
  operand2,
}: {
  operand1: number;
  operand2: number;
}) => {
  return operand1 + operand2;
};

export const division = ({
  divNumber,
  divisor,
}: {
  divNumber: number;
  divisor: number;
}) => {
  if (divisor === 0) {
    return '-err-';
  }
  return divNumber / divisor;
};
