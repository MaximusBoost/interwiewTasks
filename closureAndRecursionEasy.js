'use strict'

let sumAll = (function () {
   let currentValue = 0;

      function summator (value) {

         if (value !== undefined) currentValue += value;

         return summator;
      };

      return {
         sum: summator,
         value: function () {
            return currentValue;
         },
      };
})();

sumAll.sum(10)(25)()(78)()()()()()()()()()(4)()()
console.log(sumAll.value())