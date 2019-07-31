function FreezeObj() {
    this.x = 0;
    Object.preventExtensions(this);
    this.x = 0.1;
}

const list = []

console.time('measure');
for (let i = 0; i < 5e6; ++i) {
    new FreezeObj();
}
console.timeEnd('measure');

