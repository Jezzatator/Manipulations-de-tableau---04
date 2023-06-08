const swapCase = str => {
    let oldStr = str;
let newStr = "";
    for (let i = 0; i < oldStr.length; i++) {
        if (str[i].match(/[A-Z]/)) {
            newStr += oldStr[i].toLowerCase();
        } else {
            newStr += oldStr[i].toUpperCase();
        }
      }
      return newStr
}

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor"

console.log(swapCase(text))