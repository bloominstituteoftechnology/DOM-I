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

//nav content
// let navigation = document.querySelector('nav');
// navigation.innerText = siteContent.nav["nav-item-1"];
// navigation.append(siteContent.nav["nav-item-2"]);
// navigation.append(siteContent.nav["nav-item-3"]);
// navigation.append(siteContent.nav["nav-item-4"]);
// navigation.append(siteContent.nav["nav-item-5"]);
let mainNavigation = document.querySelectorAll('nav a');
mainNavigation.forEach((attribute, i) => {
  attribute.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})

//top content
let topContentImg = document.getElementById("cta-img");
topContentImg.setAttribute('src', siteContent['cta']['img-src']);

let headingTop = document.querySelector('h1');
headingTop.innerHTML = siteContent.cta.h1;

let buttonTop = document.querySelector('button');
buttonTop.innerHTML = siteContent.cta.button;

//Main content
// let mainContent = document.querySelector('p');
// let mainContentHeading = document.querySelector('h4');

// mainContentHeading.innerText = siteContent["main-content"]["features-h4"];
// mainContent.innerText = siteContent["main-content"]["features-content"];
let mainContent = document.querySelectorAll('.text-content');
mainContent[0].getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContent[0].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["features-content"];
mainContent[1].getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["about-h4"];
mainContent[1].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["about-content"];
mainContent[2].getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["services-h4"];
mainContent[2].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["services-content"];
mainContent[3].getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["product-h4"];
mainContent[3].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["product-content"];
mainContent[4].getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["vision-h4"];
mainContent[4].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["vision-content"];
  
  // mainContent[i].getElementsByTagName('p')[i].innerHTML = siteContent[main-content][i+1];



let middleImg = document.getElementById('middle-img');;
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactContent =  document.querySelectorAll('.contact');
contactContent[0].getElementsByTagName('h4')[0].innerHTML = siteContent["contact"]["contact-h4"];
contactContent[0].getElementsByTagName('p')[0].innerHTML = siteContent["contact"]["address"];
contactContent[0].getElementsByTagName('p')[1].innerHTML = siteContent["contact"]["phone"];
contactContent[0].getElementsByTagName('p')[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.getElementsByTagName('p')[0].innerHTML = siteContent["footer"]["copyright"];