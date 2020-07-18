export const changeDateFormat =  date => {
    const month = (date.getMonth() + 1 + '').length < 2 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    return (date.getFullYear() + "-" + (month) + "-" + date.getDate());
}