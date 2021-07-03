import data from '../../../data/photosData.js';

function onlyImg(dataImg) {
  return `
        <img class="photos-comp-img" loading="lazy" src="${dataImg}" alt="PoE" loading="lazy">
    `
}

function simpleImages(data) {
  const onlyImages = data.photos.reduceRight((acc, data, index) => acc + onlyImg(data), '');
  return `<div class="containPhotos">
        <h2 class="photos-comp-text">${data.h1}</h2>
        <p class="main-width photos-comp-text">${data.text}</p>
        ${onlyImages}
    </div>
    `;
}
export function photos() {
  const photos = data.reduceRight((acc, data, index) => acc + simpleImages(data), '');
  return `<section class="photos mrg">
        ${photos}
    </section>
    `;
}
// export function photos() {
//     // let data 
//     return `
//         <section>
//         <h2>${data[0].text}</h2>
//         <img src="${data[0].photos}" alt="club">
//         </section>
//     `
// }