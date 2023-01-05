function intToRoman (num) {
    let numStr = '';
  
    let obj = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
    };
  
    let arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    recursion(arr);
  
    function recursion (arr) {
      while(num - arr[0] >= 0) {
        numStr += obj[arr[0]];
        num -= arr[0];
      };
  
      if(num !== 0) {
        arr.splice(0, 1);
        recursion(arr);
      };
    };
    
    
    
  
    return numStr;
  };
  
  
  console.log(intToRoman(1994));