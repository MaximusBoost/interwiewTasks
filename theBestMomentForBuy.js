'use strict'

function chooseTheBestMomentForBuy (arr) {
    let profit = 0;
    let middleValue = 0;
    let currentMinValue = 1;

    for(let i = 0; i < arr.length; i++) {
        currentMinValue = Math.min(currentMinValue, arr[i]);
        let difValue = arr[i + 1] - currentMinValue;
        if(difValue > middleValue) {
            middleValue = difValue;
        } else {
            if(middleValue > 0) profit += middleValue;
            middleValue = 0;
            currentMinValue = arr[i]
        };

    };

    return profit;
};


let result = chooseTheBestMomentForBuy([1, 5, 7, 4, 1, 2, 8, 9, 1, 4, 3, 2, 1, 12]); // 28
let result1 = chooseTheBestMomentForBuy([1, 5, 7, 4, 1]); // 6
console.log(result, result1);