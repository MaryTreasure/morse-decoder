const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let splitExpr = [];

    for (let i = 0; i < expr.length; i +=10) {
      splitExpr.push(expr.slice(i, i + 10))
    }
  
    let resultArr = splitExpr.map((item, index) => {
      let partialArr = []
      
      for(i = 0; i < item.length; i+=2) {
        if(item[0] == 0 || item[0] == 1) {
          partialArr.push(item.slice(i, i + 2))
        } else {
          partialArr.push(item);
          break;
        }
          }
          return partialArr
    })
  
    let result = resultArr.map (item => {
      
      let resultItem = [] 
      for(let el of item) {
        if (el === '10') {
          resultItem.push('.')
        } else if (el === '11') {
          resultItem.push('-')
        } else if (el === '**********') {
          resultItem.push(el)
        }
  
      }
      return resultItem.join('')
    })
  
    let resultStr = result.map((item) => {
      if (item === '**********') {
        return ' '
      } else {
        return MORSE_TABLE[item]
      }
    })
    return resultStr.join('')
}

module.exports = {
    decode
}