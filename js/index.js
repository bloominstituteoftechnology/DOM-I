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



const navLinks = document.querySelectorAll('nav a');
for (let i = 0; i <navLinks.length; i++){
const navTexts = Object.values(siteContent.nav)
navLinks[i].textContent = navTexts[i]
navLinks[i].style.color ='green'
}

// for first section= cta
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

const secButton = document.querySelector('.cta-text button');
secButton.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src',siteContent['cta']['img-src']);


const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// for second section= main-content
const sectionHeader = document.querySelectorAll('.main-content h4');
sectionHeader[0].textContent = siteContent['main-content']['features-h4'];
sectionHeader[1].textContent = siteContent['main-content']['about-h4'];
sectionHeader[2].textContent = siteContent['main-content']['services-h4'];
sectionHeader[3].textContent = siteContent['main-content']['product-h4'];
sectionHeader[4].textContent = siteContent['main-content']['vision-h4'];

const sectionParagraph = document.querySelectorAll('.main-content p');
sectionParagraph[0].textContent = siteContent['main-content']['features-content'];
sectionParagraph[1].textContent = siteContent['main-content']['about-content'];
sectionParagraph[2].textContent = siteContent['main-content']['services-content'];
sectionParagraph[3].textContent = siteContent['main-content']['product-content'];
sectionParagraph[4].textContent = siteContent['main-content']['vision-content'];


// for third Content= contact
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].textContent = siteContent['contact']['address'];
contactParagraph[1].textContent = siteContent['contact']['phone'];
contactParagraph[2].textContent = siteContent['contact']['email'];

// for fourth content= footer

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']; 


// adding new content=element
const newNav = document.querySelector('nav')

// const firstNewLink = document.createElement('a')
// firstNewLink.href = '#GoLambda'; //or firstNewLink.setAttribute('href', '#');
// firstNewLink.textContent = 'GoLambda';
// firstNewLink.style.color = 'green'
// newNav.appendChild(firstNewLink);

const secondNewLink = document.createElement('a')
secondNewLink.href = '#SchoolLife' //or secondNewLink.setAttribute('href', '#')
secondNewLink.textContent = 'SchoolLife'
secondNewLink.style.color = 'green'
newNav.prependChild(secondNewLink)

// const newNav = document.querySelector('nav')
// newNav.prependChild(firstNewLink)
// newNav.appendChild(secondNewLink)

