function generate(n) {
    let s = '(function func' + n + '(x) { return 0';
    for (let i = 0; i < n; ++i) {
        s += '+x';
    }
    s += '; })';
    return eval(s);
}

//generate(10)： function func10(x) { return 0+x+x+x+x+x+x+x+x+x+x; }

const func10 = generate(10);
console.log(func10.toString());
console.time('measure');
let result = 0;
for (let i = 0; i < 5e7; ++i) {
    result += func10(i);
}
console.timeEnd('measure');


