export const changeDateFormat =  date => {
    const month = (date.getMonth() + 1 + '').length < 2 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate().length < 2 ? '0' + date.getDate() : date.getDate();
    return (date.getFullYear() + "-" + (month) + "-" + day);
}