module.exports = function getSeason(date) {
    const seasons = ['winter', "spring", "summer", "autumn", ]

    if (!date) {
        return ('Unable to determine the time of year!');
    }
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error()
    };

    switch (date.getMonth()) {
        case 0:
        case 1:
        case 11:
            return seasons[0];
        case 2:
        case 3:
        case 4:
            return seasons[1];
        case 5:
        case 6:
        case 7:
            return seasons[2];
        default:
            return seasons[3];
    }
};