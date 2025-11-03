const user = {
  name: "John",
  email: "john@example.com",
  city: "Phoenix",
  state: "AZ",
  country: "USA",
};
const { name, email, ...rest } = user;
console.log(name, email, rest);

/*
// 6.1.9
retrieveMajor("6.1.9") ➞ "6"

retrieveMinor("6.1.9") ➞ "1"

retrievePatch("6.1.9") ➞ "9"

// 2.1.0
retrieveMajor("2.1.0") ➞ "2"

retrieveMinor("2.1.0") ➞ "1"

retrievePatch("2.1.0") ➞ "0"
*/
function retrieveMajor(version) {
  return version.split(".")[0];
}

function retrieveMinor(version) {
  return version.split(".")[1];
}

function retrievePatch(version) {
  return version.split(".")[2];
}

// Test group 1
console.log(retrieveMajor("6.1.9"), "6");
console.log(retrieveMinor("6.1.9"), "1");
console.log(retrievePatch("6.1.9"), "9");
// Test group 2
console.log(retrieveMajor("2.1.0"), "2");
console.log(retrieveMinor("2.1.0"), "1");
console.log(retrievePatch("2.1.0"), "0");
// Test group 3
console.log(retrieveMajor("5.12.13"), "5");
console.log(
  retrieveMinor("5.12.13"),
  "12",
  "should work with 2-digit version numbers"
);
console.log(
  retrievePatch("5.12.13"),
  "13",
  "should work with 2-digit version numbers"
);
