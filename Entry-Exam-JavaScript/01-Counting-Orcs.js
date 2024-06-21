function countingOrcs(n, m, h) {

    let initialCount = n;
    let increaseOfCount = m;
    let numberOfHours = h;
    let totalCount = 0;

    for (let i = 0; i < numberOfHours; i++) {
        totalCount += initialCount + increaseOfCount * i;
    }

    console.log(totalCount);

}

countingOrcs(5, 2, 3);                // 21
countingOrcs(7, 1, 2);                // 15
countingOrcs(10, -1, 1);              // 10
countingOrcs(8, -2, 3);	              // 18
