// 1 = 00000001
// 2 = 00000010
// R = 00000011
console.log(1 | 2); // Bitwise OR

// 1 = 00000001
// 2 = 00000010
// R = 00000000
console.log(1 & 2); // Bitwise AND

// Real world example
// Permissions:
// Read, Write, Execute
// 00000100 // Read
// 00000010 // Write
// 00000110 // Read, Write
// 00000111 // Read, Write, Execute
// 00000001 // Execute
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0; 
// Read   =   00000100
// Write  =   00000010 
// Result =   00000110 = 6 
myPermission = readPermission | writePermission // 6 
console.log(myPermission)

// MyPermission   =   00000110
// ReadPermission =   00000100
let message = (myPermission & readPermission) ? 'yes' : 'no' // Yes
console.log(message);