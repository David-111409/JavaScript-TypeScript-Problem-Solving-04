let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "javaScript"));
// console.log(txt.replaceAll("@", "javaScript"));

let re = /@/g;
console.log(txt.replace(re, "java-script"));
console.log(txt.replace(/@/g, "java-script"));
