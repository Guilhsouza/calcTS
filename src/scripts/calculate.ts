export default function calculate() {
    const input = document.getElementById('input')
    const resultInput = document.getElementById('result') as HTMLInputElement

    try {
        const result = eval((input as HTMLInputElement).value)
        resultInput.classList.remove('error')
        return (resultInput as HTMLInputElement).value = result
    } catch (error) {
        resultInput.value = 'ERROR'
        resultInput.classList.add('error')
    }
}