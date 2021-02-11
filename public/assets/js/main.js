const getDayString = (date) => {
    const firstThreeChars = date.substring(0, 3);
    switch (firstThreeChars) {
        case 'Thu': return 'Jueves';
    }
};

const getMonthString = (month) => {
    switch (month) {
        case 0: return 'Enero';
        case 1: return 'Febrero';
    }
};

const today = new Date();
const todayString = today.toString();
const day = today.getDate();
const dayString = getDayString(todayString);
const month = today.getMonth();
const monthString = getMonthString(month);
const year = today.getFullYear();

document.getElementById('today-label').innerText = `${dayString} ${day} de ${monthString} de ${year}`;