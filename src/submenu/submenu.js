function ourStory() {
    return `
        <section class="menuBoxes">
            <div class="menuBox">
                <a href="/#history" target="_self">
                <img src="../../images/menuImg/PoELogo.jpeg" alt="photos" class="menuBoxPics"/>
                <span style="position: absolute; z-index:3;
                top: 8px;left: 5%; color:black; font-size:2.4rem; background-color:white;">
                Our History
                </span>
                </a>
            </div>
            <div class="menuBox">
                <a href="/#operate" target="_self">
                    <img src="../../images/menuImg/skanderbeg.jpeg" alt="photos" class="menuBoxPics"/>
                <span class="operate-span" style="position: absolute; z-index:3;
                top: 8px;left: 26%; color:black; font-size:2.4rem; background-color:white;">
                    Where do we operate
                </span>
                </a>
            </div>
            <div class="menuBox"><a href="/#staff" target="_self">
                            <img src="../../images/menuImg/avatarGirl1.jpeg" alt="photos" class="menuBoxPics"/>
            <span class="staff-span" style="position: absolute; z-index:3;
            top: 8px;left: 52%; color:black; font-size:2.4rem; background-color:white;">
            Our Staff
            </span>
            </a></div>
            <div class="menuBox"><a href="/#partners" target="_self">
                            <img src="../../images/menuImg/photocamera2.png" alt="photos" class="menuBoxPics"/>
            <span class="partners-span" style="position: absolute; z-index:3;
            top: 8px;left: 76%; color:black; font-size:2.4rem; background-color:white;">
            Our Partners
            </span>
            </a></div>
        </section>
    `;

}
function galleryPics() {
    return `
        <section class="menuBoxes menuGalleryPics">
            <div style="margin-left:24%" class="menuBox">
            <a href="/#img" target="_self" >
            <img src="../../images/menuImg/photocamera2.png" alt="photos" class="menuBoxPics"/>
            <span style="position: absolute; z-index:3;
            top: 8px;left: 25%; color:black; font-size:2.4rem; background-color:white;
            ">Photos</span>
            </a>
            </div>
            <div  class="menuBox">
            <a href="/#videos" target="_self">
            <img src="../../images/menuImg/camera2.png" alt="videos"class="menuBoxPics"/>
            <span style="position: absolute; z-index:3;
            top: 8px;left: 52%; color:black; font-size:2.4rem; background-color:white;
            ">Videos</span>
            </a>
            </div>
        </section>
    `
}
// export const aboutUs = ourStory();
// export const gallery = galleryPics();
const gallery = document.getElementById("gallery");
gallery.innerHTML = galleryPics();
const aboutUs = document.getElementById("aboutUs");
aboutUs.innerHTML = ourStory();