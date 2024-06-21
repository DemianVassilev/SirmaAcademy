function findRecord(records, searchTerm) {

    if (records.indexOf(searchTerm) === -1) {
        console.log('Record not found');
    } else {
        console.log('First Occurrence: ' + records.indexOf(searchTerm));
        console.log('Last Occurrence: ' + records.lastIndexOf(searchTerm));
    }

}

findRecord(['Frodo', 'Sam', 'Frodo', 'Merry'], 'Frodo');
// First Occurrence: 0
// Last Occurrence: 2
findRecord(['Pippin', 'Merry', 'Sam', 'Pippin'], 'Pippin');
// First Occurrence: 0
// Last Occurrence: 3
findRecord(['Aragorn', 'Legolas', 'Gimli'], 'Boromir');
// Record not found
findRecord(['Gandalf', 'Sam', 'Aragorn', 'Frodo'], 'Frodo');
// First Occurrence: 3
// Last Occurrence: 3