document.querySelector('.settings').addEventListener('click', () => {
    if (!document.querySelector('.settings-overlay').classList.contains('settings-overlay-visible')) {
        document.querySelector('.settings-icon').classList.add('settings-icons-rotate');
        document.querySelector('.settings-overlay').classList.add('settings-overlay-visible');
    } else {
        document.querySelector('.settings-overlay').classList.remove('settings-overlay-visible');
        document.querySelector('.settings-icon').classList.remove('settings-icons-rotate');
    }
});
