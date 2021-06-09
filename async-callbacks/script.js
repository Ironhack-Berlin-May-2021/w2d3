console.log('async');

function someCallback() {
    console.log('Hey there 🙃');
}

// setTimeout(someCallback, 5000);
console.log('this runs first ⏰')

// const timeoutId = setTimeout(function () {
//     console.log('Hi 👋')
// }, 3000);
// clearTimeout(timeoutId);

// counter
// let counter = 1;
// let timeoutId;
// const callbackFunction = function () {
//     console.log(counter)
//     timeoutId = setTimeout(callbackFunction, 1000);
//     counter += 1;
//     // under some condition we want to cancel the timeout
//     if (counter > 3) {
//         clearTimeout(timeoutId);
//     }
// }

// callbackFunction();

// if you wanna do sth every x timeunit

// a counter can be better done with setInterval()

let i = 1;
const id = setInterval(function () {
    console.log(i);
    i++;
    if (i > 5) {
        // stop setInterval
        clearInterval(id);
    }
}, 1000)