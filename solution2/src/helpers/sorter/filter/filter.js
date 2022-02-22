const filter = {
    filterByName: (array, name) => {
        return array.filter(el => {
            return el.name.toLowerCase().includes(name.toLowerCase());
        })
    },
    filterById: (array, id) => {
        return array.filter(el => {
            return +el.id === +id;
        });
    },
    filterByDate: (array, date) => {
        return array.filter(el => {
            const searchDate = Date.parse(date);
            const elementDate = Date.parse(el.updated.slice(0, 10));
            return searchDate === elementDate;
        });
    }
}

export default filter;