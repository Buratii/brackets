function validateBrackets(brackets){
 let types = {")": "(", "}": "{", "]": "[" }

 let stck = [];

 for (let i = 0; i < brackets.length; i++) {
  if(brackets[i] === "(" || brackets[i] === "[" || brackets[i] === "{") {
    stck.push(brackets[i]);
  } else if (stck[stck.length - 1] === types[brackets[i]]) {
    stck.pop();
  } else return console.log('not valid');
}
  return stck.length ? console.log('not valid') : console.log('valid')


}
validateBrackets('[{)]');