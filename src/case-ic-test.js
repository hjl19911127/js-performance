function getX(obj) {
    return obj.x;
}

console.time('measure');
var t = 0;
for (var i = 0; i <= 3e6; i++) {
    t = i / 65535;
    var key = ''
    for (var j = 0; j <= t; j++) {
        key += String.fromCharCode(i + j)
    }
    getX({[key]: 1});
}
console.timeEnd('measure');
