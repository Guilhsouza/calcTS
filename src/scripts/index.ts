import calculate from "./calculate.js"

const input = document.getElementById('input')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach((charKeyBtn: Element) => {
    charKeyBtn.addEventListener('click', () => {
        const value = (charKeyBtn as HTMLButtonElement).dataset.value;
        (input as HTMLInputElement).value += value;
    })
})

document.getElementById('clear')?.addEventListener('click', () => {
    (input as HTMLInputElement).value = ' ';
    input?.focus()
})

document.getElementById('equal')?.addEventListener('click', calculate)

input?.addEventListener('keydown', (ev: KeyboardEvent): void => {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        (input as HTMLInputElement).value += ev.key
    }

    if (ev.key === 'Backspace') {
        (input as HTMLInputElement).value = (input as HTMLInputElement).value.slice(0, -1)
    }

    if (ev.key === 'Enter') {
        calculate()
    }
})