import { aboutUs, gallery } from './submenu/submenu.js'
const appMenu = document.getElementById("menu");
appMenu.innerHTML = menu();
function menu() {
    return `
        <header>
            <section class="title">POWER-OF-EDUCATION
            </section>
            <section class="menu">
                <div class="menu-item">
                    <a href="/#" target="_self">
                    <i class="material-icons">home</i>
                    Home
                    </a>
                </div>
                <div class="gallery menu-item">Gallery 
                    <i class="material-icons">keyboard_arrow_down</i>
                    <div>${gallery}</div>
                </div>
                <div class="menu-item">
                    <a href="/#news" target="_self">
                    News</a>
                </div>
                <div class="menu-item">
                <a href="/#projects" target="_self">
                Projects and Activities</a>
                </div>
                <div class="aboutUs menu-item">About US
                <i class="material-icons">keyboard_arrow_down</i>
                <div>${aboutUs}</div></div>
                <div class="menu-item">
                <a href="/#contact" target="_self">

                Contact
                </a></div>
            </section>
        </header>
        `;

}

export default menu();