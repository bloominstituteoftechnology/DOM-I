// import siteContent from './siteContent.js';

const container = document.querySelector('.container');
const nav = document.querySelectorAll('nav');
const navItem = document.querySelectorAll('nav a');
const navImg = document.querySelector('#logo-img');

const cta = document.querySelector('.cta');
const ctaH1 = document.querySelector('.cta h1');
const ctaBtn = document.querySelector('.cta button');
const ctaImg = document.querySelector('.cta img');

const mainContent = document.querySelector('.main-content');
const topContent = document.querySelector('.main-content .top-content');
const textContent = document.querySelectorAll('.main-content .text-content');

const midImg = document.querySelector('.main-content .middle-img');

const bottomContent = document.querySelector('.main-content .bottom-content');
const bottomText = document.querySelectorAll('.bottom-content .text-content');

const contact = document.querySelector('.contact');
const contactPara = document.querySelectorAll('.contact p');

const footer = document.querySelector('footer');

console.log(cta);

ctaH1.innerHTML = siteContent.cta.h1;
ctaBtn.innerHTML = siteContent.cta.button;














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
