import currentDateTime from './currentDateTime';
import areaOfATriangle from './areaOfATriangle';

export default (incrementCounter) => {
  const seen = {};
  const updateScore = (q) => {
    if(!seen[q]) {
      console.log(q, 'passed');
      seen[q] = true;
      const newScore = Object.keys(seen).length - 1;
      incrementCounter(newScore);
    }
  }
  return [
    currentDateTime,
    areaOfATriangle,
  ].map((q, i) => q(updateScore, i))
  .concat([
    {
      description: `Declare a variable 'x' to be equal to 5`,
      whitelist: ['VariableDeclaration'],
      output: {
        description: 'Get it right',
        verify: (x) => {
          console.log('Answer', x);
          if (x === 5) {
            updateScore('one');
            return true;
          }
        },
        teardown: `__verify__(x)`
      }
    },
  ])
}
