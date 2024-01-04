"use strict";
var _a;
const main = document.querySelector('main');
const root = document.documentElement;
(_a = document.getElementById('themeSwitcher')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    if ((main === null || main === void 0 ? void 0 : main.dataset.theme) === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#175b31');
        root.style.setProperty('--border-color', '#aaa');
        return main.dataset.theme = 'light';
    }
    if ((main === null || main === void 0 ? void 0 : main.dataset.theme) === 'light') {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        root.style.setProperty('--border-color', '#666');
        main.dataset.theme = 'dark';
    }
});
