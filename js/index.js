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
  "whole-page": "design-files/desktop-example.png"
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// navbar
let navItem1 = document.getElementsByTagName('a')[0];
navItem1.innerHTML = siteContent['nav']['nav-item-1'];
navItem1.style.color = 'green';

let navItem2 = document.getElementsByTagName('a')[1];
navItem2.innerHTML = siteContent['nav']['nav-item-2'];
navItem2.style.color = 'green';

let navItem3 = document.getElementsByTagName('a')[2];
navItem3.innerHTML = siteContent['nav']['nav-item-3'];
navItem3.style.color = 'green';

let navItem4 = document.getElementsByTagName('a')[3];
navItem4.innerHTML = siteContent['nav']['nav-item-4'];
navItem4.style.color = 'green';

let navItem5 = document.getElementsByTagName('a')[4];
navItem5.innerHTML = siteContent['nav']['nav-item-5'];
navItem5.style.color = 'green';

let navItem6 = document.getElementsByTagName('a')[5];
navItem6.innerHTML = siteContent['nav']['nav-item-6'];
navItem6.style.color = 'green';

let topHeader = document.getElementsByTagName('h1')[0];
topHeader.innerHTML = siteContent['cta']['h1'];

let btn = document.getElementsByTagName('button')[0];
btn.innerHTML = siteContent['cta']['button'];

let h4Top1 = document.getElementsByTagName('h4')[0];
h4Top1.innerHTML = siteContent['main-content']['features-h4'];

let h4Top2 = document.getElementsByTagName('h4')[1];
h4Top2.innerHTML = siteContent['main-content']['about-h4'];

let h4Top3 = document.getElementsByTagName('h4')[2];
h4Top3.innerHTML = siteContent['main-content']['services-h4'];

let h4Top4 = document.getElementsByTagName('h4')[3];
h4Top4.innerHTML = siteContent['main-content']['product-h4'];

let h4Top5 = document.getElementsByTagName('h4')[4];
h4Top5.innerHTML = siteContent['main-content']['vision-h4'];

let pTop1 = document.getElementsByTagName('p')[0];
pTop1.innerHTML = siteContent['main-content']['features-content'];

let pTop2 = document.getElementsByTagName('p')[1];
pTop2.innerHTML = siteContent['main-content']['about-content'];

let pTop3 = document.getElementsByTagName('p')[2];
pTop3.innerHTML = siteContent['main-content']['services-content'];

let pTop4 = document.getElementsByTagName('p')[3];
pTop4.innerHTML = siteContent['main-content']['product-content'];

let pTop5 = document.getElementsByTagName('p')[4];
pTop5.innerHTML = siteContent['main-content']['vision-content'];

let h4Top6 = document.getElementsByTagName('h4')[5];
h4Top6.innerHTML = siteContent['contact']['contact-h4'];

let pTop6 = document.getElementsByTagName('p')[5];
pTop6.innerHTML = siteContent['contact']['address'];

let pTop7 = document.getElementsByTagName('p')[6];
pTop7.innerHTML = siteContent['contact']['phone'];

let pTop8 = document.getElementsByTagName('p')[7];
pTop8.innerHTML = siteContent['contact']['email'];

let footerP = document.getElementsByTagName('p')[8];
// footerP.innerHTML = "Copyright Great Idea! 2018";

footerP.innerHTML = siteContent.footer.copyright;

let newAnchor = document.createElement('a');
newAnchor.innerHTML = 'Hire Us';
newAnchor.style.color = 'green';

let homeAnchor = document.createElement('a');
homeAnchor.innerHTML = 'Home';
homeAnchor.style.color = 'green';

let navDiv = document.querySelector('nav');
navDiv.appendChild(newAnchor);
navDiv.prepend(homeAnchor);



