const fibonacci = function(n) {
let a = 0;
let b = 1;
let next = a + b;

if (n < 0) {
    return "OOPS";
}

for (let i = 0; i < n; i++) {
    next = a + b;

    a  = b;
    b = next;
};
return a;
}


module.exports = fibonacci;