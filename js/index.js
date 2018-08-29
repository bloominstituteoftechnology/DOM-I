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
    "h1": "DOM <br>Is<br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
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

//Nav-Bar
let nav = document.querySelectorAll('a');
for( let i = 0; i < nav.length; i++ ) {
  nav[i].setAttribute('href', siteContent["nav"][`nav-item-${i+1}`] + '.html');
  nav[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
  nav[i].style.color = 'green';
}

//nav-bar appendages
const navAppend = document.createElement('a');
navAppend.setAttribute('href','Appendage.html');
navAppend.innerHTML= 'Appendage';
navAppend.style.color ='green';

//nav-bar prependage
const navPrep = document.createElement('a');
navPrep.setAttribute('href', 'begin.html');
navPrep.innerHTML = 'begin';
navPrep.style.color ='green';

// calling the nav-bar appendage and prependage.
nav = document.querySelector('nav')
nav.appendChild(navAppend);
nav.prepend(navPrep);


//IMGS
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// CTA content

let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent.cta['h1'];
ctaHeader.style.fontSize = '70px';
ctaHeader.style.color = 'dodgerBlue';


let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent.cta['button'];

//top & Bottom main-content

let textH4 = document.querySelectorAll('.text-content h4');
let textP = document.querySelectorAll('.text-content p');

textH4[0].innerHTML = siteContent['main-content']['features-h4'];
textP[0].innerHTML = siteContent['main-content'] ['features-content'];

textH4[1].innerHTML = siteContent['main-content']['about-h4'];
textP[1].innerHTML = siteContent['main-content'] ['about-content'];

textH4[2].innerHTML = siteContent['main-content']['services-h4'];
textP[2].innerHTML = siteContent['main-content'] ['services-content'];

textH4[3].innerHTML = siteContent['main-content']['product-h4'];
textP[3].innerHTML = siteContent['main-content'] ['product-content'];

textH4[4].innerHTML = siteContent['main-content']['vision-h4'];
textP[4].innerHTML = siteContent['main-content'] ['vision-content'];

//footer

const footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer'] ['copyright'];
