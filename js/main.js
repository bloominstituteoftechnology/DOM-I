// import siteContent from './siteContent.js';

const container = document.querySelector('.container');
const nav = document.querySelector('nav');
const navItem = document.querySelectorAll('nav a');
const navImg = document.querySelector('#logo-img');

const cta = document.querySelector('.cta');
const ctaH1 = document.querySelector('.cta h1');
const ctaBtn = document.querySelector('.cta button');
const ctaImg = document.querySelector('.cta img');

const topText = document.querySelectorAll('.top-content .text-content p');
const topH4 = document.querySelectorAll('.top-content .text-content h4');

const midImg = document.querySelector('.main-content .middle-img');

const bottomH4 = document.querySelectorAll('.main-content .bottom-content h4');
const bottomText = document.querySelectorAll('.main-content .bottom-content p');

const contactH4 = document.querySelector('.contact h4');
const contactPara = document.querySelectorAll('.contact p');

const footerP = document.querySelector('footer p');

console.log(bottomText);



navItem.forEach((elem)=>{ elem.style.color = "green"})


const newNavItem1 = document.createElement('a');
newNavItem1.href="#"
newNavItem1.innerHTML = "NeuroVibrations";
nav.appendChild(newNavItem1);

const newNavItem2 = document.createElement('a');
newNavItem2.href = "#"
newNavItem2.innerHTML = "CerebroSynchrony";
nav.appendChild(newNavItem2);

console.log("nav1 ",newNavItem1);


footerP.innerHTML = siteContent.footer.copyright;

contactH4.innerHTML = siteContent.contact["contact-h4"];
contactPara[0].innerHTML = siteContent.contact.address;
contactPara[1].innerHTML = siteContent.contact.phone
contactPara[2].innerHTML = siteContent.contact.email;


bottomH4[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomH4[2].innerHTML = siteContent["main-content"]["vision-h4"];

bottomText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomText[2].innerHTML = siteContent["main-content"]["vision-content"];














ctaH1.innerHTML = siteContent.cta.h1;
ctaBtn.innerHTML = siteContent.cta.button;

topH4[0].innerHTML = siteContent["main-content"]["features-h4"];
topH4[1].innerHTML = siteContent["main-content"]["about-h4"];

topText[0].innerHTML = siteContent["main-content"]["features-content"];
topText[1].innerHTML = siteContent["main-content"]["about-content"];
















/** 
 * NAV 
 * */

(function fillNavItems(){
    navItem.forEach((elem,i)=>{
        console.log(elem);
        elem.innerHTML = siteContent.nav[`nav-item-${i+=1}`]
    })
})();

/** IMGs
 * 
 */
function placeImage(elem, imgURI){
    elem.src = imgURI;
}
const navImgURI = siteContent.nav["img-src"];
placeImage(navImg, navImgURI)
const ctaImgURI = siteContent.cta["img-src"];
placeImage(ctaImg, ctaImgURI);
const midImgURI = siteContent["main-content"]["middle-img-src"];
placeImage(midImg, midImgURI);
