export function formatDate(dateString) {
    const date = new Date(dateString);

    const monthNames = [
        "Январь", "Февраль", "Март",
        "Апрель", "Май", "Июнь", "Июль",
        "Август", "Сентябрь", "Октябрь",
        "Ноябрь", "Декабрь"
    ];

    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + year;
}

export function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];

    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return date.getDate() + ' ' + monthNames[monthIndex] + ' ' + year + ' - ' + date.getHours() + ':' + date.getMinutes();
}