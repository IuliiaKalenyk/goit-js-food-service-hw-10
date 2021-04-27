/* localStorage.setItem(Theme.LIGHT,) */
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_KEY = 'feedback-msg';
const refs = {
    checkbox: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body')
}
console.log(refs.darkThema);
refs.checkbox.addEventListener('change', onCheckDarkThemaClick);

function onCheckDarkThemaClick(e) {
    if (e.target.checked) {
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem(STORAGE_KEY, Theme.DARK);
    } else {
        localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        
    }
}  
/* function onCheckInputThemeLight(e) {
    const information = e.currentTarget.value;
 
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
}

function onCheckInputThemeDark(e) {
    const information = e.currentTarget.value;

    localStorage.setItem(STORAGE_KEY, Theme.Dark);
} */