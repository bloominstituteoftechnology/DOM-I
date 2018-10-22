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
logo.style.cursor = "pointer";

logo.addEventListener('click', function(){
  // alert('Element clicked through event listener!');
  ctaTog.toggle('cta-none');
  // ctaTog.toggle('cta');
});

// const nav = document.querySelectorAll('a');
// const a = Array.from(nav);
// const b = Object.values(siteContent.nav);

// a[0].textContent = b[0];
// a[1].textContent = siteContent.nav["nav-item-2"];
// a[2].textContent = siteContent.nav["nav-item-3"];
// a[3].textContent = siteContent.nav["nav-item-4"];
// a[4].textContent = siteContent.nav["nav-item-5"];
// a[5].textContent = siteContent.nav["nav-item-6"];

function createNav (){
  const count = Array.from(document.querySelectorAll('a'));
  const b = Object.values(siteContent.nav);
  for(let i = 0; i < count.length; i++){
    count[i].textContent = b[i];
  }
}
createNav();

// a[0].style.color = 'green';
// a[1].style.color = 'green';
// a[2].style.color = 'green';
// a[3].style.color = 'green';
// a[4].style.color = 'green';
// a[5].style.color = 'green';

const append = document.createElement('a');
append.href = '#';
append.textContent = 'Append';
const mainNav = document.querySelector('nav');
mainNav.appendChild(append);

const prepend = document.createElement('a');
prepend.href = '#';
prepend.textContent = 'Prepend';
mainNav.prepend(prepend);

function colorNav (){
  const count = Array.from(document.querySelectorAll('a'));
  for(let i = 0; i < count.length; i++){
    count[i].style.color = 'green';
  }
}
colorNav();

const h1 = document.querySelector('h1');
const arr = siteContent.cta.h1.split(' ');
h1.innerHTML = arr.join(`<br>`);

const button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

let ctaTog = document.querySelector('.cta').classList;

button.addEventListener('click', function(){
  // alert('Element clicked through event listener!');
  ctaTog.toggle('cta-none');
  // ctaTog.toggle('cta');
});




const imgCode = document.querySelector('#cta-img');
imgCode.src = siteContent.cta["img-src"];

const textH4 = Array.from(document.querySelectorAll('.text-content h4'));
const textP = Array.from(document.querySelectorAll('.text-content p'));

const features = textH4[0];
const featureP = textP[0];
features.textContent = siteContent["main-content"]["features-h4"];
featureP.textContent = siteContent["main-content"]["features-content"];

const about = textH4[1];
const aboutC = textP[1];
about.textContent = siteContent["main-content"]["about-h4"];
aboutC.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

const services = textH4[2];
const servicesC = textP[2];
services.textContent = siteContent["main-content"]["services-h4"];
servicesC.textContent = siteContent["main-content"]["services-content"];

const product = textH4[3];
const productC = textP[3];
product.textContent = siteContent["main-content"]["product-h4"];
productC.textContent = siteContent["main-content"]["product-content"];

const vision = textH4[4];
const visionC = textP[4];
vision.textContent = siteContent["main-content"]["vision-h4"];
visionC.textContent = siteContent["main-content"]["vision-content"];

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent.contact["contact-h4"];

const address = Array.from(document.querySelectorAll('.contact p'))[0];
const part1 = siteContent.contact["address"].substring(0, 18);
const part2 = siteContent.contact["address"].substring(19);

address.innerHTML = `${part1} <br> ${part2}`;

const phone = Array.from(document.querySelectorAll('.contact p'))[1];
phone.textContent = siteContent.contact["phone"];

const email = Array.from(document.querySelectorAll('.contact p'))[2];
email.textContent = siteContent.contact["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
