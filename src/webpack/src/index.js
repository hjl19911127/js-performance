import bigFunc from './case-big-func';

const test = bigFunc;

var result = 0
for (let i = 0; i < 5e6; ++i) {
    result += test(i);
}
console.log(result)
