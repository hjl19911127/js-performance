function getX(obj) {
    return obj.x;
}

console.time('measure');
for (var i = 0; i <= 2e6; i++) {
    getX({[`a${i}`]: i});
}
console.timeEnd('measure');
