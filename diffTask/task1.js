let num = 266119;

let array = ("" + num).split("").reduce((a, b) => a * b);
        array **= 3;
             console.log(array);

console.log(String(array).slice(0, 2));
