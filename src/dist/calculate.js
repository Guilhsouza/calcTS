export default function calculate() {
    const input = document.getElementById('input');
    const resultInput = document.getElementById('result');
    try {
        const result = eval(input.value);
        resultInput.classList.remove('error');
        return resultInput.value = result;
    }
    catch (error) {
        resultInput.value = 'ERROR';
        resultInput.classList.add('error');
    }
}
