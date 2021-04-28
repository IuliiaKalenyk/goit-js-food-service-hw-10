import throttle from 'lodash.throttle';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_KEY = 'feedback-msg';
const refs = {
    checkbox: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body')
}

refs.checkbox.addEventListener('change', throttle(onCheckThemaChange, 200));

onLocalStorageThemeDark();
onLocalStorageThemeLight();


function onCheckThemaChange(e) {
    if (e.target.checked) {
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem(STORAGE_KEY, Theme.DARK);
    } else {
        localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    }
}

function onLocalStorageThemeDark() {
    const savedinformation = localStorage.getItem(STORAGE_KEY);
    if (savedinformation === Theme.DARK) {
        console.log(savedinformation);
        refs.checkbox.checked = savedinformation;
    } 
}
     function onLocalStorageThemeLight() {
  const savedinformation = localStorage.getItem(STORAGE_KEY);
  if (!savedinformation) {
      localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
         }  else {
    refs.body.classList.add(savedinformation);
  } 
}
