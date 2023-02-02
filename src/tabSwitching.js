// main remove child 
//add page that is being seleccted
import {contactHeader, contactBody, contactEnd} from './contactPage';
import { homeHeader, homeBody, homeEnd } from './homePage';
import {menuHeader, menuBody} from './menuPage';


const homePage = document.getElementById('homePage')
const menuPage = document.getElementById('menuPage')
const contactPage = document.getElementById('contactPage')


const homeTab = () => {
    
    homePage.classList.remove('notSelected')
    
    menuPage.classList.add('notSelected')
    contactPage.classList.add('notSelected')
}

const menuTab = () => {
    
    menuPage.classList.remove('notSelected')
    
    
    contactPage.classList.add('notSelected')
    homePage.classList.add('notSelected')
}

const contactTab = () => {
    
    contactPage.classList.remove('notSelected')
    
    
    menuPage.classList.add('notSelected')
    homePage.classList.add('notSelected')

}
export {homeTab, menuTab, contactTab}