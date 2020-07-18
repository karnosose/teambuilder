export const changeDateFormat =  date => {
    const month = (date.getMonth() + 1 + '').length < 2 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    console.log(date.getFullYear() + "-" + (month) + "-" + date.getDate())
    return (date.getFullYear() + "-" + (month) + "-" + date.getDate());
}