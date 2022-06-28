import dataNews from '../../data/newsData.js'
// import news from './news.css';
export function mainAsk() {
  return `
        <section>
        <div class="flex__wrapper">

        <wide-cards imageInput="./src/news/skanderbeg.jpeg" backColor="#a9c0cb"
        class="main-cards">
        <h2 class="text news-text h2" slot="title">Thirrje</h2>
        <h3 class="text news-text" slot="subtitle"></h3>
        <p  class="text news-text main-width" slot="text">
            Jeto qytetin tend ndryshe!
            Na dergoni foto ose mesazhe pozitive ne inbox ta bejme kohen e qendrimit ne karantine me te bukur!
            Fotot dhe mesazhet do jene anonime!
            <br />
            Keep calm and love Power of Education
        </p>
        </wide-cards>
        </div>
        </section>
    `;

}

function onlyText(data, index) {
  return `
      <div class="main__news">
        <h1 class="news">${data.heading}</h1>
        <h3 class="news">${data.date}</h3>
        <p class="textNews news" onclick='${toggleSize()}'>
        ${data.text}
        </p>
        <p class="news">${data.fromPerson}</p>
      </div>
    `;
}
const onlyImages = dataNews.reduceRight((acc, data, index) => acc + onlyText(data, index), '');
export function simpleText() {
  return `<div>
      <h4 class="ms-4">
        <span class="material-icons text-secondary info-icon">info</span>&nbsp; Kliko tekstin për ta hapur ose mbyllur
      </h4> 
        ${onlyImages}
    </div>
    `;

}

function toggleSize(evt) {
  return `event.currentTarget.classList.toggle("textToggle")`

}