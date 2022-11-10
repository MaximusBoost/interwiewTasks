'use strict'

function firstUniqChar (str) {
    let arr = str.split('');
    let obj = {};
    let position = -1;

    for(let elem of arr) {
        if(obj[elem] == undefined) obj[elem] = -1;
        obj[elem]++;
    };
    
    for(let elem in obj) {
        if(obj[elem] == 0) {
            position = str.indexOf(elem);
            break;
        };
    };

    return position;
};

console.log(firstUniqChar('877745552111254'))