const navBarDiv = document.getElementById('navBar')

const navBarHomeTab = () => {
    const tab = document.createElement('button')
    tab.classList.add('homeTab')
    tab.textContent = 'Home'
    navBarDiv.appendChild(tab)
}
const navBarMenuTab = () => {
    const tab = document.createElement('button')
    tab.classList.add('menuTab')
    tab.textContent = 'Menu'
    navBarDiv.appendChild(tab)
}
const navBarContactTab = () => {
    const tab = document.createElement('button')
    tab.classList.add('ContactTab')
    tab.textContent = 'Contact'
    navBarDiv.appendChild(tab)
}





export {navBarHomeTab, navBarMenuTab, navBarContactTab}