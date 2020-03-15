const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(string) {
    // validate
    if (typeof string != 'string' || (string <= 0 || string > MODERN_ACTIVITY)) {
        return false;
    }

    //calculate
    let val = parseFloat(string);
    if (typeof val != NaN && val > 0) {
        let age = Math.ceil(Math.log(MODERN_ACTIVITY / val) / (0.693 / HALF_LIFE_PERIOD));
        return age;
    } else {
        return false;
    }
};