const getDayString = (date) => {
    // date = Fri Feb 12 2021 00:25:34 GMT-0300 (hora estándar de Argentina)
    const firstThreeChars = date.substring(0, 3); // Fri
    switch (firstThreeChars) {
        case 'Mon': return 'Lunes';
        case 'Tue': return 'Martes';
        case 'Wed': return 'Miércoles';
        case 'Thu': return 'Jueves';
        case 'Fri': return 'Viernes';
        case 'Sat': return 'Sábado';
        case 'Sun': return 'Sunday';
    }
};

const getMonthString = (month) => {
    switch (month) {
        case 0: return 'Enero';
        case 1: return 'Febrero';
        case 2: return 'Marzo';
        case 3: return 'Abril';
        case 4: return 'Mayo';
        case 5: return 'Junio';
        case 6: return 'Julio';
        case 7: return 'Agosto';
        case 8: return 'Septiembre';
        case 9: return 'Octubre';
        case 10: return 'Noviembre';
        case 11: return 'Diciembre';
    }
};