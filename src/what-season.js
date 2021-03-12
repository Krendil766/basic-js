module.exports = function getSeason(date) {
    const seasons = ['winter','winter','winter', "spring","spring","spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", ]
    if(!date){
        return 'Unable to determine the time of year!'
    }else if(!(date instanceof Date) || isNaN(date)){
        throw Error('Date argument is invalid')
    }

    const month = date.getMonth()+1;
    seasons.forEach(element => {
        if(month<4)element[month]
        if(month>3 && month<7)element[month]
        if(month>6 && month<10)element[month]
        if(month>9 && month<=12)element[month]
    });  
};