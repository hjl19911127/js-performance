function FreezeObj() {
    this.x = 0;
    // Object.preventExtensions(this);
    // this.x = 0.1;
}

var a = new FreezeObj();
var b = new FreezeObj();
%DebugPrint(%HaveSameMap(a,b));
// true

a.x = 0.1;
%DebugPrint(%HaveSameMap(a,b));
// false

b.x;
%DebugPrint(%HaveSameMap(a,b));
// true


// const list = []

// console.time('measure');
// for (let i = 0; i < 5e6; ++i) {
//     let a = new FreezeObj();
//     a.x = 0.1;
// }
// console.timeEnd('measure');

