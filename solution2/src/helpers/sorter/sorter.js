const sorter = {
    sortByName: (array) => {
        return array.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
    },
    sortByID: (array) => {
        return array.sort((a, b) => {
            if (a.id < b.id) {
                return -1;
              }
              if (a.id > b.id) {
                return 1;
              }
              return 0;
        })
    }
}

export default sorter;