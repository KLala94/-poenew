import data from '../../../data/photosData.js';
function onlyImg(dataImg) {
    return `
        <img src="${dataImg}" alt="PoE" >
    `
}
function simpleImages(data){
    const onlyImages = data.photos.reduceRight((acc, data, index) =>acc + onlyImg(data), '');
    return `<div class="containPhotos">
        <h2>${data.h1}</h2>
        <p class="main-width">${data.text}</p>
        ${onlyImages}
    </div>
    `;

}
export function photos() {
    const photos = data.reduceRight((acc, data, index) =>acc + simpleImages(data), '');
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