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

//------------------------------------------------------------------------

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// link text (links will hold the anchor elements before the append/prepend)
const linkText = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
let links = document.querySelectorAll('a');
links.forEach((link, i) => link.innerText = linkText[i]);

// cta content
const ctaHeader = document.querySelector('.cta .cta-text h1');
ctaHeader.innerHTML = 'DOM<br> Is<br> Awesome';

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = 'Get Started';

const ctaImg = document.getElementById('cta-img');
ctaImg.src = 'img/header-img.png';

// h4 text
const h4Text = ['Features', 'About', 'Services', 'Product', 'Vision', 'Contact'];
const h4Elements = document.querySelectorAll('h4');
h4Elements.forEach((element, i) => element.innerText = h4Text[i]);

// main content p text
const mainContentPText = [
  'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
];
const mainContentP =  document.querySelectorAll('.main-content p');
mainContentP.forEach((para, i) => para.innerText = mainContentPText[i]);

//middle image
const middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

//contact text
const contactText = [
  '123 Way 456 Street<br>Somewhere, USA',
  '1 (888) 888-8888',
  'sales@greatidea.io'
];
const contactP = document.querySelectorAll('.contact p');
contactP.forEach((para, i) => para.innerHTML = contactText[i]);

//footer text
const footerElement = document.querySelector('footer p');
footerElement.innerText = 'Copyright Great Idea! 2018';

//new nav elements
const newLink1 = document.createElement('a');
newLink1.innerText = 'Blog';
newLink1.href = '#';

const newLink2 = document.createElement('a'); 
newLink2.innerText = 'Welcome';
newLink2.href = '#';

const navElement = document.getElementsByTagName('nav');
navElement[0].prepend(newLink2);
navElement[0].append(newLink1);
links = document.querySelectorAll('a'); // reassign links to include append/prepend
links.forEach((link) => link.style.color = 'green');


//stretch changes
const htmlPage = document.getElementsByTagName('html');
htmlPage[0].style.cursor = 'grab';

let counter = setInterval(cursorFunction, 500);

function cursorFunction() {
  if(htmlPage[0].style.cursor === 'grab'){
    htmlPage[0].style.cursor = 'grabbing';
  } else {
    htmlPage[0].style.cursor = 'grab';
  }
}

ctaButton.addEventListener('click', buttonClick);

function buttonClick() {
  if(htmlPage[0].style.filter === 'invert(0%)'){
    htmlPage[0].style.filter = 'invert(100%)';
    htmlPage[0].style.background = 'black';
  } else {
    htmlPage[0].style.filter = 'invert(0%)';
    htmlPage[0].style.background = 'none';
  }
}



