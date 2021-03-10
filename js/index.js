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
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"])
//NAV and HEADER stuff 
const headerNav = document.querySelectorAll('a');

  headerNav[0].textContent = siteContent["nav"]["nav-item-1"];
  headerNav[1].textContent = siteContent["nav"]["nav-item-2"];
  headerNav[2].textContent = siteContent["nav"]["nav-item-3"];
  headerNav[3].textContent = siteContent["nav"]["nav-item-4"];
  headerNav[4].textContent = siteContent["nav"]["nav-item-5"];
  headerNav[5].textContent = siteContent["nav"]["nav-item-6"];

const head = document.querySelector('nav');
const Prepended = document.createElement('a');
const Appended = document.createElement('a');

Prepended.textContent = 'This is prepended';
Appended.textContent = 'this is appended';

head.prepend(Prepended);
head.append(Appended)

headerNav.forEach(e => (e.style.color = "green"));
Appended.style.color = 'green';
Appended.style.fontWeight = 'bold';

Prepended.style.color = 'green';
Prepended.style.fontWeight = 'bold';

//CTA 

let h1 = document.querySelector('h1');
let button = document.querySelector('button');
let ctaImg = document.querySelector('#cta-img');

  h1.innerHTML = siteContent['cta']['h1'];

  button.textContent = siteContent['cta']['button']

  ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main content

let SectionContents = document.querySelectorAll('p')

  SectionContents[0].textContent = siteContent ['main-content']['features-content'];
  SectionContents[1].textContent = siteContent ['main-content']['about-content'];
  SectionContents[2].textContent = siteContent ['main-content']['services-content'];
  SectionContents[3].textContent = siteContent ['main-content']['product-content'];
  SectionContents[4].textContent = siteContent ['main-content']['vision-content'];


let h4 = document.querySelectorAll('h4')

  h4[0].textContent = siteContent['main-content']['features-h4'];
  h4[1].textContent = siteContent['main-content']['about-h4'];
  h4[2].textContent = siteContent['main-content']['services-h4'];
  h4[3].textContent = siteContent['main-content']['product-h4'];
  h4[4].textContent = siteContent['main-content']['vision-h4'];

let midIMG = document.querySelector('.middle-img')
midIMG.setAttribute('src', siteContent['main-content']['middle-img-src']);


//CONTACT

let contactheader = document.querySelectorAll('h4');
 contactheader[5].textContent = siteContent["contact"]["contact-h4"];

let contactinfo = document.querySelectorAll('p');
  contactinfo[5].textContent = siteContent ['contact']['address']
  contactinfo[6].textContent = siteContent ['contact']['phone']
  contactinfo[7].textContent = siteContent ['contact']['email']
  
//FOOTER

let footer = document.querySelectorAll('p')
  footer[8].textContent = siteContent['footer']['copyright']