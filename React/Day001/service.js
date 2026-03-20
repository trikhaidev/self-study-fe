export let name = 'Nguyễn Trí Khải';

export function sayHelloWorld(loop) {
    for (let i = 0; i < loop; i++) {
        console.log(`Hello, my name is ${name} (${i + 1})`);
    }
}

export default function sum(a, b) {
    return a + b;
}

//không dùng được kiểu này
// export default const sum = (a, b) => {
//     return a + b;
// };

console.log("Đây là file service.js");
