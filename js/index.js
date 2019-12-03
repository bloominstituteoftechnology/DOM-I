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
//// start of the nav/////
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navbar= document.querySelectorAll('nav a')
const navItems = siteContent[Object.keys(siteContent)[0]];


for(let i = 0; i< navbar.length; i++){
  navbar[i].textContent = navItems[Object.keys(navItems)[i]]
}
navbar.forEach( element => {
   element.style.color = "green";
 })
 var navContainer = document.querySelector('nav')

var newAnchorOne = document.createElement('a');
var newAnchorT = document.createElement('div');

newAnchorT.textContent = 'Hello';
newAnchorT.style.color = 'green';

newAnchorOne.textContent = 'Goodbye';
newAnchorOne.style.color = 'green';

navContainer.prepend(newAnchorT);
navContainer.appendChild(newAnchorOne);


//// end of nav////

//// cta and image////


 const middleText = document.querySelector('.cta-text h1')
 middleText.setAttribute('style', 'white-space: pre;');
 middleText.textContent =('Dom \r\n is \r\n Awesome');
 middleText.style.color = "cyan"
const button = document.querySelector('.cta-text button')
button.textContent = 'Get Started'

const circleImg = document.querySelector('#cta-img')
circleImg.setAttribute('src',siteContent['cta']['img-src'])

//// cta and image end////

//// middle-content////
const tContentH4= document.querySelectorAll(".top-content h4")
tContentH4[0].textContent = 'Features'
tContentH4[1].textContent = 'About'

const tContentP = document.querySelectorAll(".top-content p")
tContentP[0].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
tContentP[1].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let largeImg = document.getElementById("middle-img");
largeImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const bContentH4= document.querySelectorAll(".bottom-content h4")
bContentH4[0].textContent = 'Services'
bContentH4[1].textContent = 'Product'
bContentH4[2].textContent = 'Vision'

const bContentP = document.querySelectorAll(".bottom-content p")
bContentP[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bContentP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bContentP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

/// middle-content end////

////bottom-section////

const bottomH4 = document.querySelector('.contact h4')
bottomH4.textContent = 'Contact'

const bottomP = document.querySelectorAll('.contact p')
bottomP[0].setAttribute('style', 'white-space: pre;');
bottomP[0].textContent = ('123 Way 456 Street \r\n Somewhere, USA')
bottomP[1].textContent = '1 (888) 888-8888'
bottomP[2].textContent = 'sales@greatidea.io'

////Footer////

const footer = document.querySelector('footer p')
footer.textContent = 'Copyright Great Idea! 2018'

//// bottom-content end////


// let h4 = document.querySelectorAll(`h4`)
// //main content h4
// h4[0].textContent = siteContent["main-content"]["features-h4"];
// h4[1].textContent = siteContent["main-content"]["about-h4"];
// h4[2].textContent = siteContent["main-content"]["services-h4"];
// h4[3].textContent = siteContent["main-content"]["product-h4"];
// h4[4].textContent = siteContent["main-content"]["vision-h4"];
// //Contact h4
// h4[5].textContent = siteContent["contact"]["contact-h4"];

// let content = document.querySelectorAll(`p`)
// //main-content content
// content[0].textContent = siteContent["main-content"]["features-content"];
// content[1].textContent = siteContent["main-content"]["about-content"];
// content[2].textContent = siteContent["main-content"]["services-content"];
// content[3].textContent = siteContent["main-content"]["product-content"];
// content[4].textContent = siteContent["main-content"]["vision-content"];
// //contact content
// content[5].textContent = siteContent["contact"]["address"];
// content[6].textContent = siteContent["contact"]["phone"];
// content[7].textContent = siteContent["contact"]["email"];
// content[8].textContent = siteContent["footer"]["copyright"];


