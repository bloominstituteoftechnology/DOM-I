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

// Task One

const image1 = document.getElementById('cta-img');
image1.setAttribute("src", siteContent['cta']['img-src'])

const image2 = document.getElementById('middle-img');
image2.setAttribute("src", siteContent ['main-content']['middle-img-src']) 

// Task Two
const newLinks = Array.from(document.querySelectorAll('a'));
let linkName = 'nav-item-';
let counter = 1;
newLinks.forEach(link => {
  link.style.color = 'green';
  link.textContent = siteContent['nav'][linkName + counter++]
})


const newH1 = document.querySelector('h1');
newH1.textContent = siteContent['cta']['h1'];

const newButton = document.querySelector('button');
newButton.textContent = siteContent['cta']['button'];

const h4s = ['features-h4', 'about-h4', 'services-h4', 'product-h4', 'vision-h4']
const newH4 = Array.from(document.querySelectorAll('h4'));
for (i=0; i<newH4.length; i++) {
  newH4[i].textContent = siteContent ['main-content'][h4s[i]]
}

const ps = ['features-content', 'about-content', 'services-content', 'product-content', 'vision-content'];
const newP = Array.from(document.querySelectorAll('p'));
for (i=0; i<newH4.length; i++) {
  newP[i].textContent = siteContent ['main-content'][ps[i]]
}


const newContactH4 = document.querySelector('.contact h4')
newContactH4.textContent = siteContent ['contact'] ['contact-h4']

const newContactInfo = Array.from(document.querySelectorAll('.contact p'))
let contactPs = ['address', 'email', 'phone']
for (i=0; i< newContactInfo.length; i++) {
  newContactInfo[i].textContent = siteContent['contact'][contactPs[i]]
}

// task 3
let nav = document.querySelector('nav');

let newLink1 = document.createElement('a');
newLink1.setAttribute('src', '#');
newLink1.textContent = "Link1";
newLink1.style.color = 'green';
nav.prepend(newLink1);

let newLink2 = document.createElement('a')
newLink2.setAttribute('src', '#');
newLink2.textContent = "Link2";
newLink2.style.color = 'green';
nav.append(newLink2);

const newFooter = document.querySelector('footer p');
newFooter.textContent = siteContent['footer']['copyright']


