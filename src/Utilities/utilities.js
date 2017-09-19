function compareTime(dateStr1, dateStr2) {
    const t1 = new Date(dateStr1).getTime();
    const t2 = new Date(dateStr2).getTime();
    return t1 <= t2 ? t1 : t2;
}

function formatTime(dateStr) {
    const dateObj = new Date(dateStr);
    return `${dateObj.toDateString()} - ${dateObj.toTimeString()}`;
}



module.exports = {
    compareTime, formatTime
};