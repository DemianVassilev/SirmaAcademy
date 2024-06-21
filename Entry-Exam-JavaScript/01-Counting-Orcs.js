function countingOrcs(n, m, h) {

    let initialCount = n;
    let increaseOfCount = m;
    let numberOfHours = h;

    // version-1
    let totalCount = initialCount;
    let fightsCount = initialCount;
    for (let i = 1; i < numberOfHours; i++) {
        fightsCount += increaseOfCount;
        totalCount += fightsCount;
    }
    console.log(totalCount);

    // version-2
    totalCount = 0;
    for (let i = 0; i < numberOfHours; i++) {
        totalCount += initialCount + increaseOfCount * i;
    }
    console.log(totalCount);

    // version-3
    totalCount = 0;
    totalCount += (numberOfHours / 2) * (2 * initialCount + (numberOfHours - 1) * increaseOfCount);
    console.log(totalCount);

    // version-4
    totalCount = initialCount * numberOfHours;
    totalCount += increaseOfCount * (numberOfHours * (numberOfHours - 1)) / 2;
    console.log(totalCount);

    // version-5
    totalCount = initialCount;
    totalCount += initialCount + increaseOfCount;
    if (numberOfHours > 2) {
        totalCount += initialCount + increaseOfCount * (numberOfHours - 1);
    } else if (numberOfHours === 1) {
        totalCount = initialCount;
    }
    console.log(totalCount);
}

countingOrcs(5, 2, 3);                // 21
countingOrcs(7, 1, 2);                // 15
countingOrcs(10, -1, 1);              // 10
countingOrcs(8, -2, 3);	              // 18