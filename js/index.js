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

// Nav Links 
let headerNavLinks = document.querySelectorAll('header nav a');
headerNavLinks[0].textContent = 'Services';
headerNavLinks[1].textContent = 'Product';
headerNavLinks[2].textContent = 'Vision';
headerNavLinks[3].textContent = 'About';
headerNavLinks[4].textContent = 'Features';
headerNavLinks[5].textContent = 'Contact';

let headerImg = document.querySelector('header img');
headerImg.src = 'img/logo.png';

// cta 
let ctaH1 = document.querySelector('h1');
ctaH1.innerHTML = 'DOM <br> Is <br> Awesome';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started';

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

// main content 
let topContentHeading = document.querySelectorAll('.top-content h4');
topContentHeading[0].textContent = 'Features';
topContentHeading[1].textContent = 'About';

let topContentParagraph = document.querySelectorAll('.top-content p');
topContentParagraph[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topContentParagraph[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

let bottomHeading = document.querySelectorAll('.bottom-content h4');
bottomHeading[0].textContent = 'Services';
bottomHeading[1].textContent = 'Product';
bottomHeading[2].textContent = 'Vision';

let bottomParagraph = document.querySelectorAll('.bottom-content p');
bottomParagraph[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomParagraph[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomParagraph[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// contact 
let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = 'Contact';

let contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
contactParagraphs[1].textContent = '1 (888) 888-8888';
contactParagraphs[2].textContent = 'sales@greatidea.io';

// footer 
let footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = 'Copyright Great Idea! 2018';

// New content 
// headerNavLinks[0].style.color = 'green';
// headerNavLinks[1].style.color = 'green';
// headerNavLinks[2].style.color = 'green';
// headerNavLinks[3].style.color = 'green';
// headerNavLinks[4].style.color = 'green';
// headerNavLinks[5].style.color = 'green';

headerNavLinks.forEach((greenColor) =>{
  return greenColor.style.color = 'green';
})

// // 5- Creating new elements and appending them
// // make the element
// const newBlogLink = document.createElement('a')
// // give it text (if applies)
// newBlogLink.textContent = 'Blog'
// // set its attributes
// newBlogLink.href = '#'
// // append to an existing element in the DOM
// nav.appendChild(newBlogLink)

let nav = document.querySelector('header nav');

let navAppend = document.createElement('a');
navAppend.textContent = 'Blurple';
navAppend.href = '#';
nav.appendChild(navAppend);

let navPrepend = document.createElement('a');
navPrepend.textContent = 'Potato';
navPrepend.href = '#';
nav.prepend(navPrepend);