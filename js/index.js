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
    "h1": "DOM<br> Is<br> Awesome",
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

//Update content for the nav section
const navArr = document.querySelectorAll('nav a');
navArr[0].innerHTML = siteContent['nav']['nav-item-1'];
navArr[1].innerHTML = siteContent['nav']['nav-item-2'];
navArr[2].innerHTML = siteContent['nav']['nav-item-3'];
navArr[3].innerHTML = siteContent['nav']['nav-item-4'];
navArr[4].innerHTML = siteContent['nav']['nav-item-5'];
navArr[5].innerHTML = siteContent['nav']['nav-item-6'];

const ctaText = document.querySelector(".cta-text h1")
ctaText.innerHTML = siteContent['cta']['h1'];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

const topHeader = document.querySelectorAll('.main-content .top-content .text-content h4');
topHeader[0].innerHTML = siteContent['main-content']['features-h4'];
topHeader[1].innerHTML = siteContent['main-content']['about-h4'];

const topPara = document.querySelectorAll('.main-content .top-content .text-content p');
topPara[0].innerHTML = siteContent['main-content']['features-content'];
topPara[1].innerHTML = siteContent['main-content']['about-content'];

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const botHeader = document.querySelectorAll('.main-content .bottom-content .text-content h4');
botHeader[0].innerHTML = siteContent['main-content']['services-h4'];
botHeader[1].innerHTML = siteContent['main-content']['product-h4'];
botHeader[2].innerHTML = siteContent['main-content']['vision-h4'];

const botPara = document.querySelectorAll('.main-content .bottom-content .text-content p');
botPara[0].innerHTML = siteContent['main-content']['services-content'];
botPara[1].innerHTML = siteContent['main-content']['product-content'];
botPara[2].innerHTML = siteContent['main-content']['vision-content'];

const contactHead = document.querySelector('.contact h4');
contactHead.innerHTML = siteContent['contact']['contact-h4'];

const contactPara = document.querySelectorAll('.contact p')
contactPara[0].innerHTML = siteContent['contact']['address'];
contactPara[1].innerHTML = siteContent['contact']['phone'];
contactPara[2].innerHTML = siteContent['contact']['email'];

const foot = document.querySelector('footer p');
foot.innerHTML = siteContent['footer']['copyright'];

const navFront = document.createElement('A');
const text = document.createTextNode('Hello!');
navFront.appendChild(text);

document.querySelector('nav').prepend(navFront);

const navBack = document.createElement('A');
const backText = document.createTextNode('Bye!');
navBack.appendChild(backText);

document.querySelector('nav').append(navBack);
anchorColor = document.querySelectorAll('nav a');
anchorColor[0].style.color = 'green';
anchorColor[1].style.color = 'green';
anchorColor[2].style.color = 'green';
anchorColor[3].style.color = 'green';
anchorColor[4].style.color = 'green';
anchorColor[5].style.color = 'green';
anchorColor[6].style.color = 'green';
anchorColor[7].style.color = 'green';