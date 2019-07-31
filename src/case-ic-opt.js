function getX(obj) {
    return obj.x;
}

console.time('measure');
for (var i = 0; i <= 5e6; i++) {
    getX({ x: i });
}
console.timeEnd('measure');
