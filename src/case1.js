function generate(n) {
    let s = '(function add' + n + '(x) { return 0';
    for (let i = 0; i < n; ++i) {
        s += '+x';
    }
    s += '; })';
    return eval(s);
}

const add10 = generate(10);
// add10();
console.log(add10.toString());
let result = 0,
    i = 0;
for (let i = 0; i < 50000; ++i) {
    result += add10(i);
}
