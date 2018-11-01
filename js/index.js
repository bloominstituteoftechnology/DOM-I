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
let imgLogo = document.getElementById("logo-img");
let imgCta = document.getElementById('cta-img');
let imgMiddle = document.getElementById('middle-img');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('a');
let headTitle = document.querySelector('h1');
let button = document.querySelector('button');
let mainContentTitle = document.querySelectorAll('.main-content h4');
let mainContentText = document.querySelectorAll('.main-content p');
let contact = document.querySelector('.contact');
let footer = document.querySelector('footer p');

// --Set images--
imgLogo.setAttribute('src', siteContent["nav"]["img-src"]);
imgCta.setAttribute('src', siteContent['cta']['img-src']);
imgMiddle.setAttribute('src', siteContent["main-content"]['middle-img-src']);
// --------------

// --Set link content--
links.forEach((link, index) => {
  link.textContent = siteContent['nav'][`nav-item-${index + 1}`];
  link.style.color = 'green';
});
// --------------------

// --Add new a tags--
const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a');

newNav1.textContent = 'Sign-up';
newNav2.textContent = 'Sign-in';

nav.prepend(newNav1);
nav.appendChild(newNav2);
// ------------------

// --Header content--
button.addEventListener('click', () => headTitle.style.color = 'pink'); //Stretch click listener

headTitle.innerHTML = siteContent['cta']['h1'].split(' ').join('<br/>');
button.textContent = siteContent['cta']['button'];
// ------------------

// --Set content in the Main Section--
let mcArray = Object.keys(siteContent['main-content']).filter(key => key.includes('h4') || key.includes('content'));
for(let i = 0; i < mcArray.length; i+=2) {
  mainContentTitle[i/2].textContent = siteContent['main-content'][mcArray[i]];
  mainContentText[i/2].textContent = siteContent['main-content'][mcArray[i+1]];
}
// -----------------------------------

// --Set content for Contact Section--
let contactArray = Object.keys(siteContent['contact']);
siteContent['contact'][contactArray[1]] = siteContent['contact'][contactArray[1]].split('6 ').join('6<br>');
for(let i = 0; i < contactArray.length; i ++) {
  contact.children[i].innerHTML = siteContent['contact'][contactArray[i]];
}
// -----------------------------------

// --Footer--
footer.textContent = siteContent['footer']['copyright'];