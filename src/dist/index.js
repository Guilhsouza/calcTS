var _a, _b;
import calculate from "./calculate.js";
const input = document.getElementById('input');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    });
});
(_a = document.getElementById('clear')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    input.value = ' ';
    input === null || input === void 0 ? void 0 : input.focus();
});
(_b = document.getElementById('equal')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', calculate);
input === null || input === void 0 ? void 0 : input.addEventListener('keydown', (ev) => {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key;
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }
    if (ev.key === 'Enter') {
        calculate();
    }
});
