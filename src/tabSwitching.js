// main remove child 
//add page that is being seleccted
import {contactHeader, contactBody, contactEnd} from './contactPage';
import { homeHeader, homeBody, homeEnd } from './homePage';
import {menuHeader, menuBody} from './menuPage';


const mainDiv = document.getElementById('main')


const homeTab = () => {
    while (mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild)
    }
    homeHeader()
    homeBody()
    homeEnd()
}

const menuTab = () => {
    while (mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild)
    }
    menuHeader()
    menuBody()
}

const contactTab = () => {
    while (mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild)
    }
    contactHeader()
    contactBody()
    contactEnd()
}
export {homeTab, menuTab, contactTab}