const todayLabel = () => {
    const today = new Date(); // { ... }
    const todayString = today.toString(); // Fri Feb 12 2021 00:25:34 GMT-0300 (hora estándar de Argentina)
    const dayString = getDayString(todayString);
    const day = today.getDate();
    const month = today.getMonth();
    const monthString = getMonthString(month);
    const year = today.getFullYear();
    return document.getElementById('today-label').innerText = `${dayString} ${day} de ${monthString} de ${year}`;
};

// init
(function() {
    todayLabel();
})();