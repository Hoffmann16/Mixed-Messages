// import {listOfQuotes as astrologyQuotes} from './astrologyQuotes'

const generator = {
  element: ["earth", "water", "fire", "air"],
  luck: ["good", "almost good", "a little bit bad", "very bad"],
  advice: ["stay at home.", "run!", "go find love.", "make dinner."],
};
function mixedMessages(obj) {
  let genereted = [];
  for (i in obj.element) {
    for (j in obj.luck) {
      for (k in obj.advice) {
        genereted.push(
          `Your element ${obj.element[i]}. It is in ${obj.luck[j]} shape. You should ${obj.advice[k]}`
        );
      }
    }
  }
  return genereted
}

const quotes = mixedMessages(generator)

function mixedQuotes(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

console.log(mixedQuotes(quotes))