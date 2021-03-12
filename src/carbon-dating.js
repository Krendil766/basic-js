const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(string) {
    if (typeof (string)!= 'string' ||string>MODERN_ACTIVITY || string<=0 ) {
    return false;
  }
  const N = parseFloat(string);
  const REACTON = 0.693 / HALF_LIFE_PERIOD;
  if (N != NaN && N > 0) {
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / N)/ REACTON);
    return age;
  } else {
    return false;
  }
};
