/**
 * 
validate('{}[]()') 
// true
validate('{[()]}') 
// true
validate('{[}]') 
// false, they are not in the right order
validate('{}}') 
// false, last `}` is not paired with `{`
 */

function validate(str) {
    let stack = [];
    let obj = { "(": ")", "{": "}", "[": "]" };
    for (let el of str) {
        if ("([{".includes(el)) {
            stack.push(el);
        } else {
            if (obj[stack.pop()] !== el) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validate("{[()]{}"));
