// console.log("Đây là file main.js");

// import * as service from "./service.js";

// service.sayHello(3);

// console.log(`Data từ file service.js: ${service.name}`);

// service.name = "Ecotech 2A";
// console.warn("After: "+service.name);

/////////////////////////////////////////////////////////////////////////////////////////////////
// import func from "./service.js";
// import {name} from "./service.js";

// func(3);

// console.log(`Main.js says ${name}`);

/////////////////////////////////////////////////////////////////////////////////////////////////
// import * as method from "./service.js";
// import func from "./service.js";
// import defaultExport,{} from "./service.js";   
// import {sum} from "./service.js";

// const number = method.sum(5,10);

// var number = func(5,10);
// var numberMethod = method.default(100, 36);
// var sum3 = sum(3, 4);
// console.log("Sum: "+number);
//console.log(`number method: ${numberMethod}`);
// console.log(`Sum 3: ${sum3}`);

import func, * as service from "./service.js";
import f from "./service.js";
service.sayHelloWorld(3);
console.log("Sum: "+func(7,7));
console.warn("Sum f: " + func(5,5));