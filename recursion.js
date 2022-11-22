'use strict'

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};


function printListCycle (list) { // cycle

    let valueNext = list;
    
    while(valueNext) {
        console.log(valueNext.value);
        valueNext = valueNext.next
    };
};


function printListRecursion (list) {
   console.log(list.value);
   if(list.next !== null) printListRecursion(list.next);
};


function printListCycleReturn (list) {
    let valueNext = list;
    let arr = [];
    
    while(valueNext) {
        arr.push(valueNext.value);
        valueNext = valueNext.next
    };

    for(let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    };
};


function printListRecursionReturn (list) {
    if(list.next) {
        printListRecursionReturn(list.next);
    };

    console.log(list.value);

};