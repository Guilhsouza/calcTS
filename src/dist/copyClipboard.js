"use strict";
var _a;
(_a = document.getElementById('copyToClipboard')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (ev) => {
    const result = document.getElementById('result');
    const button = ev.currentTarget;
    const resultInput = document.getElementById('result');
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!';
        console.log('Classes antes:', button.classList);
        button.classList.add('success');
        result === null || result === void 0 ? void 0 : result.classList.add('success');
        console.log('Classes depois:', button.classList);
        return navigator.clipboard.writeText(resultInput.value);
    }
    button.innerText = 'Copy';
    result === null || result === void 0 ? void 0 : result.classList.remove('success');
    button.classList.remove('success');
});
