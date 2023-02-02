const mainDiv = document.getElementById('main')
const contactPageDiv = document.createElement('div')
contactPageDiv.classList.add('contactPage', 'notSelected')
contactPageDiv.setAttribute('id', 'contactPage')
mainDiv.appendChild(contactPageDiv)

const contactHeader = () => {
    const contactHeader = document.createElement('h1')
    const contactHeaderContent =  document.createTextNode('Contact Page')
    contactPageDiv.appendChild(contactHeader)
    contactHeader.append(contactHeaderContent)
}
const contactBody = () => {
    const contactBody = document.createElement('p')
    const contactBodyContent = document.createTextNode('Contact us my Phone, Email or on out social media to find out where we are going to be')
    contactPageDiv.appendChild(contactBody)
    contactBody.append(contactBodyContent)
}
const contactEnd = () => {
    const contactEnd = document.createElement('p')
    const contactEndContent = document.createTextNode('Follow us on blah blah blah and make sure to like us on blah blah blah')
    contactPageDiv.appendChild(contactEnd)
    contactEnd.append(contactEndContent)
}





export {contactHeader, contactBody, contactEnd}