module.exports = function repeater(
    str, {
        repeatTimes,
        separator = "+",
        addition = "",
        additionRepeatTimes,
        additionSeparator = "|"
    }
) {
    let addStr = addition;
    for (let i = 1; i < additionRepeatTimes; i++) {
        addStr += additionSeparator + addition
    }
    let newStr = str + addStr;
    let res = newStr;
    for (let i = 1; i < repeatTimes; i++) {
        res += separator + newStr;
    }
    return res;
};