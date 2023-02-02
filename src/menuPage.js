const mainDiv = document.getElementById('main')
const menuPageDiv = document.createElement('div')
menuPageDiv.classList.add('menuPage', 'notSelected')
menuPageDiv.setAttribute('id', 'menuPage')
mainDiv.appendChild(menuPageDiv)

const menuHeader = () => {
    const header = document.createElement('h1')
    const headerContent = document.createTextNode('Here are all our Coffee options')
    menuPageDiv.appendChild(header)
    header.append(headerContent)
}
const menuBody = () => {
    const body = document.createElement('p')
    const bodyContent = document.createTextNode('All the items with their pricec will go here')
    menuPageDiv.appendChild(body)
    body.append(bodyContent)
    
}
export {menuHeader, menuBody}