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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let headerBorder = document.querySelector('header');
// console.log(document.querySelector('cta'));
// headerBorder.style.border = 'dotted 8px green';
// console.log(headerBorder.style.border);
let links = document.querySelectorAll('nav a');
// console.log(links[0].innerHTML = 'hello world');
// console.log(siteContent['nav']['nav-item-1']);
links[0].innerHTML = siteContent['nav']['nav-item-1'];
links[1].innerHTML = siteContent['nav']['nav-item-2'];
links[2].innerHTML = siteContent['nav']['nav-item-3'];
links[3].innerHTML = siteContent['nav']['nav-item-4'];
links[4].innerHTML = siteContent['nav']['nav-item-5'];
links[5].innerHTML = siteContent['nav']['nav-item-6'];
newLink = document.createElement('a');
newLink.innerHTML = 'blog';
newLink.setAttribute('href', '#');

console.log(links);
document.querySelector('nav').appendChild(newLink);

for(let i = 0; i<links.length;i++) {
  links[i].style.color = 'green';
}

let ctaImage = document.getElementById("cta-img");
document.getElementById("middle-img").setAttribute('src', siteContent['main-content']['middle-img-src']);
document.querySelector('h1').innerHTML = siteContent['cta']['h1'];
document.querySelector('button').innerHTML = siteContent['cta']['button'];
document.querySelector('footer').innerHTML = siteContent['footer']['copyright'];
// document.querySelector('.top-content').style.border = 'blue dashed 8px';
// document.querySelector('.top-content .text-content').style.border = 'blue dashed 8px';
let pTags = document.querySelectorAll('.top-content .text-content p');
let h4Tags = document.querySelectorAll('h4');
pTags[0].innerHTML = siteContent['main-content']['features-content'];
pTags[1].innerHTML = siteContent['main-content']['about-content'];
// console.log(h4Tags);
h4Tags[0].innerHTML = siteContent['main-content']['features-h4'];
h4Tags[1].innerHTML = siteContent['main-content']['about-h4'];
h4Tags[2].innerHTML = siteContent['main-content']['services-h4'];
h4Tags[3].innerHTML = siteContent['main-content']['product-h4'];
h4Tags[4].innerHTML = siteContent['main-content']['vision-h4'];
h4Tags[5].innerHTML = siteContent['contact']['contact-h4'];
let bottomContent= document.querySelectorAll('.bottom-content .text-content p');
// console.log(bottomContent);
bottomContent[0].innerHTML = siteContent['main-content']['services-content'];
bottomContent[1].innerHTML = siteContent['main-content']['product-content'];
bottomContent[2].innerHTML = siteContent['main-content']['vision-content'];

let contactInfo = document.querySelectorAll('.contact p');
// console.log(contactInfo);
contactInfo[0].innerHTML = siteContent['contact']['address'];
contactInfo[1].innerHTML = siteContent['contact']['phone'];
contactInfo[2].innerHTML = siteContent['contact']['email'];
// console.log(siteContent['contact']['address']);
//.innerHTML = siteContent['main-content']['features-content'];

// console.log(document.querySelector('.top-content'))

// console.log(siteContent['cta']['img-src']);
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// console.log(siteContent['nav']);
//
//
