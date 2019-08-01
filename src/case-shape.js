var a = { x: 1, y: 2 };
var b = { x: 3, y: 4 };
%DebugPrint(%HaveSameMap(a,b));
// true

a.x = 0.1;
%DebugPrint(%HaveSameMap(a,b));
// false

b.x = 0.1;
%DebugPrint(%HaveSameMap(a,b));
// true
