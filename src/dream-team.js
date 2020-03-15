module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let str = '';
        members.forEach(item => {
            if (typeof item === 'string') {
                str = `${str}${item.trim()[0].toUpperCase()}`;
            };
        });
        return str.split('').sort().join('');
    }
    return false;
};