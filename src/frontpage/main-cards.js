function cards() {
    return `
        <section class="cards">
            <main-cards imageInput="../images/main/takimi-hapes.jpg" backColor="#1E3561"
                class="main-cards"
                style="margin:21px;">
                <h2 class="text" slot="title"></h2>
                <h3 class="text" slot="subtitle">Takimi i hapes</h3>
                <p  class="text" slot="text"></p>
                <button class="btn"
                    style="background-color: #1E3561" slot="button">
                    <a href="../projekte/projekt.html">
                    See More
                    </a></button>
            </main-cards>
            <main-cards imageInput="../images/main/Akademia-profesionisteve.jpg" backColor="#185472"
                class="main-cards"
                style="margin:21px;">
                <h2 class="text" slot="title">Takimi i Akademise se Profesionisteve</h2>
                <h3 class="text" slot="subtitle"></h3>
                <p  class="text" slot="text"></p>
            </main-cards>
            <main-cards imageInput="../images/main/club-libri.jpg" backColor="#108990"
                class="main-cards"
                style="margin:21px;">
                <h2 class="text" slot="title">Takimi hapes i Klubit të librit</h2>
                <h3 class="text" slot="subtitle"></h3>
                <p  class="text" slot="text"></p>
            </main-cards>
        </section>
        `
    ;

}

export default cards();
