function getX(obj) {
    return obj.x;
}

console.time('measure');
for (var i = 0; i <= 5e6; i++) {
    // console.log(String.fromCharCode(i))
    getX({ x: 1 });
}
console.timeEnd('measure');
