var math = require('mathjs');

var calc = '((0.001167*80000)+(500 * (1+0.001167)^-180)*(1-(1+0.001167)^-120))/(1-(1+0.001167)^-300)'
var result = math.eval(calc);
console.log(result);