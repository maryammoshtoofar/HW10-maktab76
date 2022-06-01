// q3
// - write a function to validate a JSON with try catch
console.log("Question - 3");
function isValidJSONString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

let personJSONString =
  '{"first_name":"Mary","last_name":"Moshtoofar","age":27}';
if (isValidJSONString(personJSONString)) {
  let person = JSON.parse(personJSONString);
  console.log(person);
}

// Ex.4
// - what is the Output of the code below and why ?
// console.log("Question - 4");
// let promise = new Promise(function (resolve, reject) {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
// });
// promise.then(alert);

// because promise.then has only one value it's just for success and reject is never used in the promise

// Ex.5
// - Are these code fragments equal? In other words, do they behave the same way in
// any circumstances, for any handler functions?
// promise.then(f1).catch(f2);
// Versus:
// promise.then(f1, f2)

// difference between promise.then(f1, f2) and promise.then(f1).catch(f2)
//  is that in case if f1 callback returns a rejected promise, then promise.then(f1).catch(f2) can catch that rejection.

// Ex.6
// What do you think? Will the .catch trigger? Explain your answer.
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

// no catch won't trigger because it's executed before setTimeout that takes a second
