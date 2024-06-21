function cavalryFormation(idRiders, commands) {

    for (let command of commands) {
        let [action, index1, index2] = command.split(' ');
        let id;

        switch (action) {
            case 'add':
                id = Number(index1);
                idRiders.push(id);
                console.log(idRiders.join(' '));
                break;
            case 'destroy':
                id = Number(index1);
                if (id >= 0 && id <= idRiders.length) {
                    idRiders.splice(id, 1);
                    console.log(idRiders.join(' '));
                }
                break;
            case 'center':
                let center = Math.floor(idRiders.length / 2);
                if (idRiders.length > 2) {
                    if (idRiders.length % 2 === 0) {
                        console.log(idRiders[center - 1], idRiders[center]);
                    } else {
                        console.log(idRiders[center]);
                    }
                }
                break;
            case 'swap':
                index1 = Number(index1);
                index2 = Number(index2);
                if (index1 >= idRiders.length || index2 >= idRiders.length || index1 === index2) {
                    break;
                }
                let removed1 = idRiders[index1];
                let removed2 = idRiders[index2];
                idRiders.splice(index2, 1, removed1);
                idRiders.splice(index1, 1, removed2);
                console.log(idRiders.join(' '));
                break;
            case 'insert':
                id = Number(index1);
                let index = Number(index2);
                if (id >= 0 && index <= idRiders.length) {
                    idRiders.splice(index, 0, id);
                    console.log(idRiders.join(' '));
                }
                break;
        }
    }
}

cavalryFormation(
    [1, 2, 3, 4, 5],
    ['destroy 3', 'swap 0 1', 'add 6', 'center']);
// 1 2 3 5
// 2 1 3 5
// 2 1 3 5 6
// 3
cavalryFormation(
    [1, 2, 3, 4, 5],
    ['add 6', 'swap 0 5', 'swap 1 4', 'swap 2 3', 'swap 2 100', 'swap 2 2', 'center']);
// 1 2 3 4 5 6
// 6 2 3 4 5 1
// 6 5 3 4 2 1
// 6 5 4 3 2 1
// 4 3
cavalryFormation(
    [1, 2],
    ['insert 3 2', 'center', 'destroy 1', 'destroy 2', 'center']);
// 1 2 3
// 2
// 1 3
// 1 3