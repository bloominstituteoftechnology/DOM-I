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

const multipleNav = document.querySelectorAll('nav a');
for (let i = 0; i < multipleNav.length; i++) {
  multipleNav[i].style.color = "green";
}
// multipleNav[0].textContent = siteContent["nav"]["nav-item-1"];
// multipleNav[1].textContent = siteContent["nav"]["nav-item-2"];
// multipleNav[2].textContent = siteContent["nav"]["nav-item-3"];
// multipleNav[3].textContent = siteContent["nav"]["nav-item-4"];
// multipleNav[4].textContent = siteContent["nav"]["nav-item-5"];
// multipleNav[5].textContent = siteContent["nav"]["nav-item-6"];
const navArr = Array.from(multipleNav);
navArr.forEach((nav, index) => nav.textContent = siteContent['nav'][`nav-item-${index+1}`]);

const nav = document.querySelectorAll('nav');
const homeLink = document.createElement('a');
homeLink.textContent = 'Home';
homeLink.href = '#';
homeLink.style.color = "green";
document.querySelector('nav').prepend(homeLink);
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
blogLink.style.color = "green";
document.querySelector('nav').appendChild(blogLink);

let ctaH1 = document.querySelector('.cta-text h1');
//ctaH1.innerHTML = siteContent['cta']['h1'].split(" ").join("<br />");
const h1Arr = siteContent['cta']['h1'].split(' ');
let newH1 = h1Arr.map(word => {return word + "\n"}).join('');
ctaH1.textContent = newH1;
ctaH1.style.whiteSpace = 'pre';

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const h4Content = document.querySelectorAll('h4');
h4Content[0].textContent = siteContent['main-content']['features-h4'];
h4Content[1].textContent = siteContent['main-content']['about-h4'];
h4Content[2].textContent = siteContent['main-content']['services-h4'];
h4Content[3].textContent = siteContent['main-content']['product-h4'];
h4Content[4].textContent = siteContent['main-content']['vision-h4'];
h4Content[5].textContent = siteContent['contact']['contact-h4'];

const pContent = document.querySelectorAll('p');
pContent[0].textContent = siteContent['main-content']['features-content'];
pContent[1].textContent = siteContent['main-content']['about-content'];
pContent[2].textContent = siteContent['main-content']['services-content'];
pContent[3].textContent = siteContent['main-content']['product-content'];
pContent[4].textContent = siteContent['main-content']['vision-content'];

pContent[6].textContent = siteContent['contact']['phone'];
pContent[7].textContent = siteContent['contact']['email'];
pContent[8].textContent = siteContent['footer']['copyright'];

let newAddressArr = siteContent['contact']['address'].split(' ');
let newAddress = '';
for(let i = 0; i < newAddressArr.length; i++) {
  if (i !== 3) {
    newAddress += newAddressArr[i] + ' ';
  } else newAddress += newAddressArr[i] + '\n';
}
pContent[5].textContent = newAddress;
pContent[5].style.whiteSpace = 'pre';

let body = document.querySelector('body');
body.style.backgroundColor = '#FBFBE4';