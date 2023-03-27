


export const dateFormatEdit = (str) => {
    const year = `${str.slice(0,4)}년`
    const month = `${str.slice(5,7)}월`
    const day = `${str.slice(8,10)}일`
    return year + ' ' + month + ' ' + day;
}

