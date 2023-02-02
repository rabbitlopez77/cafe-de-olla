import {homeTab, menuTab, contactTab} from './tabSwitching';


const navBarDiv = document.getElementById('navBar')


const navBarHomeTab = () => {
    const tab = document.createElement('button')
    tab.classList.add('homeTab')
    tab.textContent = 'Home'
    navBarDiv.appendChild(tab)
    tab.addEventListener('click', homeTab)
    
}
const navBarMenuTab = () => {
    const tab = document.createElement('button')
    tab.classList.add('menuTab')
    tab.textContent = 'Menu'
    navBarDiv.appendChild(tab)
    tab.addEventListener('click', menuTab)
}
const navBarContactTab = () => {
    const tab = document.createElement('button')
    tab.classList.add('ContactTab')
    tab.textContent = 'Contact'
    navBarDiv.appendChild(tab)
    tab.addEventListener('click', contactTab)
}





export {navBarHomeTab, navBarMenuTab, navBarContactTab}