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


const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV Bar 

const navBar = document.querySelectorAll('a');
navBar.forEach((element, i) => {
  element.textContent = siteContent['nav'][`nav-item-${i + 1}`];
  element.style.color = 'green';
})

// let navBar = document.querySelectorAll("nav");
//   for(let i = 0; i < siteContent.nav.length; i++){
//     navBar.children[i].innerhtml = siteContent["nav"][i];
//     navBar.children[i].style.color = "green";
//   }


let dom = document.querySelector('.cta-text h1');
dom.textContent = siteContent.cta.h1

let button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button

let circleImg = document.querySelector('#cta-img');
circleImg.src = siteContent.cta["img-src"];

let mainContent = document.querySelectorAll('.text-content h4');
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-h4"];

let mainP = document.querySelectorAll('.text-content p');
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent[""]




let midImg = document.querySelector('#middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];





// use white space css +\n to make a line break in JS.
// let newAddress = address1 + '\n' + address2;
// contactP[0].textContent = newAddress;
// contactP[0].style.whiteSpace = 'preWrap';

// contactP[0].textContent = address1;
// contactP[1].textContent = siteContent.contact.phone;
// contactP[1].textContent = siteContent.contact.email;
