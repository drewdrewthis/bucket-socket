const areaOfATriangle = () => {
  var side1 = 5;
  var side2 = 6;
  var side3 = 7;
  var perimeter = (side1 + side2 + side3)/2;
  return Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
}

export default (updateScore, i) => ({
  title: 'Area of a Triange',
  description: `Find the area of a triangle where lengths of the three of its sides are 5, 6, 7`,
  output: {
    description: 'Get it right',
    setup: `var answer = '';`,
    verify: (answer) => {
      console.log('Answer', answer);
      if (answer === areaOfATriangle()) {
        updateScore(i);
        return true;
      }
    },
    teardown: `__verify__(answer)`
  }
});
