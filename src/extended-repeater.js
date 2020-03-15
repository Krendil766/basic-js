module.exports = function repeater(
    str, {
        repeatTimes,
        separator = "+",
        addition = "",
        additionRepeatTimes,
        additionSeparator = "|"
    }
) {
    let additionRepeatString = addition;
    for (let i = 1; i < additionRepeatTimes; i++) {
        additionRepeatString = `${additionRepeatString}${additionSeparator}${addition}`;
    }
    const resultRepeatString = `${str}${additionRepeatString}`;
    let result = resultRepeatString;
    for (let i = 1; i < repeatTimes; i++) {
        result = `${result}${separator}${resultRepeatString}`;
    }
    return result;
};