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


const navigation = document.querySelector('nav');
const links = document.querySelectorAll('a');
const imgs = document.querySelectorAll('img');
const button = document.querySelector('button');
const h1Tag = document.querySelector('h1');
const h4S = document.querySelectorAll('h4');
const pTag = document.querySelectorAll('p');

const mainNav = Object.values(siteContent['nav']);
for (let i = 0; i < mainNav.length - 1; i++) {
  links[i].textContent = mainNav[i];
}

links.forEach(Link => Link.style.color = 'green');

imgs[1].src = siteContent['cta']['img-src'];
imgs[2].src = siteContent['main-content']['middle-img-src'];

h1Tag.innerHTML = 'DOM<br> Is<br> Awesome';
button.textContent = siteContent['cta']['button'];

h4S[0].textContent = siteContent['main-content']['features-h4'];
pTag[0].textContent = siteContent['main-content']['features-content'];

h4S[1].textContent = siteContent['main-content']['about-h4'];
pTag[1].textContent = siteContent['main-content']['about-content'];

h4S[2].textContent = siteContent['main-content']['services-h4'];
pTag[2].textContent = siteContent['main-content']['services-content'];

h4S[3].textContent = siteContent['main-content']['product-h4'];
pTag[3].textContent = siteContent['main-content']['product-content'];

h4S[4].textContent = siteContent['main-content']['vision-h4'];
pTag[4].textContent = siteContent['main-content']['vision-content'];

h4S[5].textContent = siteContent['contact']['contact-h4'];

pTag[5].textContent = siteContent['contact']['address'];
pTag[6].textContent = siteContent['contact']['phone'];
pTag[7].textContent = siteContent['contact']['email'];
pTag[8].textContent = siteContent['footer']['copyright'];

const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
blogLink.style.color = 'green';
navigation.appendChild(blogLink);

const learnLink = document.createElement('a');
learnLink.textContent = 'Learn';
learnLink.href = '#';
learnLink.style.color = 'green';
navigation.prepend(learnLink);