let text = "hooplah"

const alphabetSoup = str => {
    let oldStr = str;
    let tempArray = [];
    let newStr 
        for (let i = 0; i < oldStr.length; i++) {
            if (str[i].match(/[A-Z]/)) {
           tempArray.push(oldStr[i])
            } else if (str[i].match(/[a-z]/)) {
                tempArray.push(oldStr[i])
            }
          }
          tempArray.sort()
          newStr = tempArray.toString()
          return newStr
}

console.log(alphabetSoup(text))