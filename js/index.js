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

// Update the img src for all images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Update the a tag in the nav bar
const aTags = document.querySelectorAll('header nav a');
aTags.forEach((tag, index) => {
  const element = 'nav-item-' + (index+1);
  tag.textContent = siteContent['nav'][element];
  //Changing the text color of the links to green
  tag.style.color = 'green';
});


// Update the header title
const  headerTitle = document.querySelector('.cta .cta-text h1');
headerTitle.textContent = siteContent['cta']['h1'];

// Update button in header
const button = document.querySelector('.cta .cta-text button');
button.textContent = siteContent['cta']['button'];

// Update the main content - Top content
// Update headers h4
const topH4 = document.querySelectorAll('.main-content .top-content h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];

// update paragraphs p
const topContent = document.querySelectorAll('.main-content .top-content p');
topContent[0].textContent = siteContent['main-content']['features-content'];
topContent[1].textContent = siteContent['main-content']['about-content'];

// Update the main content - Bottom content
// Update headers h4
const bottomH4 = document.querySelectorAll('.main-content .bottom-content h4');
bottomH4[0].textContent = siteContent['main-content']['services-h4'];
bottomH4[1].textContent = siteContent['main-content']['product-h4'];
bottomH4[2].textContent = siteContent['main-content']['vision-h4'];


// update paragraphs p
const bottomContent = document.querySelectorAll('.main-content .bottom-content p');
bottomContent[0].textContent = siteContent['main-content']['services-content'];
bottomContent[1].textContent = siteContent['main-content']['product-content'];
bottomContent[2].textContent = siteContent['main-content']['vision-content'];

// Update the contact section
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

// Update the footer section
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

// Create two new links
const newLink1 = document.createElement('a');
newLink1.href = '#';
newLink1.textContent = 'Login/Sign Up';
newLink1.style.color = 'green';

const newLink2 = document.createElement('a');
newLink2.href = '#';
newLink2.textContent = 'Home';
newLink2.style.color = 'green';

// Adding the two new links to the nav bar
const nav = document.querySelector('nav');

nav.appendChild(newLink1);
nav.prepend(newLink2);