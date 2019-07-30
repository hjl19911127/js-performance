function generate(n) {
    let s = '(function func' + n + '(x) { return 0';
    for (let i = 0; i < n; ++i) {
        s += '+x';
    }
    s += '; })';
    return eval(s);
}

const func10000 = generate(10000);
console.time('measure');
let result = 0;
for (let i = 0; i < 50000; ++i) {
    result += func10000(i);
}
console.timeEnd('measure');
