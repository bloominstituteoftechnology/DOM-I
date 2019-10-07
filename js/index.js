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
logo.src = './img/logo.png';
//adds the img w code reference
let headingImg = document.getElementById('cta-img');
headingImg.setAttribute('src', siteContent["cta"]["img-src"]);
//middle image
let midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
midImg.src = "img/mid-page-accent.jpg";
//add dom is Awesome
const bigText = document.querySelector('h1');
//bigText.setAttribute('textContent', siteContent['cta']['h1']);
bigText.textContent = siteContent['cta']['h1'];

let bttn = document.querySelector('button');
bttn.textContent = siteContent['cta']['button'];

//footer
// let foot = document.getElementsByTagName('footer');
// foot.textContent = siteContent['footer']['copyright'];


//navs suck ass
let multiNav = document.querySelectorAll('nav a');
let i = 0;
for(let prop in siteContent.nav){
  if(i > multiNav.length - 1){
    continue;
  }
  multiNav[i].textContent = siteContent.nav[prop];
  i++;
};

let topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];

let bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].textContent = siteContent['main-content']['services-h4'];
bottomH4[1].textContent = siteContent['main-content']['product-h4'];
bottomH4[2].textContent = siteContent['main-content']['vision-h4'];

let topP = document.querySelectorAll('.top-content p');
topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];

let bottomP = document.querySelectorAll('.bottom-content p');
bottomP[0].textContent = siteContent['main-content']['services-content'];
bottomP[1].textContent = siteContent['main-content']['product-content'];
bottomP[2].textContent = siteContent['main-content']['vision-content'];

let footerCopyright = document.querySelector('.contact h4');
footerCopyright.textContent = siteContent['contact']['contact-h4'];

let footP = document.querySelectorAll('.contact p');
footP[0].textContent = siteContent['contact']['address'];
footP[1].textContent = siteContent['contact']['phone'];
footP[2].textContent = siteContent['contact']['email'];

let centerCopy = document.querySelector('footer');
centerCopy.textContent = siteContent['footer']['copyright'];



//oops didn't actually finish MVP. forgot about the last part where I add
const navTags = document.querySelector('nav');
const newTag = document.createElement('a');

newTag.textContent = 'Careers';

navTags.appendChild(newTag);
//add soemthing to the start then change the font of all the nav tags to green
const firstTag = document.createElement('a');

firstTag.textContent = 'Leave Page';

navTags.prepend(firstTag);

const allTags = document.querySelectorAll('a');
//allTags.style.color = "green";
for(let i = 0; i < allTags.length; i++){
  allTags[i].style.color = "green";
};
const thatNav = document.querySelector('nav');
//thatNav.style.color = "green";
