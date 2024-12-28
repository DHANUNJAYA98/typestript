"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub = sub;
exports.divide = divide;
// myexport1.ts
function sub(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0)
        throw new Error("Division by zero is not allowed.");
    return a / b;
}
