const parseContentData = data => {
    return Object.keys(data)
     .map(key => {
        return {
            id: key,
            ...data[key],
        }
     })
     .sort(function (a, b) {
        var dateA = new Date(a.date),
            dateB = new Date(b.date);
        return dateB - dateA;
     })
}

export default parseContentData;