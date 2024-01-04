document.getElementById('copyToClipboard')?.addEventListener('click', (ev: Event) => {
    const result = document.getElementById('result')
    const button = ev.currentTarget as HTMLButtonElement
    const resultInput = document.getElementById('result') as HTMLInputElement

    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!';
        console.log('Classes antes:', button.classList);
        button.classList.add('success');
        result?.classList.add('success');
        console.log('Classes depois:', button.classList);

        return navigator.clipboard.writeText(resultInput.value)
    }

    button.innerText = 'Copy'
    result?.classList.remove('success')
    button.classList.remove('success')
})