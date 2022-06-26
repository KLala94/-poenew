// import {Cards} from './components/cards.js';
function cards() {
  return `
        <section class="cards">
            <main-cards imageInput="./images/main/takimi-hapes.jpg" backColor="#1E3561"
                class="main-cards"
                style="margin:21px;">
                <h2 class="text frontpage-text" slot="title"></h2>
                <h3 class="text frontpage-text" slot="subtitle">Takimi hapes</h3>
                <p  class="text frontpage-text" slot="text"></p>
                <button class="btn btn-outline-primary"
                    slot="button">
                    <a href="/#projects">
                    See More
                    </a></button>
            </main-cards>
            <main-cards imageInput="./images/main/Akademia-profesionisteve.jpg" backColor="#185472"
                class="main-cards"
                style="margin:21px;">
                <h2 class="text frontpage-text" slot="title">Takimi i Akademise se Profesionisteve</h2>
                <h3 class="text frontpage-text" slot="subtitle"></h3>
                <p  class="text frontpage-text" slot="text"></p>
            </main-cards>
            <main-cards imageInput="./images/main/club-libri.jpg" backColor="#108990"
                class="main-cards"
                style="margin:21px;">
                <h2 class="text frontpage-text" slot="title">Takimi hapes i Klubit të librit</h2>
                <h3 class="text frontpage-text" slot="subtitle"></h3>
                <p  class="text frontpage-text" slot="text"></p>
            </main-cards>
        </section>
        `;

}

export default cards();