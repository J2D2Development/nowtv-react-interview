function compareTime(dateStr1, dateStr2) {
    return (new Date(dateStr1).getTime() - new Date(dateStr2).getTime());
}

function formatTime(dateStr) {
    const dateObj = new Date(dateStr);
    return `TEST`;
}

module.exports = {
    compareTime, formatTime
};