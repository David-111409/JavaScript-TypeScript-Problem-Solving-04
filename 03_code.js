let serials = "S100S S3000S S50000S S950000S";

// let re = /\bs\d{3}s\b/ig;
// let re = /\bs\d{4,5}s\b/ig;
let re = /s\d{4,}s/gi;

console.log(serials.match(re));
