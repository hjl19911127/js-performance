const { performance } = require('perf_hooks');

function generate(n) {
    let s = '(function add' + n + '(x) { return 0';
    for (let i = 0; i < n; ++i) {
        s += '+x';
    }
    s += '; })';
    return eval(s);
}

const add10 = generate(10);

console.time('measure');
let result = 0;
for (let i = 0; i < 5e6; ++i) {
    result += add10(i);
}
console.timeEnd('measure');
