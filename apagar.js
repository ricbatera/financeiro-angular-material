let d = new Date();
let e = d.toDateString();
let f = new Date(e);
console.log(f.toISOString().substring(0,10));

console.log();
