const main = document.querySelector('main')
const root = document.documentElement;

document.getElementById('themeSwitcher')?.addEventListener('click', () => {
    if (main?.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#175b31')
        root.style.setProperty('--border-color', '#aaa')
        return main.dataset.theme = 'light'
    }

    if (main?.dataset.theme === 'light') {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        root.style.setProperty('--border-color', '#666')
        main.dataset.theme = 'dark'
    }
})