function romanInt(num) {
  
    let arrNum = num.split('');
    let currentSum = 0;
  
    let obj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    for(let i = 0; i < arrNum.length; i++) {
      if(arrNum[i] == 'I' || arrNum[i] == 'X' || arrNum[i] == 'C') {
  
        if(obj[arrNum[i + 1]] > obj[arrNum[i]]) {
  
          currentSum += (obj[arrNum[i + 1]]  - obj[arrNum[i]]);
          i++;
          continue;
        };
      };
  
      currentSum += obj[arrNum[i]];
    };
    
    
    return currentSum;
};