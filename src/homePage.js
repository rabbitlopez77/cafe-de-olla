
    const mainDiv = document.getElementById('main')
    const homePageDiv = document.createElement('div')
    homePageDiv.classList.add('homePage')
    homePageDiv.setAttribute('id', 'homePage')
    mainDiv.appendChild(homePageDiv)


const homeHeader = () => {
    const header = document.createElement('h1')
    const headerContent = document.createTextNode('Have some Coffee at Cafe de Olla')
    homePageDiv.appendChild(header)
    header.append(headerContent)
}
const homeBody = () => {
    const body = document.createElement('p')
    const bodyContent = document.createTextNode('Here at Cafe de Olla we make coffee with love and care. Our coffee doesnt need any creamer or sugar because it is perfectly blended with cinnimon and brown sugar. ')
    homePageDiv.appendChild(body)
    body.append(bodyContent)
}
const homeEnd = () => {
    const end = document.createElement('p')
    const endContent = document.createTextNode('Please catch us when we are in Pacoima or in Santa Clarita')
    homePageDiv.appendChild(end)
    end.append(endContent)
}





export { homeHeader, homeBody, homeEnd }