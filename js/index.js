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
// initialization comment
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//set nav
let nav = document.querySelector('nav');

nav.children[0].textContent = siteContent["nav"]["nav-item-1"];
nav.children[0].style.color = "green"
nav.children[1].textContent = siteContent["nav"]["nav-item-2"];
nav.children[1].style.color = "green"
nav.children[2].textContent = siteContent["nav"]["nav-item-3"];
nav.children[2].style.color = "green"
nav.children[3].textContent = siteContent["nav"]["nav-item-4"];
nav.children[3].style.color = "green"
nav.children[4].textContent = siteContent["nav"]["nav-item-5"];
nav.children[4].style.color = "green"
nav.children[5].textContent = siteContent["nav"]["nav-item-6"];
nav.children[5].style.color = "green"


let links = nav.querySelector('a');
let linkClone = links.cloneNode(true);
linkClone.innerHTML = 'Blog';
linkClone.href = "#"
document.querySelector("nav").appendChild(linkClone)

let linkClone2 = links.cloneNode(true);
linkClone2.innerHTML = 'Complaints';
linkClone2.href = "#";
document.querySelector("nav").prepend(linkClone2)


//set cta
let cta = document.querySelector('.cta');
let textPortion = cta.querySelector('.cta-text');
textPortion.querySelector('h1').textContent = siteContent['cta']['h1'];
textPortion.querySelector('button').textContent = siteContent['cta']['button'];

let ctaImg = cta.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main page

//top content segment
let topContent = document.querySelector('.top-content')

let textContent = topContent.querySelector('.text-content');
textContent.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
textContent.querySelector('p').textContent = siteContent['main-content']['features-content'];

//about segment
let textContentAbout = topContent.querySelector('.text-content:nth-child(2)');
textContentAbout.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
textContentAbout.querySelector('p').textContent = siteContent['main-content']['about-content'];

//middle of page image segment
let mainContent = document.querySelector('.main-content');
let middleImg = mainContent.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// bottom content segment 

let bottomContent = document.querySelector('.bottom-content');

//services segment
let textContentServices = bottomContent.querySelector('.text-content');
textContentServices.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
textContentServices.querySelector('p').innerHTML = siteContent['main-content']['services-content'];

//product segment
let textContentProducts = bottomContent.querySelector('.text-content:nth-child(2)');
textContentProducts.querySelector('h4').innerHTML = siteContent['main-content']['product-h4'];
textContentProducts.querySelector('p').innerHTML = siteContent['main-content']['product-content'];

//vision segment
let textContentVision = bottomContent.querySelector('.text-content:last-child');
textContentVision.querySelector('h4').innerHTML = siteContent['main-content']['vision-h4'];
textContentVision.querySelector('p').innerHTML = siteContent['main-content']['vision-content'];

//contact segment
let contact = document.querySelector('.contact');
let contactH4 = contact.querySelector('h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];

let contactAddr = contact.querySelector('p');
contactAddr.innerHTML = siteContent['contact']['address'];

let contactTele = contact.querySelector('p:nth-child(3)');
contactTele.innerHTML = siteContent['contact']['phone'];

let contactEmail = contact.querySelector('p:nth-child(4)');
contactEmail.innerHTML = siteContent['contact']['email']

//footer segment
let footer = document.querySelector('footer');
let footerP = footer.querySelector('p');
footerP.innerHTML = siteContent['footer']['copyright'];