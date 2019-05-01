const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

////////////////////////////////////////////////////////////////////
//MY CODE


//HEADER NAV
const anchorTags = document.querySelectorAll('a');
anchorTags[0].textContent = siteContent['nav']['nav-item-1'];
anchorTags[1].textContent = siteContent['nav']['nav-item-2'];
anchorTags[2].textContent = siteContent['nav']['nav-item-3'];
anchorTags[3].textContent = siteContent['nav']['nav-item-4'];
anchorTags[4].textContent = siteContent['nav']['nav-item-5'];
anchorTags[5].textContent = siteContent['nav']['nav-item-6'];


//NAV COLORS GREEN
anchorTags.forEach(e => {
  e.style.color = 'green';
})


//CTA
const ctaHeader = document.querySelector('.cta h1');
const ctaButton = document.querySelector('.cta button');
const ctaImg = document.querySelector('#cta-img');

ctaHeader.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute( 'src', siteContent['cta']['img-src']);



//////////////////////////
//FUNCTIONALITY

//ADDING NEW ELEMENTS TO NAV. CLICK BUTTON TO SEE ELEMENTS
const nav = document.querySelector('nav');
//1. Creating new elements
const newImg = document.createElement('img');
const newNav = document.createElement('a');

//2. Adding new elements content
newImg.setAttribute('src', siteContent["nav"]["img-src"]);
newNav.textContent = 'appendChild';

//3. Adding new elements to the DOM on Click
ctaButton.addEventListener('click', () => {
  nav.append(newNav);
  nav.prepend(newImg);
});

//REMOVE NAVS
// logo.addEventListener('click', () => {
//   anchorTags.forEach(e => {
//     console.log(nav.removeChild(e));
//   })

// logo.addEventListener('click', () => {
//     while(nav.firstChild) {
//       nav.removeChild(nav.firstChild);
//     }
// });

logo.addEventListener('click', () => {
    console.log(nav.innerHTML = '');
});

//TOGGLE CLASS
ctaButton.addEventListener('click', () => {
  ctaImg.classList.toggle("visible");
});

//////////////////////////////

//MAIN-CONTENT

//TOP CONTENT
const topContent = document.querySelectorAll('.top-content div');

topContent[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent[0].children[1].textContent = siteContent['main-content']['features-content'];

topContent[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent[1].children[1].textContent = siteContent['main-content']['about-content'];

//log result to see DOM elements and children in chain
//console.log(topContent);

//MIDDLE IMAGE
const mainContentImg = document.querySelector('#middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//BOTTOM CONTENT
const bottomContent = document.querySelectorAll('.bottom-content div');
bottomContent[0].children[0].textContent = siteContent['main-content']['services-h4'];
bottomContent[0].children[1].textContent = siteContent['main-content']['services-content'];

bottomContent[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottomContent[1].children[1].textContent = siteContent['main-content']['product-content'];

bottomContent[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottomContent[2].children[1].textContent = siteContent['main-content']['vision-content'];


//CONTACT
const contactHeader = document.querySelectorAll('.contact h4');
const contactP = document.querySelectorAll('.contact p');
contactHeader[0].textContent = siteContent.contact['contact-h4'];
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;


//FOOTER
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;



